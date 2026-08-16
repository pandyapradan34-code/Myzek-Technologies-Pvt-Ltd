export default function RequestSample() {
  return (
    <div className="page page-request-sample">
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">Request a Sample</p>
          <h1>Try before you order</h1>
        </div>
      </section>

      <section className="container section">
        <p style={{ maxWidth: '60ch', marginBottom: 'var(--space-5)' }}>
          Fill out the form below and our team will follow up with sample availability
          and lead time.
        </p>
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="rs-name">Full name</label>
              <input id="rs-name" type="text" placeholder="Your name" />
            </div>
            <div className="form-field">
              <label htmlFor="rs-company">Company</label>
              <input id="rs-company" type="text" placeholder="Company name" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="rs-email">Email</label>
              <input id="rs-email" type="email" placeholder="you@company.com" />
            </div>
            <div className="form-field">
              <label htmlFor="rs-phone">Phone</label>
              <input id="rs-phone" type="tel" placeholder="+1 (000) 000-0000" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="rs-product">Product / category</label>
              <input id="rs-product" type="text" placeholder="e.g. Power Components" />
            </div>
            <div className="form-field">
              <label htmlFor="rs-qty">Quantity</label>
              <input id="rs-qty" type="text" placeholder="e.g. 5 units" />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="rs-message">Additional details</label>
            <textarea id="rs-message" placeholder="Specs, intended use, timeline..." />
          </div>
          <p className="form-note">This form is UI only for now — connect it to email or a form service when ready.</p>
          <button type="submit" className="btn btn-accent" style={{ justifySelf: 'start' }}>
            Submit Request
          </button>
        </form>
      </section>
    </div>
  )
}
