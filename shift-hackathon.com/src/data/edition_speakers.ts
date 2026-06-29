export type Speaker = {
  name: string;
  roles: string[];
  img: string;
  // Optional fields — enrich for rich /intervenants/[slug] pages (avoids thin content).
  slug?: string; // otherwise derived from the name via slugify()
  bio?: string; // 1-2 sentences of introduction
  talk?: string; // talk title/topic if applicable
  company?: string; // company (otherwise derivable from `roles`)
  companyUrl?: string;
  links?: { linkedin?: string; twitter?: string; website?: string; github?: string };
}

export const SPEAKERS: Speaker[] = [
  {
    name: 'Maxime Thoonsen',
    roles: ['Founder @ Ago', 'Président @ Gen AI France'],
    img: '/assets/images/speakers/maxime-thoonsen.webp',
    bio: 'Maxime Thoonsen est fondateur d’Ago et président de Gen AI France.',
  },
  {
    name: 'Tiffany Souterre',
    roles: ['Speaker @ Underscore'],
    img: '/assets/images/speakers/tiffany-souterre.webp',
    bio: 'Tiffany Souterre est speaker chez Underscore_.',
  },
  {
    name: 'Pierre Renaudin',
    roles: ['CTO @ Slite & Super.ai'],
    img: '/assets/images/speakers/pierre-renaudin.webp',
    bio: 'Pierre Renaudin est CTO de Slite et de Super.ai.',
  },
  {
    name: 'Mickaël Coenca',
    roles: ['CTO @ Start the f* Up'],
    img: '/assets/images/speakers/mickael-coenca.webp',
    bio: 'Mickaël Coenca est CTO de Start the f* Up.',
  },
  {
    name: 'Gaël Musquet',
    roles: ['Ethical Hacker'],
    img: '/assets/images/speakers/gael-musquet.webp',
    bio: 'Gaël Musquet est ethical hacker.',
  },
  {
    name: 'Benoit Hediard',
    roles: ['CEO @ Globetrotters AI', 'Ex CTO @ Agorapulse'],
    img: '/assets/images/speakers/benoit-hediard.webp',
    bio: 'Benoit Hediard est CEO de Globetrotters AI et ancien CTO d’Agorapulse.',
  },
  {
    name: 'Pauline Corriou',
    roles: ['Founder @ Motiv', 'Lead User Researcher @ Imagination Machine'],
    img: '/assets/images/speakers/pauline-corriou.webp',
    bio: 'Pauline Corriou est fondatrice de Motiv et Lead User Researcher chez Imagination Machine.',
  },
  {
    name: 'Adrien Etaix',
    roles: ['UX/UI | Frontend @ Mistral AI'],
    img: '/assets/images/speakers/adrien-etaix.webp',
    bio: 'Adrien Etaix travaille sur l’UX/UI et le frontend chez Mistral AI.',
  },
  {
    name: 'Quentin de Quelen',
    roles: ['CEO @ Meilisearch'],
    img: '/assets/images/speakers/quentin-de-quelen.webp',
    bio: 'Quentin de Quelen est CEO de Meilisearch.',
  },
  {
    name: 'Yannis Sulfourt',
    roles: ['Co-Founder & Designer @ Explore the Vault'],
    img: '/assets/images/speakers/yannis-sulfourt.webp',
    bio: 'Yannis Sulfourt est co-fondateur et designer d’Explore the Vault.',
  },
  {
    name: 'Clément Renault',
    roles: ['CTO @ Meilisearch'],
    img: '/assets/images/speakers/clement-renault.webp',
    bio: 'Clément Renault est CTO de Meilisearch.',
  },
  {
    name: 'Maxime Courant',
    roles: ['Consultant IA Freelance'],
    img: '/assets/images/speakers/maxime-courant.webp',
    bio: 'Maxime Courant est consultant IA freelance.',
  },
  {
    name: 'Céline Haentzler',
    roles: ['GenAI Product Expert @ Betclic', 'Orga @ Meetup Gen AI Rennes'],
    img: '/assets/images/speakers/celine-haentzler.webp',
    bio: 'Céline Haentzler est GenAI Product Expert chez Betclic et organise le Meetup Gen AI Rennes.',
  },
  {
    name: 'Kévin Lafortune',
    roles: ['Associé & Designer @ Explore the Vault'],
    img: '/assets/images/speakers/kevin-lafortune.webp',
    bio: 'Kévin Lafortune est associé et designer chez Explore the Vault.',
  },
  {
    name: 'Baptiste Rongier',
    roles: ['Co-founder & Designer @ Présent'],
    img: '/assets/images/speakers/baptiste-rongier.webp',
    bio: 'Baptiste Rongier est co-fondateur et designer de Présent.',
  },
];
