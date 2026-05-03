import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ArrowRightIcon } from "@/components/icons";
import { BankingFinanceCoursesCarousel } from "@/components/industry/BankingFinanceCoursesCarousel";
import { BankingFinanceTestimonialsCarousel } from "@/components/industry/BankingFinanceTestimonialsCarousel";
import { BankingFinanceCapabilityPath } from "@/components/industry/BankingFinanceCapabilityPath";

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
    stat: "38%",
    label: "Faster onboarding for frontline staff",
  },
  {
    stat: "44%",
    label: "Improvement in customer-handling efficiency",
  },
  { stat: "14+", label: "Years of BFSI training experience" },
  { stat: "60+", label: "Enterprise clients standardised on Edstellar" },
];

type DifferentApproachPoint = {
  title: string;
  body: string;
};

const DIFFERENT_APPROACH_POINTS: DifferentApproachPoint[] = [
  {
    title: "Distributed branch workforce",
    body: "Thousands of frontline staff across regional offices need consistent capability, not one-off training events.",
  },
  {
    title: "High customer-interaction roles",
    body: "Relationship managers, advisors, and service teams convert capability into trust on every conversation.",
  },
  {
    title: "Constant product and regulatory evolution",
    body: "New products, frameworks, and compliance obligations land faster than annual training cycles can absorb.",
  },
  {
    title: "Service quality across geographies",
    body: "Brand promise depends on the same standard of delivery in every branch, language, and channel.",
  },
];

type PainPoint = {
  challenge: string;
  impact: string;
};

const PAIN_POINTS: PainPoint[] = [
  {
    challenge: "Complex product portfolios",
    impact: "Harder onboarding, slower time-to-competency",
  },
  {
    challenge: "Customer expectations rising",
    impact: "Service gaps, lower NPS, churn risk",
  },
  {
    challenge: "Workforce inconsistency across branches",
    impact: "Brand dilution, uneven customer experience",
  },
  {
    challenge: "Compliance pace outstrips training cycles",
    impact: "Audit-readiness gaps and regulatory exposure",
  },
  {
    challenge: "Limited visibility on training ROI",
    impact: "Unclear value, underfunded learning budgets",
  },
];

type Service = {
  title: string;
  body: string;
  outcome: string;
  tags: string[];
  image: string;
  imageAlt: string;
};

const SERVICES: Service[] = [
  {
    title: "Customer Experience and Relationship Management",
    body: "Build relationship managers, advisors, and service teams who turn every conversation into customer trust, with instructor-led communication, empathy, and complaint-resolution programs.",
    outcome:
      "Lift NPS, CSAT, and customer retention across branches and contact centres.",
    tags: ["Advisory Conversations", "Service Excellence", "NPS"],
    image: "/images/cyber/bfsi-card-1.jpg",
    imageAlt:
      "BFSI relationship manager engaging a customer at a branch service counter during an Edstellar capability program",
  },
  {
    title: "Sales and Revenue Enablement",
    body: "Cross-sell, upsell, and product-selling capability for branch and contact-centre teams, anchored on real BFSI scenarios and instructor-led role-plays.",
    outcome:
      "Improve cross-sell, upsell, and conversion per relationship manager.",
    tags: ["Cross-sell", "Branch Sales", "Negotiation"],
    image: "/images/cyber/bfsi-card-6.jpg",
    imageAlt:
      "Capital-markets candlestick chart, illustrating Edstellar's BFSI sales and revenue enablement program",
  },
  {
    title: "Leadership and Branch Management",
    body: "Senior-leader, regional, and branch-manager development programs that lift P&L, operations, and people leadership across distributed BFSI teams.",
    outcome:
      "Strengthen branch P&L, leader retention, and customer-experience scores.",
    tags: ["Leadership", "Branch Ops", "P&L"],
    image: "/images/cyber/hero-governance.jpg",
    imageAlt:
      "Senior banking leaders in a boardroom session during an Edstellar leadership and branch-management program",
  },
  {
    title: "Workforce Productivity and Operations",
    body: "Frontline productivity, contact-centre service, AML and KYC, operational resilience, and process-excellence programs delivered as instructor-led cohorts at scale.",
    outcome:
      "Reduce operational errors and accelerate frontline productivity at scale.",
    tags: ["Productivity", "Operations", "AML / KYC"],
    image: "/images/cyber/bfsi-card-3.jpg",
    imageAlt:
      "BFSI compliance and operations documentation reviewed during an Edstellar workforce productivity and operations program",
  },
  {
    title: "Digital and Functional Skills",
    body: "Core banking, payments, risk modelling, GenAI in banking, and digital-tooling capability for risk, audit, and frontline teams entering the modern BFSI stack.",
    outcome:
      "Accelerate digital and AI adoption across core banking, risk, and ops teams.",
    tags: ["Core Banking", "GenAI", "Risk"],
    image: "/images/cyber/bfsi-card-4.jpg",
    imageAlt:
      "Conceptual investor figurine on a stack of euro coins, illustrating Edstellar's digital and functional skills program for BFSI",
  },
];

