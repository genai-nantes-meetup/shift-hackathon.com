import Reveal from '../Reveal';
import { PARTNERS } from '../../data/edition_partners';
import { EDITION } from '../../data/edition';
import { capture } from '../../lib/analytics';

export default function Partners() {
  return (
    <section className="partners">
      <div className="partners__inner">
        <Reveal>
          <h2 className="partners__title">Partenaires {EDITION.year}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="partners__grid">
            {PARTNERS.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="partners__logo"
                onClick={() =>
                  capture('sponsor_link_clicked', { sponsor: p.name, sponsor_url: p.url })
                }
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  width={p.width}
                  height={p.height}
                  loading="lazy"
                  decoding="async"
                />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
