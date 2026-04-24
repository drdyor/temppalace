# Kimi Handover — Memory Palace Project

**Date:** 2026-04-23  
**Branch:** `srs-karaoke` (auto-deploys to GitHub Pages)  
**Repo:** https://github.com/drdyor/temppalace.git  
**Live URL:** https://drdyor.github.io/temppalace/

---

## What This Project Is

A **language-learning memory palace** built with Vite + React + TypeScript + Tailwind.  
Deployed as a static site on GitHub Pages. Currently focused on **Italian** with infrastructure for English, Spanish, and French.

The core mechanic: learners navigate a virtual palace with rooms (Kitchen, Bedroom, Piazza, etc.). Each room has zones with vocabulary words positioned on images. Clicking words plays audio, shows translations, and triggers conversations.

---

## What Was Built in This Session

### 1. Missing Image Prompts (8 zones)
- **File:** `MISSING_IMAGE_PROMPTS.md`
- 8 photorealistic image prompts for new rooms: **Piazza** (4) + **Calendario** (4)
- Each prompt includes exact A1-A2 vocab words that must appear in the scene
- **Vocab verified** against `src/data/rooms.ts` — all 8 zones match exactly
- **Action for Kimi:** Generate these 8 images and place in `public/rooms/`

### 2. Italian Conversations for Missing Zones
- **File:** `src/data/zone-stories-generated.ts`
- 8 new zone stories translated via Opus-MT (`Helsinki-NLP/opus-mt-en-it`)
- Zones: `fontana-piazza`, `bar-piazza`, `fermata-piazza`, `panchina-piazza`, `settimana`, `mesi`, `stagioni`, `avverbi-tempo`
- **License-safe:** English source is original, Opus-MT is CC-BY 4.0 (commercial OK with attribution)
- **Needs:** Merge these entries into `src/data/zone-stories.ts` (the main file)

### 3. "Think Like You're [Language]" Feature
- **File:** `src/data/think-like.ts` (816 lines, 35 lessons)
- Teaches learners to avoid false friends and translation traps
- Covers 6 directions: EN←IT, EN←FR, EN←ES, IT←EN, FR←EN, ES←EN
- Each lesson has: what you think → what you wrongly say → what natives say → why → tip → parallels
- **File:** `src/data/practice-scenarios.ts` — converts lessons into quiz format
- **File:** `src/components/PracticeCard.tsx` — interactive right/wrong quiz UI
- **File:** `src/components/PatternsTab.tsx` — room tab wrapper with language selector
- **Integrated into:** `src/pages/RoomPage.tsx` (new "Patterns" tab added)

### 4. Batch Generation Scripts
- `scripts/generate-zone-conversations.py` — English → Italian via Opus-MT
- `scripts/prepare-llm-prompts.py` — extracts zone vocab, creates LLM prompts
- `scripts/batch-generate-ollama.py` — batch-generates dialogues via local Ollama
- `scripts/generate-practice-scenarios.py` — batch-generates quiz scenarios via Ollama
- `scripts/ask-ollama-feedback.py` — feeds project context to Ollama for strategic review
- `scripts/audit-italian.py` — extracts Italian content, creates Minerva audit prompts

### 5. Audit Pipeline
- **File:** `audit-prompts-italian.json` (144 prompts ready)
- 136 zone story dialogues + 8 Think Like lessons with Italian text
- **Usage:** `python scripts/audit-italian.py --batch --model minerva`
- Outputs: `audit-results-italian.json` with PASS/NEEDS_FIX/MAJOR_ISSUE ratings

---

## Current Content Status

| Content Type | Count | Status |
|-------------|-------|--------|
| Rooms | 18 | ✅ Complete |
| Zones with vocab | 66 | ✅ Complete |
| Zone stories (IT) | ~72 | ✅ Complete |
| Zone stories (EN) | ~72 | ✅ Shadow text exists |
| Missing images | 8 | 📝 Prompts ready |
| Think Like lessons | 35 | ✅ Seeded |
| Practice scenarios | 35 | ✅ Live in Patterns tab |
| Story JSONs | 16 | ✅ In `data/stories/` |

