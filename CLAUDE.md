# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/info site for an ITMO educational and research unit (SUIR). Content and UI copy are in Russian. Next.js 16 + React 19 + TypeScript (strict) + SCSS Modules. Deployed on Vercel from `main` with default Next.js settings.

## Commands

```bash
npm run dev     # dev server on http://localhost:3000
npm run build   # production build: type-check + static generation of every page
npm run start   # serve the production build
npm run lint    # eslint . (flat config in eslint.config.mjs; `next lint` no longer exists in Next 16)
```

There is no test suite. Verify changes with `npm run build` and `npm run lint`. `npx tsc --noEmit` may report duplicate `PagesPageConfig` in `.next/types` vs `.next/dev/types`; that comes from generated files, not source.

## Architecture

- **Pages Router** (`src/pages/`). Every page is static: plain pages are prerendered, and `master/[slug].tsx` and `news/[id].tsx` use `getStaticPaths` with `fallback: false`, so an unknown slug shows `404.tsx`. Non-`.tsx` files such as `*.module.scss` can sit next to pages.
- **Every page wraps its content in `PageLayout`** (`src/shared/ui/PageLayout`). It renders `<Head>` with the title, the sticky `Header` (desktop nav, plus a burger menu at ≤1024px), `<main>` and the `Footer`. Pages only compose sections.
- **Content is hardcoded data**, taken from the live site csr.itmo.ru:
  - `src/widgets/master/programs.ts` (master programs: stats, about, team, reviews) and `src/widgets/news/data.ts` were generated from scraped pages. Edit them directly; they are not regenerated.
  - Other content lives in `data.ts` next to its widget (`bachelor`, `phd`, `science`, `contacts`, `master/data.ts` for admission steps and helpers).
  - Navigation, external URLs (abit.itmo.ru, socials, policy PDFs) and faculty contacts are in `src/shared/config/navigation.ts`.
- **Widgets** (`src/widgets/<name>/`) expose sections through `index.ts`. Section-specific UI goes in `ui/`. News helpers (`getNewsById`, `formatNewsDate`, excerpts) are in `widgets/news/lib`. The home "Достижения" block reuses news items by id.
- **Shared UI** (`src/shared/ui/`): `Section` (container, title, tone background), `PageHero` (`image` or `aside`; `imageVariant="cutout"` for transparent PNGs), `Button` (external links open in a new tab automatically), `PersonCard` (initials fallback when `photo` is empty), `Stats`, `Accordion` (native `<details>`), `Timeline`, `ValueCards`, `BackLink`, `ArrowIcon`. Reuse these before writing new layout code.
- **Images:** photos are local WebP files in `public/images/csr/` (mirrors csr.itmo.ru paths) and render through `next/image` with `fill` + `sizes` inside an aspect-ratio box. New images should be resized (portraits ~640px wide) and converted with `cwebp`. Header/footer logos and partner icons stay as the original SVGs.
- `src/pages/wegotrip/` is a standalone partner-widget page with no `PageLayout`.

## Styling

- Root `styles/` holds the global SCSS. `variables.scss` defines brand colors (`$c-purple`, `$c-lavender`, `$c-ink`…), breakpoints (`$bp-sm` 480, `$bp-md` 768, `$bp-lg` 1024, `$bp-xl` 1280) and `$container-max`. `mixins.scss` `@forward`s the variables and adds `container`, `below($bp)`, `section-padding`, typography (`display-title`, `section-title`, `card-title`, `body-text`), `card`/`card-hover` and `focus-ring`.
- Component styles import one file by relative path, which gives both mixins and variables: `@use "../../../styles/mixins" as *;`.
- Responsive rules: grids use `minmax(0, 1fr)` columns, collapsing through `below($bp-lg)` / `below($bp-md)`, and sizes use `clamp()`. Layouts must not scroll horizontally at any width from 280px up. `PageLayout` uses `overflow-x: clip` (not `hidden`) so the sticky header keeps working.
- Fonts: SF Pro families are registered as `"Regular"`, `"Medium"`, `"Semibold"`, `"Bold"` etc. in `globals.scss`.
- Use `classnames` for conditional classes. Path alias: `@/*` → `./src/*`.
