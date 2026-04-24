#!/usr/bin/env python3
"""
Ask your local Ollama model for feedback on the memory palace project.

Collects key project context, feeds it to your local LLM, and returns
strategic feedback on architecture, content, and commercial viability.

Usage:
    python scripts/ask-ollama-feedback.py --model mistral
    python scripts/ask-ollama-feedback.py --model mixtral --focus content
"""

import json
import argparse
from pathlib import Path

try:
    import requests
except ImportError:
    print("ERROR: requests not installed. Run: pip install requests")
    raise SystemExit(1)

PROJECT_ROOT = Path(__file__).parent.parent
OLLAMA_URL = "http://localhost:11434/api/generate"

SYSTEM_PROMPT = """You are a senior product strategist and language learning expert. 
Review the following memory palace language learning app and give honest, actionable feedback.

Focus areas:
1. CONTENT STRATEGY — Is the English + Italian co-master approach sound? What about Spanish/French expansion?
2. PEDAGOGY — Are the A1-A2 levels appropriate? Is the "Think Like You're [Language]" feature effective?
3. TECHNICAL ARCHITECTURE — Is the Vite + React + static site approach right for this product?
4. COMMERCIAL VIABILITY — What would make this competitive vs Duolingo, Babbel, Memrise?
5. MISSING FEATURES — What's the biggest gap right now?

Be critical but constructive. Give specific recommendations, not vague praise."""


def collect_context() -> str:
    parts = ["# MEMORY PALACE PROJECT REVIEW CONTEXT\n"]

    # README / strategy
    readme = PROJECT_ROOT / "README.md"
    if readme.exists():
        parts.append("## README\n")
        parts.append(readme.read_text(encoding="utf-8")[:2000])
        parts.append("\n")

    # AGENTS.md
    agents = PROJECT_ROOT / "AGENTS.md"
    if agents.exists():
        parts.append("## AGENTS.md (Project conventions)\n")
        parts.append(agents.read_text(encoding="utf-8")[:1500])
        parts.append("\n")

    # Package.json (tech stack)
    pkg = PROJECT_ROOT / "package.json"
    if pkg.exists():
        data = json.loads(pkg.read_text(encoding="utf-8"))
        parts.append("## Tech Stack\n")
        parts.append(f"- Framework: {data.get('dependencies', {}).get('react', 'unknown')} React\n")
        parts.append(f"- Build: Vite\n")
        parts.append(f"- Deploy: GitHub Pages\n")
        parts.append(f"- Key deps: {', '.join(list(data.get('dependencies', {}).keys())[:10])}\n")
        parts.append("\n")

    # Room count
    rooms_ts = PROJECT_ROOT / "src" / "data" / "rooms.ts"
    if rooms_ts.exists():
        text = rooms_ts.read_text(encoding="utf-8")
        room_count = text.count("id: '")
        parts.append(f"## Content Scale\n")
        parts.append(f"- Approximate rooms/zones defined: {room_count}\n")
        parts.append("\n")

    # Think Like lessons
    think_like = PROJECT_ROOT / "src" / "data" / "think-like.ts"
    if think_like.exists():
        text = think_like.read_text(encoding="utf-8")
        lesson_count = text.count("id: '")
        parts.append(f"- Think Like lessons: {lesson_count}\n")
        parts.append("\n")

    # Practice scenarios
    practice = PROJECT_ROOT / "src" / "data" / "practice-scenarios.ts"
    if practice.exists():
        text = practice.read_text(encoding="utf-8")
        scenario_count = text.count("direction:")
        parts.append(f"- Practice scenarios: {scenario_count}\n")
        parts.append("\n")

    # Stories
    stories_dir = PROJECT_ROOT / "data" / "stories"
    if stories_dir.exists():
        story_files = list(stories_dir.glob("*.json"))
        parts.append(f"- Story files: {len(story_files)}\n")
        parts.append("\n")

    # Recent commits
    parts.append("## Recent Work\n")
    parts.append("- Missing image prompts for 8 new zones (Piazza + Calendario)\n")
    parts.append("- Italian conversations generated for 8 missing zones via Opus-MT\n")
    parts.append("- 'Think Like You're [Language]' false-friends feature with 35 lessons\n")
    parts.append("- Interactive Patterns quiz tab in room view\n")
    parts.append("- Batch generation scripts for dialogues and practice scenarios\n")
    parts.append("\n")

    # Key questions
    parts.append("## Questions for You\n")
    parts.append("1. Should English be the primary source language, or Italian (since most content exists in Italian already)?\n")
    parts.append("2. Is the static-site / GitHub Pages approach limiting for a language app that may need audio, user accounts, and progress sync?\n")
    parts.append("3. What content would make someone choose this over Duolingo?\n")
    parts.append("4. Are we missing any critical language-learning methodology (spaced repetition, grammar drills, listening exercises)?\n")
    parts.append("5. How should we prioritize: more languages (ES/FR) vs. deeper content (more rooms, more dialogues)?\n")
    parts.append("\n")

    return "\n".join(parts)


def ask_ollama(model: str, focus: str):
    context = collect_context()

    user_prompt = f"""{context}

---

Please review this project and give detailed feedback.

Focus especially on: {focus}

Structure your response as:
1. Overall assessment (1-10 score with reasoning)
2. Top 3 strengths
3. Top 3 weaknesses / risks
4. Specific actionable recommendations (prioritized)
5. What to build next (next 30 days)
"""

    print(f"Sending context to Ollama ({model})...")
    print(f"Context length: {len(context)} chars")
    print("This may take 30-60 seconds depending on your model.\n")

    payload = {
        "model": model,
        "system": SYSTEM_PROMPT,
        "prompt": user_prompt,
        "stream": False,
        "options": {
            "temperature": 0.7,
            "num_predict": 2000,
        }
    }

    resp = requests.post(OLLAMA_URL, json=payload, timeout=300)
    resp.raise_for_status()
    result = resp.json()["response"].strip()

    # Save to file
    out_file = PROJECT_ROOT / "OLLAMA_FEEDBACK.md"
    out_file.write_text(
        f"# Ollama Feedback ({model})\n\n**Focus:** {focus}\n\n**Date:** {__import__('datetime').datetime.now().isoformat()}\n\n---\n\n{result}\n",
        encoding="utf-8"
    )

    print("=" * 60)
    print(result)
    print("=" * 60)
    print(f"\n✅ Feedback saved to: {out_file}")


def main():
    parser = argparse.ArgumentParser(description="Ask Ollama for project feedback")
    parser.add_argument("--model", default="mistral", help="Ollama model name")
    parser.add_argument("--focus", default="all", help="Focus area: all, content, tech, commercial, pedagogy")
    args = parser.parse_args()

    ask_ollama(args.model, args.focus)


if __name__ == "__main__":
    main()
