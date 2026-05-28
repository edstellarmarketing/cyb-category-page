"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRightIcon } from "@/components/icons";

type Domain = {
  name: string;
  count: number;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
};

type LearningPath = {
  label: string;
  cardTitle: string;
  cardDescription: string;
  image: string;
  imageAlt: string;
  href: string;
};

const DOMAINS: Domain[] = [
  {
    name: "Android Native Development (Java & Kotlin)",
    count: 5,
    description:
      "Build production Android apps with Kotlin, Coroutines, Architecture Components and Jetpack Compose, from fundamentals to dependable enterprise product.",
    image: "/images/cyber/hero-ai.jpg",
    imageAlt: "Android native development with Java and Kotlin",
    href: "#catalog",
  },
  {
    name: "Android Platform, Systems & Game",
    count: 5,
    description:
      "Android Internals, NDK, Android Automotive OS (AAOS) and Android game development with Android Studio, Gradle and AOSP tooling.",
    image: "/images/cyber/hero-datasci-it.jpg",
    imageAlt: "Android platform, systems and game development",
    href: "#catalog",
  },
  {
    name: "Android Security, QA & DevOps",
    count: 4,
    description:
      "Mobile security baselines, CI for Android, Espresso and Appium automation on device farms, OWASP MASVS and Play Integrity-aligned hardening.",
    image: "/images/cyber/hero-governance.jpg",
    imageAlt: "Android security, QA and DevOps",
    href: "#catalog",
  },
  {
    name: "Cross-Platform Mobile Frameworks",
    count: 7,
    description:
      "Flutter, React Native, Ionic, Cordova, AngularJS-with-Cordova, Xamarin and Sencha Touch for one mobile team shipping to Android, iOS and the web.",
    image: "/images/cyber/hero-software-it.jpg",
    imageAlt: "Cross-platform mobile frameworks",
    href: "#catalog",
  },
];

const LEARNING_PATHS: LearningPath[] = [
  {
    label: "ANDROID ENGINEER",
    cardTitle: "Android Engineer Path",
    cardDescription:
      "From Kotlin and Android Studio fundamentals to Jetpack Compose, Coroutines and modularisation, build the codebase-to-production Android engineering ladder.",
    image: "/images/cyber/hero-datasci-it.jpg",
    imageAlt: "Android engineer",
    href: "#catalog",
  },
  {
    label: "KOTLIN MIGRATOR",
    cardTitle: "Java-to-Kotlin Migration Path",
    cardDescription:
      "Move legacy Java-on-Android codebases to Kotlin, Coroutines and Architecture Components without freezing the roadmap or rewriting from scratch.",
    image: "/images/cyber/hero-ai.jpg",
    imageAlt: "Java-to-Kotlin migrator",
    href: "#catalog",
  },
  {
    label: "MOBILE DEVOPS",
    cardTitle: "Mobile DevOps Engineer Path",
    cardDescription:
      "Gradle, build caching, CI for Android, Play Console and release automation, operationalise Android delivery with reproducible pipelines.",
    image: "/images/cyber/hero-devops-it.jpg",
    imageAlt: "Mobile DevOps engineer",
    href: "#catalog",
  },
  {
    label: "MOBILE QA / SDET",
    cardTitle: "Mobile QA & SDET Path",
    cardDescription:
      "Espresso and Appium suites, instrumented testing, Firebase Test Lab and device-farm strategy with Java, Kotlin and JavaScript for Android and iOS.",
    image: "/images/cyber/hero-bigdata-it.jpg",
    imageAlt: "Mobile QA and SDET",
    href: "#catalog",
  },
  {
    label: "MOBILE SECURITY",
    cardTitle: "Mobile Security Engineer Path",
    cardDescription:
      "Android Security Best Practices, OWASP MASVS, Play Integrity and secure storage, lead mobile threat modelling and audit readiness across the enterprise.",
    image: "/images/cyber/hero-governance.jpg",
    imageAlt: "Mobile security engineer",
    href: "#catalog",
  },
  {
    label: "CROSS-PLATFORM DEV",
    cardTitle: "Cross-Platform Mobile Developer Path",
    cardDescription:
      "Flutter, React Native and Ionic for shared Android and iOS delivery, ship one mobile codebase that meets native quality bars on every platform.",
    image: "/images/cyber/hero-software-it.jpg",
    imageAlt: "Cross-platform mobile developer",
    href: "#catalog",
  },
  {
    label: "MOBILE LEADERS",
    cardTitle: "Mobile Engineering Leaders Track",
    cardDescription:
      "Executive mobile strategy, modularisation, build-vs-buy decisions and workforce enablement for Heads of Mobile and VP Engineering.",
    image: "/images/cyber/hero-bfsi-pros.jpg",
    imageAlt: "Mobile engineering leaders",
    href: "#catalog",
  },
];

