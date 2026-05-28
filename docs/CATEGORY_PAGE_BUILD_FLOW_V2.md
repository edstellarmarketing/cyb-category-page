# Edstellar Category Page — Build Flow v2 (Content-First, HTML-Optional)

A reusable playbook for producing any new Edstellar training category page. **v2 decouples content
from code:** the work is split into three sequential markdown deliverables, each independently
reviewable and approvable. The HTML page is built ONLY if you decide you want it — otherwise the
process stops at approved content.

```
              All files live in:  docs/Category Pages/[category]-category-page/
STAGE 1  Research        → [CATEGORY]_RESEARCH.md
STAGE 2  Final Content   → [CATEGORY]_CONTENT.md
STAGE 3  Final Checklist → [CATEGORY]_CHECKLIST.md
─────────────── DECISION GATE: build the HTML page? ───────────────
STAGE 4  HTML page (OPTIONAL, only on explicit approval)
         → live route in src/app/[slug]/ + src/components/[cat]/
         → also drop a rendered snapshot [slug].html into the category folder
```

**Deliverables folder rule (MANDATORY):** every category gets its own folder
`docs/Category Pages/[category]-category-page/` (e.g. `ai-category-page`, `data-science-category-page`).
ALL deliverables for that category live there: the 3 stage `.md` files, a `README.md`, and — if Stage 4
runs — a rendered `[slug].html` snapshot of the built page. Note: the working page is a Next.js route and
MUST stay in `src/app/[slug]/` + `src/components/[cat]/`; the `.html` in the folder is a snapshot artifact
only, not the live page. Never scatter a category's files across `docs/research/` or the repo root.

**Core principles (carried from v1):**
- **Validation-first** — load the rules as constraints before writing copy; the checklist confirms, it does not discover.
- **Originality** — never ship template-substituted copy (see the two-layer rule in Stage 2).
- **Grounded data** — program names/URLs/counts come from `Edstellar Master Catalog.xlsx`, never invented.

**Four rule sources** (tabs on the `/category-page-template` route):
Section Rules · Google Helpful Content Checklist · Keywords to Target · **Launch Ready Checklist**.
The **Launch Ready tab is the newest standard and SUPERSEDES Section Rules on conflict** — notably:
CTAs must NOT say "Enquire Now" (use the CTA map below); pricing tiers use fit-signal labels, not "Most Popular".

---

## STAGE 1 — Research  →  `docs/Category Pages/[category]-category-page/[CATEGORY]_RESEARCH.md`

Goal: assemble every input and constraint needed to write the content, so Stage 2 is mechanical.
Produce a markdown file containing:

1. **Competitor white space** — where rivals sit (self-paced platforms vs. consulting one-offs) and
   the gap Edstellar owns (instructor-led + customized + cohort + measurable ROI).
2. **Program count + domain breakdown** — filter the Master Catalog by category; bucket into ~8–11
   domains, each with ≥4 real programs (catalog min-4-per-chip rule). Record the verified real count.
3. **Featured programs** — flagship picks with verified catalog URLs.
4. **The 4 hero slides — concepts** (decide the angle freshly; do NOT default to "3 industries"):
   - Slide 1 is ALWAYS the generic corporate slide; 4 slides total (Section Rules §01).
   - Slides 2–4 may be ANY angle — industry vertical, **use case, capability, or audience** — whatever
     best tells THIS category's story. Mixing angle *types* is what avoids the templatized look and is
     explicitly allowed ("industry verticals **or use cases**"). Choose angles that map to real catalog depth.
   - For each slide record: concept, eyebrow, headline (2 lines), description angle, strip label
     (5–15 chars, uppercase), strip sub (20–40, sentence case), and lucide icon. The slider menu
     (labels + subs + icons) is per-category and must be re-chosen, never carried over (O2 / mkt2 / R1).
5. **[Reference → Category] substitution map** — roles, certs/frameworks, lab types, KPIs, domains
   (e.g. cyber SOC analyst → ML engineer; MTTD/MTTR → model accuracy/drift/latency).
