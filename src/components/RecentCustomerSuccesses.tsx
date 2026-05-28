"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { CASE_STUDIES } from "@/data/case-studies";
import { CaseStudyModal } from "@/components/CaseStudyModal";

type CaseStudy = {
  title: string;
  description: string;
  image: string;
  alt: string;
  modalSlug: string;
};

const CASES: CaseStudy[] = CASE_STUDIES.map((c) => ({
  title: c.cardTitle,
  description: c.cardDescription,
  image: c.cardImage,
  alt: c.hero.alt,
  modalSlug: "fmcg-workforce-cyber-awareness",
}));

// Page theme accents (match the site's indigo palette)
const ACCENT = "#6366F1";
const ACCENT_HOVER = "#4F46E5";
const TRANSITION_MS = 500;
const AUTOPLAY_MS = 2000;

function useSlidesPerView() {
  const [spv, setSpv] = useState(3);
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 768) setSpv(1);
      else if (w < 992) setSpv(2);
      else setSpv(3);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);
  return spv;
}

export function RecentCustomerSuccesses() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const slidesPerView = useSlidesPerView();
  const showArrows = slidesPerView === 3;
  const showDots = slidesPerView !== 3;

  const total = CASES.length;
  // Render real slides + clone of the first `slidesPerView` at the end for seamless loop.
  const rendered = useMemo(
    () => [...CASES, ...CASES.slice(0, slidesPerView)],
    [slidesPerView],
  );

  const [index, setIndex] = useState(0); // 0..total-1 (logical), but we let it run to total then snap
  const [withTransition, setWithTransition] = useState(true);
  const [paused, setPaused] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  const next = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setWithTransition(true);
    setIndex((i) => i + 1);
  }, []);

  const prev = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    if (index === 0) {
      // Jump to clone-equivalent end position without transition, then animate to total-1
      setWithTransition(false);
      setIndex(total);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setWithTransition(true);
          setIndex(total - 1);
        });
      });
    } else {
      setWithTransition(true);
      setIndex((i) => i - 1);
    }
  }, [index, total]);

  // Snap back from clone to real start after we've animated past total - 1
  const onTransitionEnd = useCallback(() => {
    isAnimating.current = false;
    if (index >= total) {
      setWithTransition(false);
      setIndex(0);
    }
  }, [index, total]);

  // After a non-transition snap, re-enable transitions for next user interaction
  useLayoutEffect(() => {
    if (!withTransition) {
      const t = requestAnimationFrame(() => {
        requestAnimationFrame(() => setWithTransition(true));
      });
      return () => cancelAnimationFrame(t);
    }
  }, [withTransition, index]);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      if (!isAnimating.current) next();
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, next]);

  // Active dot index based on real index modulo total
  const activeDot = ((index % total) + total) % total;

  // Each slide is (100/rendered.length)% of the track's own width.
  // translate3d(%) is relative to the transformed element, so multiply by index.
  const slideWidthPctOfTrack = 100 / rendered.length;
  const trackTranslatePct = -(index * slideWidthPctOfTrack);

  return (
    <section
      className="w-full"
      style={{ backgroundColor: "#F8F4E9", padding: "90px 0", fontFamily: '"Riona Sans Light", Helvetica, Arial, sans-serif' }}
    >
      <div className="mx-auto w-full" style={{ maxWidth: 1434 }}>
        {/* Title */}
        <div style={{ padding: "0 15px 44px" }}>
          <h2
            className="text-[36px] leading-[1.05] md:text-[42px] lg:text-[48px]"
            style={{
              fontFamily: '"Riona Sans Regular", Helvetica, Arial, sans-serif',
              fontWeight: 500,
              color: "#000",
              margin: "0 0 16px",
            }}
          >
            Recent Customer Successes
          </h2>
        </div>

        {/* Slider root */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Prev arrow */}
          {showArrows && (
            <button
              type="button"
              aria-label="Previous slide"
              onClick={prev}
              className="eds-rcs-arrow absolute z-10 hidden lg:flex items-center justify-center cursor-pointer transition-colors duration-150 ease-linear"
              style={{
                top: "50%",
                left: "-60px",
                width: 35,
                height: 35,
                marginTop: -10,
                borderRadius: 30,
                backgroundColor: ACCENT,
                color: "#fff",
                border: 0,
              }}
            >
              <ChevronLeft size={16} strokeWidth={3} />
            </button>
          )}

          {/* Viewport (overflow clip) */}
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex"
              onTransitionEnd={onTransitionEnd}
              style={{
                transform: `translate3d(${trackTranslatePct}%, 0, 0)`,
                transition: withTransition ? `transform ${TRANSITION_MS}ms ease` : "none",
                width: `${(rendered.length / slidesPerView) * 100}%`,
              }}
            >
              {rendered.map((c, i) => (
                <div
                  key={`${c.modalSlug}-${c.title}-${i}`}
                  className="shrink-0"
                  style={{
                    width: `${100 / rendered.length}%`,
                    padding: "0 15px",
                  }}
                >
                  <a
                    href={`/case-studies/${c.modalSlug}`}
                    onClick={(e) => { e.preventDefault(); setActiveSlug(c.modalSlug); }}
                    className="group flex w-full flex-col h-full cursor-pointer text-left no-underline"
                    style={{ color: ACCENT }}
                  >
                    {/* Image */}
                    <div className="relative w-full" style={{ aspectRatio: "448 / 244" }}>
                      <Image
                        src={c.image}
                        alt={c.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        style={{
                          borderTopLeftRadius: 25,
                          borderTopRightRadius: 25,
                          border: "1px solid rgba(0,0,0,0.1)",
                          borderBottom: "none",
                        }}
                      />
                    </div>
                    {/* Content */}
                    <div
                      className="flex flex-1 flex-col"
                      style={{
                        background: "#fff",
                        padding: "24px 20px",
                        borderBottomLeftRadius: 25,
                        borderBottomRightRadius: 25,
                        border: "1px solid rgba(0,0,0,0.1)",
                        borderTop: "none",
                      }}
                    >
                      <h3
                        className="flex-1"
                        style={{
                          fontFamily: '"Riona Sans Medium", Helvetica, Arial, sans-serif',
                          fontSize: 20,
                          lineHeight: "28px",
                          fontWeight: 500,
                          color: "#000",
                          margin: "0 0 15px",
                        }}
                      >
                        {c.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: '"Riona Sans Light", Helvetica, Arial, sans-serif',
                          fontSize: 15,
                          lineHeight: "21.75px",
                          fontWeight: 200,
                          color: "#000",
                          margin: 0,
                        }}
                      >
                        {c.description}{" "}
                        <span className="inline-block" style={{ color: ACCENT }}>
                          <ChevronRight
                            size={12}
                            strokeWidth={3}
                            className="relative inline-block transition-transform duration-200 ease-linear group-hover:translate-x-[5px]"
                            style={{ top: 1 }}
                          />
                        </span>
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Next arrow */}
          {showArrows && (
            <button
              type="button"
              aria-label="Next slide"
              onClick={next}
              className="eds-rcs-arrow absolute z-10 hidden lg:flex items-center justify-center cursor-pointer transition-colors duration-150 ease-linear"
              style={{
                top: "50%",
                right: "-60px",
                width: 35,
                height: 35,
                marginTop: -10,
                borderRadius: 30,
                backgroundColor: ACCENT,
                color: "#fff",
                border: 0,
              }}
            >
              <ChevronRight size={16} strokeWidth={3} />
            </button>
          )}

          {/* Dots */}
          {showDots && (
            <ul className="mt-8 flex items-center justify-center gap-[6px] list-none p-0">
              {Array.from({ length: total }).map((_, i) => (
                <li key={i}>
                  <button
                    type="button"
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => {
                      isAnimating.current = true;
                      setWithTransition(true);
                      setIndex(i);
                    }}
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: 30,
                      border: 0,
                      padding: 0,
                      cursor: "pointer",
                      backgroundColor: activeDot === i ? ACCENT : "#D9D9D9",
                      transition: "background-color 0.2s ease",
                    }}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <CaseStudyModal slug={activeSlug} onClose={() => setActiveSlug(null)} />
    </section>
  );
}
