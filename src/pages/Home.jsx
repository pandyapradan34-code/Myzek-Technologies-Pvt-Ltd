import { useEffect, useRef } from 'react'
import companyLogo from '../assets/myzek-logo-light.png'
import clafLogo from '../assets/claf.png'
import doneLogo from '../assets/done-logo.bmp'
import mornsunLogo from '../assets/Mornsun.png'
import distributors from '../data/products.js'
import { Car, Zap, Cog, RadioTower, HeartPulse, TrainFront } from 'lucide-react'

// Import Hero Images for rotating showcase marquee
import heroImg1 from '../assets/Hero_image/hero_offer_1.jpeg'
import heroImg2 from '../assets/Hero_image/hero_offer_2.jpeg'
import heroImg3 from '../assets/Hero_image/hero_offer_3.jpeg'
import heroImg4 from '../assets/Hero_image/hero_offer_4.jpeg'
import heroImg5 from '../assets/Hero_image/hero_offer_5.jpeg'
import heroImg6 from '../assets/Hero_image/hero_offer_6.jpeg'

const PRODUCT_OFFERINGS = [
  { name: 'Industrial Power Module', image: heroImg1 },
  { name: 'Precision Converter', image: heroImg2 },
  { name: 'AC/DC Power Supply', image: heroImg3 },
  { name: 'DC/DC Rail Module', image: heroImg4 },
  { name: 'Custom Electronics Unit', image: heroImg5 },
  { name: 'High-Density Controller', image: heroImg6 },
]

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

      {/* 2. PRODUCT / APPLICATION SECTION (Core Offerings Marquee) */}
      <section className="section reveal delay-1" data-aos="fade-up">

        <div className="container">
          <div className="section-intro reveal delay-1" data-aos="fade-up" style={{ textAlign: 'center', margin: '0 auto 3rem', maxWidth: '800px' }}>
            <p className="eyebrow">Products</p>
            <h2>Our Core Offerings</h2>
            <p style={{ maxWidth: '68ch', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Explore our premium range of power solutions and custom electronic modules, designed for maximum efficiency and industrial reliability.
            </p>
          </div>
        </div>

        <div className="products-marquee-container">
          <div className="products-marquee-track">
            {[...Array(2)].flatMap((_, repIdx) => 
              PRODUCT_OFFERINGS.map((prod, idx) => (
                <div 
                  className="product-marquee-item" 
                  key={`${repIdx}-${idx}`}
                  style={{ animationDelay: `${idx * 0.6}s` }}
                >
                  <img src={prod.image} alt={prod.name} loading="lazy" />
                </div>
              ))
            )}
          </div>
        </div>

        <div className="container">
          <div className="reveal delay-1" style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a className="btn btn-accent" href="/products">
              Explore All Products &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* 3. ABOUT US SECTION */}
      <section className="section section-alt reveal delay-1" data-aos="fade-up">
        <div className="container home-about-grid">
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
          .partner-marquee-container {
            overflow: hidden;
            width: 100%;
            position: relative;
            mask-image: linear-gradient(to right, transparent, #000 15%, #000 85%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, #000 15%, #000 85%, transparent);
          }
          .partner-marquee-track {
            display: flex;
            gap: 4rem;
            width: max-content;
            animation: partner-scroll 16s linear infinite;
          }
          .partner-marquee-container:hover .partner-marquee-track {
            animation-play-state: paused;
          }
          .partner-marquee-item {
            width: 150px;
            height: 90px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
          .partner-marquee-item img {
            max-width: 100%;
            object-fit: contain;
          }
          @keyframes partner-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          @media (max-width: 900px) {
            .partner-split { grid-template-columns: 1fr; gap: 2rem; }
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

          <div className="partner-marquee-container">
            <div className="partner-marquee-track">
              {[...Array(4)].flatMap((_, idx) => [
                { name: 'DONE', logo: doneLogo, style: { maxHeight: '130%', clipPath: 'inset(35% 0 0 0)', transform: 'translateY(-15%)' } },
                { name: 'CLAF', logo: clafLogo, style: { maxHeight: '100%' } },
                { name: 'MORNSUN', logo: mornsunLogo, style: { maxHeight: '100%' } }
              ]).map((partner, i) => (
                <div className="partner-marquee-item" key={i}>
                  <img src={partner.logo} alt={`${partner.name} Logo`} style={partner.style} />
                </div>
              ))}
            </div>
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

