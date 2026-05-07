# SOC Analyst Learning Path — Improvement Plan

Page under review: `src/app/learning-paths/soc-analyst/page.tsx` (live at `/learning-paths/soc-analyst`).

This plan addresses the three feedback items the review raised, plus the broader B2B / Edstellar brand / SEO / marketing readiness pass that came with them.

---

## 1. Problem statement

Three specific gaps in the current page:

1. The H1 reads "SOC analyst learning path for enterprise teams." Review feedback wants it tightened to a "Learning path for SOC analyst" framing, but with explicit corporate / team language so it is unmistakably a B2B, not an individual learner, page.
2. The word **Edstellar** does not appear anywhere on the page outside the `<Header />` and `<Footer />` chrome. The page reads like a generic SOC training page; there is no brand-led positioning, attribution, or repeated mention of Edstellar as the partner. This kills brand recall and weakens AI-citation lift, since the page does not earn the brand-name mentions an LLM needs to attribute the answer to Edstellar.
3. There is no section describing **how SOC teams currently operate inside organisations** (the messy, fragmented, alert-fatigued reality) and **what the right path looks like** for a foolproof, board-defensible SOC. Without this, the curriculum sections feel like a catalogue rather than a strategic answer.

Knock-on issues surfaced during the same audit:

- The page is not optimised for SEO: the title tag and meta description do not lead with the primary keyword + Edstellar; there is no Course / FAQ / BreadcrumbList JSON-LD; image alt attributes are descriptive but not keyword-aware; H2 / H3 hierarchy does not include the "SOC analyst training" phrase enough.
- The B2B tone is mostly there, but a few sentences read like a consumer course (e.g. "build a high-performing SOC team" generic phrasing). Procurement-ready language should be tightened.
- CTA inventory is thin: there are essentially two destinations (`#contact` and the curriculum download). A B2B page benefits from a richer CTA ladder so different buying-stage personas convert at different points.

---

## 2. H1 rewrite

The review's literal suggestion ("Learning path for SOC analyst") is too generic and would also rank for individual-learner intent, which is not the audience for this page. The H1 must state corporate / enterprise team intent and ideally name Edstellar.

### Recommended H1 (primary)

> **Corporate SOC Analyst Learning Path for Enterprise Security Teams, by Edstellar**

Why it works:

- "Corporate" + "Enterprise Security Teams" makes the B2B intent explicit and excludes individual-learner traffic.
- "SOC Analyst Learning Path" is the literal target keyword, kept tight and front-loaded.
- "by Edstellar" attaches the brand to the H1 itself, which is the strongest single brand-citation signal on the page.

### Alternates (if Marketing wants a different cadence)

| Option | When to use |
|---|---|
| Edstellar's Corporate SOC Analyst Learning Path for Security Teams | If brand-first phrasing is preferred |
| SOC Analyst Learning Path for Corporate Cybersecurity Teams \| Edstellar | If the brand is moved to a sub-headline / pipe |
| Build a Corporate SOC Team with Edstellar's SOC Analyst Learning Path | If Marketing wants action verb up-front |

Whichever variant ships, the rule is: every H1 must contain the phrase "SOC Analyst Learning Path", a corporate / enterprise / team qualifier, and the word Edstellar.

### Sub-headline (the line directly under H1)

Keep two lines, but rewrite to keep the team-language drumbeat going and add one more brand mention:

> Edstellar standardises blue-team capability across your enterprise security teams with a structured five-stage curriculum that combines mentor-led instruction, hands-on SIEM and SOAR labs, certification milestones, and measurable risk-reduction outcomes for your organisation.

---

## 3. Edstellar brand integration audit

Goal: move from zero brand mentions to a healthy, natural cadence (8 to 12 mentions across the page, roughly one per major section). The brand needs to be present in headings, body copy, and CTAs without sounding like a press release.

### Where to weave Edstellar in