---

## Key Architecture Decisions

- **Static site:** GitHub Pages (no backend yet)
- **Images:** Self-hosted in `public/rooms/` (was ComfyUI, now switching to Kimi)
- **TTS:** Browser SpeechSynthesis API
- **Translation:** Opus-MT for batch (CC-BY 4.0, commercially safe)
- **Data flow:** TypeScript data files → components → static build
- **Deploy:** Push to `srs-karaoke` → auto-deploy via `.github/workflows/deploy.yml`

---

## Immediate Next Steps (In Order)

### Phase 1: Images (You → Kimi)
1. Feed `MISSING_IMAGE_PROMPTS.md` to Kimi for image generation
2. Save outputs to `public/rooms/` with exact filenames:
   - `rooms/piazza-fontana.jpg`
   - `rooms/piazza-bar.jpg`
   - `rooms/piazza-fermata.jpg`
   - `rooms/piazza-panchina.jpg`
   - `rooms/calendario-settimana.jpg`
   - `rooms/calendario-mesi.jpg`
   - `rooms/calendario-stagioni.jpg`
   - `rooms/calendario-tempo.jpg`
3. Commit and push

### Phase 2: English Dialogues (You)
1. Complete English dialogues for all zones
2. Can use `scripts/batch-generate-ollama.py` with Mistral/Mixtral as a first draft
3. Human-curate the output
4. Merge into `src/data/zone-stories.ts`

### Phase 3: Think Like Italian (You)
1. Expand `think-like.ts` EN←IT lessons beyond current 10
2. Expand IT←EN lessons beyond current 6
3. Focus on common traps: age, hunger, agreement, subjunctive, reflexives, prepositions

### Phase 4: Audit (Kimi + You)
1. Start Ollama: `ollama serve`
2. Run: `python scripts/audit-italian.py --batch --model minerva`
3. Review `audit-results-italian.json`
4. Fix flagged issues in `zone-stories.ts` and `think-like.ts`

### Phase 5: Polish & Deploy (Kimi)
1. Build: `npm run build`
2. Fix any TypeScript errors
3. Push to `srs-karaoke`
4. Verify live deployment

---

## Important Files for Kimi

| File | Purpose |
|------|---------|
| `src/data/rooms.ts` | Master room/zone definitions with vocab positions |
| `src/data/zone-stories.ts` | All conversational stories (IT + EN) |
| `src/data/think-like.ts` | False-friends lessons |
| `src/data/practice-scenarios.ts` | Quiz scenario data |
| `src/pages/RoomPage.tsx` | Main room view (tabs: explore, learn, stories, practice, patterns, dialogue, culture, test) |
| `src/components/PracticeCard.tsx` | Interactive quiz component |
| `src/components/PatternsTab.tsx` | Think Like tab wrapper |
| `src/types/index.ts` | TypeScript types (TabType includes 'patterns') |
| `AGENTS.md` | Project conventions for AI assistants |
| `PLAN.md` | Execution plan |

---

## Known Issues

1. **PowerShell encoding:** Windows PowerShell has UTF-8 issues with `è`, `à`, etc. The files themselves are correct; shell display is wrong.
2. **NLLB-200:** Do NOT use. CC-BY-NC (non-commercial). Use Opus-MT instead.
3. **Context limit:** This project is large. Work in focused chunks.

---

## How to Continue This Work

```bash
# Pull latest
 git pull origin srs-karaoke

# Install deps
 npm install

# Dev server
 npm run dev

# Build
 npm run build

# Generate Italian audit prompts
 python scripts/audit-italian.py

# Run audit via Ollama (requires ollama serve)
 python scripts/audit-italian.py --batch --model minerva
```

---

## Questions?

Check `AGENTS.md` for coding conventions and `PLAN.md` for execution order.
