import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Category Page Template | Edstellar",
  description:
    "Section-by-section blueprint for building any Edstellar training category page — keywords, character limits, goals, and content rules for every section.",
};

// ─── Design tokens ───────────────────────────────────────────────────────────
const NAVY = "#1B1D52";
const INDIGO = "#6366F1";
const LIME = "#C5E826";
const GRAY = "#6B7280";
const LIGHT = "#F5F3FF";
const BORDER = "#E3E6F0";

// ─── Data ────────────────────────────────────────────────────────────────────

type ContentField = {
  element: string;
  charLimit: string;
  keywords: string[];
  notes: string;
  example: string;
};

type Rule = string;

type PageSection = {
  id: string;
  num: string;
  name: string;
  component: string;
  goal: string;
  audience: string;
  fields: ContentField[];
  rules: Rule[];
};

const SECTIONS: PageSection[] = [
  {
    id: "hero",
    num: "01",
    name: "HeroSlider",
    component: "HeroSlider.tsx",
    goal:
      "Establish category authority in the first 3 seconds. The visitor must immediately understand: Edstellar delivers instructor-led, customized group training for this category, for enterprises, at scale. Each slide targets a different industry vertical or use case to broaden the demand capture surface.",
    audience: "CISOs, VPs of Engineering, L&D Directors, Security Leaders",
    fields: [
      {
        element: "Slide category label",
        charLimit: "25–45",
        keywords: ["Corporate", "[Category]", "Training"],
        notes:
          "Small uppercase text above the heading inside the hero slide only. Format: 'Corporate [Category] Training'. Not an eyebrow heading — scoped to the hero slide UI. Do not use this pattern in any other section.",
        example: "Corporate Cybersecurity Training",
      },
      {
        element: "Heading line 1",
        charLimit: "20–45",
        keywords: [],
        notes:
          "Action or tension statement. Strong verb or present participle. The slide category label above handles the category context.",
        example: "Hardening security teams",
      },
      {
        element: "Heading line 2",
        charLimit: "20–40",
        keywords: ["enterprise", "every"],
        notes:
          "Completes the heading. Must include enterprise scope signal.",
        example: "across every enterprise.",
      },
      {
        element: "Description — slide 1 (primary)",
        charLimit: "290–360",
        keywords: [
          "instructor-led",
          "upskill and reskill",
          "employees",
          "group training",
          "200+",
          "measurable",
          "outcomes",
        ],
        notes:
          "Must contain 'instructor-led' and 'upskill and reskill employees'. Name the program count and cyber domains. End with measurable outcomes. No em-dashes.",
        example:
          "Edstellar is the corporate cybersecurity training partner of choice for CISOs and security leaders racing to upskill and reskill employees on offensive security, cloud security, GRC and AI-era threats. Our instructor-led cybersecurity group training spans 200+ programs across 8 cyber domains, delivered virtually, on-site or off-site by certified trainers, so every cohort closes the cyber skills gap and turns learning into measurable security outcomes.",
      },
      {
        element: "Description — slides 2–4 (industry verticals)",
        charLimit: "220–310",
        keywords: [
          "instructor-led",
          "reskill",
          "customized",
          "group training",
          "employees",
          "certified",
        ],
        notes:
          "Each industry slide must name the vertical's compliance/regulation terms. Use 'upskill and reskill' or 'reskilling'. At least one slide uses 'customized'.",
        example:
          "BFSI leaders rely on Edstellar's instructor-led cybersecurity training to upskill and reskill SOC, pen-test and GRC employees on PCI-DSS, RBI / SEBI guidelines, fraud analytics and Zero-Trust banking. Customized cybersecurity group training programs designed for corporate security teams, delivered virtually or on-site, with hands-on labs and certified instructors.",
      },
      {
        element: "Primary CTA button",
        charLimit: "18–28",
        keywords: ["Browse", "Training", "Programs"],
        notes: "Links to #catalog. Must say 'Training Programs' not 'Courses'.",
        example: "Browse Training Programs",
      },
      {
        element: "Secondary CTA button",
        charLimit: "10–14",
        keywords: ["Enquire"],
        notes: "Links to #contact. Always 'Enquire Now'.",
        example: "Enquire Now",
      },
      {
        element: "Strip label (nav tab)",
        charLimit: "5–15",
        keywords: [],
        notes: "Uppercase. Short vertical or feature name.",
        example: "FEATURED / BFSI / HEALTHCARE / AI SECURITY",
      },
      {
        element: "Strip sublabel (nav tab)",
        charLimit: "20–40",
        keywords: [],
        notes: "Explains the strip label in sentence case.",
        example: "Banking, Insurance, Capital Markets",
      },
    ],
    rules: [
      "Slide 1 MUST be the generic corporate slide — never an industry vertical.",
      "Every slide description must contain 'instructor-led'.",
      "Never say 'course' — always 'program' or 'training program'.",
      "Never use em-dashes. Use periods, commas, or colons instead.",
      "Primary CTA always links to #catalog. Secondary always links to #contact.",
      "Four slides maximum. Slide 1 = corporate, slides 2–4 = industry verticals or use cases.",
    ],
  },
  {
    id: "welcome",
    num: "02",
    name: "WelcomeStrip",
    component: "WelcomeStrip.tsx",
    goal:
      "SEO anchor and content authority. The H1 fixes the primary keyword for search. The overview copy builds trust with L&D buyers by naming the full scope of capability: skilling, upskilling, reskilling, group training, customized delivery. The five-part framework diagram shows Edstellar's methodology is systematic, not ad-hoc.",
    audience: "L&D Directors, HR Heads, Procurement, CISOs",
    fields: [
      {
        element: "H1 heading",
        charLimit: "52–72",
        keywords: ["Customized", "[Category]", "Training Programs", "Enterprise"],
        notes:
          "Must open with 'Customized'. Must end with 'for Enterprise teams' or 'for Enterprise'. This is the primary SEO heading. Do not rewrite this pattern.",
        example: "Customized Cybersecurity Training Programs for Enterprise teams",
      },
      {
        element: "Paragraph 1",
        charLimit: "240–300",
        keywords: [
          "skilling",
          "upskilling",
          "reskilling",
          "group training",
          "vetted",
          "certified trainers",
          "hands-on",
        ],
        notes:
          "Must include all three: skilling, upskilling, reskilling — in that order. Must mention 'group training cohort'. Use 'certified trainers' (not vendor-certified).",
        example:
          "Edstellar partners with enterprises to build deep cybersecurity capability across CISSP, CEH v13, CCSP, CISM, OSCP and emerging AI-security disciplines. Whether your security teams need entry-level skilling, role-specific upskilling, or senior-level reskilling, every group training cohort is matched to vetted, certified trainers with hands-on enterprise practice.",
      },
      {
        element: "Paragraph 2",
        charLimit: "235–295",
        keywords: [
          "customized instructor-led training",
          "employee training",
          "on-site",
          "virtual",
          "measurable",
          "outcomes",
        ],
        notes:
          "The phrase 'customized instructor-led training' MUST be wrapped in <strong> bold tags — it is Edstellar's primary USP. Must mention on-site, off-site, and virtual delivery.",
        example:
          "Every customized instructor-led training program is delivered onsite, off-site or virtually, in any language, and runs on our five-part transformation framework that turns employee training into measurable security outcomes.",
      },
      {
        element: "Bullet 1 — Strategy-led",
        charLimit: "65–100",
        keywords: ["capability roadmap", "security goals"],
        notes: "Label in bold. Body one sentence.",
        example:
          "Strategy-led design. Every engagement starts with a capability roadmap aligned to your security goals.",
      },
      {
        element: "Bullet 2 — Instructor-led delivery",
        charLimit: "110–150",
        keywords: [
          "Instructor-led delivery",
          "on-site",
          "off-site",
          "virtual",
          "ILT",
          "VILT",
          "certified trainer",
          "10 languages",
        ],
        notes:
          "'10 languages' must be a tooltip trigger showing all 10 language names on hover. ILT / VILT must be bolded. This bullet prominently positions instructor-led delivery as a USP.",
        example:
          "Instructor-led delivery. Every program is delivered live by a certified trainer. On-site, off-site or virtual (ILT / VILT), in 10 languages, matched to your team's location and schedule.",
      },
      {
        element: "Bullet 3 — Hands-on",
        charLimit: "65–100",
        keywords: ["cloud sandboxes", "MITRE ATT&CK", "CTF", "real-world"],
        notes: "Label in bold. Calls out the lab environment types.",
        example:
          "Hands-on by default. Cloud sandboxes, MITRE ATT&CK and CTF labs power real-world practice.",
      },
      {
        element: "Bullet 4 — Measurable ROI",
        charLimit: "60–90",
        keywords: ["Pre/post", "skill assessments", "training outcomes", "KPIs"],
        notes: "Label in bold. Always mentions pre/post assessments.",
        example:
          "Measurable ROI. Pre/post skill assessments, training outcomes and security KPIs.",
      },
      {
        element: "Stats section heading",
        charLimit: "40–65",
        keywords: ["instructor-led", "[category]", "training", "compounds"],
        notes:
          "Below the framework diagram. Reads as a value statement, not a heading.",
        example: "Cybersecurity training that compounds business value.",
      },
      {
        element: "Stats section sub",
        charLimit: "120–160",
        keywords: [
          "instructor-led",
          "200+",
          "programs",
          "measurable",
          "workforce",
          "risk-reduction",
        ],
        notes: "Supports the heading. Mentions program count and domains.",
        example:
          "Edstellar's instructor-led cybersecurity training spans 200+ programs across 8 cyber domains, designed for measurable workforce and risk-reduction impact.",
      },
      {
        element: "Stat card — number",
        charLimit: "3–8",
        keywords: [],
        notes:
          "Three stat cards. Use real industry data where possible: incident reduction %, cost of cybercrime, CISO survey finding.",
        example: "27% / $10.5T / 74%",
      },
      {
        element: "Stat card — caption",
        charLimit: "90–145",
        keywords: ["cybersecurity", "training", "organisations"],
        notes:
          "Each caption cites a data point relevant to why training matters. Source-attributable or survey-based.",
        example:
          "Average reduction in security incidents at organisations running continuous cybersecurity training programs.",
      },
    ],
    rules: [
      "H1 must open with 'Customized' — this is the primary keyword anchor.",
      "'customized instructor-led training' in paragraph 2 must be in <strong> bold.",
      "All four bullets must be present. Do not remove any.",
      "Bullet 2 (Instructor-led delivery) must include ILT/VILT terminology.",
      "'10 languages' must render as a CSS hover tooltip listing all 10 languages.",
      "Never say 'vendor-certified' — always 'certified'.",
      "Three stat cards are required. Use real or credible industry data points.",
    ],
  },
  {
    id: "tabs",
    num: "03",
    name: "TrainingProgramTabs",
    component: "TrainingProgramTabs.tsx + AiEraImperative.tsx + RiskMitigationFlow.tsx + GlobalCyberTrends.tsx",
    goal:
      "Build urgency and context. Show the visitor why the enterprise needs this training right now. Three tabs cover: the AI-era skills gap in this domain, how structured training reduces organizational risk, and global trends driving demand. This section converts skeptical visitors by making inaction feel dangerous.",
    audience: "CISOs, Board-level stakeholders, Security Programme Managers",
    fields: [
      {
        element: "Tab 1 label",
        charLimit: "18–35",
        keywords: ["skills gap", "AI-era"],
        notes: "Always the AI/emerging-tech angle for tab 1.",
        example: "The AI-era skills gap",
      },
      {
        element: "Tab 2 label",
        charLimit: "22–38",
        keywords: ["risk", "organisational"],
        notes: "Risk mitigation framing for tab 2.",
        example: "Mitigating organizational risk",
      },
      {
        element: "Tab 3 label",
        charLimit: "22–38",
        keywords: ["global", "[category]", "trends"],
        notes: "Global industry trends for tab 3.",
        example: "Global cybersecurity trends",
      },
      {
        element: "Tab content — headings",
        charLimit: "40–75 per heading",
        keywords: ["upskilling", "skilling gap", "reskilling", "workforce"],
        notes:
          "Each tab panel has its own heading, stat cards, and body copy. Use real industry data. Tab 1 must mention skilling/upskilling shortage. Tab 2 must mention employee training reducing risk. Tab 3 must mention workforce development.",
        example: "The AI security skills gap is widening faster than teams can hire.",
      },
    ],
    rules: [
      "Three tabs — do not add or remove tabs.",
      "Each tab must use real or credible industry data (not invented figures).",
      "Tab 2 must tie structured instructor-led training to measurable risk reduction.",
      "Tab 3 must mention global workforce development trends.",
    ],
  },
  {
    id: "catalog",
    num: "04",
    name: "ChipChangesTabber",
    component: "ChipChangesTabber.tsx",
    goal:
      "Let buyers browse the full program catalog by domain. This section answers 'What specific programs do you offer?' with domain chips and program cards. The depth of the catalog (200+ programs) builds confidence that Edstellar covers every sub-domain, not just the obvious ones.",
    audience: "L&D Managers, Security Team Leads, Procurement",
    fields: [
      {
        element: "Section intro description",
        charLimit: "140–180",
        keywords: [
          "instructor-led",
          "[category]",
          "programs",
          "certified",
          "measurable skill outcomes",
        ],
        notes:
          "Appears above the chip tabs. Mentions total program count and delivery format. Must include 'instructor-led' and 'certified'.",
        example:
          "A live catalog of 80+ cybersecurity programs across 10 domains, delivered live, on-site or virtual, every program backed by certified trainers and measurable skill outcomes.",
      },
      {
        element: "Domain chip label",
        charLimit: "8–22",
        keywords: [],
        notes:
          "Short domain name. Use recognised industry domain names, not marketing language.",
        example: "SOC & SIEM / Cloud Security / GRC / Penetration Testing",
      },
      {
        element: "Program card — title",
        charLimit: "28–55",
        keywords: ["Training"],
        notes:
          "Always ends with 'Training' (e.g. 'CyberArk Training', 'Cloud Security Training'). Never 'Course'.",
        example: "CyberArk Training",
      },
      {
        element: "Program card — duration",
        charLimit: "8–16",
        keywords: [],
        notes: "Format: 'X - Y hrs'. Always a range, not a fixed number.",
        example: "16 - 24 hrs",
      },
      {
        element: "Program card — delivery",
        charLimit: "LOCKED",
        keywords: ["Instructor-led", "On-site", "Virtual"],
        notes:
          "LOCKED value: 'Instructor-led (On-site/Virtual)'. Do not change this field on any program card ever.",
        example: "Instructor-led (On-site/Virtual)",
      },
      {
        element: "Program card — description",
        charLimit: "100–155",
        keywords: [],
        notes:
          "Describes what the trainee will master. Mentions key tools, frameworks, or skills. No marketing language — keep it technical and specific.",
        example:
          "Master Privileged Access Management with CyberArk, vault administration, PSM, CPM and policy-driven credential rotation.",
      },
    ],
    rules: [
      "Delivery field on every program card is LOCKED to 'Instructor-led (On-site/Virtual)'.",
      "Program titles must end in 'Training' — never 'Course', 'Bootcamp', or 'Certification'.",
      "Domain chips must use recognized industry names, not invented categories.",
      "Minimum 4 programs per domain chip tab.",
      "All hrefs must link to confirmed edstellar.com program URLs — never guessed or invented URLs.",
    ],
  },
  {
    id: "featured",
    num: "05",
    name: "ProductNewsCards",
    component: "ProductNewsCards.tsx",
    goal:
      "Showcase four hand-picked programs that represent the breadth of the category. This section removes the need to browse — it surfaces the highest-value programs for the most common buyer use cases. The catalog CTA strip below converts browsers who want to go deeper.",
    audience: "L&D Managers, Security Team Leads, CISOs scanning quickly",
    fields: [
      {
        element: "Section heading",
        charLimit: "58–92",
        keywords: [
          "instructor-led",
          "[category]",
          "training programs",
          "enterprise",
          "trust",
        ],
        notes:
          "Establishes that the programs are industry-aligned and enterprise-credible. Must include 'instructor-led' or 'industry-aligned'.",
        example:
          "Industry-aligned cybersecurity training programs your security team can trust",
      },
      {
        element: "Section description",
        charLimit: "128–172",
        keywords: [
          "instructor-led",
          "group training programs",
          "enterprise employees",
          "on-site or virtual",
          "measurable skill outcomes",
        ],
        notes:
          "Must name the program count (200+), say 'group training programs for enterprise employees', and mention delivery format.",
        example:
          "A curated selection from Edstellar's 200+ instructor-led cybersecurity group training programs for enterprise employees, delivered live, on-site or virtual, and backed by measurable skill outcomes.",
      },
      {
        element: "Card — category badge",
        charLimit: "8–20",
        keywords: [],
        notes:
          "Short domain label shown on the card image. Uppercase. Pick from recognized domain names.",
        example: "Identity & Access / Threat Defense / Data Privacy",
      },
      {
        element: "Card — program title",
        charLimit: "22–52",
        keywords: ["Training"],
        notes: "Same rules as catalog cards. Ends in 'Training'.",
        example: "CyberArk Training",
      },
      {
        element: "Card — duration",
        charLimit: "8–16",
        keywords: [],
        notes: "Format: 'X - Y hrs'.",
        example: "16 - 24 hrs",
      },
      {
        element: "Card — delivery (locked)",
        charLimit: "LOCKED",
        keywords: ["Instructor-led", "On-site", "Virtual"],
        notes: "LOCKED: 'Instructor-led (On-site/Virtual)'.",
        example: "Instructor-led (On-site/Virtual)",
      },
      {
        element: "Card — description",
        charLimit: "100–155",
        keywords: [],
        notes: "Technical and specific. Names tools, frameworks, or skills covered.",
        example:
          "Identify ransomware threats, prevent system breaches and build a resilient response playbook for your team.",
      },
      {
        element: "Catalog strip — heading",
        charLimit: "42–65",
        keywords: ["Edstellar", "[Category]", "Training Catalog"],
        notes:
          "LOCKED pattern: 'Explore the Complete Edstellar [Category] Training Catalog'. Do not add a punctuation-style subtitle.",
        example: "Explore the Complete Edstellar Cybersecurity Training Catalog",
      },
      {
        element: "Catalog strip — sub",
        charLimit: "78–115",
        keywords: ["200+", "[category]", "training programs", "catalog"],
        notes: "Offers both browsing and catalog delivery to inbox.",
        example:
          "Browse 200+ cybersecurity training programs or request the latest catalog delivered to your inbox.",
      },
      {
        element: "Catalog strip — CTA",
        charLimit: "20–30",
        keywords: ["View All", "Training Programs"],
        notes: "Links to #contact. One button only.",
        example: "View All Training Programs",
      },
    ],
    rules: [
      "Exactly four program cards — not three, not five.",
      "Delivery field is LOCKED on all four cards.",
      "One CTA button in the catalog strip only — the 'Get Full Catalog' button was removed.",
      "Card hrefs must be confirmed edstellar.com URLs.",
      "Section heading must position programs as 'industry-aligned' and enterprise-trustworthy.",
    ],
  },
  {
    id: "about",
    num: "06",
    name: "CustomersPartners (Why Edstellar)",
    component: "CustomersPartners.tsx",
    goal:
      "Answer the buyer's most important question: 'Why Edstellar over SANS, OffSec, EC-Council, Cybrary, or Infosec?' This section must land five convictions: (1) Edstellar builds programs, it doesn't sell catalog seats. (2) Edstellar vets trainers and offers a trial session before commitment. (3) Edstellar tracks skill change in CISO/board-level KPI language — MTTD, MTTR, vulnerability remediation rates. (4) Edstellar delivers at enterprise scale — parallel cohorts, multi-site, same week. (5) Every engagement has one named Learning Services Manager who owns it end to end. The global map, proof strip, and client logos provide geographic and social proof.",
    audience:
      "CISOs and Security Leaders comparing training vendors, L&D Heads finalizing a shortlist",
    fields: [
      {
        element: "Heading",
        charLimit: "58–90",
        keywords: ["Edstellar", "Enterprises", "[Category]", "Capability"],
        notes:
          "LOCKED pattern: 'Why Edstellar is Trusted by Enterprises to Build [Category] Capability'. No eyebrow above it — the heading carries the section identity on its own.",
        example:
          "Why Edstellar is Trusted by Enterprises to Build Cybersecurity Capability",
      },
      {
        element: "Goal statement",
        charLimit: "218–285",
        keywords: [
          "skilling",
          "upskilling",
          "reskilling",
          "employees",
          "[category] workforce development",
          "instructor-led",
          "industry practitioners",
        ],
        notes:
          "Must cover all three: skilling new hires, upskilling existing employees, reskilling lateral movers. Must include '[category] workforce development' as a phrase.",
        example:
          "Our goal at Edstellar is to help your security teams shift from reacting to threats to actively owning your organisation's cyber defence capability. Whether you are skilling new hires, upskilling existing employees, or reskilling lateral movers into security roles, every cybersecurity workforce development program we deliver is built by industry practitioners and mapped to the roles, tools, and compliance frameworks your business runs on.",
      },
      {
        element: "Blockquote (positioning line)",
        charLimit: "160–220",
        keywords: ["MTTD", "CISO", "board", "skills delta", "vulnerability remediation"],
        notes:
          "First clause is LOCKED: 'Most providers sell you a seat in a course. Edstellar builds the program, qualifies the trainer, and delivers a post-program report your CISO can take to the board.' Second clause must name at least two board-level security KPIs: skills delta, MTTD improvement, MTTR, or vulnerability remediation rates. Do not use vague L&D language like 'tracks the skill change'. The blockquote must speak the language of a CISO presenting to a board.",
        example:
          "Most providers sell you a seat in a course. Edstellar builds the program, qualifies the trainer, and delivers a post-program report your CISO can take to the board: skills delta, MTTD improvement, and vulnerability remediation rates.",
      },
      {
        element: "Pillar 1 — stat",
        charLimit: "4–6",
        keywords: [],
        notes: "Program count. Update to reflect the category program total.",
        example: "200+",
      },
      {
        element: "Pillar 1 — label",
        charLimit: "22–42",
        keywords: ["[Category]", "Training Programs"],
        notes: "Describes what the stat represents.",
        example: "Cybersecurity Training Programs",
      },
      {
        element: "Pillar 1 — sublabel",
        charLimit: "25–45",
        keywords: [],
        notes: "LOCKED: 'Program design, not catalog selection'.",
        example: "Program design, not catalog selection",
      },
      {
        element: "Pillar 1 — copy",
        charLimit: "110–165",
        keywords: [
          "customized",
          "[category]",
          "group training",
          "employee training",
          "design decision",
        ],
        notes:
          "Must use 'customized [category] group training'. Must say 'employee training program is a design decision'.",
        example:
          "We design customized cybersecurity group training around your threat model, your stack, and your roles. Not selected from a generic catalog. Every employee training program is a design decision, not a menu pick.",
      },
      {
        element: "Pillar 2 — stat / label / sublabel",
        charLimit: "Stat: 4–6 | Label: 8–12 | Sublabel: 28–48",
        keywords: ["Countries", "on-site", "virtual"],
        notes:
          "Stat: '100+'. Label: 'Countries'. Sublabel LOCKED: 'On-site or virtual, wherever you operate'.",
        example: "100+ | Countries | On-site or virtual, wherever you operate",
      },
      {
        element: "Pillar 2 — copy",
        charLimit: "110–155",
        keywords: ["vetted", "in-region", "in-language", "local compliance"],
        notes:
          "Emphasizes regional delivery, language matching, and local compliance context.",
        example:
          "A vetted instructor in your office, in your language, aligned to your local compliance framework. Wherever your teams operate, Edstellar delivers in-region.",
      },
      {
        element: "Pillar 3 — stat / label / sublabel",
        charLimit: "Stat: 5–7 | Label: 22–38 | Sublabel: 18–30",
        keywords: ["Vetted", "[Category]", "Trainers"],
        notes:
          "Stat: '1,500+'. Label: 'Vetted [Category] Trainers'. Sublabel LOCKED: 'Caliber you can trust'.",
        example: "1,500+ | Vetted Cybersecurity Trainers | Caliber you can trust",
      },
      {
        element: "Pillar 3 — copy",
        charLimit: "155–210",
        keywords: ["vetted", "multi-stage", "technical assessment", "trial session", "interview"],
        notes:
          "Must cover the three-stage vetting process: technical assessment, live delivery evaluation, and ongoing client feedback. Must end with the trial session offer — 'Before committing your cohort, you can interview and run a trial session with your shortlisted trainer.' This sentence is the single most powerful trust signal for enterprise buyers and must not be omitted.",
        example:
          "Every trainer passes a rigorous multi-stage vetting: technical assessment, live delivery evaluation, and ongoing client feedback. Before committing your cohort, you can interview and run a trial session with your shortlisted trainer.",
      },
      {
        element: "Enterprise proof strip",
        charLimit: "LOCKED structure — 4 items",
        keywords: ["800+", "parallel cohorts", "Learning Services Manager", "Post-program", "skills delta"],
        notes:
          "A 4-cell horizontal strip rendered below the three pillars. Cells use gap-px grid to create thin divider lines. Content is LOCKED across all category pages — do not change stat values or labels. Each cell: stat (large indigo), label (navy, 13px), desc (gray, 12px). The four LOCKED cells are: (1) '800+' / 'Employees in a single rollout' / scale copy. (2) 'Multi-site' / 'Parallel cohorts, same week' / simultaneous delivery copy. (3) '1 dedicated' / 'Learning Services Manager' / accountability copy. (4) 'Post-program' / 'Delivery report for every cohort' / skills delta report copy. These address the four most common Fortune 100 procurement objections: Can you scale? Can you run multi-site? Who owns my engagement? How do you prove outcomes?",
        example:
          "800+ | Employees in a single rollout | Multi-site | Parallel cohorts, same week | 1 dedicated | Learning Services Manager | Post-program | Delivery report for every cohort",
      },
      {
        element: "Map caption",
        charLimit: "42–65",
        keywords: ["in-region", "in-language", "continents"],
        notes: "Appears above the world map.",
        example: "Delivering in-region, in-language, across six continents",
      },
      {
        element: "CTA button",
        charLimit: "18–28",
        keywords: ["Partner", "Edstellar"],
        notes: "Center-aligned. Links to #contact. Dark navy background.",
        example: "Partner with Edstellar",
      },
    ],
    rules: [
      "No eyebrow heading above the section heading. The H2 carries the section identity alone.",
      "Heading pattern is LOCKED — only update the category name.",
      "Blockquote first clause is LOCKED. Second clause must name at least two board-level security KPIs (MTTD, MTTR, skills delta, vulnerability remediation rates). Never use vague L&D language like 'tracks the skill change' — the blockquote speaks to a CISO, not an L&D coordinator.",
      "Three pillars in this order: Programs (200+), Countries (100+), Trainers (1,500+).",
      "Pillar 1 sublabel LOCKED: 'Program design, not catalog selection'.",
      "Pillar 2 sublabel LOCKED: 'On-site or virtual, wherever you operate'.",
      "Pillar 3 sublabel LOCKED: 'Caliber you can trust'.",
      "Pillar 3 copy MUST end with the trial session offer: 'Before committing your cohort, you can interview and run a trial session with your shortlisted trainer.' This is the single most effective trust signal for enterprise buyers and must not be omitted.",
      "Enterprise proof strip is MANDATORY below the three pillars. Four LOCKED cells: 800+ scale, Multi-site parallel cohorts, 1 dedicated LSM, Post-program delivery report. Do not alter stat values or labels.",
      "ClientLogosStrip renders directly below the world map with no label.",
      "CTA button links to #contact and is center-aligned.",
      "Edstellar is NOT an accreditation body — never write 'Edstellar-certified' or 'certified by Edstellar'.",
    ],
  },
  {
    id: "pricing",
    num: "07",
    name: "CorporatePricing",
    component: "CorporatePricing.tsx",
    goal:
      "Convert L&D and procurement teams who are ready to budget. Show that Edstellar handles both small cohorts and enterprise-wide rollouts. The two delivery format cards (VILT + On-site) reinforce instructor-led delivery — both options are live, human-delivered. The four package tiers give buyers a mental anchor for scope and cost before they enquire.",
    audience: "L&D Directors, Procurement, Finance, HR Heads",
    fields: [
      {
        element: "Section heading",
        charLimit: "44–68",
        keywords: [
          "[Category]",
          "Group Training",
          "Packages",
          "Pricing",
        ],
        notes:
          "Must include 'Group Training' in the heading. Format: '[Category] Group Training Packages & Pricing'.",
        example: "Cybersecurity Group Training Packages & Pricing",
      },
      {
        element: "Section description",
        charLimit: "185–255",
        keywords: [
          "group training",
          "upskilling",
          "instructor-led",
          "training budget",
          "small group",
          "large team",
        ],
        notes:
          "Reassures both small and large buyers. Must mention upskilling needs and training budget.",
        example:
          "Our Cybersecurity group training is tailored to your specific upskilling needs. Explore transparent pricing options that fit your training budget, whether you're training a small group or a large team.",
      },
      {
        element: "Small group pill badge",
        charLimit: "38–62",
        keywords: ["Small Groups", "cohorts", "trainees"],
        notes: "LOCKED: 'Small Groups: focused cohorts from 5 trainees'.",
        example: "Small Groups: focused cohorts from 5 trainees",
      },
      {
        element: "Large group pill badge",
        charLimit: "42–68",
        keywords: ["Large Groups", "enterprise-wide", "800+", "trainees"],
        notes:
          "LOCKED: 'Large Groups: enterprise-wide rollouts of 800+ trainees'.",
        example: "Large Groups: enterprise-wide rollouts of 800+ trainees",
      },
      {
        element: "Delivery card 1 — label",
        charLimit: "LOCKED",
        keywords: ["Virtual", "VILT", "Instructor-led Training"],
        notes:
          "LOCKED: 'Virtual / VILT Instructor-led Training'. 'Instructor-led' must be in the label.",
        example: "Virtual / VILT Instructor-led Training",
      },
      {
        element: "Delivery card 1 — description",
        charLimit: "130–185",
        keywords: ["virtual", "group training", "consistency", "scale"],
        notes: "Explains why virtual ILT works for distributed teams.",
        example:
          "Our virtual group training sessions bring expert-led, high-quality training to your teams anywhere, ensuring consistency and seamless integration into their schedules.",
      },
      {
        element: "Delivery card 1 — benefit items (4 bullets)",
        charLimit: "48–82 each",
        keywords: [],
        notes:
          "Four benefits. Cover: multi-location reach, uniform outcomes, no travel, scale.",
        example:
          "Train employees across multiple locations simultaneously | Consistent quality and uniform learning outcomes across all teams",
      },
      {
        element: "Delivery card 2 — label",
        charLimit: "LOCKED",
        keywords: ["On-site", "In-person", "Instructor-led Training"],
        notes:
          "LOCKED: 'On-site / In-person Instructor-led Training'. 'Instructor-led' must be in the label.",
        example: "On-site / In-person Instructor-led Training",
      },
      {
        element: "Delivery card 2 — description",
        charLimit: "130–185",
        keywords: ["on-site", "hands-on", "trainer", "any group size"],
        notes: "Explains why on-site ILT drives higher engagement.",
        example:
          "Edstellar deploys a vetted trainer to your office for immersive, hands-on learning experiences. Available for any group size, anywhere.",
      },
      {
        element: "Package names (4 tiers)",
        charLimit: "LOCKED",
        keywords: [],
        notes:
          "LOCKED: Starter Package | Growth Package | Enterprise Package | Custom Package. Do not rename.",
        example:
          "Starter Package | Growth Package (Most Popular) | Enterprise Package | Custom Package",
      },
      {
        element: "Package taglines",
        charLimit: "22–42",
        keywords: [],
        notes: "Brief audience descriptor for each tier.",
        example:
          "Tailored for SMBs | Ideal for growing SMBs | Designed for large corporations | Designed for large corporations",
      },
      {
        element: "Package licenses",
        charLimit: "LOCKED",
        keywords: [],
        notes: "LOCKED values: 120 | 320 | 800 | Unlimited.",
        example: "120 | 320 | 800 | Unlimited",
      },
      {
        element: "Package hours",
        charLimit: "LOCKED",
        keywords: [],
        notes: "LOCKED values: 64 | 160 | 400 | Unlimited.",
        example: "64 hrs | 160 hrs | 400 hrs | Unlimited duration",
      },
      {
        element: "Shared benefits — label",
        charLimit: "28–55",
        keywords: ["instructor-led", "[category]", "programs", "trainers"],
        notes:
          "Six benefits. Must include at least one mention of 'instructor-led' and one of 'on-site, virtual or hybrid'.",
        example:
          "200+ Cybersecurity Training Programs | 1,500+ Vetted Cybersecurity Trainers | Hands-on labs included | On-site, virtual or hybrid delivery | Pre and post skill assessments | Trainer-fit trial sessions",
      },
      {
        element: "Shared benefits — description",
        charLimit: "82–132 each",
        keywords: [],
        notes: "Each expands on the label. Specific, not generic.",
        example:
          "SOC, cloud security, penetration testing, GRC, identity and access, incident response and more, across every enterprise security domain.",
      },
      {
        element: "CTA strip — heading",
        charLimit: "55–85",
        keywords: ["custom", "programs", "coaching"],
        notes: "Targets the buyer who doesn't fit any standard package.",
        example:
          "Need a custom rollout, specialized programs or coaching add-ons?",
      },
      {
        element: "CTA strip — sub",
        charLimit: "78–115",
        keywords: ["learning services", "coaching", "custom programs", "on-site"],
        notes: "Lists what the custom option includes.",
        example:
          "Talk to our learning services team, coaching, content development, custom programs and on-site delivery.",
      },
    ],
    rules: [
      "Both delivery card labels MUST contain 'Instructor-led Training' in the label text.",
      "Small group and large group pill badges are LOCKED.",
      "Package names, license counts, and hour counts are LOCKED from edstellar.com pricing page.",
      "Six shared benefits required — do not reduce to fewer.",
      "CTA strip button always 'Enquire Now' linking to #contact.",
      "This is a server component — no 'use client'. No tabs or interactive state.",
    ],
  },
  {
    id: "approach",
    num: "08",
    name: "OurApproach",
    component: "OurApproach.tsx",
    goal:
      "Eliminate process uncertainty. L&D buyers need to know what happens after they enquire. The five steps (Discover, Design, Deliver, Assess, Optimise) show Edstellar is a consultative partner, not a training vendor who sends a login link. This section directly counters the SANS/Cybrary model of self-paced catalog access.",
    audience: "L&D Directors, Security Programme Managers, Procurement evaluating process fit",
    fields: [
      {
        element: "Section heading",
        charLimit: "48–72",
        keywords: [
          "Edstellar",
          "Approach",
          "Organizational",
          "[Category]",
          "Training",
        ],
        notes:
          "LOCKED pattern: 'Edstellar Approach to Organizational [Category] Training'.",
        example: "Edstellar Approach to Organizational Cybersecurity Training",
      },
      {
        element: "Section subheading",
        charLimit: "120–175",
        keywords: [
          "consultative",
          "outcome-led",
          "[category]",
          "training",
          "capability",
          "measurable",
        ],
        notes:
          "Must describe the methodology as consultative and outcome-led. Mentions the number of steps (five).",
        example:
          "From discovery to mastery in five steps. A consultative, outcome-led methodology that turns cybersecurity training into measurable capability inside your organisation.",
      },
      {
        element: "Step 1 — Discover",
        charLimit: "115–160",
        keywords: [
          "CISO",
          "L&D",
          "capability",
          "skill-gap",
          "ROI",
          "objectives",
        ],
        notes:
          "Must mention meeting with CISO and L&D team. Output is a prioritised skill-gap report.",
        example:
          "We meet with your CISO and L&D team to map current cyber capabilities against role-based benchmarks. Output: a prioritised skill-gap report with ROI-aligned objectives.",
      },
      {
        element: "Step 2 — Design",
        charLimit: "115–160",
        keywords: [
          "custom curriculum",
          "NICE Framework",
          "NIST",
          "certified trainers",
          "trial sessions",
        ],
        notes:
          "Must mention building a custom curriculum and shortlisting certified trainers for trial sessions.",
        example:
          "We build a custom curriculum mapped to NICE Framework and NIST roles, then shortlist certified trainers from our 1,500+ network for trial sessions on your real stack.",
      },
      {
        element: "Step 3 — Deliver",
        charLimit: "115–162",
        keywords: [
          "Instructor-led",
          "virtual",
          "on-site",
          "hybrid",
          "hands-on labs",
          "cloud sandboxes",
          "MITRE ATT&CK",
        ],
        notes:
          "Must mention instructor-led delivery, all three formats (virtual/on-site/hybrid), and specific lab types.",
        example:
          "Instructor-led sessions, virtual, on-site or hybrid, in your language, with hands-on labs, cloud sandboxes, MITRE ATT&CK ranges and CTF environments shipped with every cohort.",
      },
      {
        element: "Step 4 — Assess",
        charLimit: "110–155",
        keywords: [
          "Pre and post",
          "assessments",
          "skill mastery",
          "KPIs",
          "skills delta",
        ],
        notes: "Must include pre and post assessments and a measurable outcome.",
        example:
          "Pre and post technical assessments, skill mastery tracking, lab benchmarks and engineering KPIs. Every cohort closes with a measurable skills delta.",
      },
      {
        element: "Step 5 — Optimise",
        charLimit: "108–155",
        keywords: [
          "retrospectives",
          "refresher",
          "Learning Services Manager",
          "ROI",
        ],
        notes:
          "Must mention quarterly retrospectives and a Learning Services Manager.",
        example:
          "Quarterly retrospectives, refresher modules, skill-refresh tracking and a dedicated Learning Services Manager driving long-term cyber ROI.",
      },
      {
        element: "CTA button",
        charLimit: "22–35",
        keywords: ["discovery call"],
        notes: "Links to #contact. Always 'Start with a discovery call'.",
        example: "Start with a discovery call",
      },
    ],
    rules: [
      "Heading LOCKED: 'Edstellar Approach to Organizational [Category] Training'.",
      "Five steps exactly — do not add or remove steps.",
      "Step 3 (Deliver) must mention 'Instructor-led' as the delivery method.",
      "Step 2 must mention 'certified trainers' and 'trial sessions'.",
      "CTA button links to #contact.",
    ],
  },
  {
    id: "voices",
    num: "09",
    name: "ClientVoices",
    component: "ClientVoices.tsx",
    goal:
      "Social proof from peers in similar roles. The visitor must see a CISO, L&D Director, or Security Manager saying that Edstellar's instructor-led group training delivered measurable team capability improvement. Testimonials are about the training experience and business outcome, not about passing an exam or earning a certification.",
    audience: "CISOs and L&D Heads on the verge of shortlisting",
    fields: [
      {
        element: "Section heading",
        charLimit: "38–62",
        keywords: ["[Category]", "Leaders", "Enterprises"],
        notes:
          "LOCKED pattern: 'Voice of [Category] Leaders Across Enterprises'.",
        example: "Voice of Security Leaders Across Enterprises",
      },
      {
        element: "Testimonial quote",
        charLimit: "180–310",
        keywords: [],
        notes:
          "Every testimonial must be grounded in at least two of these: instructor-led delivery, on-site deployment, closed cohort or group training, upskilling or reskilling of a named team, customized program, measurable business outcome (% improvement, MTTD, MTTR, incidents). Never reference exam-readiness, certification prep, passing rates, or individual learning. The subject of every quote is a team or cohort, not an individual learner.",
        example:
          "Edstellar ran a closed-cohort upskilling program for our 45-person SOC team and deployed an on-site instructor for two weeks. Sessions were mapped to our actual threat environment, not a generic syllabus. Post-training skill assessments showed a 38% improvement in detection capability across the team.",
      },
      {
        element: "Attribution — name",
        charLimit: "12–28",
        keywords: [],
        notes: "Real enterprise decision-maker name.",
        example: "Anita Sharma",
      },
      {
        element: "Attribution — title",
        charLimit: "28–55",
        keywords: [],
        notes:
          "Must be a senior enterprise role: CISO, VP of Security, Head of L&D, Security Director, etc. Not 'Software Engineer', 'Developer', or any individual contributor.",
        example: "CISO · Tier-1 Indian Bank",
      },
    ],
    rules: [
      "Section heading LOCKED: 'Voice of [Category] Leaders Across Enterprises'.",
      "No eyebrow heading above the section heading.",
      "No 'Become the next case study' button.",
      "No subheading paragraph below the heading.",
      "Testimonials must be from enterprise seniority roles only — CISO, VP, Director, Head of.",
      "No certification or exam language in any testimonial — no 'exam-ready', 'passed', 'certified', 'eight domains', or certification acronyms as the subject of the quote.",
      "The subject of every quote must be a team or cohort, not an individual learner.",
      "At least one testimonial must name instructor-led or on-site delivery explicitly.",
      "At least one testimonial must name group training, cohort, or multi-team rollout.",
      "At least one testimonial must name upskilling or reskilling explicitly.",
      "At least one testimonial must reference a measurable business outcome: %, MTTD, MTTR, incidents reduced, skill delta.",
      "Three testimonials required. Do not reduce to two.",
    ],
  },
  {
    id: "blog",
    num: "10",
    name: "BusinessNewsCards",
    component: "BusinessNewsCards.tsx",
    goal:
      "Thought leadership and SEO depth. Four blog cards signal that Edstellar understands the market, not just the training catalog. Card topics cover: threat intelligence, training program design, industry trends, and L&D strategy — the four content pillars that enterprise buyers search for when researching training investments.",
    audience: "L&D Managers, Security Analysts, CISOs doing background research",
    fields: [
      {
        element: "Section heading",
        charLimit: "40–65",
        keywords: ["enterprise", "[category]"],
        notes:
          "Format: 'Expert perspectives on enterprise [category].' Ends with a period.",
        example: "Expert perspectives on enterprise cybersecurity.",
      },
      {
        element: "Card 1 — category badge",
        charLimit: "LOCKED",
        keywords: [],
        notes: "LOCKED: 'THREAT INSIGHTS'",
        example: "THREAT INSIGHTS",
      },
      {
        element: "Card 1 — title",
        charLimit: "45–80",
        keywords: [],
        notes:
          "A question or tension statement about why threats beat trained teams.",
        example: "Why Ransomware Keeps Winning Against Trained Teams",
      },
      {
        element: "Card 1 — description",
        charLimit: "128–182",
        keywords: [
          "security awareness training",
          "employee skilling",
          "training interventions",
        ],
        notes:
          "Must include 'security awareness training' and 'employee skilling' or similar.",
        example:
          "An analysis of the human failure patterns behind enterprise ransomware breaches and why structured security awareness training and employee skilling interventions actually change outcomes.",
      },
      {
        element: "Card 2 — category badge",
        charLimit: "LOCKED",
        keywords: [],
        notes: "LOCKED: 'TRAINING GUIDES'",
        example: "TRAINING GUIDES",
      },
      {
        element: "Card 2 — title",
        charLimit: "45–80",
        keywords: ["Role-Based", "[Category]", "Training Program"],
        notes:
          "A how-to guide title for building a role-based training program.",
        example: "How to Build a Role-Based Cybersecurity Training Program",
      },
      {
        element: "Card 2 — description",
        charLimit: "128–182",
        keywords: [
          "L&D",
          "security leaders",
          "skill gaps",
          "group training",
          "instructor-led",
          "upskilling",
        ],
        notes:
          "Must mention L&D and security leaders, skill gaps, and cohort programs.",
        example:
          "A step-by-step guide for L&D and security leaders to map roles, identify skill gaps, design cohort programs and measure outcomes.",
      },
      {
        element: "Card 3 — category badge",
        charLimit: "LOCKED",
        keywords: [],
        notes: "LOCKED: 'INDUSTRY TRENDS'",
        example: "INDUSTRY TRENDS",
      },
      {
        element: "Card 3 — title",
        charLimit: "45–80",
        keywords: ["Enterprise", "[Category]", "Skills Gap", "Report"],
        notes:
          "LOCKED pattern: 'The [Year] Enterprise [Category] Skills Gap Report'. Use current year + 1.",
        example: "The 2026 Enterprise Cybersecurity Skills Gap Report",
      },
      {
        element: "Card 3 — description",
        charLimit: "128–182",
        keywords: [
          "enterprise",
          "L&D leaders",
          "skill gaps",
          "training budgets",
          "reskilling",
          "workforce development",
        ],
        notes:
          "Must reference a survey of enterprise leaders and what the data shows about skill gaps.",
        example:
          "Survey findings from 1,200+ enterprise security and L&D leaders on where skill gaps are widest, where training budgets are going, and what is working.",
      },
      {
        element: "Card 4 — category badge",
        charLimit: "LOCKED",
        keywords: [],
        notes: "LOCKED: 'L&D STRATEGY'",
        example: "L&D STRATEGY",
      },
      {
        element: "Card 4 — title",
        charLimit: "45–80",
        keywords: ["CISO", "Buy-In", "[Category]", "Training Budget"],
        notes:
          "A strategy title for getting CISO or executive buy-in for training budgets.",
        example:
          "How to Get CISO Buy-In for Your Cybersecurity Training Budget",
      },
      {
        element: "Card 4 — description",
        charLimit: "128–182",
        keywords: [
          "L&D leaders",
          "employee training",
          "reskilling",
          "group training ROI",
          "customized training",
          "measurable outcomes",
        ],
        notes:
          "Must include 'employee training', 'reskilling', and 'group training ROI'.",
        example:
          "A practical guide for L&D leaders on framing employee training investment, reskilling budgets and group training ROI in the language of risk reduction and measurable security outcomes.",
      },
    ],
    rules: [
      "Section heading ends with a period.",
      "No 'Browse all blogs' button or any CTA button in this section. The heading stands alone above the four cards.",
      "Four card category badges are LOCKED in this order: THREAT INSIGHTS, TRAINING GUIDES, INDUSTRY TRENDS, L&D STRATEGY.",
      "Card 3 title follows the locked pattern: 'The [Year] Enterprise [Category] Skills Gap Report'.",
      "Card 1 description must include 'security awareness training'.",
      "Card 4 description must include 'employee training', 'reskilling', and 'group training ROI'.",
      "All card hrefs default to '#' until confirmed blog URLs exist.",
      "No testimonials, CTAs, or section sub-headings in this section.",
    ],
  },
  {
    id: "faq",
    num: "11",
    name: "FAQs",
    component: "FAQ accordion component",
    goal:
      "Convert late-stage researchers and remove the last objections before enquiry. Buyers who scroll to FAQs are serious — they need specific answers on delivery, customization, audience fit, and pricing. FAQs also carry significant long-tail keyword value for search. Every answer must reinforce Edstellar's USPs: instructor-led, customized, group training, measurable outcomes.",
    audience: "L&D Directors and Procurement finalizing vendor evaluation, CISOs validating fit",
    fields: [
      {
        element: "Section heading",
        charLimit: "26 chars exactly",
        keywords: [],
        notes:
          "Always 'Frequently Asked Questions' — verbatim. No category prefix (e.g. NOT 'Cybersecurity Group Training. Frequently Asked Questions.'). No subheading paragraph below the heading. The heading stands alone.",
        example: "Frequently Asked Questions",
      },
      {
        element: "1. Target Audience (MANDATORY)",
        charLimit: "Question: 55–95 | Answer: 200–300",
        keywords: [
          "[category]",
          "training programs",
          "upskilling",
          "reskilling",
          "employees",
          "L&D",
          "role-based",
        ],
        notes:
          "MANDATORY — every category page must have this FAQ. Question must ask which roles or designations should attend. Answer must name at least 5–8 specific job designations relevant to the category (e.g. SOC analysts, cloud security engineers, GRC analysts). Must mention L&D teams using role-mapping to identify the right program per designation. Use 'upskill or reskill employees' in the answer.",
        example:
          "Q: Who should attend Edstellar's cybersecurity training programs? | A: Roles that benefit most include SOC analysts, cloud security engineers, penetration testers, GRC analysts, security architects, DevSecOps engineers, incident response teams, and CISO-level leaders. L&D teams looking to upskill or reskill employees into security functions can use our role-mapping service to identify which programs fit each designation before enrolling a cohort.",
      },
      {
        element: "2. Delivery Format",
        charLimit: "Question: 55–90 | Answer: 200–300",
        keywords: [
          "instructor-led",
          "ILT",
          "VILT",
          "on-site",
          "virtual",
          "group training",
          "certified",
          "live sessions",
          "closed cohort",
        ],
        notes:
          "Must state clearly that all programs are instructor-led, live, and closed-cohort. Must mention both ILT and VILT by name. Must rule out self-paced or recorded modules explicitly. 'Instructor-led' must appear at least twice in the answer.",
        example:
          "Q: How is the cybersecurity training delivered? | A: All programs are delivered instructor-led, either on-site (ILT) or virtually (VILT). There are no self-paced or recorded modules. Every session is live, facilitated by a certified practitioner, and structured as a closed cohort for your team only. You choose the format, location, language, and schedule.",
      },
      {
        element: "3. Customization",
        charLimit: "Question: 55–90 | Answer: 200–300",
        keywords: [
          "customized",
          "customized instructor-led training",
          "tailored",
          "role-based",
          "threat model",
          "curriculum",
          "skill gaps",
          "discovery call",
        ],
        notes:
          "Must state that Edstellar does not deliver off-the-shelf catalog programs. Must mention customization around threat model, technology stack, team capability level, and compliance obligations. Must reference the discovery call as the starting point. 'Customized' must appear at least twice.",
        example:
          "Q: Can the training program be customized for our organization? | A: Yes. Every program is designed around your threat model, your technology stack, your team's current capability level, and your compliance obligations. The customization process starts with a discovery call where we map your roles, skill gaps, and training objectives before a trainer is shortlisted or a schedule is confirmed.",
      },
      {
        element: "4. Group Training and Cohort Size",
        charLimit: "Question: 55–90 | Answer: 200–300",
        keywords: [
          "group training",
          "cohort",
          "batch",
          "employees",
          "closed-batch",
          "parallel cohorts",
          "instructor-led",
          "5 trainees",
          "800",
        ],
        notes:
          "Must give both ends of the size range (min: 5 trainees, max: 800+ for enterprise rollouts). Must mention parallel cohorts across multiple locations for large groups. Must reinforce that group size does not affect quality because every cohort is instructor-led, not self-paced.",
        example:
          "Q: How many employees can attend a group training cohort? | A: Edstellar runs focused cohorts from as few as 5 trainees for specialist teams up to enterprise-wide rollouts of 800 or more employees. For large organizations, we run parallel cohorts across multiple locations simultaneously. Group size does not affect program quality since every cohort is instructor-led and not self-paced.",
      },
      {
        element: "5. Duration and Scheduling",
        charLimit: "Question: 55–90 | Answer: 200–300",
        keywords: [
          "training program",
          "hours",
          "group training",
          "schedule",
          "modular",
          "flexible",
          "business disruption",
        ],
        notes:
          "Must give a duration range specific to the category (e.g. 8–32 hours for cybersecurity). Must mention modular scheduling as an option to reduce business disruption. Must mention that scheduling is coordinated around the team's availability.",
        example:
          "Q: How long does a cybersecurity training program typically last? | A: Duration ranges from 8 hours for focused single-skill programs to 32 or more hours for advanced red-team programs. Most group training cohorts are delivered in 2 to 5 days, with modular scheduling available to spread sessions across multiple weeks to minimize business disruption.",
      },
      {
        element: "6. Trainer Vetting and Quality",
        charLimit: "Question: 55–90 | Answer: 200–300",
        keywords: [
          "vetted",
          "certified",
          "multi-stage",
          "vetting process",
          "technical assessment",
          "industry experience",
          "trial session",
          "1,500+",
        ],
        notes:
          "Must name at least three stages of the vetting process: technical domain assessment, delivery evaluation, client feedback. Must mention trainer matching criteria. Must mention trial sessions before cohort commitment. Use '1,500+' network stat.",
        example:
          "Q: How does Edstellar vet its cybersecurity trainers? | A: Every trainer goes through a multi-stage vetting process: technical domain assessment, delivery evaluation, and ongoing client feedback. Trainers are matched to your engagement based on domain expertise, stack alignment, and geographic availability. You can request a trial session with your shortlisted trainer before committing your cohort.",
      },
      {
        element: "7. Skill Assessment and Outcomes",
        charLimit: "Question: 55–90 | Answer: 200–300",
        keywords: [
          "pre/post",
          "skill assessment",
          "upskilling",
          "measurable outcomes",
          "skill delta",
          "KPIs",
          "MTTD",
          "MTTR",
          "L&D",
        ],
        notes:
          "Must mention pre and post assessments producing a measurable skills delta. Must mention role-based competency benchmarks. Must mention at least one KPI metric (MTTD, MTTR, vulnerability remediation rate) that the outcome data maps to. L&D reporting must be referenced.",
        example:
          "Q: How do you measure training effectiveness and skill improvement? | A: Edstellar uses pre and post technical skill assessments for every cohort to establish a measurable skills delta. L&D teams receive outcome data on individual and team-level skill improvement that can be mapped to security KPIs such as MTTD, MTTR, and vulnerability remediation rates.",
      },
      {
        element: "8. Industries and Sectors Served",
        charLimit: "Question: 55–90 | Answer: 200–300",
        keywords: [
          "enterprise",
          "[category]",
          "BFSI",
          "healthcare",
          "manufacturing",
          "sector-specific",
          "compliance",
          "regulatory",
          "100+ countries",
        ],
        notes:
          "Must name at least 6 industries. Must state that programs are adapted to the regulatory and compliance context of each industry. Must name at least 2–3 compliance frameworks relevant to the category (e.g. PCI-DSS, HIPAA, NIST, ISO 27001). Must mention 100+ countries.",
        example:
          "Q: Which industries does Edstellar provide cybersecurity training for? | A: Edstellar delivers across banking and financial services, healthcare, manufacturing, government, technology, retail, energy, and telecoms across 100+ countries. Programs are adapted to each industry's regulatory context, covering PCI-DSS, HIPAA, NIST, ISO 27001, and SEBI guidelines depending on the sector.",
      },
      {
        element: "9. On-site Delivery Logistics",
        charLimit: "Question: 55–90 | Answer: 200–300",
        keywords: [
          "on-site",
          "in-person",
          "instructor-led",
          "deployed",
          "office premises",
          "100 countries",
          "certified trainer",
          "lab environments",
        ],
        notes:
          "Must confirm trainer is physically deployed to the client's location. Must mention 100+ countries availability. Must mention that the trainer brings all materials and lab environments. Positions on-site ILT as a premium, high-engagement format.",
        example:
          "Q: Can training be conducted at our office premises? | A: Yes. Edstellar's on-site instructor-led training deploys a certified trainer to your location across 100+ countries. The trainer brings all materials, lab environments, and scenario simulations. On-site delivery is available for any group size, with scheduling coordinated around your team's calendar.",
      },
      {
        element: "10. ILT vs VILT",
        charLimit: "Question: 55–90 | Answer: 200–300",
        keywords: [
          "ILT",
          "VILT",
          "instructor-led training",
          "virtual instructor-led",
          "on-site",
          "in-person",
          "live",
          "hands-on labs",
        ],
        notes:
          "Must define both ILT and VILT clearly in plain terms. Must reinforce that both are instructor-led and live — not self-paced. Must mention that hands-on labs are included in both. Must clarify the choice is based on team location and logistics, not quality difference.",
        example:
          "Q: What is the difference between ILT and VILT? | A: ILT (Instructor-Led Training) is on-site, in-person delivery where a certified trainer is physically at your premises. VILT (Virtual Instructor-Led Training) is the live online equivalent, delivered in real time via a virtual classroom. Both are instructor-led, both include hands-on labs. The choice is based on your team's location and travel logistics, not a quality difference.",
      },
      {
        element: "11. Pricing and Packages",
        charLimit: "Question: 55–90 | Answer: 200–300",
        keywords: [
          "group training",
          "packages",
          "training budget",
          "licenses",
          "cohort",
          "pricing",
          "upskilling",
          "custom quote",
          "Learning Services Manager",
        ],
        notes:
          "Must name the four package tiers (Starter, Growth, Enterprise, Custom) and their license ranges. Must state what is included in all packages (trainer fees, labs, assessments, Learning Services Manager). Must direct to enquiry for a custom quote. Never mention specific prices.",
        example:
          "Q: How is pricing structured for cybersecurity group training? | A: Edstellar offers four group training packages: Starter (120 licenses, 64 hrs), Growth (320 licenses, 160 hrs), Enterprise (800 licenses, 400 hrs), and Custom. All packages include trainer fees, lab environments, pre and post assessments, and a Learning Services Manager. Contact us for a quote based on your upskilling requirements.",
      },
      {
        element: "12. Prerequisites",
        charLimit: "Question: 55–90 | Answer: 200–300",
        keywords: [
          "entry-level",
          "skilling",
          "upskilling",
          "reskilling",
          "beginner",
          "intermediate",
          "advanced",
          "role-mapping",
          "training program",
        ],
        notes:
          "Must clarify that prerequisites vary by program level. Must cover three tiers: entry-level (no prerequisites, suits new hires and lateral movers into the domain), intermediate, advanced. Must mention Edstellar's skill-mapping exercise to identify the right program level per role.",
        example:
          "Q: Are there prerequisites for joining a cybersecurity training program? | A: Prerequisites vary by program level. Entry-level skilling programs for new hires or lateral movers have no formal prerequisites. Intermediate and advanced programs typically require prior domain experience. Edstellar's pre-enrollment skill-mapping exercise identifies the right program level for each role in your team.",
      },
    ],
    rules: [
      "8 to 12 FAQs per category page — never fewer than 8, never more than 12.",
      "Every FAQ answer is one paragraph only. No bullet lists, no subheadings inside the answer.",
      "Answer character limit: 200–320 chars. Answers longer than 320 chars will be truncated in the accordion — rewrite, do not truncate.",
      "Question character limit: 55–95 chars. Questions longer than 95 chars break the accordion layout on mobile.",
      "FAQ 1 (Target Audience) is MANDATORY on every category page. It must be the first FAQ.",
      "Never use 'course' in any FAQ answer. Always 'training program' or 'program'.",
      "Never use em-dashes in any FAQ answer.",
      "Never mention specific pricing figures. Direct to #contact for custom quotes.",
      "'instructor-led' must appear in at least 3 FAQ answers across the set.",
      "'group training' or 'cohort' must appear in at least 2 FAQ answers.",
      "'upskilling' or 'reskilling' must appear in at least 2 FAQ answers.",
      "At least one FAQ must define ILT and VILT — this removes the objection from buyers unfamiliar with training formats.",
      "Select 8–12 from the 12 category types above. Prioritize: Target Audience, Delivery Format, Customization, Group Training, Trainer Quality, Assessment — these six cover the highest-frequency buyer objections.",
      "FAQ accordion renders as a server component — no client-side JavaScript for the expand/collapse. Use the HTML details/summary element or a CSS-only accordion.",
      "Section heading is always 'Frequently Asked Questions' — no category prefix, no subheading paragraph below it.",
    ],
  },
  {
    id: "contact",
    num: "12",
    name: "ContactForm",
    component: "ContactForm.tsx",
    goal:
      "Capture the enquiry. The form is the final conversion point for every CTA on the page. The heading and sub must reinforce that the enquiry leads to a consultative conversation, not a sales pitch. The response copy should set the expectation: a discovery call, a custom proposal, a trial session.",
    audience: "Any visitor who has decided to take the next step",
    fields: [
      {
        element: "Section heading",
        charLimit: "38–65",
        keywords: [
          "customized",
          "instructor-led",
          "group training",
          "[Category]",
        ],
        notes:
          "Must reference customized instructor-led training or group training. Ends with a question or invitation.",
        example:
          "Get a Quote for Your Customized Instructor-led Training Program",
      },
      {
        element: "Section sub / intro copy",
        charLimit: "95–155",
        keywords: [
          "instructor-led",
          "on-site or virtual",
          "group training",
          "discovery",
        ],
        notes:
          "Sets the expectation for what happens after submission. Must mention instructor-led delivery and both on-site and virtual options.",
        example:
          "Tell us about your team and we'll put together a customized instructor-led training proposal, on-site or virtual, with a trainer shortlist and a discovery session.",
      },
    ],
    rules: [
      "Form heading must reference 'customized instructor-led training' or 'group training'.",
      "CTA button inside the form: 'Enquire Now' or 'Request a Quote' only.",
      "Never 'Buy Now', 'Sign Up', or 'Get Started'.",
      "Form is a server component — no tab state or interactive pricing logic.",
    ],
  },
];