| Section | Current state | Target rewrite |
|---|---|---|
| H1 | No brand | Append "by Edstellar" (see Section 2 above) |
| Hero sub-headline | No brand | Add "Edstellar standardises ..." |
| Hero field-signal callout | "Field signal" header | "Edstellar field signal" + cite an Edstellar customer cohort metric where possible |
| Modes of delivery pill row | Generic pills | Add a small "Delivered by Edstellar" line above the pills |
| Trust strip | "Standardising SOC teams at" | "SOC teams trained by Edstellar at" |
| Section 3 (new — see Section 4 below) | Section does not exist | The new section's H2 will namedrop Edstellar |
| Five-stage journey H2 | "The five-stage SOC analyst journey" | "The Edstellar five-stage SOC analyst journey" |
| Each stage milestone label | "BA Apprentice badge" style | Prefix with "Edstellar" e.g. "Edstellar SOC Apprentice badge" |
| Skills section H2 | "Core skills your SOC analysts will build" | "Core skills Edstellar builds in your SOC analysts" |
| Instructors section H2 | "Meet your SOC instructors" | "Meet your Edstellar SOC instructors" |
| Outcomes section | "Outcomes and measurable ROI" | "Outcomes Edstellar delivers, measured against your SOC KPIs" |
| Customisation section | "Customise the SOC path for your enterprise stack" | "Customise the Edstellar SOC path for your enterprise stack" |
| Pricing section | "Plans for every team size" | "Edstellar engagement plans for every SOC team size" |
| Lead form | "Speak with an Edstellar SOC advisor" (already correct) | Keep as is |
| Final CTA banner | "Future-proof your SOC with the Edstellar learning path" (already partial) | Strengthen: add one more Edstellar mention in the body line |
| Related learning paths | "Explore other relevant learning paths" | "Explore other Edstellar learning paths" |

### Body-copy rule of thumb

- Use **Edstellar** the first time the brand is referenced in any new section, then alternate with pronouns ("our", "we", "the Edstellar team") so it does not become spammy.
- Never use "Edstellar" inside a bullet-point header where it does not add information.
- Never say "Edstellar's Edstellar method"; one mention per sentence is the cap.

### Brand-citation surface for AI Overviews

To improve AI citation pull, every fact the page asserts (a stat, a framework alignment, an outcome) should have **Edstellar** in the same sentence so an LLM stitches the brand to the claim. Example: "Edstellar SOC cohorts post a median 58% dwell-time reduction within twelve weeks."

---

## 4. New section — "How SOC teams operate today and the right path for a foolproof SOC"

Slot this **between the trust strip (Section 2 in the current page) and the existing five-stage journey (Section 3 in the current page)**. It becomes the new Section 3, pushing the journey to Section 4. Keeping it before the journey is critical: it earns the right to teach the curriculum by first naming the buyer's pain.

### Goal

State the messy reality of how SOC teams run today, then position Edstellar's learning path as the fix. This is the section that turns the page from a catalogue into a strategic answer, and it gives Edstellar the authoritative voice the rest of the brief asks for.

### Layout

Two visual blocks inside one section, on a soft `#F7F8FC` panel:

- **Block A — How SOC teams operate today.** Three to four cards listing the dominant failure modes (alert fatigue, fragmented tooling, single-person dependence on senior analysts, high attrition / burnout, blind spots in cloud and identity telemetry, no detection-engineering function).
- **Block B — The Edstellar path to a foolproof SOC.** A right-hand panel with a numbered three-step framework: **Diagnose** (capability baseline + maturity assessment), **Train and certify** (the five-stage learning path), **Operate and improve** (continuous detection-engineering, purple-team drills, MTTD / MTTR scoreboard). End the block with a CTA pill: `Run an Edstellar SOC capability assessment`.

### Suggested H2 wording

> Most SOC teams are still firefighting. Edstellar's learning path gives you the foolproof alternative.

(Lime highlighter underline behind `foolproof alternative`, matching the existing site pattern.)

### Suggested sub-line

> Edstellar audits how your SOC team operates today, builds the role-based capability they need, and runs the operating model that turns detection and response into a board-defensible KPI rather than a recurring incident review.

### Block A card content (4 cards)

Each card: short title (Riona Sans Regular 18 to 20 px, navy), 1 to 2 line description (Riona Sans Light 14 px, body). No imagery inside; keep the surface dense.

1. **Alert fatigue is the default.** Analysts triage thousands of low-fidelity alerts a week, and the highest-priority signals are missed under the volume.
2. **Tooling is fragmented.** SIEM, EDR, identity, cloud, and ticketing live in separate consoles, and your team carries the integration tax.
3. **Knowledge sits in a few senior heads.** Most playbooks are tribal; when a senior analyst leaves, MTTD and MTTR slip immediately.
4. **There is no detection-engineering function.** New attacker TTPs land before your detections do, because nobody owns the discipline of writing them.

### Block B framework (3 steps)

Each step: navy numbered circle, title, 2-line body, lime check bullet listing the deliverable.

