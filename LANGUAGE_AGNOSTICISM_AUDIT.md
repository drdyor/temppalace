# Language Agnosticism Audit

> **Date:** 2026-04-18  
> **Status:** Structural layer refactored. Content layer flagged below.

## Legend

| Symbol | Meaning |
|--------|---------|
| ✅ | Language-agnostic — works for any language plugged into the registry |
| ⚠️ | Partially agnostic — structure is ready but content is Italian-only |
| ❌ | Not language-agnostic — hardcoded Italian/English assumptions |
| 🚫 | Deprecated / dead code — not actively used |

---

## Core Infrastructure

| File | Status | Notes |
|------|--------|-------|
| `src/types/index.ts` | ✅ | `BranchingScenario` uses `textTarget`/`text`. Legacy types (`DialogueLine`, `CulturalRule`) keep `italian`/`english` to avoid breaking flagged data files. |
| `src/lib/language-config.ts` | ✅ | Central registry. Add French/Spanish data → update registry → done. No component changes needed. |
| `src/lib/translate.ts` | ✅ | Velcro provider layer. `isoFor()` maps languages. |
| `src/context/LanguageContext.tsx` | ✅ | Supports `learningDirection` ('target' \| 'inverse'). UI labels swap automatically. |
| `src/lib/user-vocab.ts` | ✅ | Per-language localStorage keys already implemented. |

---

## Components & Pages

| File | Status | Notes |
|------|--------|-------|
| `src/pages/RoomPage.tsx` | ✅ | TTS uses `getTtsCode()`. Gender labels use `getArticle()`. Flashcards respect `learningDirection`. Stories tab re-enabled. |
| `src/pages/LandingPage.tsx` | ✅ | Dynamic `targetLabel` from context. No hardcoded "Italian". |
| `src/components/TemplateDrill.tsx` | ✅ | Dynamic labels and TTS. |
| `src/components/DialogueScene.tsx` | ✅ | Dynamic TTS via `getTtsCode()`. |
| `src/components/StoryReader.tsx` | ✅ | Accepts `lang` prop; callers should pass dynamic lang. |
| `src/hooks/useSpeechRecognition.ts` | ✅ | `normalizeSpoken()` works across Romance languages. `compareSpoken()` is generic. |

---

## Data Files — Italian-Hardcoded (Content Layer)

These files contain Italian vocabulary, sentences, stories, and cultural content. To add French or Spanish, create parallel files (e.g., `french.ts`, `spanish.ts`) following the same shape, then add them to `LanguageContext.availableLanguages`.

| File | Status | What Needs to Happen |
|------|--------|----------------------|
| `src/data/italian.ts` | ⚠️ | Rich content overlay. Keep as template. Create `french.ts` / `spanish.ts` mirrors. |
| `src/data/italian-generated.ts` | ⚠️ | 1,500-word base dictionary. Needs French/Spanish equivalents. |
| `src/data/italian-curriculum.json` | ⚠️ | Italian grammar lessons. Needs per-language curricula. |
| `src/data/italian-dictionary.json` | ⚠️ | Raw dictionary data. Needs French/Spanish versions. |
| `src/data/word-sentences.ts` | ⚠️ | ~500 Italian example sentences. Needs per-language sentence files. |
| `src/data/stories.ts` | ⚠️ | Italian fables (Pinocchio, Three Pigs, etc.). Needs translated versions or new stories. |
| `src/data/cultural-fluency.ts` | ⚠️ | Italy-specific cultural rules. Needs per-country variants. |
| `src/data/dialogues.ts` | 🚫 | Legacy role-play data. Unused by RoomPage. Kept for reference. |
| `src/data/dialogues-social.ts` | 🚫 | Legacy social dialogues. Unused. |
| `src/data/dialogues-strategy.ts` | 🚫 | Legacy strategy dialogues. Unused. |
| `src/data/characters.ts` | ⚠️ | Some French-hardcoded system prompts. Needs cleanup if re-activated. |
| `src/hooks/useOllama.ts` | ⚠️ | Italian-only system prompts for LLM generation. |
| `src/services/comfyService.ts` | ⚠️ | Imports `italianVocabulary` directly for prompt generation. |

