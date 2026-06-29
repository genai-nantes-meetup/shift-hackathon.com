import Reveal from '../Reveal';
import { VENUE } from '../../data/edition';

const IMAGES = [
  { src: '/assets/images/gallery/venue-speaker-1.webp', alt: 'Speaker', flex: '0 0 22%' },
  { src: '/assets/images/gallery/venue-conference.webp', alt: 'Conférence', flex: '1' },
  { src: '/assets/images/gallery/venue-speaker-2.webp', alt: 'Speaker', flex: '0 0 22%' },
  { src: '/assets/images/gallery/venue-stage.webp', alt: 'Stage', flex: '0 0 22%' },
  { src: '/assets/images/gallery/venue-speaker-3.webp', alt: 'Speaker', flex: '0 0 22%' },
  { src: '/assets/images/gallery/venue-live-session.webp', alt: 'Live session', flex: '0 0 22%' },
  { src: '/assets/images/gallery/venue-group-photo.webp', alt: 'Group photo', flex: '1' },
];

export default function Lieu() {
  const row1 = IMAGES.slice(0, 3);
  const row2 = IMAGES.slice(3);

  return (
    <section className="lieu">
      <Reveal className="lieu__inner">
        <div className="lieu__rows">
          <div className="lieu__row">
            {row1.map((img) => (
              <div key={img.src} className="lieu__cell" style={{ flex: img.flex }}>
                <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
          <div className="lieu__row">
            {row2.map((img) => (
              <div key={img.src} className="lieu__cell" style={{ flex: img.flex }}>
                <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>

        <div className="lieu__badge">
          <h2>
            Le Lieu - {VENUE.name}, {VENUE.addressLocality}
          </h2>
        </div>
      </Reveal>
    </section>
  );
}
