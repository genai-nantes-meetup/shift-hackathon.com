import Reveal from '../Reveal';
import { PARTNERS } from '../../data/site';

export default function Partners() {
  return (
    <section style={{ padding: '64px 32px', background: 'transparent' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <h2 style={{
            fontFamily: "'Agrandir Grand Heavy', sans-serif",
            fontSize: '30px',
            fontWeight: 800,
            color: '#fff',
            textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: '2.5rem',
            letterSpacing: '-0.3px',
          }}>
            Partenaires 2026
          </h2>
        </Reveal>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', justifyContent: 'center', alignItems: 'center' }}>
          {PARTNERS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.04}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                title={p.name}
                style={{ display: 'flex', alignItems: 'center', opacity: 0.55, transition: 'opacity 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.55')}
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  style={{ height: 44, width: 'auto', maxWidth: 160, objectFit: 'contain', filter: 'brightness(1.1) contrast(0.9)' }}
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
