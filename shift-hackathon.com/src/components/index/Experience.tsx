const BG_IMAGE = '/assets/images/OIZRhOSUxhsy9yPligk2tSs1po.jpg';

export default function Experience() {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'rgb(0, 0, 0)',
        color: 'rgb(255, 255, 255)',
        width: '100%',
        maxWidth: '1280px',
        margin: '0 auto',
        position: 'relative',
        height: '720px',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background image at 10% opacity */}
      <img
        src={BG_IMAGE}
        alt=""
        aria-hidden="true"
        style={{
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.1,
          pointerEvents: 'none',
        }}
      />
      {/* Text content */}
      <div style={{ position: 'relative', zIndex: 1, padding: '0 0 0 80px', maxWidth: '544px' }}>
        <p
          style={{
            color: 'rgb(255, 255, 255)',
            fontFamily: "'Agrandir Grand Heavy', sans-serif",
            fontSize: '56px',
            fontWeight: '800',
            lineHeight: '50.4px',
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          Shift,
        </p>
        <p
          style={{
            color: 'rgb(159, 248, 57)',
            fontFamily: "'Agrandir Thin Italic', sans-serif",
            fontSize: '20px',
            fontWeight: '100',
            lineHeight: '24px',
            textTransform: 'uppercase',
            margin: '30px 0 0 0',
          }}
        >
          Le Hackathon Gen AI n°1
        </p>
      </div>
    </section>
  );
}
