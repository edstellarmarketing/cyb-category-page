# MediaTek.com Behavior Bible

Captured at desktop 1440x900 via Chrome MCP.

## Global / page-level
- **Scroll-to-top button**: orange circle with up-arrow icon, fixed bottom-right, visible after scrolling. Click smooth-scrolls to top.
- **Header**: position: static (NOT sticky on this site — verified via getComputedStyle).
- **No smooth-scroll library** (no `.lenis`, no Locomotive). Default browser scroll.
- **No scroll-snap** anywhere.

## Header
- Logo (left), main nav (centered), search icon + language globe (right)
- Hover on a nav item triggers a megamenu / dropdown (each nav item has children)
- Search icon click: opens search overlay
- Globe click: opens language switcher dropdown

## Hero Slider (`.banner-container-wrapper`)
- Swiper.js powered, autoplay
- 8 slides with the following content (eyebrow → title → subtitle → CTA):
  1. MediaTek. → Quarterly Investor Conference → Join us on April 30th at 03:00 PM +8 UTC → Learn More
  2. IoT → MediaTek Genio Pro → Extreme Edge Intelligence. Built for Scale.
  3. FLAGSHIP → MediaTek Dimensity 9500s → The Power to Outlast
  4. MediaTek. → This chip changes everything. → Powering technology that transforms life.
  5. Chromebooks → MediaTek Kompanio Ultra → The Ultimate Performance Processor for Chromebook Productivity, Creativity and AI
  6. PREMIUM → MediaTek Dimensity 8500 → Powerful Performance for Ultra-Fast Play
  7. Inside Tek → Innovation. Influence. → What's Next in Tech.
  8. GENERATIVE AI → Leading the next wave of edge AI → Faster, smarter generative AI capabilities in wide-ranging products
- Below the hero (overlapping the bottom edge with `position:absolute`), an 8-item navigation strip with progress bar (4px tall, orange #FF9800)
- Each nav item has eyebrow (uppercase ~13px) and title (~17px, white)
- Active item shows orange progress bar that fills over slide duration
- Click on nav thumb → jumps to that slide

## Welcome strip (orange band)
- Centered text on solid orange (#FF9800) bg
- "Welcome to MediaTek." + subtext + arrow icon CTA
- Padding ~80px top/bottom, ~336px tall

## Products/Technology tabber (`This chip changes everything.`)
- Dark background (#0C0C0C / near-black)
- Heading 47px, subhead 21px in white
- Two tabs: `PRODUCTS | TECHNOLOGY` (separator is orange vertical bar)
- Active tab has white text; inactive has gray (#B3B3B3)
- Below tabs: a large white card on the left (white bg, rounded) with category title + description, plus a dark image area on the right
- Below the card: a horizontal strip of 7 (PRODUCTS) or 7 (TECHNOLOGY) sub-categories with hover indicator
- PRODUCTS tab strip: SMARTPHONES, SMART HOME, NETWORKING AND CONNECTIVITY, INTERNET OF THINGS, TABLETS AND CHROMEBOOK, MEDIATEK DIMENSITY AUTO, CUSTOM DATA CENTER
- Click a sub-category → updates the big card content
- Tab click → fade transition between PRODUCTS / TECHNOLOGY content

## Corporate News slider
- Heading "It all starts here...with a chip." with eyebrow "CORPORATE NEWS"
- Subhead "Driving innovation, connecting the world."
- Square card tiles with progress bar pagination
- Cards include: One MediaTek brand evolution, LexisNexis, ISSCC Award, Interbrand 2025, Best company to work for, NVIDIA AI Factory, ESA NTN, TSMC 3nm, NVFusion (~9 cards)

## Business & Industry News cards
- Heading "Where innovation begins" with eyebrow "BUSINESS & INDUSTRY NEWS"
- Light pinkish-cream background (looks like ~#fff with slight orange overlay near edges)
- 4 cards visible at desktop with right arrow to navigate
- Card structure: image (top) → category eyebrow (orange) → title → description → arrow icon
- Cards: NVIDIA/AI partnership, NPUs/NeuroPilot/LiteRT, Food & Beverage, 2025's Best Devices

## Product & Technology News cards
- Same card pattern as Business News
- Heading "It all starts with a chip" / eyebrow "PRODUCT & TECHNOLOGY NEWS"
- Subhead "MediaTek creates extraordinary products and innovative technologies that spark inspiration and empower everyone."

## Customers and Partners
- Heading "Powered by MediaTek" / eyebrow "CUSTOMERS AND PARTNERS"
- Description "Powering more than 2 billion devices every year..."
- Two large image-cards or showcase tiles (PoweredByHomepage_Mediatek + likely another)

## More on MediaTek (dark bg)
- Dark gradient/black background
- Heading "Incredible starts here" / eyebrow "MORE ON MEDIATEK"
- Subhead "More ways to connect with MediaTek."
- 4 image cards (rounded corners): What's Next in Tech, Connections that Matter, Devices powered by MediaTek, MediaTek Podcast Central
- Each card has orange "Learn more" button below

## Footer (`footer.cm_foot_v5`)
- White bg with subtle orange shadow halo
- 4-column layout: Products / Technology / Company / Newsletter
- Newsletter has Name, Email inputs, Privacy checkbox, Subscribe button
- Below: small logo + Cookie Statement / Terms / Privacy / Copyright
- Social icons: Facebook, LinkedIn, Instagram, YouTube, Threads

## Hover states (general)
- Links: color shift, often add orange (#FF9800) accent or shift from gray to white
- Card images: subtle scale on hover (1.02-1.05) with overflow hidden
- Arrow icons: animation arrow-anim 2.5s cubic-bezier(.2,1,.3,1) infinite — arrow slides right and fades
