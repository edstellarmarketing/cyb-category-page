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

@docs/research/INSPECTION_GUIDE.md
