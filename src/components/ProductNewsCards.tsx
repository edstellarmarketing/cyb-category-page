"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";

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
      "Master Privileged Access Management with CyberArk, vault administration, PSM, CPM and policy-driven credential rotation.",
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
    category: "Cloud Security",
    title: "AWS Security Training",
    duration: "16 - 24 hrs",
    delivery: "Instructor-led (On-site/Virtual)",
    description:
      "Secure AWS workloads with IAM, KMS, GuardDuty, Security Hub and incident response playbooks aligned to the Well-Architected security pillar.",
    image: "/images/cyber/cert-aws-sec.jpg",
    imageAlt: "AWS security training",
    href: "https://www.edstellar.com/course/aws-security-training",
  },
  {
    category: "Governance & Compliance",
    title: "ISO 27001 Lead Auditor Training",
    duration: "32 - 40 hrs",
    delivery: "Instructor-led (On-site/Virtual)",
    description:
      "Plan, execute and report ISO/IEC 27001 audits with confidence — covering ISMS scope, Annex A controls and continual-improvement audits.",
    image: "/images/cyber/cert-iso27001.jpg",
    imageAlt: "ISO 27001 lead auditor",
    href: "https://www.edstellar.com/course/iso-27001-lead-auditor-training",
  },
];

function ProgramCard({ program }: { program: Program }) {
  return (
    <a
      href={program.href}
      target="_blank"
      rel="noopener"
      className="eds-arrow-link group flex h-full flex-col overflow-hidden rounded-xl border border-eds-gray-200 bg-white transition-all hover:-translate-y-0.5 hover:border-[#6366F1]/40 hover:shadow-lg"
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-[#0c0c0c]">
        <Image
          src={program.image}
          alt={program.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span
          className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-sm border border-white/30 bg-black/40 px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-white backdrop-blur-sm"
          style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />
          {program.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 px-5 py-5 sm:px-6">
        <h3
          className="text-[20px] leading-[1.2] text-black sm:text-[22px]"
          style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
        >
          {program.title}
        </h3>
        <div
          className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-eds-gray-500"
          style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
        >
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-[#6366F1]" /> {program.duration}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-[#6366F1]" /> {program.delivery}
          </span>
        </div>
        <p
          className="text-[15px] leading-[1.4] text-black sm:text-[16px]"
          style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
        >
          {program.description}
        </p>
        <span
          className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[13px] uppercase tracking-[0.14em] text-[#6366F1]"
          style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
        >
          View program
          <ArrowRightIcon className="eds-arrow" width={16} height={16} />
        </span>
      </div>
    </a>
  );
}

export function ProductNewsCards() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateButtons = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < maxScroll - 4);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateButtons();
    el.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    return () => {
      el.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, [updateButtons]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>("[data-card]");
    if (!firstCard) return;
    const gap = 24;
    el.scrollBy({ left: direction * (firstCard.offsetWidth + gap), behavior: "smooth" });
  };

  return (
    <section className="relative bg-[#0c0c0c] py-16 md:py-20">
      <div className="eds-page-center">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              className="text-[36px] leading-[1.05] text-white sm:text-[42px] lg:text-[47px]"
              style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
            >
              Trending cybersecurity training programs
            </h2>
            <p
              className="mt-4 max-w-3xl text-[17px] leading-[1.35] text-white/75 sm:text-[19px]"
              style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
            >
              Explore trending cybersecurity training programs handpicked for modern teams, analysts, and security leaders.
            </p>
          </div>
          <div className="hidden shrink-0 items-center gap-3 sm:flex">
            <button
              type="button"
              aria-label="Previous programs"
              onClick={() => scrollByCard(-1)}
              disabled={!canPrev}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white transition-colors hover:border-[#6366F1] hover:bg-white/10 hover:text-[#a5b4fc] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-white/25 disabled:hover:bg-white/5 disabled:hover:text-white"
            >
              <ArrowRightIcon width={18} height={18} className="rotate-180" />
            </button>
            <button
              type="button"
              aria-label="Next programs"
              onClick={() => scrollByCard(1)}
              disabled={!canNext}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white transition-colors hover:border-[#6366F1] hover:bg-white/10 hover:text-[#a5b4fc] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-white/25 disabled:hover:bg-white/5 disabled:hover:text-white"
            >
              <ArrowRightIcon width={18} height={18} />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="eds-no-scrollbar mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
        >
          {PROGRAMS.map((c) => (
            <div
              key={c.title}
              data-card
              className="w-[85%] flex-shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-4.5rem)/4)]"
            >
              <ProgramCard program={c} />
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-eds-gray-200 bg-[#F5F3FF] px-8 py-6 sm:flex-row">
          <div>
            <h3
              className="text-[20px] text-black sm:text-[22px]"
              style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
            >
              Explore the Complete Edstellar Cybersecurity Training Catalog
            </h3>
            <p
              className="mt-1 text-[15px] text-eds-gray-500"
              style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
            >
              Browse 200+ cybersecurity training programs or request the latest catalog delivered to your inbox.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-black px-6 py-3 text-[14px] uppercase tracking-[0.12em] text-black transition-colors hover:border-[#6366F1] hover:text-[#6366F1]"
              style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
            >
              Download Catalog
              <ArrowRightIcon width={16} height={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
