import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { EdstellarTwoPathsV2 } from "@/components/EdstellarTwoPathsV2";
import { SocAnalystLearningPathFAQ } from "@/components/SocAnalystLearningPathFAQ";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title:
    "SOC Analyst Learning Path for Corporate Cybersecurity Teams | Edstellar",
  description:
    "Standardise blue-team capability with Edstellar's corporate SOC analyst learning path. Instructor-led, mentor-led, and tailored to your stack, sector and SOC maturity.",
  openGraph: {
    title:
      "Instructor-led SOC analyst learning path for enterprise security teams",
    description:
      "A tiered SOC analyst learning path (L1 triage to L3 detection-engineering) delivered live, on-site, or blended with hands-on SIEM and SOAR labs.",
  },
  alternates: {
    canonical: "https://edstellar.com/learning-paths/soc-analyst",
  },
};

type Stage = {
  num: string;
  label: string;
  title: string;
  weeks: string;
  courses: string[];
  milestoneTitle: string;
  milestoneBody: string;
  badge: string;
};

const MILESTONE_BG: Record<string, string> = {
  "01": "#C5E826",
  "02": "#A5D8FF",
  "03": "#FED7AA",
  "04": "#FECDD3",
  "05": "#DDD6FE",
};

function MilestoneIcon({ stage }: { stage: string }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (stage) {
    case "01":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M12 3l8 3v6c0 4.5-3.4 8.4-8 9-4.6-.6-8-4.5-8-9V6l8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "02":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M4 20V10" />
          <path d="M10 20V4" />
          <path d="M16 20v-7" />
          <path d="M22 20H2" />
        </svg>
      );
    case "03":
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v4" />
          <path d="M12 18v4" />
          <path d="M2 12h4" />
          <path d="M18 12h4" />
        </svg>
      );
    case "04":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
        </svg>
      );
    case "05":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M8 21h8" />
          <path d="M12 17v4" />
          <path d="M7 4h10v5a5 5 0 0 1-10 0V4z" />
          <path d="M7 6H4a3 3 0 0 0 3 3" />
          <path d="M17 6h3a3 3 0 0 1-3 3" />
        </svg>
      );
    default:
      return null;
  }
}

const STAGES: Stage[] = [
  {
    num: "01",
    label: "Stage 1: Foundations & Networking",
    title: "SOC fundamentals, networking and Linux essentials",
    weeks: "4 weeks",
    courses: [
      "Security principles, CIA triad, and the NIST CSF",
      "TCP/IP, DNS, HTTP and packet-level analysis",
      "Linux command line and Windows event basics for analysts",
    ],
    milestoneTitle: "SOC Apprentice badge",
    milestoneBody:
      "Demonstrate fluency with the OSI model, common attacker TTPs, and the SOC tooling baseline.",
    badge: "Apprentice",
  },
  {
    num: "02",
    label: "Stage 2: SIEM & Log Analysis",
    title: "Splunk, ELK and SIEM-driven detection",
    weeks: "6 weeks",
    courses: [
      "Splunk SPL and ELK / Kibana KQL hands-on",
      "Log source onboarding, parsing and normalisation",
      "Building detections, alerts and dashboards from real telemetry",
    ],
    milestoneTitle: "Advanced SIEM Analyst",
    milestoneBody:
      "Ship 5 production-grade detections against curated MITRE ATT&CK datasets in your tenant.",
    badge: "Detect",
  },
  {
    num: "03",
    label: "Stage 3: Threat Detection & Hunting",
    title: "MITRE ATT&CK, IOC analysis and proactive hunting",
    weeks: "6 weeks",
    courses: [
      "Threat hunting hypotheses and the Pyramid of Pain",
      "Mapping detections and gaps to MITRE ATT&CK",
      "IOC pivoting, threat intelligence enrichment and TI feeds",
    ],
    milestoneTitle: "Threat Hunter Professional",
    milestoneBody:
      "Run a hypothesis-driven hunt across endpoint and identity telemetry and document the playbook.",
    badge: "Hunt",
  },
  {
    num: "04",
    label: "Stage 4: Incident Response",
    title: "IR lifecycle, digital forensics and SOAR",
    weeks: "6 weeks",
    courses: [
      "NIST 800-61 incident response lifecycle",
      "Memory and disk forensics with Volatility and Autopsy",
      "SOAR playbook design with TheHive, Cortex and XSOAR",
    ],
    milestoneTitle: "Advanced Incident Responder",
    milestoneBody:
      "Lead a tabletop exercise on a ransomware scenario and ship two automated SOAR playbooks.",
    badge: "Respond",
  },
  {
    num: "05",
    label: "Stage 5: Advanced SOC Operations",
    title: "Purple teaming, leadership and SOC strategy",
    weeks: "4 weeks",
    courses: [
      "Purple-team exercises and detection engineering at scale",
      "Threat intelligence programs and reporting to the board",
      "SOC metrics, MTTD / MTTR optimisation, and L3-to-lead analyst progression for the team",
    ],
    milestoneTitle: "Senior SOC Operator",
    milestoneBody:
      "Present a SOC maturity roadmap with measurable detection-engineering and IR KPIs.",
    badge: "Lead",
  },
];

