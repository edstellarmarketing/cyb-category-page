import Image from "next/image";
import { ClientLogosStrip } from "@/components/ClientLogosStrip";
import { EnterpriseProofStrip } from "@/components/EnterpriseProofStrip";
import { ArrowRightIcon } from "@/components/icons";

type TrainingLocation = { label: string; x: number; y: number };

const TRAINING_LOCATIONS: TrainingLocation[] = [
  { label: "Casablanca, Morocco", x: 47, y: 32 },
  { label: "Cairo, Egypt", x: 56, y: 32 },
  { label: "Lagos, Nigeria", x: 49.5, y: 52 },
  { label: "Nairobi, Kenya", x: 58, y: 56 },
  { label: "Johannesburg, South Africa", x: 56, y: 75 },
  { label: "Cape Town, South Africa", x: 54.5, y: 81 },
  { label: "Madrid, Spain", x: 47.5, y: 28 },
  { label: "Rome, Italy", x: 51, y: 30 },
  { label: "Amsterdam, Netherlands", x: 49.5, y: 23 },
  { label: "Zurich, Switzerland", x: 50, y: 26 },
  { label: "Warsaw, Poland", x: 53, y: 23 },
  { label: "Stockholm, Sweden", x: 52, y: 17 },
  { label: "Oslo, Norway", x: 50, y: 17 },
  { label: "Beijing, China", x: 80, y: 28 },
  { label: "Shanghai, China", x: 81, y: 33 },
  { label: "Taipei, Taiwan", x: 82, y: 38 },
  { label: "Sydney, Australia", x: 87.5, y: 80 },
  { label: "Melbourne, Australia", x: 85.5, y: 82 },
];

const TRAINER_AVATARS = [
  { src: "/images/cyber/trainer-deepak.jpg", name: "Deepak" },
  { src: "/images/cyber/trainer-devi.jpg",   name: "Devi"   },
  { src: "/images/cyber/trainer-akash.jpg",  name: "Akash"  },
  { src: "/images/cyber/trainer-sudha.jpg",  name: "Sudha"  },
];

const PILLARS = [
  {
    stat: "200+",
    label: "Cybersecurity Training Programs",
    sublabel: "Program design, not catalog selection",
    copy: "We design customized cybersecurity group training around your threat model, your stack, and your roles. Not selected from a generic catalog. Every employee training program is a design decision, not a menu pick.",
    thumbnail: { src: "/images/cyber/hero-team-training.jpg", alt: "Cybersecurity group training session in progress" },
  },
  {
    stat: "100+",
    label: "Countries",
    sublabel: "On-site or virtual, wherever you operate",
    copy: "A vetted instructor in your office, in your language, aligned to your local compliance framework. Wherever your teams operate, Edstellar delivers in-region.",
    thumbnail: { src: "/images/cyber/more-virtual-class.jpg", alt: "Virtual instructor-led training cohort" },
  },
  {
    stat: "1,500+",
    label: "Vetted Cybersecurity Trainers",
    sublabel: "Caliber you can trust",
    copy: "Every trainer passes a rigorous multi-stage vetting: technical assessment, live delivery evaluation, and ongoing client feedback. Before committing your cohort, you can interview and run a trial session with your shortlisted trainer.",
    thumbnail: null,
  },
];

