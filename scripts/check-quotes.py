import re
from pathlib import Path

school_dir = Path('src/data/school')
for f in sorted(school_dir.glob('*.ts')):
    if f.name == 'index.ts':
        continue
    content = f.read_text(encoding='utf-8')
    lines = content.split('\n')
    for i, line in enumerate(lines, 1):
        if 'en:' not in line:
            continue
        # Find the part after en:
        idx = line.find('en:')
        rest = line[idx + 3:].lstrip()
        if not rest:
            continue
        first_quote = rest[0]
        if first_quote not in ("'", '"'):
            continue
        # Check if the line ends with the matching quote
        # Look for the closing quote before the comma/brace
        m = re.search(r"en:\s*([\"'])(.*?)\1", line)
        if not m:
            print(f"{f.name}:{i}: possible mismatched quotes: {line.strip()}")
