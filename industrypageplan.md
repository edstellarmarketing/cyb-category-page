# Industry Page Plan — Automotive (template for all industries)

## Core objective

Show how Edstellar's full stack of training, workforce skilling, and capability-building
solutions, not just training, helps an industry move faster, modernise operations, and meet
evolving customer demand. Automotive is the worked example here; every other industry page
follows the same structure with sector-specific copy, imagery, and case studies.

## Rules (non-negotiable)

- **No eyebrow headings.** Every section leads with the H2 directly. No SECTION LABEL micro-caps above the headline.
- **No em-dashes (—) anywhere in the content.** Use commas, periods, or rephrase.
- **Exact same design system as the cybersecurity category page**:
  - Container: `mtk-page-center`
  - Font stack: `'Riona Sans Light'`, `'Riona Sans Regular'`, `'Riona Sans Bold'`, Helvetica, Arial fallback
  - Palette: navy `#1B1D52` (primary), lime `#C5E826` (accent), body `#374151`, muted `#6B7280`, border `#E3E6F0`, panel `#F7F8FC`, white `#FFFFFF`
  - Heading highlight pattern: lime `#C5E826` underline behind a key phrase at 0.55 opacity (same as `AI era`, `mitigate risks`, `trends`, `enterprise teams`)
  - Section padding: `py-16 md:py-20`
  - Reuse existing components: `<Header />`, `<Footer />`, `<ScrollToTop />`, `<ArrowRightIcon />`, `<ClientLogosStrip />`
- **No fabricated stats or quotes.** Any number cited gets a sourced footnote with publisher + year. Mark anything illustrative as "Indicative" or "Sample" inline.
- **No fabricated customer logos.** Reuse the same Edstellar client logos already in `public/images/clients/` until the industry-specific list is approved.

## Section order (final)

1. Hero banner with image
2. Automotive industry segments we serve
3. Our expertise
4. What we do
5. Our success stories
6. Trust strip
7. Outcomes and impact
8. Resources
9. FAQs
10. Final CTA banner
11. Related industries

Sections 1, 2, 3, 4, and 5 are mandatory and reflect the conventional B2B flow (who you are for, breadth covered, expertise, services, proof). Sections 6 to 11 are the suggested additions that round the page out, mirror the cybersecurity page rhythm, and give the page enough surface area for SEO and AI-citation pull.

## Routing

- Path: `src/app/industries/automotive/page.tsx`
- Future industries follow the pattern `src/app/industries/<slug>/page.tsx` (BFSI, healthcare, retail, manufacturing, energy, telecom).
- Each page exports `metadata` with industry-specific title and description.
- Link wiring: every industry tile / nav entry that currently points to `https://www.edstellar.com/industries/...` should point to the local route.

---

## Section 1 — Hero banner with image

**Goal:** State who the page is for, what Edstellar does for the automotive industry, and drive the primary CTA in two seconds.

**Layout:** 12-column grid. Left 7 columns: breadcrumb + H1 + 2-line lead + CTA. Right 5 columns: real automotive imagery (factory floor, ADAS lab, EV battery line, or design studio). Stack on `lg:` and below.

**Components / treatment:**

- Breadcrumb: `Home › Industries › Automotive` (Riona Sans Light, 12 to 13 px, navy on the active leaf).
- H1, 36 / 44 / 56 px responsive, `Riona Sans Light`, navy. Lime highlighter underline behind a key phrase, e.g. `accelerate your business`.
- Sub-copy, exactly two lines, around 32 to 40 words: positions Edstellar as a workforce-capability partner for automotive (not just a training catalogue). Reference the wider Edstellar offering surfaced in the main-site menu (training, learning paths, learning services, technology platform, and managed talent).
- CTA: `Enquire now` pill (`bg-[#1B1D52] text-white rounded-full px-6 py-3`), opens the contact form anchor `#contact`.
- Field-signal callout below the CTA (same visual as the SOC analyst hero): a one-line market signal with publisher attribution (for example: ICE-to-EV transition timing, software-defined-vehicle skilling demand, ADAS + cybersecurity workforce gap). Source must be cited.
- Hero image: real human photography. Suggested alt: "Automotive engineers reviewing telemetry inside an EV development lab". Aspect ratio 5 / 4 inside a `rounded-2xl` border `#E3E6F0`. Use Next.js `<Image priority />`.

