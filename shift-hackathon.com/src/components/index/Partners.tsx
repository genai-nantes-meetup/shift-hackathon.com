import Reveal from '../Reveal';
import { PARTNERS } from '../../data/site';

const AGRANDIR = "'Agrandir Grand Heavy', sans-serif";

export default function Partners() {
  return (
    <section style={{ background: '#000', padding: '80px 30px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <Reveal>
          <h2
            style={{
              fontFamily: AGRANDIR,
              fontSize: '50px',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1,
              margin: '0 0 40px',
              textAlign: 'center',
            }}
          >
            Partenaires 2026
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '30px',
              alignItems: 'center',
              justifyItems: 'center',
            }}
          >
            {PARTNERS.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', opacity: 0.85 }}
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  loading="lazy"
                  style={{
                    height: 60,
                    width: 'auto',
                    maxWidth: 180,
                    objectFit: 'contain',
                    filter: 'brightness(0) invert(1)',
                  }}
                />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
