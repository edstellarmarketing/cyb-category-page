import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ClientLogosStrip } from "@/components/ClientLogosStrip";
import { ArrowRightIcon } from "@/components/icons";
import { IndustryAutomotiveTabs } from "@/components/industry/IndustryAutomotiveTabs";
import { IndustryAutomotiveFAQ } from "@/components/industry/IndustryAutomotiveFAQ";

export const metadata: Metadata = {
  title:
    "Automotive Workforce Training and Capability Building | Edstellar",
  description:
    "Edstellar partners with automotive OEMs, Tier 1 and Tier 2 suppliers, and EV programs to build the skilling, learning operations, and managed-talent capability that accelerates SDV, electrification, and Industry 4.0 transitions.",
  alternates: {
    canonical: "https://edstellar.com/industries/automotive",
  },
};

const NAVY = "#1B1D52";
const NAVY_BG_5 = "rgba(27, 29, 82, 0.05)";
const LIME = "#C5E826";
const BORDER = "#E3E6F0";
const BODY = "#374151";
const MUTED = "#6B7280";

type Segment = {
  title: string;
  body: string;
};

const SEGMENTS: Segment[] = [
  {
    title: "OEMs and vehicle manufacturers",
    body: "Capability across product engineering, manufacturing, software, and aftersales for global OEMs.",
  },
  {
    title: "Tier 1 and Tier 2 suppliers",
    body: "Programs aligned to OEM customer obligations, ASPICE, and supplier-mandated certifications.",
  },
  {
    title: "EV and battery (cells, packs, BMS)",
    body: "From cell chemistry foundations to pack integration, BMS design, and high-voltage safety.",
  },
  {
    title: "ADAS, autonomy, and SDV",
    body: "Validation, functional safety, software-defined vehicle architecture, and OTA platforms.",
  },
  {
    title: "Connected vehicle and telematics",
    body: "V2X, cloud and edge integration, data pipelines, and telematics-driven service models.",
  },
  {
    title: "Aftermarket, dealerships, and mobility services",
    body: "Service-team training, dealership operations, EV servicing, and emerging mobility models.",
  },
  {
    title: "Manufacturing and Industry 4.0 plants",
    body: "MES, SCADA, OT security, plant floor digitalisation, and operator upskilling at scale.",
  },
  {
    title: "Automotive cybersecurity",
    body: "ISO / SAE 21434, UN R155 / R156, TARA, and security-by-design programs across the value chain.",
  },
  {
    title: "Supply chain, logistics, and dealer operations",
    body: "Demand planning, supplier risk, dealer network ops, and digital logistics for global automotive groups.",
  },
];

type Domain = {
  title: string;
  body: string;
  tags: string[];
};

const DOMAINS: Domain[] = [
  {
    title: "Embedded systems and AUTOSAR",
    body: "Classic and Adaptive AUTOSAR, MCAL, BSW, RTE, and embedded software for safety-critical automotive ECUs.",
    tags: ["AUTOSAR", "Embedded C", "MISRA"],
  },
  {
    title: "Vehicle electrification and battery systems",
    body: "Cell chemistry, pack design, BMS, charging infrastructure, and high-voltage safety for the EV transition.",
    tags: ["Battery Systems", "BMS", "HV Safety"],
  },
  {
    title: "ADAS validation and functional safety",
    body: "Sensor fusion, perception validation, ISO 26262 functional safety, and SOTIF for autonomous and assisted-driving stacks.",
    tags: ["ISO 26262", "SOTIF", "ADAS"],
  },
  {
    title: "Software-defined vehicle and OTA",
    body: "SDV architecture, service-oriented platforms, OTA update pipelines, and software lifecycle for connected vehicles.",
    tags: ["SDV", "OTA", "Service Platforms"],
  },
  {
    title: "Manufacturing 4.0, MES, and OT security",
    body: "Plant floor digitalisation, MES and SCADA platforms, OT segmentation, and zero-trust for industrial control.",
    tags: ["MES / SCADA", "Industry 4.0", "OT Security"],
  },
  {
    title: "Automotive cybersecurity (ISO / SAE 21434)",
    body: "TARA, threat modelling, secure development, and UN R155 / R156 compliance for vehicle cybersecurity programs.",
    tags: ["ISO / SAE 21434", "UN R155", "TARA"],
  },
];

