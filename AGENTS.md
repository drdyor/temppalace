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
| AI gen | Ollama local (`src/hooks/useOllama.ts`) + OpenRouter fallback (`src/services/openrouter.ts`) |
| Image gen | ComfyUI local (`src/services/comfyService.ts`) |

**No backend.** Everything is static; user data (vocab progress, SRS intervals, settings) is stored in `localStorage`.

**Browser compatibility warning:** Web Speech API (`SpeechRecognition`) is not supported in Safari/Firefox. The app degrades gracefully but speech features are Chrome/Edge only.

**localStorage fallback:** If `localStorage` is unavailable (private browsing, storage quota exceeded), the app falls back to in-memory state — progress is lost on reload. No explicit error is shown.

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
  services/        External service wrappers (see below)
```

### `src/services/` — What's in there

| File | Purpose |
|------|---------|
| `comfyService.ts` | Wraps local ComfyUI API (`http://127.0.0.1:8188`) for image generation. Currently imports `italianVocabulary` — **flagged TODO(LANG-VELCRO)**. |
| `openrouter.ts` | Wraps OpenRouter AI API as a fallback for AI generation. API key is hardcoded in the file (static app, no secrets management). |

### Room → Page routing

`RoomPage.tsx` reads `roomId` from the URL (`/rooms/:roomId`), calls `getRoomById(roomId)` from `src/data/rooms.ts`, and filters `branchingScenarios` via `s.roomId === roomId`. If no room matches, the page renders a not-found state. Zone `interiorImage` paths in `rooms.ts` are relative to `public/rooms/`.

### `localStorage` schema

| Key | Type | Contents |
|-----|------|----------|
| `memory-palace-language` | `string` | Language code, e.g. `"italian"` |
| `memory-palace-learning-direction` | `"target" \| "inverse"` | Which direction to drill |
| `memory-palace-user-vocab-{iso}` | `UserVocabEntry[]` | User-added words per language (e.g. `memory-palace-user-vocab-it`) |
| `memory-palace-fsrs` | `FSRSRecord[]` | SRS review schedule (due dates, intervals, ease factors) |

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
- **Conversation templates** — `conversation-templates.ts` maps legacy JSON fields (`english`→`source`, `italian`→`target`) at runtime so existing JSON doesn't need rewriting.

### What's Still Italian-Only ⚠️

The following files are **flagged** with `// TODO(LANG-VELCRO)` comments. French/Spanish are **not usable** until these are addressed:

| File | Status | Notes |
|------|--------|-------|
| `src/data/italian-generated.ts` | 🔴 Hardcoded | 1,500+ word dictionary. Needs FR/ES word lists. |
| `src/data/word-sentences.ts` | 🔴 Hardcoded | Example sentences for vocab. |
| `src/data/stories.ts` | 🔴 Hardcoded | Story content. |
| `src/data/cultural-fluency.ts` | 🔴 Hardcoded | Cultural tip strings. |
| `src/data/dialogues.ts` | 🔴 Hardcoded | Legacy dialogue data. Being phased out — replaced by `branching-scenarios.ts`. Do not extend; migrate content to branching scenarios instead. |
| `src/hooks/useOllama.ts` | 🔴 Hardcoded | Hook itself is generic (accepts any `systemPrompt`), but **callers** pass Italian-only prompts. Search for `generateScenario` call sites and pass language-aware prompts. |
| `src/services/comfyService.ts` | 🔴 Hardcoded | Imports `italianVocabulary` directly. Needs to accept language as a parameter. |
| `src/data/branching-scenarios.ts` | 🟡 Partial | 7 rooms fully rewritten with practical human conversations; 12 rooms still have TODO stubs (Bathroom, Dining Room, Study, etc.) — see structure below. |
| `public/data/expanded-phrases.json` | 🟡 Partial | Only kitchen phrases have FR/ES translations. Run DeepL pipeline (below) for other rooms. |

### How to Add a New Language

1. **Registry:** Add entry to `LANGUAGE_REGISTRY` in `src/lib/language-config.ts` with TTS code, voice hint, native name, and article rules.
2. **Data file:** Create `src/data/{language}.ts` following `src/data/italian.ts` as a model (rooms array + vocab items with `x`/`y` zone positions).
3. **Vocab key:** Use `memory-palace-user-vocab-{iso}` as the `localStorage` key (e.g. `memory-palace-user-vocab-fr`).
4. **Templates pipeline:**
   - `node scripts/expand-templates.mjs` — reads `src/data/conversation-templates.json`, expands slot permutations, writes `src/data/expanded-phrases.json` and `data/deepl-input.txt` (one English phrase per line).
   - Paste `data/deepl-input.txt` into DeepL (EN → target language), save output to `data/deepl-output.txt` (one translated line per input line — line count must match exactly).
   - `node scripts/merge-deepl.mjs` — merges `deepl-output.txt` back into `expanded-phrases.json`. Aborts if line counts don't match.
