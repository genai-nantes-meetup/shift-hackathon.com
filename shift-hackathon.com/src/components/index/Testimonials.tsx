import Reveal from '../Reveal';
import { TESTIMONIALS } from '../../data/site';

export default function Testimonials() {
  return (
    <section style={{ padding: '5rem 2rem', background: '#000' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <h2 style={{ fontFamily: 'Barlow, sans-serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, color: '#fff', textTransform: 'uppercase', textAlign: 'center', marginBottom: '3rem' }}>
            Témoignages
          </h2>
        </Reveal>
        <div style={{ columns: '3 280px', gap: '1rem' }}>
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.08}>
              <div style={{ breakInside: 'avoid', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '4px', padding: '1.25rem', marginBottom: '1rem' }}>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'Barlow, sans-serif', fontSize: '0.9rem', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1rem' }}>
                  "{t.quote}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <img src={t.img} alt={t.name} style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                  <div>
                    <p style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 700, color: '#fff', fontSize: '0.85rem', margin: 0 }}>{t.name}</p>
                    <p style={{ fontFamily: 'Barlow, sans-serif', color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', margin: 0 }}>{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
