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

const OUTCOMES = [
  { title: "Modern SOC tool mastery", body: "Build practical capability across SIEM, EDR/XDR, packet analysis, threat intelligence, and automation workflows used by high-performing SOC teams." },
  { title: "Higher-fidelity investigations", body: "Move beyond alert clicking into contextual investigation, evidence gathering, and response decision-making across endpoint, network, and cloud telemetry." },
  { title: "Detection engineering readiness", body: "Learn to write and tune detections with KQL, SPL, Sigma, and ATT&CK-aligned coverage thinking." },
  { title: "Team progression", body: "Move analysts toward Detection Engineer, Threat Hunter, Incident Responder, and Cloud Security roles from within your existing roster." },
];

const AUDIENCE: { tag: string; body: string }[] = [
  { tag: "Tier 1 teams", body: "SOCs where L1 analysts are drowning in alerts and need stronger investigation discipline." },
  { tag: "Tier 2 teams", body: "SOCs developing analysts toward detection engineering, threat hunting, or incident response." },
  { tag: "Teams", body: "Security teams standardising SIEM, EDR/XDR, and automation across analyst rosters." },
  { tag: "Hiring", body: "Security teams onboarding new hires or campus recruits who need a structured ramp-up to L1/L2 readiness." },
];

const BUYING_SIGNALS = [
  "Your analysts need stronger KQL, SPL, and Sigma capability.",
  "Your SOC wants to reduce repetitive triage with SOAR playbooks.",
  "You are building a roadmap from L1 monitoring to threat hunting and DFIR.",
  "Cloud alerts are increasing but analyst workflows are still on-prem focused.",
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
  { num: "01", title: "Discovery & scoping", subtitle: "30-min briefing · No-deck call" },
  { num: "02", title: "Skills baseline", subtitle: "Pre-cohort assessment · Skip-credit for known courses" },
  { num: "03", title: "Custom curriculum", subtitle: "2 – 3 weeks · Stack + role mapping" },
  { num: "04", title: "Live delivery", subtitle: "12 – 16 weeks · Instructor-led, shift-aware" },
  { num: "05", title: "Impact assessment", subtitle: "Feedback + analytics + business outcomes" },
];

const TRUSTED_LOGOS = ["ASTOR INDUSTRIALS", "VERMILION BANK", "NORTHWAVE TECH", "HALDEN GROUP", "LUMEN HEALTH"];

const STAGE_STYLES: Record<
  1 | 2 | 3 | 4 | 5,
  { badge: string; colorFrom: string; colorTo: string; ring: string; pattern: string; glow: string; courseBorder: string; dotColor: string; hoverText: string }
