type GapStat = {
  metric: string;
  caption: string;
  source: string;
};

const GAP_STATS: GapStat[] = [
  {
    metric: "12%",
    caption:
      "of organizations strongly agree they have the leadership bench strength to meet their future needs, leaving most without ready successors.",
    source: "DDI Global Leadership Forecast, 2023",
  },
  {
    metric: "70%",
    caption:
      "of the variance in team engagement traces back to the manager, so manager quality is the highest-leverage development investment.",
    source: "Gallup State of the Global Workplace, 2024",
  },
  {
    metric: "#1",
    caption:
      "leadership and management development is the top-ranked focus area for L&D teams worldwide, ahead of every other priority.",
    source: "LinkedIn Workplace Learning Report, 2024",
  },
];

export function LeadershipSkillsGapPanel() {
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
              Companies Promote Managers Far Faster Than They{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Develop</span>
                <span
                  aria-hidden="true"
                  className="absolute bottom-1 left-0 right-0 -z-0 h-2.5 sm:h-3"
                  style={{
                    backgroundColor: "#C5E826",
                    opacity: 0.55,
                  }}
                />
              </span>{" "}
              Them.
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
                Most organizations move their strongest individual performers
                into management and assume leadership will follow. It rarely
                does on its own. DDI finds that only 12% of organizations
                strongly agree they have the leadership bench strength to meet
                their future needs, so the gap is not a hiring problem you can
                buy your way out of.
              </p>
              <p
                className="text-[16px] leading-[1.6] sm:text-[18px]"
                style={{
                  color: "#374151",
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                The organizations getting ahead are developing the managers
                they already have. Instructor-led group training on delegation,
                feedback, executive influence and leading change, led by
                certified facilitators against your own competency model, turns
                a thin succession bench into leaders your teams stay for.
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
                Build your leadership capability roadmap
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
