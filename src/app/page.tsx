import { BusinessNewsCards } from "@/components/BusinessNewsCards";
import { ChipChangesTabber } from "@/components/ChipChangesTabber";
import { ClientVoices } from "@/components/ClientVoices";
import { ContactForm } from "@/components/ContactForm";
import { CorporatePricing } from "@/components/CorporatePricing";
import { CustomersPartners } from "@/components/CustomersPartners";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { MoreOnMediaTek } from "@/components/MoreOnMediaTek";
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
        <TrainingProgramTabs />
        <ChipChangesTabber />
        <BusinessNewsCards />
        <ProductNewsCards />
        <CustomersPartners />
        <CorporatePricing />
        <OurApproach />
        <ClientVoices />
        <MoreOnMediaTek />
        <ContactForm />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
