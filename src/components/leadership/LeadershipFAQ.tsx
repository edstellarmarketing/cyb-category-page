"use client";
import { useState } from "react";

type FAQ = {
  q: string;
  a: string;
};

const FAQS: FAQ[] = [
  {
    q: "Who should attend Edstellar's leadership training programs?",
    a: "Programs suit first-time and frontline managers, team leads and supervisors, mid-level managers, senior managers and directors, and VPs and C-suite executives, plus high-potential and succession candidates. L&D teams map cohorts by tier to upskill or reskill leaders.",
  },
  {
    q: "How are Edstellar's enterprise leadership training programs delivered?",
    a: "Every program is delivered instructor-led and live, as a closed cohort for your team. We deliver on-site as ILT or virtually as VILT, run by a certified facilitator. There are no self-paced or recorded-only modules. You choose the format, location, language and schedule.",
  },
  {
    q: "Can the leadership training program be customized for our organization?",
    a: "Yes. Each program is designed around your competency model, your manager tiers and your business goals, never an off-the-shelf syllabus. Every engagement begins with a discovery call and a training-needs analysis to map capability gaps before a facilitator is shortlisted.",
  },
  {
    q: "How many leaders can attend a group training cohort?",
    a: "Edstellar runs cohorts from 5 trainees for focused teams up to enterprise rollouts of 800 or more. For large organizations, parallel cohorts run across multiple locations at once. Group size does not dilute quality, because every session is instructor-led and live, never self-paced.",
  },
  {
    q: "What is the difference between ILT and VILT for leadership training?",
    a: "ILT, or Instructor-Led Training, is on-site, in-person delivery with a facilitator at your premises. VILT, or Virtual Instructor-Led Training, is the live online equivalent in real time. Both are practice-based with simulations and role-plays. The choice is location and logistics, not quality.",
  },
  {
    q: "How does Edstellar vet and select its leadership facilitators?",
    a: "Every facilitator in Edstellar's 1,500+ network passes multi-stage vetting: a capability assessment, a live delivery evaluation and ongoing client feedback. Facilitators are matched by domain and tier expertise. You can request a trial session with your leaders before committing.",
  },
  {
    q: "How is the effectiveness of the leadership training measured?",
    a: "Every cohort runs pre and post 360 assessments to establish a measurable capability delta. Results are shared in a post-program delivery summary and mapped to people KPIs such as engagement, retention and manager-effectiveness scores your CHRO can take to the board.",
  },
  {
    q: "Which industries does Edstellar deliver leadership training for?",
    a: "Edstellar delivers leadership training across banking, insurance, healthcare, manufacturing, retail, energy, technology and telecoms in 100+ countries. Each program is adapted to its sector's leadership context and operating model, so the development reflects how your leaders actually work.",
  },
  {
    q: "How do we select the right leadership corporate training provider?",
    a: "Look for instructor-led delivery, real customization to your competency model, vetted facilitators and measurable outcomes. Key criteria are practitioner facilitators, programs built around your manager tiers and a trial session with your own leaders before you commit.",
  },
  {
    q: "Why is group training more effective for leaders than individual courses?",
    a: "Group training builds a shared organizational context and a common leadership language across the cohort, with peer learning individual courses cannot match. Cohort-based development delivers measurable team-level outcomes that isolated individual licenses simply do not produce.",
  },
];

const FAQ_CSS = `
.cyfaq-item {
  border-bottom: 2px solid #1B1D52;
  transition: border-color 0.2s;
}
.cyfaq-item.open {
  border-bottom-color: #6366F1;
}
.cyfaq-toggle {
  transition: background 0.25s, border-color 0.25s, color 0.25s, transform 0.3s;
}
.cyfaq-item.open .cyfaq-toggle {
  background: #6366F1;
  border-color: #6366F1;
  color: #fff;
  transform: rotate(45deg);
}
.cyfaq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1), padding 0.3s;
  padding: 0;
}
.cyfaq-item.open .cyfaq-answer {
  max-height: 400px;
  padding: 0 0 24px 0;
}
`;

export function LeadershipFAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section className="bg-[#F5F3FF] py-16 md:py-20">
      <style dangerouslySetInnerHTML={{ __html: FAQ_CSS }} />
      <div className="eds-page-center">

        {/* Heading */}
        <h2
          className="text-[36px] leading-[1.05] text-[#1B1D52] sm:text-[42px] lg:text-[48px]"
          style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
        >
          Frequently Asked Questions
        </h2>

        {/* Accordion */}
        <div className="mt-12" style={{ borderTop: "2px solid #1B1D52" }}>
          {FAQS.map((faq, i) => {
            const isOpen = openItems.has(i);
            return (
              <div key={i} className={`cyfaq-item${isOpen ? " open" : ""}`}>
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 py-[22px] text-left"
                >
                  <span
                    className="flex-1 text-[16px] leading-[1.4] text-[#1B1D52] sm:text-[17px]"
                    style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className="cyfaq-toggle flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E3E6F0] text-[22px] font-light leading-none text-[#1B1D52]"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div className="cyfaq-answer">
                  <p
                    className="text-[15px] leading-[1.7] text-[#374151] sm:text-[15.5px]"
                    style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl border border-[#E3E6F0] bg-white px-8 py-6 sm:flex-row sm:items-center">
          <div>
            <p
              className="text-[17px] text-[#1B1D52] sm:text-[18px]"
              style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
            >
              Have a question not answered here?
            </p>
            <p
              className="mt-1 text-[14px] text-[#6B7280] sm:text-[15px]"
              style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
            >
              Talk to our learning services team about your specific leadership group training requirements.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#6366F1] px-6 py-3 text-[14px] uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#4F46E5]"
            style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
          >
            Ask Our Learning Services Team
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
