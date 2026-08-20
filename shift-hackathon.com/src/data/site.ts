import { EDITION } from './edition';

export const SITE_URL = 'https://shift-hackathon.com';

export const canonicalFor = (path: string) => `${SITE_URL}${path}`;

export const DEFAULT_META_DESCRIPTION =
  'Shift, le hackathon IA de Nantes : crée un produit Gen AI qui déchire en 48 heures. Édition "Time to Custom" → hacke ton outil préféré.';

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
    title: `Hackathon IA Nantes ${EDITION.year} — Shift, 48h de Gen AI`,
    description: DEFAULT_META_DESCRIPTION,
    path: '/',
  },
  concept: {
    title: `C'est quoi Shift ? Le hackathon IA de 48h — Concept`,
    description:
      'Shift Time To Custom : le hackathon intelligence artificielle de 48 heures à Nantes. Hacke ton outil préféré et crée une vraie feature Gen AI.',
    path: '/concept',
  },
  agenda: {
    title: `Agenda ${EDITION.year} — Programme du hackathon IA à Nantes`,
    description: `Le programme complet du hackathon IA Shift ${EDITION.year} : 3 jours à Nantes, du vendredi au dimanche, pour créer un produit Gen AI en équipe.`,
    path: '/agenda',
  },
  intervenants: {
    title: `Intervenants — Speakers du hackathon IA Shift ${EDITION.year}`,
    description: `Découvre les intervenants et speakers IA du Shift Hackathon ${EDITION.year} à Nantes : experts tech, product et design venus coacher les équipes.`,
    path: '/intervenants',
  },
  notFound: {
    title: '404 — Cette page a pivoté · Shift Hackathon',
    description: "Page introuvable. Retournez à l'accueil du hackathon IA Shift à Nantes.",
  },
} as const;
