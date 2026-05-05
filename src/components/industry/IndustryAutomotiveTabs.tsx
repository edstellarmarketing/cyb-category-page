"use client";

import Image from "next/image";
import { useState } from "react";

type Tab = {
  id: string;
  label: string;
  miniHeading: string;
  context: string;
  image: string;
  imageAlt: string;
  bullets: { title: string; body: string }[];
};

const TABS: Tab[] = [
  {
    id: "train",
    label: "Train your automotive workforce",
    miniHeading:
      "Live, instructor-led upskilling for engineering and plant teams.",
    context:
      "Build deep, role-specific capability across automotive product, manufacturing, and aftermarket teams with certified instructors, hands-on labs, and 1:1 coaching tuned to your stack.",
    image: "/images/cyber/hero-team-training.jpg",
    imageAlt:
      "Edstellar instructor leading a hands-on automotive engineering session with a cohort of engineers",
    bullets: [
      {
        title: "Instructor-led Training.",
        body: "Live cohorts on AUTOSAR, ASPICE, ISO 26262, EV battery systems, and Industry 4.0 platforms, delivered virtually, on-site, or hybrid in any language.",
      },
      {
        title: "Coaching.",
        body: "1:1 and small-group coaching for senior engineers, technical leads, and L&D managers driving the SDV and electrification transition.",
      },
    ],
  },
  {
    id: "operate",
    label: "Run your learning operations",
    miniHeading:
      "Single point of accountability for global automotive training operations.",
    context:
      "Consolidate fragmented training spend across plants, design centres, and dealer networks. Edstellar runs the operations end to end, so your L&D team focuses on outcomes, not vendor administration.",
    image: "/images/cyber/customers-enterprise.jpg",
    imageAlt:
      "L&D operations manager reviewing a global automotive training portfolio dashboard with two function leads",
    bullets: [
      {
        title: "Managed Training.",
        body: "End-to-end ownership of training delivery, scheduling, logistics, attendance, completion tracking, and reporting across multiple geographies and shifts.",
      },
      {
        title: "Training Vendor Sourcing and Management.",
        body: "Curate, contract, and govern external vendors for niche automotive needs (OEM-specific tooling, regulatory updates, supplier-mandated compliance requirements) under one master agreement.",
      },
    ],
  },
  {
    id: "strategy",
    label: "Build your L&D strategy and operating model",
    miniHeading:
      "Workforce strategy that keeps pace with software-defined vehicles and electrification.",
    context:
      "Edstellar's consulting practice helps automotive HR and L&D leaders reshape capability strategy, role architecture, and learning design as the industry pivots to SDV, EV, autonomy, and connected mobility.",
    image: "/images/cyber/hero-governance.jpg",
    imageAlt:
      "Workshop scene with sticky notes and an L&D head reviewing automotive workforce strategy with an HR business partner",
    bullets: [
      {
        title: "L&D Consulting.",
        body: "Diagnose current-state capability, build the future-state workforce blueprint, and prioritise interventions against business outcomes (time-to-market, defect density, recall risk).",
      },
      {
        title: "Learning Strategy and Design for L&Ds.",
        body: "Design role-based learning paths, governance, and measurement frameworks aligned to ASPICE, ISO 26262, and ISO / SAE 21434 obligations.",
      },
      {
        title: "Organizational Development Services.",
        body: "Shape org structure, role definitions, and change management for SDV transitions, EV plant ramp-ups, and post-merger integrations across the automotive group.",
      },
    ],
  },
  {
    id: "assess",
    label: "Assess and benchmark your talent",
    miniHeading: "Know exactly where your automotive talent stands today.",
    context:
      "Make capability decisions with data, not assumptions. Pre and post assessments quantify skill gaps and program impact across functional, technical, and behavioural domains.",
    image: "/images/cyber/more-skills-matrix.jpg",
    imageAlt:
      "Automotive engineer taking a structured technical assessment on a laptop in a quiet room",
    bullets: [
      {
        title: "Talent Assessments.",
        body: "Role-aligned assessments for automotive engineers, plant supervisors, ADAS validators, software developers, and quality auditors, with normative benchmarks against industry peers.",
      },
      {
        title: "Use cases.",
        body: "New-hire screening for OEM and Tier 1 hiring drives, baseline diagnostics for SDV and ISO 26262 cohorts, succession planning for technical leadership pipelines.",
      },
    ],
  },
  {
    id: "engage",
    label: "Power learning with technology and engagement",
    miniHeading: "Learning that lives where the work happens.",
    context:
      "Move learning out of the LMS silo and into the moment of need. Performance-support, mobile job aids, and engagement tooling keep automotive teams sharp on the line, in the lab, and at the dealership.",
    image: "/images/cyber/more-virtual-class.jpg",
    imageAlt:
      "Plant operator using a tablet on the shop floor to pull up an automotive job aid",
    bullets: [
      {
        title: "Learning Technology.",
        body: "Modern LXP and LMS implementations, content authoring, integrations into HRIS and quality systems, and analytics that connect learning activity to engineering and plant KPIs.",
      },
      {
        title: "Employee Engagement and Performance Support.",
        body: "Always-on job aids, micro-learning, AI nudges, and community spaces that keep recall, safety, and process knowledge live across plants, dealerships, and global engineering centres.",
      },
    ],
  },
];

