#!/usr/bin/env python3
"""Get a second opinion from Ollama API on Classroom English source."""

import urllib.request
import json
import re

# Read the classroom data
with open("src/data/school/classroom.ts", "r", encoding="utf-8") as f:
    source = f.read()

# Extract vocab
vocab_items = []
for m in re.finditer(r"id: '([^']+)'.*?en: \{ word: '([^']+)'(?:.*?phrase: '([^']+)'.*?context: '([^']+)')?", source, re.DOTALL):
    vocab_items.append(f"- {m.group(2)}: \"{m.group(3) or ''}\" ({m.group(4) or ''})")

# Extract dialogue scenarios
dialogues = []
for m in re.finditer(r"id: '([^']+)'.*?scenario: '([^']+)'", source, re.DOTALL):
    dialogues.append(f"- {m.group(1)}: {m.group(2)}")

prompt = f"""You are an expert English teacher for migrant children aged 6-12 (CEFR A1).

Review this classroom vocabulary and dialogue list. Be brief. Bullet points only.

VOCABULARY ({len(vocab_items)} items):
{chr(10).join(vocab_items[:40])}
{chr(10).join(vocab_items[40:])}

DIALOGUES ({len(dialogues)} scenarios):
{chr(10).join(dialogues)}

Answer these 4 questions with bullet points:
1. Which words/phrases are TOO HARD for A1? (be specific)
2. Which phrases sound UNNATURAL or textbook-y? (be specific)
3. What ESSENTIAL classroom words are MISSING? (list top 10)
4. Overall: PASS / NEEDS_MINOR_FIX / NEEDS_MAJOR_WORK"""

payload = json.dumps({
    "model": "qwen3:8b",
    "prompt": prompt,
    "stream": False,
    "options": {"temperature": 0.3, "num_predict": 1500}
}).encode("utf-8")

req = urllib.request.Request(
    "http://localhost:11434/api/generate",
    data=payload,
    headers={"Content-Type": "application/json"},
    method="POST"
)

print("Sending to Qwen3:8b...")
with urllib.request.urlopen(req, timeout=180) as resp:
    data = json.loads(resp.read().decode("utf-8"))
    print(data.get("response", "No response"))
