import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/data/site.ts';

export default defineConfig({
  site: SITE_URL,
  server: { port: 4324 },
  // Inline all page CSS instead of a separate <link> — the site ships only a few KB of CSS per
  // page, so inlining removes a render-blocking request entirely (was costing ~300ms of LCP).
  build: { inlineStylesheets: 'always' },
  integrations: [
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      serialize(item) {
        // The home page carries the maximum priority.
        if (item.url === `${SITE_URL}/`) item.priority = 1.0;
        return item;
      },
    }),
  ],
  vite: {
    // Force a single React instance so deps like `motion` don't get their own
    // bundled copy (avoids "Invalid hook call / more than one copy of React").
    resolve: {
      dedupe: ['react', 'react-dom'],
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime', 'motion'],
    },
  },
});
