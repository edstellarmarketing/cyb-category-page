import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollToTop } from "@/components/ScrollToTop";
import { AndroidHeroSlider } from "@/components/android/AndroidHeroSlider";
import { AndroidWelcomeStrip } from "@/components/android/AndroidWelcomeStrip";
import { AndroidIntroReference } from "@/components/android/AndroidIntroReference";
import { AndroidTrainingProgramTabs } from "@/components/android/AndroidTrainingProgramTabs";
import { AndroidChipChangesTabber } from "@/components/android/AndroidChipChangesTabber";
import { AndroidOurApproach } from "@/components/android/AndroidOurApproach";
import { AndroidProductNewsCards } from "@/components/android/AndroidProductNewsCards";
import { AndroidWhyEdstellar } from "@/components/android/AndroidWhyEdstellar";
import { AndroidRecentCustomerSuccesses } from "@/components/android/AndroidRecentCustomerSuccesses";
import { AndroidCorporatePricing } from "@/components/android/AndroidCorporatePricing";
import { AndroidClientVoices } from "@/components/android/AndroidClientVoices";
import { AndroidBusinessNewsCards } from "@/components/android/AndroidBusinessNewsCards";
import { AndroidFAQ } from "@/components/android/AndroidFAQ";
import { AndroidContactForm } from "@/components/android/AndroidContactForm";

export const metadata: Metadata = {
  title: "Android Corporate Training Company | Edstellar",
  description:
    "Edstellar is a global Android corporate training provider. Instructor-led programs in Kotlin, Java, NDK and cross-platform mobile for enterprise teams.",
};

export default function AndroidTraining() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <AndroidHeroSlider />
        <AndroidWelcomeStrip />
        <AndroidIntroReference />
        <AndroidTrainingProgramTabs />
        <AndroidChipChangesTabber />
        <AndroidOurApproach />
        <AndroidProductNewsCards />
        <AndroidWhyEdstellar />
        <AndroidRecentCustomerSuccesses />
        <AndroidCorporatePricing />
        <AndroidClientVoices />
        <AndroidBusinessNewsCards />
        <AndroidFAQ />
        <AndroidContactForm />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
