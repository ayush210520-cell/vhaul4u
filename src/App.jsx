import { useEffect, useState } from 'react'
import HeroTypewriter from './components/HeroTypewriter.jsx'
import LogisticsVisual from './components/LogisticsVisual.jsx'
import ShipmentQuoteForm from './components/ShipmentQuoteForm.jsx'
import Careers from './pages/Careers.jsx'
import { useHashRoute } from './hooks/useHashRoute.js'
import './App.css'

const navLinks = [
  'News',
  'Solutions',
  'Ship Freight & Tools',
  'Resources',
  'About Us',
  'Careers',
  'Drivers',
]

const quickLinks = [
  { label: 'Track a Shipment', icon: 'track' },
  { label: 'Get a Quote', icon: 'quote' },
  { label: 'Service Map', icon: 'map' },
  { label: 'Service Schedules', icon: 'schedule' },
  { label: 'Start a Shipment', icon: 'ship' },
]

const services = [
  {
    title: 'Brokerage',
    text: 'Single freight solution or multi-service approach — we simplify freight management with expertise and flexibility.',
    featured: true,
  },
  {
    title: 'Door-to-Door Guaranteed Delivery',
    text: 'Premium door-to-door speed with a Money Back Guarantee when timing cannot slip.',
    featured: true,
  },
  {
    title: 'Expedited LTL',
    text: 'Consistent, on-time Expedited LTL across North America to boost your productivity.',
    featured: true,
  },
  {
    title: 'Truckload',
    text: 'Long haul, regional, or local in the U.S. including Alaska, Hawaii, and Puerto Rico, plus Canada and Mexico.',
    featured: true,
  },
  {
    title: 'Intermodal Drayage',
    text: 'Optimize import and export from port or rail to final delivery — intact and on time.',
    featured: true,
  },
]

const newsItems = [
  {
    type: 'Press Releases',
    headline: 'VHAUL4U Releases 2024 Environmental, Social and Governance Report',
  },
  {
    type: 'Press Releases',
    headline: 'VHAUL4U Announces New Chief Commercial Officer',
  },
  {
    type: 'Press Releases',
    headline: 'VHAUL4U Raises $350,000 for Veterans at Annual Drive for Hope Golf Tournament',
  },
]

function QuickIcon({ name }) {
  const common = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }
  switch (name) {
    case 'track':
      return (
        <svg {...common}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <circle cx="12" cy="11" r="2" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'quote':
      return (
        <svg {...common}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
        </svg>
      )
    case 'map':
      return (
        <svg {...common}>
          <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
          <line x1="8" y1="2" x2="8" y2="18" />
          <line x1="16" y1="6" x2="16" y2="22" />
        </svg>
      )
    case 'schedule':
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5 19h10v2H5z" />
        </svg>
      )
  }
}

