#!/usr/bin/env python3
"""Fix single-quoted strings that contain apostrophes in school dialogue files."""

import re
from pathlib import Path

SCHOOL_DIR = Path(__file__).parent.parent / "src" / "data" / "school"

apostrophe_pattern = re.compile(r"en:\s*'([^']*'[^']*)'")

for f in sorted(SCHOOL_DIR.glob("*.ts")):
    if f.name == "index.ts":
        continue
    content = f.read_text(encoding="utf-8")
    original = content

    def fix_match(m):
        inner = m.group(1)
        # Escape any double quotes in the inner text (unlikely but safe)
        inner = inner.replace('"', '\\"')
        return f'en: "{inner}"'

    content = apostrophe_pattern.sub(fix_match, content)

    if content != original:
        f.write_text(content, encoding="utf-8")
        print(f"Fixed {f.name}")
    else:
        print(f"OK {f.name}")
