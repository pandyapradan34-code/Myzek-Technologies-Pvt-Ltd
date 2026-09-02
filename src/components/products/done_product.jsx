import { useState } from 'react'
import { DONE_PRODUCTS } from '../../data/done.js'

export default function DoneProducts({ distributor }) {
  const [searchTerm, setSearchTerm] = useState('')

  // Flatten products for DONE
  const products = DONE_PRODUCTS

  const filteredProducts = products.filter(p => {
    const q = searchTerm.toLowerCase().trim()
    if (!q) return true
    return (
      p.name.toLowerCase().includes(q) ||
      (p.series && p.series.toLowerCase().includes(q)) ||
      (p.range && p.range.toLowerCase().includes(q)) ||
      (p.description && p.description.toLowerCase().includes(q))
    )
  })

  return (
    <div className="done-products-container">
      {/* Header with Search and Product Count */}
      <div className="products-grid-header" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
        <h3 style={{ margin: 0 }}>Products</h3>
        <div style={{ flex: 1, minWidth: '220px' }}>
          <input
            type="text"
            placeholder="Search DONE products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', padding: '0.55rem 0.9rem', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '0.9rem', fontFamily: 'inherit' }}
          />
        </div>
        <span className="products-count" style={{ whiteSpace: 'nowrap' }}>
          {filteredProducts.length > 0 ? `${filteredProducts.length} products` : 'No products found'}
        </span>
      </div>

      {/* Horizontal Reference-Style Cards List */}
      {filteredProducts.length > 0 ? (
        <div className="pcard-list-container">
          {filteredProducts.map((product, i) => {
            const gallery = product.images || (product.image ? [product.image] : [])
            const primary = gallery[0]

            return (
              <article className="pcard-horizontal-card" data-aos="fade-up" key={product.name || i}>
                {/* Left Column: Brand Logo + Product Photo */}
                <div className="pcard-h-media">
                  {product.logo && (
                    <img className="pcard-h-logo" src={product.logo} alt="DONE" />
                  )}
                  <div className="pcard-h-img-wrap">
                    {primary && (
                      <img className="pcard-h-img" src={primary} alt={product.name} loading="lazy" />
                    )}
                  </div>
                </div>

                {/* Right Column: Title, View More, Power, Description, Features, Certifications */}
                <div className="pcard-h-content">
                  <div className="pcard-h-header">
                    <h3 className="pcard-h-title">{product.name}</h3>
                    <a 
                      href={product.url || '/contact'} 
                      target={product.url ? '_blank' : undefined}
                      rel={product.url ? 'noopener noreferrer' : undefined}
                      className="pcard-h-viewmore"
                    >
                      VIEW MORE &rarr;
                    </a>
                  </div>

                  {product.range && (
                    <p className="pcard-h-range">{product.range}</p>
                  )}

                  {product.description && (
                    <p className="pcard-h-desc">{product.description}</p>
                  )}

                  {product.features && product.features.length > 0 && (
                    <div className="pcard-h-features-section">
                      <div className="pcard-h-features-title">Product Features:</div>
                      <ul className="pcard-h-features-list">
                        {product.features.map((feat, idx) => (
                          <li key={idx}>
                            · {feat.startsWith('·') || feat.startsWith('-') ? feat.substring(1).trim() : feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {product.certImage && (
                    <div className="pcard-h-cert">
                      <img src={product.certImage} alt="Certifications" loading="lazy" />
                    </div>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      ) : (
        <div className="empty-state">
          <p>No DONE products found matching your search.</p>
        </div>
      )}
    </div>
  )
}
