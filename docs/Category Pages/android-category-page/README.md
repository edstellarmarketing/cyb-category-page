# Android Category Page — deliverables

Per-category deliverables folder (v2 flow). Status: **Stage 4 complete — live route built,
typecheck + production build + lint (Android files) all clean, manual browser QA done.**

Contents:

- `ANDROID_RESEARCH.md` — Stage 1: research, inputs, constraints, 4 hero slide concepts, the
  [reference → Android] substitution map, FLOORS/CEILINGS/CTA/locked-field maps.
- `ANDROID_CONTENT.md` — Stage 2: full approved page copy (14 sections + meta) with char counts.
- `ANDROID_CHECKLIST.md` — Stage 3: Launch Ready 49 + Google + keyword + global gate results;
  PASS with 5 noted deviations + 5 deferred-to-HTML items.
- `android-training.html` — Stage 4: rendered HTML snapshot of the live page (reference artifact
  only; the Next.js route under `src/` is the source of truth).

## Scope (user-approved)
Page covers **Android + cross-platform mobile that ships to Android**, not Android-only. Slug:
`/android-training`. Page label: **Android & Mobile App Training**. Reason: Android-pure catalog
depth (12 programs) does not meet the 8–11 chip × ≥4 program floor; expanded scope yields 22
in-scope programs across 4 catalog-deep chips. See `ANDROID_RESEARCH.md` §2 and
`ANDROID_CHECKLIST.md` noted deviation #1 for the full rationale.

## Where the live page lives
- Route: `src/app/android-training/page.tsx` (URL `/android-training`)
- Components: `src/components/android/Android*.tsx` (17 components — Hero, WelcomeStrip,
  IntroReference, TrainingProgramTabs + SkillsGapPanel + RiskMitigationFlow + GlobalTrends,
  ChipChangesTabber, OurApproach, ProductNewsCards, WhyEdstellar, RecentCustomerSuccesses,
  CorporatePricing, ClientVoices, BusinessNewsCards, FAQ, ContactForm).
- Case-study data: `src/data/android-case-studies.ts` (8 entries, anonymised, ≥4 industries,
  quantified outcomes).

## Stage 4 validation summary
- `npm run typecheck` — PASS (clean).
- `npm run build` — PASS (route compiles to static, listed in build output).
- `npm run lint` — PASS for all Android files (warnings/errors that remain are pre-existing
  in AI/cyber/trainers files, not in scope of this build).
- Browser QA on `http://localhost:3001/android-training` — 0 console errors; the only error
  observed during interaction was an HMR-websocket reconnect (network-suspended, harness
  side-effect, not the app). Hero, catalog, S07 Trending heading, FAQ, contact form all
  render with the approved Title-Case headings and the no-counts S1 description.
- Mobile (390×844) — hero renders correctly with the multi-line Title-Case headline.

## Snapshot vs. source of truth
The `android-training.html` here is a one-shot snapshot of the rendered DOM. It does NOT
include bundled CSS/JS and is NOT the source of truth. Edit components in `src/` to change
the page; re-render the snapshot if you want to refresh this artifact.
