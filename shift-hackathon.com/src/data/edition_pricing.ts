import { EDITION } from './edition';

export const PRICING_TIERS = [
  {
    name: 'FRIENDS',
    tag: { bg: '#fc233d', text: '#fff' },
    card: { bg: '#fde8ec', border: '#fc233d' },
    period: 'Dimanche soir',
    price: '5€',
    tagline: 'Pour venir encourager les copains',
    features: [
      { text: 'Accès au ', bold: 'démo day', rest: ' le dimanche soir' },
      { text: 'Accès au ', bold: 'cocktail', rest: ' et networking' },
    ],
  },
  {
    name: 'MAKERS',
    tag: { bg: EDITION.dominantColor, text: '#000' },
    card: { bg: '#edfcd6', border: EDITION.dominantColor },
    period: 'Weekend',
    price: '79€',
    tagline: "Pour profiter en intégralité de l'expérience",
    features: [
      { text: "Accès à l'", bold: 'expérience complète', rest: '' },
      { text: 'Échanges avec les ', bold: 'coachs, speakers', rest: ' et jurys professionnels' },
      { text: '7 ', bold: 'repas', rest: ' traiteurs inclus' },
      { text: 'Boissons à ', bold: 'volonté', rest: '' },
      { text: 'Un T-Shirt ', bold: 'exclusif', rest: '' },
      { text: 'Networking, ', bold: 'fun', rest: ' & rock & roll 🤘' },
    ],
    featured: true,
  },
  {
    name: 'ANGELS',
    tag: { bg: '#4169e1', text: '#fff' },
    card: { bg: '#e8eeff', border: '#4169e1' },
    period: 'Partenaires',
    price: 'Custom',
    tagline: 'Pour soutenir une initiative géniale',
    features: [
      { text: 'Une ', bold: 'visibilité', rest: " auprès des makers de l'IA générative" },
      { text: "L'occasion parfaite de ", bold: 'sourcer', rest: ' de futurs talents' },
      {
        text: "L'occasion unique pour ",
        bold: 'mettre le pied à l’étrier',
        rest: ' de vos collaborateurs',
      },
    ],
  },
];
