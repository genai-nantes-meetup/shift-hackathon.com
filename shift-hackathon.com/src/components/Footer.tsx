import { useState } from 'react';

export default function Footer() {
  const [values, setValues] = useState({ name: '', email: '', message: '' });

  return (
    <footer style={{ background: '#000', padding: '0 32px 64px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <p
          style={{
            textAlign: 'center',
            maxWidth: 1120,
            margin: '0 auto 80px',
            color: 'rgba(255,255,255,0.55)',
            fontFamily: 'Oxanium, sans-serif',
            fontSize: '18px',
            lineHeight: 1.5,
          }}
        >
          Nos événements sont ouverts à toutes et à tous, sans distinction de genre, d&rsquo;orientation
          sexuelle ou d&rsquo;identité. En vous inscrivant, vous vous engagez à faire preuve de respect et
          de tolérance, afin que chacun&middot;e se sente accueilli&middot;e et en sécurité.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'start',
          }}
        >
          <div>
            <img
              src="/assets/images/pSUT90jYhOZMo6IvXy5LtJs0.png"
              alt="SHIFT"
              style={{ height: 64, width: 'auto', marginBottom: '2rem', display: 'block' }}
            />
            <p
              style={{
                color: 'rgba(255,255,255,0.55)',
                fontFamily: 'Oxanium, sans-serif',
                fontSize: '14px',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              © 2026 Shift
              <br />
              Tous droits réservés
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
              Nous contacter
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
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <input
                  placeholder="Nom"
                  type="text"
                  value={values.name}
                  onChange={(e) => setValues({ ...values, name: e.target.value })}
                  style={inputStyle}
                />
                <input
                  placeholder="Email"
                  type="email"
                  value={values.email}
                  onChange={(e) => setValues({ ...values, email: e.target.value })}
                  style={inputStyle}
                />
              </div>
              <textarea
                placeholder="Message"
                rows={4}
                value={values.message}
                onChange={(e) => setValues({ ...values, message: e.target.value })}
                style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
              />
              <button
                type="submit"
                style={{
                  background: '#222',
                  color: '#fff',
                  border: 'none',
                  padding: '0.85rem 1.5rem',
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  borderRadius: '6px',
                  width: '100%',
                }}
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

const inputStyle: React.CSSProperties = {
  background: '#f0f0f0',
  border: 'none',
  padding: '0.85rem 1rem',
  color: '#111',
  fontFamily: 'Barlow, sans-serif',
  fontSize: '0.95rem',
  borderRadius: '6px',
  outline: 'none',
  width: '100%',
};
