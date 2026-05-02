#!/usr/bin/env python3
"""Check which natural dialogue blocks are identical to their turns blocks."""

import re
from pathlib import Path

school_dir = Path(__file__).parent.parent / "src" / "data" / "school"

for f in sorted(school_dir.glob("*.ts")):
    if f.name == "index.ts":
        continue
    content = f.read_text(encoding="utf-8")
    dialogues = re.findall(
        r"id:\s*'([^']+)'.*?turns:\s*\[(.*?)\].*?natural:\s*\[(.*?)\]",
        content,
        re.DOTALL,
    )
    identical = 0
    total = len(dialogues)
    for did, turns, natural in dialogues:
        turn_texts = re.findall(r'en:\s*"([^"]+)"', turns)
        if not turn_texts:
            turn_texts = re.findall(r"en:\s*'([^']+)'", turns)
        nat_texts = re.findall(r'en:\s*"([^"]+)"', natural)
        if not nat_texts:
            nat_texts = re.findall(r"en:\s*'([^']+)'", natural)
        if turn_texts == nat_texts:
            identical += 1
            print(f"  {f.name} :: {did} -> IDENTICAL")
    if total > 0:
        print(f"{f.name}: {identical}/{total} identical")
    print()
