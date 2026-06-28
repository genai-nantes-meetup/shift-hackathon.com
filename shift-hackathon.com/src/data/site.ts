import { EDITION } from './edition';

export const SITE_URL = 'https://shift-hackathon.com';

export const canonicalFor = (path: string) => `${SITE_URL}${path}`;

export const DEFAULT_META_DESCRIPTION =
  'Créé des produits Gen AI game-changer en 48 heures. Édition "Time to Custom" → Hack ton outil préféré.';

// Méta SEO par page — source unique consommée par les pages `.astro` (title/description/canonical).
export const PAGE_META = {
  index: {
    title: 'Shift, le Hackathon Gen AI',
    description: DEFAULT_META_DESCRIPTION,
    path: '/',
  },
  concept: {
    title: 'Shift - Le Hackathon Gen AI',
    description:
      'Shift Time To Custom: 48 heures pour hacker ton outil préféré et créer une vraie feature Gen AI.',
    path: '/concept',
  },
  agenda: {
    title: 'Shift - Le Hackathon Gen AI — Agenda',
    description: `L'agenda du Shift Hackathon ${EDITION.year} : 3 jours de hackathon Gen AI à Nantes.`,
    path: '/agenda',
  },
  intervenants: {
    title: `Shift - Les Intervenants ${EDITION.year}`,
    description: `Découvrez les intervenants du Shift Hackathon Gen AI ${EDITION.year} à Nantes.`,
    path: '/intervenants',
  },
  notFound: {
    title: '404 — Cette page a pivoté · Shift Hackathon',
  },
} as const;
