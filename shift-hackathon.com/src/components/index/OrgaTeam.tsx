import Reveal from '../Reveal';
import { ORGA_TEAM } from '../../data/site';

const AGRANDIR = "'Agrandir Grand Heavy', sans-serif";
const DELA = "'Dela Gothic One', sans-serif";
const OXANIUM = 'Oxanium, sans-serif';

export default function OrgaTeam() {
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
            La team orga de choc
          </h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
          {ORGA_TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.07}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <img
                  src={m.img}
                  alt={m.name}
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
                    {m.name}
                  </h6>
                  {m.roles.map((r) => (
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
      </div>
    </section>
  );
}
