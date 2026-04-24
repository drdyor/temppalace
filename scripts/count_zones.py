import re

with open('src/data/rooms.ts', 'r', encoding='utf-8') as f:
    content = f.read()

room_blocks = re.split(r"(?=\{\s*id:\s*'\w+',\s*name:\s*')", content)
total_zones = 0
for block in room_blocks:
    m = re.search(r"id:\s*'([\w-]+)'\s*,\s*name:\s*'([^']+)'", block)
    if not m:
        continue
    rid, rname = m.groups()
    zones = re.findall(r"id:\s*'([\w-]+)'\s*,\s*name:\s*'([^']+)'\s*,\s*nameNative:", block)
    if zones:
        print(f'{rid}: {len(zones)} zones')
        total_zones += len(zones)

print(f'\nTotal zones: {total_zones}')
