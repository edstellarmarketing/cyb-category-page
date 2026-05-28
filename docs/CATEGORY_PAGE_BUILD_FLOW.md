# Edstellar Category Page — Reusable Build Flow

A repeatable playbook for generating any new Edstellar training category page
(`/[category-slug]`) that matches the live Cybersecurity reference (`src/app/page.tsx`)
and passes the rulebook at `/category-page-template`.

**Core principle (validation-first):** Load the validation rules BEFORE writing copy and
build every section to satisfy them as you go. Validation is not a final phase you discover
problems in — it is the spec you build against. The end-of-run check should be a confirmation,
not a rework scramble.

**Four rule sources** (all tabs on the `/category-page-template` page):
- **Section Rules** tab — per-section char limits, mandatory keywords, locked fields.
- **Google Helpful Content Checklist** tab — people-first, E-E-A-T, guardrails, red flags.
- **Keywords to Target** tab — keyword clusters with pinned placements + floors/ceilings.
- **Launch Ready Checklist** tab — 49-check final gate across 5 dimensions (SEO, Marketing,
  Brand, B2B Tone, CTAs). **This tab is the newest standard and SUPERSEDES the Section Rules tab
  where they conflict.** Known overrides:
  - CTAs: Launch Ready forbids "Enquire Now" (cta1) and assigns intent-specific copy per location
    (see CTA map below). The Section Rules tab's "Enquire Now" instruction is superseded.
  - Pricing tier labels: fit-signal language ("Designed for large corporations"), NOT consumer
    cues like "Most Popular" (brd10) — supersedes the Section Rules pricing example.

### CTA copy map (Launch Ready cta1–cta8 — use these, never "Enquire Now")
| Location | CTA copy | Href |
|---|---|---|
| Hero secondary | `Get a Training Proposal` | #contact |
| Program catalog | `Browse the Full Program Catalog` | #catalog / confirmed URL |
| Pricing package button | `Get a Quote` | #contact |
| Pricing CTA strip | `Talk to a Learning Advisor` | #contact |
| FAQ bottom | `Ask Our Learning Services Team` | #contact |
| Contact form submit | `Send My Training Requirements` | (form action) |

No two adjacent sections may share identical CTA copy (cta10). All hrefs must be valid (cta9/G4).

**Two data sources:**
- `Edstellar Master Catalog.xlsx` — real program names, URLs, categories. Never invent these.
- `edstellar.com` — only for verifying company-wide stats if needed.

---

## Phase 0 — Decide & scaffold

1. **URL slug** — pick a keyword-aware top-level slug (e.g. `/ai-training`, `/data-science`).
2. **Component strategy** — clone each section component into `src/components/[cat]/` as `[Cat]*`
   variants. (Keeps the live pages untouched; marketing copy diverges too much to share props.)
3. **Scaffold the route** — create `src/app/[slug]/page.tsx` mirroring the live page's section
   order, initially importing the existing components as a visible placeholder so the route renders
   immediately. Add an inline migration map (component → future `[Cat]*` variant).
4. Set AI/category metadata stubs (refined in Phase 2-prep).

Live page section order (the canonical order to mirror):
`HeroSlider → WelcomeStrip → IntroReference → TrainingProgramTabs → ChipChangesTabber →
OurApproach → ProductNewsCards → WhyEdstellar → RecentCustomerSuccesses → CorporatePricing →
ClientVoices → BusinessNewsCards → FAQ → ContactForm`

## Phase 1 — Research & inputs (grounded, never invented)

Produce `docs/research/[CATEGORY]_INPUTS.md` containing:
1. **Competitor white space** — where rivals sit (self-paced platforms vs. consulting one-offs)
   and the gap Edstellar owns (instructor-led + customized + cohort + measurable ROI).
2. **Program count + domain breakdown** — filter the Master Catalog by category; bucket into
   ~8–11 domains, each with ≥4 real programs (catalog min-4-per-chip rule). Record the real count.
