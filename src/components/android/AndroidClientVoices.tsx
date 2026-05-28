type Voice = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initial: string;
  accent: string;
};

const VOICES: Voice[] = [
  {
    quote:
      "Edstellar ran a closed-cohort upskilling program for our 60-strong Android team and deployed an instructor on-site for three weeks. Sessions were mapped to our real modules, not a public Compose syllabus. Post-training assessments showed a 41% drop in UI defect rate and crash-free rate moved from 98.6% to 99.5% across two releases.",
    name: "Marcus Ainsworth",
    role: "VP of Mobile Engineering",
    company: "Global Bank",
    initial: "M",
    accent: "#1e3a8a",
  },
  {
    quote:
      "Their instructor-led Android security program got our mobile, AppSec and DevOps leads on the same playbook for Play Integrity and MASVS. We cleared our audit backlog inside a single quarter.",
    name: "Priya Suresh",
    role: "Head of Mobile Security",
    company: "Insurance Group",
    initial: "P",
    accent: "#0d9488",
  },
  {
    quote:
      "We reskilled two product squads on Flutter through customized group training. The trial session before commitment sold us; the trainer knew Gradle, our build cache and our CI cold.",
    name: "Hiroshi Tanaka",
    role: "Director of L&D",
    company: "Retail Group",
    initial: "H",
    accent: "#7c3aed",
  },
];

const STATS = [
  { stat: "4.8 / 5", label: "Average learner rating across Android cohorts", source: "Edstellar post-program learner data, 2024" },
  { stat: "94%", label: "Post-training skill improvement rate", source: "Edstellar pre/post assessment outcomes, 2024" },
  { stat: "100+", label: "Enterprise mobile teams trained" },
];

function QuoteIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M9.17 6C5.76 7.07 3 10.13 3 13.83V18h4.83v-4.17H5.5c0-2.5 1.5-4.5 4-5.33L9.17 6zM18.17 6c-3.41 1.07-6.17 4.13-6.17 7.83V18h4.83v-4.17H14.5c0-2.5 1.5-4.5 4-5.33L18.17 6z" />
    </svg>
  );
}

export function AndroidClientVoices() {
  return (
    <section className="bg-[#F8FAFC] py-16 md:py-20">
      <div className="eds-page-center">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <h2
              className="text-[36px] leading-[1.05] sm:text-[42px] lg:text-[48px]"
              style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
            >
              Voice of Mobile Leaders Across Enterprises
            </h2>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {VOICES.map((v) => (
            <figure
              key={v.name}
              className="flex flex-col rounded-2xl bg-white p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <QuoteIcon className="mb-5 text-[#6366F1]/25" />
              <blockquote
                className="flex-1 text-[16px] leading-[1.55] text-black sm:text-[17px]"
                style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
              >
                &ldquo;{v.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3 border-t border-eds-gray-200 pt-5">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[18px] text-white"
                  style={{
                    backgroundColor: v.accent,
                    fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                    fontWeight: 700,
                  }}
                  aria-hidden="true"
                >
                  {v.initial}
                </span>
                <div className="min-w-0">
                  <p
                    className="text-[15px] text-black"
                    style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                  >
                    {v.name}
                  </p>
                  <p
                    className="text-[13px] text-eds-gray-500"
                    style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                  >
                    {v.role} · {v.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 rounded-2xl border border-eds-gray-200 bg-white px-6 py-6 sm:grid-cols-3 lg:px-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p
                className="text-[28px] leading-none text-[#6366F1] sm:text-[32px]"
                style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                {s.stat}
              </p>
              <p
                className="mt-2 text-[12px] uppercase tracking-[0.14em] text-eds-gray-500 sm:text-[13px]"
                style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
              >
                {s.label}
              </p>
              {"source" in s && s.source && (
                <p
                  className="mt-1 text-[11px] text-eds-gray-400"
                  style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                >
                  {s.source}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
