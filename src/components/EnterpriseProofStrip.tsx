const ITEMS = [
  {
    stat: "800+",
    label: "Employees in a single rollout",
    desc: "We scale from 5-person specialist cohorts to enterprise-wide deployments without quality loss.",
  },
  {
    stat: "Multi-site",
    label: "Parallel cohorts, same week",
    desc: "The same program runs simultaneously across your global offices: same curriculum, same outcomes.",
  },
  {
    stat: "Dedicated",
    label: "Learning Services Manager",
    desc: "One named person owns your engagement from kickoff through to post-program delivery report.",
  },
  {
    stat: "Post-program",
    label: "Delivery report for every cohort",
    desc: "Every engagement closes with a skills delta report your CISO and L&D Director can present upward, not just an attendance log.",
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
                className="text-[28px] leading-none text-white sm:text-[32px]"
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
