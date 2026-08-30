


import { useState, useMemo } from 'react'
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

  if (!hasImage) {
    return (
      <article className="pcard pcard-text-only" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div className="pcard-body" style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <h4 className="pcard-name" style={{ margin: 0, fontSize: '0.85rem' }}>{product.name}</h4>
            {product.watts && (
              <span 
                style={{ 
                  background: 'var(--color-primary)', 
                  color: '#fff', 
                  fontSize: '0.65rem', 
                  fontWeight: 700, 
                  padding: '0.2rem 0.4rem', 
                  borderRadius: '4px',
                  whiteSpace: 'nowrap'
                }}
              >
                {product.watts}W
              </span>
            )}
          </div>
          
          {product.volts && <p className="pcard-spec" style={{ margin: '0 0 0.5rem 0' }}>{product.volts}V DC</p>}
          {!product.volts && product.range && <p className="pcard-spec" style={{ margin: '0 0 0.5rem 0' }}>{product.range}</p>}
          
          {product.stock !== undefined && (
            <div 
              style={{ 
                marginTop: 'auto', 
                paddingTop: '0.6rem', 
                borderTop: '1px solid #f3f4f6', 
                display: 'flex', 
                justifyContent: 'space-between', 
                fontSize: '0.72rem',
                alignItems: 'center'
              }}
            >
              <span style={{ color: '#6b7280' }}>Stock:</span>
              <span 
                style={{ 
                  fontWeight: 700, 
                  color: product.stock > 0 ? '#10b981' : '#ef4444',
                  background: product.stock > 0 ? '#e6fdf4' : '#fdf2f2',
                  padding: '0.15rem 0.4rem',
                  borderRadius: '4px'
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
    <article className={`pcard ${secondary ? 'has-secondary' : ''}`} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="pcard-media">
        <img className="pcard-img" src={primary} alt={product.name} loading="lazy" />
        {secondary && (
          <img className="pcard-img pcard-img-alt" src={secondary} alt="" aria-hidden="true" loading="lazy" />
        )}
        {product.watts && <span className="pcard-badge">{product.watts}W</span>}
      </div>

      <div className="pcard-body" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h4 className="pcard-name">{product.name}</h4>
        {product.volts && <p className="pcard-spec">{product.volts}V DC</p>}
        {!product.volts && product.range && <p className="pcard-spec">{product.range}</p>}
        
        {product.stock !== undefined && (
          <div 
            style={{ 
              marginTop: 'auto', 
              paddingTop: '0.6rem', 
              borderTop: '1px solid #f3f4f6', 
              display: 'flex', 
              justifyContent: 'space-between', 
              fontSize: '0.72rem',
              alignItems: 'center'
            }}
          >
            <span style={{ color: '#6b7280' }}>Stock:</span>
            <span 
              style={{ 
                fontWeight: 700, 
                color: product.stock > 0 ? '#10b981' : '#ef4444',
                background: product.stock > 0 ? '#e6fdf4' : '#fdf2f2',
                padding: '0.15rem 0.4rem',
                borderRadius: '4px'
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
  const [activeTab, setActiveTab] = useState('distributor-0')
  const [searchTerm, setSearchTerm] = useState('')

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

    const filteredProducts = distributor.flattenedProducts.filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const grouped = groupBySeries(filteredProducts)

    return (
      <div className="content-view" data-aos="fade-up">
        <p className="eyebrow-text">Distributor</p>
        <h1 className="distributor-title">{distributor.name}</h1>
        <p className="distributor-id">{distributor.id}</p>

        <p className="distributor-desc">
          {distributor.about || 'Regional distributor.'}
        </p>

        <div className="products-grid-header" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
          <h3 style={{ margin: 0 }}>Products</h3>
          <div style={{ flex: 1, minWidth: '200px' }}>
            <input
              type="text"
              placeholder={`Search ${distributor.name} products...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '0.6rem 1rem', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '0.95rem', fontFamily: 'inherit' }}
            />
          </div>
          <span className="products-count" style={{ whiteSpace: 'nowrap' }}>
            {filteredProducts.length > 0
              ? `${filteredProducts.length} products`
              : 'No products found'}
          </span>
        </div>

        {distributor.productCount > 0 ? (
          grouped.map(group => {
            const range = powerRange(group.items)
            return (
              <section className="series-block" key={group.key} data-aos="fade-up">
                <div className="series-header">
                  <span className="series-name">{group.key}</span>
                  <span className="series-count">{group.items.length} models</span>
                  {range && <span className="series-range">{range}</span>}
                </div>

                <div className="pcard-grid">
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
