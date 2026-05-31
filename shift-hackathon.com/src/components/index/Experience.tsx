import Reveal from '../Reveal';

const CDN = 'https://framerusercontent.com/images';
const AGRANDIR = "'Agrandir Grand Heavy', sans-serif";
const OXANIUM = 'Oxanium, sans-serif';

const PHOTOS = [
  { src: `${CDN}/OIZRhOSUxhsy9yPligk2tSs1po.jpg`, alt: 'Speaker session' },
  { src: `${CDN}/THrFvx3h9HQZm3DxRql29ftQ5Y.jpg`, alt: 'Group discussion' },
  { src: `${CDN}/1MilzwluR4WPySgY1Nc71NA7z10.jpg`, alt: 'Conférence' },
  { src: `${CDN}/cq8ZzypnQ3B7cnq3vSe9YqtKZkc.jpeg`, alt: 'Speaker' },
];

const PARAGRAPHS = [
  "Shift, c'est LE hackathon Gen AI de la place nantaise. Après 2 éditions hautes en couleur, nous revenons sous le pavillon noir : à cette édition 2026, tu vas te RÉ-GA-LER.",
  "Le concept : hacker ton outil préféré. Il lui manque une fonctionnalité clé ? Viens proposer ton hack pour développer la feature qui te ferait kiffer !",
  "Shift, c'est 48H de pure prod pour créer des produits Gen AI à en faire rougir les techos de la Silicon Valley. On te fournit tout : le cadre, les outils, et les conseils des meilleurs experts.",
];

export default function Experience() {
  return (
    <section style={{ padding: '5rem 2rem', background: '#050505' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <div>
          <Reveal>
            <h2 style={{ fontFamily: AGRANDIR, fontSize: '1.875rem', fontWeight: 800, color: '#fff', marginBottom: '2rem', lineHeight: 1.1 }}>
              Une expérience inédite
            </h2>
          </Reveal>
          {PARAGRAPHS.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontFamily: OXANIUM, fontSize: '1.125rem', lineHeight: 1.65, marginBottom: '1rem' }}>
                {p}
              </p>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <a
              href="/concept-2026"
              style={{
                display: 'inline-block',
                marginTop: '1rem',
                color: 'rgb(25,5,50)',
                background: '#9ff839',
                fontFamily: AGRANDIR,
                fontWeight: 400,
                fontSize: '0.875rem',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                padding: '0.6rem 1.4rem',
                borderRadius: '3px',
              }}
            >
              En savoir plus sur le concept
            </a>
          </Reveal>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          {PHOTOS.map((p, i) => (
            <Reveal key={p.src} delay={i * 0.08}>
              <img src={p.src} alt={p.alt} style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: '4px' }} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
