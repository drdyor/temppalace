import re

with open('src/data/zone-stories.ts', 'r', encoding='utf-8') as f:
    stories = f.read()
with open('src/data/zone-stories-generated.ts', 'r', encoding='utf-8') as f:
    gen = f.read()

all_keys = set(re.findall(r'"([\w-]+_a2)":', stories))
all_keys.update(re.findall(r'"([\w-]+_a2)":', gen))

print(f"Total story keys: {len(all_keys)}")
print("\nPiazza/Calendario stories:")
for key in sorted(all_keys):
    if any(x in key for x in ['piazza', 'fontana', 'fermata', 'panchina', 'bar-', 'settimana', 'mesi', 'stagioni', 'tempo']):
        print(f"  {key}")
