import re

with open('src/data/rooms.ts', 'r', encoding='utf-8') as f:
    content = f.read()

rooms = re.findall(r"id:\s*'([\w-]+)'\s*,\s*name:\s*'([^']+)'\s*,\s*subtitle:\s*'([^']+)'", content)
print(f'Total rooms: {len(rooms)}')
for rid, rname, sub in rooms:
    print(f'  {rid}: {rname} ({sub})')
