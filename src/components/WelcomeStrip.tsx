const LANGUAGES = [
  "English",
  "Español",
  "普通话",
  "Deutsch",
  "العربية",
  "Português",
  "हिंदी",
  "Français",
  "日本語",
  "Italiano",
];

type FrameworkCard = {
  num: string;
  title: string;
  bullets: string[];
  question: string;
};

const QUADRANTS: FrameworkCard[] = [
  {
    num: "5",
    title: "Tech-Stack Mastery",
    bullets: ["Cloud security & Zero-Trust", "GenAI security, LLM red-teaming"],
    question: "Keep engineers current on AI, cloud & emerging cyber tech?",
  },
  {
    num: "2",
    title: "Customized Instructor-led Training",
    bullets: ["Role-based paths (SOC, Pentest, GRC)", "Customized training programs per role"],
    question: "Which training programs fit our stack & teams?",
  },
  {
    num: "3",
    title: "Hands-on Labs",
    bullets: ["Cloud sandboxes (AWS, Azure)", "Kubernetes & MITRE ATT&CK"],
    question: "Where can engineers practice real workloads safely?",
  },
  {
    num: "4",
    title: "Assessment & ROI",
    bullets: ["Pre/post skill assessments", "MTTD, MTTR & skill improvement rates"],
    question: "Measure proficiency gains & security ROI?",
  },
];

function CheckBullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: "#C5E826" }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1B1D52" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <span className="text-[14px] leading-[1.5]" style={{ color: "#374151" }}>
        {children}
      </span>
    </li>
  );
}

