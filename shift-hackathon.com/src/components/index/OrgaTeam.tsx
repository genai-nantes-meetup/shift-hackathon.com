import Reveal from '../Reveal';
import { ORGA_TEAM } from '../../data/site';

export default function OrgaTeam() {
  return (
    <section style={{ padding: '5rem 2rem', background: '#000' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <h2 style={{ fontFamily: "'Agrandir', 'Barlow', sans-serif", fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#fff', textTransform: 'uppercase', textAlign: 'center', marginBottom: '3rem' }}>
            La team <span style={{ color: '#9ff839' }}>orga</span> de choc
          </h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {ORGA_TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <div style={{ textAlign: 'center' }}>
                <img src={m.img} alt={m.name} style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(159,248,57,0.4)', marginBottom: '1rem' }} />
                <p style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 700, color: '#fff', fontSize: '1rem', margin: 0 }}>{m.name}</p>
                {m.roles.map((r) => (
                  <p key={r} style={{ fontFamily: 'Barlow, sans-serif', color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem', margin: '0.1rem 0 0' }}>{r}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
