# Kimi Handover — Memory Palace Learner

**Repo**: https://github.com/drdyor/temppalace (branch: `srs-karaoke`)
**Last updated**: 2026-04-21 (session 3)
**Static site**: GitHub Pages (auto-deploys on push to srs-karaoke)

---

## What's Working

- 18 themed rooms, each with zones containing positioned vocabulary
- Zone interior images with vocab labels (click to learn, tap to reveal English)
- **A2 / B1 dialogue toggle**: every zone has a two-person conversation at A2 and B1 level. `src/data/zone-stories.ts` — 102 entries (51 zones × 2 levels). `getZoneStory(zoneId, 'a2'|'b1')` to retrieve.
- **Grammar tagging**: A2 + B1 exchanges annotated with `grammarTags: [{text, type}]`. Types: `passato_prossimo`, `futuro`, `congiuntivo`, `imperfetto`, `condizionale`, `imperativo`. 294 B1 lines + 222 A2 lines tagged. Tagged phrases highlighted inline in the dialogue panel.
- **Spoken playback**: Play All button steps through each line with TTS, highlights active bubble.
- **Save words**: long-press any Italian word → saves to localStorage → export as Anki `.txt`
- **Fill-in-the-blank**: `src/components/FillBlankPanel.tsx` + `src/data/fill-stories.json` (44 zones, 5 sentences each, 3-choice format)
- **User-authoring mode**: Edit toggle → click image to place new words → auto-translates EN→IT → saved to localStorage
- **Template drill**: substitution practice ("Pass me {the salt}") with register filter + translation status
- FSRS spaced repetition deck + Review page
- TTS via Web Speech API (it-IT, fr-FR, es-ES ready)
- Export/Import user vocab as JSON
- `/preview` route — visual audit of all zone images with vocab labels overlaid

---

## What Kimi Needs to Generate

### 0. NEW — Two New Rooms (10 images, highest priority)

**La Piazza** and **Il Calendario** are new rooms added 2026-04-21. They have no images yet. These are the most important to generate first as they cover the biggest A1/A2 gaps (verbs + time).

Files go in `public/rooms/`. The rooms are already wired in `src/data/rooms.ts` — just drop the images in.

**IMPORTANT for verb zones**: Labels are placed over PEOPLE/ACTIONS, not objects. Position the figures as described so the label floats over the right person.

---

#### rooms/piazza.jpg — Main Room Image (La Piazza)
> Sunny Italian town square (piazza), wide angle, late morning. Stone-paved ground, a central fountain in the middle-left area, a bar/café with outdoor tables on the left, a bus stop on the right side, a park bench in the lower-centre, pigeons on the ground. Warm ochre buildings with terracotta roofs. Italians going about their day — chatting, ordering coffee, waiting for the bus. Cozy illustration style, warm Mediterranean light.

---

#### rooms/piazza-fontana.jpg — La Fontana (essere, stare, avere, fare, dare)
Label positions: essere(20%,30%), stare(50%,30%), avere(80%,30%), fare(20%,70%), dare(50%,70%)

> A beautiful stone fountain in the centre. Around it: **left side** — a figure sitting still beside the fountain, eyes closed, peacefully existing (essere — to be); **centre** — a figure standing calmly at the fountain's edge, looking at the water (stare — to stay/stand); **right side** — a figure holding a coin purse and bag, clearly owning things (avere — to have); **bottom-left** — a figure actively tossing coins into the fountain with both hands (fare — to do/make); **bottom-centre** — a figure passing a coin to another person (dare — to give). Each figure clearly separated with space for a label. Stone fountain, sunlight, warm ochre tones.

---

#### rooms/piazza-bar.jpg — Il Bar (volere, potere, dovere, prendere, mettere)
Label positions: volere(20%,25%), potere(50%,25%), dovere(80%,25%), prendere(35%,65%), mettere(65%,65%)

> Italian bar counter and outdoor terrace. **Top-left**: a customer pointing eagerly at the pastry case with desire on their face (volere — to want); **top-centre**: a barista gesturing "yes, I can do that" with open confident hands (potere — can/to be able); **top-right**: a figure looking at their watch with a sense of obligation, must-leave expression (dovere — must/have to); **bottom-left**: a customer reaching forward to take a coffee cup from the counter (prendere — to take/have); **bottom-right**: a barista placing a saucer carefully down on the table (mettere — to put/place). Warm terrace light, mosaic floor tiles.

