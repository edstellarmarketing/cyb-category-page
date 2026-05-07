const QUOTES = [
  {
    quote: "We deployed Edstellar trainer-led programmes across three business units simultaneously. The quality of the facilitators was exceptional — they adapted content to our actual tools and threat environment, not a generic template. Our L&D team finally has measurable skill-delta data to present to the board.",
    name: "Priya Krishnan",
    role: "Director of L&D",
    company: "Global SaaS Company",
    initials: "PK",
    color: "#7c3aed",
  },
  {
    quote: "Edstellar placed a vetted ISO 27001 trainer on-site within 72 hours of our request. The programme was custom-mapped to our existing controls and audit gaps — not a shelf course. Post-training, our team passed their external audit on the first attempt.",
    name: "Tariq Al-Mansouri",
    role: "Chief Information Security Officer",
    company: "Regional Bank, UAE",
    initials: "TM",
    color: "#0369a1",
  },
  {
    quote: "We've run four cohorts with Edstellar across our engineering and security teams. The five-part measurement framework shifted our L&D reporting from attendance tracking to actual MTTD improvements — numbers the board cares about.",
    name: "Soo-Jin Park",
    role: "VP of Engineering",
    company: "APAC Fintech Firm",
    initials: "SP",
    color: "#be185d",
  },
];

export function TrainersTestimonial() {
  return (
    <section className="bg-[#6366F1] py-20 lg:py-28 relative overflow-hidden">
      {/* Texture overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl translate-x-32 -translate-y-32" />

      <div className="eds-page-center relative z-10">
        {/* Section label */}
        <div className="text-center mb-12">
          <p className="text-white/60 font-[family:var(--font-medium)] text-xs tracking-widest uppercase mb-3">What Clients Say</p>
          <h2 className="font-[family:var(--font-light)] text-white text-3xl lg:text-4xl leading-tight">
            Trusted by enterprise L&amp;D leaders worldwide
          </h2>
        </div>

        {/* Quote grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {QUOTES.map((q) => (
            <div key={q.name}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 flex flex-col gap-5">
              {/* Quote mark */}
              <svg aria-hidden width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-white/25 flex-shrink-0">
                <path d="M9.17 6C5.76 7.07 3 10.13 3 13.83V18h4.83v-4.17H5.5c0-2.5 1.5-4.5 4-5.33L9.17 6zM18.17 6c-3.41 1.07-6.17 4.13-6.17 7.83V18h4.83v-4.17H14.5c0-2.5 1.5-4.5 4-5.33L18.17 6z" />
              </svg>

              <blockquote className="text-white/90 text-sm leading-relaxed flex-1">
                "{q.quote}"
              </blockquote>

              <div className="flex items-center gap-3 pt-2 border-t border-white/15">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-[family:var(--font-bold)] flex-shrink-0"
                  style={{ background: q.color }}>
                  {q.initials}
                </div>
                <div>
                  <div className="text-white font-[family:var(--font-medium)] text-sm">{q.name}</div>
                  <div className="text-white/50 text-xs">{q.role} · {q.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
