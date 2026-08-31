


import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import AOS from 'aos'
import distributorsData from '../data/products.js'



// Flatten products for a distributor
function getFlattenedProducts(distributor) {
  const flattened = []
  if (!distributor || !distributor.products) return flattened

  distributor.products.forEach(productCategory => {
    if (productCategory.groups) {
      productCategory.groups.forEach(group => {
        if (group.items) {
          group.items.forEach(item => {
            const name = typeof item === 'string' ? item : item.name
            const url = typeof item === 'string' ? null : item.url
            flattened.push({
              name,
              url,
              category: productCategory.name,
              distributor: distributor.name,
            })
          })
        }
      })
    } else {
      flattened.push({
        ...productCategory,
        category: productCategory.series || productCategory.name,
        distributor: distributor.name,
      })
    }
  })
  return flattened
}

// Group products by series, keeping source order
function groupBySeries(products) {
  const groups = []
  const index = new Map()

  products.forEach(product => {
    const key = product.series || product.category || 'Other'
    if (!index.has(key)) {
      index.set(key, { key, items: [] })
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

function ProductCard({ product }) {
  const gallery = product.images || (product.image ? [product.image] : [])
  const primary = gallery[0]
  const secondary = gallery[1]
  const hasImage = !!primary

  // Horizontal Reference-Style Layout (matches reference site design exactly)
  if (product.features || product.certImage || product.logo) {
    return (
      <article className="pcard-horizontal-card" data-aos="fade-up">
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
  }

  // Fallback for standard product items
  if (!hasImage) {
    return (
      <article className="pcard pcard-text-only" data-aos="fade-up" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div className="pcard-body" style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '0.65rem 0.75rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.35rem', marginBottom: '0.3rem' }}>
            <h4 className="pcard-name" style={{ margin: 0, fontSize: '0.85rem', fontWeight: 700 }}>{product.name}</h4>
            {product.watts && (
              <span 
                style={{ 
                  background: 'var(--color-primary, #0f2b48)', 
                  color: '#fff', 
                  fontSize: '0.6rem', 
                  fontWeight: 700, 
                  padding: '0.15rem 0.35rem', 
                  borderRadius: '3px',
                  whiteSpace: 'nowrap'
                }}
              >
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
                alignItems: 'center'
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
        </div>
      </article>
    )
  }

  return (
    <article className={`pcard ${secondary ? 'has-secondary' : ''}`} data-aos="fade-up" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="pcard-media" style={{ background: '#f8fafc', padding: '0.65rem', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '120px' }}>
        <img className="pcard-img" src={primary} alt={product.name} loading="lazy" style={{ maxHeight: '95px', objectFit: 'contain' }} />
        {secondary && (
          <img className="pcard-img pcard-img-alt" src={secondary} alt="" aria-hidden="true" loading="lazy" style={{ maxHeight: '95px', objectFit: 'contain' }} />
        )}
        {product.watts && <span className="pcard-badge">{product.watts}W</span>}
      </div>

      <div className="pcard-body" style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '0.65rem 0.75rem' }}>
        <h4 className="pcard-name" style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.2rem', lineHeight: '1.3' }}>{product.name}</h4>
        {product.volts && <p className="pcard-spec" style={{ fontWeight: 600, fontSize: '0.72rem', color: 'var(--color-accent)', marginBottom: '0.25rem' }}>{product.volts}V DC</p>}
        {!product.volts && product.range && <p className="pcard-spec" style={{ fontWeight: 600, fontSize: '0.72rem', color: 'var(--color-accent)', marginBottom: '0.25rem' }}>{product.range}</p>}
        
        {product.description && (
          <p className="pcard-desc" style={{ fontSize: '0.75rem', color: '#4b5563', lineHeight: '1.4', margin: '0.25rem 0' }}>
            {product.description}
          </p>
        )}

        {product.stock !== undefined && (
          <div 
            style={{ 
              marginTop: 'auto', 
              paddingTop: '0.4rem', 
              borderTop: '1px solid #f1f5f9', 
              display: 'flex', 
              justifyContent: 'space-between', 
              fontSize: '0.68rem',
              alignItems: 'center'
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
      </div>
    </article>
  )
}

export default function Products() {
  const [searchParams] = useSearchParams()
  const distParam = searchParams.get('distributor') || searchParams.get('tab') || searchParams.get('brand')

  const getInitialTab = () => {
    if (!distParam) return 'distributor-0'
    const lower = distParam.toLowerCase()
    if (lower === 'claf' || lower === 'clf' || lower === '1' || lower === 'distributor-1') return 'distributor-1'
    if (lower === 'mornsun' || lower === '2' || lower === 'distributor-2') return 'distributor-2'
    if (lower === 'done' || lower === '0' || lower === 'distributor-0') return 'distributor-0'
    return 'distributor-0'
  }

  const [activeTab, setActiveTab] = useState(getInitialTab)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGroup, setSelectedGroup] = useState('ALL')

  // Sync tab if query parameter changes
  useEffect(() => {
    if (distParam) {
      const lower = distParam.toLowerCase()
      if (lower === 'claf' || lower === 'clf' || lower === '1' || lower === 'distributor-1') {
        setActiveTab('distributor-1')
      } else if (lower === 'mornsun' || lower === '2' || lower === 'distributor-2') {
        setActiveTab('distributor-2')
      } else if (lower === 'done' || lower === '0' || lower === 'distributor-0') {
        setActiveTab('distributor-0')
      }
    }
  }, [distParam])

  // Reset group and search filters and scroll to top when switching distributors
  useEffect(() => {
    setSelectedGroup('ALL')
    setSearchTerm('')
    window.scrollTo(0, 0)
  }, [activeTab])

  // Refresh AOS scroll animations when tab, group, or search filter changes
  useEffect(() => {
    AOS.refreshHard()
    const t = setTimeout(() => AOS.refresh(), 100)
    return () => clearTimeout(t)
  }, [activeTab, selectedGroup, searchTerm])

  const distributors = useMemo(() => {
    return distributorsData.map((dist, index) => {
      const flattened = getFlattenedProducts(dist)
      return {
        ...dist,
        id: `DST-402${index + 1}`,
        flattenedProducts: flattened,
        productCount: flattened.length,
      }
    })
  }, [])

  const renderContent = () => {
    const distIndex = parseInt(activeTab.split('-')[1])
    const distributor = distributors[distIndex]
    if (!distributor) return null

    // Extract all unique groups / series available in this distributor
    const availableGroups = (() => {
      const groupMap = new Map()
      distributor.flattenedProducts.forEach(p => {
        const key = p.series || p.category || 'Other'
        groupMap.set(key, (groupMap.get(key) || 0) + 1)
      })
      return Array.from(groupMap.entries()).map(([name, count]) => ({ name, count }))
    })()

    const filteredProducts = distributor.flattenedProducts.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (p.series && p.series.toLowerCase().includes(searchTerm.toLowerCase()))
      const groupKey = p.series || p.category || 'Other'
      const matchesGroup = selectedGroup === 'ALL' || groupKey === selectedGroup
      return matchesSearch && matchesGroup
    })

    const grouped = groupBySeries(filteredProducts)

    return (
      <div className="content-view">
        <p className="eyebrow-text">Distributor</p>
        <h1 className="distributor-title">{distributor.name}</h1>
        <p className="distributor-id">{distributor.id}</p>

        <p className="distributor-desc">
          {distributor.about || 'Regional distributor.'}
        </p>

        <div className="products-grid-header" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
          <h3 style={{ margin: 0 }}>Products</h3>
          {distributor.name !== 'DONE' && (
            <div style={{ flex: 1, minWidth: '200px' }}>
              <input
                type="text"
                placeholder={`Search ${distributor.name} products...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: '100%', padding: '0.55rem 0.9rem', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '0.9rem', fontFamily: 'inherit' }}
              />
            </div>
          )}
          <span className="products-count" style={{ whiteSpace: 'nowrap', marginLeft: distributor.name === 'DONE' ? 'auto' : undefined }}>
            {filteredProducts.length > 0
              ? `${filteredProducts.length} products`
              : 'No products found'}
          </span>
        </div>

        {/* Group / Series Filter Bar */}
        {availableGroups.length > 1 && (
          <div className="group-filter-bar">
            <span className="group-filter-label">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
              Filter by Group:
            </span>
            <select 
              className="group-filter-select"
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
              aria-label="Filter by group"
            >
              <option value="ALL">All Groups ({distributor.productCount})</option>
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
                All ({distributor.productCount})
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

        {distributor.productCount > 0 ? (
          grouped.map(group => {
            const range = powerRange(group.items)
            const isHorizontal = group.items.some(i => i.features || i.certImage || i.logo)

            return (
              <section className="series-block" key={group.key} data-aos="fade-up">
                <div className="series-header">
                  <span className="series-name">{group.key}</span>
                  <span className="series-count">{group.items.length} models</span>
                  {range && <span className="series-range">{range}</span>}
                </div>

                <div className={isHorizontal ? "pcard-list-container" : "pcard-grid"}>
                  {group.items.map((product, i) => (
                    <ProductCard product={product} key={product.slug || `${group.key}-${i}`} />
                  ))}
                </div>
              </section>
            )
          })
        ) : (
          <div className="empty-state">
            <p>Products coming soon.</p>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="page page-products">
      <section className="page-header" data-aos="fade-up">
        <div className="container">
          <p className="eyebrow">Products</p>
          <h1>Power &amp; Electronic Components</h1>
        </div>
      </section>

      <div className="products-layout section" style={{ paddingTop: '4rem' }} data-aos="fade-up">
        <aside className="products-sidebar">
          <div className="sidebar-section">
            <h4 className="sidebar-heading">DISTRIBUTORS</h4>
            <ul className="sidebar-list">
              {distributors.map((dist, index) => (
                <li key={dist.name}>
                  <button
                    className={`sidebar-item ${activeTab === `distributor-${index}` ? 'active' : ''}`}
                    onClick={() => setActiveTab(`distributor-${index}`)}
                  >
                    <span className="item-title">{dist.name}</span>
                    <span className="item-subtitle">{dist.id} - {dist.productCount} products</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="products-main">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}