---

#### rooms/piazza-fermata.jpg — La Fermata (andare, venire, partire, arrivare, uscire, tornare)
Label positions: andare(15%,25%), venire(40%,25%), partire(65%,25%), arrivare(90%,25%), uscire(30%,70%), tornare(65%,70%)

> A city bus stop in the piazza. **Top row, left to right**: a figure walking away from the stop with a bag (andare — to go); a figure walking toward the stop waving hello (venire — to come); a figure stepping onto a departing bus (partire — to leave/depart); a bus pulling in with a figure stepping off (arrivare — to arrive); **bottom-left**: a figure stepping out through a doorway into the open (uscire — to go out); **bottom-right**: a figure coming back through a gate with shopping bags and a smile (tornare — to return). Bus stop pole with timetable visible. Warm afternoon light.

---

#### rooms/piazza-panchina.jpg — La Panchina (dire, parlare, vedere, sapere, capire)
Label positions: dire(20%,30%), parlare(50%,30%), vedere(80%,30%), sapere(30%,70%), capire(65%,70%)

> A park bench in a shaded corner of the piazza. **Top-left**: one figure leaning forward saying something emphatic with finger raised (dire — to say/tell); **top-centre**: two figures engaged in animated conversation (parlare — to speak); **top-right**: a figure shading their eyes looking into the distance, noticing something (vedere — to see); **bottom-left**: a figure tapping their temple knowingly, the "I know" gesture (sapere — to know); **bottom-right**: a figure with a lightbulb moment, hands open and expression of sudden understanding (capire — to understand). Dappled light through trees, pigeons nearby.

---

#### rooms/calendario.jpg — Main Room Image (Il Calendario)
> A cosy study room with one full wall covered in beautiful calendar pages — a large illustrated wall calendar showing the months, a smaller weekly planner, a seasons chart, and a clock. Warm desk lamp, wooden shelves with books, plants on the windowsill. Autumn light through the window. Illustrated map-like charts of Italy's seasons pinned to the wall. Cozy, organised, Italian home aesthetic.

---

#### rooms/calendario-settimana.jpg — La Settimana (7 days)
Label positions: lunedì(13%,17%), martedì(29%,17%), mercoledì(45%,17%), giovedì(61%,17%), venerdì(77%,17%), sabato(30%,60%), domenica(65%,60%)

> A large illustrated weekly planner pinned to a corkboard. **Top row** (5 weekday columns, evenly spaced left to right): Monday column with a briefcase icon, Tuesday with a coffee cup, Wednesday with a film clapper, Thursday with a shopping bag, Friday with a cocktail glass. **Bottom section** (wider): Saturday column with a sun and sleeping figure (half of the bottom width, centred at 30%), Sunday column with a church and family scene (centred at 65%). Each day's column has a distinct pastel colour block header with room for a label above it. Warm corkboard background, pins, handwritten style.

---

#### rooms/calendario-mesi.jpg — I Mesi (12 months)
Label positions: 4 columns × 3 rows — Jan(13%,15%), Feb(38%,15%), Mar(63%,15%), Apr(88%,15%), May(13%,45%), Jun(38%,45%), Jul(63%,45%), Aug(88%,45%), Sep(13%,75%), Oct(38%,75%), Nov(63%,75%), Dec(88%,75%)

> A large illustrated year calendar spread across a page, 4 columns × 3 rows of monthly mini-calendars. Each month has a tiny seasonal illustration above the calendar grid: **January** snowflakes, **February** heart/Carnevale masks, **March** crocuses, **April** rain and umbrella, **May** flowers, **June** sun, **July** beach ball, **August** ice cream cone, **September** school backpack, **October** autumn leaves, **November** fog/bare trees, **December** Christmas star. Each mini-calendar clearly labelled with a large month header. Italian aesthetic, warm colour palette.

---

#### rooms/calendario-stagioni.jpg — Le Stagioni (4 seasons)
Label positions: primavera(20%,25%), estate(50%,25%), autunno(20%,70%), inverno(50%,70%)