const KEYWORDS_TABLE = [
  { kw: "instructor-led", min: 10, sections: "Hero, Welcome, Catalog, Featured, About, Pricing, Approach, FAQs (×3 min), Contact" },
  { kw: "customized instructor-led training", min: 4, sections: "Welcome (bold), About, Pricing, Contact" },
  { kw: "group training", min: 8, sections: "Hero, Welcome, About, Pricing, Blog, FAQs (×2 min)" },
  { kw: "upskill / upskilling", min: 5, sections: "Hero, Welcome, About, Pricing, FAQs" },
  { kw: "reskill / reskilling", min: 4, sections: "Hero, Welcome, About, Blog, FAQs" },
  { kw: "skilling", min: 2, sections: "Welcome, About" },
  { kw: "employee training", min: 4, sections: "Welcome, About, Featured, Blog" },
  { kw: "on-site", min: 5, sections: "Hero, Welcome, Pricing, Approach, FAQs" },
  { kw: "virtual / VILT / ILT", min: 4, sections: "Hero, Welcome, Pricing, Approach, FAQs" },
  { kw: "vetted", min: 2, sections: "Welcome, About" },
  { kw: "certified trainers", min: 3, sections: "Hero, Welcome, Approach" },
  { kw: "measurable outcomes", min: 3, sections: "Hero, Welcome, About, Blog, FAQs" },
  { kw: "cohort / closed cohort", min: 2, sections: "FAQs, Pricing" },
  { kw: "training program (not 'course')", min: 10, sections: "All sections — FAQs must use this, never 'course'" },
  { kw: "ILT (defined)", min: 1, sections: "FAQs — must define ILT vs VILT in at least one answer" },
  { kw: "VILT (defined)", min: 1, sections: "FAQs — must define ILT vs VILT in at least one answer" },
  { kw: "security awareness training", min: 1, sections: "Blog (card 1)" },
  { kw: "[category] workforce development", min: 1, sections: "About" },
  { kw: "role-mapping / role-based", min: 1, sections: "FAQs (Target Audience or Prerequisites)" },
];

