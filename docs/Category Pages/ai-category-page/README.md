# AI Category Page — deliverables

Per-category deliverables folder (v2 flow). Contents:

- `AI_RESEARCH.md` — Stage 1: research, inputs, constraints, slide concepts.
- `AI_CONTENT.md` — Stage 2: full approved page copy (14 sections + meta).
- `AI_CHECKLIST.md` — Stage 3: Launch Ready 49 + Google + keyword + global gate results.
- `ai-training.html` — rendered HTML snapshot of the built page (reference artifact only).

**The live, functioning page is NOT in this folder.** It is a Next.js route and lives at:
- Route: `src/app/ai-training/page.tsx` (URL `/ai-training`)
- Components: `src/components/ai/Ai*.tsx`
- Case-study data: `src/data/ai-case-studies.ts`

The `.html` here is a static snapshot for handoff/archive; it does not include the app's bundled
CSS/JS and is not the source of truth. Edit the route/components in `src/` to change the page.
