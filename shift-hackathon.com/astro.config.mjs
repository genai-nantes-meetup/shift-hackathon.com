import { defineConfig } from 'astro/config';

export default defineConfig({
  build: {
    format: 'file',
  },
  redirects: {
    '/concept-2026': { status: 301, destination: '/concept' },
    '/agenda-2026': { status: 301, destination: '/agenda' },
    '/intervenants-2026': { status: 301, destination: '/intervenants' },
  },
});
