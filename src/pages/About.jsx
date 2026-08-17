// const coreMarkets = [
//   'Railway & Transportation Systems',
//   'Electric Vehicles (EV) & EV Infrastructure',
//   'Home & Industrial Automation',
//   'Industrial Automation & Control Systems',
//   'Photovoltaic (PV) & Solar Energy',
//   'IoT & Smart Technology',
//   'Medical & Healthcare Equipment',
//   'Textile Machinery',
//   'Elevator & Escalator Systems',
// ]

// const oemMarkets = [
//   'Pharmaceutical Machinery',
//   'Packaging Machinery',
//   'Plastic Processing Machinery',
//   'Textile & Electronic Jacquard Machinery',
//   'Automation & Control Panels',
//   'CNC, Laser & Diamond Cutting Machinery',
//   'LED Lighting & Signage',
//   'Solar Plants & Solar Panel Cleaning Robots',
//   'EV Charging Station Manufacturing',
//   'Humidifier & Ventilator OEMs',
//   'Embroidery, Printing & Knitting Machinery',
//   'Elevator & Escalator Manufacturing',
// ]

// function MarketList({ markets }) {
//   return <ul className="market-list">{markets.map((market) => <li key={market}>{market}</li>)}</ul>
// }

// export default function About() {
//   return (
//     <div className="page page-about">
//       <section className="page-header">
//         <div className="container">
//           <p className="eyebrow">About Us</p>
//           <h1>Your partner in electronic components</h1>
//         </div>
//       </section>

//       <section className="container section about-story">
//         <div className="section-intro"><h2>Built on responsive service</h2></div>
//         <div className="about-copy">
//           <p>Myzek Technologies Pvt Ltd is a leading authorized distributor and stockist of electronic components. Since 2017, we have built our business on strong customer relationships, responsive service, and value-driven solutions.</p>
//           <p>Today, we serve hundreds of customers in partnership with leading global suppliers. We support every stage of the sourcing journey with competitive pricing, ready-stock availability, and reliable technical support.</p>
//           <p>From design and prototyping to production requirements, our focus is to provide the right components at the right price, with dependable availability and responsive support - helping customers bring products to market with confidence.</p>
//           <p>We support customers throughout the complete product lifecycle, helping them source the right components, manage supply requirements, and maintain continuity from prototype development to volume production.</p>
//         </div>
//       </section>

//       <section className="section section-alt">
//         <div className="container">
//           <div className="section-intro">
//             <p className="eyebrow">Industries we serve</p>
//             <h2>Our key markets</h2>
//             <p>We serve industrial, OEM, and technology-driven customers across high-growth sectors.</p>
//           </div>
//           <div className="market-grid">
//             <article className="market-panel">
//               <span className="market-number">01</span>
//               <h3>Core Industry & Technology Markets</h3>
//               <MarketList markets={coreMarkets} />
//             </article>
//             <article className="market-panel">
//               <span className="market-number">02</span>
//               <h3>Specialized Machinery & OEM Segments</h3>
//               <p>We support OEMs and manufacturers across a wide range of specialized machinery and equipment.</p>
//               <MarketList markets={oemMarkets} />
//             </article>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }



// // src/pages/About.jsx
// import { useEffect } from 'react';
// import { ICONS, CORE_MARKETS, OEM_SEGMENTS } from '../data/industries';

// function IndustryGrid({ items }) {
//   return (
//     <div className="ab-ind">
//       {items.map((it) => (
//         <div className="ab-cell" key={it.name}>
//           {/* static, hand-authored SVG paths — safe to inject */}
//           <svg viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: ICONS[it.icon] }} />
//           <div className="ab-t">{it.name}</div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default function About() {
//   // fade sections up as they enter the viewport
//   useEffect(() => {
//     const els = document.querySelectorAll('.ab-rv');
//     if (!els.length) return undefined;

//     const io = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((e, i) => {
//           if (e.isIntersecting) {
//             setTimeout(() => e.target.classList.add('in'), i * 70);
//             io.unobserve(e.target);
//           }
//         });
//       },
//       { threshold: 0.15 }
//     );

//     els.forEach((el) => io.observe(el));
//     return () => io.disconnect();
//   }, []);