type CaseStudy = {
  badge: string;
  title: string;
  problem: string;
  outcome: string;
  image: string;
  imageAlt: string;
  href: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    badge: "Tier 1 supplier",
    title: "Closing an ASPICE gap in 12 weeks",
    problem:
      "Critical OEM contract at risk over an ASPICE Capability Level 2 audit gap.",
    outcome:
      "Edstellar shipped a 12-week ASPICE cohort, tabletop assessments, and a sourced gap report. Audit cleared on first attempt.",
    image: "/images/cyber/industry-bfsi.jpg",
    imageAlt:
      "Tier 1 automotive supplier engineers reviewing an ASPICE capability dashboard with an Edstellar advisor",
    href: "#",
  },
  {
    badge: "EV OEM",
    title: "Battery-engineering ramp across two plants",
    problem:
      "Aggressive EV plant ramp-up needed 200+ engineers at battery-systems Level 3 capability.",
    outcome:
      "Standardised role-based learning paths across two plants, cohort-based delivery, mentor-led labs, single dashboard for executive review.",
    image: "/images/cyber/industry-saas.jpg",
    imageAlt:
      "Battery-engineering cohort working through a pack-integration lab during an Edstellar program",
    href: "#",
  },
  {
    badge: "Global automotive group",
    title: "ISO / SAE 21434 capability across 8 countries",
    problem:
      "Inconsistent automotive cybersecurity capability across regional engineering centres.",
    outcome:
      "Edstellar standardised an ISO / SAE 21434 program across 8 countries, with shared assessments and a regional rollout plan.",
    image: "/images/cyber/industry-government.jpg",
    imageAlt:
      "Global automotive cybersecurity program coordinator reviewing an ISO / SAE 21434 rollout plan",
    href: "#",
  },
];

type Resource = {
  category: string;
  title: string;
  teaser: string;
  cta: string;
  image: string;
  imageAlt: string;
};

const RESOURCES: Resource[] = [
  {
    category: "Whitepaper",
    title: "Workforce blueprint for software-defined vehicles",
    teaser:
      "Role-by-role capability map for OEMs and Tier 1s pivoting to SDV.",
    cta: "Read",
    image: "/images/cyber/more-curriculum.jpg",
    imageAlt:
      "Whitepaper cover: Workforce blueprint for software-defined vehicles",
  },
  {
    category: "Webinar replay",
    title: "ISO / SAE 21434 program rollout, lessons from three OEMs",
    teaser:
      "Three OEM cybersecurity leads share rollout patterns, audit outcomes, and supplier impact.",
    cta: "Watch",
    image: "/images/cyber/hero-cyber-ops.jpg",
    imageAlt:
      "Webinar replay: ISO / SAE 21434 program rollout lessons from three OEMs",
  },
  {
    category: "Guide",
    title: "Skilling for the EV transition, role-by-role checklist",
    teaser:
      "Practical capability checklist across product, manufacturing, and service.",
    cta: "Download",
    image: "/images/cyber/course-cloud.jpg",
    imageAlt: "Guide cover: Skilling for the EV transition checklist",
  },
];

type RelatedIndustry = {
  category: string;
  title: string;
  body: string;
  meta: { domains: string; clients: string; experience: string };
  image: string;
  imageAlt: string;
  href: string;
};

