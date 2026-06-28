# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static site for Shift Hackathon Nantes. Three versions live side-by-side:

- `2026/` — legacy production site (Framer export).
- `shift-hackathon.com/` — Astro + React rewrite (not yet deployed).

## `2026/`

Pure HTML/CSS/JS exported from Framer. No build step.

Local preview:
```bash
docker run -it --rm -p 80:80 --name nginx -v $(pwd)/2026:/usr/share/nginx/html nginx
```

## shift-hackathon.com

`shift-hackathon.com/` is currently deployed via Vercel (auto-deploys on push to `main`). The Astro rewrite is not yet wired to deployment.

## Convention

Except if asked by the user, only update `shift-hackathon.com/`. Other directories are archives of previous years.