---

## Branching Scenarios — Dialogue Content

| Room | Status | Notes |
|------|--------|-------|
| Kitchen | ✅ | Practical conversation: "The Messy Roommate" |
| Cafe | ✅ | Practical conversation: "Ordering at the Bar" |
| Supermarket | ✅ | Practical conversation: "Finding Something" |
| Bedroom | ✅ | Practical conversation: "The Morning Rush" |
| Transport | ✅ | Practical conversation: "At the Station" |
| Living Room | ✅ | Practical conversation: "The Remote Control" |
| Garden | ✅ | Practical conversation: "The Weekend Plan" |
| Entrance Hall | ❌ | TODO stub only |
| Library | ❌ | TODO stub only |
| Bathroom | ❌ | TODO stub only |
| Gallery | ❌ | TODO stub only |
| Animals | ❌ | TODO stub only |
| Weather | ❌ | TODO stub only |
| Tools | ❌ | TODO stub only |
| Actions | ❌ | TODO stub only |
| Emotions | ❌ | TODO stub only |
| Farm | ❌ | TODO stub only |
| Fantasy | ❌ | TODO stub only |

**To complete:** Write practical conversation scenarios for the 12 remaining rooms following the same pattern (real human situations, 3-4 choices, `phrasesLearned` array).

---

## Conversation Templates

| Status | Notes |
|--------|-------|
| ✅ | `conversation-templates-all.json` (144 templates) is now wired in. `expanded-phrases.json` only has 27 phrases (kitchen only). To activate all rooms, run the DeepL translation pipeline described in `KIMI-HANDOVER.md`. |

---

## Images

| Status | Notes |
|--------|-------|
| ⚠️ | 119 conversation images missing. 10 zone interior images missing. Prompts are in `IMAGE_GENERATION_PROMPTS.md`. |

---

## To Add a New Language (e.g., French)

1. **Create data files:**
   - `src/data/french.ts` — vocabulary + narratives
   - `src/data/french-generated.ts` — base word dictionary
   - `src/data/french-curriculum.json` — grammar lessons

2. **Update registry:**
   - Add French entry to `src/lib/language-config.ts` (already has stub)

3. **Update context:**
   - Import `frenchData` in `src/context/LanguageContext.tsx`
   - Add to `availableLanguages` array

4. **Content (optional but recommended):**
   - Rewrite `branching-scenarios.ts` `textTarget` fields to French
   - Translate `word-sentences.ts`, `stories.ts`, `cultural-fluency.ts`
   - Run template translation pipeline for `expanded-phrases.json`

5. **Done.** No component code changes needed.

---

## Inverse Learning (English from Italian/French/Spanish)

| Status | Notes |
|--------|-------|
| ✅ | `learningDirection` state exists in `LanguageContext`. Flashcards and tests already swap labels. |
| ⚠️ | Speech recognition still compares against `currentWord.native` (the target language word). For inverse mode, this should compare against `currentWord.english`. Minor fix needed in `PracticeTab`. |
| ⚠️ | TTS in inverse mode should speak English for prompts and target language for answers. Current behavior speaks target language always. |

---

## Known Issues / Follow-ups

1. **PracticeTab speech compare in inverse mode:** Should compare spoken English against `word.english` when `learningDirection === 'inverse'`.
2. **TTS in inverse mode:** Should speak the prompt language (English) during flashcard review when in inverse mode.
3. **Stories tab content:** All stories are Italian-only. Consider hiding the tab or showing a "coming soon" message for non-Italian languages until translations are added.
4. **Cultural fluency tab:** All rules are Italy-specific. Consider hiding or adding a country selector.
5. **Landing page images:** `palace_blueprint.jpg` and room images are Italian-themed. For French/Spanish, new hero images would improve immersion.
