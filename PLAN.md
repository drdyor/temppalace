# Memory Palace — Execution Plan

> Context: 76%. Focus: infrastructure first, then content.

## Phase 1: Infrastructure (You — Kimi)
1. **Images** → Hand `MISSING_IMAGE_PROMPTS.md` to Kimi. 8 prompts, vocab verified.
2. **Commit images** when generated → `public/rooms/`

## Phase 2: Content (You)
3. **English dialogues** → Complete `zone-stories-en.ts` for all missing zones.
4. **Think Like Italian** → Expand `src/data/think-like.ts` EN←IT and IT←EN lessons.

## Phase 3: Audit (Kimi + You)
5. **Run audit script** → `scripts/audit-italian.py` feeds Italian content to Minerva.
6. **Fix flagged issues** → Update zone-stories.ts and think-like.ts.

## Phase 4: Polish (Kimi)
7. **Integrate new content** → Wire expanded think-like into Patterns tab.
8. **Build & deploy** → `npm run build`, push to `srs-karaoke`.

## Phase 5: Expand (Future)
9. **Spanish/French** → Only after Italian is audited and complete.
10. **Backend** → Only after product feels complete on static site.

---

## Current Deliverables Ready

| File | Status |
|------|--------|
| `MISSING_IMAGE_PROMPTS.md` | ✅ Ready for Kimi |
| `src/data/zone-stories-generated.ts` | ✅ 8 IT zones done |
| `src/data/think-like.ts` | ✅ 35 lessons seeded |
| `src/components/PracticeCard.tsx` | ✅ Interactive quiz built |
| `src/components/PatternsTab.tsx` | ✅ Tab integrated |
| `scripts/generate-practice-scenarios.py` | ✅ Batch generator ready |
| `scripts/ask-ollama-feedback.py` | ✅ Ollama feedback tool |

---

## Next Action
Build `scripts/audit-italian.py` — prepares Minerva audit prompts from existing Italian content.
