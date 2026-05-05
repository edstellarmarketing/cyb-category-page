"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

const RED = "#EF6B51";
const RED_FADED = "#B47D6F";
const RED_BG = "#FFF1ED";
const RED_PANEL = "#FFF7F5";
const RED_BORDER = "#FCD2C5";
const LIME = "#C5E826";
const LIME_BG = "#F4FAE0";
const LIME_PANEL = "#F7FBE9";
const LIME_BORDER = "#E0EE9C";
const NAVY = "#1B1D52";
const BORDER = "#E3E6F0";
const BODY = "#374151";
const MUTED = "#6B7280";
const TITLE_MUTED = "#62657F";

type PathNode = {
  title: string;
  caption: string;
  hoverLabel: string;
  hoverBody: string;
};

const CURRENT_NODES: PathNode[] = [
  {
    title: "Skill gaps",
    caption: "Inconsistent fundamentals",
    hoverLabel: "What is broken",
    hoverBody:
      "Frontline staff carry uneven product, service, and risk fundamentals between regions.",
  },
  {
    title: "Low productivity",
    caption: "Time-to-competency drag",
    hoverLabel: "What is broken",
    hoverBody:
      "New hires take 12+ weeks to ramp and handle-time discipline never lands.",
  },
  {
    title: "Customer inconsistency",
    caption: "Brand dilution",
    hoverLabel: "What is broken",
    hoverBody:
      "NPS and CSAT vary materially between branches, channels, and contact centres.",
  },
  {
    title: "Training disconnected",
    caption: "Unclear ROI on learning",
    hoverLabel: "What is broken",
    hoverBody:
      "Training completions report, but the metrics the board reads do not move.",
  },
];

const OPTIMIZED_NODES: PathNode[] = [
  {
    title: "Assess Skills",
    caption: "Diagnose current state",
    hoverLabel: "What Edstellar does",
    hoverBody:
      "Structured assessments and stakeholder interviews map gaps across roles, branches, and lines of business.",
  },
  {
    title: "Map Capabilities",
    caption: "Future-state framework",
    hoverLabel: "What Edstellar does",
    hoverBody:
      "Competency framework calibrated to BFSI roles, regulatory regime, and the business KPIs your board reads.",
  },
  {
    title: "Design Journeys",
    caption: "Role-based design",
    hoverLabel: "What Edstellar does",
    hoverBody:
      "Instructor-led journeys blending live sessions, labs, and reinforcement, customised to your stack and SOPs.",
  },
  {
    title: "Deliver at Scale",
    caption: "10 languages, 100+ countries",
    hoverLabel: "What Edstellar does",
    hoverBody:
      "Cohort-based instructor-led delivery across branches and regions, coordinated by a single Edstellar program manager.",
  },
  {
    title: "Track Impact",
    caption: "Board-ready KPIs",
    hoverLabel: "What Edstellar does",
    hoverBody:
      "Before/after metrics on NPS, onboarding time, productivity, audit-readiness, and retention.",
  },
];

const CURRENT_IMPACTS = [
  "Lower frontline productivity",
  "Inconsistent customer experience",
  "Fragmented learning spend",
  "Weaker risk and audit posture",
  "Slower onboarding and time-to-productivity",
];

const OPTIMIZED_IMPACTS = [
  "Higher NPS, CSAT, and retention",
  "Stronger cross-sell and upsell per RM",
  "Branch P&L lifted",
  "Audit-ready, risk-tight",
  "Faster onboarding and time-to-productivity",
  "Stronger talent retention",
];

