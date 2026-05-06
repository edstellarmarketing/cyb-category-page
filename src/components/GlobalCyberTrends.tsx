type SparkPoint = { x: number; y: number };

function ThreatVolumeChart() {
  // Cybercrime cost in trillions USD per year (estimates).
  // Cybersecurity Ventures projections.
  const data: SparkPoint[] = [
    { x: 0, y: 6.0 },   // 2021
    { x: 1, y: 7.0 },   // 2022
    { x: 2, y: 8.0 },   // 2023
    { x: 3, y: 9.5 },   // 2024
    { x: 4, y: 10.5 },  // 2025
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
      aria-label="Global cybercrime cost trend, 2021 to 2025"
      viewBox={`0 0 ${width} ${height}`}
      className="h-32 w-full"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="trends-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B1D52" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#1B1D52" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#trends-area)" />
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

type RegionBar = { region: string; pct: number };

const SKILL_GAP_REGIONS: RegionBar[] = [
  { region: "Asia-Pacific", pct: 38 },
  { region: "Europe", pct: 26 },
  { region: "North America", pct: 22 },
  { region: "Rest of world", pct: 14 },
];

function SkillGapBars() {
  return (
    <ul className="space-y-3">
      {SKILL_GAP_REGIONS.map((r) => (
        <li key={r.region}>
          <div className="flex items-baseline justify-between">
            <span
              className="text-[13px]"
              style={{
                color: "#374151",
                fontFamily:
                  "'Riona Sans Regular', Helvetica, Arial, sans-serif",
              }}
            >
              {r.region}
            </span>
            <span
              className="text-[13px]"
              style={{
                color: "#1B1D52",
                fontFamily:
                  "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                fontWeight: 700,
              }}
            >
              {r.pct}%
            </span>
          </div>
          <div
            className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full"
            style={{ backgroundColor: "#E3E6F0" }}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: `${r.pct}%`,
                backgroundColor: "#1B1D52",
              }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

type RegTag = { name: string; effective: string };

const REGULATIONS: RegTag[] = [
  { name: "GDPR", effective: "EU · live" },
  { name: "NIS2", effective: "EU · 2024" },
  { name: "DORA", effective: "EU · Jan 2025" },
  { name: "SEC Cyber Rule", effective: "US · 2023" },
  { name: "AI Act", effective: "EU · phased 2026" },
  { name: "CIRCIA", effective: "US · 2026" },
];

function AiAttackRadar() {
  // Simple radial / petals visual for "AI-augmented attack vectors".
  const petals = [
    { angle: 0, label: "Phishing", value: 0.92 },
    { angle: 60, label: "Deepfake", value: 0.78 },
    { angle: 120, label: "Code-gen", value: 0.66 },
    { angle: 180, label: "Recon", value: 0.84 },
    { angle: 240, label: "Vish", value: 0.58 },
    { angle: 300, label: "Data-exfil", value: 0.7 },
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
      aria-label="Distribution of AI-augmented attack vectors observed in 2024-25 telemetry"
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

export function GlobalCyberTrends() {
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
            Global cybersecurity{" "}
            <span className="relative inline-block">
              <span className="relative z-10">trends</span>
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
            The macro signal is clear. Threat volume, regulatory load, and
            AI-augmented adversaries are rising in lockstep, and the
            organizations getting ahead are the ones investing in trained
            people, not just more tools.
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
              Threat volume keeps compounding
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
                $10.5T
              </span>
              <span
                className="text-[14px] sm:text-[15px]"
                style={{
                  color: "#374151",
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                projected annual cost of cybercrime, 2025
              </span>
            </div>
            <div className="mt-6">
              <ThreatVolumeChart />
              <div
                className="mt-2 flex justify-between text-[11px]"
                style={{
                  color: "#6B7280",
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                <span>2021</span>
                <span>2022</span>
                <span>2023</span>
                <span>2024</span>
                <span>2025</span>
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
              Cybercrime is now larger than the global illegal drug economy
              and growing faster than any individual security budget. Capacity
              has to come from trained people, not headcount alone.
            </p>
            <p
              className="mt-3 text-[12px]"
              style={{
                color: "#6B7280",
                fontFamily:
                  "'Riona Sans Light', Helvetica, Arial, sans-serif",
              }}
            >
              Source: Cybersecurity Ventures, 2024 outlook.
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
              The cyber skills gap is global
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
                4.0M
              </span>
              <span
                className="text-[14px] sm:text-[15px]"
                style={{
                  color: "#374151",
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                unfilled cybersecurity roles worldwide
              </span>
            </div>
            <div className="mt-6">
              <SkillGapBars />
            </div>
            <p
              className="mt-5 text-[12px]"
              style={{
                color: "#6B7280",
                fontFamily:
                  "'Riona Sans Light', Helvetica, Arial, sans-serif",
              }}
            >
              Region split estimated. Source: ISC2 Cybersecurity Workforce
              Study, 2024.
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
              Regulatory pressure is converging
            </h3>
            <p
              className="mt-2 text-[15px] leading-[1.55]"
              style={{
                color: "#374151",
                fontFamily:
                  "'Riona Sans Light', Helvetica, Arial, sans-serif",
              }}
            >
              Disclosure windows are shrinking from days to hours, and AI use
              is becoming a documented control point. Trained engineers are
              the difference between an audit finding and an audit defense.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {REGULATIONS.map((reg) => (
                <li
                  key={reg.name}
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
                    {reg.name}
                  </span>
                  <span
                    className="ml-2 text-[11px]"
                    style={{
                      color: "#6B7280",
                      fontFamily:
                        "'Riona Sans Light', Helvetica, Arial, sans-serif",
                    }}
                  >
                    {reg.effective}
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
              Source: ENISA, EU Commission, US SEC, Gartner regulatory tracker
              2024-26.
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
              AI-augmented attacks are climbing
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
                +1,265%
              </span>
              <span
                className="text-[13px] sm:text-[14px]"
                style={{
                  color: "#374151",
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                YoY rise in malicious phishing emails
              </span>
            </div>
            <div className="mt-6 flex items-center gap-5">
              <AiAttackRadar />
              <ul
                className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[12px]"
                style={{
                  color: "#374151",
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                <li>Phishing</li>
                <li>Deepfake</li>
                <li>Code-gen</li>
                <li>Recon</li>
                <li>Vish</li>
                <li>Data-exfil</li>
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
              Source: SlashNext State of Phishing 2024; vector mix indicative.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
