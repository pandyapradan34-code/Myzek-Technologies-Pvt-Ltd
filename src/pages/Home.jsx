import { useEffect, useRef } from 'react'
import companyLogo from '../assets/myzek-logo-light.png'
import clafLogo from '../assets/claf.png'
import distributors from '../data/products.js'
import { Car, Zap, Cog, RadioTower, HeartPulse, TrainFront } from 'lucide-react'



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
            {distributors.flatMap(d => d.products).slice(0, 3).map(
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
          
                <div className="industry-grid">
          {[
            { name: 'Automotive', Icon: Car },
            { name: 'Energy & Power', Icon: Zap },
            { name: 'Industrial Automation', Icon: Cog },
            { name: 'Telecommunications', Icon: RadioTower },
            { name: 'Medical Devices', Icon: HeartPulse },
            { name: 'Railways', Icon: TrainFront },
          ].map(({ name, Icon }) => (
            <div className="industry-tile" key={name}>
              <Icon size={26} strokeWidth={1.75} />
              <p>{name}</p>
            </div>
          ))}

        </div>
        </div>
                <div style={{ textAlign: 'center' }}>
          <a className="btn btn-accent" href="/applications">
            Explore More Applications &rarr;
          </a>
        </div>
      </section>

      {/* 5. TRUST STRIP (Other Important Sections) */}
      {/* <section className="container section reveal delay-1" data-aos="fade-up">
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
      </section> */}

    {/* 5. TRUST STRIP (Other Important Sections) */}
{/* <section className="container section reveal delay-1" data-aos="fade-up">
  <div className="section-intro" data-aos="fade-up" style={{ textAlign: 'center', margin: '0 auto 3rem' }}>
    <p className="eyebrow">Trusted By</p>
    <h2>  Partners</h2>
  </div>
  <div
    className="logo-grid"
    style={{
      marginBottom: '3rem',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '1.5rem',
    }}
  >
    {["MORNSUN", "DONE", "CLAF"].map((name) => (
      <div className="placeholder-media" key={name}>
        <span>{name}</span>
      </div>
    ))}
  </div>
</section> */}
      {/* 5. TRUST STRIP */}
      {/* <section className="section reveal delay-1" data-aos="fade-up">
        <style>{`
          .partner-marquee { overflow: hidden; width: 100%; }
          .partner-marquee__track {
            display: flex;
            width: max-content;
            animation: partner-slide 22s linear infinite;
          }
          .partner-marquee:hover .partner-marquee__track {
            animation-play-state: paused;
          }
          .partner-marquee__item {
            padding: 0 3rem;
            font-size: 1.5rem;
            font-weight: 600;
            letter-spacing: 0.07em;
            color: var(--color-primary);
            white-space: nowrap;
          }
          @keyframes partner-slide {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @media (prefers-reduced-motion: reduce) {
            .partner-marquee__track { animation: none; width: 100%; justify-content: center; }
          }
        `}</style>

        <div className="container">
          <div className="section-intro" data-aos="fade-up" style={{ textAlign: 'center', margin: '0 auto 3rem' }}>
            <p className="eyebrow">Trusted By</p>
            <h2>Partners</h2>
          </div>
        </div>

        <div className="partner-marquee" style={{ marginBottom: '3rem' }}>
          <div className="partner-marquee__track">
            {["MORNSUN", "DONE", "CLAF", "MORNSUN", "DONE", "CLAF",
              "MORNSUN", "DONE", "CLAF", "MORNSUN", "DONE", "CLAF"].map((name, i) => (
              <span className="partner-marquee__item" key={i}>{name}</span>
            ))}
          </div>
        </div>
      </section> */}




            {/* 5. TRUST STRIP
      <section className="container section reveal delay-1" data-aos="fade-up">
        <style>{`
          .partner-split {
            display: grid;
            grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
            gap: 3rem;
            align-items: center;
            margin-bottom: 3rem;
          }
          .partner-tiles {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 1rem;
          }
          .partner-tile {
            height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #e3e6e9;
            border-radius: 10px;
            font-size: 1.15rem;
            font-weight: 600;
            letter-spacing: 0.04em;
            color: var(--color-primary);
            transition: border-color 0.25s ease, transform 0.25s ease;
          }
          .partner-tile:hover {
            border-color: var(--color-accent, #E07B24);
            transform: translateY(-3px);
          }
          @media (max-width: 900px) {
            .partner-split { grid-template-columns: 1fr; gap: 2rem; }
          }
          @media (max-width: 520px) {
            .partner-tiles { grid-template-columns: 1fr; }
            .partner-tile { height: 90px; }
          }
        `}</style>

        <div className="partner-split">
          <div data-aos="fade-up">
            <p className="eyebrow">Trusted By</p>
            <h2>Partners &amp; Certifications</h2>
            <p style={{ margin: 0, maxWidth: '42ch' }}>
              We work with established manufacturers and certification bodies to keep quality consistent across every module we supply.
            </p>
          </div>

          <div className="partner-tiles" data-aos="fade-up">
            {["MORNSUN", "DONE", "CLAF"].map((name) => (
              <div className="partner-tile" key={name}>
                {name}
              </div>
            ))}
          </div>
        </div>
      </section> */}
      
           {/* 5. TRUST STRIP */}
      <section className="container section reveal delay-1" data-aos="fade-up">
        <style>{`
          .partner-split {
            display: grid;
            grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
            gap: 3rem;
            align-items: center;
            margin-bottom: 3rem;
          }
          .partner-tiles {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 1rem;
          }
          .partner-tile {
            height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--color-primary);
            border-radius: 10px;
            font-size: 1.15rem;
            font-weight: 700;
            letter-spacing: 0.04em;
            color: #ffffff;
            transition: background 0.25s ease, transform 0.25s ease;
          }
          .partner-tile:hover {
            background: #1D4C74;
            transform: translateY(-3px);
          }
          @media (max-width: 900px) {
            .partner-split { grid-template-columns: 1fr; gap: 2rem; }
          }
          @media (max-width: 520px) {
            .partner-tiles { grid-template-columns: 1fr; }
            .partner-tile { height: 90px; }
          }
        `}</style>

        <div className="partner-split">
          <div>
            <p className="eyebrow">Trusted By</p>
            <h2>Partners &amp; Certifications</h2>
            <p style={{ margin: 0, maxWidth: '42ch' }}>
              We work with established manufacturers and certification bodies to keep quality consistent across every module we supply.
            </p>
          </div>

          <div className="partner-tiles">
            {["DONE", "CLAF","MORNSUN"].map((name) => (
              <div 
                className="partner-tile" 
                key={name}
                style={name === 'CLAF' ? { background: 'transparent', border: 'none' } : {}}
              >
                {name === 'CLAF' ? <img src={clafLogo} alt="CLAF Logo" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} /> : name}
              </div>
            ))}
          </div>
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

