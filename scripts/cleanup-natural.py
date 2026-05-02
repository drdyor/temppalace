#!/usr/bin/env python3
"""Clean up common artifacts in generated natural dialogue blocks."""

import re
from pathlib import Path

SCHOOL_DIR = Path(__file__).parent.parent / "src" / "data" / "school"

FIXES = [
    # Remove trailing punctuation artifacts from removed "please"
    (r"en: '([^']*), \\.'", r"en: '\1.'"),
    (r'en: "([^"]*), \\."', r'en: "\1."'),
    (r"en: '([^']*) \\.'", r"en: '\1.'"),
    (r'en: "([^"]*) \\."', r'en: "\1."'),
    # Fix capitalization after "I guess It'll" -> "I guess it'll"
    (r"I guess It'll", "I guess it'll"),
    (r"I think It'll", "I think it'll"),
    # Add period to sentences missing one
    # Only for short casual sentences that should end with period
]


def cleanup_file(path: Path):
    content = path.read_text(encoding="utf-8")
    original = content
    
    for pattern, replacement in FIXES:
        content = re.sub(pattern, replacement, content)
    
    if content != original:
        path.write_text(content, encoding="utf-8")
        print(f"Fixed {path.name}")
    else:
        print(f"OK {path.name}")


def main():
    for f in sorted(SCHOOL_DIR.glob("*.ts")):
        if f.name == "index.ts":
            continue
        cleanup_file(f)


if __name__ == "__main__":
    main()