3. **Featured 4 programs** — flagship picks with verified catalog URLs.
4. **3 industry verticals** for hero slides 2–4, each with category-specific compliance/regulation
   terms. This drives BOTH the slide copy AND the **hero slider menu** (the clickable strip tabs).
   The slider menu is per-category and must be re-chosen every time — never carried over:
   - **Slide 1** stays the generic corporate slide (never a vertical).
   - **Slides 2–4** = the 3 chosen verticals; each slide description must name that vertical's
     category-specific regulations/tools (e.g. AI/BFSI → EU AI Act, SR 11-7; AI/Healthcare → FDA
     AI/ML SaMD, HIPAA). Generic vertical labels with no framework = a fail.
   - **Strip menu per slide:** `stripLabel` (uppercase vertical name, 5–15 chars), `stripSub`
     (sentence-case descriptor, 20–40 chars), and the slide **icon** (lucide) all change to fit
     the new vertical. Replace the previous category's tabs entirely (e.g. cyber `AI SECURITY` tab
     has no place on a non-cyber page).
   - **Rule basis:** Google Checklist **O2** (slides name category-specific regs/tools), Launch Ready
     **mkt2** (≥2 vertical slides name sector-specific frameworks), Red flag **R1** (no slides that
     are another page's copy with `[Category]` swapped), Section Rules **§01** (slide 1 generic;
     4 slides max; strip label/sublabel limits).
5. **[Cyber → Category] substitution map** — roles, certs/frameworks, lab types, KPIs, domains.
   Makes every section rewrite mechanical.
6. **Stat-card sources** — citable industry figures (no invented numbers).

## Phase 2-prep — Load the rulebook as constraints (do this BEFORE writing copy)

Read ALL FOUR tabs. Append a **"Phase 3 criteria, shifted left"** section to the inputs doc.
From the **Launch Ready** tab, pull these into the constraints (they are constructive decisions
made WHILE writing each section, not just end checks):
- **CTAs** — apply the CTA copy map above; never "Enquire Now", "Learn More", "Submit", "Get Started".
- **B2B Tone** — testimonials from senior roles; team-size (cohort/license/hours) pricing, not per-seat;
  no retail language ("enroll now", "self-paced", "lifetime access"); board-reporting outcome language.
- **Brand** — fit-signal pricing labels (not "Most Popular"); no superlatives ("world-class",
  "cutting-edge", "industry-leading"); titles end in "Training"; no accreditation claims.
- **Marketing** — ≥4 case-study industries each with a quantified outcome; ≥1 testimonial with a
  quantified metric; transparent pricing (license counts + hours); qualifying contact-form fields
  (Company, Job Title, Training Requirements); 4 real category-specific resource articles.

Then append the section-level criteria:
- **Page-wide FLOORS** (accurate description, allowed): `instructor-led` ≥10, `group training` ≥8,
  `instructor-led group training` ≥3.
- **Page-wide CEILINGS** (commercial phrases, manipulation if exceeded — K7): `training company`,
  `corporate training company`, `training provider` each ≤2 total AND each pinned to exactly ONE
  named location. Write the **pin map** (which phrase lives in which section).
- **Pinned single-use:** H1 locked pattern (opens `Customized`, ends `for Enterprise[ teams]`);
  `customized instructor-led training` bolded once in WelcomeStrip Para 2; hero slide-1 eyebrow
  `Corporate [Category] Training`.
- **Structural must-haves:** Programs-tab Live Curriculum banner FIRST; card delivery LOCKED to
  `Instructor-led (On-site/Virtual)`; titles end in `Training` (never Course); FAQ 8–12 with
  mandatory Target-Audience Q1 (≥5 real job titles), ILT/VILT definition, vendor-selection Q,
  group-vs-individual Q; answers 200–320 chars; no adjacent same-background sections.

Set up the **validator**: `scripts/validate-ai-page.mjs` (point it at the new slug via the
`AI_URL` env var, or generalize it). It checks floors, ceilings, em-dashes, "course", `vendor-certified`,
meta title/desc, and the USP pin in the live rendered HTML.

## Phase 2 — Build section by section, gated

For each of the 14 sections, in render order:
1. **Read** the live cyber component.
2. **Clone** to `src/components/[cat]/[Cat]X.tsx`, rename the export.
3. **Rewrite** content using the inputs doc: honor the Section Rules char limits, mandatory
   keywords, locked fields, and any keyword pin assigned to this section. Apply the substitution map.
   No em-dashes, no "Course", no accreditation claims, no guessed URLs.
