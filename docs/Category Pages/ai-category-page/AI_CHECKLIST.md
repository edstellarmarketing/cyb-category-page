# AI Category Page — Stage 3: Final Checklist

v2 flow, Stage 3 deliverable. Gate run against `AI_CONTENT.md`. Status keys:
**PASS** (verified in content) · **DEFER** (needs the rendered page — only matters if Stage 4 runs) ·
**NOTE** (resolved deviation, with rationale).

Content-launch-ready verdict: **PASS with 3 noted deviations + 5 deferred-to-HTML items.**
No blocking failures, no red flags.

---

## A. Keyword floors / ceilings (counted in the copy, not annotations)

| Rule | Target | Status |
|---|---|---|
| `instructor-led` | ≥10 | PASS (hero ×4, welcome bullet+bold, frameworks, intro, approach step 3, product desc, pricing ×2 labels, WhyEd, FAQ ×3+, contact ×2 — well over 10) |
| `group training` | ≥8 | PASS (hero ×4, welcome para1+stats, WhyEd, pricing heading+desc, FAQ — over 8) |
| `instructor-led group training` | ≥3 | PASS (hero S1, S2, S3, S4) |
| `AI training company` | pin, 1× | PASS (WelcomeStrip Para 1 only) |
| `AI corporate training company` | pin, 1× | PASS (WhyEdstellar goal opening only) |
| `AI training provider` | pin, 1× | PASS (WhyEdstellar goal closing only) |
| `AI Corporate Training Company` | meta title only | PASS |
| `AI corporate training provider` | meta desc only | PASS |
| Any commercial phrase >2× | forbidden | PASS (each used once in copy) |

*(Precise page-wide counts re-run by `scripts/validate-ai-page.mjs` at Stage 4; content-level review confirms floors met and no ceiling exceeded.)*

## B. Global guardrails

| Rule | Status |
|---|---|
| G1 no em-dashes | PASS (colons/commas used; blockquote uses a colon) |
| G2 no "Course" as program noun (FAQ-only exception) | PASS ("courseware" is allowed; "course marketplaces" removed from WhyEd goal) |
| G3 no "vendor-certified" | PASS ("certified trainers" used) |
| G4 CTAs link to #contact / #catalog / confirmed URL | PASS |
| E4 no accreditation/affiliation claims | PASS |
| E5 / brd7 no unsubstantiated superlatives | PASS |
| brd10 no "Most Popular" pricing cue | PASS (fit-signal labels) |
| G8 no two adjacent sections same background | DEFER (rendered-page concern; honor at Stage 4) |

## C. Launch Ready — 5 dimensions (49 checks)

**SEO Ready (12):** PASS except one noted conflict.
- Meta title pattern + ≤56 (41) ✓ · Meta desc pattern + ≤156 (144) ✓ · H1 locked pattern ✓ ·
  pins K4/K5/K6 each once ✓ · FAQ 8–12 with mandatory Q1 + ILT/VILT + vendor-selection + group-vs-individual ✓ ·
  stats sourced (report + year) ✓ · K7 ceiling ✓ · no red flags ✓.
- **NOTE (seo4/K3 conflict):** the checklist's literal seo4 wants Hero Slide 1 *headline* = "[Category]
  Corporate Training Company / Built for Enterprise [Outcome]". The **live cyber reference page does NOT
  do this** — it uses a tension headline + the eyebrow "Corporate [Category] Training" (Section §01 +
  Keywords Cluster B K3), and pins the "Corporate Training Company" phrase to the **meta title** (K1).
  Resolved in favour of the live implementation: AI hero eyebrow = "Corporate Artificial Intelligence
  Training", headline = tension statement. Flagged for your call if you want the literal seo4 headline instead.