const RELATED: RelatedIndustry[] = [
  {
    category: "BFSI",
    title: "Banking, financial services, and insurance",
    body: "Risk, compliance, and digital-transformation skilling for banks, capital markets, and insurance carriers.",
    meta: { domains: "30+ training domains", clients: "Fortune 500 BFSI customers", experience: "12+ years partnering with the sector" },
    image: "/images/cyber/industry-bfsi.jpg",
    imageAlt: "BFSI industry training",
    href: "#",
  },
  {
    category: "Healthcare",
    title: "Healthcare and life sciences",
    body: "Clinical, regulatory, and digital-health programs for hospitals, pharma, and medical-device firms.",
    meta: { domains: "25+ training domains", clients: "Tier-1 healthcare customers", experience: "10+ years partnering with the sector" },
    image: "/images/cyber/industry-healthcare.jpg",
    imageAlt: "Healthcare industry training",
    href: "#",
  },
  {
    category: "Manufacturing",
    title: "Manufacturing and Industry 4.0",
    body: "Plant operations, MES, OT security, and digital-thread programs across global manufacturing groups.",
    meta: { domains: "28+ training domains", clients: "Fortune 500 manufacturing customers", experience: "14+ years partnering with the sector" },
    image: "/images/cyber/hero-industry-manufacturing.jpg",
    imageAlt: "Manufacturing industry training",
    href: "#",
  },
  {
    category: "Retail",
    title: "Retail and consumer goods",
    body: "Omnichannel, supply chain, and customer-experience programs for global retail and CPG groups.",
    meta: { domains: "22+ training domains", clients: "Fortune 500 retail customers", experience: "9+ years partnering with the sector" },
    image: "/images/cyber/hero-industry-retail.jpg",
    imageAlt: "Retail industry training",
    href: "#",
  },
  {
    category: "Energy",
    title: "Energy and utilities",
    body: "Grid modernisation, renewables, and asset-integrity capability for energy and utility leaders.",
    meta: { domains: "20+ training domains", clients: "Tier-1 energy customers", experience: "10+ years partnering with the sector" },
    image: "/images/cyber/industry-government.jpg",
    imageAlt: "Energy industry training",
    href: "#",
  },
  {
    category: "Telecom",
    title: "Telecom and connectivity",
    body: "5G, edge, and network-modernisation programs for global telecom operators and equipment vendors.",
    meta: { domains: "24+ training domains", clients: "Fortune 500 telecom customers", experience: "11+ years partnering with the sector" },
    image: "/images/cyber/industry-saas.jpg",
    imageAlt: "Telecom industry training",
    href: "#",
  },
];

const PROGRAM_STATS = [
  { stat: "−32%", label: "Engineering cycle-time reduction (indicative range)" },
  { stat: "−27%", label: "Software defect-density reduction (indicative range)" },
  { stat: "94%", label: "Certification first-attempt pass rate (indicative)" },
  { stat: "10,000+", label: "Automotive engineers trained by Edstellar" },
];

function CheckBullet({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <li className="flex items-start gap-3">
      <span
        aria-hidden="true"
        className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
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
      <div>
        <p
          className="text-[16px] sm:text-[17px]"
          style={{
            color: NAVY,
            fontFamily:
              "'Riona Sans Bold', Helvetica, Arial, sans-serif",
            fontWeight: 700,
          }}
        >
          {title}
        </p>
        <p
          className="mt-1.5 text-[14px] leading-[1.55] sm:text-[15px]"
          style={{
            color: BODY,
            fontFamily:
              "'Riona Sans Light', Helvetica, Arial, sans-serif",
          }}
        >
          {body}
        </p>
      </div>
    </li>
  );
}

