"use client";

import { useRef } from "react";

type Testimonial = {
  quote: string;
  initials: string;
  role: string;
  sector: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Edstellar standardised our branch-manager program across 8 markets in 12 weeks. The cohort scoreboard finally gave us something the board could read.",
    initials: "HL",
    role: "Head of L&D",
    sector: "Top-5 retail bank, APAC",
  },
  {
    quote:
      "The role-based learning journeys turned a generic catalogue into a capability system our relationship managers actually used on the desk.",
    initials: "CH",
    role: "Chief Human Resources Officer",
    sector: "Global insurance carrier",
  },
  {
    quote:
      "Instructor-led delivery in 5 languages across our regional hubs, on a single calendar, with one Edstellar program manager. That coordination was the difference.",
    initials: "VP",
    role: "VP Operations",
    sector: "NBFC, MEA",
  },
  {
    quote:
      "Service NPS lifted 18 points in two quarters. Not from a content library, from how the cohorts were taught and reinforced on the floor.",
    initials: "HC",
    role: "Head of Customer Experience",
    sector: "Mid-market bank, Europe",
  },
  {
    quote:
      "Edstellar's instructor bench understood Basel and IFRS 9 the way our risk team does. That credibility is what we were paying for.",
    initials: "DR",
    role: "Director, Risk and Compliance",
    sector: "Capital markets group, Americas",
  },
  {
    quote:
      "The five-step approach mapped to our HR planning cycle, not to a vendor's proposal calendar. That is why it scaled across 14 branches.",
    initials: "LD",
    role: "L&D Director",
    sector: "Top-3 NBFC, India",
  },
];

const NAVY = "#1B1D52";
const LIME = "#C5E826";
const BORDER = "#E3E6F0";
const BODY = "#374151";
const MUTED = "#6B7280";

function ChevronButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={direction === "left" ? "Scroll left" : "Scroll right"}
      onClick={onClick}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:bg-[#F7F8FC]"
      style={{ borderColor: BORDER, color: NAVY }}
    >
      <svg
        aria-hidden="true"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          transform: direction === "left" ? "rotate(180deg)" : "none",
        }}
      >
        <path d="M9 6l6 6-6 6" />
      </svg>
    </button>
  );
}

export function BankingFinanceTestimonialsCarousel() {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const node = ref.current;
    if (!node) return;
    const distance = Math.round(node.clientWidth * 0.85);
    node.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-16 md:mt-20">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p
            className="text-[11px] uppercase tracking-[0.18em]"
            style={{
              color: MUTED,
              fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif",
              fontWeight: 700,
            }}
          >
            Voices from the industry
          </p>
          <h3
            className="mt-2 text-[24px] leading-[1.15] sm:text-[28px] lg:text-[32px]"
            style={{
              color: NAVY,
              fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif",
            }}
          >
            What BFSI leaders say about Edstellar.
          </h3>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <ChevronButton direction="left" onClick={() => scroll("left")} />
          <ChevronButton direction="right" onClick={() => scroll("right")} />
        </div>
      </div>

      <div
        ref={ref}
        className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {TESTIMONIALS.map((t, i) => (
          <article
            key={i}
            className="flex w-[300px] shrink-0 snap-start flex-col rounded-2xl border bg-white p-6 sm:w-[360px] sm:p-7"
            style={{ borderColor: BORDER }}
          >
            <span
              aria-hidden="true"
              className="text-[40px] leading-none"
              style={{
                color: LIME,
                fontFamily:
                  "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                fontWeight: 700,
              }}
            >
              &ldquo;
            </span>
            <p
              className="mt-1 flex-1 text-[14.5px] leading-[1.6] sm:text-[15.5px]"
              style={{
                color: BODY,
                fontFamily:
                  "'Riona Sans Light', Helvetica, Arial, sans-serif",
              }}
            >
              {t.quote}
            </p>
            <div
              className="mt-6 flex items-center gap-3 border-t pt-5"
              style={{ borderColor: BORDER }}
            >
              <span
                aria-hidden="true"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[14px]"
                style={{
                  backgroundColor: LIME,
                  color: NAVY,
                  fontFamily:
                    "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                  fontWeight: 700,
                }}
              >
                {t.initials}
              </span>
              <div>
                <p
                  className="text-[13.5px] sm:text-[14px]"
                  style={{
                    color: NAVY,
                    fontFamily:
                      "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                    fontWeight: 700,
                  }}
                >
                  {t.role}
                </p>
                <p
                  className="text-[12.5px] sm:text-[13px]"
                  style={{
                    color: MUTED,
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  {t.sector}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p
        className="mt-5 text-[12px] leading-[1.55]"
        style={{
          color: MUTED,
          fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif",
        }}
      >
        Indicative testimonials from anonymised Edstellar BFSI engagements.
        Named voices publish as customers approve disclosure.
      </p>
    </div>
  );
}