> = {
  1: { badge: "bg-sky-500/20 text-sky-100 border-sky-300/20", colorFrom: "#173b56", colorTo: "#102738", ring: "border-sky-300/20", pattern: "radial-gradient(circle at 18% 18%, rgba(125,211,252,0.22), transparent 24%), repeating-linear-gradient(90deg, rgba(125,211,252,0.10) 0, rgba(125,211,252,0.10) 1px, transparent 1px, transparent 48px)", glow: "0 14px 34px rgba(14, 116, 144, 0.18)", courseBorder: "border-l-[3px] border-l-sky-500", dotColor: "bg-sky-400", hoverText: "group-hover:text-sky-400" },
  2: { badge: "bg-purple-500/20 text-purple-100 border-purple-300/20", colorFrom: "#4c1d95", colorTo: "#2e1065", ring: "border-purple-300/20", pattern: "radial-gradient(circle at 82% 20%, rgba(192,132,252,0.22), transparent 24%), repeating-linear-gradient(45deg, rgba(192,132,252,0.08) 0, rgba(192,132,252,0.08) 1px, transparent 1px, transparent 34px)", glow: "0 14px 34px rgba(147, 51, 234, 0.18)", courseBorder: "border-l-[3px] border-l-purple-500", dotColor: "bg-purple-400", hoverText: "group-hover:text-purple-400" },
  3: { badge: "bg-emerald-500/20 text-emerald-100 border-emerald-300/20", colorFrom: "#18493d", colorTo: "#0f2c25", ring: "border-emerald-300/20", pattern: "radial-gradient(circle at 20% 78%, rgba(110,231,183,0.22), transparent 22%), linear-gradient(135deg, rgba(110,231,183,0.08) 25%, transparent 25%, transparent 50%, rgba(110,231,183,0.08) 50%, rgba(110,231,183,0.08) 75%, transparent 75%, transparent)", glow: "0 14px 34px rgba(5, 150, 105, 0.18)", courseBorder: "border-l-[3px] border-l-emerald-500", dotColor: "bg-emerald-400", hoverText: "group-hover:text-emerald-400" },
  4: { badge: "bg-amber-500/20 text-amber-100 border-amber-300/20", colorFrom: "#5a3d18", colorTo: "#34230d", ring: "border-amber-300/20", pattern: "radial-gradient(circle at 80% 75%, rgba(252,211,77,0.22), transparent 22%), repeating-linear-gradient(0deg, rgba(252,211,77,0.08) 0, rgba(252,211,77,0.08) 1px, transparent 1px, transparent 40px)", glow: "0 14px 34px rgba(217, 119, 6, 0.18)", courseBorder: "border-l-[3px] border-l-amber-500", dotColor: "bg-amber-400", hoverText: "group-hover:text-amber-400" },
  5: { badge: "bg-rose-500/20 text-rose-100 border-rose-300/20", colorFrom: "#5f1f38", colorTo: "#34111f", ring: "border-rose-300/20", pattern: "radial-gradient(circle at 18% 22%, rgba(251,113,133,0.22), transparent 22%), repeating-linear-gradient(135deg, rgba(251,113,133,0.08) 0, rgba(251,113,133,0.08) 1px, transparent 1px, transparent 32px)", glow: "0 14px 34px rgba(225, 29, 72, 0.18)", courseBorder: "border-l-[3px] border-l-rose-500", dotColor: "bg-rose-400", hoverText: "group-hover:text-rose-400" },
};

function parseDurationBounds(duration: string): [number, number] {
  const parts = duration.split("-").map((p) => parseInt(p.trim(), 10));
  const lower = Number.isFinite(parts[0]) ? parts[0] : 0;
  const upper = Number.isFinite(parts[1]) ? parts[1] : lower;
  return [lower, upper];
}

function CoursePill({ type, stage }: { type: CourseType; stage: 1 | 2 | 3 | 4 | 5 }) {
  const map: Record<CourseType, { label: string }> = { foundation: { label: "Foundation" }, platform: { label: "Platform" }, specialization: { label: "Specialization" } };
  const style = STAGE_STYLES[stage];
  return <span className={cn("inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-semibold leading-none border", style.badge)}>{map[type].label}</span>;
}