const PROCESS_STEPS = [
  {
    num: "1",
    title: "Research the category",
    desc: "Identify the top 5 competitors in this training category. Note their messaging, what they emphasise, and what they don't say. Look for the white space Edstellar can own: human delivery, customization, trainer vetting, L&D-native language, measurable outcomes.",
  },
  {
    num: "2",
    title: "Confirm program count and domains",
    desc: "Check edstellar.com for the exact number of programs in this category and the domain/sub-category breakdown. This feeds the H1, hero description, catalog section, and About section pillars.",
  },
  {
    num: "3",
    title: "Identify industry verticals",
    desc: "Pick 3 industry verticals for hero slides 2–4. Each must have distinct compliance or regulation terms (e.g. BFSI: PCI-DSS, SEBI; Healthcare: HIPAA, HITRUST). These make the slides feel relevant, not generic.",
  },
  {
    num: "4",
    title: "Write section by section using this guide",
    desc: "Follow the character limits and mandatory keyword list for each section. Start at HeroSlider and work down to ContactForm. Do not write all sections at once — review each before moving to the next.",
  },
  {
    num: "5",
    title: "Run the competitor differentiation checklist",
    desc: "Before marking the page ready, verify every question in the checklist at the bottom of this guide is answered by the page copy. If any question is unanswered, find the right section and add the missing proof point.",
  },
  {
    num: "6",
    title: "Run the keyword frequency check",
    desc: "Count appearances of each keyword in the table below across the full page. If any keyword is below its minimum count, find the most natural place in the section noted and add it.",
  },
];