const TOTAL_TRAININGS = 22;

const DELIVERY_MODES = [
  "Virtual ILT",
  "On-site",
  "Off-site",
  "Blended",
  "Multi-language",
  "Global",
];

type Trainer = {
  name: string;
  role: string;
  location: string;
  rating: string;
  reviews: number;
  trainingSince: number;
  experience: number;
  bio: string;
  certs: string[];
  image: string;
};

const TRAINERS: Trainer[] = [
  {
    name: "Akash Iyer",
    role: "Android & Kotlin trainer",
    location: "Bengaluru, India",
    rating: "4.9",
    reviews: 411,
    trainingSince: 2014,
    experience: 14,
    bio: "Practising Android engineer building production apps for enterprise teams. Trains engineers on Kotlin, Coroutines, Jetpack Compose and Architecture Components using Android Studio and Gradle.",
    certs: ["Associate Android Developer", "Kotlin", "Jetpack Compose"],
    image: "/images/cyber/trainer-akash.jpg",
  },
  {
    name: "Priya Krishnan",
    role: "Mobile DevOps & QA trainer",
    location: "Pune, India",
    rating: "4.9",
    reviews: 327,
    trainingSince: 2013,
    experience: 13,
    bio: "Former mobile platform lead at a Tier-1 Indian bank. Builds mobile DevOps and QA programs covering Gradle, CI for Android, Espresso, Appium and Firebase Test Lab across BFSI and SaaS clients.",
    certs: ["CI for Android", "Appium", "Espresso"],
    image: "/images/cyber/trainer-devi.jpg",
  },
  {
    name: "Sarah Mitchell",
    role: "Mobile security & Play Integrity trainer",
    location: "London, United Kingdom",
    rating: "4.8",
    reviews: 264,
    trainingSince: 2012,
    experience: 16,
    bio: "Mobile security specialist with delivery across UK, EU and Middle East enterprises. Specialises in Android Security Best Practices, OWASP MASVS and Play Integrity audit readiness.",
    certs: ["OWASP MASVS", "Play Integrity", "Mobile Security"],
    image: "/images/cyber/trainer-deepak.jpg",
  },
  {
    name: "Marcus Chen",
    role: "Cross-platform & Flutter trainer",
    location: "Singapore",
    rating: "4.9",
    reviews: 298,
    trainingSince: 2013,
    experience: 14,
    bio: "Cross-platform mobile architect serving APAC manufacturers and SaaS leaders. Trains engineering teams on Flutter, React Native and Ionic with hardened native-modules layers for Android and iOS.",
    certs: ["Flutter", "React Native", "Ionic"],
    image: "/images/cyber/trainer-sudha.jpg",
  },
];

const TRAINER_STATS = [
  { stat: "1,500+", label: "Verified Android trainers" },
  { stat: "12+ yrs", label: "Average industry experience" },
  { stat: "4", label: "Mobile domains covered" },
  { stat: "4.8 ★", label: "Average learner rating" },
];

type Program = {
  domain: string;
  category: string;
  title: string;
  duration: string;
  delivery: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
};

const DELIVERY = "Instructor-led (On-site/Virtual)";

