# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development

### Astro app (active)

```bash
cd shift-hackathon.com
ASTRO_TELEMETRY_DISABLED=1 npm run dev     # http://localhost:4321
ASTRO_TELEMETRY_DISABLED=1 npm run build   # outputs to dist/
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
│   ├── layouts/Layout.astro   # shared <head>: GTM, gtag, Hotjar, font-css, og/twitter props
│   ├── pages/                 # one .astro per route
│   ├── framer/                # raw HTML partials extracted from legacy Framer export
│   │   ├── font-css.html      # shared <style data-framer-font-css> block
│   │   ├── *.main.html        # per-page: div#main (Framer SSR DOM) + scripts + JS bundles
│   │   └── *.head-styles.html # per-page: canonical + og:url + breakpoint/ssr CSS
│   └── styles/
└── public/assets/             # copy of legacy/assets (images, fonts, Framer JS bundles)
```

### Key patterns

- `div#main` contains ~259 KB of Framer SSR markup with JSON in attributes — injected via `set:html` (not parsed as JSX).
- Framer JS bundles (`/assets/sites/5H3lPLxtIZUluG4tDZQyhH/`) are served from `public/` unchanged.
- Per-page head styles (`*.head-styles.html`) include canonical URL, `og:url`, and Framer breakpoint/SSR CSS — injected into `<slot name="head-styles">`.
- Re-exporting from Framer: replace `*.main.html` and `*.head-styles.html` with new extracts.

## Deployment

Vercel with `cleanUrls: true` and `trailingSlash: false`. Deployment root = `shift-hackathon.com/dist/` after build.

## Tracking

GTM (`GTM-NQ2DKKPD`), gtag (`G-377KFTGYHV`), Hotjar (`hjid:4943377`) — all in `Layout.astro`.
