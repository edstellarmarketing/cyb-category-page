import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Cloud, Layers, GraduationCap, FileCheck, Heart, ShieldAlert, Globe, Users,
  Factory, Cpu, AlertTriangle, ShoppingCart, CreditCard, Code, Car, Siren,
  Shield, ScanEye, FileText, Rocket, Key, Activity, Power, Landmark, Radio,
  Wifi, Network,
} from "lucide-react";
import { CASE_STUDIES, getCaseStudy, type ChallengeIcon } from "@/data/case-studies";
import { CaseStudyDownloadButton, CaseStudyCopyLink } from "@/components/CaseStudyCTA";

const ACCENT = "#6366F1";
const LIME = "#C5E826";
const FONT_LIGHT = "'Riona Sans Light', Helvetica, Arial, sans-serif";
const FONT_REGULAR = "'Riona Sans Regular', Helvetica, Arial, sans-serif";
const FONT_MEDIUM = "'Riona Sans Medium', Helvetica, Arial, sans-serif";
const FONT_BOLD = "'Riona Sans Bold', Helvetica, Arial, sans-serif";

const ICON_MAP: Record<ChallengeIcon, React.ComponentType<{ size?: number; strokeWidth?: number; color?: string }>> = {
  cloud: Cloud, layers: Layers, "graduation-cap": GraduationCap, "file-check": FileCheck,
  heart: Heart, "shield-alert": ShieldAlert, globe: Globe, users: Users,
  factory: Factory, cpu: Cpu, "alert-triangle": AlertTriangle, "shopping-cart": ShoppingCart,
  "credit-card": CreditCard, code: Code, car: Car, siren: Siren,
  shield: Shield, "scan-eye": ScanEye, "file-text": FileText, rocket: Rocket,
  key: Key, activity: Activity, power: Power, landmark: Landmark,
  radio: Radio, wifi: Wifi, network: Network,
};

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getCaseStudy(slug);
  if (!data) notFound();

  const isNewLayout = !!data.intervention;

  return (
    <main>
      <Hero data={data.hero} />
      <Intro data={data.intro} />
      <Challenges items={data.challenges} />
      {isNewLayout ? (
        <>
          <InterventionSection data={data.intervention!} />
          {data.programSpecs && <ProgramSpecsSection items={data.programSpecs} />}
          {data.metrics && <MetricsSection items={data.metrics} />}
          {data.quote && <QuoteSection data={data.quote} />}
        </>
      ) : (
        <>
          <SolutionSection data={data.solution} />
          <Results items={data.results} />
          <MeetSection data={data.meet} />
        </>
      )}
    </main>
  );
}

function Hero({ data }: { data: { title: string; image: string; alt: string } }) {
  return (
    <>
      {/* Print-only document header — hidden on screen, shown when printing */}
      <div
        className="print-only hidden items-center justify-between border-b border-[#E5E7EB] pb-4 pt-2"
        style={{ marginBottom: 32 }}
      >
        <div>
          <p style={{ fontFamily: FONT_BOLD, fontSize: 18, color: "#6366F1", margin: 0 }}>
            Edstellar
          </p>
          <p style={{ fontFamily: FONT_LIGHT, fontSize: 11, color: "#6B7280", margin: "2px 0 0", textTransform: "uppercase", letterSpacing: "0.12em" }}>
            Corporate Training Partner
          </p>
        </div>
        <p style={{ fontFamily: FONT_LIGHT, fontSize: 12, color: "#6B7280", margin: 0 }}>
          edstellar.com
        </p>
      </div>

      <section
        className="relative w-full overflow-hidden"
        style={{ height: "calc(100vh - 64px - 160px)", minHeight: 520, maxHeight: 780 }}
      >
        <div className="absolute inset-0 z-0">
          <Image src={data.image} alt={data.alt} fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.35) 100%)" }} />
        </div>
        <div
          className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col justify-center px-6 md:px-10 lg:px-20"
          style={{ height: "calc(100vh - 64px - 160px)", minHeight: 520, maxHeight: 780 }}
        >
          <p
            className="mb-5 text-[13px] uppercase tracking-[0.18em]"
            style={{ fontFamily: FONT_MEDIUM, color: "rgba(255,255,255,0.55)" }}
          >
            Case Study
          </p>
          <h1
            className="text-[26px] leading-[32px] md:text-[34px] md:leading-[40px] lg:text-[44px] lg:leading-[52px]"
            style={{
              fontFamily: FONT_LIGHT,
              color: "#fff",
              maxWidth: 760,
              margin: 0,
            }}
          >
            {data.title}
          </h1>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <CaseStudyDownloadButton />
            <CaseStudyCopyLink />
          </div>
        </div>
      </section>
    </>
  );
}

