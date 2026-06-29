// Builders de données structurées (schema.org / JSON-LD) — fonctions pures.
// Placé dans `src/lib/` (et non `src/data/`) car contient de la logique.
// Consommé par `Layout.astro` (Organization + WebSite site-wide) et par les pages
// (Event, FAQPage, BreadcrumbList, Person, ItemList) via la prop `jsonLd`.

import { SITE_URL, DEFAULT_OG_IMAGE } from '../data/site';
import {
  EDITION,
  JE_SUIS_CHAUD_URL,
  JE_SUIS_CHAUD_TICKET_MODE,
  type JeSuisChaudTicketMode,
  SOCIAL_LINKS,
  VENUE,
} from '../data/edition';
import { PRICING_TIERS } from '../data/edition_pricing';
import { SPEAKERS, type Speaker } from '../data/edition_speakers';
import { SCHEDULE } from '../data/edition_schedule';
import { VIDEOS } from '../data/videos';
import type { FaqItem } from '../data/faq';

export type JsonLd = Record<string, unknown>;

/** URL absolue à partir d'un chemin racine ou d'une URL déjà absolue. */
const abs = (path: string): string =>
  path.startsWith('http') ? path : `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

/** Slug stable et sans accents à partir d'un nom (ex: « Céline Haentzler » → « celine-haentzler »). */
export const slugify = (name: string): string =>
  name
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export const speakerSlug = (s: Speaker): string => s.slug ?? slugify(s.name);

// Identifiants stables pour référencer les entités entre elles dans le @graph.
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const EVENT_ID = `${SITE_URL}/#event`;

const socialProfiles = (): string[] =>
  [
    SOCIAL_LINKS.twitter,
    SOCIAL_LINKS.linkedin,
    SOCIAL_LINKS.instagram,
    SOCIAL_LINKS.youtube,
  ].filter((u): u is string => Boolean(u));

export function organizationSchema(): JsonLd {
  const links = socialProfiles();
  return {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: 'Shift Hackathon',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: abs('/assets/images/hero/logo-shift.png'),
      width: 787,
      height: 153,
    },
    email: EDITION.contactEmail,
    address: {
      '@type': 'PostalAddress',
      addressLocality: VENUE.addressLocality,
      addressCountry: VENUE.addressCountry,
    },
    ...(links.length ? { sameAs: links } : {}),
  };
}

export function websiteSchema(): JsonLd {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: 'Shift — Le Hackathon Gen AI',
    url: SITE_URL,
    inLanguage: 'fr-FR',
    publisher: { '@id': ORGANIZATION_ID },
  };
}

function placeSchema(): JsonLd {
  const address: JsonLd = {
    '@type': 'PostalAddress',
    addressLocality: VENUE.addressLocality,
    addressCountry: VENUE.addressCountry,
    ...(VENUE.streetAddress ? { streetAddress: VENUE.streetAddress } : {}),
    ...(VENUE.postalCode ? { postalCode: VENUE.postalCode } : {}),
  };
  return {
    '@type': 'Place',
    name: VENUE.name,
    address,
    ...(VENUE.latitude != null && VENUE.longitude != null
      ? {
          geo: {
            '@type': 'GeoCoordinates',
            latitude: VENUE.latitude,
            longitude: VENUE.longitude,
          },
        }
      : {}),
  };
}

/** Prix numérique à partir d'un libellé (« 79€ » → 79, « Custom » → null). */
const parsePrice = (price: string): number | null => {
  const match = price.replace(',', '.').match(/[\d.]+/);
  return match ? Number(match[0]) : null;
};

// Disponibilité des billets dérivée du mode d'inscription, pour des données structurées
// honnêtes : on ne déclare InStock que si la billetterie est réellement ouverte.
const TICKET_AVAILABILITY: Record<JeSuisChaudTicketMode, string> = {
  'waiting-list-this-year': 'https://schema.org/PreOrder',
  'open-registration': 'https://schema.org/InStock',
  'waiting-list-next-year': 'https://schema.org/PreOrder',
};

function ticketOffers(): JsonLd[] {
  const availability = TICKET_AVAILABILITY[JE_SUIS_CHAUD_TICKET_MODE];
  return PRICING_TIERS.map((tier): JsonLd | null => {
    const price = parsePrice(tier.price);
    if (price == null) return null; // ANGELS (sur mesure) : pas une billetterie attendee
    return {
      '@type': 'Offer',
      name: tier.name,
      price,
      priceCurrency: 'EUR',
      availability,
      url: JE_SUIS_CHAUD_URL,
      category: tier.period,
      validThrough: `${isoDay(EDITION.endDay)}T23:59:59+02:00`,
    };
  }).filter((offer): offer is JsonLd => offer !== null);
}

