# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static site for Shift Hackathon Nantes. Three versions live side-by-side:

- `2026-framer/` — legacy production site (Framer export).
- `2026/` — Astro + React rewrite.
- `shift-hackathon.com/` — Current edition.

Before creating a new website for a new event, please backup the legacy directory in a new `202x/` directory.

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

## Convention

Except if asked by the user, only update `shift-hackathon.com/`. Other directories are archives of previous years.

Use the `motion` library to create cool animations.