export default function IndustryAutomotivePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Section 1 — Hero */}
        <section className="bg-white pt-12 pb-16 md:pt-16 md:pb-20">
          <div className="mtk-page-center">
            <nav
              aria-label="Breadcrumb"
              className="mb-6 text-[12px] uppercase tracking-[0.14em] sm:text-[13px]"
              style={{
                color: MUTED,
                fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif",
              }}
            >
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <li>
                  <Link
                    href="/"
                    className="transition-colors hover:text-[#1B1D52]"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" style={{ color: "#9CA3AF" }}>
                  ›
                </li>
                <li>
                  <Link
                    href="/#industries"
                    className="transition-colors hover:text-[#1B1D52]"
                  >
                    Industries
                  </Link>
                </li>
                <li aria-hidden="true" style={{ color: "#9CA3AF" }}>
                  ›
                </li>
                <li
                  aria-current="page"
                  style={{ color: NAVY, fontWeight: 600 }}
                >
                  Automotive
                </li>
              </ol>
            </nav>

            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7">
                <h1
                  className="text-[36px] leading-[1.05] sm:text-[44px] lg:text-[56px]"
                  style={{
                    color: NAVY,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  Workforce capability that helps automotive leaders{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">
                      accelerate your business
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute bottom-1 left-0 right-0 -z-0 h-2.5 sm:h-3"
                      style={{ backgroundColor: LIME, opacity: 0.55 }}
                    />
                  </span>
                  .
                </h1>
                <p
                  className="mt-6 max-w-2xl text-[16px] leading-[1.6] sm:text-[18px]"
                  style={{
                    color: BODY,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  Edstellar partners with automotive OEMs, Tier 1 and Tier 2
                  suppliers, and EV programs to build training, learning paths,
                  learning services, technology, and managed-talent capability
                  that accelerates SDV, electrification, and Industry 4.0
                  transitions.
                </p>

                <div
                  className="mt-5 rounded-xl border px-4 py-3"
                  style={{
                    borderColor: BORDER,
                    backgroundColor: NAVY_BG_5,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  <div className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px]"
                      style={{
                        backgroundColor: LIME,
                        color: NAVY,
                        fontWeight: 700,
                      }}
                    >
                      ↑
                    </span>
                    <div>
                      <p
                        className="text-[12.5px] leading-[1.4] sm:text-[13.5px]"
                        style={{ color: BODY }}
                      >
                        <strong style={{ color: NAVY }}>Market signal:</strong>{" "}
                        Software-defined vehicle and EV transitions are
                        widening a measurable workforce-capability gap across
                        OEMs and Tier 1 suppliers worldwide.
                      </p>
                      <p
                        className="mt-1 text-[11.5px] leading-[1.4] sm:text-[12px]"
                        style={{ color: MUTED }}
                      >
                        Source: Indicative position drawn from public OEM and
                        Tier 1 capability disclosures, 2023–2025. Verify with
                        Edstellar advisor before citing.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13px] uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90 sm:text-[14px]"
                    style={{
                      backgroundColor: NAVY,
                      fontFamily:
                        "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    Enquire now
                    <ArrowRightIcon width={16} height={16} />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div
                  className="relative overflow-hidden rounded-2xl border shadow-sm"
                  style={{ borderColor: BORDER, aspectRatio: "5 / 4" }}
                >
                  <Image
                    src="/images/cyber/hero-industry-automotive.jpg"
                    alt="Automotive plant operator at a precision machining station inside an Edstellar-supported manufacturing facility"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — Industry segments */}
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
                Automotive industry segments{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">we serve</span>
                  <span
                    aria-hidden="true"
                    className="absolute bottom-1 left-0 right-0 -z-0 h-2.5 sm:h-3"
                    style={{ backgroundColor: LIME, opacity: 0.55 }}
                  />
                </span>
                .
              </h2>
              <p
                className="mt-5 text-[16px] leading-[1.6] sm:text-[18px]"
                style={{
                  color: BODY,
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                Edstellar covers the breadth of the automotive value chain, from
                product engineering through manufacturing, software, and
                aftersales, so a single partner stands behind your workforce
                strategy.
              </p>
            </div>

            <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {SEGMENTS.map((s) => (
                <li
                  key={s.title}
                  className="rounded-2xl border bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-md"
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
                      className="text-[14px] leading-[1.3] sm:text-[15px]"
                      style={{
                        color: NAVY,
                        fontFamily:
                          "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      {s.title}
                    </h3>
                  </div>
                  <p
                    className="mt-3 text-[13px] leading-[1.55] sm:text-[13.5px]"
                    style={{
                      color: BODY,
                      fontFamily:
                        "'Riona Sans Light', Helvetica, Arial, sans-serif",
                    }}
                  >
                    {s.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 3 — Our expertise */}
        <section className="bg-white py-16 md:py-20">
          <div className="mtk-page-center">
            {/* Block 3A */}
            <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7">
                <h2
                  className="text-[32px] leading-[1.08] sm:text-[40px] lg:text-[46px]"
                  style={{
                    color: NAVY,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  How Edstellar drives the automotive{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">value chain</span>
                    <span
                      aria-hidden="true"
                      className="absolute bottom-1 left-0 right-0 -z-0 h-2.5 sm:h-3"
                      style={{ backgroundColor: LIME, opacity: 0.55 }}
                    />
                  </span>
                  .
                </h2>
                <p
                  className="mt-5 text-[16px] leading-[1.6] sm:text-[18px]"
                  style={{
                    color: BODY,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  Edstellar's solutions transform automotive operations, build
                  the skilling needed across product, manufacturing, software,
                  and aftersales teams, drive agility, and help OEMs and
                  suppliers meet evolving customer demand for software,
                  electrification, and autonomy.
                </p>

                <ul className="mt-8 space-y-6">
                  <CheckBullet
                    title="Workforce skill mapping"
                    body="Map current capability against future-state automotive roles (SDV engineer, battery systems lead, ADAS validation, OT security analyst), and produce a sector-specific gap report for executive review."
                  />
                  <CheckBullet
                    title="Custom capability programs"
                    body="Curate role-based learning paths blended with hands-on labs against your stack (AUTOSAR, ROS, MATLAB / Simulink, vCAN tools, MES / SCADA platforms)."
                  />
                  <CheckBullet
                    title="Vendor-certified training delivery"
                    body="Live instructor-led, on-site at plants, off-site at innovation centres, or virtual across timezones, in any language your global teams need."
                  />
                  <CheckBullet
                    title="Managed talent and bootcamps"
                    body="Short, intense bootcamps for new hires plus continuous mentoring for in-flight teams, including ASPICE, ISO 26262, and ISO / SAE 21434 cohorts."
                  />
                  <CheckBullet
                    title="Outcome reporting and ROI"
                    body="Pre and post assessments, certification pass-rate tracking, and engineering KPIs (lead time, defect density, cycle time) packaged in a board-ready dashboard."
                  />
                </ul>
              </div>
              <div className="lg:col-span-5">
                <div
                  className="relative overflow-hidden rounded-2xl border shadow-sm"
                  style={{ borderColor: BORDER, aspectRatio: "4 / 5" }}
                >
                  <Image
                    src="/images/cyber/hero-team-training.jpg"
                    alt="Edstellar instructor leading a hands-on engineering session with an automotive cohort around a development rig"
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Block 3B — Capability domains */}
            <div className="mt-16">
              <div className="max-w-3xl">
                <h3
                  className="text-[26px] leading-[1.1] sm:text-[30px] lg:text-[34px]"
                  style={{
                    color: NAVY,
                    fontFamily:
                      "'Riona Sans Regular', Helvetica, Arial, sans-serif",
                  }}
                >
                  Capability domains we own end to end
                </h3>
                <p
                  className="mt-4 text-[15px] leading-[1.55] sm:text-[16px]"
                  style={{
                    color: BODY,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  Six deep-technical practice areas where Edstellar builds
                  capability for automotive teams, calibrated against the
                  frameworks, controls, and supplier obligations the industry
                  is held to today.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {DOMAINS.map((d) => (
                  <article
                    key={d.title}
                    className="rounded-2xl border bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
                    style={{ borderColor: BORDER }}
                  >
                    <h4
                      className="text-[18px] sm:text-[20px]"
                      style={{
                        color: NAVY,
                        fontFamily:
                          "'Riona Sans Regular', Helvetica, Arial, sans-serif",
                      }}
                    >
                      {d.title}
                    </h4>
                    <p
                      className="mt-3 text-[14px] leading-[1.55] sm:text-[14.5px]"
                      style={{
                        color: BODY,
                        fontFamily:
                          "'Riona Sans Light', Helvetica, Arial, sans-serif",
                      }}
                    >
                      {d.body}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {d.tags.map((t) => (
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
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 — What we do (tabs) */}
        <IndustryAutomotiveTabs />

        {/* Section 5 — Our success stories */}
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
                How automotive leaders use{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Edstellar</span>
                  <span
                    aria-hidden="true"
                    className="absolute bottom-1 left-0 right-0 -z-0 h-2.5 sm:h-3"
                    style={{ backgroundColor: LIME, opacity: 0.55 }}
                  />
                </span>
                .
              </h2>
              <p
                className="mt-5 text-[16px] leading-[1.6] sm:text-[18px]"
                style={{
                  color: BODY,
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                Indicative case-study patterns drawn from Edstellar engagements
                across OEMs, Tier 1 suppliers, and global automotive groups.
                Named cases publish as customers approve disclosure.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {CASE_STUDIES.map((c) => (
                <a
                  key={c.title}
                  href={c.href}
                  className="group flex flex-col overflow-hidden rounded-2xl border bg-white transition-shadow hover:shadow-md"
                  style={{ borderColor: BORDER }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={c.image}
                      alt={c.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div
                      className="absolute left-3 top-3 rounded-full px-3 py-1 text-[11px]"
                      style={{
                        backgroundColor: LIME,
                        color: NAVY,
                        fontFamily:
                          "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      {c.badge}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3
                      className="text-[19px] sm:text-[21px]"
                      style={{
                        color: NAVY,
                        fontFamily:
                          "'Riona Sans Regular', Helvetica, Arial, sans-serif",
                      }}
                    >
                      {c.title}
                    </h3>
                    <p
                      className="mt-3 text-[13.5px] leading-[1.55] sm:text-[14px]"
                      style={{
                        color: BODY,
                        fontFamily:
                          "'Riona Sans Light', Helvetica, Arial, sans-serif",
                      }}
                    >
                      <strong style={{ color: NAVY, fontWeight: 700 }}>
                        Problem:
                      </strong>{" "}
                      {c.problem}
                    </p>
                    <p
                      className="mt-2 text-[13.5px] leading-[1.55] sm:text-[14px]"
                      style={{
                        color: BODY,
                        fontFamily:
                          "'Riona Sans Light', Helvetica, Arial, sans-serif",
                      }}
                    >
                      <strong style={{ color: NAVY, fontWeight: 700 }}>
                        Outcome:
                      </strong>{" "}
                      {c.outcome}
                    </p>
                    <span
                      className="mt-5 inline-flex items-center gap-1.5 text-[12.5px] uppercase tracking-[0.1em]"
                      style={{
                        color: NAVY,
                        fontFamily:
                          "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      Learn more
                      <ArrowRightIcon width={14} height={14} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6 — Trust strip */}
        <section className="bg-white pt-12 pb-12 md:pt-16 md:pb-16">
          <div className="mtk-page-center">
            <ClientLogosStrip />
          </div>
        </section>

        {/* Section 7 — Outcomes and impact */}
        <section
          className="py-16 md:py-20"
          style={{ backgroundColor: "#F7F8FC" }}
        >
          <div className="mtk-page-center">
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <h2
                  className="text-[32px] leading-[1.08] sm:text-[40px] lg:text-[46px]"
                  style={{
                    color: NAVY,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  Outcomes that move automotive{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">KPIs</span>
                    <span
                      aria-hidden="true"
                      className="absolute bottom-1 left-0 right-0 -z-0 h-2.5 sm:h-3"
                      style={{ backgroundColor: LIME, opacity: 0.55 }}
                    />
                  </span>
                  .
                </h2>
                <p
                  className="mt-5 text-[16px] leading-[1.6] sm:text-[18px]"
                  style={{
                    color: BODY,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  Edstellar programs are designed against the metrics your CTO,
                  COO, and L&D lead already report on. Indicative ranges below
                  vary by program design, baseline maturity, and headcount.
                </p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {PROGRAM_STATS.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-2xl border bg-white p-5"
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
                        className="mt-3 text-[13px] sm:text-[14px]"
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
                  className="mt-6 text-[12px] leading-[1.6]"
                  style={{
                    color: MUTED,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  Indicative ranges. Outcomes vary by program design, baseline
                  maturity, and headcount; drawn from Edstellar customer
                  engagements 2023–2025. Verify with your Edstellar advisor
                  before citing.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div
                  className="rounded-2xl border bg-white p-6 sm:p-8"
                  style={{ borderColor: BORDER }}
                >
                  <h3
                    className="text-[18px] sm:text-[20px]"
                    style={{
                      color: NAVY,
                      fontFamily:
                        "'Riona Sans Regular', Helvetica, Arial, sans-serif",
                    }}
                  >
                    Sample cohort scoreboard
                  </h3>
                  <div className="mt-5 space-y-5">
                    <ProgressRow
                      label="ASPICE capability uplift"
                      value={72}
                      display="+72%"
                    />
                    <ProgressRow
                      label="ISO 26262 readiness"
                      value={66}
                      display="+66%"
                    />
                    <ProgressRow
                      label="SDV / OTA capability"
                      value={58}
                      display="+58%"
                    />
                    <ProgressRow
                      label="Plant operator productivity"
                      value={31}
                      display="+31%"
                    />
                  </div>
                  <p
                    className="mt-6 text-[12px]"
                    style={{
                      color: MUTED,
                      fontFamily:
                        "'Riona Sans Light', Helvetica, Arial, sans-serif",
                    }}
                  >
                    Sample data, illustrative only. Real cohorts deliver a
                    customer-specific scoreboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8 — Resources */}
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
                Automotive resources for{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">talent and L&D</span>
                  <span
                    aria-hidden="true"
                    className="absolute bottom-1 left-0 right-0 -z-0 h-2.5 sm:h-3"
                    style={{ backgroundColor: LIME, opacity: 0.55 }}
                  />
                </span>{" "}
                leaders.
              </h2>
              <p
                className="mt-5 text-[16px] leading-[1.6] sm:text-[18px]"
                style={{
                  color: BODY,
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                Practical playbooks, on-demand replays, and capability
                checklists drawn from Edstellar's automotive practice. New
                resources publish every quarter.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {RESOURCES.map((r) => (
                <article
                  key={r.title}
                  className="flex flex-col overflow-hidden rounded-2xl border bg-white transition-shadow hover:shadow-md"
                  style={{ borderColor: BORDER }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={r.image}
                      alt={r.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div
                      className="absolute left-3 top-3 rounded-full px-3 py-1 text-[11px]"
                      style={{
                        backgroundColor: LIME,
                        color: NAVY,
                        fontFamily:
                          "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      {r.category}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3
                      className="text-[18px] sm:text-[20px]"
                      style={{
                        color: NAVY,
                        fontFamily:
                          "'Riona Sans Regular', Helvetica, Arial, sans-serif",
                      }}
                    >
                      {r.title}
                    </h3>
                    <p
                      className="mt-3 flex-1 text-[14px] leading-[1.55]"
                      style={{
                        color: BODY,
                        fontFamily:
                          "'Riona Sans Light', Helvetica, Arial, sans-serif",
                      }}
                    >
                      {r.teaser}
                    </p>
                    <span
                      className="mt-5 inline-flex items-center gap-1.5 text-[12.5px] uppercase tracking-[0.1em]"
                      style={{
                        color: NAVY,
                        fontFamily:
                          "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {r.cta}
                      <ArrowRightIcon width={14} height={14} />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9 — FAQs */}
        <IndustryAutomotiveFAQ />

        {/* Section 10 — Final CTA */}
        <section
          id="contact"
          className="relative overflow-hidden py-16 md:py-20"
          style={{ backgroundColor: NAVY }}
        >
          <div className="mtk-page-center text-center">
            <h2
              className="text-[28px] leading-[1.1] text-white sm:text-[36px] lg:text-[44px]"
              style={{
                fontFamily:
                  "'Riona Sans Light', Helvetica, Arial, sans-serif",
              }}
            >
              Ready to build the workforce behind your next automotive program?
            </h2>
            <p
              className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.6] text-white/85 sm:text-[17px]"
              style={{
                fontFamily:
                  "'Riona Sans Light', Helvetica, Arial, sans-serif",
              }}
            >
              Talk to Edstellar's automotive practice lead, or download the
              capability deck for your CTO, plant head, and L&D leadership.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="#contact"
                className="rounded-full bg-white px-6 py-3 text-[13px] uppercase tracking-[0.1em] transition-opacity hover:opacity-90 sm:text-[14px]"
                style={{
                  color: NAVY,
                  fontFamily:
                    "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                  fontWeight: 600,
                }}
              >
                Talk to our automotive lead
              </Link>
              <Link
                href="#contact"
                className="rounded-full border-2 border-white/40 px-6 py-3 text-[13px] uppercase tracking-[0.1em] text-white transition-colors hover:bg-white/10 sm:text-[14px]"
                style={{
                  fontFamily:
                    "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                  fontWeight: 600,
                }}
              >
                Download the automotive capability deck
              </Link>
            </div>
          </div>
        </section>

        {/* Section 11 — Related industries */}
        <section className="bg-white py-16 md:py-20">
          <div className="mtk-page-center">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <h2
                  className="text-[32px] leading-[1.08] sm:text-[40px] lg:text-[46px]"
                  style={{
                    color: NAVY,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  Explore other industries we{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">partner with</span>
                    <span
                      aria-hidden="true"
                      className="absolute bottom-1 left-0 right-0 -z-0 h-2.5 sm:h-3"
                      style={{ backgroundColor: LIME, opacity: 0.55 }}
                    />
                  </span>
                  .
                </h2>
                <p
                  className="mt-5 text-[16px] leading-[1.6] sm:text-[18px]"
                  style={{
                    color: BODY,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  Edstellar runs the same workforce-capability playbook across
                  multiple sectors, with industry-specific curriculum, faculty,
                  and outcomes.
                </p>
              </div>
              <Link
                href="/#industries"
                className="hidden items-center gap-2 text-[14px] uppercase tracking-[0.08em] md:inline-flex"
                style={{
                  color: NAVY,
                  fontFamily:
                    "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                  fontWeight: 600,
                }}
              >
                View all industries
                <ArrowRightIcon width={16} height={16} />
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {RELATED.map((p) => (
                <a
                  key={p.title}
                  href={p.href}
                  className="group flex flex-col overflow-hidden rounded-2xl border bg-white transition-shadow hover:shadow-md"
                  style={{ borderColor: BORDER }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div
                      className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px]"
                      style={{
                        color: NAVY,
                        fontFamily:
                          "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      {p.category}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3
                      className="text-[20px] sm:text-[22px]"
                      style={{
                        color: NAVY,
                        fontFamily:
                          "'Riona Sans Regular', Helvetica, Arial, sans-serif",
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="mt-3 flex-1 text-[14px] leading-[1.55]"
                      style={{
                        color: BODY,
                        fontFamily:
                          "'Riona Sans Light', Helvetica, Arial, sans-serif",
                      }}
                    >
                      {p.body}
                    </p>
                    <div
                      className="mt-5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-t pt-4 text-[12px]"
                      style={{ borderColor: BORDER, color: MUTED }}
                    >
                      <span>{p.meta.domains}</span>
                      <span>{p.meta.clients}</span>
                      <span>{p.meta.experience}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

function ProgressRow({
  label,
  value,
  display,
}: {
  label: string;
  value: number;
  display: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between text-[13px] sm:text-[14px]">
        <span
          style={{
            color: BODY,
            fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif",
          }}
        >
          {label}
        </span>
        <span
          style={{
            color: NAVY,
            fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif",
            fontWeight: 700,
          }}
        >
          {display}
        </span>
      </div>
      <div
        className="mt-2 h-2 w-full overflow-hidden rounded-full"
        style={{ backgroundColor: BORDER }}
      >
        <div
          className="h-full rounded-full"
          style={{
            width: `${Math.min(100, Math.max(0, value))}%`,
            backgroundColor: NAVY,
          }}
        />
      </div>
    </div>
  );
}
