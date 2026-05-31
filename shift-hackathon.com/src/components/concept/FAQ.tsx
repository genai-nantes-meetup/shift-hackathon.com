import { useState } from 'react';
import Reveal from '../Reveal';
import { FAQ as FAQ_DATA } from '../../data/schedule';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section style={{ padding: '5rem 2rem', background: '#0e0218' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <Reveal>
          <h2 style={{ fontFamily: 'Barlow, sans-serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, color: '#fff', textTransform: 'uppercase', textAlign: 'center', marginBottom: '2.5rem' }}>FAQ</h2>
        </Reveal>
        {FAQ_DATA.map((item, i) => (
          <Reveal key={i} delay={i * 0.04}>
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width: '100%', background: 'none', border: 'none', padding: '1.25rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', gap: '1rem' }}
              >
                <span style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 600, color: '#fff', fontSize: '0.95rem', textAlign: 'left' }}>{item.q}</span>
                <span style={{ color: '#2aebf5', flexShrink: 0, fontSize: '1.25rem', transition: 'transform 0.2s', transform: open === i ? 'rotate(45deg)' : 'none' }}>+</span>
              </button>
              {open === i && (
                <div style={{ paddingBottom: '1.25rem' }}>
                  <p style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Barlow, sans-serif', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>{item.a}</p>
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
