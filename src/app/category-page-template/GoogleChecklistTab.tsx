"use client";

import { useState, useMemo } from "react";

// ─── Design tokens (match page.tsx) ──────────────────────────────────────────
const NAVY = "#1B1D52";
const INDIGO = "#6366F1";
const LIME = "#C5E826";
const GRAY = "#6B7280";
const BORDER = "#E3E6F0";

// ─── Data ────────────────────────────────────────────────────────────────────

type CheckItem = {
  id: string;
  text: string;
  why: string;
  isRedFlag?: boolean;
};

type CheckGroup = {
  id: string;
  label: string;
  googlePrinciple: string;
  accentColor: string;
  items: CheckItem[];
};

const GROUPS: CheckGroup[] = [
  {
    id: "people-first",
    label: "People-First Content Test",
    googlePrinciple: "Do you have an existing or intended audience for your business or site that would find the content useful if they came directly to you?",
    accentColor: "#6366F1",
    items: [
      {
        id: "p1",
        text: "The page was created for an existing enterprise audience for this category (e.g. Cybersecurity: L&D Directors, CISOs, Security Leaders) — not primarily to rank for keywords.",
        why: "Google: \"Do you have an existing or intended audience who would find the content useful if they came directly to you?\" — if the honest answer is no, the page is search-engine-first.",
      },
      {
        id: "p2",
        text: "Every section answers a real buyer question and would remain on the page even if it had zero SEO value.",
        why: "Google: \"Is the content primarily made to attract visits from search engines?\" — if removing a section would hurt rankings but not hurt readers, it exists for the algorithm.",
      },
      {
        id: "p3",
        text: "After reading, a visitor can make an informed enquiry decision without needing to search elsewhere.",
        why: "Google: \"After reading your content, will someone leave feeling they've learned enough to achieve their goal?\"",
      },
      {
        id: "p4",
        text: "The page delivers a satisfying experience — it does not leave readers feeling they need better information from another source.",
        why: "Google: \"Does your content leave readers feeling like they need to search again to get better information from other sources?\"",
      },
      {
        id: "p5",
        text: "The page is equally useful to a buyer arriving via email, referral, or direct — not only via organic search.",
        why: "Google: \"Does your site have a primary purpose or focus?\" — a page designed purely for SEO has no genuine primary purpose.",
      },
    ],
  },
  {
    id: "originality",
    label: "Content Originality & Quality",
    googlePrinciple: "Does the content provide original information, a complete description, and insightful analysis beyond the obvious?",
    accentColor: "#0891B2",
    items: [
      {
        id: "o1",
        text: "The page contains content specific to this category — no paragraph is generic training copy with [Category] substituted.",
        why: "Google: \"Is the content mass-produced so that individual pages don't get as much attention or care?\" Template-substituted copy is the definition of this.",
      },
      {
        id: "o2",
        text: "Hero industry slides name the specific regulations, tools, or domain challenges relevant to each vertical for this category (e.g. Cybersecurity: BFSI → PCI-DSS, SEBI; Healthcare → HIPAA, HITRUST).",
        why: "Google: \"Does the content provide insightful analysis or interesting information that is beyond the obvious?\" Naming an industry vertical without its category-specific regulations, tools, or challenges is obvious. The actual framework or skill (e.g. PCI-DSS for Cybersecurity) is what makes content specific.",
      },
      {
        id: "o3",
        text: "Program names, certification names, and domain names are real, verified, and specific to this category.",
        why: "Google: \"Does the content provide original information rather than simply summarizing what others have to say?\"",
      },
      {
        id: "o4",
        text: "Stat cards cite industry-specific, verifiable data points — not the same generic stats reused across all category pages.",
        why: "Google: \"Would you expect to see this content referenced by a printed magazine, encyclopedia, or book?\" Invented or recycled stats would not be.",
      },
      {
        id: "o5",
        text: "FAQ answers are specific to this training domain's buyer objections — not reused generic training FAQs.",
        why: "Google: \"Does the content provide a substantial, complete description of the topic?\" Generic FAQs fail this test for a specific category.",
      },
      {
        id: "o6",
        text: "No heading, paragraph, or FAQ answer is copied from another category page.",
        why: "Google: \"Is the content mass-produced by a large number of creators so that individual pages or sites don't get as much attention or care?\"",
      },
      {
        id: "o7",
        text: "The page is production quality — no spelling errors, no broken layouts, no placeholder copy remaining.",
        why: "Google: \"Is the content produced well, or does it appear sloppy or hastily produced?\" Low production quality is a direct quality signal.",
      },
    ],
  },
  {
    id: "eeat",
    label: "E-E-A-T: Experience, Expertise, Authoritativeness, Trust",
    googlePrinciple: "Trust is the most important E-E-A-T dimension. Content doesn't need to demonstrate all four, but it must be trustworthy.",
    accentColor: "#7C3AED",
    items: [
      {
        id: "e1",
        text: "All statistics (program counts, trainer counts, country coverage) are verified against current edstellar.com data — not estimated.",
        why: "Google: \"Does the content have any easily-verified factual errors?\" Inflated stats are the most easily verified error on a B2B category page.",
      },
      {
        id: "e2",
        text: "The page uses correct professional terminology for this category (L&D language + category-specific technical terms throughout).",
        why: "Google: \"Is this content written by an expert or enthusiast who demonstrably knows the topic well?\" Correct terminology is the primary expertise signal.",
      },
      {
        id: "e3",
        text: "Trainer vetting is described specifically (multi-stage assessment, delivery evaluation, client feedback, trial session) — not just 'expert trainers'.",
        why: "Google: \"Does the content present information in a way that makes you want to trust it, such as evidence of the expertise involved?\" A vague claim is not trust-building; a described process is.",
      },
      {
        id: "e4",
        text: "No accreditation or certification body affiliation claims anywhere on the page.",
        why: "Google: \"Does the content have any easily-verified factual errors?\" An affiliation claim that doesn't exist is one — and enterprise buyers verify vendor credentials before purchase.",
      },
      {
        id: "e5",
        text: "No unsubstantiated superlatives ('world-class', 'best-in-class', 'cutting-edge') — every quality claim is backed by a specific proof point.",
        why: "Google: \"Does the main heading or page title avoid exaggerating or being shocking in nature?\" Unverified superlatives are exaggeration.",
      },
    ],
  },
  {
    id: "keywords",
    label: "Keyword Placement (Not Keyword Stuffing)",
    googlePrinciple: "Each commercial-intent keyword has one pinned location. Density targets produce algorithm-first content.",
    accentColor: "#D97706",
    items: [
      {
        id: "k1",
        text: "Meta title: '[Category] Corporate Training Company | Edstellar' — max 56 characters.",
        why: "Google: \"Does the main heading or page title provide a descriptive, helpful summary of the content?\" Accurately labelling what Edstellar is, once, in the title is descriptive — not manipulative.",
      },
      {
        id: "k2",
        text: "Meta description opens with 'Edstellar is a global [category] corporate training provider…' and names 3 specific skills — max 156 characters.",
        why: "Written for the buyer reading it in search results. Answers who/what/how/for whom in one sentence — people-first.",
      },
      {
        id: "k3",
        text: "Hero Slide 1 title: Line 1 = 'Corporate Training Company', Line 2 = 'Built for Enterprise [Outcome]'.",
        why: "Places the primary commercial-intent keyword in the largest typographic element — naturally, once, with a buyer-relevant outcome completing it.",
      },
      {
        id: "k4",
        text: "'[category] training company' appears exactly once — WelcomeStrip Para 1 opening sentence.",
        why: "Google: \"Is the content primarily made to attract visits from search engines?\" One natural use in the body opening is people-first. Eight uses is algorithm-first.",
      },
      {
        id: "k5",
        text: "'[category] corporate training company' appears exactly once — CustomersPartners goal statement, opening sentence.",
        why: "One anchored, natural use in the correct structural position is sufficient for Google to understand what Edstellar is.",
      },
      {
        id: "k6",
        text: "'[category] training provider' appears exactly once — CustomersPartners goal statement, closing sentence.",
        why: "Paired placement with 'corporate training company' captures both B2B vendor-selection keyword variants in one coherent paragraph — not scattered across the page.",
      },
      {
        id: "k7",
        text: "No commercial-intent phrase ('training company', 'corporate training company', 'training provider') appears more than twice on the full page.",
        why: "Google: \"Is the content primarily made to attract visits from search engines?\" Frequency targets for these phrases produce pages that fail this test.",
      },
      {
        id: "k8",
        text: "All keyword placements read naturally — removing the keyword would not destroy the meaning of the surrounding sentence.",
        why: "Google: \"Will someone leave feeling they've had a satisfying experience?\" Forced keyword phrasing degrades reading experience and is detectable as search-engine-first intent.",
      },
    ],
  },
  {
    id: "structure",
    label: "Structural Requirements",
    googlePrinciple: "Page structure signals to both readers and Google what the page is about and who it serves.",
    accentColor: "#059669",
    items: [
      {
        id: "s1",
        text: "H1 follows locked pattern: 'Customized [Category] Training Programs for Enterprise teams'.",
        why: "The H1 is the primary SEO anchor for the page. Its locked pattern is the keyword foundation everything else is built on.",
      },
      {
        id: "s2",
        text: "'customized instructor-led training' is wrapped in <strong> bold in WelcomeStrip Para 2.",
        why: "Bold text is a reader-aid (scannable) and an emphasis signal. This is Edstellar's primary USP and must be visually prominent.",
      },
      {
        id: "s3",
        text: "Delivery field on every program card is LOCKED to 'Instructor-led (On-site/Virtual)' — no variation.",
        why: "Consistency across every card tells both the buyer and Google this is a structural fact about how Edstellar operates — not an aspiration.",
      },
      {
        id: "s4",
        text: "All program titles end in 'Training' — never 'Course', 'Bootcamp', or 'Certification'.",
        why: "'Course' signals retail. 'Training' signals enterprise investment. Language must match the intended audience's expectations to maintain E-E-A-T Trust.",
      },
      {
        id: "s5",
        text: "FAQ has 8–12 questions — not fewer, not more.",
        why: "Google: \"Does the content provide a substantial, complete description of the topic?\" 8–12 covers the full pre-purchase decision loop without padding.",
      },
      {
        id: "s6",
        text: "Target Audience FAQ is first and names at least 5 specific job designations relevant to this category (e.g. Cybersecurity: SOC analysts, GRC analysts, DevSecOps engineers, Pen Testers, Cloud Security architects).",
        why: "Google: \"Does your content clearly demonstrate first-hand expertise?\" Naming specific job titles for this category rather than generic 'IT professionals' signals genuine domain knowledge — the primary expertise signal for E-E-A-T.",
      },
      {
        id: "s7",
        text: "At least one FAQ defines ILT and VILT clearly in plain terms.",
        why: "People-first: many enterprise buyers are unfamiliar with the acronyms. Defining them serves the reader and signals expertise (E-E-A-T).",
      },
      {
        id: "s8",
        text: "Vendor-selection FAQ present: 'How do we select the right [category] corporate training provider?'",
        why: "This is the highest-intent question a B2B buyer searching 'corporate training provider' will want answered — people-first, with the keyword landing in a fully organic context.",
      },
      {
        id: "s9",
        text: "Group-vs-individual FAQ present: 'Why is group training more effective for employees than individual licenses?'",
        why: "Answers the real objection raised by buyers comparing Edstellar against self-paced platforms. A genuine buyer question — people-first content.",
      },
      {
        id: "s10",
        text: "Live Curriculum freshness banner is the first element in the Programs tab panel — above heading and cards.",
        why: "Differentiates Edstellar from static catalog vendors through genuine content (real courseware updates) — not through changing page dates, which Google explicitly flags as manipulation.",
      },
    ],
  },
  {
    id: "guardrails",
    label: "Content Guardrails",
    googlePrinciple: "Non-negotiable rules that apply to every element on every category page.",
    accentColor: "#DB2777",
    items: [
      {
        id: "g1",
        text: "No em-dashes (—) anywhere on the page.",
        why: "Edstellar brand rule. Em-dashes also appear frequently in low-quality AI-generated copy and may be flagged by editorial review tools as a quality signal.",
      },
      {
        id: "g2",
        text: "No visible 'Courses' in headings, CTAs, breadcrumbs, or primary navigation.",
        why: "'Courses' signals retail consumer context. Enterprise buyers use 'programs' and 'workforce development initiatives'. Retail language damages E-E-A-T Trust with the intended audience.",
      },
      {
        id: "g3",
        text: "No 'vendor-certified' language — always 'certified trainers'.",
        why: "'Vendor-certified' implies Edstellar certifies on behalf of a vendor — which is not the case. The trainer holds the certification; Edstellar vets the trainer.",
      },
      {
        id: "g4",
        text: "No guessed or invented URLs — all CTAs link to #contact, #catalog, or a confirmed edstellar.com URL.",
        why: "Google: \"Does the content have any easily-verified factual errors?\" A broken or wrong CTA URL is an immediate one.",
      },
      {
        id: "g5",
        text: "'instructor-led' appears at least 10 times across the full page.",
        why: "Instructor-led delivery is Edstellar's primary differentiator. Its frequency accurately reflects what the service fundamentally is — this is not keyword stuffing, it is accurate description.",
      },
      {
        id: "g6",
        text: "'group training' appears at least 8 times across the full page.",
        why: "Group training is the delivery model that distinguishes Edstellar from individual license platforms. Frequency here reflects the service — not algorithmic targeting.",
      },
      {
        id: "g7",
        text: "FAQ answers are 200–320 characters each — none padded beyond 320 with filler sentences.",
        why: "Google: \"Are you writing to a particular word count because you've heard that Google has a preferred word count? No, we don't.\" Padding answers to hit a length target is the same instinct.",
      },
      {
        id: "g8",
        text: "No two adjacent sections share the same background colour.",
        why: "Visual production quality rule. Two consecutive same-background sections merge and destroy page rhythm — low production care connects to Google's overall quality assessment.",
      },
    ],
  },
  {
    id: "red-flags",
    label: "Search-Engine-First Red Flags",
    googlePrinciple: "Every item below must be answered NO. A YES on any item is a direct Google Helpful Content violation.",
    accentColor: "#DC2626",
    items: [
      {
        id: "r1",
        text: "Is any paragraph, heading, or FAQ answer copied from another category page with only [Category] substituted?",
        why: "Google: \"Is the content mass-produced so that individual pages don't get as much attention or care?\" This is the exact definition of that violation.",
        isRedFlag: true,
      },
      {
        id: "r2",
        text: "Does the content brief include keyword frequency targets (e.g., 'use this phrase 8+ times per page')?",
        why: "Frequency targets produce algorithm-first content. Google: \"Is the content primarily made to attract visits from search engines?\" — frequency-targeted copy answers yes.",
        isRedFlag: true,
      },
      {
        id: "r3",
        text: "Were page dates updated without substantially changing the content?",
        why: "Google directly flags: \"Are you changing the date of pages to make them seem fresh when the content has not substantially changed?\" This is a manipulation signal.",
        isRedFlag: true,
      },
      {
        id: "r4",
        text: "Does this category page exist purely because it has search volume — not because Edstellar can genuinely deliver training in this domain?",
        why: "Google: \"Did you decide to enter some niche topic area without any real expertise, but instead mainly because you thought you'd get search traffic?\"",
        isRedFlag: true,
      },
      {
        id: "r5",
        text: "Are FAQ answers padded with filler sentences to hit a perceived minimum length?",
        why: "Google: \"Are you writing to a particular word count because you've heard that Google has a preferred word count? No, we don't.\" Padding answers is the same instinct.",
        isRedFlag: true,
      },
      {
        id: "r6",
        text: "Is automation used to bulk-generate category pages without human expert review of each page's category-specific content?",
        why: "Google: \"Are you using extensive automation to produce content on many topics?\" AI assistance + human expert review is compliant. AI bulk generation without category-specific review is not.",
        isRedFlag: true,
      },
    ],
  },
];