> A square room divided into four seasonal quadrants by a central cross. **Top-left** (primavera/spring): pink cherry blossom, green hills, a lamb, warm yellow light. **Top-right** (estate/summer): bright blue sky, sunflowers, a beach umbrella, intense sun. **Bottom-left** (autunno/autumn): orange and red maple leaves, a pumpkin, misty morning light. **Bottom-right** (inverno/winter): snow on rooftops, bare trees, a fireplace glow, blue-white tones. Each quadrant visually distinct with the season's defining elements. The four sections meet in the centre where all seasons touch. Illustrated, warm and inviting.

---

#### rooms/calendario-tempo.jpg — Oggi e Domani (time adverbs)
Label positions: oggi(13%,20%), ieri(38%,20%), domani(63%,20%), adesso(88%,20%), dopo(13%,55%), prima(38%,55%), sempre(63%,55%), mai(88%,55%), ancora(20%,85%), tardi(50%,85%), spesso(80%,85%)

> An illustrated timeline room with a horizontal timeline ribbon running across the wall. On the ribbon, clearly separated sections: **far left** — "yesterday" section with a figure looking back at footprints (ieri); **centre-left** — "today" section with a bright sun and figure standing in the present moment (oggi); **centre-right** — "now" section with a clock showing the current time (adesso); **far right** — "tomorrow" section with a figure looking toward a sunrise (domani). Below the ribbon: **after** (a figure waiting behind a door), **before** (a figure at the front of a queue), **always** (a figure doing the same action in 3 repeated panels), **never** (a crossed-out action with a red circle), **still/yet** (a figure mid-action), **late** (a figure running toward a clock), **often** (a figure shown 3 times in the same spot). All 11 moments clearly separated and individually labelable.

---

### 1. Missing Zone Interior Images (10 images)

These go in `public/rooms/`. After generating, add `interiorImage: '/rooms/{filename}'` to the matching zone object in `src/data/rooms.ts`.

**CRITICAL**: Every item in the vocab list must be clearly visible and individually recognisable in the image. The app places word labels at specific x/y positions over the image — if the item isn't there, the label floats over empty space.

**Global style**: Cozy interior scene, warm natural lighting, clean detailed illustration, children's storybook aesthetic. No text or labels in the image.

---

#### animals-mammals.jpg
**Zone**: animals → mammals | **Words that MUST be visible**: cane (dog), gatto (cat), cavallo (horse), mucca (cow), maiale (pig), pecora (sheep), capra (goat), coniglio (rabbit)

> Warm cosy barn interior. Each animal is individually visible in its own space: a **dog** sitting near the entrance, a **cat** on a hay bale, a **horse** in an open stall, a **cow** behind a wooden fence, a **pig** in a pen with straw, a **sheep** and **goat** together in a corner, and a **rabbit** in a hutch. Each animal is distinct, clearly lit, and separated enough to place individual vocab labels over. Soft golden light from a high window. Storybook illustration style.

---

#### tools-hand.jpg
**Zone**: tools → hand-tools | **Words that MUST be visible**: martello (hammer), cacciavite (screwdriver), pinza (pliers), sega (saw), trapano (drill), metro (tape measure), vite (screw), chiodo (nail)

> Rustic workshop wall with a pegboard. Each tool hangs on its own hook in clear view: **hammer** top-left, **screwdriver** top-centre, **pliers** top-right, **saw** mid-left, **drill** mid-centre, **tape measure** mid-right. On a small shelf below: a **screw** and **nail** in separate visible trays. Each item isolated enough to label individually. Warm wood panelling, soft lantern light.

---

#### tools-workbench.jpg
**Zone**: tools → workbench | **Words that MUST be visible**: banco (workbench), morsa (vice/clamp), lima (file/rasp)

> Close-up of a sturdy wooden **workbench** surface. A metal **vice** (morsa) is clamped to the left edge of the bench, jaws open, clearly the dominant object. A **metal file** (lima) rests diagonally across the bench surface. Wood shavings and sawdust. Warm overhead lamp. The three items are the clear focal points with space around each for a label.

---

#### actions-movement.jpg
**Zone**: actions → movement | **Words that MUST be visible**: correre (run), saltare (jump), camminare (walk), nuotare (swim), volare (fly), cadere (fall), spingere (push), tirare (pull)

> Split-scene illustration showing 8 distinct action vignettes arranged like panels: a figure **running** on a track, **jumping** over a hurdle, **walking** on a path, **swimming** in a pool, a bird **flying** overhead, a figure **falling** off a small step, someone **pushing** a box, someone **pulling** a rope. Each vignette clearly separated with its own space. Bright, energetic, warm colours.

