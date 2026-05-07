"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRightIcon } from "@/components/icons";

const VIEW_ALL_HREF = "/#training-programs";

type Course = {
  badge: string;
  title: string;
  duration: string;
  body: string;
  image: string;
  imageAlt: string;
  href: string;
};

const COURSES: Course[] = [
  {
    badge: "Compliance",
    title: "AML & KYC Foundations for BFSI Teams",
    duration: "3 days · Instructor-led",
    body: "Build a single AML / KYC capability standard across branches, ops, and onboarding teams.",
    imageAlt: "AML and KYC capability program for BFSI teams",
    image: "/images/cyber/bfsi-card-3.jpg",
    href: "/#contact",
  },
  {
    badge: "Customer Experience",
    title: "Service Excellence for Branch Teams",
    duration: "2 days · Instructor-led",
    body: "Lift NPS, CSAT, and complaint-recovery quality across branch and contact-centre teams.",
    imageAlt: "Service-excellence program for branch teams",
    image: "/images/cyber/bfsi-card-1.jpg",
    href: "/#contact",
  },
  {
    badge: "Risk",
    title: "Risk Modelling & IFRS 9 / Basel Practitioner",
    duration: "5 days · Cohort",
    body: "Equip risk and finance teams to operationalise IFRS 9, Basel, and stress-testing programs.",
    imageAlt: "Risk modelling, IFRS 9, and Basel practitioner program",
    image: "/images/cyber/bfsi-card-6.jpg",
    href: "/#contact",
  },
  {
    badge: "Sales",
    title: "Sales Excellence for Relationship Managers",
    duration: "4 days · Cohort",
    body: "Cross-sell, upsell, and consultative-selling capability for RMs across BFSI segments.",
    imageAlt: "Sales-excellence program for BFSI relationship managers",
    image: "/images/cyber/bfsi-card-4.jpg",
    href: "/#contact",
  },
  {
    badge: "Leadership",
    title: "Branch Manager Leadership Bootcamp",
    duration: "5 days · Bootcamp",
    body: "Operating model, P&L, people leadership, and customer experience for branch and regional managers.",
    imageAlt: "Branch manager leadership bootcamp for BFSI",
    image: "/images/cyber/hero-governance.jpg",
    href: "/#contact",
  },
  {
    badge: "AI & Innovation",
    title: "GenAI in Banking — Practitioner",
    duration: "3 days · Instructor-led",
    body: "AI-readiness, GenAI use-cases, and model-risk awareness for risk, audit, and frontline teams.",
    imageAlt: "GenAI in banking practitioner program",
    image: "/images/cyber/course-ai-data.jpg",
    href: "/#contact",
  },
  {
    badge: "Operations",
    title: "Frontline Productivity for Contact Centres",
    duration: "3 days · Instructor-led",
    body: "Process excellence, handle-time discipline, and quality assurance for contact-centre teams.",
    imageAlt: "Contact-centre productivity program",
    image: "/images/cyber/hero-team-training.jpg",
    href: "/#contact",
  },
  {
    badge: "Functional Skills",
    title: "Core Banking & Payments Essentials",
    duration: "4 days · Cohort",
    body: "Foundations of core banking, payments rails, and digital-banking platforms for new joiners.",
    imageAlt: "Core banking and payments essentials program",
    image: "/images/cyber/course-iam.jpg",
    href: "/#contact",
  },
];

const NAVY = "#1B1D52";
const LIME = "#C5E826";
const BORDER = "#E3E6F0";
const BODY = "#374151";
const MUTED = "#6B7280";

