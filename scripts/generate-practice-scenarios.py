#!/usr/bin/env python3
"""
Generate practice scenarios for the "Think Like You're [Language]" feature.

Two modes:
  1. PREPARE mode: generates prompt files for manual LLM feeding
  2. BATCH mode: auto-generates via local Ollama API

Usage:
    # Prepare prompts only
    python scripts/generate-practice-scenarios.py --direction en-it --count 20 --mode prepare

    # Auto-generate via Ollama
    python scripts/generate-practice-scenarios.py --direction en-it --count 20 --mode batch --model mistral

    # Merge results into src/data/practice-scenarios.ts
    python scripts/generate-practice-scenarios.py --merge generated-scenarios.json
"""

import json
import argparse
import random
import time
from pathlib import Path

try:
    import requests
except ImportError:
    requests = None

OUTPUT_DIR = Path(__file__).parent.parent / "generated"
OLLAMA_URL = "http://localhost:11434/api/generate"

CATEGORIES = [
    "Identity", "Physical State", "Opinion", "Suggestions", "Actions",
    "Time", "Desire", "Possession", "Existence", "Weather",
    "Description", "Grammar", "Knowledge", "Social", "Food", "Travel"
]

SYSTEM_PROMPT = """You are a language learning content writer. Create a practice scenario for a "Think Like You're {source_name}" quiz.

The scenario must teach {target_name} learners who speak {source_name} natively to avoid a common translation trap.

RULES:
- Write a realistic A1-A2 scenario (1-2 sentences setting the scene)
- Provide a WRONG option that sounds like a literal translation from {source_name}
- Provide a CORRECT option that sounds natural in {target_name}
- The wrong option must be plausible — a real mistake that {source_name} speakers make
- Output strict JSON only

OUTPUT FORMAT:
{{
  "context": "Short scene description",
  "question": "What do you say?",
  "wrongOption": {{
    "text": "The wrong sentence",
    "explanation": "Why {source_name} speakers think this",
    "literalFromSource": "The literal translation from {source_name}"
  }},
  "correctOption": {{
    "text": "The correct natural sentence",
    "explanation": "Why this is right in {target_name}"
  }},
  "grammarPattern": "Name of the grammar point",
  "tip": "One-sentence memory tip",
  "category": "One of: Identity, Physical State, Opinion, Suggestions, Actions, Time, Desire, Possession, Existence, Weather, Description, Grammar, Knowledge, Social, Food, Travel"
}}

Make it fresh and different from common textbook examples."""


def get_direction_config(direction: str):
    configs = {
        'en-it': {'source': 'it', 'target': 'en', 'source_name': 'Italian', 'target_name': 'English'},
        'en-fr': {'source': 'fr', 'target': 'en', 'source_name': 'French', 'target_name': 'English'},
        'en-es': {'source': 'es', 'target': 'en', 'source_name': 'Spanish', 'target_name': 'English'},
        'it-en': {'source': 'en', 'target': 'it', 'source_name': 'English', 'target_name': 'Italian'},
        'fr-en': {'source': 'en', 'target': 'fr', 'source_name': 'English', 'target_name': 'French'},
        'es-en': {'source': 'en', 'target': 'es', 'source_name': 'English', 'target_name': 'Spanish'},
    }
    return configs.get(direction)


def generate_one_ollama(model: str, system: str, user: str) -> dict:
    payload = {
        "model": model,
        "system": system,
        "prompt": user,
        "stream": False,
        "format": "json",
        "options": {"temperature": 0.8, "num_predict": 600}
    }
    resp = requests.post(OLLAMA_URL, json=payload, timeout=120)
    resp.raise_for_status()
    raw = resp.json().get("response", "{}").strip()
    if raw.startswith("```"):
        raw = raw.strip("`").strip()
        if raw.lower().startswith("json"):
            raw = raw[4:].strip()
    return json.loads(raw)