const isoDay = (day: number): string =>
  `${EDITION.year}-${String(EDITION.monthNumber).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

// Description factuelle (≠ accroche marketing) — meilleure extraction par les moteurs IA.
const EVENT_DESCRIPTION =
  'Hackathon Gen AI de 48 heures à Nantes (édition « Time to Custom »). En équipe, les ' +
  "participant·es prennent un outil existant et lui ajoutent une vraie fonctionnalité d'IA " +
  'générative, accompagné·es par des experts tech, product et design, puis la testent et la ' +
  'pitchent devant un jury.';

// Un sous-événement par jour d'agenda (Google valorise subEvent pour les events multi-jours).
function subEvents(): JsonLd[] {
  return SCHEDULE.map((day, index) => ({
    '@type': 'Event',
    name: `Shift ${EDITION.year} — ${day.weekday} (${day.label})`,
    startDate: isoDay(EDITION.startDay + index),
    endDate: isoDay(EDITION.startDay + index),
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: placeSchema(),
  }));
}

export function eventSchema(): JsonLd {
  return {
    '@type': 'Event',
    '@id': EVENT_ID,
    name: `Shift — Le Hackathon Gen AI ${EDITION.year}`,
    description: EVENT_DESCRIPTION,
    // Kickoff vendredi 18h (CET, +01:00) → clôture dimanche soir.
    // NB : passage à l'heure d'été le 29/03/2026 ⇒ le dimanche est en +02:00.
    startDate: `${isoDay(EDITION.startDay)}T18:00:00+01:00`,
    endDate: `${isoDay(EDITION.endDay)}T23:00:00+02:00`,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    isAccessibleForFree: false,
    location: placeSchema(),
    image: [abs(DEFAULT_OG_IMAGE)],
    organizer: { '@id': ORGANIZATION_ID },
    performer: SPEAKERS.map((s) => personSchema(s)),
    audience: {
      '@type': 'Audience',
      audienceType: 'Développeurs, designers et product lovers',
    },
    offers: ticketOffers(),
    subEvent: subEvents(),
    url: SITE_URL,
    inLanguage: 'fr-FR',
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): JsonLd {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/** Entreprise déduite du premier rôle de la forme « … @ Entreprise ». */
const companyFromRoles = (roles: string[]): string | undefined => {
  for (const role of roles) {
    const match = role.match(/@\s*(.+)$/);
    if (match) return match[1].trim();
  }
  return undefined;
};

export function personSchema(s: Speaker): JsonLd {
  const url = `${SITE_URL}/intervenants/${speakerSlug(s)}`;
  const links = s.links ? Object.values(s.links).filter((u): u is string => Boolean(u)) : [];
  const company = s.company ?? companyFromRoles(s.roles);
  return {
    '@type': 'Person',
    '@id': `${url}#person`,
    name: s.name,
    url,
    image: abs(s.img),
    jobTitle: s.roles[0],
    ...(s.bio ? { description: s.bio } : {}),
    ...(company
      ? {
          worksFor: {
            '@type': 'Organization',
            name: company,
            ...(s.companyUrl ? { url: s.companyUrl } : {}),
          },
        }
      : {}),
    ...(links.length ? { sameAs: links } : {}),
  };
}

export function speakerListSchema(): JsonLd {
  return {
    '@type': 'ItemList',
    itemListElement: SPEAKERS.map((s, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${SITE_URL}/intervenants/${speakerSlug(s)}`,
      name: s.name,
    })),
  };
}

export function faqSchema(items: FaqItem[]): JsonLd {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

type Video = {
  id: string;
  title: string;
  description: string;
  uploadDate?: string;
};

export function videoSchema(video: Video): JsonLd {
  return {
    '@type': 'VideoObject',
    name: video.title,
    description: video.description,
    thumbnailUrl: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
    embedUrl: `https://www.youtube.com/embed/${video.id}`,
    contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
    // uploadDate optionnel : à renseigner dans data/videos.ts pour l'éligibilité rich results.
    ...(video.uploadDate ? { uploadDate: video.uploadDate } : {}),
  };
}

export const videoSchemas = (): JsonLd[] => VIDEOS.map(videoSchema);
