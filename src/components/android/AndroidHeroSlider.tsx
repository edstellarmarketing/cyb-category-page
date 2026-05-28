"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Smartphone,
  Layers,
  ShieldCheck,
  Globe,
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
    eyebrow: "Corporate Android & Mobile Training",
    titleLine1: "From Shipped Android Apps to",
    titleLine2: "a Mobile Engineering Org That Scales",
    description:
      "Most enterprises already ship an Android app. The harder problem is scaling a mobile org that ships safely, on schedule, on a modern stack. Edstellar helps Heads of Mobile upskill and reskill employees to move Android engineering from one-app heroics to repeatable delivery. Instructor-led group training across modern Android, mobile DevOps and cross-platform.",
    primaryCta: "Browse Training Programs",
    primaryHref: "#catalog",
    secondaryCta: "Get a Training Proposal",
    secondaryHref: "#contact",
    image: "/images/cyber/hero-ai.jpg",
    imageAlt: "Corporate Android training",
    stripLabel: "FEATURED",
    stripSub: "Corporate Android Training",
    Icon: Smartphone,
  },
  {
    eyebrow: "Modern Android & Jetpack Compose",
    titleLine1: "Take Your Android Codebase From",
    titleLine2: "Java Fragments to Kotlin and Compose",
    description:
      "Most enterprise Android codebases are still a mix of Java, fragments and legacy MVP. Edstellar trains Android teams to migrate to Kotlin, Coroutines, Jetpack Compose and Architecture Components without freezing the roadmap. Instructor-led group training that helps enterprises upskill and reskill employees to modernise Android, not rewrite it from scratch.",
    primaryCta: "Browse Training Programs",
    primaryHref: "#catalog",
    secondaryCta: "Get a Training Proposal",
    secondaryHref: "#contact",
    image: "/images/cyber/hero-ai-it.jpg",
    imageAlt: "Modern Android with Kotlin and Jetpack Compose training",
    stripLabel: "KOTLIN & COMPOSE",
    stripSub: "Modern Android with Jetpack",
    Icon: Layers,
  },
  {
    eyebrow: "Mobile DevOps, QA & App Security",
    titleLine1: "Ship Android Releases Your QA, Security",
    titleLine2: "and Play Store Reviewers Can Sign Off",
    description:
      "Mobile release pain is rarely a coding problem; it is a pipeline, automation and hardening problem. Edstellar trains Android, QA and DevOps engineers on CI for Android, Appium and Espresso suites, Play Integrity and Android security baselines. Customized, instructor-led group training that helps enterprises reskill employees to release Android safely.",
    primaryCta: "Browse Training Programs",
    primaryHref: "#catalog",
    secondaryCta: "Get a Training Proposal",
    secondaryHref: "#contact",
    image: "/images/cyber/hero-governance.jpg",
    imageAlt: "Mobile DevOps, QA and Android security training",
    stripLabel: "MOBILE DEVOPS",
    stripSub: "CI, automation and app hardening",
    Icon: ShieldCheck,
  },
  {
    eyebrow: "Cross-Platform Mobile Engineering",
    titleLine1: "Run One Mobile Team Across",
    titleLine2: "Android, iOS and the Web",
    description:
      "Many enterprises now run mobile with one cross-platform stack rather than two native teams. Edstellar trains engineers on Flutter, React Native and Ionic, Cordova and Xamarin where the legacy is real. Instructor-led group training that helps enterprises upskill and reskill employees so a single mobile team can ship to Android, iOS and beyond.",
    primaryCta: "Browse Training Programs",
    primaryHref: "#catalog",
    secondaryCta: "Get a Training Proposal",
    secondaryHref: "#contact",
    image: "/images/cyber/hero-datasci-it.jpg",
    imageAlt: "Cross-platform mobile engineering training",
    stripLabel: "CROSS-PLATFORM",
    stripSub: "Flutter, React Native and hybrid",
    Icon: Globe,
  },
];

const SLIDE_DURATION_MS = 7000;
const pad = (n: number) => String(n).padStart(2, "0");

export function AndroidHeroSlider() {
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
