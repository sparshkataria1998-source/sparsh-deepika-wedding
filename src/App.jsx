import { useEffect, useMemo, useState } from 'react'
import './App.css'
import carousel1 from './assets/carousel-1.png'
import carousel2 from './assets/carousel-2.jpg'
import carousel3 from './assets/carousel-3.jpg'
import carousel4 from './assets/carousel-4.jpg'
import ganeshaIdol from './assets/ganesha-idol-2.png'

const WEDDING_DATE = new Date('2026-12-12T19:30:00+05:30')
const BRIDE_NAME = 'Deepika'
const GROOM_NAME = 'Sparsh'
const VENUE = 'Grand Mirage (Tulip)'
const HALDI_MAPS_URL = 'https://maps.app.goo.gl/5t9fPZxm5iF3CjV36'
const WEDDING_MAPS_URL = 'https://maps.app.goo.gl/UmGphGe8GpvjtYVn7'
// Add your new Google Form URL here when it is ready.
const GOOGLE_FORM_PAGE = 'https://forms.gle/oXACoGox4Nw7CbTe7'

function useCountdown(target) {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])
  return useMemo(() => {
    const diff = Math.max(0, target - now)
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const mins = Math.floor((diff / (1000 * 60)) % 60)
    const secs = Math.floor((diff / 1000) % 60)
    return { days, hours, mins, secs, done: diff === 0 }
  }, [now, target])
}

const FUNCTIONS = [
  {
    key: 'haldi',
    icon: '🌼',
    title: 'Haldi Ceremony',
    date: 'Friday, 11 December 2026',
    time: '3:00 PM onwards',
    desc: 'Join us for an afternoon filled with turmeric, marigolds, laughter and blessings.',
    dress: 'Shades of Yellow',
  },
  {
    key: 'wedding',
    icon: '🎆',
    title: 'Wedding Ceremony',
    date: 'Saturday, 12 December 2026',
    time: '7:30 PM onwards',
    desc: 'Celebrate as Deepika & Sparsh begin their forever, surrounded by the love and blessings of family and friends.',
    dress: 'Traditional wedding attire',
  },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    ['Family', '#family'],
    ['Couple', '#couple'],
    ['Functions', '#functions'],
    ['Venue', '#venue'],
  ]
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="brand" href="#top">D <span>❤</span> S</a>
        <div className="nav-links">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          <a href="#rsvp" className="nav-cta">RSVP</a>
        </div>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? '✕' : '☰'}
        </button>
      </div>
      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a href="#rsvp" className="nav-cta" onClick={() => setOpen(false)}>RSVP</a>
      </div>
    </nav>
  )
}

function Hero() {
  const { days, hours, mins, secs, done } = useCountdown(WEDDING_DATE)
  return (
    <header className="hero" id="top">
      <img src={ganeshaIdol} alt="Shri Ganesh idol" className="ganesha-top" />
      <div className="shloka">॥ श्री गणेशाय नमः ॥</div>
      <div className="shloka-full">वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।<br />निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥</div>
      <div className="invite-small">With the blessings of</div>
      <div className="family-line">Our Families</div>
      <h1 className="couple-names">
        {BRIDE_NAME}
        <span className="amp">weds</span>
        {GROOM_NAME}
      </h1>
      <div className="hero-date">11th & 12th December 2026</div>
      <div className="hero-venue">{VENUE}</div>

      <div className="divider">✦ ✦ ✦</div>

      <div className="hero-card">
        <div className="invite-small">Counting down to the pheras</div>
        {done ? (
          <p style={{ fontFamily: 'var(--serif)', fontSize: 26 }}>We just got married — thank you for your love! 💛</p>
        ) : (
          <div className="countdown">
            <div className="count-box"><b>{days}</b><small>Days</small></div>
            <div className="count-box"><b>{hours}</b><small>Hours</small></div>
            <div className="count-box"><b>{mins}</b><small>Mins</small></div>
            <div className="count-box"><b>{secs}</b><small>Secs</small></div>
          </div>
        )}
        <div className="hero-buttons">
          <a className="btn btn-primary" href="#functions">View Functions</a>
          <a className="btn btn-ghost" href="#venue">How to Reach</a>
        </div>
      </div>
    </header>
  )
}

