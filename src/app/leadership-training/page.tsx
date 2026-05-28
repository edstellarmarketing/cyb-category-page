import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollToTop } from "@/components/ScrollToTop";
import { LeadershipHeroSlider } from "@/components/leadership/LeadershipHeroSlider";
import { LeadershipWelcomeStrip } from "@/components/leadership/LeadershipWelcomeStrip";
import { LeadershipIntroReference } from "@/components/leadership/LeadershipIntroReference";
import { LeadershipTrainingProgramTabs } from "@/components/leadership/LeadershipTrainingProgramTabs";
import { LeadershipChipChangesTabber } from "@/components/leadership/LeadershipChipChangesTabber";
import { LeadershipOurApproach } from "@/components/leadership/LeadershipOurApproach";
import { LeadershipProductNewsCards } from "@/components/leadership/LeadershipProductNewsCards";
import { LeadershipWhyEdstellar } from "@/components/leadership/LeadershipWhyEdstellar";
import { LeadershipRecentCustomerSuccesses } from "@/components/leadership/LeadershipRecentCustomerSuccesses";
import { LeadershipCorporatePricing } from "@/components/leadership/LeadershipCorporatePricing";
import { LeadershipClientVoices } from "@/components/leadership/LeadershipClientVoices";
import { LeadershipBusinessNewsCards } from "@/components/leadership/LeadershipBusinessNewsCards";
import { LeadershipFAQ } from "@/components/leadership/LeadershipFAQ";
import { LeadershipContactForm } from "@/components/leadership/LeadershipContactForm";

export const metadata: Metadata = {
  title: "Leadership Corporate Training Company | Edstellar",
  description:
    "Edstellar is a global leadership corporate training provider. Instructor-led programs in executive, manager and change leadership for enterprise teams.",
};

export default function LeadershipTraining() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <LeadershipHeroSlider />
        <LeadershipWelcomeStrip />
        <LeadershipIntroReference />
        <LeadershipTrainingProgramTabs />
        <LeadershipChipChangesTabber />
        <LeadershipOurApproach />
        <LeadershipProductNewsCards />
        <LeadershipWhyEdstellar />
        <LeadershipRecentCustomerSuccesses />
        <LeadershipCorporatePricing />
        <LeadershipClientVoices />
        <LeadershipBusinessNewsCards />
        <LeadershipFAQ />
        <LeadershipContactForm />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
