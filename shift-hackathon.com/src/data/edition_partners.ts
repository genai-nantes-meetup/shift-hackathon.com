import { ALL_COMPLICES } from './edition_complices';

// Partenaires mis en avant (avec lien), dans l'ordre d'affichage de la section « Partenaires ».
// Le logo n'est PAS redéclaré ici : il provient de `ALL_COMPLICES` (source unique), retrouvé par
// nom — un nom inconnu lève une erreur au build, garantissant que les deux listes restent cohérentes.
const PARTNER_LINKS: { name: string; url: string }[] = [
  { name: 'OpenAI', url: 'https://openai.com/' },
  { name: 'ElevenLabs', url: 'https://elevenlabs.io/' },
  { name: 'n8n', url: 'https://n8n.io/' },
  { name: 'Meilisearch', url: 'https://www.meilisearch.com/' },
  { name: 'Reecall', url: 'https://reecall.com/' },
  { name: 'Externatic', url: 'https://www.externatic.fr/' },
  { name: 'Clever Cloud', url: 'https://www.clever.cloud/fr/' },
  { name: 'Agoriade AI', url: 'https://www.agoriade.ai/' },
  { name: 'Kalicube', url: 'https://kalicube.com/' },
  { name: 'RCA', url: 'https://rca.fr/' },
  { name: 'Arzel', url: 'https://www.arzelmanagement.com/' },
  { name: 'Ici Lundi', url: 'https://icilundi.fr/' },
  { name: 'La Cantine', url: 'https://www.lacantine.co/' },
  { name: 'dev.events', url: 'https://dev.events/' },
];

const logoOf = (name: string): string => {
  const complice = ALL_COMPLICES.find((c) => c.name === name);
  if (!complice)
    throw new Error(`Partenaire « ${name} » absent de ALL_COMPLICES (edition_complices.ts)`);
  return complice.logo;
};

export const PARTNERS = PARTNER_LINKS.map(({ name, url }) => ({
  name,
  logo: logoOf(name),
  url,
}));
