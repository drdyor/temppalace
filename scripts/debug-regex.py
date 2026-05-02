import re

content = open('src/data/school/art-room.ts', encoding='utf-8').read()
idx = content.find("id: 'art-what-colour'")
print(repr(content[idx-20:idx+300]))

# Try simpler regex
pattern = re.compile(r"id:\s*'([^']+)'.*?turns:\s*\[(.*?)\]\s*\},", re.DOTALL)
matches = list(pattern.finditer(content))
print(f"\nFound {len(matches)} matches with simpler regex")
for m in matches:
    print("  id:", m.group(1))
