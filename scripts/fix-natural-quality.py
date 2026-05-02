#!/usr/bin/env python3
"""Comprehensive quality fix for auto-generated natural dialogue blocks."""

import re
from pathlib import Path

SCHOOL_DIR = Path(__file__).parent.parent / "src" / "data" / "school"

# Exact text replacements for known bad patterns
EXACT_FIXES = {
    # Capitalization fixes (mid-sentence contractions should be lowercase)
    "I Can't": "I can't",
    "He Didn't": "He didn't",
    "The printer Isn't": "The printer isn't",
    "I Don't": "I don't",
    "I Won't": "I won't",
    "Yeah, It's": "Yeah, it's",
    "Here It's": "Here it is",
    "Let's ask whose It's": "Let's ask whose it is",
    "I guess It'll": "I guess it'll",
    "I think It'll": "I think it'll",
    
    # "Please" removal artifacts
    "Wash your brush .": "Wash your brush.",
    "Line up, .": "Line up.",
    "Pass the glue .": "Pass the glue.",
    "Walk, .": "Walk.",
    "Whisper, .": "Whisper.",
    "Hurry up, .": "Hurry up.",
    "Yeah, .": "Yeah.",
    
    # "Here you are" -> "Here you're" is wrong
    "Here You're.": "Here you go.",
    "Here You're": "Here you go",
    
    # "What happened" substitution artifact
    "Tell me What happened.": "Tell me what happened.",
    
    # Missing punctuation / run-together sentences
    "Sit down Rest.": "Sit down. Rest.",
    "Sit down Quietly.": "Sit down. Quietly.",
    "Good Include everyone.": "Good. Include everyone.",
    "Good Go back to class.": "Good. Go back to class.",
    "Here Be careful with the cap.": "Here. Be careful with the cap.",
    "Okay Sorry": "Okay. Sorry.",
    "Sorry I made a mistake.": "Sorry. I made a mistake.",
    "Keep it private Never share.": "Keep it private. Never share.",
    "Nice I have pasta.": "Nice. I have pasta.",
    
    # Shh replacements are awkward
    "Shh in the hallway.": "Quiet in the hallway.",
    "Stay seated and Shh.": "Stay seated and be quiet.",
    "Shh. Shh.": "Shh. Be quiet.",
    
    # "Yes, Sit down" -> "Yeah, Sit down" capitalization
    "Yeah, Sit down.": "Yeah, sit down.",
    
    # "Go Straight" capitalization
    "Go Straight.": "Go straight.",
    
    # Hanging contraction
    "Yeah, I'll.": "Yeah, I will.",
    
    # "My knee" -> missing meaning from "My knee hurts"
    "My knee.": "My knee hurts.",
    
    # "What do I see" -> should stay as is or be more natural
    "What do I see?": "What am I looking at?",
    
    # "Now what" -> missing question mark
    "Now what?": "What now?",
}


def fix_file(path: Path):
    content = path.read_text(encoding="utf-8")
    original = content
    
    for bad, good in EXACT_FIXES.items():
        content = content.replace(bad, good)
    
    if content != original:
        path.write_text(content, encoding="utf-8")
        print(f"Fixed {path.name}")
    else:
        print(f"OK {path.name}")


def main():
    for f in sorted(SCHOOL_DIR.glob("*.ts")):
        if f.name == "index.ts":
            continue
        fix_file(f)


if __name__ == "__main__":
    main()