---

#### actions-daily.jpg
**Zone**: actions → daily-actions | **Words that MUST be visible**: svegliarsi (wake up), lavarsi (wash), vestirsi (get dressed), pettinarsi (comb hair), addormentarsi (fall asleep), alzarsi (get up), aprire (open), chiudere (close)

> Cosy bedroom/bathroom split scene showing a morning-to-night routine in 8 distinct visual moments: alarm clock ringing (svegliarsi), person stretching out of bed (alzarsi), hands washing at a sink (lavarsi), person combing hair in mirror (pettinarsi), person putting on a shirt (vestirsi), a door being opened (aprire), a door being closed (chiudere), person asleep in bed (addormentarsi). Each moment clearly separated. Warm pastel tones.

---

#### emotions-feelings.jpg
**Zone**: emotions → feelings | **Words that MUST be visible**: gioia (joy), tristezza (sadness), rabbia (anger), paura (fear), amore (love), odio (hate)

> Six emotional zones arranged in a circular room, each with a distinct colour and character illustration expressing that emotion clearly: warm yellow zone with a joyful leaping figure (gioia), soft blue zone with a drooping sad figure (tristezza), red zone with a fist-clenched angry figure (rabbia), dark purple zone with a frightened crouching figure (paura), pink zone with two figures embracing (amore), grey zone with a turning-away figure (odio). Each section separated by gentle arching lines. Dreamy, safe, storybook style.

---

#### emotions-states.jpg
**Zone**: emotions → states | **Words that MUST be visible**: fiducia (trust/confidence), sorpresa (surprise), ansia (anxiety), orgoglio (pride), vergogna (shame/embarrassment)

> A cosy room with 5 clearly distinct scenes: a figure standing tall with chest out and calm expression (fiducia/confidence), a figure with hands raised and wide eyes seeing something unexpected (sorpresa/surprise), a figure hunched over with hands clasped and worried expression (ansia/anxiety), a figure standing on a small podium with head held high (orgoglio/pride), a figure with head bowed and hands covering face (vergogna/shame). Each vignette in its own warm-lit section of the room.

---

#### farm-fruits.jpg
**Zone**: farm → fruits | **Words that MUST be visible**: mela (apple), pera (pear), pesca (peach), ciliegia (cherry), limone (lemon), arancia (orange), fragola (strawberry), uva (grapes)

> Sunlit orchard scene. Each fruit type is clearly visible and identifiable: a **red apple** tree with apples on branches and on the ground, a **pear** tree with yellow pears, a **peach** tree with fuzzy round peaches, a **cherry** branch with clusters of cherries, a **lemon** tree with bright yellow lemons, an **orange** tree, a patch of **strawberry** plants at ground level with ripe red berries, and a **grape** vine with purple clusters. Each fruit large enough to be recognisable and individually labelable. Golden afternoon light, green grass.

---

#### fantasy-creatures.jpg
**Zone**: fantasy → creatures | **Words that MUST be visible**: drago (dragon), elfo (elf), fata (fairy), strega (witch), nano (dwarf), mago (wizard/mage)

> Enchanted forest clearing at twilight. Six distinct fantasy characters each visible in their own area: a small green **dragon** curled on a mossy rock, a tall pointy-eared **elf** standing beside a tree, a tiny winged **fairy** hovering near flowers with a glow, a dark-cloaked **witch** stirring a small cauldron, a short stocky **dwarf** with a beard and axe, a robed **wizard** with a staff and glowing orb. Each character clearly separated and individually labelable. Magical soft purple and gold light.

---

#### fantasy-supernatural.jpg
**Zone**: fantasy → supernatural | **Words that MUST be visible**: fantasma (ghost), strega (witch), zombie (zombie), vampiro (vampire)

> A moonlit haunted mansion room at night with four clearly distinct supernatural figures: a translucent floating **ghost** near the ceiling with visible through-effect, a pointy-hatted **witch** with a broomstick near a window, a shambling **zombie** with ragged clothes near a doorway, a cape-wearing pale **vampire** standing beside a coffin. Each figure distinct, individually labelable, with space around them. Eerie but stylised and not frightening — storybook horror aesthetic. Deep blue and purple tones, candle light.

---

### 2. Missing Conversation Cat-Mascot Images (119 images)

