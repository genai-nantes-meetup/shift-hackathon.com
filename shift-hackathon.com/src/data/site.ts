import { EDITION } from './edition';

export const SITE_URL = 'https://shift-hackathon.com';

export const canonicalFor = (path: string) => `${SITE_URL}${path}`;

export const DEFAULT_META_DESCRIPTION =
  'Crée des produits Gen AI game-changer en 48 heures. Édition "Time to Custom" → Hack ton outil préféré.';

// Default Open Graph image (relative path — resolved to an absolute URL by consumers).
export const DEFAULT_OG_IMAGE = '/assets/images/og-image.jpg';

// Centralized ticketing CTA wording — single source consumed by all the
// « Je suis chaud » buttons (Nav, Banner, page heroes, pricing grid…).
// `primary`: single label for all registration buttons.
// `contact`: ANGELS tier of the pricing grid (introduction, not a direct purchase).
export const CTA_LABELS = {
  // primary: 'Je suis chaud',
  // primary: 'Take my money',
  primary: `Je suis chaud pour ${EDITION.nextYear} !`,
  contact: 'Nous contacter',
} as const;

// Per-page SEO meta — single source consumed by the `.astro` pages (title/description/canonical).
export const PAGE_META = {
  index: {
    title: `Shift — Le Hackathon Gen AI ${EDITION.year} à Nantes`,
    description: DEFAULT_META_DESCRIPTION,
    path: '/',
  },
  concept: {
    title: `Concept — Shift, le Hackathon Gen AI ${EDITION.year}`,
    description:
      'Shift Time To Custom: 48 heures pour hacker ton outil préféré et créer une vraie feature Gen AI.',
    path: '/concept',
  },
  agenda: {
    title: `Agenda — Shift, le Hackathon Gen AI ${EDITION.year} à Nantes`,
    description: `L'agenda du Shift Hackathon ${EDITION.year} : 3 jours de hackathon Gen AI à Nantes.`,
    path: '/agenda',
  },
  intervenants: {
    title: `Intervenants — Shift, le Hackathon Gen AI ${EDITION.year} à Nantes`,
    description: `Découvrez les intervenants du Shift Hackathon Gen AI ${EDITION.year} à Nantes.`,
    path: '/intervenants',
  },
  notFound: {
    title: '404 — Cette page a pivoté · Shift Hackathon',
    description: "Page introuvable. Retournez à l'accueil du Shift Hackathon Gen AI à Nantes.",
  },
} as const;
