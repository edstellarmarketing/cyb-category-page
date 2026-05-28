type SparkPoint = { x: number; y: number };

function AdoptionTrendChart() {
  // Directional trend in how strongly L&D leaders prioritize leadership and
  // management development, rising to the #1 focus area.
  // LinkedIn Workplace Learning Report.
  const data: SparkPoint[] = [
    { x: 0, y: 50 }, // 2020
    { x: 1, y: 56 }, // 2021
    { x: 2, y: 50 }, // 2022
    { x: 3, y: 55 }, // 2023
    { x: 4, y: 78 }, // 2024
  ];
  const width = 480;
  const height = 140;
  const padX = 8;
  const padY = 12;
  const xs = data.map((d) => d.x);
  const ys = data.map((d) => d.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const sx = (x: number) =>
    padX + ((x - minX) / (maxX - minX)) * (width - padX * 2);
  const sy = (y: number) =>
    height -
    padY -
    ((y - minY) / (maxY - minY)) * (height - padY * 2);
  const linePath = data
    .map((d, i) => `${i === 0 ? "M" : "L"} ${sx(d.x)} ${sy(d.y)}`)
    .join(" ");
  const areaPath = `${linePath} L ${sx(maxX)} ${height - padY} L ${sx(minX)} ${
    height - padY
  } Z`;

  return (
    <svg
      role="img"
      aria-label="Global leadership development trend, rising priority of leadership and management development 2020 to 2024"
      viewBox={`0 0 ${width} ${height}`}
      className="h-32 w-full"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="ldr-trends-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B1D52" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#1B1D52" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#ldr-trends-area)" />
      <path
        d={linePath}
        fill="none"
        stroke="#1B1D52"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {data.map((d, i) => (
        <circle
          key={i}
          cx={sx(d.x)}
          cy={sy(d.y)}
          r={i === data.length - 1 ? 5 : 3.5}
          fill={i === data.length - 1 ? "#C5E826" : "#1B1D52"}
          stroke="#FFFFFF"
          strokeWidth={i === data.length - 1 ? 2 : 1}
        />
      ))}
    </svg>
  );
}

const SKILL_SHIFT_REGIONS = [
  { region: "Asia-Pacific", note: "Fastest-growing manager-development demand" },
  { region: "North America", note: "Highest leadership L&D investment share" },
  { region: "Europe", note: "Strong focus on inclusive, ethical leadership" },
];

function SkillShiftRegions() {
  return (
    <ul className="space-y-3">
      {SKILL_SHIFT_REGIONS.map((r) => (
        <li key={r.region} className="flex items-start gap-2.5">
          <span
            className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
            style={{ backgroundColor: "#1B1D52" }}
          />
          <div>
            <span
              className="text-[13px]"
              style={{
                color: "#1B1D52",
                fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                fontWeight: 700,
              }}
            >
              {r.region}
            </span>
            <span
              className="ml-2 text-[12px]"
              style={{
                color: "#6B7280",
                fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif",
              }}
            >
              {r.note}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

type FrameworkTag = { name: string; effective: string };

const FRAMEWORKS: FrameworkTag[] = [
  { name: "First-Time Managers", effective: "Tier 1 · frontline" },
  { name: "Team Leadership", effective: "Tier 2 · people leaders" },
  { name: "Senior & Director", effective: "Tier 3 · mid-senior" },
  { name: "Executive & Board", effective: "Tier 4 · C-suite" },
  { name: "Change Leadership", effective: "Cross-tier · use case" },
  { name: "Succession Bench", effective: "High-potential pipeline" },
];

function SkillShiftRadar() {
  // Radial visual for leadership capability domains where development demand
  // is rising across enterprise programs.
  const petals = [
    { angle: 0, label: "Executive", value: 0.92 },
    { angle: 60, label: "Coaching", value: 0.82 },
    { angle: 120, label: "Change", value: 0.7 },
    { angle: 180, label: "EQ", value: 0.78 },
    { angle: 240, label: "Communication", value: 0.6 },
    { angle: 300, label: "Inclusion", value: 0.64 },
  ];
  const cx = 80;
  const cy = 80;
  const r = 60;
  const points = petals
    .map((p) => {
      const rad = (p.angle - 90) * (Math.PI / 180);
      const px = cx + Math.cos(rad) * r * p.value;
      const py = cy + Math.sin(rad) * r * p.value;
      return `${px},${py}`;
    })
    .join(" ");

  return (
    <svg
      role="img"
      aria-label="Distribution of leadership capability domains where enterprise development demand is rising"
      viewBox="0 0 160 160"
      className="h-32 w-32"
    >
      {[0.4, 0.7, 1].map((scale) => (
        <circle
          key={scale}
          cx={cx}
          cy={cy}
          r={r * scale}
          fill="none"
          stroke="#E3E6F0"
          strokeDasharray="3 4"
        />
      ))}
      <polygon
        points={points}
        fill="#1B1D52"
        fillOpacity="0.18"
        stroke="#1B1D52"
        strokeWidth="1.5"
      />
      {petals.map((p) => {
        const rad = (p.angle - 90) * (Math.PI / 180);
        const px = cx + Math.cos(rad) * r * p.value;
        const py = cy + Math.sin(rad) * r * p.value;
        return (
          <circle
            key={p.angle}
            cx={px}
            cy={py}
            r={3}
            fill="#C5E826"
            stroke="#1B1D52"
            strokeWidth="1"
          />
        );
      })}
    </svg>
  );
}

export function LeadershipGlobalTrends() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="eds-page-center">
        <div className="max-w-3xl">
          <h2
            className="text-[36px] leading-[1.08] sm:text-[42px] lg:text-[48px]"
            style={{
              color: "#1B1D52",
              fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif",
            }}
          >
            Leadership Is the Workforce&apos;s Most In-Demand{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Capability</span>
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
            The macro signal is clear. Engagement, retention and succession all
            run through the manager, and the organizations getting ahead are the
            ones investing in trained leaders through instructor-led group
            training, not just more tools or perks.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <article
            className="rounded-2xl border bg-white p-7 sm:p-8 lg:col-span-7"
            style={{ borderColor: "#E3E6F0" }}
          >
            <h3
              className="text-[20px] sm:text-[22px]"
              style={{
                color: "#1B1D52",
                fontFamily:
                  "'Riona Sans Regular', Helvetica, Arial, sans-serif",
              }}
            >
              Managers decide team engagement
            </h3>
            <div className="mt-2 flex items-baseline gap-3">
              <span
                className="text-[56px] leading-none sm:text-[72px]"
                style={{
                  color: "#1B1D52",
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                70%
              </span>
              <span
                className="text-[14px] sm:text-[15px]"
                style={{
                  color: "#374151",
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                of the variance in team engagement traces to the manager
              </span>
            </div>
            <div className="mt-6">
              <AdoptionTrendChart />
              <div
                className="mt-2 flex justify-between text-[11px]"
                style={{
                  color: "#6B7280",
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                <span>2020</span>
                <span>2021</span>
                <span>2022</span>
                <span>2023</span>
                <span>2024</span>
              </div>
            </div>
            <p
              className="mt-5 text-[15px] leading-[1.55]"
              style={{
                color: "#374151",
                fontFamily:
                  "'Riona Sans Light', Helvetica, Arial, sans-serif",
              }}
            >
              Engagement, retention and performance all run through the person
              managing the team. As leadership development climbs the L&D
              agenda, capability has to come from well-trained managers in
              group training programs, not perks or headcount alone.
            </p>
            <p
              className="mt-3 text-[12px]"
              style={{
                color: "#6B7280",
                fontFamily:
                  "'Riona Sans Light', Helvetica, Arial, sans-serif",
              }}
            >
              Source: Gallup State of the Global Workplace, 2024. Trend line
              directional, LinkedIn Workplace Learning Report 2024.
            </p>
          </article>

          <article
            className="rounded-2xl border bg-white p-7 sm:p-8 lg:col-span-5"
            style={{ borderColor: "#E3E6F0" }}
          >
            <h3
              className="text-[20px] sm:text-[22px]"
              style={{
                color: "#1B1D52",
                fontFamily:
                  "'Riona Sans Regular', Helvetica, Arial, sans-serif",
              }}
            >
              The leadership demand is global
            </h3>
            <div className="mt-2 flex items-baseline gap-3">
              <span
                className="text-[44px] leading-none sm:text-[52px]"
                style={{
                  color: "#1B1D52",
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                #1
              </span>
              <span
                className="text-[14px] sm:text-[15px]"
                style={{
                  color: "#374151",
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                L&D focus area for teams worldwide
              </span>
            </div>
            <div className="mt-6">
              <SkillShiftRegions />
            </div>
            <p
              className="mt-5 text-[12px]"
              style={{
                color: "#6B7280",
                fontFamily:
                  "'Riona Sans Light', Helvetica, Arial, sans-serif",
              }}
            >
              Source: LinkedIn Workplace Learning Report, 2024. Regional notes
              directional.
            </p>
          </article>

          <article
            className="rounded-2xl border bg-white p-7 sm:p-8 lg:col-span-7"
            style={{ borderColor: "#E3E6F0" }}
          >
            <h3
              className="text-[20px] sm:text-[22px]"
              style={{
                color: "#1B1D52",
                fontFamily:
                  "'Riona Sans Regular', Helvetica, Arial, sans-serif",
              }}
            >
              Leadership development spans every tier
            </h3>
            <p
              className="mt-2 text-[15px] leading-[1.55]"
              style={{
                color: "#374151",
                fontFamily:
                  "'Riona Sans Light', Helvetica, Arial, sans-serif",
              }}
            >
              Enterprises now develop leaders from the first promotion to the
              board, treating each tier as its own capability with its own
              program. Trained managers are the difference between a thin
              succession bench and a pipeline ready to step up.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {FRAMEWORKS.map((fw) => (
                <li
                  key={fw.name}
                  className="rounded-full border px-3.5 py-1.5"
                  style={{
                    borderColor: "#1B1D52",
                    backgroundColor: "rgba(27, 29, 82, 0.05)",
                  }}
                >
                  <span
                    className="text-[12px]"
                    style={{
                      color: "#1B1D52",
                      fontFamily:
                        "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {fw.name}
                  </span>
                  <span
                    className="ml-2 text-[11px]"
                    style={{
                      color: "#6B7280",
                      fontFamily:
                        "'Riona Sans Light', Helvetica, Arial, sans-serif",
                    }}
                  >
                    {fw.effective}
                  </span>
                </li>
              ))}
            </ul>
            <p
              className="mt-5 text-[12px]"
              style={{
                color: "#6B7280",
                fontFamily:
                  "'Riona Sans Light', Helvetica, Arial, sans-serif",
              }}
            >
              Source: Edstellar leadership tier framework, mapped to DDI Global
              Leadership Forecast 2023.
            </p>
          </article>

          <article
            className="rounded-2xl border bg-white p-7 sm:p-8 lg:col-span-5"
            style={{ borderColor: "#E3E6F0" }}
          >
            <h3
              className="text-[20px] sm:text-[22px]"
              style={{
                color: "#1B1D52",
                fontFamily:
                  "'Riona Sans Regular', Helvetica, Arial, sans-serif",
              }}
            >
              Bench strength is the gap to close
            </h3>
            <div className="mt-2 flex items-baseline gap-3">
              <span
                className="text-[44px] leading-none sm:text-[52px]"
                style={{
                  color: "#1B1D52",
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                12%
              </span>
              <span
                className="text-[13px] sm:text-[14px]"
                style={{
                  color: "#374151",
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                strongly agree they have the leadership bench strength they need
              </span>
            </div>
            <div className="mt-6 flex items-center gap-5">
              <SkillShiftRadar />
              <ul
                className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[12px]"
                style={{
                  color: "#374151",
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                <li>Executive</li>
                <li>Coaching</li>
                <li>Change</li>
                <li>EQ</li>
                <li>Communication</li>
                <li>Inclusion</li>
              </ul>
            </div>
            <p
              className="mt-5 text-[12px]"
              style={{
                color: "#6B7280",
                fontFamily:
                  "'Riona Sans Light', Helvetica, Arial, sans-serif",
              }}
            >
              Source: DDI Global Leadership Forecast, 2023. Radar values
              illustrative of demand by domain.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
