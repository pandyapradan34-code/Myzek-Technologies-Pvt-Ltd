import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import companyLogo from '../../WhatsApp Image 2026-08-16 at 7.57.32 PM.jpeg'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/applications', label: 'Applications' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <NavLink to="/" className="navbar-logo" onClick={() => setOpen(false)}>
          <img className="navbar-logo-image" src={companyLogo} alt="Myzek Technologies Private Limited" />
        </NavLink>

        <button
          type="button"
          className={`navbar-toggle ${open ? 'is-open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar-links ${open ? 'is-open' : ''}`} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/request-sample"
            className="navbar-cta"
            onClick={() => setOpen(false)}
          >
            Request Sample
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