const PROGRAMS: Program[] = [
  // Android Native Development (Java & Kotlin)
  {
    domain: "Android Native Development (Java & Kotlin)",
    category: "Android Native",
    title: "Fundamentals of Android Training",
    duration: "24 - 32 hrs",
    delivery: DELIVERY,
    description:
      "Build core Android skills with Android Studio, Activities, Fragments, layouts and the Android lifecycle for new mobile engineers.",
    image: "/images/cyber/hero-ai.jpg",
    imageAlt: "Fundamentals of Android training",
    href: "https://www.edstellar.com/course/fundamentals-of-android-training",
  },
  {
    domain: "Android Native Development (Java & Kotlin)",
    category: "Android Native",
    title: "Android App Development Training",
    duration: "32 - 40 hrs",
    delivery: DELIVERY,
    description:
      "End-to-end Android with Android Studio, Architecture Components, networking and Play Store deployment for production-grade apps.",
    image: "/images/cyber/hero-datasci-it.jpg",
    imageAlt: "Android app development training",
    href: "https://www.edstellar.com/course/android-app-development-training",
  },
  {
    domain: "Android Native Development (Java & Kotlin)",
    category: "Android Native",
    title: "Android App Development with Kotlin Training",
    duration: "32 - 40 hrs",
    delivery: DELIVERY,
    description:
      "Kotlin-first Android with Coroutines, Flow and Jetpack Compose for modern, modularised production apps.",
    image: "/images/cyber/hero-ai-it.jpg",
    imageAlt: "Android app development with Kotlin training",
    href: "https://www.edstellar.com/course/android-app-development-with-kotlin-training",
  },
  {
    domain: "Android Native Development (Java & Kotlin)",
    category: "Android Native",
    title: "Java for Android Training",
    duration: "24 - 32 hrs",
    delivery: DELIVERY,
    description:
      "Java language essentials for Android, covering OOP, collections, generics and Android-specific patterns for legacy and brownfield apps.",
    image: "/images/cyber/hero-bigdata-it.jpg",
    imageAlt: "Java for Android training",
    href: "https://www.edstellar.com/course/java-for-android-training",
  },
  {
    domain: "Android Native Development (Java & Kotlin)",
    category: "Android Native",
    title: "Kotlin for Java Developers Training",
    duration: "24 - 32 hrs",
    delivery: DELIVERY,
    description:
      "Bridge Java teams to Kotlin with null safety, coroutines, scope functions and interoperability patterns for in-flight Android codebases.",
    image: "/images/cyber/hero-cloud-it.jpg",
    imageAlt: "Kotlin for Java developers training",
    href: "https://www.edstellar.com/course/kotlin-for-java-developers-training",
  },

  // Android Platform, Systems & Game
  {
    domain: "Android Platform, Systems & Game",
    category: "Android Platform",
    title: "Android Internals Training",
    duration: "32 - 40 hrs",
    delivery: DELIVERY,
    description:
      "Go deep on AOSP architecture, Binder IPC, the HAL and the Android runtime to debug, customise and harden Android at the platform layer.",
    image: "/images/cyber/hero-datasci-it.jpg",
    imageAlt: "Android internals training",
    href: "https://www.edstellar.com/course/android-internals-training",
  },
  {
    domain: "Android Platform, Systems & Game",
    category: "Android Platform",
    title: "Android Development NDK Training",
    duration: "24 - 32 hrs",
    delivery: DELIVERY,
    description:
      "Build performance-critical Android features in C and C++ with the Android NDK, JNI bridges and CMake build configuration.",
    image: "/images/cyber/hero-cloud-it.jpg",
    imageAlt: "Android development NDK training",
    href: "https://www.edstellar.com/course/android-development-ndk-training",
  },
  {
    domain: "Android Platform, Systems & Game",
    category: "Android Platform",
    title: "Android Automotive OS (AAOS) Training",
    duration: "32 - 40 hrs",
    delivery: DELIVERY,
    description:
      "Design Android apps for the connected car with Android Automotive OS, car app library, vehicle properties and AAOS certification flows.",
    image: "/images/cyber/hero-industry-automotive.jpg",
    imageAlt: "Android Automotive OS AAOS training",
    href: "https://www.edstellar.com/course/android-automotive-os-aaos-training",
  },
  {
    domain: "Android Platform, Systems & Game",
    category: "Android Platform",
    title: "Android App Development with Python Training",
    duration: "24 - 32 hrs",
    delivery: DELIVERY,
    description:
      "Use Python toolkits and Kivy to prototype and build Android apps where rapid iteration and shared Python codebases matter.",
    image: "/images/cyber/hero-ai.jpg",
    imageAlt: "Android app development with Python training",
    href: "https://www.edstellar.com/course/android-app-development-with-python-training",
  },
  {
    domain: "Android Platform, Systems & Game",
    category: "Android Platform",
    title: "Android Game Development Training",
    duration: "32 - 40 hrs",
    delivery: DELIVERY,
    description:
      "Build Android games with Unity and Android Studio toolchains, covering rendering, input, lifecycle and Play Console publishing.",
    image: "/images/cyber/hero-ai-it.jpg",
    imageAlt: "Android game development training",
    href: "https://www.edstellar.com/course/android-game-development-training",
  },

  // Android Security, QA & DevOps
  {
    domain: "Android Security, QA & DevOps",
    category: "Security & QA",
    title: "Android Security Essentials Training",
    duration: "24 - 32 hrs",
    delivery: DELIVERY,
    description:
      "Mobile threat model, secure storage, network security, Play Integrity and OWASP MASVS-aligned hardening for enterprise Android apps.",
    image: "/images/cyber/hero-governance.jpg",
    imageAlt: "Android security essentials training",
    href: "https://www.edstellar.com/course/android-security-essentials-training",
  },
  {
    domain: "Android Security, QA & DevOps",
    category: "Security & QA",
    title: "CI/CD for Android Developers Training",
    duration: "32 - 40 hrs",
    delivery: DELIVERY,
    description:
      "Stand up CI for Android with Gradle, build caching, signing, GitHub Actions or Bitrise and Play Console release automation.",
    image: "/images/cyber/hero-devops-it.jpg",
    imageAlt: "CI/CD for Android developers training",
    href: "https://www.edstellar.com/course/ci-cd-for-android-developers-training",
  },
  {
    domain: "Android Security, QA & DevOps",
    category: "Security & QA",
    title: "Mobile Testing - Android/iOS Training",
    duration: "24 - 32 hrs",
    delivery: DELIVERY,
    description:
      "Design mobile test strategies for Android and iOS with instrumented tests, manual exploratory testing and device-farm execution.",
    image: "/images/cyber/cert-iso27001.jpg",
    imageAlt: "Mobile testing Android and iOS training",
    href: "https://www.edstellar.com/course/mobile-testing-android-ios-training",
  },
  {
    domain: "Android Security, QA & DevOps",
    category: "Security & QA",
    title: "Appium Training",
    duration: "24 - 32 hrs",
    delivery: DELIVERY,
    description:
      "Automate Android and iOS UI tests with Appium, page-object patterns, parallel execution and integration into CI for mobile.",
    image: "/images/cyber/cert-cism.jpg",
    imageAlt: "Appium training",
    href: "https://www.edstellar.com/course/appium-training",
  },

  // Cross-Platform Mobile Frameworks
  {
    domain: "Cross-Platform Mobile Frameworks",
    category: "Cross-Platform",
    title: "Google Flutter Training",
    duration: "32 - 40 hrs",
    delivery: DELIVERY,
    description:
      "Production Flutter for Android and iOS with state management, testing, native-modules layer and CI workflows for shared mobile delivery.",
    image: "/images/cyber/hero-software-it.jpg",
    imageAlt: "Google Flutter training",
    href: "https://www.edstellar.com/course/google-flutter-training",
  },
  {
    domain: "Cross-Platform Mobile Frameworks",
    category: "Cross-Platform",
    title: "React Native Training",
    duration: "32 - 40 hrs",
    delivery: DELIVERY,
    description:
      "Build cross-platform mobile apps with React Native, covering navigation, native modules, performance and shared Android and iOS releases.",
    image: "/images/cyber/hero-cloud-it.jpg",
    imageAlt: "React Native training",
    href: "https://www.edstellar.com/course/react-native-training",
  },
  {
    domain: "Cross-Platform Mobile Frameworks",
    category: "Cross-Platform",
    title: "Ionic Training",
    duration: "24 - 32 hrs",
    delivery: DELIVERY,
    description:
      "Build hybrid mobile apps with Ionic, Angular and Capacitor for Android, iOS and the web from a single codebase.",
    image: "/images/cyber/hero-ai.jpg",
    imageAlt: "Ionic training",
    href: "https://www.edstellar.com/course/ionic-training",
  },
  {
    domain: "Cross-Platform Mobile Frameworks",
    category: "Cross-Platform",
    title: "Cordova Training",
    duration: "24 - 32 hrs",
    delivery: DELIVERY,
    description:
      "Wrap web codebases as hybrid Android and iOS apps with Apache Cordova, plugins and native bridges for enterprise mobile estates.",
    image: "/images/cyber/hero-bigdata-it.jpg",
    imageAlt: "Cordova training",
    href: "https://www.edstellar.com/course/cordova-training",
  },
  {
    domain: "Cross-Platform Mobile Frameworks",
    category: "Cross-Platform",
    title: "AngularJS with Cordova Training",
    duration: "24 - 32 hrs",
    delivery: DELIVERY,
    description:
      "Build hybrid Android and iOS apps with AngularJS on Cordova for legacy enterprise codebases that still ship through web-driven mobile stacks.",
    image: "/images/cyber/hero-ai-it.jpg",
    imageAlt: "AngularJS with Cordova training",
    href: "https://www.edstellar.com/course/angularjs-with-cordova-training",
  },
  {
    domain: "Cross-Platform Mobile Frameworks",
    category: "Cross-Platform",
    title: "Xamarin Training",
    duration: "24 - 32 hrs",
    delivery: DELIVERY,
    description:
      "Maintain and modernise enterprise Xamarin codebases on Android and iOS with C#, .NET MAUI migration and shared-business-logic patterns.",
    image: "/images/cyber/hero-devops-it.jpg",
    imageAlt: "Xamarin training",
    href: "https://www.edstellar.com/course/xamarin-training",
  },
  {
    domain: "Cross-Platform Mobile Frameworks",
    category: "Cross-Platform",
    title: "Sencha Touch Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Build and maintain enterprise Sencha Touch mobile web apps with the Ext JS component model for legacy hybrid Android estates.",
    image: "/images/cyber/hero-datasci-it.jpg",
    imageAlt: "Sencha Touch training",
    href: "https://www.edstellar.com/course/sencha-touch-training",
  },
];

