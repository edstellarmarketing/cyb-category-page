# Header Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Interaction model:** static (no scroll behaviors); hover dropdowns on nav items, click-to-open search overlay and language switcher
- **Height:** 64px, `position: static` (verified). Background: white.

## DOM Structure
```
<header class="header bg-white border-b border-mtk-gray-200 sticky top-0 z-40">
  <div class="mtk-page-center flex items-center justify-between h-16">
    <Link href="/"> <Logo /> </Link>
    <nav> Products | Technology | Investors | Company | Newsroom | Video | Blog </nav>
    <div> <SearchIcon /> <GlobeIcon /> </div>
  </div>
</header>
```

## Computed Styles
- Logo: PNG image `/images/MediaTek-Logo.png` at width=130 height=16. Use `<Image>` from `next/image`. Logo color is mediatek orange.
- Nav links: 16px font-size, `Riona Sans Regular`, color `#000000`, hover color `#FF9800`. Gap between items: 24px. text-transform: none (capitalized labels).
- Right cluster: search and globe icons, 24x24, color `#000000`. Gap 16px between them.

## Interaction
- On hover of Products / Technology / Investors / Company / Newsroom / Video / Blog → display a megamenu dropdown panel positioned below the header.
- Search icon click → open search popup (use a simple inline expandable input or modal — we'll do an inline dropdown).
- Globe icon click → toggle a language switcher dropdown listing common languages.
- The clone may simplify dropdowns to a hover style with placeholder content, since each is a complex menu in production.

## Nav data
Use this data source — props or local const:
```ts
export const NAV: NavItem[] = [
  { label: "Products", href: "#products", children: [{label:"Smartphones",href:"#"},{label:"Smart Home",href:"#"},{label:"Networking and Connectivity",href:"#"},{label:"Internet of Things",href:"#"},{label:"Chromebooks & Tablets",href:"#"},{label:"Automotive",href:"#"},{label:"ASIC",href:"#"}] },
  { label: "Technology", href: "#technology", children: [{label:"5G",href:"#"},{label:"Artificial Intelligence",href:"#"},{label:"Wi-Fi",href:"#"},{label:"MediaTek HyperEngine",href:"#"},{label:"Display for Smartphones",href:"#"},{label:"Camera for Smartphones",href:"#"},{label:"MediaTek CorePilot",href:"#"}] },
  { label: "Investors", href: "#investors" },
  { label: "Company", href: "#company", children: [{label:"Discover",href:"#"},{label:"About MediaTek",href:"#"},{label:"Contact Us",href:"#"},{label:"Report Security Vulnerability",href:"#"},{label:"Careers",href:"#"}] },
  { label: "Newsroom", href: "#newsroom" },
  { label: "Video", href: "#video" },
  { label: "Blog", href: "#blog" },
];
```

## Responsive
- Desktop (≥1024): full nav visible
- Tablet (≥768): condensed nav
- Mobile (<768): hamburger menu replaces nav; clicking opens slide-over drawer with all nav items expanded

## Imports
```tsx
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SearchIcon, GlobeIcon, MenuIcon } from "@/components/icons";
import type { NavItem } from "@/types/content";
```

The component should be a client component (`"use client";`).
