import Link from "next/link";

const BENEFITS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Vetted & Showcased",
    desc: "Your profile is featured to enterprises actively searching for your exact specialty.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2.18" /><line x1="7" y1="2" x2="7" y2="22" /><line x1="17" y1="2" x2="17" y2="22" /><line x1="2" y1="12" x2="22" y2="12" /><line x1="2" y1="7" x2="7" y2="7" /><line x1="2" y1="17" x2="7" y2="17" /><line x1="17" y1="17" x2="22" y2="17" /><line x1="17" y1="7" x2="22" y2="7" />
      </svg>
    ),
    title: "Flexible Engagements",
    desc: "Choose your availability — take on one cohort at a time or build a full schedule.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Competitive Rates",
    desc: "Edstellar trainers are among the highest-earning in the corporate training industry.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Global Reach",
    desc: "Train enterprise teams across 180+ countries — on-site, virtual, or hybrid.",
  },
];

export function TrainersBecomeTrainer() {
  return (
    <section id="become-trainer" className="bg-white py-20 lg:py-28">
      <div className="eds-page-center">
        <div className="rounded-3xl overflow-hidden grid lg:grid-cols-2">
          {/* Left — dark content panel */}
          <div className="bg-[#0c0c0c] p-10 lg:p-14 relative overflow-hidden">
            <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#6366F1]/10 blur-3xl -translate-x-16 translate-y-16" />
            <div className="relative z-10">
              <p className="text-[#6366F1] font-[family:var(--font-medium)] text-xs tracking-widest uppercase mb-4">Trainer Partnerships</p>
              <h2 className="font-[family:var(--font-light)] text-white text-3xl lg:text-4xl leading-tight mb-5">
                Are you a subject-matter expert who loves to teach?
              </h2>
              <p className="text-[#555] text-base leading-relaxed mb-8">
                Join the Edstellar trainer network and connect with enterprise teams that need your exact expertise. We handle logistics, procurement, and LMS — you focus on the training.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="#"
                  className="inline-flex items-center justify-center gap-2 bg-[#6366F1] hover:bg-[#4F46E5] text-white font-[family:var(--font-medium)] text-sm px-6 py-3 rounded-lg transition-colors duration-200">
                  Apply as a Trainer
                </Link>
                <Link href="#"
                  className="inline-flex items-center justify-center gap-2 border border-[#333] hover:border-[#6366F1]/40 text-[#888] hover:text-white font-[family:var(--font-medium)] text-sm px-6 py-3 rounded-lg transition-all duration-200">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Right — benefits list */}
          <div className="bg-[#fbfbfb] border border-[#e4e5e6] lg:border-l-0 p-10 lg:p-14 flex flex-col justify-center">
            <p className="font-[family:var(--font-medium)] text-[#0c0c0c] text-sm mb-7">Why trainers choose Edstellar</p>
            <div className="space-y-6">
              {BENEFITS.map((b) => (
                <div key={b.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#6366F1]/10 text-[#6366F1] flex items-center justify-center">
                    {b.icon}
                  </div>
                  <div>
                    <h4 className="font-[family:var(--font-medium)] text-[#0c0c0c] text-sm mb-0.5">{b.title}</h4>
                    <p className="text-[#666] text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