//   return (
//     <main className="ab">
//       {/* ---------- PAGE HEAD ---------- */}
//       <header className="ab-head">
//         <div className="ab-wrap">
//           {/* <div className="ab-crumb">HOME&nbsp; /&nbsp; ABOUT US</div> */}
//           <h1>YOUR PARTNER IN ELECTRONIC COMPONENTS</h1>
//           <p className="ab-sub">
//             A leading authorized distributor and stockist of electronic components, serving
//             industrial, OEM and technology-driven customers.
//           </p>
//         </div>
//       </header>

//       {/* ---------- INTRO + FACTS PANEL ---------- */}
//       <section>
//         <div className="ab-wrap ab-intro">
//           <div className="ab-rv">
//             <div className="ab-eyebrow">WHO WE ARE</div>
//             <h2>BUILT ON RESPONSIVE SERVICE</h2>
//             <p className="ab-lead">
//               Myzek Technologies Pvt Ltd is a leading authorized distributor and stockist of
//               electronic components. Since 2017, we have built our business on strong customer
//               relationships, responsive service, and value-driven solutions.
//             </p>
//             <p>
//               Today, we serve hundreds of customers in partnership with leading global
//               suppliers. We support every stage of the sourcing journey with competitive
//               pricing, ready-stock availability, and reliable technical support.
//             </p>
//             <p>
//               From design and prototyping to production requirements, our focus is to provide
//               the right components at the right price, with dependable availability and
//               responsive support — helping customers bring products to market with confidence.
//             </p>
//             <p>
//               We support customers throughout the complete product lifecycle, helping them
//               source the right components, manage supply requirements, and maintain continuity
//               from prototype development to volume production.
//             </p>
//           </div>

//           <aside className="ab-facts ab-rv">
//             <div className="ab-flabel">COMPANY AT A GLANCE</div>
//             <dl>
//               <div className="ab-row"><dt>Established</dt><dd>2017</dd></div>
//               <div className="ab-row"><dt>Role</dt><dd>Authorized distributor<br />&amp; stockist</dd></div>
//               <div className="ab-row"><dt>Customers</dt><dd>Hundreds served,<br />industrial &amp; OEM</dd></div>
//               <div className="ab-row"><dt>Supply partners</dt><dd>Leading global<br />suppliers</dd></div>
//               <div className="ab-row"><dt>Coverage</dt><dd>21 industry<br />segments</dd></div>
//               <div className="ab-row"><dt>Support from</dt><dd>Prototype to<br />volume production</dd></div>
//             </dl>
//           </aside>
//         </div>
//       </section>

//       {/* ---------- STRENGTHS BAND (navy) ----------
//           Delete this whole <section> if you don't want it. */}
//       <section className="ab-band">
//         <div className="ab-wrap">
//           <div className="ab-band-grid">
//             <div className="ab-bcell ab-rv">
//               <div className="ab-k">01</div>
//               <h3>COMPETITIVE PRICING</h3>
//               <p>The right components at the right price, across every stage of the sourcing journey.</p>
//             </div>
//             <div className="ab-bcell ab-rv">
//               <div className="ab-k">02</div>
//               <h3>READY-STOCK AVAILABILITY</h3>
//               <p>Dependable availability held against real demand, not quoted from a catalogue.</p>
//             </div>
//             <div className="ab-bcell ab-rv">
//               <div className="ab-k">03</div>
//               <h3>TECHNICAL SUPPORT</h3>
//               <p>Reliable, responsive support from a team that knows the parts and the applications.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------- LIFECYCLE ---------- */}
//       <section className="ab-life">
//         <div className="ab-wrap">
//           <div className="ab-eyebrow">HOW WE SUPPORT YOU</div>
//           <h2>ACROSS THE COMPLETE PRODUCT LIFECYCLE</h2>
//           <div className="ab-steps">
//             <div className="ab-step ab-rv">
//               <div className="ab-s">STAGE 01</div><h3>DESIGN</h3>
//               <p>Sourcing the right components for the specification as the design takes shape.</p>
//             </div>
//             <div className="ab-step ab-rv">
//               <div className="ab-s">STAGE 02</div><h3>PROTOTYPING</h3>
//               <p>Small quantities available quickly, so development isn&apos;t waiting on parts.</p>
//             </div>
//             <div className="ab-step ab-rv">
//               <div className="ab-s">STAGE 03</div><h3>PRODUCTION</h3>
//               <p>Managing supply requirements as volumes scale up to production.</p>
//             </div>
//             <div className="ab-step ab-rv">
//               <div className="ab-s">STAGE 04</div><h3>CONTINUITY</h3>
//               <p>Maintaining continuity of supply from prototype development to volume production.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------- INDUSTRY GRID ---------- */}
//       <section>
//         <div className="ab-wrap">
//           <div className="ab-eyebrow">INDUSTRIES WE SERVE</div>
//           <h2>OUR KEY MARKETS</h2>
//           <p className="ab-note">
//             We serve industrial, OEM, and technology-driven customers across high-growth sectors.
//           </p>

