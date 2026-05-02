import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";

type Course = {
  category: string;
  title: string;
  duration: string;
  delivery: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
};

const COURSES: Course[] = [
  {
    category: "Identity & Access",
    title: "CyberArk Training",
    duration: "16 - 24 hrs",
    delivery: "Instructor-led (On-site/Virtual)",
    description:
      "Master Privileged Access Management with CyberArk, vault administration, PSM, CPM and policy-driven credential rotation.",
    image: "/images/cyber/course-iam.jpg",
    imageAlt: "CyberArk training",
    href: "https://www.edstellar.com/course/cyberark-training",
  },
  {
    category: "Threat Defense",
    title: "Ransomware Prevention",
    duration: "8 - 16 hrs",
    delivery: "Instructor-led (On-site/Virtual)",
    description:
      "Identify ransomware threats, prevent system breaches and build a resilient response playbook for your team.",
    image: "/images/cyber/cert-secplus.jpg",
    imageAlt: "Ransomware prevention",
    href: "https://www.edstellar.com/course/ransomware-prevention-training",
  },
  {
    category: "Offensive Security",
    title: "Advanced Cybersecurity Threat Simulation",
    duration: "24 - 32 hrs",
    delivery: "Instructor-led (On-site/Virtual)",
    description:
      "Hands-on red-team simulation lab covering APTs, lateral movement, AD attacks and post-exploitation in realistic enterprise environments.",
    image: "/images/cyber/cert-oscp.jpg",
    imageAlt: "Threat simulation",
    href: "https://www.edstellar.com/course/advanced-cybersecurity-threat-simulation-training",
  },
  {
    category: "Data Privacy",
    title: "Personally Identifiable Information (PII)",
    duration: "8 - 16 hrs",
    delivery: "Instructor-led (On-site/Virtual)",
    description:
      "Identify and classify sensitive PII, apply data-minimization controls and align with GDPR, DPDP and CCPA obligations.",
    image: "/images/cyber/cert-gdpr.jpg",
    imageAlt: "PII training",
    href: "https://www.edstellar.com/course/personally-identifiable-information-pii-training",
  },
];

function CourseCard({ course }: { course: Course }) {
  return (
    <a
      href={course.href}
      target="_blank"
      rel="noopener"
      className="mtk-arrow-link group flex h-full flex-col overflow-hidden rounded-xl border border-mtk-gray-200 bg-white transition-all hover:-translate-y-0.5 hover:border-[#6366F1]/40 hover:shadow-lg"
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-[#0c0c0c]">
        <Image
          src={course.image}
          alt={course.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span
          className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-sm border border-white/30 bg-black/40 px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-white backdrop-blur-sm"
          style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />
          {course.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 px-5 py-5 sm:px-6">
        <h3
          className="text-[20px] leading-[1.2] text-black sm:text-[22px]"
          style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
        >
          {course.title}
        </h3>
        <div
          className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-mtk-gray-500"
          style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
        >
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-[#6366F1]" /> {course.duration}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-[#6366F1]" /> {course.delivery}
          </span>
        </div>
        <p
          className="text-[15px] leading-[1.4] text-black sm:text-[16px]"
          style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
        >
          {course.description}
        </p>
        <span
          className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[13px] uppercase tracking-[0.14em] text-[#6366F1]"
          style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
        >
          View course
          <ArrowRightIcon className="mtk-arrow" width={16} height={16} />
        </span>
      </div>
    </a>
  );
}

export function ProductNewsCards() {
  return (
    <section className="relative bg-white py-16 md:py-20">
      <div className="mtk-page-center">
        <h2
          className="text-[36px] leading-[1.05] sm:text-[42px] lg:text-[47px]"
          style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
        >
          Industry-aligned cybersecurity courses your security team can trust
        </h2>
        <p
          className="mt-4 max-w-3xl text-[17px] leading-[1.35] sm:text-[19px]"
          style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
        >
          A curated selection from Edstellar&apos;s 200+ enterprise cybersecurity programs, delivered live, on-site or virtual, and backed by a pass guarantee on certification tracks.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COURSES.map((c) => (
            <CourseCard key={c.title} course={c} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-mtk-gray-200 bg-[#F5F3FF] px-8 py-6 sm:flex-row">
          <div>
            <h3
              className="text-[20px] text-black sm:text-[22px]"
              style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
            >
              Looking for the full Edstellar cyber catalog?
            </h3>
            <p
              className="mt-1 text-[15px] text-mtk-gray-500"
              style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
            >
              Browse all 200+ programs or get our latest course catalog by email.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#6366F1] bg-[#6366F1] px-6 py-3 text-[14px] uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#4F46E5]"
              style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
            >
              Request Catalog
              <ArrowRightIcon width={16} height={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-black px-6 py-3 text-[14px] uppercase tracking-[0.12em] text-black transition-colors hover:border-[#6366F1] hover:text-[#6366F1]"
              style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
            >
              All Courses
              <ArrowRightIcon width={16} height={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
