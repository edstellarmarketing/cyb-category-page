const STEPS = [
  {
    num: "01",
    title: "Credential Verification",
    desc: "Every trainer's certifications, employment history, and industry credentials are verified by our vetting team before they enter the network.",
    detail: "Background check · Cert validation · Reference calls",
  },
  {
    num: "02",
    title: "Mock Session Assessment",
    desc: "Shortlisted trainers deliver a live 30-minute mock session to our L&D quality panel — evaluated on content clarity, engagement, and pacing.",
    detail: "Live evaluation · Rubric scoring · Recorded review",
  },
  {
    num: "03",
    title: "Client Match & Briefing",
    desc: "We match your requirement to the right trainer based on skill domain, industry context, language, timezone, and delivery format.",
    detail: "Skills matching · Culture fit · Pre-engagement brief",
  },
  {
    num: "04",
    title: "Ongoing Quality Tracking",
    desc: "Post every session, learner NPS scores and skill-delta assessments are fed back to the trainer. Those who fall below our quality threshold are cycled out.",
    detail: "NPS tracking · Skill delta · Continuous improvement",
  },
];

export function TrainersQualityProcess() {
  return (
    <section className="bg-[#0c0c0c] py-20 lg:py-28 relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "radial-gradient(ellipse at 80% 50%, rgba(99,102,241,0.12) 0%, transparent 55%)" }} />

      <div className="eds-page-center relative z-10">
        <div className="max-w-xl mb-14">
          <p className="text-[#6366F1] font-[family:var(--font-medium)] text-xs tracking-widest uppercase mb-3">Our Quality Promise</p>
          <h2 className="font-[family:var(--font-light)] text-white text-3xl lg:text-4xl leading-tight mb-4">
            How we ensure every trainer meets the Edstellar standard
          </h2>
          <p className="text-[#555] text-base leading-relaxed">
            A four-stage process from vetting to post-delivery tracking — so you never get a trainer who wasn't ready.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#1a1a1a]">
          {STEPS.map((s) => (
            <div key={s.num} className="relative bg-[#0c0c0c] p-8 group hover:bg-[#111] transition-colors duration-200">
              {/* Step number */}
              <div className="flex items-start gap-5 mb-5">
                <span className="font-[family:var(--font-bold)] text-[#222] text-4xl leading-none select-none">{s.num}</span>
                <div className="w-px self-stretch bg-[#222] mt-1" />
                <h3 className="font-[family:var(--font-medium)] text-white text-base pt-1">{s.title}</h3>
              </div>
              <p className="text-[#555] text-sm leading-relaxed mb-4 pl-14">{s.desc}</p>
              <div className="pl-14">
                <div className="inline-flex items-center gap-1.5 text-[#6366F1] text-xs font-[family:var(--font-medium)]">
                  <span className="w-3 h-px bg-[#6366F1]" />
                  {s.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
