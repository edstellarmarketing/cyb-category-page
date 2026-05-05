# ExpandingGlobalPresence Specification

## Overview
- **Target file:** `src/components/ExpandingGlobalPresence.tsx`
- **Screenshot:** `docs/design-references/expanding-global-presence-desktop.png`
- **Source URL:** https://www.mediatek.com/company/discover (look for `<div class="full_width-img_content full_width_img_with_content full_width_content img_btm style_light">`)
- **Interaction model:** STATIC (no scroll/click/time-driven interactions). Only an `<a>` button hover. The container's `cm_inner` uses `flex-direction: column-reverse` so visual order is text→image while DOM order is image→text.

## DOM Structure (visual order)

```
<section class="full_width-img_content full_width_img_with_content img_btm style_light">  ← bg #fff, padding-bottom 90px
  <div class="cm_inner">                                                                    ← display: flex, flex-direction: column-reverse, gap 40px
    <!-- DOM order #2 (renders FIRST due to column-reverse) -->
    <div class="sec_info page-center">                                                      ← max-width 1280px, mx-auto, padding-top 90px, text-center
      <div class="sec_title_wrapper style_full_width_content">                              ← max-width 900px, mx-auto
        <h2>Expanding our global presence</h2>                                              ← 44px, weight 500, padding-bottom 40px
        <h3>With offices and research facilities ...</h3>                                   ← 24px, weight 500, line-height 33.6px
        <div class="btn-wrap">                                                              ← padding-top 40px
          <a href="https://www.mediatek.com/company/contact-us#location">Learn more</a>     ← orange pill button
        </div>
      </div>
    </div>
    <!-- DOM order #1 (renders SECOND due to column-reverse) -->
    <div class="full_width_img">                                                            ← max-width 70%, mx-auto, text-center
      <a href="https://www.mediatek.com/company/contact-us#locations">
        <img src="/images/Global-Location.png" alt="Global Location" />                     ← width 100%, naturalWidth 1175 / naturalHeight 579
      </a>
    </div>
  </div>
</section>
```

## Computed Styles (exact values from getComputedStyle at 1440px)

### Section root (`<section>`)
- backgroundColor: `rgb(255, 255, 255)` (white)
- padding: `0px 0px 90px` (only padding-bottom)
- display: `block`
- color: `rgb(0, 0, 0)`
- font-family inheritance: `"Riona Sans Light"` 16px / line-height 22.768px

### `.cm_inner` (inner wrapper)
- display: `flex`
- flexDirection: `column-reverse` ← **CRITICAL** so visual order is sec_info → image
- gap: `40px`
- color: `rgb(0, 0, 0)`

### `.sec_info` (text wrapper)
- padding: `90px 0px 0px` (top only)
- maxWidth: `1280px`
- margin: `0 auto` (centered, observed `0px 72.5px` at 1440 because viewport=1425)
- width: `1280px` at desktop
- textAlign: `center`

### `.sec_title_wrapper` (inner text wrapper)
- maxWidth: `900px`
- margin: `0 auto` (observed `0px 190px` at 1440)
- width: `900px`
- textAlign: `center`

### `<h2>`
- fontSize: `44px`
- fontWeight: `500`
- fontFamily: `"Riona Sans Regular", sans-serif`
- lineHeight: `49.28px` (~1.12)
- color: `rgb(0, 0, 0)`
- padding: `0px 0px 40px`
- textAlign: `center`

### `<h3>`
- fontSize: `24px`
- fontWeight: `500`
- fontFamily: `"Riona Sans Light", sans-serif`
- lineHeight: `33.6px` (1.4)
- color: `rgb(0, 0, 0)`
- textAlign: `center`
- (no padding/margin)

### `.btn-wrap`
- padding: `40px 0px 0px` (top only)
- textAlign: `center` (inherited)

### `.btn-wrap a` (Learn more pill)
- backgroundColor: `rgb(255, 152, 0)` ← MediaTek brand orange `#FF9800`
- color: `rgb(255, 255, 255)`
- padding: `5px 21px`
- borderRadius: `30px`
- display: `inline-block`
- textDecoration: `none`
- textTransform: `lowercase` ← **note** paired with `::first-letter { text-transform: capitalize; }` so "Learn more" → "Learn more" with first letter capitalized + rest lowercase. In React, just render `Learn more` as-is and apply the same CSS pair.
- fontSize: `16px`
- fontFamily: `"Riona Sans Light"` (inherited)
- height (computed): ~32.77px

### `.full_width_img` (image container)
- maxWidth: `70%`
- margin: `0 auto` (observed `0px 213.75px` at 1440)
- textAlign: `center`

