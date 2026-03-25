export default function Careers() {
  return (
    <main id="main" className="careers-page">
      <section className="careers-hero section">
        <div className="section-inner">
          <p className="section-kicker" style={{ color: 'var(--signal-red)' }}>
            Careers
          </p>
          <h1>Drive VHAUL4U</h1>
          <p className="lead" style={{ maxWidth: '40rem' }}>
            From local roles to over-the-road opportunities, VHAUL4U is the carrier to fuel your future. Join a team
            that values safety, growth, and performance.
          </p>
        </div>
      </section>

      <section className="section section-muted">
        <div className="section-inner">
          <div className="careers-card">
            <h2>Open roles &amp; driver opportunities</h2>
            <p>
              Tell us a bit about yourself — our talent team will connect you with roles that match your experience
              and goals.
            </p>
            <a className="btn btn-primary" href="#apply">
              Drive with us
            </a>
            <div className="form-grid" id="apply">
              <input type="text" placeholder="First Name" name="firstName" autoComplete="given-name" />
              <input type="text" placeholder="Last Name" name="lastName" autoComplete="family-name" />
              <input type="text" placeholder="Company" name="company" autoComplete="organization" />
              <input type="email" placeholder="Your email address" name="email" autoComplete="email" />
              <button type="button" className="btn btn-outline-light" style={{ borderColor: 'rgba(255,255,255,0.6)' }}>
                Submit interest
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <h2>Why VHAUL4U</h2>
          <p className="lead">
            Competitive pay, modern equipment, and a culture built on respect for drivers and operations teams — because
            moving freight starts with people who show up every day.
          </p>
          <a
            className="btn btn-secondary"
            href="/"
            onClick={(e) => {
              e.preventDefault()
              window.location.hash = ''
            }}
          >
            Back to home
          </a>
        </div>
      </section>
    </main>
  )
}
