"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRightIcon } from "@/components/icons";

type Domain = {
  name: string;
  count: number;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
};

type LearningPath = {
  label: string;
  cardTitle: string;
  cardDescription: string;
  image: string;
  imageAlt: string;
  href: string;
};

const DOMAINS: Domain[] = [
  {
    name: "Cybersecurity Fundamentals & Architecture",
    count: 14,
    description:
      "Foundational programs covering CIA triad, security architecture, threat modelling and Zero-Trust principles.",
    image: "/images/cyber/course-ethical-hacking.jpg",
    imageAlt: "Cybersecurity fundamentals",
    href: "https://www.edstellar.com/category/cybersecurity-training",
  },
  {
    name: "Network Security",
    count: 12,
    description:
      "Firewalls, IDS/IPS, segmentation, Cisco/Palo Alto/Fortinet/Check Point, protect perimeters and east-west traffic.",
    image: "/images/cyber/course-network.jpg",
    imageAlt: "Network security",
    href: "https://www.edstellar.com/category/cybersecurity-training",
  },
  {
    name: "Cloud Security",
    count: 11,
    description:
      "AWS / Azure / GCP security, CCSP, container hardening and cloud-native architecture for multi-cloud teams.",
    image: "/images/cyber/course-cloud.jpg",
    imageAlt: "Cloud security",
    href: "https://www.edstellar.com/category/cybersecurity-training",
  },
  {
    name: "Data Privacy & Security",
    count: 10,
    description:
      "GDPR, DPDP, CCPA, PII handling, DLP and encryption, keep regulated data safe across its lifecycle.",
    image: "/images/cyber/cert-gdpr.jpg",
    imageAlt: "Data privacy and security",
    href: "https://www.edstellar.com/category/cybersecurity-training",
  },
  {
    name: "Identity & Access Management",
    count: 13,
    description:
      "Zero-trust, IAM, PAM, federated-identity, Okta, Azure AD, SailPoint, CyberArk, BeyondTrust and more.",
    image: "/images/cyber/course-iam.jpg",
    imageAlt: "Identity and access management",
    href: "https://www.edstellar.com/category/cybersecurity-training",
  },
  {
    name: "Penetration Testing & Vulnerability Management",
    count: 16,
    description:
      "CEH v13, OSCP, advanced threat simulation, web/app pentest, AD attacks and red-team operations.",
    image: "/images/cyber/path-pentest.jpg",
    imageAlt: "Penetration testing",
    href: "https://www.edstellar.com/category/cybersecurity-training",
  },
  {
    name: "Application Security & DevSecOps",
    count: 9,
    description:
      "Secure SDLC, OWASP Top 10, container & IaC scanning, CSSLP, embed security into every CI/CD pipeline.",
    image: "/images/cyber/course-appsec.jpg",
    imageAlt: "Application security",
    href: "https://www.edstellar.com/category/cybersecurity-training",
  },
  {
    name: "Governance, Risk & Compliance",
    count: 11,
    description:
      "CISM, CISA, CRISC, ISO 27001 Lead Auditor and SOC 2, operate audits, frameworks and risk programs.",
    image: "/images/cyber/course-grc.jpg",
    imageAlt: "Governance, risk and compliance",
    href: "https://www.edstellar.com/category/cybersecurity-training",
  },
];

