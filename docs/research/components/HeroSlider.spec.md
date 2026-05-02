# HeroSlider Specification

## Overview
- **Target file:** `src/components/HeroSlider.tsx`
- **Interaction model:** time-driven (autoplay) + click pagination via bottom nav
- **Height:** ~680px (banner) + ~160px (overlay nav strip extending below)

## Visual structure
```
<section class="relative bg-mtk-black text-white">
  <Slide content overlay (left half) /> {selectedSlide.eyebrow → title → subtitle → CTA}
  <Slide image (right or full) /> {selectedSlide.imageDesktop full width}
  <SliderNav (8 thumbs, absolute bottom, dark transparent bg) />
</section>
```

The left-side gradient/dim overlay ensures text legibility on top of dark imagery.

## Slides data (use this exactly)
```ts
const SLIDES: Slide[] = [
  { eyebrow: "MediaTek.", title: "Quarterly Investor Conference", subtitle: "Join us on April 30th at 03:00 PM +8 UTC", ctaLabel: "Learn More", ctaHref: "#", imageDesktop: "/images/Quarterly-Investor.jpg", imageAlt: "Quarterly investor conference visual" },
  { eyebrow: "IoT", title: "MediaTek Genio Pro", subtitle: "Extreme Edge Intelligence. Built for Scale.", ctaLabel: "Learn More", ctaHref: "#", imageDesktop: "/images/Home-Page-Hero-Banner_Desktop_1920X850.png", imageAlt: "MediaTek Genio Pro" },
  { eyebrow: "FLAGSHIP", title: "MediaTek Dimensity 9500s", subtitle: "The Power to Outlast", ctaLabel: "Learn More", ctaHref: "#", imageDesktop: "/images/D9500S_Home-Page-Hero-Banner_Desktop_1920X850.png", imageAlt: "MediaTek Dimensity 9500s" },
  { eyebrow: "MediaTek.", title: "This chip changes everything.", subtitle: "Powering technology that transforms life.", ctaLabel: "Learn More", ctaHref: "#", imageDesktop: "/images/Candice_Desktop.jpg", imageAlt: "This chip changes everything" },
  { eyebrow: "Chromebooks", title: "MediaTek Kompanio Ultra", subtitle: "The Ultimate Performance Processor for Chromebook Productivity, Creativity and AI", ctaLabel: "Learn More", ctaHref: "#", imageDesktop: "/images/Desktop_Kompanio-Ultra-910-2.jpg", imageAlt: "MediaTek Kompanio Ultra" },
  { eyebrow: "PREMIUM", title: "MediaTek Dimensity 8500", subtitle: "Powerful Performance for Ultra-Fast Play", ctaLabel: "Learn More", ctaHref: "#", imageDesktop: "/images/D8500_Home-Page-Hero-Banner_Desktop_1920X850.png", imageAlt: "MediaTek Dimensity 8500" },
  { eyebrow: "Inside Tek", title: "Innovation. Influence.", subtitle: "What's Next in Tech.", ctaLabel: "Learn More", ctaHref: "#", imageDesktop: "/images/InsideTekHero_Card.png", imageAlt: "Inside Tek" },
  { eyebrow: "GENERATIVE AI", title: "Leading the next wave of edge AI", subtitle: "Faster, smarter generative AI capabilities in wide-ranging products", ctaLabel: "Learn More", ctaHref: "#", imageDesktop: "/images/Desktop_AI.jpg", imageAlt: "Generative AI on the edge" },
];
```

## Slider Navigation (bottom strip)
- Position: absolute, bottom of banner section (overlapping into next section), dark `rgba(0,0,0,0.9)` bg
- 8 columns (each `flex: 0 0 12.5%`)
- Each column displays:
  - 4px tall progress bar at top (gray), with orange `#FF9800` fill segment that grows over the slide duration when this slide is active
  - eyebrow text (uppercase, ~13px, gray `#B3B3B3`, tracking)
  - title text (~17px, white)
- Active item: white text + visible progress bar fill
- Padding: 20px 0 40px on each item

## Slide content layout (left side)
- Eyebrow `text-xl font-light uppercase tracking-wider text-white opacity-90`
- Title `text-[55px] leading-[1.05] font-light text-white mb-[34px]`
- Subtitle `text-xl text-white/80 mb-8 max-w-md`
- CTA: rounded-full pill button, bg `#FF9800`, white text, padding `px-7 py-3`, with hover state (slight darken)

## Autoplay
- 7 second per-slide duration
- On hover over slider area, pause autoplay; resume on mouse leave
- On click of any slider nav item, jump to that slide and reset progress

## Transition
- Fade transition between slides (opacity), 600ms ease

## Computed styles
- Slide height: `h-[640px] md:h-[680px]`
- Hero h1: 55px / line-height 1.05
- CTA pill: bg `#FF9800`, padding x=28, y=12; text 16px Riona Sans Regular; rounded-full

## Implementation notes
- Use `useState` for activeIndex (0-7)
- Use `useEffect` with `setInterval` for autoplay; clear and restart on activeIndex change or hover
- Slide image: `<Image>` with `fill` and `priority` for first slide, `object-cover object-right`
- Make this a Client Component (`"use client"`)

## Imports
```tsx
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@/components/icons";
import type { Slide } from "@/types/content";
```
