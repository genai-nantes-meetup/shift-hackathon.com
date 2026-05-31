import Reveal from '../Reveal';
import { TESTIMONIALS } from '../../data/site';

const AGRANDIR = "'Agrandir Grand Heavy', sans-serif";
const OXANIUM = 'Oxanium, sans-serif';

export default function Testimonials() {
  return (
    <section style={{ padding: '80px 32px', background: '#080808' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <h2
            style={{
              fontFamily: AGRANDIR,
              fontSize: '50px',
              fontWeight: 800,
              color: 'rgb(255,255,255)',
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
                  background: '#fff',
                  borderRadius: '6px',
                  padding: '1.25rem',
                  marginBottom: '30px',
                }}
              >
                <p
                  style={{
                    color: 'rgb(102,102,102)',
                    fontFamily: OXANIUM,
                    fontSize: '16px',
                    fontWeight: 500,
                    lineHeight: 1.65,
                    marginBottom: '16px',
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
                        fontSize: '16px',
                        letterSpacing: '-0.8px',
                        margin: 0,
                      }}
                    >
                      {t.name}
                    </p>
                    <p
                      style={{
                        fontFamily: OXANIUM,
                        color: 'rgb(153,153,153)',
                        fontSize: '14px',
                        letterSpacing: '-0.7px',
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
