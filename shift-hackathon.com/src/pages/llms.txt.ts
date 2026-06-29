// Dynamic endpoint → /llms.txt (llmstxt.org format).
// All content is derived from the data (`edition.ts`, `site.ts`, pricing, speakers, faq)
// to stay in sync with the site — never hardcode anything here.
import type { APIRoute } from 'astro';
import { canonicalFor, PAGE_META, DEFAULT_META_DESCRIPTION } from '../data/site';
import { EDITION, JE_SUIS_CHAUD_URL, VENUE } from '../data/edition';
import { PRICING_TIERS } from '../data/edition_pricing';
import { SPEAKERS } from '../data/edition_speakers';
import { FAQ_ITEMS } from '../data/faq';
import { speakerSlug } from '../lib/seo';

export const prerender = true;

const venueLine = [
  VENUE.name,
  VENUE.streetAddress,
  `${VENUE.postalCode} ${VENUE.addressLocality}`.trim(),
]
  .filter(Boolean)
  .join(', ');

const tierLine = (tier: (typeof PRICING_TIERS)[number]): string => {
  const features = tier.features.map((f) => `${f.text}${f.bold}${f.rest}`.trim()).join(' ; ');
  return `- ${tier.name} — ${tier.price} (${tier.period}) : ${tier.tagline}. ${features}`;
};

const pages = [PAGE_META.index, PAGE_META.concept, PAGE_META.agenda, PAGE_META.intervenants];

export const GET: APIRoute = () => {
  const body = `# Shift — Le Hackathon Gen AI

> ${DEFAULT_META_DESCRIPTION} ${EDITION.dateRangeLong}, à ${venueLine}.

## Infos pratiques
- Dates : ${EDITION.dateRangeLong}
- Lieu : ${venueLine}
- Public visé : développeurs, designers et product lovers
- Concept : ${PAGE_META.concept.description}
- Contact : ${EDITION.contactEmail}

## Tarifs
${PRICING_TIERS.map(tierLine).join('\n')}

## Pages
${pages.map((p) => `- ${p.title} : ${canonicalFor(p.path)}`).join('\n')}

## Intervenants
${SPEAKERS.map((s) => `- ${s.name} (${s.roles.join(', ')}) : ${canonicalFor(`/intervenants/${speakerSlug(s)}`)}`).join('\n')}

## FAQ
${FAQ_ITEMS.map((item) => `### ${item.question}\n${item.answer}`).join('\n\n')}

## Inscription
- ${JE_SUIS_CHAUD_URL}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
