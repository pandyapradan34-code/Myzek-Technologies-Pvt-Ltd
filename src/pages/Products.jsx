import { useState } from 'react'
import distributors from '../data/products.js'

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

  // Filter distributors and their products based on search query
  const filteredDistributors = distributors.map(distributor => {
    if (!searchQuery) return distributor;
    
    const query = searchQuery.toLowerCase();
    
    // If the distributor name matches, return the whole distributor with all its products
    if (distributor.name.toLowerCase().includes(query)) {
      return distributor;
    }
    
    // Otherwise, filter its products
    const filteredProducts = distributor.products.filter(product => {
      if (product.name.toLowerCase().includes(query)) return true;
      
      for (const group of product.groups) {
        if (group.name && group.name.toLowerCase().includes(query)) return true;
        for (const item of group.items) {
          const itemName = typeof item === 'string' ? item : item.name;
          if (itemName.toLowerCase().includes(query)) return true;
        }
      }
      return false;
    });
    
    // Only return the distributor if it has matching products
    if (filteredProducts.length > 0) {
      return { ...distributor, products: filteredProducts };
    }
    
    return null;
  }).filter(Boolean);

  return (
    <div className="page page-products">
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">Products</p>
          <h1>Power & Electronic Components</h1>
        </div>
      </section>

      <section className="products-section" data-aos="fade-up">
        <div className="section-intro" data-aos="fade-up">
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
        
        {filteredDistributors.length === 0 ? (
          <div className="products-no-results">
            No products found matching "{searchQuery}"
          </div>
        ) : (
          <div className="distributors-list">
            {filteredDistributors.map((distributor, distIndex) => (
              <div className="distributor-section" key={distributor.name}>
                <div className="distributor-header" data-aos="fade-up">
                  <h2 className="distributor-name">{distributor.name}</h2>
                  <p className="distributor-about">{distributor.about}</p>
                  
                  {distributor.stats && (
                    <div className="distributor-stats">
                      {distributor.stats.map(stat => (
                        <div className="distributor-stat-item" key={stat.label}>
                          <div className="distributor-stat-value">{stat.value}</div>
                          <div className="distributor-stat-label">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {distributor.strengths && (
                    <div className="distributor-strengths">
                      {distributor.strengths.map(strength => (
                        <div className="distributor-strength-card" key={strength.title}>
                          <h4 className="distributor-strength-title">{strength.title}</h4>
                          <p className="distributor-strength-desc">{strength.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {distributor.products.length > 0 ? (
                  <div className="product-catalog">
                    {distributor.products.map((product, index) => (
                      <article className="product-card" data-aos="fade-up" key={product.name}>
                        <div className="product-card-accent" data-aos="fade-up"></div>
                        <div className="product-card-content" data-aos="fade-up">
                          <div className="product-card-index" data-aos="fade-up">{String(index + 1).padStart(2, '0')}</div>
                          
                          <h3 className="product-card-title" data-aos="fade-up">{product.name}</h3>
                          {product.range && <p className="product-card-range" data-aos="fade-up">{product.range}</p>}
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
                ) : (
                  <div className="distributor-products-empty">
                    Products coming soon.
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
