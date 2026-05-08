"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { cn } from "@/lib/utils";

type CourseType = "foundation" | "platform" | "specialization";

interface Course {
  num: number;
  title: string;
  type: CourseType;
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
    duration: "16 - 24 hrs",
    summary: "Build analyst fundamentals, triage discipline, and escalation judgment for L1 SOC teams.",
    outcomes: ["Alert triage workflow", "Case documentation", "Escalation criteria"],
    image: "/images/cyber/course-network.jpg",
  },
  {
    num: 2,
    title: "Cyber Kill Chain and Adversary Behavior",
    type: "foundation",
    duration: "8 hrs",
    summary: "Understand attacker stages and use them to frame investigations with more context.",
    outcomes: ["Attack lifecycle mapping", "Investigation framing", "Threat storytelling"],
    image: "/images/cyber/course-ethical-hacking.jpg",
  },
  {
    num: 3,
    title: "MITRE ATT&CK Mapping for SOC Operations",
    type: "foundation",
    duration: "8 - 16 hrs",
    summary: "Map TTPs, evaluate detection coverage, and translate alerts into adversary behavior.",
    outcomes: ["ATT&CK alignment", "Coverage gap analysis", "TTP-based investigation"],
    image: "/images/cyber/course-appsec.jpg",
  },
  {
    num: 4,
    title: "Wireshark and PCAP Analysis for Incident Investigation",
    type: "foundation",
    duration: "16 hrs",
    summary: "Strengthen packet analysis skills to validate suspicious activity and reconstruct events.",
    outcomes: ["Packet inspection", "Traffic anomaly review", "Timeline reconstruction"],
    image: "/images/cyber/course-network.jpg",
  },
  {
    num: 5,
    title: "Microsoft Sentinel and KQL for SOC Analysts",
    type: "platform",
    duration: "16 hrs",
    summary: "Write KQL queries, tune detections, and investigate alerts in a modern SIEM workflow.",
    outcomes: ["KQL authoring", "Detection tuning", "Sentinel investigations"],
    image: "/images/cyber/course-cloud.jpg",
  },
  {
    num: 6,
    title: "Splunk Detection Engineering with SPL",
    type: "platform",
    duration: "16 hrs",
    summary: "Build searches, dashboards, and production-ready detections using SPL.",
    outcomes: ["SPL queries", "Use-case engineering", "Dashboard-driven analysis"],
    image: "/images/cyber/course-ai-data.jpg",
  },
  {
    num: 7,
    title: "EDR/XDR Investigations with CrowdStrike and Microsoft Defender",
    type: "platform",
    duration: "16 hrs",
    summary: "Use endpoint telemetry, live response, and host artefacts to validate and contain threats.",
    outcomes: ["Host investigation", "Live response", "Containment decisions"],
    image: "/images/cyber/course-iam.jpg",
  },
  {
    num: 8,
    title: "Sigma Rules and Detection-as-Code",
    type: "platform",
    duration: "8 hrs",
    summary: "Create portable detections that connect engineering discipline with SOC use cases.",
    outcomes: ["Sigma authoring", "Rule portability", "Detection QA"],
    image: "/images/cyber/course-appsec.jpg",
  },
  {
    num: 9,
    title: "Threat Hunting Fundamentals",
    type: "specialization",
    duration: "16 hrs",
    summary: "Develop hunt hypotheses, pivot across telemetry, and uncover threats that evade alerts.",
    outcomes: ["Hunt planning", "Hypothesis-driven search", "Analyst pivoting"],
    image: "/images/cyber/course-ethical-hacking.jpg",
  },
  {
    num: 10,
    title: "Digital Forensics and Incident Response for SOC Analysts",
    type: "specialization",
    duration: "16 - 24 hrs",
    summary: "Preserve evidence, build timelines, and support containment and post-incident analysis.",
    outcomes: ["Evidence handling", "Forensic timelines", "IR collaboration"],
    image: "/images/cyber/course-network.jpg",
  },
  {
    num: 11,
    title: "SOAR Playbook Automation for Security Operations",
    type: "specialization",
    duration: "8 - 16 hrs",
    summary: "Automate repetitive triage steps and reduce alert fatigue with practical playbooks.",
    outcomes: ["Playbook design", "Automation candidates", "Response orchestration"],
    image: "/images/cyber/course-grc.jpg",
  },
  {
    num: 12,
    title: "Cloud SOC Monitoring for AWS, Azure, and GCP",
    type: "specialization",
    duration: "16 hrs",
    summary: "Extend detection and response workflows into cloud-native logs, identities, and workloads.",
    outcomes: ["Cloud telemetry", "Identity monitoring", "Multi-cloud investigations"],
    image: "/images/cyber/course-cloud.jpg",
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

const AUDIENCE = [
  "Tier 1 SOC analysts who want to move beyond alert fatigue into deeper investigation work.",
  "Tier 2 analysts building toward detection engineering, threat hunting, or incident response roles.",
  "Security teams standardising SIEM, EDR/XDR, and automation skills across analysts.",
  "IT and cybersecurity professionals transitioning into blue-team and SOC operations careers.",
];

const BUYING_SIGNALS = [
  "Analysts need stronger KQL, SPL, and Sigma capability.",
  "Your SOC wants to reduce repetitive triage with SOAR playbooks.",
  "You are building a roadmap from L1 monitoring to threat hunting and DFIR.",
  "Cloud alerts are increasing but analyst workflows are still on-prem focused.",
];

const FAQS = [
  {
    question: "Which courses should Edstellar highlight first on the website?",
    answer:
      "Lead with the strongest market signals from SOC analysts: Microsoft Sentinel and KQL, Splunk Detection Engineering, EDR/XDR Investigations, Threat Hunting Fundamentals, DFIR for SOC Analysts, and Cloud SOC Monitoring.",
  },
  {
    question: "Why should the page focus on courses instead of raw LMS modules?",
    answer:
      "A public website needs outcome-led offers, not internal lesson metadata. Buyers and learners want to understand capability areas, platform relevance, duration, and career progression before they care about quiz counts or alert IDs.",
  },
  {
    question: "How should Edstellar position the path for SOC analysts?",
    answer:
      "Position it as an escape from Tier 1 alert fatigue into higher-value investigation, detection engineering, threat hunting, and incident response work. That is the main motivation described in SocAnalyst.md.",
  },
  {
    question: "What role progression should the page make visible?",
    answer:
      "The clearest next-step roles are Detection Engineer, Threat Hunter, Incident Responder, and Cloud Security Analyst. The page should show these as outcomes of the roadmap, not as unrelated adjacent paths.",
  },
];

const RELATED_PATHS = [
  {
    title: "Incident Responder Path",
    slug: "/learning-paths/incident-responder",
    role: "Incident Response",
    level: "Intermediate",
    modules: 22,
    description: "Master the full incident lifecycle from triage and containment through forensic analysis and post-incident reporting.",
    image: "/images/cyber/hero-team-training.jpg",
    accent: "#F59E0B",
  },
  {
    title: "Detection Engineer Path",
    slug: "/learning-paths/detection-engineer",
    role: "Detection Engineering",
    level: "Intermediate",
    modules: 19,
    description: "Write Sigma rules, tune SIEM detections, and build pipelines that surface attacker behaviour before it escalates.",
    image: "/images/cyber/hero-governance.jpg",
    accent: "#EF4444",
  },
  {
    title: "Security Architect Path",
    slug: "/learning-paths/security-architect",
    role: "Security Architecture",
    level: "Advanced",
    modules: 20,
    description: "Design zero-trust architectures, threat models, and enterprise security blueprints across cloud and on-prem environments.",
    image: "/images/cyber/path-architect.jpg",
    accent: "#8B5CF6",
  },
];

type RoadmapNode =
  | {
      kind: "heading";
      stage: 1 | 2 | 3 | 4 | 5;
      title: string;
      description: string;
    }
  | {
      kind: "course";
      stage: 1 | 2 | 3 | 4 | 5;
      course: Course;
    };

const ROADMAP_NODES: RoadmapNode[] = [
  {
    kind: "heading",
    stage: 1,
    title: "Foundations",
    description: "Build the analyst baseline: triage discipline, attacker context, ATT&CK mapping, and packet-level investigation.",
  },
  { kind: "course", stage: 1, course: COURSES[0] },
  {
    kind: "heading",
    stage: 2,
    title: "SIEM Mastery",
    description: "Develop stronger detection and investigation capability with attacker models, packet evidence, and SIEM-first workflows.",
  },
  { kind: "course", stage: 2, course: COURSES[1] },
  { kind: "course", stage: 2, course: COURSES[2] },
  { kind: "course", stage: 2, course: COURSES[3] },
  { kind: "course", stage: 2, course: COURSES[4] },
  { kind: "course", stage: 2, course: COURSES[5] },
  { kind: "course", stage: 2, course: COURSES[6] },
  {
    kind: "heading",
    stage: 3,
    title: "Threat Hunting",
    description: "Shift from reactive alert handling to proactive hypothesis-driven investigations across telemetry sources.",
  },
  { kind: "course", stage: 3, course: COURSES[7] },
  { kind: "course", stage: 3, course: COURSES[8] },
  {
    kind: "heading",
    stage: 4,
    title: "Incident Response",
    description: "Build the forensic and response judgement needed to validate incidents, contain threats, and support recovery.",
  },
  { kind: "course", stage: 4, course: COURSES[9] },
  {
    kind: "heading",
    stage: 5,
    title: "Advanced Ops",
    description: "Extend analyst capability into automation and cloud-native monitoring for modern enterprise security operations.",
  },
  { kind: "course", stage: 5, course: COURSES[10] },
  { kind: "course", stage: 5, course: COURSES[11] },
];

function RoadmapArrow() {
  return (
    <svg className="my-3 h-10 w-4 text-[#7c8cf8]" viewBox="0 0 14 40" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
      <line x1="7" y1="0" x2="7" y2="32" />
      <polyline points="2 28 7 34 12 28" />
    </svg>
  );
}

function RoadmapChevron() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 6 15 12 9 18" />
    </svg>
  );
}