const TOTAL = GROUPS.reduce((n, g) => n + g.items.length, 0);

// ─── Component ────────────────────────────────────────────────────────────────

export function GoogleChecklistTab() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (id: string) =>
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const passCount = useMemo(() => checked.size, [checked]);
  const pct = Math.round((passCount / TOTAL) * 100);

  // For red-flag group, "pass" means checked = confirmed NO (good)
  const redFlagGroup = GROUPS.find((g) => g.id === "red-flags")!;
  const redFlagPassed = redFlagGroup.items.filter((i) => checked.has(i.id)).length;

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 space-y-8">

      {/* ── Scope banner ── */}
      <div
        className="flex items-start gap-3 rounded-xl border px-5 py-4"
        style={{ backgroundColor: "#EFF6FF", borderColor: "#BFDBFE" }}
      >
        <span className="mt-0.5 shrink-0 text-[15px]" style={{ color: "#2563EB" }}>ℹ</span>
        <div>
          <p
            className="text-[13px] leading-[1.5]"
            style={{ color: "#1E3A8A", fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
          >
            This checklist applies to every Edstellar category page — Leadership, Data Science, Project Management, Cybersecurity, and any future category.
          </p>
          <p
            className="mt-1 text-[12px] leading-[1.55]"
            style={{ color: "#1D4ED8", fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
          >
            Where specific examples appear (CISSP, SOC analyst, BFSI, PCI-DSS, etc.) they reference the Cybersecurity category page for illustration. Replace with your category&apos;s equivalent certifications, job titles, industry verticals, and compliance frameworks.
          </p>
        </div>
      </div>

      {/* ── Progress header ── */}
      <div
        className="rounded-2xl border p-6"
        style={{ backgroundColor: "#fff", borderColor: BORDER }}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p
              className="text-[11px] uppercase tracking-[0.2em] mb-1"
              style={{ color: INDIGO, fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
            >
              Google Helpful Content Compliance
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
              Tick every item before publishing a category page. Red-flag items must be confirmed as NO.
            </p>
          </div>
          <div
            className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-4 text-[22px]"
            style={{
              borderColor: pct === 100 ? "#16A34A" : pct >= 60 ? INDIGO : "#D97706",
              color: pct === 100 ? "#16A34A" : pct >= 60 ? INDIGO : "#D97706",
              fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif",
            }}
          >
            {pct}%
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-5 h-2 w-full rounded-full overflow-hidden" style={{ backgroundColor: "#E5E7EB" }}>
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${pct}%`,
              backgroundColor: pct === 100 ? "#16A34A" : pct >= 60 ? INDIGO : "#D97706",
            }}
          />
        </div>

        {/* Group mini-scores */}
        <div className="mt-5 flex flex-wrap gap-2">
          {GROUPS.map((g) => {
            const done = g.items.filter((i) => checked.has(i.id)).length;
            const all = g.items.length;
            const complete = done === all;
            return (
              <span
                key={g.id}
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px]"
                style={{
                  borderColor: complete ? "#16A34A40" : g.accentColor + "40",
                  backgroundColor: complete ? "#F0FDF4" : g.accentColor + "08",
                  color: complete ? "#16A34A" : g.accentColor,
                  fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif",
                }}
              >
                <span
                  className="inline-flex h-4 w-4 items-center justify-center rounded-full text-[9px] text-white"
                  style={{ backgroundColor: complete ? "#16A34A" : g.accentColor }}
                >
                  {complete ? "✓" : `${done}/${all}`}
                </span>
                {g.label.split(":")[0].split(" ").slice(0, 3).join(" ")}
              </span>
            );
          })}
        </div>
      </div>

      {/* ── Checklist groups ── */}
      {GROUPS.map((group) => {
        const isRedFlagGroup = group.id === "red-flags";
        const groupDone = group.items.filter((i) => checked.has(i.id)).length;
        const groupComplete = groupDone === group.items.length;

        return (
          <section
            key={group.id}
            className="rounded-2xl border overflow-hidden"
            style={{ borderColor: BORDER, borderLeft: `4px solid ${group.accentColor}`, backgroundColor: "#fff" }}
          >
            {/* Group header */}
            <div
              className="px-6 py-5 border-b"
              style={{ borderColor: BORDER, backgroundColor: group.accentColor + "08" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-[0.12em] text-white"
                      style={{ backgroundColor: group.accentColor, fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                    >
                      {isRedFlagGroup ? "Must be NO" : `${groupDone} / ${group.items.length} passed`}
                    </span>
                    {groupComplete && (
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
                    {group.label}
                  </h3>
                </div>
              </div>
              {/* Google principle quote */}
              <p
                className="mt-3 text-[12px] leading-[1.5] italic"
                style={{ color: group.accentColor, fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif", borderLeft: `2px solid ${group.accentColor}40`, paddingLeft: "10px" }}
              >
                Google: &ldquo;{group.googlePrinciple}&rdquo;
              </p>
              {isRedFlagGroup && (
                <div
                  className="mt-3 rounded-lg px-4 py-2.5 text-[12px] leading-[1.5]"
                  style={{ backgroundColor: "#FEF2F2", color: "#B91C1C", fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                >
                  <strong style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}>Check the box to confirm each item is NOT present on the page.</strong> A single YES on any red flag indicates a direct Google Helpful Content violation. The helpful content assessment operates at site level — one non-compliant page can suppress the entire domain.
                </div>
              )}
            </div>

            {/* Items */}
            <ul className="divide-y" style={{ borderColor: BORDER }}>
              {group.items.map((item, idx) => {
                const isChecked = checked.has(item.id);
                const bg = idx % 2 === 0 ? "#fff" : "#FAFAFA";

                return (
                  <li
                    key={item.id}
                    className="flex items-start gap-4 px-6 py-4 cursor-pointer transition-colors"
                    style={{
                      backgroundColor: isChecked
                        ? (isRedFlagGroup ? "#FFF7ED" : "#F0FDF4")
                        : bg,
                    }}
                    onClick={() => toggle(item.id)}
                  >
                    {/* Checkbox */}
                    <div className="mt-0.5 shrink-0">
                      <div
                        className="flex h-5 w-5 items-center justify-center rounded border-2 transition-all"
                        style={{
                          borderColor: isChecked
                            ? (isRedFlagGroup ? "#D97706" : "#16A34A")
                            : group.accentColor + "60",
                          backgroundColor: isChecked
                            ? (isRedFlagGroup ? "#D97706" : "#16A34A")
                            : "transparent",
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
                      {isRedFlagGroup && (
                        <span
                          className="mb-1.5 inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[9px] uppercase tracking-[0.12em]"
                          style={{ backgroundColor: "#FEF2F2", color: "#B91C1C", fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                        >
                          <span>⚠</span> Confirm this is NOT present
                        </span>
                      )}
                      <p
                        className="text-[14px] leading-[1.6]"
                        style={{
                          color: isChecked ? (isRedFlagGroup ? "#92400E" : "#166534") : NAVY,
                          fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif",
                          textDecoration: isChecked && !isRedFlagGroup ? "none" : "none",
                        }}
                      >
                        {item.text}
                      </p>
                      <p
                        className="mt-1.5 text-[12px] leading-[1.5]"
                        style={{ color: GRAY, fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                      >
                        {item.why}
                      </p>
                    </div>

                    {/* Status pill */}
                    {isChecked && (
                      <span
                        className="mt-0.5 shrink-0 rounded-full px-2 py-0.5 text-[10px] text-white"
                        style={{
                          backgroundColor: isRedFlagGroup ? "#D97706" : "#16A34A",
                          fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif",
                        }}
                      >
                        {isRedFlagGroup ? "Confirmed No" : "Pass"}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}

      {/* ── Completion banner ── */}
      {passCount === TOTAL && (
        <div
          className="rounded-2xl border-2 p-8 text-center"
          style={{ borderColor: "#16A34A", backgroundColor: "#F0FDF4" }}
        >
          <p className="text-[32px] mb-2">✓</p>
          <p
            className="text-[20px]"
            style={{ color: "#166534", fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
          >
            All {TOTAL} checks passed. This page meets Google Helpful Content standards.
          </p>
          <p
            className="mt-2 text-[14px]"
            style={{ color: "#166534", fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
          >
            Review again after any significant copy change, new section addition, or keyword strategy update.
          </p>
        </div>
      )}
    </div>
  );
}