**Marketing Ready (9):** PASS.
- Above-fold value prop ✓ · ≥2 hero slides name category-specific frameworks (S2 RAG/agents, S3 EU AI
  Act/NIST/ISO, all four are specific) ✓ · ≥4 case-study industries each with quantified outcome (8 cards,
  BFSI/Insurance/Manufacturing/Pharma/Retail/SaaS/Energy/Telecom) ✓ · ≥1 testimonial with a metric (35%
  time-to-deployment) ✓ · sourced stats ✓ · transparent pricing (licenses + hours) ✓ · outcome language ✓ ·
  4 resource articles, category-specific ✓ · contact form asks Company/Job Title/Training Requirements ✓.

**Brand Ready (10):** PASS.
- instructor-led ≥10 ✓ · group training ≥8 ✓ · `customized instructor-led training` bolded once ✓ ·
  titles end in "Training" ✓ · no "Courses" in headings/CTAs/breadcrumbs/nav ✓ · no em-dashes ✓ ·
  no superlatives ✓ · no "vendor-certified" ✓ · no accreditation claims ✓ · fit-signal pricing labels ✓.

**B2B Tone (8):** PASS.
- Testimonials from CDO / VP Risk / Head of L&D ✓ · case studies frame business outcomes ✓ ·
  pricing by team size (cohorts/licenses/hours) ✓ · no retail platform language ✓ · submit CTA is a
  business transaction ("Send My Training Requirements") ✓ · discovery-call framing present ✓ ·
  board-reporting language (skills delta, model accuracy, time-to-deployment) ✓ · no individual-learner language ✓.

**Clear CTAs (10):** PASS.
- No "Enquire Now" ✓ · no "Learn More/Click Here/Get Started/Submit" ✓ · hero secondary "Get a Training
  Proposal" ✓ · catalog "Browse the Full Program Catalog" ✓ · pricing package "Get a Quote" ✓ · pricing
  strip "Talk to a Learning Advisor" ✓ · FAQ bottom "Ask Our Learning Services Team" ✓ · contact submit
  "Send My Training Requirements" ✓ · all hrefs valid ✓ · no adjacent identical CTA copy ✓.

## D. Google Helpful Content — originality & red flags

- O1/O6 no template-substituted copy: **PASS** — narrative re-authored for AI (pilots→production,
  "can you govern it?", "every employee's tool"); slide *types* differ from cyber's 3-industry pattern.
- O2 hero/industry specificity: **PASS** — slides name EU AI Act, NIST AI RMF, ISO 42001, RAG, agents, ChatGPT/Copilot.
- O3 real program/cert/domain names: **PASS** — all from the catalog.
- O4 sourced stats: **PASS**. E1 verified counts (124 → 120+, 1,500+, 100+): **PASS**.
- Side-by-side test vs cyber hero: **PASS** — only locked anchors match; story + structure differ.
- Red flags R1–R6 all **NO**: **PASS** (no substituted copy, no frequency-target briefs in the copy,
  no date manipulation, genuine domain expertise, no padded FAQ, AI-assisted + human-reviewed per-section).

---

## Noted deviations (accepted, with rationale)
1. **Hero strip label `BFSI` = 4 chars** (Section §01 wants 5–15). Kept as the standard industry acronym, matching the live page.
2. **Catalog CTA "Browse the Full Program Catalog" = 31 chars** (Section §01 CTA example was 20–30). The **Launch Ready CTA map (cta4) supersedes** the Section Rules CTA length.
3. **Resources card 1 badge `AI INSIGHTS`** (Section §11 "locks" it to "THREAT INSIGHTS"). "THREAT INSIGHTS" is cyber-specific; adapting to AI is required by O2 originality. Cards 2–4 unchanged (TRAINING GUIDES / INDUSTRY TRENDS / L&D STRATEGY).

## Deferred to Stage 4 (only matter if HTML is built)
1. G8 no two adjacent sections sharing a background colour (visual, rendered-page).
2. FAQ answer prose finalized + each answer re-validated to 200–320 chars (specs are written; full sentences drafted in code).
3. `node scripts/validate-ai-page.mjs` green on the live URL (precise page-wide counts).
4. Browser QA: console/hydration errors, responsive behavior.
5. Case-study `/case-studies/[slug]` pages built from the 8 card specs (single source `src/data/case-studies.ts`).
