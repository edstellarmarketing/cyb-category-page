import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title:
    "Banking and Finance Workforce Training and Capability Building | Edstellar",
  description:
    "Edstellar partners with banks, NBFCs, capital markets, and insurance carriers to build the workforce capability that keeps pace with regulation, digital transformation, and customer expectations.",
  alternates: {
    canonical: "https://edstellar.com/industries/banking-finance",
  },
};

const NAVY = "#1B1D52";
const NAVY_BG_5 = "rgba(27, 29, 82, 0.05)";
const LIME = "#C5E826";
const BORDER = "#E3E6F0";
const BODY = "#374151";
const MUTED = "#6B7280";

type DeliveryMode = {
  title: string;
  detail: string;
  ariaLabel: string;
};

const DELIVERY_MODES: DeliveryMode[] = [
  {
    title: "Instructor-led cohort",
    detail: "Live, expert-led delivery for your BFSI workforce",
    ariaLabel: "Instructor-led BFSI workforce training",
  },
  {
    title: "Live virtual classroom",
    detail: "Real-time sessions across regional and remote teams",
    ariaLabel: "Live virtual BFSI workforce training",
  },
  {
    title: "On-site at your office",
    detail: "Delivered in your facility, anywhere globally",
    ariaLabel: "On-site BFSI workforce training",
  },
  {
    title: "Blended delivery",
    detail: "Instructor-led sessions paired with hands-on labs",
    ariaLabel: "Blended BFSI workforce training",
  },
  {
    title: "Mentor-led 1:1 coaching",
    detail: "Senior-leader and frontline development",
    ariaLabel: "Mentor-led BFSI workforce training",
  },
];

const LANGUAGES = [
  "English",
  "Español",
  "普通話",
  "Deutsch",
  "العربية",
  "Português",
  "हिंदी",
  "Français",
  "日本語",
  "Italiano",
];

type Stat = {
  stat: string;
  label: string;
};

const APPROACH_STATS: Stat[] = [
  {
    stat: "−38%",
    label: "Reduction in annual training time (indicative range)",
  },
  {
    stat: "−44%",
    label: "Reduction in compliance training seat time (indicative range)",
  },
  { stat: "14+", label: "Years of L&D expertise across BFSI" },
  { stat: "60+", label: "Countries served by Edstellar" },
];

const PAIN_POINTS = [
  "Compliance programs that meet requirements but do not change behaviour on the desk.",
  "Technology rollouts (core banking, payments, risk platforms) that launch before teams are ready to use them.",
  "Onboarding inconsistency across branches and regional hubs, slowing time-to-competency.",
  "Relationship managers and advisors who know products but struggle with client-needs conversations.",
  "Limited visibility linking learning investment to revenue, retention, and risk outcomes.",
];

type Service = {
  title: string;
  body: string;
  tags: string[];
  image: string;
  imageAlt: string;
};

