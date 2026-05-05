"use client";

import { useState } from "react";

type FAQ = { q: string; a: string };

const FAQS: FAQ[] = [
  {
    q: "Which automotive segments does Edstellar serve?",
    a: "Edstellar partners with OEMs, Tier 1 and Tier 2 suppliers, EV and battery manufacturers, ADAS and software-defined-vehicle programs, connected-vehicle and telematics teams, aftermarket and dealer networks, automotive cybersecurity functions, and Industry 4.0 plant operations. Capability programs are calibrated to each segment's operating model, regulatory environment, and skill mix.",
  },
  {
    q: "How does Edstellar tailor a learning path for OEM engineering teams?",
    a: "We start with a workforce skill-mapping exercise against future-state automotive roles, then design a role-based learning path blended with hands-on labs against your stack (AUTOSAR, ROS, MATLAB / Simulink, vCAN tools, MES / SCADA platforms). Learning paths are mentor-led, certified, and packaged with pre and post assessments so the impact is measurable.",
  },
  {
    q: "Can you deliver training on-site at our plants and engineering centres?",
    a: "Yes. Edstellar supports on-site delivery at plants, design centres, R&D labs, and innovation hubs, plus virtual and blended formats for distributed teams. A single Edstellar project manager coordinates schedules, languages, venues, lab environments, and training logistics across regions and shifts.",
  },
  {
    q: "Do you support ASPICE, ISO 26262, and ISO / SAE 21434 cohorts?",
    a: "Yes. Edstellar runs structured cohorts for Automotive SPICE, ISO 26262 functional safety, and ISO / SAE 21434 cybersecurity. Cohorts combine instructor-led modules, scenario-based labs, and tabletop exercises so engineers, suppliers, and quality auditors graduate ready to work inside the regulatory and customer obligations the program is designed against.",
  },
  {
    q: "What languages and time zones do your trainers cover?",
    a: "Edstellar delivers in 10 languages, including English, EspaÃ±ol, æ™®é€šè©±, Deutsch, Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©, PortuguÃªs, à¤¹à¤¿à¤‚à¤¦à¥€, FranÃ§ais, æ—¥æœ¬èªž, and Italiano, across 100+ countries. Multi-region cohorts run in matched time zones so global automotive teams progress in parallel rather than waiting on each other.",
  },
  {
    q: "How quickly can a custom automotive cohort start?",
    a: "Most custom automotive cohorts move from advisor call to first session in four to six weeks. Edstellar's learning advisors scope your stack, regulatory regime, and SOC, plant, or program maturity in a 30-minute call and return a custom curriculum proposal within five business days. Expedited rollouts are supported for plant ramp-ups and recall-driven retraining.",
  },
  {
    q: "How do you measure ROI on automotive workforce training?",
    a: "Every Edstellar program closes with documented before and after KPIs that the business can read: engineering cycle time, software defect density, skill readiness, plant safety and quality scores, and dwell time on critical issues. Dashboards are built around the metrics your CTO, COO, and L&D lead already report on, not generic course-completion stats.",
  },
  {
    q: "Can you blend training with managed-talent (contract engineers) for a peak rollout?",
    a: "Yes. Edstellar combines managed training with managed-talent engagements so peak ramp-ups, EV plant launches, and SDV programs can scale headcount and capability together. Contract engineers are onboarded into the same role-based learning path as your permanent staff, so the team operates as one cohort by go-live.",
  },
];

const NAVY = "#1B1D52";
const BORDER = "#E3E6F0";
const BODY = "#374151";
const MUTED = "#6B7280";
const LIME = "#C5E826";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transition: "transform 200ms ease",
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
      }}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function IndustryAutomotiveFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mtk-page-center">
        <div className="mx-auto max-w-3xl">
          <h2
            className="text-[32px] leading-[1.08] sm:text-[40px] lg:text-[46px]"
            style={{
              color: NAVY,
              fontFamily:
                "'Riona Sans Light', Helvetica, Arial, sans-serif",
            }}
          >
            Automotive training{" "}
            <span className="relative inline-block">
              <span className="relative z-10">FAQs</span>
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
            What CTOs, plant heads, HR leaders, and L&D partners ask most often
            when scoping an Edstellar program for their automotive workforce.
          </p>
        </div>

        <ul
          className="mx-auto mt-10 max-w-3xl divide-y rounded-2xl border bg-white"
          style={{ borderColor: BORDER }}
        >
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            const panelId = `auto-faq-panel-${i}`;
            const buttonId = `auto-faq-button-${i}`;
            return (
              <li key={f.q} style={{ borderColor: BORDER }}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-6 px-5 py-5 text-left transition-colors hover:bg-[#F7F8FC] sm:px-6 sm:py-6"
                  >
                    <span
                      className="text-[16px] leading-[1.4] sm:text-[18px]"
                      style={{
                        color: NAVY,
                        fontFamily:
                          "'Riona Sans Regular', Helvetica, Arial, sans-serif",
                      }}
                    >
                      {f.q}
                    </span>
                    <span className="mt-0.5 shrink-0" style={{ color: NAVY }}>
                      <ChevronIcon open={isOpen} />
                    </span>
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 pb-6 pt-0 sm:px-6"
                  >
                    <p
                      className="max-w-3xl text-[14.5px] leading-[1.65] sm:text-[15.5px]"
                      style={{
                        color: BODY,
                        fontFamily:
                          "'Riona Sans Light', Helvetica, Arial, sans-serif",
                      }}
                    >
                      {f.a}
                    </p>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <p
          className="mx-auto mt-8 max-w-3xl text-[13px] sm:text-[14px]"
          style={{
            color: MUTED,
            fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif",
          }}
        >
          Have a question we did not cover?{" "}
          <a href="#contact" className="underline" style={{ color: NAVY }}>
            Talk to our automotive lead
          </a>{" "}
          for a tailored conversation.
        </p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
