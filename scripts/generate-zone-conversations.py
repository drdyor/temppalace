#!/usr/bin/env python3
"""
Generate Italian zone conversations from English templates using Opus-MT.

License-safe pipeline:
  - English dialogues are original (you own them)
  - Translation via Helsinki-NLP/opus-mt-en-it (CC-BY 4.0, commercially usable with attribution)
  - Output formatted for src/data/zone-stories.ts

Usage:
  python scripts/generate-zone-conversations.py
  # Outputs: src/data/zone-stories-generated.ts
"""

import json
import os
import sys
from pathlib import Path

try:
    from transformers import AutoTokenizer, AutoModelForSeq2SeqLM, pipeline
except ImportError:
    print("ERROR: transformers not installed. Run: pip install transformers torch")
    sys.exit(1)

# ── Configuration ────────────────────────────────────────────────────────────
MODEL_NAME = "Helsinki-NLP/opus-mt-en-it"
OUTPUT_FILE = Path(__file__).parent.parent / "src" / "data" / "zone-stories-generated.ts"

# A1–A2 English dialogues for the 8 zones that currently lack stories.
# These are original templates — you own the copyright to the English source.
ENGLISH_DIALOGUES = {
    # ── PIAZZA ───────────────────────────────────────────────────────────────
    "fontana-piazza_a2": {
        "zoneId": "fontana-piazza",
        "zoneName": "The Fountain",
        "level": "a2",
        "exchanges": [
            {"speaker": "Tu", "en": "Hi! How are you today?"},
            {"speaker": "Amico", "en": "I am well, thank you. And you?"},
            {"speaker": "Tu", "en": "I am a little tired. I was working all morning."},
            {"speaker": "Amico", "en": "That is hard! Do you have time to stay here for a moment?"},
            {"speaker": "Tu", "en": "Yes, I have ten minutes. The water in this fountain is beautiful."},
            {"speaker": "Amico", "en": "It is. I come here every day. It makes me feel calm."},
            {"speaker": "Tu", "en": "I want to give you a small gift. Here, some fresh fruit."},
            {"speaker": "Amico", "en": "Thank you! That is very kind. Shall we sit?"},
            {"speaker": "Tu", "en": "Yes, let us sit and talk. I have many things to tell you."},
            {"speaker": "Amico", "en": "Me too. I want to tell you about my trip to Rome."},
        ]
    },
    "bar-piazza_a2": {
        "zoneId": "bar-piazza",
        "zoneName": "The Bar",
        "level": "a2",
        "exchanges": [
            {"speaker": "Barista", "en": "Good morning! What do you want to drink?"},
            {"speaker": "Tu", "en": "I want a coffee and a croissant, please."},
            {"speaker": "Barista", "en": "Do you want it here or to take away?"},
            {"speaker": "Tu", "en": "Here, please. Can I also have a glass of water?"},
            {"speaker": "Barista", "en": "Of course. You must try our new sweet cake too."},
            {"speaker": "Tu", "en": "I should not, but... yes, I will take a small piece."},
            {"speaker": "Barista", "en": "Excellent choice. Where do you want to put your bag?"},
            {"speaker": "Tu", "en": "I will put it here, under the chair. How much is everything?"},
            {"speaker": "Barista", "en": "Five euros. Do you need a receipt?"},
            {"speaker": "Tu", "en": "No, thank you. Keep the change."},
        ]
    },
    "fermata-piazza_a2": {
        "zoneId": "fermata-piazza",
        "zoneName": "Bus Stop",
        "level": "a2",
        "exchanges": [
            {"speaker": "Tu", "en": "Excuse me, does this bus go to the train station?"},
            {"speaker": "Amico", "en": "Yes, it goes there directly. I am going there too."},
            {"speaker": "Tu", "en": "When does it arrive? I have been waiting ten minutes."},
            {"speaker": "Amico", "en": "It should arrive soon. I came here at eight and it was on time."},
            {"speaker": "Tu", "en": "I need to leave before noon. My train departs at half past twelve."},
            {"speaker": "Amico", "en": "Do not worry. You will arrive with time to spare."},
            {"speaker": "Tu", "en": "Thank you. I am returning home after three weeks here."},
            {"speaker": "Amico", "en": "Really? I hope you come back soon. This city is beautiful."},
            {"speaker": "Tu", "en": "I will come back next summer. I love Italy."},
            {"speaker": "Amico", "en": "Here comes the bus now! Let us get on."},
        ]
    },
    "panchina-piazza_a2": {
        "zoneId": "panchina-piazza",
        "zoneName": "Park Bench",
        "level": "a2",
        "exchanges": [
            {"speaker": "Tu", "en": "What do you say about this book? I think it is very good."},
            {"speaker": "Amico", "en": "I speak only a little about books. But I see that you like it."},
            {"speaker": "Tu", "en": "Yes, the writer knows how to tell a story. Do you know him?"},
            {"speaker": "Amico", "en": "I know the name, but I have not read his books."},
            {"speaker": "Tu", "en": "You should read them. I understand many new words thanks to him."},
            {"speaker": "Amico", "en": "I understand. I need to read more in Italian."},
            {"speaker": "Tu", "en": "Look, there is the author now! He is walking in the park."},
            {"speaker": "Amico", "en": "Where? I do not see him. Oh yes, now I see!"},
            {"speaker": "Tu", "en": "He is very famous. Everyone knows him in this city."},
            {"speaker": "Amico", "en": "I see. Let us say hello if he comes closer."},
        ]
    },
    # ── CALENDARIO ───────────────────────────────────────────────────────────
    "settimana_a2": {
        "zoneId": "settimana",
        "zoneName": "The Week",
        "level": "a2",
        "exchanges": [
            {"speaker": "Tu", "en": "Let us look at the calendar. What day is it today?"},
            {"speaker": "Amico", "en": "Today is Wednesday. The middle of the week."},
            {"speaker": "Tu", "en": "On Monday I work in the morning. On Tuesday I study Italian."},
            {"speaker": "Amico", "en": "On Thursday I go to the gym. On Friday I see my friends."},
            {"speaker": "Tu", "en": "Saturday and Sunday are my favourite days. I rest and sleep a lot."},
            {"speaker": "Amico", "en": "I prefer Friday. I finish work and I feel free."},
            {"speaker": "Tu", "en": "Do you also work on Saturday sometimes?"},
            {"speaker": "Amico", "en": "Never on Saturday. I always keep Saturday for my family."},
            {"speaker": "Tu", "en": "That is a good rule. On Sunday I like to walk in the park."},
            {"speaker": "Amico", "en": "Me too. Sunday is perfect for long walks and good food."},
        ]
    },
    "mesi_a2": {
        "zoneId": "mesi",
        "zoneName": "The Months",
        "level": "a2",
        "exchanges": [
            {"speaker": "Tu", "en": "In what month were you born?"},
            {"speaker": "Amico", "en": "I was born in March. And you?"},
            {"speaker": "Tu", "en": "I was born in July, in the middle of summer."},
            {"speaker": "Amico", "en": "My brother was born in January. It was very cold."},
            {"speaker": "Tu", "en": "My favourite months are May and September. The weather is nice."},
            {"speaker": "Amico", "en": "I love August because I always go to the sea."},
            {"speaker": "Tu", "en": "In October and November the leaves become yellow and red."},
            {"speaker": "Amico", "en": "Yes, autumn is beautiful here. But I do not like December. It is too dark."},
            {"speaker": "Tu", "en": "Really? I like December because of Christmas and the lights."},
            {"speaker": "Amico", "en": "That is true. In February there is also a nice carnival in this city."},
        ]
    },
    "stagioni_a2": {
        "zoneId": "stagioni",
        "zoneName": "The Seasons",
        "level": "a2",
        "exchanges": [
            {"speaker": "Tu", "en": "Which season do you like the most?"},
            {"speaker": "Amico", "en": "I like spring. The flowers come out and the days become longer."},
            {"speaker": "Tu", "en": "Spring is nice, but I prefer summer. I love the sun and the heat."},
            {"speaker": "Amico", "en": "In summer I go to the beach every weekend. The water is perfect."},
            {"speaker": "Tu", "en": "Autumn is good for reading books and drinking hot tea."},
            {"speaker": "Amico", "en": "Yes, but in autumn it rains a lot. I do not like rain."},
            {"speaker": "Tu", "en": "What about winter? Do you ski?"},
            {"speaker": "Amico", "en": "I do not ski, but I like winter for Christmas and the snow in the mountains."},
            {"speaker": "Tu", "en": "Every season has something beautiful. I want to travel in all four."},
            {"speaker": "Amico", "en": "That is a wonderful idea. Let us plan a trip for next spring."},
        ]
    },
    "avverbi-tempo_a2": {
        "zoneId": "avverbi-tempo",
        "zoneName": "Today & Tomorrow",
        "level": "a2",
        "exchanges": [
            {"speaker": "Tu", "en": "What time is it now? I think I am late."},
            {"speaker": "Amico", "en": "It is ten o'clock now. You are not late."},
            {"speaker": "Tu", "en": "Good. Today I have a lot of work. Yesterday I rested all day."},
            {"speaker": "Amico", "en": "And tomorrow? Do you have plans?"},
            {"speaker": "Tu", "en": "Tomorrow I will visit my grandmother. I always visit her on Fridays."},
            {"speaker": "Amico", "en": "That is sweet. I never have time to see my family."},
            {"speaker": "Tu", "en": "You should find time. After work, before dinner, even for five minutes."},
            {"speaker": "Amico", "en": "You are right. Later I will call my mother."},
            {"speaker": "Tu", "en": "Do it now! It is never too late to say hello."},
            {"speaker": "Amico", "en": "Yes, you are right. I will call her right now."},
        ]
    },
}


