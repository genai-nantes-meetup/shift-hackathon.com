import Reveal from '../Reveal';
import { VENUE } from '../../data/edition';

const IMAGES = [
  {
    src: '/assets/images/gallery/venue-speaker-1.webp',
    alt: 'Speaker du hackathon IA Shift au Palace, Nantes',
    flex: '0 0 22%',
  },
  {
    src: '/assets/images/gallery/venue-conference.webp',
    alt: 'Conférence au Palace pendant le hackathon Shift',
    flex: '1',
  },
  {
    src: '/assets/images/gallery/venue-speaker-2.webp',
    alt: 'Intervenant sur scène au hackathon IA Shift',
    flex: '0 0 22%',
  },
  {
    src: '/assets/images/gallery/venue-stage.webp',
    alt: 'Scène du Palace pendant le hackathon Shift',
    flex: '0 0 22%',
  },
  {
    src: '/assets/images/gallery/venue-speaker-3.webp',
    alt: 'Speaker face au public du hackathon IA Shift',
    flex: '0 0 22%',
  },
  {
    src: '/assets/images/gallery/venue-live-session.webp',
    alt: 'Session en direct au hackathon Shift, Nantes',
    flex: '0 0 22%',
  },
  {
    src: '/assets/images/gallery/venue-group-photo.webp',
    alt: 'Photo de groupe des participants au hackathon Shift',
    flex: '1',
  },
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
