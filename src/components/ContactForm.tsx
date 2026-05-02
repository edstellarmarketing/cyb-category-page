"use client";

import { useState } from "react";
import { ArrowRightIcon } from "@/components/icons";

const COUNTRIES = [
  "United States",
  "United Kingdom",
  "India",
  "Australia",
  "Canada",
  "United Arab Emirates",
  "Singapore",
  "Germany",
  "France",
  "Saudi Arabia",
  "Japan",
  "Other",
];

const PHONE_NUMBERS = [
  { country: "USA", number: "+1 682 297 4830" },
  { country: "United Kingdom", number: "+44 151 453 4009" },
  { country: "India", number: "+91 636 483 3830" },
];

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [requirements, setRequirements] = useState("");

  return (
    <section id="contact" className="bg-white py-16 md:py-20">
      <div className="mtk-page-center">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left column — heading + supporting contact info */}
          <div className="lg:col-span-5">
            <h2
              className="text-[36px] leading-[1.05] sm:text-[42px] lg:text-[47px]"
              style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
            >
              Contact Us
            </h2>
            <p
              className="mt-4 max-w-md text-[17px] leading-[1.4] sm:text-[19px]"
              style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
            >
              Submit your Training Requirements below and we&apos;ll get in
              touch with you shortly.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p
                  className="text-[12px] uppercase tracking-[0.18em] text-mtk-gray-500"
                  style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                >
                  Email
                </p>
                <a
                  href="mailto:contact@edstellar.com"
                  className="mt-1 inline-block text-[18px] text-black transition-colors hover:text-[#6366F1]"
                  style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                >
                  contact@edstellar.com
                </a>
              </div>

              <div>
                <p
                  className="text-[12px] uppercase tracking-[0.18em] text-mtk-gray-500"
                  style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                >
                  Talk to a learning advisor
                </p>
                <ul className="mt-2 space-y-1.5">
                  {PHONE_NUMBERS.map((p) => (
                    <li key={p.country} className="flex items-baseline gap-3">
                      <span
                        className="w-32 text-[14px] text-mtk-gray-500"
                        style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                      >
                        {p.country}
                      </span>
                      <a
                        href={`tel:${p.number.replace(/\s+/g, "")}`}
                        className="text-[16px] text-black transition-colors hover:text-[#6366F1]"
                        style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                      >
                        {p.number}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-mtk-gray-200 bg-[#F5F3FF] p-5">
                <p
                  className="text-[12px] uppercase tracking-[0.18em] text-[#6366F1]"
                  style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                >
                  What you get
                </p>
                <ul
                  className="mt-3 space-y-2 text-[14px] leading-[1.45] text-black"
                  style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                >
                  {[
                    "Free training-needs analysis call within 24 hours",
                    "Custom proposal aligned to your team's cyber roadmap",
                    "Vendor-certified trainer shortlist with sample sessions",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#6366F1"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 shrink-0"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right column — form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-2xl border border-mtk-gray-200 bg-white p-6 shadow-sm sm:p-8 md:p-10"
              style={{ boxShadow: "0 10px 40px -20px rgba(99, 102, 241, 0.18)" }}
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field
                  id="cf-name"
                  label="Full Name*"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={setName}
                />
                <Field
                  id="cf-email"
                  label="Work Email*"
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={setEmail}
                />
                <Field
                  id="cf-company"
                  label="Company Name*"
                  type="text"
                  placeholder="Acme Corp."
                  value={company}
                  onChange={setCompany}
                />
                <Field
                  id="cf-jobtitle"
                  label="Job Title*"
                  type="text"
                  placeholder="CISO / Director of L&D / Head of IT"
                  value={jobTitle}
                  onChange={setJobTitle}
                />
                <div className="relative">
                  <label
                    htmlFor="cf-country"
                    className="absolute left-4 top-0 z-10 -translate-y-1/2 bg-white px-2 text-[12px] text-black"
                    style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                  >
                    Country*
                  </label>
                  <select
                    id="cf-country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full appearance-none rounded-md border border-mtk-gray-300 bg-white px-4 pt-4 pb-3 text-[16px] text-black outline-none transition-colors focus:border-[#6366F1]"
                    style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                  >
                    <option value="">Select country</option>
                    {COUNTRIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  <svg
                    aria-hidden="true"
                    className="pointer-events-none absolute right-4 top-1/2 h-3 w-3 -translate-y-1/2 text-mtk-gray-500"
                    viewBox="0 0 10 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 1l4 4 4-4" />
                  </svg>
                </div>
                <Field
                  id="cf-phone"
                  label="Phone Number*"
                  type="tel"
                  placeholder="+1 201 555 0123"
                  value={phone}
                  onChange={setPhone}
                />
              </div>

              <div className="relative mt-5">
                <label
                  htmlFor="cf-requirements"
                  className="absolute left-4 top-0 z-10 -translate-y-1/2 bg-white px-2 text-[12px] text-black"
                  style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                >
                  Tell us about your training requirements
                </label>
                <textarea
                  id="cf-requirements"
                  rows={5}
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder="Team size, target roles, certification goals, preferred delivery (virtual / on-site), timeline..."
                  className="w-full rounded-md border border-mtk-gray-300 bg-white px-4 pt-4 pb-3 text-[16px] text-black outline-none transition-colors focus:border-[#6366F1]"
                  style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                />
              </div>

              <p
                className="mt-4 text-[13px] leading-[1.5] text-mtk-gray-500"
                style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                By submitting this form, you agree to receive communications from
                Edstellar. We respect your privacy, see our{" "}
                <a href="#" className="text-[#6366F1] hover:underline">Privacy Policy</a>.
              </p>

              <button
                type="submit"
                className="group/cta mt-6 inline-flex items-center gap-2 rounded-full bg-[#6366F1] px-8 py-3.5 text-[14px] uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#4F46E5]"
                style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
              >
                Submit
                <ArrowRightIcon
                  width={16}
                  height={16}
                  className="transition-transform group-hover/cta:translate-x-0.5"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="absolute left-4 top-0 z-10 -translate-y-1/2 bg-white px-2 text-[12px] text-black"
        style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-md border border-mtk-gray-300 bg-white px-4 pt-4 pb-3 text-[16px] text-black outline-none transition-colors focus:border-[#6366F1]"
        style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
      />
    </div>
  );
}
