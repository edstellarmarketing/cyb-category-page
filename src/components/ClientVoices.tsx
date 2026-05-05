import { ArrowRightIcon } from "@/components/icons";

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
      "Edstellar ran a closed-cohort upskilling program for our 45-person SOC team and deployed an on-site instructor for two weeks. Sessions were mapped to our actual threat environment, not a generic syllabus. Post-training skill assessments showed a 38% improvement in detection capability across the team.",
    name: "Anita Sharma",
    role: "CISO",
    company: "Tier-1 Indian Bank",
    initial: "A",
    accent: "#1e3a8a",
  },
  {
    quote:
      "We needed to reskill our clinical-IT and security staff on ransomware response and HIPAA controls after a near-miss incident. Edstellar placed a vetted instructor on-site within two weeks, built every lab scenario around our actual stack, and ran the program across three parallel cohorts at two sites.",
    name: "Marcus Reyes",
    role: "VP, Security Operations",
    company: "US Hospital System",
    initial: "M",
    accent: "#0d9488",
  },
  {
    quote:
      "We have run four instructor-led training cohorts with Edstellar across our security and engineering teams. The five-part framework shifted our L&D reporting from attendance tracking to measurable skill deltas and MTTD improvements the board actually acts on.",
    name: "Priya Krishnan",
    role: "Director of L&D",
    company: "Global SaaS Company",
    initial: "P",
    accent: "#7c3aed",
  },
];

const STATS = [
  { stat: "4.8 / 5", label: "Average learner rating across cyber cohorts" },
  { stat: "94%", label: "Post-training skill improvement rate" },
  { stat: "100+", label: "Enterprise security teams trained" },
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

export function ClientVoices() {
  return (
    <section className="bg-[#F5F3FF] py-16 md:py-20">
      <div className="mtk-page-center">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <h2
              className="text-[36px] leading-[1.05] sm:text-[42px] lg:text-[47px]"
              style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
            >
              Voice of Security Leaders Across Enterprises
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
              <figcaption className="mt-7 flex items-center gap-3 border-t border-mtk-gray-200 pt-5">
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
                    className="text-[13px] text-mtk-gray-500"
                    style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                  >
                    {v.role} · {v.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 rounded-2xl border border-mtk-gray-200 bg-white px-6 py-6 sm:grid-cols-3 lg:px-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p
                className="text-[28px] leading-none text-[#6366F1] sm:text-[32px]"
                style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                {s.stat}
              </p>
              <p
                className="mt-2 text-[12px] uppercase tracking-[0.14em] text-mtk-gray-500 sm:text-[13px]"
                style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