export default function App() {
  const route = useHashRoute()
  const [navElevated, setNavElevated] = useState(false)
  const [navHover, setNavHover] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const isCareers = route === 'careers'

  useEffect(() => {
    const threshold = 20
    const onScroll = () => setNavElevated(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!navOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [navOpen])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setNavOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const navSolid = navElevated || navHover

  return (
    <div className="app">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      {navOpen ? (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Close menu"
          onClick={() => setNavOpen(false)}
        />
      ) : null}

      <header
        className={`site-header${navSolid ? ' is-elevated' : ''}${navOpen ? ' is-drawer-open' : ''}`}
        onMouseEnter={() => setNavHover(true)}
        onMouseLeave={() => setNavHover(false)}
      >
        <div className="header-inner">
          <a
            href="/"
            className="logo"
            onClick={(e) => {
              e.preventDefault()
              setNavOpen(false)
              window.location.hash = ''
            }}
          >
            <img src="/vhaul4u-logo-caps.png" alt="VHAUL4U" style={{ height: '60px', width: 'auto', objectFit: 'contain', maxWidth: '200px' }} />
          </a>
          <button
            type="button"
            className={`nav-toggle${navOpen ? ' is-active' : ''}`}
            aria-expanded={navOpen}
            aria-controls="primary-nav"
            onClick={() => setNavOpen((o) => !o)}
          >
            <span className="sr-only">{navOpen ? 'Close menu' : 'Open menu'}</span>
            <span className="nav-toggle-bar" aria-hidden />
            <span className="nav-toggle-bar" aria-hidden />
            <span className="nav-toggle-bar" aria-hidden />
          </button>
          <nav
            id="primary-nav"
            className={`site-nav${navOpen ? ' is-open' : ''}`}
            aria-label="Primary"
          >
            <ul className="nav-primary">
              {navLinks.map((label) => (
                <li key={label}>
                  <a
                    href={label === 'Careers' ? '#careers' : `#${label.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setNavOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {isCareers ? (
        <Careers />
      ) : (
        <>
      <section className="hero hero--fullscreen" aria-label="Hero">
        <div className="hero-bg" aria-hidden />
        <div className="hero-inner">
          <div className="hero-cards">
            <div className="glass-hero-card">
              <p className="hero-eyebrow">Your Nationwide Shipping Partner</p>
              <h1>VHAUL4U</h1>
              <HeroTypewriter />
              <div className="hero-ctas">
                <a className="btn btn-primary" href="#learn">
                  Learn More
                </a>
                <a className="btn btn-outline-light" href="#expert">
                  Ask an Expert
                </a>
              </div>
            </div>
            <div className="hero-shipment-card" aria-label="Quote shipment">
              <ShipmentQuoteForm />
            </div>
          </div>
        </div>
      </section>

      <div className="quick-strip-wrap">
        <div className="quick-strip">
          <div className="quick-strip-inner">
          {quickLinks.map(({ label, icon }) => (
            <a key={label} href="#action" className="quick-link">
              <QuickIcon name={icon} />
              {label}
            </a>
          ))}
          </div>
        </div>
      </div>

      <main id="main">
        <section className="section freight-intro" id="learn">
          <div className="section-inner freight-intro__grid">
            <div className="freight-intro__copy">
              <h2>A North American Freight Solution</h2>
              <h3>Your Freight Delivered</h3>
              <p className="lead">
                Moving your freight is easier with expansive reach, many solutions, and industry-leading speeds. Our
                footprint spans North America — goods move with speed and efficiency on scheduled lanes for consistent
                transport. Trusted to deliver intact and on time, we help you use a single solution or combine modes to
                streamline transportation.
              </p>
              <div className="hero-ctas">
                <a className="btn btn-secondary" href="#contact">
                  Contact VHAUL4U
                </a>
                <a className="btn btn-primary" href="#quote">
                  Get a Quote
                </a>
              </div>
            </div>
            <div className="freight-intro__visual">
              <LogisticsVisual />
            </div>
          </div>
        </section>

        <section className="section section-modes" aria-labelledby="modes-heading">
          <div className="section-modes-intro">
            <h2 id="modes-heading">Every mode. One connected network.</h2>
            <p className="lead">
              Air, ground, and ocean — orchestrated with visibility and control so your freight keeps moving on time.
            </p>
            <div className="modes-intro-3d">
              <LogisticsVisual compact />
            </div>
          </div>
          <div className="modes-bands-shell">
            <div className="modes-bands">
            <article className="mode-band mode-band--air">
              <div className="mode-band__inner">
                <span className="mode-kicker">Air</span>
                <h3>Air freight &amp; expedited uplift</h3>
                <p>
                  High-velocity lanes when the clock matters — coordinated handoffs and predictable cutoffs across the
                  network.
                </p>
                <a className="btn-ghost-light" href="#solutions">
                  View air solutions
                </a>
              </div>
            </article>
            <article className="mode-band mode-band--land">
              <div className="mode-band__inner">
                <span className="mode-kicker">Ground</span>
                <h3>Truckload, LTL &amp; final mile</h3>
                <p>
                  Scheduled capacity and precision routing across North America — built for consistency, safety, and
                  on-time delivery.
                </p>
                <a className="btn-ghost-light" href="#solutions">
                  Explore ground
                </a>
              </div>
            </article>
            <article className="mode-band mode-band--sea">
              <div className="mode-band__inner">
                <span className="mode-kicker">Ocean</span>
                <h3>Port-to-door &amp; intermodal</h3>
                <p>
                  Seamless connections from water to warehouse — drayage, transloads, and integrated visibility end to
                  end.
                </p>
                <a className="btn-ghost-light" href="#solutions">
                  See intermodal
                </a>
              </div>
            </article>
            </div>
          </div>
        </section>

        <section className="section section-muted">
          <div className="section-inner two-col">
            <div>
              <h2>Serving North America</h2>
              <p className="lead">
                Search for a local terminal and connect with our network for pickup, delivery, and support.
              </p>
            </div>
            <div className="terminal-glass terminal-search" id="search">
              <label htmlFor="terminal-q">Search for Local Terminal</label>
              <div className="search-field">
                <input id="terminal-q" type="search" placeholder="City, ZIP, or terminal" name="terminal" />
                <button type="button" className="btn btn-secondary">
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner">
            <h2>Featured Services</h2>
            <p className="lead">
              Explore solutions built for speed, visibility, and reliability across ground transportation.
            </p>
            <div className="services-grid">
              {services.map((s, i) => (
                <article
                  key={s.title}
                  className={`service-card service-card--animate${s.featured ? ' featured' : ''}`}
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <div className="card-actions">
                    <button type="button" className="btn-text">
                      Learn More
                    </button>
                    <button type="button" className="btn btn-primary">
                      Get a Quote
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-navy" id="about-vhaul4u">
          <div className="section-inner story-block">
            <h2>The VHAUL4U Story — Built for Performance.</h2>
            <p className="lead">
              Our promise is simple: speed, accuracy, and reliability on every shipment. From day one we have been
              driven by innovation — operating like planes on the ground to move freight faster, smarter, and with
              precision.
            </p>
            <p className="lead">
              Today we deliver coast to coast through state-of-the-art facilities, advanced technology, and a team
              committed to transparency and safety. With real-time visibility and guaranteed services, VHAUL4U is built
              for performance. Committed to your success.
            </p>
            <a className="btn btn-primary" href="#contact">
              Contact Us
            </a>
          </div>
        </section>

        <section className="tech-showcase" aria-label="Digital logistics">
          <div className="tech-showcase__copy">
            <p className="section-kicker">Smart logistics</p>
            <h2>Visibility in your hands. Performance at scale.</h2>
            <p className="lead">
              Digital tools, live updates, and proactive exception handling — so your team spends less time chasing
              freight and more time serving customers.
            </p>
            <div className="hero-ctas">
              <a className="btn btn-primary" href="#quote">
                Get a Quote
              </a>
              <a className="btn btn-secondary" href="#action">
                Open tracking
              </a>
            </div>
          </div>
          <div
            className="tech-showcase__visual"
            role="img"
            aria-label="Logistics professional using a tablet near a fleet of trucks"
          />
        </section>

        <section className="section" id="solutions">
          <div className="section-inner">
            <h2>Let&apos;s Get Moving</h2>
            <p className="lead">
              A comprehensive suite of freight solutions with decades of mastery in ground transportation.
            </p>
            <div className="solutions-tabs">
              <span className="tab-pill">Expedited LTL</span>
              <span className="tab-pill">Truckload</span>
              <span className="tab-pill">Intermodal</span>
            </div>
            <a className="btn btn-secondary" href="#quote">
              Get a Quote
            </a>
          </div>
        </section>

        <section className="section newsletter-section">
          <div className="section-inner">
            <h3>Join our mailing list</h3>
            <p className="lead">Industry alerts, news, jobs, and insights — straight to your inbox.</p>
            <div className="form-grid">
              <input type="text" placeholder="First Name" name="nlFirst" />
              <input type="text" placeholder="Last Name" name="nlLast" />
              <input type="text" placeholder="Company" name="nlCompany" />
              <input type="email" placeholder="Your email address" name="nlEmail" />
              <button type="button" className="btn btn-primary">
                Sign Up
              </button>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--blue-grey)', marginTop: '1rem' }}>
              VHAUL4U respects your privacy. Review our Privacy Policy and Terms of Use.
            </p>
          </div>
        </section>

        <section className="section" id="news">
          <div className="section-inner">
            <h2>News &amp; Announcements</h2>
            <ul className="news-list">
              {newsItems.map((n) => (
                <li key={n.headline}>
                  <div className="news-meta">{n.type}</div>
                  <a href="#news">{n.headline}</a>
                </li>
              ))}
            </ul>
            <button type="button" className="btn-text">
              View More Resources
            </button>
          </div>
        </section>
      </main>
        </>
      )}

      <footer className="site-footer" id="contact">
        <div className="footer-inner">
          <p className="footer-tagline">
            VHAUL4U is a single-source provider that offers a robust menu of ground transportation and freight services.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            <a href="#login" style={{ fontWeight: 700, color: 'var(--white)' }}>
              Login
            </a>
            {' · '}
            <a href="#driver" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Driver Portal
            </a>
            {' · '}
            <a href="#employee" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Employee Portal
            </a>
          </p>
          <div className="footer-columns">
            <div>
              <h4>Home</h4>
              <ul>
                {navLinks.slice(0, 6).map((l) => (
                  <li key={l}>
                    <a href={l === 'Careers' ? '#careers' : '#'}>{l}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Solutions</h4>
              <ul>
                <li>
                  <a href="#">Expedited LTL</a>
                </li>
                <li>
                  <a href="#">Truckload</a>
                </li>
                <li>
                  <a href="#">Intermodal</a>
                </li>
                <li>
                  <a href="#">Brokerage</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>About</h4>
              <ul>
                <li>
                  <a href="#">Leadership</a>
                </li>
                <li>
                  <a href="#">Investors</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">CA Consumer Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-contact">
            <p>
              Questions? Contact our team at{' '}
              <a href="mailto:custserv@vhaul4u.com">custserv@vhaul4u.com</a>, call{' '}
              <a href="tel:8007266654">(800) 726-6654</a>
            </p>
            <p>Customer service hours: Monday - Friday 7 AM to 8 PM EST.</p>
            <p style={{ marginTop: '1rem', fontWeight: 700 }}>CUSTSERV@VHAUL4U.COM</p>
            <p>3200 Olympus Blvd #300, Coppell, TX 75019</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
