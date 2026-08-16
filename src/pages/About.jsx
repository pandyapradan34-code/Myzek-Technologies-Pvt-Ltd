const coreMarkets = [
  'Railway & Transportation Systems',
  'Electric Vehicles (EV) & EV Infrastructure',
  'Home & Industrial Automation',
  'Industrial Automation & Control Systems',
  'Photovoltaic (PV) & Solar Energy',
  'IoT & Smart Technology',
  'Medical & Healthcare Equipment',
  'Textile Machinery',
  'Elevator & Escalator Systems',
]

const oemMarkets = [
  'Pharmaceutical Machinery',
  'Packaging Machinery',
  'Plastic Processing Machinery',
  'Textile & Electronic Jacquard Machinery',
  'Automation & Control Panels',
  'CNC, Laser & Diamond Cutting Machinery',
  'LED Lighting & Signage',
  'Solar Plants & Solar Panel Cleaning Robots',
  'EV Charging Station Manufacturing',
  'Humidifier & Ventilator OEMs',
  'Embroidery, Printing & Knitting Machinery',
  'Elevator & Escalator Manufacturing',
]

function MarketList({ markets }) {
  return <ul className="market-list">{markets.map((market) => <li key={market}>{market}</li>)}</ul>
}

export default function About() {
  return (
    <div className="page page-about">
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">About Us</p>
          <h1>Your partner in electronic components</h1>
        </div>
      </section>

      <section className="container section about-story">
        <div className="section-intro"><h2>Built on responsive service</h2></div>
        <div className="about-copy">
          <p>Myzek Technologies Pvt Ltd is a leading authorized distributor and stockist of electronic components. Since 2017, we have built our business on strong customer relationships, responsive service, and value-driven solutions.</p>
          <p>Today, we serve hundreds of customers in partnership with leading global suppliers. We support every stage of the sourcing journey with competitive pricing, ready-stock availability, and reliable technical support.</p>
          <p>From design and prototyping to production requirements, our focus is to provide the right components at the right price, with dependable availability and responsive support - helping customers bring products to market with confidence.</p>
          <p>We support customers throughout the complete product lifecycle, helping them source the right components, manage supply requirements, and maintain continuity from prototype development to volume production.</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Industries we serve</p>
            <h2>Our key markets</h2>
            <p>We serve industrial, OEM, and technology-driven customers across high-growth sectors.</p>
          </div>
          <div className="market-grid">
            <article className="market-panel">
              <span className="market-number">01</span>
              <h3>Core Industry & Technology Markets</h3>
              <MarketList markets={coreMarkets} />
            </article>
            <article className="market-panel">
              <span className="market-number">02</span>
              <h3>Specialized Machinery & OEM Segments</h3>
              <p>We support OEMs and manufacturers across a wide range of specialized machinery and equipment.</p>
              <MarketList markets={oemMarkets} />
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}
