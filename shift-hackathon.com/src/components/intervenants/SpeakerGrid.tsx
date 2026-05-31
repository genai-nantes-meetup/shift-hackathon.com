import Reveal from '../Reveal';
import { SPEAKERS } from '../../data/site';

export default function SpeakerGrid() {
  return (
    <section style={{ padding: '2rem 2rem 5rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
        {SPEAKERS.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.06}>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '2rem', textAlign: 'center' }}>
              <img
                src={s.img} alt={s.name}
                style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(247,87,135,0.4)', marginBottom: '1rem' }}
              />
              <h3 style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 900, color: '#fff', fontSize: '1rem', margin: '0 0 0.5rem', textTransform: 'uppercase' }}>{s.name}</h3>
              {s.roles.map((r) => (
                <p key={r} style={{ fontFamily: 'Barlow, sans-serif', color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem', margin: '0.1rem 0' }}>{r}</p>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
