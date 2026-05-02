import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "SOC Analyst Learning Path for Enterprise Teams | Edstellar",
  description:
    "Edstellar's SOC Analyst Learning Path standardises blue-team capability across enterprise security teams with a 5-stage curriculum, mentor-led training, certifications, and measurable risk-reduction outcomes.",
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
    milestoneTitle: "Certified SIEM Analyst",
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
    milestoneTitle: "Certified Incident Responder",
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
      "SOC metrics, MTTD / MTTR optimisation, and analyst career paths",
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
    badge: "5 certifications",
    seats: "10+ seats",
    image: "/images/cyber/path-pentest.jpg",
  },
  {
    href: "#",
    category: "Cloud security",
    title: "Cloud security engineer path",
    body: "AWS / Azure / GCP security specialty paths plus CCSP. Design, deploy and harden multi-cloud workloads end-to-end.",
    weeks: "24 weeks",
    badge: "4 certifications",
    seats: "10+ seats",
    image: "/images/cyber/path-cloud-eng.jpg",
  },
  {
    href: "#",
    category: "GRC",
    title: "Governance, risk & compliance path",
    body: "CISA, CRISC and CISM with ISO 27001 Lead Auditor. Run audits, frameworks and risk programs at the enterprise level.",
    weeks: "22 weeks",
    badge: "3 certifications",
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
    badge: "4 certifications",
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
  { stat: "−58%", label: "Median dwell-time reduction post-cohort" },
  { stat: "−41%", label: "Mean-time-to-contain improvement" },
  { stat: "94%", label: "Certification first-attempt pass rate" },
  { stat: "200+", label: "SOC teams trained worldwide" },
];

