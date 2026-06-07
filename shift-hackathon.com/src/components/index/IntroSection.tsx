import Reveal from '../Reveal';

const AGRANDIR = "'Agrandir Grand Heavy', sans-serif";
const OXANIUM = 'Oxanium, sans-serif';

const PARAGRAPHS = [
  "Shift, c'est LE hackathon Gen AI de la place nantaise. Après 2 éditions hautes en couleur, nous revenons sous le pavillon noir : toi, l'iconoclastic hacker, toi le designer alchemist, ou toi le product shaper, à cette édition 2026, tu vas te RÉ-GA-LER.",
  "Le concept de cette année, ça va être de hacker ton outil préféré. Tu le trouves cool mais il ne répond pas exactement à ton usage parce qu'il lui manque une fonctionnalité clé ou parce que tu n'en es pas vraiment le “user type” ? Viens proposer ton hack pour développer la feature qui te ferait kiffer !",
  "Shift, c'est 48H de pure prod pour créer des produits Gen AI à en faire rougir les techos de la Silicon Valley.",
  "On te fournit tout : le cadre, les outils, et les conseils des meilleurs experts de la tech et de la Gen AI.",
  "Prêt à faire tomber les barrières ? Inscris-toi et embarque pour une aventure inoubliable !",
];

const MOSAIC = [
  { src: '/assets/images/OIZRhOSUxhsy9yPligk2tSs1po.jpg', alt: 'Speaker session' },
  { src: '/assets/images/THrFvx3h9HQZm3DxRql29ftQ5Y.jpg', alt: 'Group discussion' },
  { src: '/assets/images/NmsuCE1ygqeOArGamS3TUXcMabo.jpg', alt: 'Speaker' },
  { src: '/assets/images/RJ84OukkCBEpErHTshc2s2G5Ug4.jpg', alt: 'Meeting' },
];

export default function IntroSection() {
  return (
    <section style={{ background: '#000', padding: '80px 30px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
              marginBottom: '60px',
            }}
          >
            {MOSAIC.map((m) => (
              <img
                key={m.src}
                src={m.src}
                alt={m.alt}
                loading="lazy"
                style={{
                  width: '100%',
                  aspectRatio: '419 / 279',
                  objectFit: 'cover',
                  borderRadius: '4px',
                  display: 'block',
                }}
              />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            style={{
              fontFamily: AGRANDIR,
              fontSize: '50px',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1,
              margin: '0 0 30px',
            }}
          >
            Une expérience inédite
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              maxWidth: 880,
              marginBottom: '32px',
            }}
          >
            {PARAGRAPHS.map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: OXANIUM,
                  fontSize: '16px',
                  color: 'rgba(255,255,255,0.85)',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <a
            href="/concept-2026"
            style={{
              display: 'inline-block',
              background: 'rgb(159,248,57)',
              color: 'rgb(25,5,50)',
              padding: '11.2px 28px',
              fontFamily: AGRANDIR,
              fontSize: '12px',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.48px',
              borderRadius: '4px',
              boxShadow: 'rgba(159,248,57,0.5) 0px 5px 0px 0px',
            }}
          >
            En savoir plus sur le concept
          </a>
        </Reveal>
      </div>
    </section>
  );
}