4. **Validate char counts** with a throwaway script (catch over/under-length fields before swap).
5. **Swap** the import in `src/app/[slug]/page.tsx`.
6. **Run** `node scripts/validate-ai-page.mjs` → fix any new FAIL → move on.
   (Page-wide floors only reach target once most sections are built; that's expected.)

Pin-bearing sections to get right:
- WelcomeStrip Para 1 opening → `[category] training company` (once).
- WelcomeStrip Para 2 → bolded `customized instructor-led training` (once).
- WhyEdstellar goal statement → opens with `[category] corporate training company`, closes with
  `[category] training provider` (the two remaining commercial pins both live here).

## Phase 4 — Case studies

Append category engagements to the single source of truth `src/data/case-studies.ts`
(industry-anonymized titles, opening industry phrase, exactly 4 quantitative results each).
The carousel and `/case-studies/[slug]` route pick them up automatically.

## Final gate — Launch Ready review (the definitive gate)

The **Launch Ready Checklist** tab is the authoritative pre-publish gate: 49 checks across 5
dimensions (SEO 12, Marketing 9, Brand 10, B2B Tone 8, CTAs 10). A page is publishable ONLY at
100% — all five dimensions complete. Run it last:

1. `node scripts/validate-ai-page.mjs` → all PASS (automates the mechanical SEO/Brand/CTA items).
2. Walk the **Launch Ready** tab — tick all 49; the page must read "Launch Ready" (100%).
   (The Google Checklist and Keywords tabs feed into SEO Ready; walk them if any SEO item is unclear.)
3. **Manual browser QA**: load the page, check console for hydration/HMR errors, verify responsive
   behavior, confirm no two adjacent sections share a background colour, and confirm every CTA uses
   its intent-specific copy from the map (no "Enquire Now" anywhere).
4. Typecheck + build clean (`npm run check`).

### Corrective actions — what happens when a check fails

The gate is **blocking, not advisory**: nothing publishes below 100%, and the gate never "passes
with warnings". A failure is not a dead end — it is a pointer. Every check carries a rule ID, and
each rule ID maps to exactly ONE owning file (via the pin map / CTA map / Section Rules). So
correction is a **traceable, targeted edit loop**, not a page regeneration.

**Per-failure mechanism: trace → locate → edit → re-verify.**
1. Read the failure's rule ID (validator output for mechanical items; the unticked tab item for
   judgment items).
2. Map the rule ID to its owning file using the pin/CTA map in the inputs doc.
3. Make a surgical `Edit` in that `[Cat]*` component (or metadata / `case-studies.ts`).
4. Re-run `node scripts/validate-ai-page.mjs` and re-walk the affected dimension.
5. Loop until the validator is all-green AND the Launch Ready tab reads 100%.

**Failure classes and the corrective move:**

| Class | Example failure | Corrective action |
|---|---|---|
| Mechanical, single-section | `cta1 no "Enquire Now" — found 1` | grep source → fix the one CTA to its mapped copy (e.g. "Talk to a Learning Advisor") |
| Mechanical, cross-section ceiling | `K7 "training provider" <= 2 — found 3` | phrase is pinned to ONE spot; reword the leaked extra occurrences to drop it, keep the pinned one |
| Mechanical, page-wide floor | `G5 instructor-led >= 10 — found 7` | add natural, truthful uses where delivery is described (add description, never stuff) |
| Judgment (manual tab) | `mkt4 — no testimonial has a quantified metric` | edit the owning section (e.g. ClientVoices) to add a real metric; re-walk the dimension |
| Red flag (R1–R6) | a paragraph is another category's copy with `[Category]` substituted | **rewrite the section's content** (structural violation, not a word tweak); these are site-level and block hardest |

**Why few errors reach here:** because validation is shifted-left (run after every section swap),
most fails are caught mid-build. The ones that legitimately surface only at the end are page-wide /
cross-section issues that do not exist until the whole page does (ceiling breaches from two sections
each using a phrase, unmet floors, adjacent same-background sections, duplicated adjacent CTAs) plus
the subjective tone/originality items a script cannot judge.

**Severity note:** most fails are quick copy edits. Red flags (R1–R6) are a different class — they
operate at site level (one can suppress the whole domain) and usually require rewriting a section,
not editing a word.

---

### Quick checklist (tape to the monitor)
- [ ] Phase 0: slug chosen, route renders with placeholders, migration map written
- [ ] Phase 1: inputs doc with real counts/URLs, verticals, substitution map
- [ ] Phase 2-prep: all 4 tabs read; pin map + floors/ceilings + CTA map + tone/brand/marketing constraints written; validator pointed at slug
- [ ] Phase 2: 14 sections cloned, rewritten, char-validated, swapped, page-validated
- [ ] Phase 4: case studies appended to single source of truth
- [ ] Final: validator green, **Launch Ready tab at 100% (49/49)**, browser QA, `npm run check`