type RoleIconKey = "handshake" | "building" | "headset" | "trending";

type RoleJourney = {
  role: string;
  goals: string;
  modules: string[];
  outcomes: string[];
  href: string;
  iconKey: RoleIconKey;
};

const ROLE_JOURNEYS: RoleJourney[] = [
  {
    role: "Relationship Managers",
    goals: "Product knowledge, advisory conversations, communication",
    modules: [
      "Client-needs discovery and advisory framing",
      "Product knowledge across deposits, lending, wealth, insurance",
      "Objection handling and consultative communication",
      "Compliance and suitability obligations on the desk",
    ],
    outcomes: [
      "Stronger product fluency in 4 to 6 weeks",
      "Higher conversion on advisory conversations",
      "Tighter compliance and suitability discipline",
    ],
    href: "/#learning-paths",
    iconKey: "handshake",
  },
  {
    role: "Branch Managers",
    goals: "Leadership, operations, P&L, customer experience",
    modules: [
      "Branch P&L and operating-model fundamentals",
      "People leadership and performance management",
      "Customer-experience standards and escalation protocols",
      "Risk, compliance, and audit-readiness for the branch",
    ],
    outcomes: [
      "Lifted branch P&L performance",
      "Tighter risk and audit-readiness",
      "Higher engagement and retention on the branch team",
    ],
    href: "/#learning-paths",
    iconKey: "building",
  },
  {
    role: "Customer Service Teams",
    goals: "Service excellence, contact-centre, complaint handling",
    modules: [
      "Service-quality standards and tone-of-voice",
      "Contact-centre process and CRM mastery",
      "Complaint handling and recovery conversations",
      "AML / KYC and fraud-awareness for service teams",
    ],
    outcomes: [
      "Higher NPS and CSAT, lower churn",
      "Faster complaint resolution and recovery",
      "Lower error rates on KYC and service tasks",
    ],
    href: "/#learning-paths",
    iconKey: "headset",
  },
  {
    role: "Sales Teams",
    goals: "Product selling, cross-sell, negotiation, advisory",
    modules: [
      "Solution selling for BFSI products and segments",
      "Cross-sell and upsell playbooks tied to customer lifecycle",
      "Negotiation and value articulation against competitor offers",
      "Pipeline discipline and CRM hygiene",
    ],
    outcomes: [
      "More cross-sell and upsell per RM",
      "Stronger negotiation and value articulation",
      "Cleaner CRM hygiene and pipeline forecasting",
    ],
    href: "/#learning-paths",
    iconKey: "trending",
  },
];

function RoleIcon({ iconKey }: { iconKey: RoleIconKey }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (iconKey) {
    case "handshake":
      return (
        <svg {...common}>
          <path d="M3 12h3l3-3 4 4-3 3" />
          <path d="M14 9l4 4 3-3" />
          <path d="M9 13l3-3 3 3 3 3" />
        </svg>
      );
    case "building":
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" rx="1.5" />
          <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
          <path d="M10 21v-3h4v3" />
        </svg>
      );
    case "headset":
      return (
        <svg {...common}>
          <path d="M4 13a8 8 0 0 1 16 0" />
          <path d="M4 13v3a2 2 0 0 0 2 2h1v-5H6a2 2 0 0 0-2 2z" />
          <path d="M20 13v3a2 2 0 0 1-2 2h-1v-5h1a2 2 0 0 1 2 2z" />
          <path d="M14 19a2 2 0 0 1-2 2h-1" />
        </svg>
      );
    case "trending":
      return (
        <svg {...common}>
          <path d="M3 17l6-6 4 4 8-8" />
          <path d="M14 7h7v7" />
        </svg>
      );
    default:
      return null;
  }
}

