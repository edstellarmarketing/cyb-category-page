import { ArrowRightIcon } from "@/components/icons";

const DELIVERY_OPTIONS = [
  {
    label: "Virtual / VILT Instructor-led Training",
    description:
      "Our virtual group training sessions bring expert-led, high-quality training to your teams anywhere, ensuring consistency and seamless integration into their schedules.",
    benefits: [
      "Train employees across multiple locations simultaneously",
      "Consistent quality and uniform learning outcomes across all teams",
      "No travel required. Participants attend from their own workspace",
      "Scale to accommodate large groups with interactive virtual tools",
    ],
  },
  {
    label: "On-site / In-person Instructor-led Training",
    description:
      "Edstellar deploys a vetted trainer to your office for immersive, hands-on learning experiences. Available for any group size, anywhere.",
    benefits: [
      "Higher engagement through face-to-face interaction",
      "Workplace environment tailored to your learning requirements",
      "Team collaboration and knowledge sharing during sessions",
      "Direct trainer Q&A and hands-on demonstration of real scenarios",
    ],
  },
];

type Package = {
  name: string;
  tagline: string;
  licenses: string;
  hours: string;
  highlight?: boolean;
};

const PACKAGES: Package[] = [
  {
    name: "Starter Package",
    tagline: "Tailored for SMBs",
    licenses: "120",
    hours: "64",
  },
  {
    name: "Growth Package",
    tagline: "Ideal for growing SMBs",
    licenses: "320",
    hours: "160",
    highlight: true,
  },
  {
    name: "Enterprise Package",
    tagline: "Designed for large corporations",
    licenses: "800",
    hours: "400",
  },
  {
    name: "Custom Package",
    tagline: "Designed for large corporations",
    licenses: "Unlimited",
    hours: "Unlimited",
  },
];

const SHARED_BENEFITS: { label: string; description: string }[] = [
  {
    label: "200+ Cybersecurity Training Programs",
    description:
      "SOC, cloud security, penetration testing, GRC, identity and access, incident response and more, across every enterprise security domain.",
  },
  {
    label: "1,500+ Vetted Cybersecurity Trainers",
    description:
      "Practitioner-led delivery matched to your threat environment, tech stack, language and timezone across 100+ countries.",
  },
  {
    label: "Hands-on labs included",
    description:
      "MITRE ATT&CK ranges, CTF environments, cloud security sandboxes and red-team labs included with every cohort.",
  },
  {
    label: "On-site, virtual or hybrid delivery",
    description:
      "Live instructor-led training for security teams, co-located, distributed or fully remote, in any timezone.",
  },
  {
    label: "Pre and post skill assessments",
    description:
      "Role-based competency baselining before training and skill mastery measurement after, with reporting your CISO can present to the board.",
  },
  {
    label: "Trainer-fit trial sessions",
    description:
      "Validate domain depth against your actual threat environment before committing the cohort, trial sessions with your shortlisted trainer.",
  },
];

