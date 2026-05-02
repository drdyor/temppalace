#!/usr/bin/env python3
"""Add natural dialogue arrays to school files that are missing them."""

import re
from pathlib import Path

ROOT = Path(__file__).parent.parent
SCHOOL_DIR = ROOT / "src" / "data" / "school"

# Map of (file_stem, dialogue_id) -> list of {speaker, en} dicts for natural array
NATURAL_DATA = {
    # ========== art-room.ts ==========
    ("art-room", "art-what-colour"): [
        {"speaker": "teacher", "en": "What colour do you want?"},
        {"speaker": "student", "en": "Blue and yellow, please."},
        {"speaker": "teacher", "en": "Mix them together. You get green."},
        {"speaker": "student", "en": "It's magic!"},
    ],
    ("art-room", "art-draw-shape"): [
        {"speaker": "teacher", "en": "Draw a circle and a square."},
        {"speaker": "student", "en": "Can I do a star too?"},
        {"speaker": "teacher", "en": "Sure. Use the ruler for the triangle."},
        {"speaker": "student", "en": "Done it."},
    ],
    ("art-room", "art-cut-stick"): [
        {"speaker": "peer", "en": "Can I borrow the scissors?"},
        {"speaker": "student", "en": "Yeah. Here."},
        {"speaker": "peer", "en": "Thanks. Pass the glue?"},
        {"speaker": "student", "en": "Here. Watch the cap."},
    ],
    ("art-room", "art-painting"): [
        {"speaker": "teacher", "en": 'Use the brush for the sky.'},
        {"speaker": "student", "en": "I want to paint a rainbow."},
        {"speaker": "teacher", "en": "Go on then. Use all the colours."},
        {"speaker": "student", "en": "It's beautiful!"},
    ],
    ("art-room", "art-collage"): [
        {"speaker": "peer", "en": "What are you making?"},
        {"speaker": "student", "en": "A collage with paper and card."},
        {"speaker": "peer", "en": "Can I help?"},
        {"speaker": "student", "en": "Yeah. Tear the paper into little bits."},
    ],
    ("art-room", "art-clean-up"): [
        {"speaker": "teacher", "en": "Wash your brush, please."},
        {"speaker": "student", "en": "Where do I put the paint?"},
        {"speaker": "teacher", "en": "On the shelf. Put the lids on."},
        {"speaker": "student", "en": "I'll clean my table too."},
    ],
    ("art-room", "art-show-work"): [
        {"speaker": "student", "en": "Look at my picture."},
        {"speaker": "peer", "en": "That's really nice. Love the colours."},
        {"speaker": "student", "en": "Thanks. I worked hard on it."},
        {"speaker": "peer", "en": "You're a good artist."},
    ],
    ("art-room", "art-missing-tool"): [
        {"speaker": "student", "en": "I can't find my pencil."},
        {"speaker": "teacher", "en": "Check the pencil box."},
        {"speaker": "student", "en": "It's not there."},
        {"speaker": "teacher", "en": "Take a new one from the table."},
        {"speaker": "student", "en": "Thanks."},
    ],

    # ========== computer-room.ts ==========
    ("computer-room", "comp-turn-on"): [
        {"speaker": "teacher", "en": "Turn on your computer."},
        {"speaker": "student", "en": "The screen's black."},
        {"speaker": "teacher", "en": "Check the cable's plugged in."},
    ],
    ("computer-room", "comp-type-name"): [
        {"speaker": "teacher", "en": "Type your name on the keyboard."},
        {"speaker": "student", "en": "How do I save it?"},
        {"speaker": "teacher", "en": "Click the save button."},
    ],
    ("computer-room", "comp-internet-safe"): [
        {"speaker": "teacher", "en": "Don't talk to strangers online."},
        {"speaker": "student", "en": "What about my password?"},
        {"speaker": "teacher", "en": "Keep it secret. Never tell anyone."},
    ],
    ("computer-room", "comp-print-work"): [
        {"speaker": "student", "en": "Can I print my picture?"},
        {"speaker": "teacher", "en": "Yeah. Click print."},
        {"speaker": "student", "en": "The printer's not working."},
    ],
    ("computer-room", "comp-headphones"): [
        {"speaker": "teacher", "en": "Put your headphones on."},
        {"speaker": "student", "en": "It's too loud."},
        {"speaker": "teacher", "en": "Turn the volume down."},
    ],
    ("computer-room", "comp-logout"): [
        {"speaker": "teacher", "en": "Time to finish up."},
        {"speaker": "student", "en": "Do I log out?"},
        {"speaker": "teacher", "en": "Yes. Then turn the monitor off."},
    ],

    # ========== music-room.ts ==========
    ("music-room", "mus-try-piano"): [
        {"speaker": "student", "en": "Can I play the piano?"},
        {"speaker": "teacher", "en": "Go on. Be gentle."},
        {"speaker": "student", "en": "Sounds lovely."},
    ],
    ("music-room", "mus-loud-drum"): [
        {"speaker": "teacher", "en": "That drum's too loud."},
        {"speaker": "student", "en": "Sorry. I'll play softer."},
        {"speaker": "teacher", "en": "Thanks."},
    ],
    ("music-room", "mus-concert-ready"): [
        {"speaker": "teacher", "en": "Concert's on Friday."},
        {"speaker": "student", "en": "I need more practice."},
        {"speaker": "teacher", "en": "Work on the chorus then."},
    ],
    ("music-room", "mus-choir-sing"): [
        {"speaker": "peer", "en": "You in the choir?"},
        {"speaker": "student", "en": "Yeah. I love the tune."},
        {"speaker": "peer", "en": "The harmony's beautiful."},
    ],
    ("music-room", "mus-clap-rhythm"): [
        {"speaker": "teacher", "en": "Clap the beat."},
        {"speaker": "student", "en": "Like this?"},
        {"speaker": "teacher", "en": "Perfect. Keep the rhythm going."},
    ],
    ("music-room", "mus-recorder"): [
        {"speaker": "student", "en": "Can I try the recorder?"},
        {"speaker": "teacher", "en": "Blow gently."},
        {"speaker": "student", "en": "It's really high!"},
    ],

    # ========== lost-property.ts ==========
    ("lost-property", "los-lost-bag"): [
        {"speaker": "student", "en": "I lost my bag."},
        {"speaker": "teacher", "en": "Check the lost property box."},
        {"speaker": "student", "en": "It's not there."},
        {"speaker": "teacher", "en": "What colour is it?"},
    ],
    ("lost-property", "los-claim-jacket"): [
        {"speaker": "student", "en": "Is this your jacket?"},
        {"speaker": "peer", "en": "No. Mine's bigger."},
        {"speaker": "student", "en": "Is it his?"},
        {"speaker": "peer", "en": "Yeah. It's got his name on it."},
    ],
    ("lost-property", "los-describe"): [
        {"speaker": "teacher", "en": "Describe your shoe."},
        {"speaker": "student", "en": "It's small and blue."},
        {"speaker": "teacher", "en": "Does it have stripes?"},
        {"speaker": "student", "en": "No. It's plain."},
    ],
    ("lost-property", "los-label"): [
        {"speaker": "teacher", "en": "Put your name on the label."},
        {"speaker": "student", "en": "Then I won't lose it."},
        {"speaker": "teacher", "en": "If you do, we can find it."},
    ],
    ("lost-property", "los-search"): [
        {"speaker": "peer", "en": "I'll help you look."},
        {"speaker": "student", "en": "Let's check the classroom."},
        {"speaker": "peer", "en": "Check your locker too."},
    ],
    ("lost-property", "los-found"): [
        {"speaker": "peer", "en": "I found a key."},
        {"speaker": "student", "en": "Is it yours?"},
        {"speaker": "peer", "en": "No. Not mine."},
        {"speaker": "student", "en": "Let's ask whose it is."},
    ],

    # ========== principal-office.ts ==========
    ("principal-office", "principal-knock"): [
        {"speaker": "student", "en": "Can I come in?"},
        {"speaker": "teacher", "en": "Yes, come in. Sit down."},
        {"speaker": "student", "en": "Thanks."},
    ],
    ("principal-office", "principal-problem"): [
        {"speaker": "teacher", "en": "What's the problem?"},
        {"speaker": "student", "en": "A boy was unkind to me."},
        {"speaker": "teacher", "en": "Tell me what happened."},
        {"speaker": "student", "en": "He took my pen."},
    ],
    ("principal-office", "principal-sorry"): [
        {"speaker": "student", "en": "I'm sorry."},
        {"speaker": "teacher", "en": "What are you sorry for?"},
        {"speaker": "student", "en": "I was rude."},
        {"speaker": "teacher", "en": "Thanks for telling me."},
    ],
    ("principal-office", "principal-rules"): [
        {"speaker": "teacher", "en": "What's the rule?"},
        {"speaker": "student", "en": "Be kind and polite."},
        {"speaker": "teacher", "en": "Good. Include everyone."},
        {"speaker": "student", "en": "I understand."},
    ],
    ("principal-office", "principal-worry"): [
        {"speaker": "student", "en": "I feel worried."},
        {"speaker": "teacher", "en": "Don't worry. Tell me about it."},
        {"speaker": "student", "en": "I don't get the work."},
        {"speaker": "teacher", "en": "I'll help you."},
    ],
    ("principal-office", "principal-promise"): [
        {"speaker": "teacher", "en": "Can you be good?"},
        {"speaker": "student", "en": "Yes, I promise."},
        {"speaker": "teacher", "en": "I trust you."},
        {"speaker": "student", "en": "Thanks."},
    ],
    ("principal-office", "principal-fair"): [
        {"speaker": "student", "en": "That's not fair."},
        {"speaker": "teacher", "en": "Why do you think so?"},
        {"speaker": "student", "en": "He didn't share."},
        {"speaker": "teacher", "en": "I'll have a word with him."},
    ],
    ("principal-office", "principal-respect"): [
        {"speaker": "teacher", "en": "Show respect to everyone."},
        {"speaker": "student", "en": "Yes, I will."},
        {"speaker": "teacher", "en": "Respect helps us all be friends."},
    ],

    # ========== science-lab.ts ==========
    ("science-lab", "sci-microscope-look"): [
        {"speaker": "teacher", "en": "Look in the microscope."},
        {"speaker": "student", "en": "What am I looking at?"},
        {"speaker": "teacher", "en": "A tiny insect."},
    ],
    ("science-lab", "sci-mix-pour"): [
        {"speaker": "teacher", "en": "Pour the water into the beaker."},
        {"speaker": "student", "en": "What now?"},
        {"speaker": "teacher", "en": "Mix it and stir."},
        {"speaker": "student", "en": "The colour changed!"},
    ],
    ("science-lab", "sci-plant-seed"): [
        {"speaker": "teacher", "en": "Plant the seed in the soil."},
        {"speaker": "student", "en": "Will it grow?"},
        {"speaker": "teacher", "en": "Yes. Water it and keep watching."},
    ],
    ("science-lab", "sci-measure-weigh"): [
        {"speaker": "student", "en": "Can I weigh the rock?"},
        {"speaker": "teacher", "en": "Use the scales."},
        {"speaker": "student", "en": "Now I'll measure it with the ruler."},
    ],
    ("science-lab", "sci-safety"): [
        {"speaker": "teacher", "en": "Put your goggles on."},
        {"speaker": "student", "en": "Do I need gloves?"},
        {"speaker": "teacher", "en": "Yes. And the apron too."},
    ],
    ("science-lab", "sci-guess-result"): [
        {"speaker": "teacher", "en": "What do you think will happen?"},
        {"speaker": "student", "en": "I think it'll change."},
        {"speaker": "teacher", "en": "Let's test it and see."},
    ],
}


