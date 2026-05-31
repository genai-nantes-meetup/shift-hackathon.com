import Reveal from '../Reveal';

const AGRANDIR = "'Agrandir Grand Heavy', sans-serif";

const IMAGES = [
  { src: '/assets/images/cq8ZzypnQ3B7cnq3vSe9YqtKZkc.jpeg', alt: 'Speaker', flex: '0 0 22%' },
  { src: '/assets/images/1MilzwluR4WPySgY1Nc71NA7z10.jpg', alt: 'Conférence', flex: '1' },
  { src: '/assets/images/FS3ISXEUHf4xNgOzHz1v79bPNPo.jpg', alt: 'Speaker', flex: '0 0 22%' },
  { src: '/assets/images/LB31XkKlru3wRHoN0ROFW1Y1BE.jpeg', alt: 'Stage', flex: '0 0 22%' },
  { src: '/assets/images/K6Lz2buwWgCTrXdKmIWect7xmg.jpg', alt: 'Speaker', flex: '0 0 22%' },
  { src: '/assets/images/eXXGGok3iFG8OxR7xj0iB21IJTc.jpg', alt: 'Live session', flex: '0 0 22%' },
  { src: '/assets/images/P6aQkNmNYMQTB5ICXGS1vinnYg.jpeg', alt: 'Group photo', flex: '1' },
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

        {/* Title badge overlaid */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: '#0e0218',
            border: '6px solid #9ff839',
            padding: '30px 80px',
            textAlign: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          <h2
            style={{
              fontFamily: AGRANDIR,
              fontWeight: 800,
              fontSize: 'clamp(20px, 2.5vw, 36px)',
              color: '#fff',
              margin: 0,
            }}
          >
            Le Lieu - Le Palace, Nantes
          </h2>
        </div>
      </Reveal>
    </section>
  );
}