type SkillCard = {
  title: string;
  body: string;
  tags: string[];
};

const SKILLS: SkillCard[] = [
  {
    title: "Security fundamentals",
    body: "CIA triad, attack lifecycle, NIST CSF and ISO 27001 grounding so analysts speak the same risk language as the rest of the business.",
    tags: ["NIST CSF", "ISO 27001", "OWASP"],
  },
  {
    title: "SIEM mastery",
    body: "Production-grade Splunk SPL, ELK / KQL, and QRadar AQL drills, including detection authoring against real attacker TTPs.",
    tags: ["Splunk", "ELK", "QRadar"],
  },
  {
    title: "Threat detection & hunting",
    body: "MITRE ATT&CK navigation, hypothesis-driven hunting and IOC pivoting across endpoint, identity and network telemetry.",
    tags: ["MITRE ATT&CK", "Sigma", "YARA"],
  },
  {
    title: "Incident response",
    body: "NIST IR lifecycle, evidence handling, containment playbooks and clean transition into post-incident review and remediation.",
    tags: ["NIST 800-61", "SOAR", "TheHive"],
  },
  {
    title: "Forensics & analysis",
    body: "Volatility, Autopsy, Wireshark and structured analytic techniques that hold up in legal review and post-mortems.",
    tags: ["Volatility", "Wireshark", "Autopsy"],
  },
  {
    title: "Modern SOC tooling",
    body: "EDR, XDR, identity threat detection, cloud-native logging and the integration glue that keeps a 24x7 SOC running.",
    tags: ["EDR / XDR", "CrowdStrike", "Sentinel"],
  },
];

type Trainer = {
  name: string;
  role: string;
  location: string;
  bio: string;
  rating: string;
  reviews: string;
  experience: string;
  certs: string[];
  image: string;
};

const TRAINERS: Trainer[] = [
  {
    name: "Akash Iyer",
    role: "Lead SOC & red-team trainer",
    location: "Bengaluru, India",
    bio: "Sixteen years running offensive and defensive engagements for Fortune 500 banks and SaaS leaders. Maps every cohort to MITRE ATT&CK and live SOC scenarios.",
    rating: "4.9",
    reviews: "2,400+ learners",
    experience: "16 yrs",
    certs: ["CISSP", "OSCP", "GCIH"],
    image: "/images/cyber/trainer-akash.jpg",
  },
  {
    name: "Priya Krishnan",
    role: "SOC & threat-intel coach",
    location: "Pune, India",
    bio: "Former SOC lead at a Tier-1 Indian bank. Builds blue-team programs covering SIEM tuning, threat hunting and incident response across BFSI and SaaS clients.",
    rating: "4.9",
    reviews: "1,800+ learners",
    experience: "13 yrs",
    certs: ["GCIA", "GCIH", "CySA+"],
    image: "/images/cyber/trainer-devi.jpg",
  },
  {
    name: "Marcus Chen",
    role: "Cloud detection engineer",
    location: "Singapore",
    bio: "Multi-cloud security architect serving APAC banks and SaaS leaders. Trains detection engineers on AWS / Azure / GCP telemetry and zero-trust.",
    rating: "4.8",
    reviews: "1,500+ learners",
    experience: "14 yrs",
    certs: ["CCSP", "AWS Sec Specialty", "Azure SC-200"],
    image: "/images/cyber/trainer-sudha.jpg",
  },
];

type RelatedPath = {
  href: string;
  category: string;
  title: string;
  body: string;
  weeks: string;
  badge: string;
  seats: string;
  image: string;
};

const RELATED_PATHS: RelatedPath[] = [
  {
    href: "#",
    category: "Offensive security",
    title: "Penetration tester learning path",
    body: "CEH v13 to OSCP to OSEP curriculum covering web, network, Active Directory and red-team operations.",
    weeks: "26 weeks",
    badge: "5 frameworks",
    seats: "10+ seats",
    image: "/images/cyber/path-pentest.jpg",
  },
  {
    href: "#",
    category: "Cloud security",
    title: "Cloud security engineer path",
    body: "AWS / Azure / GCP security specialty paths plus CCSP. Design, deploy and harden multi-cloud workloads end-to-end.",
    weeks: "24 weeks",
    badge: "4 frameworks",
    seats: "10+ seats",
    image: "/images/cyber/path-cloud-eng.jpg",
  },
  {
    href: "#",
    category: "GRC",
    title: "Governance, risk & compliance path",
    body: "CISA, CRISC and CISM with ISO 27001 Lead Auditor. Run audits, frameworks and risk programs at the enterprise level.",
    weeks: "22 weeks",
    badge: "3 frameworks",
    seats: "8+ seats",
    image: "/images/cyber/path-grc-mgr.jpg",
  },
  {
    href: "#",
    category: "Architecture",
    title: "Security architect path",
    body: "CISSP and SABSA with Microsoft SC-100. Define zero-trust architectures and security reference models across the business.",
    weeks: "26 weeks",
    badge: "CISSP aligned",
    seats: "10+ seats",
    image: "/images/cyber/path-architect.jpg",
  },
  {
    href: "#",
    category: "DevSecOps",
    title: "DevSecOps engineer path",
    body: "Secure CI/CD, container security, IaC scanning, OWASP and CSSLP. Embed security into every stage of the SDLC.",
    weeks: "20 weeks",
    badge: "4 frameworks",
    seats: "12+ seats",
    image: "/images/cyber/path-devsecops.jpg",
  },
  {
    href: "#",
    category: "Leadership",
    title: "CISO leadership track",
    body: "Executive cybersecurity leadership, board reporting, cyber risk quantification, M&A due diligence and program governance.",
    weeks: "16 weeks",
    badge: "Executive track",
    seats: "5+ seats",
    image: "/images/cyber/path-ciso.jpg",
  },
];

