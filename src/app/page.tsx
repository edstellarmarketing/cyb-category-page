import type { Metadata } from "next";
import { BusinessNewsCards } from "@/components/BusinessNewsCards";
import { ChipChangesTabber } from "@/components/ChipChangesTabber";
import { ClientVoices } from "@/components/ClientVoices";
import { ContactForm } from "@/components/ContactForm";
import { CorporatePricing } from "@/components/CorporatePricing";
import { CybersecurityIntroReference } from "@/components/CybersecurityIntroReference";
// import { CustomersPartners } from "@/components/CustomersPartners"; // hidden — temporarily disabled
import { WhyEdstellarV2 } from "@/components/WhyEdstellarV2";
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

export const metadata: Metadata = {
  title: "Cybersecurity Corporate Training Company | Edstellar",
  description:
    "Edstellar is a global cybersecurity corporate training provider. Instructor-led programs in SOC operations, cloud security, and GRC for enterprise teams.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSlider />
        <WelcomeStrip />
        <CybersecurityIntroReference />
        <TrainingProgramTabs />
        <ChipChangesTabber />
        <OurApproach />
        <ProductNewsCards />
        {/* <CustomersPartners /> hidden while WhyEdstellarV2 is being finalized */}
        <WhyEdstellarV2 />
        <RecentCustomerSuccesses />
        <CorporatePricing />
        <ClientVoices />
        <BusinessNewsCards />
        <CyberFAQ />
        <ContactForm />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