//           <div className="ab-grp">
//             <span className="ab-num">01</span>
//             <h3>Core Industry &amp; Technology Markets</h3>
//             <span className="ab-rule" />
//           </div>
//           <IndustryGrid items={CORE_MARKETS} />

//           <div className="ab-grp">
//             <span className="ab-num">02</span>
//             <h3>Specialized Machinery &amp; OEM Segments</h3>
//             <span className="ab-rule" />
//           </div>
//           <p className="ab-note">
//             We support OEMs and manufacturers across a wide range of specialized machinery
//             and equipment.
//           </p>
//           <IndustryGrid items={OEM_SEGMENTS} />
//         </div>
//       </section>

//       {/* ---------- CTA ---------- */}
//       <section className="ab-cta">
//         <div className="ab-wrap">
//           <div className="ab-eyebrow ab-center">GET IN TOUCH</div>
//           <h2>LOOKING FOR A COMPONENT?</h2>
//           <p>Share your requirement and we&apos;ll come back with availability and pricing.</p>
//           <div className="ab-btns">
//             <a className="ab-btn ab-btn-p" href="/request-sample">REQUEST A SAMPLE</a>
//             <a className="ab-btn ab-btn-g" href="/contact">CONTACT US</a>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }


// src/pages/About.jsx
import { useEffect } from 'react';
import { ICONS, CORE_MARKETS, OEM_SEGMENTS } from '../data/industries';

function IndustryGrid({ items }) {
  return (
    <div className="ab-ind">
      {items.map((it) => (
        <div className="ab-cell" key={it.name}>
          {/* static, hand-authored SVG paths — safe to inject */}
          <svg viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: ICONS[it.icon] }} />
          <div className="ab-t">{it.name}</div>
        </div>
      ))}
    </div>
  );
}

