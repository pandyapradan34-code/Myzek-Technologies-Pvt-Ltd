import details from '../data/contect_us.js';

export default function Contact() {
  return (
    <div className="page page-contact">
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">Contact Us</p>
          <h1>Get in touch</h1>
        </div>
      </section>


      <section className="container section contact-grid">
        {/* OFFICE / HQ */}
        <div className="contact-locations">
          {details.map((location) => (
            <div className="location-card" key={location.id}>
              <h3>{location.title}</h3>
              <dl>
                <dt>Address</dt>
                <dd>
                  {location.address.map((line, idx) => (
                    <span key={idx}>
                      {line}
                      {idx < location.address.length - 1 && <br />}
                    </span>
                  ))}
                </dd>
                <dt>Phone</dt>
                <dd>
                  <a href={`tel:${location.phoneLink}`}>{location.phone}</a>
                </dd>
                <dt>WhatsApp</dt>
                <dd>
                  <a href={`https://wa.me/${location.whatsappLink}`} target="_blank" rel="noreferrer">
                    {location.whatsapp}
                  </a>
                </dd>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${location.email}`}>{location.email}</a>
                </dd>
                <dt>Business Hours</dt>
                <dd>
                  {location.businessHours.map((line, idx) => (
                    <span key={idx}>
                      {line}
                      {idx < location.businessHours.length - 1 && <br />}
                    </span>
                  ))}
                </dd>
              </dl>
            </div>
          ))}
        </div>

        {/* CONTACT FORM (UI only — not yet wired to a backend) */}
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Full name</label>
              <input id="name" type="text" placeholder="Your name" />
            </div>
            <div className="form-field">
              <label htmlFor="company">Company</label>
              <input id="company" type="text" placeholder="Company name" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="you@company.com" />
            </div>
            <div className="form-field">
              <label htmlFor="phone">Phone</label>
              <input id="phone" type="tel" placeholder="+91 00000 00000" />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Share your component requirement" />
          </div>
          <p className="form-note">
            This form is UI only for now — connect it to email or a form service when ready.
          </p>
          <button type="submit" className="btn btn-accent" style={{ justifySelf: 'start' }}>
            Send Message
          </button>
        </form>
      </section>
      
    </div>
  )
}