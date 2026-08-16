import { Link } from 'react-router-dom'
import companyLogo from '../../WhatsApp Image 2026-08-16 at 7.57.32 PM.jpeg'


export default function Footer() {
  return (
    <footer className="new-footer">
      <div className="new-footer-inner">
        
        <div className="new-footer-col">
          <img src={companyLogo} alt="Myzek Logo" style={{ height: '48px', marginBottom: '1.5rem', borderRadius: '4px' }} />
          <p className="new-footer-text">
            Myzek Technologies Private Limited<br />
            Reliable power solutions for industrial manufacturing.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <p className="new-footer-text" style={{ fontSize: '0.8rem' }}>
              Email: sales@myzek.com<br />
              Phone: +91 123 456 7890
            </p>
          </div>
        </div>

        <div className="new-footer-col">
          <h4>Company</h4>
          <Link to="/about" className="new-footer-link">About Us</Link>
          <Link to="/careers" className="new-footer-link">Careers</Link>
          <Link to="/contact" className="new-footer-link">Contact Us</Link>
        </div>

        <div className="new-footer-col">
          <h4>Product &amp; Services</h4>
          <Link to="/products" className="new-footer-link">Power Supplies</Link>
          <Link to="/products" className="new-footer-link">DC-DC Converters</Link>
          <Link to="/products" className="new-footer-link">Transceivers</Link>
          <Link to="/applications" className="new-footer-link">All Applications</Link>
        </div>

        <div className="new-footer-col">
          <h4>Legal &amp; Resources</h4>
          <Link to="/" className="new-footer-link">Privacy Policy</Link>
          <Link to="/" className="new-footer-link">Terms &amp; Conditions</Link>
          <Link to="/contact" className="new-footer-link">Support</Link>
        </div>

      </div>

      <div className="new-footer-bottom">
        &copy; {new Date().getFullYear()} Myzek Technologies Private Limited. All rights reserved.
      </div>
    </footer>
  )
}
