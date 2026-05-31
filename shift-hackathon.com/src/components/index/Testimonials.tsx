import Reveal from '../Reveal';
import { TESTIMONIALS } from '../../data/site';

const AGRANDIR = "'Agrandir Grand Heavy', sans-serif";
const OXANIUM = 'Oxanium, sans-serif';

export default function Testimonials() {
  return (
    <section style={{ padding: '5rem 2rem', background: 'rgba(0,0,0,0)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <h2
            style={{
              fontFamily: AGRANDIR,
              fontSize: '1.875rem',
              fontWeight: 400,
              color: '#fff',
              marginBottom: '3rem',
            }}
          >
            Témoignages
          </h2>
        </Reveal>
        <div style={{ columns: '3 260px', gap: '30px' }}>
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.06}>
              <div
                style={{
                  breakInside: 'avoid',
                  background: 'rgba(0,0,0,0)',
                  borderRadius: '6px',
                  padding: '1.25rem',
                  marginBottom: '30px',
                }}
              >
                <p
                  style={{
                    color: 'rgb(255,255,255)',
                    fontFamily: OXANIUM,
                    fontSize: '18px',
                    lineHeight: 1.65,
                    fontStyle: 'italic',
                    marginBottom: '1rem',
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <img
                    src={t.img}
                    alt={t.name}
                    style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                  />
                  <div>
                    <p
                      style={{
                        fontFamily: AGRANDIR,
                        fontWeight: 400,
                        color: 'rgb(255,255,255)',
                        fontSize: '24px',
                        margin: 0,
                      }}
                    >
                      {t.name}
                    </p>
                    <p
                      style={{
                        fontFamily: OXANIUM,
                        color: 'rgb(255,255,255)',
                        fontSize: '18px',
                        margin: 0,
                      }}
                    >
                      {t.role}
                    </p>
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
