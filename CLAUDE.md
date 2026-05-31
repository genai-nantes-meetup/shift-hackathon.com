# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development

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
└── public/assets/             # copy of legacy/assets (images, fonts, Framer JS bundles)
```

### Key patterns

- Pages use `.astro` for routing + `.tsx` for logic. Astro requires `.astro` files in `src/pages/`.
- `Layout.tsx` accepts `children: ReactNode` — body content rendered as React children.
- Each page's `<Page>Body.tsx` renders `<div id="main">` as proper JSX with hydration attributes, then section components inside `<div data-framer-root>`, then scripts.
- Section components use `dangerouslySetInnerHTML` with their extracted HTML file (`?raw` import). Content is static Framer SSR — no user input, XSS not a risk.
- Framer JS bundles (`/assets/sites/5H3lPLxtIZUluG4tDZQyhH/`) are served from `public/` unchanged.
- Per-page head styles (`*.head-styles.html`) include canonical URL and Framer breakpoint/SSR CSS — parsed by `lib/framer.ts` and passed as props to `Layout`.
- Re-exporting from Framer: replace `*.main.html` and `*.head-styles.html`, then re-run the extraction script to update `framer/<page>/` files and regenerate Body/section components.

## Linting & Formatting

ESLint (`eslint.config.js`) + Prettier (`.prettierrc`). `src/framer/` is excluded from Prettier (generated HTML).

## Deployment

Vercel with `cleanUrls: true` and `trailingSlash: false`. Deployment root = `shift-hackathon.com/dist/` after build.

## Tracking

GTM (`GTM-NQ2DKKPD`), gtag (`G-377KFTGYHV`), Hotjar (`hjid:4943377`) — all in `Layout.tsx`.
