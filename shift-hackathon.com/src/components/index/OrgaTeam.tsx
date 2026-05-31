import Reveal from '../Reveal';
import { ORGA_TEAM } from '../../data/site';

export default function OrgaTeam() {
  return (
    <section style={{ padding: '5rem 2rem', background: '#000' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <h2 style={{ fontFamily: "'Agrandir Grand Heavy', sans-serif", fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#fff', textTransform: 'uppercase', marginBottom: '3rem' }}>
            La team orga de choc
          </h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {ORGA_TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <div style={{ textAlign: 'left' }}>
                <img src={m.img} alt={m.name} style={{ width: 100, height: 100, borderRadius: '12px', objectFit: 'cover', border: '2px solid rgba(159,248,57,0.4)', marginBottom: '1rem' }} />
                <p style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 700, color: '#fff', fontSize: '1.1rem', margin: 0 }}>{m.name}</p>
                {m.roles.map((r, ri) => (
                  <p key={r} style={ri === 0
                    ? { fontFamily: 'Barlow, sans-serif', fontWeight: 600, color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', margin: '0.3rem 0 0' }
                    : { fontFamily: 'Barlow, sans-serif', fontWeight: 400, color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem', margin: '0.15rem 0 0' }
                  }>{r}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
