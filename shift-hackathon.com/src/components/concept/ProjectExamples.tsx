import Reveal from '../Reveal';
import { SPEAKERS } from '../../data/site';

const PREVIEW = SPEAKERS.slice(0, 3);

export default function ProjectExamples() {
  return (
    <section style={{ padding: '80px 32px', background: '#000' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <h2
            style={{
              fontFamily: '"Agrandir Grand Heavy", sans-serif',
              fontSize: '50px',
              fontWeight: 800,
              lineHeight: '75px',
              color: '#fff',
              marginBottom: '32px',
            }}
          >
            Ils seront présents en 2026
          </h2>
        </Reveal>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
          }}
        >
          {PREVIEW.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.1}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <img
                  src={s.img}
                  alt={s.name}
                  style={{
                    width: '100%',
                    aspectRatio: '1 / 1',
                    objectFit: 'cover',
                    borderRadius: '4px',
                    display: 'block',
                  }}
                />
                <h4
                  style={{
                    fontFamily: '"Agrandir Grand Heavy", sans-serif',
                    fontSize: '40px',
                    fontWeight: 400,
                    lineHeight: '44px',
                    color: '#fff',
                    margin: 0,
                  }}
                >
                  {s.name}
                </h4>
                <div>
                  {s.roles.map((r) => (
                    <p
                      key={r}
                      style={{
                        fontFamily: 'Oxanium, sans-serif',
                        fontSize: '18px',
                        fontWeight: 400,
                        lineHeight: '27px',
                        color: '#fff',
                        margin: 0,
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
      </div>
    </section>
  );
}
