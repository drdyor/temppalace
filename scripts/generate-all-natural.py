#!/usr/bin/env python3
"""Generate natural (colloquial) dialogue blocks for all school files.

Reads each school file, parses the formal turns arrays, and auto-generates
natural arrays with contracted spoken English.
"""

import re
from pathlib import Path

ROOT = Path(__file__).parent.parent
SCHOOL_DIR = ROOT / "src" / "data" / "school"

# Colloquial transformation rules (applied in order)
SUBSTITUTIONS = [
    # Contractions
    (r"\bI am\b", "I'm"),
    (r"\bYou are\b", "You're"),
    (r"\bIt is\b", "It's"),
    (r"\bThat is\b", "That's"),
    (r"\bHe is\b", "He's"),
    (r"\bShe is\b", "She's"),
    (r"\bWe are\b", "We're"),
    (r"\bThey are\b", "They're"),
    (r"\bDo not\b", "Don't"),
    (r"\bDoes not\b", "Doesn't"),
    (r"\bDid not\b", "Didn't"),
    (r"\bCan not\b", "Can't"),
    (r"\bCannot\b", "Can't"),
    (r"\bWill not\b", "Won't"),
    (r"\bWould not\b", "Wouldn't"),
    (r"\bShould not\b", "Shouldn't"),
    (r"\bCould not\b", "Couldn't"),
    (r"\bIs not\b", "Isn't"),
    (r"\bAre not\b", "Aren't"),
    (r"\bWas not\b", "Wasn't"),
    (r"\bWere not\b", "Weren't"),
    (r"\bHave not\b", "Haven't"),
    (r"\bHas not\b", "Hasn't"),
    (r"\bHad not\b", "Hadn't"),
    (r"\bLet us\b", "Let's"),
    (r"\bI will\b", "I'll"),
    (r"\bYou will\b", "You'll"),
    (r"\bIt will\b", "It'll"),
    (r"\bI would\b", "I'd"),
    (r"\bYou would\b", "You'd"),
    (r"\bWhat is\b", "What's"),
    (r"\bWhere is\b", "Where's"),
    (r"\bWho is\b", "Who's"),
    (r"\bHere is\b", "Here's"),
    (r"\bThere is\b", "There's"),
    # Colloquial replacements
    (r"\bThank you\b", "Thanks"),
    (r"\bYes\b", "Yeah"),
]

