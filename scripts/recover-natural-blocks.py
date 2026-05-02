#!/usr/bin/env python3
"""Recover natural blocks from stash and re-insert them with correct syntax."""

import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).parent.parent
SCHOOL_DIR = ROOT / "src" / "data" / "school"
STASH_COMMIT = "58735f56c16f1eb234a07d0bb8adbd0f44eb484e"


def get_stash_file(path: Path) -> str:
    """Read a file from the stash commit."""
    rel = path.relative_to(ROOT).as_posix()
    result = subprocess.run(
        ["git", "show", f"{STASH_COMMIT}:{rel}"],
        capture_output=True,
        text=True,
        encoding="utf-8",
        cwd=ROOT,
    )
    if result.returncode != 0:
        raise RuntimeError(f"Failed to read {rel} from stash: {result.stderr}")
    return result.stdout


def extract_natural_blocks(content: str) -> dict:
    """Extract natural blocks from corrupted file content.
    
    Returns a dict mapping dialogue_id -> list of {speaker, en} dicts.
    """
    blocks = {}
    
    # Find all dialogue objects
    # Pattern to match id and then capture everything up to the closing },
    dialogue_pattern = re.compile(
        r"id:\s*['\"]([^'\"]+)['\"].*?turns:\s*\[.*?\]\s*,\s*natural:\s*\[(.*?)\]\s*\}",
        re.DOTALL,
    )
    
    for m in dialogue_pattern.finditer(content):
        dialogue_id = m.group(1)
        natural_content = m.group(2)
        
        turns = []
        # Extract individual turn lines
        # Handle various quote patterns
        turn_pattern = re.compile(
            r"\{\s*speaker:\s*['\"]([^'\"]+)['\"]\s*,\s*en:\s*['\"](.*?)['\"]\s*\}",
            re.DOTALL,
        )
        
        for tm in turn_pattern.finditer(natural_content):
            speaker = tm.group(1)
            en_text = tm.group(2)
            # Clean up any escaped quotes
            en_text = en_text.replace('\\"', '"')
            turns.append({"speaker": speaker, "en": en_text})
        
        if turns:
            blocks[dialogue_id] = turns
    
    return blocks


def format_natural_block(turns: list) -> str:
    """Format a natural block with correct TypeScript syntax."""
    lines = ["    natural: ["]
    for t in turns:
        en = t["en"]
        speaker = t["speaker"]
        # Use double quotes for en if it contains an apostrophe
        if "'" in en:
            # Escape any double quotes in the text
            en_escaped = en.replace('"', '\\"')
            en_repr = f'"{en_escaped}"'
        else:
            en_repr = f"'{en}'"
        lines.append(f"      {{ speaker: '{speaker}', en: {en_repr} }},")
    lines.append("    ]},")
    return "\n".join(lines)


def insert_natural_blocks(clean_content: str, blocks: dict) -> str:
    """Insert natural blocks into clean file content."""
    
    def replacer(m):
        dialogue_id = m.group(1)
        if dialogue_id not in blocks:
            return m.group(0)
        
        natural_block = format_natural_block(blocks[dialogue_id])
        # m.group(0) is the full match ending with },
        # We need to insert natural block before the closing },
        # The match is: id: '...', scenario: '...', turns: [...],
        # We want to add natural: [...] before the final },
        
        # m.group(0) ends with the closing }, of the dialogue object
        # Replace the final }, with natural block + },
        base = m.group(0)
        # Remove trailing },
        if base.rstrip().endswith("},"):
            base = base.rstrip()[:-2].rstrip()
        elif base.rstrip().endswith("}"):
            base = base.rstrip()[:-1].rstrip()
        
        return base + "\n" + natural_block + "\n  "
    
    # Pattern to match a dialogue object that doesn't already have natural
    pattern = re.compile(
        r"(\{\s*id:\s*['\"]([^'\"]+)['\"]\s*,\s*scenario:\s*['\"][^'\"]+['\"]\s*,\s*turns:\s*\[.*?\]\s*,\s*)(\}\s*,)",
        re.DOTALL,
    )
    
    return pattern.sub(replacer, clean_content)


def process_file(filename: str):
    clean_path = SCHOOL_DIR / filename
    clean_content = clean_path.read_text(encoding="utf-8")
    
    try:
        stash_content = get_stash_file(clean_path)
    except RuntimeError as e:
        print(f"SKIP {filename}: {e}")
        return
    
    blocks = extract_natural_blocks(stash_content)
    if not blocks:
        print(f"WARN No natural blocks found in stash for {filename}")
        return
    
    new_content = insert_natural_blocks(clean_content, blocks)
    
    if new_content != clean_content:
        clean_path.write_text(new_content, encoding="utf-8")
        print(f"OK {filename} — inserted {len(blocks)} natural blocks")
    else:
        print(f"WARN No changes for {filename}")


def main():
    files = [
        "art-room.ts",
        "classroom.ts",
        "computer-room.ts",
        "gym.ts",
        "hallway-locker.ts",
        "lost-property.ts",
        "lunch-hall.ts",
        "music-room.ts",
        "playground.ts",
        "principal-office.ts",
        "school-bathroom.ts",
        "school-bus.ts",
        "school-library.ts",
        "school-nurse.ts",
        "science-lab.ts",
    ]
    
    for filename in files:
        process_file(filename)


if __name__ == "__main__":
    main()