const PROGRAM_STATS = [
  { stat: "âˆ’58%", label: "Median dwell-time reduction post-cohort" },
  { stat: "âˆ’41%", label: "Mean-time-to-contain improvement" },
  { stat: "94%", label: "Post-training skill improvement rate" },
  { stat: "200+", label: "SOC teams trained worldwide" },
];

type DeliveryMode = {
  title: string;
  detail: string;
  ariaLabel: string;
};

const DELIVERY_MODES: DeliveryMode[] = [
  {
    title: "Instructor-led cohort",
    detail: "Live, expert-led delivery for your full SOC team",
    ariaLabel: "Instructor-led SOC analyst learning path",
  },
  {
    title: "Live virtual classroom",
    detail: "Real-time sessions across regional and remote teams",
    ariaLabel: "Live virtual SOC analyst learning path",
  },
  {
    title: "On-site at your office",
    detail: "Delivered in your facility, anywhere globally",
    ariaLabel: "On-site SOC analyst learning path",
  },
  {
    title: "Blended delivery",
    detail: "Instructor-led sessions paired with hands-on labs",
    ariaLabel: "Blended SOC analyst learning path",
  },
  {
    title: "Mentor-led 1:1 coaching",
    detail: "Senior-analyst and lead-engineer development",
    ariaLabel: "Mentor-led SOC analyst learning path",
  },
];

const LANGUAGES = [
  "English",
  "EspaÃ±ol",
  "æ™®é€šè©±",
  "Deutsch",
  "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©",
  "PortuguÃªs",
  "à¤¹à¤¿à¤‚à¤¦à¥€",
  "FranÃ§ais",
  "æ—¥æœ¬èªž",
  "Italiano",
];

const TRUST_LOGOS = [
  { src: "/images/clients/microsoft.webp", alt: "Microsoft" },
  { src: "/images/clients/visa.webp", alt: "Visa" },
  { src: "/images/clients/abb.webp", alt: "ABB" },
  { src: "/images/clients/kpmg.webp", alt: "KPMG" },
  { src: "/images/clients/boston-consulting.webp", alt: "Boston Consulting Group" },
];

const NAVY = "#1B1D52";
const NAVY_BG_5 = "rgba(27, 29, 82, 0.05)";
const LIME = "#C5E826";
const BORDER = "#E3E6F0";
const BODY = "#374151";
const MUTED = "#6B7280";

