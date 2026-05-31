import { useState } from 'react';
import { FAQ as FAQ_DATA } from '../../data/schedule';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section style={{ padding: '5rem 2rem', background: '#0e0218' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <h2
          style={{
            fontFamily: '"Agrandir Grand Heavy", sans-serif',
            fontSize: '19.2px',
            fontWeight: 900,
            color: '#9ff839',
            textTransform: 'uppercase',
            letterSpacing: '1.536px',
            padding: '0px 0px 12px',
            margin: '0px 0px 24px',
            borderBottom: '1px solid rgba(159,248,57,0.3)',
          }}
        >
          FAQ
        </h2>
        {FAQ_DATA.map((item, i) => (
          <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                padding: '1.25rem 0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                gap: '1rem',
              }}
            >
              <span
                style={{
                  fontFamily: '"Agrandir Grand Heavy", sans-serif',
                  fontWeight: 700,
                  color: '#fff',
                  fontSize: '15.2px',
                  textAlign: 'left',
                }}
              >
                {item.q}
              </span>
              <span
                style={{
                  color: '#9ff839',
                  flexShrink: 0,
                  fontSize: '1.25rem',
                  transition: 'transform 0.2s',
                  transform: open === i ? 'rotate(45deg)' : 'none',
                }}
              >
                +
              </span>
            </button>
            {open === i && (
              <div style={{ paddingBottom: '1.25rem' }}>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.5)',
                    fontFamily: 'Oxanium, sans-serif',
                    fontSize: '13.28px',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {item.a}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
