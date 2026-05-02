from pathlib import Path
for f in sorted(Path('src/data/school').glob('*.ts')):
    if f.name == 'index.ts':
        continue
    content = f.read_text(encoding='utf-8')
    has = 'natural:' in content
    print(f'{f.name}: {"HAS" if has else "NO"} natural')
