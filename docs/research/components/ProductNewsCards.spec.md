# ProductNewsCards Specification

## Overview
- **Target file:** `src/components/ProductNewsCards.tsx`
- **Interaction model:** click-driven carousel
- **Height:** ~861px

## Visual
- White background (`bg-white`) with very subtle pinkish halo
- Section header (left-aligned): eyebrow "PRODUCT & TECHNOLOGY NEWS" + h2 "It all starts with a chip" + paragraph
- Right floating orange circle arrow nav
- 4 cards visible at desktop

## Header content
- Eyebrow uppercase 13px black tracking-wider
- h2 "It all starts with a chip" 47-55px Riona Sans Light
- Paragraph: "MediaTek creates extraordinary products and innovative technologies that spark inspiration and empower everyone."

## Card data (4 visible)
```ts
const PRODUCT_CARDS: NewsCard[] = [
  { category: "AI, IOT",       title: "MediaTek Genio Pro 5100 Flagship-class AI & Computing Performance for IoT", description: "A new extreme compute and multimedia platform that unleashes the full potential of AI at the edge.",            image: "/images/genio-card.jpg",                                                imageAlt: "MediaTek Genio Pro 5100",                  href: "#" },
  { category: "AI",            title: "How MediaTek is Powering the Future of On-Device AI",                       description: "AI is reshaping the technology landscape, driving a shift toward on-device intelligence. From AI workstations to Chromebooks and Gemini on-device, ...", image: "/images/pd-rajput.png",                                          imageAlt: "PD Rajput",                                  href: "#" },
  { category: "CHROMEBOOKS",   title: "All-Day Power: MediaTek's Battery Life Advantage Across Every Segment",     description: "MediaTek is leading the way in battery life innovation, delivering solutions that keep you powered up — no matter where your day takes you.",        image: "/images/All-Day-Power-MediaTek’s-Battery-Life-Advantage-Across-Every-Segment.png", imageAlt: "All-day power",                              href: "#" },
  { category: "SMARTPHONES",   title: "MediaTek Dimensity 9500s and Dimensity 8500",                                description: "Delivering outstanding performance, efficiency, AI, imaging, gaming, and wireless connectivity, driving new momentum into the flagship and premium ...",      image: "/images/9500s-and-Dimensity-8500-launch_.png",                            imageAlt: "Dimensity 9500s and 8500",                  href: "#" },
];
```

## Computed styles
- Section: `bg-white py-16 md:py-20`
- Card structure: same as BusinessNewsCards (image top, content below); see that spec for shared card pattern.

## Imports
```tsx
"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowRightIcon } from "@/components/icons";
import type { NewsCard } from "@/types/content";
```
