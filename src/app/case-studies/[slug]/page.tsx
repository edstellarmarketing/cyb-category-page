import { notFound } from "next/navigation";
import Image from "next/image";
import { CASE_STUDIES, getCaseStudy } from "@/data/case-studies";
import { CaseStudyDownloadButton, CaseStudyCopyLink } from "@/components/CaseStudyCTA";
import {
  FONT_LIGHT, FONT_MEDIUM, FONT_BOLD,
  IntroSection, CompanyProfileSection, ChallengesSection, InterventionSection,
  MetricsSection, QuoteSection,
  SolutionSection, LegacyResultsSection, MeetSection,
} from "@/components/CaseStudySections";

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
      {data.companyBackground && (
        <CompanyProfileSection description={data.companyBackground} facts={data.companyFacts} />
      )}
      <IntroSection data={data.intro} />
      <ChallengesSection items={data.challenges} />
      {isNewLayout ? (
        <>
          <InterventionSection data={data.intervention!} programSpecs={data.programSpecs} />
          {data.metrics && <MetricsSection items={data.metrics} />}
          {data.quote && <QuoteSection data={data.quote} />}
        </>
      ) : (
        <>
          <SolutionSection data={data.solution} />
          <LegacyResultsSection items={data.results} />
          <MeetSection data={data.meet} />
        </>
      )}
    </main>
  );
}

function Hero({ data }: { data: { title: string; image: string; alt: string } }) {
  return (
    <>
      {/* Print-only document header */}
      <div
        className="print-only hidden items-center justify-between border-b border-[#E5E7EB] pb-4 pt-2"
        style={{ marginBottom: 32 }}
      >
        <div>
          <p style={{ fontFamily: FONT_BOLD, fontSize: 18, color: "#6366F1", margin: 0 }}>Edstellar</p>
          <p style={{ fontFamily: FONT_LIGHT, fontSize: 11, color: "#6B7280", margin: "2px 0 0", textTransform: "uppercase", letterSpacing: "0.12em" }}>
            Corporate Training Partner
          </p>
        </div>
        <p style={{ fontFamily: FONT_LIGHT, fontSize: 12, color: "#6B7280", margin: 0 }}>edstellar.com</p>
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
            style={{ fontFamily: FONT_LIGHT, color: "#fff", maxWidth: 760, margin: 0 }}
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