export default function About() {
  // fade sections up as they enter the viewport
  useEffect(() => {
    const els = document.querySelectorAll('.ab-rv');
    if (!els.length) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('in'), i * 70);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="ab">
      {/* ---------- PAGE HEAD ---------- */}
      <header className="ab-head">
        <div className="ab-wrap">
          {/* <div className="ab-crumb">HOME&nbsp; /&nbsp; ABOUT US</div> */}
          <h1>YOUR PARTNER IN ELECTRONIC COMPONENTS</h1>
          <p className="ab-sub">
            An authorized distributor and stockist of electronic components, supporting
            industrial, OEM and technology-driven customers across India.
          </p>
        </div>
      </header>

      {/* ---------- INTRO + FACTS PANEL ---------- */}
      <section>
        <div className="ab-wrap ab-intro">
          <div className="ab-rv">
            <div className="ab-eyebrow">WHO WE ARE</div>
            <h2>BUILT ON RESPONSIVE SERVICE</h2>
            <p className="ab-lead">
              Myzek Technologies Pvt Ltd is a leading authorized distributor and stockist of
              electronic components. Since 2017, we have built our business on strong customer
              relationships, responsive service, and value-driven solutions.
            </p>
            <p>
              Today, we serve hundreds of customers in partnership with leading global
              suppliers. We supply every stage of the sourcing journey with competitive
              pricing, ready-stock availability, and reliable technical support.
            </p>
            <p>
              From design and prototyping to production requirements, our focus is to provide
              the right components at the right price, with dependable availability and
              responsive support — helping customers bring products to market with confidence.
            </p>
            <p>
              We supply customers throughout the complete product lifecycle, helping them
              source the right components, manage supply requirements, and maintain continuity
              from prototype development to volume production.
            </p>
          </div>

          <aside className="ab-facts ab-rv">
            <div className="ab-flabel">COMPANY AT A GLANCE</div>
            <dl>
              <div className="ab-row"><dt>Established</dt><dd>2017</dd></div>
              <div className="ab-row"><dt>Role</dt><dd>Authorized distributor<br />&amp; stockist</dd></div>
              <div className="ab-row"><dt>Customers</dt><dd>Hundreds served,<br />industrial &amp; OEM</dd></div>
              <div className="ab-row"><dt>Supply partners</dt><dd>Leading global<br />suppliers</dd></div>
              <div className="ab-row"><dt>Coverage</dt><dd>21 industry<br />segments</dd></div>
              <div className="ab-row"><dt>Support from</dt><dd>Prototype to<br />volume production</dd></div>
              <div className="ab-row"><dt>Model</dt><dd>Authorized channel,<br />ready stock</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      {/* ---------- STRENGTHS BAND ----------
          Delete this whole <section> if you don't want it. */}
      <section className="ab-band">
        <div className="ab-wrap">
          <div className="ab-band-grid">
            <div className="ab-bcell ab-rv">
              <div className="ab-k">01</div>
              <h3>COMPETITIVE PRICING</h3>
              <p>
                Authorized-channel pricing with clear quotations, whether you need ten pieces
                or ten thousand.
              </p>
            </div>
            <div className="ab-bcell ab-rv">
              <div className="ab-k">02</div>
              <h3>READY-STOCK AVAILABILITY</h3>
              <p>
                Stock held on our shelves against customer schedules, so orders ship without
                waiting on a factory lead time.
              </p>
            </div>
            <div className="ab-bcell ab-rv">
              <div className="ab-k">03</div>
              <h3>TECHNICAL SUPPORT</h3>
              <p>
                Part selection, datasheet queries and cross-references answered by a team that
                works with these components daily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- LIFECYCLE ---------- */}
      <section className="ab-life">
        <div className="ab-wrap">
          <div className="ab-eyebrow">HOW WE SUPPORT YOU</div>
          <h2>SUPPORTING YOUR PRODUCT LIFECYCLE</h2>
          <div className="ab-steps">
            <div className="ab-step ab-rv">
              <div className="ab-s">STAGE 01</div><h3>SPECIFY</h3>
              <p>
                We help identify and source the right components against your specification
                while your design is still taking shape.
              </p>
            </div>
            <div className="ab-step ab-rv">
              <div className="ab-s">STAGE 02</div><h3>SAMPLE</h3>
              <p>
                Small quantities supplied quickly, so your development team isn&apos;t held up
                waiting on parts.
              </p>
            </div>
            <div className="ab-step ab-rv">
              <div className="ab-s">STAGE 03</div><h3>SUPPLY</h3>
              <p>
                We manage your supply requirements and delivery schedules as your volumes
                scale up.
              </p>
            </div>
            <div className="ab-step ab-rv">
              <div className="ab-s">STAGE 04</div><h3>SUSTAIN</h3>
              <p>
                Continuity of supply maintained across the life of your product, including
                end-of-life and replacement sourcing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- INDUSTRY GRID ---------- */}
      <section>
        <div className="ab-wrap">
          <div className="ab-eyebrow">INDUSTRIES WE SERVE</div>
          <h2>OUR KEY MARKETS</h2>
          <p className="ab-note">
            We supply industrial, OEM and technology-driven customers across high-growth sectors.
          </p>

          <div className="ab-grp">
            <span className="ab-num">01</span>
            <h3>Core Industry &amp; Technology Markets</h3>
            <span className="ab-rule" />
          </div>
          <IndustryGrid items={CORE_MARKETS} />

          <div className="ab-grp">
            <span className="ab-num">02</span>
            <h3>Specialized Machinery &amp; OEM Segments</h3>
            <span className="ab-rule" />
          </div>
          <p className="ab-note">
            We supply OEMs and machine builders across a wide range of specialized machinery
            and equipment.
          </p>
          <IndustryGrid items={OEM_SEGMENTS} />
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="ab-cta">
        <div className="ab-wrap">
          <div className="ab-eyebrow ab-center">GET IN TOUCH</div>
          <h2>LOOKING FOR A COMPONENT?</h2>
          <p>Share your requirement and we&apos;ll come back with availability and pricing.</p>
          <div className="ab-btns">
            <a className="ab-btn ab-btn-p" href="/request-sample">REQUEST A SAMPLE</a>
            <a className="ab-btn ab-btn-g" href="/contact">CONTACT US</a>
          </div>
        </div>
      </section>
    </main>
  );
}