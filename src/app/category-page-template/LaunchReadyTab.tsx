"use client";

import { useState, useMemo } from "react";

const NAVY = "#1B1D52";
const INDIGO = "#6366F1";
const GRAY = "#6B7280";
const BORDER = "#E3E6F0";

type LaunchItem = {
  id: string;
  text: string;
  note: string;
};

type LaunchDimension = {
  id: string;
  label: string;
  shortLabel: string;
  description: string;
  accentColor: string;
  items: LaunchItem[];
};

const DIMENSIONS: LaunchDimension[] = [
  {
    id: "seo",
    label: "SEO Ready — Google Helpful Content",
    shortLabel: "SEO Ready",
    description:
      "Confirms the page is correctly positioned to rank as a people-first category page and passes the key structural and keyword requirements from the Google Helpful Content Checklist tab.",
    accentColor: "#6366F1",
    items: [
      {
        id: "seo1",
        text: "Meta title: '[Category] Corporate Training Company | Edstellar' — max 56 characters.",
        note: "K1. Title tag is the primary on-page ranking signal for commercial-intent queries.",
      },
      {
        id: "seo2",
        text: "Meta description opens with 'Edstellar is a global [category] corporate training provider…', names 3 category-specific skills, max 156 characters.",
        note: "K2. The description is the first buyer-facing copy in search results — people-first framing, not keyword-stuffed.",
      },
      {
        id: "seo3",
        text: "H1 follows locked pattern: 'Customized [Category] Training Programs for Enterprise teams'.",
        note: "S1. The H1 is the primary on-page SEO anchor and must not vary between category pages.",
      },
      {
        id: "seo4",
        text: "Hero Slide 1 H2 title Line 1 = '[Category] Corporate Training Company', Line 2 = 'Built for Enterprise [Outcome]'.",
        note: "K3. Places the primary commercial-intent keyword in the largest typographic element on the page.",
      },
      {
        id: "seo5",
        text: "'[category] training company' appears exactly once — WelcomeStrip Para 1 opening sentence only.",
        note: "K4. One natural use in the body opening is people-first. Multiple uses across the page is algorithm-first.",
      },
      {
        id: "seo6",
        text: "'[category] corporate training company' appears exactly once — CustomersPartners opening sentence only.",
        note: "K5. One anchored, natural use in the correct structural position is sufficient for Google to understand the positioning.",
      },
      {
        id: "seo7",
        text: "'[category] training provider' appears exactly once — CustomersPartners closing sentence only.",
        note: "K6. Paired with K5, captures both B2B vendor-selection keyword variants in one coherent paragraph.",
      },
      {
        id: "seo8",
        text: "FAQ has 8–12 questions. Target Audience FAQ is first with 5+ job designations. ILT/VILT, vendor-selection, and group-vs-individual FAQs are all present.",
        note: "S5/S6/S7/S8/S9. The FAQ structure must cover the full pre-purchase decision loop with the highest-intent buyer questions present.",
      },
      {
        id: "seo9",
        text: "All FAQ answers are 200–320 characters — none padded with filler sentences beyond 320.",
        note: "G7. Google explicitly states word-count targets produce search-engine-first content. Padding answers is the same instinct.",
      },
      {
        id: "seo10",
        text: "All statistics on the page cite a verifiable source and year — report name and year visible to the reader.",
        note: "O4/E1. Unsourced stats are the most easily verified factual error on a B2B page. Internal Edstellar stats must be labelled as such.",
      },
      {
        id: "seo11",
        text: "No commercial-intent phrase ('training company', 'corporate training company', 'training provider') appears more than twice on the full page.",
        note: "K7. Frequency targets for these phrases produce pages that fail the people-first intent test.",
      },
      {
        id: "seo12",
        text: "No red flags present: no [Category]-substituted copy, no keyword frequency briefs, no padded FAQ answers, no date manipulation without content change.",
        note: "R1–R6. A single red flag operates at site level — one non-compliant page can suppress the entire domain.",
      },
    ],
  },
  {
    id: "marketing",
    label: "Marketing Ready",
    shortLabel: "Marketing",
    description:
      "Confirms the page moves a B2B buyer from awareness to enquiry without needing a sales call to explain the offer. A marketing-ready page generates commercial interest — not just traffic.",
    accentColor: "#0891B2",
    items: [
      {
        id: "mkt1",
        text: "Above-fold hero states what Edstellar does, who it's for, and the outcome — visible without scrolling on desktop.",
        note: "B2B buyers decide within seconds whether to keep reading. A value proposition that requires scrolling to find loses them before the page loads.",
      },
      {
        id: "mkt2",
        text: "At least 2 industry vertical hero slides name the sector's specific regulations, tools, or domain challenges for this category.",
        note: "Vertical specificity (e.g. BFSI: PCI-DSS, SEBI; Healthcare: HIPAA, HITRUST) signals Edstellar understands each segment's environment — not just the industry label.",
      },
      {
        id: "mkt3",
        text: "Case studies cover at least 4 different industries relevant to this category, each with a specific business outcome stated.",
        note: "Enterprise buyers look for evidence in their own sector. Generic case studies ('a global enterprise') convert significantly lower than named-sector outcomes.",
      },
      {
        id: "mkt4",
        text: "At least one testimonial includes a specific quantified improvement (e.g. '38% improvement in detection capability') from a named role at a named type of organisation.",
        note: "Specific metrics from a credible enterprise role are the strongest social proof on a B2B page. Vague praise does not move the evaluation forward.",
      },
      {
        id: "mkt5",
        text: "Industry statistics are sourced (report name + year), directly relevant to this category's buyer pain points, and visible on the page.",
        note: "Sourced, relevant stats build credibility and create urgency. Stats that directly frame the buyer's risk (breach cost, skills gap %) drive enquiry.",
      },
      {
        id: "mkt6",
        text: "Pricing section shows all packages with trainee license counts, training hours, and inclusions — no hidden pricing, no 'contact for pricing' as the only option.",
        note: "B2B buyers need enough pricing signal to determine budget fit before booking a discovery call. Opaque pricing increases drop-off at this stage.",
      },
      {
        id: "mkt7",
        text: "Outcome language present throughout: measurable skills delta, MTTD/MTTR improvement, board-reportable metrics.",
        note: "L&D and security buyers justify training spend through risk-reduction language. Pages that only describe delivery features underperform in conversion.",
      },
      {
        id: "mkt8",
        text: "Resources section contains 4 category-specific articles — no generic training titles, no fabricated article references, no placeholder copy.",
        note: "Resource content extends credibility and time on page. Generic or invented titles reduce buyer confidence and are a direct O7 production quality violation.",
      },
      {
        id: "mkt9",
        text: "Contact form asks for Company, Job Title, and Training Requirements — not just name and email.",
        note: "Form fields communicate who the page is for. Enterprise qualification fields create a different psychological contract than a consumer lead form.",
      },
    ],
  },
  {
    id: "brand",
    label: "Brand Ready",
    shortLabel: "Brand",
    description:
      "Confirms the page reflects Edstellar's positioning as an enterprise instructor-led group training provider — not a course marketplace, not a self-paced platform, not a generic L&D vendor.",
    accentColor: "#7C3AED",
    items: [
      {
        id: "brd1",
        text: "'instructor-led' appears at least 10 times across the full page.",
        note: "G5. Instructor-led delivery is Edstellar's primary differentiator. Frequency accurately reflects what the service fundamentally is.",
      },
      {
        id: "brd2",
        text: "'group training' appears at least 8 times across the full page.",
        note: "G6. Group training distinguishes Edstellar from individual license platforms. Frequency here is accurate product description, not keyword stuffing.",
      },
      {
        id: "brd3",
        text: "'customized instructor-led training' is wrapped in bold in WelcomeStrip Para 2.",
        note: "S2. Bold on Edstellar's core USP in the primary body introduction is a brand-level emphasis signal.",
      },
      {
        id: "brd4",
        text: "All program card titles end in 'Training' — never 'Course', 'Bootcamp', or 'Certification'.",
        note: "S4. 'Course' signals retail. 'Training' signals enterprise investment. Language must match what the intended enterprise audience expects.",
      },
      {
        id: "brd5",
        text: "No 'Courses' appears in any heading, CTA, breadcrumb, or navigation label.",
        note: "G2. Retail learning platform language (Courses, Enrol, Seat) damages E-E-A-T Trust with the enterprise audience Edstellar serves.",
      },
      {
        id: "brd6",
        text: "No em-dashes (—) appear anywhere on the page — in visible copy, headings, or JSX source.",
        note: "G1. Edstellar brand rule. Em-dashes also correlate with low-quality AI copy patterns and may trigger editorial review flags.",
      },
      {
        id: "brd7",
        text: "No unsubstantiated superlatives on the page: 'world-class', 'best-in-class', 'cutting-edge', 'industry-leading'. Every quality claim is backed by a specific proof point.",
        note: "E5. Unverified superlatives are exaggeration — a direct E-E-A-T Trust violation. Enterprise buyers are trained to distrust them.",
      },
      {
        id: "brd8",
        text: "No 'vendor-certified' language anywhere. Phrasing is always 'certified trainers' or 'certified [domain] practitioner'.",
        note: "G3. 'Vendor-certified' implies Edstellar certifies on behalf of a vendor (ISC2, EC-Council, etc.) — which is not the case.",
      },
      {
        id: "brd9",
        text: "No accreditation or certification body affiliation claims appear anywhere on the page.",
        note: "E4. Enterprise buyers verify vendor credentials. An affiliation claim that doesn't exist is a verifiable factual error and a trust-destroying discovery.",
      },
      {
        id: "brd10",
        text: "Pricing card labels use fit-signal language ('Best for Growing Teams', 'Designed for large corporations') — not consumer popularity signals ('Most Popular', 'Best Value').",
        note: "Enterprise L&D buyers evaluating group training packages need a fit signal, not a social proof cue borrowed from consumer SaaS.",
      },
    ],
  },
  {
    id: "tone",
    label: "B2B Tone",
    shortLabel: "B2B Tone",
    description:
      "Confirms the page speaks to enterprise decision-makers — CISO, Director of L&D, VP Security Operations — not to individual learners. Every section should read as a proposal, not a product listing.",
    accentColor: "#059669",
    items: [
      {
        id: "tone1",
        text: "Testimonials are attributed to CISO, Director, VP, or equivalent enterprise roles — not individual learners or unnamed sources.",
        note: "Social proof must mirror the audience. A testimonial from 'a security analyst' does not convert a CISO. A testimonial from 'CISO at a Tier-1 Indian Bank' does.",
      },
      {
        id: "tone2",
        text: "Case studies frame business outcomes (compliance gaps closed, skills delta quantified, deployment timelines met) — not individual learning journeys.",
        note: "Enterprise buyers evaluate on organisational impact. 'An employee improved their skills' does not map to their evaluation criteria.",
      },
      {
        id: "tone3",
        text: "Pricing section frames by team size (cohorts, licenses, hours) — not per-seat, per-user, or per-month.",
        note: "Per-seat pricing is a consumer SaaS frame. Cohort pricing with license counts and training hours is the enterprise L&D procurement frame.",
      },
      {
        id: "tone4",
        text: "No retail platform language anywhere: 'enroll now', 'unlimited access', 'learn at your own pace', 'at your own schedule', 'lifetime access'.",
        note: "Self-paced consumer language signals the wrong product category to enterprise buyers evaluating structured cohort group training.",
      },
      {
        id: "tone5",
        text: "Contact form submit CTA is framed as a business transaction ('Send My Training Requirements') — not a lead form ('Submit', 'Get Started', 'Subscribe').",
        note: "'Training Requirements' positions the interaction as a B2B RFP/proposal process, which is accurate for Edstellar's consultative sales motion.",
      },
      {
        id: "tone6",
        text: "Discovery call / training-needs analysis framing is present — the page describes a consultative process, not a checkout or instant-purchase flow.",
        note: "Enterprise training has a consultative sales cycle. Pages that skip the consultation frame misrepresent the product and attract buyers expecting self-serve purchase.",
      },
      {
        id: "tone7",
        text: "Board-reporting language is present: 'skills delta', 'MTTD/MTTR improvement', 'post-program delivery report', 'your CISO can present to the board'.",
        note: "L&D and security leaders justify spend upward. Pages that describe delivery features but not board-reportable outcomes miss the actual buyer motivation.",
      },
      {
        id: "tone8",
        text: "No individual learner language in headings or prominent copy: 'you will learn', 'your career', 'get certified', 'pass the exam'.",
        note: "Individual learner language repositions Edstellar as a career platform. The enterprise buyer is purchasing outcomes for their organisation, not a learning experience for themselves.",
      },
    ],
  },
  {
    id: "cta",
    label: "Clear Call to Actions",
    shortLabel: "CTAs",
    description:
      "Confirms every CTA has distinct intent-specific copy, points to a valid destination, and serves the B2B buyer's actual next step — not a generic conversion prompt repeated across all touchpoints.",
    accentColor: "#D97706",
    items: [
      {
        id: "cta1",
        text: "No CTA anywhere on the page says 'Enquire Now' — every CTA uses intent-specific copy.",
        note: "'Enquire Now' is a non-signal. It tells the buyer nothing about what happens next. Intent-specific CTAs reduce friction by setting expectations before the click.",
      },
      {
        id: "cta2",
        text: "No CTA says 'Learn More', 'Click Here', 'Get Started', or 'Submit'.",
        note: "Generic CTAs signal a page built for any audience. Specific CTAs signal a page designed for this buyer's actual next action.",
      },
      {
        id: "cta3",
        text: "Hero secondary CTA: 'Get a Training Proposal' — scoped to proposal intent.",
        note: "The hero CTA is the highest-visibility conversion point on the page. A proposal request is the correct next step for a buyer who has just read the hero pitch.",
      },
      {
        id: "cta4",
        text: "Program catalog CTA: 'Browse the Full Program Catalog' — scoped to discovery intent.",
        note: "A buyer looking at 4 featured programs wants to see the full set. 'Browse the Full Program Catalog' matches that intent; 'Enquire Now' does not.",
      },
      {
        id: "cta5",
        text: "Pricing package button: 'Get a Quote' — scoped to pricing intent.",
        note: "On a pricing card, the buyer's next step is to understand cost for their team size. 'Get a Quote' matches that intent precisely.",
      },
      {
        id: "cta6",
        text: "Pricing CTA strip: 'Talk to a Learning Advisor' — scoped to consultation intent.",
        note: "The pricing CTA strip targets buyers with custom requirements. 'Talk to a Learning Advisor' frames the interaction as expert consultation, not a generic form submission.",
      },
      {
        id: "cta7",
        text: "FAQ bottom CTA: 'Ask Our Learning Services Team' — scoped to follow-up question intent.",
        note: "A buyer who has just read 12 FAQs and still has a question wants to ask a person, not submit a generic enquiry form.",
      },
      {
        id: "cta8",
        text: "Contact form submit: 'Send My Training Requirements' — scoped to RFP/proposal intent.",
        note: "The form collects team size, roles, and requirements — this is an RFP, not a newsletter signup. The submit copy must reflect the weight of that form.",
      },
      {
        id: "cta9",
        text: "All CTAs link to valid, confirmed destinations: #contact, #catalog, or a verified edstellar.com URL. No invented or placeholder hrefs.",
        note: "G4. A broken or wrong CTA URL is an immediately verifiable factual error and the fastest trust-destroyer mid-evaluation.",
      },
      {
        id: "cta10",
        text: "No two adjacent sections on the page have identical CTA copy.",
        note: "Identical CTAs in adjacent sections signal template assembly without editorial review. Distinct CTAs signal intent-specific design throughout.",
      },
    ],
  },
];

