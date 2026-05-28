"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { cn } from "@/lib/utils";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-inter",
  display: "swap",
});

const FONT_OVERRIDE: CSSProperties = {
  ["--font-light" as string]: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
  ["--font-bold" as string]: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
};

type CourseType = "foundation" | "platform" | "specialization";
type CoursePriority = "core" | "elective";

interface Course {
  num: number;
  title: string;
  type: CourseType;
  priority: CoursePriority;
  duration: string;
  summary: string;
  outcomes: string[];
  image: string;
}

const COURSES: Course[] = [
  { num: 1, title: "SOC Foundations and Alert Triage", type: "foundation", priority: "core", duration: "16 - 24 hrs", summary: "Build analyst fundamentals, triage discipline, and escalation judgment for L1 SOC teams.", outcomes: ["Alert triage workflow", "Case documentation", "Escalation criteria"], image: "/images/cyber/course-network.jpg" },
  { num: 2, title: "Cyber Kill Chain and Adversary Behavior", type: "foundation", priority: "core", duration: "8 - 12 hrs", summary: "Understand attacker stages and use them to frame investigations with more context.", outcomes: ["Attack lifecycle mapping", "Investigation framing", "Threat storytelling"], image: "/images/cyber/course-ethical-hacking.jpg" },
  { num: 3, title: "MITRE ATT&CK Mapping for SOC Operations", type: "foundation", priority: "core", duration: "8 - 16 hrs", summary: "Map TTPs, evaluate detection coverage, and translate alerts into adversary behavior.", outcomes: ["ATT&CK alignment", "Coverage gap analysis", "TTP-based investigation"], image: "/images/cyber/course-appsec.jpg" },
  { num: 4, title: "Wireshark and PCAP Analysis for Incident Investigation", type: "foundation", priority: "core", duration: "16 - 20 hrs", summary: "Strengthen packet analysis skills to validate suspicious activity and reconstruct events.", outcomes: ["Packet inspection", "Traffic anomaly review", "Timeline reconstruction"], image: "/images/cyber/course-network.jpg" },
  { num: 5, title: "Microsoft Sentinel and KQL for SOC Analysts", type: "platform", priority: "elective", duration: "16 - 20 hrs", summary: "Write KQL queries, tune detections, and investigate alerts in a modern SIEM workflow.", outcomes: ["KQL authoring", "Detection tuning", "Sentinel investigations"], image: "/images/cyber/course-cloud.jpg" },
  { num: 6, title: "Splunk Detection Engineering with SPL", type: "platform", priority: "elective", duration: "16 - 20 hrs", summary: "Build searches, dashboards, and production-ready detections using SPL.", outcomes: ["SPL queries", "Use-case engineering", "Dashboard-driven analysis"], image: "/images/cyber/course-ai-data.jpg" },
  { num: 7, title: "EDR/XDR Investigations with CrowdStrike and Microsoft Defender", type: "platform", priority: "elective", duration: "16 - 20 hrs", summary: "Use endpoint telemetry, live response, and host artefacts to validate and contain threats.", outcomes: ["Host investigation", "Live response", "Containment decisions"], image: "/images/cyber/course-iam.jpg" },
  { num: 8, title: "Sigma Rules and Detection-as-Code", type: "platform", priority: "core", duration: "8 - 12 hrs", summary: "Create portable detections that connect engineering discipline with SOC use cases.", outcomes: ["Sigma authoring", "Rule portability", "Detection QA"], image: "/images/cyber/course-appsec.jpg" },
  { num: 9, title: "Threat Hunting Fundamentals", type: "specialization", priority: "core", duration: "16 - 20 hrs", summary: "Develop hunt hypotheses, pivot across telemetry, and uncover threats that evade alerts.", outcomes: ["Hunt planning", "Hypothesis-driven search", "Analyst pivoting"], image: "/images/cyber/course-ethical-hacking.jpg" },
  { num: 10, title: "Digital Forensics and Incident Response for SOC Analysts", type: "specialization", priority: "core", duration: "16 - 24 hrs", summary: "Preserve evidence, build timelines, and support containment and post-incident analysis.", outcomes: ["Evidence handling", "Forensic timelines", "IR collaboration"], image: "/images/cyber/course-network.jpg" },
  { num: 11, title: "SOAR Playbook Automation for Security Operations", type: "specialization", priority: "core", duration: "8 - 16 hrs", summary: "Automate repetitive triage steps and reduce alert fatigue with practical playbooks.", outcomes: ["Playbook design", "Automation candidates", "Response orchestration"], image: "/images/cyber/course-grc.jpg" },
  { num: 12, title: "Cloud SOC Monitoring for AWS, Azure, and GCP", type: "specialization", priority: "core", duration: "16 - 20 hrs", summary: "Extend detection and response workflows into cloud-native logs, identities, and workloads.", outcomes: ["Cloud telemetry", "Identity monitoring", "Multi-cloud investigations"], image: "/images/cyber/course-cloud.jpg" },
];

interface CourseGroup {
  label: string;
  kind: CoursePriority;
  rule?: { pickFrom: number; total: number };
  courses: Course[];
}

interface StageMeta {
  stage: 1 | 2 | 3 | 4 | 5;
  title: string;
  motivation: string;
  duration: string;
  skillsUnlocked: string[];
  groups: CourseGroup[];
}

const STAGES: StageMeta[] = [
  {
    stage: 1,
    title: "Foundations",
    motivation: "After this stage, your analysts triage real alerts with confidence and escalate with judgement.",
    duration: "16 – 24 hrs",
    skillsUnlocked: ["Triage workflow", "Case documentation", "Escalation criteria"],
    groups: [{ label: "Required core", kind: "core", courses: [COURSES[0]] }],
  },
  {
    stage: 2,
    title: "SIEM Mastery",
    motivation: "After this stage, your analysts run SIEM-first investigations with attacker context and packet-level evidence.",
    duration: "64 – 88 hrs typical",
    skillsUnlocked: ["ATT&CK mapping", "KQL & SPL", "Packet inspection", "EDR triage"],
    groups: [
      { label: "Required core (all 3)", kind: "core", courses: [COURSES[1], COURSES[2], COURSES[3]] },
      { label: "Platform tracks · Pick 2 of 3", kind: "elective", rule: { pickFrom: 2, total: 3 }, courses: [COURSES[4], COURSES[5], COURSES[6]] },
    ],
  },
  {
    stage: 3,
    title: "Threat Hunting",
    motivation: "After this stage, your analysts hunt threats proactively across telemetry instead of waiting for alerts.",
    duration: "24 – 32 hrs",
    skillsUnlocked: ["Sigma authoring", "Hunt planning", "Hypothesis-driven search"],
    groups: [{ label: "Required core (both)", kind: "core", courses: [COURSES[7], COURSES[8]] }],
  },
  {
    stage: 4,
    title: "Incident Response",
    motivation: "After this stage, your analysts preserve evidence and run forensic timelines under pressure.",
    duration: "16 – 24 hrs",
    skillsUnlocked: ["Evidence handling", "Forensic timelines", "IR collaboration"],
    groups: [{ label: "Required core", kind: "core", courses: [COURSES[9]] }],
  },
  {
    stage: 5,
    title: "Advanced Ops",
    motivation: "After this stage, your analysts automate triage and extend the SOC into cloud-native operations.",
    duration: "24 – 36 hrs",
    skillsUnlocked: ["Playbook design", "Cloud telemetry", "Multi-cloud monitoring"],
    groups: [{ label: "Required core (both)", kind: "core", courses: [COURSES[10], COURSES[11]] }],
  },
];

