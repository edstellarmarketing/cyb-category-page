# MoreOnMediaTek Specification

## Overview
- **Target file:** `src/components/MoreOnMediaTek.tsx`
- **Interaction model:** static (4-card grid; each has Learn more button)
- **Height:** ~820px

## Visual (verified via screenshot)
- Dark background `#0c0c0c` with subtle radial vignette
- Section header (left-aligned): eyebrow "MORE ON MEDIATEK" + h2 "Incredible starts here" + paragraph "More ways to connect with MediaTek."
- 4 cards in a grid (1 column mobile, 2 column tablet, 4 columns desktop)

## Header content
- Eyebrow uppercase 13px white tracking-wider, mb-2
- h2 "Incredible starts here" 47-55px white Riona Sans Light, mb-3
- Paragraph: "More ways to connect with MediaTek." 18px white Riona Sans Light

## Cards data (4 cards verified)
```ts
const MORE_CARDS: MoreCard[] = [
  { title: "What's Next in Tech",          description: "Watch and deep dive into key business and technology topics with MediaTek.", image: "/images/InsideTekHero_Card.png",                          imageAlt: "Inside Tek",                href: "#" },
  { title: "Connections that Matter",      description: "Stories of innovation, optimism, and human connection powered by MediaTek technology.", image: "/images/Connection-page-card-image-for-home-page2-(2).jpg", imageAlt: "Connections that Matter",  href: "#" },
  { title: "Devices powered by MediaTek",  description: "Discover products and brands powered by MediaTek.",                            image: "/images/22.jpg",                                          imageAlt: "Devices powered by MediaTek", href: "#" },
  { title: "MediaTek Podcast Central",     description: "Discussions on technology and the tech industry.",                              image: "/images/PoweredByHomepage_Mediatek.png",                  imageAlt: "Podcast Central",          href: "#" },
];
```

## Computed styles
- Section: `bg-[#0c0c0c] text-white py-20`
- Card image: rounded-3xl (~24px), aspect ~5:4, object-cover
- Card title h3: 24px Riona Sans Regular white, mt-6
- Card description: 18px Riona Sans Light white/80 mt-3
- Learn more button: bg `#FF9800` text-white rounded-full px-6 py-3 mt-5 self-start; hover darken slightly

## Imports
```tsx
import Image from "next/image";
import type { MoreCard } from "@/types/content";
```

This is a Server Component.