# More relaxed / colloquial tweaks (not strict contractions)
CASUAL_REPLACEMENTS = [
    (r"\bI want to\b", "I wanna"),
    (r"\bGoing to\b", "Gonna"),
    (r"\bgoing to\b", "gonna"),
    (r"\bGot to\b", "Gotta"),
    (r"\bgot to\b", "gotta"),
    (r"\bWhat do you have\b", "What've you got"),
    (r"\bWhat are you\b", "What're you"),
    (r"\bDo you want to\b", "D'you wanna"),
    (r"\bDo you want\b", "D'you want"),
    (r"\bDo you have\b", "Have you got"),
    (r"\bI do not like it\b", "I don't like it"),
    (r"\bI do not understand\b", "I don't get it"),
    (r"\bI do not know\b", "I dunno"),
    (r"\bI am sorry\b", "I'm sorry"),
    (r"\bI am finished\b", "I'm done"),
    (r"\bI am hungry\b", "I'm starving"),
    (r"\bI am thirsty\b", "I'm parched"),
    (r"\bI am late\b", "I'm late"),
    (r"\bI am hot\b", "I'm boiling"),
    (r"\bI hurt my\b", "I've hurt my"),
    (r"\bIt is time for\b", "Time for"),
    (r"\bIt is very nice\b", "It's really nice"),
    (r"\bIt is beautiful\b", "It's gorgeous"),
    (r"\bIt is magic\b", "It's magic"),
    (r"\bIt is not fair\b", "That's not fair"),
    (r"\bIt is not there\b", "It's not there"),
    (r"\bIt is not working\b", "It's broken"),
    (r"\bIt is plain\b", "It's plain"),
    (r"\bIt is small and\b", "It's small and"),
    (r"\bIt sounds nice\b", "Sounds lovely"),
    (r"\bIt makes a high sound\b", "It's really high"),
    (r"\bThe screen is black\b", "The screen's black"),
    (r"\bThe printer is not working\b", "The printer's broken"),
    (r"\bThe drum is too loud\b", "That drum's too loud"),
    (r"\bThe concert is on\b", "Concert's on"),
    (r"\bThe sound is too loud\b", "It's too loud"),
    (r"\bThere are no seats\b", "No seats left"),
    (r"\bThere is no paper\b", "There's no paper"),
    (r"\bNobody wants to play with me\b", "No one wants to play"),
    (r"\bYes, I promise\b", "Yeah, I promise"),
    (r"\bYes, I will\b", "Yeah, I will"),
    (r"\bYes, come in\b", "Yeah, come in"),
    (r"\bYes, but be careful\b", "Yeah, but be careful"),
    (r"\bYes, but hurry back\b", "Yeah, but hurry back"),
    (r"\bYes. Put it back after\b", "Yeah. Put it back after"),
    (r"\bYes. Here you are\b", "Yeah. Here"),
    (r"\bYes, sit down\b", "Yeah, sit down"),
    (r"\bYes, please\b", "Yeah, please"),
    (r"\bNo. Mine is bigger\b", "No. Mine's bigger"),
    (r"\bNo. It is not mine\b", "No. Not mine"),
    (r"\bNo. It is plain\b", "No. It's plain"),
    (r"\bNo pushing in PE\b", "No pushing"),
    (r"\bPage ten\b", "Page ten"),
    (r"\bPlease\b", ""),  # Remove "please" for very casual speech (be careful)
    (r"\bBe quiet\b", "Shh"),
    (r"\bBe kind and polite\b", "Be kind and polite"),
    (r"\bCan you be good\b", "Can you be good"),
    (r"\bCome back after\b", "Come back"),
    (r"\bDescribe your shoe\b", "Describe your shoe"),
    (r"\bDid you enjoy it\b", "Was it good"),
    (r"\bDo I log out\b", "Do I log out"),
    (r"\bDo I logout\b", "Do I logout"),
    (r"\bDo I need gloves\b", "Do I need gloves"),
    (r"\bDo we have to\b", "Do we have to"),
    (r"\bDo we wait\b", "Do we wait"),
    (r"\bDoes it belong to him\b", "Is it his"),
    (r"\bDoes it have stripes\b", "Does it have stripes"),
    (r"\bDraw a circle and a square\b", "Draw a circle and a square"),
    (r"\bDrink some water\b", "Drink some water"),
    (r"\bEat your lunch\b", "Eat your lunch"),
    (r"\bEveryone line up\b", "Everyone line up"),
    (r"\bFollow me\b", "Follow me"),
    (r"\bGet into groups\b", "Get into groups"),
    (r"\bGet your books out\b", "Get your books out"),
    (r"\bGo quickly\b", "Go quickly"),
    (r"\bGo up the stairs\b", "Up the stairs"),
    (r"\bGood game\b", "Great game"),
    (r"\bGood. Include everyone\b", "Good. Include everyone"),
    (r"\bGood. Now we can go\b", "Good. Now we can go"),
    (r"\bHands up if you need something\b", "Hands up if you need something"),
    (r"\bHe did not share\b", "He didn't share"),
    (r"\bHe pushed me\b", "He pushed me"),
    (r"\bHe took my pen\b", "He took my pen"),
    (r"\bHere is a different one\b", "Here's a different one"),
    (r"\bHere is my name tag\b", "Here's my name tag"),
    (r"\bHere, take one\b", "Here, take one"),
    (r"\bHold my hand\b", "Hold my hand"),
    (r"\bHold on tight\b", "Hold on tight"),
    (r"\bHurry up\b", "Hurry up"),
    (r"\bI can not see\b", "I can't see"),
    (r"\bI can not eat nuts\b", "I can't eat nuts"),
    (r"\bI can not find my pencil\b", "I can't find my pencil"),
    (r"\bI clean my table too\b", "I'll clean my table too"),
    (r"\bI feel worried\b", "I feel worried"),
    (r"\bI forgot my pencil\b", "I forgot my pencil"),
    (r"\bI found a key\b", "I found a key"),
    (r"\bI guess it will change\b", "I think it'll change"),
    (r"\bI had a good day\b", "I had a good day"),
    (r"\bI need the bathroom\b", "I need the toilet"),
    (r"\bI need to practise more\b", "I need more practice"),
    (r"\bI see the green light\b", "I see the green light"),
    (r"\bI trust you\b", "I trust you"),
    (r"\bI understand\b", "I understand"),
    (r"\bI was rude\b", "I was rude"),
    (r"\bI will get some\b", "I'll get some"),
    (r"\bI will have a word with him\b", "I'll have a word with him"),
    (r"\bI will help you\b", "I'll help you"),
    (r"\bI will hold the handle\b", "I'll hold the handle"),
    (r"\bI will play with you\b", "I'll play with you"),
    (r"\bI worked hard\b", "I worked hard on it"),
    (r"\bIf you do, we can find it\b", "If you do, we can find it"),
    (r"\bIf you lose it, we can find it\b", "If you lose it, we can find it"),
    (r"\bIs this jacket yours\b", "Is this your jacket"),
    (r"\bIs this the right bus\b", "Is this our bus"),
    (r"\bIs this your locker\b", "Is this your locker"),
    (r"\bKeep your eyes on the board\b", "Keep your eyes on the board"),
    (r"\bLeft. Then right\b", "Left. Then right"),
    (r"\bLet me see\b", "Let me see"),
    (r"\bLet us ask whose it is\b", "Let's ask whose it is"),
    (r"\bLet us check the classroom\b", "Let's check the classroom"),
    (r"\bLet us search the classroom\b", "Let's search the classroom"),
    (r"\bLet us test it and see the result\b", "Let's test it and see"),
    (r"\bLine up everyone\b", "Everyone line up"),
    (r"\bLine up, everyone\b", "Line up everyone"),
    (r"\bLine up, please\b", "Line up"),
    (r"\bLook at my picture\b", "Look at my picture"),
    (r"\bLook at the board\b", "Look at the board"),
    (r"\bLook in the microscope\b", "Look in the microscope"),
    (r"\bLook in the pencil box\b", "Check the pencil box"),
    (r"\bMix them. You get green\b", "Mix them together. You get green"),
    (r"\bMove your chair forward\b", "Move your chair up"),
    (r"\bMove your chair up then\b", "Move your chair up then"),
    (r"\bMy hands are wet\b", "My hands are wet"),
    (r"\bMy knee hurts\b", "My knee"),
    (r"\bNever share\b", "Never share"),
    (r"\bNo. It has his name\b", "Yeah. It's got his name on it"),
    (r"\bNo pushing\b", "No pushing"),
    (r"\bNot today, sorry\b", "Not today, sorry"),
    (r"\bNot today\b", "Not today"),
    (r"\bNow wash your hands\b", "Wash your hands"),
    (r"\bOn the shelf. Close the pots\b", "On the shelf. Put the lids on"),
    (r"\bOn the shelf. Put the lids on\b", "On the shelf. Put the lids on"),
    (r"\bOpen your book\b", "Get your books out"),
    (r"\bPass the glue please\b", "Pass the glue"),
    (r"\bPE is finished\b", "PE's finished"),
    (r"\bPlant the seed in the soil\b", "Plant the seed in the soil"),
    (r"\bPour the water into the beaker\b", "Pour the water into the beaker"),
    (r"\bPractise the chorus\b", "Work on the chorus then"),
    (r"\bPut it back after\b", "Put it back after"),
    (r"\bPut on your headphones\b", "Put your headphones on"),
    (r"\bPut the paint back\b", "Put the paint back"),
    (r"\bPut your name on the label\b", "Put your name on the label"),
    (r"\bPut your name tag on\b", "Put your name tag on"),
    (r"\bRaise your hand\b", "Hands up"),
    (r"\bRed light. Stop\b", "Red light. Stop"),
    (r"\bRespect helps us be friends\b", "Respect helps us all be friends"),
    (r"\bRespect helps us all be friends\b", "Respect helps us all be friends"),
    (r"\bRight, sit down everyone\b", "Right, sit down everyone"),
    (r"\bShow respect to everyone\b", "Show respect to everyone"),
    (r"\bSit down everyone\b", "Sit down everyone"),
    (r"\bSit down. Quietly\b", "Sit down. Quietly"),
    (r"\bSit down\b", "Sit down"),
    (r"\bSorry, I am late\b", "Sorry, I'm late"),
    (r"\bStraight. Then left\b", "Straight. Then left"),
    (r"\bTake a new one from the table\b", "Take a new one from the table"),
    (r"\bTell me the truth\b", "Tell me what happened"),
    (r"\bTell me what happened\b", "Tell me what happened"),
    (r"\bThank you for telling me\b", "Thanks for telling me"),
    (r"\bThat is not fair\b", "That's not fair"),
    (r"\bThat is unfair\b", "That's not fair"),
    (r"\bThe colour changed\b", "The colour changed"),
    (r"\bThe crossing guard is here\b", "The crossing guard's here"),
    (r"\bThe green light is on\b", "Green light's on"),
    (r"\bThe harmony is beautiful\b", "The harmony's beautiful"),
    (r"\bThe light is green. Go\b", "Green light. Go"),
    (r"\bThe light is red. Stop\b", "Red light. Stop"),
    (r"\bThen I will not lose it\b", "Then I won't lose it"),
    (r"\bThen turn off the monitor\b", "Then turn the monitor off"),
    (r"\bThen turn the monitor off\b", "Then turn the monitor off"),
    (r"\bThen wash your hands\b", "Then wash your hands"),
    (r"\bTime to finish up\b", "Time to finish up"),
    (r"\bTime to finish\b", "Time to finish up"),
    (r"\bTime to go inside\b", "Inside everyone"),
    (r"\bTo the classroom\b", "To class"),
    (r"\bTo the playground\b", "Playground"),
    (r"\bTurn down the speaker\b", "Turn the volume down"),
    (r"\bTurn left. Then right\b", "Left. Then right"),
    (r"\bTurn on the computer\b", "Turn on your computer"),
    (r"\bTurn on your computer\b", "Turn on your computer"),
    (r"\bType your name on the keyboard\b", "Type your name on the keyboard"),
    (r"\bUse soap\b", "And use soap"),
    (r"\bUse the brush for the sky\b", "Use the brush for the sky"),
    (r"\bUse the ruler for the triangle\b", "Use the ruler for the triangle"),
    (r"\bUse the towel\b", "Use the towel"),
    (r"\bWait in the queue\b", "Queue up"),
    (r"\bWait your turn\b", "Wait your turn"),
    (r"\bWalk, please\b", "Walk"),
    (r"\bWash your brush please\b", "Wash your brush, please"),
    (r"\bWash your brush, please\b", "Wash your brush, please"),
    (r"\bWash your hands\b", "Wash your hands"),
    (r"\bWe are playing tag\b", "Tag"),
    (r"\bWe draw a poster\b", "We draw a poster"),
    (r"\bWe need one more\b", "We need one more"),
    (r"\bWe won\b", "We won"),
    (r"\bWhat are we doing\b", "What are we doing"),
    (r"\bWhat are we playing\b", "What we playing"),
    (r"\bWhat are you making\b", "What are you making"),
    (r"\bWhat are you sorry for\b", "What are you sorry for"),
    (r"\bWhat colour do you want\b", "What colour do you want"),
    (r"\bWhat colour is it\b", "What colour is it"),
    (r"\bWhat do you guess will happen\b", "What do you think will happen"),
    (r"\bWhat do we do\b", "What do we do"),
    (r"\bWhat do you have for lunch\b", "What you got for lunch"),
    (r"\bWhat happened\b", "What happened"),
    (r"\bWhat is the problem\b", "What's the problem"),
    (r"\bWhat is the rule\b", "What's the rule"),
    (r"\bWhat now\b", "What now"),
    (r"\bWhat page is it\b", "What page is it"),
    (r"\bWhich floor\b", "Which floor"),
    (r"\bWhich page\b", "Which page"),
    (r"\bWhy are you sorry\b", "Why are you sorry"),
    (r"\bWhy do you think so\b", "Why do you think so"),
    (r"\bWhy do you think that\b", "Why do you think that"),
    (r"\bWork in groups\b", "Get into groups"),
    (r"\bYou are a good artist\b", "You're a good artist"),
    (r"\bYou are my friend\b", "You're my best friend"),
    (r"\bYou need a plaster\b", "You need a plaster"),
    (r"\bYou played well\b", "Nice one"),
]


