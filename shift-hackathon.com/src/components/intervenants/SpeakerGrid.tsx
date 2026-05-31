import { SPEAKERS } from '../../data/site';

export default function SpeakerGrid() {
  return (
    <section style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: '100px 0px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '100px', maxWidth: '1000px', width: '100%' }}>
        {SPEAKERS.map((s) => (
          <div key={s.name} style={{ display: 'flex', flexDirection: 'row', gap: '80px', width: '1000px' }}>
            {/* Image */}
            <div style={{ flexShrink: 0, width: '460px', height: '383px', borderRadius: '20px', overflow: 'hidden' }}>
              <img
                src={s.img}
                alt={s.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            {/* Text */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '460px', justifyContent: 'center' }}>
              <h4
                style={{
                  fontFamily: '"Agrandir Grand Heavy", sans-serif',
                  fontSize: '40px',
                  fontWeight: '400',
                  lineHeight: '44px',
                  color: '#fff',
                  margin: '0',
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
                      fontWeight: '400',
                      lineHeight: '27px',
                      color: '#fff',
                      margin: '0',
                    }}
                  >
                    {r}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
