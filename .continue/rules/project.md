<!-- AUTO-GENERATED from AGENTS.md — do not edit directly.
     Run `bash scripts/sync-agent-rules.sh` to regenerate. -->

---
description: Project conventions for AI Website Clone Template
alwaysApply: true
---
<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Website Reverse-Engineer Template

## What This Is
A reusable template for reverse-engineering any website into a clean, modern Next.js codebase using AI coding agents. The Next.js + shadcn/ui + Tailwind v4 base is pre-scaffolded — just run `/clone-website <url1> [<url2> ...]`.

## Tech Stack
- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict)
- **UI:** shadcn/ui (Radix primitives, Tailwind CSS v4, `cn()` utility)
- **Icons:** Lucide React (default — will be replaced/supplemented by extracted SVGs)
- **Styling:** Tailwind CSS v4 with oklch design tokens
- **Deployment:** Vercel

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint check
- `npm run typecheck` — TypeScript check
- `npm run check` — Run lint + typecheck + build

## Browser Inspection Tooling
Pick the tool by workflow, not by habit:

- **Target-site inspection, asset capture, `/clone-website` runs, multi-page/multi-breakpoint audits** → `agent-browser` (Rust CLI, invoke via Bash). Reasons: semantic `@e1`/`@e2` refs, snapshot format designed for LLMs, output can be written to disk and selectively `Read`/`Grep`'d to save context, batch + multi-tab, network interception, React introspection of the target.
- **Iterating on the local dev server — editing pages, verifying changes, debugging HMR/console errors, quick responsive checks** → Playwright MCP tools (`mcp__playwright__browser_*`). Reasons: results land inline, `browser_console_messages` surfaces Next.js HMR / React hydration errors immediately, tight edit→check→fix feedback loop with no Bash roundtrip.
- **Visual regression of the local clone against `docs/design-references/`** → `agent-browser diff`.
- **Mobile Safari / iOS Simulator testing** → `agent-browser` (only option).

Default when unsure: ask. Do not silently pick whichever tool was used last.

## Code Style
- TypeScript strict mode, no `any`
- Named exports, PascalCase components, camelCase utils
- Tailwind utility classes, no inline styles
- 2-space indentation
- Responsive: mobile-first

## Design Principles
- **Pixel-perfect emulation** — match the target's spacing, colors, typography exactly
- **No personal aesthetic changes during emulation phase** — match 1:1 first, customize later
- **Real content** — use actual text and assets from the target site, not placeholders
- **Beauty-first** — every pixel matters

## Content Style (Category Pages and beyond)

> **Scope (set 2026-05-28):** The rules below apply to the **Android category page and all future
> category pages**. Already-completed category pages (AI, Cybersecurity, Leadership, and any other
> page approved before 2026-05-28) are **grandfathered** — do NOT retrofit them. If you spot a
> heading-case or S1-counts violation on a completed page, ignore it unless the user explicitly
> re-opens that page for rework.

- **All H1, H2, H3 headings in Title Case.** Capitalise major words; keep articles, conjunctions and short prepositions (a, an, the, and, but, or, for, nor, of, in, on, at, to, by, with, vs) lowercase except as the first word. Hyphenated compounds capitalise both parts: `Instructor-Led`, `Industry-Aligned`, `Enterprise-Grade`. Sentence case is reserved for descriptions, paragraphs, eyebrows, stat-card body and other non-heading text. **Carve-out:** the LOCKED program-card delivery field stays sentence-case as written in the build-flow LOCKED spec — `Instructor-led (On-site/Virtual)` — because it is a small UI label, not a semantic H1/H2/H3. Other small UI labels (form-field placeholders, helper text) follow the same carve-out logic when they are not heading-level. See `docs/CATEGORY_PAGE_BUILD_FLOW_V2.md` (Stages 2 & 3) for the full Global rules list applied to category pages.
- **HeroSlider Slide 1 description must contain no numeric counts.** No program counts, domain counts, country counts, trainer counts, percentages, currency figures, or any other numbers. Slide 1 is the strategic, above-the-fold value prop and must stay durable as catalog scope shifts. Counts belong in Slides 2–4, the WelcomeStrip stat cards, the WhyEdstellar pillars, the catalog/programs heading, and the FAQ — never in the Slide 1 description.
- **ProductNewsCards (Section 07 — Featured) heading is LOCKED to the pattern `Trending [Category Name] Training Programs`.** Examples: `Trending Android Training Programs`, `Trending AI Training Programs`, `Trending Cybersecurity Training Programs`, `Trending Leadership Training Programs`. Category name is the primary single-noun label of the page (use the brand/page label, not the expanded scope) and is rendered in Title Case alongside the rest of the heading. No tension headlines, no "Industry-Aligned", no "Trusted by", no rotating value-prop copy. The companion description below the heading remains free-form (still bound by the other content rules).

