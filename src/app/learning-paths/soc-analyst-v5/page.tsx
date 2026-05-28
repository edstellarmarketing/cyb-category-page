"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import { Cormorant_Garamond } from "next/font/google";
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
  {
    num: 1,
    title: "SOC Foundations and Alert Triage",
    type: "foundation",
    priority: "core",
    duration: "16 - 24 hrs",
    summary: "Build analyst fundamentals, triage discipline, and escalation judgment for L1 SOC teams.",
    outcomes: ["Alert triage workflow", "Case documentation", "Escalation criteria"],
    image: "/images/cyber/course-network.jpg",
  },
  {
    num: 2,
    title: "Cyber Kill Chain and Adversary Behavior",
    type: "foundation",
    priority: "core",
    duration: "8 - 12 hrs",
    summary: "Understand attacker stages and use them to frame investigations with more context.",
    outcomes: ["Attack lifecycle mapping", "Investigation framing", "Threat storytelling"],
    image: "/images/cyber/course-ethical-hacking.jpg",
  },
  {
    num: 3,
    title: "MITRE ATT&CK Mapping for SOC Operations",
    type: "foundation",
    priority: "core",
    duration: "8 - 16 hrs",
    summary: "Map TTPs, evaluate detection coverage, and translate alerts into adversary behavior.",
    outcomes: ["ATT&CK alignment", "Coverage gap analysis", "TTP-based investigation"],
    image: "/images/cyber/course-appsec.jpg",
  },
  {
    num: 4,
    title: "Wireshark and PCAP Analysis for Incident Investigation",
    type: "foundation",
    priority: "core",
    duration: "16 - 20 hrs",
    summary: "Strengthen packet analysis skills to validate suspicious activity and reconstruct events.",
    outcomes: ["Packet inspection", "Traffic anomaly review", "Timeline reconstruction"],
    image: "/images/cyber/course-network.jpg",
  },
  {
    num: 5,
    title: "Microsoft Sentinel and KQL for SOC Analysts",
    type: "platform",
    priority: "elective",
    duration: "16 - 20 hrs",
    summary: "Write KQL queries, tune detections, and investigate alerts in a modern SIEM workflow.",
    outcomes: ["KQL authoring", "Detection tuning", "Sentinel investigations"],
    image: "/images/cyber/course-cloud.jpg",
  },
  {
    num: 6,
    title: "Splunk Detection Engineering with SPL",
    type: "platform",
    priority: "elective",
    duration: "16 - 20 hrs",
    summary: "Build searches, dashboards, and production-ready detections using SPL.",
    outcomes: ["SPL queries", "Use-case engineering", "Dashboard-driven analysis"],
    image: "/images/cyber/course-ai-data.jpg",
  },
  {
    num: 7,
    title: "EDR/XDR Investigations with CrowdStrike and Microsoft Defender",
    type: "platform",
    priority: "elective",
    duration: "16 - 20 hrs",
    summary: "Use endpoint telemetry, live response, and host artefacts to validate and contain threats.",
    outcomes: ["Host investigation", "Live response", "Containment decisions"],
    image: "/images/cyber/course-iam.jpg",
  },
  {
    num: 8,
    title: "Sigma Rules and Detection-as-Code",
    type: "platform",
    priority: "core",
    duration: "8 - 12 hrs",
    summary: "Create portable detections that connect engineering discipline with SOC use cases.",
    outcomes: ["Sigma authoring", "Rule portability", "Detection QA"],
    image: "/images/cyber/course-appsec.jpg",
  },
  {
    num: 9,
    title: "Threat Hunting Fundamentals",
    type: "specialization",
    priority: "core",
    duration: "16 - 20 hrs",
    summary: "Develop hunt hypotheses, pivot across telemetry, and uncover threats that evade alerts.",
    outcomes: ["Hunt planning", "Hypothesis-driven search", "Analyst pivoting"],
    image: "/images/cyber/course-ethical-hacking.jpg",
  },
  {
    num: 10,
    title: "Digital Forensics and Incident Response for SOC Analysts",
    type: "specialization",
    priority: "core",
    duration: "16 - 24 hrs",
    summary: "Preserve evidence, build timelines, and support containment and post-incident analysis.",
    outcomes: ["Evidence handling", "Forensic timelines", "IR collaboration"],
    image: "/images/cyber/course-network.jpg",
  },
  {
    num: 11,
    title: "SOAR Playbook Automation for Security Operations",
    type: "specialization",
    priority: "core",
    duration: "8 - 16 hrs",
    summary: "Automate repetitive triage steps and reduce alert fatigue with practical playbooks.",
    outcomes: ["Playbook design", "Automation candidates", "Response orchestration"],
    image: "/images/cyber/course-grc.jpg",
  },
  {
    num: 12,
    title: "Cloud SOC Monitoring for AWS, Azure, and GCP",
    type: "specialization",
    priority: "core",
    duration: "16 - 20 hrs",
    summary: "Extend detection and response workflows into cloud-native logs, identities, and workloads.",
    outcomes: ["Cloud telemetry", "Identity monitoring", "Multi-cloud investigations"],
    image: "/images/cyber/course-cloud.jpg",
  },
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
    motivation: "After this stage, analysts triage real alerts with confidence and escalate with judgement.",
    duration: "16 – 24 hrs",
    skillsUnlocked: ["Triage workflow", "Case documentation", "Escalation criteria"],
    groups: [
      { label: "Required core", kind: "core", courses: [COURSES[0]] },
    ],
  },
  {
    stage: 2,
    title: "SIEM Mastery",
    motivation: "After this stage, analysts run SIEM-first investigations with attacker context and packet-level evidence.",
    duration: "64 – 88 hrs typical",
    skillsUnlocked: ["ATT&CK mapping", "KQL & SPL", "Packet inspection", "EDR triage"],
    groups: [
      {
        label: "Required core (all 3)",
        kind: "core",
        courses: [COURSES[1], COURSES[2], COURSES[3]],
      },
      {
        label: "Platform tracks · Pick 2 of 3",
        kind: "elective",
        rule: { pickFrom: 2, total: 3 },
        courses: [COURSES[4], COURSES[5], COURSES[6]],
      },
    ],
  },
  {
    stage: 3,
    title: "Threat Hunting",
    motivation: "After this stage, analysts hunt threats proactively across telemetry instead of waiting for alerts.",
    duration: "24 – 32 hrs",
    skillsUnlocked: ["Sigma authoring", "Hunt planning", "Hypothesis-driven search"],
    groups: [
      { label: "Required core (both)", kind: "core", courses: [COURSES[7], COURSES[8]] },
    ],
  },
  {
    stage: 4,
    title: "Incident Response",
    motivation: "After this stage, analysts preserve evidence and run forensic timelines under pressure.",
    duration: "16 – 24 hrs",
    skillsUnlocked: ["Evidence handling", "Forensic timelines", "IR collaboration"],
    groups: [
      { label: "Required core", kind: "core", courses: [COURSES[9]] },
    ],
  },
  {
    stage: 5,
    title: "Advanced Ops",
    motivation: "After this stage, analysts automate triage and extend the SOC into cloud-native operations.",
    duration: "24 – 36 hrs",
    skillsUnlocked: ["Playbook design", "Cloud telemetry", "Multi-cloud monitoring"],
    groups: [
      { label: "Required core (both)", kind: "core", courses: [COURSES[10], COURSES[11]] },
    ],
  },
];

