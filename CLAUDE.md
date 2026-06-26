# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development

Don't use worktrees.

### Astro app (active)

```bash
cd shift-hackathon.com
ASTRO_TELEMETRY_DISABLED=1 npm run dev     # http://localhost:4321
ASTRO_TELEMETRY_DISABLED=1 npm run build   # outputs to dist/
npm run lint                               # ESLint
npm run format                             # Prettier
```

### Legacy (reference only)

```bash
cd legacy
docker run -it --rm -p 80:80 --name nginx -v `pwd`:/usr/share/nginx/html nginx
```

## Architecture

```
legacy/                        # Framer export — reference only, do not hand-edit
beta/                          # previous attempt - please ignore
shift-hackathon.com/           # Astro app (active)
├── src/
│   ├── layouts/Layout.tsx     # shared <head>: GTM, gtag, Hotjar, font-css, og/twitter props
│   │                          # accepts children (ReactNode) for page body
│   ├── lib/framer.ts          # helpers: extractCanonical, extractBreakpointCss, extractSsrCss
│   ├── pages/                 # routing: one .astro + one .tsx per route
│   │   ├── index.astro        # delegates to index.tsx (Astro requires .astro for routing)
│   │   ├── index.tsx          # composes Layout + IndexBody
│   │   └── (agenda, concept, intervenants — same pattern)
│   ├── components/
│   │   ├── <page>/            # per-page section components + Body component
│   │   │   ├── <Page>Header.tsx / <Page>Hero.tsx / ...   # section components
│   │   │   └── <Page>Body.tsx # renders div#main JSX wrapper + section components + scripts
│   │   └── (agenda/, concept/, index/, intervenants/)
│   └── framer/
│       ├── font-css.html      # shared <style data-framer-font-css> block
│       ├── *.head-styles.html # per-page: canonical + og:url + breakpoint/ssr CSS
│       ├── *.main.html        # per-page monolithic Framer SSR HTML (source, not used directly)
│       └── <page>/            # per-section HTML extracts + scripts
│           ├── header.html / hero.html / ...   # section HTML (dangerouslySetInnerHTML)
│           ├── nav-script.js / variant-script.js / animator-script.js / ...
│           ├── appear-animations.json / breakpoints.json
│           ├── preload-links.html
│           └── meta.json      # hydrateV2, rootClass, htmlStyle, dates
└── public/assets/
    └── images/                # organized by type (named files, not Framer hashes):
        ├── hero/              # brand logo + per-page hero visuals
        ├── speakers/ team/    # profile pictures (filename = person's real name)
        ├── testimonials/      # testimonial profile pictures
        ├── sponsors/          # partner & sponsor logos (logo-<brand>.png)
        ├── features/ projects/ gallery/   # concept illustrations, project examples, venue photos
        └── og-image.png, cover-2026.jpg   # site-wide meta images (root)
```

> NOTE: the Architecture block below this line is stale — it documents the pre-"rebuild"
> Framer-export approach (Layout.tsx, lib/framer.ts, framer/ dirs). The active app now uses
> `layouts/Layout.astro` + real React components composed via `<Page>Body.tsx`, with content
> data in `src/data/` (`site.ts`, `schedule.ts`, `edition.ts`).

### Key patterns

- Pages use `.astro` for routing + `.tsx` for logic. Astro requires `.astro` files in `src/pages/`.
- `Layout.tsx` accepts `children: ReactNode` — body content rendered as React children.
- Each page's `<Page>Body.tsx` renders `<div id="main">` as proper JSX with hydration attributes, then section components inside `<div data-framer-root>`, then scripts.
- Section components use `dangerouslySetInnerHTML` with their extracted HTML file (`?raw` import). Content is static Framer SSR — no user input, XSS not a risk.
- Framer JS bundles (`/assets/sites/5H3lPLxtIZUluG4tDZQyhH/`) are served from `public/` unchanged.
- Per-page head styles (`*.head-styles.html`) include canonical URL and Framer breakpoint/SSR CSS — parsed by `lib/framer.ts` and passed as props to `Layout`.
- Re-exporting from Framer: replace `*.main.html` and `*.head-styles.html`, then re-run the extraction script to update `framer/<page>/` files and regenerate Body/section components.

## Styling

Plain hand-written CSS — **no CSS framework**. Tailwind was removed (it was wired in but
no utility classes were ever used). Do not reintroduce it; add styles to the appropriate
`src/styles/*.css` file using the existing BEM convention (e.g. `hero__container`, `cta-primary`).

CSS lives in `src/styles/`, all imported via `layouts/Layout.astro` (`global.css` chains the rest):

- `global.css`   — `@import`s the others + a **basic reset** (replaces the former Tailwind Preflight)
- `tokens.css`   — CSS variables (brand colors, fonts) + reusable classes (`.container`, `.section-title`, `.cta-primary`)
- `fonts.css`    — Google Fonts / `@font-face`
- `hero.css` / `intro.css` / `sections.css` — per-section layout & styling

A few components also use inline styles (`Nav.tsx`, `Footer.tsx`, `ScrollProgress.tsx`).

## Linting & Formatting

ESLint (`eslint.config.js`) + Prettier (`.prettierrc`). `src/framer/` is excluded from Prettier (generated HTML).

## Dev gotchas

- `astro.config.mjs` sets `vite.resolve.dedupe: ['react','react-dom']` + `optimizeDeps.include` for
  React/JSX runtimes and `motion`. Required: without it, `motion` pulls a second React copy →
  "Invalid hook call / more than one copy of React".
- After moving/renaming many files while `npm run dev` is running, the Vite dep cache desyncs
  (symptoms: `Outdated Optimize Dep`, `jsxDEV is not a function`). Fix: stop dev, `rm -rf
  node_modules/.vite`, restart, then hard-refresh the browser.

## Deployment

Vercel with `cleanUrls: true` and `trailingSlash: false`. Deployment root = `shift-hackathon.com/dist/` after build.

## Tracking

GTM (`GTM-NQ2DKKPD`), gtag (`G-377KFTGYHV`), Hotjar (`hjid:4943377`) — all in `Layout.tsx`.
