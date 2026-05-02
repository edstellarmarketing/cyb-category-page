import { BusinessNewsCards } from "@/components/BusinessNewsCards";
import { ChipChangesTabber } from "@/components/ChipChangesTabber";
import { ClientVoices } from "@/components/ClientVoices";
import { ContactForm } from "@/components/ContactForm";
import { CorporatePricing } from "@/components/CorporatePricing";
import { CustomersPartners } from "@/components/CustomersPartners";
import { CyberCoE } from "@/components/CyberCoE";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { MoreResources } from "@/components/MoreResources";
import { OurApproach } from "@/components/OurApproach";
import { ProductNewsCards } from "@/components/ProductNewsCards";
import { ScrollToTop } from "@/components/ScrollToTop";
import { TrainingProgramTabs } from "@/components/TrainingProgramTabs";
import { WelcomeStrip } from "@/components/WelcomeStrip";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSlider />
        <WelcomeStrip />
        <CyberCoE />
        <TrainingProgramTabs />
        <ChipChangesTabber />
        <ProductNewsCards />
        <CustomersPartners />
        <CorporatePricing />
        <OurApproach />
        <ClientVoices />
        <BusinessNewsCards />
        <MoreResources />
        <ContactForm />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
