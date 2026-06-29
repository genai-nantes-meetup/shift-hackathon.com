import { EDITION, SOCIAL_LINKS, VENUE } from '../data/edition';

const venue = [VENUE.name, `${VENUE.postalCode} ${VENUE.addressLocality}`.trim()]
  .filter(Boolean)
  .join(', ');

const practicalInfos = [
  { label: 'Dates', value: `${EDITION.dateRangeLong} (48 h)` },
  { label: 'Lieu', value: venue },
  { label: 'Format', value: 'Hackathon Gen AI en présentiel, en équipe' },
  { label: 'Tarifs', value: EDITION.tarifsSummary },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <p
          style={{
            textAlign: 'center',
            maxWidth: 1120,
            margin: '0 auto 80px',
            color: 'rgba(255,255,255,0.55)',
            fontFamily: 'Oxanium, sans-serif',
            fontSize: '18px',
            lineHeight: 1.5,
          }}
        >
          Nos événements sont ouverts à toutes et à tous, sans distinction de genre, d’orientation
          sexuelle ou d’identité. En vous inscrivant, vous vous engagez à faire preuve de respect et
          de tolérance, afin que chacun·e se sente accueilli·e et en sécurité.
        </p>

        <dl
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem 2rem',
            margin: '0 0 64px',
            paddingBottom: '40px',
            borderBottom: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          {practicalInfos.map((i) => (
            <div key={i.label} style={{ display: 'flex', gap: '0.5rem', alignItems: 'baseline' }}>
              <dt
                style={{
                  fontFamily: "'Agrandir Grand Heavy', sans-serif",
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-lime)',
                  margin: 0,
                }}
              >
                {i.label}
              </dt>
              <dd
                style={{
                  fontFamily: 'Oxanium, sans-serif',
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.75)',
                  margin: 0,
                }}
              >
                {i.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="footer__grid">
          <div>
            <img
              src="/assets/images/hero/logo-shift.png"
              alt="SHIFT"
              style={{ height: 64, width: 'auto', marginBottom: '2rem', display: 'block' }}
            />
            <p
              style={{
                color: 'rgba(255,255,255,0.55)',
                fontFamily: 'Oxanium, sans-serif',
                fontSize: '14px',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              © {EDITION.year} Shift
              <br />
              Tous droits réservés
            </p>
          </div>

          <div>
            <h3
              style={{
                color: '#fff',
                fontFamily: "'Agrandir Grand Heavy', sans-serif",
                fontSize: '24px',
                fontWeight: 800,
                margin: '0 0 8px',
              }}
            >
              Nous contacter
            </h3>
            <p
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontFamily: 'Oxanium, sans-serif',
                fontSize: '14px',
                marginBottom: '1rem',
              }}
            >
              Une question ? Écris-nous directement, on te répond vite.
            </p>
            <a
              href={`mailto:${EDITION.contactEmail}`}
              style={{
                display: 'inline-block',
                background: '#222',
                color: '#fff',
                textDecoration: 'none',
                padding: '0.85rem 1.5rem',
                fontFamily: 'Barlow, sans-serif',
                fontWeight: 700,
                fontSize: '0.95rem',
                borderRadius: '6px',
              }}
            >
              {EDITION.contactEmail}
            </a>
            {SOCIAL_LINKS.linkedin && (
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginTop: '1.5rem',
                  color: 'rgba(255,255,255,0.75)',
                  textDecoration: 'none',
                  fontFamily: 'Oxanium, sans-serif',
                  fontSize: '14px',
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0z" />
                </svg>
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
