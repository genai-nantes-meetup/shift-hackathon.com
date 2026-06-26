import Reveal from '../Reveal';
import { EDITION } from '../../data/edition';

export default function Banner() {
  return (
    <section className="banner">
      <img
        className="banner__bg"
        src="/assets/images/banner/banner-shift.jpg"
        alt=""
        aria-hidden="true"
      />

      <div className="banner__inner">
        <Reveal>
          <h2 className="banner__title">{'Le hackathon parfait\npour allier\nproduct & tech'}</h2>
        </Reveal>
        <div className="banner__bottom">
          <Reveal delay={0.1}>
            <p className="banner__sub">
              Un événement pour développeurs, designers &amp; product lovers.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href={EDITION.ticketUrl}
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