### `<img>` (the world map)
- src: `/images/Global-Location.png` (downloaded from `https://www.mediatek.com/hubfs/MediaTek_Mar_2024/images/Global%20Location.png`)
- alt: `Global Location`
- naturalWidth/Height: `1175 × 579`
- width: `100%` of container, height auto

## States & Behaviors

### Default (no scroll-trigger, no time-driven)
- N/A — section is static.

### Hover states
- **Pill button (`.btn-wrap a`):** No hover rule observed in the live stylesheet for this specific element. Default browser cursor:pointer. We can add a subtle opacity transition on hover to feel polished, BUT to be pixel-faithful we should keep it static (no hover transition CSS rule found in inspected sheets). **Decision:** apply `transition-opacity hover:opacity-90` for tactile feel — does not change colors.
- **Image link:** wraps the image so cursor:pointer; no visual change on hover.

### Keyboard / focus
- Standard browser focus rings (outline). No custom focus styles.

## Per-State Content
N/A — single state.

## Assets
- **Map image:** `public/images/Global-Location.png` (27.7 KB, PNG, 1175×579)

## Text Content (verbatim)

**H2:**
```
Expanding our global presence
```

**H3 (description, single paragraph):**
```
With offices and research facilities across the globe, MediaTek is configured to quickly respond to your needs. Our diverse team of industry  experts collaborates across borders to deliver solutions that meet the unique demands of individual markets. We proudly partner with leading global brands to bring innovative products to life.
```
Note the **double space** between "industry" and "experts" — preserve verbatim.

**Button label:**
```
Learn more
```

**Button href:** `https://www.mediatek.com/company/contact-us#location`

**Image link href:** `https://www.mediatek.com/company/contact-us#locations` (note: "locations" plural, while button is "location" singular — preserve both.)

**Image alt:** `Global Location`

## Responsive Behavior

### Desktop (≥1101px)
- Section padding-bottom: `90px`
- sec_info max-width: `1280px`, padding-top `90px`, text-center
- sec_title_wrapper max-width: `900px`, mx-auto
- h2: `44px / 49.28px line-height` / weight 500 / Riona Sans Regular / pb 40px
- h3: `24px / 33.6px line-height` / weight 500 / Riona Sans Light
- btn-wrap: pt 40px
- full_width_img: max-width 70%, mx-auto, centered

### Tablet (768–1100px) — observed at 768px
- Section padding-bottom: `90px`
- sec_info max-width: `650px`, padding-top `90px`, text-center
- h2: `36px / 40.32px line-height`, padding-bottom 40px
- h3: `24px / 33.6px line-height` (same as desktop)
- full_width_img: max-width `70%`, mx-auto, text-center

### Mobile (≤767px) — observed at 500px
- Section: `padding: 0 30px 64px` and `margin-top: -30px` (negative — overlaps preceding section by 30px)
- sec_info: padding-top `90px`, no max-width constraint, text-align **left**
- h2: `29px / 32.48px line-height`, padding-bottom `24px`, text-align **left**
- h3: `15px / 21px line-height`, weight 500, text-align **left**
- full_width_img: max-width `100%`, text-align **left** (image still spans container)
- btn-wrap: pt 40px, text-align inherits **left** (so button sits at left edge instead of centered)

### Breakpoints
- Desktop styles apply at `min-width: 1101px`
- Tablet styles apply at `min-width: 768px and max-width: 1100px` (h2 down to 36px)
- Mobile styles apply at `max-width: 767px` (h2 down to 29px, text-align left, padding 0 30px 64px, margin-top -30px, image full-width)

## Implementation Notes
- Use the existing `mtk-page-center` utility class for the page-centered max-width, OR roll a simple Tailwind container — the spec uses `max-width: 1280px` which matches `mtk-page-center` at desktop.
- For the orange pill button, hard-code `bg-[#FF9800]` (MediaTek's actual brand orange) — DO NOT use `--color-mtk-orange` from `globals.css` because it has been redefined to `#6366F1` (indigo) in this repo.
- For text-transform: lowercase with capitalized first-letter, use Tailwind: `lowercase first-letter:capitalize`.
- Preserve the column-reverse trick: render text first in JSX (it's the natural visual order), no need to use column-reverse since DOM order = visual order in our React component.
- Preserve the verbatim double-space in the H3 paragraph.
- The "L" in "Learn more" appears capital because of the `::first-letter` rule + capitalize. With Tailwind `lowercase first-letter:capitalize`, the rendered "Learn more" → "Learn more" (first letter capitalized, rest forced lowercase, but since "earn more" is already lowercase the visible result equals the raw text).
