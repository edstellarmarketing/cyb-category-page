import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";

export function CyberCoE() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mtk-page-center">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <h2
              className="text-[32px] leading-[1.08] sm:text-[40px] lg:text-[46px]"
              style={{
                color: "#1B1D52",
                fontFamily:
                  "'Riona Sans Light', Helvetica, Arial, sans-serif",
              }}
            >
              Turn Cybersecurity Training into{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Enterprise Capability</span>
                <span
                  aria-hidden="true"
                  className="absolute bottom-1 left-0 right-0 -z-0 h-2.5 sm:h-3"
                  style={{
                    backgroundColor: "#C5E826",
                    opacity: 0.55,
                  }}
                />
              </span>
              .
            </h2>
            <p
              className="mt-5 text-[16px] leading-[1.6] sm:text-[18px]"
              style={{
                color: "#374151",
                fontFamily:
                  "'Riona Sans Light', Helvetica, Arial, sans-serif",
              }}
            >
              A Cybersecurity Center of Excellence is the operating model that
              defines how your organisation governs, develops and scales
              cybersecurity capability across every team and geography. Without
              one, skills stay fragmented, standards vary by team, and training
              investment rarely connects to business outcomes. With a CoE, every
              role has a defined competency baseline, every cohort is measured
              against it, and capability grows in step with the business.
              Edstellar partners with enterprise L&amp;D and security leaders to
              deliver the workforce training foundation the CoE runs on —
              customised, instructor-led training programs mapped to your roles,
              your stack and the outcomes your leadership reports on.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div
              className="relative overflow-hidden rounded-2xl border shadow-sm"
              style={{ borderColor: "#E3E6F0", aspectRatio: "5 / 4" }}
            >
              <Image
                src="/images/cyber/coe-team.png"
                alt="Cybersecurity team collaborating inside an enterprise security operations centre"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13px] uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90 sm:text-[14px]"
            style={{
              backgroundColor: "#1B1D52",
              fontFamily:
                "'Riona Sans Bold', Helvetica, Arial, sans-serif",
              fontWeight: 600,
            }}
          >
            Partner with Edstellar
            <ArrowRightIcon width={16} height={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
