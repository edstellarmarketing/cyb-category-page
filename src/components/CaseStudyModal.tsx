"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ArrowRight } from "lucide-react";
import { getCaseStudy } from "@/data/case-studies";
import { FONT_LIGHT, FONT_MEDIUM, FONT_BOLD, FONT_REGULAR, ACCENT, LIME, ICON_MAP } from "@/components/CaseStudySections";

const STAT_COLORS = ["#C5E826", "#818CF8", "#67E8F9", "#F9A8D4", "#86EFAC", "#FCD34D"];

export function CaseStudyModal({ slug, onClose }: { slug: string | null; onClose: () => void }) {
  const data = slug ? getCaseStudy(slug) : null;

  useEffect(() => {
    if (!slug) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [slug, onClose]);

  if (!data) return null;

  const isNewLayout = !!data.intervention;
  const topMetrics = isNewLayout && data.metrics ? data.metrics.slice(1, 3) : [];

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/65 p-4 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Modal — landscape 2-col */}
      <div
        className="relative flex w-full overflow-hidden rounded-2xl bg-white shadow-2xl"
        style={{ maxWidth: 940, maxHeight: "92vh" }}
      >

        {/* ── Left: hero image ─────────────────────────────────────────── */}
        <div className="relative hidden w-[320px] shrink-0 sm:block">
          <Image
            src={data.hero.image}
            alt={data.hero.alt}
            fill
            sizes="320px"
            className="object-cover object-center"
            priority
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(170deg, rgba(0,0,0,0.08) 0%, rgba(11,14,50,0.88) 100%)" }}
          />
          {/* Title pinned to bottom */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-7">
            <span
              className="mb-3 inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.16em]"
              style={{ backgroundColor: "rgba(99,102,241,0.85)", fontFamily: FONT_BOLD, color: "#fff" }}
            >
              Case Study
            </span>
            <h2
              className="text-[22px] leading-[29px]"
              style={{ fontFamily: FONT_LIGHT, color: "#fff", margin: 0 }}
            >
              {data.hero.title}
            </h2>
          </div>
        </div>

        {/* ── Right: compact content ───────────────────────────────────── */}
        <div className="flex flex-1 flex-col">

          {/* Top bar: title (mobile only) + close — always visible */}
          <div className="flex shrink-0 items-start justify-between border-b border-[#F3F4F6] px-6 py-4 sm:px-7">
            <div className="sm:hidden">
              <p style={{ fontFamily: FONT_MEDIUM, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9CA3AF", margin: "0 0 4px" }}>Case Study</p>
              <p style={{ fontFamily: FONT_LIGHT, fontSize: 15, color: "#1B1D52", margin: 0 }}>{data.hero.title}</p>
            </div>
            <div className="hidden sm:block" />
            <button
              onClick={onClose}
              aria-label="Close"
              className="ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E5E7EB] text-[#9CA3AF] transition-colors hover:border-[#6366F1] hover:text-[#6366F1]"
            >
              <X size={14} />
            </button>
          </div>

          {/* Scrollable content — hidden scrollbar so it feels seamless */}
          <div
            className="flex-1 overflow-y-auto px-6 py-5 sm:px-7 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {/* Challenge intro */}
            <p
              className="text-[13px] leading-[1.7]"
              style={{ fontFamily: FONT_LIGHT, color: "#4B5563", margin: 0 }}
            >
              {data.intro.body}
            </p>

            {/* Challenge tags */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {data.challenges.map((c) => {
                const Icon = ICON_MAP[c.icon];
                return (
                  <span
                    key={c.title}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#E9EAEC] px-2.5 py-1"
                    style={{ fontFamily: FONT_MEDIUM, fontSize: 11, color: "#374151" }}
                  >
                    <Icon size={11} strokeWidth={1.8} color={ACCENT} />
                    {c.title}
                  </span>
                );
              })}
            </div>

            {/* Stats strip */}
            {isNewLayout && data.programSpecs && (
              <div className="mt-4 overflow-hidden rounded-lg">
                <div
                  className="grid"
                  style={{
                    background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)",
                    gridTemplateColumns: `repeat(${data.programSpecs.length}, 1fr)`,
                  }}
                >
                  {data.programSpecs.map((spec, i) => (
                    <div
                      key={spec.label}
                      className="flex flex-col items-center px-1 py-3 text-center"
                      style={{ borderRight: i < data.programSpecs!.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none" }}
                    >
                      <p style={{ fontFamily: FONT_BOLD, fontSize: 17, color: STAT_COLORS[i % STAT_COLORS.length], margin: "0 0 3px", lineHeight: 1 }}>
                        {spec.value}
                      </p>
                      <p style={{ fontFamily: FONT_MEDIUM, fontSize: 9, color: "rgba(255,255,255,0.55)", margin: 0, lineHeight: "1.3" }}>
                        {spec.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div style={{ height: 2, background: `linear-gradient(90deg, ${LIME}, #818CF8, #67E8F9)` }} />
              </div>
            )}

            {/* Top 2 metrics */}
            {topMetrics.length > 0 && (
              <div className="mt-4 grid grid-cols-2 gap-2">
                {topMetrics.map((m, i) => (
                  <div
                    key={m.label}
                    className="flex flex-col rounded-xl px-4 py-3"
                    style={{ backgroundColor: i === 0 ? "#0c0c0c" : "#EEF2FF" }}
                  >
                    <p style={{ fontFamily: FONT_BOLD, fontSize: 26, color: i === 0 ? LIME : ACCENT, margin: "0 0 2px", lineHeight: 1 }}>
                      {m.stat}
                    </p>
                    <p style={{ fontFamily: FONT_MEDIUM, fontSize: 12, color: i === 0 ? "#fff" : "#1B1D52", margin: "0 0 2px", lineHeight: "1.3" }}>
                      {m.label}
                    </p>
                    <p style={{ fontFamily: FONT_LIGHT, fontSize: 11, color: i === 0 ? "rgba(255,255,255,0.5)" : "#6B7280", margin: 0 }}>
                      {m.sublabel}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Quote */}
            {data.quote && (
              <div className="mt-4 border-l-[3px] pl-4" style={{ borderColor: ACCENT }}>
                <p
                  className="text-[12px] leading-[1.65]"
                  style={{ fontFamily: FONT_LIGHT, color: "#374151", margin: "0 0 5px", fontStyle: "italic" }}
                >
                  &ldquo;{data.quote.body}&rdquo;
                </p>
                <p style={{ fontFamily: FONT_MEDIUM, fontSize: 11, color: ACCENT, margin: 0 }}>
                  {data.quote.author}
                  <span style={{ fontFamily: FONT_REGULAR, color: "#9CA3AF" }}>{", "}{data.quote.company}</span>
                </p>
              </div>
            )}
          </div>

          {/* CTA footer — always pinned to bottom */}
          <div
            className="flex shrink-0 items-center justify-between gap-3 border-t border-[#E5E7EB] px-6 py-4 sm:px-7"
            style={{ backgroundColor: "#F9FAFB" }}
          >
            <p style={{ fontFamily: FONT_LIGHT, fontSize: 12, color: "#9CA3AF", margin: 0 }}>
              Full methodology, training design &amp; outcomes inside.
            </p>
            <a
              href={`/case-studies/${slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-[11px] uppercase tracking-[0.08em] text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#1B1D52", fontFamily: FONT_BOLD, textDecoration: "none" }}
            >
              View Full Case Study <ArrowRight size={12} />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
