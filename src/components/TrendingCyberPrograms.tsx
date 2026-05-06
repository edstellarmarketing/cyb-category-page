"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";

type Program = {
  slug: string;
  tag: string;
  tagColor: string;
  tagBg: string;
  title: string;
  duration: string;
  desc: string;
  image: string;
};

const PROGRAMS: Program[] = [
  {
    slug: "CyberArk training",
    tag: "Identity & Access",
    tagColor: "#6366F1",
    tagBg: "#EEF2FF",
    title: "CyberArk Training",
    duration: "16 - 24 hrs",
    desc: "Master Privileged Access Management with CyberArk, vault administration, PSM, CPM and policy-driven credential rotation.",
    image: "/images/cyber/course-iam.jpg",
  },
  {
    slug: "Ransomware prevention",
    tag: "Threat Defense",
    tagColor: "#DC2626",
    tagBg: "#FEF2F2",
    title: "Ransomware Prevention",
    duration: "8 - 16 hrs",
    desc: "Identify ransomware threats, prevent system breaches and build a resilient response playbook for your team.",
    image: "/images/cyber/hero-cyber-ops.jpg",
  },
  {
    slug: "Threat simulation",
    tag: "Offensive Security",
    tagColor: "#B45309",
    tagBg: "#FFFBEB",
    title: "Advanced Cybersecurity Threat Simulation",
    duration: "24 - 32 hrs",
    desc: "Hands-on red-team simulation lab covering APTs, lateral movement, AD attacks and post-exploitation in realistic enterprise environments.",
    image: "/images/cyber/course-ethical-hacking.jpg",
  },
  {
    slug: "PII training",
    tag: "Data Privacy",
    tagColor: "#0D9488",
    tagBg: "#F0FDFA",
    title: "Personally Identifiable Information (PII)",
    duration: "8 - 16 hrs",
    desc: "Identify and classify sensitive PII, apply data-minimization controls and align with GDPR, DPDP and CCPA obligations.",
    image: "/images/cyber/course-grc.jpg",
  },
  {
    slug: "Zero trust",
    tag: "Network Security",
    tagColor: "#7C3AED",
    tagBg: "#F5F3FF",
    title: "Zero Trust Architecture Training",
    duration: "16 - 24 hrs",
    desc: "Design and implement Zero Trust frameworks across identity, network, and workload layers for enterprise security teams.",
    image: "/images/cyber/course-network.jpg",
  },
  {
    slug: "SIEM and SOC",
    tag: "SOC Operations",
    tagColor: "#1B1D52",
    tagBg: "#EEF2FF",
    title: "SIEM and Log Analysis Group Training",
    duration: "16 - 24 hrs",
    desc: "Hands-on SIEM configuration, log correlation, alert tuning and threat detection workflow training for SOC analyst cohorts.",
    image: "/images/cyber/hero-soc-analyst.jpg",
  },
  {
    slug: "Cloud security",
    tag: "Cloud Security",
    tagColor: "#0D9488",
    tagBg: "#F0FDFA",
    title: "Cloud Security Fundamentals",
    duration: "16 - 24 hrs",
    desc: "Shared responsibility, IAM, data protection and compliance controls across AWS, Azure and GCP for enterprise cloud teams.",
    image: "/images/cyber/course-cloud.jpg",
  },
  {
    slug: "Threat intelligence",
    tag: "Threat Defense",
    tagColor: "#DC2626",
    tagBg: "#FEF2F2",
    title: "Threat Intelligence Analyst Training",
    duration: "16 - 24 hrs",
    desc: "Structured training for analysts collecting, processing and operationalizing threat intelligence to reduce enterprise dwell time.",
    image: "/images/cyber/hero-cyber-it.jpg",
  },
  {
    slug: "Application security",
    tag: "Application Security",
    tagColor: "#7C3AED",
    tagBg: "#F5F3FF",
    title: "Application Security (AppSec) Group Training",
    duration: "16 - 24 hrs",
    desc: "OWASP Top 10, secure SDLC, code review and penetration testing techniques for engineering and DevSecOps cohorts.",
    image: "/images/cyber/course-appsec.jpg",
  },
  {
    slug: "Security awareness",
    tag: "Security Awareness",
    tagColor: "#6366F1",
    tagBg: "#EEF2FF",
    title: "Security Awareness and Phishing Defense",
    duration: "8 - 16 hrs",
    desc: "Behavioral security training for enterprise employees covering phishing, social engineering, password hygiene and reporting protocols.",
    image: "/images/cyber/hero-team-training.jpg",
  },
];

const LOOPED = [...PROGRAMS, ...PROGRAMS, ...PROGRAMS];

export function TrendingCyberPrograms() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const third = el.scrollWidth / 3;
    el.scrollLeft = third;

    const handleScroll = () => {
      const t = el.scrollWidth / 3;
      if (el.scrollLeft >= t * 2) {
        el.scrollLeft -= t;
      } else if (el.scrollLeft < t * 0.01) {
        el.scrollLeft += t;
      }
    };

    el.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      el.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="eds-page-center">

        {/* Header row */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2
              className="text-[36px] leading-[1.05] text-[#1B1D52] sm:text-[42px] lg:text-[47px]"
              style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
            >
              Trending cybersecurity training programs companies are actively enrolling in
            </h2>
          </div>

          {/* Nav arrows */}
          <div className="flex shrink-0 gap-2">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E3E6F0] bg-white text-[#1B1D52] transition-colors hover:border-[#6366F1] hover:text-[#6366F1]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E3E6F0] bg-white text-[#1B1D52] transition-colors hover:border-[#6366F1] hover:text-[#6366F1]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {LOOPED.map((p, i) => (
            <div
              key={`${p.slug}-${i}`}
              className="flex w-[280px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-[#E3E6F0] bg-white transition-shadow hover:shadow-md sm:w-[300px]"
            >
              {/* Image with slug overlay */}
              <div className="relative h-44 w-full shrink-0 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="300px"
                />
                <span
                  className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-[10px] text-white backdrop-blur-sm"
                  style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                >
                  {p.slug}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                {/* Domain tag */}
                <span
                  className="inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-[0.1em]"
                  style={{
                    backgroundColor: p.tagBg,
                    color: p.tagColor,
                    fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif",
                  }}
                >
                  {p.tag}
                </span>

                {/* Title */}
                <p
                  className="mt-3 text-[15px] leading-[1.35] text-[#1B1D52] sm:text-[16px]"
                  style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                >
                  {p.title}
                </p>

                {/* Specs */}
                <div className="mt-3 border-t border-[#E3E6F0] pt-3">
                  <p
                    className="text-[12px] text-[#6B7280]"
                    style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                  >
                    {p.duration}
                  </p>
                  <p
                    className="mt-0.5 text-[12px] text-[#6B7280]"
                    style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                  >
                    Instructor-led (On-site/Virtual)
                  </p>
                </div>

                {/* Description */}
                <p
                  className="mt-3 flex-1 text-[13px] leading-[1.6] text-[#6B7280]"
                  style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                >
                  {p.desc}
                </p>

                {/* CTA */}
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[0.1em] text-[#6366F1] transition-opacity hover:opacity-70"
                  style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                >
                  View program
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