const OUTCOMES = [
  {
    title: "Modern SOC tool mastery",
    body: "Build practical capability across SIEM, EDR/XDR, packet analysis, threat intelligence, and automation workflows used by high-performing SOC teams.",
  },
  {
    title: "Higher-fidelity investigations",
    body: "Move beyond alert clicking into contextual investigation, evidence gathering, and response decision-making across endpoint, network, and cloud telemetry.",
  },
  {
    title: "Detection engineering readiness",
    body: "Learn to write and tune detections with KQL, SPL, Sigma, and ATT&CK-aligned coverage thinking.",
  },
  {
    title: "Career progression",
    body: "Prepare analysts to grow into Detection Engineer, Threat Hunter, Incident Responder, and Cloud Security roles.",
  },
];

const AUDIENCE: { tag: string; body: string }[] = [
  {
    tag: "Tier 1",
    body: "SOC analysts who want to move beyond alert fatigue into deeper investigation work.",
  },
  {
    tag: "Tier 2",
    body: "Analysts building toward detection engineering, threat hunting, or incident response roles.",
  },
  {
    tag: "Teams",
    body: "Security teams standardising SIEM, EDR/XDR, and automation skills across analysts.",
  },
  {
    tag: "Career",
    body: "IT and cybersecurity professionals transitioning into blue-team and SOC operations careers.",
  },
];