export function BankingFinanceCoursesCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const recompute = () => {
      const cards = node.querySelectorAll<HTMLElement>("article");
      if (!cards.length) return;
      const cardWidth = cards[0].offsetWidth + 16;
      if (cardWidth <= 0) return;
      const idx = Math.round(node.scrollLeft / cardWidth);
      setActiveIdx(Math.max(0, Math.min(idx, cards.length - 1)));
    };
    recompute();
    node.addEventListener("scroll", recompute, { passive: true });
    window.addEventListener("resize", recompute);
    return () => {
      node.removeEventListener("scroll", recompute);
      window.removeEventListener("resize", recompute);
    };
  }, []);

  const goTo = (idx: number) => {
    const node = ref.current;
    if (!node) return;
    const cards = node.querySelectorAll<HTMLElement>("article");
    const card = cards[idx];
    if (!card) return;
    node.scrollTo({
      left: card.offsetLeft - node.offsetLeft,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-16 md:mt-20">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-8">
        <div className="max-w-2xl">
          <p
            className="text-[11px] uppercase tracking-[0.18em]"
            style={{
              color: MUTED,
              fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif",
              fontWeight: 700,
            }}
          >
            Trending Programs
          </p>
          <h3
            className="mt-2 text-[24px] leading-[1.15] sm:text-[28px] lg:text-[32px]"
            style={{
              color: NAVY,
              fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif",
            }}
          >
            Trending Training Programs for BFSI workforces.
          </h3>
        </div>
        <Link
          href={VIEW_ALL_HREF}
          className="group/cta inline-flex shrink-0 items-center gap-2 self-start rounded-full px-5 py-3 text-[12.5px] uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90 sm:text-[13px] md:self-end"
          style={{
            backgroundColor: NAVY,
            fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif",
            fontWeight: 600,
          }}
        >
          View All Training Programs
          <ArrowRightIcon
            width={14}
            height={14}
            className="transition-transform group-hover/cta:translate-x-0.5"
          />
        </Link>
      </div>

      <div
        ref={ref}
        className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollPaddingLeft: "0px" }}
      >
        {COURSES.map((c) => (
          <article
            key={c.title}
            className="group flex w-[280px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border bg-white transition-shadow hover:shadow-md sm:w-[320px]"
            style={{ borderColor: BORDER }}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={c.image}
                alt={c.imageAlt}
                fill
                sizes="(max-width: 640px) 280px, 320px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span
                className="absolute left-3 top-3 rounded-full px-3 py-1 text-[10.5px] uppercase tracking-[0.12em]"
                style={{
                  backgroundColor: LIME,
                  color: NAVY,
                  fontFamily:
                    "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                  fontWeight: 700,
                }}
              >
                {c.badge}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p
                className="text-[11px] uppercase tracking-[0.14em]"
                style={{
                  color: MUTED,
                  fontFamily:
                    "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                  fontWeight: 700,
                }}
              >
                {c.duration}
              </p>
              <h4
                className="mt-2 text-[16px] leading-[1.3] sm:text-[17px]"
                style={{
                  color: NAVY,
                  fontFamily:
                    "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                  fontWeight: 700,
                }}
              >
                {c.title}
              </h4>
              <p
                className="mt-2 flex-1 text-[13px] leading-[1.55] sm:text-[13.5px]"
                style={{
                  color: BODY,
                  fontFamily:
                    "'Riona Sans Light', Helvetica, Arial, sans-serif",
                }}
              >
                {c.body}
              </p>
              <Link
                href={c.href}
                aria-label={`View Program: ${c.title}`}
                className="group/cta mt-5 inline-flex items-center gap-1.5 self-start text-[12.5px] uppercase tracking-[0.1em] transition-colors"
                style={{
                  color: NAVY,
                  fontFamily:
                    "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                  fontWeight: 700,
                }}
              >
                View Program
                <ArrowRightIcon
                  width={14}
                  height={14}
                  className="transition-transform group-hover/cta:translate-x-0.5"
                />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {COURSES.map((c, i) => {
          const isActive = i === activeIdx;
          return (
            <button
              key={c.title}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}: ${c.title}`}
              aria-current={isActive ? "true" : undefined}
              className="h-2 rounded-full transition-all"
              style={{
                width: isActive ? "24px" : "8px",
                backgroundColor: isActive ? NAVY : BORDER,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