const FAQS = [
  {
    question: "How long does the full SOC Analyst Learning Path take, and can we fit it around shift coverage?",
    answer:
      "The full path is 160 – 224 hours of instructor-led training across 12 courses, typically delivered over 12 – 16 weeks at 8 – 12 hours per week. Cohorts are scheduled around your SOC shift roster so 24/7 coverage isn't disrupted, including split-shift cohorts, weekend sessions, or staggered enrolment across L1 and L2 teams. Individual courses can also be deployed as standalone modules within your existing internal training calendar.",
  },
  {
    question: "Is the training instructor-led, and how do hands-on labs work?",
    answer:
      "Every course is instructor-led, virtual or on-site at your facility. Labs run on real tooling, Microsoft Sentinel, Splunk, CrowdStrike Falcon, Microsoft Defender, and Wireshark, with live walkthroughs of triage, KQL/SPL authoring, ATT&CK mapping, and incident workflows. Self-paced material reinforces the live sessions but doesn't replace them, so your analysts can ask questions and practise under guidance.",
  },
  {
    question: "Can the path be tailored to the SIEM, EDR, and cloud platforms in our SOC?",
    answer:
      "Yes. For corporate buyers, the default path covers Microsoft Sentinel, Splunk, CrowdStrike, and Microsoft Defender across AWS, Azure, and GCP, but every course can be tuned to the specific platforms in your environment, including QRadar, Chronicle, Elastic, SentinelOne, Carbon Black, Defender for Cloud, or GuardDuty. We map your tooling, log sources, detection priorities, and ATT&CK coverage gaps before kickoff.",
  },
  {
    question: "What roles will analysts be ready for after the full path?",
    answer:
      "The path is built around the operational skills L1 and L2 analysts actually use, alert triage, ATT&CK mapping, KQL and SPL detection authoring, Sigma rule development, threat hunting, DFIR, SOAR playbooks, and cloud SOC monitoring. Analysts who complete all 12 courses are prepared for Detection Engineer, Threat Hunter, Incident Responder, and Cloud Security Analyst roles, with hands-on lab time on the same tools they'll use in production.",
  },
  {
    question: "What's the minimum cohort size and the typical procurement process?",
    answer:
      "Cohorts typically run from 8 – 10 analysts up to multi-region rollouts of 50+. Pricing is per-cohort, not per-seat, with PO-based invoicing and standard enterprise terms (MSA, DPA, security questionnaires accepted). Bring us your team size and procurement timeline and we'll scope a proposal in 72 hours.",
  },
  {
    question: "Can mixed-skill teams take the path together, or do analysts need prerequisites?",
    answer:
      "Tier 1 SOC analysts and recent IT/cybersecurity graduates can start at Stage 1 (Foundations) with no formal prerequisite. Analysts already comfortable with alert triage, networking, and basic SIEM use can enter at Stage 2 (SIEM Mastery). For mixed-skill teams we run a short skills assessment before kickoff to place each analyst at the right stage, so senior analysts aren't slowed down and junior analysts aren't lost.",
  },
];

const RELATED_PATHS = [
  { title: "Incident Responder Path", slug: "/learning-paths/incident-responder", role: "Incident Response", level: "Intermediate", programs: 11, description: "Master the full incident lifecycle from triage and containment through forensic analysis and post-incident reporting.", image: "/images/cyber/hero-team-training.jpg", accent: "#F59E0B" },
  { title: "Detection Engineer Path", slug: "/learning-paths/detection-engineer", role: "Detection Engineering", level: "Intermediate", programs: 9, description: "Write Sigma rules, tune SIEM detections, and build pipelines that surface attacker behaviour before it escalates.", image: "/images/cyber/hero-governance.jpg", accent: "#EF4444" },
  { title: "Security Architect Path", slug: "/learning-paths/security-architect", role: "Security Architecture", level: "Advanced", programs: 13, description: "Design zero-trust architectures, threat models, and enterprise security blueprints across cloud and on-prem environments.", image: "/images/cyber/path-architect.jpg", accent: "#8B5CF6" },
];

interface CapabilityTile {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const CAPABILITY_TILES: CapabilityTile[] = [
  {
    title: "Detection Engineering",
    description: "Tune SIEM rules, write Sigma, own coverage gaps.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 010 1.4l-1 1L16 11l1-1a1 1 0 011.4 0l2.3 2.3a1 1 0 010 1.4L17 17.4a1 1 0 01-1.4 0l-2.3-2.3a1 1 0 010-1.4l1-1L12 10.4l-1 1a1 1 0 01-1.4 0L7.3 9.1a1 1 0 010-1.4l3.7-3.7a1 1 0 011.4 0z" />
      </svg>
    ),
  },
  {
    title: "Threat Hunting",
    description: "Hypothesis-driven investigations across telemetry.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    title: "Incident Response",
    description: "Forensic timelines, evidence handling, containment.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L2 21h20L12 2z" />
        <line x1="12" y1="10" x2="12" y2="14" />
        <circle cx="12" cy="17.5" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Cloud SOC Operations",
    description: "AWS, Azure, and GCP detection and monitoring.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 19a4 4 0 010-8 6 6 0 0111.8 1.5A3.5 3.5 0 0118 19z" />
      </svg>
    ),
  },
];

const ENGAGEMENT_STEPS = [
  { num: 1, title: "Assess", subtitle: "Understand your team's needs and goals" },
  { num: 2, title: "Recommend", subtitle: "Get a tailored learning path and plan" },
  { num: 3, title: "Launch", subtitle: "We handle logistics and onboarding" },
  { num: 4, title: "Learn", subtitle: "Your team learns with expert instructors" },
  { num: 5, title: "Measure", subtitle: "Track progress and business impact" },
];

const TRUSTED_LOGOS = ["ASTOR INDUSTRIALS", "VERMILION BANK", "NORTHWAVE TECH", "HALDEN GROUP", "LUMEN HEALTH"];

