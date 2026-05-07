# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Interaction model:** static + simple form
- **Height:** ~682px

## Visual (verified via screenshot)
- White background with a subtle peach/orange halo on the outside edges (use a `radial-gradient` overlay or inset shadow)
- 4 columns: Products / Technology / Company / Newsletter
- Below columns: orange MediaTek logo (in a parallelogram shape) on the left; legal links (Cookie Statement / Terms of Use / Privacy Policy / Copyright © 2026 MediaTek. All rights reserved) right-aligned

## Column data
```ts
const PRODUCTS: { label: string; href: string }[] = [
  { label: "Smartphones",            href: "#" },
  { label: "Smart Home",             href: "#" },
  { label: "Networking and Connectivity", href: "#" },
  { label: "Internet of Things",     href: "#" },
  { label: "Chromebooks & Tablets",  href: "#" },
  { label: "Automotive",             href: "#" },
  { label: "ASIC",                    href: "#" },
];
const TECHNOLOGY: { label: string; href: string }[] = [
  { label: "5G",                       href: "#" },
  { label: "Artificial Intelligence",  href: "#" },
  { label: "Wi-Fi",                    href: "#" },
  { label: "MediaTek HyperEngine",     href: "#" },
  { label: "Display for Smartphones", href: "#" },
  { label: "Camera for Smartphones",  href: "#" },
  { label: "MediaTek CorePilot",      href: "#" },
];
const COMPANY: { label: string; href: string }[] = [
  { label: "Discover",                    href: "#" },
  { label: "About MediaTek",              href: "#" },
  { label: "Contact Us",                  href: "#" },
  { label: "Report Security Vulnerability", href: "#" },
  { label: "Careers",                      href: "#" },
];
```

## Newsletter form (column 4)
- "Join our newsletter" heading h3 (24px Riona Sans Regular, mb-3)
- Card body styled in light grey rounded-xl (`bg-white border border-mtk-gray-200 rounded-xl p-6`)
  - Floating-label input: "Enter your name*" → placeholder "Full Name"
  - Floating-label input: "Enter your E-mail Address*" → placeholder "E-mail Address"
  - Checkbox: "I agree with the MediaTek Privacy Policy*"
  - Subscribe button: bg `#FF9800` text-white rounded-full px-6 py-3
- Inputs have an outlined-floating-label pattern (label sits in the border above the input)

## Bottom bar
- Logo: orange parallelogram with white "MEDIATEK" text. Use the SVG at `/images/mediatek-logo.svg`
- Legal links: Cookie Statement | Terms of Use | Privacy Policy | Copyright © 2026 MediaTek. All rights reserved
- Layout: logo left, legal links right (flex justify-between)

## Social icons (above newsletter or alongside Company column)
- Facebook, LinkedIn, Instagram, YouTube, Threads — 24x24 black, gap 15px, in a row

## Computed styles
- Section: `bg-white pt-16 pb-10`
- Heading h3: 24px Riona Sans Regular black, mb-4
- Link list: gap 12px between items; font 16px Riona Sans Light; hover color `#FF9800`
- Edge halo: a `box-shadow inset 0 0 80px rgba(255,152,0,0.18)` on the outermost wrapper, OR use a radial gradient bg

## Imports
```tsx
import Image from "next/image";
import { FacebookIcon, LinkedInIcon, InstagramIcon, YouTubeIcon, ThreadsIcon } from "@/components/icons";
```

This component can be a Server Component (the form is non-functional / decorative for the clone — submit button can have `e.preventDefault()` via inline onSubmit but we'll keep it as a form that does nothing).

Optionally make a small `<NewsletterForm>` Client Component for the form interaction.
