import { BusinessNewsCards } from "@/components/BusinessNewsCards";
import { ChipChangesTabber } from "@/components/ChipChangesTabber";
import { ClientVoices } from "@/components/ClientVoices";
import { ContactForm } from "@/components/ContactForm";
import { CorporatePricing } from "@/components/CorporatePricing";
import { CustomersPartners } from "@/components/CustomersPartners";
import { EnterpriseProofStrip } from "@/components/EnterpriseProofStrip";
import { RecentCustomerSuccesses } from "@/components/RecentCustomerSuccesses";
import { CyberFAQ } from "@/components/CyberFAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { OurApproach } from "@/components/OurApproach";
import { ScrollToTop } from "@/components/ScrollToTop";
import { TrainingProgramTabs } from "@/components/TrainingProgramTabs";
import { TrendingCyberPrograms } from "@/components/TrendingCyberPrograms";
import { WelcomeStrip } from "@/components/WelcomeStrip";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSlider />
        <WelcomeStrip />
        <TrainingProgramTabs />
        <ChipChangesTabber />
        <TrendingCyberPrograms />
        <CustomersPartners />
        <EnterpriseProofStrip />
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
    </>
  );
}
