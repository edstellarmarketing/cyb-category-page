"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRightIcon } from "@/components/icons";
import type { CorporateNewsCard } from "@/types/content";

const CARDS: CorporateNewsCard[] = [
  {
    category: "FLAGSHIP",
    title: "CISSP Training, Information Systems Security",
    image:
      "/images/cyber/cert-cissp.jpg",
    imageAlt: "CISSP",
    href: "#",
  },
  {
    category: "ETHICAL HACKING",
    title: "CEH v13 Training, Ethical Hacking (AI-powered)",
    image: "/images/cyber/cert-ceh.jpg",
    imageAlt: "CEH",
    href: "#",
  },
  {
    category: "GOVERNANCE",
    title: "CISM Training, Information Security Management",
    image:
      "/images/cyber/cert-cism.jpg",
    imageAlt: "CISM",
    href: "#",
  },
  {
    category: "CLOUD",
    title: "CCSP Training, Cloud Security Professional",
    image: "/images/cyber/cert-ccsp.jpg",
    imageAlt: "CCSP",
    href: "#",
  },
  {
    category: "OFFENSIVE SECURITY",
    title: "OSCP Training, Offensive Security",
    image: "/images/cyber/cert-oscp.jpg",
    imageAlt: "OSCP",
    href: "#",
  },
  {
    category: "FOUNDATION",
    title: "CompTIA Security+, Vendor-neutral baseline",
    image: "/images/cyber/cert-secplus.jpg",
    imageAlt: "Security+",
    href: "#",
  },
  {
    category: "AUDIT",
    title: "ISO 27001 Lead Auditor Training, Secure your ISMS",
    image: "/images/cyber/cert-iso27001.jpg",
    imageAlt: "ISO 27001",
    href: "#",
  },
  {
    category: "CLOUD",
    title: "AWS Security Training, Specialty",
    image:
      "/images/cyber/cert-aws-sec.jpg",
    imageAlt: "AWS Security",
    href: "#",
  },
  {
    category: "PRIVACY",
    title: "GDPR & DPO, Data protection officer training",
    image: "/images/cyber/cert-gdpr.jpg",
    imageAlt: "GDPR DPO",
    href: "#",
  },
];

const VISIBLE = 4;

export function CorporateNewsSlider() {
  const [start, setStart] = useState(0);
  const maxStart = Math.max(0, CARDS.length - VISIBLE);
  const visible = CARDS.slice(start, start + VISIBLE);

  return (
    <section className="relative bg-[#F5F3FF] py-16 md:py-20">
      <div className="mtk-page-center">
        <p
          className="mb-3 text-[12px] uppercase tracking-wider text-black sm:text-[13px]"
          style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
        >
          FEATURED PROGRAMS
        </p>
        <h2
          className="text-[36px] leading-[1.05] sm:text-[42px] lg:text-[47px]"
          style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
        >
          It all starts with a strong foundation.
        </h2>
        <p
          className="mt-4 max-w-3xl text-[17px] leading-[1.35] sm:text-[19px]"
          style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
        >
          Instructor-led cybersecurity training programs trusted
          by enterprise security teams worldwide.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="group flex flex-col overflow-hidden rounded-xl bg-white transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-square overflow-hidden bg-[#0c0c0c]">
                <Image
                  src={c.image}
                  alt={c.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <span
                  className="text-[12px] uppercase tracking-wider text-[#6366F1] sm:text-[13px]"
                  style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                >
                  {c.category}
                </span>
                <h3
                  className="text-[18px] leading-[1.25] text-black sm:text-[20px]"
                  style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                >
                  {c.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-4">
          <div className="h-1 flex-1 rounded-full bg-black/10">
            <div
              className="h-full rounded-full bg-[#6366F1] transition-all"
              style={{ width: `${((start + VISIBLE) / CARDS.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Next"
        disabled={start >= maxStart}
        onClick={() => setStart((s) => Math.min(s + 1, maxStart))}
        className="absolute right-2 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#6366F1] text-white shadow-lg transition-opacity hover:bg-[#818CF8] disabled:opacity-40 lg:flex"
      >
        <ArrowRightIcon width={22} height={22} />
      </button>
      {start > 0 && (
        <button
          type="button"
          aria-label="Previous"
          onClick={() => setStart((s) => Math.max(s - 1, 0))}
          className="absolute left-2 top-1/2 hidden h-12 w-12 -translate-y-1/2 rotate-180 items-center justify-center rounded-full bg-[#6366F1] text-white shadow-lg transition-opacity hover:bg-[#818CF8] lg:flex"
        >
          <ArrowRightIcon width={22} height={22} />
        </button>
      )}
    </section>
  );
}
