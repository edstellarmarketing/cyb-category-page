type GapStat = {
  metric: string;
  caption: string;
  source: string;
};

const GAP_STATS: GapStat[] = [
  {
    metric: "47%",
    caption:
      "of organizations cite a lack of in-house cyber expertise as the single biggest barrier to safely adopting AI.",
    source: "ISC2 Cybersecurity Workforce Study, 2025",
  },
  {
    metric: "$4.88M",
    caption:
      "average global cost of a data breach in 2024, the highest on record, with AI-driven attack chains accelerating dwell time.",
    source: "IBM Cost of a Data Breach Report, 2024",
  },
  {
    metric: "3.2x",
    caption:
      "faster mean-time-to-contain at organizations whose security teams complete continuous, scenario-based cybersecurity training.",
    source: "Ponemon / IBM, 2024",
  },
];

export function AiEraImperative() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mtk-page-center">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <h2
              className="text-[32px] leading-[1.08] sm:text-[40px] lg:text-[46px]"
              style={{
                color: "#1B1D52",
                fontFamily:
                  "'Riona Sans Light', Helvetica, Arial, sans-serif",
              }}
            >
              The critical need for cybersecurity knowledge for teams in the{" "}
              <span className="relative inline-block">
                <span className="relative z-10">AI era</span>
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

            <div className="mt-8 space-y-5">
              <p
                className="text-[16px] leading-[1.6] sm:text-[18px]"
                style={{
                  color: "#374151",
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                Generative AI has compressed the attack cycle. Phishing kits
                now write themselves, model APIs leak intellectual property,
                and adversaries automate reconnaissance against any team that
                has not retrained for the new threat surface. The legacy
                playbook of annual awareness modules and a single SOC analyst
                with a CCNA cannot keep pace.
              </p>
              <p
                className="text-[16px] leading-[1.6] sm:text-[18px]"
                style={{
                  color: "#374151",
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                The boards asking the hardest questions today are the ones
                whose security teams trained early. They have engineers
                fluent in LLM red-teaming, prompt-injection defense, MLOps
                security and AI governance, and incident-response drills
                that assume an AI-augmented adversary, not a human one.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] uppercase tracking-[0.08em] text-white transition-colors hover:opacity-90"
                style={{
                  backgroundColor: "#1B1D52",
                  fontFamily:
                    "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                  fontWeight: 600,
                }}
              >
                Build your AI-era roadmap
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div
              className="rounded-2xl border bg-white p-2 shadow-sm"
              style={{ borderColor: "#E3E6F0" }}
            >
              <ul className="divide-y" style={{ borderColor: "#E3E6F0" }}>
                {GAP_STATS.map((stat) => (
                  <li
                    key={stat.metric}
                    className="flex flex-col gap-2 px-5 py-6 sm:flex-row sm:items-start sm:gap-6 sm:px-6"
                    style={{ borderColor: "#E3E6F0" }}
                  >
                    <div className="sm:w-40 sm:shrink-0">
                      <p
                        className="text-[44px] leading-none sm:text-[52px]"
                        style={{
                          color: "#1B1D52",
                          fontFamily:
                            "'Riona Sans Light', Helvetica, Arial, sans-serif",
                        }}
                      >
                        {stat.metric}
                      </p>
                    </div>
                    <div className="flex-1">
                      <p
                        className="text-[15px] leading-[1.5] sm:text-[16px]"
                        style={{
                          color: "#1F2937",
                          fontFamily:
                            "'Riona Sans Regular', Helvetica, Arial, sans-serif",
                        }}
                      >
                        {stat.caption}
                      </p>
                      <p
                        className="mt-2 text-[12px] sm:text-[12.5px]"
                        style={{
                          color: "#6B7280",
                          fontFamily:
                            "'Riona Sans Light', Helvetica, Arial, sans-serif",
                        }}
                      >
                        Source: {stat.source}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