**Why image instead of mockup:** automotive buyers expect to see plant floors, design clinics, ADAS labs, or EV teams. A vector mock looks sterile.

---

## Section 2 — Automotive industry segments we serve

**Goal:** Reassure that Edstellar covers the breadth of the value chain, not a slice.

**Layout:** Heading + sub-line, then a responsive grid of 8 to 10 segment cards (`grid-cols-2 sm:grid-cols-3 lg:grid-cols-4`). Each card is a small tile with an icon, segment name, and a single-line capability statement.

**Suggested segments (rename or trim with the automotive practice lead):**

- OEMs and vehicle manufacturers
- Tier 1 and Tier 2 component suppliers
- EV and battery (cells, packs, BMS)
- ADAS, autonomy, and software-defined vehicles
- Connected vehicle and telematics
- Aftermarket, dealerships, and mobility services
- Manufacturing and Industry 4.0 plants
- Automotive cybersecurity and ISO / SAE 21434 programs
- Supply chain, logistics, and dealer operations

**Visual treatment:** white card on `#FFFFFF`, `rounded-2xl`, border `#E3E6F0`, navy icon set (lucide / icons.tsx), `hover:-translate-y-0.5 hover:shadow-md`. No imagery inside the cards, keep it dense.

---

## Section 3 — Our expertise

**Goal:** Establish *how* Edstellar drives the industry and *what* deep technical domains the practice owns.

**Layout:** Two visual blocks inside a single section.

### Block 3A — How we drive the industry

Two-column on `lg:`. Left: H2 + intro paragraph + 5 mini-bullets (each = mini-heading + one-paragraph elaboration). Right: real human photo (instructor leading a hands-on session with engineers around a vehicle, battery rig, or ADAS test bench).

**H2 highlight:** lime underline behind, for example, `automotive value chain` or `agility`.

**Intro paragraph (1 to 2 sentences):** Edstellar's solutions transform automotive operations, build the skilling needed across product, manufacturing, software, and aftersales teams, drive agility, and help OEMs and suppliers meet evolving customer demand for software, electrification, and autonomy.

**Five mini-bullets** (mini-heading + 25 to 35 word paragraph each):

1. **Workforce skill mapping.** Map current capability against future-state automotive roles (SDV engineer, battery systems lead, ADAS validation, OT security analyst), produce a sector-specific gap report.
2. **Custom capability programs.** Curate role-based learning paths blended with hands-on labs against your stack (AUTOSAR, ROS, MATLAB / Simulink, vCAN tools, MES / SCADA platforms).
3. **Vendor-certified training delivery.** Live instructor-led, on-site at plants, off-site at innovation centres, or virtual across timezones, in any language your global teams need.
4. **Managed talent and bootcamps.** Short, intense bootcamps for new hires plus continuous mentoring for in-flight teams, including ASPICE, ISO 26262, and ISO / SAE 21434 cohorts.
5. **Outcome reporting and ROI.** Pre and post assessments, certification pass-rate tracking, and engineering KPIs (lead time, defect density, cycle time) packaged in a board-ready dashboard.

### Block 3B — Capability domains

Six-card responsive grid (`md:grid-cols-2 lg:grid-cols-3`) directly under Block 3A, on the same `bg-white` surface. Each card has a navy icon, domain name, 2-line description, and 3 capability tags. This block doubles as the SEO surface for long-tail automotive training terms.

**Card categories:**

1. Embedded systems and AUTOSAR
2. Vehicle electrification and battery systems
3. ADAS validation and functional safety (ISO 26262, SOTIF)
4. Software-defined vehicle and OTA platforms
5. Manufacturing 4.0, MES, and OT security
6. Automotive cybersecurity (ISO / SAE 21434, UN R155 / R156)

**Visual treatment for both blocks:**

- Bullet markers in Block 3A: lime `#C5E826` filled circle with a navy check icon (same pattern as `WelcomeStrip.CheckBullet`).
- Mini-heading: `Riona Sans Bold` 16 to 17 px, navy.
- Paragraph: `Riona Sans Light` 14 to 15 px, body `#374151`.
- Block 3A right image: real human photo, `rounded-2xl`, soft shadow, `aspect-[4/5]` on desktop.
- Block 3B card pattern: identical to the SOC analyst page's skill cards (white tile, border `#E3E6F0`, hover lift, lime tag pills).