const DELIVERY_MODES = [
  "Live instructor-led",
  "Virtual classroom",
  "On-site bootcamp",
  "Self-paced eLearning",
  "1:1 mentoring",
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

export default function SocAnalystLearningPathPage() {
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
                  ›
                </li>
                <li>
                  <Link
                    href="/#learning-paths"
                    className="transition-colors hover:text-[#1B1D52]"
                  >
                    Learning paths
                  </Link>
                </li>
                <li aria-hidden="true" style={{ color: "#9CA3AF" }}>
                  ›
                </li>
                <li
                  aria-current="page"
                  style={{ color: NAVY, fontWeight: 600 }}
                >
                  SOC analyst
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
                  SOC analyst learning path for{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">enterprise teams</span>
                    <span
                      aria-hidden="true"
                      className="absolute bottom-1 left-0 right-0 -z-0 h-2.5 sm:h-3"
                      style={{
                        backgroundColor: LIME,
                        opacity: 0.55,
                      }}
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
                  Standardise blue-team capability across your security teams
                  with a structured five-stage curriculum that combines
                  mentor-led instruction, hands-on SIEM and SOAR labs,
                  certification milestones and measurable risk-reduction
                  outcomes.
                </p>

                <div
                  className="mt-7 flex flex-wrap items-center gap-3 rounded-xl border px-5 py-4 text-[14px] leading-[1.45] sm:text-[15px]"
                  style={{
                    borderColor: BORDER,
                    backgroundColor: NAVY_BG_5,
                    color: BODY,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full"
                    style={{ backgroundColor: LIME, color: NAVY, fontWeight: 700 }}
                  >
                    ↑
                  </span>
                  <span>
                    <strong style={{ color: NAVY
                  }}>Field signal:</strong> Enterprises with continuously
                    trained SOC teams report up to 58% lower dwell time and 41%
                    faster mean-time-to-contain across the portfolio.
                  </span>
                </div>

                <div className="mt-7">
                  <p
                    className="text-[11px] uppercase tracking-[0.14em]"
                    style={{
                      color: MUTED,
                      fontFamily:
                        "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    Modes of delivery
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {DELIVERY_MODES.map((mode) => (
                      <span
                        key={mode}
                        className="rounded-full border bg-white px-3.5 py-1.5 text-[12px] sm:text-[13px]"
                        style={{
                          borderColor: BORDER,
                          color: NAVY,
                          fontFamily:
                            "'Riona Sans Regular', Helvetica, Arial, sans-serif",
                        }}
                      >
                        {mode}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
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
                    Request team quote
                    <ArrowRightIcon width={16} height={16} />
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 text-[13px] uppercase tracking-[0.1em] transition-colors hover:bg-[#F7F8FC] sm:text-[14px]"
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
                    src="/images/cyber/path-soc.jpg"
                    alt="SOC analysts triaging an incident inside a security operations centre"
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
                Standardising SOC teams at
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
                The five-stage{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">SOC analyst journey</span>
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
                A structured 26-week curriculum that takes analysts from L1
                triage to L3 detection-engineering and incident command, with
                hands-on labs and certification milestones at every stage.
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
                          Core courses
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
                            aria-hidden="true"
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full"
                            style={{ backgroundColor: LIME, color: NAVY }}
                          >
                            ✓
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
                Core skills your SOC analysts will build
              </h2>
              <p
                className="mt-5 text-[16px] leading-[1.6] sm:text-[18px]"
                style={{
                  color: BODY,
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                Targeted competency development across six critical SOC
                domains, calibrated against SANS, ISC2 and (ISACA) capability
                frameworks.
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
                  Meet your SOC instructors
                </h2>
                <p
                  className="mt-5 text-[16px] leading-[1.6] sm:text-[18px]"
                  style={{
                    color: BODY,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  Every cohort is led by certified practitioners with deep
                  Fortune 500 SOC experience across BFSI, healthcare, SaaS and
                  the public sector.
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
                        ★ {t.rating} <span>({t.reviews})</span>
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
                  Outcomes and{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">measurable ROI</span>
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
                  The SOC analyst learning path is engineered to move team
                  metrics, not just attendance reports. Every cohort closes
                  with documented before / after KPIs that the board can read.
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
                    <ProgressRow label="MTTD reduction" value={62} display="−62%" />
                    <ProgressRow label="MTTC reduction" value={41} display="−41%" />
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
                  Customise the SOC path for your{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">enterprise stack</span>
                    <span
                      aria-hidden="true"
                      className="absolute bottom-1 left-0 right-0 -z-0 h-2.5 sm:h-3"
                      style={{ backgroundColor: LIME, opacity: 0.6 }}
                    />
                  </span>
                  .
                </h2>
                <p
                  className="mt-5 text-[16px] leading-[1.6] text-white/85 sm:text-[18px]"
                  style={{
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  We integrate your SIEM, EDR, ticketing and threat-intel
                  pipelines directly into the curriculum so analysts graduate
                  ready to work in your environment, not someone else&apos;s.
                </p>

                <ul className="mt-8 space-y-5">
                  <CustomBullet
                    title="Integrate your real telemetry"
                    body="Splunk, Sentinel, QRadar, Elastic and CrowdStrike pipelines wired directly into lab exercises so analysts run drills in environments that match production."
                  />
                  <CustomBullet
                    title="Industry-specific scenarios"
                    body="BFSI fraud, healthcare ransomware, SaaS data exfiltration, OT and critical-infrastructure scenarios mapped to your sector and regulatory regime."
                  />
                  <CustomBullet
                    title="Skills-gap reporting"
                    body="Baseline and post-program assessments per analyst, with executive-ready dashboards covering NICE Framework role coverage and certification readiness."
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
                    Ready to tailor your team&apos;s path?
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
                    a custom curriculum proposal within five business days.
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
                Plans for every team size
              </h2>
              <p
                className="mt-5 text-[16px] leading-[1.6] sm:text-[18px]"
                style={{
                  color: BODY,
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                Flexible engagement models scale from a focused L1 cohort to a
                full enterprise SOC standardisation program.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <PricingCard
                tier="Team starter"
                blurb="Up to 20 analysts. Best for a single L1 / L2 cohort."
                cta="Request info"
                features={[
                  "Standard SOC analyst learning path",
                  "Team progress dashboard",
                  "Certification vouchers for every member",
                ]}
              />
              <PricingCard
                tier="Enterprise scale"
                blurb="50+ analysts across regions. Full SOC standardisation."
                cta="Get a quote"
                price="Recommended"
                highlighted
                features={[
                  "Industry customisation included",
                  "Dedicated learning services manager",
                  "Skills gap and ROI analytics",
                  "Bulk certification pricing",
                ]}
              />
              <PricingCard
                tier="Custom bootcamp"
                blurb="Blended live and on-demand training for rapid SOC ramp-up."
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
                  Connect with our learning advisors to scope a custom SOC
                  analyst learning path for your team.
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
              Future-proof your SOC with the Edstellar learning path
            </h2>
            <p
              className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.6] text-white/85 sm:text-[17px]"
              style={{
                fontFamily:
                  "'Riona Sans Light', Helvetica, Arial, sans-serif",
              }}
            >
              Join 200+ enterprise security teams standardising their blue-team
              capability on a measurable, repeatable program.
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
                  the wider Edstellar learning-path library.
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
        ✓
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
