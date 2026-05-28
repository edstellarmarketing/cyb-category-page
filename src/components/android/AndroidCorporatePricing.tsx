import { ArrowRightIcon } from "@/components/icons";

const DELIVERY_OPTIONS = [
  {
    label: "Virtual / VILT Instructor-Led Training",
    description:
      "Live, instructor-led group training delivered over video conferencing with hands-on Android Studio and AVD-shared sessions, built for distributed mobile squads working across timezones and release windows.",
    benefits: [
      "Train Android engineers across multiple locations and offices simultaneously",
      "Shared AVD-screen sessions and Compose previews for consistent hands-on practice",
      "No travel required. Participants join from their own workspace and devices",
      "Scale to enterprise mobile rollouts with interactive virtual labs and breakouts",
    ],
  },
  {
    label: "On-Site / In-Person Instructor-Led Training",
    description:
      "Edstellar deploys a vetted Android trainer to your office for immersive, hands-on sessions. Dedicated room, devices and shared screens for codebase walkthroughs on your real app, modules and Gradle setup.",
    benefits: [
      "Higher engagement through face-to-face codebase walkthroughs on your real app",
      "Dedicated room, devices and physical device-farm screens for shared labs",
      "Team collaboration on shared modules, Gradle config and release tooling",
      "Direct trainer Q&A and live demos in Android Studio with your build setup",
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
    tagline: "Tailored for focused mobile squads",
    licenses: "120",
    hours: "64",
  },
  {
    name: "Growth Package",
    tagline: "Ideal for scaling mobile teams",
    licenses: "320",
    hours: "160",
    highlight: true,
  },
  {
    name: "Enterprise Package",
    tagline: "Designed for large mobile organisations",
    licenses: "800",
    hours: "400",
  },
  {
    name: "Custom Package",
    tagline: "Built around your mobile rollout",
    licenses: "Unlimited",
    hours: "Unlimited",
  },
];

const SHARED_BENEFITS: { label: string; description: string }[] = [
  {
    label: "20+ Android & Mobile Training Programs",
    description:
      "Kotlin, Jetpack Compose, Android NDK, AAOS, mobile security, CI for Android and cross-platform stacks like Flutter and React Native, across every enterprise mobile domain.",
  },
  {
    label: "1,500+ Vetted Mobile Trainers",
    description:
      "Practitioner-led delivery matched to your codebase, Gradle setup, language and timezone across 100+ countries, by engineers shipping production Android apps.",
  },
  {
    label: "Hands-On Android Studio + Device-Farm Labs",
    description:
      "Android Studio sandboxes, AVD farms, physical device-farm screens, Compose previews and instrumented Espresso and Appium suites included with every cohort.",
  },
  {
    label: "On-Site, Virtual or Hybrid Delivery",
    description:
      "Live instructor-led training for Android teams, co-located, distributed or fully remote, in any timezone and across 10+ languages.",
  },
  {
    label: "Pre and Post Skill Assessments",
    description:
      "Role-based competency baselining before training and skill mastery measurement after, with reporting your Head of Mobile can present to the board.",
  },
  {
    label: "Trainer-Fit Trial Sessions",
    description:
      "Validate domain depth against your actual codebase, modules and Gradle setup before committing the cohort, trial sessions with your shortlisted trainer.",
  },
];

function PriceCard({ pkg }: { pkg: Package }) {
  const featured = pkg.highlight;
  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border p-7 transition-all hover:-translate-y-0.5 hover:shadow-lg ${
        featured ? "border-[#6366F1] bg-white shadow-md" : "border-eds-gray-200 bg-white"
      }`}
    >
      {featured && (
        <span
          className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full bg-[#6366F1] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-white"
          style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          Best for Scaling Mobile Teams
        </span>
      )}
      <h3
        className="text-[22px] text-black"
        style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
      >
        {pkg.name}
      </h3>
      <p
        className="mt-1 text-[14px] text-eds-gray-500"
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
            className="text-[14px] text-eds-gray-500"
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
        Get a Quote
        <ArrowRightIcon width={16} height={16} className="transition-transform group-hover/cta:translate-x-0.5" />
      </a>
    </div>
  );
}

export function AndroidCorporatePricing() {
  return (
    <section className="bg-[#F5F3FF] py-16 md:py-20">
      <div className="eds-page-center">
        <h2
          className="text-[36px] leading-[1.05] sm:text-[42px] lg:text-[48px]"
          style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
        >
          Android Group Training Packages &amp; Pricing
        </h2>
        <p
          className="mt-4 max-w-3xl text-[17px] leading-[1.35] sm:text-[18px]"
          style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
        >
          Our Android and mobile group training is tailored to your specific upskilling needs. Explore transparent pricing options that fit your training budget, whether you are training a small mobile squad or a multi-site mobile organisation across the enterprise.
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
              className="rounded-2xl border border-eds-gray-200 bg-white p-8"
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
        <div className="mt-10 rounded-2xl border border-eds-gray-200 bg-white p-8 sm:p-10">
          <h3
            className="text-[20px] text-black sm:text-[22px]"
            style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
          >
            Every Android Package Includes
          </h3>
          <p
            className="mt-2 text-[14px] text-eds-gray-500"
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
                    className="mt-0.5 text-[13px] leading-[1.4] text-eds-gray-500 sm:text-[14px]"
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
              Need a Custom Rollout, Specialised Mobile Programs or Coaching Add-Ons?
            </h3>
            <p
              className="mt-1 text-[14px] text-white/70 sm:text-[15px]"
              style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
            >
              Talk to our learning services team, coaching, content development, custom mobile programs and on-site delivery.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#6366F1] px-6 py-3 text-[14px] uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#4F46E5]"
              style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
            >
              Talk to a Learning Advisor
              <ArrowRightIcon width={16} height={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