const SERVICES: Service[] = [
  {
    title: "Managed Learning Services",
    body: "End-to-end ownership of training delivery, scheduling, vendor governance, and reporting across regions, languages, and lines of business.",
    tags: ["Managed Training", "Vendor Sourcing", "Reporting"],
    image: "/images/cyber/bfsi-card-2.jpg",
    imageAlt:
      "Edstellar instructor leading a banking training session with a BFSI cohort in a corporate learning room",
  },
  {
    title: "Leadership and Inclusion",
    body: "Senior-leader development, branch and regional manager programs, and inclusion programs for distributed BFSI teams.",
    tags: ["Leadership", "Inclusion", "Manager Effectiveness"],
    image: "/images/cyber/hero-governance.jpg",
    imageAlt:
      "Senior banking leaders in a boardroom session during an Edstellar leadership and inclusion program",
  },
  {
    title: "Technical and Risk Performance",
    body: "Core banking, payments, treasury, KYC and AML, risk modelling, IFRS 9 / Basel, and operational-resilience capability.",
    tags: ["Core Banking", "Risk", "AML / KYC"],
    image: "/images/cyber/bfsi-card-3.jpg",
    imageAlt:
      "BFSI compliance and capital-gains documentation reviewed during an Edstellar risk and AML / KYC capability program",
  },
  {
    title: "Sales and Service Performance",
    body: "Relationship management, advisory conversations, branch sales, contact-centre service, and customer-experience programs.",
    tags: ["Advisory", "Branch Sales", "Service"],
    image: "/images/cyber/bfsi-card-1.jpg",
    imageAlt:
      "Customer transacting at a branch service counter, illustrating Edstellar's BFSI sales and service performance program",
  },
  {
    title: "Advisory",
    body: "L&D consulting, workforce strategy, role architecture, and capability frameworks for banks, NBFCs, capital markets, and insurance.",
    tags: ["L&D Consulting", "Workforce Strategy"],
    image: "/images/cyber/bfsi-card-4.jpg",
    imageAlt:
      "Conceptual financial-advisory image of an investor figure perched on a stack of euro coins, representing Edstellar's BFSI advisory practice",
  },
  {
    title: "AI and Innovation",
    body: "AI-readiness, GenAI in banking, model-risk awareness, and responsible-AI training for risk, audit, and frontline teams.",
    tags: ["GenAI", "Model Risk", "AI Readiness"],
    image: "/images/cyber/bfsi-card-6.jpg",
    imageAlt:
      "Capital-markets candlestick chart with moving averages, illustrating Edstellar's AI, GenAI, and model-risk readiness programs for BFSI",
  },
];

type Pillar = {
  title: string;
  body: string;
};

const PILLARS: Pillar[] = [
  {
    title: "Speed",
    body: "Rapid capability deployment that keeps pace with your roadmap, your regulators, and your people, so teams are always ready for what is next.",
  },
  {
    title: "Relevance",
    body: "Programs designed against how the BFSI desk actually works, with real compliance, risk, and customer-conversation requirements built in.",
  },
  {
    title: "Quality",
    body: "Sixty plus years of combined practice delivering proven learning methodology, simplified by an Edstellar platform built for enterprise scale.",
  },
];

const CASE_BULLETS = [
  "75% reduction in review effort against the original audit plan",
  "45% faster delivery, completed in 6 weeks against a 12-week target",
  "70% cost reduction across the program portfolio",
  "18 programs requalified at scale with no reduction in quality or rigor",
];

