type Step = {
  title: string;
  detail: string;
};

const REACTIVE: Step[] = [
  { title: "Alert overload", detail: "Thousands of alerts a day" },
  { title: "Manual triage", detail: "Time-consuming investigations" },
  { title: "Tool silos", detail: "Disconnected SIEM and EDR" },
  { title: "False positives", detail: "High noise, low signal" },
  { title: "Delayed response", detail: "Containment slips by hours" },
  { title: "Burnout, missed threats", detail: "Analysts churn, risk grows" },
];

const OPTIMIZED: Step[] = [
  { title: "Foundations", detail: "Networking, OS and cyber basics" },
  { title: "SIEM and monitoring", detail: "Splunk, ELK, real telemetry" },
  { title: "Threat detection", detail: "MITRE ATT&CK alignment" },
  { title: "Incident response", detail: "NIST 800-61, hands-on drills" },
  { title: "Threat intelligence", detail: "IOC pivoting, TI feeds" },
  { title: "Proactive hunting", detail: "Hypothesis-driven hunts" },
];

const REACTIVE_OUTCOMES = [
  "Higher risk exposure",
  "Slower threat response",
  "Operational inefficiencies",
  "Increased costs and downtime",
  "Talent fatigue and attrition",
];

const PROACTIVE_OUTCOMES = [
  "Reduced risk exposure",
  "Faster detection and response",
  "Operational excellence",
  "Stronger security posture",
  "Lower costs and downtime",
  "Engaged and skilled teams",
];

const HELPS = [
  {
    title: "Skill-building paths aligned to roles",
    body: "L1 triage, L2 detection, L3 hunting and lead-engineer tracks ship in a single coordinated cohort.",
  },
  {
    title: "Live labs and real-world scenarios",
    body: "Hands-on SIEM, SOAR and MITRE ATT&CK exercises in a sandboxed environment that mirrors enterprise stacks.",
  },
  {
    title: "Expert instructors and mentorship",
    body: "Vendor-certified mentors and 1:1 coaching for senior analysts, with practitioners who have shipped in production.",
  },
  {
    title: "Measurable progress and skill validation",
    body: "Pre and post assessments, certification milestones, and leadership-ready scorecards on every cohort.",
  },
];

type Advantage = {
  title: string;
  body: string;
};

const ADVANTAGES: Advantage[] = [
  {
    title: "Impact-driven learning",
    body: "Every Edstellar cohort is designed against measurable SOC KPIs, not seat-time.",
  },
  {
    title: "Industry-relevant curriculum",
    body: "Mapped to the controls, frameworks and attacker TTPs your sector sees today.",
  },
  {
    title: "Role-based learning paths",
    body: "L1 triage, L2 detection, L3 hunting and lead-engineer tracks ship together.",
  },
  {
    title: "Better security outcomes",
    body: "Lower dwell time, faster containment, fewer missed threats, all evidenced.",
  },
  {
    title: "Empowered, confident analysts",
    body: "Mentor-led delivery and certifications that retain talent and grow careers.",
  },
  {
    title: "Future-ready SOC teams",
    body: "Continuous purple-team drills and threat-intel updates keep teams sharp.",
  },
];

const RED = "#EF6B51";
const RED_BG = "#FFF1ED";
const RED_PANEL = "#FFF7F5";
const LIME = "#C5E826";
const LIME_BG = "#F4FAE0";
const LIME_PANEL = "#F7FBE9";
const NAVY = "#1B1D52";
const NAVY_BG_5 = "rgba(27, 29, 82, 0.05)";
const BORDER = "#E3E6F0";
const BODY = "#374151";
const MUTED = "#6B7280";

function ReactiveIcon({ idx }: { idx: number }) {
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
          <path d="M6 9a6 6 0 0 1 12 0v5l2 3H4l2-3V9z" />
          <path d="M10 20a2 2 0 0 0 4 0" />
          <circle cx="18" cy="6" r="2" fill="currentColor" />
        </svg>
      );
    case 1:
      return (
        <svg {...p}>
          <circle cx="11" cy="11" r="6" />
          <path d="M21 21l-4-4" />
          <path d="M9 11h4" />
        </svg>
      );
    case 2:
      return (
        <svg {...p}>
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
        </svg>
      );
    case 3:
      return (
        <svg {...p}>
          <path d="M12 3l10 18H2L12 3z" />
          <path d="M12 10v4" />
          <circle cx="12" cy="17" r="0.6" fill="currentColor" />
        </svg>
      );
    case 4:
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case 5:
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 15c1-1.5 2.5-2 4-2s3 .5 4 2" />
          <circle cx="9" cy="10" r="0.7" fill="currentColor" />
          <circle cx="15" cy="10" r="0.7" fill="currentColor" />
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
          <rect x="3" y="14" width="6" height="7" />
          <rect x="9" y="9" width="6" height="12" />
          <rect x="15" y="4" width="6" height="17" />
        </svg>
      );
    case 1:
      return (
        <svg {...p}>
          <path d="M3 3v18h18" />
          <path d="M7 15l4-4 4 3 5-6" />
        </svg>
      );
    case 2:
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        </svg>
      );
    case 3:
      return (
        <svg {...p}>
          <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
        </svg>
      );
    case 4:
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a14 14 0 0 1 0 18" />
          <path d="M12 3a14 14 0 0 0 0 18" />
        </svg>
      );
    case 5:
      return (
        <svg {...p}>
          <path d="M3 12h5l3 7 4-14 2 7h4" />
        </svg>
      );
    default:
      return null;
  }
}