---

## Section 4 — What we do

**Goal:** Map Edstellar's full service catalogue to automotive workforce needs, so a buyer immediately sees that this is a workforce-capability partnership, not a training catalogue order form.

**Heading:** "Explore how Edstellar can help your automotive business run better" (lime underline behind `run better`).

**Edstellar's 10 key services (must all be referenced in the section copy):**

1. Instructor-led Training
2. Coaching
3. L&D Consulting
4. Organizational Development Services
5. Managed Training
6. Talent Assessments
7. Training Vendor Sourcing and Management
8. Learning Strategy and Design for L&Ds
9. Learning Technology
10. Employee Engagement and Performance Support

**Layout:** Tabbed section, identical interaction model to `TrainingProgramTabs.tsx`. Five service-themed tabs, each tab grouping 2 to 3 of the ten services and tying them to a specific automotive workforce need. Every tab panel shows a real human photo, mini-heading, two-line context paragraph, and a bullet list that names the underlying Edstellar services and what they deliver for an automotive team.

**Tab interaction:** copy `TrainingProgramTabs.tsx` verbatim. `role="tablist"`, `role="tab"`, `aria-selected`, `aria-controls`, `role="tabpanel"`, `aria-labelledby`, snap-scroll on mobile, `ttp-fade 350ms ease-out` between panels.

### Tab 1 — Train your automotive workforce

**Services covered:** Instructor-led Training, Coaching.

**Image brief:** Two engineers at a workbench with an AUTOSAR / vCAN setup, an Edstellar trainer pointing at a screen.

**Mini-heading:** "Live, instructor-led upskilling for engineering and plant teams."

**Context (2 lines):** Build deep, role-specific capability across automotive product, manufacturing, and aftermarket teams with vendor-certified instructors, hands-on labs, and 1:1 coaching tuned to your stack.

**Bullets:**

- **Instructor-led Training.** Live cohorts on AUTOSAR, ASPICE, ISO 26262, EV battery systems, and Industry 4.0 platforms, delivered virtually, on-site, or hybrid in any language.
- **Coaching.** 1:1 and small-group coaching for senior engineers, technical leads, and L&D managers driving the SDV and electrification transition.

### Tab 2 — Run your learning operations

**Services covered:** Managed Training, Training Vendor Sourcing and Management.

**Image brief:** L&D operations manager reviewing a portfolio dashboard with two automotive function leads.

**Mini-heading:** "Single point of accountability for global automotive training operations."

**Context (2 lines):** Consolidate fragmented training spend across plants, design centres, and dealer networks. Edstellar runs the operations end to end, so your L&D team focuses on outcomes, not vendor administration.

**Bullets:**

- **Managed Training.** End-to-end ownership of training delivery, scheduling, logistics, attendance, certification tracking, and reporting across multiple geographies and shifts.
- **Training Vendor Sourcing and Management.** Curate, contract, and govern external vendors for niche automotive needs (OEM-specific tooling, regulatory updates, supplier-mandated certifications) under one master agreement.

### Tab 3 — Build your L&D strategy and operating model

**Services covered:** L&D Consulting, Learning Strategy and Design for L&Ds, Organizational Development Services.

**Image brief:** Workshop scene with sticky notes and an L&D head plus a senior automotive HR business partner.

**Mini-heading:** "Workforce strategy that keeps pace with software-defined vehicles and electrification."

**Context (2 lines):** Edstellar's consulting practice helps automotive HR and L&D leaders reshape capability strategy, role architecture, and learning design as the industry pivots to SDV, EV, autonomy, and connected mobility.

**Bullets:**

- **L&D Consulting.** Diagnose current-state capability, build the future-state workforce blueprint, and prioritise interventions against business outcomes (time-to-market, defect density, recall risk).
- **Learning Strategy and Design for L&Ds.** Design role-based learning paths, governance, and measurement frameworks aligned to ASPICE, ISO 26262, and ISO / SAE 21434 obligations.
- **Organizational Development Services.** Shape org structure, role definitions, and change management for SDV transitions, EV plant ramp-ups, and post-merger integrations across the automotive group.

### Tab 4 — Assess and benchmark your talent

**Services covered:** Talent Assessments.

**Image brief:** Engineer taking a structured technical assessment on a laptop in a quiet room.