const COMPETITOR_CHECKLIST = [
  "Does the page say Edstellar builds the program (not sells a catalog seat)?",
  "Does the page mention trainer vetting (not just 'expert trainers')?",
  "Does the page say on-site or virtual (not only online / virtual)?",
  "Does the page reference local compliance or in-region delivery?",
  "Does the page speak L&D language: skilling, upskilling, reskilling, workforce development?",
  "Does the page mention measurable skill outcomes (not just pass rates or session completion)?",
  "Does the page address both small group and large enterprise rollouts?",
  "Is 'customized instructor-led training' bolded in the WelcomeStrip paragraph 2?",
  "Is 'instructor-led' present in at least 10 places across the full page (including FAQs)?",
  "Is the delivery field on every program card locked to 'Instructor-led (On-site/Virtual)'?",
  "Does the FAQ section have 8–12 questions (not fewer, not more)?",
  "Is the Target Audience FAQ the first FAQ and does it name at least 5 specific job designations?",
  "Does at least one FAQ define ILT and VILT and clarify both are live instructor-led formats?",
  "Are all FAQ answers one paragraph only, with no bullet lists or subheadings inside the answer?",
  "Does the testimonials section reference instructor-led group training and measurable outcomes — not exam prep or certification?",
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function Badge({ children, color = INDIGO }: { children: React.ReactNode; color?: string }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] uppercase tracking-[0.12em] text-white"
      style={{ backgroundColor: color, fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
    >
      {children}
    </span>
  );
}

function SectionTag({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="inline-block rounded px-2 py-0.5 text-[10px] uppercase tracking-[0.14em]"
      style={{
        backgroundColor: color + "18",
        color,
        fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif",
      }}
    >
      {label}
    </span>
  );
}

function KeywordPill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px]"
      style={{
        borderColor: INDIGO + "40",
        color: INDIGO,
        backgroundColor: INDIGO + "08",
        fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif",
      }}
    >
      <span className="h-1 w-1 rounded-full" style={{ backgroundColor: INDIGO }} />
      {children}
    </span>
  );
}

