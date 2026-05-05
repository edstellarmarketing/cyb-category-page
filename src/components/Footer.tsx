"use client";

import { useState } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  ThreadsIcon,
  YouTubeIcon,
} from "@/components/icons";

const CATEGORIES = [
  { label: "Cybersecurity", href: "#" },
  { label: "Cloud Computing", href: "#" },
  { label: "Project Management", href: "#" },
  { label: "Data & Analytics", href: "#" },
  { label: "Leadership", href: "#" },
  { label: "DevOps", href: "#" },
  { label: "AI & Machine Learning", href: "#" },
];
const TRAINING_PROGRAMS = [
  { label: "CISSP Training", href: "#" },
  { label: "CEH v13 Training", href: "#" },
  { label: "CISM Training", href: "#" },
  { label: "CCSP Training", href: "#" },
  { label: "CompTIA Security+ Training", href: "#" },
  { label: "OSCP Training", href: "#" },
  { label: "ISO 27001 Lead Auditor Training", href: "#" },
];
const COMPANY = [
  { label: "About Edstellar", href: "#" },
  { label: "Trainers", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Become a Trainer", href: "#" },
  { label: "Careers", href: "#" },
];

function FloatingInput({
  id,
  label,
  type = "text",
  value,
  onChange,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="absolute left-4 top-0 -translate-y-1/2 bg-white px-2 text-[12px] text-black"
        style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-mtk-gray-300 bg-white px-4 pt-4 pb-3 text-[16px] text-black outline-none transition-colors focus:border-[#6366F1]"
        style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
      />
    </div>
  );
}

export function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  return (
    <footer className="relative bg-white pt-16 pb-10">
      <div className="mtk-page-center">
        <hr className="border-mtk-gray-200" />
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { heading: "Categories", links: CATEGORIES },
            { heading: "Training Programs", links: TRAINING_PROGRAMS },
            { heading: "Company", links: COMPANY },
          ].map((col) => (
            <div key={col.heading}>
              <h3
                className="mb-5 text-[20px] text-black"
                style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
              >
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[15px] text-black transition-colors hover:text-[#6366F1]"
                      style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              {col.heading === "Company" && (
                <div className="mt-8 flex items-center gap-4">
                  <a href="#" aria-label="Facebook" className="text-black hover:text-[#6366F1]">
                    <FacebookIcon width={22} height={22} />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="text-black hover:text-[#6366F1]">
                    <LinkedInIcon width={22} height={22} />
                  </a>
                  <a href="#" aria-label="Instagram" className="text-black hover:text-[#6366F1]">
                    <InstagramIcon width={22} height={22} />
                  </a>
                  <a href="#" aria-label="YouTube" className="text-black hover:text-[#6366F1]">
                    <YouTubeIcon width={22} height={22} />
                  </a>
                  <a href="#" aria-label="Threads" className="text-black hover:text-[#6366F1]">
                    <ThreadsIcon width={22} height={22} />
                  </a>
                </div>
              )}
            </div>
          ))}

          <div>
            <h3
              className="mb-5 text-[20px] text-black"
              style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
            >
              Get our cyber digest
            </h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-5 rounded-xl border border-mtk-gray-200 bg-white p-6"
            >
              <FloatingInput
                id="newsletter-name"
                label="Enter your name*"
                value={name}
                onChange={setName}
              />
              <FloatingInput
                id="newsletter-email"
                label="Enter your work email*"
                type="email"
                value={email}
                onChange={setEmail}
              />
              <label className="flex items-start gap-3 text-[14px] text-black">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 h-4 w-4 accent-[#6366F1]"
                />
                <span style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}>
                  I agree with the Edstellar Privacy Policy*
                </span>
              </label>
              <button
                type="submit"
                className="w-fit rounded-full bg-[#6366F1] px-6 py-3 text-[15px] text-white transition-colors hover:bg-[#818CF8]"
                style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-14 border-mtk-gray-200" />

        <div className="mt-6 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <span
            className="rounded-md bg-[#6366F1] px-5 py-2 text-[18px] italic tracking-wider text-white"
            style={{ fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif", fontWeight: 800 }}
          >
            EDSTELLAR
          </span>
          <ul
            className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[14px] text-black sm:text-[15px]"
            style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
          >
            <li>
              <a href="#" className="hover:text-[#6366F1]">Cookie Statement</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#6366F1]">Terms of Use</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#6366F1]">Privacy Policy</a>
            </li>
            <li className="text-mtk-gray-500">
              Copyright © 2026 Edstellar. All rights reserved
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
