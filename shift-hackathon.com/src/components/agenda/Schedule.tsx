import { SCHEDULE } from '../../data/edition_schedule';

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
          className="schedule__day"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
            paddingBottom: '60px',
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
            className="schedule__head"
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '10px',
              padding: '20px 15px',
              background: day.headerColor,
            }}
          >
            <div className="schedule__col--time">
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
            <div className="schedule__col--prog">
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
            <div className="schedule__col--speakers">
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
          {day.slots.map((slot, i) => (
            <div
              key={i}
              className="schedule__row"
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '10px',
                padding: '20px 15px',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                alignItems: 'flex-start',
              }}
            >
              <div className="schedule__col--time">
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
              <div className="schedule__col--prog">
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
                className="schedule__col--speakers"
                style={{
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
