# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static site for Shift Hackathon Nantes. Three versions live side-by-side:

- `2026-framer/` — legacy production site (Framer export).
- `2026/` — Astro + React rewrite.
- `shift-hackathon.com/` — Current edition.

Before creating a new website for a new event, please backup the legacy directory in a new `202x/` directory.

Only the current version (`shift-hackathon.com/`) should be updated. Other directories are backup.

## `2026-framer/`

Pure HTML/CSS/JS exported from Framer. No build step.

Local preview:
```bash
docker run -it --rm -p 80:80 --name nginx -v $(pwd)/2026-framer:/usr/share/nginx/html nginx
```

## `2026/`

Astro website.

## `shift-hackathon.com`

Astro website.

`shift-hackathon.com/` is currently deployed via Vercel (auto-deploys on push to `main`).

### Content data: `shift-hackathon.com/src/data/`

Keep all site content in `src/data/`, so one edit updates every page and no copy drifts out of sync.

- Write content in `src/data/*.ts`, never inline in components, pages, layouts or SEO tags. Current categories:
  1. Event config: dates, ticket mode and URLs, venue, social links, organizing bodies (`edition.ts`).
  2. Program: agenda schedule, speakers (`edition_schedule.ts`, `edition_speakers.ts`).
  3. Commercial: pricing tiers, partners, sponsors (`edition_pricing.ts`, `edition_complices.ts`, `edition_partners.ts`).
  4. People: organizer team (`team.ts`).
  5. Social proof and media: testimonials, YouTube videos (`testimonials.ts`, `videos.ts`).
  6. Site and SEO: site URL, canonical URLs, meta descriptions, OG image, CTA button labels, FAQ (`site.ts`, `faq.ts`).
- Import data from components. Derive values from existing exports (e.g. `PARTNERS` from `ALL_COMPLICES`); never duplicate them.
- Add a new `src/data/` module, or extend an existing one, when new content has no home.
- Keep this directory when redesigning the site for a new edition: update the data, keep the structure.

## Convention

Except if asked by the user, only update `shift-hackathon.com/`. Other directories are archives of previous years.

Use the `motion` library to create cool animations.