## Project Structure
```
src/
  app/              # Next.js routes
  components/       # React components
    ui/             # shadcn/ui primitives
    icons.tsx       # Extracted SVG icons as React components
  lib/
    utils.ts        # cn() utility (shadcn)
  types/            # TypeScript interfaces
  hooks/            # Custom React hooks
public/
  images/           # Downloaded images from target site
  videos/           # Downloaded videos from target site
  seo/              # Favicons, OG images, webmanifest
docs/
  research/         # Inspection output (design tokens, components, layout)
  design-references/ # Screenshots and visual references
scripts/            # Asset download scripts
```

## MOST IMPORTANT NOTES
- When launching Claude Code agent teams, ALWAYS have each teammate work in their own worktree branch and merge everyone's work at the end, resolving any merge conflicts smartly since you are basically serving the orchestrator role and have full context to our goals, work given, work achieved, and desired outcomes.
- After editing `AGENTS.md`, run `bash scripts/sync-agent-rules.sh` to regenerate platform-specific instruction files.
- After editing `.claude/skills/clone-website/SKILL.md`, run `node scripts/sync-skills.mjs` to regenerate the skill for all platforms.

# Website Inspection Guide

## How to Reverse-Engineer Any Website

This guide outlines what to capture when inspecting a target website via Chrome MCP or browser DevTools.

## Phase 1: Visual Audit

### Screenshots to Capture
- [ ] Every distinct page — desktop, tablet, mobile
- [ ] Dark mode variants (if applicable)
- [ ] Light mode variants (if applicable)
- [ ] Key interaction states (hover, active, open menus, modals)
- [ ] Loading/skeleton states
- [ ] Empty states
- [ ] Error states

### Design Tokens to Extract
- [ ] **Colors** — background, text (primary/secondary/muted), accent, border, hover, error, success, warning
- [ ] **Typography** — font family, sizes (h1-h6, body, caption, label), weights, line heights, letter spacing
- [ ] **Spacing** — padding/margin patterns (look for a scale: 4px, 8px, 12px, 16px, 24px, 32px, etc.)
- [ ] **Border radius** — buttons, cards, avatars, inputs
- [ ] **Shadows/elevation** — card shadows, dropdown shadows, modal overlay
- [ ] **Breakpoints** — when does the layout shift? (inspect with DevTools responsive mode)
- [ ] **Icons** — which icon library? custom SVGs? sizes?
- [ ] **Avatars** — sizes, shapes, fallback behavior
- [ ] **Buttons** — all variants (primary, secondary, ghost, icon-only, danger)
- [ ] **Inputs** — text fields, textareas, selects, checkboxes, toggles

## Phase 2: Component Inventory

For each distinct UI component, document:
1. **Name** — what would you call this component?
2. **Structure** — what HTML elements / child components does it contain?
3. **Variants** — does it have different sizes, colors, or states?
4. **States** — default, hover, active, disabled, loading, error, empty
5. **Responsive behavior** — how does it change at different breakpoints?
6. **Interactions** — click, hover, focus, keyboard navigation
7. **Animations** — transitions, entrance/exit animations, micro-interactions

### Common Components to Look For
- Navigation (top bar, sidebar, bottom bar)
- Cards / list items
- Buttons and links
- Forms and inputs
- Modals and dialogs
- Dropdowns and menus
- Tabs and segmented controls
- Avatars and user badges
- Loading skeletons
- Toast notifications
- Tooltips and popovers

## Phase 3: Layout Architecture

- [ ] **Grid system** — CSS Grid? Flexbox? Fixed widths?
- [ ] **Column layout** — how many columns at each breakpoint?
- [ ] **Max-width** — main content area max-width
- [ ] **Sticky elements** — header, sidebar, floating buttons
- [ ] **Z-index layers** — navigation, modals, tooltips, overlays
- [ ] **Scroll behavior** — infinite scroll, pagination, virtual scrolling

## Phase 4: Technical Stack Analysis

- [ ] **Framework** — React? Vue? Angular? Check `__NEXT_DATA__`, `__NUXT__`, `ng-version`
- [ ] **CSS approach** — Tailwind (utility classes), CSS Modules, Styled Components, Emotion, vanilla CSS
- [ ] **State management** — Redux (check DevTools), React Query, Zustand, Pinia
- [ ] **API patterns** — REST, GraphQL (check network tab for `/graphql` requests)
- [ ] **Font loading** — Google Fonts, self-hosted, system fonts
- [ ] **Image strategy** — CDN, lazy loading, srcset, WebP/AVIF
- [ ] **Animation library** — Framer Motion, GSAP, CSS transitions only

## Phase 5: Documentation Output

After inspection, create these files in `docs/research/`:
1. `DESIGN_TOKENS.md` — All extracted colors, typography, spacing
2. `COMPONENT_INVENTORY.md` — Every component with structure notes
3. `LAYOUT_ARCHITECTURE.md` — Page layouts, grid system, responsive behavior
4. `INTERACTION_PATTERNS.md` — Animations, transitions, hover states
5. `TECH_STACK_ANALYSIS.md` — What the site uses and our chosen equivalents
