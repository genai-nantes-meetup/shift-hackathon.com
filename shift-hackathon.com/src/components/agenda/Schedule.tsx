import { SCHEDULE } from '../../data/edition_schedule';

interface Speaker {
  name: string;
  img: string;
}

interface Slot {
  time: string;
  title: string;
  desc?: string;
  speakers?: Speaker[];
}

export default function Schedule() {
  return (
    <div
      style={{
        background: '#000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        padding: '0px 20px 0px',
      }}
    >
      {SCHEDULE.map((day) => (
        <div
          key={day.day}
          style={{
            width: '1200px',
            maxWidth: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
            paddingBottom: '100px',
          }}
        >
          {/* Day header: date + label + weekday */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              paddingBottom: '20px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              <p
                style={{
                  fontFamily: 'Oxanium, sans-serif',
                  fontSize: '18px',
                  fontWeight: 400,
                  color: '#fff',
                  lineHeight: '27px',
                  margin: 0,
                }}
              >
                {day.day}
              </p>
              <p
                style={{
                  fontFamily: '"Agrandir Grand Heavy", sans-serif',
                  fontSize: '40px',
                  fontWeight: 700,
                  color: '#fff',
                  lineHeight: '48px',
                  margin: 0,
                }}
              >
                {day.label}
              </p>
            </div>
            <p
              style={{
                fontFamily: '"Agrandir Grand Heavy", sans-serif',
                fontSize: '22px',
                fontWeight: 700,
                color: '#fff',
                lineHeight: '33px',
                margin: 0,
                textTransform: 'uppercase',
              }}
            >
              {day.weekday}
            </p>
          </div>

          {/* Column header bar */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '10px',
              padding: '20px 15px',
              background: day.headerColor,
            }}
          >
            <div style={{ width: '210px', flexShrink: 0 }}>
              <span
                style={{
                  fontFamily: '"Agrandir Grand Heavy", sans-serif',
                  fontSize: '15px',
                  fontWeight: 700,
                  color: '#000',
                }}
              >
                Heure
              </span>
            </div>
            <div style={{ flex: 1 }}>
              <span
                style={{
                  fontFamily: '"Agrandir Grand Heavy", sans-serif',
                  fontSize: '15px',
                  fontWeight: 700,
                  color: '#000',
                }}
              >
                Programme
              </span>
            </div>
            <div style={{ width: '250px', flexShrink: 0 }}>
              <span
                style={{
                  fontFamily: '"Agrandir Grand Heavy", sans-serif',
                  fontSize: '15px',
                  fontWeight: 700,
                  color: '#000',
                }}
              >
                Speakers
              </span>
            </div>
          </div>

          {/* Slots */}
          {(day.slots as Slot[]).map((slot, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '10px',
                padding: '20px 15px',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                alignItems: 'flex-start',
              }}
            >
              <div style={{ width: '210px', flexShrink: 0 }}>
                <span
                  style={{
                    fontFamily: 'Oxanium, sans-serif',
                    fontSize: '15px',
                    fontWeight: 400,
                    color: '#fff',
                    lineHeight: '22px',
                  }}
                >
                  {slot.time}
                </span>
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontFamily: '"Agrandir Grand Heavy", sans-serif',
                    fontSize: '15px',
                    fontWeight: slot.desc || slot.speakers ? 700 : 400,
                    color: '#fff',
                    margin: 0,
                    lineHeight: '22px',
                  }}
                >
                  {slot.title}
                </p>
                {slot.desc && (
                  <p
                    style={{
                      fontFamily: 'Oxanium, sans-serif',
                      fontSize: '14px',
                      fontWeight: 400,
                      color: 'rgba(255,255,255,0.6)',
                      margin: '6px 0 0',
                      lineHeight: '21px',
                    }}
                  >
                    {slot.desc}
                  </p>
                )}
              </div>
              <div
                style={{
                  width: '250px',
                  flexShrink: 0,
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '8px',
                  flexWrap: 'wrap',
                }}
              >
                {slot.speakers?.map((sp) => (
                  <img
                    key={sp.name}
                    src={sp.img}
                    alt={sp.name}
                    title={sp.name}
                    width={48}
                    height={48}
                    style={{ borderRadius: '50%', objectFit: 'cover', display: 'block' }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