const BUYING_SIGNALS = [
  "Analysts need stronger KQL, SPL, and Sigma capability.",
  "Your SOC wants to reduce repetitive triage with SOAR playbooks.",
  "You are building a roadmap from L1 monitoring to threat hunting and DFIR.",
  "Cloud alerts are increasing but analyst workflows are still on-prem focused.",
];

const FAQS = [
  {
    question: "How long does the full SOC Analyst Learning Path take, and can we fit it around shift coverage?",
    answer:
      "The full path is 160 – 224 hours of instructor-led training across 12 courses, typically delivered over 12 – 16 weeks at 8 – 12 hours per week. Cohorts are scheduled around your SOC shift roster so 24/7 coverage isn't disrupted, including split-shift cohorts, weekend sessions, or staggered enrolment across L1 and L2 teams. Individual courses can also be taken standalone if you don't need the full path.",
  },
  {
    question: "Is the training instructor-led, and how do hands-on labs work?",
    answer:
      "Every course is instructor-led, virtual or on-site at your facility. Labs run on real tooling, Microsoft Sentinel, Splunk, CrowdStrike Falcon, Microsoft Defender, and Wireshark, with live walkthroughs of triage, KQL/SPL authoring, ATT&CK mapping, and incident workflows. Self-paced material reinforces the live sessions but doesn't replace them, so analysts can ask questions and practise under guidance.",
  },
  {
    question: "Can the path be tailored to the SIEM, EDR, and cloud platforms in our SOC?",
    answer:
      "Yes. The default path covers Microsoft Sentinel, Splunk, CrowdStrike, and Microsoft Defender across AWS, Azure, and GCP, but every course can be tuned to the specific platforms in your environment, including QRadar, Chronicle, Elastic, SentinelOne, Carbon Black, Defender for Cloud, or GuardDuty. We map your tooling, log sources, detection priorities, and ATT&CK coverage gaps before kickoff.",
  },
  {
    question: "What roles will analysts be ready for after the full path?",
    answer:
      "The path is built around the operational skills L1 and L2 analysts actually use, alert triage, ATT&CK mapping, KQL and SPL detection authoring, Sigma rule development, threat hunting, DFIR, SOAR playbooks, and cloud SOC monitoring. Analysts who complete all 12 courses are prepared for Detection Engineer, Threat Hunter, Incident Responder, and Cloud Security Analyst roles, with hands-on lab time on the same tools they'll use in production.",
  },
  {
    question: "Can mixed-skill teams take the path together, or do analysts need prerequisites?",
    answer:
      "Tier 1 SOC analysts and recent IT/cybersecurity graduates can start at Stage 1 (Foundations) with no formal prerequisite. Analysts already comfortable with alert triage, networking, and basic SIEM use can enter at Stage 2 (SIEM Mastery). For mixed-skill teams we run a short skills assessment before kickoff to place each analyst at the right stage, so senior analysts aren't slowed down and junior analysts aren't lost.",
  },
];

const RELATED_PATHS = [
  {
    title: "Incident Responder Path",
    slug: "/learning-paths/incident-responder",
    role: "Incident Response",
    level: "Intermediate",
    programs: 11,
    description: "Master the full incident lifecycle from triage and containment through forensic analysis and post-incident reporting.",
    image: "/images/cyber/hero-team-training.jpg",
    accent: "#F59E0B",
  },
  {
    title: "Detection Engineer Path",
    slug: "/learning-paths/detection-engineer",
    role: "Detection Engineering",
    level: "Intermediate",
    programs: 9,
    description: "Write Sigma rules, tune SIEM detections, and build pipelines that surface attacker behaviour before it escalates.",
    image: "/images/cyber/hero-governance.jpg",
    accent: "#EF4444",
  },
  {
    title: "Security Architect Path",
    slug: "/learning-paths/security-architect",
    role: "Security Architecture",
    level: "Advanced",
    programs: 13,
    description: "Design zero-trust architectures, threat models, and enterprise security blueprints across cloud and on-prem environments.",
    image: "/images/cyber/path-architect.jpg",
    accent: "#8B5CF6",
  },
];

