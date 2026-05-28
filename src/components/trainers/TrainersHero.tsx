import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export function TrainersHero() {
  return (
    <section className="relative bg-[#0c0c0c] overflow-hidden">
      {/* Radial glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "radial-gradient(circle at 68% 45%, rgba(99,102,241,0.22) 0%, transparent 55%), radial-gradient(circle at 18% 75%, rgba(239,107,81,0.12) 0%, transparent 48%)" }} />
      {/* Subtle grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,#fff 39px,#fff 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,#fff 39px,#fff 40px)" }} />

      <div className="eds-page-center relative z-10 pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20">

          {/* Left */}
          <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#6366F1]/15 border border-[#6366F1]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] animate-pulse" />
              <span className="text-[#6366F1] font-[family:var(--font-medium)] text-xs tracking-widest uppercase">Our Trainers</span>
            </div>

            <h1 className="font-[family:var(--font-light)] text-white text-4xl lg:text-[3.25rem] xl:text-[3.75rem] leading-[1.1] mb-6">
              Learn from{" "}
              <span className="relative">
                <span className="text-[#6366F1]">real-world experts</span>
                <span aria-hidden className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-[#6366F1] to-transparent" />
              </span>{" "}
              who love to teach
            </h1>

            <p className="text-[#b3b3b3] text-lg leading-relaxed mb-3">
              Edstellar trainers bring hands-on industry experience into the corporate classroom.
            </p>
            <p className="text-[#555] text-base leading-relaxed mb-10 max-w-xl">
              Of the 10,000+ subject-matter experts in our global network, only a carefully vetted
              fraction are deployed for Edstellar corporate engagements — active practitioners with
              verified credentials, proven facilitation skills, and a passion for adult learning.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="#trainers-list"
                className="eds-arrow-link inline-flex items-center gap-2 bg-[#6366F1] hover:bg-[#4F46E5] text-white font-[family:var(--font-medium)] text-sm px-7 py-3.5 rounded-lg transition-colors duration-200 shadow-lg shadow-[#6366F1]/30">
                Meet Our Trainers
                <span className="relative inline-flex w-4 h-4 overflow-hidden">
                  <ArrowRightIcon className="eds-arrow absolute inset-0 w-4 h-4" />
                  <ArrowRightIcon className="eds-arrow-fixed absolute inset-0 w-4 h-4 opacity-0 -translate-x-4" />
                </span>
              </Link>
              <Link href="#become-trainer"
                className="inline-flex items-center gap-2 border border-[#333] hover:border-[#6366F1]/60 text-[#999] hover:text-white font-[family:var(--font-medium)] text-sm px-7 py-3.5 rounded-lg transition-all duration-200">
                Become a Trainer
              </Link>
            </div>
          </div>

          {/* Right — stats card */}
          <div className="w-full lg:w-72 xl:w-80 flex-shrink-0">
            <div className="relative bg-[#111] border border-[#222] rounded-2xl p-6 overflow-hidden">
              <div aria-hidden className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#6366F1]/10 blur-2xl -translate-y-6 translate-x-6" />
              <p className="text-[#555] text-xs font-[family:var(--font-medium)] uppercase tracking-widest mb-5">Trainer network at a glance</p>
              <div className="space-y-5">
                {[
                  { val: "10,000+", label: "Vetted subject-matter experts" },
                  { val: "180+",    label: "Countries represented" },
                  { val: "4.8 / 5", label: "Average trainer rating" },
                  { val: "500+",    label: "Corporate skills covered" },
                  { val: "72 hrs",  label: "Avg. trainer deployment time" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-4 pb-5 border-b border-[#1d1d1b] last:pb-0 last:border-0">
                    <span className="flex-shrink-0 w-0.5 h-9 bg-gradient-to-b from-[#6366F1] to-[#6366F1]/30 rounded-full" />
                    <div>
                      <div className="text-white font-[family:var(--font-bold)] text-xl leading-none mb-0.5">{s.val}</div>
                      <div className="text-[#555] text-xs">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
