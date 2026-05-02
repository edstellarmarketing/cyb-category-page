# BusinessNewsCards Specification

## Overview
- **Target file:** `src/components/BusinessNewsCards.tsx`
- **Interaction model:** click-driven carousel
- **Height:** ~870px

## Visual (verified via screenshot)
- Cream/light-pink background `#FFF7EE` with very subtle pink halo at edges
- Section header (left-aligned): eyebrow "BUSINESS & INDUSTRY NEWS" + h2 "Where innovation begins" + paragraph "Stay updated on industry-leading innovations in computing, connectivity, multimedia, and more."
- Right floating orange circle arrow nav button (30% vertical position)
- 4 cards visible at desktop. Each card is white bg with image on top, then padding around content below

## Header content
- Eyebrow: uppercase ~13px, color black, tracking-wider, mb-2
- h2: 50-55px Riona Sans Light, line-height 1.05, mb-3
- Paragraph: 18-21px Riona Sans Light, mb-12

## Card structure
- White background `bg-white`
- Image: full width, aspect 16:11 approx, object-cover, rounded-xl on top
- Body padding: 24px
- Category eyebrow: orange `#FF9800`, uppercase, 12-13px, tracking-wider, mb-3
- Title h3: 24px Riona Sans Regular, mb-3, line-height 1.2
- Description p: 18px Riona Sans Light, line-height 1.3, color black, mb-4
- Trailing chevron `ArrowRightIcon` 24x24 orange (`#FF9800`), positioned just after the description (animation on hover)
- Card has no border but very slight shadow on hover

## Card data (4 cards visible from screenshot)
```ts
const BUSINESS_CARDS: NewsCard[] = [
  { category: "AI",      title: "How MediaTek and NVIDIA are Making AI More Accessible", description: "MediaTek and NVIDIA discuss the GB10 Superchip, DriveOS in Dimensity Auto, NVIDIA TAO for IoT, and NVLink Fusion for datacenters.", image: "/images/2.-Centre-Aligned-text--What-it-takes-to-design-an-AI-superchip.png", imageAlt: "MediaTek and NVIDIA collaboration",       href: "#" },
  { category: "AI, IOT", title: "NPUs, NeuroPilot and LiteRT Ready to Power Millions of AI Devices", description: "MediaTek delivers scalable, power-efficient on-device AI with NPUs and Google LiteRT integration, simplifying AI deployment.",        image: "/images/MTK_-LiteRT.png",                                                              imageAlt: "MediaTek and LiteRT",                       href: "#" },
  { category: "AI, IOT", title: "Transforming the Food & Beverage Industry with MediaTek Genio", description: "Meet rising food and beverage demands with reliable, connected equipment—intuitive interfaces, fast response, and durability in harsh kitchens.", image: "/images/Transforming-the-food-&-beverage-industry-with-MediaTek-Genio.png", imageAlt: "Food and beverage industry",                href: "#" },
  { category: "AWARDS", title: "2025's Best MediaTek-powered Devices", description: "From smartphones to smart home devices and networking, MediaTek-powered products are pushing the limits of what technology can do.",                                  image: "/images/Expect-Incredible-Awards-2025.jpg",                                       imageAlt: "MediaTek Expect Incredible Awards 2025",  href: "#" },
];
```

## Computed styles
- Section: `bg-[#FFF7EE] py-16 md:py-20`
- Card: `bg-white rounded-xl overflow-hidden`
- Card hover: subtle scale or shadow

## Behaviors
- Arrow click: advance carousel by 1 card; current implementation can be a static 4-card grid that uses a translateX state for scroll
- For simplicity: render the 4 cards in a horizontal flex; arrow is decorative orange circle that doesn't need to function (or scrolls horizontally on click)

## Imports
```tsx
"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowRightIcon } from "@/components/icons";
import type { NewsCard } from "@/types/content";
```
