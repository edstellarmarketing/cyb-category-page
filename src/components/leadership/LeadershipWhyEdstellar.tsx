import Image from "next/image";
import {
  BarChart3,
  ClipboardCheck,
  Globe2,
  GraduationCap,
  Languages,
  MapPinned,
  Medal,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

const FONT_LIGHT = "'Riona Sans Light', Helvetica, Arial, sans-serif";
const FONT_REGULAR = "'Riona Sans Regular', Helvetica, Arial, sans-serif";
const FONT_BOLD = "'Riona Sans Bold', Helvetica, Arial, sans-serif";

const stats = [
  {
    value: "110+",
    label: "Leadership Training Programs",
    text: "Program design, not catalog selection. Built around your competency model, manager tiers and succession goals.",
    icon: ClipboardCheck,
  },
  {
    value: "100+",
    label: "Countries",
    text: "On-site or virtual, wherever you operate, delivered in your language and to your schedule.",
    icon: Globe2,
  },
  {
    value: "1,500+",
    label: "Vetted Facilitators",
    text: "Caliber you can trust. Interview and run a trial session with your shortlisted facilitator before you commit.",
    icon: UsersRound,
  },
];

const capabilities = [
  {
    title: "Program design, not catalog selection",
    text: "Customized leadership training designed around your competency model, manager tiers and roles, not pulled from a generic catalog.",
    icon: ClipboardCheck,
  },
  {
    title: "On-site or virtual, wherever you operate",
    text: "A vetted facilitator, in your office or online, aligned to your leadership development goals. We deliver in-region, in-language.",
    icon: GraduationCap,
  },
  {
    title: "Caliber you can trust",
    text: "Rigorous multi-stage vetting for every facilitator. Interview and run a trial session with your shortlisted facilitator before you commit.",
    icon: Medal,
  },
  {
    title: "Tailored for teams of every size",
    text: "Flexible leadership training packages aligned to your goals, team structure, capability gaps, and enterprise learning requirements.",
    icon: UsersRound,
  },
  {
    title: "Unified coordination across teams",
    text: "Centralized training administration with consistent scheduling, standardized curriculum, and aligned outcomes across cohorts, regions, and time zones.",
    icon: ShieldCheck,
  },
  {
    title: "Single point of coordination",
    text: "Dedicated Learning Services Manager to handle planning, delivery, communication, and post-program support end-to-end.",
    icon: MapPinned,
  },
];

const deliveryStats = [
  { label: "800+ employees in a single rollout", icon: Globe2 },
  { label: "Multi-site parallel cohorts", icon: Languages },
  { label: "1 dedicated Learning Services Manager", icon: ShieldCheck },
  { label: "Post-program delivery report", icon: MapPinned },
];

const logos = [
  { name: "Microsoft", src: "/images/clients/microsoft.webp" },
  { name: "Amazon", src: "/images/clients/amazon.webp" },
  { name: "Intel", src: "/images/clients/intel.webp" },
  { name: "Adobe", src: "/images/clients/adobe.webp" },
  { name: "Tata Chemicals", src: "/images/clients/tata-chemicals.webp" },
  { name: "Johnson & Johnson", src: "/images/clients/johnson-and-johnson.webp" },
  { name: "Godrej", src: "/images/clients/godrej.webp" },
  { name: "Visa", src: "/images/clients/visa.webp" },
  { name: "ABB", src: "/images/clients/abb.webp" },
  { name: "Emerson", src: "/images/clients/emerson.webp" },
  { name: "Aditya Birla Group", src: "/images/clients/aditya-birla.webp" },
  { name: "Autodesk", src: "/images/clients/autodesk.webp" },
  { name: "Cummins", src: "/images/clients/cummins.png" },
  { name: "Kellogg's", src: "/images/clients/kelloggs.webp" },
  { name: "NIIT", src: "/images/clients/niit.webp" },
  { name: "TVS", src: "/images/clients/tvs.webp" },
  { name: "Uber", src: "/images/clients/uber.svg" },
  { name: "Boston Consulting Group", src: "/images/clients/boston-consulting.webp" },
  { name: "KPMG", src: "/images/clients/kpmg.webp" },
  { name: "Sandvik", src: "/images/clients/sandvik.webp" },
  { name: "Taylor & Francis Group", src: "/images/clients/taylor-francis.webp" },
  { name: "Greystar", src: "/images/clients/greystar.webp" },
  { name: "Dayforce", src: "/images/clients/dayforce.webp" },
];

export function LeadershipWhyEdstellar() {
  return (
    <section
      aria-labelledby="why-edstellar-v2-title"
      className="relative overflow-hidden bg-[#F6FBFF] py-10 md:py-16"
      style={{
        backgroundImage: "url('/images/whyedback.png')",
        backgroundSize: "100% auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
      }}
    >

      <div className="eds-page-center relative">
        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
            <div>
              <h2
                id="why-edstellar-v2-title"
                className="max-w-4xl text-[36px] leading-[1.08] text-[#1B1D52] sm:text-[42px] lg:text-[48px]"
                style={{ fontFamily: FONT_LIGHT }}
              >
                Why Edstellar Is Trusted by Enterprises to{" "}
                <span className="text-[#6366F1]">Build Leadership Capability</span>
              </h2>
              <p
                className="mt-5 max-w-4xl text-[16px] leading-[1.6] text-[#374151] sm:text-[17px]"
                style={{ fontFamily: FONT_LIGHT }}
              >
                Edstellar is a leadership corporate training company built for enterprise workforce development.
                We design every manager-development, senior-leader and succession program around your competency
                model, delivered through instructor-led group training led by practitioner facilitators.
                As a leadership training provider in 100+ countries, every engagement ties to outcomes your board
                can act on.
              </p>
              <blockquote
                className="mt-5 max-w-4xl border-l-2 border-[#6366F1] pl-5 text-[16px] leading-[1.6] text-[#1B1D52] sm:text-[17px]"
                style={{ fontFamily: FONT_REGULAR }}
              >
                Most providers sell you a seat in a course. Edstellar builds the program, qualifies the
                facilitator, and delivers a post-program report your CHRO can take to the board: capability delta,
                engagement gains and retention impact.
              </blockquote>
            </div>

            <div className="relative min-h-[260px] overflow-hidden rounded-[18px] bg-[#071735] lg:min-h-0">
              <Image
                src="/images/cyber/coe-team.png"
                alt="Instructor-led leadership training session for enterprise teams"
                fill
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="grid grid-cols-[72px_1fr] gap-5 rounded-[14px] border border-eds-gray-200 bg-white px-5 py-5 shadow-[0_10px_28px_rgba(10,92,206,0.08)]"
                >
                  <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#0759D7] text-white ring-4 ring-[#EAF3FF]">
                    <Icon className="h-9 w-9" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[38px] leading-none text-[#0B54C8]" style={{ fontFamily: FONT_BOLD }}>
                      {item.value}
                    </p>
                    <p className="mt-1 text-[18px] leading-tight text-[#071735]" style={{ fontFamily: FONT_BOLD }}>
                      {item.label}
                    </p>
                    <p className="mt-3 text-[13px] leading-[1.45] text-[#263B63]" style={{ fontFamily: FONT_REGULAR }}>
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="grid min-h-[168px] grid-cols-[58px_1fr] gap-4 rounded-[14px] border border-eds-gray-200 bg-white px-5 py-5"
                >
                  <Icon className="mt-1 h-11 w-11 text-[#0759D7]" strokeWidth={2.4} aria-hidden="true" />
                  <div>
                    <h3 className="text-[18px] leading-tight text-[#073EA2]" style={{ fontFamily: FONT_BOLD }}>
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[13.5px] leading-[1.48] text-[#071735]" style={{ fontFamily: FONT_REGULAR }}>
                      {item.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-5 grid overflow-hidden rounded-[14px] border border-eds-gray-200 bg-white md:grid-cols-[0.85fr_1fr] md:items-stretch">
            <div className="grid grid-cols-[72px_1fr] gap-5 self-center px-6 py-6">
              <BarChart3 className="h-14 w-14 text-[#0759D7]" strokeWidth={2.4} aria-hidden="true" />
              <div>
                <h3 className="text-[20px] text-[#073EA2]" style={{ fontFamily: FONT_BOLD }}>
                  Measure workforce readiness
                </h3>
                <p className="mt-2 max-w-2xl text-[15px] leading-[1.5] text-[#071735]" style={{ fontFamily: FONT_REGULAR }}>
                  Detailed post-program reports on participation, assessments, and capability improvement outcomes.
                </p>
              </div>
            </div>
            <div className="relative aspect-[16/7] w-full md:aspect-auto md:min-h-[260px]">
              <Image
                src="/images/whyed-training.png"
                alt="Instructor-led leadership training session for enterprise teams"
                fill
                sizes="(max-width: 768px) 100vw, 720px"
                className="object-cover"
                style={{ objectPosition: "center 45%" }}
              />
            </div>
          </div>

          <div className="mt-5 grid gap-5 rounded-[14px] bg-[#073A93] px-6 py-6 text-white md:grid-cols-[1fr_1.15fr_1.2fr] md:items-center">
            <div className="flex items-center">
              <h3 className="text-[22px] leading-tight" style={{ fontFamily: FONT_BOLD }}>
                Delivering in-region, in-language, across six continents
              </h3>
            </div>
            <div className="relative min-h-[150px]">
              <Image
                src="/images/Global-Location.png"
                alt="Countries where Edstellar has delivered leadership training"
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-contain brightness-0 invert"
              />
            </div>
            <div className="grid grid-cols-2 divide-x divide-y divide-white/25 overflow-hidden rounded-[10px] border border-white/20 md:grid-cols-4 md:divide-y-0">
              {deliveryStats.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex flex-col items-center justify-center gap-2 px-3 py-4 text-center">
                    <Icon className="h-8 w-8" aria-hidden="true" />
                    <p className="text-[13px] leading-tight" style={{ fontFamily: FONT_BOLD }}>
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 text-center">
            <h3 className="inline-flex items-center gap-4 text-[24px] text-[#073EA2]" style={{ fontFamily: FONT_BOLD }}>
              <span className="hidden h-px w-20 bg-eds-gray-200 sm:block" />
              Trusted by leading enterprises worldwide
              <span className="hidden h-px w-20 bg-eds-gray-200 sm:block" />
            </h3>
            <div className="mt-4 grid grid-cols-2 overflow-hidden rounded-[14px] border border-eds-gray-200 sm:grid-cols-4 lg:grid-cols-8">
              {logos.map((logo) => (
                <div key={logo.name} className="flex h-20 items-center justify-center border-b border-r border-eds-gray-200 bg-white px-4">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={118}
                    height={42}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center rounded-[10px] bg-[#1B1D52] px-8 py-3.5 text-[18px] text-white shadow-[0_10px_24px_rgba(27,29,82,0.25)] transition hover:opacity-90"
              style={{ fontFamily: FONT_BOLD }}
            >
              Partner with Edstellar
              <span className="ml-3" aria-hidden="true">
                -&gt;
              </span>
            </a>
          </div>
      </div>
    </section>
  );
}