function PriorityBadge({ priority }: { priority: CoursePriority }) {
  if (priority === "core") {
    return (
      <span className="inline-flex items-center gap-1 rounded-md border border-amber-300/30 bg-amber-500/15 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-amber-200">
        <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" fill="currentColor" aria-hidden="true">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
        Core
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-md border border-white/15 bg-white/[0.04] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white/65">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-2.5 w-2.5" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
      </svg>
      Optional
    </span>
  );
}

function CompactCourseCard({ course, stage }: { course: Course; stage: 1 | 2 | 3 | 4 | 5 }) {
  const style = STAGE_STYLES[stage];
  return (
    <article className={cn("group flex overflow-hidden rounded-md border-y border-r border-white/10 bg-[#303847] text-white shadow-[0_6px_18px_rgba(0,0,0,0.18)] transition-colors hover:bg-[#374050]", style.courseBorder)}>
      <div className="relative flex w-[88px] flex-shrink-0 items-center justify-center overflow-hidden bg-[#1a1f2b]">
        <Image src={course.image} alt={course.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="88px" />
        <span className="absolute left-1.5 top-1.5 inline-flex items-center rounded bg-black/55 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.1em] text-white/95 backdrop-blur-sm">C{course.num}</span>
      </div>
      <div className="min-w-0 flex-1 p-4">
        <div className="mb-2 flex items-start justify-between gap-2">
          <CoursePill type={course.type} stage={stage} />
          <PriorityBadge priority={course.priority} />
        </div>
        <h3 className={cn("text-[17px] leading-snug text-white transition-colors", style.hoverText)} style={{ fontFamily: "var(--font-bold)" }}>{course.title}</h3>
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-white/65">
          <span className="inline-flex items-center gap-1.5"><span className={cn("h-1 w-1 rounded-full", style.dotColor)} /> {course.duration}</span>
          <span className="inline-flex items-center gap-1.5"><span className={cn("h-1 w-1 rounded-full", style.dotColor)} /> Instructor-led</span>
        </div>
        <p className="mt-2.5 text-[13px] leading-relaxed text-white/75">{course.summary}</p>
      </div>
    </article>
  );
}

function StageModule({ meta }: { meta: StageMeta }) {
  const style = STAGE_STYLES[meta.stage];
  const totalCourses = meta.groups.reduce((s, g) => s + g.courses.length, 0);

  return (
    <div className={cn("w-full overflow-hidden rounded-2xl border text-white", style.ring)} style={{ backgroundImage: `${style.pattern}, linear-gradient(135deg, ${style.colorFrom}, ${style.colorTo})`, boxShadow: style.glow }}>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-6 py-5">
        <div className="flex items-center gap-3">
          <span className={cn("inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em]", style.badge)}>Stage {meta.stage}</span>
          <h2 className="text-[28px] leading-tight text-white" style={{ fontFamily: "var(--font-bold)" }}>{meta.title}</h2>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-white/70">
          <span className="inline-flex items-center gap-1.5"><span className={cn("h-1.5 w-1.5 rounded-full", style.dotColor)} />{meta.duration}</span>
          <span className="opacity-40">·</span>
          <span>{totalCourses} {totalCourses === 1 ? "course" : "courses"}</span>
        </div>
      </div>

      <div className="px-6 pt-5">
        <p className="text-[17px] italic leading-relaxed text-white/85">“{meta.motivation}”</p>
      </div>

      <div className="space-y-6 px-6 py-5">
        {meta.groups.map((group, gIdx) => (
          <div key={gIdx}>
            {meta.groups.length > 1 || group.kind === "elective" ? (
              <div className="mb-3 flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.18em] text-white/55">{group.label}</span>
                <span className="h-px flex-1 bg-white/10" />
              </div>
            ) : null}
            <div className={cn("grid gap-3", group.courses.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2")}>
              {group.courses.map((c) => <CompactCourseCard key={c.num} course={c} stage={meta.stage} />)}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-3 border-t border-white/10 bg-black/20 px-6 py-4">
        <div className="flex flex-wrap items-center gap-2 text-[11px]">
          <span className="min-w-[110px] uppercase tracking-wider text-white/55">Skills unlocked</span>
          <span className="text-white/30">→</span>
          {meta.skillsUnlocked.map((s) => (
            <span key={s} className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] text-white/85">{s}</span>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2 text-[11px]">
          <span className="min-w-[110px] uppercase tracking-wider text-white/55">Cohort fit</span>
          <span className="text-white/30">→</span>
          <span className="inline-flex items-center gap-1.5 rounded-md border border-[#a3e635]/30 bg-[#a3e635]/10 px-2 py-1 text-[10px] text-[#bef264]">
            <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            8 – 15 analysts per cohort
          </span>
          <span className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] text-white/85">Mixed L1 / L2 supported</span>
        </div>
      </div>
    </div>
  );
}

function StageConnector() {
  return (
    <div className="flex justify-center py-2">
      <svg width="36" height="56" viewBox="0 0 36 56" fill="none" aria-hidden="true">
        <line x1="18" y1="2" x2="18" y2="44" stroke="rgba(99,102,241,0.45)" strokeWidth="1.5" strokeDasharray="3 4" />
        <circle cx="18" cy="24" r="3" fill="rgba(99,102,241,0.8)" />
        <polyline points="11 38 18 46 25 38" stroke="rgba(99,102,241,0.8)" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function DestinationCard() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[#6366F1]/35 bg-gradient-to-br from-[#1e1b4b] via-[#1a1b3a] to-[#0c0c0c] text-white shadow-[0_18px_48px_rgba(99,102,241,0.18)]">
      <div className="flex flex-col gap-5 p-6 md:flex-row md:items-start md:p-8">
        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-[#6366F1]/30 bg-[#6366F1]/15 text-[#a5b4fc]">
          <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
            <path d="M12 2 L4 5 V11.5 C4 16.5 7.5 20.7 12 22 C16.5 20.7 20 16.5 20 11.5 V5 Z" stroke="currentColor" strokeWidth={1.6} strokeLinejoin="round" />
            <polyline points="8 12 11 15 16 9.5" stroke="#a3e635" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#a5b4fc]">Path outcome</p>
          <h3 className="mt-2 text-3xl leading-tight text-white md:text-4xl" style={{ fontFamily: "var(--font-light)" }}>Operational SOC Team</h3>
          <p className="mt-3 text-[14px] leading-relaxed text-white/70">
            Your team finishes with hands-on command of real SOC tooling and the readiness to operate across the capabilities below.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {CAPABILITY_TILES.map((t) => (
              <div key={t.title} className="flex gap-3 rounded-lg border border-[#6366F1]/20 bg-[#6366F1]/10 p-3.5">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border border-[#a3e635]/40 bg-[#a3e635]/15 text-[#a3e635]">
                  <div className="h-5 w-5">{t.icon}</div>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-[13px] leading-tight text-white" style={{ fontFamily: "var(--font-bold)" }}>{t.title}</h4>
                  <p className="mt-1 text-[11px] leading-relaxed text-white/70">{t.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-[#0c0c0c] text-white">
      <div className="border-b border-white/10 px-5 py-4">
        <h3 className="text-base uppercase tracking-wide text-white/90" style={{ fontFamily: "var(--font-bold)" }}>{title}</h3>
      </div>
      <div className="px-5 py-5">{children}</div>
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
    <SidebarCard title="Path Snapshot">
      <div className="space-y-5">
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-lg bg-white/[0.04] p-3 ring-1 ring-inset ring-white/5">
            <p className="text-[10px] uppercase tracking-wider text-white/45">Courses</p>
            <p className="mt-1.5 text-2xl font-semibold leading-none text-white">{COURSES.length}</p>
          </div>
          <div className="rounded-lg bg-white/[0.04] p-3 ring-1 ring-inset ring-white/5">
            <p className="text-[10px] uppercase tracking-wider text-white/45">Stages</p>
            <p className="mt-1.5 text-2xl font-semibold leading-none text-white">{stages}</p>
          </div>
          <div className="rounded-lg bg-white/[0.04] p-3 ring-1 ring-inset ring-white/5">
            <p className="text-[10px] uppercase tracking-wider text-white/45">Total hrs</p>
            <p className="mt-1.5 text-2xl font-semibold leading-none text-white">{totalLower}–{totalUpper}</p>
          </div>
        </div>

        <div className="rounded-lg border border-[#a3e635]/30 bg-[#a3e635]/10 p-3">
          <div className="flex items-center gap-2">
            <svg className="h-4 w-4 text-[#a3e635]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <p className="text-[10px] uppercase tracking-wider text-[#bef264]">Min cohort size</p>
          </div>
          <p className="mt-1.5 text-[14px] leading-relaxed text-white">8 – 10 analysts <span className="text-white/60">(or custom rollout)</span></p>
        </div>

        <div className="border-t border-white/10 pt-4">
          <p className="text-[10px] uppercase tracking-wider text-white/45">Course Mix</p>
          <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[12px] text-white/80">
            <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-sky-400" />{typeCounts.foundation} Foundation</span>
            <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />{typeCounts.platform} Platform</span>
            <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-rose-400" />{typeCounts.specialization} Specialization</span>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4">
          <p className="text-[10px] uppercase tracking-wider text-white/45">Delivery</p>
          <p className="mt-2 text-[12px] leading-relaxed text-white/80">Instructor-led · Virtual or On-site · PO-based invoicing</p>
        </div>

        <div className="border-t border-white/10 pt-4">
          <p className="text-[10px] uppercase tracking-wider text-white/45">Team Capabilities Built</p>
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {CAPABILITY_TILES.map((t) => (
              <span key={t.title} className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[11px] leading-none text-white/85">{t.title}</span>
            ))}
          </div>
        </div>
      </div>
    </SidebarCard>
  );
}

function OutcomesCard() {
  return (
    <SidebarCard title="Expected Outcomes">
      <ol className="space-y-4">
        {OUTCOMES.map((outcome, idx) => (
          <li key={outcome.title} className={cn("flex gap-3", idx > 0 && "border-t border-white/10 pt-4")}>
            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md border border-[#6366F1]/30 bg-[#6366F1]/15 text-[12px] leading-none text-[#a5b4fc]" style={{ fontFamily: "var(--font-bold)" }}>{String(idx + 1).padStart(2, "0")}</span>
            <div className="min-w-0 flex-1">
              <h4 className="text-[16px] leading-snug text-white" style={{ fontFamily: "var(--font-bold)" }}>{outcome.title}</h4>
              <p className="mt-1.5 text-[12px] leading-relaxed text-white/70">{outcome.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </SidebarCard>
  );
}

function AudienceCard() {
  return (
    <SidebarCard title="Which SOC Teams This Fits">
      <ul className="space-y-4">
        {AUDIENCE.map((item, idx) => (
          <li key={item.tag} className={cn("flex gap-3", idx > 0 && "border-t border-white/10 pt-4")}>
            <span className="flex h-6 min-w-[80px] flex-shrink-0 items-center justify-center rounded-md border border-[#6366F1]/30 bg-[#6366F1]/15 px-2 text-[10px] uppercase leading-none tracking-wider text-[#a5b4fc]" style={{ fontFamily: "var(--font-bold)" }}>{item.tag}</span>
            <p className="min-w-0 flex-1 text-[12px] leading-relaxed text-white/80">{item.body}</p>
          </li>
        ))}
      </ul>
    </SidebarCard>
  );
}

function BuyingSignalsCard() {
  return (
    <SidebarCard title="When to Bring This Into Your SOC">
      <ul className="space-y-4">
        {BUYING_SIGNALS.map((item, idx) => (
          <li key={item} className={cn("flex gap-3", idx > 0 && "border-t border-white/10 pt-4")}>
            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md border border-[#6366F1]/30 bg-[#6366F1]/15 text-[#a5b4fc]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <p className="min-w-0 flex-1 text-[12px] leading-relaxed text-white/80">{item}</p>
          </li>
        ))}
      </ul>
    </SidebarCard>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button className="flex w-full items-center justify-between gap-4 py-5 text-left" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span className="text-[18px] font-semibold leading-snug text-white soc-v6-inter">{question}</span>
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
        <h3 className="mb-2 text-2xl leading-tight text-[#0c0c0c] transition-colors group-hover:text-[#6366F1]" style={{ fontFamily: "var(--font-bold)" }}>{path.title}</h3>
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
    <section className="w-full bg-[#fbfcff] px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-[1600px]">
        <div className="max-w-3xl">
          <h2 className="text-4xl leading-tight text-[#0c0c0c] md:text-5xl" style={{ fontFamily: "var(--font-light)" }}>How an Edstellar engagement works</h2>
          <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
            Every cohort runs the same protocol: scoped, baselined, customized, delivered, and assessed for tangible impact through a combination of feedback, analytics, and business outcomes your CISO and L&amp;D leaders can act on.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {ENGAGEMENT_STEPS.map((step, idx) => (
            <div key={step.num} className="relative rounded-xl border border-[#e4e5e6] bg-white p-5 shadow-sm">
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#6366F1]">Step {step.num}</div>
              <h3 className="mt-3 text-[22px] leading-tight text-[#0c0c0c]" style={{ fontFamily: "var(--font-bold)" }}>{step.title}</h3>
              <p className="mt-2 text-[12px] leading-relaxed text-[#666666]">{step.subtitle}</p>
              {idx < ENGAGEMENT_STEPS.length - 1 ? (
                <span className="absolute right-[-12px] top-1/2 hidden -translate-y-1/2 md:block">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="9 6 15 12 9 18" />
                  </svg>
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CustomPathCTA() {
  return (
    <section className="w-full bg-[#0c0c0c] px-6 py-16 text-white md:px-12">
      <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <h2 className="text-4xl leading-tight md:text-5xl" style={{ fontFamily: "var(--font-light)" }}>Need to tailor this learning path for your team?</h2>
          <p className="mt-6 text-base leading-relaxed text-white/75">Every SOC team starts with different baselines, tooling, and shift constraints. Send us your analyst roster along with the courses they have already completed and we&apos;ll assemble a custom cohort plan around what your team already knows and where you need them to be next quarter.</p>
          <p className="mt-4 text-base leading-relaxed text-white/75">We skip courses analysts already master, swap Sentinel, Splunk, CrowdStrike, or Defender modules for the platforms in your stack, add specialised cloud or OT modules on demand, and stagger cohorts around your 24/7 shift roster so SOC coverage is never disrupted.</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="https://edstellar.com/contact" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#a3e635] px-7 py-4 text-base font-bold text-[#0c0c0c] transition-all hover:bg-[#bef264]">
              Request a Custom Path Proposal
              <svg width="16" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
            </Link>
            <Link href="https://edstellar.com/contact" className="inline-flex items-center justify-center rounded-2xl border-2 border-white/30 px-7 py-4 text-base font-bold text-white transition-all hover:border-white/60 hover:bg-white/10">
              Talk to a Curriculum Advisor
            </Link>
          </div>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] border border-white/10">
          <Image src="/images/cyber/hero-team-training.jpg" alt="Custom SOC analyst cohort planning session" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}

function StickyEnterpriseCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#a3e635]/30 bg-[#0c0c0c] text-white shadow-[0_-8px_24px_rgba(0,0,0,0.4)]">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-3 px-4 py-3 md:px-12">
        <p className="hidden text-sm leading-snug text-white/85 md:block">
          Building or upskilling a SOC team? <span className="text-white">Get a custom cohort proposal in 72 hours.</span>
        </p>
        <p className="text-[11px] leading-snug text-white/85 md:hidden">
          <span className="font-bold text-white">Min cohort 8</span> · Talk to advisor
        </p>
        <Link href="https://edstellar.com/contact" className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-[#a3e635] px-4 py-2 text-[12px] font-bold uppercase tracking-wider text-[#0c0c0c] transition hover:bg-[#bef264] md:px-5 md:py-2.5 md:text-[13px]">
          Talk to a Training Advisor
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
        </Link>
      </div>
    </div>
  );
}

export default function SocAnalystV6Page() {
  return (
    <div className={cn(cormorant.variable, inter.variable, "soc-v6-page flex min-h-screen flex-col bg-[#f8f8f8]")} style={FONT_OVERRIDE}>
      <style>{`.soc-v6-page p, .soc-v6-page .soc-v6-inter { font-family: var(--font-inter), Inter, Helvetica, Arial, sans-serif; }`}</style>
      <Header />
      <main className="flex-1 pt-16 pb-20">
        <div className="w-full border-b border-[#e4e5e6] bg-white">
          <div className="mx-auto max-w-[1600px] px-6 py-3 md:px-12">
            <nav className="flex items-center gap-1.5 text-xs text-[#666666]">
              <Link href="/" className="transition-colors hover:text-[#6366F1]">Home</Link>
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/learning-paths" className="transition-colors hover:text-[#6366F1]">Corporate Training Programs</Link>
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-[#0c0c0c]">SOC Analyst Training Path</span>
            </nav>
          </div>
        </div>

        <section className="w-full border-b border-[#e4e5e6] bg-[linear-gradient(135deg,#ffffff_0%,#eef2ff_55%,#dbeafe_100%)]">
          <div className="mx-auto max-w-[1600px] px-6 py-14 md:px-12 md:py-20">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#6366F1]/10 px-3 py-1.5 text-[11px] font-medium text-[#6366F1]">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>
                  8 – 50 analyst cohorts
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d1d5db] bg-white px-3 py-1.5 text-[11px] text-[#4b5563]">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 010 20 15.3 15.3 0 010-20z" /></svg>
                  40+ countries delivered
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d1d5db] bg-white px-3 py-1.5 text-[11px] text-[#4b5563]">
                  2,000+ enterprise SOC analysts trained
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d1d5db] bg-white px-3 py-1.5 text-[11px] text-[#4b5563]">
                  MSA / DPA ready
                </span>
              </div>
              <h1 className="max-w-4xl text-5xl leading-[1.02] text-[#0c0c0c] md:text-7xl" style={{ fontFamily: "var(--font-light)" }}>SOC Analyst Learning Path</h1>
              <p className="mt-3 max-w-3xl text-xl italic leading-snug text-[#4b5563] md:text-2xl">
                A corporate cybersecurity training program for enterprise security teams.
              </p>
              <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-[#374151] md:text-xl">
                <p>Build <strong>your job-ready SOC team</strong> that can monitor, investigate, triage, and respond to modern cyber threats across enterprise environments.</p>
                <p>Edstellar’s SOC Analyst Learning Path helps organizations develop operational blue-team capability through structured cybersecurity training aligned to real-world SOC workflows, MITRE ATT&amp;CK techniques, SIEM operations, threat hunting, incident response, and enterprise detection engineering.</p>
                <p>Designed for L1 and L2 SOC teams, this learning path combines foundational security knowledge with hands-on operational skills used inside modern Security Operations Centers (SOCs).</p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="https://edstellar.com/contact" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#6366F1] px-8 py-4 text-base font-bold text-white transition-all hover:bg-[#4F46E5]">
                  Get a Cohort Proposal
                  <svg width="16" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
                </Link>
                <Link href="https://edstellar.com/contact" className="inline-flex items-center justify-center rounded-2xl border-2 border-[#6366F1]/60 bg-white/60 px-8 py-4 text-base font-bold text-[#6366F1] transition-all hover:border-[#6366F1] hover:bg-white">
                  Talk to a Training Advisor
                </Link>
                <div className="flex items-center gap-2.5 rounded-lg border border-[#a3e635]/40 bg-[#0c0c0c] px-3.5 py-2.5 text-white">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#a3e635]/15 text-[#a3e635]">
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                      <path d="M12 2 L4 5 V11.5 C4 16.5 7.5 20.7 12 22 C16.5 20.7 20 16.5 20 11.5 V5 Z" stroke="currentColor" strokeWidth={1.6} strokeLinejoin="round" />
                      <polyline points="8 12 11 15 16 9.5" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.18em] text-white/55">Min cohort</p>
                    <p className="text-[13px] font-bold leading-tight text-white">8 – 10 analysts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustStrip />

        <section id="recommended-courses" className="w-full px-6 py-14 md:px-12 md:py-16">
          <div className="mx-auto max-w-[1600px]">
            <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-4xl leading-tight text-[#0c0c0c] md:text-5xl" style={{ fontFamily: "var(--font-light)" }}>What Teams Learn in the SOC Analyst Learning Path</h2>
                <p className="mt-4 text-base leading-relaxed text-[#4b5563]">The learning journey is structured around the operational lifecycle of a Security Operations Center, from foundational monitoring to advanced threat detection and incident response.</p>
              </div>
            </div>

            <div className="flex flex-col gap-10 xl:flex-row xl:items-start">
              <div className="min-w-0 flex-1">
                <div className="overflow-hidden rounded-[28px] border border-[#dbe3ff] bg-[linear-gradient(180deg,#f5f7ff_0%,#ffffff_48%,#f4f8ff_100%)] px-4 py-8 shadow-[0_18px_48px_rgba(99,102,241,0.10)] sm:px-6 md:px-8 md:py-12">
                  <div className="space-y-0">
                    {STAGES.map((meta, idx) => (
                      <div key={meta.stage}>
                        <StageModule meta={meta} />
                        {idx < STAGES.length - 1 ? <StageConnector /> : null}
                      </div>
                    ))}
                    <StageConnector />
                    <DestinationCard />
                  </div>
                </div>
              </div>

              <div className="w-full flex-shrink-0 space-y-6 xl:sticky xl:top-24 xl:w-[380px]">
                <PathSnapshotCard />
                <OutcomesCard />
                <AudienceCard />
                <BuyingSignalsCard />
              </div>
            </div>
          </div>
        </section>

        <CustomPathCTA />

        <EngagementWorkflow />

        <section className="w-full bg-[#0c0c0c] px-6 py-16 text-white md:px-12 md:py-20">
          <div className="mx-auto max-w-[1600px]">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a5b4fc]">FAQs</p>
                <h2 className="mt-4 text-4xl leading-tight text-white md:text-5xl" style={{ fontFamily: "var(--font-light)" }}>Frequently Asked Questions</h2>
              </div>
              <div>
                {FAQS.map((faq) => <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />)}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-6 pb-24 pt-16 md:px-12">
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
      <StickyEnterpriseCTA />
    </div>
  );
}