export default function IndustryBankingFinanceV2Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Section 1 — Full-bleed hero slide */}
        <section
          className="relative overflow-hidden text-white"
          style={{
            backgroundColor: "#0c0c0c",
            minHeight: "calc(100vh - 64px)",
          }}
        >
          <Image
            src="/images/cyber/hero-bfsi-finance.jpg"
            alt="Global banking towers, including HSBC and Citi, illuminated at night across an international financial district"
            fill
            priority
            quality={75}
            sizes="100vw"
            className="object-cover opacity-55"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(12,12,12,0.94) 0%, rgba(12,12,12,0.78) 45%, rgba(12,12,12,0.35) 100%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 hidden h-full w-[3px] md:block"
            style={{
              background:
                "linear-gradient(to bottom, transparent, #C5E826, transparent)",
            }}
          />

          <div className="relative z-10">
            <div className="mtk-page-center pt-10 pb-14 md:pt-14 md:pb-20">
              <nav
                aria-label="Breadcrumb"
                className="mb-6 text-[12px] uppercase tracking-[0.14em] text-white/60 sm:text-[13px]"
                style={{
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <li>
                    <Link
                      href="/"
                      className="transition-colors hover:text-white"
                    >
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">›</li>
                  <li>
                    <Link
                      href="/#industries"
                      className="transition-colors hover:text-white"
                    >
                      Industries
                    </Link>
                  </li>
                  <li aria-hidden="true">›</li>
                  <li
                    aria-current="page"
                    className="text-white"
                    style={{ fontWeight: 600 }}
                  >
                    Banking and Finance
                  </li>
                </ol>
              </nav>

              <div className="max-w-3xl">
                <h1
                  className="text-[34px] leading-[1.05] sm:text-[44px] lg:text-[56px]"
                  style={{
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  Workforce Training and Capability Building for the Banking and Finance Industry
                </h1>
                <p
                  className="mt-5 max-w-2xl text-[15px] leading-[1.6] text-white/80 sm:text-[16.5px]"
                  style={{
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  Edstellar builds workforce capability for banks, NBFCs,
                  capital markets, and insurance carriers, calibrated for
                  regulated, multi-region environments.
                </p>

                <div className="mt-10 md:mt-12">
                  <p
                    className="text-[11px] uppercase tracking-[0.16em] text-white/55"
                    style={{
                      fontFamily:
                        "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    Delivery Modes
                  </p>
                  <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {DELIVERY_MODES.map((mode) => (
                      <li
                        key={mode.title}
                        aria-label={mode.ariaLabel}
                        className="flex items-start gap-3 rounded-xl border px-4 py-3 backdrop-blur-sm"
                        style={{
                          borderColor: "rgba(255,255,255,0.16)",
                          backgroundColor: "rgba(255,255,255,0.06)",
                        }}
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                          style={{ backgroundColor: LIME, color: NAVY }}
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <div>
                          <p
                            className="text-[13px] text-white sm:text-[14px]"
                            style={{
                              fontFamily:
                                "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                              fontWeight: 700,
                            }}
                          >
                            {mode.title}
                          </p>
                          <p
                            className="mt-0.5 text-[12px] leading-[1.4] text-white/65 sm:text-[12.5px]"
                            style={{
                              fontFamily:
                                "'Riona Sans Light', Helvetica, Arial, sans-serif",
                            }}
                          >
                            {mode.detail}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <p
                    className="text-[11px] uppercase tracking-[0.16em] text-white/55"
                    style={{
                      fontFamily:
                        "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    Global delivery
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] sm:text-[13.5px]">
                    <div className="group relative inline-flex items-center gap-1.5">
                      <span
                        aria-hidden="true"
                        className="inline-flex h-5 w-5 items-center justify-center rounded-full"
                        style={{ backgroundColor: LIME, color: NAVY }}
                      >
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M3 12h18" />
                          <path d="M12 3a14 14 0 0 1 0 18" />
                          <path d="M12 3a14 14 0 0 0 0 18" />
                        </svg>
                      </span>
                      <button
                        type="button"
                        aria-describedby="bfsi-v2-languages-tooltip"
                        className="cursor-help border-b border-dotted bg-transparent p-0 text-white underline-offset-4"
                        style={{
                          borderColor: "rgba(255,255,255,0.5)",
                          fontFamily:
                            "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                          fontWeight: 600,
                        }}
                      >
                        10 languages
                      </button>
                      <span
                        id="bfsi-v2-languages-tooltip"
                        role="tooltip"
                        className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 hidden w-max max-w-[260px] -translate-x-1/2 rounded-lg px-3 py-2 text-[12px] leading-[1.45] shadow-lg group-hover:block group-focus-within:block"
                        style={{
                          backgroundColor: NAVY,
                          color: "#FFFFFF",
                          fontFamily:
                            "'Riona Sans Light', Helvetica, Arial, sans-serif",
                        }}
                      >
                        <span
                          className="block text-[10px] uppercase tracking-[0.14em]"
                          style={{ color: LIME, fontWeight: 700 }}
                        >
                          Available in
                        </span>
                        <span className="mt-0.5 block">
                          {LANGUAGES.join(", ")}
                        </span>
                      </span>
                    </div>

                    <span
                      aria-hidden="true"
                      style={{ color: "rgba(255,255,255,0.25)" }}
                    >
                      |
                    </span>

                    <div className="inline-flex items-center gap-1.5">
                      <span
                        aria-hidden="true"
                        className="inline-flex h-5 w-5 items-center justify-center rounded-full"
                        style={{ backgroundColor: LIME, color: NAVY }}
                      >
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 22s7-7 7-12a7 7 0 0 0-14 0c0 5 7 12 7 12z" />
                          <circle cx="12" cy="10" r="2.5" />
                        </svg>
                      </span>
                      <span
                        className="text-white"
                        style={{
                          fontFamily:
                            "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                          fontWeight: 600,
                        }}
                      >
                        Multiple locations · 100+ countries
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[12.5px] uppercase tracking-[0.1em] transition-opacity hover:opacity-90 sm:text-[13.5px]"
                    style={{
                      color: NAVY,
                      fontFamily:
                        "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    Request a Quote
                    <ArrowRightIcon width={16} height={16} />
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-6 py-3 text-[12.5px] uppercase tracking-[0.1em] text-white transition-colors hover:bg-white/10 sm:text-[13.5px]"
                    style={{
                      fontFamily:
                        "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    Book a demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Section 2 — Different Approach */}
        <section
          id="approach"
          className="py-16 md:py-20"
          style={{ backgroundColor: "#F7F8FC" }}
        >
          <div className="mtk-page-center">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-6">
                <h2
                  className="text-[32px] leading-[1.08] sm:text-[40px] lg:text-[46px]"
                  style={{
                    color: NAVY,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  Banking and finance demands a different approach to learning.
                </h2>
                <p
                  className="mt-6 max-w-xl text-[16px] leading-[1.65] sm:text-[17px]"
                  style={{
                    color: BODY,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  BFSI institutions face industry forces that move faster than
                  annual planning cycles. Edstellar partners with banks,
                  NBFCs, and insurance carriers to build capability at the
                  speed of business change, with a Learning Velocity approach
                  calibrated for regulated, multi-region environments. In
                  this sector, that capacity is no longer aspirational, it is
                  a competitive requirement.
                </p>
              </div>
              <div className="lg:col-span-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {APPROACH_STATS.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-2xl border bg-white p-6"
                      style={{ borderColor: BORDER }}
                    >
                      <p
                        className="text-[36px] leading-none sm:text-[40px]"
                        style={{
                          color: NAVY,
                          fontFamily:
                            "'Riona Sans Light', Helvetica, Arial, sans-serif",
                        }}
                      >
                        {s.stat}
                      </p>
                      <p
                        className="mt-3 text-[13px] leading-[1.5] sm:text-[14px]"
                        style={{
                          color: BODY,
                          fontFamily:
                            "'Riona Sans Light', Helvetica, Arial, sans-serif",
                        }}
                      >
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
                <p
                  className="mt-5 text-[12px] leading-[1.6]"
                  style={{
                    color: MUTED,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  Indicative ranges from Edstellar BFSI engagements 2023–2025.
                  Verify with your Edstellar advisor before citing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — What institutions are up against */}
        <section className="bg-white py-16 md:py-20">
          <div className="mtk-page-center">
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <div
                  className="relative overflow-hidden rounded-2xl border shadow-sm"
                  style={{ borderColor: BORDER, aspectRatio: "4 / 5" }}
                >
                  <Image
                    src="/images/cyber/customers-enterprise.jpg"
                    alt="BFSI senior leader in conversation inside a regional banking office during an Edstellar capability program"
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-7">
                <h2
                  className="text-[32px] leading-[1.08] sm:text-[40px] lg:text-[46px]"
                  style={{
                    color: NAVY,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  What banks, NBFCs, and insurers are up against.
                </h2>
                <p
                  className="mt-5 text-[16px] leading-[1.65] sm:text-[17.5px]"
                  style={{
                    color: BODY,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  Senior leaders across the banking and financial industry
                  consistently deal with:
                </p>
                <ul className="mt-6 space-y-4">
                  {PAIN_POINTS.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                        style={{ backgroundColor: LIME, color: NAVY }}
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <p
                        className="text-[14.5px] leading-[1.6] sm:text-[15.5px]"
                        style={{
                          color: BODY,
                          fontFamily:
                            "'Riona Sans Light', Helvetica, Arial, sans-serif",
                        }}
                      >
                        {p}
                      </p>
                    </li>
                  ))}
                </ul>
                <p
                  className="mt-7 text-[14.5px] leading-[1.6] sm:text-[15.5px]"
                  style={{
                    color: BODY,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  These are not training problems. They are performance and
                  readiness challenges that stem from capability gaps.
                  Edstellar treats them that way.
                </p>
                <Link
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13px] uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90 sm:text-[14px]"
                  style={{
                    backgroundColor: NAVY,
                    fontFamily:
                      "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Talk to an expert
                  <ArrowRightIcon width={16} height={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 — How we serve */}
        <section
          className="py-16 md:py-20"
          style={{ backgroundColor: "#F7F8FC" }}
        >
          <div className="mtk-page-center">
            <div className="mx-auto max-w-3xl text-center">
              <h2
                className="text-[32px] leading-[1.08] sm:text-[40px] lg:text-[46px]"
                style={{
                  color: NAVY,
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                How Edstellar serves banks, capital markets, and insurers.
              </h2>
              <p
                className="mt-5 text-[16px] leading-[1.6] sm:text-[18px]"
                style={{
                  color: BODY,
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                Solutions purpose-built for the realities of regulated, complex,
                multi-region BFSI institutions.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => (
                <article
                  key={s.title}
                  className="group flex flex-col overflow-hidden rounded-2xl border bg-white transition-all hover:-translate-y-0.5 hover:shadow-md"
                  style={{ borderColor: BORDER }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div
                      className="absolute left-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full shadow-sm"
                      style={{ backgroundColor: LIME, color: NAVY }}
                      aria-hidden="true"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3
                      className="text-[19px] leading-[1.25] sm:text-[21px]"
                      style={{
                        color: NAVY,
                        fontFamily:
                          "'Riona Sans Regular', Helvetica, Arial, sans-serif",
                      }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className="mt-3 flex-1 text-[14px] leading-[1.6] sm:text-[14.5px]"
                      style={{
                        color: BODY,
                        fontFamily:
                          "'Riona Sans Light', Helvetica, Arial, sans-serif",
                      }}
                    >
                      {s.body}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border px-3 py-1 text-[11px]"
                          style={{
                            borderColor: BORDER,
                            color: MUTED,
                            fontFamily:
                              "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                            fontWeight: 600,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 — Our approach: speed, relevance, quality */}
        <section
          className="py-16 md:py-20"
          style={{ backgroundColor: NAVY }}
        >
          <div className="mtk-page-center">
            <div className="mx-auto max-w-3xl text-center">
              <h2
                className="text-[32px] leading-[1.08] text-white sm:text-[40px] lg:text-[46px]"
                style={{
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                Our approach: speed, relevance, and quality.
              </h2>
              <p
                className="mt-5 text-[16px] leading-[1.6] text-white/85 sm:text-[18px]"
                style={{
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                Rooted in Learning Velocity, Edstellar's approach helps your
                BFSI workforce adapt faster than market conditions change.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {PILLARS.map((p) => (
                <article
                  key={p.title}
                  className="rounded-2xl border p-7"
                  style={{
                    borderColor: "rgba(255,255,255,0.12)",
                    backgroundColor: "rgba(255,255,255,0.05)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: LIME }}
                    />
                    <h3
                      className="text-[20px] sm:text-[22px] text-white"
                      style={{
                        fontFamily:
                          "'Riona Sans Regular', Helvetica, Arial, sans-serif",
                      }}
                    >
                      {p.title}
                    </h3>
                  </div>
                  <p
                    className="mt-4 text-[14px] leading-[1.65] text-white/80 sm:text-[15px]"
                    style={{
                      fontFamily:
                        "'Riona Sans Light', Helvetica, Arial, sans-serif",
                    }}
                  >
                    {p.body}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[13px] uppercase tracking-[0.1em] transition-opacity hover:opacity-90 sm:text-[14px]"
                style={{
                  color: NAVY,
                  fontFamily:
                    "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                  fontWeight: 600,
                }}
              >
                Talk to an expert
                <ArrowRightIcon width={16} height={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 6 — Proven results */}
        <section
          className="py-16 md:py-20"
          style={{ backgroundColor: "#F7F8FC" }}
        >
          <div className="mtk-page-center">
            <h2
              className="max-w-3xl text-[32px] leading-[1.08] sm:text-[40px] lg:text-[46px]"
              style={{
                color: NAVY,
                fontFamily:
                  "'Riona Sans Light', Helvetica, Arial, sans-serif",
              }}
            >
              Proven results in BFSI.
            </h2>

            <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
              <article
                className="rounded-2xl border bg-white p-7 sm:p-9 md:p-10 lg:col-span-7"
                style={{ borderColor: BORDER }}
              >
                <h3
                  className="text-[22px] leading-[1.2] sm:text-[26px] lg:text-[30px]"
                  style={{
                    color: NAVY,
                    fontFamily:
                      "'Riona Sans Regular', Helvetica, Arial, sans-serif",
                  }}
                >
                  An 18-program risk-and-compliance capability audit that should
                  have taken 12 weeks. Edstellar shipped it in 6.
                </h3>
                <p
                  className="mt-5 text-[14.5px] leading-[1.65] sm:text-[15.5px]"
                  style={{
                    color: BODY,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  A global BFSI institution needed to assess how well 18 legacy
                  risk-and-compliance programs reflected a newly introduced
                  governance framework. The review was theoretically possible,
                  but consumed enormous SME capacity, introduced inconsistency
                  across reviewers, and pushed timelines well beyond what
                  stakeholders could accept.
                </p>
                <p
                  className="mt-4 text-[14.5px] leading-[1.65] sm:text-[15.5px]"
                  style={{
                    color: BODY,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  Edstellar used the platform and the practice together to
                  build a digital SME anchored on the institution's own
                  governance content, interpreting the framework conceptually,
                  not just matching keywords. Human SMEs validated early
                  outputs before scaling, ensuring every recommendation was
                  accurate, defensible, and aligned to the institution's
                  precise language and risk taxonomy.
                </p>

                <ul className="mt-6 space-y-3">
                  {CASE_BULLETS.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                        style={{ backgroundColor: LIME, color: NAVY }}
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <p
                        className="text-[14px] leading-[1.55] sm:text-[15px]"
                        style={{
                          color: BODY,
                          fontFamily:
                            "'Riona Sans Light', Helvetica, Arial, sans-serif",
                        }}
                      >
                        {b}
                      </p>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13px] uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90 sm:text-[14px]"
                  style={{
                    backgroundColor: NAVY,
                    fontFamily:
                      "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Read the case study
                  <ArrowRightIcon width={16} height={16} />
                </Link>

                <p
                  className="mt-6 text-[12px] leading-[1.55]"
                  style={{
                    color: MUTED,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  Indicative case-study pattern from Edstellar BFSI
                  engagements. Named cases publish as customers approve
                  disclosure.
                </p>
              </article>

              <div className="lg:col-span-5">
                <div
                  className="relative h-full overflow-hidden rounded-2xl border shadow-sm"
                  style={{
                    borderColor: BORDER,
                    minHeight: "320px",
                  }}
                >
                  <Image
                    src="/images/cyber/course-grc.jpg"
                    alt="BFSI risk-and-compliance auditor reviewing a governance audit checklist during an Edstellar capability program"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7 — Final CTA + form */}
        <section
          id="contact"
          className="relative overflow-hidden py-16 md:py-20"
          style={{ backgroundColor: NAVY }}
        >
          <div className="mtk-page-center">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <p
                  className="text-[12.5px] uppercase tracking-[0.16em] text-white/70"
                  style={{
                    fontFamily:
                      "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                    fontWeight: 700,
                  }}
                >
                  Contact us
                </p>
                <h2
                  className="mt-4 text-[32px] leading-[1.1] text-white sm:text-[40px] lg:text-[46px]"
                  style={{
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  The banking and finance industry isn&apos;t slowing down.
                  Neither should your people.
                </h2>
                <p
                  className="mt-5 max-w-xl text-[15px] leading-[1.65] text-white/85 sm:text-[16.5px]"
                  style={{
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  Edstellar has helped BFSI institutions close capability
                  gaps, accelerate compliance readiness, and prove ROI for more
                  than 60 years of combined practice. Tell us about what looks
                  like ROI for your organisation.
                </p>
              </div>

              <div className="lg:col-span-7">
                <form
                  className="rounded-2xl bg-white p-6 shadow-sm sm:p-8"
                  style={{ borderColor: BORDER }}
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <FormField label="First name" placeholder="Jane" />
                    <FormField label="Last name" placeholder="Doe" />
                    <FormField
                      label="Company email"
                      type="email"
                      placeholder="jane@bank.com"
                    />
                    <FormField label="Company name" placeholder="Acme Bank" />
                    <SelectField
                      label="Country / region"
                      options={[
                        "Select country / region",
                        "United States",
                        "United Kingdom",
                        "European Union",
                        "India",
                        "APAC",
                        "Middle East and Africa",
                        "Latin America",
                      ]}
                    />
                    <SelectField
                      label="Industry"
                      options={[
                        "Select industry",
                        "Retail banking",
                        "Capital markets",
                        "Insurance",
                        "NBFC",
                        "Asset management",
                        "Fintech",
                      ]}
                    />
                    <FormField label="Phone number" placeholder="+1 555 0100" />
                    <FormField label="Job title" placeholder="Head of L&D" />
                    <SelectField
                      label="How can we help you today?"
                      options={[
                        "Select an option",
                        "Workforce capability strategy",
                        "Compliance and risk training",
                        "Digital and AI readiness",
                        "Sales and advisory performance",
                        "Other",
                      ]}
                      fullWidth
                    />
                    <div className="sm:col-span-2">
                      <Label>Message</Label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your BFSI workforce goals..."
                        className="mt-2 w-full rounded-lg border bg-white px-3 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1B1D52]"
                        style={{ borderColor: BORDER, color: BODY }}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        className="flex items-start gap-3 text-[12.5px] leading-[1.55]"
                        style={{
                          color: BODY,
                          fontFamily:
                            "'Riona Sans Light', Helvetica, Arial, sans-serif",
                        }}
                      >
                        <input
                          type="checkbox"
                          className="mt-1 h-4 w-4 rounded border"
                          style={{ borderColor: BORDER, accentColor: NAVY }}
                        />
                        <span>
                          I agree to receive other communications from
                          Edstellar. You can unsubscribe at any time. For more
                          information on how Edstellar handles your data,
                          please review our privacy policy and terms.
                        </span>
                      </label>
                    </div>
                    <div className="sm:col-span-2 flex justify-end">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-[13px] uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90 sm:text-[14px]"
                        style={{
                          backgroundColor: NAVY,
                          fontFamily:
                            "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                          fontWeight: 600,
                        }}
                      >
                        Submit
                        <ArrowRightIcon width={16} height={16} />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

function FormField({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border bg-white px-3 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1B1D52]"
        style={{ borderColor: BORDER, color: BODY }}
      />
    </div>
  );
}

function SelectField({
  label,
  options,
  fullWidth,
}: {
  label: string;
  options: string[];
  fullWidth?: boolean;
}) {
  return (
    <div className={fullWidth ? "sm:col-span-2" : ""}>
      <Label>{label}</Label>
      <select
        defaultValue={options[0]}
        className="mt-2 w-full rounded-lg border bg-white px-3 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1B1D52]"
        style={{ borderColor: BORDER, color: BODY }}
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label
      className="block text-[12.5px]"
      style={{
        color: NAVY,
        fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif",
        fontWeight: 600,
      }}
    >
      {children}
    </label>
  );
}
