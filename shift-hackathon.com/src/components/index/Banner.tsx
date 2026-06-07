import Reveal from '../Reveal';
import { EDITION } from '../../data/edition';

const TICKET_URL = EDITION.ticketUrl;

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner__beam" aria-hidden="true" />
      <div className="banner__glow" aria-hidden="true" />
      <p className="banner__ghost" aria-hidden="true">SHIFT</p>

      <div className="banner__inner">
        <Reveal>
          <h2 className="banner__title">{'Le hackathon parfait pour allier\nproduct & tech'}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="banner__sub">
            Un événement pour développeurs, designers &amp; product lovers.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <a href={TICKET_URL} target="_blank" rel="noopener noreferrer" className="cta-primary">
            Je suis chaud
          </a>
        </Reveal>
      </div>
    </section>
  );
}
