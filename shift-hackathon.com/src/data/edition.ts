const YEAR = 2026;
const MONTH_TITLE = 'Mars';
const MONTH_LOWER = 'mars';
const START_DAY = 27;
const DAY_NAMES = ['VENDREDI', 'SAMEDI', 'DIMANCHE'] as const;

export const EDITION = {
  year: YEAR,
  startDay: START_DAY,
  endDay: START_DAY + 2,
  month: MONTH_TITLE,
  dateRangeShort: `${START_DAY}-${START_DAY + 2}/03/${YEAR}`,
  dateRangeLong: `Du ${START_DAY} au ${START_DAY + 2} ${MONTH_LOWER} ${YEAR}`,
  ticketUrl: `https://www.billetweb.fr/shift-hackathon-${YEAR}`,
  earlyTicketUrl: 'https://tally.so/r/D45GKl',
  contactEmail: 'contact@shift-hackathon.com',
  agendaDays: DAY_NAMES.map((day, i) => ({
    date: `${START_DAY + i} ${MONTH_TITLE} ${YEAR}`,
    label: `Jour ${i + 1}`,
    weekday: day,
  })),
} as const;
