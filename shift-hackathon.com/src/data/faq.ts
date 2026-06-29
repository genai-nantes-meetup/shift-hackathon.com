export type FaqItem = {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Puis-je pitcher une idée dont le projet a déjà débuté ?',
    answer:
      "Pour que tous les participants soient sur le même pied d'égalité, il ne faut pas avoir commencé à travailler sur l'idée en amont",
  },
  {
    question: "Est-ce que je peux bosser sur mon outil / l'outil de ma boite ?",
    answer: "Bien sûr que non petit malin, l'objectif ici est de prendre un outil sur le marché.",
  },
  {
    question: 'Dois-je avoir constitué mon équipe en amont du weekend ?',
    answer: 'Pas du tout, les équipes seront créees au lancement du hackathon',
  },
  {
    question: "J'ai combien de temps pour présenter mon idée ?",
    answer: '1min tout pile, pas une seconde de plus',
  },
  {
    question: 'Est-ce que je peux pitcher 2 idées ?',
    answer: 'Choisis ta préférée !',
  },
  {
    question: 'Est-ce que je peux prévoir des objets ou des slides ?',
    answer: 'Objets oui, slides non !',
  },
  {
    question: 'Combien de projets sont sélectionnés ?',
    answer: '15 projets, pas un de plus',
  },
  {
    question: "Que faire si mon idée n'est pas choisie ?",
    answer: "Rejoins une team en construction dont l'idée ou le porteur te parle",
  },
  {
    question: "Qu'est-ce que je dois emmener ?",
    answer: 'Ta bonne humeur et ton PC bien sûr !',
  },
  {
    question: 'Comment me rendre sur place ?',
    answer:
      'Via le tram 1, le bus 11, en voiture au parking Graslin ou en vélo, parking juste devant.',
  },
  {
    question: 'Est-ce que je peux rester dormir ?',
    answer:
      'Le vendredi soir, non. Le samedi, oui ! Par contre prévois un duvet, un tapis de sol (si pas assez de banquettes), un masque de nuit et des boules quies ;)',
  },
];
