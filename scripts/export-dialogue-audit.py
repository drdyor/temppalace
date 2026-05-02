#!/usr/bin/env python3
"""Export all school dialogues (formal + natural) to a markdown file for human audit."""

import re
from pathlib import Path

ROOT = Path(__file__).parent.parent
SCHOOL_DIR = ROOT / "src" / "data" / "school"
OUT = ROOT / "SCHOOL_DIALOGUE_AUDIT.md"


def extract_speaker(en_line: str) -> str:
    m = re.search(r"speaker:\s*['\"]([^'\"]+)['\"]", en_line)
    return m.group(1) if m else "?"


def extract_en(en_line: str) -> str:
    m = re.search(r"en:\s*['\"](.*?)['\"]\s*\}", en_line)
    return m.group(1) if m else "?"


def parse_dialogues(content: str) -> list:
    """Parse dialogue objects from file content."""
    dialogues = []
    
    # Find each dialogue block
    dialogue_pattern = re.compile(
        r"id:\s*['\"]([^'\"]+)['\"]\s*,\s*scenario:\s*['\"]([^'\"]+)['\"]",
        re.DOTALL,
    )
    
    for m in dialogue_pattern.finditer(content):
        dialogue_id = m.group(1)
        scenario = m.group(2)
        
        # Find the turns and natural arrays for this dialogue
        # Start searching from the dialogue id position
        start = m.start()
        
        # Find turns array
        turns_match = re.search(
            r"turns:\s*\[(.*?)\]\s*,?\s*",
            content[start:start+3000],
            re.DOTALL,
        )
        turns_lines = []
        if turns_match:
            turns_text = turns_match.group(1)
            turns_lines = [line.strip() for line in turns_text.split('\n') if 'speaker:' in line and 'en:' in line]
        
        # Find natural array
        natural_match = re.search(
            r"natural:\s*\[(.*?)\]\s*\}",
            content[start:start+3000],
            re.DOTALL,
        )
        natural_lines = []
        if natural_match:
            natural_text = natural_match.group(1)
            natural_lines = [line.strip() for line in natural_text.split('\n') if 'speaker:' in line and 'en:' in line]
        
        dialogues.append({
            'id': dialogue_id,
            'scenario': scenario,
            'turns': turns_lines,
            'natural': natural_lines,
        })
    
    return dialogues


def main():
    lines = [
        "# School Palace Dialogue Audit",
        "",
        "**Formal** = textbook English (A1 learner layer)",
        "**Natural** = colloquial spoken English (real-world layer)",
        "",
        "---",
        "",
    ]
    
    files = sorted(SCHOOL_DIR.glob("*.ts"))
    
    for f in files:
        if f.name == "index.ts":
            continue
        
        content = f.read_text(encoding="utf-8")
        dialogues = parse_dialogues(content)
        
        if not dialogues:
            continue
        
        room_name = f.stem.replace("-", " ").title()
        lines.append(f"## {room_name}")
        lines.append("")
        
        for d in dialogues:
            lines.append(f"### `{d['id']}` — {d['scenario']}")
            lines.append("")
            lines.append("| Turn | Speaker | Formal | Natural |")
            lines.append("|------|---------|--------|---------|")
            
            max_turns = max(len(d['turns']), len(d['natural']))
            
            for i in range(max_turns):
                formal_line = d['turns'][i] if i < len(d['turns']) else ""
                natural_line = d['natural'][i] if i < len(d['natural']) else ""
                
                formal_speaker = extract_speaker(formal_line)
                formal_en = extract_en(formal_line)
                natural_speaker = extract_speaker(natural_line)
                natural_en = extract_en(natural_line)
                
                # If speakers differ, flag it
                speaker = formal_speaker if formal_speaker != "?" else natural_speaker
                speaker_cell = f"**{speaker}**" if formal_speaker != natural_speaker and natural_speaker != "?" else speaker
                
                turn_num = i + 1
                lines.append(f"| {turn_num} | {speaker_cell} | {formal_en} | {natural_en} |")
            
            lines.append("")
        
        lines.append("---")
        lines.append("")
    
    OUT.write_text("\n".join(lines), encoding="utf-8")
    print(f"Audit written to {OUT}")
    print(f"Total rooms: {len([f for f in files if f.name != 'index.ts'])}")


if __name__ == "__main__":
    main()
