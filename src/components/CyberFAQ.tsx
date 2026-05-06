"use client";
import { useState } from "react";

type FAQ = {
  q: string;
  a: string;
};

const FAQS: FAQ[] = [
  {
    q: "Which roles and designations should attend Edstellar's cybersecurity training programs?",
    a: "Edstellar's cybersecurity group training programs are built for enterprise security and IT teams. Roles that benefit most include SOC analysts, cloud security engineers, penetration testers, GRC analysts, security architects, DevSecOps engineers, and incident response leads. L&D teams upskilling or reskilling employees into security functions can use Edstellar's role-mapping service to identify the right program for each designation before enrolling a cohort.",
  },
  {
    q: "How are the cybersecurity training programs delivered?",
    a: "All programs are delivered instructor-led, either on-site at your office premises or virtually through VILT (Virtual Instructor-Led Training). There are no self-paced or recorded modules. Every session is live, facilitated by a certified cybersecurity practitioner, and structured as a closed cohort for your team only. You choose the format, location, language, and schedule.",
  },
  {
    q: "Can the training program be customized for our organization's specific requirements?",
    a: "Yes. Edstellar does not deliver off-the-shelf catalog programs. Every cybersecurity training program is designed around your threat model, your technology stack, your team's current capability level, and your compliance obligations. The customization process starts with a discovery call where we map your roles and skill gaps before a trainer is shortlisted or a schedule is confirmed.",
  },
  {
    q: "How many employees can attend a cybersecurity group training cohort?",
    a: "Edstellar runs focused cohorts from as few as 5 trainees for specialist security teams up to enterprise-wide rollouts of 800 or more employees. For large organizations, we run parallel cohorts across multiple locations simultaneously to maintain training consistency across sites. Group size does not affect program quality since every cohort is instructor-led, not self-paced.",
  },
  {
    q: "What is the difference between ILT and VILT?",
    a: "ILT (Instructor-Led Training) is on-site, in-person delivery where a certified trainer is physically present at your premises. VILT (Virtual Instructor-Led Training) is the live online equivalent, delivered in real time via a virtual classroom platform. Both formats are instructor-led and include hands-on labs and live trainer interaction. The choice between ILT and VILT is based on your team's location and logistics, not a quality difference.",
  },
  {
    q: "How long does a cybersecurity group training program typically last?",
    a: "Duration ranges from 8 hours for focused single-skill or awareness programs to 32 or more hours for advanced red-team, penetration testing, or architecture-level programs. Most group training cohorts are delivered over 2 to 5 days, with modular scheduling available to spread sessions across multiple weeks to minimize business disruption.",
  },
  {
    q: "How does Edstellar vet and select cybersecurity trainers?",
    a: "Every trainer in Edstellar's network of 1,500+ cybersecurity practitioners goes through a multi-stage vetting process: a technical domain assessment, a live delivery evaluation, and ongoing client feedback reviews. Trainers are matched to your engagement based on domain expertise, technology stack alignment, industry experience, and geographic availability. You can request a trial session with your shortlisted trainer before committing your cohort.",
  },
  {
    q: "How is the effectiveness of the training measured?",
    a: "Edstellar uses pre and post technical skill assessments for every cohort to establish a measurable skills delta. Results are benchmarked against role-based competency frameworks and reported in a post-program delivery summary. L&D teams receive outcome data on individual and team-level skill improvement that can be mapped to security KPIs such as MTTD, MTTR, and vulnerability remediation rates.",
  },
  {
    q: "Which industries does Edstellar deliver cybersecurity training for?",
    a: "Edstellar delivers cybersecurity training programs across banking and financial services, healthcare, manufacturing, government and defense, technology and SaaS, retail, energy, and telecoms, across 100+ countries. Programs are adapted to the regulatory context of each sector, covering frameworks such as PCI-DSS, HIPAA, NIST, ISO 27001, and SEBI guidelines depending on the industry.",
  },
  {
    q: "Can the training be conducted at our office premises?",
    a: "Yes. Edstellar's on-site instructor-led training deploys a certified cybersecurity trainer to your location across 100+ countries. The trainer brings all course materials, lab environments, and scenario simulations. On-site delivery is available for any group size and any geography, with scheduling coordinated around your team's availability and business calendar.",
  },
  {
    q: "How is pricing structured for cybersecurity group training?",
    a: "Pricing is based on cohort size, program duration, and delivery format. Edstellar offers four group training packages: Starter (120 trainee licenses, 64 hours), Growth (320 licenses, 160 hours), Enterprise (800 licenses, 400 hours), and Custom for unlimited rollouts. All packages include trainer fees, lab environments, pre and post skill assessments, and a dedicated Learning Services Manager. Contact us for a custom quote.",
  },
  {
    q: "Are there prerequisites for joining a cybersecurity training program?",
    a: "Prerequisites vary by program level. Entry-level skilling programs for new hires or lateral movers into security roles have no formal prerequisites. Intermediate programs in cloud security or GRC typically require some domain familiarity, while advanced programs in penetration testing or red-teaming require prior hands-on experience. Edstellar's pre-enrollment skill-mapping exercise identifies the right level for each role in your team.",
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

export function CyberFAQ() {
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
          className="text-[36px] leading-[1.05] text-[#1B1D52] sm:text-[42px] lg:text-[47px]"
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
              Talk to our learning services team about your specific cybersecurity group training requirements.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#6366F1] px-6 py-3 text-[14px] uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#4F46E5]"
            style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
          >
            Enquire Now
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
