import re

with open('src/data/rooms.ts', 'r', encoding='utf-8') as f:
    rooms = f.read()

# Find room blocks
room_pattern = r"\{\s*id:\s*'([\w-]+)'\s*,\s*name:\s*'([^']+)'"
rooms_found = re.findall(room_pattern, rooms)

# Extract zone IDs: look for id: 'xxx', name: 'YYY' inside zones arrays
# Split by room definitions and extract zones from each
zone_pattern = r"id:\s*'([\w-]+)'\s*,\s*name:\s*'([^']+)'\s*,\s*nameNative:"
zones = re.findall(zone_pattern, rooms)

print(f"Total zones found: {len(zones)}")
for zid, zname in zones[:5]:
    print(f"  {zid}: {zname}")
print("  ...")

with open('src/data/zone-stories.ts', 'r', encoding='utf-8') as f:
    stories = f.read()
with open('src/data/zone-stories-generated.ts', 'r', encoding='utf-8') as f:
    gen = f.read()

story_keys = set(re.findall(r'"([\w-]+_a2)":', stories))
story_keys.update(re.findall(r'"([\w-]+_a2)":', gen))
print(f"\nTotal story keys: {len(story_keys)}")

missing = []
for zid, zname in zones:
    key = zid + '_a2'
    if key not in story_keys:
        missing.append((zid, zname))

print(f"\nMissing stories: {len(missing)}")
for zid, zname in missing:
    print(f"  - {zid}: {zname}")
