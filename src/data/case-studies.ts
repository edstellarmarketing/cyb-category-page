export type ChallengeIcon =
  | "cloud" | "layers" | "graduation-cap" | "file-check" | "heart" | "shield-alert"
  | "globe" | "users" | "factory" | "cpu" | "alert-triangle" | "shopping-cart"
  | "credit-card" | "code" | "car" | "siren" | "shield" | "scan-eye" | "file-text"
  | "rocket" | "key" | "activity" | "power" | "landmark" | "radio" | "wifi" | "network";

export type CaseStudy = {
  slug: string;
  cardTitle: string;
  cardImage: string;
  cardDescription: string;
  hero: { title: string; image: string; alt: string };
  intro: { heading: string; body: string };
  challenges: Array<{ icon: ChallengeIcon; title: string; body: string }>;
  solution: {
    heading: string;
    paragraphs: string[];
    bulletsLead?: string;
    bullets: Array<{ label: string; body: string }>;
    image: string;
    imageAlt: string;
  };
  results: Array<{ label: string; body: string }>;
  meet: {
    heading: string;
    bullets: Array<{ label: string; body: string }>;
    image: string;
    imageAlt: string;
  };
  intervention?: {
    heading: string;
    paragraphs: string[];
    steps: Array<{ number: number; label: string; body: string }>;
    image: string;
    imageAlt: string;
  };
  programSpecs?: Array<{ label: string; value: string }>;
  metrics?: Array<{ stat: string; label: string; sublabel: string }>;
  quote?: { body: string; author: string; title: string; company: string };
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "banking-cloud-soc",
    cardTitle: "Cloud SOC at Global Scale",
    cardImage: "/images/cyber/hero-industry-bfsi.jpg",
    cardDescription:
      "A leading global bank, navigating cloud-migration risk across 14 markets, unified its SOC analysts and cloud engineers on a single role-based upskilling program and closed audit-flagged gaps in 90 days.",
    hero: {
      title: "How a Leading Global Bank Modernized Cloud SOC Operations Across 14 Markets",
      image: "/images/cyber/hero-industry-bfsi.jpg",
      alt: "Banking and financial services security team",
    },
    intro: {
      heading: "Edstellar Helps a Global Bank Build Cloud-Native Security Operations",
      body: "Banking and financial services teams are navigating cloud migration risk while juggling fragmented security stances across markets. A leading global bank operating in 14 markets partnered with Edstellar to unify SOC analysts and cloud engineers on a single role-based upskilling program that closed audit-flagged gaps in 90 days.",
    },
    challenges: [
      { icon: "cloud", title: "Cloud Migration Risk", body: "Workloads moving to AWS, Azure, and GCP exposed inconsistent detection coverage." },
      { icon: "layers", title: "Fragmented Tooling", body: "14 country offices ran different SIEM, EDR, and CASB stacks with no unified playbook." },
      { icon: "graduation-cap", title: "Skills Gap", body: "Existing SOC analysts had on-prem expertise but lacked cloud-native instrumentation skills." },
      { icon: "file-check", title: "Audit Pressure", body: "Quarterly audits flagged gaps in detection coverage for cloud-resident sensitive data." },
    ],
    solution: {
      heading: "Edstellar Solution",
      paragraphs: [
        "Edstellar delivered a 12-week role-based program covering cloud SOC operations, multi-cloud security telemetry, and detection engineering. Cohorts ran in parallel across all 14 markets via VILT to ensure uniform outcomes.",
      ],
      bulletsLead: "Key program elements:",
      bullets: [
        { label: "Role-Based Tracks:", body: "Separate paths for SOC analysts, cloud engineers, and security architects." },
        { label: "Hands-On Labs:", body: "AWS GuardDuty, Microsoft Sentinel, and Google SCC live exercises." },
        { label: "Audit-Aligned Curriculum:", body: "Mapped to MAS, FCA, and Basel III requirements." },
      ],
      image: "/images/cyber/hero-bfsi-pros.jpg",
      imageAlt: "Banking professionals reviewing security dashboards",
    },
    results: [
      { label: "Audit Closure:", body: "100% of cloud-related audit findings resolved within 90 days." },
      { label: "Detection Coverage:", body: "65% increase in cloud-native detection coverage across all 14 markets." },
      { label: "Time-to-Triage:", body: "40% faster mean time to respond on cloud incidents." },
      { label: "Workforce Readiness:", body: "540 SOC and engineering staff completed the cloud-native security program." },
    ],
    meet: {
      heading: "How Does Edstellar's Approach Meet the Requirements?",
      bullets: [
        { label: "Parallel Cohort Scale:", body: "14 markets trained the same week, ensuring uniform outcomes." },
        { label: "Cloud-First Curriculum:", body: "Built around AWS, Azure, GCP, and hybrid architectures." },
        { label: "Vendor-Agnostic Detection:", body: "Engineering applied across any SIEM, EDR, or CASB." },
        { label: "Regulatory Mapping:", body: "Aligned to MAS, FCA, Basel III, PCI-DSS, and SWIFT CSP." },
      ],
      image: "/images/cyber/bfsi-card-1.jpg",
      imageAlt: "Banking control room",
    },
  },
  {
    slug: "pharma-hipaa-gaps",
    cardTitle: "Closing HIPAA Audit Gaps",
    cardImage: "/images/cyber/hero-industry-healthcare.jpg",
    cardDescription:
      "A multinational pharma company, after consecutive findings on patient-data handling, rolled out HIPAA-aligned awareness plus a focused track for IT and clinical-systems engineers across three continents.",
    hero: {
      title: "How a Multinational Pharma Company Closed HIPAA Gaps Across Three Continents",
      image: "/images/cyber/hero-industry-healthcare.jpg",
      alt: "Healthcare professionals and digital records",
    },
    intro: {
      heading: "Edstellar Helps a Pharma Leader Build a Patient-Data-Safe Workforce",
      body: "Pharmaceutical and healthcare organizations face increasing scrutiny on patient-data handling and clinical-systems security. A multinational pharma company, after consecutive audit findings, engaged Edstellar to roll out HIPAA-aligned awareness plus a focused security training track for IT and clinical-systems engineers across three continents.",
    },
    challenges: [
      { icon: "heart", title: "PHI Handling Risk", body: "Multiple business units handled patient data with inconsistent control practice." },
      { icon: "shield-alert", title: "Recurring Audit Findings", body: "HIPAA audits flagged the same gaps for two consecutive cycles." },
      { icon: "globe", title: "Multi-Region Operations", body: "Sites across the US, EU, and APAC needed region-specific compliance overlays." },
      { icon: "users", title: "Mixed Workforce", body: "Clinical, IT, and back-office staff each needed distinct depth of training." },
    ],
    solution: {
      heading: "Edstellar Solution",
      paragraphs: [
        "Edstellar designed a tiered HIPAA security program: broad awareness for all staff, plus deep technical tracks for IT and clinical-systems engineers. Region-specific overlays addressed GDPR for the EU and APAC privacy regulations.",
      ],
      bulletsLead: "Program highlights:",
      bullets: [
        { label: "Awareness Module:", body: "90-minute mandatory module for 8,500 staff with role-tailored scenarios." },
        { label: "Engineering Track:", body: "6-week cohort on PHI controls, audit logging, and secure data flows." },
        { label: "Region Overlays:", body: "GDPR alignment for EU, PDPA for APAC, HIPAA for US." },
      ],
      image: "/images/cyber/industry-healthcare.jpg",
      imageAlt: "Pharmaceutical and healthcare technology",
    },
    results: [
      { label: "Audit Closure:", body: "Zero HIPAA findings on the next quarterly audit cycle." },
      { label: "Workforce Reach:", body: "8,500 staff completed PHI awareness with a 94% first-attempt pass rate." },
      { label: "Engineer Training:", body: "240 IT and clinical-systems engineers completed the technical track." },
      { label: "Incident Response:", body: "50% faster PHI incident triage post-program." },
    ],
    meet: {
      heading: "How Does Edstellar's Approach Meet the Requirements?",
      bullets: [
        { label: "Tiered Depth:", body: "Awareness for everyone, deep skills for the engineering core." },
        { label: "Region-Specific:", body: "Local privacy regulations layered on a HIPAA spine." },
        { label: "Audit-Aligned Reporting:", body: "Skills-delta and completion metrics ready for auditors." },
        { label: "Clinical-Systems Focus:", body: "Curriculum tailored to LIMS, EMR, and pharmacovigilance platforms." },
      ],
      image: "/images/cyber/hero-team-training.jpg",
      imageAlt: "Healthcare team training session",
    },
  },
  {
    slug: "manufacturing-ics-security",
    cardTitle: "ICS Security for the Factory Floor",
    cardImage: "/images/cyber/hero-industry-manufacturing.jpg",
    cardDescription:
      "A Fortune 500 manufacturer addressed OT and IT convergence by upskilling a blended cohort of plant engineers and IT staff on ICS hardening, segmentation, and incident-response playbooks.",
    hero: {
      title: "How a Fortune 500 Manufacturer Hardened ICS on the Factory Floor",
      image: "/images/cyber/hero-industry-manufacturing.jpg",
      alt: "Manufacturing facility with industrial control systems",
    },
    intro: {
      heading: "Edstellar Helps a Fortune 500 Manufacturer Bridge OT and IT Security",
      body: "Manufacturing organizations are under pressure as OT and IT converge on the factory floor, exposing once-isolated industrial control systems to enterprise networks. A Fortune 500 manufacturer engaged Edstellar to upskill a blended cohort of plant engineers and IT staff on ICS hardening, network segmentation, and incident-response playbooks tuned for industrial environments.",
    },
    challenges: [
      { icon: "factory", title: "OT-IT Convergence", body: "Plant networks newly connected to enterprise IT lacked segmentation discipline." },
      { icon: "cpu", title: "Legacy ICS Stacks", body: "Decades-old PLCs and HMIs without native security telemetry." },
      { icon: "users", title: "Knowledge Silos", body: "Plant engineers and IT teams spoke different security languages." },
      { icon: "alert-triangle", title: "Downtime Sensitivity", body: "Any IR step had to balance security action against plant uptime." },
    ],
    solution: {
      heading: "Edstellar Solution",
      paragraphs: [
        "Edstellar delivered a 10-week blended program merging plant engineers and IT or SOC staff in shared cohorts, focused on ICS-specific threat models, segmentation patterns (Purdue and IEC 62443), and IR playbooks designed to preserve uptime.",
      ],
      bulletsLead: "Course modules:",
      bullets: [
        { label: "ICS Threat Modeling:", body: "Per-process threat scenarios mapped to MITRE ATT&CK for ICS." },
        { label: "Segmentation Workshop:", body: "Hands-on Purdue level enforcement and zone or conduit design." },
        { label: "Uptime-Aware IR:", body: "Decision trees that weigh containment against plant continuity." },
      ],
      image: "/images/cyber/course-network.jpg",
      imageAlt: "Industrial network operations",
    },
    results: [
      { label: "Segmentation Coverage:", body: "Critical assets segmented across 12 plants in 6 months." },
      { label: "Cross-Team Velocity:", body: "35% faster joint IR exercises post-program." },
      { label: "Audit Readiness:", body: "Aligned to IEC 62443 and NIST 800-82 evidence requirements." },
      { label: "Workforce Lift:", body: "180 plant engineers and 120 SOC analysts completed the program." },
    ],
    meet: {
      heading: "How Does Edstellar's Approach Meet the Requirements?",
      bullets: [
        { label: "Blended Cohorts:", body: "Plant and IT engineers learn together, breaking silos." },
        { label: "ICS-First Curriculum:", body: "Built around real Purdue and IEC 62443 architectures." },
        { label: "Uptime Discipline:", body: "IR designed for environments where downtime is unacceptable." },
        { label: "Standards Mapping:", body: "NIST 800-82, IEC 62443, and NERC-CIP overlap covered." },
      ],
      image: "/images/cyber/hero-cyber-ops.jpg",
      imageAlt: "Cyber operations team",
    },
  },
  {
    slug: "retail-pci-dss",
    cardTitle: "PCI-DSS at Retail Scale",
    cardImage: "/images/cyber/hero-industry-retail.jpg",
    cardDescription:
      "A global retail chain, ahead of a major PCI-DSS recertification, aligned 600+ store-tech and back-office IT staff on payment security, secure coding, and structured threat modeling.",
    hero: {
      title: "How a Global Retail Chain Aligned 600+ Staff Ahead of PCI-DSS Recertification",
      image: "/images/cyber/hero-industry-retail.jpg",
      alt: "Retail technology and POS environment",
    },
    intro: {
      heading: "Edstellar Helps a Retail Leader Pass PCI-DSS Recertification at Scale",
      body: "Retail and e-commerce organizations carry payment-data risk across thousands of touchpoints, from store POS to back-office IT. A global retail chain ahead of a PCI-DSS recertification engaged Edstellar to align 600+ store-tech and back-office IT staff on payment security, secure coding, and structured threat modeling within a four-month window.",
    },
    challenges: [
      { icon: "shopping-cart", title: "Distributed Footprint", body: "Stores across 18 countries with varied POS hardware and software." },
      { icon: "credit-card", title: "Payment-Data Sprawl", body: "Card data flowed through legacy stores, e-commerce, and partner integrations." },
      { icon: "code", title: "Insecure Code Patterns", body: "Older codebases retained patterns that newer DSS controls flagged." },
      { icon: "file-check", title: "Recert Deadline", body: "Four-month runway to evidence-ready posture across 600+ staff." },
    ],
    solution: {
      heading: "Edstellar Solution",
      paragraphs: [
        "Edstellar built a four-month rolling program targeting store-tech, back-office IT, and developer cohorts in parallel. Each track ended with a hands-on threat-modeling exercise on a real cardholder data flow.",
      ],
      bulletsLead: "Program tracks:",
      bullets: [
        { label: "Payment Security Fundamentals:", body: "PAN handling, tokenization, and PCI scope reduction." },
        { label: "Secure Coding:", body: "Language-specific OWASP Top 10 with PCI-DSS overlay." },
        { label: "Structured Threat Modeling:", body: "STRIDE applied to payment flows in cohort capstones." },
      ],
      image: "/images/cyber/course-appsec.jpg",
      imageAlt: "Application security training session",
    },
    results: [
      { label: "Recert Outcome:", body: "PCI-DSS recertification achieved on first attempt." },
      { label: "Coverage:", body: "620 staff trained across store-tech, IT, and developer tracks." },
      { label: "Scope Reduction:", body: "30% reduction in PCI-DSS scope after tokenization push." },
      { label: "Vulnerability Density:", body: "45% reduction in PCI-DSS-relevant code findings." },
    ],
    meet: {
      heading: "How Does Edstellar's Approach Meet the Requirements?",
      bullets: [
        { label: "Parallel Tracks:", body: "Each role learned what only that role needed." },
        { label: "Real Data Flows:", body: "Threat modeling used the company's actual cardholder data architecture." },
        { label: "Tokenization Push:", body: "Curriculum drove visible reduction in PCI scope." },
        { label: "Audit-Friendly:", body: "Skills-delta and capstone artifacts mapped to DSS controls." },
      ],
      image: "/images/cyber/course-ethical-hacking.jpg",
      imageAlt: "Ethical hacking lab",
    },
  },
  {
    slug: "automotive-appsec",
    cardTitle: "AppSec for Connected Vehicles",
    cardImage: "/images/cyber/hero-industry-automotive.jpg",
    cardDescription:
      "A top automotive OEM, with software content in vehicles past 100M lines of code, brought AppSec rigor to embedded firmware, telematics, and cloud back-ends through a 12-week parallel cohort.",
    hero: {
      title: "How a Top Automotive OEM Brought AppSec to 100M+ Lines of Vehicle Code",
      image: "/images/cyber/hero-industry-automotive.jpg",
      alt: "Connected vehicle software and embedded systems",
    },
    intro: {
      heading: "Edstellar Helps an OEM Secure Embedded, Telematics, and Cloud Code Paths",
      body: "Modern vehicles ship with software content past 100M lines of code spanning embedded firmware, telematics units, and cloud back-ends. A top automotive OEM partnered with Edstellar to bring AppSec rigor across all three layers through a 12-week parallel cohort program.",
    },
    challenges: [
      { icon: "car", title: "Three-Layer Stack", body: "Firmware, telematics, and cloud each had distinct threat profiles." },
      { icon: "code", title: "Code Volume", body: "100M+ lines under active development across multiple language stacks." },
      { icon: "shield-alert", title: "Safety + Security", body: "AppSec had to coexist with ISO 26262 functional safety guarantees." },
      { icon: "globe", title: "Supplier Network", body: "Tier-1 suppliers contributed code under varied security maturity." },
    ],
    solution: {
      heading: "Edstellar Solution",
      paragraphs: [
        "Edstellar delivered a 12-week AppSec program with three parallel tracks: embedded firmware AppSec, telematics security, and cloud back-end AppSec. Suppliers joined the same cohorts to align practice across the value chain.",
      ],
      bulletsLead: "Track focus areas:",
      bullets: [
        { label: "Firmware:", body: "Memory safety, bootchain integrity, and over-the-air update security." },
        { label: "Telematics:", body: "V2X protocols, in-vehicle networks, and intrusion detection." },
        { label: "Cloud Back-End:", body: "API security, identity federation, and IoT messaging hardening." },
      ],
      image: "/images/cyber/course-appsec.jpg",
      imageAlt: "Application security training",
    },
    results: [
      { label: "Vulnerability Density:", body: "55% reduction in critical findings across firmware code." },
      { label: "Supplier Alignment:", body: "18 Tier-1 suppliers attended joint cohorts and harmonized practice." },
      { label: "Time-to-Patch:", body: "30% faster OTA security patch turnaround." },
      { label: "Workforce Lift:", body: "380 embedded, telematics, and cloud engineers trained across the three tracks." },
    ],
    meet: {
      heading: "How Does Edstellar's Approach Meet the Requirements?",
      bullets: [
        { label: "Three-Layer Curriculum:", body: "Each layer's threats taught by specialists in that layer." },
        { label: "Safety + Security:", body: "ISO 26262 and ISO 21434 dual-mapping in every module." },
        { label: "Supplier Inclusion:", body: "Tier-1 suppliers trained alongside OEM engineers." },
        { label: "OTA-Aware Design:", body: "Patch and update security woven through every track." },
      ],
      image: "/images/cyber/path-devsecops.jpg",
      imageAlt: "DevSecOps learning path",
    },
  },
  {
    slug: "government-zero-trust",
    cardTitle: "Zero-Trust for Mission-Critical Ops",
    cardImage: "/images/cyber/industry-government.jpg",
    cardDescription:
      "A federal government agency, following a critical-infrastructure incident, stood up multi-cohort training covering threat hunting, digital forensics, and zero-trust architecture for 200+ analysts.",
    hero: {
      title: "How a Federal Agency Stood Up Threat Hunting and Zero-Trust After a Critical Incident",
      image: "/images/cyber/industry-government.jpg",
      alt: "Government and public sector security operations",
    },
    intro: {
      heading: "Edstellar Helps a Federal Agency Operationalize Zero-Trust at Mission Speed",
      body: "Following a critical-infrastructure incident, a federal government agency engaged Edstellar to stand up multi-cohort training covering threat hunting, digital forensics, and zero-trust architecture for 200+ analysts inside 90 days.",
    },
    challenges: [
      { icon: "siren", title: "Post-Incident Pressure", body: "Mission-critical ops under leadership and oversight scrutiny." },
      { icon: "shield", title: "Zero-Trust Mandate", body: "Executive order to adopt zero-trust without disrupting mission systems." },
      { icon: "scan-eye", title: "Threat Hunting Maturity", body: "Reactive SOC needed proactive hunting capability fast." },
      { icon: "file-text", title: "Forensic Readiness", body: "Evidence-grade workflows for criminal and intelligence handoffs." },
    ],
    solution: {
      heading: "Edstellar Solution",
      paragraphs: [
        "Edstellar ran three parallel cohorts on a 12-week schedule: threat hunting, digital forensics, and zero-trust architecture. Each cohort culminated in a live exercise on simulated agency infrastructure.",
      ],
      bulletsLead: "Cohort designs:",
      bullets: [
        { label: "Threat Hunting:", body: "Hypothesis-driven hunting on enterprise telemetry, mapped to MITRE ATT&CK." },
        { label: "Digital Forensics:", body: "Memory, disk, and network forensics with evidence-grade chain of custody." },
        { label: "Zero-Trust Architecture:", body: "NIST 800-207 patterns adapted for legacy mission systems." },
      ],
      image: "/images/cyber/hero-soc-analyst.jpg",
      imageAlt: "Security operations analyst",
    },
    results: [
      { label: "Time-to-Detect:", body: "60% reduction in time to identify novel threats." },
      { label: "Hunt Output:", body: "14 active hunts generating actionable findings within 90 days." },
      { label: "ZTA Phase 1:", body: "First mission-system enclave fully zero-trust within 6 months." },
      { label: "Workforce:", body: "200+ analysts trained across hunt, forensics, and ZTA tracks." },
    ],
    meet: {
      heading: "How Does Edstellar's Approach Meet the Requirements?",
      bullets: [
        { label: "Mission-Aligned:", body: "Curriculum built for agency-grade systems and threat profiles." },
        { label: "Three Synced Cohorts:", body: "Hunt, forensics, and ZTA learn in parallel for cross-team strength." },
        { label: "Live Exercises:", body: "Capstones on simulated infrastructure mirror real systems." },
        { label: "Standards Mapping:", body: "NIST 800-53, 800-207, and CISA zero-trust maturity model covered." },
      ],
      image: "/images/cyber/path-ciso.jpg",
      imageAlt: "CISO learning path",
    },
  },
  {
    slug: "saas-secure-by-design",
    cardTitle: "Secure-by-Design at Hyper-Scale",
    cardImage: "/images/cyber/industry-saas.jpg",
    cardDescription:
      "A high-growth SaaS company, scaling from 200 to 1,200 engineers in 18 months, built uniform secure-by-design discipline across product squads: OWASP, threat modeling, and secrets hygiene.",
    hero: {
      title: "How a High-Growth SaaS Scaled from 200 to 1,200 Engineers with Uniform Secure-by-Design",
      image: "/images/cyber/industry-saas.jpg",
      alt: "SaaS engineering and cloud-native operations",
    },
    intro: {
      heading: "Edstellar Helps a SaaS Leader Build Security Into Every Squad",
      body: "A high-growth SaaS company scaling from 200 to 1,200 engineers in 18 months engaged Edstellar to build uniform secure-by-design discipline across every product squad, covering OWASP, threat modeling, and secrets hygiene as part of onboarding and continuous learning.",
    },
    challenges: [
      { icon: "rocket", title: "Hyper-Growth Hiring", body: "60+ engineers joining each month with varied security baselines." },
      { icon: "code", title: "Squad Autonomy", body: "Independent squads risked drift from any single security standard." },
      { icon: "key", title: "Secrets Sprawl", body: "Cloud-native architecture multiplied keys, tokens, and credentials." },
      { icon: "activity", title: "Continuous Learning", body: "Onboarding alone wouldn't keep pace with evolving threats." },
    ],
    solution: {
      heading: "Edstellar Solution",
      paragraphs: [
        "Edstellar delivered a layered program: secure-by-design onboarding for every new engineer, plus quarterly continuous-learning sprints on focused topics (OWASP refresh, secrets hygiene, threat-model cadence) for the entire engineering org.",
      ],
      bulletsLead: "Layered design:",
      bullets: [
        { label: "Onboarding Module:", body: "Two-week secure-by-design intensive for every new engineer." },
        { label: "Quarterly Sprints:", body: "Single-topic deep dives for the whole org each quarter." },
        { label: "Squad Champions:", body: "One trained champion per squad to embed practice locally." },
      ],
      image: "/images/cyber/course-cloud.jpg",
      imageAlt: "Cloud security course",
    },
    results: [
      { label: "Onboarding Throughput:", body: "1,000 engineers onboarded with security in 18 months." },
      { label: "Vulnerability Density:", body: "40% reduction in security findings per release." },
      { label: "Threat-Model Velocity:", body: "Every new feature now ships with a threat model." },
      { label: "Champion Coverage:", body: "80 squad champions across product, infra, and platform." },
    ],
    meet: {
      heading: "How Does Edstellar's Approach Meet the Requirements?",
      bullets: [
        { label: "Onboarding-First:", body: "Security baked in from day one, not bolted on." },
        { label: "Squad Champions:", body: "Distributed expertise that scales with hiring." },
        { label: "Quarterly Cadence:", body: "Curriculum stays current with the threat landscape." },
        { label: "Tool-Aware Curriculum:", body: "GitHub, GitLab, AWS, GCP, and Kubernetes patterns covered." },
      ],
      image: "/images/cyber/hero-cloud.jpg",
      imageAlt: "Cloud-native architecture",
    },
  },
  {
    slug: "energy-grid-security",
    cardTitle: "Grid Security and NERC-CIP Readiness",
    cardImage: "/images/cyber/hero-bigdata-it.jpg",
    cardDescription:
      "A national energy operator built NERC-CIP fluency across operations engineers and SOC analysts, training them on grid security, OT defense, and regulatory readiness over 16 weeks.",
    hero: {
      title: "How a National Energy Operator Built NERC-CIP Fluency Across 16 Weeks",
      image: "/images/cyber/hero-bigdata-it.jpg",
      alt: "Energy grid operations and data infrastructure",
    },
    intro: {
      heading: "Edstellar Helps an Energy Leader Operationalize NERC-CIP and OT Defense",
      body: "Critical-infrastructure operators carry both regulatory and reliability burdens. A national energy operator engaged Edstellar to train operations engineers and SOC analysts on grid security, OT defense, and regulatory readiness across a 16-week program.",
    },
    challenges: [
      { icon: "power", title: "Grid Reliability", body: "Any change had to coexist with strict reliability and uptime guarantees." },
      { icon: "landmark", title: "NERC-CIP Pressure", body: "Audit-driven controls with severe non-compliance penalties." },
      { icon: "factory", title: "Diverse OT Estate", body: "Generation, transmission, and distribution each had distinct OT stacks." },
      { icon: "users", title: "Cross-Team Skills", body: "Operations, IT, and SOC needed shared language for joint response." },
    ],
    solution: {
      heading: "Edstellar Solution",
      paragraphs: [
        "Edstellar designed a 16-week program with parallel tracks for operations engineers, IT or SOC analysts, and compliance leads, each anchored on NERC-CIP control objectives and reinforced with live OT-simulator exercises.",
      ],
      bulletsLead: "Program structure:",
      bullets: [
        { label: "Operations Track:", body: "ICS hardening, OT-specific detection, and change-management discipline." },
        { label: "SOC Track:", body: "OT log correlation, cross-domain investigation, and joint IR with operations." },
        { label: "Compliance Track:", body: "Evidence collection, audit readiness, and CIP control mapping." },
      ],
      image: "/images/cyber/hero-governance.jpg",
      imageAlt: "Governance, risk, and compliance program",
    },
    results: [
      { label: "NERC-CIP Findings:", body: "Zero new findings on next audit cycle." },
      { label: "OT Detection:", body: "50% increase in OT-relevant detection coverage." },
      { label: "Joint IR Drills:", body: "Operations and SOC ran 6 joint exercises in 6 months." },
      { label: "Workforce:", body: "280 operations engineers and 120 SOC analysts trained across the program." },
    ],
    meet: {
      heading: "How Does Edstellar's Approach Meet the Requirements?",
      bullets: [
        { label: "OT-Native:", body: "Curriculum built around real generation, transmission, and distribution stacks." },
        { label: "Joint Drills:", body: "Operations and SOC train and exercise together." },
        { label: "Audit Evidence:", body: "Skills-delta and capstone artifacts mapped to CIP controls." },
        { label: "Standards Coverage:", body: "NERC-CIP, IEC 62443, and NIST 800-82 cross-mapped." },
      ],
      image: "/images/cyber/course-grc.jpg",
      imageAlt: "GRC course materials",
    },
  },
  {
    slug: "telecom-5g-defense",
    cardTitle: "5G Defense and SOC Playbooks",
    cardImage: "/images/cyber/hero-cyber-ops.jpg",
    cardDescription:
      "A global telecom carrier, navigating new attack surfaces from a 5G rollout, ran a four-month curriculum on network security, MITRE ATT&CK, and SOC playbook design for engineering and operations teams.",
    hero: {
      title: "How a Global Telecom Carrier Built 5G Defense and SOC Playbooks in Four Months",
      image: "/images/cyber/hero-cyber-ops.jpg",
      alt: "Telecommunications security operations",
    },
    intro: {
      heading: "Edstellar Helps a Telecom Carrier Defend the 5G Attack Surface",
      body: "Telecommunications carriers absorbed new attack surface as 5G rollout introduced cloud-native cores, edge compute, and new signaling protocols. A global telecom carrier engaged Edstellar to deliver a four-month curriculum on network security, MITRE ATT&CK, and SOC playbook design for engineering and operations teams.",
    },
    challenges: [
      { icon: "radio", title: "5G Cloud-Native Core", body: "Service-based architecture introduced new microservice attack surface." },
      { icon: "wifi", title: "Edge Proliferation", body: "Distributed edge sites multiplied physical and logical attack vectors." },
      { icon: "network", title: "Protocol Diversity", body: "Legacy 4G, 5G NSA, and 5G SA stacks coexisted with overlapping risks." },
      { icon: "alert-triangle", title: "Carrier-Grade Stakes", body: "Network outages had cascading regulatory and customer impact." },
    ],
    solution: {
      heading: "Edstellar Solution",
      paragraphs: [
        "Edstellar delivered a four-month curriculum with three tracks: network security fundamentals, MITRE ATT&CK adoption, and SOC playbook design specific to carrier-grade ops.",
      ],
      bulletsLead: "Track focus:",
      bullets: [
        { label: "Network Security:", body: "5G core protocols, signaling defense, and network slicing isolation." },
        { label: "MITRE ATT&CK:", body: "Adoption inside SOC playbooks with detection-as-code patterns." },
        { label: "Playbook Design:", body: "Carrier-specific runbooks with measurable success criteria." },
      ],
      image: "/images/cyber/hero-cyber-it.jpg",
      imageAlt: "Cyber operations center",
    },
    results: [
      { label: "Detection Coverage:", body: "70% of 5G-relevant ATT&CK techniques covered post-program." },
      { label: "Playbook Maturity:", body: "24 new SOC playbooks operational, mapped to ATT&CK." },
      { label: "Time-to-Triage:", body: "35% faster mean time to respond on signaling incidents." },
      { label: "Workforce:", body: "320 engineering and operations staff trained across the four-month curriculum." },
    ],
    meet: {
      heading: "How Does Edstellar's Approach Meet the Requirements?",
      bullets: [
        { label: "5G-Native Curriculum:", body: "Service-based core, network slicing, and edge specifics." },
        { label: "ATT&CK Operational:", body: "Curriculum drives playbook adoption, not just awareness." },
        { label: "Cross-Team Cohorts:", body: "Engineering and operations train and design together." },
        { label: "Carrier-Grade Discipline:", body: "Exercises designed for high-stakes environments." },
      ],
      image: "/images/cyber/course-network.jpg",
      imageAlt: "Network security course",
    },
  },
  {
    slug: "insurance-cyber-risk",
    cardTitle: "Cyber-Risk Literacy for Underwriting",
    cardImage: "/images/cyber/course-grc.jpg",
    cardDescription:
      "A leading insurance group aligned underwriters, claims, and IT on an industry-tailored cyber-risk and GRC program, sharpening loss-ratio insight across the book.",
    hero: {
      title: "How a Leading Insurance Group Built Cyber-Risk Literacy for Underwriting and GRC",
      image: "/images/cyber/course-grc.jpg",
      alt: "GRC and cyber-risk training",
    },
    intro: {
      heading: "Edstellar Helps an Insurance Leader Sharpen Cyber-Risk Across the Book",
      body: "Cyber underwriting requires consistent risk literacy across roles that don't traditionally hold deep technical security knowledge. A leading insurance group aligned underwriters, claims, and IT teams on an industry-tailored cyber-risk and GRC program, sharpening loss-ratio insight across the book.",
    },
    challenges: [
      { icon: "landmark", title: "Underwriting Calibration", body: "Cyber risk pricing varied widely across underwriters and books." },
      { icon: "file-check", title: "GRC Maturity", body: "Three lines of defense each operated with different cyber-risk vocabularies." },
      { icon: "users", title: "Cross-Function Gap", body: "Underwriters, claims, IT, and GRC needed shared language." },
      { icon: "activity", title: "Loss-Ratio Pressure", body: "Cyber claims volume rose faster than underwriting maturity." },
    ],
    solution: {
      heading: "Edstellar Solution",
      paragraphs: [
        "Edstellar delivered a cyber-risk and GRC program tailored for insurance, with role-specific tracks for underwriters, claims handlers, IT or security, and GRC functions, anchored on shared risk taxonomies.",
      ],
      bulletsLead: "Tracks delivered:",
      bullets: [
        { label: "Underwriter Track:", body: "Risk taxonomies, control questionnaires, and pricing calibration." },
        { label: "Claims Track:", body: "Incident anatomy, vendor handling, and evidence triage." },
        { label: "IT and GRC Track:", body: "Three-lines-of-defense alignment and operational metrics." },
      ],
      image: "/images/cyber/hero-governance.jpg",
      imageAlt: "Governance and risk leadership",
    },
    results: [
      { label: "Underwriting Variance:", body: "45% reduction in cyber-risk pricing variance." },
      { label: "Claims Velocity:", body: "30% faster cyber claim closure." },
      { label: "Loss-Ratio Insight:", body: "Quarterly cyber loss-ratio reporting for the first time." },
      { label: "Workforce:", body: "220 underwriters, claims, and GRC staff trained across the program." },
    ],
    meet: {
      heading: "How Does Edstellar's Approach Meet the Requirements?",
      bullets: [
        { label: "Insurance-Native:", body: "Curriculum built around insurance products and workflows." },
        { label: "Shared Taxonomies:", body: "Common language across underwriting, claims, and GRC." },
        { label: "Loss-Ratio Linked:", body: "Outcomes connect to actuarial and pricing decisions." },
        { label: "Three-Lines Alignment:", body: "Risk, control, and assurance perspectives integrated." },
      ],
      image: "/images/cyber/path-grc-mgr.jpg",
      imageAlt: "GRC manager learning path",
    },
  },
  {
    slug: "fmcg-workforce-cyber-awareness",
    cardTitle: "Cyber Capability Across 18,000 Employees",
    cardImage: "/images/cyber/hero-team-training.jpg",
    cardDescription:
      "A global consumer goods company built cybersecurity capability across 18,000 employees in 32 countries through four role-specific training programs: security awareness, procurement security, secure development, and Security Champion designation.",
    hero: {
      title: "How a Global Consumer Goods Company Built Cybersecurity Capability Across 18,000 Employees in 32 Countries",
      image: "/images/cyber/hero-team-training.jpg",
      alt: "Large-scale corporate cybersecurity training program",
    },
    intro: {
      heading: "The Gap Was Never the Tools. It Was the People.",
      body: "When a spear-phishing campaign targeted procurement teams across three markets, the CISO and Head of Learning and Development ran a rapid diagnosis. The security stack was intact. Incident response was handled by the internal IT team. The gap was the human capability layer. Edstellar was engaged to build cybersecurity capability across the workforce through structured, role-specific training programs.",
    },
    challenges: [
      {
        icon: "users",
        title: "No Security Awareness Baseline",
        body: "18,000 employees across 32 countries had never completed formal security awareness training. Behaviours varied widely by region, role, and tenure.",
      },
      {
        icon: "shield-alert",
        title: "Procurement Blind Spot",
        body: "Procurement managers conducting supplier onboarding and due diligence had no training on digital risk, vendor phishing patterns, or supply-chain security obligations.",
      },
      {
        icon: "code",
        title: "Developer Skill Gap",
        body: "180 in-house developers relied on ad-hoc practices with no formal secure-development training. No shared language existed around OWASP, secrets hygiene, or threat modeling.",
      },
      {
        icon: "graduation-cap",
        title: "No Internal Champions",
        body: "No trained security advocates existed inside business units to sustain learning, reinforce behaviours, or flag risks between formal programs.",
      },
    ],
    solution: {
      heading: "Edstellar's Training Approach",
      paragraphs: [
        "Four role-specific training programs were designed and delivered across a six-month phased rollout, building measurable cybersecurity capability at every level of the organisation.",
      ],
      bullets: [
        { label: "Security Awareness Fundamentals:", body: "90-minute program for all 18,000 employees in 8 languages." },
        { label: "Procurement Security:", body: "12-hour focused program for 400 procurement managers." },
        { label: "Secure Development Practices:", body: "24-hour technical track for 180 developers." },
        { label: "Security Champion Program:", body: "40-hour advanced training program for 45 IT staff designated as in-unit security advocates." },
      ],
      image: "/images/cyber/more-virtual-class.jpg",
      imageAlt: "Virtual instructor-led training cohort",
    },
    results: [
      { label: "Employees Trained:", body: "18,000+ across 32 countries in 6 months." },
      { label: "Completion Rate:", body: "96% first-attempt completion on the awareness program." },
      { label: "Phishing Click Rate:", body: "Fell from 34% to 8% in post-program simulation, a 76% drop in click-through behaviour." },
      { label: "Security Champions Trained:", body: "45 Security Champions designated and embedded across all business units." },
    ],
    meet: {
      heading: "How Edstellar's Approach Met the Requirements",
      bullets: [
        { label: "Role-First Design:", body: "Each program built for a specific role, not adapted from a generic catalog." },
        { label: "Language-Local Delivery:", body: "Instructors delivered in 8 languages with region-specific scenarios, not translated content." },
        { label: "Phased at Scale:", body: "Six-month rollout across 32 countries without disrupting operations." },
        { label: "Skills Delta Reporting:", body: "Post-program board-ready report showing pre/post capability scores by role segment." },
      ],
      image: "/images/cyber/hero-team-training.jpg",
      imageAlt: "Team training session",
    },
    intervention: {
      heading: "How We Intervened",
      paragraphs: [
        "Our scope was precise: design and deliver training programs that build cybersecurity capability in the workforce.",
        "We did not audit security systems, deploy tools, or run incident response. Our engagement was focused entirely on the human capability layer: assessing gaps, designing role-specific programs, delivering them at global scale, and measuring the outcome.",
      ],
      steps: [
        {
          number: 1,
          label: "Role-Based Capability Assessment",
          body: "We ran structured skill assessments across four employee segments: general staff, procurement managers, developers, and IT staff. Each group was assessed against role-specific cybersecurity competency frameworks to establish a clear skills baseline and identify where the critical gaps sat.",
        },
        {
          number: 2,
          label: "Four-Track Program Architecture",
          body: "Based on the assessment findings, we designed four programs, each matched to a specific role. The full-staff awareness module ran 90 minutes in 8 languages. Procurement managers completed a 12-hour supplier risk program. Developers ran a 24-hour secure coding track. IT staff completed a 40-hour Security Champion advanced training program.",
        },
        {
          number: 3,
          label: "Language-Local Instructor Deployment",
          body: "We deployed vetted instructors who delivered each program in the local language, using original content written for that region, not translated materials. Scenario examples were calibrated to EMEA, APAC, and Americas threat contexts. Procurement managers in Germany received different examples than those in Singapore or Brazil.",
        },
        {
          number: 4,
          label: "Phased Six-Month Global Rollout",
          body: "We structured the rollout in three waves. Wave 1 delivered awareness fundamentals to all 18,000 employees across 32 countries over 10 weeks. Wave 2 ran the procurement and developer tracks in parallel. Wave 3 completed the Security Champion program, placing a trained advocate in every major business unit.",
        },
        {
          number: 5,
          label: "Skills Delta and Board-Ready Reporting",
          body: "At program close, we delivered a structured skills delta report covering pre- and post-assessment scores by role segment, completion rates, and pass-rate data. Behavioural changes from phishing simulations were included alongside a capability improvement summary formatted for CISO and board-level presentation.",
        },
      ],
      image: "/images/cyber/more-virtual-class.jpg",
      imageAlt: "Virtual instructor-led cybersecurity training cohort",
    },
    programSpecs: [
      { label: "Employees Trained", value: "18,000+" },
      { label: "Countries", value: "32" },
      { label: "Training Tracks", value: "4" },
      { label: "Languages", value: "8" },
      { label: "Delivery Mode", value: "Virtual ILT" },
      { label: "Program Duration", value: "6 months" },
    ],
    metrics: [
      { stat: "18,000+", label: "Employees Trained", sublabel: "Across 32 countries in 6 months" },
      { stat: "96%", label: "Completion Rate", sublabel: "First-ever global security awareness rollout" },
      { stat: "76%", label: "Drop in Phishing Click Rate", sublabel: "From 34% to 8% after training" },
      { stat: "45", label: "Security Champions Trained", sublabel: "Designated advocates embedded across all business units" },
    ],
    quote: {
      body: "We had the stack. We had the policies. What we lacked was a workforce capable of operationalising them under real-world conditions. Edstellar helped bridge that gap with training that was structured, measurable, and tightly aligned to the human side of cybersecurity. The skills gap report that followed was the first time our security training translated into metrics our board could clearly understand and act on.",
      author: "Head of Learning & Development",
      title: "Head of Learning & Development",
      company: "Global Consumer Goods Company",
    },
  },
];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
