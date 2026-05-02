import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";

type Pillar = {
  title: string;
  body: string;
  tags: string[];
};

const PILLARS: Pillar[] = [
  {
    title: "Strategy and governance",
    body: "Define the security policies, frameworks and standards that the rest of the business will be measured against, aligned to NIST CSF, ISO 27001 and CIS controls.",
    tags: ["NIST CSF", "ISO 27001", "CIS"],
  },
  {
    title: "Threat intelligence and risk",
    body: "Centralise the view of attack surfaces, emerging threats and prioritised risk so that decisions are made on data, not anecdote.",
    tags: ["Risk register", "Threat intel", "Vuln mgmt"],
  },
  {
    title: "Security operations",
    body: "Run the SOC, monitor incidents and respond in real time with consistent playbooks across SIEM, SOAR and EDR tooling.",
    tags: ["SIEM", "SOAR", "EDR / XDR"],
  },
  {
    title: "Architecture and engineering",
    body: "Design secure cloud, network and application reference patterns, and embed zero-trust and DevSecOps into every new build.",
    tags: ["Zero Trust", "Cloud security", "DevSecOps"],
  },
  {
    title: "Training and awareness",
    body: "Educate engineers, employees and leaders on secure practices, certify role-based skills and build a durable security culture.",
    tags: ["Role-based paths", "Phishing", "Culture"],
  },
  {
    title: "Innovation and R&D",
    body: "Evaluate new tools, AI in security and automation, and turn experiments into reusable internal frameworks the whole organisation can adopt.",
    tags: ["AI in security", "Automation", "Reusable kits"],
  },
];

type Phase = {
  range: string;
  title: string;
  body: string;
  outcomes: string[];
};

const PHASES: Phase[] = [
  {
    range: "0 to 90 days",
    title: "Stand up the foundations",
    body: "Set the security framework, baseline policies, risk register and awareness program so the rest of the business has a single source of truth from day one.",
    outcomes: [
      "Security framework selected (NIST or ISO 27001)",
      "Baseline policies and risk register live",
      "Org-wide awareness training rolled out",
    ],
  },
  {
    range: "3 to 9 months",
    title: "Operationalise SOC capability",
    body: "Stand up monitoring, detection and incident response, even if outsourced initially, and prove the operating model on real telemetry.",
    outcomes: [
      "SOC operational, in-house or co-managed",
      "SIEM tuned and detections in production",
      "Vulnerability assessments running on cadence",
    ],
  },
  {
    range: "9 to 18 months",
    title: "Mature into a full CoE",
    body: "Layer in automation, threat intelligence and DevSecOps so security scales with the business rather than slowing it down.",
    outcomes: [
      "Threat intelligence feeding detections",
      "DevSecOps integrated into delivery pipelines",
      "Automation reducing manual analyst load",
    ],
  },
];

