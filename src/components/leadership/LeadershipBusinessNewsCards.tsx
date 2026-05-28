import { NewsCard } from "@/components/NewsCard";
import type { NewsCard as NewsCardType } from "@/types/content";

const BLOGS: NewsCardType[] = [
  {
    category: "LEADERSHIP INSIGHTS",
    title: "Why Your Best Individual Performers Make Struggling First-Time Managers",
    description:
      "An analysis of the IC-to-manager gap and the development interventions that actually change the outcome for newly promoted leaders.",
    image: "/images/cyber/hero-ai.jpg",
    imageAlt: "First-time manager development analysis",
    href: "#",
  },
  {
    category: "TRAINING GUIDES",
    title: "How to Build a Tiered Leadership Development Program",
    description:
      "A step-by-step guide for L&D and HR leaders to map manager tiers, identify capability gaps, design cohort programs and measure outcomes.",
    image: "/images/cyber/more-curriculum.jpg",
    imageAlt: "Tiered leadership development guide",
    href: "#",
  },
  {
    category: "INDUSTRY TRENDS",
    title: "The 2026 Leadership Readiness Report",
    description:
      "A survey of enterprise HR and L&D leaders on where leadership gaps are widest in 2026 and where development budgets are going.",
    image: "/images/cyber/course-ai-data.jpg",
    imageAlt: "Leadership readiness report",
    href: "#",
  },
  {
    category: "L&D STRATEGY",
    title: "How to Get Executive Buy-In for Your Leadership Training Budget",
    description:
      "A practical guide for L&D leaders on framing manager development and group training ROI in the language of engagement, retention and business outcomes.",
    image: "/images/cyber/hero-team-training.jpg",
    imageAlt: "Executive buy-in for leadership training",
    href: "#",
  },
];

export function LeadershipBusinessNewsCards() {
  return (
    <section className="relative bg-white py-16 md:py-20">
      <div className="eds-page-center">
        <h2
          className="max-w-3xl text-[36px] leading-[1.05] sm:text-[42px] lg:text-[47px]"
          style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
        >
          Expert Perspectives on Enterprise Leadership Training.
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
