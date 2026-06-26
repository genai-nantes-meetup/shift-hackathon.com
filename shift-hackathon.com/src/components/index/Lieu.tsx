import Reveal from '../Reveal';

const IMAGES = [
  { src: '/assets/images/gallery/venue-speaker-1.jpeg', alt: 'Speaker', flex: '0 0 22%' },
  { src: '/assets/images/gallery/venue-conference.jpg', alt: 'Conférence', flex: '1' },
  { src: '/assets/images/gallery/venue-speaker-2.jpg', alt: 'Speaker', flex: '0 0 22%' },
  { src: '/assets/images/gallery/venue-stage.jpeg', alt: 'Stage', flex: '0 0 22%' },
  { src: '/assets/images/gallery/venue-speaker-3.jpg', alt: 'Speaker', flex: '0 0 22%' },
  { src: '/assets/images/gallery/venue-live-session.jpg', alt: 'Live session', flex: '0 0 22%' },
  { src: '/assets/images/gallery/venue-group-photo.jpeg', alt: 'Group photo', flex: '1' },
];

export default function Lieu() {
  const row1 = IMAGES.slice(0, 3);
  const row2 = IMAGES.slice(3);

  return (
    <section
      style={{
        background: '#000',
        padding: '100px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <Reveal style={{ width: '100%', maxWidth: 1240, position: 'relative' }}>
        {/* Image grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* Row 1 */}
          <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
            {row1.map((img) => (
              <div
                key={img.src}
                style={{
                  flex: img.flex,
                  height: '400px',
                  overflow: 'hidden',
                  borderRadius: '4px',
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                  }}
                />
              </div>
            ))}
          </div>
          {/* Row 2 */}
          <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
            {row2.map((img) => (
              <div
                key={img.src}
                style={{
                  flex: img.flex,
                  height: '400px',
                  overflow: 'hidden',
                  borderRadius: '4px',
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
