import {
  BarChart3,
  BrainCircuit,
  Check,
  ClipboardCheck,
  Cloud,
  FileText,
  Globe2,
  Languages,
  MapPin,
  Presentation,
  ShieldCheck,
  Target,
  UsersRound,
} from "lucide-react";

const FONT_LIGHT = "'Riona Sans Light', Helvetica, Arial, sans-serif";
const FONT_REGULAR = "'Riona Sans Regular', Helvetica, Arial, sans-serif";
const FONT_BOLD = "'Riona Sans Bold', Helvetica, Arial, sans-serif";

const leftItems = [
  {
    title: "Strategy-led design",
    text: "Every engagement starts with a leadership capability roadmap aligned to your competency model.",
    icon: Target,
  },
  {
    title: "Global instructor-led delivery",
    text: "On-site, off-site or virtual (ILT / VILT), in 10+ languages, matched to your team's location and schedule.",
    icon: Globe2,
  },
  {
    title: "Practice by default",
    text: "Simulations, role-plays, action-learning projects and peer coaching power real-world practice.",
    icon: Cloud,
  },
  {
    title: "Measurable ROI",
    text: "Pre/post 360 assessments, engagement and retention KPIs tracked and reported.",
    icon: BarChart3,
  },
];

const cards = [
  {
    className: "left-[40px] top-[0px]",
    title: "5. Capability Mastery",
    icon: BrainCircuit,
    bullets: ["Executive & strategic leadership", "Change & EQ leadership"],
    quote: "Building the leadership capabilities our future depends on?",
  },
  {
    className: "right-[2px] top-[0px]",
    title: "2. Customized Instructor-led Training",
    icon: Presentation,
    bullets: ["Tier-based paths (new manager, senior, executive)", "Customized programs per tier"],
    quote: "Which training programs fit our tiers & competency model?",
  },
  {
    className: "right-[2px] bottom-[0px]",
    title: "3. Hands-on Practice",
    icon: Cloud,
    bullets: ["Simulations & role-plays", "Action-learning projects & peer coaching"],
    quote: "Where can our leaders practice real scenarios safely?",
  },
  {
    className: "left-[0px] bottom-[0px]",
    title: "4. Assessment & ROI",
    icon: ClipboardCheck,
    bullets: ["360 assessments", "Engagement & retention KPIs"],
    quote: "Measure manager effectiveness & leadership ROI?",
  },
];

const proofItems = [
  {
    title: "Practitioner facilitators",
    text: "Former executives and certified coaches, vetted and experienced",
    icon: UsersRound,
  },
  {
    title: "Delivered in 10+ languages",
    text: "Local language delivery for better learning outcomes",
    icon: Languages,
  },
  {
    title: "On-site, off-site or virtual",
    text: "Flexible delivery options to fit your teams",
    icon: MapPin,
  },
  {
    title: "Actionable reports for L&D leaders and CHROs",
    text: "Transparent reporting for L&D leaders and CHROs",
    icon: FileText,
  },
  {
    title: "Measurable impact at every step",
    text: "Outcomes that drive capability improvement and resilience",
    icon: ShieldCheck,
  },
];