function PriceCard({ pkg }: { pkg: Package }) {
  const featured = pkg.highlight;
  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border p-7 transition-all hover:-translate-y-0.5 hover:shadow-lg ${
        featured ? "border-[#6366F1] bg-white shadow-md" : "border-mtk-gray-200 bg-white"
      }`}
    >
      {featured && (
        <span
          className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full bg-[#6366F1] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-white"
          style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          Most Popular
        </span>
      )}
      <h3
        className="text-[22px] text-black"
        style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
      >
        {pkg.name}
      </h3>
      <p
        className="mt-1 text-[14px] text-mtk-gray-500"
        style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
      >
        {pkg.tagline}
      </p>

      <div className="mt-6 flex items-baseline gap-2">
        <span
          className="text-[42px] leading-none text-[#6366F1]"
          style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
        >
          {pkg.licenses}
        </span>
        {pkg.licenses !== "Unlimited" && (
          <span
            className="text-[14px] text-mtk-gray-500"
            style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
          >
            trainee licenses
          </span>
        )}
      </div>

      <ul
        className="mt-6 flex flex-1 flex-col gap-3 text-[14px] text-black"
        style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
      >
        <li className="flex items-start gap-2.5">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]" />
          {pkg.hours === "Unlimited" ? "Unlimited duration" : `${pkg.hours} hours of group training`}
        </li>
        <li className="flex items-start gap-2.5">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]" />
          {pkg.licenses === "Unlimited" ? "Unlimited trainee licenses" : "Includes VILT and In-person On-site"}
        </li>
      </ul>

      <a
        href="#contact"
        className={`group/cta mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[14px] uppercase tracking-[0.12em] transition-colors ${
          featured
            ? "bg-[#6366F1] text-white hover:bg-[#4F46E5]"
            : "border border-black text-black hover:border-[#6366F1] hover:text-[#6366F1]"
        }`}
        style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
      >
        Enquire Now
        <ArrowRightIcon width={16} height={16} className="transition-transform group-hover/cta:translate-x-0.5" />
      </a>
    </div>
  );
}

export function CorporatePricing() {
  return (
    <section className="bg-[#F5F3FF] py-16 md:py-20">
      <div className="mtk-page-center">
        <h2
          className="text-[36px] leading-[1.05] sm:text-[42px] lg:text-[47px]"
          style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
        >
          Cybersecurity Group Training Packages &amp; Pricing
        </h2>
        <p
          className="mt-4 max-w-3xl text-[17px] leading-[1.35] sm:text-[19px]"
          style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
        >
          Our Cybersecurity group training is tailored to your specific upskilling needs. Explore transparent pricing options that fit your training budget, whether you&apos;re training a small group or a large team.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <span
            className="inline-flex items-center gap-2 rounded-full border border-[#6366F1]/30 bg-white px-4 py-2 text-[13px] text-[#1B1D52]"
            style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
          >
            <span className="h-2 w-2 rounded-full bg-[#6366F1]" />
            Small Groups: focused cohorts from 5 trainees
          </span>
          <span
            className="inline-flex items-center gap-2 rounded-full border border-[#6366F1]/30 bg-white px-4 py-2 text-[13px] text-[#1B1D52]"
            style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
          >
            <span className="h-2 w-2 rounded-full bg-[#6366F1]" />
            Large Groups: enterprise-wide rollouts of 800+ trainees
          </span>
        </div>

        {/* Delivery options — two cards side by side */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {DELIVERY_OPTIONS.map((opt) => (
            <div
              key={opt.label}
              className="rounded-2xl border border-mtk-gray-200 bg-white p-8"
            >
              <p
                className="text-[11px] uppercase tracking-[0.18em] text-[#6366F1]"
                style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
              >
                {opt.label}
              </p>
              <p
                className="mt-3 text-[15px] leading-[1.6] text-[#374151] sm:text-[16px]"
                style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                {opt.description}
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                {opt.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6366F1]/10 text-[#6366F1]">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    </span>
                    <span
                      className="text-[14px] leading-[1.5] text-[#374151] sm:text-[15px]"
                      style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                    >
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Package cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PACKAGES.map((p) => (
            <PriceCard key={p.name} pkg={p} />
          ))}
        </div>

        {/* Shared benefits */}
        <div className="mt-10 rounded-2xl border border-mtk-gray-200 bg-white p-8 sm:p-10">
          <h3
            className="text-[20px] text-black sm:text-[22px]"
            style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
          >
            Every cybersecurity package includes
          </h3>
          <p
            className="mt-2 text-[14px] text-mtk-gray-500"
            style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
          >
            No hidden fees. These benefits are included with every Starter, Growth, Enterprise and Custom package.
          </p>
          <div className="mt-7 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {SHARED_BENEFITS.map((b) => (
              <div key={b.label} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#6366F1]/10 text-[#6366F1]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                <div>
                  <p
                    className="text-[15px] text-black sm:text-[16px]"
                    style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                  >
                    {b.label}
                  </p>
                  <p
                    className="mt-0.5 text-[13px] leading-[1.4] text-mtk-gray-500 sm:text-[14px]"
                    style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                  >
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl bg-[#0c0c0c] px-8 py-7 text-white sm:flex-row sm:items-center">
          <div>
            <h3
              className="text-[20px] sm:text-[22px]"
              style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
            >
              Need a custom rollout, specialized programs or coaching add-ons?
            </h3>
            <p
              className="mt-1 text-[14px] text-white/70 sm:text-[15px]"
              style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
            >
              Talk to our learning services team, coaching, content development, custom programs and on-site delivery.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#6366F1] px-6 py-3 text-[14px] uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#4F46E5]"
              style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
            >
              Enquire Now
              <ArrowRightIcon width={16} height={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