def format_natural_turns(turns):
    lines = ["    natural: ["]
    for t in turns:
        lines.append(f"      {{ speaker: '{t['speaker']}', en: '{t['en']}' }},")
    lines.append("    ]},")
    return "\n".join(lines)


def process_file(stem: str, path: Path):
    src = path.read_text(encoding="utf-8")
    original = src

    # Find dialogues that end with turns: [...] },
    # We need to insert natural: [...] before the closing },
    pattern = re.compile(
        r"(\{\s*id:\s*'([^']+)',\s*scenario:\s*'([^']+)',\s*turns:\s*\[.*?\],\s*)(\},)"
        , re.DOTALL,
    )

    def replacer(m):
        dialogue_id = m.group(2)
        key = (stem, dialogue_id)
        if key not in NATURAL_DATA:
            return m.group(0)
        turns = NATURAL_DATA[key]
        natural_block = format_natural_turns(turns)
        # m.group(1) is everything up to and including the turns closing ]
        # m.group(4) is "},"
        return m.group(1) + "\n" + natural_block + "\n  "

    result = pattern.sub(replacer, src)

    if result != original:
        path.write_text(result, encoding="utf-8")
        print(f"OK Updated {path.name}")
    else:
        print(f"WARN No changes in {path.name}")


def main():
    files = [
        ("art-room", SCHOOL_DIR / "art-room.ts"),
        ("computer-room", SCHOOL_DIR / "computer-room.ts"),
        ("music-room", SCHOOL_DIR / "music-room.ts"),
        ("lost-property", SCHOOL_DIR / "lost-property.ts"),
        ("principal-office", SCHOOL_DIR / "principal-office.ts"),
        ("science-lab", SCHOOL_DIR / "science-lab.ts"),
    ]

    for stem, path in files:
        if path.exists():
            process_file(stem, path)
        else:
            print(f"✗ Missing {path}")


if __name__ == "__main__":
    main()
