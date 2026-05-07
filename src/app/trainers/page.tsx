import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { TrainersHero } from "@/components/trainers/TrainersHero";
import { TrainersStatsStrip } from "@/components/trainers/TrainersStatsStrip";
import { TrainersSelectionCriteria } from "@/components/trainers/TrainersSelectionCriteria";
import { TrainersCarousel } from "@/components/trainers/TrainersCarousel";
import { TrainersBySpecialty } from "@/components/trainers/TrainersBySpecialty";
import { TrainersTestimonial } from "@/components/trainers/TrainersTestimonial";
import { TrainersCourseCategories } from "@/components/trainers/TrainersCourseCategories";
import { TrainersQualityProcess } from "@/components/trainers/TrainersQualityProcess";
import { TrainersBecomeTrainer } from "@/components/trainers/TrainersBecomeTrainer";
import { TrainersCTA } from "@/components/trainers/TrainersCTA";

export const metadata: Metadata = {
  title: "Expert Trainers | Edstellar",
  description:
    "Meet Edstellar's global network of 10,000+ vetted subject-matter experts delivering instructor-led corporate training across cybersecurity, cloud, leadership, and more.",
};

export default function TrainersPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <TrainersHero />
        <TrainersStatsStrip />
        <TrainersSelectionCriteria />
        <TrainersCarousel />
        <TrainersBySpecialty />
        <TrainersTestimonial />
        <TrainersCourseCategories />
        <TrainersQualityProcess />
        <TrainersBecomeTrainer />
        <TrainersCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
