import Reveal from '../Reveal';

const CDN = 'https://framerusercontent.com/images';

const PHOTOS = [
  { src: `${CDN}/OIZRhOSUxhsy9yPligk2tSs1po.jpg`, alt: 'Speaker session' },
  { src: `${CDN}/THrFvx3h9HQZm3DxRql29ftQ5Y.jpg`, alt: 'Group discussion' },
  { src: `${CDN}/1MilzwluR4WPySgY1Nc71NA7z10.jpg`, alt: 'Conférence' },
  { src: `${CDN}/cq8ZzypnQ3B7cnq3vSe9YqtKZkc.jpeg`, alt: 'Speaker' },
];

const PARAGRAPHS = [
  "Shift, c'est LE hackathon Gen AI de la place nantaise. Après 2 éditions hautes en couleur, nous revenons sous le pavillon noir : à cette édition 2026, tu vas te RÉ-GA-LER.",
  "Le concept : hacker ton outil préféré. Il lui manque une fonctionnalité clé ? Viens proposer ton hack pour développer la feature qui te ferait kiffer !",
  "Shift, c'est 48H de pure prod pour créer des produits Gen AI à en faire rougir les techos de la Silicon Valley. On te fournit tout : le cadre, les outils, et les conseils des meilleurs experts de la tech et de la Gen AI.",
];

export default function Experience() {
  return (
    <section style={{ padding: '5rem 2rem', background: '#050505' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <div>
          <Reveal>
            <h2 style={{ fontFamily: "'Agrandir', 'Barlow', sans-serif", fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#fff', textTransform: 'uppercase', marginBottom: '2rem', lineHeight: 1.1 }}>
              Une expérience <span style={{ color: '#2aebf5' }}>inédite</span>
            </h2>
          </Reveal>
          {PARAGRAPHS.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'Barlow, sans-serif', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <a href="/concept-2026" style={{ display: 'inline-block', marginTop: '1rem', color: '#2aebf5', fontFamily: 'Barlow, sans-serif', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '2px solid #2aebf5', paddingBottom: '2px' }}>
              En savoir plus sur le concept →
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