function CourseThumbArt() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="6" y="14" width="52" height="32" rx="3" />
      <line x1="6" y1="22" x2="58" y2="22" />
      <circle cx="11" cy="18" r="0.8" fill="currentColor" />
      <circle cx="14" cy="18" r="0.8" fill="currentColor" />
      <circle cx="17" cy="18" r="0.8" fill="currentColor" />
      <path d="M14 34 L22 34 L27 28 L34 38 L42 26 L50 30" />
    </svg>
  );
}

function CoursePill({ type, stage }: { type: CourseType; stage: 1 | 2 | 3 | 4 | 5 }) {
  const map: Record<CourseType, { label: string }> = {
    foundation: { label: "Foundation" },
    platform: { label: "Platform" },
    specialization: { label: "Specialization" },
  };
  const label = map[type].label;
  const style = STAGE_STYLES[stage];

  return (
    <span className={cn("inline-flex rounded-full px-3 py-1 text-[11px] font-semibold leading-none border", style.badge)}>
      {label}
    </span>
  );
}

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

function RoadmapHeadingCard({ stage, title, description }: { stage: 1 | 2 | 3 | 4 | 5; title: string; description: string }) {
  const style = STAGE_STYLES[stage];

  return (
    <div
      className={cn(
        "w-full max-w-[600px] rounded-[10px] border px-8 py-8 text-center text-white",
        style.ring,
      )}
      style={{
        backgroundImage: `${style.pattern}, linear-gradient(135deg, ${style.colorFrom}, ${style.colorTo})`,
        boxShadow: style.glow,
      }}
    >
      <div className="mb-6 flex justify-center">
        <span className={cn("inline-flex items-center rounded-full border px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.18em]", style.badge)}>
          Stage {stage}
        </span>
      </div>
      <p className="text-[24px] text-white" style={{ fontFamily: "var(--font-bold)" }}>
        {title}
      </p>
      <p className="mt-3 text-base leading-relaxed text-white/70">{description}</p>
    </div>
  );
}