function parseDurationBounds(duration: string): [number, number] {
  const parts = duration.split("-").map((p) => parseInt(p.trim(), 10));
  const lower = Number.isFinite(parts[0]) ? parts[0] : 0;
  const upper = Number.isFinite(parts[1]) ? parts[1] : lower;
  return [lower, upper];
}

const COURSE_TYPE_STYLE: Record<CourseType, { label: string; pill: string }> = {
  foundation: { label: "Foundation", pill: "bg-[#3b82f6]/20 text-[#93c5fd] border-[#3b82f6]/30" },
  platform: { label: "Platform", pill: "bg-[#a855f7]/20 text-[#d8b4fe] border-[#a855f7]/30" },
  specialization: { label: "Specialization", pill: "bg-[#ec4899]/20 text-[#f9a8d4] border-[#ec4899]/30" },
};

function CourseTypePill({ type }: { type: CourseType }) {
  const s = COURSE_TYPE_STYLE[type];
  return <span className={cn("inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold leading-none", s.pill)}>{s.label}</span>;
}

function CompactCourseCard({ course }: { course: Course }) {
  return (
    <article className="group flex overflow-hidden rounded-lg bg-[#0f172a] text-white shadow-[0_4px_12px_rgba(15,23,42,0.18)] transition-colors hover:bg-[#1e293b]">
      <div className="relative w-[96px] flex-shrink-0 self-stretch overflow-hidden bg-[#1e293b]">
        <Image src={course.image} alt={course.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="96px" />
        <span className="absolute left-1.5 top-1.5 inline-flex items-center rounded bg-black/65 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.1em] text-white/95 backdrop-blur-sm">C{course.num}</span>
      </div>
      <div className="min-w-0 flex-1 px-4 py-3">
        <CourseTypePill type={course.type} />
        <h3 className="mt-2 line-clamp-2 text-[14px] font-semibold leading-snug text-white soc-v7-inter">{course.title}</h3>
        <div className="mt-2 flex items-center gap-1.5 text-[11px] text-white/60">
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {course.duration}
        </div>
      </div>
    </article>
  );
}

const STAGE_THEME: Record<1 | 2 | 3 | 4 | 5, {
  card: string;
  border: string;
  divider: string;
  pill: string;
  metaPill: string;
  numberBadge: string;
  numberText: string;
}> = {
  1: {
    card: "bg-[#fefce8]",
    border: "border-[#fde68a]",
    divider: "border-[#fde68a]/70",
    pill: "bg-[#fef08a] text-[#854d0e]",
    metaPill: "bg-white/70 text-[#854d0e]",
    numberBadge: "bg-[#fef08a] border-[#facc15]",
    numberText: "text-[#854d0e]",
  },
  2: {
    card: "bg-[#eef2ff]",
    border: "border-[#c7d2fe]",
    divider: "border-[#c7d2fe]/70",
    pill: "bg-[#c7d2fe] text-[#3730a3]",
    metaPill: "bg-white/70 text-[#3730a3]",
    numberBadge: "bg-[#c7d2fe] border-[#a5b4fc]",
    numberText: "text-[#3730a3]",
  },
  3: {
    card: "bg-[#ecfdf5]",
    border: "border-[#bbf7d0]",
    divider: "border-[#bbf7d0]/70",
    pill: "bg-[#bbf7d0] text-[#166534]",
    metaPill: "bg-white/70 text-[#166534]",
    numberBadge: "bg-[#bbf7d0] border-[#86efac]",
    numberText: "text-[#166534]",
  },
  4: {
    card: "bg-[#fff7ed]",
    border: "border-[#fed7aa]",
    divider: "border-[#fed7aa]/70",
    pill: "bg-[#fed7aa] text-[#9a3412]",
    metaPill: "bg-white/70 text-[#9a3412]",
    numberBadge: "bg-[#fed7aa] border-[#fdba74]",
    numberText: "text-[#9a3412]",
  },
  5: {
    card: "bg-[#fff1f2]",
    border: "border-[#fecdd3]",
    divider: "border-[#fecdd3]/70",
    pill: "bg-[#fecdd3] text-[#9f1239]",
    metaPill: "bg-white/70 text-[#9f1239]",
    numberBadge: "bg-[#fecdd3] border-[#fda4af]",
    numberText: "text-[#9f1239]",
  },
};

function StageModule({ meta, index, isLast }: { meta: StageMeta; index: number; isLast: boolean }) {
  const theme = STAGE_THEME[meta.stage];
  const totalCourses = meta.groups.reduce((s, g) => s + g.courses.length, 0);
  const [lo, hi] = meta.groups.flatMap((g) => g.courses).reduce<[number, number]>(
    ([l, h], c) => {
      const [a, b] = parseDurationBounds(c.duration);
      return [l + a, h + b];
    },
    [0, 0],
  );

  return (
    <div className="relative grid grid-cols-[40px_1fr] gap-4 md:gap-5">
      {/* Vertical timeline rail */}
      <div className="relative flex flex-col items-center">
        <div className={cn("flex h-9 w-9 items-center justify-center rounded-full border text-[13px] font-bold shadow-sm soc-v7-inter", theme.numberBadge, theme.numberText)}>
          {index + 1}
        </div>
        {!isLast ? <div className="mt-2 w-px flex-1 bg-gradient-to-b from-[#cbd5e1] to-transparent" /> : null}
      </div>

      {/* Stage card */}
      <div className={cn("min-w-0 overflow-hidden rounded-2xl border shadow-[0_4px_14px_rgba(15,23,42,0.05)]", theme.card, theme.border, !isLast && "mb-6")}>
        <div className={cn("flex flex-wrap items-start justify-between gap-3 border-b px-5 py-4", theme.divider)}>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em]", theme.pill)}>Stage {meta.stage}</span>
              <h3 className="text-[20px] font-bold leading-tight text-[#0f172a] soc-v7-inter">{meta.title}</h3>
            </div>
            <p className="mt-2 max-w-2xl text-[13px] leading-relaxed text-[#475569]">{meta.motivation}</p>
          </div>
          <div className="flex flex-shrink-0 items-center gap-2 whitespace-nowrap text-[11px] font-semibold uppercase tracking-wider">
            <span className={cn("inline-flex items-center gap-1 rounded-md px-2 py-1", theme.metaPill)}>{totalCourses} {totalCourses === 1 ? "Course" : "Courses"}</span>
            <span className={cn("inline-flex items-center gap-1 rounded-md px-2 py-1", theme.metaPill)}>{lo}–{hi} hrs</span>
          </div>
        </div>

        <div className="grid gap-2.5 px-5 py-4 sm:grid-cols-2">
          {meta.groups.flatMap((g) => g.courses).map((c) => (
            <CompactCourseCard key={c.num} course={c} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PathSnapshotCard() {
  const [totalLower, totalUpper] = COURSES.reduce<[number, number]>(([lo, hi], c) => {
    const [l, u] = parseDurationBounds(c.duration);
    return [lo + l, hi + u];
  }, [0, 0]);
  const typeCounts: Record<CourseType, number> = { foundation: 0, platform: 0, specialization: 0 };
  COURSES.forEach((c) => { typeCounts[c.type] += 1; });
  const stages = STAGES.length;

  return (
    <div className="overflow-hidden rounded-2xl bg-[#0f172a] text-white">
      <div className="border-b border-white/10 px-5 py-4">
        <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/90 soc-v7-inter">Path Snapshot</h3>
      </div>
      <div className="space-y-4 px-5 py-5">
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-lg bg-white/[0.05] p-3 text-center">
            <p className="text-[26px] font-bold leading-none text-white soc-v7-inter">{COURSES.length}</p>
            <p className="mt-1.5 text-[9px] uppercase tracking-wider text-white/55">Courses</p>
          </div>
          <div className="rounded-lg bg-white/[0.05] p-3 text-center">
            <p className="text-[26px] font-bold leading-none text-white soc-v7-inter">{stages}</p>
            <p className="mt-1.5 text-[9px] uppercase tracking-wider text-white/55">Stages</p>
          </div>
          <div className="rounded-lg bg-white/[0.05] p-3 text-center">
            <p className="text-[14px] font-bold leading-none text-white soc-v7-inter">{totalLower}–<br />{totalUpper}</p>
            <p className="mt-1.5 text-[9px] uppercase tracking-wider text-white/55">Total Hrs</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4">
          <p className="text-[9px] font-bold uppercase tracking-wider text-white/55">Course Mix</p>
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[12px] text-white/85">
            <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#3b82f6]" />{typeCounts.foundation} Foundation</span>
            <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#a855f7]" />{typeCounts.platform} Platform</span>
            <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#ec4899]" />{typeCounts.specialization} Specialization</span>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4">
          <p className="text-[9px] font-bold uppercase tracking-wider text-white/55">Delivery</p>
          <p className="mt-2 text-[12px] leading-relaxed text-white/85">Instructor-led · Virtual or On-site · PO-based invoicing</p>
        </div>

        <div className="border-t border-white/10 pt-4">
          <p className="text-[9px] font-bold uppercase tracking-wider text-white/55">Team Capabilities Built</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {CAPABILITY_TILES.map((t) => (
              <span key={t.title} className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.05] px-2 py-1 text-[11px] leading-none text-white/85">{t.title}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const WHY_THIS_PATH: { title: string; desc: string }[] = [
  { title: "Learn in a Structured, Hands-On Sequence", desc: "Cohorts progress from triage fundamentals to detection engineering and incident response." },
  { title: "Taught by Industry Practitioners", desc: "Live, instructor-led delivery with current SOC analysts and detection engineers." },
  { title: "Earn a Digital Credential on Completion", desc: "Verifiable cohort credential, shareable across LinkedIn and internal L&D systems." },
];

function WhyThisPathCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white">
      <div className="border-b border-[#f1f5f9] px-5 py-4">
        <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0f172a] soc-v7-inter">Why This Learning Path?</h3>
      </div>
      <ol className="space-y-4 px-5 py-5">
        {WHY_THIS_PATH.map((item, idx) => (
          <li key={item.title} className="flex gap-3">
            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-[#eef2ff] text-[12px] font-bold leading-none text-[#4338CA] soc-v7-inter">{String(idx + 1).padStart(2, "0")}</span>
            <div className="min-w-0 flex-1">
              <h4 className="text-[13px] font-semibold leading-snug text-[#0f172a] soc-v7-inter">{item.title}</h4>
              <p className="mt-1 text-[12px] leading-relaxed text-[#64748b]">{item.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

const IDEAL_FOR_ITEMS = [
  "In-house SOC teams scaling L1/L2 analyst capability",
  "IT, network, and infrastructure teams pivoting to security operations",
  "Enterprises standing up a new SOC or blue-team function",
  "MSSPs and managed-security teams onboarding analyst cohorts",
];

function IdealForCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white">
      <div className="border-b border-[#f1f5f9] px-5 py-4">
        <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0f172a] soc-v7-inter">Ideal For</h3>
      </div>
      <ul className="space-y-3 px-5 py-5">
        {IDEAL_FOR_ITEMS.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#dcfce7] text-[#16a34a]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="h-3 w-3" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <p className="min-w-0 flex-1 text-[13px] leading-relaxed text-[#334155]">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ShareCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white">
      <div className="border-b border-[#f1f5f9] px-5 py-4">
        <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0f172a] soc-v7-inter">Share This Path</h3>
      </div>
      <div className="space-y-2 px-5 py-5">
        <Link href="https://edstellar.com/contact" className="flex items-center gap-3 rounded-lg border border-[#e2e8f0] px-3 py-2.5 transition-colors hover:border-[#94a3b8] hover:bg-[#f8fafc]">
          <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-[#ecfeff] text-[#0e7490]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden="true">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" strokeLinecap="round" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" strokeLinecap="round" />
            </svg>
          </span>
          <span className="min-w-0 flex-1 text-[13px] font-semibold text-[#0f172a]">Share this learning path</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4 text-[#94a3b8]" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button className="flex w-full items-center justify-between gap-4 py-5 text-left" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span className="text-[18px] font-semibold leading-snug text-white soc-v7-inter">{question}</span>
        <svg className={cn("h-5 w-5 flex-shrink-0 text-[#a5b4fc] transition-transform duration-200", open && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open ? <p className="pb-5 text-sm leading-relaxed text-white/70">{answer}</p> : null}
    </div>
  );
}

function RelatedPathCard({ path }: { path: typeof RELATED_PATHS[number] }) {
  return (
    <Link href={path.slug} className="group flex flex-col overflow-hidden rounded-2xl border border-[#e4e5e6] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#6366F1]/30 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden bg-[#f0f0f0]">
        <Image src={path.image} alt={path.title} fill className="object-cover object-center transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
        <span className="absolute bottom-3 left-3 rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white" style={{ backgroundColor: path.accent }}>{path.level}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="mb-2 text-[10px] font-medium uppercase tracking-wide text-[#666666]">{path.role}</span>
        <h3 className="mb-2 text-xl font-bold leading-tight text-[#0c0c0c] transition-colors group-hover:text-[#6366F1] soc-v7-inter">{path.title}</h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-[#666666]">{path.description}</p>
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#9ca3af]">{path.programs} programs</span>
          <span className="font-medium text-[#6366F1]">Compare for your team →</span>
        </div>
      </div>
    </Link>
  );
}

function TrustStrip() {
  return (
    <section className="w-full border-b border-[#e4e5e6] bg-white">
      <div className="mx-auto max-w-[1600px] px-6 py-10 md:px-12 md:py-12">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6366F1]">Trusted by enterprise security teams</p>
        <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-5">
          {TRUSTED_LOGOS.map((name) => (
            <div key={name} className="flex items-center justify-center border-r border-[#e4e5e6] py-2 text-[14px] font-semibold tracking-[0.05em] text-[#666666] last:border-r-0 md:py-3 md:text-[15px]">{name}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EngagementWorkflow() {
  return (
    <section className="w-full bg-[#f8fafc] px-6 py-14 md:px-12 md:py-16">
      <div className="mx-auto max-w-[1600px]">
        <div className="max-w-3xl">
          <h2 className="text-4xl leading-tight text-[#0f172a] md:text-5xl" style={{ fontFamily: "var(--font-light)" }}>
            The Edstellar SOC Learning Engagement Framework
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#64748b]">
            Every cohort runs the same predictable protocol: scoped, baselined, launched, delivered, and measured for business outcomes your CISO and L&amp;D leaders can act on.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {ENGAGEMENT_STEPS.map((step, idx) => (
            <div
              key={step.num}
              className="group relative flex min-w-0 flex-col rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-[0_2px_8px_rgba(15,23,42,0.04)] transition-all hover:-translate-y-0.5 hover:border-[#c7d2fe] hover:shadow-[0_8px_20px_rgba(99,102,241,0.10)]"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#eef2ff] text-[24px] font-bold leading-none text-[#4338CA] soc-v7-inter">
                  {step.num}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#94a3b8]">
                  Step {String(step.num).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 text-[17px] font-bold leading-tight text-[#0f172a] soc-v7-inter">{step.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-[#64748b]">{step.subtitle}</p>
              {idx < ENGAGEMENT_STEPS.length - 1 ? (
                <span aria-hidden="true" className="absolute right-[-10px] top-1/2 hidden -translate-y-1/2 lg:block">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#e2e8f0] bg-white text-[#6366F1] shadow-sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} className="h-3.5 w-3.5">
                      <polyline points="9 6 15 12 9 18" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CustomPathCTA({ onCohortClick, onAdvisorClick }: { onCohortClick: () => void; onAdvisorClick: () => void }) {
  return (
    <section className="w-full bg-[#0c0c0c] px-6 py-16 text-white md:px-12">
      <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <h2 className="text-4xl leading-tight md:text-5xl" style={{ fontFamily: "var(--font-light)" }}>Need to Tailor This Learning Path for Your Team?</h2>
          <p className="mt-6 text-base leading-relaxed text-white/75">Every SOC team starts with different baselines, tooling, and shift constraints. Send us your analyst roster along with the courses they have already completed and we&apos;ll assemble a custom cohort plan around what your team already knows and where you need them to be next quarter.</p>
          <p className="mt-4 text-base leading-relaxed text-white/75">We skip courses analysts already master, swap Sentinel, Splunk, CrowdStrike, or Defender modules for the platforms in your stack, add specialised cloud or OT modules on demand, and stagger cohorts around your 24/7 shift roster so SOC coverage is never disrupted.</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button type="button" onClick={onCohortClick} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#a3e635] px-7 py-4 text-base font-bold text-[#0c0c0c] transition-all hover:bg-[#bef264]">
              Request a Custom Path Proposal
              <svg width="16" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
            </button>
          </div>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] border border-white/10">
          <Image src="/images/cyber/hero-team-training.jpg" alt="Custom SOC analyst cohort planning session" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}

function StickyEnterpriseCTA({ onAdvisorClick }: { onAdvisorClick: () => void }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#a3e635]/30 bg-[#0c0c0c] text-white shadow-[0_-8px_24px_rgba(0,0,0,0.4)]">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-3 px-4 py-3 md:px-12">
        <p className="hidden text-sm leading-snug text-white/85 md:block">
          Build a SOC team ready for real-world threats. <span className="text-white">Get a tailored cohort proposal.</span>
        </p>
        <p className="text-[11px] leading-snug text-white/85 md:hidden">
          <span className="font-bold text-white">Cohort proposal</span> · 72-hr turnaround
        </p>
        <button type="button" onClick={onAdvisorClick} className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-[#a3e635] px-4 py-2 text-[12px] font-bold uppercase tracking-wider text-[#0c0c0c] transition hover:bg-[#bef264] md:px-5 md:py-2.5 md:text-[13px]">
          Train Your Team
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
        </button>
      </div>
    </div>
  );
}

function HeroShieldVisual() {
  return (
    <div className="relative aspect-[4/5] w-full max-w-[520px] mx-auto sm:aspect-[5/5] lg:aspect-[4/5]">
      <Image
        src="/images/cyber/v7/hero-img.png"
        alt="SOC Analyst learning path — 3D shield with analytics dashboards"
        fill
        priority
        className="object-contain"
        sizes="(max-width: 1024px) 80vw, 520px"
      />
    </div>
  );
}

type LeadFormIntent = "cohort" | "advisor";

const INTENT_COPY: Record<LeadFormIntent, { title: string; subtitle: string; cta: string }> = {
  cohort: {
    title: "Get a Cohort Proposal",
    subtitle: "Share a few details and we'll send a tailored proposal — pricing, cohort plan, and SOC platform mapping — within 72 hours.",
    cta: "Send Proposal Request",
  },
  advisor: {
    title: "Talk to a Training Advisor",
    subtitle: "Tell us about your SOC team and a curriculum advisor will reach out to scope a custom learning plan.",
    cta: "Request a Callback",
  },
};

interface LeadFormModalProps {
  open: boolean;
  intent: LeadFormIntent;
  onClose: () => void;
}

function LeadFormModal({ open, intent, onClose }: LeadFormModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const copy = INTENT_COPY[intent];

  if (!open) return null;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleClose() {
    setSubmitted(false);
    onClose();
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-form-title"
      className="fixed inset-0 z-[100] flex items-end justify-center overflow-y-auto bg-[#0f172a]/55 p-4 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-[560px] overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative border-b border-[#e2e8f0] bg-gradient-to-br from-[#eef2ff] to-white px-6 py-5 sm:px-7">
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close form"
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-[#475569] transition-colors hover:bg-[#0f172a]/5 hover:text-[#0f172a]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
              <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" />
              <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" />
            </svg>
          </button>
          <span className="inline-flex items-center rounded-md bg-[#e0e7ff] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#4338CA]">SOC Analyst Path</span>
          <h2 id="lead-form-title" className="mt-3 text-2xl leading-tight text-[#0f172a] sm:text-3xl" style={{ fontFamily: "var(--font-light)" }}>
            {copy.title}
          </h2>
          <p className="mt-1.5 text-[13px] leading-relaxed text-[#475569] sm:text-sm">{copy.subtitle}</p>
        </div>

        {/* Body */}
        <div className="max-h-[60vh] overflow-y-auto px-6 py-5 sm:px-7 sm:py-6">
          {submitted ? (
            <div className="flex flex-col items-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#dcfce7] text-[#16a34a]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-7 w-7">
                  <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="mt-4 text-xl font-bold text-[#0f172a] soc-v7-inter">Thanks — We Received Your Request.</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#475569]">
                A training advisor will reach out within one business day to scope your SOC cohort. We've also queued a proposal PDF to land in your inbox shortly.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#0f172a] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1e293b]"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="lf-name" label="Full name" required autoComplete="name" placeholder="Jane Doe" />
                <Field id="lf-email" label="Work email" required type="email" autoComplete="email" placeholder="you@company.com" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="lf-company" label="Company" required autoComplete="organization" placeholder="Acme Corp" />
                <Field id="lf-phone" label="Phone" type="tel" autoComplete="tel" placeholder="+1 555 000 0000" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Select id="lf-size" label="Cohort size" required options={["1 – 7 analysts", "8 – 15 analysts", "16 – 30 analysts", "31 – 50 analysts", "50+ (multi-region)"]} />
                <Select id="lf-region" label="Region" required options={["North America", "EMEA", "APAC", "LATAM", "MENA", "Global rollout"]} />
              </div>
              <div>
                <label htmlFor="lf-msg" className="mb-1.5 block text-[12px] font-semibold text-[#334155]">
                  Specific requirements <span className="font-normal text-[#94a3b8]">(optional)</span>
                </label>
                <textarea
                  id="lf-msg"
                  rows={3}
                  placeholder="Stack, shift coverage, timeline, anything else we should know…"
                  className="block w-full resize-y rounded-lg border border-[#cbd5e1] bg-white px-3.5 py-2.5 text-[14px] text-[#0f172a] outline-none transition-colors placeholder:text-[#94a3b8] focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/15"
                />
              </div>
              <label className="flex items-start gap-2.5 text-[12px] leading-relaxed text-[#475569]">
                <input type="checkbox" required className="mt-0.5 h-4 w-4 rounded border-[#cbd5e1] text-[#6366F1] focus:ring-[#6366F1]" />
                <span>I agree to be contacted by Edstellar about this enquiry. We don't share your details with third parties.</span>
              </label>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0f172a] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1e293b]"
              >
                {copy.cta}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} className="h-3.5 w-3.5">
                  <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" />
                  <polyline points="12 5 19 12 12 19" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <p className="text-center text-[11px] text-[#94a3b8]">Typical response time: under 1 business day · MSA / DPA ready</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ id, label, required, type = "text", placeholder, autoComplete }: { id: string; label: string; required?: boolean; type?: string; placeholder?: string; autoComplete?: string }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[12px] font-semibold text-[#334155]">
        {label}{required ? <span className="text-[#ef4444]"> *</span> : null}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="block w-full rounded-lg border border-[#cbd5e1] bg-white px-3.5 py-2.5 text-[14px] text-[#0f172a] outline-none transition-colors placeholder:text-[#94a3b8] focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/15"
      />
    </div>
  );
}

function Select({ id, label, required, options }: { id: string; label: string; required?: boolean; options: string[] }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[12px] font-semibold text-[#334155]">
        {label}{required ? <span className="text-[#ef4444]"> *</span> : null}
      </label>
      <select
        id={id}
        required={required}
        defaultValue=""
        className="block w-full rounded-lg border border-[#cbd5e1] bg-white px-3.5 py-2.5 text-[14px] text-[#0f172a] outline-none transition-colors focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/15"
      >
        <option value="" disabled>Select…</option>
        {options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    </div>
  );
}

function FlowConnector({ tone = "indigo" }: { tone?: "indigo" | "lime" | "rose" | "amber" }) {
  const toneClass = { indigo: "text-[#6366F1]", lime: "text-[#a3e635]", rose: "text-rose-400", amber: "text-amber-400" }[tone];
  return (
    <div className="flex flex-col items-center py-2" aria-hidden="true">
      <div className={cn("h-7 w-0.5 bg-current opacity-60", toneClass)} />
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} className={cn("h-4 w-4", toneClass)}>
        <polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function FlowNode({
  step,
  title,
  description,
  tone = "indigo",
  icon,
  bullets,
}: {
  step: string;
  title: string;
  description?: string;
  tone?: "indigo" | "lime" | "rose" | "amber";
  icon: React.ReactNode;
  bullets?: string[];
}) {
  const toneMap = {
    indigo: { border: "border-[#6366F1]/35", bg: "bg-[#6366F1]/8", chip: "bg-[#6366F1]/15 text-[#a5b4fc]", iconBg: "bg-[#6366F1]/20 text-[#a5b4fc]" },
    lime: { border: "border-[#a3e635]/35", bg: "bg-[#a3e635]/8", chip: "bg-[#a3e635]/15 text-[#bef264]", iconBg: "bg-[#a3e635]/15 text-[#a3e635]" },
    rose: { border: "border-rose-400/35", bg: "bg-rose-400/8", chip: "bg-rose-400/15 text-rose-200", iconBg: "bg-rose-400/15 text-rose-300" },
    amber: { border: "border-amber-400/35", bg: "bg-amber-400/8", chip: "bg-amber-400/15 text-amber-200", iconBg: "bg-amber-400/15 text-amber-300" },
  }[tone];
  return (
    <div className={cn("w-full rounded-2xl border p-5 shadow-[0_4px_20px_rgba(0,0,0,0.25)]", toneMap.border, toneMap.bg)}>
      <div className="flex items-start gap-4">
        <span className={cn("flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl", toneMap.iconBg)}>
          {icon}
        </span>
        <div className="min-w-0 flex-1">
          <span className={cn("inline-flex items-center rounded-md px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.18em]", toneMap.chip)}>{step}</span>
          <h4 className="mt-2 text-[18px] font-bold leading-snug text-white soc-v7-inter">{title}</h4>
          {description ? <p className="mt-1.5 text-[13px] leading-relaxed text-white/70">{description}</p> : null}
          {bullets && bullets.length > 0 ? (
            <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-[12px] text-white/80">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-current opacity-60" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function StrategyPresentation() {
  return (
    <section aria-label="Strategy presentation — internal review" className="w-full border-t-4 border-[#6366F1] bg-[#0b1020] px-6 py-16 text-white md:px-12 md:py-20">
      <div className="mx-auto max-w-[920px]">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-md bg-[#6366F1]/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#a5b4fc]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#a3e635]" />
            Internal Strategy Review · Confidential
          </span>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl" style={{ fontFamily: "var(--font-light)" }}>
            From a Google Search to a Business Enquiry
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
            Step-by-step flow of how a corporate visitor moves from a Google query to a qualified enterprise enquiry in our sales pipeline.
          </p>
        </div>

        {/* Flowchart */}
        <div className="mt-12 flex flex-col items-stretch">
          {/* Node 1 — Google Search */}
          <FlowNode
            step="Step 01 · Search intent"
            title="User Types a SOC Training Query Into Google"
            description="The query phrasing tells us whether the searcher is a security leader scoping a team rollout or an individual job-seeker."
            tone="indigo"
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
                <circle cx="11" cy="11" r="7" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="21" y1="21" x2="16" y2="16" strokeLinecap="round" />
              </svg>
            }
            bullets={[
              "“SOC analyst learning path”",
              "“SOC analyst learning path for teams”",
              "“SOC analyst learning path for L1 / L2”",
              "“Enterprise SOC analyst learning path”",
            ]}
          />

          <FlowConnector tone="indigo" />

          {/* Node 2 — SERP */}
          <FlowNode
            step="Step 02 · Discovery"
            title="Edstellar SOC Analyst Learning Path Appears in Results"
            description="Page title, meta description, and rich snippets emphasise cohorts, instructor-led delivery, and enterprise readiness — not individual certificates."
            tone="indigo"
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <line x1="3" y1="9" x2="21" y2="9" strokeLinecap="round" />
                <line x1="7" y1="13" x2="14" y2="13" strokeLinecap="round" />
                <line x1="7" y1="16" x2="11" y2="16" strokeLinecap="round" />
              </svg>
            }
          />

          <FlowConnector tone="indigo" />

          {/* Node 3 — Lands on page */}
          <FlowNode
            step="Step 03 · Landing"
            title="Visitor Lands on the SOC Analyst Learning Path"
            description="The hero is engineered to qualify intent in the first 2 seconds — every signal speaks to enterprise buyers."
            tone="indigo"
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
                <path d="M3 12l9-9 9 9" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 10v10h14V10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          />

          {/* Branch label */}
          <div className="my-6 flex flex-col items-center">
            <div className="h-7 w-0.5 bg-[#6366F1]/60" aria-hidden="true" />
            <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">Audience splits</span>
          </div>

          {/* Two-column branch */}
          <div className="grid gap-5 md:grid-cols-2">
            {/* Individual path — exits */}
            <div className="flex flex-col">
              <FlowNode
                step="Path A · Filtered out"
                title="Individual Career-Seeker Bounces"
                description="The page&apos;s enterprise signals immediately tell them this is not a personal course product."
                tone="rose"
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M5 21v-2a7 7 0 0114 0v2" strokeLinecap="round" />
                  </svg>
                }
                bullets={[
                  "Sees min cohort 8–10",
                  "Sees MSA / DPA, PO-invoicing",
                  "No “Enroll Now” button",
                  "No per-seat pricing",
                ]}
              />
              <div className="mt-4 rounded-xl border border-rose-400/30 bg-rose-400/10 p-4 text-center">
                <span className="inline-flex items-center gap-2 text-[12px] font-bold text-rose-200">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} className="h-3.5 w-3.5"><line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" /><line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" /></svg>
                  Exits page · saves advisor time
                </span>
              </div>
            </div>

            {/* Corporate path — continues */}
            <div className="flex flex-col">
              <FlowNode
                step="Path B · Engaged"
                title="Corporate Buyer Engages"
                description="Same signals confirm this is the product they were searching for."
                tone="lime"
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
                    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" strokeLinecap="round" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 00-3-3.87" strokeLinecap="round" />
                    <path d="M16 3.13a4 4 0 010 7.75" strokeLinecap="round" />
                  </svg>
                }
                bullets={[
                  "Heads of Security, L&D leads",
                  "Building or scaling a SOC team",
                  "Procurement-ready: MSA, DPA, PO",
                  "8 – 50 analyst cohort scope",
                ]}
              />
            </div>
          </div>

          <FlowConnector tone="lime" />

          {/* Node 5 — Engagement signals */}
          <FlowNode
            step="Step 04 · Trust signals"
            title="Visitor Scans the Enterprise Proof Points"
            description="Stacked signals confirm Edstellar runs production-grade cohort programs, not a self-paced catalogue."
            tone="lime"
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
                <path d="M12 2 L4 5 V11.5 C4 16.5 7.5 20.7 12 22 C16.5 20.7 20 16.5 20 11.5 V5 Z" strokeLinejoin="round" />
                <polyline points="8 12 11 15 16 9.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
            bullets={[
              "8 – 50 analyst cohorts",
              "40+ countries delivered",
              "2,000+ analysts trained",
              "400+ certified instructors",
              "MSA / DPA ready",
              "Instructor-led, shift-aware",
            ]}
          />

          <FlowConnector tone="lime" />

          {/* Node 6 — Curriculum */}
          <FlowNode
            step="Step 05 · Curriculum review"
            title="Scans the 5-Stage Path and Sidebar"
            description="The path is framed around the SOC operational lifecycle — Foundations, Detection &amp; Analysis, Tools, Response, Advanced Skills."
            tone="lime"
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <line x1="3" y1="10" x2="21" y2="10" strokeLinecap="round" />
                <line x1="9" y1="4" x2="9" y2="20" strokeLinecap="round" />
              </svg>
            }
          />

          <FlowConnector tone="lime" />

          {/* Node 7 — Clicks CTA */}
          <FlowNode
            step="Step 06 · Conversion intent"
            title="Clicks &ldquo;Get a Cohort Proposal&rdquo; or &ldquo;Talk to an Advisor&rdquo;"
            description="No &lsquo;Buy&rsquo; or &lsquo;Enroll&rsquo; — every primary CTA on the page surfaces an enterprise conversation."
            tone="amber"
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
                <path d="M9 11l3 3L22 4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          />

          <FlowConnector tone="amber" />

          {/* Node 8 — Fills form */}
          <FlowNode
            step="Step 07 · Lead capture"
            title="Fills the Cohort Enquiry Form"
            description="Form gates the enquiry by structure — only buyers with company context, cohort size, and region can submit."
            tone="amber"
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="14 2 14 8 20 8" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="8" y1="13" x2="16" y2="13" strokeLinecap="round" />
                <line x1="8" y1="17" x2="13" y2="17" strokeLinecap="round" />
              </svg>
            }
            bullets={[
              "Full name &amp; work email",
              "Company",
              "Cohort size (8 – 50+)",
              "Region",
              "Specific requirements",
            ]}
          />

          <FlowConnector tone="amber" />

          {/* Final node — Business enquiry */}
          <div className="w-full rounded-2xl border-2 border-[#a3e635] bg-gradient-to-br from-[#a3e635]/15 to-[#0b1020] p-6 text-center shadow-[0_8px_32px_rgba(163,230,53,0.2)]">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#a3e635] text-[#0b1020]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="h-7 w-7">
                <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#bef264]">Outcome</p>
            <h4 className="mt-2 text-2xl leading-tight text-white md:text-3xl" style={{ fontFamily: "var(--font-light)" }}>
              Qualified Business Enquiry Lands in the Sales Pipeline
            </h4>
            <p className="mx-auto mt-3 max-w-xl text-[13px] leading-relaxed text-white/75">
              Sales receives a pre-qualified enterprise opportunity with company, cohort size, region, and SOC context already captured — ready for a proposal within 72 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SocAnalystV7Page() {
  const [leadForm, setLeadForm] = useState<{ open: boolean; intent: LeadFormIntent }>({ open: false, intent: "cohort" });
  const openLeadForm = (intent: LeadFormIntent) => setLeadForm({ open: true, intent });
  const closeLeadForm = () => setLeadForm((s) => ({ ...s, open: false }));
  return (
    <div className={cn(cormorant.variable, inter.variable, "soc-v7-page flex min-h-screen flex-col bg-[#f8f8f8]")} style={FONT_OVERRIDE}>
      <style>{`.soc-v7-page p, .soc-v7-page .soc-v7-inter { font-family: var(--font-inter), Inter, Helvetica, Arial, sans-serif; }`}</style>
      <Header />
      <main className="flex-1">
        <div className="w-full bg-white">
          <div className="mx-auto max-w-[1600px] px-6 py-3 md:px-12">
            <nav className="flex items-center gap-1.5 text-xs text-[#64748b]">
              <Link href="/" className="transition-colors hover:text-[#6366F1]">Home</Link>
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/learning-paths" className="transition-colors hover:text-[#6366F1]">Learning Paths</Link>
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-[#0f172a]">SOC Analyst Learning Path</span>
            </nav>
          </div>
        </div>

        {/* HERO — LPV7 */}
        <section className="relative w-full overflow-hidden bg-[#eef1fb]">
          {/* Provided background image */}
          <Image
            src="/images/cyber/v7/background.png"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="pointer-events-none select-none object-cover"
          />
          {/* Light overlay to keep text legible */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/55 via-white/25 to-transparent" />

          <div className="relative mx-auto max-w-[1600px] px-6 py-12 md:px-12 md:py-16">
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              {/* LEFT — content */}
              <div className="min-w-0">
                {/* Eyebrow */}
                <span className="inline-flex items-center rounded-md bg-[#e0e7ff] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#4338CA]">
                  Learning Path
                </span>

                {/* Heading */}
                <h1 className="mt-5 max-w-4xl text-5xl leading-[1.02] text-[#0f172a] md:text-7xl" style={{ fontFamily: "var(--font-light)" }}>
                  SOC Analyst Learning Path
                </h1>

                {/* Body copy */}
                <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[#475569]">
                  Build a <strong className="font-semibold text-[#0f172a]">high-performing SOC team</strong>{" "}that can monitor, investigate, triage, and respond to modern cyber threats across enterprise environments. Edstellar&apos;s instructor-led learning path develops operational blue-team capability aligned to MITRE ATT&amp;CK, SIEM, EDR/XDR, threat hunting, and incident response workflows used in modern Security Operations Centers.
                </p>

                {/* Info note */}
                <div className="mt-5 flex max-w-2xl items-start gap-3 rounded-xl border border-[#c7d2fe] bg-[#eef2ff] px-4 py-3.5">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#6366F1] text-white">
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                      <line x1="12" y1="11" x2="12" y2="17" strokeLinecap="round" />
                      <circle cx="12" cy="7.5" r="1" fill="currentColor" />
                    </svg>
                  </span>
                  <p className="text-[13px] leading-relaxed text-[#334155]">
                    Designed for L1 and L2 SOC teams, CISOs, and L&amp;D leaders building blue-team capability. Cohorts run virtual or on-site, shift-aware, with PO-based invoicing and MSA / DPA in place.
                  </p>
                </div>

                {/* CTA button */}
                <div className="mt-7">
                  <button type="button" onClick={() => openLeadForm("cohort")} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#a3e635] px-6 py-3.5 text-sm font-semibold text-[#0c0c0c] transition-all hover:bg-[#bef264]">
                    Train Your Team
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* RIGHT — shield visual */}
              <div className="relative w-full">
                <HeroShieldVisual />
              </div>
            </div>
          </div>
        </section>

        <TrustStrip />

        <section id="recommended-courses" className="w-full bg-[#f8fafc] px-6 py-14 md:px-12 md:py-16">
          <div className="mx-auto max-w-[1600px]">
            <div className="mb-8 max-w-3xl">
              <h2 className="text-4xl leading-tight text-[#0f172a] md:text-5xl" style={{ fontFamily: "var(--font-light)" }}>A Structured Path From L1 Triage to Advanced SOC Ops</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#475569]">Five stages, twelve courses. Each stage builds on the last so analysts ramp from alert triage to detection engineering, threat hunting, and incident response with hands-on lab time on real SOC tooling.</p>
            </div>

            <div className="flex flex-col gap-8 xl:flex-row xl:items-start">
              <div className="min-w-0 flex-1">
                <div className="space-y-0">
                  {STAGES.map((meta, idx) => (
                    <StageModule key={meta.stage} meta={meta} index={idx} isLast={idx === STAGES.length - 1} />
                  ))}
                </div>
              </div>

              <div className="w-full flex-shrink-0 space-y-5 xl:sticky xl:top-24 xl:w-[340px]">
                <PathSnapshotCard />
                <WhyThisPathCard />
                <IdealForCard />
                <ShareCard />
              </div>
            </div>
          </div>
        </section>

        <CustomPathCTA onCohortClick={() => openLeadForm("cohort")} onAdvisorClick={() => openLeadForm("advisor")} />

        <EngagementWorkflow />

        <section className="w-full bg-[#0c0c0c] px-6 py-16 text-white md:px-12 md:py-20">
          <div className="mx-auto max-w-[1600px]">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <h2 className="text-4xl leading-tight text-white md:text-5xl" style={{ fontFamily: "var(--font-light)" }}>Frequently Asked Questions</h2>
              </div>
              <div>
                {FAQS.map((faq) => <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />)}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-6 pb-16 pt-14 md:px-12 md:pb-20">
          <div className="mx-auto max-w-[1600px]">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-4xl leading-tight text-[#0c0c0c] md:text-5xl" style={{ fontFamily: "var(--font-light)" }}>Related Training Programs</h2>
              </div>
              <Link href="/learning-paths" className="text-sm font-medium text-[#6366F1] transition-colors hover:text-[#4F46E5]">View all programs</Link>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {RELATED_PATHS.map((path) => <RelatedPathCard key={path.slug} path={path} />)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
      <StickyEnterpriseCTA onAdvisorClick={() => openLeadForm("advisor")} />
      <LeadFormModal open={leadForm.open} intent={leadForm.intent} onClose={closeLeadForm} />
      <StrategyPresentation />
    </div>
  );
}
