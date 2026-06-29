import { EDITION } from './edition';

export const SITE_URL = 'https://shift-hackathon.com';

export const canonicalFor = (path: string) => `${SITE_URL}${path}`;

export const DEFAULT_META_DESCRIPTION =
  'Créé des produits Gen AI game-changer en 48 heures. Édition "Time to Custom" → Hack ton outil préféré.';

// Image Open Graph par défaut (chemin relatif — résolu en URL absolue par les consommateurs).
export const DEFAULT_OG_IMAGE = '/assets/images/og-image.jpg';

// Méta SEO par page — source unique consommée par les pages `.astro` (title/description/canonical).
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