function QuadrantCard({ card }: { card: FrameworkCard }) {
  return (
    <div
      className="fw-card rounded-lg border bg-white p-3.5 shadow-sm hover:-translate-y-1 hover:shadow-md"
      style={{ borderColor: "#E3E6F0", borderLeft: "5px solid #1B1D52" }}
    >
      <h4
        className="mb-2 text-[13px]"
        style={{ color: "#1B1D52", fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif", fontWeight: 600 }}
      >
        {card.num}. {card.title}
      </h4>
      <ul className="mb-2 space-y-1.5">
        {card.bullets.map((b) => (
          <li key={b} className="flex items-start gap-1.5 text-[12px]" style={{ color: "#374151" }}>
            <svg className="mt-0.5 h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#1B1D52" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 13l4 4L19 7" />
            </svg>
            {b}
          </li>
        ))}
      </ul>
      <div
        className="border-t pt-2 text-[10px] italic leading-snug"
        style={{ borderColor: "#E3E6F0", color: "#6B7280" }}
      >
        &ldquo;{card.question}&rdquo;
      </div>
    </div>
  );
}

const FRAMEWORK_CSS = `
.framework-hub-circle { transition: border-color .35s ease, box-shadow .35s ease; cursor: default; }
.fw-line { color: #C5C9D8; transition: color .35s ease; }
.fw-card { transition: border-color .35s ease, box-shadow .35s ease, transform .25s ease; }
@keyframes fw-travel-dots { from { stroke-dashoffset: 0; } to { stroke-dashoffset: -120; } }

#framework:has(.framework-hub-circle:hover) .framework-hub-circle,
#framework:has(.framework-hub-circle:focus-visible) .framework-hub-circle {
  border-color: #C5E826;
  box-shadow: 0 0 0 4px rgba(197,232,38,0.18), 0 25px 50px -12px rgba(197,232,38,0.30);
}
#framework:has(.framework-hub-circle:hover) .fw-line,
#framework:has(.framework-hub-circle:focus-visible) .fw-line {
  color: #C5E826;
  animation: fw-travel-dots 1.4s linear forwards;
}

#framework:has(.fw-quad-1:hover) .fw-line-1,
#framework:has(.fw-quad-1:focus-within) .fw-line-1,
#framework:has(.fw-quad-2:hover) .fw-line-2,
#framework:has(.fw-quad-2:focus-within) .fw-line-2,
#framework:has(.fw-quad-3:hover) .fw-line-3,
#framework:has(.fw-quad-3:focus-within) .fw-line-3,
#framework:has(.fw-quad-4:hover) .fw-line-4,
#framework:has(.fw-quad-4:focus-within) .fw-line-4 {
  color: #C5E826;
  animation: fw-travel-dots 1.4s linear forwards;
}
#framework:has(.fw-quad-1:hover) .fw-quad-1 .fw-card,
#framework:has(.fw-quad-1:focus-within) .fw-quad-1 .fw-card,
#framework:has(.fw-quad-2:hover) .fw-quad-2 .fw-card,
#framework:has(.fw-quad-2:focus-within) .fw-quad-2 .fw-card,
#framework:has(.fw-quad-3:hover) .fw-quad-3 .fw-card,
#framework:has(.fw-quad-3:focus-within) .fw-quad-3 .fw-card,
#framework:has(.fw-quad-4:hover) .fw-quad-4 .fw-card,
#framework:has(.fw-quad-4:focus-within) .fw-quad-4 .fw-card {
  border-color: #C5E826 !important;
  box-shadow: 0 0 0 4px rgba(197,232,38,0.16), 0 20px 35px -12px rgba(197,232,38,0.25) !important;
}
`;

export function WelcomeStrip() {
  return (
    <section
      className="border-y"
      style={{ backgroundColor: "#F7F8FC", borderColor: "#E3E6F0", color: "#1B1D52" }}
    >
      <style dangerouslySetInnerHTML={{ __html: FRAMEWORK_CSS }} />

      {/* Translucent breadcrumb strip — visually separated from the overview content below */}
      <div
        className="border-b backdrop-blur-sm"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.45)",
          borderColor: "rgba(27, 29, 82, 0.08)",
        }}
      >
        <nav aria-label="Breadcrumb" className="mtk-page-center py-3">
          <ol
            className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] sm:text-[13px]"
            style={{
              color: "#6B7280",
              fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif",
            }}
            itemScope
            itemType="https://schema.org/BreadcrumbList"
          >
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <a
                href="/"
                itemProp="item"
                className="transition-colors hover:text-[#1B1D52]"
              >
                <span itemProp="name">Home</span>
              </a>
              <meta itemProp="position" content="1" />
            </li>
            <li aria-hidden="true" style={{ color: "#9CA3AF" }}>›</li>
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <a
                href="/courses"
                itemProp="item"
                className="transition-colors hover:text-[#1B1D52]"
              >
                <span itemProp="name">All Training Programs</span>
              </a>
              <meta itemProp="position" content="2" />
            </li>
            <li aria-hidden="true" style={{ color: "#9CA3AF" }}>›</li>
            <li
              aria-current="page"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              style={{ color: "#1B1D52" }}
            >
              <span itemProp="name">Cybersecurity Training Programs</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>
      </div>

      <div className="mtk-page-center pt-10 pb-20 sm:pt-12 sm:pb-24">
      <div className="text-left">
        <h1
          className="max-w-2xl text-[34px] leading-[1.05] sm:text-[42px] lg:text-[47px]"
          style={{ color: "#1B1D52", fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
        >
          Customized Cybersecurity Training Programs for Enterprise teams
        </h1>
      </div>

      <div className="mt-6 grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="text-left lg:col-span-5">
          <p
            className="mb-5 text-[16px] leading-[1.6] sm:text-[18px]"
            style={{ color: "#374151", fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
          >
            Edstellar partners with enterprises to build deep cybersecurity
            capability across CISSP, CEH v13, CCSP, CISM, OSCP and emerging
            AI-security disciplines. Whether your security teams need entry-level
            skilling, role-specific upskilling, or senior-level reskilling, every
            group training cohort is matched to vetted, certified trainers
            with hands-on enterprise practice.
          </p>
          <p
            className="mb-8 text-[16px] leading-[1.6] sm:text-[18px]"
            style={{ color: "#374151", fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
          >
            Every{" "}
            <strong style={{ color: "#1B1D52", fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}>
              customized instructor-led training
            </strong>{" "}
            program is delivered onsite, off-site or virtually, in any language,
            and runs on our five-part transformation framework that turns employee
            training into measurable security outcomes. Strategy, curriculum,
            hands-on labs, assessment and continuous mastery, engineered around
            your stack, your regulatory landscape and the security KPIs your
            board reports on.
          </p>
          <ul className="space-y-3">
            <CheckBullet>
              <strong style={{ color: "#1B1D52" }}>Strategy-led design.</strong>{" "}
              Every engagement starts with a capability roadmap aligned to your
              security goals.
            </CheckBullet>
            <CheckBullet>
              <strong style={{ color: "#1B1D52" }}>Global instructor-led delivery.</strong>{" "}
              Every program is delivered live by a certified trainer. On-site,
              off-site or virtual{" "}
              <strong style={{ color: "#1B1D52" }}>(ILT / VILT)</strong>, in{" "}
              <span className="relative inline-block group">
                <button
                  type="button"
                  aria-describedby="ws-languages-tooltip"
                  className="cursor-help border-b border-dotted bg-transparent p-0"
                  style={{
                    color: "#1B1D52",
                    borderColor: "#9CA3AF",
                    fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  10 languages
                </button>
                <span
                  id="ws-languages-tooltip"
                  role="tooltip"
                  className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 hidden w-max max-w-[260px] -translate-x-1/2 rounded-lg px-3 py-2 text-[12px] leading-[1.45] shadow-lg group-hover:block group-focus-within:block"
                  style={{
                    backgroundColor: "#1B1D52",
                    color: "#FFFFFF",
                    fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  <span
                    className="block text-[10px] uppercase tracking-[0.14em]"
                    style={{ color: "#C5E826", fontWeight: 700 }}
                  >
                    Available in
                  </span>
                  <span className="mt-0.5 block">
                    {LANGUAGES.join(", ")}
                  </span>
                </span>
              </span>
              , matched to your team&apos;s location and schedule.
            </CheckBullet>
            <CheckBullet>
              <strong style={{ color: "#1B1D52" }}>Hands-on by default.</strong>{" "}
              Cloud sandboxes, MITRE ATT&amp;CK and CTF labs power real-world
              practice.
            </CheckBullet>
            <CheckBullet>
              <strong style={{ color: "#1B1D52" }}>Measurable ROI.</strong>{" "}
              Pre/post skill assessments, training outcomes and security
              KPIs.
            </CheckBullet>
          </ul>
        </div>

        <div className="lg:col-span-7">
          <div
            id="framework"
            className="relative mx-auto hidden h-[540px] w-full max-w-[640px] items-center justify-center lg:flex"
          >
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 1000 800"
              preserveAspectRatio="none"
            >
              <defs>
                <marker id="fwArrow" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                </marker>
              </defs>
              <line className="fw-line fw-line-1" x1="400" y1="300" x2="240" y2="150" stroke="currentColor" strokeDasharray="8 4" strokeWidth="2" markerEnd="url(#fwArrow)" />
              <line className="fw-line fw-line-2" x1="600" y1="300" x2="760" y2="150" stroke="currentColor" strokeDasharray="8 4" strokeWidth="2" markerEnd="url(#fwArrow)" />
              <line className="fw-line fw-line-3" x1="600" y1="500" x2="760" y2="650" stroke="currentColor" strokeDasharray="8 4" strokeWidth="2" markerEnd="url(#fwArrow)" />
              <line className="fw-line fw-line-4" x1="400" y1="500" x2="240" y2="650" stroke="currentColor" strokeDasharray="8 4" strokeWidth="2" markerEnd="url(#fwArrow)" />
            </svg>

            <div
              tabIndex={0}
              className="framework-hub-circle relative z-20 flex h-44 w-44 flex-col items-center justify-center rounded-full border-[8px] bg-white p-3 text-center shadow-2xl"
              style={{ borderColor: "#1B1D52" }}
            >
              <h4
                className="mb-1 text-[13px] leading-tight"
                style={{ color: "#1B1D52", fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif", fontWeight: 600 }}
              >
                1. Strategy &amp; Vision
              </h4>
              <span
                className="mb-2 text-[8px] uppercase tracking-[0.14em]"
                style={{ color: "#6B7280", fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif", fontWeight: 700 }}
              >
                Cyber Training Strategy
              </span>
              <div
                className="rounded border px-2 py-1.5 text-[10px] italic leading-tight"
                style={{ backgroundColor: "#EEF2F7", borderColor: "#E3E6F0", color: "#6B7280" }}
              >
                &ldquo;Vision for our organisation&apos;s cyber capability growth?&rdquo;
              </div>
            </div>

            <div tabIndex={0} className="fw-quad fw-quad-1 absolute left-0 top-0 w-52">
              <QuadrantCard card={QUADRANTS[0]} />
            </div>
            <div tabIndex={0} className="fw-quad fw-quad-2 absolute right-0 top-0 w-52">
              <QuadrantCard card={QUADRANTS[1]} />
            </div>
            <div tabIndex={0} className="fw-quad fw-quad-3 absolute bottom-0 right-0 w-52">
              <QuadrantCard card={QUADRANTS[2]} />
            </div>
            <div tabIndex={0} className="fw-quad fw-quad-4 absolute bottom-0 left-0 w-52">
              <QuadrantCard card={QUADRANTS[3]} />
            </div>
          </div>

          <div className="mx-auto max-w-3xl space-y-4 text-left lg:hidden">
            <div
              className="rounded-xl border-2 bg-white p-6 text-center"
              style={{ borderColor: "#1B1D52" }}
            >
              <span
                className="mb-1 block text-[10px] uppercase tracking-[0.14em]"
                style={{ color: "#6B7280", fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif", fontWeight: 700 }}
              >
                Cyber Training Strategy
              </span>
              <h4
                className="mb-3 text-[20px]"
                style={{ color: "#1B1D52", fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
              >
                1. Strategy &amp; Vision
              </h4>
              <div
                className="inline-block rounded border px-4 py-2 text-[12px] italic"
                style={{ backgroundColor: "#EEF2F7", borderColor: "#E3E6F0", color: "#6B7280" }}
              >
                &ldquo;Vision for our organisation&apos;s cyber capability growth?&rdquo;
              </div>
            </div>
            {QUADRANTS.map((q) => (
              <QuadrantCard key={q.num} card={q} />
            ))}
          </div>
        </div>
      </div>

      <div
        className="mt-20 border-t pt-16"
        style={{ borderColor: "#D8DEEA" }}
      >
        <div className="flex flex-col items-center text-center">
          <span
            className="mb-5 inline-flex h-1 w-12 rounded-full"
            style={{ backgroundColor: "#C5E826" }}
            aria-hidden="true"
          />
          <h3
            className="max-w-3xl text-[24px] leading-[1.2] sm:text-[28px] lg:text-[32px]"
            style={{ color: "#1B1D52", fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
          >
            Cybersecurity training that compounds business value.
          </h3>
          <p
            className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.5] sm:text-[16px]"
            style={{ color: "#374151", fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
          >
            Edstellar&apos;s instructor-led cybersecurity training spans 200+
            programs across 8 cyber domains, designed for measurable workforce
            and risk-reduction impact.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              stat: "27%",
              caption:
                "Average reduction in security incidents at organisations running continuous cybersecurity training programs.",
            },
            {
              stat: "$10.5T",
              caption:
                "Projected annual cost of global cybercrime by 2025, driving demand for skilled cyber talent.",
            },
            {
              stat: "74%",
              caption:
                "CISOs say a strong cybersecurity talent pool is critical to business resilience.",
            },
          ].map((s) => (
            <div
              key={s.stat}
              className="relative rounded-xl border bg-white p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              style={{ borderColor: "#E3E6F0" }}
            >
              <span
                className="absolute left-0 top-7 h-9 w-1 rounded-r"
                style={{ backgroundColor: "#C5E826" }}
              />
              <p
                className="text-[44px] leading-[1] sm:text-[52px] lg:text-[60px]"
                style={{ color: "#1B1D52", fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                {s.stat}
              </p>
              <p
                className="mt-4 text-[15px] leading-[1.45] sm:text-[16px]"
                style={{ color: "#374151", fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                {s.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