These go in `public/conversations/` as `{templateId}.jpg`.

Use the `imagePrompt` field from `src/data/conversation-templates-all.json` directly — all prompts are pre-written and scene-specific.

**Global style**: "3D rendered elegant anthropomorphic cat mascot, big expressive eyes, soft fluffy fur, vintage luxury aesthetic, warm cinematic lighting, highly detailed"

See `IMAGE_GENERATION_PROMPTS.md` for the full prompt table by room.

Missing rooms: entrance-hall (eh-01–08), library (li-01–08), bedroom (bd-05–08), bathroom (ba-01–08), garden (ga-01–08), transport (tr-05–08), living-room (lr-04–08), supermarket (sm-01–08), cafe (cf-05–08), gallery (gl-01–08), animals (an-01–08), weather (we-01–08), tools (tl-01–08), actions (ac-01–08), emotions (em-01–08), farm (fa-01–08), fantasy (ft-05–08).

Kitchen (kt-01–08) already complete.

---

### 3. Conversation Templates Expansion

`src/data/conversation-templates.json` currently has **8 kitchen templates only**.
`src/data/conversation-templates-all.json` has **~200 templates across all 18 rooms** but is NOT wired in.

To activate:
1. Copy `conversation-templates-all.json` → `conversation-templates.json`
2. Run `node scripts/expand-templates.mjs` → regenerates `expanded-phrases.json`
3. DeepL pass: paste `data/deepl-input.txt` into DeepL (EN→IT), save to `data/deepl-output.txt`
4. Run `node scripts/merge-deepl.mjs` → fills Italian translations

---

## New Since Last Handover (2026-04-21, session 3)

### Two New Rooms Added

**La Piazza** (`piazza`) — Essential Verbs room
- 4 zones: La Fontana (essere/stare/avere/fare/dare), Il Bar (volere/potere/dovere/prendere/mettere), La Fermata (andare/venire/partire/arrivare/uscire/tornare), La Panchina (dire/parlare/vedere/sapere/capire)
- 21 verbs total. All have pronunciation + 2 example sentences each.
- A2 dialogues written for all 4 zones.
- Adjacency: piazza ↔ entrance-hall, cafe, transport

**Il Calendario** (`calendario`) — Days, Months & Time room
- 4 zones: La Settimana (7 days), I Mesi (12 months), Le Stagioni (4 seasons), Oggi e Domani (11 time adverbs)
- 34 words total. All have examples. Days have correct accents (lunedì not lunedi).
- A2 dialogues written for all 4 zones.
- Adjacency: calendario ↔ library, entrance-hall

All 10 images are **placeholder** (`rooms/piazza.jpg` etc.) — Kimi generates these (see Section 0 above).

### Pronunciation Regeneration

All 1004 vocabulary items in `italian-generated.ts` had pronunciation guides regenerated via qwen3:8b (think:False). Previous guides scored 3/10 (wrong stress, diphthonged vowels). New guides follow strict rules: CAPS = stress, a=ah, e=eh (not ay), o=oh, i=ee, u=oo, ch=k, gli=lyee, gn=nyee.

~85% are now correct. Known remaining issues: ~15% still have minor vowel inconsistencies. Script to re-run: `C:/tmp/fix_pronunciations_8b.py` (resume-capable).

### Rich Content Added to italian.ts

`italianRichContent` in `src/data/italian.ts` now has entries for:
- All 21 essential verbs — notes on conjugation type + 2 example sentences each
- 7 days of the week — notes + 1 example each
- 12 months — notes + 1 example each
- 4 seasons — 1 example each
- 11 time adverbs — notes + 1 example each

### Functional Words Added to italian-generated.ts

Session 2 added: 7 pronouns (io, tu, lui, lei, noi, voi, loro), 5 articles (il, lo, la, un, una), 3 prepositions (di, da, su), 4 colours (blu, marrone, arancione, viola), 1 adjective (corto), 1 adverb (spesso)

---

## New Since Last Handover (2026-04-19, session 2)

### Grammar Tags — Now in zone-stories.ts

All grammar tags fully merged. `src/data/zone-stories.ts` has 294 tagged B1 exchanges and 222 tagged A2 exchanges. Inline highlighting works in the dialogue panel for both levels.

