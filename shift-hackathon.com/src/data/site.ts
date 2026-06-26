import { EDITION } from './edition';

export const TICKET_URL = EDITION.ticketUrl;
export const CDN = '/assets/images';

export const NAV_LINKS = [
  { label: 'Concept', href: '/concept-2026' },
  { label: 'Intervenants', href: '/intervenants-2026' },
  { label: 'Agenda', href: '/agenda-2026' },
];

export const SPEAKERS = [
  {
    name: 'Maxime Thoonsen',
    roles: ['Founder @ Ago', 'Président @ Gen AI France'],
    img: `${CDN}/speakers/maxime-thoonsen.jpeg`,
  },
  {
    name: 'Tiffany Souterre',
    roles: ['Speaker @ Underscore'],
    img: `${CDN}/speakers/tiffany-souterre.jpg`,
  },
  {
    name: 'Pierre Renaudin',
    roles: ['CTO @ Slite & Super.ai'],
    img: `${CDN}/speakers/pierre-renaudin.jpeg`,
  },
  {
    name: 'Mickaël Coenca',
    roles: ['CTO @ Start the f* Up'],
    img: `${CDN}/speakers/mickael-coenca.jpeg`,
  },
  { name: 'Gaël Musquet', roles: ['Ethical Hacker'], img: `${CDN}/speakers/gael-musquet.jpeg` },
  {
    name: 'Benoit Hediard',
    roles: ['CEO @ Globetrotters AI', 'Ex CTO @ Agorapulse'],
    img: `${CDN}/speakers/benoit-hediard.jpg`,
  },
  {
    name: 'Pauline Corriou',
    roles: ['Founder @ Motiv', 'Lead User Researcher @ Imagination Machine'],
    img: `${CDN}/speakers/pauline-corriou.jpeg`,
  },
  {
    name: 'Adrien Etaix',
    roles: ['UX/UI | Frontend @ Mistral AI'],
    img: `${CDN}/speakers/adrien-etaix.jpg`,
  },
  {
    name: 'Quentin de Quelen',
    roles: ['CEO @ Meilisearch'],
    img: `${CDN}/speakers/quentin-de-quelen.jpeg`,
  },
  {
    name: 'Yannis Sulfourt',
    roles: ['Co-Founder & Designer @ Explore the Vault'],
    img: `${CDN}/speakers/yannis-sulfourt.jpg`,
  },
  {
    name: 'Clément Renault',
    roles: ['CTO @ Meilisearch'],
    img: `${CDN}/speakers/clement-renault.jpeg`,
  },
  {
    name: 'Maxime Courant',
    roles: ['Consultant IA Freelance'],
    img: `${CDN}/speakers/maxime-courant.jpeg`,
  },
  {
    name: 'Céline Haentzler',
    roles: ['GenAI Product Expert @ Betclic', 'Orga @ Meetup Gen AI Rennes'],
    img: `${CDN}/speakers/celine-haentzler.jpeg`,
  },
  {
    name: 'Kévin Lafortune',
    roles: ['Associé & Designer @ Explore the Vault'],
    img: `${CDN}/speakers/kevin-lafortune.jpeg`,
  },
  {
    name: 'Baptiste Rongier',
    roles: ['Co-founder & Designer @ Présent'],
    img: `${CDN}/speakers/baptiste-rongier.jpeg`,
  },
];

export const PARTNERS = [
  { name: 'OpenAI', logo: `${CDN}/sponsors/logo-openai.png`, url: 'https://openai.com/' },
  {
    name: 'ElevenLabs',
    logo: `${CDN}/sponsors/logo-elevenlabs.png`,
    url: 'https://elevenlabs.io/',
  },
  { name: 'n8n', logo: `${CDN}/sponsors/logo-n8n.png`, url: 'https://n8n.io/' },
  {
    name: 'Meilisearch',
    logo: `${CDN}/sponsors/logo-meilisearch.png`,
    url: 'https://www.meilisearch.com/',
  },
  { name: 'Reecall', logo: `${CDN}/sponsors/logo-reecall.png`, url: 'https://reecall.com/' },
  {
    name: 'Externatic',
    logo: `${CDN}/sponsors/logo-externatic.png`,
    url: 'https://www.externatic.fr/',
  },
  {
    name: 'Clever Cloud',
    logo: `${CDN}/sponsors/logo-clever-cloud.png`,
    url: 'https://www.clever.cloud/fr/',
  },
  {
    name: 'Agoriade AI',
    logo: `${CDN}/sponsors/logo-agoriade-ai.png`,
    url: 'https://www.agoriade.ai/',
  },
  { name: 'Kalicube', logo: `${CDN}/sponsors/logo-kalicube.png`, url: 'https://kalicube.com/' },
  { name: 'RCA', logo: `${CDN}/sponsors/logo-rca.png`, url: 'https://rca.fr/' },
  {
    name: 'Arzel',
    logo: `${CDN}/sponsors/logo-arzel.png`,
    url: 'https://www.arzelmanagement.com/',
  },
  { name: 'Ici Lundi', logo: `${CDN}/sponsors/logo-ici-lundi.png`, url: 'https://icilundi.fr/' },
  {
    name: 'La Cantine',
    logo: `${CDN}/sponsors/logo-la-cantine.svg`,
    url: 'https://www.lacantine.co/',
  },
  {
    name: 'dev.events',
    logo: `${CDN}/sponsors/logo-dev-events.png`,
    url: 'https://dev.events/',
  },
];

