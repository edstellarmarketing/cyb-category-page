"use client";

import { useState } from "react";
import { ArrowRightIcon } from "@/components/icons";
import { NewsCard } from "@/components/NewsCard";
import type { NewsCard as NewsCardType } from "@/types/content";

type ResourceTabId = "cases" | "brochures" | "videos" | "templates" | "news";

const TABS: { id: ResourceTabId; label: string }[] = [
  { id: "cases", label: "CASE STUDIES" },
  { id: "brochures", label: "BROCHURES" },
  { id: "videos", label: "VIDEOS" },
  { id: "templates", label: "TEMPLATES" },
  { id: "news", label: "NEWS" },
];

const RESOURCES: Record<ResourceTabId, NewsCardType[]> = {
  cases: [
    {
      category: "BFSI",
      title: "Securing Banks, Insurers and Capital Markets",
      description:
        "Custom curricula covering PCI-DSS, RBI/SEBI guidelines, fraud analytics and Zero-Trust banking, delivered to teams at 50+ Tier-1 financial institutions.",
      image: "/images/cyber/industry-bfsi.jpg",
      imageAlt: "Banking and finance security",
      href: "https://www.edstellar.com/case-studies",
    },
    {
      category: "HEALTHCARE",
      title: "HIPAA, HITRUST and Medical Device Cybersecurity",
      description:
        "Train clinical, IT and OT teams on patient-data protection, FDA pre-market guidance and ransomware response in hospital environments.",
      image: "/images/cyber/industry-healthcare.jpg",
      imageAlt: "Healthcare cybersecurity",
      href: "https://www.edstellar.com/case-studies",
    },
    {
      category: "GOVERNMENT & DEFENCE",
      title: "Sovereign Cyber Programs for Public-Sector Teams",
      description:
        "Closed-batch CISSP, CEH and offensive-security training designed for defence, intelligence and critical-infrastructure agencies.",
      image: "/images/cyber/industry-government.jpg",
      imageAlt: "Government cybersecurity",
      href: "https://www.edstellar.com/case-studies",
    },
    {
      category: "SAAS & TECH",
      title: "Cloud-native AppSec for Engineering Teams",
      description:
        "DevSecOps, Kubernetes hardening, API security and supply-chain security workshops tuned for product and platform engineering teams.",
      image: "/images/cyber/industry-saas.jpg",
      imageAlt: "SaaS cybersecurity",
      href: "https://www.edstellar.com/case-studies",
    },
  ],
  brochures: [
    {
      category: "CATALOG",
      title: "200+ Cybersecurity Programs, 2026 Catalog",
      description:
        "Browse the full Edstellar cybersecurity catalog with course outlines, durations and pre-requisites, ready to share with your L&D team.",
      image: "/images/cyber/cert-cissp.jpg",
      imageAlt: "Cybersecurity catalog",
      href: "https://www.edstellar.com/category/cybersecurity-training",
    },
    {
      category: "PRICING",
      title: "Enterprise Training Packages & Pricing",
      description:
        "Starter, Growth and Enterprise packs side-by-side, slot counts, validity, included services and bulk-pricing options.",
      image: "/images/cyber/more-curriculum.jpg",
      imageAlt: "Pricing brochure",
      href: "https://www.edstellar.com/corporate-training-pricing",
    },
    {
      category: "TRAINER NETWORK",
      title: "7,500+ Trainer Network, How We Vet & Match",
      description:
        "Inside Edstellar's trainer marketplace: vetting process, certification verification, language coverage and SLA on trainer matching.",
      image: "/images/cyber/customers-partners.jpg",
      imageAlt: "Trainer network",
      href: "https://www.edstellar.com/trainers",
    },
    {
      category: "METHODOLOGY",
      title: "5-Part Transformation Framework",
      description:
        "Strategy → Curriculum → Labs → Assessment → Mastery, the framework Edstellar runs on every engagement, with measurement playbooks.",
      image: "/images/cyber/more-resources.jpg",
      imageAlt: "Transformation framework",
      href: "https://www.edstellar.com",
    },
  ],
  videos: [
    {
      category: "WEBINAR · 45 MIN",
      title: "AI in Cybersecurity Training, CISO Panel",
      description:
        "Three Fortune-500 CISOs on how AI is reshaping cyber attacker behaviour and what training programs need to look like in the GenAI era.",
      image: "/images/cyber/hero-ai.jpg",
      imageAlt: "AI in cyber webinar",
      href: "https://www.edstellar.com",
    },
    {
      category: "CUSTOMER STORY · 12 MIN",
      title: "How a Tier-1 Bank Trained 600 Engineers in 90 Days",
      description:
        "Inside a global BFSI cyber-upskilling rollout, cohort sizing, virtual delivery in 4 timezones, and the metrics that measured success.",
      image: "/images/cyber/hero-team-training.jpg",
      imageAlt: "Bank training case study",
      href: "https://www.edstellar.com",
    },
    {
      category: "PRODUCT DEMO · 8 MIN",
      title: "Inside the Edstellar Learner Platform",
      description:
        "A guided tour of cohort dashboards, attendance analytics, certification tracking and LMS-integration options for your L&D team.",
      image: "/images/cyber/more-virtual-class.jpg",
      imageAlt: "Platform demo",
      href: "https://www.edstellar.com",
    },
    {
      category: "EXPERT SESSION · 30 MIN",
      title: "MITRE ATT&CK in Live SOC Programs",
      description:
        "Edstellar's lead SOC trainer walks through how ATT&CK technique mapping is woven into hands-on lab exercises.",
      image: "/images/cyber/hero-governance.jpg",
      imageAlt: "MITRE ATT&CK session",
      href: "https://www.edstellar.com",
    },
  ],
  templates: [
    {
      category: "TEMPLATE · XLSX",
      title: "Cyber Skills Gap Analysis",
      description:
        "Map your team's current competencies against role-based cyber benchmarks. Pre-loaded with NICE Framework roles and gap-scoring formulas.",
      image: "/images/cyber/more-skills-matrix.jpg",
      imageAlt: "Skills gap template",
      href: "https://www.edstellar.com",
    },
    {
      category: "TEMPLATE · DOCX",
      title: "RFP Template for Cyber Training Programs",
      description:
        "Vendor-neutral RFP scaffold, scope, pricing structure, trainer SLAs, IP terms and reporting requirements you can edit and send.",
      image: "/images/cyber/course-grc.jpg",
      imageAlt: "RFP template",
      href: "https://www.edstellar.com",
    },
    {
      category: "PLAYBOOK · PDF",
      title: "12-Month Cyber Capability Roadmap",
      description:
        "Quarter-by-quarter planner aligning role-based learning paths to business outcomes, rolling skill assessments and certification milestones.",
      image: "/images/cyber/more-curriculum.jpg",
      imageAlt: "Capability roadmap",
      href: "https://www.edstellar.com",
    },
    {
      category: "TEMPLATE · PDF",
      title: "Pre/Post Skill Assessment Battery",
      description:
        "200-question cybersecurity benchmark covering 8 CISSP domains, designed for pre-training baselining and post-training measurement.",
      image: "/images/cyber/course-ai-data.jpg",
      imageAlt: "Assessment battery",
      href: "https://www.edstellar.com",
    },
  ],
  news: [
    {
      category: "ANNOUNCEMENT",
      title: "Edstellar Adds CEH v13 AI-Powered to Catalog",
      description:
        "EC-Council's flagship offensive-security program, now AI-augmented, joins the 2026 cybersecurity catalog with hands-on red-team labs.",
      image: "/images/cyber/cert-ceh.jpg",
      imageAlt: "CEH v13 announcement",
      href: "https://www.edstellar.com",
    },
    {
      category: "PARTNERSHIP",
      title: "Edstellar Named ISACA Authorized Training Partner",
      description:
        "Official ATP status for CISM, CISA and CRISC programs, granting clients access to ISACA-aligned curriculum and certification pathways.",
      image: "/images/cyber/cert-cism.jpg",
      imageAlt: "ISACA partnership",
      href: "https://www.edstellar.com",
    },
    {
      category: "AWARDS",
      title: "Edstellar Wins 'Best Cyber Training Provider 2026'",
      description:
        "Brandon Hall HCM Excellence Awards recognises Edstellar's enterprise cybersecurity programs for measurable workforce-impact outcomes.",
      image: "/images/cyber/customers-enterprise.jpg",
      imageAlt: "Awards recognition",
      href: "https://www.edstellar.com",
    },
    {
      category: "RESEARCH",
      title: "State of Cyber Skills Report 2026",
      description:
        "Annual research surveying 1,200+ enterprises on cyber skill gaps, training spend and the impact of AI on threat landscapes.",
      image: "/images/cyber/cert-aws-sec.jpg",
      imageAlt: "State of cyber skills report",
      href: "https://www.edstellar.com",
    },
  ],
};

