import Reveal from '../Reveal';
import { SPEAKERS } from '../../data/site';

export default function SpeakersPreview() {
  const preview = SPEAKERS.slice(0, 6);
  return (
    <section style={{ padding: '5rem 2rem', background: '#000' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <h2 style={{ fontFamily: "'Agrandir', 'Barlow', sans-serif", fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#fff', textTransform: 'uppercase', textAlign: 'center', marginBottom: '0.5rem' }}>
            Ils seront présents en 2026
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontFamily: 'Barlow, sans-serif', marginBottom: '3rem' }}>
            Des experts de la tech, de l'IA et du Product
          </p>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {preview.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.07}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <img src={s.img} alt={s.name} style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', flexShrink: 0, border: '2px solid rgba(42,235,245,0.3)' }} />
                <div>
                  <p style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 700, color: '#fff', fontSize: '0.95rem', margin: 0 }}>{s.name}</p>
                  {s.roles.map((r) => (
                    <p key={r} style={{ fontFamily: 'Barlow, sans-serif', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', margin: '0.1rem 0 0' }}>{r}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.4}>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="/intervenants-2026" style={{ display: 'inline-block', border: '2px solid #2aebf5', color: '#2aebf5', padding: '0.75rem 2rem', fontFamily: 'Barlow, sans-serif', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.05em', borderRadius: '2px' }}>
              Voir tous les intervenants →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