def load_translator():
    """Load the Opus-MT English→Italian model."""
    print(f"Loading translation model: {MODEL_NAME}")
    print("(First run will download ~300MB to ~/.cache/huggingface)")
    tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
    model = AutoModelForSeq2SeqLM.from_pretrained(MODEL_NAME)
    return pipeline("translation", model=model, tokenizer=tokenizer)


def translate_dialogue(translator, dialogue_key: str, dialogue: dict) -> dict:
    """Translate every English exchange to Italian."""
    print(f"  Translating {dialogue_key}...")
    translated = {
        "zoneId": dialogue["zoneId"],
        "zoneName": dialogue["zoneName"],
        "level": dialogue["level"],
        "exchanges": [],
    }
    for ex in dialogue["exchanges"]:
        result = translator(ex["en"], max_length=128)[0]["translation_text"]
        translated["exchanges"].append({
            "speaker": ex["speaker"],
            "it": result,
            "en": ex["en"],
        })
    return translated


def format_ts_zone_story(key: str, story: dict) -> str:
    """Format a single zone story as TypeScript."""
    lines = [f'  "{key}": {{']
    lines.append(f'    zoneId: "{story["zoneId"]}",')
    lines.append(f'    zoneName: "{story["zoneName"]}",')
    lines.append(f'    level: "{story["level"]}",')
    lines.append(f'    exchanges: [')
    for ex in story["exchanges"]:
        it_escaped = ex["it"].replace('"', '\\"')
        en_escaped = ex["en"].replace('"', '\\"')
        lines.append(f'      {{ speaker: "{ex["speaker"]}", it: "{it_escaped}", en: "{en_escaped}" }},')
    lines.append(f'    ]')
    lines.append(f'  }},')
    return "\n".join(lines)


