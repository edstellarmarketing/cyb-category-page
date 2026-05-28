const ITEMS = [
  {
    stat: "Customized Corporate Training Packages",
    label: "Tailored for teams of every size",
    desc: "We design flexible cybersecurity training packages aligned to your organization’s goals, team structure, skill gaps, and enterprise learning requirements.",
  },
  {
    stat: "Centralized Training Administration",
    label: "Unified coordination across teams and locations",
    desc: "Manage enterprise cybersecurity training from a single centralized framework with consistent scheduling, standardized curriculum delivery, and aligned learning outcomes across all cohorts.",
  },
  {
    stat: "Dedicated Training Solutions Manager",
    label: "Single point of coordination",
    desc: "One dedicated expert manages planning, delivery coordination, learner communication, and post-training support across programs.",
  },
  {
    stat: "Post-Program Capability Reports",
    label: "Measure workforce readiness",
    desc: "Every engagement concludes with detailed insights into learner participation, assessments, and capability improvement outcomes.",
  },
];

export function EnterpriseProofStrip() {
  return (
    <section className="bg-[#0c0c0c] py-14 md:py-16">
      <div className="eds-page-center">
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <div
              key={item.label}
              className="border-l-[3px] border-[#C5E826] pl-6"
            >
              <p
                className="text-[20px] leading-[1.2] text-white sm:text-[22px]"
                style={{ fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif" }}
              >
                {item.stat}
              </p>
              <p
                className="mt-3 text-[14px] leading-[1.3] text-white/90"
                style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
              >
                {item.label}
              </p>
              <p
                className="mt-2 text-[14px] leading-[1.65] text-white/55"
                style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
