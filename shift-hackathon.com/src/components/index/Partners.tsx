import Reveal from '../Reveal';
import { PARTNERS } from '../../data/edition_partners';
import { EDITION } from '../../data/edition';

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
              >
                <img src={p.logo} alt={p.name} loading="lazy" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
