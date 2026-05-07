"use client";

import { useState } from "react";

type FAQ = {
  q: string;
  a: string;
};

const FAQS: FAQ[] = [
  {
    q: "What is included in Edstellar's SOC analyst learning path for enterprise teams?",
    a: "The SOC analyst learning path is a structured 26-week curriculum covering foundations, SIEM and log analysis, threat detection and hunting, incident response, and advanced SOC operations. It is delivered as a tiered SOC analyst learning path spanning L1 triage to L3 hunting, with hands-on labs, training milestones and a cohort scoreboard the security leadership can review.",
  },
  {
    q: "Is this offered as an instructor-led SOC analyst learning path, or only on-demand?",
    a: "It is offered as an instructor-led SOC analyst learning path by default, with three delivery modes: live virtual SOC analyst learning path, on-site SOC analyst learning path, and a blended SOC analyst learning path that combines instructor-led sessions with self-paced labs. All formats are mentor-led; on-demand-only delivery is intentionally not part of this engagement.",
  },
  {
    q: "Can the curriculum be tailored to our SIEM stack and industry?",
    a: "Yes. We deliver a customized instructor-led SOC analyst learning path mapped to your SIEM (Splunk, Sentinel, QRadar, Elastic), your EDR / XDR stack and your sector. The result is an industry-aligned SOC analyst learning path for BFSI, healthcare, SaaS, manufacturing or public-sector teams, with scenarios, datasets and playbooks drawn from your regulatory regime.",
  },
  {
    q: "How does the SOC analyst progression path map to L1, L2 and L3 roles?",
    a: "Each stage of the SOC analyst progression path maps to a defined SOC role: Stages 1-2 prepare L1 triage analysts, Stage 3 builds L2 detection and hunting capability, and Stages 4-5 take analysts into L3 incident response, detection engineering and lead-operator readiness, making it a true role-based SOC analyst learning path rather than a generic catalogue of courses.",
  },
  {
    q: "Is this a SOC analyst upskilling path or a SOC analyst reskilling path?",
    a: "It works as both. As a SOC analyst upskilling path, it lifts in-seat analysts from L1 to L2/L3 capability against MITRE ATT&CK and modern detection engineering. As a SOC analyst reskilling path, it transitions IT, infrastructure and NOC staff into SOC roles within a single cohort. Pre and post assessments confirm the right starting stage for each analyst.",
  },
  {
    q: "How do you measure outcomes from the SOC analyst capability path?",
    a: "Every cohort of the SOC analyst capability path closes with documented before/after KPIs covering detection coverage, MTTD, MTTC, skill improvement rate and NICE Framework role coverage. Combined with a 12-month SOC analyst maturity path, this gives security leadership a board-ready view of the SOC analyst competency path the team has actually completed, not just attended.",
  },
  {
    q: "Do you support a cohort-based SOC analyst learning path across multiple locations?",
    a: "Yes. We run a cohort-based SOC analyst learning path for distributed enterprise teams, including multi-location rollouts where one corporate SOC analyst learning path is delivered consistently across regional SOCs. We coordinate time zones, on-site venues, lab environments and training logistics centrally so the SOC team learning path stays standardised across geographies.",
  },
  {
    q: "Who is this SOC analyst employee learning path designed for inside the buying organisation?",
    a: "This SOC analyst employee learning path is designed for enterprise decision-makers (CISOs, SOC heads, security operations leaders, and L&D / HR partners) who need to standardise blue-team skills across their teams. It is not an individual self-enrolment offering. The advisor call scopes a tailored SOC analyst learning path and SOC analyst readiness path mapped to your team's current SOC maturity.",
  },
];

const NAVY = "#1B1D52";
const BORDER = "#E3E6F0";
const BODY = "#374151";
const MUTED = "#6B7280";

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

export function SocAnalystLearningPathFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="eds-page-center">
        <div className="max-w-3xl">
          <h2
            className="text-[32px] leading-[1.08] sm:text-[40px] lg:text-[46px]"
            style={{
              color: NAVY,
              fontFamily:
                "'Riona Sans Light', Helvetica, Arial, sans-serif",
            }}
          >
            Frequently asked questions about the SOC analyst learning path
          </h2>
          <p
            className="mt-5 text-[16px] leading-[1.6] sm:text-[18px]"
            style={{
              color: BODY,
              fontFamily:
                "'Riona Sans Light', Helvetica, Arial, sans-serif",
            }}
          >
            What enterprise security leaders, CISOs and L&amp;D partners ask
            most often when scoping the program for their teams.
          </p>
        </div>

        <ul className="mt-10 divide-y rounded-2xl border bg-white" style={{ borderColor: BORDER }}>
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
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
                    <span
                      className="mt-0.5 shrink-0"
                      style={{ color: NAVY }}
                    >
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
          className="mt-8 text-[13px] sm:text-[14px]"
          style={{
            color: MUTED,
            fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif",
          }}
        >
          Have a question we did not cover?{" "}
          <a href="#contact" className="underline" style={{ color: NAVY }}>
            Speak with an Edstellar SOC advisor
          </a>{" "}
          to scope a tailored SOC analyst learning path for your team.
        </p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