Rebuild pipeline if you regenerate dialogues:
1. `C:/tmp/tag_b1_grammar.py` — tags B1 (and A2) via qwen3:8b → `zone_dialogues_b1_tagged.json`
2. `C:/tmp/merge_grammar_tags.py` — merges tags into `*_fixed.json` files
3. `C:/tmp/rebuild_zone_stories.py` — writes final `zone-stories.ts`

### A2 Quality Improvements — Minerva Rewrites

Minerva (native Italian 7B) audited all 51 A2 dialogues and rewrote 9 flagged zones:
- **Rewritten**: bathroom, coat-rack, daily-actions, desk, furniture, movement, sky, tv
- **storms**: confirmed fine — Minerva's rewrite was identical to the original
- Rewrite script: `C:/tmp/minerva_regen_flagged.py`

Also fixed a bilingual parser bug in 3 zones (furniture, movement, storms) where English duplicate exchanges ("You:", "Friend:") had leaked in as Italian lines. Now cleaned.

### Zone Dialogues — A2 + B1

`src/data/zone-stories.ts` — 51 zones × 2 levels (A2 + B1) = 102 dialogue entries. All 102 have full `en` translations (0 empty).

```typescript
import { getZoneStory } from '../data/zone-stories';
const story = getZoneStory('shower', 'b1'); // or 'a2'
```

Each `ZoneStory` has:
- `exchanges: ZoneExchange[]` — `{ speaker, it, en, grammarTags? }`
- `grammarTags?: GrammarTag[]` — `{ text: string, type: GrammarFeature }`
- `level: 'a2' | 'b1'`

**Grammar features tagged**: `passato_prossimo`, `futuro`, `congiuntivo`, `imperfetto`, `condizionale`, `imperativo`

B1 dialogues generated by qwen3:14b, judged by Minerva-7B (avg score 4.06/5). A2 dialogues from DeepSeek + qwen3:14b, 9 worst zones rewritten by Minerva.

### Fill-in-the-Blank

`src/data/fill-stories.json` — 44 zones, 5 sentences each.

Each sentence: `{ it, en, handWord, distractors: [string, string] }`

Component: `src/components/FillBlankPanel.tsx` — handles display, 3-choice UI, scoring, restart.

Note: 7 zones have dialogues but no fill-in-blank sentences yet (51 dialogue zones vs 44 fill zones).

### Vocab Preview

`/preview` route — `src/pages/VocabPreviewPage.tsx`. Shows every zone image with vocab labels overlaid at their x/y positions. Use this to audit which labels are floating over empty space before requesting new images.

---

## Product Roadmap (for context)

- **v1 (now)**: Italian only, GitHub Pages, free
- **v2**: Spanish → French (Mistral + pre-recorded audio) → Maltese. Offline PWA. Funded humanitarian angle — refugee kids in Malta learning via French bridge language. Target funders: AMIF, UNHCR Innovation Fund, Save the Children.
- **v3**: 3D spatial navigation (NVIDIA Cosmos-style). True method of loci. Premium tier only.

---

## Do NOT Change

- `src/lib/translate.ts` — velcro provider layer, multi-language ready
- `src/lib/user-vocab.ts` — localStorage store, per-language keys
- `src/data/zone-stories.ts` — do not hand-edit; regenerate via Python scripts in `C:/tmp/`
- `src/components/TemplateDrill.tsx` — register filter + translation counter
- `src/data/conversation-templates.ts` — type definitions + JSON loader
- Dead code files (`dialogues-social.ts`, `comprehensiveLessons.ts`, `life-narratives.ts`) — kept intentionally

## Architecture Notes

- **Static site** — no backend. All state in localStorage.
- **Translation**: `TranslateProvider` interface → `MyMemory` default. Will swap to DeepL API later.
- **Multi-language ready**: nothing hardcodes 'it'. Target lang flows from `LanguageContext.currentLanguage` → `isoFor()`. All dialogue content must stay Italian-first; language of instruction (labels, UI) is separate.
- **User vocab**: stored per language key (`memory-palace-user-vocab-it`). Export/Import JSON for backup.
- Images gracefully hide if missing (`onError` → hide), so partial image sets don't break anything.
- **Bilingual parser rule**: any script that generates `it`/`en` exchange pairs MUST assert `en` is non-empty before saving. The model often outputs `English translation: ...` as a pseudo-speaker — filter it into the previous exchange's `en` field.
