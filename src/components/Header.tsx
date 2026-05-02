"use client";

import Link from "next/link";
import { useState } from "react";
import { GlobeIcon, MenuIcon, SearchIcon } from "@/components/icons";
import type { NavItem } from "@/types/content";

const NAV: NavItem[] = [
  {
    label: "Categories",
    href: "#categories",
    children: [
      { label: "Cybersecurity", href: "#" },
      { label: "Cloud Computing", href: "#" },
      { label: "Project Management", href: "#" },
      { label: "Data & Analytics", href: "#" },
      { label: "Leadership & Soft Skills", href: "#" },
      { label: "DevOps", href: "#" },
      { label: "AI & Machine Learning", href: "#" },
    ],
  },
  {
    label: "Certifications",
    href: "#certs",
    children: [
      { label: "CISSP", href: "#" },
      { label: "CEH v13", href: "#" },
      { label: "CISM", href: "#" },
      { label: "CCSP", href: "#" },
      { label: "CompTIA Security+", href: "#" },
      { label: "OSCP", href: "#" },
      { label: "ISO 27001 Lead Auditor", href: "#" },
    ],
  },
  { label: "For Business", href: "#business" },
  {
    label: "Company",
    href: "#company",
    children: [
      { label: "About Edstellar", href: "#" },
      { label: "Trainers", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Become a Trainer", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  { label: "Resources", href: "#resources" },
  { label: "Blog", href: "#blog" },
  { label: "Get a Quote", href: "#quote" },
];

const LANGUAGES = ["English", "Deutsch", "Français", "Español", "العربية", "हिन्दी", "中文", "日本語"];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 border-b border-mtk-gray-200 bg-white">
      <div className="mtk-page-center flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Edstellar home">
          <span
            className="text-[20px] italic tracking-wider text-[#6366F1]"
            style={{ fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif", fontWeight: 800 }}
          >
            EDSTELLAR
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((item) => (
            <div
              key={item.label}
              className="relative py-5"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="text-[15px] text-black transition-colors hover:text-[#6366F1]"
                style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
              >
                {item.label}
              </Link>
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 z-50 min-w-[240px] rounded-md border border-mtk-gray-200 bg-white py-3 shadow-lg">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-5 py-2 text-[14px] text-black transition-colors hover:bg-[#F5F3FF] hover:text-[#6366F1]"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Search"
            onClick={() => {
              setSearchOpen((v) => !v);
              setLangOpen(false);
            }}
            className="text-black transition-colors hover:text-[#6366F1]"
          >
            <SearchIcon width={22} height={22} />
          </button>
          <div className="relative">
            <button
              type="button"
              aria-label="Language"
              onClick={() => {
                setLangOpen((v) => !v);
                setSearchOpen(false);
              }}
              className="text-black transition-colors hover:text-[#6366F1]"
            >
              <GlobeIcon width={22} height={22} />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full z-50 mt-2 w-[200px] rounded-md border border-mtk-gray-200 bg-white py-2 shadow-lg">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    className="block w-full px-4 py-2 text-left text-[14px] text-black hover:bg-[#F5F3FF] hover:text-[#6366F1]"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setMobileOpen(true)}
            className="text-black lg:hidden"
          >
            <MenuIcon width={26} height={26} />
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-mtk-gray-200 bg-white">
          <div className="mtk-page-center py-4">
            <input
              type="search"
              autoFocus
              placeholder="Search courses, certifications, or trainers..."
              className="w-full rounded-md border border-mtk-gray-300 px-4 py-3 text-[16px] outline-none focus:border-[#6366F1]"
            />
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-white lg:hidden">
          <div className="flex h-16 items-center justify-between border-b border-mtk-gray-200 px-6">
            <span
              className="text-[20px] italic tracking-wider text-[#6366F1]"
              style={{ fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif", fontWeight: 800 }}
            >
              EDSTELLAR
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="text-2xl text-black"
            >
              ×
            </button>
          </div>
          <nav className="px-6 py-6">
            {NAV.map((item) => (
              <div key={item.label} className="border-b border-mtk-gray-200 py-4">
                <Link
                  href={item.href}
                  className="text-[18px] text-black"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="mt-3 flex flex-col gap-2 pl-4">
                    {item.children.map((c) => (
                      <Link
                        key={c.label}
                        href={c.href}
                        className="text-[15px] text-mtk-gray-500"
                        onClick={() => setMobileOpen(false)}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
