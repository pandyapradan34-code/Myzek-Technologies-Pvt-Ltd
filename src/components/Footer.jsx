import { Link } from 'react-router-dom'
import companyLogo from '../assets/myzek-logo-light.png'
import { useEffect, useRef } from 'react'

export default function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('footer-animate')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const cols = footerRef.current?.querySelectorAll('.new-footer-col')
    if (cols) {
      cols.forEach(col => observer.observe(col))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer className="new-footer" ref={footerRef}>
      <div className="new-footer-inner">
        
        <div className="new-footer-col">
          <div className="logo-shine" style={{ '--logo': `url(${companyLogo})`, display: 'inline-block', marginBottom: '1.5rem' }}>
            <img src={companyLogo} alt="Myzek Logo" style={{ height: '48px' }} />
          </div>
          <p className="new-footer-text">
            YOUR PARTNER IN ELECTRONIC COMPONENTS <br />
            An authorized distributor, stockist &amp; assembler partner of electronic components, 
            supporting industrial, OEM and technology-driven customers across India.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <p className="new-footer-text" style={{ fontSize: '0.8rem' }}>
              Email: <a href="mailto:sales@myzektechnologies.in" style={{ color: 'inherit' }}>sales@myzektechnologies.in</a><br />
              Phone: <a href="tel:+918347469999" style={{ color: 'inherit' }}>+91 83474 69999</a><br />
              WhatsApp: <a href="https://wa.me/918347469999" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>+91 83474 69999</a>
            </p>
          </div>
        </div>

        <div className="new-footer-col">
          <h4>Company</h4>
          <Link to="/about" className="new-footer-link">About Us</Link> <br/>
          <Link to="/contact" className="new-footer-link">Contact Us</Link>
        </div>

        <div className="new-footer-col">
          <h4>Product &amp; Services</h4>
          <Link to="/products?distributor=done" className="new-footer-link">Power Supplies</Link>
          <Link to="/products?distributor=claf" className="new-footer-link">DC-DC Converters</Link>
          <Link to="/products?distributor=claf" className="new-footer-link">Transceivers</Link>
          <Link to="/applications" className="new-footer-link">All Applications</Link>
        </div>

        <div className="new-footer-col">
          <h4>Legal &amp; Resources</h4>
          <Link to="/privacy" className="new-footer-link">Privacy Policy</Link>
          <Link to="/terms" className="new-footer-link">Terms &amp; Conditions</Link>
          <Link to="/contact" className="new-footer-link">Support</Link>
        </div>

      </div>

      <div className="new-footer-bottom">
        &copy; {new Date().getFullYear()} Myzek Technologies Private Limited. All rights reserved.
      </div>
    </footer>
  )
}
