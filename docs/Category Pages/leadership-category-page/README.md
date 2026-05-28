# Leadership Category Page — deliverables

Per-category deliverables folder (v2 flow). Scope: broad leadership umbrella = 115 real catalog programs
(Strategic Leadership 67 + People Management 29 + Leadership Communication 11 + Decision Making 8). Contents:

- `LEADERSHIP_RESEARCH.md` — Stage 1: research, inputs, constraints, 11 domains, 4 slide concepts.
- `LEADERSHIP_CONTENT.md` — Stage 2: full approved page copy (14 sections + meta).
- `LEADERSHIP_CHECKLIST.md` — Stage 3: Launch Ready 49/49 + Google + keyword + global gate results.
- `leadership-training.html` — rendered HTML snapshot of the built page (Stage 4 artifact only; created if HTML is built).

**The live, functioning page (when built) is NOT in this folder.** It is a Next.js route and would live at:
- Route: `src/app/leadership-training/page.tsx` (URL `/leadership-training`)
- Components: `src/components/leadership/Leadership*.tsx`
- Case-study data: appended to `src/data/case-studies.ts`

Status: **All stages complete.** Stages 1-3 content launch-ready (49/49); Stage 4 HTML built and live at
`/leadership-training`. Page-content validator 31/31, `tsc --noEmit` clean, production `next build` passes,
0 console errors. The `leadership-training.html` snapshot is a static artifact; edit the route/components in
`src/` to change the live page.
