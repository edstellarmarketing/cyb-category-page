type GapStat = {
  metric: string;
  caption: string;
  source: string;
};

const GAP_STATS: GapStat[] = [
  {
    metric: "39%",
    caption:
      "of workers' core skills are expected to change by 2030, driven by AI and automation, faster than most hiring pipelines can refill.",
    source: "WEF Future of Jobs Report, 2025",
  },
  {
    metric: "78%",
    caption:
      "of organizations now use AI in at least one business function, intensifying demand for teams that can build and run it safely.",
    source: "McKinsey State of AI, 2024",
  },
  {
    metric: "$4.4T",
    caption:
      "in annual value generative AI could add to the global economy, value that stays locked unless employees are trained to capture it.",
    source: "McKinsey, 2023",
  },
];

export function AiSkillsGapPanel() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="eds-page-center">
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
              AI Demand Is Outpacing the Talent Enterprises Can{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Hire</span>
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
                The skills enterprises need have moved faster than the market
                can supply them. Generative AI, machine learning and MLOps
                roles compete for the same scarce talent, and the WEF projects
                that 39% of workers' core skills will change by 2030. Hiring
                alone cannot close a gap this wide, and the build-versus-buy
                math now favors building from within.
              </p>
              <p
                className="text-[16px] leading-[1.6] sm:text-[18px]"
                style={{
                  color: "#374151",
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                The organizations getting ahead are skilling and upskilling
                the teams they already have. Instructor-led group training on
                generative AI, RAG, agents, MLOps and AI governance, led by
                certified trainers on your real stack, turns an unhireable gap
                into capability you can deploy.
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
                Build your AI capability roadmap
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
