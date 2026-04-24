#!/usr/bin/env python3
"""
Prepare Italian audit prompts for Minerva (or any local LLM).

Reads zone-stories.ts and think-like.ts, extracts Italian content,
and generates structured audit prompts. Feed these to your local
Italian-trained model via Ollama.

Usage:
    python scripts/audit-italian.py
    # Outputs: audit-prompts-italian.json
    
    # Then batch-audit via Ollama:
    python scripts/audit-italian.py --batch --model minerva
"""

import json
import re
import argparse
from pathlib import Path

try:
    import requests
except ImportError:
    requests = None

PROJECT_ROOT = Path(__file__).parent.parent
OLLAMA_URL = "http://localhost:11434/api/generate"

AUDIT_SYSTEM_PROMPT = """You are an expert Italian language teacher and native speaker. 
Your job is to audit Italian text written for A1-A2 language learners.

Check for:
1. NATURALNESS — Does this sound like something a real Italian would say?
2. REGISTER — Is the tu/Lei form used consistently and appropriately?
3. LEVEL — Is the grammar appropriate for A1-A2? (No complex subjunctive, no literary forms)
4. ACCURACY — Any grammar, spelling, or vocabulary errors?
5. ANGLICISMS — Are there English constructions awkwardly translated into Italian?

For each item, respond in this exact format:

```
STATUS: PASS | NEEDS_FIX | MAJOR_ISSUE
NATURALNESS: 1-10
REGISTER: Correct / Inconsistent / Wrong
LEVEL: Appropriate / Too hard / Too easy
ISSUES: [list any problems, or "None"]
SUGGESTED_FIX: [rewrite the problematic text, or "No changes needed"]
NOTES: [any additional comments]
```

Be strict but fair. A1-A2 Italian should be simple, warm, and conversational."""


def extract_zone_stories_italian():
    """Extract Italian exchanges from zone-stories.ts."""
    file_path = PROJECT_ROOT / "src" / "data" / "zone-stories.ts"
    if not file_path.exists():
        print(f"Warning: {file_path} not found")
        return []
    
    text = file_path.read_text(encoding="utf-8")
    
    # Find each story block
    stories = []
    for match in re.finditer(r'"([^"]+)":\s*\{', text):
        key = match.group(1)
        start = match.start()
        # Find end of this block (next top-level key or closing brace)
        end = text.find('\n  "', start + 1)
        if end == -1:
            end = text.find('\n};', start)
        if end == -1:
            end = len(text)
        
        block = text[start:end]
        
        # Extract Italian exchanges
        exchanges = []
        for ex in re.finditer(r'\{\s*speaker:\s*"([^"]+)",\s*it:\s*"([^"]+)"', block):
            exchanges.append({
                "speaker": ex.group(1),
                "italian": ex.group(2),
            })
        
        if exchanges:
            stories.append({
                "id": key,
                "type": "zone-story",
                "content": exchanges,
            })
    
    return stories


def extract_think_like_italian():
    """Extract Italian content from think-like.ts."""
    file_path = PROJECT_ROOT / "src" / "data" / "think-like.ts"
    if not file_path.exists():
        print(f"Warning: {file_path} not found")
        return []
    
    text = file_path.read_text(encoding="utf-8")
    
    items = []
    # Look for Italian text in parallels and examples
    for match in re.finditer(r'id:\s*\'([^\']+)\'', text):
        lesson_id = match.group(1)
        
        # Find the block
        start = match.start()
        end = text.find("},", start)
        if end == -1:
            end = len(text)
        block = text[start:end]
        
        # Extract Italian parallels
        it_texts = []
        for it_match in re.finditer(r"lang:\s*'it'.*?text:\s*'([^']+)'", block):
            it_texts.append(it_match.group(1))
        
        if it_texts:
            items.append({
                "id": lesson_id,
                "type": "think-like",
                "content": it_texts,
            })
    
    return items


def format_audit_prompt(item: dict) -> dict:
    """Convert an item into an audit prompt."""
    if item["type"] == "zone-story":
        dialogue = "\n".join([f"{ex['speaker']}: {ex['italian']}" for ex in item["content"]])
        context = f"Zone story '{item['id']}' — A1-A2 dialogue:"
    else:
        dialogue = "\n".join([f"- {text}" for text in item["content"]])
        context = f"Think Like lesson '{item['id']}' — reference Italian text:"
    
    user_prompt = f"""{context}

{dialogue}

Please audit this Italian text for A1-A2 learners."""

    return {
        "id": item["id"],
        "type": item["type"],
        "systemPrompt": AUDIT_SYSTEM_PROMPT,
        "userPrompt": user_prompt,
    }


def generate_prompts():
    zone_stories = extract_zone_stories_italian()
    think_like = extract_think_like_italian()
    
    all_items = zone_stories + think_like
    prompts = [format_audit_prompt(item) for item in all_items]
    
    output_file = PROJECT_ROOT / "audit-prompts-italian.json"
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(prompts, f, ensure_ascii=False, indent=2)
    
    print(f"Generated {len(prompts)} audit prompts:")
    print(f"  - Zone stories: {len(zone_stories)}")
    print(f"  - Think Like lessons: {len(think_like)}")
    print(f"\nSaved to: {output_file}")
    print("\nNext steps:")
    print("  1. Start Ollama: ollama serve")
    print("  2. Run: python scripts/audit-italian.py --batch --model minerva")
    print("  3. Review results in: audit-results-italian.json")


def batch_audit(model: str, delay: float):
    if not requests:
        print("ERROR: requests not installed. Run: pip install requests")
        return
    
    input_file = PROJECT_ROOT / "audit-prompts-italian.json"
    if not input_file.exists():
        print(f"ERROR: {input_file} not found. Run without --batch first.")
        return
    
    with open(input_file, "r", encoding="utf-8") as f:
        prompts = json.load(f)
    
    results = []
    errors = []
    
    print(f"Auditing {len(prompts)} items via {model}...")
    for i, p in enumerate(prompts, 1):
        print(f"  [{i}/{len(prompts)}] {p['id']}...", end=" ", flush=True)
        try:
            payload = {
                "model": model,
                "system": p["systemPrompt"],
                "prompt": p["userPrompt"],
                "stream": False,
                "options": {"temperature": 0.3, "num_predict": 800},
            }
            resp = requests.post(OLLAMA_URL, json=payload, timeout=120)
            resp.raise_for_status()
            result = resp.json()["response"].strip()
            
            results.append({
                "id": p["id"],
                "type": p["type"],
                "audit": result,
            })
            
            # Quick status from response
            if "MAJOR_ISSUE" in result:
                print("MAJOR")
            elif "NEEDS_FIX" in result:
                print("FIX")
            else:
                print("OK")
        except Exception as e:
            errors.append((p["id"], str(e)))
            print(f"FAIL: {e}")
        
        import time
        time.sleep(delay)
    
    output_file = PROJECT_ROOT / "audit-results-italian.json"
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    
    print(f"\nWrote {len(results)} results to {output_file}")
    if errors:
        print(f"Errors: {len(errors)}")
        for eid, err in errors:
            print(f"  - {eid}: {err}")


def main():
    parser = argparse.ArgumentParser(description="Audit Italian content via local LLM")
    parser.add_argument("--batch", action="store_true", help="Run batch audit via Ollama")
    parser.add_argument("--model", default="minerva", help="Ollama model for batch mode")
    parser.add_argument("--delay", type=float, default=2.0, help="Seconds between requests")
    args = parser.parse_args()
    
    if args.batch:
        batch_audit(args.model, args.delay)
    else:
        generate_prompts()


if __name__ == "__main__":
    main()