function Family() {
  return (
    <section className="section" id="family">
      <div className="eyebrow">With Blessings From</div>
      <h2 className="h2">The Families</h2>
      <p className="sub">
        Two families, one celebration. The Yadav and Kataria families warmly invite you to share
        the joy and blessings of this special occasion.
      </p>
      <div className="couple-grid">
        <div className="person">
          <div className="invite-small">Bride's Family</div>
          <h3 style={{ marginTop: 8 }}>The Yadav Family</h3>
          <div className="role">Parents of {BRIDE_NAME}</div>
          <p>
            Mr. Laxman Prasad Yadav<br />& Mrs. Poornima Yadav
            <br />
            <span style={{ fontSize: 14 }}>along with family & friends invite you with love.</span>
          </p>
        </div>
        <div className="person">
          <div className="invite-small">Groom's Family</div>
          <h3 style={{ marginTop: 8 }}>The Kataria Family</h3>
          <div className="role">Parents of {GROOM_NAME}</div>
          <p>
            Mr. Parmod Kumar<br />& Mrs. Sunita Rani
            <br />
            <span style={{ fontSize: 14 }}>along with family & friends invite you with joy.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

const COUPLE_PHOTOS = [
  { src: carousel1, alt: 'Deepika and Sparsh together' },
  { src: carousel2, alt: 'Deepika and Sparsh celebrating together' },
  { src: carousel3, alt: 'Deepika and Sparsh sharing a moment' },
  { src: carousel4, alt: 'Deepika and Sparsh holding hands' },
]

function CoupleCarousel() {
  const [index, setIndex] = useState(0)
  const total = COUPLE_PHOTOS.length
  const go = (dir) => setIndex((i) => (i + dir + total) % total)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % total), 4000)
    return () => clearInterval(t)
  }, [total])

  return (
    <div className="carousel-stack">
      <div className="stack-stage">
        {COUPLE_PHOTOS.map((p, i) => {
          const offset = (i - index + total) % total
          const pos = offset <= 2 ? `pos-${offset}` : 'pos-hidden'
          return (
            <div
              key={p.src}
              className={`stack-card ${pos}`}
              onClick={() => { if (offset !== 0) setIndex(i) }}
            >
              <img src={p.src} alt={p.alt} className="stack-img" draggable={false} />
            </div>
          )
        })}
        <button className="carousel-btn prev stack-nav" onClick={() => go(-1)} aria-label="Previous photo">‹</button>
        <button className="carousel-btn next stack-nav" onClick={() => go(1)} aria-label="Next photo">›</button>
      </div>
      <div className="stack-dots">
        {COUPLE_PHOTOS.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot${i === index ? ' active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to photo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

function Couple() {
  return (
    <section className="section" id="couple">
      <div className="eyebrow">The Couple</div>
      <h2 className="h2">Two souls, one celebration</h2>
      <p className="sub">
        We said yes to forever, now we’d love for you to say yes to our wedding festivities 💕
      </p>
      <div className="couple-photo-wrap">
        <CoupleCarousel />
      </div>
      <div className="couple-grid">
        <div className="person">
          <h3>{BRIDE_NAME} Yadav</h3>
          <div className="role">The Bride</div>
          <p>Looking forward to celebrating this beautiful new beginning with you!</p>
        </div>
        <div className="person">
          <h3>{GROOM_NAME} Kataria</h3>
          <div className="role">The Groom</div>
          <p>We can't wait to celebrate our special day with you!</p>
        </div>
      </div>
    </section>
  )
}

function Functions() {
  return (
    <section className="section" id="functions">
      <div className="eyebrow">When & What</div>
      <h2 className="h2">Wedding Functions</h2>
      <p className="sub">Join us for two days of love, laughter and blessings. Please arrive a little early.</p>
      <div className="func-grid">
        {FUNCTIONS.map((f) => (
          <article className="func" key={f.key}>
            <div className={`func-accent ${f.key}`} />
            <div className="func-top">
              <div className="func-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <span className="func-date">{f.date} • {f.time}</span>
            </div>
            <div className="func-body">
              <p>{f.desc}</p>
              <p style={{ marginTop: 10 }}><strong>Dress code:</strong> {f.dress}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Venue() {
  return (
    <section className="section" id="venue">
      <div className="eyebrow">Where</div>
      <h2 className="h2">The Venue</h2>
      <p className="sub">We look forward to welcoming you to celebrate these special moments with us.</p>
      <div className="venue">
        <div className="venue-left">
          <div className="eyebrow" style={{ textAlign: 'left', color: '#a85d67' }}>Grand Mirage (Tulip)</div>
          <h3>Our Wedding Celebrations</h3>
          <p>Join us at Grand Mirage (Tulip) as Deepika & Sparsh begin their forever.</p>
          <div className="venue-meta">
            <div>📍 {VENUE}</div>
            <div>🌼 Haldi: Friday, 11 December 2026 • 3:00 PM onwards</div>
            <div>🎆 Wedding: Saturday, 12 December 2026 • 7:30 PM onwards</div>
          </div>
          <div className="hero-buttons" style={{ justifyContent: 'flex-start', flexWrap: 'wrap' }}>
            <a className="btn btn-primary" href={HALDI_MAPS_URL} target="_blank" rel="noreferrer">Haldi Location</a>
            <a className="btn btn-ghost" href={WEDDING_MAPS_URL} target="_blank" rel="noreferrer">Wedding Location</a>
          </div>
        </div>
        <div className="venue-right">
          <div className="map-card">
            <h4>Getting there</h4>
            <p>Use the location links to open the correct venue directions in Google Maps.</p>
            <p>Please check the event-specific location before travelling.</p>
            <a className="btn btn-ghost" href={WEDDING_MAPS_URL} target="_blank" rel="noreferrer">Get Wedding Directions →</a>
          </div>
        </div>
      </div>
    </section>
  )
}


function Rsvp() {
  return (
    <section className="section" id="rsvp">
      <div className="eyebrow">RSVP</div>
      <h2 className="h2">Will you join us?</h2>
      <p className="sub">Please let us know if you can join us by filling out the RSVP form.</p>
      <div className="rsvp">
        <div style={{ fontSize: 40 }}>💛</div>
        <p style={{ color: 'var(--muted)', margin: '10px 0 20px' }}>
          Kindly confirm your presence. We look forward to celebrating with you!
        </p>
        {GOOGLE_FORM_PAGE ? (
          <a className="btn btn-primary" href={GOOGLE_FORM_PAGE} target="_blank" rel="noreferrer" style={{ width: '100%' }}>
            Open RSVP Form ❤
          </a>
        ) : (
          <p className="sub">RSVP form link coming soon.</p>
        )}
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <Family />
      <Couple />
      <Functions />
      <Venue />
      <Rsvp />
      <footer>
        <div className="shloka" style={{ color: '#fff' }}>॥ शुभ विवाह ॥</div>
        <div className="foot-names">Deepika ❤ Sparsh</div>
        <div>11th & 12th December 2026 • {VENUE}</div>
        <span className="hash">Deepika & Sparsh</span>
        <small>Made with love • We look forward to celebrating with you ✨</small>
      </footer>
    </div>
  )
}