const TOTAL = DIMENSIONS.reduce((n, d) => n + d.items.length, 0);

// ─── Score label helpers ──────────────────────────────────────────────────────

function readinessLabel(pct: number): { label: string; color: string; bg: string } {
  if (pct === 100) return { label: "Launch Ready", color: "#166534", bg: "#F0FDF4" };
  if (pct >= 80) return { label: "Almost Ready", color: "#1E40AF", bg: "#EFF6FF" };
  if (pct >= 60) return { label: "Needs Work", color: "#92400E", bg: "#FFFBEB" };
  return { label: "Not Ready", color: "#991B1B", bg: "#FEF2F2" };
}

// ─── Component ────────────────────────────────────────────────────────────────

export function LaunchReadyTab() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (id: string) =>
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const passCount = useMemo(() => checked.size, [checked]);
  const pct = Math.round((passCount / TOTAL) * 100);
  const readiness = readinessLabel(pct);

  const dimScores = useMemo(
    () =>
      DIMENSIONS.map((d) => ({
        ...d,
        passed: d.items.filter((i) => checked.has(i.id)).length,
        total: d.items.length,
      })),
    [checked]
  );

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 space-y-8">

      {/* ── Scope banner ── */}
      <div
        className="flex items-start gap-3 rounded-xl border px-5 py-4"
        style={{ backgroundColor: "#FFFBEB", borderColor: "#FDE68A" }}
      >
        <span className="mt-0.5 shrink-0 text-[15px]" style={{ color: "#D97706" }}>★</span>
        <p
          className="text-[13px] leading-[1.5]"
          style={{ color: "#92400E", fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
        >
          This tab provides a final pre-publish review across the five dimensions the page was rated on. Complete the Google Helpful Content Checklist and Section Rules tabs first — this tab summarises readiness, it does not replace them.
        </p>
      </div>

      {/* ── Overall score header ── */}
      <div className="rounded-2xl border p-6" style={{ backgroundColor: "#fff", borderColor: BORDER }}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p
              className="text-[11px] uppercase tracking-[0.2em] mb-1"
              style={{ color: INDIGO, fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
            >
              Launch Readiness Score
            </p>
            <h2
              className="text-[24px] leading-tight"
              style={{ color: NAVY, fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
            >
              {passCount} of {TOTAL} checks passed
            </h2>
            <p
              className="mt-1 text-[13px]"
              style={{ color: GRAY, fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
            >
              Tick every item before publishing. All 49 must pass for a launch-ready page.
            </p>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div
              className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-4 text-[22px]"
              style={{
                borderColor: pct === 100 ? "#16A34A" : pct >= 80 ? INDIGO : pct >= 60 ? "#D97706" : "#DC2626",
                color: pct === 100 ? "#16A34A" : pct >= 80 ? INDIGO : pct >= 60 ? "#D97706" : "#DC2626",
                fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif",
              }}
            >
              {pct}%
            </div>
            <span
              className="rounded-full px-3 py-0.5 text-[11px]"
              style={{
                backgroundColor: readiness.bg,
                color: readiness.color,
                fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif",
              }}
            >
              {readiness.label}
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-5 h-2 w-full rounded-full overflow-hidden" style={{ backgroundColor: "#E5E7EB" }}>
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${pct}%`,
              backgroundColor: pct === 100 ? "#16A34A" : pct >= 80 ? INDIGO : pct >= 60 ? "#D97706" : "#DC2626",
            }}
          />
        </div>

        {/* Per-dimension mini scores */}
        <div className="mt-5 flex flex-wrap gap-2">
          {dimScores.map((d) => {
            const complete = d.passed === d.total;
            return (
              <span
                key={d.id}
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px]"
                style={{
                  borderColor: complete ? "#16A34A40" : d.accentColor + "40",
                  backgroundColor: complete ? "#F0FDF4" : d.accentColor + "08",
                  color: complete ? "#16A34A" : d.accentColor,
                  fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif",
                }}
              >
                <span
                  className="inline-flex h-4 w-4 items-center justify-center rounded-full text-[9px] text-white"
                  style={{ backgroundColor: complete ? "#16A34A" : d.accentColor }}
                >
                  {complete ? "✓" : `${d.passed}/${d.total}`}
                </span>
                {d.shortLabel}
              </span>
            );
          })}
        </div>
      </div>

      {/* ── Dimension checklists ── */}
      {DIMENSIONS.map((dim) => {
        const dimPassed = dim.items.filter((i) => checked.has(i.id)).length;
        const dimComplete = dimPassed === dim.items.length;
        const dimPct = Math.round((dimPassed / dim.items.length) * 100);

        return (
          <section
            key={dim.id}
            className="rounded-2xl border overflow-hidden"
            style={{ borderColor: BORDER, borderLeft: `4px solid ${dim.accentColor}`, backgroundColor: "#fff" }}
          >
            {/* Dimension header */}
            <div
              className="px-6 py-5 border-b"
              style={{ borderColor: BORDER, backgroundColor: dim.accentColor + "08" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-[0.12em] text-white"
                      style={{ backgroundColor: dim.accentColor, fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                    >
                      {dimPassed} / {dim.items.length} passed
                    </span>
                    {dimComplete && (
                      <span
                        className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-[0.12em] text-white"
                        style={{ backgroundColor: "#16A34A", fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                      >
                        ✓ Complete
                      </span>
                    )}
                  </div>
                  <h3
                    className="text-[18px] leading-tight"
                    style={{ color: NAVY, fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                  >
                    {dim.label}
                  </h3>
                  <p
                    className="mt-2 text-[13px] leading-[1.5]"
                    style={{ color: GRAY, fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                  >
                    {dim.description}
                  </p>
                </div>
                {/* Mini progress ring */}
                <div className="shrink-0 hidden sm:flex flex-col items-center gap-1">
                  <svg width="44" height="44" viewBox="0 0 44 44">
                    <circle cx="22" cy="22" r="18" fill="none" stroke="#E5E7EB" strokeWidth="4" />
                    <circle
                      cx="22" cy="22" r="18" fill="none"
                      stroke={dimComplete ? "#16A34A" : dim.accentColor}
                      strokeWidth="4"
                      strokeDasharray={`${(dimPct / 100) * 113} 113`}
                      strokeLinecap="round"
                      transform="rotate(-90 22 22)"
                      style={{ transition: "stroke-dasharray 0.4s ease" }}
                    />
                    <text
                      x="22" y="26"
                      textAnchor="middle"
                      fontSize="10"
                      fill={dimComplete ? "#16A34A" : dim.accentColor}
                      fontFamily="'Riona Sans Bold', Helvetica, Arial, sans-serif"
                    >
                      {dimPct}%
                    </text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Items */}
            <ul className="divide-y" style={{ borderColor: BORDER }}>
              {dim.items.map((item, idx) => {
                const isChecked = checked.has(item.id);
                const bg = idx % 2 === 0 ? "#fff" : "#FAFAFA";
                return (
                  <li
                    key={item.id}
                    className="flex items-start gap-4 px-6 py-4 cursor-pointer transition-colors"
                    style={{ backgroundColor: isChecked ? "#F0FDF4" : bg }}
                    onClick={() => toggle(item.id)}
                  >
                    {/* Checkbox */}
                    <div className="mt-0.5 shrink-0">
                      <div
                        className="flex h-5 w-5 items-center justify-center rounded border-2 transition-all"
                        style={{
                          borderColor: isChecked ? "#16A34A" : dim.accentColor + "60",
                          backgroundColor: isChecked ? "#16A34A" : "transparent",
                        }}
                      >
                        {isChecked && (
                          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-[14px] leading-[1.6]"
                        style={{
                          color: isChecked ? "#166534" : NAVY,
                          fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif",
                        }}
                      >
                        {item.text}
                      </p>
                      <p
                        className="mt-1.5 text-[12px] leading-[1.5]"
                        style={{ color: GRAY, fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                      >
                        {item.note}
                      </p>
                    </div>

                    {/* Pass pill */}
                    {isChecked && (
                      <span
                        className="mt-0.5 shrink-0 rounded-full px-2 py-0.5 text-[10px] text-white"
                        style={{ backgroundColor: "#16A34A", fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                      >
                        Pass
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}

      {/* ── Overall Score summary ── */}
      <section className="rounded-2xl border overflow-hidden" style={{ borderColor: BORDER }}>
        <div
          className="px-6 py-5 border-b"
          style={{ borderColor: BORDER, backgroundColor: NAVY }}
        >
          <h3
            className="text-[18px] text-white"
            style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
          >
            Overall Score
          </h3>
          <p
            className="mt-1 text-[13px] text-white/60"
            style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
          >
            Aggregate readiness across all five dimensions. A page scores &ldquo;Launch Ready&rdquo; only when all five dimensions are complete.
          </p>
        </div>

        <div className="p-6" style={{ backgroundColor: "#fff" }}>
          {/* Dimension score bars */}
          <div className="space-y-4">
            {dimScores.map((d) => {
              const p = Math.round((d.passed / d.total) * 100);
              return (
                <div key={d.id}>
                  <div className="mb-1.5 flex items-center justify-between">
                    <span
                      className="text-[13px]"
                      style={{ color: NAVY, fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                    >
                      {d.label}
                    </span>
                    <span
                      className="text-[12px]"
                      style={{ color: d.passed === d.total ? "#16A34A" : d.accentColor, fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                    >
                      {d.passed}/{d.total} — {p}%
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full overflow-hidden" style={{ backgroundColor: "#E5E7EB" }}>
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${p}%`,
                        backgroundColor: d.passed === d.total ? "#16A34A" : d.accentColor,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Overall total */}
          <div
            className="mt-8 flex flex-col items-center justify-center gap-3 rounded-xl border p-6 text-center sm:flex-row sm:gap-8"
            style={{ borderColor: BORDER, backgroundColor: readiness.bg }}
          >
            <div>
              <p
                className="text-[48px] leading-none"
                style={{ color: readiness.color, fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                {pct}%
              </p>
              <p
                className="mt-1 text-[13px]"
                style={{ color: readiness.color, fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                {passCount} of {TOTAL} checks passed
              </p>
            </div>
            <div
              className="h-px w-full sm:h-16 sm:w-px"
              style={{ backgroundColor: readiness.color + "30" }}
            />
            <div>
              <p
                className="text-[22px]"
                style={{ color: readiness.color, fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
              >
                {readiness.label}
              </p>
              <p
                className="mt-1 max-w-xs text-[12px] leading-[1.5]"
                style={{ color: readiness.color + "CC", fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                {pct === 100
                  ? "All five dimensions complete. This page meets the standard for publishing."
                  : pct >= 80
                  ? "Minor gaps remain. Address the unchecked items before publishing."
                  : pct >= 60
                  ? "Several dimensions are incomplete. Do not publish until all five dimensions pass."
                  : "Significant gaps across dimensions. This page requires substantial work before it is ready."}
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