export default function SocAnalystLearningPathV2Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
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
                  â€º
                </li>
                <li>
                  <Link
                    href="/#learning-paths"
                    className="transition-colors hover:text-[#1B1D52]"
                  >
                    Learning Paths
                  </Link>
                </li>
                <li aria-hidden="true" style={{ color: "#9CA3AF" }}>
                  â€º
                </li>
                <li
                  aria-current="page"
                  style={{ color: NAVY, fontWeight: 600 }}
                >
                  SOC Analyst Learning Path
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
                  SOC Analyst Learning Path for Corporate Cybersecurity Teams
                </h1>
                <p
                  className="mt-5 max-w-2xl text-[15px] leading-[1.55] sm:text-[16.5px]"
                  style={{
                    color: BODY,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  Edstellar standardises blue-team capability across your
                  security teams with a structured five-stage SOC analyst
                  learning path that combines mentor-led delivery, hands-on
                  SIEM and SOAR labs, and training milestones.
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
                      â†‘
                    </span>
                    <div>
                      <p
                        className="text-[12.5px] leading-[1.4] sm:text-[13.5px]"
                        style={{ color: BODY }}
                      >
                        <strong style={{ color: NAVY }}>Outcomes:</strong>{" "}
                        Cut dwell time by 58%, contain incidents 41% faster,
                        and lift detection coverage by 78% across the MITRE
                        ATT&amp;CK matrix.
                      </p>
                      <p
                        className="mt-1 text-[11.5px] leading-[1.4] sm:text-[12px]"
                        style={{ color: MUTED }}
                      >
                        Delivered across 200+ enterprise SOC cohorts
                        standardised on the Edstellar SOC analyst learning
                        path, 2023â€“2025.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <p
                    className="text-[11px] uppercase tracking-[0.14em]"
                    style={{
                      color: MUTED,
                      fontFamily:
                        "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    Delivery Modes
                  </p>
                  <ul className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {DELIVERY_MODES.map((mode) => (
                      <li
                        key={mode.title}
                        aria-label={mode.ariaLabel}
                        className="flex items-start gap-3 rounded-xl border bg-white px-4 py-3"
                        style={{ borderColor: BORDER }}
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
                            className="text-[13px] sm:text-[14px]"
                            style={{
                              color: NAVY,
                              fontFamily:
                                "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                              fontWeight: 700,
                            }}
                          >
                            {mode.title}
                          </p>
                          <p
                            className="mt-0.5 text-[12px] leading-[1.4] sm:text-[12.5px]"
                            style={{
                              color: MUTED,
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

                <div className="mt-5">
                  <p
                    className="text-[11px] uppercase tracking-[0.14em]"
                    style={{
                      color: MUTED,
                      fontFamily:
                        "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    Global delivery
                  </p>
                  <div className="mt-2.5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] sm:text-[13.5px]">
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
                      aria-describedby="languages-tooltip"
                      className="cursor-help border-b border-dotted bg-transparent p-0 underline-offset-4"
                      style={{
                        color: NAVY,
                        borderColor: MUTED,
                        fontFamily:
                          "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      10 languages
                    </button>
                    <span
                      id="languages-tooltip"
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

                  <span aria-hidden="true" style={{ color: BORDER }}>
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
                      style={{
                        color: NAVY,
                        fontFamily:
                          "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      Multiple locations Â· 100+ countries
                    </span>
                  </div>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[12.5px] uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90 sm:text-[13.5px]"
                    style={{
                      backgroundColor: NAVY,
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
                    className="inline-flex items-center gap-2 rounded-full border-2 px-5 py-2.5 text-[12.5px] uppercase tracking-[0.1em] transition-colors hover:bg-[#F7F8FC] sm:text-[13.5px]"
                    style={{
                      borderColor: NAVY,
                      color: NAVY,
                      fontFamily:
                        "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    Book a demo
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div
                  className="relative overflow-hidden rounded-2xl border shadow-sm"
                  style={{ borderColor: BORDER, aspectRatio: "5 / 4" }}
                >
                  <Image
                    src="/images/cyber/hero-soc-analyst.jpg"
                    alt="SOC analyst with headset monitoring security telemetry on dual screens during a cohort-based SOC analyst learning path session"
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

        <section
          className="border-y py-8"
          style={{ borderColor: BORDER, backgroundColor: "#F7F8FC" }}
        >
          <div className="mtk-page-center">
            <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
              <p
                className="text-[12px] uppercase tracking-[0.18em]"
                style={{
                  color: MUTED,
                  fontFamily:
                    "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                  fontWeight: 600,
                }}
              >
                Standardising the SOC team learning path at
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-80">
                {TRUST_LOGOS.map((l) => (
                  <Image
                    key={l.alt}
                    src={l.src}
                    alt={l.alt}
                    width={120}
                    height={40}
                    className="h-8 w-auto object-contain"
                    style={{ filter: "grayscale(100%)" }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <EdstellarTwoPathsV2 />

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
                The Edstellar five-stage SOC analyst learning track.
              </h2>
              <p
                className="mt-5 text-[16px] leading-[1.6] sm:text-[18px]"
                style={{
                  color: BODY,
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                A structured 26-week tiered SOC analyst learning path that
                lifts your entire SOC team along a clear SOC analyst
                progression path (from L1 triage, to L2 detection, to L3
                hunting and incident command), with cohort-wide labs and
                team-level training milestones at every stage.
              </p>
            </div>

            <ol className="relative mt-12 space-y-6">
              <span
                aria-hidden="true"
                className="absolute left-[18px] top-2 bottom-2 w-px md:left-[22px]"
                style={{ backgroundColor: BORDER }}
              />
              {STAGES.map((s) => (
                <li key={s.num} className="relative">
                  <div
                    className="absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full text-[14px] md:h-11 md:w-11"
                    style={{
                      backgroundColor: NAVY,
                      color: "#FFFFFF",
                      fontFamily:
                        "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    className="ml-14 rounded-2xl border bg-white p-6 sm:p-7 md:ml-16 md:p-8"
                    style={{ borderColor: BORDER }}
                  >
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <p
                          className="text-[12px] uppercase tracking-[0.12em]"
                          style={{
                            color: MUTED,
                            fontFamily:
                              "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                            fontWeight: 700,
                          }}
                        >
                          {s.label}
                        </p>
                        <h3
                          className="mt-1 text-[22px] sm:text-[26px]"
                          style={{
                            color: NAVY,
                            fontFamily:
                              "'Riona Sans Regular', Helvetica, Arial, sans-serif",
                          }}
                        >
                          {s.title}
                        </h3>
                      </div>
                      <span
                        className="self-start rounded-full px-3 py-1 text-[12px] whitespace-nowrap"
                        style={{
                          backgroundColor: NAVY_BG_5,
                          color: NAVY,
                          fontFamily:
                            "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                          fontWeight: 600,
                        }}
                      >
                        Duration: {s.weeks}
                      </span>
                    </div>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                      <div>
                        <p
                          className="mb-3 text-[11px] uppercase tracking-[0.14em]"
                          style={{
                            color: MUTED,
                            fontFamily:
                              "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                            fontWeight: 700,
                          }}
                        >
                          Core training programs
                        </p>
                        <ul className="space-y-2">
                          {s.courses.map((c) => (
                            <li
                              key={c}
                              className="flex items-start gap-2 text-[14px] leading-[1.55] sm:text-[15px]"
                              style={{
                                color: BODY,
                                fontFamily:
                                  "'Riona Sans Light', Helvetica, Arial, sans-serif",
                              }}
                            >
                              <span
                                aria-hidden="true"
                                className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                                style={{ backgroundColor: NAVY }}
                              />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div
                        className="rounded-xl p-5"
                        style={{ backgroundColor: "#F7F8FC" }}
                      >
                        <p
                          className="mb-2 text-[11px] uppercase tracking-[0.14em]"
                          style={{
                            color: MUTED,
                            fontFamily:
                              "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                            fontWeight: 700,
                          }}
                        >
                          Milestone
                        </p>
                        <p
                          className="text-[14px] leading-[1.5] sm:text-[15px]"
                          style={{
                            color: BODY,
                            fontFamily:
                              "'Riona Sans Light', Helvetica, Arial, sans-serif",
                          }}
                        >
                          {s.milestoneBody}
                        </p>
                        <div className="mt-4 flex items-center gap-3">
                          <span
                            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                            style={{
                              backgroundColor:
                                MILESTONE_BG[s.num] ?? LIME,
                              color: NAVY,
                            }}
                            aria-hidden="true"
                          >
                            <MilestoneIcon stage={s.num} />
                          </span>
                          <p
                            className="text-[14px] sm:text-[15px]"
                            style={{
                              color: NAVY,
                              fontFamily:
                                "'Riona Sans Regular', Helvetica, Arial, sans-serif",
                            }}
                          >
                            {s.milestoneTitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 text-center">
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
                Download full curriculum PDF
                <ArrowRightIcon width={16} height={16} />
              </Link>
            </div>
          </div>
        </section>

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
                Core skills your SOC analyst skilling path will build across your team
              </h2>
              <p
                className="mt-5 text-[16px] leading-[1.6] sm:text-[18px]"
                style={{
                  color: BODY,
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                Edstellar delivers a targeted SOC analyst competency path
                across six critical SOC domains, calibrated against SANS,
                ISC2 and ISACA capability frameworks, and equally suited as
                a SOC analyst upskilling path for existing analysts or a SOC
                analyst reskilling path for IT and infrastructure staff
                moving into the SOC.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {SKILLS.map((skill) => (
                <article
                  key={skill.title}
                  className="rounded-2xl border bg-white p-7 transition-all hover:-translate-y-0.5 hover:shadow-md"
                  style={{ borderColor: BORDER }}
                >
                  <h3
                    className="text-[20px] sm:text-[22px]"
                    style={{
                      color: NAVY,
                      fontFamily:
                        "'Riona Sans Regular', Helvetica, Arial, sans-serif",
                    }}
                  >
                    {skill.title}
                  </h3>
                  <p
                    className="mt-3 text-[14px] leading-[1.55] sm:text-[15px]"
                    style={{
                      color: BODY,
                      fontFamily:
                        "'Riona Sans Light', Helvetica, Arial, sans-serif",
                    }}
                  >
                    {skill.body}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border px-3 py-1 text-[11px]"
                        style={{
                          borderColor: BORDER,
                          color: MUTED,
                          fontFamily:
                            "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                          fontWeight: 600,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="mtk-page-center">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <h2
                  className="text-[32px] leading-[1.08] sm:text-[40px] lg:text-[46px]"
                  style={{
                    color: NAVY,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  Edstellar&apos;s SOC instructor bench: practitioners, not presenters
                </h2>
                <p
                  className="mt-5 text-[16px] leading-[1.6] sm:text-[18px]"
                  style={{
                    color: BODY,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  Every cohort of the Edstellar mentor-led SOC analyst
                  learning path is led by certified practitioners
                  with deep Fortune 500 SOC experience across BFSI,
                  healthcare, SaaS and the public sector, so the
                  cohort-based SOC analyst learning path delivered to your
                  team is taught by people who have actually run production
                  SOCs.
                </p>
              </div>
              <div
                className="flex shrink-0 items-center gap-4 rounded-2xl border bg-white px-5 py-4"
                style={{ borderColor: BORDER }}
              >
                <Stat label="Avg rating" value="4.9" />
                <span
                  aria-hidden="true"
                  className="h-10 w-px"
                  style={{ backgroundColor: BORDER }}
                />
                <Stat label="Cyber trainers" value="200+" />
                <span
                  aria-hidden="true"
                  className="h-10 w-px"
                  style={{ backgroundColor: BORDER }}
                />
                <Stat label="Avg yrs exp" value="14+" />
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {TRAINERS.map((t) => (
                <article
                  key={t.name}
                  className="overflow-hidden rounded-2xl border bg-white transition-shadow hover:shadow-md"
                  style={{ borderColor: BORDER }}
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={t.image}
                      alt={`${t.name}, ${t.role}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div
                      className="absolute right-3 top-3 rounded-full px-3 py-1 text-[11px]"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.95)",
                        color: NAVY,
                        fontFamily:
                          "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      {t.certs[0]}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3
                      className="text-[20px] sm:text-[22px]"
                      style={{
                        color: NAVY,
                        fontFamily:
                          "'Riona Sans Regular', Helvetica, Arial, sans-serif",
                      }}
                    >
                      {t.name}
                    </h3>
                    <p
                      className="mt-1 text-[13px]"
                      style={{
                        color: NAVY,
                        fontFamily:
                          "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {t.role}
                    </p>
                    <p
                      className="mt-4 text-[14px] leading-[1.55]"
                      style={{
                        color: BODY,
                        fontFamily:
                          "'Riona Sans Light', Helvetica, Arial, sans-serif",
                      }}
                    >
                      {t.bio}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {t.certs.map((c) => (
                        <span
                          key={c}
                          className="rounded-full border px-3 py-1 text-[11px]"
                          style={{
                            borderColor: BORDER,
                            color: MUTED,
                            fontFamily:
                              "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                            fontWeight: 600,
                          }}
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                    <div
                      className="mt-5 flex items-center justify-between border-t pt-4 text-[13px]"
                      style={{ borderColor: BORDER, color: MUTED }}
                    >
                      <span>
                        â˜… {t.rating} <span>({t.reviews})</span>
                      </span>
                      <span style={{ fontWeight: 600 }}>{t.experience}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

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
                  Outcomes and measurable ROI from the SOC analyst capability path.
                </h2>
                <p
                  className="mt-5 text-[16px] leading-[1.6] sm:text-[18px]"
                  style={{
                    color: BODY,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  Edstellar&apos;s SOC analyst capability path is built to
                  move team metrics, not attendance reports. Each cohort
                  closes with documented before / after KPIs the board can
                  read, and a clear 12-month SOC analyst maturity path for
                  your security function.
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
                    Cohort scoreboard (sample)
                  </h3>
                  <div className="mt-5 space-y-5">
                    <ProgressRow label="Detection coverage gain" value={78} display="+78%" />
                    <ProgressRow label="MTTD reduction" value={62} display="âˆ’62%" />
                    <ProgressRow label="MTTC reduction" value={41} display="âˆ’41%" />
                    <ProgressRow label="Cert pass rate" value={94} display="94%" />
                  </div>
                  <p
                    className="mt-6 text-[12px]"
                    style={{
                      color: MUTED,
                      fontFamily:
                        "'Riona Sans Light', Helvetica, Arial, sans-serif",
                    }}
                  >
                    Indicative outcomes from Edstellar SOC cohorts, 2023-2025.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-16 md:py-20"
          style={{ backgroundColor: NAVY }}
        >
          <div className="mtk-page-center">
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <h2
                  className="text-[32px] leading-[1.08] text-white sm:text-[40px] lg:text-[46px]"
                  style={{
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  Customized instructor-led SOC analyst learning path for your enterprise stack.
                </h2>
                <p
                  className="mt-5 text-[16px] leading-[1.6] text-white/85 sm:text-[18px]"
                  style={{
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  Edstellar integrates your SIEM, EDR, ticketing and
                  threat-intel pipelines directly into a tailored SOC analyst
                  learning path, so your team graduates ready to work in
                  your environment, not someone else&apos;s. The result is
                  an industry-aligned SOC analyst learning path mapped to
                  your sector, your regulatory regime and your SOC maturity
                  baseline.
                </p>

                <ul className="mt-8 space-y-5">
                  <CustomBullet
                    title="Integrate your real telemetry"
                    body="Splunk, Sentinel, QRadar, Elastic and CrowdStrike pipelines wired directly into lab exercises so analysts run drills in environments that match production."
                  />
                  <CustomBullet
                    title="Industry-aligned scenarios"
                    body="BFSI fraud, healthcare ransomware, SaaS data exfiltration, OT and critical-infrastructure scenarios mapped to your sector and regulatory regime."
                  />
                  <CustomBullet
                    title="Skills-gap reporting"
                    body="Baseline and post-program assessments per analyst, with executive-ready dashboards covering NICE Framework role coverage and skill readiness."
                  />
                </ul>
              </div>
              <div className="lg:col-span-5">
                <div
                  className="rounded-2xl border bg-white p-6 sm:p-8"
                  style={{ borderColor: BORDER }}
                >
                  <h3
                    className="text-[20px] sm:text-[22px]"
                    style={{
                      color: NAVY,
                      fontFamily:
                        "'Riona Sans Regular', Helvetica, Arial, sans-serif",
                    }}
                  >
                    Ready to scope your team&apos;s SOC analyst readiness path?
                  </h3>
                  <p
                    className="mt-3 text-[14px] leading-[1.55] sm:text-[15px]"
                    style={{
                      color: BODY,
                      fontFamily:
                        "'Riona Sans Light', Helvetica, Arial, sans-serif",
                    }}
                  >
                    Our learning advisors will scope your stack, regulatory
                    landscape and SOC maturity in a 30-minute call and return
                    a custom SOC analyst learning path proposal within five
                    business days.
                  </p>
                  <Link
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13px] uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90 sm:text-[14px]"
                    style={{
                      backgroundColor: NAVY,
                      fontFamily:
                        "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    Consult a team expert
                    <ArrowRightIcon width={16} height={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                Plans for every SOC team size and SOC analyst employee learning path
              </h2>
              <p
                className="mt-5 text-[16px] leading-[1.6] sm:text-[18px]"
                style={{
                  color: BODY,
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                Edstellar&apos;s engagement models flex from a focused L1
                cohort to a full enterprise role-based SOC analyst learning
                path, plus a SOC analyst upskilling path for analysts already
                in seat.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <PricingCard
                tier="Team starter"
                blurb="Up to 20 analysts. Best for a single L1 / L2 cohort within a cohort-based SOC analyst learning path."
                cta="Request info"
                features={[
                  "Standard SOC analyst learning path",
                  "Team progress dashboard",
                  "Training resources for every member",
                ]}
              />
              <PricingCard
                tier="Enterprise scale"
                blurb="50+ analysts across regions. Full SOC standardisation on a role-based SOC analyst learning path."
                cta="Get a quote"
                price="Recommended"
                highlighted
                features={[
                  "Industry customisation included",
                  "Dedicated learning services manager",
                  "Skills gap and ROI analytics",
                  "Volume training pricing",
                ]}
              />
              <PricingCard
                tier="Custom learning path"
                blurb="A custom SOC analyst learning path with blended live and on-demand delivery for rapid SOC ramp-up."
                cta="Request proposal"
                features={[
                  "Weekly live mentor sessions",
                  "Internal project sandbox",
                  "Priority 1:1 support",
                ]}
              />
            </div>
          </div>
        </section>

        <SocAnalystLearningPathFAQ />

        <section
          id="contact"
          className="py-16 md:py-20"
          style={{ backgroundColor: "#F7F8FC" }}
        >
          <div className="mtk-page-center">
            <div
              className="mx-auto max-w-4xl rounded-2xl border bg-white p-8 shadow-sm sm:p-10"
              style={{ borderColor: BORDER }}
            >
              <div className="text-center">
                <h2
                  className="text-[28px] leading-[1.1] sm:text-[34px] lg:text-[40px]"
                  style={{
                    color: NAVY,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  Speak with an Edstellar SOC advisor
                </h2>
                <p
                  className="mt-4 text-[15px] leading-[1.6] sm:text-[17px]"
                  style={{
                    color: BODY,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  Connect with our learning advisors to scope a customized
                  instructor-led SOC analyst learning path for your team:
                  virtual, on-site, or blended with labs.
                </p>
              </div>

              <form className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
                <FormField label="Full name" placeholder="Jane Doe" />
                <FormField
                  label="Work email"
                  type="email"
                  placeholder="jane@company.com"
                />
                <FormField label="Company name" placeholder="Acme Corp" />
                <div className="space-y-2">
                  <Label>Team size</Label>
                  <select
                    className="w-full rounded-lg border bg-white px-3 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1B1D52]"
                    style={{ borderColor: BORDER, color: BODY }}
                  >
                    <option>1 to 10 analysts</option>
                    <option>11 to 50 analysts</option>
                    <option>50+ analysts</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label>How can we help?</Label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your SOC maturity and training goals..."
                    className="w-full rounded-lg border bg-white px-3 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1B1D52]"
                    style={{ borderColor: BORDER, color: BODY }}
                  />
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full rounded-lg px-6 py-3 text-[13px] uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90 sm:text-[14px]"
                    style={{
                      backgroundColor: NAVY,
                      fontFamily:
                        "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    Submit request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-16 md:py-20" style={{ backgroundColor: NAVY }}>
          <div className="mtk-page-center text-center">
            <h2
              className="text-[28px] leading-[1.1] text-white sm:text-[36px] lg:text-[44px]"
              style={{
                fontFamily:
                  "'Riona Sans Light', Helvetica, Arial, sans-serif",
              }}
            >
              Future-proof your corporate SOC analyst learning path with Edstellar
            </h2>
            <p
              className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.6] text-white/85 sm:text-[17px]"
              style={{
                fontFamily:
                  "'Riona Sans Light', Helvetica, Arial, sans-serif",
              }}
            >
              Join 200+ enterprise security teams standardising their
              blue-team capability on a measurable, repeatable security
              operations learning path.
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
                Consult a team lead
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
                Download enterprise PDF
              </Link>
            </div>
          </div>
        </section>

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
                  Explore other relevant learning paths
                </h2>
                <p
                  className="mt-5 text-[16px] leading-[1.6] sm:text-[18px]"
                  style={{
                    color: BODY,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  Build adjacent capabilities across your security team with
                  the wider Edstellar security operations learning path
                  library.
                </p>
              </div>
              <Link
                href="/#learning-paths"
                className="hidden items-center gap-2 text-[14px] uppercase tracking-[0.08em] md:inline-flex"
                style={{
                  color: NAVY,
                  fontFamily:
                    "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                  fontWeight: 600,
                }}
              >
                View all learning paths
                <ArrowRightIcon width={16} height={16} />
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {RELATED_PATHS.map((p) => (
                <a
                  key={p.title}
                  href={p.href}
                  className="group flex flex-col overflow-hidden rounded-2xl border bg-white transition-shadow hover:shadow-md"
                  style={{ borderColor: BORDER }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
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
                      className="mt-5 flex items-center justify-between border-t pt-4 text-[12px]"
                      style={{ borderColor: BORDER, color: MUTED }}
                    >
                      <span>{p.weeks}</span>
                      <span>{p.badge}</span>
                      <span>{p.seats}</span>
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

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <p
        className="text-[20px] leading-none sm:text-[24px]"
        style={{
          color: NAVY,
          fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif",
        }}
      >
        {value}
      </p>
      <p
        className="mt-1 text-[10px] uppercase tracking-[0.12em] sm:text-[11px]"
        style={{
          color: MUTED,
          fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif",
          fontWeight: 600,
        }}
      >
        {label}
      </p>
    </div>
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

function CustomBullet({ title, body }: { title: string; body: string }) {
  return (
    <li className="flex gap-4">
      <span
        aria-hidden="true"
        className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: LIME, color: NAVY, fontWeight: 700 }}
      >
        âœ“
      </span>
      <div>
        <p
          className="text-[18px] sm:text-[20px] text-white"
          style={{
            fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif",
          }}
        >
          {title}
        </p>
        <p
          className="mt-2 text-[14px] leading-[1.55] text-white/85 sm:text-[15px]"
          style={{
            fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif",
          }}
        >
          {body}
        </p>
      </div>
    </li>
  );
}

function PricingCard({
  tier,
  blurb,
  features,
  cta,
  price,
  highlighted = false,
}: {
  tier: string;
  blurb: string;
  features: string[];
  cta: string;
  price?: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border bg-white p-7 transition-shadow ${
        highlighted ? "shadow-lg lg:scale-[1.02]" : "shadow-sm"
      }`}
      style={{
        borderColor: highlighted ? NAVY : BORDER,
        borderWidth: highlighted ? 2 : 1,
      }}
    >
      {highlighted && (
        <span
          className="absolute right-4 top-4 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.12em]"
          style={{
            backgroundColor: LIME,
            color: NAVY,
            fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif",
            fontWeight: 700,
          }}
        >
          Recommended
        </span>
      )}
      <h3
        className="text-[22px] sm:text-[24px]"
        style={{
          color: NAVY,
          fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif",
        }}
      >
        {tier}
      </h3>
      <p
        className="mt-3 text-[14px] leading-[1.55]"
        style={{
          color: BODY,
          fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif",
        }}
      >
        {blurb}
      </p>
      {price && (
        <p
          className="mt-6 text-[14px]"
          style={{
            color: NAVY,
            fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif",
            fontWeight: 700,
          }}
        >
          {price}
        </p>
      )}
      <ul className="mt-6 flex-1 space-y-3">
        {features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-2 text-[14px] leading-[1.55] sm:text-[15px]"
            style={{
              color: BODY,
              fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif",
            }}
          >
            <span
              aria-hidden="true"
              className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ backgroundColor: NAVY }}
            />
            {f}
          </li>
        ))}
      </ul>
      <Link
        href="#contact"
        className="mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[13px] uppercase tracking-[0.1em] transition-opacity hover:opacity-90 sm:text-[14px]"
        style={{
          backgroundColor: highlighted ? NAVY : "transparent",
          color: highlighted ? "#FFFFFF" : NAVY,
          border: `2px solid ${NAVY}`,
          fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif",
          fontWeight: 600,
        }}
      >
        {cta}
        <ArrowRightIcon width={16} height={16} />
      </Link>
    </div>
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
    <div className="space-y-2">
      <Label>{label}</Label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border bg-white px-3 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1B1D52]"
        style={{ borderColor: BORDER, color: BODY }}
      />
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label
      className="block text-[13px]"
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
