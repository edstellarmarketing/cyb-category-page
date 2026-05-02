import { ArrowRightIcon } from "@/components/icons";

type Step = {
  num: string;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    num: "01",
    title: "Discover",
    description:
      "We meet with your CISO and L&D team to map current cyber capabilities against role-based benchmarks. Output: a prioritised skill-gap report with ROI-aligned objectives.",
  },
  {
    num: "02",
    title: "Design",
    description:
      "We build a custom curriculum mapped to NICE Framework and NIST roles, then shortlist vendor-certified trainers from our 1,500+ network for trial sessions on your real stack.",
  },
  {
    num: "03",
    title: "Deliver",
    description:
      "Instructor-led sessions, virtual, on-site or hybrid, in your language, with hands-on labs, cloud sandboxes, MITRE ATT&CK ranges and CTF environments shipped with every cohort.",
  },
  {
    num: "04",
    title: "Assess",
    description:
      "Pre and post technical assessments, certification pass-rate tracking, lab benchmarks and engineering KPIs. Every cohort closes with a measurable skills delta.",
  },
  {
    num: "05",
    title: "Optimise",
    description:
      "Quarterly retrospectives, refresher modules, certification-renewal tracking and a dedicated Learning Services Manager driving long-term cyber ROI.",
  },
];

export function OurApproach() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mtk-page-center">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <h2
              className="text-[36px] leading-[1.05] sm:text-[42px] lg:text-[47px]"
              style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
            >
              A proven approach trusted by enterprise security leaders
            </h2>
            <p
              className="mt-4 max-w-3xl text-[17px] leading-[1.4] sm:text-[19px]"
              style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
            >
              From discovery to mastery in five steps. A consultative, outcome-led
              methodology that turns cybersecurity training into measurable
              capability inside your organisation.
            </p>
          </div>
          <a
            href="#contact"
            className="group/cta inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-[#6366F1] px-6 py-3 text-[14px] uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#4F46E5] md:self-end"
            style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
          >
            Start with a discovery call
            <ArrowRightIcon
              width={16}
              height={16}
              className="transition-transform group-hover/cta:translate-x-0.5"
            />
          </a>
        </div>

        <div className="relative mt-12">
          {/* Connecting line behind the step circles (desktop only) */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[27px] hidden h-px bg-gradient-to-r from-transparent via-mtk-gray-300 to-transparent lg:block"
          />

          <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {STEPS.map((s) => (
              <li
                key={s.num}
                className="relative flex flex-col rounded-xl border border-mtk-gray-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[#6366F1]/40 hover:shadow-md"
              >
                <span
                  className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#F5F3FF] text-[18px] text-[#6366F1] ring-4 ring-white"
                  style={{
                    fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                    fontWeight: 700,
                  }}
                >
                  {s.num}
                </span>
                <h3
                  className="text-[20px] text-black"
                  style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                >
                  {s.title}
                </h3>
                <p
                  className="mt-3 text-[14px] leading-[1.5] text-mtk-gray-500"
                  style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                >
                  {s.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
