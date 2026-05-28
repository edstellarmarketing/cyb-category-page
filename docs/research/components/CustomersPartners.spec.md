# CustomersPartners Specification

## Overview
- **Target file:** `src/components/CustomersPartners.tsx`
- **Interaction model:** static showcase
- **Height:** ~939px

## Visual
- White or off-white background
- Section header (left-aligned): eyebrow "CUSTOMERS AND PARTNERS" + h2 "Powered by MediaTek" + paragraph
- Two large showcase tiles below the header — each with image left and caption right (or stacked image+caption)

## Header content
- Eyebrow uppercase 13px black tracking-wider
- h2 "Powered by MediaTek" 47-55px Riona Sans Light
- Paragraph: "Powering more than 2 billion devices every year, MediaTek's chipsets and technologies are at the core of the world's biggest brands."

## Tiles (use these images)
```ts
const TILES: CustomerCard[] = [
  { title: "Featured devices powered by MediaTek", description: "Discover smartphones, tablets, smart-home, and connectivity products from the world's biggest brands.", image: "/images/PoweredByHomepage_Mediatek.png", imageAlt: "Devices powered by MediaTek", href: "#" },
  { title: "Partnering with industry leaders",     description: "OEM and ODM collaborations push the boundary of what's possible across mobile, automotive, and IoT.", image: "/images/11-3.jpg",                       imageAlt: "Partnerships",                href: "#" },
];
```

## Computed styles
- Section: `bg-white py-20`
- Tile: rounded-xl, overflow-hidden; flex layout (image left 60%, caption right 40%) at desktop; stack on mobile
- Tile image: object-cover, aspect 16:9 or so; on mobile full-width
- Tile body padding: 32px; title h3 24px Riona Sans Regular; description 18px Riona Sans Light

## Imports
```tsx
import Image from "next/image";
import type { CustomerCard } from "@/types/content";
```

This is a Server Component.
