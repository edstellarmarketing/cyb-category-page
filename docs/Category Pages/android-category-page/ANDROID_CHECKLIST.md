# Android Category Page — Stage 3: Final Checklist

v2 flow, Stage 3 deliverable. Gate run against `ANDROID_CONTENT.md`. Status keys:
**PASS** (verified in content) · **DEFER** (needs the rendered page — only matters if Stage 4
runs) · **NOTE** (resolved deviation, with rationale).

Content-launch-ready verdict: **PASS with 5 noted deviations + 5 deferred-to-HTML items.**
No blocking failures. No red flags.

> **Global rule updates (2026-05-28):**
> 1. **Heading case** — all H1/H2/H3 in Title Case. ANDROID_CONTENT.md re-cased; see
>    [[feedback-heading-case]] memory and the `H-case` row in Section B.
> 2. **HeroSlider Slide 1 — no numeric counts.** S1 description must contain zero digits.
>    ANDROID_CONTENT.md S1 description rewritten to drop `20+ programs` and `4 domains`;
>    see [[feedback-s1-no-counts]] memory and the `S1-no-counts` row in Section B.
> 3. **Section 07 (ProductNewsCards) heading LOCKED** to the pattern
>    `Trending [Category Name] Training Programs`. ANDROID_CONTENT.md S07 heading replaced
>    with `Trending Android Training Programs`; see [[feedback-s07-heading-locked]] memory
>    and the `S07-locked` row in Section B.
>
> All three rules codified in `AGENTS.md` (Content Style) and
> `docs/CATEGORY_PAGE_BUILD_FLOW_V2.md` (Stages 1, 2 & 3). Scope: Android + future pages only;
> AI / Cybersecurity / Leadership are grandfathered.

---

## A. Keyword floors / ceilings (counted in the copy, not annotations)

Counts below are case-insensitive against the body copy of `ANDROID_CONTENT.md`, ignoring
spec annotations (`← commercial pin #N`, `(Fit-signal labels; NO "Most Popular".)`) and URL
strings. Confirmed by ripgrep + manual spot-check.

| Rule | Target | Status |
|---|---|---|
| `instructor-led` | ≥10 | PASS (34 in copy: hero ×4, welcome para+bullets+framework, intro, approach steps, product desc, pricing labels, WhyEd, FAQ, contact ×2 — well over 10) |
| `group training` | ≥8 | PASS (14 in copy: hero ×4, welcome para 1, welcome stats sub, WhyEd, pricing heading+desc, FAQ ×2, contact, testimonial — over 8) |
| `instructor-led group training` | ≥3 | PASS (5 in copy: hero S1, S2, S3, S4 plus WhyEd goal statement) |
| `Android training company` | pin #3, 1× in copy | PASS (WelcomeStrip Para 1 opening only; second hit is the spec annotation, not page copy) |
| `Android corporate training company` | pin #4, 1× in copy | PASS (WhyEdstellar goal opening only; meta title counts as pin #1 in upper-case form, by design — both pinned to single locations) |
| `Android training provider` | pin #5, 1× in copy | PASS (WhyEdstellar goal closing only) |
| `Android Corporate Training Company` | pin #1, meta title only | PASS |
| `Android corporate training provider` | pin #2, meta desc only | PASS |
| Any commercial phrase >2× | forbidden | PASS (each used once in copy) |

*(Precise page-wide counts will be re-run by `scripts/validate-ai-page.mjs` once pointed at the
Android slug at Stage 4; content-level review confirms floors met and no ceiling exceeded.)*

## B. Global guardrails

| Rule | Status |
|---|---|
| G1 no em-dashes in page copy | PASS — body prose uses periods, commas and colons (blockquote uses a colon, matching the AI precedent). Em-dashes only in markdown structure (`## 01 — HeroSlider`) and case-study card title→description separator, which the cyber and AI reference pages also use. |
| G2 no "Course" as program noun (FAQ-only exception) | PASS — `courseware` allowed (Live Curriculum banner). Locked blockquote phrase "seat in a course" is the verbatim cross-category locked clause used in AI/cyber pages. No other use. |
| G3 no "vendor-certified" | PASS ("certified trainers" used) |
| G4 CTAs link to #contact / #catalog / confirmed URL | PASS |
| E4 no accreditation / affiliation claims | PASS (no Google Authorized, no AOSP partner, no Play Store endorsement claims) |
| E5 / brd7 no unsubstantiated superlatives | PASS ("the largest single addressable surface" is sourced to Google I/O 2024 active-device figure; not a brand superlative) |
| brd10 no "Most Popular" pricing cue | PASS — fit-signal labels only ("Tailored for focused mobile squads", "Ideal for scaling mobile teams", etc.). The one in-doc occurrence of `Most Popular` is the parenthetical that names the rule, not a UI label. |
| H-case all H1/H2/H3 in Title Case (global rule) | PASS — page H1 ("Customized Android & Mobile App Training Programs for Enterprise"), IntroReference H2 ("How Edstellar Builds Android Capability Inside Your Enterprise"), every section Heading, stats heading, catalog strip heading, programs tab heading, WhyEdstellar heading ("Why Edstellar Is Trusted by Enterprises to Build Android Capability" — `Is` correctly capitalised), all domain chip names, all 8 case-study card titles, all 4 resource card titles, FAQ Q1/Q9/Q10 (Q2–Q8 final wording deferred to Stage 4 with the rule attached), ContactForm heading. Hyphenated compounds capitalise both parts (Instructor-Led, Industry-Aligned, Enterprise-Grade, Cross-Platform, Hands-On, On-Site, In-Person, Build-Time, Compose-First, Super-App, Modern-Android, Crash-Free, Board-Visible, Device-Farm, Trainer-Fit, Add-Ons). |
| S1-no-counts HeroSlider Slide 1 description must contain zero numeric counts (global rule) | PASS — S1 description has 0 digits (regex `\d` on the S1 description returns 0 hits). Original draft included `20+ instructor-led group training programs across 4 mobile domains`; rewritten to "Instructor-led group training across modern Android, mobile DevOps and cross-platform" (361 chars). Slides 2–4, WelcomeStrip stat cards, WhyEdstellar pillars and catalog/programs heading continue to carry counts as allowed. |
| S07-locked Section 07 heading matches pattern `Trending [Category] Training Programs` (global rule) | PASS — Section 07 heading is exactly `Trending Android Training Programs` (34 chars). Replaced earlier draft "Industry-Aligned Android Training Programs Your Mobile Teams Can Trust". Category Name = "Android" (brand label, not the expanded scope). Title Case verified — all four words capitalised. |
| G8 no two adjacent sections same background | DEFER (rendered-page concern; honor at Stage 4) |

