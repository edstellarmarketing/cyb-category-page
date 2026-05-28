"use client";
import { useState } from "react";

type FAQ = {
  q: string;
  a: string;
};

const FAQS: FAQ[] = [
  {
    q: "Which roles and teams should attend Edstellar's AI training programs?",
    a: "Edstellar's AI group training is built for enterprise data and product teams. Roles include ML engineers, data scientists, AI/ML engineers, MLOps engineers, data analysts, prompt engineers, and AI product managers, plus developers adopting AI. Role-mapping helps you upskill or reskill the right employees.",
  },
  {
    q: "How are Edstellar's enterprise AI training programs delivered?",
    a: "Every AI program is delivered instructor-led and live, as a closed cohort for your team. We deliver on-site as ILT or virtually as VILT, run by a certified AI practitioner. There are no self-paced or recorded modules. You choose the format, location, language, and schedule for your group training.",
  },
  {
    q: "Can the AI training program be customized for our organization?",
    a: "Yes. Each instructor-led program is designed around your model stack, your data, your team's capability level, and your AI governance obligations. There is no off-the-shelf catalog program. The engagement begins with a discovery call to map roles and skill gaps before a trainer is shortlisted.",
  },
  {
    q: "How many employees can attend an AI group training cohort?",
    a: "Edstellar runs cohorts from 5 trainees for specialist teams up to enterprise rollouts of 800 or more. For large organizations, parallel cohorts run across multiple locations at the same time. Group size does not affect quality, because every cohort is instructor-led and live, never self-paced.",
  },
  {
    q: "What is the difference between ILT and VILT for AI training?",
    a: "ILT, or Instructor-Led Training, is on-site, in-person delivery with a certified trainer at your premises. VILT, or Virtual Instructor-Led Training, is the live online equivalent in real time. Both include hands-on labs and live interaction. The choice depends on your location and logistics, not quality.",
  },
  {
    q: "How does Edstellar vet and select its AI trainers for cohorts?",
    a: "Every trainer in Edstellar's 1,500+ network passes multi-stage vetting: a technical domain assessment, a live delivery evaluation, and ongoing client feedback. Trainers are matched by AI domain expertise, stack alignment, and geography. You can request a trial session before committing your cohort.",
  },
  {
    q: "How is the effectiveness of the AI training program measured?",
    a: "Every cohort runs pre and post technical assessments to establish a measurable skills delta. Results are benchmarked against role-based frameworks and shared in a post-program delivery summary. Outcome data maps to AI KPIs such as model accuracy, time-to-deployment, and adoption rates.",
  },
  {
    q: "Which industries does Edstellar deliver AI training for?",
    a: "Edstellar delivers AI training across banking, insurance, healthcare, pharmaceuticals, manufacturing, retail, energy, and telecoms in 100+ countries. Each program is adapted to its sector's regulatory context, covering the EU AI Act, FDA AI/ML SaMD, HIPAA, and ISO/IEC 42001 obligations.",
  },
  {
    q: "How do we select the right AI corporate training provider?",
    a: "Look for a provider that designs programs around your stack and governance, not a generic catalog. Key criteria are instructor-led delivery, real customization, vetted practitioner trainers with trial sessions, and measurable outcomes reported in a summary your CTO can present to the board.",
  },
  {
    q: "Why is group training more effective than individual AI licenses?",
    a: "Group training aligns a whole team on the same model stack, patterns, and governance rules. Individual licenses create uneven skill baselines and ungoverned adoption. Cohort-based instructor-led training builds shared team capability and delivers measurable team-level outcomes that self-paced seats cannot.",
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

export function AiFAQ() {
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
              Talk to our learning services team about your specific AI group training requirements.
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
