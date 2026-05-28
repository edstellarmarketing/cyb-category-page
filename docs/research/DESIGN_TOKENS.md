# MediaTek.com Design Tokens

## Colors

| Token | Value | Usage |
|---|---|---|
| `--mtk-orange` | `#FF9800` | Brand primary; CTAs, eyebrow underlines, dividers, progress bars, hover accents |
| `--mtk-coral` | `#EF6B51` | Secondary accent (rare) |
| `--mtk-orange-soft` | `#FF98001A` | Glow/halo backgrounds (e.g. footer halo, news section ambient) |
| `--mtk-black` | `#0C0C0C` | Hero/dark sections background |
| `--mtk-text` | `#000000` | Body text on white |
| `--mtk-white` | `#FFFFFF` | Light bg, dark-section text |
| `--mtk-gray-100` | `#FBFBFB` | Subtle bg variant |
| `--mtk-gray-200` | `#E4E5E6` | Dividers |
| `--mtk-gray-300` | `#D0D0D0` | Card borders |
| `--mtk-gray-400` | `#B3B3B3` | Inactive tab text |
| `--mtk-gray-500` | `#666666` | Muted text |
| `--mtk-gray-700` | `#333333` | Tabber section bg, deep text |

## Typography

**Font family:** Riona Sans (custom, self-hosted .woff)

| Variant | Stack | Source |
|---|---|---|
| Light | `'Riona Sans Light', Helvetica, Arial, sans-serif` | RionaSans-Light.woff |
| ExtraLight | `'Riona Sans Extra Light', Helvetica, Arial, sans-serif` | RionaSans-ExtraLight.woff |
| Regular | `'Riona Sans Regular', Helvetica, Arial, sans-serif` | RionaSans-Regular.woff |
| Italic | `'Riona Sans Italic', Helvetica, Arial, sans-serif` | RionaSans-RegularItalic.woff |
| Medium | `'Riona Sans Medium', Helvetica, Arial, sans-serif` | RionaSans-Medium.woff |
| Bold | `'Riona Sans Bold', Helvetica, Arial, sans-serif` | RionaSans-Bold.woff |
| Black | `'Riona Sans Black', Helvetica, Arial, sans-serif` | RionaSans-Black.woff |

## Type scale (verified from CSS)

| Element | Size | Family | Notes |
|---|---|---|---|
| Hero h1 | 55px | Riona Sans Light | margin-bottom: 34px |
| Section h2 | 47px | Riona Sans Regular | Big section heads |
| Section h2 (tabber) | 47px | Riona Sans Regular | white on dark |
| Section subhead p | 21px | Riona Sans Light | line-height 1.2 |
| Card title h3 | 21–24px | Riona Sans Regular | |
| Card body p | 18–24px | Riona Sans Light | line-height 1.15–1.3 |
| Slider nav title | 17px | Riona Sans Regular | line-height 1.23 |
| Slider nav eyebrow | 13px | Riona Sans Light uppercase | mb 20px, line-height 1.23 |
| Tab labels | 16px+ | Uppercase, Riona Sans Medium |

## Spacing & layout

- **Page max-widths (responsive):** 1594 → 1280 (≤1650) → 1080 (≤1351) → 991 (≤1194) → 850 (≤1044) → 720 (≤924)
- **Card border-radius:** ~20px on showcase cards
- **Tabber section padding:** 45px top/bottom, 45px between header and tab strip
- **Slider nav progress bar:** 4px height, orange (#FF9800)

## Animations
- Arrow icon hover: `arrow-anim 2.5s cubic-bezier(.2,1,.3,1) infinite` (slide right + fade)
- Progress bar: linear fill over slide duration
- Card hover: subtle image scale or color fade

## Header
- 64px tall
- Logo dimensions in HTML: 130x16, 195x24, 260x32, 325x40 (responsive sizes)