**Mini-heading:** "Know exactly where your automotive talent stands today."

**Context (2 lines):** Make capability decisions with data, not assumptions. Pre and post assessments quantify skill gaps and program impact across functional, technical, and behavioural domains.

**Bullets:**

- **Talent Assessments.** Role-aligned assessments for automotive engineers, plant supervisors, ADAS validators, software developers, and quality auditors, with normative benchmarks against industry peers.
- **Use cases.** New-hire screening for OEM and Tier 1 hiring drives, baseline diagnostics for SDV and ISO 26262 cohorts, succession planning for technical leadership pipelines.

### Tab 5 — Power learning with technology and engagement

**Services covered:** Learning Technology, Employee Engagement and Performance Support.

**Image brief:** Plant operator using a tablet on the shop floor; or an engineer pulling up a job aid on a laptop next to a vehicle.

**Mini-heading:** "Learning that lives where the work happens."

**Context (2 lines):** Move learning out of the LMS silo and into the moment of need. Performance-support, mobile job aids, and engagement tooling keep automotive teams sharp on the line, in the lab, and at the dealership.

**Bullets:**

- **Learning Technology.** Modern LXP and LMS implementations, content authoring, integrations into HRIS and quality systems, and analytics that connect learning activity to engineering and plant KPIs.
- **Employee Engagement and Performance Support.** Always-on job aids, micro-learning, AI nudges, and community spaces that keep recall, safety, and process knowledge live across plants, dealerships, and global engineering centres.

---

## Section 5 — Our success stories

**Goal:** Replace claim with proof: who used Edstellar, what shifted.

**Heading:** "How automotive leaders use Edstellar".

**Layout:** Three case-study tiles, `grid md:grid-cols-3`. Each tile: real customer photo or plant photo, sector badge, customer name (or anonymised role + sector if NDA), one-line problem, one-line outcome, link to the full case study.

**Card pattern:** mirror `CustomersPartners` tile styling (rounded-2xl image area, white content area, navy headline, body text, "Learn more →"). Pull real case studies from the marketing CMS at build time later; hard-code three placeholders for the first cut.

**Suggested placeholder slots until real cases are approved:**

1. Tier 1 supplier closing an ASPICE gap in 12 weeks.
2. EV OEM ramping a battery-engineering cohort across two plants.
3. Global automotive group standardising ISO / SAE 21434 capability across 8 countries.

---

## Section 6 — Trust strip

Reuse the existing `<ClientLogosStrip />` component already mounted under the global presence map. Same 24 logos, same right-to-left marquee, same 60 s / hover-pause / reduced-motion fallback. Drop in directly under section 5 with the eyebrow text replaced by, for example, "Trusted by automotive leaders worldwide". When industry-specific logos are approved later, swap the `LOGOS` array via a prop.

---

## Section 7 — Outcomes and impact

**Heading:** "Outcomes that move automotive KPIs" (highlight `KPIs`).

**Layout:** Same 7 / 5 split as the SOC analyst ROI section. Left: 4 stat cards plus a brief lead-in paragraph. Right: a sample cohort scoreboard with horizontal progress bars.

**Stat ideas (subject to verification, must be sourced or marked indicative):**

- Cycle-time reduction in product engineering cohorts
- Reduction in software-defect density on SDV programs
- Certification first-attempt pass rate (ASPICE, ISO 26262, ISO / SAE 21434)
- Number of automotive engineers trained by Edstellar

**Note:** if real benchmark data is not yet available, label every figure "Indicative range, varies by program" and add a footnote: "Outcomes vary by program design, baseline maturity, and headcount; ranges drawn from Edstellar customer engagements 2023-2025." Pull live numbers from the practice lead before launch.

---

## Section 8 — Resources

**Heading:** "Automotive resources for talent and L&D leaders" (highlight `talent and L&D`).

**Layout:** Horizontal card scroller on mobile (snap), 3-column grid on desktop. Card types:

- Whitepaper: "Workforce blueprint for software-defined vehicles"
- Webinar replay: "ISO / SAE 21434 program rollout, lessons from three OEMs"
- Guide: "Skilling for the EV transition, role-by-role checklist"
- Calculator: "Automotive cyber readiness self-assessment"
- Case study summary: "How a Tier 1 supplier closed an ASPICE gap in 12 weeks"

