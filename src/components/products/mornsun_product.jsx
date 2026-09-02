import { useState } from 'react'
import { MORNSUN_PRODUCTS } from '../../data/mornsun.js'

// Group products by series, keeping source order
function groupMornsunProducts(products) {
  const groups = []
  const index = new Map()

  products.forEach(product => {
    const key = product.series || 'Other'
    if (!index.has(key)) {
      index.set(key, { 
        key, 
        items: [] 
      })
      groups.push(index.get(key))
    }
    index.get(key).items.push(product)
  })

  return groups
}

// "50W – 600W" summary for a series header
function powerRange(items) {
  const watts = items.map(i => i.watts).filter(Boolean)
  if (!watts.length) return null
  const min = Math.min(...watts)
  const max = Math.max(...watts)
  return min === max ? `${min}W` : `${min}W – ${max}W`
}

function MornsunCard({ product }) {
  const gallery = product.images || (product.image ? [product.image] : [])
  const primary = gallery[0]
  const hasImage = !!primary

  return (
    <article className="pcard pcard-text-only" data-aos="fade-up" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="pcard-body" style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '0.75rem 0.85rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.35rem', marginBottom: '0.3rem' }}>
          <h4 className="pcard-name" style={{ margin: 0, fontSize: '0.85rem', fontWeight: 700 }}>{product.name}</h4>
          {product.watts && (
            <span className="pcard-badge-inline">
              {product.watts}W
            </span>
          )}
        </div>
        
        {product.volts && <p className="pcard-spec" style={{ margin: '0 0 0.25rem 0', fontWeight: 600, fontSize: '0.72rem', color: 'var(--color-accent)' }}>{product.volts}V DC</p>}
        {!product.volts && product.range && <p className="pcard-spec" style={{ margin: '0 0 0.25rem 0', fontWeight: 600, fontSize: '0.72rem', color: 'var(--color-accent)' }}>{product.range}</p>}
        {product.description && <p className="pcard-desc" style={{ fontSize: '0.75rem', color: '#4b5563', lineHeight: '1.4', margin: '0.25rem 0' }}>{product.description}</p>}
        
        {product.stock !== undefined && (
          <div 
            style={{ 
              marginTop: 'auto', 
              paddingTop: '0.4rem', 
              borderTop: '1px solid #f1f5f9', 
              display: 'flex', 
              justifyContent: 'space-between', 
              fontSize: '0.68rem',
              alignItems: 'center',
              marginBottom: '0.4rem'
            }}
          >
            <span style={{ color: '#6b7280' }}>Stock:</span>
            <span 
              style={{ 
                fontWeight: 700, 
                color: product.stock > 0 ? '#10b981' : '#ef4444',
                background: product.stock > 0 ? '#e6fdf4' : '#fdf2f2',
                padding: '0.1rem 0.3rem',
                borderRadius: '3px'
              }}
            >
              {product.stock > 0 ? `${product.stock.toLocaleString()} pcs` : 'Out of stock'}
            </span>
          </div>
        )}

        <div className="pcard-actions" style={{ marginTop: 'auto', paddingTop: '0.4rem' }}>
          <a 
            href={`/contact?distributor=MORNSUN&product=${encodeURIComponent(product.name)}`}
            className="pcard-inquire-btn"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Inquire
          </a>
        </div>
      </div>
    </article>
  )
}

export default function MornsunProducts() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGroup, setSelectedGroup] = useState('ALL')

  const products = MORNSUN_PRODUCTS

  // Calculate unique series for filter chips
  const availableGroups = (() => {
    const groupMap = new Map()
    products.forEach(p => {
      const key = p.series || 'Other'
      groupMap.set(key, (groupMap.get(key) || 0) + 1)
    })
    return Array.from(groupMap.entries()).map(([name, count]) => ({ name, count }))
  })()

  // Filter products by search and series
  const filteredProducts = products.filter(p => {
    const q = searchTerm.toLowerCase().trim()
    const matchesSearch = !q ||
      p.name.toLowerCase().includes(q) ||
      (p.series && p.series.toLowerCase().includes(q)) ||
      (p.watts && String(p.watts).includes(q))
    
    const groupKey = p.series || 'Other'
    const matchesGroup = selectedGroup === 'ALL' || groupKey === selectedGroup

    return matchesSearch && matchesGroup
  })

  const grouped = groupMornsunProducts(filteredProducts)

  return (
    <div className="mornsun-products-container">
      {/* Search Header */}
      <div className="products-grid-header" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
        <h3 style={{ margin: 0 }}>Products</h3>
        <div style={{ flex: 1, minWidth: '220px' }}>
          <input
            type="text"
            placeholder="Search MORNSUN products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', padding: '0.55rem 0.9rem', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '0.9rem', fontFamily: 'inherit' }}
          />
        </div>
        <span className="products-count" style={{ whiteSpace: 'nowrap' }}>
          {filteredProducts.length > 0 ? `${filteredProducts.length} products` : 'No products found'}
        </span>
      </div>

      {/* Series Filter Bar */}
      {availableGroups.length > 1 && (
        <div className="group-filter-bar">
          <span className="group-filter-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
            Filter by Series:
          </span>
          <select 
            className="group-filter-select"
            value={selectedGroup}
            onChange={(e) => setSelectedGroup(e.target.value)}
            aria-label="Filter by series"
          >
            <option value="ALL">All Series ({products.length})</option>
            {availableGroups.map(g => (
              <option key={g.name} value={g.name}>
                {g.name} ({g.count})
              </option>
            ))}
          </select>
          <div className="group-filter-chips">
            <button
              type="button"
              className={`group-chip ${selectedGroup === 'ALL' ? 'active' : ''}`}
              onClick={() => setSelectedGroup('ALL')}
            >
              All ({products.length})
            </button>
            {availableGroups.slice(0, 12).map(g => (
              <button
                type="button"
                key={g.name}
                className={`group-chip ${selectedGroup === g.name ? 'active' : ''}`}
                onClick={() => setSelectedGroup(g.name)}
              >
                {g.name} ({g.count})
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Products Grid by Series */}
      {filteredProducts.length > 0 ? (
        grouped.map(group => {
          const range = powerRange(group.items)

          return (
            <section className="series-block" key={group.key} data-aos="fade-up">
              <div className="series-header">
                <span className="series-name">{group.key} Series</span>
                <span className="series-count">{group.items.length} models</span>
                {range && <span className="series-range">{range}</span>}
              </div>

              <div className="pcard-grid">
                {group.items.map((product, i) => (
                  <MornsunCard product={product} key={product.name || `${group.key}-${i}`} />
                ))}
              </div>
            </section>
          )
        })
      ) : (
        <div className="empty-state">
          <p>No MORNSUN products found matching your search.</p>
        </div>
      )}
    </div>
  )
}
