const PLACEHOLDER_INDUSTRIES = [
  { name: 'Automotive', icon: '🚗' },
  { name: 'Energy & Power', icon: '⚡' },
  { name: 'Industrial Automation', icon: '⚙️' },
  { name: 'Telecommunications', icon: '📡' },
  { name: 'Construction', icon: '🏗' },
  { name: 'Aerospace', icon: '✈️' },
]

export default function Applications() {
  return (
    <div className="page page-applications">
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">Applications</p>
          <h1>Industries we serve</h1>
        </div>
      </section>

      {/* INDUSTRIES SERVED — example set below, replace names/icons with
          the industries and customers that actually apply. */}
      <section className="container section">
        <div className="card-grid">
          {PLACEHOLDER_INDUSTRIES.map((item) => (
            <div className="card" key={item.name}>
              <div className="placeholder-media">
                <span className="placeholder-media-icon">{item.icon}</span>
                <span>Industry image</span>
              </div>
              <h3>{item.name}</h3>
              <p>One line on how your products are used in this industry.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