## C. Launch Ready — 5 dimensions (49 checks)

**SEO Ready (12):** PASS except one noted deviation.
- Meta title pattern + ≤56 ✓ (47) · Meta desc pattern + ≤156 ✓ (152) · H1 locked pattern ✓ (64) ·
  pins K4/K5/K6 each once ✓ · FAQ 8–12 with mandatory Q1 + ILT/VILT + vendor-selection +
  group-vs-individual ✓ (10 questions) · stats sourced (report + year) ✓ (Statista Q4 2024,
  Google I/O 2024, WEF 2025) · K7 ceiling ✓ · no red flags ✓.
- **NOTE (seo4/K3 conflict, identical to AI page):** the literal seo4 check wants Hero Slide 1
  *headline* = "[Category] Corporate Training Company / Built for Enterprise [Outcome]". The
  live cyber and AI reference pages do NOT do this — they use a tension headline + an eyebrow
  "Corporate [Category] Training" (Section §01 + Keywords Cluster B K3), and pin the "Corporate
  Training Company" phrase to the **meta title** (K1). Resolved in favour of the live
  implementation: hero eyebrow = "Corporate Android & Mobile Training", S1 headline = tension
  statement. Flagged for your call if you want the literal seo4 headline instead.

**Marketing Ready (9):** PASS.
- Above-fold value prop ✓ · ≥2 hero slides name category-specific frameworks (S2 Kotlin /
  Compose / Coroutines / Jetpack; S3 Play Integrity / OWASP MASVS / Appium / Espresso; S4
  Flutter / React Native / Ionic / Cordova / Xamarin; all four slides are specific) ✓ · ≥4
  case-study industries each with quantified outcome (8 cards covering BFSI, Insurance, Retail,
  Telecom, Automotive, Healthcare, E-commerce, SaaS) ✓ · ≥1 testimonial with a metric (41% UI
  defect drop + crash-free 98.6%→99.5% in T1) ✓ · sourced stats ✓ · transparent pricing
  (licenses + hours) ✓ · outcome language ✓ · 4 resource articles, category-specific ✓ ·
  contact form asks Company / Job Title / Training Requirements ✓.

**Brand Ready (10):** PASS.
- instructor-led ≥10 ✓ · group training ≥8 ✓ · `customized instructor-led training` bolded
  once ✓ (WelcomeStrip Para 2) · titles end in "Training" ✓ (all program titles verbatim from
  catalog, all end in "Training") · no "Courses" in headings / CTAs / breadcrumbs / nav ✓ ·
  no em-dashes in body prose ✓ · no superlatives ✓ · no "vendor-certified" ✓ · no
  accreditation claims ✓ · fit-signal pricing labels ✓.

**B2B Tone (8):** PASS.
- Testimonials from VP Mobile Engineering / Head of Mobile Security / Director of L&D ✓ ·
  case studies frame business outcomes (release stability, audit clearance, time-to-feature) ✓ ·
  pricing by team size (cohorts / licenses / hours) ✓ · no retail platform language ✓ ·
  submit CTA is a business transaction ("Send My Training Requirements") ✓ · discovery-call
  framing present ✓ · board-reporting language (crash-free rate, ANR rate, build time,
  time-to-interactive) ✓ · no individual-learner language ✓.

**Clear CTAs (10):** PASS.
- No "Enquire Now" ✓ · no "Learn More / Click Here / Get Started / Submit" ✓ · hero secondary
  "Get a Training Proposal" ✓ · catalog "Browse the Full Program Catalog" ✓ · pricing package
  "Get a Quote" ✓ · pricing strip "Talk to a Learning Advisor" ✓ · FAQ bottom "Ask Our
  Learning Services Team" ✓ · contact submit "Send My Training Requirements" ✓ · all hrefs
  valid ✓ · no adjacent identical CTA copy ✓.

