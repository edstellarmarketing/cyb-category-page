import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollToTop } from "@/components/ScrollToTop";
import { AiHeroSlider } from "@/components/ai/AiHeroSlider";
import { AiWelcomeStrip } from "@/components/ai/AiWelcomeStrip";
import { AiIntroReference } from "@/components/ai/AiIntroReference";
import { AiTrainingProgramTabs } from "@/components/ai/AiTrainingProgramTabs";
import { AiChipChangesTabber } from "@/components/ai/AiChipChangesTabber";
import { AiOurApproach } from "@/components/ai/AiOurApproach";
import { AiProductNewsCards } from "@/components/ai/AiProductNewsCards";
import { AiWhyEdstellar } from "@/components/ai/AiWhyEdstellar";
import { AiRecentCustomerSuccesses } from "@/components/ai/AiRecentCustomerSuccesses";
import { AiCorporatePricing } from "@/components/ai/AiCorporatePricing";
import { AiClientVoices } from "@/components/ai/AiClientVoices";
import { AiBusinessNewsCards } from "@/components/ai/AiBusinessNewsCards";
import { AiFAQ } from "@/components/ai/AiFAQ";
import { AiContactForm } from "@/components/ai/AiContactForm";

export const metadata: Metadata = {
  title: "AI Corporate Training Company | Edstellar",
  description:
    "Edstellar is a global AI corporate training provider. Instructor-led programs in generative AI, machine learning and MLOps for enterprise teams.",
};

export default function AiTraining() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <AiHeroSlider />
        <AiWelcomeStrip />
        <AiIntroReference />
        <AiTrainingProgramTabs />
        <AiChipChangesTabber />
        <AiOurApproach />
        <AiProductNewsCards />
        <AiWhyEdstellar />
        <AiRecentCustomerSuccesses />
        <AiCorporatePricing />
        <AiClientVoices />
        <AiBusinessNewsCards />
        <AiFAQ />
        <AiContactForm />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
