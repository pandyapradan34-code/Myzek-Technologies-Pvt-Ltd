import React, { useState } from 'react';
import details from '../data/contect_us.js';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await fetch('http://127.0.0.1:8000/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', company: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page page-contact">
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">Contact Us</p>
          <h1>Get in touch</h1>
        </div>
      </section>

      <section className="container section contact-grid" data-aos="fade-up">
        {/* OFFICE / HQ */}
        <div className="contact-locations">
          {details.map((location) => (
            <div className="location-card" data-aos="fade-up" key={location.id}>
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

        {/* CONTACT FORM */}
        <form className="form" onSubmit={handleSubmit}>
          {submitStatus === 'success' && (
            <div className="alert alert-success" style={{ padding: '1rem', backgroundColor: '#e6fffa', color: '#2c7a7b', marginBottom: '1rem', borderRadius: '4px' }}>
              Thank you for contacting us. Your message has been sent successfully!
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="alert alert-error" style={{ padding: '1rem', backgroundColor: '#fff5f5', color: '#c53030', marginBottom: '1rem', borderRadius: '4px' }}>
              Oops! Something went wrong. Please try again later.
            </div>
          )}
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Full name *</label>
              <input id="name" type="text" placeholder="Your name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-field">
              <label htmlFor="company">Company</label>
              <input id="company" type="text" placeholder="Company name" value={formData.company} onChange={handleChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="email">Email *</label>
              <input id="email" type="email" placeholder="you@company.com" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-field">
              <label htmlFor="phone">Phone</label>
              <input id="phone" type="tel" placeholder="+91 00000 00000" value={formData.phone} onChange={handleChange} />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Share your component requirement" value={formData.message} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-accent" style={{ justifySelf: 'start' }} disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </section>
    </div>
  )
}