type ScalePillar = {
  title: string;
  body: string;
};

const SCALE_PILLARS: ScalePillar[] = [
  {
    title: "Multi-location rollout",
    body: "Single program delivered consistently across 100+ countries and across regional hubs, branches, and contact centres.",
  },
  {
    title: "Standardised instructor-led delivery",
    body: "Every cohort learns from vendor-certified BFSI practitioners, calibrated to the same role-based competency standards.",
  },
  {
    title: "Blended learning",
    body: "Live instructor-led sessions, hands-on labs, and on-the-job reinforcement that protect knowledge transfer to the desk.",
  },
  {
    title: "Flexible delivery formats",
    body: "On-site at your branches, live virtual across regions, or hybrid cohorts coordinated by a single Edstellar program manager.",
  },
  {
    title: "10 languages",
    body: "Programs delivered in English, Español, 普通話, Deutsch, العربية, Português, हिंदी, Français, 日本語, and Italiano.",
  },
  {
    title: "Customised to your stack",
    body: "Curriculum tailored to your core banking system, products, SOPs, and regulatory regime, not a one-size-fits-all catalogue.",
  },
];

type CaseStudyMini = {
  badge: string;
  title: string;
  outcome: string;
};

const CASE_STUDIES_MINI: CaseStudyMini[] = [
  {
    badge: "Top-5 retail bank",
    title: "Frontline onboarding cut from 12 to 7 weeks",
    outcome: "1,200+ relationship managers onboarded across 8 regions on a unified instructor-led journey.",
  },
  {
    badge: "Global insurer",
    title: "Service-NPS lifted by 18 points in two quarters",
    outcome: "Branch-service teams completed a customer-experience cohort with weekly coaching and call audits.",
  },
  {
    badge: "Capital markets group",
    title: "AML / KYC capability standardised across 6 markets",
    outcome: "350+ ops analysts certified on a single role-based AML / KYC curriculum, audit-ready in 9 weeks.",
  },
];

const CASE_BULLETS = [
  "Cut compliance review effort by 75% against the original audit plan",
  "Delivered in 6 weeks against the 12-week target, 45% faster turnaround",
  "Reduced program-portfolio cost by 70% across the rollout",
  "Increased frontline productivity across compliance teams post-program",
  "Reduced onboarding time for new analysts on all 18 programs",
  "Improved internal customer-satisfaction scores on compliance responses",
];

type BusinessOutcome = {
  title: string;
  body: string;
};

