"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@/components/icons";

type HeroSlide = {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  primaryCta: string;
  primaryHref?: string;
  secondaryCta: string;
  secondaryHref?: string;
  image: string;
  imageAlt: string;
  stripLabel: string;
  stripSub: string;
};

const SLIDES: HeroSlide[] = [
  {
    eyebrow: "Corporate Cybersecurity Training",
    titleLine1: "Hardening security teams",
    titleLine2: "across every enterprise.",
    description:
      "Edstellar is the corporate cybersecurity training partner of choice for CISOs and security leaders racing to upskill and reskill employees on offensive security, cloud security, GRC and AI-era threats. Our instructor-led cybersecurity group training spans 200+ programs across 8 cyber domains, delivered virtually, on-site or off-site by certified trainers, so every cohort closes the cyber skills gap and turns learning into measurable security outcomes.",
    primaryCta: "Browse Training Programs",
    secondaryCta: "Get a Training Proposal",
    image: "/images/cyber/hero-cyber-it.jpg",
    imageAlt: "Corporate cybersecurity training",
    stripLabel: "FEATURED",
    stripSub: "Corporate Cybersecurity Training",
  },
  {
    eyebrow: "Cybersecurity for BFSI",
    titleLine1: "Banks defend trust",
    titleLine2: "with trained security teams.",
    description:
      "BFSI leaders rely on Edstellar's instructor-led cybersecurity training to upskill and reskill SOC, pen-test and GRC employees on PCI-DSS, RBI / SEBI guidelines, fraud analytics and Zero-Trust banking. Customized cybersecurity group training programs designed for corporate security teams, delivered virtually or on-site, with hands-on labs and certified instructors.",
    primaryCta: "Browse Training Programs",
    secondaryCta: "Get a Training Proposal",
    image: "/images/cyber/hero-industry-bfsi.jpg",
    imageAlt: "BFSI cybersecurity training",
    stripLabel: "BFSI",
    stripSub: "Banking, Insurance, Capital Markets",
  },
  {
    eyebrow: "Cybersecurity for Healthcare",
    titleLine1: "Healthcare cyber runs on",
    titleLine2: "data, AI and patient trust.",
    description:
      "Hospitals, payers, pharma and medtech firms partner with Edstellar for instructor-led cybersecurity group training on HIPAA, HITRUST, medical-device security and ransomware response. Customized employee training programs for healthcare security teams, delivered virtually or on-site, to upskill, reskill and build workforce-wide cyber readiness for the next decade of regulated digital care.",
    primaryCta: "Browse Training Programs",
    secondaryCta: "Get a Training Proposal",
    image: "/images/cyber/hero-industry-healthcare.jpg",
    imageAlt: "Healthcare cybersecurity training",
    stripLabel: "HEALTHCARE",
    stripSub: "Hospitals, Pharma, MedTech",
  },
  {
    eyebrow: "AI & Generative-AI Security",
    titleLine1: "Securing the AI era",
    titleLine2: "starts with trained engineers.",
    description:
      "SaaS, fintech and AI-first enterprises deploy Edstellar's instructor-led cybersecurity group training to upskill and reskill employees on LLM red-teaming, prompt-injection defence, MLOps security and AI governance. Customized employee training programs for security teams entering the GenAI era, with hands-on labs and certified instructors.",
    primaryCta: "Browse Training Programs",
    secondaryCta: "Get a Training Proposal",
    image: "/images/cyber/hero-ai-it.jpg",
    imageAlt: "AI and Generative-AI cybersecurity training",
    stripLabel: "AI SECURITY",
    stripSub: "LLM Red-Teaming, MLOps, GenAI",
  },
];

