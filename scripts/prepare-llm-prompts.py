#!/usr/bin/env python3
"""
Prepare LLM prompts for generating English A1-A2 zone dialogues.

Usage:
    python scripts/prepare-llm-prompts.py
    # Outputs: llm-prompts.json
"""

import json
import re
from pathlib import Path

ROOMS_FILE = Path(__file__).parent.parent / "src" / "data" / "rooms.ts"
STORIES_FILE = Path(__file__).parent.parent / "src" / "data" / "zone-stories.ts"
OUTPUT_FILE = Path(__file__).parent.parent / "llm-prompts.json"

SYSTEM_PROMPT = """You are a language learning content writer. Write a natural A1-A2 level English conversation for a memory palace language learning app.

RULES:
- Exactly 10 exchanges (lines of dialogue)
- Two speakers: "You" and "Friend" (or context-appropriate like "Barista", "Doctor")
- Simple present tense, common vocabulary, short sentences (1-2 sentences max)
- The conversation must naturally use ALL vocabulary words listed below
- Setting: {room_name} ({room_native})
- Topic: {topic}
- Tone: friendly, everyday, realistic

OUTPUT FORMAT (strict JSON, no markdown):
{{"zoneId":"{zone_id}","zoneName":"{zone_name}","level":"a2","exchanges":[{{"speaker":"You","en":"..."}},{{"speaker":"Friend","en":"..."}}]}}

VOCABULARY WORDS TO INCLUDE NATURALLY: {vocab}"""


def parse_zones():
    text = ROOMS_FILE.read_text(encoding="utf-8")
    zones = []
    
    # Find all objects that have interiorImage or interiorVocab (these are zones, not rooms)
    # A zone looks like: { id: 'fridge', name: 'The Fridge', nameNative: "...", description: '...', interiorVocab: [...] }
    pattern = r"\{\s*id:\s*'([^']+)'\s*,\s*name:\s*'([^']+)'\s*,\s*nameNative:\s*['\"]([^'\"]+)['\"]\s*,\s*description:\s*'([^']+)'"
    
    for m in re.finditer(pattern, text):
        zid = m.group(1)
        zname = m.group(2)
        znative = m.group(3)
        zdesc = m.group(4)
        
        # Get the body of this object (from { to matching })
        start = m.start()
        # Find the matching closing brace by counting
        brace_count = 0
        end = start
        for i in range(start, len(text)):
            if text[i] == '{':
                brace_count += 1
            elif text[i] == '}':
                brace_count -= 1
                if brace_count == 0:
                    end = i
                    break
        
        body = text[start:end+1]
        
        # Only keep if it has interiorVocab (rooms don't have this)
        if 'interiorVocab' not in body:
            continue
            
        vocab = re.findall(r"wordId:\s*'([^']+)'", body)
        
        # Find which room this zone belongs to by looking backwards
        before = text[:start]
        room_match = None
        for rm in re.finditer(r"id:\s*'([^']+)'\s*,\s*\n\s*name:\s*'([^']+)'\s*,\s*\n\s*subtitle:", before):
            room_match = rm
        
        if room_match:
            room_id = room_match.group(1)
            room_name = room_match.group(2)
        else:
            room_id = "unknown"
            room_name = "Unknown"
        
        zones.append({
            "zoneId": zid,
            "zoneName": zname,
            "zoneNative": znative,
            "description": zdesc,
            "roomId": room_id,
            "roomName": room_name,
            "vocab": vocab,
        })
    
    return zones


def get_existing_zones():
    if not STORIES_FILE.exists():
        return set()
    text = STORIES_FILE.read_text(encoding="utf-8")
    keys = re.findall(r'"([^"]+)":\s*\{', text)
    zones = set()
    for k in keys:
        zones.add(k.replace("_a2", "").replace("_b1", ""))
    return zones


def main():
    print("Parsing rooms.ts...")
    zones = parse_zones()
    print(f"Found {len(zones)} zones with interiorVocab.")

    existing = get_existing_zones()
    print(f"Found {len(existing)} zones with existing stories.")

    missing = [z for z in zones if z["zoneId"] not in existing]
    print(f"Missing stories: {len(missing)} zones")

    prompts = []
    for z in missing:
        prompt = SYSTEM_PROMPT.format(
            zone_id=z["zoneId"],
            zone_name=z["zoneName"],
            room_name=z["roomName"],
            room_native=z["zoneNative"],
            topic=z["description"],
            vocab=", ".join(z["vocab"]),
        )
        prompts.append({
            "zoneId": z["zoneId"],
            "zoneName": z["zoneName"],
            "vocab": z["vocab"],
            "systemPrompt": prompt,
            "userPrompt": f"Write the conversation for zone '{z['zoneName']}' ({z['roomName']}). Return only the JSON object.",
        })

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(prompts, f, ensure_ascii=False, indent=2)

    print(f"\nWrote {len(prompts)} prompts to: {OUTPUT_FILE}")
    for p in prompts[:20]:
        print(f"  - {p['zoneId']}: {p['zoneName']} ({len(p['vocab'])} words)")
    if len(prompts) > 20:
        print(f"  ... and {len(prompts)-20} more")


if __name__ == "__main__":
    main()
