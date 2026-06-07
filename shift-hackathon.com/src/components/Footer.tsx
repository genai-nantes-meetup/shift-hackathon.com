import { useState } from 'react';

export default function Footer() {
  const [values, setValues] = useState({ prenom: '', email: '', message: '' });

  return (
    <footer
      style={{
        background: '#080808',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '4rem 2rem 2rem',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
        }}
      >
        <div>
          <img
            src="/assets/images/pSUT90jYhOZMo6IvXy5LtJs0.png"
            alt="SHIFT"
            style={{ height: 32, width: 'auto', marginBottom: '1.5rem', display: 'block' }}
          />
          <p
            style={{
              color: 'rgba(255,255,255,0.45)',
              fontFamily: 'Barlow, sans-serif',
              fontSize: '0.8rem',
              lineHeight: 1.7,
              maxWidth: 360,
            }}
          >
            Nos événements sont ouverts à toutes et à tous, sans distinction de genre, d'orientation
            sexuelle ou d'identité. En vous inscrivant, vous vous engagez à faire preuve de respect
            et de tolérance.
          </p>
        </div>
        <div>
          <h3
            style={{
              color: '#fff',
              fontFamily: "'Agrandir Grand Heavy', sans-serif",
              fontSize: '24px',
              fontWeight: 800,
              margin: '0 0 8px',
            }}
          >
            Nous Contacter
          </h3>
          <p
            style={{
              color: 'rgba(255,255,255,0.6)',
              fontFamily: 'Oxanium, sans-serif',
              fontSize: '14px',
              marginBottom: '1rem',
            }}
          >
            Une question ? N&apos;hésite pas à nous contacter
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
          >
            <input
              placeholder="Name"
              type="text"
              value={values.prenom}
              onChange={(e) => setValues({ ...values, prenom: e.target.value })}
              style={inputStyle}
            />
            <input
              placeholder="Email"
              type="email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              style={inputStyle}
            />
            <textarea
              placeholder="Message"
              rows={3}
              value={values.message}
              onChange={(e) => setValues({ ...values, message: e.target.value })}
              style={{ ...inputStyle, resize: 'vertical' }}
            />
            <button
              type="submit"
              style={{
                background: '#2aebf5',
                color: '#000',
                border: 'none',
                padding: '0.6rem 1.5rem',
                fontFamily: 'Barlow, sans-serif',
                fontWeight: 700,
                fontSize: '0.875rem',
                cursor: 'pointer',
                borderRadius: '2px',
                alignSelf: 'flex-start',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <div
        style={{
          maxWidth: 1200,
          margin: '2rem auto 0',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '1.5rem',
          color: 'rgba(255,255,255,0.25)',
          fontFamily: 'Barlow, sans-serif',
          fontSize: '0.8rem',
        }}
      >
        © 2026 Shift / Tous droits réservés
      </div>
    </footer>
  );
}

const inputStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  padding: '0.6rem 0.8rem',
  color: '#fff',
  fontFamily: 'Barlow, sans-serif',
  fontSize: '0.875rem',
  borderRadius: '2px',
  outline: 'none',
  width: '100%',
};