const CAREER_OUTCOMES = [
  "Detection Engineer",
  "Threat Hunter",
  "Incident Responder",
  "Cloud Security Analyst",
];

const STAGE_STYLES: Record<
  1 | 2 | 3 | 4 | 5,
  {
    badge: string;
    colorFrom: string;
    colorTo: string;
    ring: string;
    pattern: string;
    glow: string;
    courseBorder: string;
    dotColor: string;
    hoverText: string;
  }
> = {
  1: {
    badge: "bg-sky-500/20 text-sky-100 border-sky-300/20",
    colorFrom: "#173b56",
    colorTo: "#102738",
    ring: "border-sky-300/20",
    pattern: "radial-gradient(circle at 18% 18%, rgba(125,211,252,0.22), transparent 24%), repeating-linear-gradient(90deg, rgba(125,211,252,0.10) 0, rgba(125,211,252,0.10) 1px, transparent 1px, transparent 48px)",
    glow: "0 14px 34px rgba(14, 116, 144, 0.18)",
    courseBorder: "border-l-[3px] border-l-sky-500",
    dotColor: "bg-sky-400",
    hoverText: "group-hover:text-sky-400",
  },
  2: {
    badge: "bg-purple-500/20 text-purple-100 border-purple-300/20",
    colorFrom: "#4c1d95",
    colorTo: "#2e1065",
    ring: "border-purple-300/20",
    pattern: "radial-gradient(circle at 82% 20%, rgba(192,132,252,0.22), transparent 24%), repeating-linear-gradient(45deg, rgba(192,132,252,0.08) 0, rgba(192,132,252,0.08) 1px, transparent 1px, transparent 34px)",
    glow: "0 14px 34px rgba(147, 51, 234, 0.18)",
    courseBorder: "border-l-[3px] border-l-purple-500",
    dotColor: "bg-purple-400",
    hoverText: "group-hover:text-purple-400",
  },
  3: {
    badge: "bg-emerald-500/20 text-emerald-100 border-emerald-300/20",
    colorFrom: "#18493d",
    colorTo: "#0f2c25",
    ring: "border-emerald-300/20",
    pattern: "radial-gradient(circle at 20% 78%, rgba(110,231,183,0.22), transparent 22%), linear-gradient(135deg, rgba(110,231,183,0.08) 25%, transparent 25%, transparent 50%, rgba(110,231,183,0.08) 50%, rgba(110,231,183,0.08) 75%, transparent 75%, transparent)",
    glow: "0 14px 34px rgba(5, 150, 105, 0.18)",
    courseBorder: "border-l-[3px] border-l-emerald-500",
    dotColor: "bg-emerald-400",
    hoverText: "group-hover:text-emerald-400",
  },
  4: {
    badge: "bg-amber-500/20 text-amber-100 border-amber-300/20",
    colorFrom: "#5a3d18",
    colorTo: "#34230d",
    ring: "border-amber-300/20",
    pattern: "radial-gradient(circle at 80% 75%, rgba(252,211,77,0.22), transparent 22%), repeating-linear-gradient(0deg, rgba(252,211,77,0.08) 0, rgba(252,211,77,0.08) 1px, transparent 1px, transparent 40px)",
    glow: "0 14px 34px rgba(217, 119, 6, 0.18)",
    courseBorder: "border-l-[3px] border-l-amber-500",
    dotColor: "bg-amber-400",
    hoverText: "group-hover:text-amber-400",
  },
  5: {
    badge: "bg-rose-500/20 text-rose-100 border-rose-300/20",
    colorFrom: "#5f1f38",
    colorTo: "#34111f",
    ring: "border-rose-300/20",
    pattern: "radial-gradient(circle at 18% 22%, rgba(251,113,133,0.22), transparent 22%), repeating-linear-gradient(135deg, rgba(251,113,133,0.08) 0, rgba(251,113,133,0.08) 1px, transparent 1px, transparent 32px)",
    glow: "0 14px 34px rgba(225, 29, 72, 0.18)",
    courseBorder: "border-l-[3px] border-l-rose-500",
    dotColor: "bg-rose-400",
    hoverText: "group-hover:text-rose-400",
  },
};