Each card: real cover image (no AI-generated thumbnails), category pill (top-left, lime fill), title (navy, Riona Sans Regular), one-line teaser, "Read", "Watch", or "Download" CTA. Lead capture form lives behind a downloads gate later, not on first launch.

---

## Section 9 — FAQs

**Heading:** "Automotive training FAQs".

**Layout:** Single column, accordion, `max-w-3xl mx-auto`. Each FAQ row: question (Riona Sans Regular, 16 to 18 px, navy), expand chevron on the right; answer reveals beneath in `Riona Sans Light` body, 14 to 15 px, leading 1.55, `#374151`.

**Suggested questions:**

1. Which automotive segments does Edstellar serve?
2. How does Edstellar tailor a learning path for OEM engineering teams?
3. Can you deliver training on-site at our plants and engineering centres?
4. Do you support ASPICE, ISO 26262, and ISO / SAE 21434 cohorts?
5. What languages and timezones do your trainers cover?
6. How quickly can a custom automotive cohort start?
7. How do you measure ROI on automotive workforce training?
8. Can you blend training with managed-talent (contract engineers) for a peak rollout?

**Schema:** emit JSON-LD `FAQPage` schema in `<head>` so AI Overviews and AEO surfaces can pull individual answers cleanly.

---

## Section 10 — Final CTA banner

Full-bleed navy `#1B1D52` section, centred white H2, 1-line sub-copy, two pill CTAs: primary ("Talk to our automotive lead") on white, secondary ("Download the automotive capability deck") on transparent / outlined white. Same pattern used at the end of the SOC analyst page.

---

## Section 11 — Related industries

Cross-link grid of 5 to 6 sister industry pages (BFSI, healthcare, retail, manufacturing, energy, telecom). Reuse the `RELATED_PATHS` card pattern from the SOC analyst page: real photo, category pill, title, one-line teaser, three meta chips at the bottom (sample chips: `Number of training domains`, `Fortune 500 customers served`, `Years partnering with the sector`).

---

## Reusable building blocks already in the repo

- `mtk-page-center` for container width.
- `<Header />`, `<Footer />`, `<ScrollToTop />` from `@/components/...`.
- `<ArrowRightIcon />` from `@/components/icons`.
- `<ClientLogosStrip />` for the trust strip.
- The lime-highlighter span pattern: `<span className="relative inline-block"><span className="relative z-10">{phrase}</span><span aria-hidden="true" className="absolute bottom-1 left-0 right-0 -z-0 h-2.5 sm:h-3" style={{ backgroundColor: "#C5E826", opacity: 0.55 }} /></span>`.
- Pricing-card, progress-row, stat-cell, custom-bullet, form-field, label helpers from the SOC analyst page can be lifted into a shared `src/components/learning-blocks.tsx` if a third page reuses them.
- Tab interaction model: copy `TrainingProgramTabs.tsx` for Section 4.

## What still needs sign-off before build

- Final list of automotive segments (Section 2) from the practice lead.
- Sourced statistics for the hero field-signal and Section 7 stat cards.
- Approved customer logos for Sections 5 and 6 (or written confirmation that placeholder Edstellar clients are acceptable for the first cut).
- 8 to 10 production-ready human photographs covering hero, Section 3 Block 3A, and the five tab panels in Section 4. Brief is in each section above.
- Final FAQ list with answers reviewed by the automotive practice lead and legal.
- Approved one-line use cases for each of the 10 services in Section 4 (especially Talent Assessments and Learning Technology, where automotive examples need confirmation).
- Confirmation that the same plan applies to BFSI, healthcare, retail, manufacturing, energy, and telecom (so the page becomes a templated `<IndustryPage>` component driven by data, rather than a one-off).

## Implementation sequencing

1. Build `src/app/industries/automotive/page.tsx` with Sections 1, 2, 3, 4, and 5 only. Placeholder copy reviewed by automotive lead.
2. Add Sections 6, 10, and 11 (trust strip, final CTA, related industries) using existing reusable parts.
3. Add Section 7 (Outcomes and impact) once stats are confirmed.
4. Add Sections 8 and 9 (Resources and FAQs) last as content is approved, including JSON-LD `FAQPage` schema.
5. Once the second industry page lands, refactor shared section components into `src/components/industry/*` and drive each page from a single `industries.json` data file.