6. **Stat-card sources** — citable industry figures with report + year (no invented numbers).
7. **Rules & constraints to apply in Stage 2** (pulled from the four tabs so content writing is mechanical):
   - **FLOORS** (accurate description, allowed): `instructor-led` ≥10, `group training` ≥8, `instructor-led group training` ≥3.
   - **CEILINGS** (commercial phrases, ≤2 each, each PINNED to ONE location — write the pin map):
     `[cat] Corporate Training Company` → meta title; `[cat] corporate training provider` → meta desc;
     `[cat] training company` → WelcomeStrip Para 1 open; `[cat] corporate training company` → WhyEdstellar open;
     `[cat] training provider` → WhyEdstellar close.
   - **CTA copy map** (Launch Ready — never "Enquire Now"):

     | Location | CTA | Href |
     |---|---|---|
     | Hero secondary | Get a Training Proposal | #contact |
     | Catalog | Browse the Full Program Catalog | #catalog |
     | Pricing package | Get a Quote | #contact |
     | Pricing strip | Talk to a Learning Advisor | #contact |
     | FAQ bottom | Ask Our Learning Services Team | #contact |
     | Contact submit | Send My Training Requirements | form |
   - **Locked fields / pins:** H1 opens `Customized` ends `for Enterprise[ teams]`; `customized
     instructor-led training` bolded once (WelcomeStrip Para 2); program card delivery LOCKED
     `Instructor-led (On-site/Virtual)`; titles end in `Training` (never Course);
     **Section 07 (ProductNewsCards) heading LOCKED to `Trending [Category Name] Training Programs`**
     (e.g. `Trending Android Training Programs`).

**Exit criteria:** the research file is complete and the user has approved the inputs (esp. the 4 slide concepts).

---

## STAGE 2 — Final Content  →  `docs/Category Pages/[category]-category-page/[CATEGORY]_CONTENT.md`

Goal: the complete, validated page copy in markdown — a human can read and approve the entire page
without any code existing. This IS the page, in text.

Write every section in render order, each field labelled with its value and character count:
`HeroSlider · WelcomeStrip · IntroReference · TrainingProgramTabs · ChipChangesTabber · OurApproach ·
ProductNewsCards · WhyEdstellar · RecentCustomerSuccesses · CorporatePricing · ClientVoices ·
BusinessNewsCards · FAQ · ContactForm` — plus meta title + meta description.

Each field must satisfy, AS IT IS WRITTEN:
- **Char limits + mandatory keywords** from Section Rules (note the count next to each field).
- **Keyword pins** (each commercial phrase exactly once, in its assigned location; floors met page-wide).
- **CTA copy map** (intent-specific copy; no "Enquire Now"/"Learn More"/"Submit"/"Get Started").
- **Locked fields** (delivery field, H1 pattern, bolded USP).
- **Heading case** — every H1/H2/H3 in **Title Case**; sentence-case is reserved for descriptions,
  paragraphs, eyebrows and stat-card body. Hyphenated compounds capitalise both parts (`Instructor-Led`,
  `Industry-Aligned`, `Enterprise-Grade`). **Carve-out:** the LOCKED program-card delivery field stays
  sentence-case — `Instructor-led (On-site/Virtual)` — because it is a small UI label, not a semantic
  H1/H2/H3. The Title-Case rule applies to heading levels; small UI labels follow the LOCKED spec as
  written.
- **HeroSlider Slide 1 description — no numeric counts.** Slide 1 is the strategic corporate slide; its
  description must contain zero numbers (no `120+ programs`, no `11 domains`, no `100+ countries`, no
  percentages, no currency figures). Counts belong in Slides 2–4, the WelcomeStrip stat cards, the
  WhyEdstellar pillars, the programs/catalog heading and the FAQ — never in the S1 description. Reason:
  keeps the hero opening durable as catalog scope shifts and centres the slide on positioning, not
  merchandising.
- **Real data** (program titles/URLs from the catalog; sourced stats; ≥4 case-study industries each
  with a quantified outcome; ≥1 testimonial with a metric).

### The Originality rule — avoid template-substituted copy (mandatory in Stage 2)
Google O1/O6/R1 flag pages that are another category's copy with the category name swapped. Defend against it:
- **Two layers.** The *locked layer* (USP phrases like `instructor-led`, the H1 pattern, CTA copy,
  mandated keywords) is SUPPOSED to repeat across categories — that is accurate description + keyword
  strategy, not a violation. The *narrative layer* (headlines, descriptions, slide concepts, opening
  hooks, proof points) MUST be re-authored from scratch for this category.
- **The side-by-side test.** Place this page's section next to the reference (cyber) section. If the
  only differences are swapped nouns in identical sentences → FAIL, rewrite. If the story and sentence
  structure differ and only the locked anchors match → PASS.
- **Technique.** Lead each section with THIS category's specific buyer tension (not a generic value-prop),
  vary the sentence architecture from the reference, and use specifics only this category would say.

**Exit criteria:** every field has a passing char count, all keyword/pin/CTA/originality rules hold,
and the user approves the content.

---

## STAGE 3 — Final Checklist  →  `docs/Category Pages/[category]-category-page/[CATEGORY]_CHECKLIST.md`

Goal: prove the approved content is launch-ready BEFORE any decision about HTML. Run the gate against
the Stage 2 content file and record pass/fail + any corrective actions.

Check, against the content text:
- **Launch Ready — 49 checks across 5 dimensions** (SEO 12 · Marketing 9 · Brand 10 · B2B Tone 8 · CTAs 10).
  A page is content-launch-ready only at 49/49.