const OUTCOMES = [
  { stat: "Consistency", caption: "One set of standards across every business unit and geography." },
  { stat: "Scalability", caption: "Security capability that grows with the business, not in spite of it." },
  { stat: "Faster response", caption: "Centralised expertise that compresses incident response and recovery." },
  { stat: "Cost efficiency", caption: "Eliminate duplicated tools, vendors and effort across functions." },
  { stat: "Stronger trust", caption: "Enterprise customers and regulators see a single, credible posture." },
];

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
              Start with a Cybersecurity{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Center of Excellence</span>
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
              A Cybersecurity Center of Excellence is more than a security
              team. It is the operating model that defines how an enterprise
              thinks about, governs and scales cybersecurity across every
              function. For most organisations, this is the critical starting
              point: the brain and command centre for security strategy,
              governance and execution.
            </p>
            <p
              className="mt-4 text-[16px] leading-[1.6] sm:text-[18px]"
              style={{
                color: "#374151",
                fontFamily:
                  "'Riona Sans Light', Helvetica, Arial, sans-serif",
              }}
            >
              Without a CoE, security stays fragmented and reactive. With one,
              you get consistent standards, scalable capability, faster
              response, cost efficiency, and the kind of trust enterprise
              customers and regulators expect.
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

        <div className="mt-12">
          <h3
            className="text-[22px] sm:text-[26px]"
            style={{
              color: "#1B1D52",
              fontFamily:
                "'Riona Sans Regular', Helvetica, Arial, sans-serif",
            }}
          >
            The six pillars of a mature CoE
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p) => (
              <article
                key={p.title}
                className="rounded-2xl border bg-white p-7 transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{ borderColor: "#E3E6F0" }}
              >
                <h4
                  className="text-[20px] sm:text-[22px]"
                  style={{
                    color: "#1B1D52",
                    fontFamily:
                      "'Riona Sans Regular', Helvetica, Arial, sans-serif",
                  }}
                >
                  {p.title}
                </h4>
                <p
                  className="mt-3 text-[14px] leading-[1.55] sm:text-[15px]"
                  style={{
                    color: "#374151",
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  {p.body}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border px-3 py-1 text-[11px]"
                      style={{
                        borderColor: "#E3E6F0",
                        color: "#6B7280",
                        fontFamily:
                          "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div
          className="mt-16 rounded-2xl p-8 sm:p-10"
          style={{ backgroundColor: "#F7F8FC" }}
        >
          <h3
            className="text-[22px] sm:text-[26px]"
            style={{
              color: "#1B1D52",
              fontFamily:
                "'Riona Sans Regular', Helvetica, Arial, sans-serif",
            }}
          >
            A practical 18-month blueprint to build your CoE
          </h3>
          <p
            className="mt-3 max-w-3xl text-[15px] leading-[1.55] sm:text-[16px]"
            style={{
              color: "#374151",
              fontFamily:
                "'Riona Sans Light', Helvetica, Arial, sans-serif",
            }}
          >
            Most enterprises overcomplicate the CoE rollout and stall before
            they get value. A real CoE is iterative, business-aligned and
            outcome-driven. Edstellar partners with you to ship it in three
            measured phases.
          </p>

          <ol className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {PHASES.map((phase, idx) => (
              <li
                key={phase.range}
                className="rounded-2xl border bg-white p-6 sm:p-7"
                style={{ borderColor: "#E3E6F0" }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[14px]"
                    style={{
                      backgroundColor: "#1B1D52",
                      color: "#FFFFFF",
                      fontFamily:
                        "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {idx + 1}
                  </span>
                  <span
                    className="text-[12px] uppercase tracking-[0.12em]"
                    style={{
                      color: "#6B7280",
                      fontFamily:
                        "'Riona Sans Bold', Helvetica, Arial, sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    Phase {idx + 1} | {phase.range}
                  </span>
                </div>
                <h4
                  className="mt-4 text-[20px] sm:text-[22px]"
                  style={{
                    color: "#1B1D52",
                    fontFamily:
                      "'Riona Sans Regular', Helvetica, Arial, sans-serif",
                  }}
                >
                  {phase.title}
                </h4>
                <p
                  className="mt-3 text-[14px] leading-[1.55] sm:text-[15px]"
                  style={{
                    color: "#374151",
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  {phase.body}
                </p>
                <ul
                  className="mt-4 space-y-2 border-t pt-4"
                  style={{ borderColor: "#E3E6F0" }}
                >
                  {phase.outcomes.map((o) => (
                    <li
                      key={o}
                      className="flex items-start gap-2 text-[13px] leading-[1.5] sm:text-[14px]"
                      style={{
                        color: "#374151",
                        fontFamily:
                          "'Riona Sans Light', Helvetica, Arial, sans-serif",
                      }}
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: "#C5E826" }}
                      />
                      {o}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16">
          <h3
            className="text-[22px] sm:text-[26px]"
            style={{
              color: "#1B1D52",
              fontFamily:
                "'Riona Sans Regular', Helvetica, Arial, sans-serif",
            }}
          >
            What enterprises gain from a real CoE
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {OUTCOMES.map((o) => (
              <div
                key={o.stat}
                className="rounded-2xl border bg-white p-5"
                style={{ borderColor: "#E3E6F0" }}
              >
                <p
                  className="text-[18px] sm:text-[20px]"
                  style={{
                    color: "#1B1D52",
                    fontFamily:
                      "'Riona Sans Regular', Helvetica, Arial, sans-serif",
                  }}
                >
                  {o.stat}
                </p>
                <p
                  className="mt-3 text-[13px] leading-[1.5] sm:text-[14px]"
                  style={{
                    color: "#374151",
                    fontFamily:
                      "'Riona Sans Light', Helvetica, Arial, sans-serif",
                  }}
                >
                  {o.caption}
                </p>
              </div>
            ))}
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
            Build your Cybersecurity CoE with Edstellar
            <ArrowRightIcon width={16} height={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 text-[13px] uppercase tracking-[0.1em] transition-colors hover:bg-[#F7F8FC] sm:text-[14px]"
            style={{
              borderColor: "#1B1D52",
              color: "#1B1D52",
              fontFamily:
                "'Riona Sans Bold', Helvetica, Arial, sans-serif",
              fontWeight: 600,
            }}
          >
            Run a security maturity assessment
          </a>
        </div>
      </div>
    </section>
  );
}