function CurrentIcon({ idx }: { idx: number }) {
  const p = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (idx) {
    case 0:
      return (
        <svg {...p}>
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
          <circle cx="12" cy="12" r="3" />
          <path d="M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" />
        </svg>
      );
    case 1:
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
          <path d="M3 19l3-3" />
        </svg>
      );
    case 2:
      return (
        <svg {...p}>
          <circle cx="6" cy="8" r="2" />
          <circle cx="14" cy="6" r="1.5" />
          <circle cx="18" cy="13" r="2" />
          <circle cx="9" cy="17" r="1.5" />
          <circle cx="16" cy="19" r="1" />
        </svg>
      );
    case 3:
      return (
        <svg {...p}>
          <path d="M5 12h6" />
          <path d="M13 12h6" />
          <path d="M11 9v6" />
          <path d="M13 9v6" />
        </svg>
      );
    default:
      return null;
  }
}

function OptimizedIcon({ idx }: { idx: number }) {
  const p = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (idx) {
    case 0:
      return (
        <svg {...p}>
          <circle cx="11" cy="11" r="6" />
          <path d="M21 21l-4-4" />
          <path d="M9 11l2 2 3-3" />
        </svg>
      );
    case 1:
      return (
        <svg {...p}>
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="12" cy="18" r="2" />
          <path d="M7.5 7.5L11 16.5" />
          <path d="M16.5 7.5L13 16.5" />
          <path d="M8 6h8" />
        </svg>
      );
    case 2:
      return (
        <svg {...p}>
          <path d="M3 18l4-4 4 4 4-8 6 6" />
          <circle cx="3" cy="18" r="1.5" fill="currentColor" />
          <circle cx="21" cy="16" r="1.5" fill="currentColor" />
        </svg>
      );
    case 3:
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a14 14 0 0 1 0 18" />
          <path d="M12 3a14 14 0 0 0 0 18" />
        </svg>
      );
    case 4:
      return (
        <svg {...p}>
          <path d="M3 17l6-6 4 4 8-8" />
          <path d="M14 7h7v7" />
        </svg>
      );
    default:
      return null;
  }
}

type RowProps = {
  variant: "current" | "optimized";
  nodes: PathNode[];
  impacts: string[];
  panelTitle: string;
  panelEyebrow: string;
};