1. **Diagnose.** Edstellar runs a SOC capability assessment against the NICE framework, MITRE ATT&CK coverage, and your real telemetry. Output: a priority gap report.
2. **Train and certify.** Your team runs the Edstellar five-stage learning path with vendor-certified mentors, and graduates with measurable role-aligned competence and certification credentials.
3. **Operate and improve.** Edstellar wires in continuous detection-engineering drills, purple-team exercises, and an MTTD / MTTR scoreboard the CISO can take to the board.

### CTAs in this section

- Primary: `Run an Edstellar SOC capability assessment` (link to `#contact` for now, replace with a dedicated lead-gen route later).
- Secondary: `Download the SOC maturity blueprint` (PDF lead-gen, gated).

---

## 5. SEO readiness pass

| Element | Current state | Action |
|---|---|---|
| Title tag (`metadata.title`) | "SOC Analyst Learning Path for Enterprise Teams \| Edstellar" | Tighten to "Corporate SOC Analyst Training for Enterprise Security Teams \| Edstellar" (lead with the high-volume keyword "SOC Analyst Training") |
| Meta description | Generic, exists | Rewrite to lead with Edstellar + the keyword: "Edstellar's Corporate SOC Analyst Learning Path standardises blue-team capability across enterprise security teams with mentor-led training, hands-on SIEM / SOAR labs, certification milestones, and measurable MTTD / MTTR outcomes." |
| H1 | See Section 2 | Apply rewrite |
| H2 hierarchy | Mixed | Each H2 must contain at least one of: "SOC Analyst", "SOC team", "Edstellar", or a related long-tail keyword |
| Image alt | Descriptive | Add the keyword phrase where natural (e.g. hero image alt: "Corporate SOC analyst team trained by Edstellar inside an enterprise security operations centre") |
| URL | `/learning-paths/soc-analyst` | Keep |
| JSON-LD: Course | Missing | Add a `Course` schema block with `provider: { @type: "Organization", name: "Edstellar" }`, `hasCourseInstance`, `educationalLevel`, `occupationalCredentialAwarded` |
| JSON-LD: BreadcrumbList | Missing | Add `BreadcrumbList` matching the visual breadcrumb |
| JSON-LD: FAQPage | Missing today, planned for the FAQ block | Add when the FAQ block is built (see Section 6 below) |
| Open Graph + Twitter Card | Missing | Add `openGraph` and `twitter` blocks in the `Metadata` export, with a 1200x630 OG card image |
| Internal linking | Only the home `/#learning-paths` anchor | Cross-link the four other learning paths in the related-paths grid using local routes (Penetration Tester, Cloud Security Engineer, GRC, CISO Track) once those pages exist; for now, keep `#` placeholders but mark them with a TODO so they are easy to find |
| Canonical URL | Implicit | Add `alternates: { canonical: "https://edstellar.com/learning-paths/soc-analyst" }` once the production domain is confirmed |

---

## 6. Marketing-ready audit

### Sections to add to the page (in priority order)

1. **The new "How SOC teams operate today" section** (Section 4 above). Already covered.
2. **Trust block above the pricing tiers.** A 3-stat row Edstellar-attributed: e.g. "200+ enterprise SOC teams trained", "94% certification first-attempt pass rate", "delivered across 100+ countries". Keep all stats sourced or mark "Indicative range; outcomes vary by program".
3. **A short FAQ block** before the final CTA banner (10 questions). Drives AI Overview citation pull and answers common buyer objections. Emit `FAQPage` JSON-LD.
4. **A resources / lead-magnet card row** between the customisation section and the pricing section: "Download the SOC capability blueprint", "Get the SOC maturity self-assessment", "Watch the 12-minute SOC training tour". Each card is a lead-gen capture.
5. **An anchor sub-nav at the top** (sticky on desktop, optional on mobile). Quick jumps to: Why Edstellar, The journey, Skills, Instructors, Outcomes, Pricing, FAQ. Improves scannability for procurement readers.

### CTA ladder (current vs proposed)

The page currently has two destinations: `#contact` and a curriculum download. A B2B page benefits from a richer ladder so each persona converts at the right point.

| Stage | CTA label | Current? | Action |
|---|---|---|---|
| Top-of-funnel | Download the SOC analyst curriculum PDF | Yes | Keep |
| Top-of-funnel | Watch a 12-minute SOC training tour (video gate) | No | Add |
| Mid-funnel | Run an Edstellar SOC capability assessment | No | Add (in the new Section 3) |
| Mid-funnel | Get the SOC maturity self-assessment (interactive scorecard) | No | Add as a card in the resources row |
| Bottom-of-funnel | Request a team quote | Yes | Keep |
| Bottom-of-funnel | Book a demo with a learning advisor | Yes | Keep |
| Bottom-of-funnel | Schedule a 30-minute SOC discovery call | No | Add as the primary final-CTA banner button |

