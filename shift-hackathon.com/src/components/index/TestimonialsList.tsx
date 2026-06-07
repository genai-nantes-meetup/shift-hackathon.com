import Reveal from '../Reveal';
import { TESTIMONIALS } from '../../data/site';

const AGRANDIR = "'Agrandir Grand Heavy', sans-serif";
const OXANIUM = 'Oxanium, sans-serif';
const DELA = "'Dela Gothic One', sans-serif";

export default function TestimonialsList() {
  return (
    <section style={{ background: '#000', padding: '80px 30px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
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
            Témoignages
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            style={{
              columnCount: 3,
              columnGap: '20px',
            }}
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                style={{
                  breakInside: 'avoid',
                  background: '#fff',
                  color: '#190532',
                  borderRadius: '8px',
                  padding: '20px',
                  marginBottom: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <img
                    src={t.img}
                    alt={t.name}
                    loading="lazy"
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <p style={{ fontFamily: DELA, fontSize: '14px', margin: 0, lineHeight: 1.2 }}>
                      {t.name}
                    </p>
                    <p
                      style={{
                        fontFamily: OXANIUM,
                        fontSize: '12px',
                        margin: 0,
                        color: 'rgba(25,5,50,0.6)',
                      }}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>
                <p
                  style={{
                    fontFamily: OXANIUM,
                    fontSize: '14px',
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {t.quote}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