5. **Scenarios:** Write `BranchingScenario[]` entries in `src/data/branching-scenarios.ts` (see structure below).
6. **UI:** Ensure `availableLanguages` in `LanguageContext.tsx` includes the new `LanguageData` object.
7. **AI prompts:** Update `generateScenario` call sites to pass a language-aware system prompt instead of hardcoded Italian instructions.

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
| `src/data/dialogues.ts` | Legacy dialogue lines — being phased out | ❌ Italian-only |

## Branching Scenarios

These are the interactive "choose your own response" conversations. Each scenario lives in `src/data/branching-scenarios.ts`.

**Key fields:**

```ts
{
  id: string,            // kebab-case, e.g. 'kitchen-messy-roommate'
  roomId: string,        // matches room.id in rooms.ts, e.g. 'kitchen'
  title: string,         // English title shown in UI
  titleNative: string,   // Target-language title (currently Italian)
  timeContext: string,   // Scene-setting string, e.g. 'Saturday morning, 10:00 AM'
  startNodeId: string,   // ID of the first ScenarioNode
  culturalLesson: string,
  phrasesLearned: Array<{ target: string, source: string, situation: string }>,
  catCharacter: { id, name, emoji, color },
  nodes: Record<string, ScenarioNode>
}
```

**ScenarioNode structure:**

```ts
{
  id: string,
  speaker: 'narrator' | 'npc' | 'player',
  text: string,          // English narrative/dialogue
  textTarget: string,    // Target-language equivalent
  backgroundEffect?: 'happy' | 'angry' | 'neutral',
  choices?: Array<{
    text: string,        // English choice label (shown to player)
    textTarget: string,  // Target-language phrase (what the player actually says)
    nextNodeId: string
  }>
  // Leaf nodes (no choices) are end states
}
```

**Rewritten rooms (practical human conversations):**
- `kitchen-messy-roommate`
- `cafe-order-coffee`
- `supermarket-finding`
- `bedroom-morning-rush`
- `transport-station`
- `living-room-remote`
- `garden-weekend-plan`

**Still TODO:** 12 room stubs (Bathroom, Dining Room, Study, Office, Gym, Park, Restaurant, Hotel, Airport, Hospital, Bank, Post Office). Follow the kitchen scenario as the canonical example.

## Build & Deploy

```bash
npm run build     # Production build → dist/
npm run preview   # Preview locally
```

- Branch `srs-karaoke` auto-deploys to GitHub Pages via `.github/workflows/`.
- Build must be **zero TypeScript errors** before pushing — the CI workflow runs `npm run build` and will fail otherwise.
- No unit tests. Correctness is verified by TypeScript compilation + manual browser testing.
- No linting config currently — do not assume ESLint/Prettier rules are enforced.

## Naming Conventions

- **Language-agnostic fields:** Use `source` / `target` instead of `english` / `italian`.
- **Types:** `textTarget`, `feedbackTarget`, `titleNative` (not `textItalian`).
- **Functions:** `getTtsCode()`, `getVoiceQuery()`, `getArticle()`, `getTargetLabel()`.
- **Flags:** Mark Italian-only code with `// TODO(LANG-VELCRO)`.
- **localStorage keys:** `memory-palace-{feature}` prefix; per-language keys use ISO code suffix, e.g. `memory-palace-user-vocab-it`.

## Key Context for Agents

- **Cat mascots:** The UI uses cartoon cat avatars as "guides" in dialogues. This is intentional charm — the actual dialogue content is practical human conversation. Do not remove them.
- **Missing images:** 119 conversation images + 10 zone interiors are not yet generated. Image generation prompts are in `IMAGE_GENERATION_PROMPTS.md` at repo root. Components handle missing images gracefully (no broken img tags — `RoomImage` component has a fallback).
- **`useOllama.ts` is a generic hook** — it accepts any `systemPrompt`. The Italian-only limitation is at the call sites, not in the hook itself.
- **OpenRouter API key** is hardcoded in `src/services/openrouter.ts`. This is intentional for a static app — do not move it to an env var without adding a backend proxy.
