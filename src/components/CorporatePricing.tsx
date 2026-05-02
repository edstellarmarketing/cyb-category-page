import { ArrowRightIcon } from "@/components/icons";

type Package = {
  name: string;
  tagline: string;
  slots: string;
  hours: string;
  sessions: string;
  validity: string;
  highlight?: boolean;
  savings?: string;
  ctaLabel: string;
  ctaHref: string;
};

const PACKAGES: Package[] = [
  {
    name: "Starter",
    tagline: "Pilot cohort training for small teams.",
    slots: "120",
    hours: "64",
    sessions: "Up to 10 sessions",
    validity: "6-month validity",
    ctaLabel: "Enquire Now",
    ctaHref: "#contact",
  },
  {
    name: "Growth",
    tagline: "Moderate training needs across multiple domains.",
    slots: "320",
    hours: "160",
    sessions: "Up to 25 sessions",
    validity: "9-month validity",
    highlight: true,
    savings: "Save up to 10%",
    ctaLabel: "Enquire Now",
    ctaHref: "#contact",
  },
  {
    name: "Enterprise",
    tagline: "High-volume programs for global workforces.",
    slots: "800",
    hours: "400",
    sessions: "Up to 60 sessions",
    validity: "12-month validity",
    savings: "Save up to 20%",
    ctaLabel: "Enquire Now",
    ctaHref: "#contact",
  },
  {
    name: "Custom",
    tagline: "Unlimited slots, costed per employee.",
    slots: "Unlimited",
    hours: "Unlimited",
    sessions: "Tailored sessions",
    validity: "Annual contract",
    ctaLabel: "Talk to Sales",
    ctaHref: "#contact",
  },
];

const SHARED_BENEFITS: { label: string; description: string }[] = [
  {
    label: "200+ IT & Technical programs",
    description:
      "Cybersecurity, Cloud, DevOps, AI/ML, Data, Networking, Microsoft, AWS, Azure, Cisco, CompTIA, across 24 IT & Technical categories.",
  },
  {
    label: "1,500+ technical trainers",
    description:
      "Vendor-certified, hands-on practitioners, matched to your tech stack, language and timezone in 100+ countries.",
  },
  {
    label: "Hands-on labs included",
    description:
      "Cloud sandboxes (AWS/Azure/GCP), Kubernetes playgrounds, MITRE ATT&CK ranges and CTF environments shipped with every cohort.",
  },
  {
    label: "Virtual, on-site or hybrid ILT",
    description:
      "Live instructor-led delivery for engineering teams, co-located, distributed or fully remote, in any timezone.",
  },
  {
    label: "Skill assessments & ROI",
    description:
      "Pre/post technical assessments, certification pass-rate tracking and engineering KPIs, lead time, MTTR and deploys.",
  },
  {
    label: "Trainer-fit trial sessions",
    description:
      "Validate technical depth on your real stack before committing the cohort, trial sessions with your shortlisted trainer.",
  },
];

function PriceCard({ pkg }: { pkg: Package }) {
  const featured = pkg.highlight;
  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border p-7 transition-all hover:-translate-y-0.5 hover:shadow-lg ${
        featured
          ? "border-[#6366F1] bg-white shadow-md"
          : "border-mtk-gray-200 bg-white"
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
        className="text-[24px] text-black"
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
          className="text-[44px] leading-none text-[#6366F1]"
          style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
        >
          {pkg.slots}
        </span>
        <span
          className="text-[14px] text-mtk-gray-500"
          style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
        >
          trainee slots
        </span>
      </div>

      <ul
        className="mt-6 flex flex-1 flex-col gap-3 text-[14px] text-black"
        style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
      >
        <li className="flex items-start gap-2.5">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]" />
          {pkg.hours} training hours
        </li>
        <li className="flex items-start gap-2.5">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]" />
          {pkg.sessions}
        </li>
        <li className="flex items-start gap-2.5">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]" />
          {pkg.validity}
        </li>
        {pkg.savings && (
          <li className="flex items-start gap-2.5 text-[#4F46E5]">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4F46E5]" />
            <span style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}>
              {pkg.savings}
            </span>
          </li>
        )}
      </ul>

      <a
        href={pkg.ctaHref}
        className={`group/cta mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[14px] uppercase tracking-[0.12em] transition-colors ${
          featured
            ? "bg-[#6366F1] text-white hover:bg-[#4F46E5]"
            : "border border-black text-black hover:border-[#6366F1] hover:text-[#6366F1]"
        }`}
        style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
      >
        {pkg.ctaLabel}
        <ArrowRightIcon
          width={16}
          height={16}
          className="transition-transform group-hover/cta:translate-x-0.5"
        />
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
          Pre-paid training packs with built-in flexibility, pick the size that fits today,
          scale up tomorrow. All packages include domain trainers, an LSM and 2,000+
          program access.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PACKAGES.map((p) => (
            <PriceCard key={p.name} pkg={p} />
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-mtk-gray-200 bg-white p-8 sm:p-10">
          <h3
            className="text-[20px] text-black sm:text-[22px]"
            style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
          >
            Every IT &amp; Technical package includes
          </h3>
          <p
            className="mt-2 text-[14px] text-mtk-gray-500"
            style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
          >
            No hidden fees, these engineering-grade benefits ship with Starter, Growth, Enterprise and Custom alike.
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

        <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl bg-[#0c0c0c] px-8 py-7 text-white sm:flex-row sm:items-center">
          <div>
            <h3
              className="text-[20px] sm:text-[22px]"
              style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
            >
              Need a custom rollout, certifications or coaching add-ons?
            </h3>
            <p
              className="mt-1 text-[14px] text-white/70 sm:text-[15px]"
              style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
            >
              Talk to our learning services team, coaching, content development, certifications and on-site delivery.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#6366F1] px-6 py-3 text-[14px] uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#4F46E5]"
              style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
            >
              Talk to Sales
              <ArrowRightIcon width={16} height={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-[14px] uppercase tracking-[0.12em] text-white transition-colors hover:border-[#6366F1] hover:text-[#6366F1]"
              style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
            >
              See full pricing page
              <ArrowRightIcon width={16} height={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
