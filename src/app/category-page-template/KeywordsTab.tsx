"use client";

import { useState } from "react";

const NAVY = "#1B1D52";
const INDIGO = "#6366F1";
const LIME = "#C5E826";
const GRAY = "#6B7280";
const BORDER = "#E3E6F0";

// ─── Sub-components ───────────────────────────────────────────────────────────

function Token({ children }: { children: string }) {
  return (
    <code
      className="inline-flex items-center rounded px-1.5 py-0.5 text-[11px]"
      style={{
        backgroundColor: INDIGO + "18",
        color: INDIGO,
        border: `1px solid ${INDIGO}35`,
        fontFamily: "monospace",
      }}
    >
      {children}
    </code>
  );
}

function PatternText({ text }: { text: string }) {
  const parts = text.split(/(\[Category\]|\[Certification\]|\[Outcome\]|\[Compliance framework\])/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("[") ? <Token key={i}>{p}</Token> : <span key={i}>{p}</span>
      )}
    </>
  );
}

type FreqType = "pinned" | "min" | "natural";

function FreqBadge({ label, type }: { label: string; type: FreqType }) {
  const styles: Record<FreqType, { bg: string; text: string; border: string }> = {
    pinned: { bg: "#FFFBEB", text: "#92400E", border: "#FDE68A" },
    min:    { bg: "#ECFDF5", text: "#065F46", border: "#A7F3D0" },
    natural:{ bg: "#EFF6FF", text: "#1E40AF", border: "#BFDBFE" },
  };
  const s = styles[type];
  return (
    <span
      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] whitespace-nowrap"
      style={{ backgroundColor: s.bg, color: s.text, border: `1px solid ${s.border}`, fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
    >
      {label}
    </span>
  );
}

function ChecklistRef({ ids }: { ids: string[] }) {
  return (
    <span className="flex flex-wrap gap-1">
      {ids.map((id) => (
        <span
          key={id}
          className="inline-flex items-center rounded px-1.5 py-0.5 text-[10px]"
          style={{
            backgroundColor: "#F5F3FF",
            color: INDIGO,
            border: `1px solid ${INDIGO}30`,
            fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif",
          }}
        >
          {id}
        </span>
      ))}
    </span>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────

type KeywordRow = {
  pattern: string;
  example: string;
  placement: string;
  frequency: string;
  freqType: FreqType;
  checklistRefs: string[];
};

type Violation = {
  dont: string;
  because: string;
};

type Cluster = {
  id: string;
  letter: string;
  name: string;
  intent: string;
  accentColor: string;
  principle: string;
  keywords: KeywordRow[];
  violations: Violation[];
};

const CLUSTERS: Cluster[] = [
  {
    id: "vendor",
    letter: "A",
    name: "Vendor Selection",
    intent: "Buyers at the 'choose a provider' stage — comparing corporate training companies",
    accentColor: INDIGO,
    principle: "Every keyword in this cluster is pinned to exactly one structural location. Repetition of these phrases signals algorithm-first intent and triggers Google's Helpful Content classifier.",
    keywords: [
      {
        pattern: "[Category] Corporate Training Company",
        example: "Cybersecurity Corporate Training Company",
        placement: "Meta title only — max 56 chars. Format: '[Category] Corporate Training Company | Edstellar'",
        frequency: "1 (pinned)",
        freqType: "pinned",
        checklistRefs: ["K1"],
      },
      {
        pattern: "[Category] corporate training provider",
        example: "cybersecurity corporate training provider",
        placement: "Meta description — opening phrase. Format: 'Edstellar is a global [category] corporate training provider…' — max 156 chars total",
        frequency: "1 (pinned)",
        freqType: "pinned",
        checklistRefs: ["K2"],
      },
      {
        pattern: "[Category] training company",
        example: "cybersecurity training company",
        placement: "WelcomeStrip — Para 1 opening sentence only. Pattern: 'Edstellar is the [category] training company enterprises rely on to build deep capability…'",
        frequency: "1 (pinned)",
        freqType: "pinned",
        checklistRefs: ["K4"],
      },
      {
        pattern: "[Category] corporate training company",
        example: "cybersecurity corporate training company",
        placement: "CustomersPartners (About section) — goal statement, opening sentence only",
        frequency: "1 (pinned)",
        freqType: "pinned",
        checklistRefs: ["K5"],
      },
      {
        pattern: "[Category] training provider",
        example: "cybersecurity training provider",
        placement: "CustomersPartners (About section) — goal statement, closing sentence only",
        frequency: "1 (pinned)",
        freqType: "pinned",
        checklistRefs: ["K6"],
      },
    ],
    violations: [
      {
        dont: "Using 'training company' or 'training provider' more than twice across the full page",
        because: "Checklist K7: no commercial-intent phrase may exceed two total occurrences. Each extra use shifts the page from people-first to algorithm-first.",
      },
      {
        dont: "Placing these keywords in H2 or H3 headings",
        because: "Heading slots describe section content to readers. 'Corporate training company' in a heading serves the algorithm, not the buyer — a textbook Checklist R2 violation.",
      },
      {
        dont: "Combining 'training company' and 'corporate training company' in the same paragraph",
        because: "Adjacent near-synonyms create unnatural reading cadence detectable as frequency targeting. Checklist K8: every keyword placement must read naturally with the surrounding sentence.",
      },
    ],
  },
  {
    id: "corporate",
    letter: "B",
    name: "Corporate / Enterprise Scope",
    intent: "Buyers confirming this is B2B enterprise scope — not consumer or retail",
    accentColor: "#0891B2",
    principle: "Service descriptors — appear naturally wherever delivery context is described. No pinning required, but no frequency targets either.",
    keywords: [
      {
        pattern: "Corporate [Category] Training",
        example: "Corporate Cybersecurity Training",
        placement: "Hero Slide 1 — eyebrow label (small uppercase text above the main heading). Format: 'Corporate [Category] Training'",
        frequency: "1 (pinned)",
        freqType: "pinned",
        checklistRefs: ["K3"],
      },
      {
        pattern: "[Category] corporate training",
        example: "cybersecurity corporate training",
        placement: "Hero slide descriptions, WelcomeStrip Para 1, About section — wherever enterprise delivery scope is described",
        frequency: "3–5 natural",
        freqType: "natural",
        checklistRefs: ["K7"],
      },
      {
        pattern: "enterprise [Category] training",
        example: "enterprise cybersecurity training",
        placement: "Hero slide descriptions, FAQ answers about audience and scope",
        frequency: "2–3 natural",
        freqType: "natural",
        checklistRefs: ["K7"],
      },
      {
        pattern: "[Category] training for enterprise teams",
        example: "cybersecurity training for enterprise teams",
        placement: "H1 — the locked H1 pattern ends 'for Enterprise teams'. This variant is baked into the H1 structure",
        frequency: "1 (H1)",
        freqType: "pinned",
        checklistRefs: ["S1"],
      },
    ],
    violations: [
      {
        dont: "Using 'enterprise-grade' or 'world-class' as adjective filler",
        because: "Checklist E5: every quality claim must be backed by a specific proof point. 'Enterprise-grade' without evidence is an unsubstantiated superlative — a direct E-E-A-T Trust failure.",
      },
      {
        dont: "Using 'B2B training', 'business training', or 'company training' as keyword variants",
        because: "These are not the buyer's actual search terms. Forced variant insertion produces unnatural phrasing — Checklist K8 requires every keyword to read naturally in context.",
      },
    ],
  },
  {
    id: "ilt",
    letter: "C",
    name: "Instructor-Led Delivery",
    intent: "Buyers specifically seeking live, human-delivered training — not self-paced or AI-generated",
    accentColor: "#7C3AED",
    principle: "The ONLY cluster with a minimum frequency target — because each occurrence describes a real, verified fact about Edstellar's delivery model. This is accurate description, not keyword strategy.",
    keywords: [
      {
        pattern: "instructor-led [Category] training",
        example: "instructor-led cybersecurity training",
        placement: "Program cards Delivery field (locked value), Hero descriptions, About section, FAQ answers — 10+ total across page",
        frequency: "10+ (minimum)",
        freqType: "min",
        checklistRefs: ["G5", "S3"],
      },
      {
        pattern: "instructor-led group training",
        example: "instructor-led group training",
        placement: "WelcomeStrip Para 2 (bolded with <strong> as primary USP), Hero Slide 1 description",
        frequency: "3+ (minimum)",
        freqType: "min",
        checklistRefs: ["G5", "S2"],
      },
      {
        pattern: "[Category] ILT",
        example: "cybersecurity ILT",
        placement: "FAQ — define ILT in plain terms in at least one answer. Must explain the acronym for buyers unfamiliar with L&D terminology",
        frequency: "1 defined",
        freqType: "natural",
        checklistRefs: ["S7"],
      },
      {
        pattern: "[Category] VILT",
        example: "cybersecurity VILT",
        placement: "FAQ — define VILT alongside ILT in the same answer",
        frequency: "1 defined",
        freqType: "natural",
        checklistRefs: ["S7"],
      },
      {
        pattern: "on-site [Category] training / virtual [Category] training",
        example: "on-site cybersecurity training / virtual cybersecurity training",
        placement: "Program card Delivery field suffix '(On-site/Virtual)', About section delivery pillars",
        frequency: "natural",
        freqType: "natural",
        checklistRefs: ["S3"],
      },
    ],
    violations: [
      {
        dont: "Reducing 'instructor-led' occurrences to avoid 'over-optimisation'",
        because: "Instructor-led is a factual description of what Edstellar delivers. Removing it makes the page less accurate — the opposite of Google's Helpful Content standard (Checklist G5).",
      },
      {
        dont: "Replacing 'instructor-led' with 'online', 'e-learning', or 'virtual learning'",
        because: "These terms describe self-paced platform delivery. Edstellar delivers ILT/VILT. Using platform terminology introduces a factual error — a direct Checklist E1 (verified facts) violation.",
      },
    ],
  },
  {
    id: "group",
    letter: "D",
    name: "Group Training",
    intent: "B2B cohort buyers comparing Edstellar against individual-license self-paced platforms",
    accentColor: "#059669",
    principle: "Minimum frequency mirrors service reality — every program Edstellar delivers is group-based. Checklist G6 mandates 8+ uses because frequency here is accurate description, not manipulation.",
    keywords: [
      {
        pattern: "[Category] group training",
        example: "cybersecurity group training",
        placement: "Hero slide descriptions, About section pillars, Programs section intro paragraph, FAQ comparing group vs individual",
        frequency: "8+ (minimum)",
        freqType: "min",
        checklistRefs: ["G6", "S9"],
      },
      {
        pattern: "group [Category] training programs",
        example: "group cybersecurity training programs",
        placement: "Programs section heading variant or intro sentence",
        frequency: "1–2 natural",
        freqType: "natural",
        checklistRefs: ["G6"],
      },
      {
        pattern: "[Category] cohort training",
        example: "cybersecurity cohort training",
        placement: "FAQ answer comparing group vs individual licenses — contextual use only",
        frequency: "1–2 natural",
        freqType: "natural",
        checklistRefs: ["S9"],
      },
    ],
    violations: [
      {
        dont: "Using 'group training' in the page title or H1",
        because: "Meta title is locked to 'Corporate Training Company' pattern (Checklist K1). H1 is locked to 'training programs' pattern (Checklist S1). Inserting 'group' disrupts both anchors.",
      },
      {
        dont: "Padding FAQ answers with 'group training' beyond natural usage to hit the 8 count",
        because: "Checklist G7: FAQ answers must be 200–320 characters — no padding. The 8+ count is met across the page organically; forcing it into FAQ phrasing violates people-first intent.",
      },
    ],
  },
  {
    id: "customized",
    letter: "E",
    name: "Customized Training (USP Keywords)",
    intent: "Buyers who need bespoke programs built for their team's specific roles, tech stack, and compliance context",
    accentColor: "#D97706",
    principle: "Customization is Edstellar's #2 USP after instructor-led delivery. The structural emphasis signal is the <strong> bold in WelcomeStrip Para 2 — this is the one pinned location.",
    keywords: [
      {
        pattern: "customized [Category] training",
        example: "customized cybersecurity training",
        placement: "WelcomeStrip Para 2 (bolded), About section goal statement, Hero slide descriptions",
        frequency: "2–3 natural",
        freqType: "natural",
        checklistRefs: ["S2"],
      },
      {
        pattern: "customized instructor-led training",
        example: "customized instructor-led training",
        placement: "WelcomeStrip Para 2 — the <strong>-bolded USP phrase. One bolded occurrence only",
        frequency: "1 bolded (pinned)",
        freqType: "pinned",
        checklistRefs: ["S2"],
      },
      {
        pattern: "[Category] training programs",
        example: "cybersecurity training programs",
        placement: "H1 (locked), Programs section heading, CTA button labels ('Browse Training Programs')",
        frequency: "3–5 natural",
        freqType: "natural",
        checklistRefs: ["S1"],
      },
      {
        pattern: "Customized [Category] Training Programs",
        example: "Customized Cybersecurity Training Programs",
        placement: "Programs tab panel heading — immediately establishes bespoke framing before the program catalog",
        frequency: "1 (pinned)",
        freqType: "pinned",
        checklistRefs: ["S1", "S2"],
      },
    ],
    violations: [
      {
        dont: "Using 'tailored', 'personalised', 'bespoke' as synonym variants alongside 'customized'",
        because: "Synonym stuffing is recognized by modern NLP. One consistent term ('customized') placed in the correct structural location is stronger than three near-synonyms scattered across the page.",
      },
      {
        dont: "Bolding 'customized' in more than one location",
        because: "Checklist S2 pins the bold to WelcomeStrip Para 2 only. Multiple bold occurrences dilute the emphasis signal and read as visual noise — low production quality (Checklist O7).",
      },
    ],
  },
  {
    id: "workforce",
    letter: "F",
    name: "Workforce Development",
    intent: "L&D Directors and CHROs searching for strategic employee development — not a one-off event",
    accentColor: "#DB2777",
    principle: "These keywords frame Edstellar as a strategic partner, not a course marketplace. Used in hero descriptions and About section where the 'why' of training is discussed.",
    keywords: [
      {
        pattern: "[Category] upskilling",
        example: "cybersecurity upskilling",
        placement: "Hero slide descriptions (especially vertical-specific slides), About goal statement — describes deepening existing employees' skills",
        frequency: "2–3 natural",
        freqType: "natural",
        checklistRefs: ["P1"],
      },
      {
        pattern: "[Category] reskilling",
        example: "cybersecurity reskilling",
        placement: "Hero descriptions, About section — describes lateral movers transitioning into security roles",
        frequency: "1–2 natural",
        freqType: "natural",
        checklistRefs: ["P1"],
      },
      {
        pattern: "[Category] workforce development",
        example: "cybersecurity workforce development",
        placement: "CustomersPartners About section — framing Edstellar as a workforce development partner, not a vendor",
        frequency: "1–2 natural",
        freqType: "natural",
        checklistRefs: ["P1"],
      },
      {
        pattern: "[Category] employee training",
        example: "cybersecurity employee training",
        placement: "About section, FAQ answer contrasting group employee training vs individual licenses",
        frequency: "1–2 natural",
        freqType: "natural",
        checklistRefs: ["P1", "S9"],
      },
      {
        pattern: "[Category] skilling",
        example: "cybersecurity skilling",
        placement: "Hero descriptions and About section alongside upskilling and reskilling — covers new-hire capability building",
        frequency: "1–2 natural",
        freqType: "natural",
        checklistRefs: ["P1"],
      },
    ],
    violations: [
      {
        dont: "Using 'upskilling', 'reskilling', and 'skilling' in the same sentence or adjacent sentences",
        because: "They are genuinely distinct concepts (depth, role-change, new-hire). Placing all three together reads as keyword clustering — Checklist R2 violation. Use each in a distinct contextual sentence.",
      },
      {
        dont: "Using 'workforce development' in H2 or H3 headings outside the About section",
        because: "Heading-level keyword saturation is a search-engine-first signal (Checklist R2). 'Workforce development' belongs in body copy where the strategic framing reads naturally.",
      },
    ],
  },
  {
    id: "programs",
    letter: "G",
    name: "Program Discovery",
    intent: "Buyers searching for a specific certification, domain, or compliance skill — ready to browse programs",
    accentColor: "#DC2626",
    principle: "Each program card title is an individual keyword. Naming convention must be consistent (ends in 'Training', never 'Course') and map to real buyer search terms.",
    keywords: [
      {
        pattern: "[Certification] Training",
        example: "CISSP Training, CEH v13 Training, OSCP Training, CISM Training",
        placement: "Individual program card titles — every program name ends in 'Training'. Never 'Course', 'Bootcamp', or 'Certification' as the noun",
        frequency: "1 per card",
        freqType: "natural",
        checklistRefs: ["S4", "O3"],
      },
      {
        pattern: "[Category] certification training",
        example: "cybersecurity certification training",
        placement: "FAQ — one answer covering which certifications this category training prepares teams for",
        frequency: "1 natural",
        freqType: "natural",
        checklistRefs: ["O3"],
      },
      {
        pattern: "[Category] domain training",
        example: "network security training, cloud security training, GRC training, AppSec training",
        placement: "Domain sub-section headings within Programs tab, program card tag/category labels",
        frequency: "1 per domain",
        freqType: "natural",
        checklistRefs: ["O2"],
      },
      {
        pattern: "[Compliance framework] training",
        example: "PCI-DSS training, HIPAA compliance training, ISO 27001 training, SEBI compliance training",
        placement: "Hero industry vertical slides (compliance-specific), FAQ answers, program descriptions for compliance-mapped programs",
        frequency: "1 per framework mentioned",
        freqType: "natural",
        checklistRefs: ["O2", "S6"],
      },
    ],
    violations: [
      {
        dont: "Using 'Course', 'Bootcamp', 'Workshop', or 'Certification' as program title nouns",
        because: "Checklist S4 and Guardrail G2: 'Course' signals retail consumer context. Enterprise L&D buyers use 'Training'. The wrong noun damages E-E-A-T Trust with the intended audience.",
      },
      {
        dont: "Inventing, guessing, or using outdated certification names",
        because: "Checklist O3 and E1: program names must be real, verified, and current. An invented certification name is an easily-verifiable factual error — the highest-risk E-E-A-T failure on a B2B page.",
      },
      {
        dont: "Listing programs without domain grouping",
        because: "Checklist P3: after reading, a visitor should be able to make an informed decision. An ungrouped 30+ item catalog fails this — buyers cannot extract relevance from an unsorted list.",
      },
    ],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function KeywordsTab() {
  const [expanded, setExpanded] = useState<Set<string>>(
    new Set(CLUSTERS.map((c) => c.id))
  );

  const toggle = (id: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 space-y-6">

      {/* ── Philosophy header ── */}
      <div
        className="rounded-2xl p-7"
        style={{ backgroundColor: NAVY }}
      >
        <p
          className="mb-2 text-[11px] uppercase tracking-[0.2em]"
          style={{ color: LIME, fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
        >
          Keyword Strategy
        </p>
        <h2
          className="mb-3 text-[26px] leading-tight text-white"
          style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
        >
          Placement Pins, Not Frequency Targets
        </h2>
        <p
          className="max-w-3xl text-[15px] leading-[1.65] text-white/80"
          style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
        >
          Every keyword below has one assigned structural location. The goal is natural, contextually correct placement — not reaching a count. Frequency targets produce algorithm-first content that fails the Google Helpful Content test (see Tab 1, item R2). The only exceptions are Clusters C and D, where minimum frequency reflects genuine service delivery reality — not keyword strategy.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {[
            { label: "Pinned — exactly 1 use in the specified location", color: "#FDE68A", type: "pinned" as FreqType },
            { label: "Minimum — frequency reflects service reality", color: "#A7F3D0", type: "min" as FreqType },
            { label: "Natural — wherever context fits, within stated range", color: "#BFDBFE", type: "natural" as FreqType },
          ].map((l) => (
            <span
              key={l.type}
              className="flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px]"
              style={{
                backgroundColor: l.color + "25",
                color: l.color,
                border: `1px solid ${l.color}50`,
                fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif",
              }}
            >
              <span className="h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: l.color }} />
              {l.label}
            </span>
          ))}
        </div>
      </div>

      {/* ── Cluster cards ── */}
      {CLUSTERS.map((cluster) => {
        const isOpen = expanded.has(cluster.id);
        return (
          <section
            key={cluster.id}
            className="rounded-2xl border overflow-hidden"
            style={{ borderColor: BORDER, borderLeft: `4px solid ${cluster.accentColor}` }}
          >
            {/* Cluster header (always visible, clickable) */}
            <button
              type="button"
              className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
              style={{ backgroundColor: cluster.accentColor + "08" }}
              onClick={() => toggle(cluster.id)}
            >
              <div className="flex items-start gap-4">
                <span
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[14px] text-white"
                  style={{ backgroundColor: cluster.accentColor, fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif" }}
                >
                  {cluster.letter}
                </span>
                <div>
                  <p
                    className="text-[18px] leading-tight"
                    style={{ color: NAVY, fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                  >
                    {cluster.name}
                  </p>
                  <p
                    className="mt-1 text-[13px] leading-[1.5]"
                    style={{ color: GRAY, fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                  >
                    {cluster.intent}
                  </p>
                </div>
              </div>
              <span
                className="mt-1 shrink-0 text-[18px] transition-transform"
                style={{ color: cluster.accentColor, transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
              >
                ›
              </span>
            </button>

            {isOpen && (
              <div style={{ backgroundColor: "#fff" }}>
                {/* Principle */}
                <div
                  className="px-6 py-3 border-b border-t text-[13px] leading-[1.55] italic"
                  style={{
                    borderColor: cluster.accentColor + "30",
                    color: cluster.accentColor,
                    backgroundColor: cluster.accentColor + "05",
                    fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif",
                    borderLeft: `3px solid ${cluster.accentColor}50`,
                    marginLeft: "0",
                    paddingLeft: "24px",
                  }}
                >
                  {cluster.principle}
                </div>

                {/* Keywords table */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left" style={{ minWidth: "640px" }}>
                    <thead>
                      <tr style={{ backgroundColor: "#F9FAFB", borderBottom: `1px solid ${BORDER}` }}>
                        {["Keyword Pattern", "Cybersecurity Page Example", "Placement", "Uses", "Checklist"].map((h) => (
                          <th
                            key={h}
                            className="px-5 py-3 text-[10px] uppercase tracking-[0.14em]"
                            style={{ color: GRAY, fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {cluster.keywords.map((kw, idx) => (
                        <tr
                          key={idx}
                          className="border-b"
                          style={{ borderColor: BORDER, backgroundColor: idx % 2 === 0 ? "#fff" : "#FAFAFA" }}
                        >
                          {/* Pattern */}
                          <td className="px-5 py-4 text-[13px] align-top" style={{ color: NAVY, fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}>
                            <PatternText text={kw.pattern} />
                          </td>
                          {/* Example */}
                          <td className="px-5 py-4 align-top">
                            <span
                              className="text-[12px] leading-[1.5]"
                              style={{ color: "#059669", fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                            >
                              {kw.example}
                            </span>
                          </td>
                          {/* Placement */}
                          <td className="px-5 py-4 text-[12px] leading-[1.55] align-top max-w-xs" style={{ color: "#374151", fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}>
                            {kw.placement}
                          </td>
                          {/* Uses */}
                          <td className="px-5 py-4 align-top">
                            <FreqBadge label={kw.frequency} type={kw.freqType} />
                          </td>
                          {/* Checklist refs */}
                          <td className="px-5 py-4 align-top">
                            <ChecklistRef ids={kw.checklistRefs} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Violations */}
                <div
                  className="border-t px-6 py-5"
                  style={{ borderColor: BORDER, backgroundColor: "#FFF9F9" }}
                >
                  <p
                    className="mb-3 text-[10px] uppercase tracking-[0.16em]"
                    style={{ color: "#B91C1C", fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                  >
                    Violations to avoid
                  </p>
                  <ul className="space-y-3">
                    {cluster.violations.map((v, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded text-[11px] text-white"
                          style={{ backgroundColor: "#DC2626", fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif" }}
                        >
                          ✕
                        </span>
                        <div>
                          <p
                            className="text-[13px] leading-tight"
                            style={{ color: "#7F1D1D", fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                          >
                            {v.dont}
                          </p>
                          <p
                            className="mt-1 text-[12px] leading-[1.5]"
                            style={{ color: GRAY, fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                          >
                            {v.because}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </section>
        );
      })}

    </div>
  );
}
