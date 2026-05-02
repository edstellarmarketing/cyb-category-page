# WelcomeStrip Specification

## Overview
- **Target file:** `src/components/WelcomeStrip.tsx`
- **Interaction model:** static (centered text, possible arrow CTA chevron)
- **Height:** 336px

## Visual
- Solid orange background `#FF9800`
- Centered text block; max width ~1100px
- Subtle right-aligned chevron next to the paragraph (orange-on-orange visible only on focus or as part of inline link)

## Content (verbatim)
- Heading (h2): "Welcome to MediaTek."
- Paragraph: "As a global leader in semiconductor solutions, MediaTek powers the technology that connects and enriches everyday life. From smartphones, smart homes and autos, to transformative technologies like AI and 5G, MediaTek lays the foundation for a smarter and more connected world."
- A trailing chevron `ArrowRightIcon` after the paragraph in white

## Computed styles
- Section: `bg-[#FF9800] py-20 md:py-24 text-white text-center`
- Heading h2: 47px Riona Sans Light, line-height 1.05
- Paragraph: 21px Riona Sans Light, line-height 1.4, max-w-4xl mx-auto, mt-6
- Chevron: 24x24 inline, ml-2 align-middle, white

## Imports
```tsx
import { ArrowRightIcon } from "@/components/icons";
```

This is a Server Component (no interactivity).