const DOMAIN_CHIPS = DOMAINS.map((d) => d.name);

export function AndroidChipChangesTabber() {
  const [activeTab, setActiveTab] = useState<
    "domains" | "programs" | "paths" | "delivery" | "trainers"
  >("domains");
  const [activePath, setActivePath] = useState(0);
  const path = LEARNING_PATHS[activePath];

  const [activeChip, setActiveChip] = useState(DOMAIN_CHIPS[0]);

  const chipPrograms = PROGRAMS.filter((p) => p.domain === activeChip);

  return (
    <section id="catalog" className="bg-[#0c0c0c] text-white py-16 md:py-20">
      <div className="eds-page-center">
        <h2
          className="text-[36px] leading-[1.05] sm:text-[42px] lg:text-[48px]"
          style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
        >
          Every Android Discipline Your Enterprise Needs, in One Trusted Catalog.
        </h2>
        <p
          className="mt-3 text-[17px] sm:text-[18px] text-white"
          style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
        >
          Build mobile engineering readiness with Android training programs
          organized by domains, guided learning paths, expert trainers, and
          enterprise delivery flexibility.
        </p>

        <div
          className="mt-10 flex items-center gap-5 pb-5 uppercase tracking-wider"
          style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
        >
          {([
            { id: "domains", label: "TRAINING DOMAINS" },
            { id: "programs", label: "22 ANDROID TRAINING PROGRAMS" },
            { id: "paths", label: "LEARNING PATHS" },
            { id: "delivery", label: "DELIVERY" },
            { id: "trainers", label: "TRAINERS" },
          ] as const).map((t, i, arr) => (
            <button
              key={t.id}
              type="button"
              className={`relative pr-5 text-[14px] transition-colors sm:text-[16px] ${
                activeTab === t.id ? "text-white" : "text-[#B3B3B3] hover:text-white"
              } ${i < arr.length - 1 ? "after:absolute after:right-0 after:top-0 after:h-full after:w-[2px] after:bg-[#6366F1]" : ""}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {activeTab === "trainers" ? (
          <div className="mt-2 rounded-2xl bg-white p-6 text-black sm:p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-3xl">
                <h3
                  className="mb-4 text-[24px] leading-[1.1] sm:text-[30px] lg:text-[36px]"
                  style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                >
                  Trainers to Meet Your Android Needs
                </h3>
                <p
                  className="text-[15px] leading-[1.5] text-eds-gray-500 md:text-[17px]"
                  style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                >
                  Every Edstellar Android trainer passes a multi-stage vetting
                  process: technical assessment on Android, delivery evaluation
                  by a senior reviewer, reference checks from past corporate
                  cohorts, and a trial session on a slice of your real app
                  before joining the active bench. Our 1,500+ vetted trainers
                  span India, Singapore, the UK and beyond, covering Kotlin,
                  Jetpack Compose, mobile DevOps, mobile security and
                  cross-platform mobile frameworks.
                </p>
              </div>
              <a
                href="#contact"
                className="group/cta inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-[#6366F1] px-6 py-3 text-[14px] uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#4F46E5] md:self-center"
                style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
              >
                View all trainers
                <ArrowRightIcon
                  width={16}
                  height={16}
                  className="transition-transform group-hover/cta:translate-x-0.5"
                />
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 rounded-xl border border-eds-gray-200 bg-[#F5F3FF] p-4 lg:grid-cols-4 lg:p-6">
              {TRAINER_STATS.map((s) => (
                <div key={s.label}>
                  <p
                    className="text-[26px] leading-none text-[#6366F1] sm:text-[30px]"
                    style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                  >
                    {s.stat}
                  </p>
                  <p
                    className="mt-2 text-[11px] uppercase tracking-[0.14em] text-eds-gray-500 sm:text-[12px]"
                    style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {TRAINERS.map((t) => (
                <div
                  key={t.name}
                  className="flex flex-col rounded-xl border border-eds-gray-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-[#6366F1]/40 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative h-14 w-14 shrink-0">
                      <Image
                        src={t.image}
                        alt={`${t.name}, ${t.role}`}
                        width={56}
                        height={56}
                        className="h-14 w-14 rounded-full object-cover"
                      />
                      <span
                        className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-[#6366F1]"
                        aria-label="Verified"
                      >
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    </div>
                    <div className="min-w-0">
                      <h4
                        className="text-[16px] text-black"
                        style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                      >
                        {t.name}
                      </h4>
                      <p
                        className="text-[14px] text-eds-gray-500"
                        style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                      >
                        {t.role}
                      </p>
                    </div>
                  </div>

                  <p
                    className="mt-4 text-[13px] text-eds-gray-500"
                    style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                  >
                    {t.location} &middot;{" "}
                    <span style={{ color: "#F59E0B" }}>★</span> {t.rating}{" "}
                    <span className="text-eds-gray-400">({t.reviews})</span>
                  </p>
                  <p
                    className="mt-1 text-[13px] text-eds-gray-400"
                    style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                  >
                    Training since {t.trainingSince} &middot; {t.experience} yrs in industry
                  </p>

                  <p
                    className="mt-4 text-[14px] leading-[1.5] text-black"
                    style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                  >
                    {t.bio}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                    {t.certs.map((cert) => (
                      <span
                        key={cert}
                        className="rounded-full border border-eds-gray-300 px-2.5 py-1 text-[11px] uppercase tracking-[0.1em] text-eds-gray-500"
                        style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : activeTab === "programs" ? (
          <div className="mt-2 rounded-2xl bg-white p-6 text-black sm:p-8 md:p-10">
            {/* Live Curriculum banner — prominent freshness signal */}
            <div
              className="mb-8 flex items-start gap-4 overflow-hidden rounded-xl border-l-[4px] border-[#C5E826] bg-gradient-to-r from-[#1B1D52] via-[#312E81] to-[#4338CA] px-5 py-4 sm:px-6 sm:py-5"
            >
              <div className="relative mt-[6px] flex h-3 w-3 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C5E826] opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-[#C5E826]" />
              </div>
              <div className="flex-1">
                <p
                  className="text-[15px] leading-[1.55] text-white sm:text-[16px] md:text-[17px]"
                  style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                >
                  Edstellar continuously updates Android courseware as Google ships new Jetpack libraries, Android versions and Play policies, so every cohort trains on what Android engineers and Play Store reviewers are working with right now.
                </p>
              </div>
            </div>

            <div className="max-w-3xl">
              <h3
                className="mb-4 text-[24px] leading-[1.1] sm:text-[30px] lg:text-[36px]"
                style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                22 Enterprise-Grade Android & Mobile Training Programs, Ready to Deploy
              </h3>
              <p
                className="text-[15px] leading-[1.5] text-eds-gray-500 md:text-[17px]"
                style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                A live catalog of 20+ Android and cross-platform mobile programs across 4 domains, delivered live, on-site or virtual, every program backed by certified trainers and measurable skills.
              </p>
            </div>

            {/* Domain chips */}
            <div className="mt-8 flex flex-wrap gap-2">
              {DOMAIN_CHIPS.map((chip) => {
                const active = chip === activeChip;
                return (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => setActiveChip(chip)}
                    aria-pressed={active}
                    className={`rounded-full border px-4 py-2 text-[12px] uppercase tracking-[0.1em] transition-colors sm:text-[13px] ${
                      active
                        ? "border-[#6366F1] bg-[#6366F1] text-white"
                        : "border-eds-gray-300 text-eds-gray-500 hover:border-[#6366F1] hover:text-[#6366F1]"
                    }`}
                    style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                  >
                    {chip}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {chipPrograms.map((p) => (
                <a
                  key={p.title}
                  href={p.href}
                  target={p.href.startsWith("http") ? "_blank" : undefined}
                  rel={p.href.startsWith("http") ? "noopener" : undefined}
                  className="eds-arrow-link group flex h-full flex-col overflow-hidden rounded-xl border border-eds-gray-200 bg-white transition-all hover:-translate-y-0.5 hover:border-[#6366F1]/40 hover:shadow-md"
                >
                  <div className="relative aspect-[3/2] overflow-hidden bg-[#0c0c0c]">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span
                      className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-sm border border-white/30 bg-black/40 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-white backdrop-blur-sm"
                      style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />
                      {p.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 px-5 py-5">
                    <h4
                      className="text-[17px] leading-[1.25] text-black"
                      style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                    >
                      {p.title}
                    </h4>
                    <div
                      className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-eds-gray-500"
                      style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                    >
                      <span className="inline-flex items-center gap-1">
                        <span className="h-1 w-1 rounded-full bg-[#6366F1]" /> {p.duration}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <span className="h-1 w-1 rounded-full bg-[#6366F1]" /> {p.delivery}
                      </span>
                    </div>
                    <p
                      className="text-[13px] leading-[1.45] text-eds-gray-500"
                      style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                    >
                      {p.description}
                    </p>
                    <span
                      className="mt-auto inline-flex items-center gap-1.5 pt-3 text-[12px] uppercase tracking-[0.14em] text-[#6366F1]"
                      style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                    >
                      View program
                      <ArrowRightIcon className="eds-arrow" width={14} height={14} />
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div
              className="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-eds-gray-200 bg-[#F5F3FF] px-5 py-4 text-center md:flex-row md:text-left"
            >
              <p
                className="text-[14px] text-eds-gray-500 md:text-[15px]"
                style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                Looking for a specific Android version, Compose migration path or cross-platform stack? Our team can match you to any of the 22 programs in the live catalog, or build a custom program around your exact app, modules and release process.
              </p>
              <a
                href="#catalog"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-[#6366F1] px-5 py-2 text-[12px] uppercase tracking-[0.12em] text-[#6366F1] transition-colors hover:bg-[#6366F1] hover:text-white"
                style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
              >
                Browse the Full Program Catalog
                <ArrowRightIcon width={14} height={14} />
              </a>
            </div>
          </div>
        ) : activeTab === "delivery" ? (
          <div className="mt-2 grid min-h-[420px] overflow-hidden rounded-2xl bg-white text-black md:grid-cols-2">
            <div className="flex flex-col justify-center px-8 py-12 sm:px-12 md:p-16">
              <h3
                className="mb-6 text-[24px] leading-[1.1] tracking-tight sm:text-[30px] lg:text-[36px]"
                style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                Onsite, Off-Site, Virtual.
              </h3>
              <p
                className="mb-8 max-w-md text-[16px] leading-[1.5] text-eds-gray-500 md:text-[18px]"
                style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                Global Android delivery in any language, on any schedule, with
                the same trainer quality and outcomes whether your mobile team
                is co-located, hybrid or fully remote.
              </p>
              <div
                className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.14em] text-eds-gray-500"
                style={{ fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif", fontWeight: 600 }}
              >
                {DELIVERY_MODES.map((mode) => (
                  <span
                    key={mode}
                    className="rounded-full border border-eds-gray-300 px-3 py-1 transition-colors hover:border-[#6366F1] hover:text-[#6366F1]"
                  >
                    {mode}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative min-h-[280px] bg-[#f0f0f0] md:min-h-full">
              <Image
                src="/images/cyber/hero-team-training.jpg"
                alt="Training delivery"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        ) : activeTab === "domains" ? (
          <>
            <div className="mt-2 flex flex-wrap items-baseline gap-x-8 gap-y-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-sm">
              <span
                className="text-[44px] leading-none text-[#6366F1]"
                style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                {TOTAL_TRAININGS}+
              </span>
              <div>
                <p
                  className="text-[15px] uppercase tracking-[0.18em] text-white/70"
                  style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                >
                  Android trainings live now
                </p>
                <p
                  className="mt-1 text-[14px] text-white/55"
                  style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                >
                  Across {DOMAINS.length}{" "}domains within Edstellar&apos;s broader IT &amp;{" "}
                  Technical catalog of 2,000+ programs.
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {DOMAINS.map((d) => (
                <a
                  key={d.name}
                  href={d.href}
                  className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition-all hover:-translate-y-0.5 hover:border-[#6366F1]/60 hover:bg-white/[0.06]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#1d1d1b]">
                    <Image
                      src={d.image}
                      alt={d.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c]/80 via-[#0c0c0c]/20 to-transparent" />
                    <span
                      className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-sm border border-[#6366F1]/60 bg-[#6366F1]/15 px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-[#C7D2FE] backdrop-blur-sm"
                      style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />
                      {d.count} trainings
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 px-5 py-5">
                    <h3
                      className="text-[18px] leading-[1.25] text-white sm:text-[19px]"
                      style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                    >
                      {d.name}
                    </h3>
                    <p
                      className="text-[14px] leading-[1.4] text-white/70 sm:text-[15px]"
                      style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                    >
                      {d.description}
                    </p>
                    <span
                      className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[12px] uppercase tracking-[0.16em] text-[#6366F1]"
                      style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                    >
                      Explore domain
                      <ArrowRightIcon
                        className="transition-transform group-hover:translate-x-0.5"
                        width={14}
                        height={14}
                      />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="mt-2 grid overflow-hidden rounded-2xl bg-white text-black md:grid-cols-2">
              <div className="flex items-center px-8 py-12 sm:px-12 lg:px-16">
                <div className="border-l-[3px] border-[#6366F1] pl-6">
                  <h3
                    className="text-[24px] leading-[1.1] sm:text-[30px]"
                    style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                  >
                    {path.cardTitle}
                  </h3>
                  <p
                    className="mt-5 max-w-md text-[17px] leading-[1.4] sm:text-[19px]"
                    style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                  >
                    {path.cardDescription}
                  </p>
                  <a
                    href={path.href}
                    className="group/cta mt-7 inline-flex items-center gap-2 rounded-full bg-[#6366F1] px-6 py-3 text-[14px] uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#4F46E5]"
                    style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                  >
                    View Learning Path
                    <ArrowRightIcon
                      width={16}
                      height={16}
                      className="transition-transform group-hover/cta:translate-x-0.5"
                    />
                  </a>
                </div>
              </div>
              <div className="relative h-[280px] bg-[#0c0c0c] md:h-auto">
                <Image
                  src={path.image}
                  alt={path.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
              {LEARNING_PATHS.map((p, i) => (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => setActivePath(i)}
                  className={`relative cursor-pointer pt-4 pb-2 text-left transition-colors ${
                    i === activePath
                      ? "border-t-[3px] border-[#6366F1] text-white"
                      : "border-t border-white/30 text-white/80 hover:text-white"
                  }`}
                >
                  <span
                    className="block text-[12px] uppercase leading-[1.3] tracking-wider sm:text-[13px]"
                    style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                  >
                    {p.label}
                  </span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