const NAVY = "#1B1D52";
const NAVY_BG_5 = "rgba(27, 29, 82, 0.05)";
const LIME = "#C5E826";
const BORDER = "#E3E6F0";
const BODY = "#374151";
const MUTED = "#6B7280";

export function IndustryAutomotiveTabs() {
  const [activeId, setActiveId] = useState(TABS[0].id);
  const active = TABS.find((t) => t.id === activeId) ?? TABS[0];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mtk-page-center">
        <div className="max-w-3xl">
          <h2
            className="text-[32px] leading-[1.08] sm:text-[40px] lg:text-[46px]"
            style={{
              color: NAVY,
              fontFamily:
                "'Riona Sans Light', Helvetica, Arial, sans-serif",
            }}
          >
            Explore how Edstellar can help your automotive business{" "}
            <span className="relative inline-block">
              <span className="relative z-10">run better</span>
              <span
                aria-hidden="true"
                className="absolute bottom-1 left-0 right-0 -z-0 h-2.5 sm:h-3"
                style={{ backgroundColor: LIME, opacity: 0.55 }}
              />
            </span>
            .
          </h2>
          <p
            className="mt-5 text-[16px] leading-[1.6] sm:text-[18px]"
            style={{
              color: BODY,
              fontFamily:
                "'Riona Sans Light', Helvetica, Arial, sans-serif",
            }}
          >
            Ten Edstellar services mapped to automotive workforce needs, so a
            single partner stands behind your training delivery, learning
            operations, capability strategy, talent benchmarking, and
            on-the-job performance support.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Edstellar services for automotive"
          className="mt-10 flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible"
        >
          {TABS.map((t) => {
            const selected = t.id === activeId;
            return (
              <button
                key={t.id}
                role="tab"
                type="button"
                id={`tab-${t.id}`}
                aria-selected={selected}
                aria-controls={`panel-${t.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveId(t.id)}
                className="snap-start whitespace-nowrap rounded-full border px-4 py-2 text-[12.5px] uppercase tracking-[0.1em] transition-colors sm:text-[13px] md:whitespace-normal md:text-left"
                style={{
                  borderColor: selected ? NAVY : BORDER,
                  backgroundColor: selected ? NAVY : "#FFFFFF",
                  color: selected ? "#FFFFFF" : NAVY,
                  fontFamily:
                    "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                  fontWeight: 600,
                }}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          className="mt-8 grid items-stretch gap-8 rounded-2xl border lg:grid-cols-12 lg:gap-0"
          style={{ borderColor: BORDER }}
        >
          <div
            className="rounded-2xl p-6 sm:p-8 lg:col-span-7 lg:rounded-r-none lg:p-10"
            style={{ backgroundColor: NAVY_BG_5 }}
          >
            <p
              className="text-[18px] leading-[1.4] sm:text-[20px]"
              style={{
                color: NAVY,
                fontFamily:
                  "'Riona Sans Regular', Helvetica, Arial, sans-serif",
              }}
            >
              {active.miniHeading}
            </p>
            <p
              className="mt-3 text-[14.5px] leading-[1.6] sm:text-[15.5px]"
              style={{
                color: BODY,
                fontFamily:
                  "'Riona Sans Light', Helvetica, Arial, sans-serif",
              }}
            >
              {active.context}
            </p>
            <ul className="mt-6 space-y-4">
              {active.bullets.map((b) => (
                <li key={b.title} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: LIME, color: NAVY }}
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p
                    className="text-[14px] leading-[1.55] sm:text-[15px]"
                    style={{
                      color: BODY,
                      fontFamily:
                        "'Riona Sans Light', Helvetica, Arial, sans-serif",
                    }}
                  >
                    <strong
                      style={{
                        color: NAVY,
                        fontFamily:
                          "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      {b.title}
                    </strong>{" "}
                    {b.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-[260px] overflow-hidden rounded-2xl lg:col-span-5 lg:rounded-l-none">
            <Image
              key={active.image}
              src={active.image}
              alt={active.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
              style={{ animation: "ttp-fade 350ms ease-out" }}
            />
          </div>
        </div>

        <style>{`
          @keyframes ttp-fade {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}</style>
      </div>
    </section>
  );
}
