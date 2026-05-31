import Reveal from '../Reveal';

const TICKET_URL = 'https://www.billetweb.fr/shift-hackathon-2026';

const TIERS = [
  {
    name: 'FRIENDS',
    period: 'Dimanche soir',
    price: '5€',
    tagline: 'Pour venir encourager les copains',
    features: ['Accès au demo day le dimanche soir', 'Accès au cocktail et networking'],
    accent: '#2aebf5',
  },
  {
    name: 'MAKERS',
    period: 'Weekend complet',
    price: '79€',
    tagline: "Pour profiter en intégralité de l'expérience",
    features: ["Accès à l'expérience complète", 'Échanges avec les coachs, speakers et jurys', '7 repas traiteurs inclus', 'Boissons à volonté', 'Un T-Shirt exclusif', 'Networking, fun & rock & roll 🤘'],
    accent: '#fae01b',
    featured: true,
  },
  {
    name: 'ANGELS',
    period: 'Partenaires',
    price: 'Custom',
    tagline: 'Pour soutenir une initiative géniale',
    features: ["Visibilité auprès des makers de l'IA générative", "Occasion de sourcer de futurs talents", "Mettre le pied à l'étrier de vos collaborateurs"],
    accent: '#f75787',
  },
];

export default function Pricing() {
  return (
    <section style={{ padding: '5rem 2rem', background: '#050505' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <h2 style={{ fontFamily: 'Barlow, sans-serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, color: '#fff', textTransform: 'uppercase', textAlign: 'center', marginBottom: '0.5rem' }}>Participer</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontFamily: 'Barlow, sans-serif', marginBottom: '3rem' }}>On est impatients de voir si vous aurez le cran de nous rejoindre</p>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', alignItems: 'start' }}>
          {TIERS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div style={{
                background: t.featured ? 'rgba(250,224,27,0.05)' : 'rgba(255,255,255,0.02)',
                border: `2px solid ${t.featured ? t.accent : 'rgba(255,255,255,0.08)'}`,
                borderRadius: '4px', padding: '2rem',
                ...(t.featured ? { transform: 'scale(1.03)' } : {}),
              }}>
                <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.75rem', color: t.accent, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{t.period}</p>
                <h3 style={{ fontFamily: 'Barlow, sans-serif', fontSize: '1.5rem', fontWeight: 900, color: '#fff', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{t.name}</h3>
                <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '2.5rem', fontWeight: 900, color: t.accent, marginBottom: '0.5rem' }}>{t.price}</p>
                <p style={{ fontFamily: 'Barlow, sans-serif', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>{t.tagline}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem' }}>
                  {t.features.map((f) => (
                    <li key={f} style={{ fontFamily: 'Barlow, sans-serif', color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', padding: '0.3rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '0.5rem' }}>
                      <span style={{ color: t.accent }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href={TICKET_URL} target="_blank" rel="noopener noreferrer" style={{
                  display: 'block', textAlign: 'center',
                  background: t.featured ? t.accent : 'transparent',
                  color: t.featured ? '#000' : t.accent,
                  border: `2px solid ${t.accent}`,
                  padding: '0.75rem', fontFamily: 'Barlow, sans-serif',
                  fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none',
                  textTransform: 'uppercase', letterSpacing: '0.05em', borderRadius: '2px',
                }}>
                  Je suis chaud →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
