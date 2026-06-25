import type { ReactNode } from 'react';
import Reveal from '../Reveal';
import { CDN } from '../../data/site';

type Feature = { title: ReactNode; desc: string; img: string };

const FEATURES: Feature[] = [
  {
    title: (
      <>
        Monte ou rejoins une <span style={{ color: 'rgb(159, 248, 57)' }}>dream team</span>
      </>
    ),
    desc: "Dévoile ton concept à base d'IA Générative. Si tu es choisi, forge ta dream team et fais chauffer les claviers.",
    img: `${CDN}/jeSMOnElSkaQ2mtTpAj8hEBc.png`,
  },
  {
    title: (
      <>
        <span style={{ color: 'rgb(159, 248, 57)' }}>Code</span> même la nuit
      </>
    ),
    desc: "Défi lancé, t'as deux jours pour faire trembler la tech ! Ton pack de survie est prêt pour un samedi soir épique. Prêt à entrer dans la légende ? 😉",
    img: `${CDN}/Jiw5jmjl5bkZOcRTjhZozWVqkag.png`,
  },
  {
    title: 'Itère à fond sur ton produit avec des user tests',
    desc: 'Voici le deal : on te dégote une bande de fous furieux prêts à maltraiter ton produit pour que tu restes 100% focus sur ton code. Mais prépares-en une de ton côté également, juste au cas où.',
    img: `${CDN}/FIv08CwEEV86fdOiJJDRE18EggA.png`,
  },
  {
    title: 'Accède à des masterclass exclusives',
    desc: 'Choppe ces méthodes toutes fraîches, injecte-les dans ton projet et secoue ta boîte avec dès lundi matin.',
    img: `${CDN}/e0qRnLkp6ZzXmC6IzKZpNaCI.png`,
  },
  {
    title: (
      <>
        Fais toi coacher par des <span style={{ color: 'rgb(159, 248, 57)' }}>experts</span>
      </>
    ),
    desc: "Besoin d'un boost ? Les ninjas de la Tech, de l'IA et du Product sont là pour catapulter ton projet dans la stratosphère !",
    img: `${CDN}/c7xay2RuvE2cpbyqmrtHBUEOg8U.png`,
  },
  {
    title: (
      <>
        Network avec des gens <span style={{ color: 'rgb(159, 248, 57)' }}>brillants</span>
      </>
    ),
    desc: "Tu t'apprêtes à lier des amitiés explosives et à mettre le turbo sur ta carrière. Allez, montre à cet univers tech qui est le boss!",
    img: `${CDN}/TqmlbPEltzwxviVMUZaLht8j4y4.png`,
  },
  {
    title: 'Déguste 7 repas préparés avec amour',
    desc: 'Ne laisse pas un ventre vide te hacker le cerveau! Avec ton billet, enchaine 7 festins et code sans limite.',
    img: `${CDN}/dHlDhUao0KWx2OMBpDbJMXLUAU8.png`,
  },
  {
    title: 'Fais péter la démo devant un jury canon',
    desc: "Lance-toi, épate la crème des experts et arrache ta place au sommet de Shift, l'arène qui bouscule l'univers tech !",
    img: `${CDN}/dRKLyFcQn1nMAcgsUMGuKEszs.jpg`,
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
                    alt=""
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
                  <h4
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
                  </h4>
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
