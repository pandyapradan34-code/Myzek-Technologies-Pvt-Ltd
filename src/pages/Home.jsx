import { useEffect, useRef } from 'react'
import companyLogo from '../assets/myzek-logo-light.png'
import products from '../data/products.js'


export default function Home() {
  const logoRef = useRef(null)

  useEffect(() => {
    // Logo animation
    const logo = logoRef.current
    if (logo) {
      const play = () => logo.classList.add('play')
      if (!('IntersectionObserver' in window)) {
        play()
      } else {
        const logoObserver = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              play()
              logoObserver.disconnect()
            }
          },
          { threshold: 0.35 }
        )
        logoObserver.observe(logo)
      }
    }

    // Scroll reveal animation for sections
    if ('IntersectionObserver' in window) {
      const revealElements = document.querySelectorAll('.reveal')
      const revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      )

      revealElements.forEach(el => revealObserver.observe(el))
      
      return () => {
        revealObserver.disconnect()
      }
    }
  }, [])

  return (
    <div className="page page-home">
      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="hero-plate" aria-hidden="true" />
        <div className="container hero-content">
          <div className="hero-text">
            <p className="eyebrow">Myzek Technologies</p>
            <h1>Precision Power & Electronic Solutions</h1>
            <p className="hero-lede">
              We design and manufacture reliable power supplies, converters, and industrial components engineered for demanding environments and built to last.
            </p>
            <div className="hero-actions">
              <a className="btn btn-accent" href="/products">
                Explore Products &rarr;
              </a>
              <a className="btn btn-ghost" href="/contact">
                Contact Sales
              </a>
            </div>
          </div>
          <div className="logo-stage">
            <div className="scan" ref={logoRef}>
              <div className="logo-shine" style={{ '--logo': `url(${companyLogo})` }}>
                <img src={companyLogo} alt="Myzek Technologies Private Limited" />
              </div>
              <span className="beam" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US SECTION */}
      <section className="section reveal delay-1" data-aos="fade-up">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <p className="eyebrow">About Myzek</p>
            <h2>Built for Industry. Delivered at Scale.</h2>
            <p>
              Myzek Technologies is committed to engineering excellence. We specialize in robust, high-performance power modules and electronic components that meet the strictest international standards.
            </p>
            <p style={{ marginBottom: '2rem' }}>
              From initial prototyping to large-scale manufacturing, our team works closely with you to deliver precision parts that drive your business forward.
            </p>
            <a className="btn btn-accent" href="/about">
              Learn More About Us &rarr;
            </a>
          </div>
          <div className="placeholder-media" style={{ height: '100%', minHeight: '300px' }}>
            <span className="placeholder-media-icon">🏭</span>
            <span>Facility Photo</span>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT / APPLICATION SECTION */}
      <section className="section section-alt" data-aos="fade-up">
        <div className="container">
          <div className="section-intro reveal delay-1" data-aos="fade-up">
            <p className="eyebrow">Products</p>
            <h2>Our Core Offerings</h2>
            <p style={{ maxWidth: '68ch' }}>
              Explore our premium range of power solutions, designed for high efficiency and industrial reliability.
            </p>
          </div>
          <div className="card-grid" data-aos="fade-up">
            {products.slice(0, 3).map(
              (product, idx) => (
                <div className={`card reveal delay-${(idx % 3) + 1}`} key={product.name}>
                  <div className="placeholder-media">
                    <span className="placeholder-media-icon">📦</span>
                    <span>Category photo</span>
                  </div>
                  <h3>{product.name}</h3>
                  <p>{product.range ? `Power Range: ${product.range}` : `Explore our full range of ${product.name.toLowerCase()}.`}</p>
                </div>
              ),
            )}
          </div>
          <div className="reveal delay-1" style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a className="btn btn-accent" href="/products">
              Explore All Products &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* 4. FEATURES / SERVICES SECTION (Applications) */}
      <section className="container section reveal delay-1" data-aos="fade-up">
        <div className="section-intro" data-aos="fade-up">
          <p className="eyebrow">Applications</p>
          <h2>Industries We Serve</h2>
          <p style={{ maxWidth: '68ch' }}>
            Our components power critical infrastructure across a wide variety of sectors, ensuring flawless operation where it matters most.
          </p>
        </div>
        <div className="badge-row" style={{ marginBottom: '3rem' }}>
          {['Automotive', 'Energy & Power', 'Industrial Automation', 'Telecommunications', 'Medical Devices', 'Railways'].map(
            (name) => (
              <span className="badge" key={name}>
                {name}
              </span>
            ),
          )}
        </div>
        <div style={{ textAlign: 'center' }}>
          <a className="btn btn-ghost" href="/applications" style={{ color: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}>
            Explore Applications &rarr;
          </a>
        </div>
      </section>

      {/* 5. TRUST STRIP (Other Important Sections) */}
      <section className="container section reveal delay-1" data-aos="fade-up">
        <div className="section-intro" data-aos="fade-up" style={{ textAlign: 'center', margin: '0 auto 3rem' }}>
          <p className="eyebrow">Trusted By</p>
          <h2>Certifications &amp; Partners</h2>
        </div>
        <div className="logo-grid" style={{ marginBottom: '3rem' }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <div className="placeholder-media" key={i}>
              <span>Partner Logo {i + 1}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CONTACT / CTA SECTION */}
      <section className="section reveal delay-1" data-aos="fade-up" style={{ backgroundColor: 'var(--color-primary)', color: 'white', textAlign: 'center', padding: '6rem 2rem' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>Ready to elevate your operations?</h2>
          <p style={{ color: 'var(--color-text-on-dark-muted)', maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
            Our engineering team is ready to help you find the right components for your next major project. Let's build something powerful together.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a className="btn btn-accent" href="/contact">
              Talk to Our Team &rarr;
            </a>
            <a className="btn btn-ghost" href="/request-sample">
              Request a Sample
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
