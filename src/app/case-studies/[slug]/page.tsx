import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Cloud, Layers, GraduationCap, FileCheck, Heart, ShieldAlert, Globe, Users,
  Factory, Cpu, AlertTriangle, ShoppingCart, CreditCard, Code, Car, Siren,
  Shield, ScanEye, FileText, Rocket, Key, Activity, Power, Landmark, Radio,
  Wifi, Network,
} from "lucide-react";
import { CASE_STUDIES, getCaseStudy, type ChallengeIcon } from "@/data/case-studies";

const ACCENT = "#6366F1";
// Match the site-wide font convention: each Riona Sans variant maps to a specific
// weight via @font-face, so we only set fontFamily — never fontWeight alongside.
const FONT_LIGHT = "'Riona Sans Light', Helvetica, Arial, sans-serif";
const FONT_REGULAR = "'Riona Sans Regular', Helvetica, Arial, sans-serif";
const FONT_MEDIUM = "'Riona Sans Medium', Helvetica, Arial, sans-serif";

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

  return (
    <main>
      <Hero data={data.hero} />
      <Intro data={data.intro} />
      <Challenges items={data.challenges} />
      <SolutionSection data={data.solution} />
      <Results items={data.results} />
      <MeetSection data={data.meet} />
    </main>
  );
}

function Hero({ data }: { data: { title: string; image: string; alt: string } }) {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: 460 }}>
      <div className="absolute inset-0 z-0">
        <Image src={data.image} alt={data.alt} fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.35) 100%)" }} />
      </div>
      <div className="relative z-10 mx-auto flex min-h-[460px] w-full max-w-[1280px] flex-col justify-center px-6 md:px-10 lg:px-20">
        <h1
          style={{
            fontFamily: FONT_REGULAR,
            fontSize: 35,
            lineHeight: "36.155px",
            color: ACCENT,
            margin: 0,
          }}
        >
          Case Study
          <span
            className="block text-[26px] leading-[30px] md:text-[32px] md:leading-[36px] lg:text-[40px] lg:leading-[44px]"
            style={{
              fontFamily: FONT_LIGHT,
              color: "#fff",
              maxWidth: 760,
              marginTop: 12,
            }}
          >
            {data.title}
          </span>
        </h1>
        <a
          href="#"
          className="mt-8 inline-block w-fit no-underline transition-colors hover:opacity-90"
          style={{
            backgroundColor: ACCENT,
            color: "#fff",
            padding: "8px 24px",
            borderRadius: 30,
            fontFamily: FONT_LIGHT,
            fontSize: 16,
            lineHeight: "22.768px",
            textTransform: "capitalize",
          }}
        >
          Download Case Study
        </a>
      </div>
    </section>
  );
}

function Intro({ data }: { data: { heading: string; body: string } }) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1B1D52 0%, #312E81 55%, #4338CA 100%)",
        minHeight: 450,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(99, 102, 241, 0.35) 0%, rgba(27, 29, 82, 0) 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative mx-auto flex min-h-[450px] w-full max-w-[1280px] flex-col justify-center px-6 py-16 md:px-10 lg:px-20">
        <h2
          className="text-[28px] leading-[34px] md:text-[36px] md:leading-[42px] lg:text-[44px] lg:leading-[49.28px]"
          style={{
            fontFamily: FONT_LIGHT,
            color: "#fff",
            margin: "0 0 30px",
            maxWidth: 900,
          }}
        >
          {data.heading}
        </h2>
        <p
          style={{
            fontFamily: FONT_LIGHT,
            fontSize: 16,
            lineHeight: "23.2px",
            color: "#fff",
            margin: 0,
            maxWidth: 900,
          }}
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
                <p
                  style={{
                    fontFamily: FONT_LIGHT,
                    fontSize: 16,
                    lineHeight: "23.2px",
                    color: "#000",
                    margin: 0,
                  }}
                >
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
            <h3
              style={{
                fontFamily: FONT_REGULAR,
                fontSize: 30,
                lineHeight: "36px",
                color: "#000",
                margin: "0 0 16px",
              }}
            >
              {data.heading}
            </h3>
            {data.paragraphs.map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: FONT_LIGHT,
                  fontSize: 16,
                  lineHeight: "23.2px",
                  color: "#000",
                  margin: "0 0 16px",
                }}
              >
                {p}
              </p>
            ))}
            {data.bulletsLead && (
              <p
                style={{
                  fontFamily: FONT_LIGHT,
                  fontSize: 16,
                  lineHeight: "23.2px",
                  color: "#000",
                  margin: "0 0 16px",
                }}
              >
                {data.bulletsLead}
              </p>
            )}
            <ul
              className="list-disc pl-5"
              style={{
                fontFamily: FONT_LIGHT,
                fontSize: 16,
                lineHeight: "23.2px",
                color: "#000",
                margin: 0,
              }}
            >
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
              <Image
                src={data.image}
                alt={data.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
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
      style={{
        backgroundColor: "#0c0c0c",
        minHeight: 450,
      }}
    >
      {/* Subtle indigo glow in lower-left for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 10% 100%, rgba(99, 102, 241, 0.28) 0%, rgba(12, 12, 12, 0) 55%)",
        }}
      />
      {/* Faint diagonal grid lines for texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(99, 102, 241, 0.06) 1px, transparent 1px), linear-gradient(45deg, rgba(99, 102, 241, 0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Lime accent strip on the left edge — site brand cue */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-[3px] lg:block"
        style={{ backgroundColor: "#C5E826", opacity: 0.6 }}
      />
      <div className="relative mx-auto flex min-h-[450px] w-full max-w-[1280px] flex-col justify-center px-6 py-16 md:px-10 lg:px-20">
        <h2
          className="text-[32px] leading-[36px] md:text-[40px] md:leading-[44px] lg:text-[44px] lg:leading-[49.28px]"
          style={{ fontFamily: FONT_LIGHT, color: "#fff", margin: "0 0 30px" }}
        >
          Results
        </h2>
        <ul
          className="list-disc pl-5"
          style={{
            fontFamily: FONT_LIGHT,
            fontSize: 16,
            lineHeight: "23.2px",
            color: "#fff",
            margin: 0,
          }}
        >
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
              <Image
                src={data.image}
                alt={data.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1 lg:max-w-[640px]">
            <h3
              style={{
                fontFamily: FONT_REGULAR,
                fontSize: 30,
                lineHeight: "36px",
                color: "#000",
                margin: "0 0 16px",
              }}
            >
              {data.heading}
            </h3>
            <ul
              className="list-disc pl-5"
              style={{
                fontFamily: FONT_LIGHT,
                fontSize: 16,
                lineHeight: "23.2px",
                color: "#000",
                margin: 0,
              }}
            >
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