const SLIDE_DURATION_MS = 7000;
const pad = (n: number) => String(n).padStart(2, "0");

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [hiddenPaused, setHiddenPaused] = useState(false);
  const paused = hoverPaused || hiddenPaused;

  useEffect(() => {
    const onVis = () => setHiddenPaused(document.hidden);
    onVis();
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((i) => (i + 1) % SLIDES.length), SLIDE_DURATION_MS);
    return () => clearInterval(t);
  }, [paused, active]);

  const slide = SLIDES[active];
  const total = SLIDES.length;
  const next = () => setActive((i) => (i + 1) % total);
  const prev = () => setActive((i) => (i - 1 + total) % total);

  return (
    <section
      className="relative flex min-h-[560px] flex-col overflow-hidden bg-[#0c0c0c] text-white"
      style={{ height: "calc(100vh - 64px)" }}
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
    >
      <div className="relative w-full flex-1">
        {SLIDES.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === active ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <Image
              src={s.image}
              alt={s.imageAlt}
              fill
              priority={i === 0}
              loading={i === 0 ? "eager" : "lazy"}
              quality={70}
              className="object-cover opacity-50"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
          </div>
        ))}

        {/* Decorative diagonal accent strip, runs vertically along the left edge */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 hidden h-full w-[3px] bg-gradient-to-b from-transparent via-[#6366F1] to-transparent md:block"
        />

        {/* Top-right slide counter */}
        <div className="absolute top-8 right-8 z-10 hidden items-baseline gap-2 md:flex lg:right-12">
          <span
            className="text-[40px] leading-none text-white"
            style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
          >
            {pad(active + 1)}
          </span>
          <span className="block h-px w-10 translate-y-[-10px] bg-white/40" />
          <span
            className="text-[14px] text-white/60"
            style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
          >
            {pad(total)}
          </span>
        </div>

        <div className="relative z-10 flex h-full items-center">
          <div className="max-w-4xl px-6 md:px-24">
            <span
              className="mb-6 block text-[11px] uppercase tracking-[0.18em] text-[#6366F1]"
              style={{ fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif", fontWeight: 700 }}
            >
              {slide.eyebrow}
            </span>
            <h2
              className="mb-6 text-[34px] leading-[1.05] sm:text-[44px] lg:text-[56px]"
              style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
            >
              {slide.titleLine1}
              <br />
              {slide.titleLine2}
            </h2>
            <p
              className="mb-8 max-w-xl text-[16px] leading-[1.5] text-white/85 sm:text-[18px]"
              style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
            >
              {slide.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={slide.primaryHref ?? "#catalog"}
                className="group inline-flex items-center gap-2 rounded-full bg-[#6366F1] px-6 py-2.5 text-[14px] uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#4F46E5]"
                style={{ fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif", fontWeight: 600 }}
              >
                {slide.primaryCta}
                <ArrowRightIcon
                  width={16}
                  height={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a
                href={slide.secondaryHref ?? "#contact"}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-2.5 text-[14px] uppercase tracking-[0.08em] text-white transition-colors hover:bg-white hover:text-black"
                style={{ fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif", fontWeight: 600 }}
              >
                {slide.secondaryCta}
              </a>
            </div>
          </div>
        </div>

        {/* Side arrow buttons */}
        <button
          type="button"
          aria-label="Previous slide"
          onClick={prev}
          className="absolute left-4 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 rotate-180 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-md transition-all hover:border-[#6366F1] hover:bg-[#6366F1] md:flex"
        >
          <ArrowRightIcon width={16} height={16} />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={next}
          className="absolute right-4 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-md transition-all hover:border-[#6366F1] hover:bg-[#6366F1] md:flex"
        >
          <ArrowRightIcon width={16} height={16} />
        </button>
      </div>

      {/* Slide-names strip: ends the page fold */}
      <nav
        className="shrink-0 border-t border-white/10 bg-[#0c0c0c]/95"
        aria-label="Slide categories"
      >
        <div className="flex snap-x snap-proximity scroll-pl-6 gap-x-6 overflow-x-auto py-3 pl-6 pr-6 uppercase tracking-widest [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:snap-none sm:grid-cols-2 sm:gap-x-8 sm:gap-y-4 sm:overflow-visible sm:px-6 md:px-24 lg:grid-cols-4">
          {SLIDES.map((s, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}: ${s.stripLabel}`}
              className={`relative flex min-w-[170px] shrink-0 snap-start flex-col pt-2 text-left transition-colors sm:min-w-0 sm:shrink ${
                i === active
                  ? "border-t-2 border-[#6366F1]"
                  : "border-t-2 border-transparent hover:border-white/30"
              }`}
            >
              <span
                className="break-words text-[12px] leading-tight text-white sm:text-[13px]"
                style={{ fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif", fontWeight: 700 }}
              >
                {s.stripLabel}
              </span>
              <span
                className="mt-0.5 break-words text-[11px] font-normal normal-case leading-tight tracking-normal text-white/55"
                style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                {s.stripSub}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </section>
  );
}
