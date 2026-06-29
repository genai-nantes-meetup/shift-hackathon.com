import { EDITION } from './edition';

export type ScheduleSpeaker = {
  name: string;
  img: string;
}

export type Slot = {
  time: string;
  title: string;
  desc?: string;
  speakers?: ScheduleSpeaker[];
}

export type ScheduleDay = {
  day: string;
  label: string;
  weekday: string;
  headerColor: string;
  slots: Slot[];
}

// Slots per day (index aligned with EDITION.agendaDays). The date/label/weekday metadata
// is NOT redeclared here: it comes from EDITION.agendaDays (single source).
const SLOTS_BY_DAY: Slot[][] = [
  [
    { time: '18h', title: 'Accueil' },
    {
      time: '19h',
      title: 'Démarrage de Shift',
      desc: 'Lancement du hackathon.',
      speakers: [
        { name: 'Maxime Thoonsen', img: '/assets/images/speakers/maxime-thoonsen.webp' },
        { name: 'Samuel Berthe', img: '/assets/images/team/samuel-berthe.webp' },
      ],
    },
    { time: '20h', title: 'Pitch fire', desc: 'Présentation en 1min des idées.' },
    {
      time: '20h45',
      title: 'Vote et repas',
      desc: 'Chaque participants vote pour ses projets préférés.',
    },
    {
      time: '21h15',
      title: 'REX Pierre Renaudin',
      desc: "Retour d'expérience d'un entrepreneur dans la Gen AI",
      speakers: [{ name: 'Pierre Renaudin', img: '/assets/images/speakers/pierre-renaudin.webp' }],
    },
    {
      time: '21h45',
      title: 'Formation des équipes',
      desc: "Après l'annonce des projets retenus, les participants rejoignent une équipe.",
    },
    {
      time: '22h30',
      title: 'Début du travail',
      desc: 'Les équipes découvrent leur espace de travail et démarrent le projet.',
    },
    {
      time: '1h',
      title: 'Fermeture des portes',
      desc: 'Les participants sont invités à rentrer chez eux pour ne pas se cramer.',
    },
  ],
  [
    { time: '8h30', title: 'Petit déjeuner' },
    {
      time: '8h45',
      title: 'Lancement de la journée',
      desc: 'Agenda et grandes étapes de la journée.',
    },
    {
      time: '9h30',
      title: 'Coaching Session',
      desc: 'Les coachs commencent à passer dans les équipes.',
    },
    { time: '12h30', title: 'Déjeuner' },
    {
      time: '13h45',
      title: "Conf' User Test",
      desc: 'Une masterclass par Pauline Corriou activable pour bien préparer son premier User Test.',
      speakers: [{ name: 'Pauline Corriou', img: '/assets/images/speakers/pauline-corriou.webp' }],
    },
    {
      time: '13h45',
      title: "Conf' Pitch/Demo",
      desc: "Une masterclass sur l'art du pitch par Florian Hervéou dédiée aux pitcheurs/ses de votre team pour tout déchirer sur scène.",
      speakers: [{ name: 'Florian Hervéou', img: '/assets/images/speakers/baptiste-rongier.webp' }],
    },
    { time: '18h', title: 'Premier User Tests', desc: "C'est le moment des tests !" },
    { time: '19h30', title: 'Dîner' },
    {
      time: '20h30 - ∞',
      title: 'Boulot',
      desc: "Jusqu'au bout de la nuit pour les plus téméraires.",
    },
    {
      time: '00h00',
      title: 'DJ set + Cocktails',
      desc: "Jusqu'au bout de la nuit pour les plus téméraires.",
    },
  ],
  [
    { time: '8h30', title: 'Petit déjeuner' },
    {
      time: '9h',
      title: 'Lancement de la journée',
      desc: 'Agenda et grandes étapes de la journée.',
    },
    { time: '11h15', title: 'User Test #2', desc: 'Dernière session de user test.' },
    { time: '12h30', title: 'Déjeuner' },
    { time: '14h', title: 'Dernière ligne droite', desc: 'On ajuste les derniers détails.' },
    { time: '16h15', title: 'Accueil du public' },
    {
      time: '17h',
      title: 'Cérémonie des pitchs / démos',
      desc: 'Les participants présentent leur projet devant un jury prestigieux.',
    },
    {
      time: '20h',
      title: 'Annonce des gagnants',
      desc: 'Le jury annonce les gagnants de Shift !',
    },
    { time: '20h45', title: 'Cocktail', desc: 'Cocktail final avec participants et public.' },
    { time: '22h30', title: 'Fin de Shift', desc: 'Fin de cette édition de Shift.' },
  ],
];

export const SCHEDULE: ScheduleDay[] = EDITION.agendaDays.map((meta, i) => ({
  day: meta.date,
  label: meta.label,
  weekday: meta.weekday,
  headerColor: EDITION.dominantColor,
  slots: SLOTS_BY_DAY[i],
}));
