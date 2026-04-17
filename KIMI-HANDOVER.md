# Kimi Handover — Memory Palace Learner

**Repo**: https://github.com/drdyor/temppalace (branch: `srs-karaoke`)
**Date**: 2026-04-17
**Static site**: GitHub Pages (auto-deploys on push to srs-karaoke)

---

## What's Working

- 18 themed rooms, each with zones containing positioned vocabulary
- Zone interior images with vocab labels (click to learn, hover for English)
- **User-authoring mode**: Edit toggle → click image to place new words → auto-translates EN→IT → saved to localStorage
- **Template drill**: substitution practice ("Pass me {the salt}") with register filter + translation status
- Branching dialogue scenarios (bedroom "Wrong Bag" etc.)
- FSRS spaced repetition deck + Review page
- TTS via Web Speech API (it-IT, fr-FR, es-ES ready)
- Export/Import user vocab as JSON

---

## What Kimi Needs to Generate

### 1. Missing Conversation Cat-Mascot Images (175 images)

These go in `public/conversations/` as `{templateId}.jpg`. The TemplateDrill component renders them at `./conversations/${templateId}.jpg`.

Use the `imagePrompt` field from `src/data/conversation-templates-all.json` for generation prompts. Style: cute cartoon cat, children's storybook illustration, warm colors, clean lines.

**Missing by room:**

| Room | Template IDs needed | Count |
|------|-------------------|-------|
| entrance-hall | eh-01 to eh-08 | 8 |
| library | li-01 to li-08 | 8 |
| bedroom | bd-05 to bd-08 | 4 |
| bathroom | ba-01 to ba-08 | 8 |
| garden | ga-01 to ga-08 | 8 |
| transport | tr-05 to tr-08 | 4 |
| living-room | lr-04 to lr-08 | 5 |
| supermarket | sm-01 to sm-08 | 8 |
| cafe | cf-05 to cf-08 | 4 |
| gallery | gl-01 to gl-08 | 8 |
| animals | an-01 to an-08 | 8 |
| weather | we-01 to we-08 | 8 |
| tools | tl-01 to tl-08 | 8 |
| actions | ac-01 to ac-08 | 8 |
| emotions | em-01 to em-08 | 8 |
| farm | fa-01 to fa-08 | 8 |
| fantasy | ft-05 to ft-08 | 4 |
| **Total** | | **119** |

Kitchen (kt-01 to kt-08) is already complete.

### 2. Missing Zone Interior Images (10 images)

These go in `public/rooms/` and need to be referenced via `interiorImage` in `src/data/rooms.ts`.

| Room | Zone ID | Zone Name | Suggested filename |
|------|---------|-----------|-------------------|
| animals | mammals | Mammal Zone | animals-mammals.jpg |
| tools | hand-tools | Hand Tools | tools-hand.jpg |
| tools | workbench | Workbench | tools-workbench.jpg |
| actions | movement | Movement Zone | actions-movement.jpg |
| actions | daily-actions | Daily Actions | actions-daily.jpg |
| emotions | feelings | Feelings | emotions-feelings.jpg |
| emotions | states | Mental States | emotions-states.jpg |
| farm | fruits | Fruit Orchard | farm-fruits.jpg |
| fantasy | creatures | Mythical Creatures | fantasy-creatures.jpg |
| fantasy | supernatural | Supernatural | fantasy-supernatural.jpg |

After generating, add `interiorImage: '/rooms/{filename}'` to the matching zone in `src/data/rooms.ts`.

### 3. Conversation Templates Expansion

`src/data/conversation-templates.json` currently has **8 kitchen templates only**.
`src/data/conversation-templates-all.json` has **~200 templates across all 18 rooms** but is NOT wired in.

To activate all rooms:
1. Copy `conversation-templates-all.json` → `conversation-templates.json`
2. Run `node scripts/expand-templates.mjs` to regenerate `expanded-phrases.json` + `data/deepl-input.txt`
3. Paste `data/deepl-input.txt` into DeepL (EN→IT), save output to `data/deepl-output.txt`
4. Run `node scripts/merge-deepl.mjs` to fill Italian translations

---

## Do NOT Change

- `src/lib/translate.ts` — velcro provider layer, multi-language ready
- `src/lib/user-vocab.ts` — localStorage store, per-language keys
- `src/pages/RoomPage.tsx` — authoring mode UI in SubroomOverlay
- `src/components/TemplateDrill.tsx` — register filter + translation counter
- `src/data/conversation-templates.ts` — type definitions + JSON loader
- Dead code files (`dialogues-social.ts`, `comprehensiveLessons.ts`, `life-narratives.ts`, etc.) — kept intentionally, may be integrated later

## Architecture Notes

- **Static site** — no backend. All state in localStorage.
- **Translation**: `TranslateProvider` interface → `MyMemory` default. Will swap to DeepL API or other providers later.
- **Multi-language ready**: nothing hardcodes 'it'. Target lang flows from `LanguageContext.currentLanguage` → `isoFor()`.
- **User vocab**: stored per language key (`memory-palace-user-vocab-it`). Export/Import JSON for backup.
- Images gracefully hide if missing (`onError` → hide), so partial image sets don't break anything.
