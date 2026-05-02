import Image from "next/image";
import type { MoreCard } from "@/types/content";

const CARDS: MoreCard[] = [
  {
    title: "Skills Matrix",
    description:
      "Map your team's current skills against role-based cyber competencies and identify training gaps.",
    image: "/images/cyber/more-skills-matrix.jpg",
    imageAlt: "Skills matrix",
    href: "#",
  },
  {
    title: "Live Virtual Classrooms",
    description:
      "Interactive instructor-led sessions across every timezone with hands-on labs and breakout rooms.",
    image: "/images/cyber/more-virtual-class.jpg",
    imageAlt: "Virtual classroom",
    href: "#",
  },
  {
    title: "Custom Curriculum",
    description:
      "Bespoke cyber programs tuned to your stack, regulations, and threat model, built with your CISO.",
    image: "/images/cyber/more-curriculum.jpg",
    imageAlt: "Custom curriculum",
    href: "#",
  },
  {
    title: "Resource Library",
    description:
      "Whitepapers, exam-prep guides, podcasts and on-demand sessions for continuous learning.",
    image: "/images/cyber/more-resources.jpg",
    imageAlt: "Resource library",
    href: "#",
  },
];

export function MoreOnMediaTek() {
  return (
    <section className="bg-[#0c0c0c] py-16 text-white md:py-20">
      <div className="mtk-page-center">
        <h2
          className="text-[36px] leading-[1.05] sm:text-[42px] lg:text-[47px]"
          style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
        >
          Build resilient teams
        </h2>
        <p
          className="mt-4 max-w-3xl text-[17px] leading-[1.35] sm:text-[19px]"
          style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
        >
          More ways to upskill your security workforce.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c) => (
            <div key={c.title} className="flex flex-col">
              <div className="relative aspect-[5/4] overflow-hidden rounded-3xl bg-[#1d1d1b]">
                <Image
                  src={c.image}
                  alt={c.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>
              <h3
                className="mt-6 text-[22px] leading-[1.2] text-white sm:text-[24px]"
                style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
              >
                {c.title}
              </h3>
              <p
                className="mt-3 text-[15px] leading-[1.4] text-white/85 sm:text-[16px]"
                style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                {c.description}
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex w-fit items-center rounded-full bg-[#6366F1] px-6 py-3 text-[14px] text-white transition-colors hover:bg-[#818CF8]"
                style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
              >
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
