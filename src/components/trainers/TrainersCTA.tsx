import Link from "next/link";

export function TrainersCTA() {
  return (
    <section className="bg-[#0c0c0c] py-20 lg:py-28 relative overflow-hidden">
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 120%, rgba(99,102,241,0.25) 0%, transparent 60%)",
        }}
      />

      <div className="eds-page-center relative z-10 text-center max-w-3xl mx-auto">
        <p className="text-[#6366F1] font-[family:var(--font-medium)] text-sm tracking-[0.15em] uppercase mb-4">
          PARTNER WITH EDSTELLAR
        </p>
        <h2 className="font-[family:var(--font-light)] text-white text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6">
          We're your strategic training partner to help move skills forward
        </h2>
        <p className="text-[#666666] text-base leading-relaxed mb-10">
          From a single cohort to a multi-region enterprise upskilling programme
          — Edstellar places the right trainer, with the right curriculum, in
          front of your team. Let's build your learning roadmap together.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-[#6366F1] hover:bg-[#4F46E5] text-white font-[family:var(--font-medium)] text-sm px-8 py-3.5 rounded-lg transition-colors duration-200 shadow-lg shadow-[#6366F1]/30"
          >
            Request a Demo
          </Link>
          <Link
            href="#"
            className="inline-flex items-center gap-2 border border-[#333333] hover:border-[#6366F1] text-[#b3b3b3] hover:text-white font-[family:var(--font-medium)] text-sm px-8 py-3.5 rounded-lg transition-colors duration-200"
          >
            Become a Trainer
          </Link>
        </div>
      </div>
    </section>
  );
}