export const TESTIMONIALS = [
  { name: 'Quentin Brejoin', role: 'Software Engineer', img: `${CDN}/testimonials/quentin-brejoin.jpeg`, quote: "Humainement expérience incroyable, toujours dans la cohésion et le partage malgré que nous étions dans des équipes différentes. Franchement merci beaucoup pour ce week-end, c'était une dinguerie que je suis pas prêt d'oublier. MERCI!" },
  { name: 'Emilien Puech', role: 'Ingénieur cyberdéfense', img: `${CDN}/testimonials/emilien-puech.jpeg`, quote: "Techniquement et humainement j'ai énormément appris, mais le plus impressionnant, c'est de voir ce qu'on a réussis à faire en 48h" },
  { name: 'Mathieu Sacchi', role: 'VC @ Resonance', img: `${CDN}/testimonials/mathieu-sacchi.jpeg`, quote: "J'ai trouvé ça vraiment excellent et j'ai été bluffé par l'orga, les conditions étaient parfaites et tout était très pro - on sentait qu'il y avait de l'expérience" },
  { name: 'Victor Degliame', role: 'Ingénieur IA @ DNUM', img: `${CDN}/testimonials/victor-degliame.jpeg`, quote: "Merci beaucoup pour l'orga, c'était très cool et je suis très content de ce qu'on a pu faire pendant le week-end." },
  { name: 'Pierre De La Porte', role: 'Product builder IA', img: `${CDN}/testimonials/pierre-de-la-porte.jpg`, quote: "Hackaton haute gamme. Et merci c était top!" },
  { name: 'Alexis Manuel', role: 'Data Engineer', img: `${CDN}/testimonials/alexis-manuel.jpg`, quote: "Merci de faire avancer la scène GenAi sous le format hackaton, celà manque cruellement et vous le mener d'une main de maître dans une ambiance des plus Rock n Roll. Vivement la prochaine édition !" },
  { name: 'Gaëtan Golliot', role: 'Référent IA', img: `${CDN}/testimonials/gaetan-golliot.jpg`, quote: "Je fais cet évènement avec comme objectifs : de rencontrer / revoir des personnes cool, d'apprendre de nouvelles choses, de passer de bons moments. Les trois sont atteints. Encore merci à vous." },
  { name: 'Théo Lefort', role: 'Maker No-code / Airtable - Make CEO @Mark Textile', img: `${CDN}/testimonials/theo-lefort.jpg`, quote: "Merci pour tout! Vous êtes des boss! 🕺 J'hésite entre revenir en tant que participant ou venir en tant que bénévole si vous avez besoin d'aide!" },
  { name: 'Rémi Wetteren', role: 'Co-founder @ Coraye', img: `${CDN}/testimonials/remi-wetteren.jpg`, quote: "Vous êtes géniaux. SHIFT c'est mon exutoire récréatif (en plus d'être un tremplin technique et une formidable occasion de rencontrer des gens qui te ressemblent) !" },
  { name: 'Monica Gatti', role: 'Ingénieur Logiciel @ Kanoma', img: `${CDN}/testimonials/monica-gatti.jpeg`, quote: "Best event ever" },
  { name: 'Vincent Desdoigts', role: 'Co-founder / software engineer @ Premier Octet', img: `${CDN}/testimonials/vincent-desdoigts.jpg`, quote: "C'était vraiment très bien. Je suis venu les mains dans les poches, je suis reparti avec pleins de souvenirs et une troisième place." },
  { name: 'Mael Hillereau', role: 'Fondateur @ Alnitaka', img: `${CDN}/testimonials/mael-hillereau.jpg`, quote: "Aaaaaa Iiiiiiiiii !!! 😂 Trop bien, vous êtes au top 👌 Merci pour toute l'énergie que vous avez déployée pour l'orga !!" },
  { name: 'Vyacheslav Efimov', role: 'Senior ML Engineer | Data Science', img: `${CDN}/testimonials/vyacheslav-efimov.jpg`, quote: "C'était franchement le meilleur hackaton dans lequel j'ai participé dans ma vie. Tout était magnifique: l'ambiance, l'organisation, la nourriture, les présentation, les équipes… Un exemple parfait pour bien organiser les événements." },
  { name: 'Paul Tran Van', role: 'AI Lead @Linagora', img: `${CDN}/testimonials/paul-tran-van.jpg`, quote: "Un des évènement les plus quali que j'ai pu voir en terme d'orga, c'était vraiment très très bien, on sent l'implication et la qualité humaine des orgas, bravo à vous !!!" },
  { name: 'Anaïs Clavier', role: 'HR | Product Enthusiast', img: `${CDN}/testimonials/anais-clavier.jpg`, quote: "Franchement, j'ai trouvé que tout était super ! les repas (format hyper adapté en fonction du timing), les infos, le cadrage, l'orga, le lieu (🤩), les coachs, les conférenciers. merci à vous d'avoir rendu tout ça possible !" },
  { name: 'Julien Brunot', role: 'Art Director - Content creator Freelance', img: `${CDN}/testimonials/julien-brunot.jpg`, quote: "je n'ai pas pu ramener de potes car ils se sont tous démotivé quand je leur ai dit que c'était à Nantes. Mais maintenant ils se mordent les doigts de ne pas être venus. Vous avez fait du boulot magnifique, on vous aime. Bisous" },
  { name: 'Anne Bluteau', role: 'CEO @ Sweet Show', img: `${CDN}/testimonials/anne-bluteau.jpg`, quote: "Bravo. Et un spécial Bravo à Maxime qui passe la main et qui excelle dans la réussite de ce type d'évent. Gardez bien le PIERRE FEUILLE CISEAU du début. Je pense que le ton est donné précisément à ce moment là.... ❤️😍😊" },
  { name: 'Erwan Bourrigault', role: 'Développeur web', img: `${CDN}/testimonials/erwan-bourrigault.jpeg`, quote: "Le monde de la tech, c'est que du bonheur, ne changez rien, continuons de partager. Longue vie aux open sources !" },
  { name: 'Marius Pain', role: 'Étudiant @ Épitech', img: `${CDN}/testimonials/marius-pain.jpeg`, quote: "Un grand merci à toute l'équipe pour cette superbe expérience" },
  { name: 'Adrien Berthélémé', role: 'Data Scientist Freelance', img: `${CDN}/testimonials/adrien-bertheleme.jpeg`, quote: "C'était trop bien, vivement la deuxième édition :)" },
  { name: 'François-Régis Jaunatre', role: 'SECollab | Java | Angular | Rest | OSLC', img: `${CDN}/testimonials/francois-regis-jaunatre.jpg`, quote: "Love à toute l'équipe d'organisateurs et de bénévoles qui a été incroyable tout le WE." },
  { name: 'Nassim Gza', role: "Productivité grâce à l'IA et l'automatisation", img: `${CDN}/testimonials/nassim-gza.jpg`, quote: "Déjà dit en live à la plupart d'entre vous. Je suis épaté de la qualité de ce que vous proposez. J'ai du mal à voir comment améliorer le format... Énorme merci pour m'avoir fait vivre cette expérience avec autant de plaisir." },
  { name: 'Célestine Dagnaud', role: 'UX/UI Designer', img: `${CDN}/testimonials/celestine-dagnaud.jpg`, quote: "Trop bonne organisation avec des animateurs et des bénévoles qui déchirent ! Les gens du staff mettent vite tout le monde à l'aise même quand on est un peu timide :)" },
  { name: 'Bertyn Boulikou', role: 'Développeur web fullstack Vuejs & Laravel freelance', img: `${CDN}/testimonials/bertyn-boulikou.jpg`, quote: "Deuxième édition pour moi et c'est toujours autant un plaisir. Plein de superbe rencontre et de moment drôle. Merci encore à l'équipe pour tout" },
];

export const ORGA_TEAM = [
  {
    name: 'Maxime Pitussi',
    roles: ['Growth Outbound Freelance', 'Meetup Gen AI Nantes Organiser'],
    img: `${CDN}/team/maxime-pitussi.png`,
  },
  {
    name: 'Samuel Berthe',
    roles: ['Augmented CTO', 'Meetup Gen AI Nantes Organiser'],
    img: `${CDN}/team/samuel-berthe.jpg`,
  },
  {
    name: 'Florence Poyvre',
    roles: ['Associée @ Fly the Nest Nantes'],
    img: `${CDN}/team/florence-poyvre.jpeg`,
  },
  {
    name: 'Simon Timssale',
    roles: ['Consultant IA & fondateur @ ExploreTheVault'],
    img: `${CDN}/team/simon-timssale.jpeg`,
  },
  {
    name: 'Jaafar Steiblen-Raji',
    roles: ['Founder @ Les Grandes Épopées'],
    img: `${CDN}/team/jaafar-steiblen-raji.jpeg`,
  },
  {
    name: 'Pierre Rondeau',
    roles: ['Integrateur Gen AI Builder No Code', 'Expert N8N'],
    img: `${CDN}/team/pierre-rondeau.png`,
  },
];
