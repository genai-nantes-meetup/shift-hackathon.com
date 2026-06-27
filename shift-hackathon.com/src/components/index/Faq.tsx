'use client';

import { useState } from 'react';
import Reveal from '../Reveal';
import { FAQ_ITEMS } from '../../data/faq';

const AGRANDIR = "'Agrandir Grand Heavy', sans-serif";
const DELA = "'Dela Gothic One', sans-serif";
const OXANIUM = 'Oxanium, sans-serif';

function FaqItem({ question, answer, delay }: { question: string; answer: string; delay: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={delay}>
      <div>
        <div
          style={{
            height: '1px',
            background: 'rgb(77, 66, 76)',
          }}
        />
        <button
          onClick={() => setOpen((v) => !v)}
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
            style={{
              fontFamily: DELA,
              fontSize: '20px',
              color: '#fff',
              lineHeight: 1.3,
            }}
          >
            {question}
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
            {open ? '−' : '+'}
          </span>
        </button>
        {open && (
          <p
            style={{
              fontFamily: OXANIUM,
              fontSize: '16px',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.6,
              margin: '0 0 20px',
            }}
          >
            {answer}
          </p>
        )}
      </div>
    </Reveal>
  );
}

export default function Faq() {
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
            FAQ
          </h2>
        </Reveal>
        <div>
          {FAQ_ITEMS.map((item, i) => (
            <FaqItem key={i} question={item.question} answer={item.answer} delay={i * 0.04} />
          ))}
          <div style={{ height: '1px', background: 'rgb(77, 66, 76)' }} />
        </div>
      </div>
    </section>
  );
}
