import { useEffect, useRef } from 'react'
import companyLogo from '../assets/myzek-logo-light.png'


export default function Home() {
  const logoRef = useRef(null)

  useEffect(() => {
    const logo = logoRef.current
    if (!logo) return undefined

    const play = () => logo.classList.add('play')
    if (!('IntersectionObserver' in window)) {
      play()
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          play()
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(logo)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="page page-home">
      {/* HERO / BANNER — currently 1 static banner. Swap the copy below for
          the real headline, or convert to a 3–4 image slider later. */}
      <section className="hero">
        <div className="hero-plate" aria-hidden="true" />
        <div className="container hero-content">
          <div className="hero-text">
            <p className="eyebrow">Industrial Manufacturing</p>
            <h1>Reliable Power Solutions, Factory Direct</h1>
            <p className="hero-lede">
              Myzek Technologies designs and manufactures precision components for
              demanding industrial applications — engineered for durability, tested
              for consistency, and shipped worldwide.
            </p>
            <div className="hero-actions">
              <a className="btn btn-accent" href="/products">
                View Products
              </a>
              <a className="btn btn-ghost" href="/contact">
                Contact Sales
              </a>
            </div>
          </div>
          <div className="logo-stage">
            <div className="scan" ref={logoRef}>
              <img src={companyLogo} alt="Myzek Technologies Private Limited" />
              <span className="beam" />
            </div>
          </div>

        </div>
      </section>

      {/* INTRO / WHAT WE DO */}
      <section className="container section">
        <div className="section-intro">
          <p className="eyebrow">What We Do</p>
          <h2>Built for industry, delivered at scale</h2>
        </div>
        <p style={{ maxWidth: '68ch' }}>
          Replace this paragraph with 2–3 sentences describing your main products or
          services — what you manufacture, the standards you build to, and what makes
          your process reliable for customers.
        </p>
      </section>

      {/* PRODUCT CATEGORY HIGHLIGHTS */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Products</p>
            <h2>Featured categories</h2>
          </div>
          <div className="card-grid">
            {['Power Components', 'Control Systems', 'Sensors & Instrumentation'].map(
              (name) => (
                <div className="card" key={name}>
                  <div className="placeholder-media">
                    <span className="placeholder-media-icon">📦</span>
                    <span>Category photo</span>
                  </div>
                  <h3>{name}</h3>
                  <p>One-line description of this product category goes here.</p>
                  <a className="card-link" href="/products">
                    View category →
                  </a>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* APPLICATIONS / INDUSTRIES SERVED */}
      <section className="container section">
        <div className="section-intro">
          <p className="eyebrow">Applications</p>
          <h2>Industries we serve</h2>
        </div>
        <div className="badge-row">
          {['Automotive', 'Energy & Power', 'Industrial Automation', 'Telecommunications'].map(
            (name) => (
              <span className="badge" key={name}>
                {name}
              </span>
            ),
          )}
        </div>
      </section>

      {/* TRUST STRIP: certifications, awards, customer logos */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Trusted By</p>
            <h2>Certifications &amp; customers</h2>
          </div>
          <div className="logo-grid">
            {Array.from({ length: 5 }).map((_, i) => (
              <div className="placeholder-media" key={i}>
                <span>Logo {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
