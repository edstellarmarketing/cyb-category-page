# Android Category Page — Stage 1: Research

v2 flow, Stage 1 deliverable. Source of truth for `/android-training`.

**Scope (user-approved)**: Android + cross-platform mobile that ships to Android. Filtered from
`Edstellar Master Catalog.xlsx` — Category = "Mobile App Development" (33 rows) plus three
cross-category programs that target Android stacks (Kotlin for Java Developers · Mobile UI UX
Design · Appium). All program names and URLs are verbatim from the catalog. Page label:
**Android & Mobile App Training**.

**Catalog reality (must surface in Stage 3)**: Android-pure programs = 12, expanded scope = 22
(see §2). Section §07 norm of 8–11 chips × ≥4 programs cannot be met honestly; this page ships
**4 catalog-deep chips** instead (≥4 each, 21 of 22 programs covered). The deviation is
documented as a noted deviation, not a fail, because every chip is grounded and the rule
explicitly subordinates to the catalog-min-4-per-chip floor.

## 1. Competitor white space (positioning)

The 2026 Android/mobile-development training market splits into three camps; Edstellar owns the
gap between them:

- **Self-paced platforms** (Udemy/Coursera Android specializations, Google Codelabs, Android
  Developer Fundamentals, Pluralsight, LinkedIn Learning) — broad and cheap, but no live
  instruction, no cohort accountability, no codebase-specific guidance, no measurable rollout
  outcome.
- **Vendor bootcamps and OEM academies** (Galvanize/Codeup, Big Nerd Ranch, Vogella, OEM partner
  programs from Samsung/Google) — strong instructors, but fixed public-cohort syllabus, not
  customizable to a client's app, modularization or Gradle reality.
- **Consulting-led mobile builds** (ThoughtWorks, Endava, Globant mobile practices) — high-touch
  but expensive, scoped to deliverables not skills transfer, and not repeatable as an enterprise
  training program.

**Edstellar's white space:** instructor-led, *customized*, closed-cohort group training for
Android and cross-platform mobile teams. Trainers vet-able with a trial session, sessions matched
to the client's actual stack (Kotlin/Java, Jetpack Compose, Gradle modules, CI), delivered
on-site or virtual across 100+ countries, tied to measurable mobile KPIs (crash-free user rate,
ANR rate, app size, install size, time-to-interactive, Play Store rating).

## 2. Program count + domain breakdown (real, from catalog)

- **Total in scope: 22 programs** → use **"20+ Android and mobile programs"** in copy, **"22"**
  in the catalog heading.
- **Domains: 4** (catalog-min-4-per-chip honored; chip count deviation noted in Stage 3).
- Company-wide LOCKED stats unchanged: **1,500+ vetted trainers**, **100+ countries**.

| Domain chip | Count | Real programs (verbatim from catalog) |
|---|---|---|
| Android Native Development (Java & Kotlin) | 5 | Fundamentals of Android Training · Android App Development Training · Android App Development with Kotlin Training · Java for Android Training · Kotlin for Java Developers Training |
| Android Platform, Systems & Game | 5 | Android Internals Training · Android Development NDK Training · Android Automotive OS (AAOS) Training · Android App Development with Python Training · Android Game Development Training |
| Android Security, QA & DevOps | 4 | Android Security Essentials Training · CI/CD for Android Developers Training · Mobile Testing - Android/iOS Training · Appium Training |
| Cross-platform Mobile Frameworks | 7 | Google Flutter Training · React Native Training · Cordova Training · AngularJS with Cordova Training · Ionic Training · Xamarin Training · Sencha Touch Training |

Unused in chips (carry as supporting program / extra catalog tile, not as a chip): Mobile UI UX
Design Training.

## 3. Featured programs (verified URLs)

| Badge | Program | URL |
|---|---|---|
| Kotlin | Android App Development with Kotlin Training | https://www.edstellar.com/course/android-app-development-with-kotlin-training |
| Native | Android App Development Training | https://www.edstellar.com/course/android-app-development-training |
| Security | Android Security Essentials Training | https://www.edstellar.com/course/android-security-essentials-training |
| Cross-platform | Google Flutter Training | https://www.edstellar.com/course/google-flutter-training |

## 4. Hero — 4 slide CONCEPTS (capability/audience/use-case mix, not 3-industry default)

Slide 1 is always the generic corporate slide; 4 slides total. Slides 2–4 mix angle *types* to
avoid the templatized look (Section §01 allows verticals OR use cases). The slider menu
(labels + subs + icons) is bespoke to Android.

| # | Concept (type) | Strip label | Strip sub | Lucide icon |
|---|---|---|---|---|
| 1 | Corporate Android (generic) | FEATURED | Corporate Android Training | Smartphone |
| 2 | Modern Android with Kotlin & Compose (capability) | KOTLIN & COMPOSE | Modern Android with Jetpack | Layers |
| 3 | Mobile DevOps, QA & Security (use case) | MOBILE DEVOPS | CI, automation and app hardening | ShieldCheck |
| 4 | Cross-platform Mobile Engineering (audience) | CROSS-PLATFORM | Flutter, React Native and hybrid | Globe |