const LEARNING_PATHS: LearningPath[] = [
  {
    label: "SOC ANALYST",
    cardTitle: "SOC Analyst Path",
    cardDescription:
      "From log analysis to incident triage, Security+, CySA+, Splunk and SIEM/SOAR fundamentals build the L1→L3 SOC career ladder.",
    image: "/images/cyber/path-soc.jpg",
    imageAlt: "SOC analyst",
    href: "/learning-paths/soc-analyst-v7",
  },
  {
    label: "PENETRATION TESTER",
    cardTitle: "Penetration Tester Path",
    cardDescription:
      "CEH v13 → OSCP → OSEP, offensive security curriculum covering web, network, Active Directory and red-team operations.",
    image: "/images/cyber/path-pentest.jpg",
    imageAlt: "Penetration tester",
    href: "https://www.edstellar.com/learning-paths/penetration-tester",
  },
  {
    label: "CLOUD SECURITY ENGINEER",
    cardTitle: "Cloud Security Engineer Path",
    cardDescription:
      "AWS / Azure / GCP security specialty paths plus CCSP, design, deploy and harden multi-cloud workloads end-to-end.",
    image: "/images/cyber/path-cloud-eng.jpg",
    imageAlt: "Cloud security engineer",
    href: "https://www.edstellar.com/learning-paths/cloud-security-engineer",
  },
  {
    label: "GRC MANAGER",
    cardTitle: "Governance, Risk & Compliance Path",
    cardDescription:
      "CISA → CRISC → CISM with ISO 27001 Lead Auditor, runs audits, frameworks and risk programs at the enterprise level.",
    image: "/images/cyber/path-grc-mgr.jpg",
    imageAlt: "GRC manager",
    href: "https://www.edstellar.com/learning-paths/grc-manager",
  },
  {
    label: "SECURITY ARCHITECT",
    cardTitle: "Security Architect Path",
    cardDescription:
      "CISSP → SABSA → Microsoft SC-100, define Zero-Trust architectures and security reference models for the whole business.",
    image: "/images/cyber/path-architect.jpg",
    imageAlt: "Security architect",
    href: "https://www.edstellar.com/learning-paths/security-architect",
  },
  {
    label: "DEVSECOPS ENGINEER",
    cardTitle: "DevSecOps Engineer Path",
    cardDescription:
      "Secure CI/CD, container security, IaC scanning, OWASP and CSSLP, embed security into every stage of the SDLC.",
    image: "/images/cyber/path-devsecops.jpg",
    imageAlt: "DevSecOps engineer",
    href: "https://www.edstellar.com/learning-paths/devsecops-engineer",
  },
  {
    label: "CISO TRACK",
    cardTitle: "CISO Leadership Track",
    cardDescription:
      "Executive cybersecurity leadership, board reporting, cyber risk quantification, M&A due diligence and program governance.",
    image: "/images/cyber/path-ciso.jpg",
    imageAlt: "CISO track",
    href: "https://www.edstellar.com/learning-paths/ciso",
  },
];

const TOTAL_TRAININGS = DOMAINS.reduce((s, d) => s + d.count, 0);

const DELIVERY_MODES = [
  "Virtual ILT",
  "On-site",
  "Off-site",
  "Blended",
  "Multi-language",
  "Global",
];

type Trainer = {
  name: string;
  role: string;
  location: string;
  rating: string;
  reviews: number;
  trainingSince: number;
  experience: number;
  bio: string;
  certs: string[];
  image: string;
};

const TRAINERS: Trainer[] = [
  {
    name: "Akash Iyer",
    role: "Offensive security & red-team trainer",
    location: "Bengaluru, India",
    rating: "4.9",
    reviews: 411,
    trainingSince: 2012,
    experience: 16,
    bio: "Offensive-security practitioner running red-team and penetration-testing programs for Fortune 500 banks and SaaS firms. Maps every cohort to MITRE ATT&CK and live SOC scenarios.",
    certs: ["CISSP", "OSCP", "CEH v13"],
    image: "/images/cyber/trainer-akash.jpg",
  },
  {
    name: "Priya Krishnan",
    role: "SOC & threat-intelligence trainer",
    location: "Pune, India",
    rating: "4.9",
    reviews: 327,
    trainingSince: 2014,
    experience: 13,
    bio: "Former SOC lead at a Tier-1 Indian bank. Builds blue-team programs covering SIEM tuning, threat hunting, and incident response across BFSI, healthcare and SaaS clients.",
    certs: ["GCIA", "GCIH", "CySA+"],
    image: "/images/cyber/trainer-devi.jpg",
  },
  {
    name: "Sarah Mitchell",
    role: "GRC & compliance trainer",
    location: "London, United Kingdom",
    rating: "4.8",
    reviews: 264,
    trainingSince: 2011,
    experience: 17,
    bio: "ISO 27001 Lead Auditor with deep delivery across UK, EU and Middle East enterprises. Specialises in NIS2, DORA, GDPR audit readiness and ISMS implementation.",
    certs: ["CISM", "CRISC", "ISO 27001 LA"],
    image: "/images/cyber/trainer-deepak.jpg",
  },
  {
    name: "Marcus Chen",
    role: "Cloud security & zero-trust trainer",
    location: "Singapore",
    rating: "4.9",
    reviews: 298,
    trainingSince: 2013,
    experience: 14,
    bio: "Multi-cloud security architect serving APAC banks and SaaS leaders. Trains engineering teams on AWS / Azure / GCP hardening, container security and zero-trust network design.",
    certs: ["CCSP", "AWS Security Specialty", "Azure Security Engineer"],
    image: "/images/cyber/trainer-sudha.jpg",
  },
];

