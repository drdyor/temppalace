# AGENTS.md — Memory Palace Learner

> Agent-facing documentation for the Memory Palace language learning app.
> Human README lives elsewhere; this file is for coding agents.

## Project Identity

**Name:** Memory Palace Learner  
**What it is:** A React-based static language learning site using the "memory palace" method — vocabulary is anchored to spatial rooms (Kitchen, Cafe, Bedroom, etc.). Features flashcards, branching dialogue scenarios, conversation templates, stories, SRS review, speech recognition, and TTS.  
**Deploy target:** GitHub Pages (auto-deploy on push to `srs-karaoke` branch)  
**Live URL:** `https://drdyor.github.io/temppalace/`

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | React 19 + TypeScript |
| Build tool | Vite v7.3.2 |
| Styling | Tailwind CSS v4 |
| Router | `react-router-dom` (hash router for GH Pages) |
| State | React Context + `localStorage` |
| SRS | Custom FSRS-lite implementation (`src/lib/fsrs.ts`) |
| Speech | Web Speech API (`speechSynthesis` + `SpeechRecognition`) |
| Icons | `lucide-react` |
| AI gen | Ollama local generation (`src/hooks/useOllama.ts`) |

**No backend.** Everything is static; user data (vocab progress, SRS intervals, settings) is stored in `localStorage`.

## Architecture

```
src/
  pages/           Route-level components (RoomPage, LandingPage, ReviewPage, etc.)
  components/      Reusable UI (TemplateDrill, DialogueScene, FlashcardDeck, etc.)
  sections/        Page sub-sections (RoomExplorer, etc.)
  context/         React contexts (LanguageContext, UserVocabContext, etc.)
  hooks/           Custom hooks (useTtsSpeech, useSpeechRecognition, useOllama, etc.)
  data/            Static data files (scenarios, vocab, stories, dialogues)
  lib/             Utilities (fsrs.ts, language-config.ts, speech-utils.ts)
  types/           Shared TypeScript interfaces
  services/        External service wrappers
```

## Language Agnosticism ("Language Velcro")

The app is being refactored from Italian-only to multi-language. This is an **in-progress refactor**.

### What's Done ✅

- **`src/lib/language-config.ts`** — Central registry. All TTS codes, voice hints, articles, and native names flow through here. Currently supports `italian`, `french`, `spanish`.
- **`src/types/index.ts`** — Generic `textTarget` / `text` / `feedbackTarget` fields on `BranchingScenario` (replaced `textItalian`).
- **`src/context/LanguageContext.tsx`** — Added `learningDirection: 'target' | 'inverse'` (target→source or source→target). Persisted in `localStorage`.
- **TTS de-hardcoded** — `RoomPage.tsx`, `TemplateDrill.tsx`, `DialogueScene.tsx`, `StoryReader.tsx` all use `getTtsCode(currentLanguage)` instead of hardcoded `it-IT`.
- **Speech recognition** — `useSpeechRecognition.ts` uses generic `normalizeSpoken()` / `compareSpoken()`.
- **UI labels** — "Source" / "Target" instead of "English" / "Italian". `LandingPage.tsx` uses `getTargetLabel()`.
- **Gender articles** — `getArticle(gender, lang)` returns `il/la` (IT), `le/la` (FR), `el/la` (ES).
- **Conversation templates** — `conversation-templates.ts` maps legacy JSON fields (`english`→`source`, `italian`→`target`) at runtime.

### What's Still Italian-Only ⚠️

The following data files are **flagged** with `// TODO(LANG-VELCRO)` comments. They contain Italian text and need French/Spanish equivalents before those languages are fully usable:

| File | Status | Notes |
|------|--------|-------|
| `src/data/italian-generated.ts` | 🔴 Hardcoded | 1,500+ word dictionary. Needs FR/ES word lists. |
| `src/data/word-sentences.ts` | 🔴 Hardcoded | Example sentences for vocab. |
| `src/data/stories.ts` | 🔴 Hardcoded | Story content. |
| `src/data/cultural-fluency.ts` | 🔴 Hardcoded | Cultural tip strings. |
| `src/data/dialogues.ts` | 🔴 Hardcoded | Old dialogue data (being phased out for branching scenarios). |
| `src/hooks/useOllama.ts` | 🔴 Hardcoded | Italian-only system prompts for AI generation. |
| `src/data/branching-scenarios.ts` | 🟡 Partial | 7 rooms fully rewritten with practical human conversations; 12 rooms still have TODO stubs. |
| `public/data/expanded-phrases.json` | 🟡 Partial | Only kitchen phrases have FR/ES translations. Rest need DeepL pipeline. |

