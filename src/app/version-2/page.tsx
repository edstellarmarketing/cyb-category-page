import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { BusinessNewsCards } from "@/components/BusinessNewsCards";
import { ChipChangesTabber } from "@/components/ChipChangesTabber";
import { ClientVoices } from "@/components/ClientVoices";
import { ContactForm } from "@/components/ContactForm";
import { CorporatePricing } from "@/components/CorporatePricing";
import { CustomersPartners } from "@/components/CustomersPartners";
import { RecentCustomerSuccesses } from "@/components/RecentCustomerSuccesses";
import { CyberFAQ } from "@/components/CyberFAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { OurApproach } from "@/components/OurApproach";
import { ScrollToTop } from "@/components/ScrollToTop";
import { TrainingProgramTabs } from "@/components/TrainingProgramTabs";
import { ProductNewsCards } from "@/components/ProductNewsCards";
import { WelcomeStrip } from "@/components/WelcomeStrip";
import { cn } from "@/lib/utils";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const FONT_OVERRIDE: CSSProperties = {
  ["--font-light" as string]: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
  ["--font-bold" as string]: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
};

export const metadata: Metadata = {
  title: "Cybersecurity Corporate Training Company | Edstellar",
  description:
    "Edstellar is a global cybersecurity corporate training provider. Instructor-led programs in SOC operations, cloud security, and GRC for enterprise teams.",
};

const CORMORANT_HEADING_OVERRIDE = `
.v2-cormorant h1,
.v2-cormorant h2,
.v2-cormorant h3,
.v2-cormorant h4,
.v2-cormorant h5,
.v2-cormorant h6 {
  font-family: var(--font-cormorant), 'Cormorant Garamond', Georgia, serif !important;
}
`;

export default function CybersecurityVersion2Page() {
  return (
    <div className={cn(cormorant.variable, "v2-cormorant flex min-h-screen flex-col")} style={FONT_OVERRIDE}>
      <style>{CORMORANT_HEADING_OVERRIDE}</style>
      <Header />
      <main className="flex-1">
        <HeroSlider />
        <WelcomeStrip />
        <TrainingProgramTabs />
        <ChipChangesTabber />
        <ProductNewsCards />
        <CustomersPartners />
        <RecentCustomerSuccesses />
        <CorporatePricing />
        <OurApproach />
        <ClientVoices />
        <BusinessNewsCards />
        <CyberFAQ />
        <ContactForm />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
