import json
import re

with open('audit-results-italian.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for item in data:
    audit = item.get('audit', '')
    m = re.search(r'STATUS:\s*(PASS|NEEDS_FIX|MAJOR_ISSUE)', audit)
    if m:
        status = m.group(1)
    elif '10/10' in audit and 'None' in audit:
        status = 'PASS'
    else:
        status = 'UNCLEAR'

    if status != 'PASS':
        print(f"{item['id']}: {status}")
        print(f"  {audit[:300]}")
        print()
