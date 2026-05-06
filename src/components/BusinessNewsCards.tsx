import { NewsCard } from "@/components/NewsCard";
import type { NewsCard as NewsCardType } from "@/types/content";

const BLOGS: NewsCardType[] = [
  {
    category: "THREAT INSIGHTS",
    title: "Why Ransomware Keeps Winning Against Trained Teams",
    description:
      "An analysis of the human failure patterns behind enterprise ransomware breaches and why structured security awareness training and employee skilling interventions actually change outcomes.",
    image: "/images/cyber/industry-bfsi.jpg",
    imageAlt: "Ransomware threat analysis",
    href: "#",
  },
  {
    category: "TRAINING GUIDES",
    title: "How to Build a Role-Based Cybersecurity Training Program",
    description:
      "A step-by-step guide for L&D and security leaders to map roles, identify skill gaps, design cohort programs and measure outcomes.",
    image: "/images/cyber/more-curriculum.jpg",
    imageAlt: "Role-based training guide",
    href: "#",
  },
  {
    category: "INDUSTRY TRENDS",
    title: "The 2026 Enterprise Cybersecurity Skills Gap Report",
    description:
      "Survey findings from 1,200+ enterprise security and L&D leaders on where skill gaps are widest, where training budgets are going, and what is working.",
    image: "/images/cyber/cert-aws-sec.jpg",
    imageAlt: "Skills gap report",
    href: "#",
  },
  {
    category: "L&D STRATEGY",
    title: "How to Get CISO Buy-In for Your Cybersecurity Training Budget",
    description:
      "A practical guide for L&D leaders on framing employee training investment, reskilling budgets and group training ROI in the language of risk reduction and measurable security outcomes.",
    image: "/images/cyber/hero-team-training.jpg",
    imageAlt: "CISO buy-in",
    href: "#",
  },
];

export function BusinessNewsCards() {
  return (
    <section className="relative bg-white py-16 md:py-20">
      <div className="eds-page-center">
        <h2
          className="max-w-3xl text-[36px] leading-[1.05] sm:text-[42px] lg:text-[47px]"
          style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
        >
          Expert perspectives on enterprise cybersecurity.
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
