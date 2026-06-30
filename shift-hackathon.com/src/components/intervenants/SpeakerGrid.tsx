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
      <div className="speaker-grid">
        {SPEAKERS.map((s) => (
          <a key={s.name} href={`/intervenants/${speakerSlug(s)}`} className="speaker-grid__card">
            {/* Image */}
            <div className="speaker-grid__media">
              <img
                src={s.img}
                alt={`${s.name}, ${s.roles.join(' · ')}`}
                loading="lazy"
                decoding="async"
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
            <p
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
            </p>
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
