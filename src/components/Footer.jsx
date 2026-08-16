import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            MYZEK <span>TECHNOLOGIES</span>
          </div>
          <p className="footer-tagline">Reliable Power Solutions, Factory Direct</p>
        </div>

        <div className="footer-col">
          <h4>Site</h4>
          <Link to="/about">About Us</Link>
          <Link to="/products">Products</Link>
          <Link to="/applications">Applications</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>Street address, City, Country</p>
          <p>+1 (000) 000-0000</p>
          <p>info@myzektechnologies.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} Myzek Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
