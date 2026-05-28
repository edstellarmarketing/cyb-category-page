import { NewsCard } from "@/components/NewsCard";
import type { NewsCard as NewsCardType } from "@/types/content";

const BLOGS: NewsCardType[] = [
  {
    category: "AI INSIGHTS",
    title: "Why Most Enterprise GenAI Pilots Never Reach Production",
    description:
      "An analysis of the gap between impressive demos and production-grade AI systems, and the employee skilling interventions that actually change the outcomes.",
    image: "/images/cyber/hero-ai.jpg",
    imageAlt: "Enterprise GenAI pilots analysis",
    href: "#",
  },
  {
    category: "TRAINING GUIDES",
    title: "How to Build a Role-Based AI Training Program",
    description:
      "A step-by-step guide for L&D and AI leaders to map roles, identify skill gaps, design cohort programs and measure outcomes.",
    image: "/images/cyber/more-curriculum.jpg",
    imageAlt: "Role-based AI training guide",
    href: "#",
  },
  {
    category: "INDUSTRY TRENDS",
    title: "The 2026 Enterprise AI Skills Gap Report",
    description:
      "A survey of enterprise AI and L&D leaders on where skill gaps are widest in 2026, where training budgets are being allocated, and what structured group training interventions are working.",
    image: "/images/cyber/course-ai-data.jpg",
    imageAlt: "AI skills gap report",
    href: "#",
  },
  {
    category: "L&D STRATEGY",
    title: "How to Get Executive Buy-In for Your AI Training Budget",
    description:
      "A practical guide for L&D leaders on framing employee training investment, reskilling budgets and group training ROI in the language of measurable business outcomes.",
    image: "/images/cyber/hero-team-training.jpg",
    imageAlt: "Executive buy-in for AI training",
    href: "#",
  },
];

export function AiBusinessNewsCards() {
  return (
    <section className="relative bg-white py-16 md:py-20">
      <div className="eds-page-center">
        <h2
          className="max-w-3xl text-[36px] leading-[1.05] sm:text-[42px] lg:text-[47px]"
          style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
        >
          Expert Perspectives on Enterprise AI Training.
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
