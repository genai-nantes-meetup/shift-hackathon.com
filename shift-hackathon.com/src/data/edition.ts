export const EDITION = {
  year: 2026,
  startDay: 27,
  endDay: 29,
  month: 'Mars',
  dateRangeShort: '27-29/03/2026',
  dateRangeLong: `Du 27 au 29 mars 2026`,
  ticketUrl: `https://www.billetweb.fr/shift-hackathon-2026`,
  earlyTicketUrl: 'https://tally.so/r/D45GKl',
  contactEmail: 'contact@shift-hackathon.com',
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
} as const;
