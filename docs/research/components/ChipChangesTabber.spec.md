# ChipChangesTabber Specification

## Overview
- **Target file:** `src/components/ChipChangesTabber.tsx`
- **Interaction model:** click-driven tabs (PRODUCTS / TECHNOLOGY) with click-driven sub-categories
- **Height:** ~860px

## Layout
```
<section class="bg-[#0c0c0c] text-white py-[80px]">
  <div class="mtk-page-center">
    <h2>This chip changes everything.</h2>
    <p>Explore MediaTek's broad portfolio of products and technology.</p>
    <Tab nav: PRODUCTS | TECHNOLOGY />
    <Big card: white left half + dark image right half, rounded-2xl> ... </Big card>
    <Sub-category strip (7 items, equal spacing) />
  </div>
</section>
```

## Tabs data
```ts
const TABS: TabberTab[] = [
  {
    id: "products",
    label: "PRODUCTS",
    categories: [
      { label: "SMARTPHONES",            cardTitle: "PRODUCTS",            cardDescription: "Explore cutting-edge technology in smartphones, smart homes, and seamless connectivity. From IoT to custom ASIC and automotive tech, we enhance your digital life.", image: "/images/Product_homepage.jpg",  imageAlt: "MediaTek smart-home and audio products", href: "#" },
      { label: "SMART HOME",              cardTitle: "Smart Home",          cardDescription: "Connected experiences for the modern home, from smart speakers to streaming.", image: "/images/smart-home.jpg",          imageAlt: "Smart home devices",        href: "#" },
      { label: "NETWORKING AND CONNECTIVITY", cardTitle: "Networking & Connectivity", cardDescription: "Wi-Fi 7, 5G modems and broadband infrastructure that keep the world connected.", image: "/images/connectivity.jpg",     imageAlt: "Connectivity",              href: "#" },
      { label: "INTERNET OF THINGS",      cardTitle: "Internet of Things",  cardDescription: "Genio platforms turn smart ideas into scalable IoT products.", image: "/images/IoT_homepage.jpg",          imageAlt: "MediaTek Genio platforms",  href: "#" },
      { label: "TABLETS AND CHROMEBOOK",  cardTitle: "Tablets & Chromebooks", cardDescription: "Kompanio chips deliver the performance and battery life modern users expect.", image: "/images/hromebook.jpg",         imageAlt: "Chromebooks",                href: "#" },
      { label: "MEDIATEK DIMENSITY AUTO", cardTitle: "Dimensity Auto",      cardDescription: "Driving the future of in-vehicle experiences with multimodal Gen-AI cockpit platforms.", image: "/images/Auto.jpg",            imageAlt: "Automotive cockpit",         href: "#" },
      { label: "CUSTOM DATA CENTER",      cardTitle: "Custom Data Center",  cardDescription: "Custom ASIC silicon engineered for the AI factory and the cloud.", image: "/images/ASIC.jpg",                  imageAlt: "Data center",               href: "#" },
    ]
  },
  {
    id: "technology",
    label: "TECHNOLOGY",
    categories: [
      { label: "5G",                  cardTitle: "5G",                cardDescription: "Cutting-edge 5G modems power the next generation of connected devices.", image: "/images/Technology_5Ghome_card.png",  imageAlt: "5G", href: "#" },
      { label: "ARTIFICIAL INTELLIGENCE", cardTitle: "Artificial Intelligence", cardDescription: "On-device AI through NPUs and NeuroPilot scales innovation.", image: "/images/AI-1.jpg",             imageAlt: "AI",  href: "#" },
      { label: "WI-FI",               cardTitle: "Wi-Fi",             cardDescription: "Wi-Fi 7 silicon delivering deterministic performance for the AI era.", image: "/images/Wifi.jpg",                  imageAlt: "Wi-Fi",  href: "#" },
      { label: "DISPLAY",             cardTitle: "Display",           cardDescription: "Brilliant displays from mobile to large-format TV experiences.", image: "/images/Display-card.jpg",       imageAlt: "Display", href: "#" },
      { label: "CAMERA",              cardTitle: "Camera",            cardDescription: "Imaging ISPs that capture every moment in stunning detail.", image: "/images/Camera-card.jpg",          imageAlt: "Camera", href: "#" },
      { label: "HYPERENGINE",         cardTitle: "HyperEngine",       cardDescription: "Optimization technology unlocking peak gaming performance.", image: "/images/hyperengine-card.jpg",     imageAlt: "HyperEngine", href: "#" },
      { label: "WHITE PAPER",         cardTitle: "White Paper",       cardDescription: "Discover what it takes to design an AI superchip.", image: "/images/White-Paper_card.png",         imageAlt: "White paper", href: "#" },
    ]
  }
];
```

## Computed styles
- Section background: `#0c0c0c`
- Heading h2: 47px Riona Sans Light, white, mb-2.5
- Paragraph: 21px Riona Sans Light, white, mb-12
- Tab nav: flex gap-5; padding-bottom 22px
- Tab: text-[#B3B3B3] uppercase tracking-wider; active: text-white. After each tab a 2px wide vertical orange bar with right offset -11px
- Big card: bg-white text-black rounded-2xl; left padding 50px y, content vertically centered
- Card title h3: ~36px Riona Sans Regular, with orange left border 4px wide
- Card description: 19px Riona Sans Light, max-w-md
- Card image (right): 50% width, dark gradient bg, object-cover
- Sub-category strip: 7 columns equal width; each column has 1px top orange border, label uppercase 14px, gap 32px above strip, padding-top 20px

## Behaviors
- Tab click: instantly switch to first sub-category of that tab; smooth fade transition (200ms opacity)
- Sub-category click: update card title/description/image; orange thick top-border highlights the active sub-category
- Default active sub-category: first in PRODUCTS tab

## Imports
```tsx
"use client";
import Image from "next/image";
import { useState } from "react";
import type { TabberTab } from "@/types/content";
```
