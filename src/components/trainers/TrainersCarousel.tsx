"use client";

import { useRef, useState } from "react";

type Trainer = {
  name: string;
  initials: string;
  color: string;
  specialty: string;
  rating: number;
  reviews: string;
  bio: string;
  tags: string[];
  badge?: string;
};

const TRAINERS: Trainer[] = [
  {
    name: "Rajiv Sharma", initials: "RS", color: "#6366F1",
    specialty: "Cybersecurity & Ethical Hacking",
    rating: 4.9, reviews: "3,210",
    bio: "Former CISO at a Fortune 500 bank. CISSP, CEH, OSCP certified. Designed red-team programmes for 60+ enterprise security teams across APAC.",
    tags: ["CISSP", "CEH", "Pen Testing"],
    badge: "Top Rated",
  },
  {
    name: "Anjali Mehta", initials: "AM", color: "#7c3aed",
    specialty: "Cloud Architecture & AWS",
    rating: 4.8, reviews: "2,785",
    bio: "AWS Solutions Architect Professional & Google Cloud Architect. Led cloud migration for three unicorn startups. Expert in multi-cloud, FinOps, DevSecOps.",
    tags: ["AWS", "GCP", "Kubernetes"],
    badge: "Most Requested",
  },
  {
    name: "James O'Brien", initials: "JO", color: "#0d9488",
    specialty: "Leadership & Executive Presence",
    rating: 4.7, reviews: "1,940",
    bio: "Executive coach with 20 years coaching C-suite leaders at FTSE 100 and S&P 500 companies. Author of 'The Deliberate Leader'. ICF-certified.",
    tags: ["ICF", "Executive Coaching", "Communication"],
  },
  {
    name: "Priya Krishnamurthy", initials: "PK", color: "#b45309",
    specialty: "Data Science & AI/ML",
    rating: 4.8, reviews: "4,120",
    bio: "Data science lead at a global analytics firm. Specialises in MLOps, predictive modelling, and building data teams from scratch.",
    tags: ["Python", "ML Ops", "Deep Learning"],
    badge: "Top Rated",
  },
  {
    name: "Marco Delgado", initials: "MD", color: "#0369a1",
    specialty: "Agile, Scrum & PMP",
    rating: 4.7, reviews: "2,355",
    bio: "PMI-certified PMP and SAFe Program Consultant. Trained 5,000+ professionals across Toyota, Siemens, and IBM on Agile transformation.",
    tags: ["PMP", "SAFe", "Scrum"],
  },
  {
    name: "Fatima Al-Rashidi", initials: "FA", color: "#be185d",
    specialty: "ISO 27001 & GRC",
    rating: 4.9, reviews: "987",
    bio: "Lead auditor and GRC consultant with 15 years across banking, oil & gas, and public sector. ISO 27001 Lead Auditor, CISM, CRISC certified.",
    tags: ["ISO 27001", "CISM", "CRISC"],
    badge: "Top Rated",
  },
  {
    name: "Hiroshi Tanaka", initials: "HT", color: "#15803d",
    specialty: "DevOps & Kubernetes",
    rating: 4.8, reviews: "1,650",
    bio: "Principal DevOps engineer turned trainer. CKA, CKS, and Terraform-certified. Container orchestration workshops for Sony, Fujitsu, Rakuten.",
    tags: ["Kubernetes", "Terraform", "CI/CD"],
  },
  {
    name: "Sarah Okafor", initials: "SO", color: "#c2410c",
    specialty: "Communication & Soft Skills",
    rating: 4.6, reviews: "3,890",
    bio: "Organisational psychologist and ICF-certified coach. Specialises in cross-cultural communication, negotiation, and high-performance team dynamics.",
    tags: ["Negotiation", "EQ", "Team Dynamics"],
  },
];

