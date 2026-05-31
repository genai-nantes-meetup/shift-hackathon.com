import Reveal from '../Reveal';
import { TESTIMONIALS } from '../../data/site';

const AGRANDIR = "'Agrandir Grand Heavy', sans-serif";
const OXANIUM = 'Oxanium, sans-serif';

export default function Testimonials() {
  return (
    <section style={{ padding: '5rem 2rem', background: '#f5f5f5' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <h2
            style={{
              fontFamily: AGRANDIR,
              fontSize: '1.875rem',
              fontWeight: 800,
              color: '#000',
              textAlign: 'center',
              marginBottom: '3rem',
            }}
          >
            Témoignages
          </h2>
        </Reveal>
        <div style={{ columns: '3 260px', gap: '1rem' }}>
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.06}>
              <div
                style={{
                  breakInside: 'avoid',
                  background: '#fff',
                  borderRadius: '6px',
                  padding: '1.25rem',
                  marginBottom: '1rem',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                }}
              >
                <p
                  style={{
                    color: 'rgb(102,102,102)',
                    fontFamily: OXANIUM,
                    fontSize: '0.875rem',
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
                        color: 'rgb(51,51,51)',
                        fontSize: '0.85rem',
                        margin: 0,
                      }}
                    >
                      {t.name}
                    </p>
                    <p
                      style={{
                        fontFamily: OXANIUM,
                        color: 'rgb(120,120,120)',
                        fontSize: '0.72rem',
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
