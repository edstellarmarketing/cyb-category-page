import { NewsCard } from "@/components/NewsCard";
import type { NewsCard as NewsCardType } from "@/types/content";

const BLOGS: NewsCardType[] = [
  {
    category: "MOBILE INSIGHTS",
    title: "Why Most Enterprise Android Codebases Are Three Years Behind",
    description:
      "A look at the gap between current Jetpack and Compose practice and the average enterprise Android codebase, and the employee skilling interventions that close it.",
    image: "/images/cyber/hero-ai.jpg",
    imageAlt: "Enterprise Android codebase analysis",
    href: "#",
  },
  {
    category: "TRAINING GUIDES",
    title: "How to Build a Role-Based Android Training Program",
    description:
      "A step-by-step guide for L&D and mobile leaders to map roles, identify skill gaps, design cohort programs and measure outcomes against app KPIs.",
    image: "/images/cyber/more-curriculum.jpg",
    imageAlt: "Role-based Android training guide",
    href: "#",
  },
  {
    category: "INDUSTRY TRENDS",
    title: "The 2026 Enterprise Mobile Skills Gap Report",
    description:
      "A survey of mobile and L&D leaders on where Android, cross-platform and QA skill gaps are widest in 2026, and how enterprises are allocating training budgets.",
    image: "/images/cyber/course-ai-data.jpg",
    imageAlt: "Mobile skills gap report",
    href: "#",
  },
  {
    category: "L&D STRATEGY",
    title: "How to Get Executive Buy-In for Your Mobile Training Budget",
    description:
      "A practical guide for L&D leaders on framing employee training, reskilling budgets and group training ROI in the language of crash-free rate, build time and release velocity.",
    image: "/images/cyber/hero-team-training.jpg",
    imageAlt: "Executive buy-in for mobile training",
    href: "#",
  },
];

export function AndroidBusinessNewsCards() {
  return (
    <section className="relative bg-white py-16 md:py-20">
      <div className="eds-page-center">
        <h2
          className="max-w-3xl text-[36px] leading-[1.05] sm:text-[42px] lg:text-[47px]"
          style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
        >
          Expert Perspectives on Enterprise Android Training.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BLOGS.map((c) => (
            <NewsCard key={c.title} card={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
