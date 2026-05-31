import type { ReactNode } from 'react';
import Reveal from '../Reveal';

const CDN = 'https://framerusercontent.com/images';

type Feature = { title: ReactNode; desc: string; img: string };

const FEATURES: Feature[] = [
  { title: <>Monte ou rejoins une <span style={{ color: 'rgb(159, 248, 57)' }}>dream team</span></>, desc: "Dévoile ton concept à base d'IA Générative. Si tu es choisi, forge ta dream team et fais chauffer les claviers.", img: `${CDN}/jeSMOnElSkaQ2mtTpAj8hEBc.png` },
  { title: <><span style={{ color: 'rgb(159, 248, 57)' }}>Code</span> même la nuit</>, desc: "T'as deux jours pour faire trembler la tech ! Ton pack de survie est prêt pour un samedi soir épique.", img: `${CDN}/Jiw5jmjl5bkZOcRTjhZozWVqkag.png` },
  { title: 'Itère à fond sur ton produit avec des user tests', desc: 'Deux rounds de battle avec les utilisateurs au programme — reste 100% focus sur ton code.', img: `${CDN}/FIv08CwEEV86fdOiJJDRE18EggA.png` },
  { title: 'Accède à des masterclass exclusives', desc: 'Choppe ces méthodes toutes fraîches et injecte-les dans ton projet dès lundi matin.', img: `${CDN}/e0qRnLkp6ZzXmC6IzKZpNaCI.png` },
  { title: <>Fais toi coacher par des <span style={{ color: 'rgb(159, 248, 57)' }}>experts</span></>, desc: "Les ninjas de la Tech, de l'IA et du Product catapultent ton projet dans la stratosphère !", img: `${CDN}/c7xay2RuvE2cpbyqmrtHBUEOg8U.png` },
  { title: <>Network avec des gens <span style={{ color: 'rgb(159, 248, 57)' }}>brillants</span></>, desc: "Tu t'apprêtes à lier des amitiés explosives et à mettre le turbo sur ta carrière.", img: `${CDN}/TqmlbPEltzwxviVMUZaLht8j4y4.png` },
  { title: 'Déguste 7 repas préparés avec amour', desc: "Avec ton billet, enchaîne 7 festins et code sans limite. Ne laisse pas un ventre vide te hacker le cerveau.", img: `${CDN}/dHlDhUao0KWx2OMBpDbJMXLUAU8.png` },
  { title: 'Fais péter la démo devant un jury canon', desc: "Lance-toi, épate la crème des experts et arrache ta place au sommet de Shift.", img: `${CDN}/dRKLyFcQn1nMAcgsUMGuKEszs.jpg` },
];

export default function Features() {
  return (
    <section style={{ padding: '2rem 0 4rem', background: '#000' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {FEATURES.map((f, i) => {
          const isEven = i % 2 === 0;
          return (
            <Reveal key={i} delay={0.05}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 0,
                minHeight: 320,
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                direction: isEven ? 'ltr' : 'rtl',
              }}>
                {/* Image */}
                <div style={{ overflow: 'hidden', direction: 'ltr' }}>
                  <img
                    src={f.img}
                    alt=""
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                {/* Text */}
                <div style={{ padding: '3rem 3.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', direction: 'ltr', background: '#000' }}>
                  <h3 style={{
                    fontFamily: "'Agrandir Grand Heavy', sans-serif",
                    fontWeight: 800,
                    color: '#fff',
                    fontSize: '40px',
                    textTransform: 'uppercase',
                    margin: '0 0 1rem',
                    lineHeight: 1.15,
                  }}>
                    {f.title}
                  </h3>
                  <p style={{ color: 'rgb(255, 255, 255)', fontFamily: 'Oxanium, sans-serif', fontSize: '15px', fontWeight: 400, lineHeight: '23.25px', margin: 0 }}>
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
