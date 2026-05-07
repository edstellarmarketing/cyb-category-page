import type { CatalogModule } from "./types";

export const CATALOG: CatalogModule[] = [
  // CORE
  {
    id: "core-soc-fundamentals",
    title: "SOC fundamentals & build-vs-buy",
    kind: "core",
    description:
      "CIA triad, NIST CSF, the SOC operating model, and what to staff vs outsource when standing up an in-house SOC.",
    hoursRange: [8, 16],
    signals: { maturity: ["none", "new"] },
  },
  {
    id: "core-network-fundamentals",
    title: "Network fundamentals for SOC analysts",
    kind: "core",
    description: "TCP/IP, DNS, HTTP, packet analysis, Linux command line and Windows event basics for triage.",
    hoursRange: [8, 16],
    signals: { maturity: ["none", "new"], roles: ["l1"] },
  },
  {
    id: "core-siem-splunk",
    title: "Splunk SPL for detection engineers",
    kind: "core",
    description: "Production-grade SPL, log onboarding, parsing, normalisation and detection authoring on Splunk.",
    hoursRange: [16, 32],
    signals: { stacks: ["splunk"], roles: ["l2", "l3", "detection-eng"] },
  },
  {
    id: "core-siem-sentinel",
    title: "Microsoft Sentinel detection engineering",
    kind: "core",
    description: "KQL, Sentinel analytics rules, Microsoft Defender integrations and SC-200 aligned detection patterns.",
    hoursRange: [16, 32],
    signals: { stacks: ["sentinel"], roles: ["l2", "l3", "detection-eng"] },
  },
  {
    id: "core-siem-chronicle",
    title: "Google Chronicle for SecOps",
    kind: "core",
    description: "UDM, YARA-L rules, Chronicle SOAR and detection authoring against Google's normalised telemetry pipeline.",
    hoursRange: [16, 24],
    signals: { stacks: ["chronicle"], roles: ["l2", "detection-eng"] },
  },
  {
    id: "core-siem-qradar",
    title: "QRadar AQL and offense management",
    kind: "core",
    description: "QRadar architecture, AQL searches, custom rules, and offense investigation workflows for L2 analysts.",
    hoursRange: [16, 24],
    signals: { stacks: ["qradar"], roles: ["l2"] },
  },
  {
    id: "core-siem-elk",
    title: "Elastic Stack for security operations",
    kind: "core",
    description: "ELK ingest pipelines, KQL, detection rules and Kibana dashboards tuned for SOC throughput.",
    hoursRange: [16, 24],
    signals: { stacks: ["elk"], roles: ["l2", "detection-eng"] },
  },
  {
    id: "core-mitre-attack",
    title: "MITRE ATT&CK navigation and gap analysis",
    kind: "core",
    description: "Mapping detections to ATT&CK, identifying coverage gaps and prioritising hunt hypotheses.",
    hoursRange: [8, 16],
    signals: { roles: ["l2", "l3", "detection-eng"], gaps: ["hunting"] },
  },
  {
    id: "core-threat-hunting",
    title: "Hypothesis-driven threat hunting",
    kind: "core",
    description:
      "Hunt loop, Pyramid of Pain, IOC pivoting and structured hunts across endpoint, identity and network telemetry.",
    hoursRange: [16, 24],
    signals: { roles: ["l3"], gaps: ["hunting"] },
  },
  {
    id: "core-incident-response",
    title: "NIST 800-61 incident response in practice",
    kind: "core",
    description: "Preparation, detection, containment, eradication and recovery — with run-the-room IR exercises.",
    hoursRange: [16, 24],
    signals: { roles: ["ir", "l3"], gaps: ["ir-coord"] },
  },
  {
    id: "core-soar-playbooks",
    title: "SOAR playbook design",
    kind: "core",
    description: "TheHive, Cortex and XSOAR playbook engineering, with measurable success criteria per playbook.",
    hoursRange: [16, 24],
    signals: { roles: ["detection-eng", "l3"] },
  },
  {
    id: "core-forensics",
    title: "Memory and disk forensics for responders",
    kind: "core",
    description: "Volatility, Autopsy, Wireshark and structured analytic technique for legal-grade investigations.",
    hoursRange: [16, 24],
    signals: { roles: ["ir"] },
  },
  {
    id: "core-detection-engineering-at-scale",
    title: "Detection engineering at scale",
    kind: "core",
    description:
      "Detection-as-code, CI for detections, validation against ATT&CK, deduping noise and managing the detection lifecycle.",
    hoursRange: [16, 24],
    signals: { roles: ["detection-eng"], maturity: ["mature"] },
  },

  // ADJACENT
  {
    id: "adj-cloud-soc-aws",
    title: "Cloud SOC: AWS detection and response",
    kind: "adjacent",
    description: "GuardDuty, CloudTrail, Security Hub and AWS-native detection patterns for SOC teams.",
    hoursRange: [16, 24],
    signals: { roles: ["cloud-soc"], stacks: ["sentinel", "splunk", "chronicle"] },
  },
  {
    id: "adj-cloud-soc-azure",
    title: "Cloud SOC: Azure and Microsoft 365",
    kind: "adjacent",
    description: "Defender XDR, Entra ID logs, Azure activity, and Sentinel-driven detection for the Microsoft estate.",
    hoursRange: [16, 24],
    signals: { roles: ["cloud-soc"], stacks: ["sentinel"] },
  },
  {
    id: "adj-active-directory-attacks",
    title: "Active Directory attack chains and detection",
    kind: "adjacent",
    description: "Kerberoasting, AS-REP, ACL abuse, BloodHound paths — and the telemetry that catches them.",
    hoursRange: [8, 16],
    signals: { roles: ["l3", "detection-eng"] },
  },
  {
    id: "adj-identity-threat-detection",
    title: "Identity threat detection and response",
    kind: "adjacent",
    description: "Credential abuse, session hijack, OAuth abuse and SaaS-token monitoring across modern identity providers.",
    hoursRange: [8, 16],
    signals: { roles: ["l2", "l3", "detection-eng"] },
  },
  {
    id: "adj-ot-ics",
    title: "OT/ICS security for industrial sectors",
    kind: "adjacent",
    description: "Purdue model, IEC 62443, NIST 800-82 and OT-specific detection patterns for energy and manufacturing.",
    hoursRange: [16, 24],
    signals: { sectors: ["energy", "mfg"] },
  },
  {
    id: "adj-bfsi-threats",
    title: "BFSI-specific threat scenarios",
    kind: "adjacent",
    description: "Banking-trojan campaigns, SWIFT abuse, payment fraud and regulator-driven detection priorities.",
    hoursRange: [8, 16],
    signals: { sectors: ["bfsi"] },
  },
  {
    id: "adj-healthcare-overlay",
    title: "Healthcare and HIPAA detection overlay",
    kind: "adjacent",
    description: "PHI handling, EMR access patterns, HIPAA-aligned audit logging and clinical-system threat models.",
    hoursRange: [8, 16],
    signals: { sectors: ["healthcare"] },
  },
  {
    id: "adj-appsec-awareness",
    title: "AppSec awareness for in-house developers",
    kind: "adjacent",
    description:
      "OWASP Top 10, secure coding habits, secrets hygiene and the SOC handoff for developer-led environments.",
    hoursRange: [8, 16],
    signals: { sectors: ["saas"] },
  },

  // SOFT
  {
    id: "soft-stakeholder-reporting",
    title: "Stakeholder reporting for SOC managers",
    kind: "soft",
    description: "Translating SOC outcomes into board-ready language, choosing the right metrics and narrative arc.",
    hoursRange: [4, 8],
    signals: { roles: ["manager"], gaps: ["leadership-reporting"] },
  },
  {
    id: "soft-cross-team-comms",
    title: "Cross-team escalation playbooks",
    kind: "soft",
    description:
      "How SOC, IT, engineering and legal coordinate during a live incident — comms patterns that hold under pressure.",
    hoursRange: [4, 8],
    signals: { gaps: ["comms", "ir-coord"] },
  },
  {
    id: "soft-runbook-writing",
    title: "Technical writing for runbooks",
    kind: "soft",
    description: "Writing runbooks an analyst can run at 3 AM — clarity, edge cases, decision trees and review cycles.",
    hoursRange: [4, 8],
    signals: { gaps: ["docs"] },
  },
  {
    id: "soft-tabletop-facilitation",
    title: "IR tabletop facilitation",
    kind: "soft",
    description: "Designing and running tabletop exercises that move the needle — scenarios, scoring, and playback.",
    hoursRange: [4, 8],
    signals: { roles: ["ir", "manager"], gaps: ["ir-coord"] },
  },
  {
    id: "soft-burnout-shift-hygiene",
    title: "Analyst burnout and shift handoff hygiene",
    kind: "soft",
    description:
      "Shift-change patterns, on-call rotations, decision fatigue countermeasures and retention-aware SOC design.",
    hoursRange: [4, 8],
    signals: { gaps: ["burnout"] },
  },
  {
    id: "soft-board-storytelling",
    title: "Board-level storytelling for security leaders",
    kind: "soft",
    description:
      "Risk in dollar terms, threat-landscape framing, and how to present SOC investment cases without jargon.",
    hoursRange: [4, 8],
    signals: { roles: ["manager"], gaps: ["leadership-reporting"] },
  },
];

export function getModuleById(id: string): CatalogModule | undefined {
  return CATALOG.find((m) => m.id === id);
}
