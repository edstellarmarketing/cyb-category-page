type FlowStep = {
  num: string;
  title: string;
  body: string;
  metric: string;
  metricCaption: string;
};

const STEPS: FlowStep[] = [
  {
    num: "01",
    title: "Harden",
    body: "Teams trained on Android Security Best Practices, OWASP MASVS and Play Integrity classify mobile threats, lock down storage and network surfaces, and produce audit evidence. Instructor-led group training closes hardening gaps before a Play Store reviewer or auditor ever asks.",
    metric: "MASVS",
    metricCaption: "mobile security baseline",
  },
  {
    num: "02",
    title: "Validate",
    body: "Instructor-led hands-on labs teach Android, QA and DevOps engineers to test for release regressions: crash spikes, ANRs, frame-time drops and policy violations. Espresso, Appium and Firebase Test Lab runs become routine, so releases reach the Play Store proven, not assumed.",
    metric: "Espresso + Appium",
    metricCaption: "automated mobile QA",
  },
  {
    num: "03",
    title: "Release",
    body: "Shadow release processes grow when teams lack a governed CI for Android. Broad instructor-led enablement on Gradle, build caching, Play Console and CI replaces unmanaged builds with a measurable release pipeline across every mobile squad.",
    metric: "Every release",
    metricCaption: "governed CI for Android",
  },
];

const FLOW_CSS = `
.flow-step { transition: border-color .35s ease, box-shadow .35s ease, transform .35s ease; }
.flow-step:hover { transform: translateY(-3px); box-shadow: 0 18px 30px -18px rgba(27,29,82,0.25); border-color: #C5E826 !important; }
.flow-step:hover .flow-num { background-color: #C5E826; color: #1B1D52; }
.flow-num { transition: background-color .35s ease, color .35s ease; }
@keyframes flow-travel { from { stroke-dashoffset: 0; } to { stroke-dashoffset: -120; } }
.flow-connector { animation: flow-travel 3.5s linear infinite; }
`;

export function AndroidRiskMitigationFlow() {
  return (
    <section
      className="py-16 md:py-20"
      style={{ backgroundColor: "#F7F8FC" }}
    >
      <style dangerouslySetInnerHTML={{ __html: FLOW_CSS }} />

      <div className="eds-page-center">
        <div className="max-w-3xl">
          <h2
            className="text-[32px] leading-[1.08] sm:text-[40px] lg:text-[46px]"
            style={{
              color: "#1B1D52",
              fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif",
            }}
          >
            Crash-Free Rate, ANR Rate and Play Store Reviews Are Now Board-Visible{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Numbers</span>
              <span
                aria-hidden="true"
                className="absolute bottom-1 left-0 right-0 -z-0 h-2.5 sm:h-3"
                style={{
                  backgroundColor: "#C5E826",
                  opacity: 0.55,
                }}
              />
            </span>.
          </h2>
          <p
            className="mt-5 text-[16px] leading-[1.6] sm:text-[18px]"
            style={{
              color: "#374151",
              fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif",
            }}
          >
            Structured instructor-led training changes the risk math of every
            Android release. Trained teams cut release regressions, catch
            security incidents before a Play Store reviewer does, and replace
            ad-hoc release processes with governed CI, so the same app carries
            measurably less risk of an app-store rejection.
          </p>
        </div>

        <div
          className="relative mt-12 hidden lg:grid lg:grid-cols-3 lg:gap-8"
          aria-hidden="true"
        >
          <svg
            className="pointer-events-none absolute left-0 right-0 top-[44px] h-[2px] w-full"
            viewBox="0 0 1000 2"
            preserveAspectRatio="none"
          >
            <line
              className="flow-connector"
              x1="0"
              y1="1"
              x2="1000"
              y2="1"
              stroke="#1B1D52"
              strokeOpacity="0.25"
              strokeDasharray="8 6"
              strokeWidth="2"
            />
          </svg>
        </div>

        <ol className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {STEPS.map((s) => (
            <li
              key={s.num}
              className="flow-step flex h-full flex-col gap-4 rounded-2xl border bg-white p-7 sm:p-8"
              style={{ borderColor: "#E3E6F0" }}
            >
              <div
                className="flow-num flex h-14 w-14 items-center justify-center rounded-full text-[16px]"
                style={{
                  backgroundColor: "#1B1D52",
                  color: "#FFFFFF",
                  fontFamily:
                    "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                  fontWeight: 700,
                }}
              >
                {s.num}
              </div>

              <h3
                className="text-[24px] leading-[1.2] sm:text-[28px]"
                style={{
                  color: "#1B1D52",
                  fontFamily:
                    "'Riona Sans Regular', Helvetica, Arial, sans-serif",
                }}
              >
                {s.title}
              </h3>

              <p
                className="text-[15px] leading-[1.55] sm:text-[16px]"
                style={{
                  color: "#374151",
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                {s.body}
              </p>

              <div
                className="mt-auto flex items-baseline gap-3 border-t pt-4"
                style={{ borderColor: "#E3E6F0" }}
              >
                <span
                  className="text-[28px] leading-none sm:text-[32px]"
                  style={{
                    color: "#1B1D52",
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  {s.metric}
                </span>
                <span
                  className="text-[12px] uppercase tracking-[0.08em]"
                  style={{
                    color: "#6B7280",
                    fontFamily:
                      "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {s.metricCaption}
                </span>
              </div>
            </li>
          ))}
        </ol>

        <p
          className="mt-8 text-[12px] sm:text-[12.5px]"
          style={{
            color: "#6B7280",
            fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif",
          }}
        >
          Frameworks referenced: Android Security Best Practices, OWASP MASVS,
          Play Integrity API. Risk outcomes vary by app footprint, release
          cadence and mobile engineering maturity.
        </p>
      </div>
    </section>
  );
}
