import { useState } from 'react'
import products from '../data/products.js'

function ProductItem({ item }) {
  if (typeof item === 'string') return (
    <li className="product-item">
      <span className="product-item-string">{item}</span>
    </li>
  )
  
  return (
    <li className="product-item">
      <a href={item.url} target="_blank" rel="noreferrer" className="product-item-link">
        <span className="product-item-text">{item.name}</span>
        <span className="product-item-arrow" aria-hidden="true">&rarr;</span>
      </a>
    </li>
  )
}

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('')

  // Filter products based on search query
  const filteredProducts = products.filter((product) => {
    if (!searchQuery) return true
    
    const query = searchQuery.toLowerCase()
    
    // Check if category name matches
    if (product.name.toLowerCase().includes(query)) return true
    
    // Check if any group or item inside matches
    for (const group of product.groups) {
      if (group.name && group.name.toLowerCase().includes(query)) return true
      
      for (const item of group.items) {
        const itemName = typeof item === 'string' ? item : item.name
        if (itemName.toLowerCase().includes(query)) return true
      }
    }
    
    return false
  })

  return (
    <div className="page page-products">
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">Products</p>
          <h1>Power & Electronic Components</h1>
        </div>
      </section>

      <section className="products-section">
        <div className="section-intro">
          <h2>Product Portfolio</h2>
          <p>Explore our complete range of premium power supplies, converters, communication modules, drivers, sensors, and EMC solutions built for industrial reliability.</p>
        </div>
        
        <div className="products-search-wrapper">
          <input
            type="text"
            className="products-search-input"
            placeholder="Search for a product, category, or series..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {filteredProducts.length === 0 ? (
          <div className="products-no-results">
            No products found matching "{searchQuery}"
          </div>
        ) : (
          <div className="product-catalog">
            {filteredProducts.map((product, index) => (
              <article className="product-card" key={product.name}>
                <div className="product-card-accent"></div>
                <div className="product-card-content">
                  <div className="product-card-index">{String(index + 1).padStart(2, '0')}</div>
                  
                  <h3 className="product-card-title">{product.name}</h3>
                  {product.range && <p className="product-card-range">{product.range}</p>}
                  {!product.range && <div style={{ height: '2rem' }}></div>}
                  
                  <div className="product-groups">
                    {product.groups.map((group, groupIndex) => (
                      <div className="product-group" key={group.name || groupIndex}>
                        {group.name && (
                          <h4 className="product-group-title">
                            {group.name} 
                            {group.range && <span>{group.range}</span>}
                          </h4>
                        )}
                        <ul className="product-item-list">
                          {group.items.map((item) => (
                            <ProductItem item={item} key={typeof item === 'string' ? item : item.name} />
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
