#!/usr/bin/env python3
"""Add missing periods to natural block sentences that should have them."""

import re
from pathlib import Path

SCHOOL_DIR = Path(__file__).parent.parent / "src" / "data" / "school"

# Words/phrases that are clearly incomplete without a period when they end a turn
NEEDS_PERIOD = re.compile(
    r"(en:\s*['\"][A-Z][^'\"]*[a-z])['\"]\s*\},"
)


def fix_periods(content: str) -> str:
    """Add period before closing quote if missing."""
    def replacer(m):
        prefix = m.group(1)
        # Don't add period if it already ends with punctuation
        if prefix[-1] in '.!?':
            return m.group(0)
        # Don't add period if it's just a single word (like "Yeah", "Thanks")
        words = prefix.split()
        if len(words) == 1:
            return m.group(0)
        # Don't add period for certain short phrases
        last_word = words[-1].lower()
        if last_word in ('yeah', 'thanks', 'cheers', 'okay', 'ok', 'sorry', 'done'):
            return m.group(0)
        # Add the period
        return prefix + '.' + m.group(0)[len(prefix):]
    
    return NEEDS_PERIOD.sub(replacer, content)


def process_file(path: Path):
    content = path.read_text(encoding="utf-8")
    original = content
    
    # Only process natural blocks
    lines = content.split('\n')
    in_natural = False
    result = []
    for line in lines:
        if 'natural:' in line:
            in_natural = True
        if in_natural:
            line = fix_periods(line)
        if in_natural and line.strip().endswith(']},'):
            in_natural = False
        result.append(line)
    
    content = '\n'.join(result)
    
    if content != original:
        path.write_text(content, encoding="utf-8")
        print(f"Fixed {path.name}")
    else:
        print(f"OK {path.name}")


def main():
    for f in sorted(SCHOOL_DIR.glob("*.ts")):
        if f.name == "index.ts":
            continue
        process_file(f)


if __name__ == "__main__":
    main()
