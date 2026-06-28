# CLAUDE.md — shift-hackathon.com (Astro app)

The active site: hand-written Astro + React. The old Framer-export approach (`Layout.tsx`,
`lib/framer.ts`, `src/framer/`, per-page `.tsx` routes, `<Page>Body.tsx` wrappers) has been
fully removed.

## Development

```bash
npm run dev          # astro dev — http://localhost:4324 (port set in astro.config.mjs)
npm run build        # astro build → dist/
npm run typecheck    # astro check
npm run lint         # eslint src        (lint:fix to autofix)
npm run format       # prettier --write src   (format:check to verify)
npm run check        # lint + typecheck + build — pre-push gate
npm run test:visual  # Playwright visual tests (tests/visual.spec.ts)
```

## Architecture

```
src/
├── layouts/
│   └── Layout.astro       # shared <head> (GTM, gtag, og/twitter); renders <Nav> / <slot> / <Footer>
│                          # props: title, description (defaults to site.ts), canonical, ogImage
├── pages/                 # one .astro per route (Astro file-based routing)
│   ├── index.astro        # imports section components, renders them as client:load islands in <main>
│   └── (concept, agenda, intervenants, 404 — same pattern)
├── components/
│   ├── Nav.tsx Footer.tsx Reveal.tsx ScrollProgress.tsx   # site-wide components
│   ├── shared/            # cross-page sections: CTASection.tsx, Faq.tsx
│   └── <page>/            # per-page section components: index/ concept/ agenda/ intervenants/
├── data/                  # all copy/content lives here (no logic, no hardcoding in components)
│   ├── edition.ts         # core facts: year, nextYear, dates, ticket URLs, agenda days
│   ├── edition_*.ts       # per-section edition content: complices, partners, pricing, schedule, speakers
│   ├── site.ts            # DEFAULT_META_DESCRIPTION
│   ├── team.ts            # ORGA_TEAM (organising team)
│   ├── testimonials.ts faq.ts videos.ts   # TESTIMONIALS, FAQ_ITEMS, video embeds
└── styles/                # hand-written CSS (see Styling)
public/assets/images/      # organized by type (named files, not Framer hashes):
├── hero/                  # brand logo + per-page hero visuals
├── speakers/ team/        # profile pictures (filename = person's real name)
├── testimonials/          # testimonial profile pictures
├── sponsors/              # partner & sponsor logos (logo-<brand>.png)
├── features/ projects/ gallery/   # concept illustrations, project examples, venue photos
└── og-image.png, cover-2026.jpg   # site-wide meta images (root)
```

### Key patterns

- Pages are `.astro` only (file-based routing). Each page imports its section components and
  renders them inside `<main>` as `client:load` islands — there is no wrapper `Body` component.
- `Layout.astro` owns the shared `<head>` and renders `<Nav client:load />` before the page
  `<slot />` and `<Footer client:load />` after. **Do not add Nav/Footer per page** — they come
  only from the layout.
- Section components are real React (`.tsx`) with inline styles and `motion`/`Reveal` animations.
  They need a client directive to hydrate (`client:load`); without it `Reveal`'s
  `initial={{ opacity: 0 }}` never animates and the content stays invisible.
- A section reused on more than one page goes in `components/shared/` (e.g. `Faq`, `CTASection`);
  page-specific sections live in `components/<page>/`.
- Copy/content lives in `src/data/` modules, never inline in components. Years derive from
  `EDITION.year` / `EDITION.nextYear`; the default meta description from `site.ts`.

## Styling

Plain hand-written CSS — **no CSS framework**. Tailwind was removed (it was wired in but
no utility classes were ever used). Do not reintroduce it; add styles to the appropriate
`src/styles/*.css` file using the existing BEM convention (e.g. `hero__container`, `cta-primary`).

CSS lives in `src/styles/`, all imported via `layouts/Layout.astro` (`global.css` chains the rest):

- `global.css`   — `@import`s the others + a **basic reset** (replaces the former Tailwind Preflight)
- `tokens.css`   — CSS variables (brand colors, fonts) + reusable classes (`.container`, `.section-title`, `.cta-primary`)
- `fonts.css`    — Google Fonts / `@font-face`
- `hero.css` / `intro.css` / `sections.css` — per-section layout & styling

Many components also use inline `style={{}}` objects (`Nav.tsx`, `Footer.tsx`, `ScrollProgress.tsx`,
and most section components) — the two styling approaches coexist.

## Linting & Formatting

ESLint (`eslint.config.js`) lints `src`; Prettier formats `src` (no config file — defaults +
`prettier-plugin-astro`).

## Testing

Playwright visual regression only: spec in `tests/visual.spec.ts`, config in `playwright.config.ts`.
Run with `npm run test:visual`.

## Dev gotchas

- `astro.config.mjs` sets `vite.resolve.dedupe: ['react','react-dom']` + `optimizeDeps.include` for
  React/JSX runtimes and `motion`. Required: without it, `motion` pulls a second React copy →
  "Invalid hook call / more than one copy of React".
- After moving/renaming many files while `npm run dev` is running, the Vite dep cache desyncs
  (symptoms: `Outdated Optimize Dep`, `jsxDEV is not a function`). Fix: stop dev, `rm -rf
  node_modules/.vite`, restart, then hard-refresh the browser.

## Deployment

Vercel with `cleanUrls: true` and `trailingSlash: false`. Deployment root = `dist/` after build.
`@astrojs/sitemap` emits `sitemap-index.xml` at build (relies on `site:` in `astro.config.mjs`).

## Tracking

GTM (`GTM-NQ2DKKPD`) and gtag (`G-377KFTGYHV`) — both in `Layout.astro`.