Category-specific frameworks/tools to name across slides (O2 / mkt2): Kotlin, Java, Jetpack
Compose, Android Architecture Components, Coroutines, Gradle, Android Studio, NDK, AOSP/AAOS;
Espresso, Appium, Firebase Test Lab; CI with GitHub Actions/Bitrise/Gradle Build Cache;
Play Console, App Bundle, ProGuard/R8, SafetyNet/Play Integrity; Flutter, React Native, Ionic,
Xamarin, Cordova.

## 5. [Reference (cyber) → Android] substitution map

| Reference (cyber) token | Android equivalent |
|---|---|
| Category "Cybersecurity" | "Android" / "Android and mobile app development" |
| CISO, SOC analyst, pen tester, GRC analyst | VP Mobile / Head of Engineering, Android tech lead / staff Android engineer, Android developers, mobile QA engineers, mobile DevOps / build engineers, mobile security engineers, cross-platform (Flutter/RN) engineers, mobile UX engineers |
| CISSP, CEH, OSCP, MITRE ATT&CK, NIST CSF | Google Associate Android Developer; Material Design 3; Android Architecture Components (Compose, Navigation, Room, WorkManager); Kotlin Coroutines + Flow; Gradle Kotlin DSL; Play Integrity API; Android Security Best Practices; AOSP/AAOS specs |
| Cloud sandboxes, MITRE ATT&CK, CTF labs | Android Studio + AVD emulators, physical device farms (Firebase Test Lab, BrowserStack, Sauce Labs), Gradle build sandboxes, sample apps & Compose previews, instrumentation test labs |
| MTTD, MTTR, vulnerability remediation rate | crash-free user rate, ANR rate, app launch time, app size / install size, time-to-interactive, Play Store rating, P95 frame time, Play Integrity verdicts, build/install time |
| SOC & SIEM, Cloud Security, GRC domains | Android Native (Java/Kotlin), Android Platform & Systems, Mobile DevOps/QA/Security, Cross-platform Mobile |
| "8 cyber domains" / "200+ programs" | "4 mobile-development domains" / "20+ programs" (real expanded count 22; Android-pure 12) |

## 6. Stat-card sources (real, cited)

- **Statista, Global Mobile OS Market Share, Q4 2024** — Android holds **~71%** of the global
  mobile OS market.
- **Google I/O 2024 keynote (Google official)** — **3+ billion** active Android devices
  worldwide.
- **WEF Future of Jobs Report 2025** — **~39%** of workers' core skills are expected to change
  by 2030 (used in workforce-context tab; verbatim from the WEF report).

Backup figure if needed: **data.ai State of Mobile 2024** — global mobile app spend exceeded
**$362B** in 2023. (Held in reserve; only used if a stat card is reframed.)

## 7. Constraints to apply in Stage 2 (from the four rulebook tabs)

### FLOORS (allowed — accurate description)
`instructor-led` ≥10, `group training` ≥8, `instructor-led group training` ≥3 (across the page).

### CEILINGS (commercial phrases ≤2, each pinned to ONE location — K7)
| Phrase | Pinned location |
|---|---|
| Android Corporate Training Company | Meta title — "Android Corporate Training Company \| Edstellar" (≤56) |
| Android corporate training provider | Meta description opening (≤156) |
| Android training company | WelcomeStrip Para 1 opening |
| Android corporate training company | WhyEdstellar goal-statement OPENING |
| Android training provider | WhyEdstellar goal-statement CLOSING |

### CTA copy map (Launch Ready — never "Enquire Now")
Hero secondary `Get a Training Proposal` · Catalog `Browse the Full Program Catalog` · Pricing
package `Get a Quote` · Pricing strip `Talk to a Learning Advisor` · FAQ bottom `Ask Our
Learning Services Team` · Contact submit `Send My Training Requirements`. All hrefs → #contact
/ #catalog / confirmed URL.

### Locked fields / pins
H1 opens `Customized`, ends `for Enterprise`/`for Enterprise teams`; `customized
instructor-led training` bolded once (WelcomeStrip Para 2); program card delivery LOCKED
`Instructor-led (On-site/Virtual)`; titles end in `Training` (never Course); pricing tiers use
fit-signal labels (NOT "Most Popular"); no superlatives; no accreditation claims; FAQ Q1 =
Target Audience naming ≥5 real Android job titles.

### Real Android & mobile job titles for FAQ Q1 (≥5)
Android developers, Android tech leads, mobile architects, Kotlin developers, Java-to-Kotlin
migrators, mobile QA / SDETs, mobile DevOps and build engineers, mobile security engineers,
cross-platform (Flutter / React Native) developers, mobile UX engineers, plus leaders
(VP Mobile, Head of Mobile Engineering).

### Noted constraint pre-flagged for Stage 3
- **Domain-chip count = 4**, vs. the Section §07 guideline of 8–11. Reason: catalog depth (only
  12 Android-pure + 10 Android-adjacent programs). Each chip still satisfies the harder rule of
  ≥4 real programs, and 21 of 22 in-scope programs are placed. Accepted deviation; rule
  explicitly subordinates to catalog reality.

---

**Exit criteria**: this research file is complete and the four slide concepts in §4 are
approved. Once approved, Stage 2 writes copy mechanically against these constraints.