def main():
    translator = load_translator()

    print(f"\nTranslating {len(ENGLISH_DIALOGUES)} dialogues...")
    translated_stories = {}
    for key, dialogue in ENGLISH_DIALOGUES.items():
        translated_stories[key] = translate_dialogue(translator, key, dialogue)

    # Write TypeScript output
    ts_parts = [
        "// AUTO-GENERATED by scripts/generate-zone-conversations.py",
        "// DO NOT EDIT MANUALLY — re-run the script instead.",
        "//",
        "// Translation: Helsinki-NLP/opus-mt-en-it (CC-BY 4.0)",
        "// English source: original templates (proprietary, you own them)",
        "//",
        "// To use: merge these entries into src/data/zone-stories.ts",
        "",
        "export const generatedZoneStories: Record<string, any> = {",
    ]
    for key, story in translated_stories.items():
        ts_parts.append(format_ts_zone_story(key, story))
    ts_parts.append("};")

    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write("\n".join(ts_parts))

    print(f"\n✅ Done! Output written to:\n   {OUTPUT_FILE}")
    print(f"\nNext steps:")
    print(f"  1. Review the Italian translations for naturalness")
    print(f"  2. Copy the entries into src/data/zone-stories.ts")
    print(f"  3. Commit and push")

    # Also write a JSON version for easier inspection
    json_path = OUTPUT_FILE.with_suffix(".json")
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(translated_stories, f, ensure_ascii=False, indent=2)
    print(f"   JSON preview saved to: {json_path}")


if __name__ == "__main__":
    main()