function PathRow({
  variant,
  nodes,
  impacts,
  panelTitle,
  panelEyebrow,
}: RowProps) {
  const isCurrent = variant === "current";
  const accent = isCurrent ? RED_FADED : NAVY;
  const headerDot = isCurrent ? RED : NAVY;
  const titleColor = isCurrent ? TITLE_MUTED : NAVY;
  const captionColor = isCurrent ? "#9CA3AF" : MUTED;
  const ringBg = isCurrent ? "#FBEFEC" : LIME_BG;
  const sectionBg = isCurrent ? RED_PANEL : LIME_PANEL;
  const sectionBorder = isCurrent ? RED_BORDER : LIME_BORDER;
  const arrowMarkerId = isCurrent ? "bfsi-arrow-red" : "bfsi-arrow-navy";
  const dashArray = isCurrent ? "5 12" : "2 5";
  const lineOpacity = isCurrent ? 0.4 : 0.85;
  const iconOpacity = isCurrent ? 0.75 : 1;
  const Icon = isCurrent ? CurrentIcon : OptimizedIcon;

  return (
    <div
      className={`rounded-2xl border p-6 sm:p-8 ${
        isCurrent ? "bfsi-card-current" : "bfsi-card-optimized"
      }`}
      style={{
        borderColor: sectionBorder,
        backgroundColor: sectionBg,
      }}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span
          aria-hidden="true"
          className="inline-block h-2.5 w-2.5 rounded-full"
          style={{ backgroundColor: headerDot }}
        />
        <p
          className="text-[12px] uppercase tracking-[0.14em] sm:text-[13px]"
          style={{
            color: NAVY,
            fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif",
            fontWeight: 700,
          }}
        >
          {variant === "current"
            ? "Current Path · Fragmented BFSI workforce"
            : "Edstellar Path · Structured BFSI capability"}
        </p>
        {variant === "optimized" && (
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.12em]"
            style={{
              backgroundColor: NAVY,
              color: LIME,
              fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif",
              fontWeight: 700,
            }}
          >
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: LIME }}
            />
            by Edstellar
          </span>
        )}
      </div>

      <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-6">
        <div className="flex flex-1 flex-col justify-center">
          <div className="relative w-full">
          {/* Horizontal track on md+ */}
          {variant === "current" ? (
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute left-0 right-0 top-[24px] hidden h-[2px] w-full md:block"
              viewBox="0 0 1000 12"
              preserveAspectRatio="none"
            >
              <defs>
                <marker
                  id={arrowMarkerId}
                  markerWidth="8"
                  markerHeight="8"
                  refX="6"
                  refY="4"
                  orient="auto"
                  markerUnits="userSpaceOnUse"
                >
                  <path d="M0 0 L8 4 L0 8 z" fill={accent} />
                </marker>
              </defs>
              <line
                className="bfsi-line-current"
                x1="0"
                y1="6"
                x2="990"
                y2="6"
                stroke={accent}
                strokeOpacity={lineOpacity}
                strokeDasharray={dashArray}
                strokeWidth="2"
                markerEnd={`url(#${arrowMarkerId})`}
              />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute left-0 right-0 top-0 hidden w-full md:block"
              style={{ height: "60px" }}
              viewBox="0 0 1000 60"
              preserveAspectRatio="none"
            >
              <defs>
                <marker
                  id={arrowMarkerId}
                  markerWidth="8"
                  markerHeight="8"
                  refX="6"
                  refY="4"
                  orient="auto"
                  markerUnits="userSpaceOnUse"
                >
                  <path d="M0 0 L8 4 L0 8 z" fill={accent} />
                </marker>
                <linearGradient id="bfsi-arc-stroke" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor={LIME} />
                  <stop offset="100%" stopColor={NAVY} />
                </linearGradient>
              </defs>
              <path
                className="bfsi-line-optimized"
                d="M0 50 Q 250 -10 500 30 T 990 10"
                fill="none"
                stroke="url(#bfsi-arc-stroke)"
                strokeOpacity={lineOpacity}
                strokeDasharray={dashArray}
                strokeWidth="2.5"
                markerEnd={`url(#${arrowMarkerId})`}
              />
            </svg>
          )}

          {/* Vertical track on mobile */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-2 left-[24px] top-2 w-[2px] md:hidden"
            style={{
              backgroundImage: `repeating-linear-gradient(to bottom, ${accent} 0 ${variant === "current" ? "4px" : "3px"}, transparent ${variant === "current" ? "4px" : "3px"} ${variant === "current" ? "10px" : "8px"})`,
              opacity: 0.6,
            }}
          />

          <ol
            className={`relative grid grid-cols-1 gap-6 md:gap-6 lg:gap-10 ${
              variant === "current" ? "md:grid-cols-4" : "md:grid-cols-5"
            }`}
          >
            {nodes.map((n, i) => (
              <li
                key={n.title}
                className="group relative z-10 flex items-start gap-4 md:flex-col md:items-center md:gap-0 md:text-center"
              >
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 bg-white transition-transform group-hover:-translate-y-0.5 group-focus-within:-translate-y-0.5"
                  style={{
                    borderColor: accent,
                    color: accent,
                    backgroundColor: ringBg,
                    opacity: iconOpacity,
                  }}
                >
                  <Icon idx={i} />
                </span>
                <button
                  type="button"
                  className="cursor-help bg-transparent p-0 text-left md:mt-3 md:text-center"
                  aria-label={`${n.title} — ${n.hoverLabel}: ${n.hoverBody}`}
                >
                  <p
                    className="text-[13.5px] leading-[1.25] sm:text-[14px]"
                    style={{
                      color: titleColor,
                      fontFamily:
                        "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {n.title}
                  </p>
                  <p
                    className="mt-1 text-[11.5px] leading-[1.35] sm:text-[12px]"
                    style={{
                      color: captionColor,
                      fontFamily:
                        "'Riona Sans Light', Helvetica, Arial, sans-serif",
                    }}
                  >
                    {n.caption}
                  </p>
                </button>

                {/* Hover/focus tooltip */}
                <div
                  role="tooltip"
                  className="pointer-events-none absolute left-1/2 top-full z-20 hidden w-[220px] -translate-x-1/2 rounded-xl px-4 py-3 text-left shadow-lg group-hover:block group-focus-within:block sm:w-[240px]"
                  style={{
                    marginTop: "12px",
                    backgroundColor: NAVY,
                    color: "#FFFFFF",
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45"
                    style={{ backgroundColor: NAVY }}
                  />
                  <p
                    className="text-[10.5px] uppercase tracking-[0.16em]"
                    style={{
                      color: variant === "current" ? RED : LIME,
                      fontFamily:
                        "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {n.hoverLabel}
                  </p>
                  <p className="mt-1.5 text-[12.5px] leading-[1.5]">
                    {n.hoverBody}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          </div>
        </div>

        <aside
          className="rounded-2xl border bg-white p-5 lg:w-[260px] lg:shrink-0"
          style={{ borderColor: accent }}
        >
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 rounded-full"
              style={{ backgroundColor: accent }}
            />
            <p
              className="text-[11px] uppercase tracking-[0.14em]"
              style={{
                color: NAVY,
                fontFamily:
                  "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                fontWeight: 700,
              }}
            >
              {panelEyebrow}
            </p>
          </div>
          <h4
            className="mt-2 text-[18px] sm:text-[20px]"
            style={{
              color: NAVY,
              fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif",
            }}
          >
            {panelTitle}
          </h4>
          <ul className="mt-4 space-y-2">
            {impacts.map((b) => (
              <li
                key={b}
                className="flex items-start gap-2 text-[13px] leading-[1.45] sm:text-[13.5px]"
                style={{
                  color: BODY,
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: accent }}
                />
                {b}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}

const PATH_HOVER_CSS = `
  .bfsi-line-current,
  .bfsi-line-optimized {
    transition: stroke-opacity 200ms ease, stroke-width 200ms ease;
  }
  @keyframes bfsi-flow-smooth {
    from { stroke-dashoffset: 0; }
    to { stroke-dashoffset: -28; }
  }
  @keyframes bfsi-flow-erratic {
    0%   { stroke-dashoffset: 0; }
    8%   { stroke-dashoffset: -12; }
    16%  { stroke-dashoffset: -4; }
    28%  { stroke-dashoffset: -28; }
    36%  { stroke-dashoffset: -18; }
    48%  { stroke-dashoffset: -44; }
    56%  { stroke-dashoffset: -34; }
    70%  { stroke-dashoffset: -62; }
    78%  { stroke-dashoffset: -52; }
    90%  { stroke-dashoffset: -78; }
    100% { stroke-dashoffset: -68; }
  }
  .bfsi-card-current:hover .bfsi-line-current,
  .bfsi-card-current:focus-within .bfsi-line-current {
    animation: bfsi-flow-erratic 1.5s steps(8, end) infinite;
    stroke-opacity: 0.85;
    stroke-width: 2.5;
  }
  .bfsi-card-optimized:hover .bfsi-line-optimized,
  .bfsi-card-optimized:focus-within .bfsi-line-optimized {
    animation: bfsi-flow-smooth 1.8s linear infinite;
  }
  @media (prefers-reduced-motion: reduce) {
    .bfsi-card-current:hover .bfsi-line-current,
    .bfsi-card-current:focus-within .bfsi-line-current,
    .bfsi-card-optimized:hover .bfsi-line-optimized,
    .bfsi-card-optimized:focus-within .bfsi-line-optimized {
      animation: none;
      stroke-opacity: inherit;
      stroke-width: inherit;
    }
  }
`;

export function BankingFinanceCapabilityPath() {
  return (
    <section className="bg-white py-16 md:py-20">
      <style dangerouslySetInnerHTML={{ __html: PATH_HOVER_CSS }} />
      <div className="mtk-page-center">
        <div className="max-w-3xl">
          <h2
            className="text-[32px] leading-[1.08] sm:text-[40px] lg:text-[46px]"
            style={{
              color: NAVY,
              fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif",
            }}
          >
            From Fragmented Skills to High-Performing BFSI Workforces.
          </h2>
          <p
            className="mt-5 text-[16px] leading-[1.6] sm:text-[18px]"
            style={{
              color: BODY,
              fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif",
            }}
          >
            How Edstellar moves a BFSI workforce from disconnected skills to
            structured capability and measurable business outcomes. Hover any
            node to see what changes at that step.
          </p>
        </div>

        <div
          className="mt-8 flex max-w-3xl items-start gap-3 rounded-2xl border-l-4 px-5 py-4 sm:items-center"
          style={{
            borderColor: LIME,
            backgroundColor: "rgba(27, 29, 82, 0.04)",
          }}
        >
          <span
            aria-hidden="true"
            className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full sm:mt-0"
            style={{ backgroundColor: LIME, color: NAVY }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </span>
          <p
            className="text-[14px] leading-[1.55] sm:text-[15px]"
            style={{
              color: NAVY,
              fontFamily:
                "'Riona Sans Regular', Helvetica, Arial, sans-serif",
            }}
          >
            <strong
              style={{
                fontFamily:
                  "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                fontWeight: 700,
              }}
            >
              Here&apos;s how
            </strong>{" "}
            our capability-driven approach transforms BFSI workforce
            performance.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          <PathRow
            variant="current"
            nodes={CURRENT_NODES}
            impacts={CURRENT_IMPACTS}
            panelTitle="Business impact"
            panelEyebrow="Business impact"
          />

          <div className="my-2 flex items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="hidden h-px max-w-[140px] flex-1 md:block"
              style={{
                background:
                  "linear-gradient(to right, transparent, #1B1D52)",
              }}
            />
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] uppercase tracking-[0.14em]"
              style={{
                backgroundColor: NAVY,
                color: "#FFFFFF",
                fontFamily:
                  "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                fontWeight: 700,
              }}
            >
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: LIME }}
              />
              Transformation with Edstellar
              <span aria-hidden="true">↓</span>
            </span>
            <span
              aria-hidden="true"
              className="hidden h-px max-w-[140px] flex-1 md:block"
              style={{
                background:
                  "linear-gradient(to left, transparent, #1B1D52)",
              }}
            />
          </div>

          <PathRow
            variant="optimized"
            nodes={OPTIMIZED_NODES}
            impacts={OPTIMIZED_IMPACTS}
            panelTitle="Business outcome"
            panelEyebrow="Business outcome"
          />
        </div>

        <div
          className="mt-10 flex flex-col items-center gap-4 rounded-2xl border p-6 text-center sm:p-7 md:flex-row md:justify-between md:text-left"
          style={{
            borderColor: BORDER,
            backgroundColor: LIME_PANEL,
          }}
        >
          <div className="max-w-2xl">
            <p
              className="text-[11px] uppercase tracking-[0.16em]"
              style={{
                color: NAVY,
                fontFamily:
                  "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                fontWeight: 700,
              }}
            >
              Start with a workforce assessment
            </p>
            <p
              className="mt-1 text-[15px] leading-[1.55] sm:text-[16px]"
              style={{
                color: BODY,
                fontFamily:
                  "'Riona Sans Light', Helvetica, Arial, sans-serif",
              }}
            >
              Edstellar advisors run a 30-minute scoping call and return a
              custom workforce-capability plan within five business days.
            </p>
          </div>
          <Link
            href="#contact"
            className="group/cta inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3 text-[12.5px] uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90 sm:text-[13px]"
            style={{
              backgroundColor: NAVY,
              fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif",
              fontWeight: 600,
            }}
          >
            Get a Workforce Assessment
            <ArrowRightIcon
              width={14}
              height={14}
              className="transition-transform group-hover/cta:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