const BUSINESS_OUTCOMES: BusinessOutcome[] = [
  {
    title: "Higher customer satisfaction",
    body: "Instructor-led service-excellence programs lift NPS, CSAT, and retention across branches and contact centres.",
  },
  {
    title: "More cross-sell and upsell",
    body: "Role-based selling journeys equip RMs and branch teams to convert every conversation into measurable revenue.",
  },
  {
    title: "Faster frontline onboarding",
    body: "Standardised curriculum cuts time-to-productivity for new hires across regions and lines of business.",
  },
  {
    title: "Workforce consistency at scale",
    body: "One capability standard, delivered the same way in every language, branch, and geography.",
  },
  {
    title: "Stronger leadership pipeline",
    body: "Senior-leader, regional, and branch-manager journeys build the bench for the next ten years of growth.",
  },
  {
    title: "Faster digital adoption",
    body: "Functional-skill cohorts on core banking, payments, and GenAI accelerate the move to a modern BFSI stack.",
  },
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
            <div className="mtk-page-center pt-8 pb-10 md:pt-10 md:pb-12">
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
                  className="text-[28px] leading-[1.08] sm:text-[36px] lg:text-[44px]"
                  style={{
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  Build High-Performing BFSI Workforces at Scale with Role-Based Capability Development
                </h1>
                <p
                  className="mt-4 max-w-2xl text-[14px] leading-[1.55] text-white/80 sm:text-[15.5px]"
                  style={{
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  Edstellar partners with banks, NBFCs, capital markets, and
                  insurance carriers to standardise skills, accelerate
                  frontline productivity, and lift customer experience through
                  instructor-led, role-based capability programs in 10
                  languages across 100+ countries.
                </p>

                <div className="mt-9 md:mt-11">
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
                        className="flex items-start gap-3 rounded-xl border px-3.5 py-2.5 backdrop-blur-sm"
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

                <div className="mt-4">
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
                  <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] sm:text-[13.5px]">
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

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[12px] uppercase tracking-[0.1em] transition-opacity hover:opacity-90 sm:text-[13px]"
                    style={{
                      color: NAVY,
                      fontFamily:
                        "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    Request a Quote
                    <ArrowRightIcon width={14} height={14} />
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-5 py-2.5 text-[12px] uppercase tracking-[0.1em] text-white transition-colors hover:bg-white/10 sm:text-[13px]"
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
                  Why BFSI Workforce Development Needs a Different Approach.
                </h2>
                <p
                  className="mt-6 max-w-xl text-[16px] leading-[1.65] sm:text-[17px]"
                  style={{
                    color: BODY,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  Banking, NBFCs, and insurance carriers run distributed,
                  customer-facing, regulated workforces. Generic content
                  libraries do not move that needle. Edstellar's instructor-led,
                  role-based capability model is purpose-built for the way
                  BFSI organisations actually scale.
                </p>
                <ul className="mt-6 space-y-4">
                  {DIFFERENT_APPROACH_POINTS.map((p) => (
                    <li key={p.title} className="flex items-start gap-3">
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
                      <div>
                        <p
                          className="text-[15px] sm:text-[16px]"
                          style={{
                            color: NAVY,
                            fontFamily:
                              "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                            fontWeight: 700,
                          }}
                        >
                          {p.title}
                        </p>
                        <p
                          className="mt-1 text-[13.5px] leading-[1.55] sm:text-[14.5px]"
                          style={{
                            color: BODY,
                            fontFamily:
                              "'Riona Sans Light', Helvetica, Arial, sans-serif",
                          }}
                        >
                          {p.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-6">
                <p
                  className="mb-4 text-[11px] uppercase tracking-[0.16em]"
                  style={{
                    color: MUTED,
                    fontFamily:
                      "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                    fontWeight: 700,
                  }}
                >
                  BFSI workforce capability, measured
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {APPROACH_STATS.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-2xl border bg-white p-6"
                      style={{ borderColor: BORDER }}
                    >
                      <p
                        className="text-[36px] leading-none sm:text-[42px]"
                        style={{
                          color: NAVY,
                          fontFamily:
                            "'Riona Sans Light', Helvetica, Arial, sans-serif",
                        }}
                      >
                        {s.stat}
                      </p>
                      <p
                        className="mt-3 text-[13.5px] leading-[1.45] sm:text-[14.5px]"
                        style={{
                          color: BODY,
                          fontFamily:
                            "'Riona Sans Regular', Helvetica, Arial, sans-serif",
                        }}
                      >
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
                <p
                  className="mt-5 text-[12.5px] leading-[1.6]"
                  style={{
                    color: MUTED,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  Instructor-led delivery, role-based curriculum, multi-location
                  rollout. Indicative ranges from Edstellar BFSI engagements
                  2023&ndash;2025. Verify with your Edstellar advisor before
                  citing.
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
                <p
                  className="text-[11px] uppercase tracking-[0.18em]"
                  style={{
                    color: MUTED,
                    fontFamily:
                      "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                    fontWeight: 700,
                  }}
                >
                  Key Workforce Challenges
                </p>
                <h2
                  className="mt-3 text-[32px] leading-[1.08] sm:text-[40px] lg:text-[46px]"
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
                  CHROs, L&amp;D heads, and business leaders consistently see
                  the same five gaps when capability does not move at the speed
                  of the business.
                </p>
                <ul className="mt-6 space-y-3">
                  {PAIN_POINTS.map((p) => (
                    <li
                      key={p.challenge}
                      className="rounded-xl border bg-white p-4 sm:p-5"
                      style={{ borderColor: BORDER }}
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                        <p
                          className="text-[14.5px] sm:text-[15.5px]"
                          style={{
                            color: NAVY,
                            fontFamily:
                              "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                            fontWeight: 700,
                          }}
                        >
                          {p.challenge}
                        </p>
                        <span
                          aria-hidden="true"
                          className="hidden text-[14px] sm:inline"
                          style={{ color: MUTED }}
                        >
                          →
                        </span>
                        <p
                          className="text-[13.5px] leading-[1.5] sm:text-[14.5px]"
                          style={{
                            color: BODY,
                            fontFamily:
                              "'Riona Sans Light', Helvetica, Arial, sans-serif",
                          }}
                        >
                          {p.impact}
                        </p>
                      </div>
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
                  readiness gaps Edstellar closes with instructor-led,
                  role-based capability development at scale.
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

        {/* Section 4 — Capability Areas */}
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
                Capability Areas We Build for BFSI Organizations.
              </h2>
              <p
                className="mt-5 text-[16px] leading-[1.6] sm:text-[18px]"
                style={{
                  color: BODY,
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                Five capability clusters delivered as instructor-led,
                role-based programs and customised to your products,
                stack, and SOPs.
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

                    <div
                      className="mt-5 flex items-start gap-3 rounded-xl border-l-4 px-4 py-3"
                      style={{
                        borderColor: LIME,
                        backgroundColor: NAVY_BG_5,
                      }}
                    >
                      <span
                        aria-hidden="true"
                        className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                        style={{ backgroundColor: LIME, color: NAVY }}
                      >
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 17l6-6 4 4 8-8" />
                          <path d="M14 7h7v7" />
                        </svg>
                      </span>
                      <div>
                        <p
                          className="text-[10.5px] uppercase tracking-[0.16em]"
                          style={{
                            color: NAVY,
                            fontFamily:
                              "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                            fontWeight: 700,
                          }}
                        >
                          Business outcome
                        </p>
                        <p
                          className="mt-1 text-[13px] leading-[1.5] sm:text-[13.5px]"
                          style={{
                            color: NAVY,
                            fontFamily:
                              "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                            fontWeight: 600,
                          }}
                        >
                          {s.outcome}
                        </p>
                      </div>
                    </div>

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

        {/* Section 5 — Role-Based Learning Journeys */}
        <section className="bg-white py-16 md:py-20">
          <div className="mtk-page-center">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-8">
              <div className="max-w-3xl">
                <h2
                  className="text-[32px] leading-[1.08] sm:text-[40px] lg:text-[46px]"
                  style={{
                    color: NAVY,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  Role-Based Learning Journeys.
                </h2>
                <p
                  className="mt-5 text-[16px] leading-[1.6] sm:text-[18px]"
                  style={{
                    color: BODY,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  How distinct BFSI roles progress through Edstellar&apos;s
                  instructor-led, customised capability programs, with each
                  journey calibrated to the role&apos;s daily decisions, KPIs,
                  and customer interactions.
                </p>
              </div>
              <Link
                href="/#learning-paths"
                className="group/cta inline-flex shrink-0 items-center gap-2 self-start rounded-full px-5 py-3 text-[12.5px] uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90 sm:text-[13px] md:self-end"
                style={{
                  backgroundColor: NAVY,
                  fontFamily:
                    "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                  fontWeight: 600,
                }}
              >
                View all learning paths
                <ArrowRightIcon
                  width={14}
                  height={14}
                  className="transition-transform group-hover/cta:translate-x-0.5"
                />
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
              {ROLE_JOURNEYS.map((r) => (
                <article
                  key={r.role}
                  className="flex flex-col rounded-2xl border bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
                  style={{ borderColor: BORDER }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full"
                      style={{ backgroundColor: LIME, color: NAVY }}
                    >
                      <RoleIcon iconKey={r.iconKey} />
                    </span>
                    <h3
                      className="text-[18px] sm:text-[19px]"
                      style={{
                        color: NAVY,
                        fontFamily:
                          "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      {r.role}
                    </h3>
                  </div>
                  <p
                    className="mt-3 text-[13px] leading-[1.5] sm:text-[13.5px]"
                    style={{
                      color: MUTED,
                      fontFamily:
                        "'Riona Sans Light', Helvetica, Arial, sans-serif",
                    }}
                  >
                    {r.goals}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {r.modules.map((m) => (
                      <li key={m} className="flex items-start gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: NAVY }}
                        />
                        <p
                          className="text-[13px] leading-[1.5] sm:text-[13.5px]"
                          style={{
                            color: BODY,
                            fontFamily:
                              "'Riona Sans Light', Helvetica, Arial, sans-serif",
                          }}
                        >
                          {m}
                        </p>
                      </li>
                    ))}
                  </ul>

                  <div
                    className="mt-5 rounded-xl p-4"
                    style={{ backgroundColor: NAVY_BG_5 }}
                  >
                    <p
                      className="text-[10.5px] uppercase tracking-[0.16em]"
                      style={{
                        color: NAVY,
                        fontFamily:
                          "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      Typical outcomes
                    </p>
                    <ul className="mt-2.5 space-y-2">
                      {r.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-2">
                          <span
                            aria-hidden="true"
                            className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                            style={{ backgroundColor: LIME, color: NAVY }}
                          >
                            <svg
                              width="9"
                              height="9"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <p
                            className="text-[12.5px] leading-[1.45] sm:text-[13px]"
                            style={{
                              color: BODY,
                              fontFamily:
                                "'Riona Sans Regular', Helvetica, Arial, sans-serif",
                            }}
                          >
                            {o}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={r.href}
                    aria-label={`View Learning Path for ${r.role}`}
                    className="group/cta mt-auto inline-flex items-center gap-1.5 self-start pt-5 text-[12.5px] uppercase tracking-[0.1em] transition-colors"
                    style={{
                      color: NAVY,
                      fontFamily:
                        "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    View Learning Path
                    <ArrowRightIcon
                      width={14}
                      height={14}
                      className="transition-transform group-hover/cta:translate-x-0.5"
                    />
                  </Link>
                </article>
              ))}
            </div>

            <BankingFinanceCoursesCarousel />
          </div>
        </section>

        {/* Section 6 — Training Delivery at Scale */}
        <section
          className="py-16 md:py-20"
          style={{ backgroundColor: "#F7F8FC" }}
        >
          <div className="mtk-page-center">
            <div className="max-w-3xl">
              <h2
                className="text-[32px] leading-[1.08] sm:text-[40px] lg:text-[46px]"
                style={{
                  color: NAVY,
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                Scalable Training Delivery Across Distributed BFSI Teams
              </h2>
              <p
                className="mt-5 text-[16px] leading-[1.6] sm:text-[18px]"
                style={{
                  color: BODY,
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                Banking is branch-heavy, multi-region, and multi-language.
                Edstellar runs instructor-led, customised programs across
                every location, in every language, to a single capability
                standard.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {SCALE_PILLARS.map((p) => (
                <article
                  key={p.title}
                  className="rounded-2xl border bg-white p-6"
                  style={{ borderColor: BORDER }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full"
                      style={{ backgroundColor: LIME, color: NAVY }}
                    >
                      <svg
                        width="14"
                        height="14"
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
                    <h3
                      className="text-[16px] sm:text-[17px]"
                      style={{
                        color: NAVY,
                        fontFamily:
                          "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      {p.title}
                    </h3>
                  </div>
                  <p
                    className="mt-3 text-[13.5px] leading-[1.55] sm:text-[14.5px]"
                    style={{
                      color: BODY,
                      fontFamily:
                        "'Riona Sans Light', Helvetica, Arial, sans-serif",
                    }}
                  >
                    {p.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7 — From Fragmented Skills to High-Performing BFSI Workforces */}
        <BankingFinanceCapabilityPath />

        {/* Section 8 — Proven results: featured case + key outcomes + mini cards */}
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
              Proven Results in BFSI.
            </h2>
            <p
              className="mt-5 max-w-3xl text-[16px] leading-[1.6] sm:text-[17px]"
              style={{
                color: BODY,
                fontFamily:
                  "'Riona Sans Light', Helvetica, Arial, sans-serif",
              }}
            >
              Indicative case-study patterns drawn from Edstellar engagements
              with global banks, NBFCs, capital markets, and insurance
              carriers. Named cases publish as customers approve disclosure.
            </p>

            <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
              <article
                className="rounded-2xl border bg-white p-7 sm:p-9 md:p-10 lg:col-span-7"
                style={{ borderColor: BORDER }}
              >
                <p
                  className="text-[11px] uppercase tracking-[0.16em]"
                  style={{
                    color: MUTED,
                    fontFamily:
                      "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                    fontWeight: 700,
                  }}
                >
                  Featured case study
                </p>
                <h3
                  className="mt-3 text-[22px] leading-[1.2] sm:text-[26px] lg:text-[30px]"
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
                  governance framework. Edstellar used the platform and the
                  practice together to build a digital SME anchored on the
                  institution&apos;s own governance content, interpreting the
                  framework conceptually, not just matching keywords. Human
                  SMEs validated early outputs before scaling.
                </p>

                <div
                  className="mt-6 rounded-xl p-5 sm:p-6"
                  style={{ backgroundColor: NAVY_BG_5 }}
                >
                  <p
                    className="text-[11px] uppercase tracking-[0.16em]"
                    style={{
                      color: NAVY,
                      fontFamily:
                        "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    Key outcomes
                  </p>
                  <ul className="mt-4 space-y-3">
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
                              "'Riona Sans Regular', Helvetica, Arial, sans-serif",
                          }}
                        >
                          {b}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

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
              </article>

              <div className="grid gap-6 lg:col-span-5">
                {CASE_STUDIES_MINI.map((c) => (
                  <article
                    key={c.title}
                    className="rounded-2xl border bg-white p-6"
                    style={{ borderColor: BORDER }}
                  >
                    <span
                      className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.12em]"
                      style={{
                        backgroundColor: LIME,
                        color: NAVY,
                        fontFamily:
                          "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      {c.badge}
                    </span>
                    <h3
                      className="mt-3 text-[17px] leading-[1.25] sm:text-[18px]"
                      style={{
                        color: NAVY,
                        fontFamily:
                          "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      {c.title}
                    </h3>
                    <p
                      className="mt-2 text-[13.5px] leading-[1.55] sm:text-[14px]"
                      style={{
                        color: BODY,
                        fontFamily:
                          "'Riona Sans Light', Helvetica, Arial, sans-serif",
                      }}
                    >
                      {c.outcome}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <BankingFinanceTestimonialsCarousel />
          </div>
        </section>

        {/* Section 9 — Business Outcomes */}
        <section className="bg-white py-16 md:py-20">
          <div className="mtk-page-center">
            <div className="max-w-3xl">
              <h2
                className="text-[32px] leading-[1.08] sm:text-[40px] lg:text-[46px]"
                style={{
                  color: NAVY,
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                Business Impact for BFSI Organizations.
              </h2>
              <p
                className="mt-5 text-[16px] leading-[1.6] sm:text-[18px]"
                style={{
                  color: BODY,
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                Edstellar programs are designed against the metrics your CHRO,
                CFO, and business leaders already report on, not generic
                course-completion stats.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {BUSINESS_OUTCOMES.map((o) => (
                <article
                  key={o.title}
                  className="rounded-2xl border bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
                  style={{ borderColor: BORDER }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full"
                      style={{ backgroundColor: LIME, color: NAVY }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 17l6-6 4 4 8-8" />
                        <path d="M14 7h7v7" />
                      </svg>
                    </span>
                    <h3
                      className="text-[16px] sm:text-[17px]"
                      style={{
                        color: NAVY,
                        fontFamily:
                          "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      {o.title}
                    </h3>
                  </div>
                  <p
                    className="mt-3 text-[13.5px] leading-[1.55] sm:text-[14.5px]"
                    style={{
                      color: BODY,
                      fontFamily:
                        "'Riona Sans Light', Helvetica, Arial, sans-serif",
                    }}
                  >
                    {o.body}
                  </p>
                </article>
              ))}
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
                  gaps, accelerate compliance readiness, and prove ROI for
                  more than 60 years of combined practice. Pick the entry
                  point that fits your conversation today.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[12.5px] uppercase tracking-[0.1em] transition-opacity hover:opacity-90 sm:text-[13px]"
                    style={{
                      color: NAVY,
                      fontFamily:
                        "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    Request a Custom Training Plan
                    <ArrowRightIcon width={14} height={14} />
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-5 py-3 text-[12.5px] uppercase tracking-[0.1em] text-white transition-colors hover:bg-white/10 sm:text-[13px]"
                    style={{
                      fontFamily:
                        "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    Talk to a BFSI Expert
                    <ArrowRightIcon width={14} height={14} />
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-5 py-3 text-[12.5px] uppercase tracking-[0.1em] text-white transition-colors hover:bg-white/10 sm:text-[13px]"
                    style={{
                      fontFamily:
                        "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    Get a Workforce Assessment
                    <ArrowRightIcon width={14} height={14} />
                  </Link>
                </div>
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
