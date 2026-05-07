const STATS = [
  { val: "10,000+", label: "Vetted Trainers", sub: "Across 60+ skill domains" },
  { val: "98%",     label: "Client Satisfaction", sub: "Based on post-session NPS" },
  { val: "180+",    label: "Countries",           sub: "In our global trainer network" },
  { val: "72 hrs",  label: "Deployment Speed",   sub: "From brief to trainer on-site" },
];

export function TrainersStatsStrip() {
  return (
    <section className="bg-white border-y border-[#e4e5e6]">
      <div className="eds-page-center">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#e4e5e6]">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center py-10 px-6">
              <div className="font-[family:var(--font-bold)] text-[#6366F1] text-4xl lg:text-5xl leading-none mb-2">
                {s.val}
              </div>
              <div className="font-[family:var(--font-medium)] text-[#0c0c0c] text-sm mb-1">{s.label}</div>
              <div className="text-[#999] text-xs">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
