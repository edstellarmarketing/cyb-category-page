"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  BrainCircuit,
  ShieldCheck,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
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
  Icon: LucideIcon;
};

const SLIDES: HeroSlide[] = [
  {
    eyebrow: "Corporate Artificial Intelligence Training",
    titleLine1: "From Stalled AI Pilots to",
    titleLine2: "Production Across the Enterprise",
    description:
      "Most enterprises are past AI experiments and now under pressure to scale them safely. Edstellar helps CTOs and data leaders upskill and reskill employees to move generative AI and machine learning from pilots into production. 120+ instructor-led group training programs across 11 domains, delivered on-site or virtually, with measurable business outcomes.",
    primaryCta: "Browse Training Programs",
    primaryHref: "#catalog",
    secondaryCta: "Get a Training Proposal",
    secondaryHref: "#contact",
    image: "/images/cyber/hero-ai.jpg",
    imageAlt: "Corporate artificial intelligence training",
    stripLabel: "FEATURED",
    stripSub: "Corporate AI Training",
    Icon: BrainCircuit,
  },
  {
    eyebrow: "Generative AI & LLM Training",
    titleLine1: "Take Generative AI From",
    titleLine2: "Demo to Dependable Product",
    description:
      "Too many GenAI projects stall as demos that never ship. Edstellar trains engineering and product teams to build production LLM systems with RAG, evaluation and agent workflows. Instructor-led group training that helps enterprises upskill and reskill employees to ship generative AI, not prototypes.",
    primaryCta: "Browse Training Programs",
    primaryHref: "#catalog",
    secondaryCta: "Get a Training Proposal",
    secondaryHref: "#contact",
    image: "/images/cyber/hero-ai-it.jpg",
    imageAlt: "Generative AI and LLM training",
    stripLabel: "GENERATIVE AI",
    stripSub: "LLMs, RAG and AI agents",
    Icon: Sparkles,
  },
  {
    eyebrow: "AI Governance & Responsible AI",
    titleLine1: "Deploy AI Your Auditors",
    titleLine2: "and Your Board Can Trust",
    description:
      "AI rollouts now stall on one question: can you govern it? Edstellar trains risk, legal and data leaders on the EU AI Act, NIST AI RMF and ISO/IEC 42001, covering risk classification and audit evidence. Customized, instructor-led group training that helps enterprises reskill employees to deploy AI responsibly.",
    primaryCta: "Browse Training Programs",
    primaryHref: "#catalog",
    secondaryCta: "Get a Training Proposal",
    secondaryHref: "#contact",
    image: "/images/cyber/hero-governance.jpg",
    imageAlt: "AI governance and responsible AI training",
    stripLabel: "AI GOVERNANCE",
    stripSub: "EU AI Act, NIST AI RMF, ISO 42001",
    Icon: ShieldCheck,
  },
  {
    eyebrow: "AI for Every Business Role",
    titleLine1: "Put Useful AI in the Hands",
    titleLine2: "of Every Team, Safely",
    description:
      "AI is now every employee's tool, not just the data team's. Edstellar trains finance, marketing, HR and operations teams to use ChatGPT, Copilot and prompt engineering safely in daily work. Instructor-led group training that helps enterprises upskill and reskill employees so AI adoption is broad and governed.",
    primaryCta: "Browse Training Programs",
    primaryHref: "#catalog",
    secondaryCta: "Get a Training Proposal",
    secondaryHref: "#contact",
    image: "/images/cyber/hero-datasci-it.jpg",
    imageAlt: "Workforce AI enablement training",
    stripLabel: "WORKFORCE AI",
    stripSub: "AI skills for every function",
    Icon: Users,
  },
];

const SLIDE_DURATION_MS = 7000;
const pad = (n: number) => String(n).padStart(2, "0");

export function AiHeroSlider() {
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
      className="relative flex flex-col overflow-hidden bg-[#0c0c0c] text-white"
      style={{ height: "calc(100dvh - 66px)", minHeight: "640px" }}
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
    >
      <div className="relative w-full min-h-0 flex-1">
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
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />
          </div>
        ))}

        {/* Left vertical accent bar */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 hidden h-full w-[3px] bg-gradient-to-b from-transparent via-[#6366F1] to-transparent md:block"
        />

        {/* Slide counter top-right */}
        <div className="absolute right-8 top-8 z-10 hidden items-baseline gap-2 md:flex lg:right-12">
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

        {/* Content overlay */}
        <div className="relative z-10 flex h-full items-center">
          <div className="max-w-2xl px-6 md:px-12 lg:max-w-[55%] lg:px-16">
            <span
              className="mb-6 block text-[12px] uppercase tracking-[0.2em] text-[#6366F1] sm:text-[13px]"
              style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
            >
              {slide.eyebrow}
            </span>
            <h2
              className="mb-6 text-[42px] leading-[1.08]"
              style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
            >
              {slide.titleLine1}
              <br />
              {slide.titleLine2}
            </h2>
            <p
              className="mb-8 max-w-2xl text-[18px] leading-[1.6] text-white/85"
              style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
            >
              {slide.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={slide.primaryHref ?? "#catalog"}
                className="group inline-flex items-center gap-2 rounded-full bg-[#6366F1] px-7 py-3.5 text-[14px] uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#4F46E5]"
                style={{ fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif" }}
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
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-[14px] uppercase tracking-[0.1em] text-white transition-colors hover:bg-white hover:text-black"
                style={{ fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif" }}
              >
                {slide.secondaryCta}
                <ArrowRightIcon width={16} height={16} />
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

      {/* Category strip — HTML, clickable, matches slide image styling */}
      <nav
        aria-label="Slide categories"
        className="shrink-0 border-t border-white/10 bg-[#0c0c0c]"
      >
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 px-6 py-4 sm:grid-cols-4 sm:gap-x-6 md:px-12 md:py-5 lg:px-24">
          {SLIDES.map((s, i) => {
            const isActive = i === active;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}: ${s.stripLabel}`}
                aria-current={isActive}
                className={`group relative flex items-center gap-3 rounded-md pl-3 pr-2 py-1.5 text-left transition-colors ${
                  isActive ? "bg-white/[0.04]" : "hover:bg-white/[0.03]"
                }`}
              >
                <span
                  className={`absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full transition-colors ${
                    isActive ? "bg-[#C5E826]" : "bg-transparent"
                  }`}
                  aria-hidden="true"
                />
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors ${
                    isActive
                      ? "bg-[#6366F1] text-white"
                      : "bg-white/10 text-white/70 group-hover:bg-white/15 group-hover:text-white"
                  }`}
                >
                  <s.Icon className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span
                    className={`truncate text-[14px] uppercase tracking-[0.16em] sm:text-[15px] ${
                      isActive ? "text-white" : "text-white/85"
                    }`}
                    style={{ fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif" }}
                  >
                    {s.stripLabel}
                  </span>
                  <span
                    className="mt-1 truncate text-[12px] leading-tight text-white/55 sm:text-[13px]"
                    style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                  >
                    {s.stripSub}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </section>
  );
}
