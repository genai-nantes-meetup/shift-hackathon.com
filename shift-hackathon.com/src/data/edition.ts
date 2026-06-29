export const EDITION = {
  year: 2026,
  nextYear: 2027,
  startDay: 27,
  endDay: 29,
  month: 'Mars',
  monthNumber: 3, // month (1-12) — used to build the ISO dates of the Event schema
  dateRangeShort: '27-29/03/2026',
  dateRangeLong: `Du 27 au 29 mars 2026`,

  // Pricing summary shown in the footer (« Tarifs » line).
  tarifsSummary: '79€',
  agendaDays: [
    {
      date: '27 Mars 2026',
      label: 'Jour 1',
      weekday: 'Vendredi',
    },
    {
      date: '28 Mars 2026',
      label: 'Jour 2',
      weekday: 'Samedi',
    },
    {
      date: '29 Mars 2026',
      label: 'Jour 3',
      weekday: 'Dimanche',
    },
  ],

  dominantColor: '#9ff839', // edition's dominant color — solid fills, borders, text accents, theme-color
  dominantColorShadow: 'rgba(159, 248, 57, 0.5)', // same color at 50% opacity — drop shadows

  contactEmail: 'nantes@shift-hackathon.com',
} as const;

export type JeSuisChaudTicketMode =
  | 'waiting-list-this-year' // before ticketing opens
  | 'open-registration' // ticketing open
  | 'waiting-list-next-year'; // waiting list for next year

// change when ticketing opens and before the closing ceremony
export const JE_SUIS_CHAUD_TICKET_MODE: JeSuisChaudTicketMode = 'waiting-list-next-year';

// URL of the « Je suis chaud » button, chosen automatically based on JE_SUIS_CHAUD_TICKET_MODE.
// The exhaustive Record forces all 3 modes to be covered.
const JE_SUIS_CHAUD_URL_BY_MODE: Record<JeSuisChaudTicketMode, string> = {
  'waiting-list-this-year': '???',
  'open-registration': `https://www.billetweb.fr/shift-hackathon-2026`,
  'waiting-list-next-year': 'https://tally.so/r/D45GKl',
};

export const JE_SUIS_CHAUD_URL = JE_SUIS_CHAUD_URL_BY_MODE[JE_SUIS_CHAUD_TICKET_MODE];

// Official social accounts — fill in with the real URLs.
// Consumed by Layout (twitter:site/creator) and the Organization schema (`sameAs`).
// Leave an empty string to cleanly omit the field.
export const SOCIAL_LINKS: {
  twitterHandle: string;
  twitter: string;
  linkedin: string;
  instagram: string;
  youtube: string;
} = {
  twitterHandle: '', // e.g. '@shifthackathon' (for <meta name="twitter:site">)
  twitter: '', // e.g. 'https://twitter.com/shifthackathon'
  linkedin: 'https://www.linkedin.com/company/shift-hackathon/',
  instagram: '', // e.g. 'https://www.instagram.com/shifthackathon'
  youtube: '',
};

// Event venue — fill in the postal address (local SEO + Place/Event schema).
// Empty `streetAddress`/`postalCode` ⇒ fields omitted from the JSON-LD. `latitude`/`longitude` null ⇒ no `geo`.
export const VENUE: {
  name: string;
  streetAddress: string;
  postalCode: string;
  addressLocality: string;
  addressCountry: string;
  latitude: number | null;
  longitude: number | null;
} = {
  name: 'Le Palace',
  streetAddress: '4 rue Voltaire',
  postalCode: '44000',
  addressLocality: 'Nantes',
  addressCountry: 'FR',
  latitude: 47.2129216,
  longitude: -1.5644127,
};
