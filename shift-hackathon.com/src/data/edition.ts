export const EDITION = {
  year: 2026,
  nextYear: 2027,
  startDay: 27,
  endDay: 29,
  month: 'Mars',
  dateRangeShort: '27-29/03/2026',
  dateRangeLong: `Du 27 au 29 mars 2026`,
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

type JeSuisChaudTicketMode =
  | 'waiting-list-this-year' // avant que la billeterie ne soit ouverte
  | 'open-registration' // billeterie ouverte
  | 'waiting-list-next-year'; // waiting list pour l'année prochaine

// changer à l'ouverture de la billeterie et avant la cérémonie de clôture
const JE_SUIS_CHAUD_TICKET_MODE: JeSuisChaudTicketMode = 'waiting-list-next-year';

// URL du bouton « Je suis chaud », choisie automatiquement selon JE_SUIS_CHAUD_TICKET_MODE.
// Le Record exhaustif force à couvrir les 3 modes.
const JE_SUIS_CHAUD_URL_BY_MODE: Record<JeSuisChaudTicketMode, string> = {
  'waiting-list-this-year': '???',
  'open-registration': `https://www.billetweb.fr/shift-hackathon-2026`,
  'waiting-list-next-year': 'https://tally.so/r/D45GKl',
};

export const JE_SUIS_CHAUD_URL = JE_SUIS_CHAUD_URL_BY_MODE[JE_SUIS_CHAUD_TICKET_MODE];
