export type AiCaseStudy = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const AI_CASE_STUDIES: AiCaseStudy[] = [
  {
    title: "GenAI Copilots at Global Scale",
    description:
      "A leading global bank reskilled 300 developers on secure LLM and RAG patterns through instructor-led group training, cutting feature delivery time and passing model-risk review in 90 days.",
    image: "/images/cyber/hero-industry-bfsi.jpg",
    alt: "Banking and financial services engineering team",
  },
  {
    title: "Closing the AI Governance Gap",
    description:
      "A multinational insurer trained risk and data teams on the EU AI Act and ISO/IEC 42001, documenting 40+ models and clearing an audit backlog in a single quarter.",
    image: "/images/cyber/course-grc.jpg",
    alt: "AI governance and risk training session",
  },
  {
    title: "Vision AI on the Production Line",
    description:
      "A Fortune 500 manufacturer upskilled engineers on computer-vision quality control through hands-on instructor-led labs, lifting defect-detection accuracy across 6 plants.",
    image: "/images/cyber/hero-industry-manufacturing.jpg",
    alt: "Manufacturing facility with vision inspection systems",
  },
  {
    title: "Responsible AI in Clinical Trials",
    description:
      "A global pharmaceutical group reskilled biostatistics and data teams on validated machine learning for trial analytics, aligned to GxP and FDA AI/ML guidance.",
    image: "/images/cyber/hero-industry-healthcare.jpg",
    alt: "Pharmaceutical research and clinical data teams",
  },
  {
    title: "AI for Every Function",
    description:
      "A global retailer ran broad ChatGPT and Copilot enablement as instructor-led group training for 800+ staff across marketing, merchandising and operations, with governed adoption.",
    image: "/images/cyber/hero-industry-retail.jpg",
    alt: "Retail workforce using AI assistants",
  },
  {
    title: "MLOps that Ships",
    description:
      "A high-growth software company trained machine learning and platform teams on MLOps for LLMs through closed-cohort instructor-led training, cutting model deployment time.",
    image: "/images/cyber/industry-saas.jpg",
    alt: "Software engineering and platform operations",
  },
  {
    title: "Forecasting with ML at a National Operator",
    description:
      "A national energy operator upskilled analysts on time-series machine learning for demand forecasting, building in-house capability through instructor-led group training.",
    image: "/images/cyber/hero-bigdata-it.jpg",
    alt: "Energy operations and data forecasting team",
  },
  {
    title: "Agentic Automation in Support",
    description:
      "A global telecom carrier trained support and engineering teams to build governed AI agents, automating tier-1 resolution while keeping a human in the loop.",
    image: "/images/cyber/hero-cyber-ops.jpg",
    alt: "Telecommunications support and engineering operations",
  },
];
