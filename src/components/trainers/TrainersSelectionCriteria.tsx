const CRITERIA = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Real-world subject matter experts",
    desc: "Every Edstellar trainer is an active industry practitioner — not a career academic. They bring frameworks, tools, and case studies from their own professional experience.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Diverse backgrounds & experiences",
    desc: "Our global trainer network spans 180+ countries and covers industries from financial services to manufacturing, healthcare to technology — so every team gets a relevant perspective.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Incentivised to keep content fresh",
    desc: "Through cohort feedback loops, post-training skill assessments, and direct learner reviews, our trainers have every reason to continuously update and sharpen their curricula.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Empowered by data",
    desc: "We share learner-skill-gap analytics with our trainers before every engagement, so they can calibrate content to your team's actual proficiency level and target outcomes.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <path d="M8 11h6" />
        <path d="M11 8v6" />
      </svg>
    ),
    title: "Evaluated for quality and relevance",
    desc: "Each trainer goes through a multi-stage vetting process — credential verification, mock-session assessment, and learner NPS tracking. We retire trainers who fall below our quality bar.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "A global community of native speakers",
    desc: "In addition to English, our trainer network delivers programmes in Arabic, French, German, Spanish, Portuguese, Japanese, Mandarin, and Hindi — in the learner's first language.",
  },
];

export function TrainersSelectionCriteria() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="eds-page-center">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-[family:var(--font-light)] text-[#0c0c0c] text-3xl lg:text-4xl leading-tight mb-4">
            How we select our trainers
          </h2>
          <p className="text-[#666666] text-base leading-relaxed">
            Of the thousands of experts in our network, only a fraction make it
            through to client engagements. Here's what we look for.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CRITERIA.map((c) => (
            <div
              key={c.title}
              className="group flex flex-col gap-4 p-6 rounded-xl border border-[#e4e5e6] hover:border-[#6366F1]/40 hover:shadow-lg hover:shadow-[#6366F1]/5 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#6366F1]/8 text-[#6366F1] group-hover:bg-[#6366F1] group-hover:text-white transition-colors duration-300">
                {c.icon}
              </div>
              <h3 className="font-[family:var(--font-medium)] text-[#0c0c0c] text-base leading-snug">
                {c.title}
              </h3>
              <p className="text-[#666666] text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
