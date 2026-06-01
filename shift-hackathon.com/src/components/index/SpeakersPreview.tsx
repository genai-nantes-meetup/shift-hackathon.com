import Reveal from '../Reveal';
import { SPEAKERS } from '../../data/site';

const AGRANDIR = "'Agrandir Grand Heavy', sans-serif";
const DELA = "'Dela Gothic One', sans-serif";
const OXANIUM = 'Oxanium, sans-serif';

export default function SpeakersPreview() {
  const preview = SPEAKERS.slice(0, 6);
  return (
    <section style={{ background: '#000', display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          width: '1240px',
          maxWidth: '1240px',
          padding: '73px 120px 102px',
          display: 'flex',
          flexDirection: 'column',
          gap: '60px',
        }}
      >
        <Reveal>
          <h2
            style={{
              fontFamily: AGRANDIR,
              fontSize: '50px',
              fontWeight: 800,
              lineHeight: '50px',
              color: '#fff',
            }}
          >
            Ils seront présents en 2026
          </h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
          {preview.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.07}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <img
                  src={s.img}
                  alt={s.name}
                  style={{
                    width: '100%',
                    aspectRatio: '314 / 310',
                    objectFit: 'cover',
                    borderRadius: '4px',
                    display: 'block',
                  }}
                />
                <div>
                  <h6
                    style={{
                      fontFamily: DELA,
                      fontWeight: 400,
                      color: '#fff',
                      fontSize: '24px',
                      margin: '0',
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
                        color: '#fff',
                        fontSize: '18px',
                        margin: '0',
                        lineHeight: 1.4,
                      }}
                    >
                      {r}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.4}>
          <div style={{ textAlign: 'center' }}>
            <a
              href="/intervenants-2026"
              style={{
                display: 'inline-block',
                fontFamily: AGRANDIR,
                fontSize: '12px',
                color: 'rgb(25, 5, 50)',
                backgroundColor: '#9ff839',
                textDecoration: 'none',
                letterSpacing: '0.48px',
                textTransform: 'uppercase',
                borderRadius: '4px',
                boxShadow: 'rgba(159, 248, 57, 0.5) 0px 5px 0px 0px',
                padding: '11.2px 28px',
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