function RoadmapCourseCard({ course, stage }: { course: Course; stage: 1 | 2 | 3 | 4 | 5 }) {
  const style = STAGE_STYLES[stage];

  return (
    <article className={cn("group flex w-full max-w-[600px] overflow-hidden rounded-[6px] border-y border-r border-white/10 bg-[#303847] text-white shadow-[0_8px_28px_rgba(0,0,0,0.18)] transition-colors hover:bg-[#374050]", style.courseBorder)}>
      <div 
        className="relative flex w-[110px] flex-shrink-0 items-center justify-center overflow-hidden"
        style={{ backgroundImage: `linear-gradient(135deg, ${style.colorFrom}, ${style.colorTo})` }}
      >
        <Image 
          src={course.image} 
          alt={course.title} 
          fill 
          className="object-cover opacity-70 mix-blend-overlay transition-transform duration-500 group-hover:scale-110"
          sizes="110px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-[0.12em] text-white/90 z-10 drop-shadow-md">
          C{course.num}
        </span>
      </div>
      <div className="min-w-0 flex-1 px-6 py-6">
        <div className="mb-3">
          <CoursePill type={course.type} stage={stage} />
        </div>
        <h3 className={cn("text-[19px] leading-snug text-white transition-colors", style.hoverText)} style={{ fontFamily: "var(--font-bold)" }}>
          {course.title}
        </h3>
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] text-white/60" style={{ fontFamily: "var(--font-light)" }}>
          <span className="inline-flex items-center gap-1.5">
            <span className={cn("h-1.5 w-1.5 rounded-full", style.dotColor)} /> {course.duration}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className={cn("h-1.5 w-1.5 rounded-full", style.dotColor)} /> Instructor-led (Virtual/On-site)
          </span>
        </div>
        <p className="mt-3.5 text-[15px] leading-relaxed text-white/80">{course.summary}</p>
      </div>
      <div className={cn("flex w-12 flex-shrink-0 items-center justify-center border-l border-white/8 text-white/40 transition-colors", style.hoverText)}>
        <div className="h-5 w-5">
          <RoadmapChevron />
        </div>
      </div>
    </article>
  );
}