Every CTA target string must lead with a verb, name the deliverable, and where the value is implied, attach Edstellar.

### B2B tone tightening

Audit pass on five offending lines:

| Original line | Tighter B2B rewrite |
|---|---|
| "Build a high-performing SOC team" (in CTAs / banner) | "Standardise your SOC team on Edstellar's program" |
| "Edstellar's trainer network" | "Edstellar's enterprise trainer bench" |
| "Train your security teams" (generic) | "Equip your SOC analysts, detection engineers, and incident responders" (role-specific, signals enterprise-grade) |
| "Future-proof your SOC" (banner) | "Codify your SOC operating model with Edstellar" |
| "Speak with an Edstellar SOC advisor" | Keep |

### Imagery brief (no overhaul, just upgrades)

- Hero image: keep `path-soc.jpg` for now; upgrade later to a real Edstellar-trained SOC team photo if available.
- New Section 3 (How SOC teams operate today): use `coe-team.png` (already in repo) on the right side of Block B for visual continuity with the home-page CoE section, OR keep purely text/numbered cards for tighter scan flow. Recommend the latter, save imagery for Block B if needed.
- Trust strip: stay with the existing 5-logo pull; once Edstellar's automotive / BFSI customer logos are approved, swap in a SOC-relevant subset.

---

## 7. Implementation sequence

Cuts that can ship independently. Each cut leaves the page in a buildable, reviewable state:

1. **Cut 1 — Brand + H1.** Apply Section 2 (H1 rewrite) and Section 3 (Edstellar mentions across every existing heading and sub-line). No new sections, no schema, no layout changes. Smallest possible diff, highest brand impact.
2. **Cut 2 — New Section 3 (How SOC teams operate today).** Two-block layout, four reality cards, three-step Edstellar framework, two CTAs.
3. **Cut 3 — SEO foundations.** Title tag, meta description, OG / Twitter Card, BreadcrumbList JSON-LD, Course JSON-LD, image alt updates, canonical URL.
4. **Cut 4 — FAQ block + JSON-LD.** Ten questions, accordion, `FAQPage` schema.
5. **Cut 5 — CTA ladder + resources row.** Add the assessment, discovery call, video tour, and self-assessment scorecard CTAs. Add the resources card row between customisation and pricing.
6. **Cut 6 — Anchor sub-nav (optional).** Sticky desktop quick-jump to the page sections.

Each cut runs `npx tsc --noEmit` and `npm run build` before commit. Visual QA at desktop (1440), tablet (768), mobile (390).

---

## 8. Acceptance criteria (review checklist for the next pass)

- [ ] H1 contains "SOC Analyst Learning Path", a corporate / enterprise / team qualifier, and the word "Edstellar".
- [ ] The word "Edstellar" appears at least 8 times in the body copy (excluding `<Header />` and `<Footer />`).
- [ ] A new section between the trust strip and the journey explains today's SOC reality in 3 to 4 cards and Edstellar's path in a 3-step framework, with at least one CTA inside the section.
- [ ] Title tag, meta description, OG and Twitter Card metadata all lead with the keyword and namedrop Edstellar.
- [ ] BreadcrumbList, Course, and FAQPage JSON-LD blocks render in the page source.
- [ ] At least 5 distinct CTA strings are wired into the page, each with a clear verb and named deliverable.
- [ ] Every stat or claim ("Indicative" or sourced) sits in a sentence that also contains "Edstellar", so AI Overviews pull the brand alongside the claim.
- [ ] B2B tone audit passes: no consumer-course language survives in CTAs or H2s.

---

## 9. Open questions for Marketing / SEO sign-off

1. Final canonical domain (edstellar.com vs a sub-path under the main site)?
2. Approval for the "Edstellar field signal" stats (I will use indicative ranges with a footnote until real cohort data is approved).
3. Approved list of customer logos for the SOC trust strip — keep generic logos for now or pull a SOC-specific shortlist?
4. Whether the Resources cards (Section 6) gate behind a form on first launch, or stay ungated until traffic warrants the friction.
5. Production OG card image, 1200x630, ideally with the H1 and Edstellar wordmark.