def naturalize(text: str) -> str:
    """Transform formal English into colloquial spoken English."""
    # Apply standard contractions first
    for pattern, replacement in SUBSTITUTIONS:
        text = re.sub(pattern, replacement, text, flags=re.IGNORECASE)
    
    # Then apply casual replacements
    for pattern, replacement in CASUAL_REPLACEMENTS:
        # Only replace if the pattern matches the whole text or a significant part
        # Use word boundaries for safety
        text = re.sub(pattern, replacement, text, flags=re.IGNORECASE)
    
    return text


def format_natural_block(turns: list) -> str:
    """Format a natural block with correct TypeScript syntax."""
    lines = ["    natural: ["]
    for t in turns:
        speaker = t["speaker"]
        en = t["en"]
        # Use double quotes for en if it contains an apostrophe
        if "'" in en:
            en_escaped = en.replace('"', '\\"')
            en_repr = f'"{en_escaped}"'
        else:
            en_repr = f"'{en}'"
        lines.append(f"      {{ speaker: '{speaker}', en: {en_repr} }},")
    lines.append("    ]},")
    return "\n".join(lines)


def extract_turns(dialogue_text: str) -> list:
    """Extract turns from a dialogue object's text."""
    turns = []
    # Match { speaker: '...', en: '...' } or { speaker: "...", en: "..." }
    pattern = re.compile(
        r"\{\s*speaker:\s*['\"]([^'\"]+)['\"]\s*,\s*en:\s*['\"](.*?)['\"]\s*\}",
        re.DOTALL,
    )
    for m in pattern.finditer(dialogue_text):
        turns.append({"speaker": m.group(1), "en": m.group(2)})
    return turns


