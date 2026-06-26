import { CDN } from './site';

export const SCHEDULE = [
  {
    day: '27 Mars 2026',
    label: 'Jour 1',
    weekday: 'Vendredi',
    headerColor: '#9ff839',
    slots: [
      { time: '18h', title: 'Accueil' },
      {
        time: '19h',
        title: 'Démarrage de Shift',
        desc: 'Lancement du hackathon.',
        speakers: [
          { name: 'Maxime Thoonsen', img: `${CDN}/speakers/maxime-thoonsen.jpeg` },
          { name: 'Samuel Berthe', img: `${CDN}/team/samuel-berthe.jpg` },
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
        speakers: [{ name: 'Pierre Renaudin', img: `${CDN}/speakers/pierre-renaudin.jpeg` }],
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
  },
  {
    day: '28 mars 2026',
    label: 'Jour 2',
    weekday: 'Samedi',
    headerColor: '#9ff839',
    slots: [
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
        speakers: [{ name: 'Pauline Corriou', img: `${CDN}/speakers/pauline-corriou.jpeg` }],
      },
      {
        time: '13h45',
        title: "Conf' Pitch/Demo",
        desc: "Une masterclass sur l'art du pitch par Florian Hervéou dédiée aux pitcheurs/ses de votre team pour tout déchirer sur scène.",
        speakers: [{ name: 'Florian Hervéou', img: `${CDN}/speakers/baptiste-rongier.jpeg` }],
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
  },
  {
    day: '29 mars 2026',
    label: 'Jour 3',
    weekday: 'Dimanche',
    headerColor: '#9ff839',
    slots: [
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
  },
];

export const FAQ = [
  {
    q: 'Puis-je pitcher une idée dont le projet a déjà débuté ?',
    a: "Pour que tous les participants soient sur le même pied d'égalité, il ne faut pas avoir commencé à travailler sur l'idée en amont.",
  },
  {
    q: "Est-ce que je peux bosser sur mon outil / l'outil de ma boite ?",
    a: "Bien sûr que non petit malin, l'objectif ici est de prendre un outil sur le marché.",
  },
  {
    q: 'Dois-je avoir constitué mon équipe en amont du weekend ?',
    a: 'Pas du tout, les équipes seront créées au lancement du hackathon.',
  },
  {
    q: "J'ai combien de temps pour présenter mon idée ?",
    a: '1min tout pile, pas une seconde de plus.',
  },
  { q: 'Est-ce que je peux pitcher 2 idées ?', a: 'Choisis ta préférée !' },
  { q: 'Est-ce que je peux prévoir des objets ou des slides ?', a: 'Objets oui, slides non !' },
  { q: 'Combien de projets sont sélectionnés ?', a: '15 projets, pas un de plus.' },
  {
    q: "Que faire si mon idée n'est pas choisie ?",
    a: "Rejoins une team dont l'idée ou le porteur te parle.",
  },
  { q: "Qu'est-ce que je dois emmener ?", a: 'Ta bonne humeur et ton PC bien sûr !' },
  {
    q: 'Comment me rendre sur place ?',
    a: 'Via le tram 1, le bus 11, en voiture au parking Graslin ou en vélo.',
  },
  {
    q: 'Est-ce que je peux rester dormir ?',
    a: 'Le vendredi soir, non. Le samedi, oui ! Par contre prévois un duvet, un masque de nuit et des boules quies ;)',
  },
];