const TRAINER_STATS = [
  { stat: "1,500+", label: "Verified cybersecurity trainers" },
  { stat: "12+ yrs", label: "Average industry experience" },
  { stat: "40+", label: "Cybersecurity frameworks covered" },
  { stat: "4.8 ★", label: "Average learner rating" },
];

type Program = {
  category: string;
  title: string;
  duration: string;
  delivery: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
};

const PROGRAMS: Program[] = [
  {
    category: "Identity & Access",
    title: "CyberArk Training",
    duration: "16 - 24 hrs",
    delivery: "Instructor-led (On-site/Virtual)",
    description:
      "Master Privileged Access Management, vault administration, PSM, CPM and policy-driven credential rotation.",
    image: "/images/cyber/course-iam.jpg",
    imageAlt: "CyberArk training",
    href: "https://www.edstellar.com/course/cyberark-training",
  },
  {
    category: "Threat Defense",
    title: "Ransomware Prevention Training",
    duration: "8 - 16 hrs",
    delivery: "Instructor-led (On-site/Virtual)",
    description:
      "Identify ransomware threats, prevent system breaches and build a resilient response playbook for your team.",
    image: "/images/cyber/cert-secplus.jpg",
    imageAlt: "Ransomware prevention",
    href: "https://www.edstellar.com/course/ransomware-prevention-training",
  },
  {
    category: "Offensive Security",
    title: "Advanced Cybersecurity Threat Simulation Training",
    duration: "24 - 32 hrs",
    delivery: "Instructor-led (On-site/Virtual)",
    description:
      "Hands-on red-team simulation lab covering APTs, lateral movement, AD attacks and post-exploitation in realistic enterprise environments.",
    image: "/images/cyber/cert-oscp.jpg",
    imageAlt: "Threat simulation",
    href: "https://www.edstellar.com/course/advanced-cybersecurity-threat-simulation-training",
  },
  {
    category: "Data Privacy",
    title: "Personally Identifiable Information (PII) Training",
    duration: "8 - 16 hrs",
    delivery: "Instructor-led (On-site/Virtual)",
    description:
      "Identify and classify sensitive PII, apply data-minimization controls and align with GDPR, DPDP and CCPA obligations.",
    image: "/images/cyber/cert-gdpr.jpg",
    imageAlt: "PII training",
    href: "https://www.edstellar.com/course/personally-identifiable-information-pii-training",
  },
  {
    category: "Professional Training",
    title: "CISSP Preparation Training",
    duration: "40 hrs",
    delivery: "Instructor-led (On-site/Virtual)",
    description:
      "Cover all eight CBK domains with practitioner instructors, full mock exams and measurable skill outcomes.",
    image: "/images/cyber/cert-cissp.jpg",
    imageAlt: "CISSP bootcamp",
    href: "https://www.edstellar.com/category/cybersecurity-training",
  },
  {
    category: "Cloud Security",
    title: "Cloud Security Professional (CCSP) Training",
    duration: "32 hrs",
    delivery: "Instructor-led (On-site/Virtual)",
    description:
      "Multi-cloud security architecture, identity, data protection and operations across AWS, Azure and GCP.",
    image: "/images/cyber/course-cloud.jpg",
    imageAlt: "CCSP training",
    href: "https://www.edstellar.com/category/cybersecurity-training",
  },
  {
    category: "Ethical Hacking",
    title: "CEH v13 (AI-Augmented) Training",
    duration: "40 hrs",
    delivery: "Instructor-led (On-site/Virtual)",
    description:
      "EC-Council's flagship offensive-security program with AI-augmented labs and live red-team scenarios.",
    image: "/images/cyber/cert-ceh.jpg",
    imageAlt: "CEH v13",
    href: "https://www.edstellar.com/category/cybersecurity-training",
  },
  {
    category: "GRC",
    title: "ISO 27001 Lead Auditor Training",
    duration: "40 hrs",
    delivery: "Instructor-led (On-site/Virtual)",
    description:
      "Lead ISMS audits end to end, scope, evidence, findings and reporting, against the ISO 27001:2022 standard.",
    image: "/images/cyber/course-grc.jpg",
    imageAlt: "ISO 27001 Lead Auditor",
    href: "https://www.edstellar.com/category/cybersecurity-training",
  },
];