## D. Google Helpful Content — originality & red flags

- **O1/O6 no template-substituted copy: PASS** — narrative re-authored for Android
  ("from shipped apps to a mobile org that scales", "Java fragments to Kotlin and Compose",
  "ship releases your QA, security and Play Store reviewers can sign off", "one mobile team
  across Android, iOS and the web"); slide *types* differ from cyber's 3-industry pattern
  and from AI's "use case ×3" pattern (Android mixes capability + use case + audience).
- **O2 hero/industry specificity: PASS** — slides name Kotlin, Jetpack Compose, Coroutines,
  Play Integrity, OWASP MASVS, Appium, Espresso, Flutter, React Native, Ionic, Cordova,
  Xamarin.
- **O3 real program / cert / domain names: PASS** — all program names and URLs verbatim from
  the Master Catalog (21 of 22 in-scope programs placed in chips, plus Mobile UI UX Design
  retained as an extra catalog tile per Stage 1).
- **O4 sourced stats: PASS** (Statista Q4 2024, Google I/O 2024 keynote, WEF Future of Jobs
  2025). **E1 verified counts (22 → "20+", 12 Android-pure, 1,500+, 100+): PASS.**
- **Side-by-side test vs cyber and AI heroes: PASS** — only locked anchors (Customized /
  for Enterprise; instructor-led group training; Get a Training Proposal) match; story and
  sentence structure differ. Android slides lead with codebase-modernisation pain, not
  "pilots vs production" (AI) or "threat surface" (cyber).
- **Red flags R1–R6 all NO: PASS** (no substituted copy; no frequency-target briefs in the
  copy; no date manipulation; genuine domain expertise visible — Compose / Coroutines /
  Gradle / Play Integrity / MASVS / AAOS are not generic mentions; no padded FAQ;
  AI-assisted + human-reviewed per-section).

---

## Noted deviations (accepted, with rationale)

1. **Domain-chip count = 4** (Section §07 guideline 8–11). Catalog reality: 12 Android-pure
   programs + 10 cross-platform-to-Android programs = 22 in-scope. The harder constraint
   (≥4 real programs per chip) is met by all 4 chips; the alternative — padding to 8–11
   chips at 2–3 programs each — would violate the catalog-min-4-per-chip rule and produce
   thin, ungrounded chips. Accepted. Re-bucket if/when the catalog adds Android-specific
   depth (Compose, Coroutines, Jetpack libraries, Gradle, Play Console, MASVS as dedicated
   programs).

2. **Hero strip label `KOTLIN & COMPOSE` = 15 chars** (Section §01 wants 5–15). At the
   boundary; kept because both terms are essential to the slide's promise and shorter forms
   (`KOTLIN`, `COMPOSE` alone) lose the meaning. Flag if you want a shorter label.

3. **Catalog CTA "Browse the Full Program Catalog" = 31 chars** (Section §01 CTA example
   capped at 20–30). The Launch Ready CTA map (cta4) supersedes the Section Rules CTA
   length, identical to the precedent set on the AI page.

4. **Resources Card 1 badge `MOBILE INSIGHTS`** (Section §11 "locks" it to "THREAT
   INSIGHTS"). "THREAT INSIGHTS" is cyber-specific; adapting to Android is required by O2
   originality. Cards 2–4 unchanged (TRAINING GUIDES / INDUSTRY TRENDS / L&D STRATEGY).

5. **LOCKED program-card delivery field stays sentence-case (RESOLVED 2026-05-28).** The
   build-flow LOCKED string `Instructor-led (On-site/Virtual)` is kept verbatim, even though
   the new global Title-Case heading rule would otherwise suggest `Instructor-Led
   (On-Site/Virtual)`. **Rationale:** the delivery field renders as a small UI label below
   program-card titles, not as a semantic H1/H2/H3 — the heading-case rule names heading
   levels specifically, and small UI labels are an explicit carve-out. The Title-Case rule's
   intent is hierarchy clarity, not label uniformity. User decision recorded; codified as a
   carve-out in `AGENTS.md` Content Style and `CATEGORY_PAGE_BUILD_FLOW_V2.md` so this is
   not re-litigated on future pages.

## Deferred to Stage 4 (only matter if HTML is built)

1. G8 no two adjacent sections sharing a background colour (visual, rendered-page).
2. FAQ answer prose finalised + each answer re-validated to 200–320 chars (specs are
   written; full sentences drafted in code). **Q2–Q8 final question strings must be in Title
   Case** per the global heading-case rule.
3. `node scripts/validate-ai-page.mjs` green on the live URL (precise page-wide counts and
   per-field char limits against the rendered DOM).
4. Browser QA: console / hydration errors, responsive behaviour, no adjacent same-background
   sections, every CTA uses its mapped copy.
5. Case-study `/case-studies/[slug]` pages built from the 8 card specs (single source
   `src/data/case-studies.ts`).
