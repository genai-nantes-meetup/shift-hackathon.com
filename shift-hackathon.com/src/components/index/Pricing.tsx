import Reveal from '../Reveal';
import { EDITION, JE_SUIS_CHAUD_URL } from '../../data/edition';
import { PRICING_TIERS } from '../../data/edition_pricing';

const AGRANDIR = "'Agrandir Grand Heavy', sans-serif";
const OXANIUM = 'Oxanium, sans-serif';
const BARLOW = 'Barlow, sans-serif';
const DELA_GOTHIC = "'Dela Gothic One', sans-serif";

// Arrow icon inline via CSS — avoids JSX at module scope
const arrowSvg = (color: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 14L14 4M14 4H6M14 4V12" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

export default function Pricing() {
  return (
    <section style={{ padding: '79px 30px', background: '#e8e8e8' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <h2
            style={{
              fontFamily: AGRANDIR,
              fontSize: '50px',
              fontWeight: 800,
              color: '#190532',
              marginBottom: '0.5rem',
              lineHeight: 1,
            }}
          >
            Participer
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p
            style={{
              color: 'rgba(25,5,50,0.7)',
              fontFamily: OXANIUM,
              fontSize: '18px',
              marginBottom: '3rem',
            }}
          >
            On est impatients de voir si vous aurez le cran de nous rejoindre
          </p>
        </Reveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            alignItems: 'start',
          }}
        >
          {PRICING_TIERS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div
                style={{
                  background: t.card.bg,
                  border: `2px solid ${t.card.border}`,
                  borderRadius: '8px',
                  padding: '0 0 2rem',
                  overflow: 'hidden',
                  position: 'relative',
                  ...(t.featured ? { marginTop: '-1.5rem' } : {}),
                }}
              >
                {/* Tier tag badge */}
                <div style={{ textAlign: 'center', marginBottom: '1.5rem', marginTop: '-1px' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      background: t.tag.bg,
                      color: t.tag.text,
                      fontFamily: DELA_GOTHIC,
                      fontSize: '16px',
                      fontWeight: 400,
                      letterSpacing: '6.4px',
                      padding: '6px 20px',
                      borderRadius: '0 0 20px 20px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {t.name}
                  </span>
                </div>

                <div style={{ padding: '0 2rem' }}>
                  {/* Period */}
                  <p
                    style={{
                      fontFamily: AGRANDIR,
                      fontSize: '24px',
                      fontWeight: 800,
                      color: '#000',
                      marginBottom: '4px',
                      textAlign: 'center',
                    }}
                  >
                    {t.period}
                  </p>

                  {/* Price */}
                  <p
                    style={{
                      fontFamily: AGRANDIR,
                      fontSize: '40px',
                      fontWeight: 800,
                      color: '#000',
                      textAlign: 'center',
                      margin: '0 0 8px',
                      lineHeight: 1,
                    }}
                  >
                    {t.price}
                  </p>

                  {/* Divider */}
                  <div
                    style={{
                      width: 32,
                      height: 3,
                      background: '#000',
                      margin: '0 auto 1rem',
                      borderRadius: 2,
                    }}
                  />

                  {/* Tagline */}
                  <p
                    style={{
                      fontFamily: OXANIUM,
                      fontSize: '14px',
                      color: 'rgba(0,0,0,0.6)',
                      textAlign: 'center',
                      marginBottom: '1.5rem',
                      lineHeight: 1.5,
                    }}
                  >
                    {t.tagline}
                  </p>

                  {/* Features */}
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem' }}>
                    {t.features.map((f, fi) => (
                      <li
                        key={fi}
                        style={{
                          display: 'flex',
                          gap: '8px',
                          alignItems: 'flex-start',
                          marginBottom: '10px',
                          fontFamily: BARLOW,
                          fontSize: '18px',
                          fontWeight: 400,
                          color: '#000',
                          lineHeight: 1.4,
                        }}
                      >
                        <span
                          style={{ flexShrink: 0, marginTop: '3px', display: 'flex' }}
                          dangerouslySetInnerHTML={{ __html: arrowSvg(t.card.border) }}
                        />
                        <span>
                          {f.text}
                          {f.bold && <strong style={{ fontWeight: 900 }}>{f.bold}</strong>}
                          {f.rest}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={JE_SUIS_CHAUD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      background: t.tag.bg,
                      color: t.tag.text,
                      padding: '8px 17.6px',
                      fontFamily: AGRANDIR,
                      fontWeight: 400,
                      fontSize: '14px',
                      textDecoration: 'none',
                      textTransform: 'uppercase',
                      letterSpacing: '1.4px',
                      borderRadius: '4px',
                      boxShadow: `${t.name === 'FRIENDS' ? 'rgba(252,35,61,0.5)' : t.name === 'ANGELS' ? 'rgba(65,105,225,0.5)' : EDITION.dominantColorShadow} 0px 5px 0px 0px`,
                    }}
                  >
                    {t.name === 'ANGELS' ? 'Nous contacter' : 'Je suis chaud'}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
