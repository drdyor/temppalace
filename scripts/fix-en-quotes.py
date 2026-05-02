#!/usr/bin/env python3
"""Fix en: quote issues in school dialogue files.

Handles cases where apostrophes inside en: strings broke the quoting.
"""

import re
from pathlib import Path

SCHOOL_DIR = Path(__file__).parent.parent / "src" / "data" / "school"


def fix_en_in_line(line: str) -> str:
    """Fix the en: field on a single line."""
    # Find en: in the line
    idx = line.find('en:')
    if idx == -1:
        return line
    
    before = line[:idx]
    after_en = line[idx + 3:].lstrip()
    
    # Extract the quoted text - handle various corruption patterns
    # Pattern 1: en: 'text' (normal)
    # Pattern 2: en: "text" (normal)
    # Pattern 3: en: 'text with apostrophe' (broken - unterminated)
    # Pattern 4: en: 'text" or en: "text' (mismatched)
    
    # Try to extract everything after en: up to the last comma or brace
    # The text is between some kind of quote and before ` },` or ` }`
    
    # Find the first quote after en:
    if not after_en:
        return line
    
    first_char = after_en[0]
    if first_char not in ("'", '"'):
        return line
    
    # Find the trailing part after the string value
    # Look for ` },` or ` }` or `},` at the end
    trailing_match = re.search(r'([,\}].*)$', after_en)
    if not trailing_match:
        return line
    
    trailing = trailing_match.group(1)
    value_part = after_en[:trailing_match.start()]
    
    # Now value_part starts with a quote and should end with a quote
    # But it might be corrupted. Extract the actual text content.
    if value_part.startswith("'") and value_part.endswith("'"):
        # Single-quoted, check if internal apostrophe exists
        text = value_part[1:-1]
        if "'" in text:
            # Must use double quotes
            text = text.replace('"', '\\"')
            return before + f'en: "{text}"' + trailing
        else:
            return line  # Already correct
    
    if value_part.startswith('"') and value_part.endswith('"'):
        # Double-quoted, check if internal single quote exists
        text = value_part[1:-1]
        if "'" in text:
            return line  # Already correct
        else:
            # No apostrophe, could use single quotes, but double is fine too
            return line
    
    # Mismatched quotes - try to reconstruct the text
    # Cases: 'text" or "text'
    if value_part.startswith("'") and value_part.endswith('"'):
        text = value_part[1:-1]
        if "'" in text:
            text = text.replace('"', '\\"')
            return before + f'en: "{text}"' + trailing
        else:
            return before + f"en: '{text}'" + trailing
    
    if value_part.startswith('"') and value_part.endswith("'"):
        text = value_part[1:-1]
        if "'" in text:
            text = text.replace('"', '\\"')
            return before + f'en: "{text}"' + trailing
        else:
            return before + f"en: '{text}'" + trailing
    
    # Case where it starts with ' but there's an internal ' and then it continues to ")
    # e.g. 'I think it'll change."
    if value_part.startswith("'"):
        # Find the real intended text
        # The text likely contains an apostrophe and the closing quote got mangled
        # Strip leading ' and trailing " if present
        text = value_part[1:]
        if text.endswith('"'):
            text = text[:-1]
        if "'" in text:
            text = text.replace('"', '\\"')
            return before + f'en: "{text}"' + trailing
        else:
            return before + f"en: '{text}'" + trailing
    
    if value_part.startswith('"'):
        text = value_part[1:]
        if text.endswith("'"):
            text = text[:-1]
        if "'" in text:
            text = text.replace('"', '\\"')
            return before + f'en: "{text}"' + trailing
        else:
            return before + f"en: '{text}'" + trailing
    
    return line


def process_file(path: Path):
    content = path.read_text(encoding="utf-8")
    original = content
    lines = content.split("\n")
    fixed_lines = [fix_en_in_line(line) for line in lines]
    content = "\n".join(fixed_lines)
    
    if content != original:
        path.write_text(content, encoding="utf-8")
        print(f"Fixed {path.name}")
    else:
        print(f"OK {path.name}")


def main():
    for f in sorted(SCHOOL_DIR.glob("*.ts")):
        if f.name == "index.ts":
            continue
        process_file(f)


if __name__ == "__main__":
    main()