### How to Add a New Language

1. **Registry:** Add entry to `LANGUAGE_REGISTRY` in `src/lib/language-config.ts`.
2. **Data file:** Create `src/data/{language}.ts` following the `italian.ts` pattern (or better: extend the data model to load from JSON).
3. **Vocab:** Provide word list + sentences. Use `memory-palace-user-vocab-{iso}` as the `localStorage` key.
4. **Templates:** Run `scripts/expand-templates.mjs` + `scripts/merge-deepl.mjs` (or manually translate `expanded-phrases.json`).
5. **Scenarios:** Write `BranchingScenario[]` entries in `src/data/branching-scenarios.ts`.
6. **UI:** Ensure `availableLanguages` in `LanguageContext.tsx` includes the new `LanguageData` object.

## Data Files Reference

| File | Purpose | Language Agnostic? |
|------|---------|-------------------|
| `src/data/italian.ts` | Core vocab + room definitions for Italian | ❌ Italian-only |
| `src/data/branching-scenarios.ts` | Conversation game scenarios | 🟡 7 done, 12 stubs |
| `src/data/conversation-templates.ts` | Template drill loader + runtime field mapper | ✅ Adapter pattern |
| `public/data/conversation-templates-all.json` | Source template library | ✅ Generic fields |
| `public/data/expanded-phrases.json` | Expanded phrase translations | 🟡 Kitchen only |
| `src/data/italian-generated.ts` | Large generated word list | ❌ Italian-only |
| `src/data/word-sentences.ts` | Vocab example sentences | ❌ Italian-only |
| `src/data/stories.ts` | Reading stories | ❌ Italian-only |
| `src/data/cultural-fluency.ts` | Cultural tips | ❌ Italian-only |
| `src/data/dialogues.ts` | Legacy dialogue lines | ❌ Italian-only |

## Branching Scenarios

These are the interactive "choose your own response" conversations. Each scenario:
- Lives in `src/data/branching-scenarios.ts`
- Has a `roomId` tying it to a spatial room
- Uses `ScenarioNode` with `speaker: 'narrator' | 'npc' | 'player'`
- Ends with `phrasesLearned[]` shown to the user

**Rewritten (practical human conversations):**
- `kitchen-messy-roommate`
- `cafe-order-coffee`
- `supermarket-finding`
- `bedroom-morning-rush`
- `transport-station`
- `living-room-remote`
- `garden-weekend-plan`

**Still TODO:** 12 room stubs (Bathroom, Dining Room, Study, etc.)

## Build & Deploy

```bash
npm run build     # Production build → dist/
npm run preview   # Preview locally
```

- Branch `srs-karaoke` auto-deploys to GitHub Pages via workflow.
- Build must be **zero TypeScript errors** before pushing.
- No tests currently — rely on `npm run build` for correctness.

## Naming Conventions

- **Language-agnostic fields:** Use `source` / `target` instead of `english` / `italian`.
- **Types:** `textTarget`, `feedbackTarget`, `titleNative` (not `textItalian`).
- **Functions:** `getTtsCode()`, `getVoiceQuery()`, `getArticle()`, `getTargetLabel()`.
- **Flags:** Mark Italian-only code with `// TODO(LANG-VELCRO)`.

## Key Context for Agents

- **Cat mascots:** The UI uses cartoon cat avatars as "guides" in dialogues. This is intentional charm — the actual dialogue content is practical human conversation.
- **Images:** 119 conversation images + 10 zone interiors are missing. Prompts are in `IMAGE_GENERATION_PROMPTS.md` at repo root.
- **localStorage keys:**
  - `memory-palace-language` — current language code
  - `memory-palace-learning-direction` — `'target'` or `'inverse'`
  - `memory-palace-user-vocab-{iso}` — user vocab per language
  - `memory-palace-fsrs` — SRS schedule