export function BusinessNewsCards() {
  const [activeTab, setActiveTab] = useState<ResourceTabId>("cases");
  const cards = RESOURCES[activeTab];

  return (
    <section className="relative bg-[#F5F3FF] py-16 md:py-20">
      <div className="mtk-page-center">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <h2
              className="text-[36px] leading-[1.05] sm:text-[42px] lg:text-[47px]"
              style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
            >
              Proof, playbooks and templates.
            </h2>
            <p
              className="mt-4 max-w-3xl text-[17px] leading-[1.4] sm:text-[19px]"
              style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
            >
              Customer outcomes, ready-to-share collateral, expert sessions and
              board-ready templates, built to help technology and learning
              leaders evaluate, internally champion and roll out cyber training
              programs with confidence.
            </p>
          </div>
          <a
            href="#contact"
            className="group/cta inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-black px-6 py-3 text-[14px] uppercase tracking-[0.12em] text-black transition-colors hover:border-[#6366F1] hover:text-[#6366F1] md:self-end"
            style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
          >
            Browse all resources
            <ArrowRightIcon
              width={16}
              height={16}
              className="transition-transform group-hover/cta:translate-x-0.5"
            />
          </a>
        </div>

        <div
          className="mt-10 flex flex-wrap items-center gap-3 border-b border-mtk-gray-300 pb-1 uppercase tracking-wider sm:gap-5"
          style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(t.id)}
              className={`relative -mb-px cursor-pointer pb-3 text-[12px] transition-colors sm:text-[14px] ${
                activeTab === t.id
                  ? "border-b-[3px] border-[#6366F1] text-black"
                  : "border-b-[3px] border-transparent text-mtk-gray-500 hover:text-black"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <NewsCard key={c.title} card={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
