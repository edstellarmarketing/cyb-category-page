# MediaTek.com Home Page Topology

Total scroll height: **6971px** at desktop 1440x900.
Page max-width responsive: `1594 → 1280 (≤1650) → 1080 (≤1351) → 991 (≤1194) → 850 (≤1044) → 720 (≤924)`.

## Section Stack (top → bottom)

| # | Section | DOM | Top | Height | Component name |
|---|---|---|---|---|---|
| 1 | Header (logo + nav + search/lang) | `header.header` | 0 | 64 | `Header.tsx` |
| 2 | Hero slider (8 slides) | `.banner-container-wrapper` | 64 | 680 | `HeroSlider.tsx` |
| 3 | Welcome strip (orange band) | `.home_top_sec` | 744 | 336 | `WelcomeStrip.tsx` |
| 4 | Products/Technology tabber | middle row 1 | 1080 | 860 | `ChipChangesTabber.tsx` |
| 5 | Corporate News slider | middle row 2 | 1940 | 866 | `CorporateNewsSlider.tsx` |
| 6 | Business & Industry News cards | bottom row 1 | 2805 | 870 | `BusinessNewsCards.tsx` |
| 7 | Product & Technology News cards | bottom row 2 | 3675 | 861 | `ProductNewsCards.tsx` |
| 8 | Customers and Partners | bottom row 3 | 4530 | 939 | `CustomersPartners.tsx` |
| 9 | More on MediaTek | bottom row 4 | 5469 | 820 | `MoreOnMediaTek.tsx` |
| 10 | Footer (links + newsletter) | `footer.cm_foot_v5` | 6289 | 682 | `Footer.tsx` |

## Tech stack identified
- jQuery, Swiper.js (carousels), Magnific Popup, Font Awesome 6, slick (legacy)
- HubSpot CMS-rendered DOM (classes like `dnd_area*`, `row-fluid`, `widget-span`)
- No Lenis/Locomotive/scroll-snap. No Next/Nuxt/Angular.

## Interaction models

| Section | Model | Notes |
|---|---|---|
| Header | static | Lang dropdown, search popup |
| Hero slider | time-driven (Swiper autoplay) + click pagination | 8 slides; bottom nav with 8 thumbs each containing eyebrow + title; thumb has progress bar |
| Welcome strip | static | Orange bg band with centered copy + arrow CTA |
| Tabber | click-driven | Two tabs: PRODUCTS / TECHNOLOGY; clicking switches the giant card AND the bottom category strip |
| Corporate News | click + autoplay carousel | Slider of square card tiles |
| Business News | click carousel | 4 visible cards, right arrow to advance |
| Product News | click carousel | 4 visible cards, right arrow to advance |
| Customers | static or carousel | Two large promo tiles |
| More on MediaTek | static grid | 4 image cards with Learn more buttons |
| Footer | static | Newsletter form |

## Page layout
- Standard vertical flow, no scroll snap, no sticky except scroll-to-top button (bottom right, appears after scroll)
- `position: fixed` scroll-to-top arrow visible bottom-right on all sections