- **Google Helpful Content** — people-first, originality (incl. the side-by-side test), E-E-A-T,
  guardrails, and every Red Flag (R1–R6) confirmed NO.
- **Keyword** — every pin landed once; no commercial-phrase ceiling exceeded; floors met
  (`instructor-led` ≥10, `group training` ≥8) counted across the content text.
- **Global rules** — no em-dashes, no "Course" outside FAQ, no `vendor-certified`, no accreditation
  claims, no unsubstantiated superlatives, no two adjacent sections sharing a background,
  **all H1/H2/H3 headings in Title Case** (capitalise major words; keep articles/conjunctions/short
  prepositions lowercase except as the first word; hyphenated compounds capitalise both parts, e.g.
  `Instructor-Led`, `Industry-Aligned`), **no numeric counts in HeroSlider Slide 1 description**
  (counts belong in S2–S4, stat cards, pillars, catalog heading and FAQ — never in S1),
  **Section 07 (ProductNewsCards) heading LOCKED to `Trending [Category Name] Training Programs`**.
  **Scope:** the Title-Case-headings, S1-no-counts and S07-heading-pattern rules apply to the Android
  category page and all future category pages; pages approved before 2026-05-28 (AI, Cybersecurity,
  Leadership) are grandfathered and must NOT be retrofitted unless explicitly re-opened by the user.

Note: checks needing a rendered page (hydration, responsive layout, console errors, visual rhythm) are
deferred to Stage 4 and only matter if HTML is built. At content stage, mechanical counts run against
the content markdown (a text count), not a live URL.

### Corrective actions — when a check fails
The gate is **blocking, not advisory** (never "passes with warnings"). Each failing item carries a rule
ID that maps to exactly one section in the content file. Fix loop: **trace → locate → edit the content →
re-check the dimension → repeat to 49/49.**

| Class | Example | Corrective move |
|---|---|---|
| Single-section copy | a CTA says "Enquire Now" | reword to the mapped CTA copy |
| Cross-section ceiling | a commercial phrase used 3× | reword the leaked extras; keep the one pinned use |
| Page-wide floor | `instructor-led` < 10 | add natural, truthful uses where delivery is described |
| Judgment | no testimonial has a metric | rewrite that testimonial with a real number |
| Red flag (R1–R6) | a paragraph is reference copy with the name swapped | rewrite the section (structural; site-level severity) |

**Exit criteria:** checklist file shows 49/49 + all Google/keyword/global rules pass.

---

## DECISION GATE — build the HTML page?

Stop here and ask the user. Deliverables so far are the three markdown files (Research, Content, Checklist).
- **If the user says NO / not yet** → the process is COMPLETE at content level. The approved copy lives in
  `[CATEGORY]_CONTENT.md` and can be handed off, reused, or built later. Do not create any components or routes.
- **If the user says YES** → proceed to Stage 4.

---

## STAGE 4 — HTML page (OPTIONAL — only on explicit approval)

Build the live page from the already-approved content. Nothing here is authored fresh; it is the Stage 2
content poured into components.

1. **Scaffold** — `src/app/[slug]/page.tsx` mirroring the live reference page's section order, initially
   reusing the reference components as placeholders so the route renders; add a component→variant migration map.
2. **Clone & fill** — copy each reference component into `src/components/[cat]/[Cat]*`, replace its content
   with the corresponding approved copy from `[CATEGORY]_CONTENT.md`, swap the import one section at a time.
3. **Validate per swap** — `node scripts/validate-ai-page.mjs` (point at the new slug via `AI_URL`) after
   each swap; fix any FAIL before moving on.
4. **Case studies** — append category engagements to `src/data/case-studies.ts` (single source of truth;
   industry-anonymized, 4 quantified results each).
5. **Final live gate** — validator all-green; walk the Launch Ready tab to 100% on the live page; browser QA
   (console, responsive, no adjacent same-background sections, every CTA uses its mapped copy); `npm run check`.

---

### Quick checklist (tape to the monitor)
- [ ] Stage 1: `[CATEGORY]_RESEARCH.md` — real counts/URLs, 4 slide concepts (angle chosen freshly), substitution map, constraints + pin/CTA maps; user-approved
- [ ] Stage 2: `[CATEGORY]_CONTENT.md` — all sections + meta, every field char-validated, keyword/pin/CTA rules hold, originality side-by-side test passed; user-approved
- [ ] Stage 3: `[CATEGORY]_CHECKLIST.md` — Launch Ready 49/49 + Google + keyword + global rules pass
- [ ] DECISION GATE: user decides HTML yes/no
- [ ] Stage 4 (only if yes): scaffold → clone & fill → validate per swap → case studies → live Launch Ready 100% → `npm run check`
