#!/usr/bin/env python3
"""Fix quote corruption in school dialogue files caused by a buggy regex."""

import re
from pathlib import Path

SCHOOL_DIR = Path(__file__).parent.parent / "src" / "data" / "school"

def fix_line(line: str) -> str:
    # Fix id: "xxx'  -> id: 'xxx'
    line = re.sub(r"id:\s*\"([^\"']+)'", r"id: '\1'", line)
    
    # Fix scenario: "xxx' -> scenario: 'xxx'
    line = re.sub(r"scenario:\s*\"([^\"']+)'", r"scenario: '\1'", line)
    
    # Fix speaker: "xxx' -> speaker: 'xxx'
    line = re.sub(r"speaker:\s*\"([^\"']+)'", r"speaker: '\1'", line)
    
    # Fix en: "xxx' -> either en: 'xxx' or en: "xxx" depending on content
    # Match en: "...text...'
    def fix_en(m):
        text = m.group(1)
        if "'" in text:
            # Contains apostrophe, keep double quotes
            return f'en: "{text}"'
        else:
            # No apostrophe, use single quotes
            return f"en: '{text}'"
    
    line = re.sub(r'en:\s*"([^"]*)\'', fix_en, line)
    
    return line


def process_file(path: Path):
    content = path.read_text(encoding="utf-8")
    original = content
    lines = content.split("\n")
    fixed_lines = [fix_line(line) for line in lines]
    content = "\n".join(fixed_lines)
    
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
