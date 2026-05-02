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
      "Edstellar's CISSP bootcamp got our SOC team CISSP-ready in 12 weeks. Pre and post scores improved by 38%, and 9 of 10 trainees passed first try.",
    name: "Anita Sharma",
    role: "CISO",
    company: "Tier-1 Indian Bank",
    initial: "A",
    accent: "#1e3a8a",
  },
  {
    quote:
      "Closed-batch CEH v13 training tailored to our healthcare environment. The trainer brought live MITRE ATT&CK simulations matched to our Epic and Cerner stack.",
    name: "Marcus Reyes",
    role: "VP, Security Operations",
    company: "US Hospital System",
    initial: "M",
    accent: "#0d9488",
  },
  {
    quote:
      "The five-part framework changed how we measure training ROI. We went from attendance reporting to MTTD-driven security KPIs the board actually reads.",
    name: "Priya Krishnan",
    role: "Director of L&D",
    company: "Global SaaS Company",
    initial: "P",
    accent: "#7c3aed",
  },
];

const STATS = [
  { stat: "4.8 / 5", label: "Average learner rating across cyber cohorts" },
  { stat: "94%", label: "Certification first-attempt pass rate" },
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
              Proven impact from enterprise cybersecurity leaders
            </h2>
            <p
              className="mt-4 max-w-3xl text-[17px] leading-[1.4] sm:text-[19px]"
              style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
            >
              CISOs, heads of security and L&amp;D leaders on what changed after
              partnering with Edstellar for cybersecurity training.
            </p>
          </div>
          <a
            href="#contact"
            className="group/cta inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-black px-6 py-3 text-[14px] uppercase tracking-[0.12em] text-black transition-colors hover:border-[#6366F1] hover:text-[#6366F1] md:self-end"
            style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
          >
            Become the next case study
            <ArrowRightIcon
              width={16}
              height={16}
              className="transition-transform group-hover/cta:translate-x-0.5"
            />
          </a>
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