export function CustomersPartners() {
  return (
    <section className="bg-[#EEF2FF] py-16 md:py-24">
      <div className="eds-page-center">

        {/* Top 2-col: heading + description */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2
              className="text-[36px] leading-[1.08] text-[#1B1D52] sm:text-[42px] lg:text-[48px]"
              style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
            >
              Why Edstellar is Trusted by Enterprises to Build Cybersecurity Capability
            </h2>
            <p
              className="mt-5 text-[16px] leading-[1.6] text-[#374151] sm:text-[17px]"
              style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
            >
              Edstellar is a dedicated cybersecurity corporate training company built for enterprise workforce development, not individual learners. Unlike course marketplaces, Edstellar designs every upskilling and reskilling program around your threat model and delivers it through instructor-led group training led by industry practitioners. As a cybersecurity training provider operating in 100+ countries, every engagement is tied to measurable outcomes your CISO and board can act on.
            </p>
            <blockquote
              className="mt-8 border-l-4 border-[#C5E826] pl-5 text-[17px] leading-[1.5] text-[#1B1D52] sm:text-[18px]"
              style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
            >
              Most providers sell you a seat in a course. Edstellar builds the program, qualifies the trainer, and delivers a post-program report your CISO can take to the board: skills delta, MTTD improvement, and vulnerability remediation rates.
            </blockquote>
          </div>

          <div className="flex items-center">
            <p
              className="text-[16px] leading-[1.75] text-[#4B5563] sm:text-[17px]"
              style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
            >
              Our goal at Edstellar is to help your security teams shift from reacting to threats to actively owning your organisation&apos;s cyber defence capability. Whether you are skilling new hires or reskilling lateral movers into security roles, every cybersecurity workforce development program we deliver is built by industry practitioners and mapped to the roles, tools, and compliance frameworks your business runs on.
            </p>
          </div>
        </div>

        {/* 3 pillar cards — image thumbnail + left border accent */}
        <div className="mb-14 mt-14 grid grid-cols-1 gap-6 border-t border-[#6366F1]/20 pt-14 sm:grid-cols-3 md:mb-20">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.stat}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              {/* Thumbnail */}
              {pillar.thumbnail ? (
                <div className="relative h-52 w-full shrink-0 overflow-hidden">
                  <Image
                    src={pillar.thumbnail.src}
                    alt={pillar.thumbnail.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
              ) : (
                /* Trainer avatar group */
                <div className="flex h-52 w-full shrink-0 items-center justify-center bg-[#EEF2FF]">
                  <div className="flex items-center">
                    {TRAINER_AVATARS.map((t, i) => (
                      <div
                        key={t.name}
                        className="relative h-16 w-16 overflow-hidden rounded-full border-[3px] border-white shadow-sm"
                        style={{ marginLeft: i === 0 ? 0 : "-18px", zIndex: TRAINER_AVATARS.length - i }}
                      >
                        <Image
                          src={t.src}
                          alt={t.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                    ))}
                    <div
                      className="relative -ml-[18px] flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-[3px] border-white bg-[#6366F1] shadow-sm"
                      style={{ zIndex: 0 }}
                    >
                      <span
                        className="text-[11px] leading-tight text-white"
                        style={{ fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif" }}
                      >
                        +1.5k
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Lime accent line between image and content */}
              <div className="h-[3px] w-full shrink-0 bg-[#C5E826]" />

              {/* Content */}
              <div className="flex flex-1 flex-col px-6 pb-7 pt-6">
                <p
                  className="text-[52px] leading-none text-[#6366F1]"
                  style={{ fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif" }}
                >
                  {pillar.stat}
                </p>
                <p
                  className="mt-3 text-[17px] leading-[1.25] text-[#1B1D52]"
                  style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                >
                  {pillar.label}
                </p>
                <p
                  className="mt-1.5 text-[11px] uppercase tracking-[0.14em] text-[#6366F1]"
                  style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                >
                  {pillar.sublabel}
                </p>
                <p
                  className="mt-4 text-[14px] leading-[1.6] text-[#4B5563]"
                  style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                >
                  {pillar.copy}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Enterprise proof strip — full width, black background */}
      <EnterpriseProofStrip />

      <div className="eds-page-center">
        {/* Global reach map */}
        <div className="mt-16 md:mt-20">
          <p
            className="text-center text-[11px] uppercase tracking-[0.18em] text-[#6366F1]/60"
            style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
          >
            Delivering in-region, in-language, across six continents
          </p>

          <div className="relative mx-auto mt-6 w-full md:max-w-[80%]">
            <Image
              src="/images/Global-Location.png"
              alt="Countries where Edstellar has delivered cybersecurity training"
              width={1175}
              height={579}
              sizes="(max-width: 767px) 100vw, 80vw"
              className="h-auto w-full"
              style={{ filter: "hue-rotate(35deg) saturate(1.25) brightness(1.05)" }}
              priority={false}
            />
            {TRAINING_LOCATIONS.map((loc) => (
              <span
                key={`${loc.label}-${loc.x}-${loc.y}`}
                title={loc.label}
                aria-label={loc.label}
                className="pointer-events-none absolute block rounded-full"
                style={{
                  left: `${loc.x}%`,
                  top: `${loc.y}%`,
                  width: "0.7%",
                  aspectRatio: "1 / 1",
                  minWidth: "4px",
                  minHeight: "4px",
                  backgroundColor: "rgb(197, 232, 38)",
                  transform: "translate(-50%, -50%)",
                  boxShadow: "0 0 0 1px rgba(197,232,38,0.3), 0 0 6px rgba(197,232,38,0.6)",
                }}
              />
            ))}
          </div>

          <ClientLogosStrip />
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13px] uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90 sm:text-[14px]"
            style={{
              backgroundColor: "#1B1D52",
              fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif",
            }}
          >
            Partner with Edstellar
            <ArrowRightIcon width={16} height={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
