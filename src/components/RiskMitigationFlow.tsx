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
    title: "Detect",
    body: "Trained SOC analysts triage AI-augmented intrusions earlier. Dwell time drops, signal-to-noise improves, and the organization stops paying for hours of unnoticed lateral movement.",
    metric: "−58%",
    metricCaption: "median dwell-time reduction",
  },
  {
    num: "02",
    title: "Respond",
    body: "Hands-on incident-response drills turn runbooks into muscle memory. Cross-functional teams rehearse cloud, OT, and identity scenarios so that the first hour of a breach is rehearsed, not improvised.",
    metric: "−41%",
    metricCaption: "mean-time-to-contain",
  },
  {
    num: "03",
    title: "Govern",
    body: "GRC fluency turns audits into evidence. Engineers, risk officers, and product leaders speak the same regulatory language across DORA, NIS2, SEC Cyber Rules, and emerging AI legislation, and prove it on demand.",
    metric: "+2.4x",
    metricCaption: "audit-evidence velocity",
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

export function RiskMitigationFlow() {
  return (
    <section
      className="py-16 md:py-20"
      style={{ backgroundColor: "#F7F8FC" }}
    >
      <style dangerouslySetInnerHTML={{ __html: FLOW_CSS }} />

      <div className="mtk-page-center">
        <div className="max-w-3xl">
          <h2
            className="text-[32px] leading-[1.08] sm:text-[40px] lg:text-[46px]"
            style={{
              color: "#1B1D52",
              fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif",
            }}
          >
            How cybersecurity is shaping organizations to{" "}
            <span className="relative inline-block">
              <span className="relative z-10">mitigate risks</span>
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
            Trained security teams change the math of every risk register. The
            same incident no longer costs the same, because trained engineers
            detect earlier, respond cleaner, and turn governance into a
            reportable advantage.
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
          Indicative impact ranges drawn from IBM / Ponemon Cost of a Data
          Breach 2024 and Verizon DBIR 2024 telemetry; outcomes vary by sector
          and program design.
        </p>
      </div>
    </section>
  );
}
