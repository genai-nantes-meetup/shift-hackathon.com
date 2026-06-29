import type { ReactNode } from 'react';
import Reveal from '../Reveal';
import { EDITION } from '../../data/edition';

type Feature = { title: ReactNode; desc: string; img: string; alt: string };

const FEATURES: Feature[] = [
  {
    title: (
      <>
        Monte ou rejoins une <span style={{ color: EDITION.dominantColor }}>dream team</span>
      </>
    ),
    desc: "Dévoile ton concept à base d'IA Générative. Si tu es choisi, forge ta dream team et fais chauffer les claviers.",
    img: '/assets/images/features/feature-dream-team.webp',
    alt: 'Participants formant une équipe au hackathon Shift',
  },
  {
    title: (
      <>
        <span style={{ color: EDITION.dominantColor }}>Code</span> même la nuit
      </>
    ),
    desc: "Défi lancé, t'as deux jours pour faire trembler la tech ! Ton pack de survie est prêt pour un samedi soir épique. Prêt à entrer dans la légende ? 😉",
    img: '/assets/images/features/feature-code-night.webp',
    alt: 'Développeurs codant la nuit pendant le hackathon',
  },
  {
    title: 'Itère à fond sur ton produit avec des user tests',
    desc: 'Voici le deal : on te dégote une bande de fous furieux prêts à maltraiter ton produit pour que tu restes 100% focus sur ton code. Mais prépares-en une de ton côté également, juste au cas où.',
    img: '/assets/images/features/feature-user-tests.webp',
    alt: 'Session de user tests sur un produit au hackathon Shift',
  },
  {
    title: 'Accède à des masterclass exclusives',
    desc: 'Choppe ces méthodes toutes fraîches, injecte-les dans ton projet et secoue ta boîte avec dès lundi matin.',
    img: '/assets/images/features/feature-masterclass.webp',
    alt: 'Masterclass exclusive au hackathon Shift',
  },
  {
    title: (
      <>
        Fais toi coacher par des <span style={{ color: EDITION.dominantColor }}>experts</span>
      </>
    ),
    desc: "Besoin d'un boost ? Les ninjas de la Tech, de l'IA et du Product sont là pour catapulter ton projet dans la stratosphère !",
    img: '/assets/images/features/feature-coaching.webp',
    alt: 'Coaching par des experts tech, IA et product',
  },
  {
    title: (
      <>
        Network avec des gens <span style={{ color: EDITION.dominantColor }}>brillants</span>
      </>
    ),
    desc: "Tu t'apprêtes à lier des amitiés explosives et à mettre le turbo sur ta carrière. Allez, montre à cet univers tech qui est le boss!",
    img: '/assets/images/features/feature-networking.webp',
    alt: 'Session de networking entre participants du hackathon',
  },
  {
    title: 'Déguste 7 repas préparés avec amour',
    desc: 'Ne laisse pas un ventre vide te hacker le cerveau! Avec ton billet, enchaine 7 festins et code sans limite.',
    img: '/assets/images/features/feature-meals.webp',
    alt: 'Repas partagé pendant le hackathon Shift',
  },
  {
    title: 'Fais péter la démo devant un jury canon',
    desc: "Lance-toi, épate la crème des experts et arrache ta place au sommet de Shift, l'arène qui bouscule l'univers tech !",
    img: '/assets/images/features/feature-demo.webp',
    alt: 'Démonstration de projet devant le jury du hackathon',
  },
];

export default function Features() {
  return (
    <section style={{ padding: '100px 0', background: 'rgb(0, 0, 0)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {FEATURES.map((f, i) => {
          const isEven = i % 2 === 0;
          return (
            <Reveal key={i} delay={0.05}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: isEven ? 'row' : 'row-reverse',
                  minHeight: 383,
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {/* Image */}
                <div style={{ flexShrink: 0, width: 544, overflow: 'hidden' }}>
                  <img
                    src={f.img}
                    alt={f.alt}
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: '544px',
                      maxWidth: '100%',
                      display: 'block',
                      objectFit: 'cover',
                      height: '100%',
                      borderRadius: '6px',
                      boxShadow: 'rgba(0, 0, 0, 0.5) 0px 20px 60px 0px',
                    }}
                  />
                </div>
                {/* Text */}
                <div
                  style={{
                    flex: 1,
                    padding: '3rem 3.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "'Agrandir Grand Heavy', sans-serif",
                      fontWeight: 800,
                      color: '#fff',
                      fontSize: '40px',
                      width: '544px',
                      margin: '0 0 1rem',
                      lineHeight: '44px',
                    }}
                  >
                    {f.title}
                  </h2>
                  <p
                    style={{
                      color: 'rgb(255, 255, 255)',
                      fontFamily: 'Oxanium, sans-serif',
                      fontSize: '18px',
                      fontWeight: 400,
                      lineHeight: '27.9px',
                      margin: 0,
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