function Intro({ data }: { data: { heading: string; body: string } }) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1B1D52 0%, #312E81 55%, #4338CA 100%)",
        minHeight: 450,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 80% 20%, rgba(99, 102, 241, 0.35) 0%, rgba(27, 29, 82, 0) 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10 lg:px-20">
        <h2
          className="text-[28px] leading-[34px] md:text-[36px] md:leading-[42px] lg:text-[44px] lg:leading-[49.28px]"
          style={{ fontFamily: FONT_LIGHT, color: "#fff", margin: "0 0 30px", maxWidth: 900 }}
        >
          {data.heading}
        </h2>
        <p
          style={{ fontFamily: FONT_LIGHT, fontSize: 18, lineHeight: "1.75", color: "#fff", margin: 0, maxWidth: 720 }}
        >
          {data.body}
        </p>
      </div>
    </section>
  );
}

function Challenges({ items }: { items: Array<{ icon: ChallengeIcon; title: string; body: string }> }) {
  return (
    <section className="bg-white" style={{ paddingTop: 90, paddingBottom: 90 }}>
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10 lg:px-20">
        <h2
          className="text-[32px] leading-[36px] md:text-[40px] md:leading-[44px] lg:text-[44px] lg:leading-[49.28px]"
          style={{ fontFamily: FONT_REGULAR, color: "#000", margin: "0 0 48px" }}
        >
          Challenges
        </h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((c) => {
            const Icon = ICON_MAP[c.icon];
            return (
              <div key={c.title} className="flex flex-col items-start text-left">
                <div className="flex h-[80px] w-[80px] items-center justify-center" style={{ color: ACCENT }}>
                  <Icon size={64} strokeWidth={1.5} />
                </div>
                <h3
                  style={{
                    fontFamily: FONT_REGULAR,
                    fontSize: 24,
                    lineHeight: "33.6px",
                    color: "#000",
                    margin: "24px 0 16px",
                  }}
                >
                  {c.title}
                </h3>
                <p style={{ fontFamily: FONT_LIGHT, fontSize: 16, lineHeight: "23.2px", color: "#000", margin: 0 }}>
                  {c.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── New layout: Intervention ─────────────────────────────────────────── */

function InterventionSection({
  data,
}: {
  data: {
    heading: string;
    paragraphs: string[];
    steps: Array<{ number: number; label: string; body: string }>;
    image: string;
    imageAlt: string;
  };
}) {
  return (
    <section style={{ backgroundColor: "#F1F2F2", paddingTop: 90, paddingBottom: 90 }}>
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10 lg:px-20">

        <h2
          className="text-[32px] leading-[1.1] md:text-[38px] lg:text-[44px]"
          style={{ fontFamily: FONT_LIGHT, color: "#1B1D52", margin: "0 0 20px" }}
        >
          {data.heading}
        </h2>

        {/* Scope clarification — short paragraphs, lime left border */}
        <div
          className="mb-14 border-l-4 py-4 pl-5"
          style={{ borderColor: LIME }}
        >
          {data.paragraphs.map((p, i) => (
            <p
              key={i}
              style={{
                fontFamily: FONT_LIGHT,
                fontSize: 18,
                lineHeight: "1.75",
                color: "#374151",
                margin: i < data.paragraphs.length - 1 ? "0 0 16px" : 0,
              }}
            >
              {p}
            </p>
          ))}
        </div>

        {/* Two-column layout: steps left, image right */}
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">

          {/* Numbered steps */}
          <div className="flex flex-1 flex-col gap-0">
            {data.steps.map((step, i) => (
              <div key={step.number} className="flex gap-6">
                {/* Number column */}
                <div className="flex flex-col items-center">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: "#1B1D52" }}
                  >
                    <span style={{ fontFamily: FONT_BOLD, fontSize: 14, color: LIME }}>
                      {String(step.number).padStart(2, "0")}
                    </span>
                  </div>
                  {/* Connector line — hidden on last step */}
                  {i < data.steps.length - 1 && (
                    <div data-print="connector" className="mt-1 w-px flex-1" style={{ backgroundColor: "#D1D5DB", minHeight: 32 }} />
                  )}
                </div>

                {/* Content */}
                <div className={`pb-10 ${i === data.steps.length - 1 ? "" : ""}`}>
                  <h3
                    style={{
                      fontFamily: FONT_MEDIUM,
                      fontSize: 22,
                      lineHeight: "1.3",
                      color: "#1B1D52",
                      margin: "6px 0 12px",
                    }}
                  >
                    {step.label}
                  </h3>
                  <p style={{ fontFamily: FONT_LIGHT, fontSize: 17, lineHeight: "1.75", color: "#4B5563", margin: 0 }}>
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Sticky image */}
          <div className="w-full lg:w-[480px] lg:shrink-0">
            <div className="sticky top-8">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[8px]">
                <Image
                  src={data.image}
                  alt={data.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ProgramSpecsSection({ items }: { items: Array<{ label: string; value: string }> }) {
  return (
    <section style={{ backgroundColor: "#fff", paddingTop: 64, paddingBottom: 64 }}>
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10 lg:px-20">
        <div
          data-print="spec-grid"
          className="grid grid-cols-2 gap-px sm:grid-cols-3 lg:grid-cols-6"
          style={{ backgroundColor: "#E5E7EB" }}
        >
          {items.map((spec) => (
            <div key={spec.label} className="flex flex-col p-5" style={{ backgroundColor: "#fff" }}>
              <p
                className="text-[24px] leading-tight md:text-[28px]"
                style={{ fontFamily: FONT_BOLD, color: "#1B1D52", margin: "0 0 8px" }}
              >
                {spec.value}
              </p>
              <p
                className="text-[13px] leading-[1.4]"
                style={{ fontFamily: FONT_MEDIUM, color: "#6B7280", margin: 0 }}
              >
                {spec.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricsSection({ items }: { items: Array<{ stat: string; label: string; sublabel: string }> }) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#0c0c0c", paddingTop: 90, paddingBottom: 90 }}
    >
      {/* Indigo glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 10% 100%, rgba(99, 102, 241, 0.28) 0%, rgba(12, 12, 12, 0) 55%)",
        }}
      />
      {/* Lime left accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-[3px] lg:block"
        style={{ backgroundColor: LIME, opacity: 0.6 }}
      />
      <div className="relative mx-auto w-full max-w-[1280px] px-6 md:px-10 lg:px-20">
        <h2
          className="text-[32px] leading-[36px] md:text-[40px] md:leading-[44px] lg:text-[44px] lg:leading-[49.28px]"
          style={{ fontFamily: FONT_LIGHT, color: "#fff", margin: "0 0 16px" }}
        >
          Results
        </h2>
        <p
          className="mb-14 text-[17px] leading-[1.75]"
          style={{ fontFamily: FONT_LIGHT, color: "rgba(255,255,255,0.7)", maxWidth: 640 }}
        >
          All outcomes measure changes in workforce capability and training behaviour, not changes to security infrastructure or tooling, which remained the responsibility of the client&apos;s internal IT and security teams.
        </p>

        <div data-print="metric-grid" className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
          {items.map((m) => (
            <div
              key={m.label}
              data-print="metric-card"
              className="flex flex-col p-8"
              style={{ backgroundColor: "#0c0c0c" }}
            >
              <p
                className="text-[48px] leading-none md:text-[56px]"
                style={{ fontFamily: FONT_BOLD, color: LIME, margin: "0 0 12px" }}
              >
                {m.stat}
              </p>
              <p
                className="text-[20px] leading-[1.3]"
                style={{ fontFamily: FONT_MEDIUM, color: "#fff", margin: "0 0 10px" }}
              >
                {m.label}
              </p>
              <p
                className="text-[16px] leading-[1.6]"
                style={{ fontFamily: FONT_LIGHT, color: "rgba(255,255,255,0.65)", margin: 0 }}
              >
                {m.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteSection({ data }: { data: { body: string; author: string; title: string; company: string } }) {
  return (
    <section style={{ backgroundColor: "#EEF2FF", paddingTop: 90, paddingBottom: 90 }}>
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10 lg:px-20">
        <div className="mx-auto max-w-[820px]">
          {/* Large opening quote mark */}
          <p
            className="mb-4 leading-none"
            style={{ fontFamily: FONT_BOLD, fontSize: 72, color: ACCENT, opacity: 0.2, lineHeight: 1 }}
            aria-hidden
          >
            &ldquo;
          </p>
          <blockquote
            className="text-[20px] leading-[1.6] md:text-[22px] lg:text-[24px]"
            style={{ fontFamily: FONT_LIGHT, color: "#1B1D52", margin: "0 0 32px" }}
          >
            {data.body}
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="h-px flex-1" style={{ backgroundColor: ACCENT, opacity: 0.2 }} />
            <div>
              <p
                className="text-[16px]"
                style={{ fontFamily: FONT_MEDIUM, color: "#1B1D52", margin: "0 0 4px" }}
              >
                {data.author}
              </p>
              <p
                className="text-[15px]"
                style={{ fontFamily: FONT_LIGHT, color: "#6B7280", margin: 0 }}
              >
                {data.company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Legacy layout sections (unchanged — used by all other case studies) ─ */

function SolutionSection({
  data,
}: {
  data: {
    heading: string;
    paragraphs: string[];
    bulletsLead?: string;
    bullets: Array<{ label: string; body: string }>;
    image: string;
    imageAlt: string;
  };
}) {
  return (
    <section style={{ backgroundColor: "#F1F2F2", paddingTop: 90, paddingBottom: 90 }}>
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10 lg:px-20">
        <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center lg:gap-12">
          <div className="flex-1 lg:max-w-[640px]">
            <h3 style={{ fontFamily: FONT_REGULAR, fontSize: 30, lineHeight: "36px", color: "#000", margin: "0 0 16px" }}>
              {data.heading}
            </h3>
            {data.paragraphs.map((p, i) => (
              <p key={i} style={{ fontFamily: FONT_LIGHT, fontSize: 16, lineHeight: "23.2px", color: "#000", margin: "0 0 16px" }}>
                {p}
              </p>
            ))}
            {data.bulletsLead && (
              <p style={{ fontFamily: FONT_LIGHT, fontSize: 16, lineHeight: "23.2px", color: "#000", margin: "0 0 16px" }}>
                {data.bulletsLead}
              </p>
            )}
            <ul className="list-disc pl-5" style={{ fontFamily: FONT_LIGHT, fontSize: 16, lineHeight: "23.2px", color: "#000", margin: 0 }}>
              {data.bullets.map((b) => (
                <li key={b.label} className="mb-2">
                  <span style={{ fontFamily: FONT_MEDIUM }}>{b.label}</span>{" "}
                  {b.body}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-[560px] lg:shrink-0">
            <div className="relative aspect-[560/331] w-full overflow-hidden rounded-[6px]">
              <Image src={data.image} alt={data.imageAlt} fill sizes="(max-width: 1024px) 100vw, 560px" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Results({ items }: { items: Array<{ label: string; body: string }> }) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#0c0c0c", minHeight: 450 }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 10% 100%, rgba(99, 102, 241, 0.28) 0%, rgba(12, 12, 12, 0) 55%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(99, 102, 241, 0.06) 1px, transparent 1px), linear-gradient(45deg, rgba(99, 102, 241, 0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-[3px] lg:block"
        style={{ backgroundColor: LIME, opacity: 0.6 }}
      />
      <div className="relative mx-auto flex min-h-[450px] w-full max-w-[1280px] flex-col justify-center px-6 py-16 md:px-10 lg:px-20">
        <h2
          className="text-[32px] leading-[36px] md:text-[40px] md:leading-[44px] lg:text-[44px] lg:leading-[49.28px]"
          style={{ fontFamily: FONT_LIGHT, color: "#fff", margin: "0 0 30px" }}
        >
          Results
        </h2>
        <ul className="list-disc pl-5" style={{ fontFamily: FONT_LIGHT, fontSize: 16, lineHeight: "23.2px", color: "#fff", margin: 0 }}>
          {items.map((r) => (
            <li key={r.label} className="mb-2">
              <span style={{ fontFamily: FONT_MEDIUM }}>{r.label}</span>{" "}
              {r.body}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function MeetSection({
  data,
}: {
  data: {
    heading: string;
    bullets: Array<{ label: string; body: string }>;
    image: string;
    imageAlt: string;
  };
}) {
  return (
    <section className="bg-white" style={{ paddingTop: 90, paddingBottom: 90 }}>
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10 lg:px-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-12">
          <div className="w-full lg:w-[560px] lg:shrink-0">
            <div className="relative aspect-[560/331] w-full overflow-hidden rounded-[6px]">
              <Image src={data.image} alt={data.imageAlt} fill sizes="(max-width: 1024px) 100vw, 560px" className="object-cover" />
            </div>
          </div>
          <div className="flex-1 lg:max-w-[640px]">
            <h3 style={{ fontFamily: FONT_REGULAR, fontSize: 30, lineHeight: "36px", color: "#000", margin: "0 0 16px" }}>
              {data.heading}
            </h3>
            <ul className="list-disc pl-5" style={{ fontFamily: FONT_LIGHT, fontSize: 16, lineHeight: "23.2px", color: "#000", margin: 0 }}>
              {data.bullets.map((b) => (
                <li key={b.label} className="mb-2">
                  <span style={{ fontFamily: FONT_MEDIUM }}>{b.label}</span>{" "}
                  {b.body}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
