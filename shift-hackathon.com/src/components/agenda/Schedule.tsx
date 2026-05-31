import Reveal from '../Reveal';
import { SCHEDULE } from '../../data/schedule';

interface Slot {
  time: string;
  title: string;
  desc?: string;
  speaker?: string;
}

export default function Schedule() {
  return (
    <section style={{ padding: '2rem 2rem 5rem' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {SCHEDULE.map((day) => (
          <Reveal key={day.day}>
            <div>
              <h2 style={{ fontFamily: '"Agrandir Grand Heavy", sans-serif', fontSize: '1.2rem', fontWeight: 900, color: day.color, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.5rem', paddingBottom: '0.75rem' }}>
                {day.day}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {(day.slots as Slot[]).map((slot, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '130px 1fr', gap: '1.5rem', padding: '1.2rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <span style={{ fontFamily: 'monospace', fontSize: '13.6px', color: day.color, fontWeight: 700, paddingTop: '2px' }}>{slot.time}</span>
                    <div>
                      <p style={{ fontFamily: '"Agrandir Grand Heavy", sans-serif', fontWeight: 700, color: '#fff', fontSize: '15.2px', margin: 0, lineHeight: '22.8px' }}>{slot.title}</p>
                      {slot.desc && <p style={{ fontFamily: 'Oxanium, sans-serif', color: 'rgba(255,255,255,0.5)', fontSize: '13.28px', margin: '0.2rem 0 0', lineHeight: '19.92px' }}>{slot.desc}</p>}
                      {slot.speaker && <p style={{ fontFamily: 'Oxanium, sans-serif', color: day.color, fontSize: '12.8px', margin: '0.2rem 0 0', fontWeight: 600, lineHeight: '19.2px' }}>👤 {slot.speaker}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
