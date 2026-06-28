import { SPEAKERS } from '../../data/edition_speakers';
import { speakerSlug } from '../../lib/seo';

export default function SpeakerGrid() {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '100px 0 0',
        gap: '10px',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 375px)',
          gridAutoRows: '570px',
          gap: '20px',
          width: '100%',
          maxWidth: '1240px',
          padding: '0 20px 80px',
          justifyContent: 'center',
        }}
      >
        {SPEAKERS.map((s) => (
          <a
            key={s.name}
            href={`/intervenants/${speakerSlug(s)}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '10px',
              width: '100%',
              height: '100%',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            {/* Image */}
            <div style={{ flex: '1 0 0', width: '100%', overflow: 'hidden', position: 'relative' }}>
              <img
                src={s.img}
                alt={s.name}
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </div>
            {/* Name */}
            <h6
              style={{
                fontFamily: '"Dela Gothic One", sans-serif',
                fontSize: '24px',
                fontWeight: '400',
                lineHeight: '1.2',
                color: '#fff',
                margin: '0',
              }}
            >
              {s.name}
            </h6>
            {/* Roles */}
            <div>
              {s.roles.map((r) => (
                <p
                  key={r}
                  style={{
                    fontFamily: 'Oxanium, sans-serif',
                    fontSize: '18px',
                    fontWeight: '400',
                    lineHeight: '1.5em',
                    color: '#fff',
                    margin: '0',
                  }}
                >
                  {r}
                </p>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
