"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

type Course = { title: string; href: string };
type Category = { label: string; courses: Course[] };

const CATEGORIES: Category[] = [
  {
    label: "Cybersecurity",
    courses: [
      { title: "CISSP Certification Prep", href: "#" },
      { title: "CEH v13 – Ethical Hacking", href: "#" },
      { title: "SOC Analyst Bootcamp", href: "#" },
      { title: "ISO 27001 Lead Auditor", href: "#" },
      { title: "CompTIA Security+", href: "#" },
      { title: "Incident Response & Forensics", href: "#" },
    ],
  },
  {
    label: "Cloud & DevOps",
    courses: [
      { title: "AWS Solutions Architect Professional", href: "#" },
      { title: "Google Cloud Professional Architect", href: "#" },
      { title: "Kubernetes (CKA / CKS)", href: "#" },
      { title: "Terraform & Infrastructure as Code", href: "#" },
      { title: "Azure Administrator AZ-104", href: "#" },
      { title: "CI/CD & DevSecOps Pipelines", href: "#" },
    ],
  },
  {
    label: "Leadership & Management",
    courses: [
      { title: "Executive Leadership Programme", href: "#" },
      { title: "Agile & SAFe Transformation", href: "#" },
      { title: "PMP Project Management", href: "#" },
      { title: "Coaching & Mentoring Skills", href: "#" },
      { title: "Negotiation & Influence", href: "#" },
      { title: "Change Management (Prosci)", href: "#" },
    ],
  },
  {
    label: "Data & AI",
    courses: [
      { title: "Python for Data Science", href: "#" },
      { title: "Machine Learning Engineering", href: "#" },
      { title: "Power BI & Data Visualisation", href: "#" },
      { title: "AI Strategy for Business Leaders", href: "#" },
      { title: "SQL & Database Fundamentals", href: "#" },
      { title: "Generative AI & Prompt Engineering", href: "#" },
    ],
  },
];

export function TrainersCourseCategories() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="eds-page-center">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-[family:var(--font-light)] text-[#0c0c0c] text-3xl lg:text-4xl leading-tight mb-4">
            Get instant access to 500+ corporate training programmes
          </h2>
          <p className="text-[#666666] text-base">
            Browse by skills area — all programmes are delivered by vetted
            Edstellar trainers in live, instructor-led sessions.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-[family:var(--font-medium)] transition-all duration-200 ${
                active === i
                  ? "bg-[#6366F1] text-white shadow-lg shadow-[#6366F1]/25"
                  : "bg-[#f5f5f5] text-[#333333] hover:bg-[#e4e5e6]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Course grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
          {CATEGORIES[active].courses.map((course) => (
            <Link
              key={course.title}
              href={course.href}
              className="eds-arrow-link group flex items-center justify-between gap-3 p-4 rounded-xl border border-[#e4e5e6] hover:border-[#6366F1]/50 hover:bg-[#6366F1]/3 transition-all duration-200"
            >
              <span className="font-[family:var(--font-medium)] text-[#0c0c0c] text-sm group-hover:text-[#6366F1] transition-colors">
                {course.title}
              </span>
              <span className="relative inline-flex w-4 h-4 flex-shrink-0 overflow-hidden text-[#6366F1]">
                <ArrowRightIcon className="eds-arrow absolute inset-0 w-4 h-4" />
                <ArrowRightIcon className="eds-arrow-fixed absolute inset-0 w-4 h-4 opacity-0 -translate-x-4" />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-[#0c0c0c] hover:bg-[#1d1d1b] text-white font-[family:var(--font-medium)] text-sm px-6 py-3 rounded-lg transition-colors duration-200"
          >
            View full course catalogue
          </Link>
        </div>
      </div>
    </section>
  );
}
