import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import companyLogo from '../assets/myzek-logo.jpeg'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/applications', label: 'Applications' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={`new-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="new-navbar-inner">
          <NavLink to="/" className="new-navbar-brand" onClick={() => setOpen(false)}>
            <img src={companyLogo} alt="Myzek Logo" style={{ height: '64px', width: 'auto', borderRadius: '4px' }} />
          </NavLink>

          <nav className="new-navbar-links" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `new-navbar-link ${isActive ? 'active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="new-navbar-cta">
            <NavLink to="/request-sample" className="new-navbar-cta-btn">
              Request Sample
            </NavLink>
          </div>

          <button
            type="button"
            className="new-navbar-mobile-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Slide-out Menu */}
      <div className={`new-navbar-mobile-panel ${open ? 'open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => `new-navbar-link ${isActive ? 'active' : ''}`}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
        <NavLink to="/request-sample" className="new-navbar-cta-btn" onClick={() => setOpen(false)}>
          Request Sample
        </NavLink>
      </div>
    </>
  )
}
