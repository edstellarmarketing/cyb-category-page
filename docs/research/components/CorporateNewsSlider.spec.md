# CorporateNewsSlider Specification

## Overview
- **Target file:** `src/components/CorporateNewsSlider.tsx`
- **Interaction model:** click-driven horizontal slider/carousel
- **Height:** ~866px

## Visual
- Light cream/cream-orange background `#FFF7EE` with subtle pinkish edge halo (or use white with a light orange-tinted glow)
- Section header (left-aligned): eyebrow "CORPORATE NEWS", h2 "It all starts here...with a chip.", subhead paragraph "Driving innovation, connecting the world."
- Right side: navigation arrows (orange circle with chevron)
- 4 visible cards on desktop (each 25% width), with arrow pagination

## Header content
- Eyebrow uppercase ~13px, text-black, tracking-wider, mb-2
- h2: 47px Riona Sans Light, mb-3
- Subhead p: 18px Riona Sans Light, max-w-2xl

## Card structure (square aspect)
- Card has full image as background, no separate text body inside the card
- Below the image (within the card), category eyebrow + title text
- Image aspect: ~1:1 with rounded-xl (~12px) bottom corners
- Title is shown overlaid on a thin band? No — based on screenshot the cards appear as image + title beneath

Wait, re-reading screenshot at scroll ~1940 area: This section is right after "This chip changes everything" and BEFORE the BUSINESS & INDUSTRY NEWS section. The screenshot was blank when scrolled there. Let me describe based on HTML and CSS evidence.

## Card data (9 cards)
```ts
const CORP_CARDS: CorporateNewsCard[] = [
  { category: "AI",        title: "One MediaTek: Evolving our brand for the AI Edge-to-Cloud Future", image: "/images/One-MediaTek-Evolving-Our-Brand-for-the-AI-Edge-to-Cloud-Future04_Blog.png", imageAlt: "One MediaTek brand evolution",                href: "#" },
  { category: "BUSINESS",  title: "LexisNexis recognizes MediaTek for innovation in patents",   image: "/images/LexisNexis0326_EN.jpg",                                                                  imageAlt: "LexisNexis recognition",                       href: "#" },
  { category: "AWARDS",    title: "MediaTek receives ISSCC Anantha P. Chandrakasan Distinguished Technical Paper Award",                       image: "/images/MediaTek-receives-ISSCC-Anantha-P.-Chandrakasan-Distinguished-Technical-Paper-Award_.jpg", imageAlt: "ISSCC award", href: "#" },
  { category: "BRAND",     title: "Interbrand 2025 ranks MediaTek among Best Global Brands",     image: "/images/Interbrand2025_Blog.png",                                                                imageAlt: "Interbrand 2025",                              href: "#" },
  { category: "CULTURE",   title: "Best Company to Work For — A great place to build the future", image: "/images/Best-company-work-for_Corporate-news_section.jpg",                                       imageAlt: "Best company to work for",                     href: "#" },
  { category: "PARTNERSHIP", title: "MediaTek and NVIDIA collaborate on AI Factory infrastructure", image: "/images/NVIDIA_AI_Factory.jpg",                                                                imageAlt: "NVIDIA AI Factory",                            href: "#" },
  { category: "CONNECTIVITY", title: "ESA & MediaTek advance Non-Terrestrial-Network technology", image: "/images/ESA_NTN_blog.jpg",                                                                       imageAlt: "ESA NTN",                                       href: "#" },
  { category: "MANUFACTURING", title: "MediaTek successfully develops first chip using TSMC 3nm process", image: "/images/MediaTek-successfully-develops-first-chip-using-TSMC-3nm-process.jpg",        imageAlt: "TSMC 3nm",                                       href: "#" },
  { category: "AI",        title: "NVLink Fusion brings AI compute fabric to data centers",       image: "/images/NVFusion_Blog-0525.png",                                                                imageAlt: "NVLink Fusion",                                href: "#" },
];
```

## Computed styles
- Section: `bg-[#FFF7EE] py-16 md:py-20`. Add a subtle pinkish edge halo via box-shadow inset or border gradient.
- Card: rounded-xl, overflow-hidden; image aspect-square; below image padding p-4
- Card title: 18-20px Riona Sans Regular
- Eyebrow above title: 12px uppercase, orange-ish gray
- Arrow nav: orange circle 50x50, white chevron icon, fixed on right side ~50% vertical

## Behaviors
- Right arrow click: advance by 1 card (translateX)
- 4 cards visible at desktop, 2 at tablet, 1 at mobile
- Use a stateful `activeIndex` and slice an arr of 4 visible from the data; or use a transform translateX
- Show "page indicator" if available (optional)

## Imports
```tsx
"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowRightIcon } from "@/components/icons";
import type { CorporateNewsCard } from "@/types/content";
```