function CheckLine({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-4 text-[15px] leading-[1.48] text-[#374151]">
      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#C5E826]" strokeWidth={3} aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}

function OrbitCard({ card }: { card: (typeof cards)[number] }) {
  const Icon = card.icon;

  return (
    <article
      className={`absolute w-[280px] rounded-[10px] bg-white px-[25px] py-[20px] shadow-[0_10px_30px_rgba(20,24,82,0.10)] ${card.className}`}
    >
      <div className="flex items-center gap-4">
        <span className="flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full bg-[#EEF2FF] text-[#6366F1]">
          <Icon className="h-8 w-8" strokeWidth={2.2} aria-hidden="true" />
        </span>
        <h3 className="text-[17px] leading-[1.25] text-[#1B1D52]" style={{ fontFamily: FONT_BOLD }}>
          {card.title}
        </h3>
      </div>
      <ul className="mt-6 space-y-3" style={{ fontFamily: FONT_REGULAR }}>
        {card.bullets.map((bullet) => (
          <CheckLine key={bullet}>{bullet}</CheckLine>
        ))}
      </ul>
      <p
        className="mt-6 border-t border-eds-gray-200 pt-4 text-[14px] italic leading-[1.45] text-[#697084]"
        style={{ fontFamily: FONT_REGULAR }}
      >
        &ldquo;{card.quote}&rdquo;
      </p>
    </article>
  );
}

export function LeadershipIntroReference() {
  return (
    <section
      aria-labelledby="leadership-intro-reference-title"
      className="relative overflow-hidden bg-[#F8FAFF] py-16 text-[#1B1D52] md:py-20"
    >
      <div className="pointer-events-none absolute -right-20 -top-24 h-[520px] w-[520px] rounded-full border border-[#E8EAF7] opacity-70" />
      <div className="pointer-events-none absolute -right-10 -top-12 h-[420px] w-[420px] rounded-full border border-[#E8EAF7] opacity-70" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[38%] bg-[radial-gradient(circle_at_100%_0%,rgba(99,102,241,0.10),transparent_34rem)]" />

      <div className="eds-page-center relative">
        <nav
          aria-label="Breadcrumb"
          className="mb-9 flex items-center gap-3 text-[14px] text-[#29304E]"
          style={{ fontFamily: FONT_LIGHT }}
        >
          <span>Home</span>
          <span aria-hidden="true">&gt;</span>
          <span>All Training Programs</span>
          <span aria-hidden="true">&gt;</span>
          <span className="text-[#1B1D52]">Leadership Training Programs</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:min-h-[680px]">
          <div>
            <h2
              id="leadership-intro-reference-title"
              className="max-w-[610px] text-[36px] leading-[1.08] text-[#1B1D52] sm:text-[42px] lg:text-[48px]"
              style={{ fontFamily: FONT_LIGHT }}
            >
              How Edstellar Builds Leadership Capability Inside Your Enterprise
            </h2>
            <span className="mt-6 block h-1 w-[72px] bg-[#C5E826]" aria-hidden="true" />
            <p
              className="mt-5 max-w-2xl text-[16px] leading-[1.6] text-[#374151] sm:text-[17px]"
              style={{ fontFamily: FONT_LIGHT }}
            >
              Edstellar designs leadership development around your competency model, your manager
              tiers and your business goals. Every customized, instructor-led program turns a training
              engagement into measurable outcomes your CHRO and board can rely on.
            </p>

            <div className="mt-9 max-w-[492px]">
              {leftItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`grid grid-cols-[70px_1fr] gap-5 py-[13px] ${
                      index === leftItems.length - 1 ? "" : "border-b border-eds-gray-200"
                    }`}
                  >
                    <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#EEF2FF] text-[#6366F1] shadow-[0_6px_18px_rgba(88,87,243,0.10)]">
                      <Icon className="h-8 w-8" strokeWidth={2.2} aria-hidden="true" />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-[17px] leading-tight text-[#1B1D52]" style={{ fontFamily: FONT_BOLD }}>
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[14px] leading-[1.48] text-[#374151]" style={{ fontFamily: FONT_LIGHT }}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative hidden min-h-[682px] lg:block">
            <div className="absolute left-[258px] top-[204px] z-20 flex h-[276px] w-[276px] items-center justify-center rounded-full border-[7px] border-[#6366F1] bg-white text-center shadow-[0_15px_38px_rgba(44,47,145,0.15)]">
              <div className="absolute inset-[-23px] rounded-full border border-[#C5E826]" />
              <span className="absolute -left-[29px] top-[156px] h-[14px] w-[14px] rounded-full bg-[#C5E826]" />
              <span className="absolute left-[42px] -top-[17px] h-[14px] w-[14px] rounded-full bg-[#C5E826]" />
              <span className="absolute -right-[28px] top-[156px] h-[14px] w-[14px] rounded-full bg-[#C5E826]" />
              <span className="absolute right-[40px] -top-[20px] h-[14px] w-[14px] rounded-full bg-[#C5E826]" />
              <div>
                <BrainCircuit className="mx-auto mb-7 h-[62px] w-[62px] text-[#6366F1]" strokeWidth={2} aria-hidden="true" />
                <h3 className="text-[19px] leading-tight" style={{ fontFamily: FONT_BOLD }}>
                  1. Strategy &amp; Vision
                </h3>
                <p className="mt-3 text-[12px] uppercase tracking-[0.08em] text-[#6366F1]" style={{ fontFamily: FONT_BOLD }}>
                  Leadership Training Strategy
                </p>
                <p className="mx-auto mt-5 max-w-[150px] text-[14px] italic leading-[1.45] text-[#697084]" style={{ fontFamily: FONT_REGULAR }}>
                  &ldquo;Vision for our organization&apos;s leadership pipeline?&rdquo;
                </p>
              </div>
            </div>

            {cards.map((card) => (
              <OrbitCard key={card.title} card={card} />
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 rounded-2xl border border-eds-gray-200 bg-white px-6 py-6 shadow-sm sm:grid-cols-2 lg:grid-cols-5 lg:gap-0 lg:px-7">
          {proofItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`grid grid-cols-[54px_1fr] gap-4 lg:px-5 ${
                  index === proofItems.length - 1 ? "" : "lg:border-r lg:border-eds-gray-200"
                }`}
              >
                <Icon className="mt-2 h-9 w-9 text-[#6366F1]" strokeWidth={2.2} aria-hidden="true" />
                <div>
                  <h3 className="text-[17px] leading-[1.2] text-[#1B1D52]" style={{ fontFamily: FONT_BOLD }}>
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[12px] leading-[1.6] text-[#374151]" style={{ fontFamily: FONT_LIGHT }}>
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