def prepare_prompts(direction: str, count: int):
    cfg = get_direction_config(direction)
    if not cfg:
        raise ValueError(f"Unknown direction: {direction}")

    system = SYSTEM_PROMPT.format(**cfg)
    prompts = []
    for i in range(count):
        cat = random.choice(CATEGORIES)
        user = f"Create scenario {i+1}/{count}. Category: {cat}. Make it original and realistic."
        prompts.append({
            "index": i + 1,
            "category": cat,
            "systemPrompt": system,
            "userPrompt": user,
        })

    out_file = OUTPUT_DIR / f"practice-prompts-{direction}.json"
    out_file.parent.mkdir(exist_ok=True)
    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(prompts, f, ensure_ascii=False, indent=2)
    print(f"Wrote {count} prompts to {out_file}")
    print("Feed each userPrompt to your LLM with the systemPrompt, collect JSON outputs.")


def batch_generate(direction: str, count: int, model: str, delay: float):
    if not requests:
        print("ERROR: requests not installed. Run: pip install requests")
        return

    cfg = get_direction_config(direction)
    if not cfg:
        raise ValueError(f"Unknown direction: {direction}")

    system = SYSTEM_PROMPT.format(**cfg)
    results = []
    errors = []

    print(f"Generating {count} scenarios for {direction} via {model}...")
    for i in range(count):
        cat = random.choice(CATEGORIES)
        user = f"Create scenario {i+1}/{count}. Category: {cat}. Make it original and realistic."
        print(f"  [{i+1}/{count}] {cat}...", end=" ", flush=True)
        try:
            result = generate_one_ollama(model, system, user)
            result["id"] = f"{direction}-gen-{i+1:03d}"
            result["direction"] = direction
            result["sourceLang"] = cfg["source"]
            result["targetLang"] = cfg["target"]
            result["level"] = "a2"
            result["zoneId"] = f"practice-{cat.lower().replace(' ', '-')}"
            results.append(result)
            print("OK")
        except Exception as e:
            errors.append((i+1, str(e)))
            print(f"FAIL: {e}")
        time.sleep(delay)

    out_file = OUTPUT_DIR / f"practice-scenarios-{direction}.json"
    out_file.parent.mkdir(exist_ok=True)
    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

    print(f"\nWrote {len(results)} scenarios to {out_file}")
    if errors:
        print(f"Errors: {len(errors)}")
        for idx, err in errors:
            print(f"  - #{idx}: {err}")


def merge_into_ts(json_file: Path):
    with open(json_file, "r", encoding="utf-8") as f:
        new_scenarios = json.load(f)

    ts_file = Path(__file__).parent.parent / "src" / "data" / "practice-scenarios.ts"
    text = ts_file.read_text(encoding="utf-8")

    # Find the line after "export const practiceScenarios: PracticeScenario[] = seeded;"
    # and append the new scenarios
    insert_point = text.find("export const practiceScenarios: PracticeScenario[] = seeded;")
    if insert_point == -1:
        print("ERROR: Could not find insertion point in practice-scenarios.ts")
        return

    # Generate TS lines for new scenarios
    lines = ["\n// Auto-generated scenarios\nexport const generatedScenarios: PracticeScenario[] = ["]
    for s in new_scenarios:
        lines.append(f"  {json.dumps(s, ensure_ascii=False)},")
    lines.append("];\n")

    new_text = text[:insert_point] + "\n".join(lines) + "\n" + text[insert_point:]
    ts_file.write_text(new_text, encoding="utf-8")
    print(f"Merged {len(new_scenarios)} scenarios into {ts_file}")


def main():
    parser = argparse.ArgumentParser(description="Generate practice scenarios for Think Like feature")
    parser.add_argument("--direction", required=True, help="e.g. en-it, en-fr, it-en")
    parser.add_argument("--count", type=int, default=10, help="Number of scenarios")
    parser.add_argument("--mode", choices=["prepare", "batch", "merge"], default="prepare")
    parser.add_argument("--model", default="mistral", help="Ollama model for batch mode")
    parser.add_argument("--delay", type=float, default=1.0, help="Seconds between Ollama requests")
    parser.add_argument("--merge", type=Path, help="JSON file to merge into practice-scenarios.ts")
    args = parser.parse_args()

    if args.mode == "merge":
        if not args.merge:
            print("ERROR: --merge requires a file path")
            return
        merge_into_ts(args.merge)
        return

    if args.mode == "prepare":
        prepare_prompts(args.direction, args.count)
    elif args.mode == "batch":
        batch_generate(args.direction, args.count, args.model, args.delay)


if __name__ == "__main__":
    main()