const PROGRAMS_PER_PAGE = 4;

export function ChipChangesTabber() {
  const [activeTab, setActiveTab] = useState<
    "domains" | "programs" | "paths" | "delivery" | "trainers"
  >("domains");
  const [activePath, setActivePath] = useState(0);
  const path = LEARNING_PATHS[activePath];

  const [programSearch, setProgramSearch] = useState("");
  const [programPage, setProgramPage] = useState(1);

  const filteredPrograms = PROGRAMS.filter((p) => {
    const q = programSearch.trim().toLowerCase();
    if (!q) return true;
    return (
      p.title.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  });
  const programPageCount = Math.max(1, Math.ceil(filteredPrograms.length / PROGRAMS_PER_PAGE));
  const safeProgramPage = Math.min(programPage, programPageCount);
  const programStart = (safeProgramPage - 1) * PROGRAMS_PER_PAGE;
  const pagedPrograms = filteredPrograms.slice(programStart, programStart + PROGRAMS_PER_PAGE);

  return (
    <section id="catalog" className="bg-[#0c0c0c] text-white py-16 md:py-20">
      <div className="eds-page-center">
        <h2
          className="text-[36px] leading-[1.05] sm:text-[42px] lg:text-[48px]"
          style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
        >
          Every cybersecurity discipline your enterprise needs, in one trusted catalog.
        </h2>
        <p
          className="mt-3 text-[17px] sm:text-[18px] text-white"
          style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
        >
          Build workforce readiness with cybersecurity training programs
          organized by domains, guided learning paths, expert trainers, and
          enterprise delivery flexibility.
        </p>

        <div
          className="mt-10 flex items-center gap-5 pb-5 uppercase tracking-wider"
          style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
        >
          {([
            { id: "domains", label: "TRAINING DOMAINS" },
            { id: "programs", label: "96 CYBERSECURITY TRAINING PROGRAMS" },
            { id: "paths", label: "LEARNING PATHS" },
            { id: "delivery", label: "DELIVERY" },
            { id: "trainers", label: "TRAINERS" },
          ] as const).map((t, i, arr) => (
            <button
              key={t.id}
              type="button"
              className={`relative pr-5 text-[14px] transition-colors sm:text-[16px] ${
                activeTab === t.id ? "text-white" : "text-[#B3B3B3] hover:text-white"
              } ${i < arr.length - 1 ? "after:absolute after:right-0 after:top-0 after:h-full after:w-[2px] after:bg-[#6366F1]" : ""}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {activeTab === "trainers" ? (
          <div className="mt-2 rounded-2xl bg-white p-6 text-black sm:p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-3xl">
                <h3
                  className="mb-4 text-[24px] leading-[1.1] sm:text-[30px] lg:text-[36px]"
                  style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                >
                  Trainers to meet your cybersecurity needs
                </h3>
                <p
                  className="text-[15px] leading-[1.5] text-eds-gray-500 md:text-[17px]"
                  style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                >
                  Every Edstellar cybersecurity trainer passes a multi-stage
                  vetting process: technical assessment, delivery evaluation
                  by a senior reviewer, reference checks from past corporate
                  cohorts, and a trial session before joining the active bench.
                  Our 1,500+ vetted trainers span India, Singapore, the UK and
                  beyond, covering SOC, offensive security, cloud security and GRC.
                </p>
              </div>
              <a
                href="#contact"
                className="group/cta inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-[#6366F1] px-6 py-3 text-[14px] uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#4F46E5] md:self-center"
                style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
              >
                View all trainers
                <ArrowRightIcon
                  width={16}
                  height={16}
                  className="transition-transform group-hover/cta:translate-x-0.5"
                />
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 rounded-xl border border-eds-gray-200 bg-[#F5F3FF] p-4 lg:grid-cols-4 lg:p-6">
              {TRAINER_STATS.map((s) => (
                <div key={s.label}>
                  <p
                    className="text-[26px] leading-none text-[#6366F1] sm:text-[30px]"
                    style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                  >
                    {s.stat}
                  </p>
                  <p
                    className="mt-2 text-[11px] uppercase tracking-[0.14em] text-eds-gray-500 sm:text-[12px]"
                    style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {TRAINERS.map((t) => (
                <div
                  key={t.name}
                  className="flex flex-col rounded-xl border border-eds-gray-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-[#6366F1]/40 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative h-14 w-14 shrink-0">
                      <Image
                        src={t.image}
                        alt={`${t.name}, ${t.role}`}
                        width={56}
                        height={56}
                        className="h-14 w-14 rounded-full object-cover"
                      />
                      <span
                        className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-[#6366F1]"
                        aria-label="Verified"
                      >
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    </div>
                    <div className="min-w-0">
                      <h4
                        className="text-[16px] text-black"
                        style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                      >
                        {t.name}
                      </h4>
                      <p
                        className="text-[14px] text-eds-gray-500"
                        style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                      >
                        {t.role}
                      </p>
                    </div>
                  </div>

                  <p
                    className="mt-4 text-[13px] text-eds-gray-500"
                    style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                  >
                    {t.location} Â·{" "}
                    <span style={{ color: "#F59E0B" }}>★</span> {t.rating}{" "}
                    <span className="text-eds-gray-400">({t.reviews})</span>
                  </p>
                  <p
                    className="mt-1 text-[13px] text-eds-gray-400"
                    style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                  >
                    Training since {t.trainingSince} Â· {t.experience} yrs in industry
                  </p>

                  <p
                    className="mt-4 text-[14px] leading-[1.5] text-black"
                    style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                  >
                    {t.bio}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                    {t.certs.map((cert) => (
                      <span
                        key={cert}
                        className="rounded-full border border-eds-gray-300 px-2.5 py-1 text-[11px] uppercase tracking-[0.1em] text-eds-gray-500"
                        style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : activeTab === "programs" ? (
          <div className="mt-2 rounded-2xl bg-white p-6 text-black sm:p-8 md:p-10">
            {/* Live Curriculum banner — prominent freshness signal */}
            <div
              className="mb-8 flex items-start gap-4 overflow-hidden rounded-xl border-l-[4px] border-[#C5E826] bg-gradient-to-r from-[#1B1D52] via-[#312E81] to-[#4338CA] px-5 py-4 sm:px-6 sm:py-5"
            >
              <div className="relative mt-[6px] flex h-3 w-3 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C5E826] opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-[#C5E826]" />
              </div>
              <div className="flex-1">
                <p
                  className="text-[15px] leading-[1.55] text-white sm:text-[16px] md:text-[17px]"
                  style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                >
                  Edstellar continuously updates and adds new training programs as cybersecurity tools, platform versions, compliance standards, and threat techniques evolve, ensuring every cohort learns what attackers, security teams, and auditors are focused on today.
                </p>
              </div>
            </div>

            <div className="max-w-3xl">
              <h3
                className="mb-4 text-[24px] leading-[1.1] sm:text-[30px] lg:text-[36px]"
                style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                96 Corporate Cybersecurity Training Programs Aligned to Industry Needs
              </h3>
              <p
                className="text-[15px] leading-[1.5] text-eds-gray-500 md:text-[17px]"
                style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                A live catalog of {TOTAL_TRAININGS}+ cybersecurity group training programs across {DOMAINS.length}{" "}domains, delivered live, on-site or virtual, every program backed by certified trainers and measurable skill outcomes.
              </p>
            </div>

            {/* Search input */}
            <div className="mt-8 flex flex-col gap-3 rounded-xl border border-eds-gray-200 bg-eds-gray-50 px-4 py-3 sm:flex-row sm:items-center sm:gap-4">
              <div className="flex flex-1 items-center gap-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-eds-gray-400"
                  aria-hidden
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
                <input
                  type="search"
                  value={programSearch}
                  onChange={(e) => {
                    setProgramSearch(e.target.value);
                    setProgramPage(1);
                  }}
                  placeholder="Search programs by title, category, or keyword"
                  aria-label="Search cybersecurity programs"
                  className="w-full bg-transparent text-[14px] text-black placeholder:text-eds-gray-400 focus:outline-none md:text-[15px]"
                  style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                />
                {programSearch && (
                  <button
                    type="button"
                    onClick={() => {
                      setProgramSearch("");
                      setProgramPage(1);
                    }}
                    className="shrink-0 text-[12px] uppercase tracking-[0.12em] text-eds-gray-500 hover:text-[#6366F1]"
                    style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                  >
                    Clear
                  </button>
                )}
              </div>
              <p
                className="text-[12px] text-eds-gray-500 sm:text-right"
                style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                {filteredPrograms.length === 0
                  ? "No programs match your search"
                  : `Showing ${programStart + 1}-${Math.min(programStart + PROGRAMS_PER_PAGE, filteredPrograms.length)} of ${filteredPrograms.length}`}
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {pagedPrograms.map((p) => (
                <a
                  key={p.title}
                  href={p.href}
                  target="_blank"
                  rel="noopener"
                  className="eds-arrow-link group flex h-full flex-col overflow-hidden rounded-xl border border-eds-gray-200 bg-white transition-all hover:-translate-y-0.5 hover:border-[#6366F1]/40 hover:shadow-md"
                >
                  <div className="relative aspect-[3/2] overflow-hidden bg-[#0c0c0c]">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span
                      className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-sm border border-white/30 bg-black/40 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-white backdrop-blur-sm"
                      style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />
                      {p.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 px-5 py-5">
                    <h4
                      className="text-[17px] leading-[1.25] text-black"
                      style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                    >
                      {p.title}
                    </h4>
                    <div
                      className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-eds-gray-500"
                      style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                    >
                      <span className="inline-flex items-center gap-1">
                        <span className="h-1 w-1 rounded-full bg-[#6366F1]" /> {p.duration}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <span className="h-1 w-1 rounded-full bg-[#6366F1]" /> {p.delivery}
                      </span>
                    </div>
                    <p
                      className="text-[13px] leading-[1.45] text-eds-gray-500"
                      style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                    >
                      {p.description}
                    </p>
                    <span
                      className="mt-auto inline-flex items-center gap-1.5 pt-3 text-[12px] uppercase tracking-[0.14em] text-[#6366F1]"
                      style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                    >
                      View program
                      <ArrowRightIcon className="eds-arrow" width={14} height={14} />
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Empty state */}
            {filteredPrograms.length === 0 && (
              <div className="mt-6 rounded-xl border border-dashed border-eds-gray-300 bg-eds-gray-50 px-6 py-10 text-center">
                <p
                  className="text-[15px] text-eds-gray-500"
                  style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                >
                  No programs match &ldquo;{programSearch}&rdquo;. Try a different keyword or{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setProgramSearch("");
                      setProgramPage(1);
                    }}
                    className="text-[#6366F1] underline-offset-2 hover:underline"
                    style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                  >
                    clear the search
                  </button>
                  .
                </p>
              </div>
            )}

            {/* Pagination */}
            {programPageCount > 1 && (
              <nav
                aria-label="Programs pagination"
                className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row"
              >
                <p
                  className="text-[12px] text-eds-gray-500"
                  style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                >
                  Page {safeProgramPage} of {programPageCount}
                </p>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setProgramPage((p) => Math.max(1, p - 1))}
                    disabled={safeProgramPage === 1}
                    className="inline-flex h-9 items-center gap-1.5 rounded-full border border-eds-gray-300 px-3 text-[12px] uppercase tracking-[0.12em] text-eds-gray-500 transition-colors hover:border-[#6366F1] hover:text-[#6366F1] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-eds-gray-300 disabled:hover:text-eds-gray-500"
                    style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                  >
                    <ArrowRightIcon width={14} height={14} className="rotate-180" />
                    Prev
                  </button>
                  {Array.from({ length: programPageCount }, (_, i) => i + 1).map((n) => {
                    const active = n === safeProgramPage;
                    return (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setProgramPage(n)}
                        aria-current={active ? "page" : undefined}
                        className={`inline-flex h-9 min-w-9 items-center justify-center rounded-full border px-3 text-[13px] transition-colors ${
                          active
                            ? "border-[#6366F1] bg-[#6366F1] text-white"
                            : "border-eds-gray-300 text-eds-gray-500 hover:border-[#6366F1] hover:text-[#6366F1]"
                        }`}
                        style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                      >
                        {n}
                      </button>
                    );
                  })}
                  <button
                    type="button"
                    onClick={() => setProgramPage((p) => Math.min(programPageCount, p + 1))}
                    disabled={safeProgramPage === programPageCount}
                    className="inline-flex h-9 items-center gap-1.5 rounded-full border border-eds-gray-300 px-3 text-[12px] uppercase tracking-[0.12em] text-eds-gray-500 transition-colors hover:border-[#6366F1] hover:text-[#6366F1] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-eds-gray-300 disabled:hover:text-eds-gray-500"
                    style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                  >
                    Next
                    <ArrowRightIcon width={14} height={14} />
                  </button>
                </div>
              </nav>
            )}

            <div
              className="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-eds-gray-200 bg-[#F5F3FF] px-5 py-4 text-center md:flex-row md:text-left"
            >
              <p
                className="text-[14px] text-eds-gray-500 md:text-[15px]"
                style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                Looking for a specific training program or role-based
                training solution? Our team can match you to any of the
                {" "}{TOTAL_TRAININGS}+{" "}programs in the live catalog, or build a custom program around your exact stack, roles, and threat model.
              </p>
              <a
                href="#contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-[#6366F1] px-5 py-2 text-[12px] uppercase tracking-[0.12em] text-[#6366F1] transition-colors hover:bg-[#6366F1] hover:text-white"
                style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
              >
                Enquire Now
                <ArrowRightIcon width={14} height={14} />
              </a>
            </div>
          </div>
        ) : activeTab === "delivery" ? (
          <div className="mt-2 grid min-h-[420px] overflow-hidden rounded-2xl bg-white text-black md:grid-cols-2">
            <div className="flex flex-col justify-center px-8 py-12 sm:px-12 md:p-16">
              <h3
                className="mb-6 text-[24px] leading-[1.1] tracking-tight sm:text-[30px] lg:text-[36px]"
                style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                Onsite, off-site, virtual.
              </h3>
              <p
                className="mb-8 max-w-md text-[16px] leading-[1.5] text-eds-gray-500 md:text-[18px]"
                style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                Global delivery in any language, on any schedule, with the
                same trainer quality and outcomes whether your team is
                co-located, hybrid or fully remote.
              </p>
              <div
                className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.14em] text-eds-gray-500"
                style={{ fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif", fontWeight: 600 }}
              >
                {DELIVERY_MODES.map((mode) => (
                  <span
                    key={mode}
                    className="rounded-full border border-eds-gray-300 px-3 py-1 transition-colors hover:border-[#6366F1] hover:text-[#6366F1]"
                  >
                    {mode}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative min-h-[280px] bg-[#f0f0f0] md:min-h-full">
              <Image
                src="/images/cyber/hero-team-training.jpg"
                alt="Training delivery"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        ) : activeTab === "domains" ? (
          <>
            <div className="mt-2 flex flex-wrap items-baseline gap-x-8 gap-y-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-sm">
              <span
                className="text-[44px] leading-none text-[#6366F1]"
                style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                {TOTAL_TRAININGS}+
              </span>
              <div>
                <p
                  className="text-[15px] uppercase tracking-[0.18em] text-white/70"
                  style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                >
                  Cybersecurity trainings live now
                </p>
                <p
                  className="mt-1 text-[14px] text-white/55"
                  style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                >
                  Across {DOMAINS.length}{" "}domains within Edstellar&apos;s broader IT &amp;{" "}
                  Technical catalog of 2,000+ programs.
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {DOMAINS.map((d) => (
                <a
                  key={d.name}
                  href={d.href}
                  target="_blank"
                  rel="noopener"
                  className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition-all hover:-translate-y-0.5 hover:border-[#6366F1]/60 hover:bg-white/[0.06]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#1d1d1b]">
                    <Image
                      src={d.image}
                      alt={d.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c]/80 via-[#0c0c0c]/20 to-transparent" />
                    <span
                      className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-sm border border-[#6366F1]/60 bg-[#6366F1]/15 px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-[#C7D2FE] backdrop-blur-sm"
                      style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />
                      {d.count} trainings
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 px-5 py-5">
                    <h3
                      className="text-[18px] leading-[1.25] text-white sm:text-[19px]"
                      style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                    >
                      {d.name}
                    </h3>
                    <p
                      className="text-[14px] leading-[1.4] text-white/70 sm:text-[15px]"
                      style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                    >
                      {d.description}
                    </p>
                    <span
                      className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[12px] uppercase tracking-[0.16em] text-[#6366F1]"
                      style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                    >
                      Explore domain
                      <ArrowRightIcon
                        className="transition-transform group-hover:translate-x-0.5"
                        width={14}
                        height={14}
                      />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="mt-2 grid overflow-hidden rounded-2xl bg-white text-black md:grid-cols-2">
              <div className="flex items-center px-8 py-12 sm:px-12 lg:px-16">
                <div className="border-l-[3px] border-[#6366F1] pl-6">
                  <h3
                    className="text-[24px] leading-[1.1] sm:text-[30px]"
                    style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                  >
                    {path.cardTitle}
                  </h3>
                  <p
                    className="mt-5 max-w-md text-[17px] leading-[1.4] sm:text-[19px]"
                    style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                  >
                    {path.cardDescription}
                  </p>
                  <a
                    href={path.href}
                    className="group/cta mt-7 inline-flex items-center gap-2 rounded-full bg-[#6366F1] px-6 py-3 text-[14px] uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#4F46E5]"
                    style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                  >
                    View Learning Path
                    <ArrowRightIcon
                      width={16}
                      height={16}
                      className="transition-transform group-hover/cta:translate-x-0.5"
                    />
                  </a>
                </div>
              </div>
              <div className="relative h-[280px] bg-[#0c0c0c] md:h-auto">
                <Image
                  src={path.image}
                  alt={path.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
              {LEARNING_PATHS.map((p, i) => (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => setActivePath(i)}
                  className={`relative cursor-pointer pt-4 pb-2 text-left transition-colors ${
                    i === activePath
                      ? "border-t-[3px] border-[#6366F1] text-white"
                      : "border-t border-white/30 text-white/80 hover:text-white"
                  }`}
                >
                  <span
                    className="block text-[12px] uppercase leading-[1.3] tracking-wider sm:text-[13px]"
                    style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                  >
                    {p.label}
                  </span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