function StarFill({ filled }: { filled: boolean }) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill={filled ? "#ef6b51" : "#e4e5e6"} className="flex-shrink-0">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export function TrainersCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const CARD_W = 304;
  const GAP = 20;
  const VISIBLE = 4;
  const maxIdx = TRAINERS.length - VISIBLE;

  function scrollTo(idx: number) {
    const clamped = Math.max(0, Math.min(idx, maxIdx));
    setActiveIdx(clamped);
    trackRef.current?.scrollTo({ left: clamped * (CARD_W + GAP), behavior: "smooth" });
  }

  return (
    <section id="trainers-list" className="bg-[#fbfbfb] py-20 lg:py-28">
      <div className="eds-page-center">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="text-[#6366F1] font-[family:var(--font-medium)] text-xs tracking-widest uppercase mb-3">Featured Trainers</p>
            <h2 className="font-[family:var(--font-light)] text-[#0c0c0c] text-3xl lg:text-4xl leading-tight mb-3">
              Our trainers are leading subject matter experts
            </h2>
            <p className="text-[#666] text-base">
              Practitioners who teach from experience — not textbooks.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button onClick={() => scrollTo(activeIdx - 1)} disabled={activeIdx === 0}
              aria-label="Previous" className="w-10 h-10 flex items-center justify-center rounded-full border border-[#e4e5e6] hover:border-[#6366F1] hover:bg-[#6366F1] hover:text-white text-[#666] transition-all duration-200 disabled:opacity-25 disabled:pointer-events-none">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button onClick={() => scrollTo(activeIdx + 1)} disabled={activeIdx >= maxIdx}
              aria-label="Next" className="w-10 h-10 flex items-center justify-center rounded-full border border-[#e4e5e6] hover:border-[#6366F1] hover:bg-[#6366F1] hover:text-white text-[#666] transition-all duration-200 disabled:opacity-25 disabled:pointer-events-none">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
        </div>

        {/* Track */}
        <div ref={trackRef}
          className="flex gap-5 overflow-x-auto pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {TRAINERS.map((t) => (
            <div key={t.name}
              className="flex-shrink-0 w-72 lg:w-[290px] bg-white border border-[#e4e5e6] rounded-2xl overflow-hidden flex flex-col hover:shadow-xl hover:shadow-black/6 hover:-translate-y-1 transition-all duration-300">

              {/* Avatar band */}
              <div className="relative h-44 flex items-end p-5" style={{ background: `linear-gradient(135deg, ${t.color}22 0%, ${t.color}08 100%)` }}>
                <div aria-hidden className="absolute inset-0 opacity-[0.04]"
                  style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
                <div className="absolute top-5 right-5 w-16 h-16 rounded-full flex items-center justify-center text-white font-[family:var(--font-bold)] text-xl"
                  style={{ background: t.color }}>
                  {t.initials}
                </div>
                {t.badge && (
                  <span className="relative z-10 text-[10px] font-[family:var(--font-medium)] px-2.5 py-1 rounded-full text-white"
                    style={{ background: t.color }}>
                    {t.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1 gap-3">
                <div>
                  <h3 className="font-[family:var(--font-medium)] text-[#0c0c0c] text-base leading-tight mb-0.5">{t.name}</h3>
                  <p className="text-xs font-[family:var(--font-medium)]" style={{ color: t.color }}>{t.specialty}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1.5">
                  <span className="font-[family:var(--font-bold)] text-[#0c0c0c] text-sm">{t.rating}</span>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((i) => <StarFill key={i} filled={i <= Math.round(t.rating)} />)}
                  </div>
                  <span className="text-[#999] text-xs">({t.reviews})</span>
                </div>

                <p className="text-[#666] text-xs leading-relaxed flex-1">{t.bio}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {t.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-[family:var(--font-medium)] px-2 py-0.5 rounded-md bg-[#f5f5f5] text-[#555]">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-1.5 mt-8">
          {Array.from({ length: maxIdx + 1 }).map((_, i) => (
            <button key={i} onClick={() => scrollTo(i)} aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIdx ? "w-6 bg-[#6366F1]" : "w-1.5 bg-[#d0d0d0]"}`} />
          ))}
        </div>

      </div>
    </section>
  );
}
