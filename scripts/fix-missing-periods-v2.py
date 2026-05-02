#!/usr/bin/env python3
"""Add missing periods to natural block sentences that should have them."""

import re
from pathlib import Path

SCHOOL_DIR = Path(__file__).parent.parent / "src" / "data" / "school"


def fix_periods_in_line(line: str) -> str:
    """Add period before closing quote if missing, handling apostrophes in double quotes."""
    # Match en: '...' or en: "..." where text doesn't end with punctuation
    # For single quotes: text can't contain '
    m1 = re.match(r"(.*en:\s*')([^']*[a-z])('.*)", line)
    if m1:
        prefix, text, suffix = m1.groups()
        if not text[-1] in '.!?':
            return prefix + text + "." + suffix
    
    # For double quotes: text can contain ' (apostrophes)
    m2 = re.match(r'(.*en:\s*")([^"]*[a-z])(".*)', line)
    if m2:
        prefix, text, suffix = m2.groups()
        if not text[-1] in '.!?':
            return prefix + text + "." + suffix
    
    return line


def process_file(path: Path):
    content = path.read_text(encoding="utf-8")
    original = content
    
    lines = content.split('\n')
    in_natural = False
    result = []
    for line in lines:
        if 'natural:' in line:
            in_natural = True
        if in_natural and 'en:' in line:
            line = fix_periods_in_line(line)
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