function parseDurationBounds(duration: string): [number, number] {
  const parts = duration.split("-").map((p) => parseInt(p.trim(), 10));
  const lower = Number.isFinite(parts[0]) ? parts[0] : 0;
  const upper = Number.isFinite(parts[1]) ? parts[1] : lower;
  return [lower, upper];
}

function CoursePill({ type, stage }: { type: CourseType; stage: 1 | 2 | 3 | 4 | 5 }) {
  const map: Record<CourseType, { label: string }> = {
    foundation: { label: "Foundation" },
    platform: { label: "Platform" },
    specialization: { label: "Specialization" },
  };
  const style = STAGE_STYLES[stage];
  return (
    <span className={cn("inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-semibold leading-none border", style.badge)}>
      {map[type].label}
    </span>
  );
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
    <article
      className={cn(
        "group flex overflow-hidden rounded-md border-y border-r border-white/10 bg-[#303847] text-white shadow-[0_6px_18px_rgba(0,0,0,0.18)] transition-colors hover:bg-[#374050]",
        style.courseBorder,
      )}
    >
      <div className="relative flex w-[88px] flex-shrink-0 items-center justify-center overflow-hidden bg-[#1a1f2b]">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="88px"
        />
        <span className="absolute left-1.5 top-1.5 inline-flex items-center rounded bg-black/55 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.1em] text-white/95 backdrop-blur-sm">
          C{course.num}
        </span>
      </div>
      <div className="min-w-0 flex-1 p-4">
        <div className="mb-2 flex items-start justify-between gap-2">
          <CoursePill type={course.type} stage={stage} />
          <PriorityBadge priority={course.priority} />
        </div>
        <h3
          className={cn("text-[17px] leading-snug text-white transition-colors", style.hoverText)}
          style={{ fontFamily: "var(--font-bold)" }}
        >
          {course.title}
        </h3>
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-white/65">
          <span className="inline-flex items-center gap-1.5">
            <span className={cn("h-1 w-1 rounded-full", style.dotColor)} /> {course.duration}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className={cn("h-1 w-1 rounded-full", style.dotColor)} /> Instructor-led
          </span>
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
    <div
      className={cn("w-full overflow-hidden rounded-2xl border text-white", style.ring)}
      style={{
        backgroundImage: `${style.pattern}, linear-gradient(135deg, ${style.colorFrom}, ${style.colorTo})`,
        boxShadow: style.glow,
      }}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-6 py-5">
        <div className="flex items-center gap-3">
          <span className={cn("inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em]", style.badge)}>
            Stage {meta.stage}
          </span>
          <h2 className="text-[28px] leading-tight text-white" style={{ fontFamily: "var(--font-bold)" }}>
            {meta.title}
          </h2>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-white/70">
          <span className="inline-flex items-center gap-1.5">
            <span className={cn("h-1.5 w-1.5 rounded-full", style.dotColor)} />
            {meta.duration}
          </span>
          <span className="opacity-40">·</span>
          <span>{totalCourses} {totalCourses === 1 ? "course" : "courses"}</span>
        </div>
      </div>

      <div className="px-6 pt-5">
        <p className="text-[17px] italic leading-relaxed text-white/85" style={{ fontFamily: "var(--font-light)" }}>
          “{meta.motivation}”
        </p>
      </div>

      <div className="space-y-6 px-6 py-5">
        {meta.groups.map((group, gIdx) => (
          <div key={gIdx}>
            {meta.groups.length > 1 || group.kind === "elective" ? (
              <div className="mb-3 flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.18em] text-white/55">
                  {group.label}
                </span>
                <span className="h-px flex-1 bg-white/10" />
              </div>
            ) : null}
            <div
              className={cn(
                "grid gap-3",
                group.courses.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2",
              )}
            >
              {group.courses.map((c) => (
                <CompactCourseCard key={c.num} course={c} stage={meta.stage} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 bg-black/20 px-6 py-4">
        <div className="flex flex-wrap items-center gap-2 text-[11px]">
          <span className="uppercase tracking-wider text-white/55">Skills unlocked</span>
          <span className="text-white/30">→</span>
          {meta.skillsUnlocked.map((s) => (
            <span
              key={s}
              className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] text-white/85"
            >
              {s}
            </span>
          ))}
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
        <polyline
          points="11 38 18 46 25 38"
          stroke="rgba(99,102,241,0.8)"
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
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
            <path
              d="M12 2 L4 5 V11.5 C4 16.5 7.5 20.7 12 22 C16.5 20.7 20 16.5 20 11.5 V5 Z"
              stroke="currentColor"
              strokeWidth={1.6}
              strokeLinejoin="round"
            />
            <polyline
              points="8 12 11 15 16 9.5"
              stroke="#a3e635"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#a5b4fc]">Path outcome</p>
          <h3 className="mt-2 text-3xl leading-tight text-white md:text-4xl" style={{ fontFamily: "var(--font-light)" }}>
            Operational SOC Analyst
          </h3>
          <p className="mt-3 text-[14px] leading-relaxed text-white/70">
            You finish with hands-on command of real SOC tooling and the readiness to operate in any of these roles.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {CAREER_OUTCOMES.map((role) => (
              <span
                key={role}
                className="inline-flex items-center rounded-md border border-[#6366F1]/30 bg-[#6366F1]/15 px-2.5 py-1 text-[11px] text-[#c7d2fe]"
              >
                {role}
              </span>
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
        <h3 className="text-base uppercase tracking-wide text-white/90" style={{ fontFamily: "var(--font-bold)" }}>
          {title}
        </h3>
      </div>
      <div className="px-5 py-5">{children}</div>
    </div>
  );
}

function PathSnapshotCard() {
  const [totalLower, totalUpper] = COURSES.reduce<[number, number]>(
    ([lo, hi], c) => {
      const [l, u] = parseDurationBounds(c.duration);
      return [lo + l, hi + u];
    },
    [0, 0],
  );

  const typeCounts: Record<CourseType, number> = { foundation: 0, platform: 0, specialization: 0 };
  COURSES.forEach((c) => {
    typeCounts[c.type] += 1;
  });

  const stages = STAGES.length;

  return (
    <SidebarCard title="Path Snapshot">
      <div className="space-y-5">
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-lg bg-white/[0.04] p-3 ring-1 ring-inset ring-white/5">
            <p className="text-[10px] uppercase tracking-wider text-white/45">Courses</p>
            <p className="mt-1.5 text-2xl leading-none text-white" style={{ fontFamily: "var(--font-bold)" }}>
              {COURSES.length}
            </p>
          </div>
          <div className="rounded-lg bg-white/[0.04] p-3 ring-1 ring-inset ring-white/5">
            <p className="text-[10px] uppercase tracking-wider text-white/45">Stages</p>
            <p className="mt-1.5 text-2xl leading-none text-white" style={{ fontFamily: "var(--font-bold)" }}>
              {stages}
            </p>
          </div>
          <div className="rounded-lg bg-white/[0.04] p-3 ring-1 ring-inset ring-white/5">
            <p className="text-[10px] uppercase tracking-wider text-white/45">Total hrs</p>
            <p className="mt-1.5 text-2xl leading-none text-white" style={{ fontFamily: "var(--font-bold)" }}>
              {totalLower}–{totalUpper}
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4">
          <p className="text-[10px] uppercase tracking-wider text-white/45">Course Mix</p>
          <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[12px] text-white/80">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              {typeCounts.foundation} Foundation
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              {typeCounts.platform} Platform
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
              {typeCounts.specialization} Specialization
            </span>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4">
          <p className="text-[10px] uppercase tracking-wider text-white/45">Delivery</p>
          <p className="mt-2 text-[12px] leading-relaxed text-white/80">Instructor-led · Virtual or On-site</p>
        </div>

        <div className="border-t border-white/10 pt-4">
          <p className="text-[10px] uppercase tracking-wider text-white/45">Career Outcomes</p>
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {CAREER_OUTCOMES.map((role) => (
              <span
                key={role}
                className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[11px] leading-none text-white/85"
              >
                {role}
              </span>
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
          <li
            key={outcome.title}
            className={cn("flex gap-3", idx > 0 && "border-t border-white/10 pt-4")}
          >
            <span
              className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md border border-[#6366F1]/30 bg-[#6366F1]/15 text-[12px] leading-none text-[#a5b4fc]"
              style={{ fontFamily: "var(--font-bold)" }}
            >
              {String(idx + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0 flex-1">
              <h4
                className="text-[16px] leading-snug text-white"
                style={{ fontFamily: "var(--font-bold)" }}
              >
                {outcome.title}
              </h4>
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
    <SidebarCard title="Who This Path Is For">
      <ul className="space-y-4">
        {AUDIENCE.map((item, idx) => (
          <li
            key={item.tag}
            className={cn("flex gap-3", idx > 0 && "border-t border-white/10 pt-4")}
          >
            <span
              className="flex h-6 min-w-[64px] flex-shrink-0 items-center justify-center rounded-md border border-[#6366F1]/30 bg-[#6366F1]/15 px-2 text-[10px] uppercase leading-none tracking-wider text-[#a5b4fc]"
              style={{ fontFamily: "var(--font-bold)" }}
            >
              {item.tag}
            </span>
            <p className="min-w-0 flex-1 text-[12px] leading-relaxed text-white/80">{item.body}</p>
          </li>
        ))}
      </ul>
    </SidebarCard>
  );
}

function BuyingSignalsCard() {
  return (
    <SidebarCard title="When to Choose This Path">
      <ul className="space-y-4">
        {BUYING_SIGNALS.map((item, idx) => (
          <li
            key={item}
            className={cn("flex gap-3", idx > 0 && "border-t border-white/10 pt-4")}
          >
            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md border border-[#6366F1]/30 bg-[#6366F1]/15 text-[#a5b4fc]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5"
                aria-hidden="true"
              >
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
    <div className="border-b border-[#e4e5e6] last:border-0">
      <button
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <span className="text-[18px] leading-snug text-[#0c0c0c]" style={{ fontFamily: "var(--font-bold)" }}>
          {question}
        </span>
        <svg
          className={cn("h-5 w-5 flex-shrink-0 text-[#6366F1] transition-transform duration-200", open && "rotate-180")}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open ? <div className="pb-5 text-sm leading-relaxed text-[#666666]">{answer}</div> : null}
    </div>
  );
}

function RelatedPathCard({ path }: { path: typeof RELATED_PATHS[number] }) {
  return (
    <Link
      href={path.slug}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[#e4e5e6] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#6366F1]/30 hover:shadow-lg"
    >
      <div className="relative h-48 overflow-hidden bg-[#f0f0f0]">
        <Image
          src={path.image}
          alt={path.title}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
        <span
          className="absolute bottom-3 left-3 rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white"
          style={{ backgroundColor: path.accent }}
        >
          {path.level}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="mb-2 text-[10px] font-medium uppercase tracking-wide text-[#666666]">{path.role}</span>
        <h3 className="mb-2 text-2xl leading-tight text-[#0c0c0c] transition-colors group-hover:text-[#6366F1]" style={{ fontFamily: "var(--font-bold)" }}>
          {path.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-[#666666]">{path.description}</p>
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#9ca3af]">{path.programs} programs</span>
          <span className="font-medium text-[#6366F1]">Explore path</span>
        </div>
      </div>
    </Link>
  );
}

export default function SocAnalystV5Page() {
  return (
    <div
      className={cn("flex min-h-screen flex-col bg-[#f8f8f8]", cormorant.variable)}
      style={FONT_OVERRIDE}
    >
      <Header />
      <main className="flex-1 pt-16">
        <div className="w-full border-b border-[#e4e5e6] bg-white">
          <div className="mx-auto max-w-[1600px] px-6 py-3 md:px-12">
            <nav className="flex items-center gap-1.5 text-xs text-[#666666]">
              <Link href="/" className="transition-colors hover:text-[#6366F1]">
                Home
              </Link>
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/learning-paths" className="transition-colors hover:text-[#6366F1]">
                Learning Paths
              </Link>
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-[#0c0c0c]">SOC Analyst Learning Path</span>
            </nav>
          </div>
        </div>

        <section className="w-full border-b border-[#e4e5e6] bg-[linear-gradient(135deg,#ffffff_0%,#eef2ff_55%,#dbeafe_100%)]">
          <div className="mx-auto max-w-[1600px] px-6 py-14 md:px-12 md:py-20">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#6366F1]/10 px-3 py-1.5 text-xs font-medium text-[#6366F1]">SOC Role Path</span>
                <span className="rounded-full border border-[#d1d5db] bg-white px-3 py-1.5 text-xs text-[#4b5563]">Analyst-first positioning</span>
                <span className="rounded-full border border-[#d1d5db] bg-white px-3 py-1.5 text-xs text-[#4b5563]">12 recommended courses</span>
              </div>
              <h1 className="max-w-4xl text-5xl leading-[1.02] text-[#0c0c0c] md:text-7xl" style={{ fontFamily: "var(--font-light)" }}>
                SOC Analyst Learning Path
              </h1>
              <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-[#374151] md:text-xl">
                <p>
                  Build job-ready SOC analysts who can monitor, investigate, triage, and respond to modern cyber threats across enterprise environments.
                </p>
                <p>
                  Edstellar’s SOC Analyst Learning Path helps organizations develop operational blue-team capability through structured cybersecurity training aligned to real-world SOC workflows, MITRE ATT&CK techniques, SIEM operations, threat hunting, incident response, and enterprise detection engineering.
                </p>
                <p>
                  Designed for L1 and L2 SOC teams, this learning path combines foundational security knowledge with hands-on operational skills used inside modern Security Operations Centers (SOCs).
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="https://edstellar.com/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#6366F1] px-8 py-4 text-base font-bold text-white transition-all hover:bg-[#4F46E5]"
                >
                  Talk to a Cybersecurity Advisor
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="recommended-courses" className="w-full px-6 py-14 md:px-12 md:py-16">
          <div className="mx-auto max-w-[1600px]">
            <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-4xl leading-tight text-[#0c0c0c] md:text-5xl" style={{ fontFamily: "var(--font-light)" }}>
                  What Teams Learn in the SOC Analyst Learning Path
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
                  The learning journey is structured around the operational lifecycle of a Security Operations Center, from foundational monitoring to advanced threat detection and incident response.
                </p>
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

        <section className="w-full bg-[#0c0c0c] px-6 py-16 text-white md:px-12">
          <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h2 className="text-4xl leading-tight md:text-5xl" style={{ fontFamily: "var(--font-light)" }}>
                From alert fatigue to confident investigation
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/75">
                By the time analysts finish this path, the SOC operates differently. Triage moves from clicking through alerts
                to working investigations with real context, ATT&amp;CK-mapped, packet-validated, and deep across SIEM and EDR.
                The same analysts who used to escalate everything start owning investigations end-to-end.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/75">
                The roadmap ladders from foundations into SIEM mastery, then into proactive hunting, incident response, and
                cloud-native operations. Each stage compounds on the last, so the team grows real operational capability
                instead of collecting course completions, and reaches Detection Engineer, Threat Hunter, Incident Responder,
                and Cloud Security Analyst roles from within.
              </p>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/images/cyber/coe-team.png"
                alt="Corporate SOC team at workstations in a security operations center"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="w-full px-6 py-16 md:px-12 md:py-20">
          <div className="mx-auto max-w-[1600px] rounded-[32px] border border-[#e4e5e6] bg-white px-8 py-12 shadow-sm md:px-14 md:py-16">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <h2 className="text-4xl leading-tight text-[#0c0c0c] md:text-5xl" style={{ fontFamily: "var(--font-light)" }}>
                  Common questions from SOC and security leaders
                </h2>
              </div>
              <div>
                {FAQS.map((faq) => (
                  <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-6 pb-24 md:px-12">
          <div className="mx-auto max-w-[1600px]">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-4xl leading-tight text-[#0c0c0c] md:text-5xl" style={{ fontFamily: "var(--font-light)" }}>
                  Related Learning Paths
                </h2>
              </div>
              <Link href="/learning-paths" className="text-sm font-medium text-[#6366F1] transition-colors hover:text-[#4F46E5]">
                View all paths
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {RELATED_PATHS.map((path) => (
                <RelatedPathCard key={path.slug} path={path} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