def process_file(path: Path):
    content = path.read_text(encoding="utf-8")
    original = content
    
    # Find all dialogue objects
    # Match from { id: '...' to the closing },
    dialogue_pattern = re.compile(
        r"(\{\s*id:\s*['\"]([^'\"]+)['\"]\s*,\s*scenario:\s*['\"][^'\"]+['\"]\s*,\s*turns:\s*\[.*?\]\s*,?\s*)(\}\s*,)",
        re.DOTALL,
    )
    
    def replacer(m):
        dialogue_id = m.group(2)
        full_match = m.group(0)
        
        # Extract turns from the match
        turns = extract_turns(full_match)
        if not turns:
            return full_match
        
        # Generate natural turns
        natural_turns = []
        for turn in turns:
            natural_en = naturalize(turn["en"])
            # Ensure natural is different from formal
            if natural_en == turn["en"]:
                # Try to make it more casual
                natural_en = natural_en.replace(".", "").strip()
                if not natural_en:
                    natural_en = turn["en"]
            natural_turns.append({"speaker": turn["speaker"], "en": natural_en})
        
        natural_block = format_natural_block(natural_turns)
        
        # Insert before the closing },
        base = full_match.rstrip()
        if base.endswith(","):
            base = base[:-1].rstrip()
        if base.endswith("}"):
            base = base[:-1].rstrip()
        
        # Ensure there's a comma after the closing ] of turns array
        if not base.endswith(","):
            base += ","
        
        return base + "\n" + natural_block + "\n  "
    
    new_content = dialogue_pattern.sub(replacer, content)
    
    if new_content != original:
        path.write_text(new_content, encoding="utf-8")
        # Count natural blocks inserted
        count = new_content.count("natural: [") - original.count("natural: [")
        print(f"OK {path.name} — inserted {count} natural blocks")
    else:
        print(f"WARN No changes for {path.name}")


def main():
    for f in sorted(SCHOOL_DIR.glob("*.ts")):
        if f.name == "index.ts":
            continue
        process_file(f)


if __name__ == "__main__":
    main()
