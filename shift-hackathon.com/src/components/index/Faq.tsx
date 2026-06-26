'use client';

import { useState } from 'react';
import Reveal from '../Reveal';

const AGRANDIR = "'Agrandir Grand Heavy', sans-serif";
const DELA = "'Dela Gothic One', sans-serif";
const OXANIUM = 'Oxanium, sans-serif';

const ITEMS = [
  {
    question: 'Puis-je pitcher une idée dont le projet a déjà débuté ?',
    answer:
      "Pour que tous les participants soient sur le même pied d'égalité, il ne faut pas avoir commencé à travailler sur l'idée en amont",
  },
  {
    question: "Est-ce que je peux bosser sur mon outil / l'outil de ma boite ?",
    answer: "Bien sûr que non petit malin, l'objectif ici est de prendre un outil sur le marché.",
  },
  {
    question: 'Dois-je avoir constitué mon équipe en amont du weekend ?',
    answer: 'Pas du tout, les équipes seront créees au lancement du hackathon',
  },
  {
    question: "J'ai combien de temps pour présenter mon idée ?",
    answer: '1min tout pile, pas une seconde de plus',
  },
  {
    question: 'Est-ce que je peux pitcher 2 idées ?',
    answer: 'Choisis ta préférée !',
  },
  {
    question: 'Est-ce que je peux prévoir des objets ou des slides ?',
    answer: 'Objets oui, slides non !',
  },
  {
    question: 'Combien de projets sont sélectionnés ?',
    answer: '15 projets, pas un de plus',
  },
  {
    question: "Que faire si mon idée n'est pas choisie ?",
    answer: "Rejoins une team en construction dont l'idée ou le porteur te parle",
  },
  {
    question: "Qu'est-ce que je dois emmener ?",
    answer: 'Ta bonne humeur et ton PC bien sûr !',
  },
  {
    question: 'Comment me rendre sur place ?',
    answer:
      'Via le tram 1, le bus 11, en voiture au parking Graslin ou en vélo, parking juste devant.',
  },
  {
    question: 'Est-ce que je peux rester dormir ?',
    answer:
      'Le vendredi soir, non. Le samedi, oui ! Par contre prévois un duvet, un tapis de sol (si pas assez de banquettes), un masque de nuit et des boules quies ;)',
  },
];

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
          {ITEMS.map((item, i) => (
            <FaqItem key={i} question={item.question} answer={item.answer} delay={i * 0.04} />
          ))}
          <div style={{ height: '1px', background: 'rgb(77, 66, 76)' }} />
        </div>
      </div>
    </section>
  );
}
