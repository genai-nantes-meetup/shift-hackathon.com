'use client';

import { useState } from 'react';
import Reveal from '../Reveal';
import { FAQ_ITEMS, type FaqItem } from '../../data/faq';

const AGRANDIR = "'Agrandir Grand Heavy', sans-serif";
const DELA = "'Dela Gothic One', sans-serif";
const OXANIUM = 'Oxanium, sans-serif';

export default function Faq({
  title = 'FAQ',
  items = FAQ_ITEMS,
}: {
  title?: string;
  items?: FaqItem[];
}) {
  const [open, setOpen] = useState<Set<number>>(new Set());

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <section style={{ background: '#000', padding: '100px 120px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <Reveal>
          <h2
            style={{
              fontFamily: AGRANDIR,
              fontSize: '60px',
              fontWeight: 800,
              color: '#fff',
              marginBottom: '3rem',
              lineHeight: 1,
            }}
          >
            {title}
          </h2>
        </Reveal>
        <div>
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div>
                <div style={{ height: '1px', background: 'rgb(77, 66, 76)' }} />
                <button
                  onClick={() => toggle(i)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '20px 0',
                    gap: '16px',
                    textAlign: 'left',
                  }}
                >
                  <span
                    style={{ fontFamily: DELA, fontSize: '20px', color: '#fff', lineHeight: 1.3 }}
                  >
                    {item.question}
                  </span>
                  <span
                    style={{
                      flexShrink: 0,
                      width: '28px',
                      height: '28px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: '30px',
                      lineHeight: 1,
                      fontWeight: 300,
                    }}
                  >
                    {open.has(i) ? '−' : '+'}
                  </span>
                </button>
                {open.has(i) && (
                  <p
                    style={{
                      fontFamily: OXANIUM,
                      fontSize: '16px',
                      color: 'rgba(255,255,255,0.7)',
                      lineHeight: 1.6,
                      margin: '0 0 20px',
                    }}
                  >
                    {item.answer}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
          <div style={{ height: '1px', background: 'rgb(77, 66, 76)' }} />
        </div>
      </div>
    </section>
  );
}
