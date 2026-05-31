import Reveal from '../Reveal';
import { SPEAKERS } from '../../data/site';

const AGRANDIR = "'Agrandir Grand Heavy', sans-serif";
const DELA = "'Dela Gothic One', sans-serif";
const OXANIUM = 'Oxanium, sans-serif';

export default function SpeakersPreview() {
  const preview = SPEAKERS.slice(0, 6);
  return (
    <section style={{ padding: '5rem 2rem', background: '#000' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <h2
            style={{
              fontFamily: AGRANDIR,
              fontSize: '1.875rem',
              fontWeight: 800,
              color: '#fff',
              textAlign: 'center',
              marginBottom: '3rem',
            }}
          >
            Ils seront présents en 2026
          </h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem' }}>
          {preview.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.07}>
              <div>
                <img
                  src={s.img}
                  alt={s.name}
                  style={{
                    width: '100%',
                    aspectRatio: '1',
                    objectFit: 'cover',
                    borderRadius: '4px',
                    marginBottom: '1rem',
                    display: 'block',
                  }}
                />
                <h6
                  style={{
                    fontFamily: DELA,
                    fontWeight: 400,
                    color: '#fff',
                    fontSize: '1.25rem',
                    margin: '0 0 0.25rem',
                    lineHeight: 1.15,
                  }}
                >
                  {s.name}
                </h6>
                {s.roles.map((r) => (
                  <p
                    key={r}
                    style={{
                      fontFamily: OXANIUM,
                      color: 'rgba(255,255,255,0.5)',
                      fontSize: '0.78rem',
                      margin: '0.1rem 0 0',
                      lineHeight: 1.4,
                    }}
                  >
                    {r}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.4}>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a
              href="/intervenants-2026"
              style={{
                display: 'inline-block',
                fontFamily: DELA,
                fontSize: '1.375rem',
                color: '#9ff839',
                textDecoration: 'none',
                letterSpacing: '0.01em',
              }}
            >
              Voir tous les intervenants →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
