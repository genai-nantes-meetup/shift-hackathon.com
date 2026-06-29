import Reveal from '../Reveal';
import { JE_SUIS_CHAUD_URL } from '../../data/edition';

export default function Banner() {
  return (
    <section className="banner">
      <img
        className="banner__bg"
        src="/assets/images/banner/banner-shift.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />

      <div className="banner__inner">
        <Reveal>
          <h2 className="banner__title">{'Le hackathon parfait\npour allier\nproduct & tech'}</h2>
        </Reveal>
        <div className="banner__bottom">
          <Reveal delay={0.1}>
            <p className="banner__sub">
              Un événement pour développeurs, designers & product lovers.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href={JE_SUIS_CHAUD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary"
            >
              Je suis chaud
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