function RoadmapNodeView({ node, isLast }: { node: RoadmapNode; isLast: boolean }) {
  return (
    <>
      {node.kind === "heading" ? (
        <RoadmapHeadingCard stage={node.stage} title={node.title} description={node.description} />
      ) : (
        <RoadmapCourseCard course={node.course} stage={node.stage} />
      )}
      {isLast ? null : <RoadmapArrow />}
    </>
  );
}

function SidebarCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-[#0c0c0c] text-white">
      <div className="border-b border-white/10 px-5 py-4">
        <h3 className="text-sm font-bold uppercase tracking-wide text-white/90" style={{ fontFamily: "var(--font-bold)" }}>
          {title}
        </h3>
      </div>
      <div className="px-5 py-5">{children}</div>
    </div>
  );
}

function PathSnapshotCard() {
  return (
    <SidebarCard title="Path Snapshot">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-white/5 p-4">
            <p className="text-[11px] uppercase tracking-wider text-white/40">Recommended courses</p>
            <p className="mt-2 text-2xl font-bold text-white">{COURSES.length}</p>
          </div>
          <div className="rounded-xl bg-white/5 p-4">
            <p className="text-[11px] uppercase tracking-wider text-white/40">Core stages</p>
            <p className="mt-2 text-2xl font-bold text-white">5</p>
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-[11px] uppercase tracking-wider text-white/40">Career outcomes</p>
          <p className="mt-2 text-sm leading-relaxed text-white/80">
            Detection Engineer, Threat Hunter, Incident Responder, Cloud Security Analyst
          </p>
        </div>
      </div>
    </SidebarCard>
  );
}

function OutcomesCard() {
  return (
    <SidebarCard title="Expected Outcomes">
      <ul className="space-y-3">
        {OUTCOMES.map((outcome) => (
          <li key={outcome.title} className="flex gap-2.5 text-xs leading-relaxed">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#6366F1]" />
            <span className="text-white/80">
              <strong className="text-white">{outcome.title}:</strong> {outcome.body}
            </span>
          </li>
        ))}
      </ul>
    </SidebarCard>
  );
}

function AudienceCard() {
  return (
    <SidebarCard title="Ideal Audience">
      <ul className="space-y-3">
        {AUDIENCE.map((item) => (
          <li key={item} className="flex gap-2.5 text-xs leading-relaxed text-white/80">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#6366F1]" />
            {item}
          </li>
        ))}
      </ul>
    </SidebarCard>
  );
}