function RulePill({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-[13px]" style={{ color: "#374151" }}>
      <span
        className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-white"
        style={{ backgroundColor: "#EF4444", fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif", fontSize: "9px" }}
      >
        !
      </span>
      <span style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}>
        {children}
      </span>
    </li>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CategoryPageTemplate() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F7F8FC", color: NAVY }}>

      {/* ── Page header ── */}
      <header style={{ backgroundColor: NAVY }} className="py-14 px-6">
        <div className="mx-auto max-w-6xl">
          <p
            className="mb-3 text-[11px] uppercase tracking-[0.22em]"
            style={{ color: LIME, fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
          >
            Edstellar Content System
          </p>
          <h1
            className="text-[34px] leading-[1.05] text-white sm:text-[44px] lg:text-[52px]"
            style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
          >
            Category Page Template
          </h1>
          <p
            className="mt-4 max-w-2xl text-[17px] leading-[1.5] text-white/75"
            style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
          >
            Section-by-section blueprint for building any Edstellar training category page.
            Covers every section from HeroSlider to ContactForm with goals, character limits,
            mandatory keywords, content rules, and examples from the Cybersecurity category page.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Instructor-led #1 USP", "Customized Training #2 USP", "No em-dashes", "No 'Course'", "No accreditation claims"].map((r) => (
              <span
                key={r}
                className="rounded-full border border-white/20 px-3 py-1 text-[12px] text-white/80"
                style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* ── How to use this guide ── */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: BORDER }}>
        <div className="mx-auto max-w-6xl px-6 py-10">
          <h2
            className="text-[22px]"
            style={{ color: NAVY, fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
          >
            Creation Process — Follow in Order
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS_STEPS.map((s) => (
              <div
                key={s.num}
                className="rounded-xl border p-5"
                style={{ borderColor: BORDER, backgroundColor: "#FAFAFA" }}
              >
                <div className="flex items-start gap-3">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[13px] text-white"
                    style={{ backgroundColor: INDIGO, fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif" }}
                  >
                    {s.num}
                  </span>
                  <div>
                    <p
                      className="text-[14px] leading-tight"
                      style={{ color: NAVY, fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                    >
                      {s.title}
                    </p>
                    <p
                      className="mt-1.5 text-[13px] leading-[1.5]"
                      style={{ color: GRAY, fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Section-by-section ── */}
      <main className="mx-auto max-w-6xl px-6 py-14 space-y-10">

        {SECTIONS.map((sec) => (
          <article
            key={sec.id}
            id={sec.id}
            className="rounded-2xl border bg-white overflow-hidden"
            style={{ borderColor: BORDER }}
          >
            {/* Section header bar */}
            <div
              className="flex flex-col gap-3 px-7 py-6 sm:flex-row sm:items-start sm:justify-between"
              style={{ backgroundColor: NAVY }}
            >
              <div>
                <div className="flex items-center gap-3">
                  <span
                    className="text-[11px] uppercase tracking-[0.2em]"
                    style={{ color: LIME, fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                  >
                    Section {sec.num}
                  </span>
                  <span
                    className="rounded border border-white/20 px-2 py-0.5 text-[10px] text-white/60"
                    style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                  >
                    {sec.component}
                  </span>
                </div>
                <h2
                  className="mt-1 text-[24px] text-white sm:text-[28px]"
                  style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                >
                  {sec.name}
                </h2>
              </div>
              <div
                className="shrink-0 rounded-lg border border-white/15 px-3 py-2 text-[12px] text-white/70 sm:max-w-[260px]"
                style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                <span className="block text-[10px] uppercase tracking-[0.12em] text-white/40 mb-1">Audience</span>
                {sec.audience}
              </div>
            </div>

            {/* Goal */}
            <div
              className="border-b px-7 py-5"
              style={{ borderColor: BORDER, backgroundColor: LIGHT }}
            >
              <p
                className="text-[11px] uppercase tracking-[0.16em] mb-2"
                style={{ color: INDIGO, fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
              >
                Section Goal
              </p>
              <p
                className="text-[14px] leading-[1.6]"
                style={{ color: "#374151", fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                {sec.goal}
              </p>
            </div>

            {/* Content fields table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[13px]" style={{ borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ backgroundColor: "#F9FAFB", borderBottom: `1px solid ${BORDER}` }}>
                    {["Content Element", "Char Limit", "Required Keywords", "Rules & Notes", "Cybersecurity Example"].map((h) => (
                      <th
                        key={h}
                        className="px-5 py-3 font-normal"
                        style={{
                          color: GRAY,
                          fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif",
                          fontSize: "11px",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sec.fields.map((f, i) => (
                    <tr
                      key={f.element}
                      style={{
                        borderBottom: `1px solid ${BORDER}`,
                        backgroundColor: i % 2 === 0 ? "#fff" : "#FAFAFA",
                      }}
                    >
                      <td
                        className="px-5 py-4 align-top"
                        style={{ color: NAVY, fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif", minWidth: "160px" }}
                      >
                        {f.element}
                      </td>
                      <td className="px-5 py-4 align-top" style={{ minWidth: "90px" }}>
                        <span
                          className="inline-block rounded-full px-2.5 py-1 text-[12px]"
                          style={{
                            backgroundColor: f.charLimit === "LOCKED" ? "#FEF2F2" : "#F0FDF4",
                            color: f.charLimit === "LOCKED" ? "#B91C1C" : "#166534",
                            fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {f.charLimit === "LOCKED" ? "🔒 LOCKED" : `${f.charLimit} chars`}
                        </span>
                      </td>
                      <td className="px-5 py-4 align-top" style={{ minWidth: "200px" }}>
                        <div className="flex flex-wrap gap-1.5">
                          {f.keywords.length === 0 ? (
                            <span style={{ color: GRAY, fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}>—</span>
                          ) : (
                            f.keywords.map((kw) => <KeywordPill key={kw}>{kw}</KeywordPill>)
                          )}
                        </div>
                      </td>
                      <td
                        className="px-5 py-4 align-top text-[13px] leading-[1.55]"
                        style={{ color: "#374151", fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif", minWidth: "220px" }}
                      >
                        {f.notes}
                      </td>
                      <td
                        className="px-5 py-4 align-top text-[12px] leading-[1.55] italic"
                        style={{ color: GRAY, fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif", minWidth: "240px", maxWidth: "340px" }}
                      >
                        &ldquo;{f.example}&rdquo;
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mandatory rules */}
            <div className="border-t px-7 py-5" style={{ borderColor: BORDER }}>
              <p
                className="mb-3 text-[11px] uppercase tracking-[0.16em]"
                style={{ color: "#EF4444", fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
              >
                Mandatory Rules
              </p>
              <ul className="space-y-2">
                {sec.rules.map((r) => <RulePill key={r}>{r}</RulePill>)}
              </ul>
            </div>
          </article>
        ))}

        {/* ── Keyword frequency table ── */}
        <section
          id="keywords"
          className="rounded-2xl border bg-white overflow-hidden"
          style={{ borderColor: BORDER }}
        >
          <div className="px-7 py-6" style={{ backgroundColor: NAVY }}>
            <p className="text-[11px] uppercase tracking-[0.2em]" style={{ color: LIME, fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}>
              Full-Page Audit
            </p>
            <h2 className="mt-1 text-[24px] text-white" style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}>
              Keyword Frequency Targets
            </h2>
          </div>
          <p
            className="px-7 py-5 text-[14px] leading-[1.6] border-b"
            style={{ color: "#374151", borderColor: BORDER, backgroundColor: LIGHT, fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
          >
            After writing all sections, count each keyword across the full page. If any keyword appears fewer times than the minimum below, find the most natural place in the listed sections and add it before publishing.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ backgroundColor: "#F9FAFB", borderBottom: `1px solid ${BORDER}` }}>
                  {["Keyword", "Min. Appearances", "Sections to Check"].map((h) => (
                    <th key={h} className="px-6 py-3 font-normal" style={{ color: GRAY, fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {KEYWORDS_TABLE.map((row, i) => (
                  <tr key={row.kw} style={{ borderBottom: `1px solid ${BORDER}`, backgroundColor: i % 2 === 0 ? "#fff" : "#FAFAFA" }}>
                    <td className="px-6 py-3.5">
                      <KeywordPill>{row.kw}</KeywordPill>
                    </td>
                    <td className="px-6 py-3.5">
                      <span
                        className="inline-flex h-7 w-7 items-center justify-center rounded-full text-[13px] text-white"
                        style={{ backgroundColor: INDIGO, fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif" }}
                      >
                        {row.min}
                      </span>
                    </td>
                    <td className="px-6 py-3.5 text-[13px]" style={{ color: GRAY, fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}>
                      {row.sections}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Competitor differentiation checklist ── */}
        <section
          id="checklist"
          className="rounded-2xl border bg-white overflow-hidden"
          style={{ borderColor: BORDER }}
        >
          <div className="px-7 py-6" style={{ backgroundColor: NAVY }}>
            <p className="text-[11px] uppercase tracking-[0.2em]" style={{ color: LIME, fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}>
              Pre-Publish
            </p>
            <h2 className="mt-1 text-[24px] text-white" style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}>
              Competitor Differentiation Checklist
            </h2>
          </div>
          <p
            className="px-7 py-5 text-[14px] leading-[1.6] border-b"
            style={{ color: "#374151", borderColor: BORDER, backgroundColor: LIGHT, fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
          >
            Every item below must be answerable with &ldquo;yes&rdquo; before the page goes live.
            These are the questions SANS, OffSec, EC-Council, Cybrary and Infosec Institute do not answer clearly on their category pages — this is Edstellar&apos;s white space.
          </p>
          <ul className="divide-y" style={{ borderColor: BORDER }}>
            {COMPETITOR_CHECKLIST.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-4 px-7 py-4"
                style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#FAFAFA" }}
              >
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 text-[10px]"
                  style={{ borderColor: INDIGO, color: INDIGO }}
                >
                  ✓
                </span>
                <span
                  className="text-[14px] leading-[1.55]"
                  style={{ color: "#374151", fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Global writing rules ── */}
        <section
          id="rules"
          className="rounded-2xl border overflow-hidden"
          style={{ borderColor: BORDER, backgroundColor: NAVY }}
        >
          <div className="px-7 py-6">
            <p className="text-[11px] uppercase tracking-[0.2em]" style={{ color: LIME, fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}>
              Always Apply
            </p>
            <h2 className="mt-1 text-[24px] text-white" style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}>
              Global Writing Rules
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 px-7 pb-8 sm:grid-cols-2">
            {[
              { label: "No em-dashes", body: "Replace every — with a period, comma, or colon. No exceptions. This rule is violated frequently — check every section after writing." },
              { label: "No 'Course'", body: "Always use 'program', 'training program', or 'training programs'. 'Course' is only allowed inside FAQ answers." },
              { label: "No accreditation claims", body: "Edstellar is not an accreditation body. Never write 'Edstellar-certified', 'certified by Edstellar', or anything that implies Edstellar grants industry certifications." },
              { label: "No guessed URLs", body: "CTAs link only to #contact, #catalog, or a confirmed edstellar.com URL. Never invent or guess a URL for a program, blog, or page." },
              { label: "No 'vendor-certified'", body: "Always 'certified trainers'. The word 'vendor-certified' has been removed from all components. Do not reintroduce it." },
              { label: "Instructor-led is #1 USP", body: "The phrase 'instructor-led' must appear at minimum 8 times per category page. It must appear in the hero, H1 section, catalog, featured programs, about, pricing, and approach sections." },
              { label: "Bold 'customized instructor-led training'", body: "In WelcomeStrip paragraph 2, the phrase 'customized instructor-led training' must be wrapped in <strong> tags. This is the primary USP visual anchor on the page." },
              { label: "No eyebrow headings", body: "Do not place a small uppercase label above any section heading. Section headings must stand alone and carry the section identity without an eyebrow. The only exception is the slide category label inside HeroSlider, which is scoped to the hero slide UI." },
              { label: "LOCKED fields stay locked", body: "Delivery format on program cards, blockquote in About section, and package names and license counts must not be changed between categories." },
              { label: "No two adjacent sections with the same background", body: "Every section must alternate between bg-white and bg-[#F5F3FF]. Two consecutive sections with the same background colour merge visually into one block and destroy page rhythm. Before finalising the page, audit every section in render order and fix any match." },
            ].map((rule) => (
              <div
                key={rule.label}
                className="rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-[14px] text-white" style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}>
                  {rule.label}
                </p>
                <p className="mt-2 text-[13px] leading-[1.55] text-white/65" style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}>
                  {rule.body}
                </p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* ── Sticky section nav ── */}
      <nav
        className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-2 xl:flex"
        aria-label="Jump to section"
      >
        {[...SECTIONS.map(s => ({ id: s.id, label: s.num })), { id: "keywords", label: "KW" }, { id: "checklist", label: "✓" }, { id: "rules", label: "R" }].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="flex h-8 w-8 items-center justify-center rounded-full border text-[11px] transition-all hover:border-[#6366F1] hover:text-[#6366F1]"
            style={{
              backgroundColor: "#fff",
              borderColor: BORDER,
              color: GRAY,
              fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif",
            }}
            title={item.id}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <footer
        className="border-t py-8 text-center text-[13px]"
        style={{ borderColor: BORDER, color: GRAY, fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
      >
        Edstellar Category Page Template · Built from the Cybersecurity category page process · Update this guide whenever a global rule or locked field changes.
      </footer>
    </div>
  );
}