type PathRowProps = {
  variant: "reactive" | "optimized";
  steps: Step[];
  Icon: (props: { idx: number }) => React.ReactElement | null;
  outcomeTitle: string;
  outcomeBullets: string[];
  outcomeAccent: string;
  outcomePanelBg: string;
};

function PathRow({
  variant,
  steps,
  Icon,
  outcomeTitle,
  outcomeBullets,
  outcomeAccent,
  outcomePanelBg,
}: PathRowProps) {
  const accent = variant === "reactive" ? RED : NAVY;
  const ringBg = variant === "reactive" ? RED_BG : LIME_BG;
  const sectionBg = variant === "reactive" ? RED_PANEL : LIME_PANEL;
  const arrowMarkerId =
    variant === "reactive" ? "tp-arrow-red" : "tp-arrow-navy";

  return (
    <div
      className="rounded-2xl border p-6 sm:p-8"
      style={{ borderColor: BORDER, backgroundColor: sectionBg }}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span
          aria-hidden="true"
          className="inline-block h-2.5 w-2.5 rounded-full"
          style={{ backgroundColor: accent }}
        />
        <p
          className="text-[12px] uppercase tracking-[0.14em] sm:text-[13px]"
          style={{
            color: NAVY,
            fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif",
            fontWeight: 700,
          }}
        >
          {variant === "reactive"
            ? "Current SOC analyst journey in most organizations · reactive and fragmented"
            : "Optimized SOC learning path for enterprise security teams"}
        </p>
        {variant === "optimized" && (
          <>
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.12em]"
              style={{
                backgroundColor: NAVY,
                color: LIME,
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
              by Edstellar
            </span>
            <span
              className="text-[12px] uppercase tracking-[0.14em] sm:text-[13px]"
              style={{
                color: MUTED,
                fontFamily:
                  "'Riona Sans Light', Helvetica, Arial, sans-serif",
              }}
            >
              · structured · proactive · business-aligned
            </span>
          </>
        )}
      </div>

      <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-6">
        <div className="relative flex-1">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-[19px] hidden h-[2px] w-full md:block"
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
              x1="0"
              y1="6"
              x2="990"
              y2="6"
              stroke={accent}
              strokeOpacity="0.6"
              strokeDasharray="6 6"
              strokeWidth="2"
              markerEnd={`url(#${arrowMarkerId})`}
            />
          </svg>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-2 left-[19px] top-2 w-[2px] md:hidden"
            style={{
              backgroundImage: `repeating-linear-gradient(to bottom, ${accent} 0 6px, transparent 6px 12px)`,
              opacity: 0.6,
            }}
          />

          <ol className="grid grid-cols-1 gap-5 md:grid-cols-6 md:gap-2 lg:gap-3">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="relative z-10 flex items-start gap-4 md:flex-col md:items-center md:gap-0 md:text-center"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 bg-white"
                  style={{
                    borderColor: accent,
                    color: accent,
                    backgroundColor: ringBg,
                  }}
                >
                  <Icon idx={i} />
                </span>
                <div className="md:mt-3">
                  <p
                    className="text-[13px] leading-[1.25] sm:text-[13.5px]"
                    style={{
                      color: NAVY,
                      fontFamily:
                        "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {s.title}
                  </p>
                  <p
                    className="mt-1 text-[11.5px] leading-[1.35] sm:text-[12px]"
                    style={{
                      color: MUTED,
                      fontFamily:
                        "'Riona Sans Light', Helvetica, Arial, sans-serif",
                    }}
                  >
                    {s.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <aside
          className="rounded-2xl border p-5 lg:w-[260px] lg:shrink-0"
          style={{
            borderColor: outcomeAccent,
            backgroundColor: outcomePanelBg,
          }}
        >
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 rounded-full"
              style={{ backgroundColor: outcomeAccent }}
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
              {variant === "reactive" ? "Business impact" : "Business outcome"}
            </p>
          </div>
          <h4
            className="mt-2 text-[18px] sm:text-[20px]"
            style={{
              color: NAVY,
              fontFamily:
                "'Riona Sans Regular', Helvetica, Arial, sans-serif",
            }}
          >
            {outcomeTitle}
          </h4>
          <ul className="mt-4 space-y-2">
            {outcomeBullets.map((b) => (
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
                  style={{ backgroundColor: outcomeAccent }}
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

export function EdstellarTwoPaths() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mtk-page-center">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="text-[32px] leading-[1.08] sm:text-[40px] lg:text-[46px]"
            style={{
              color: NAVY,
              fontFamily:
                "'Riona Sans Light', Helvetica, Arial, sans-serif",
            }}
          >
            Two paths. One mission: stronger security.
          </h2>
          <p
            className="mt-5 text-[16px] leading-[1.6] sm:text-[18px]"
            style={{
              color: BODY,
              fontFamily:
                "'Riona Sans Light', Helvetica, Arial, sans-serif",
            }}
          >
            See how Edstellar&apos;s structured SOC analyst journey replaces
            the reactive firefighting most security teams live with today,
            and turns it into a proactive, business-aligned operating model.
          </p>
        </div>

        <div className="mt-12">
          <PathRow
            variant="reactive"
            steps={REACTIVE}
            Icon={ReactiveIcon}
            outcomeTitle="Reactive security"
            outcomeBullets={REACTIVE_OUTCOMES}
            outcomeAccent={RED}
            outcomePanelBg="#FFFFFF"
          />

          <div className="my-6 flex items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="hidden h-px flex-1 max-w-[140px] md:block"
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
              className="hidden h-px flex-1 max-w-[140px] md:block"
              style={{
                background:
                  "linear-gradient(to left, transparent, #1B1D52)",
              }}
            />
          </div>

          <PathRow
            variant="optimized"
            steps={OPTIMIZED}
            Icon={OptimizedIcon}
            outcomeTitle="Proactive security"
            outcomeBullets={PROACTIVE_OUTCOMES}
            outcomeAccent={NAVY}
            outcomePanelBg="#FFFFFF"
          />
        </div>

        <div
          className="mt-12 rounded-2xl border p-6 sm:p-8"
          style={{
            borderColor: BORDER,
            backgroundColor: NAVY_BG_5,
          }}
        >
          <h3
            className="text-[22px] sm:text-[26px] lg:text-[30px]"
            style={{
              color: NAVY,
              fontFamily:
                "'Riona Sans Regular', Helvetica, Arial, sans-serif",
            }}
          >
            What turns a SOC analyst learning path into measurable security capability across your organization
          </h3>
          <p
            className="mt-3 max-w-3xl text-[14px] leading-[1.55] sm:text-[15px]"
            style={{
              color: BODY,
              fontFamily:
                "'Riona Sans Light', Helvetica, Arial, sans-serif",
            }}
          >
            Edstellar&apos;s four operational pillars that decide whether a
            security training investment actually moves the metrics that
            matter to the board: mean time to detect, mean time to contain,
            and analyst retention.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HELPS.map((h) => (
              <article
                key={h.title}
                className="rounded-2xl border bg-white p-5"
                style={{ borderColor: BORDER }}
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full"
                    style={{ backgroundColor: LIME, color: NAVY }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <h4
                    className="text-[15px] sm:text-[16px]"
                    style={{
                      color: NAVY,
                      fontFamily:
                        "'Riona Sans Regular', Helvetica, Arial, sans-serif",
                    }}
                  >
                    {h.title}
                  </h4>
                </div>
                <p
                  className="mt-3 text-[13px] leading-[1.5] sm:text-[13.5px]"
                  style={{
                    color: BODY,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  {h.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3
              className="max-w-3xl text-[22px] sm:text-[26px] lg:text-[30px]"
              style={{
                color: NAVY,
                fontFamily:
                  "'Riona Sans Regular', Helvetica, Arial, sans-serif",
              }}
            >
              Built for enterprise security teams, accountable to the board
            </h3>
            <span
              className="text-[12px] uppercase tracking-[0.14em]"
              style={{
                color: MUTED,
                fontFamily:
                  "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                fontWeight: 600,
              }}
            >
              Six reasons enterprise security leaders standardise here
            </span>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ADVANTAGES.map((a) => (
              <article
                key={a.title}
                className="rounded-2xl border bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{ borderColor: BORDER }}
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full"
                    style={{ backgroundColor: LIME, color: NAVY }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <h4
                    className="text-[17px] sm:text-[18px]"
                    style={{
                      color: NAVY,
                      fontFamily:
                        "'Riona Sans Regular', Helvetica, Arial, sans-serif",
                    }}
                  >
                    {a.title}
                  </h4>
                </div>
                <p
                  className="mt-3 text-[13.5px] leading-[1.55] sm:text-[14.5px]"
                  style={{
                    color: BODY,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  {a.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