function BuyingSignalsCard() {
  return (
    <SidebarCard title="Why Buyers Care">
      <ul className="space-y-3">
        {BUYING_SIGNALS.map((item) => (
          <li key={item} className="flex gap-2.5 text-xs leading-relaxed text-white/80">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#6366F1]" />
            {item}
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
        <span className="text-sm text-[#0c0c0c]" style={{ fontFamily: "var(--font-bold)" }}>
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
        <h3 className="mb-2 text-lg text-[#0c0c0c] transition-colors group-hover:text-[#6366F1]" style={{ fontFamily: "var(--font-bold)" }}>
          {path.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-[#666666]">{path.description}</p>
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#9ca3af]">{path.modules} modules</span>
          <span className="font-medium text-[#6366F1]">Explore path</span>
        </div>
      </div>
    </Link>
  );
}

export default function SocAnalystV4Page() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8f8f8]">
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
              <h1 className="max-w-4xl text-4xl leading-tight text-[#0c0c0c] md:text-6xl" style={{ fontFamily: "var(--font-light)" }}>
                SOC Analyst Learning Path
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#374151] md:text-xl">
                This version of the SOC Analyst page is structured for the public website, not an LMS. It recommends the
                courses Edstellar should add to move learners from alert fatigue into detection engineering, threat hunting,
                incident response, and cloud SOC operations.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="https://edstellar.com/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#6366F1] px-8 py-4 text-base font-bold text-white transition-all hover:bg-[#4F46E5]"
                >
                  Build This Course Portfolio
                </Link>
                <Link
                  href="#recommended-courses"
                  className="inline-flex items-center justify-center rounded-2xl border border-[#c7d2fe] bg-white px-8 py-4 text-base font-medium text-[#3730A3] transition-all hover:border-[#6366F1]"
                >
                  Explore Recommended Courses
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="recommended-courses" className="w-full px-6 py-14 md:px-12 md:py-16">
          <div className="mx-auto max-w-[1600px]">
            <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-[#6366F1]">Learning Path Roadmap</p>
                <h2 className="text-3xl text-[#0c0c0c] md:text-4xl" style={{ fontFamily: "var(--font-light)" }}>
                  SOC Analyst Learning Path
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
                  Progress from SOC foundations into SIEM mastery, endpoint investigations, threat hunting, incident response,
                  SOAR automation, and cloud security monitoring through a structured role-based roadmap.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-10 xl:flex-row xl:items-start">
              <div className="min-w-0 flex-1">
                <div className="overflow-hidden rounded-[28px] border border-[#dbe3ff] bg-[linear-gradient(180deg,#f5f7ff_0%,#ffffff_48%,#f4f8ff_100%)] px-4 py-10 shadow-[0_18px_48px_rgba(99,102,241,0.10)] sm:px-6 md:px-8 md:py-14">
                  <div
                    className="flex flex-col items-center rounded-[20px]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at top, rgba(99,102,241,0.12), transparent 38%), repeating-linear-gradient(90deg, rgba(99,102,241,0.06) 0, rgba(99,102,241,0.06) 1px, transparent 1px, transparent 72px)",
                      backgroundSize: "100% 100%, 72px 100%",
                      backgroundColor: "#fbfcff",
                    }}
                  >
                    {ROADMAP_NODES.map((node, index) => (
                      <RoadmapNodeView key={`${node.kind}-${index}`} node={node} isLast={index === ROADMAP_NODES.length - 1} />
                    ))}
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
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-[#a5b4fc]">Website Positioning</p>
              <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "var(--font-light)" }}>
                The page should sell progression, not lesson counts
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/75">
                The strongest shift is from an LMS presentation model to a role-based, analyst-centric offer. Public visitors
                should see capability areas, platform depth, specialization paths, and business relevance before they ever see
                any internal module structure.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/75">
                The roadmap should visibly ladder from foundations to SIEM mastery, then into hunting, incident response, and
                advanced cloud or automation operations. That aligns directly with the buying intent documented in
                <code className="ml-1 rounded bg-white/10 px-1.5 py-0.5 text-white">SocAnalyst.md</code>.
              </p>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] border border-white/10">
              <Image src="/images/cyber/hero-cyber-ops.jpg" alt="SOC analyst training" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-sm">
                    <p className="text-xs uppercase tracking-wide text-white/50">From</p>
                    <p className="mt-2 text-sm text-white">Quiz counts, investigations, and internal training metadata</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-sm">
                    <p className="text-xs uppercase tracking-wide text-white/50">To</p>
                    <p className="mt-2 text-sm text-white">Courses, platforms, outcomes, and career-step credibility</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-6 py-16 md:px-12 md:py-20">
          <div className="mx-auto max-w-[1600px] rounded-[32px] border border-[#e4e5e6] bg-white px-8 py-12 shadow-sm md:px-14 md:py-16">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-[#6366F1]">FAQ</p>
                <h2 className="text-3xl text-[#0c0c0c] md:text-4xl" style={{ fontFamily: "var(--font-light)" }}>
                  Questions this page should answer clearly
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
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-[#6366F1]">Career Adjacencies</p>
                <h2 className="text-3xl text-[#0c0c0c] md:text-4xl" style={{ fontFamily: "var(--font-light)" }}>
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
