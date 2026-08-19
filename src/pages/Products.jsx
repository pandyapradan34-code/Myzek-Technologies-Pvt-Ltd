import { useState, useMemo } from 'react'
import distributorsData from '../data/products.js'

// Flatten products helper for a distributor
function getFlattenedProducts(distributor) {
  const flattened = [];
  if (!distributor || !distributor.products) return flattened;
  
  distributor.products.forEach(productCategory => {
    if (productCategory.groups) {
      productCategory.groups.forEach(group => {
        if (group.items) {
          group.items.forEach(item => {
             const name = typeof item === 'string' ? item : item.name;
             flattened.push({ name, category: productCategory.name, distributor: distributor.name });
          });
        }
      });
    } else {
      // some might not have groups, just pushing category as product if needed
      flattened.push({ name: productCategory.name, category: productCategory.name, distributor: distributor.name });
    }
  });
  return flattened;
}

export default function Products() {
  const [activeTab, setActiveTab] = useState('distributor-0'); 

  // Pre-calculate flattened products
  const distributors = useMemo(() => {
    return distributorsData.map((dist, index) => {
      const flattened = getFlattenedProducts(dist);
      return {
        ...dist,
        id: `DST-402${index + 1}`, // Mock ID
        flattenedProducts: flattened,
        productCount: flattened.length
      }
    });
  }, []);

  const allProducts = useMemo(() => {
    return distributors.flatMap(d => d.flattenedProducts);
  }, [distributors]);

  const renderContent = () => {

    // Distributor View
    const distIndex = parseInt(activeTab.split('-')[1]);
    const distributor = distributors[distIndex];
    
    if (!distributor) return null;

    return (
      <div className="content-view">
        <p className="eyebrow-text">Distributor</p>
        <h1 className="distributor-title">{distributor.name}</h1>
        <p className="distributor-id">{distributor.id}</p>
        
        <p className="distributor-desc">
          {distributor.about || 'Regional distributor for the northern territories. Stocks the full dry goods range and ships weekly.'}
        </p>

        <div className="products-grid-header">
          <h3>Products</h3>
          <span className="products-count">
             {distributor.productCount > 0 ? `Showing all ${distributor.productCount} products` : 'No products listed'}
          </span>
        </div>
        
        {distributor.productCount > 0 ? (
          <div className="products-grid">
            {distributor.flattenedProducts.map((product, i) => (
              <div className="product-card" key={i}>
                <div className="product-image-placeholder">
                  <div className="placeholder-stripes"></div>
                  <span className="placeholder-text">PRODUCT SHOT</span>
                </div>
                <div className="product-info">
                  <h4>{product.name}</h4>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>Products coming soon.</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="page page-products">
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">Products</p>
          <h1>Power & Electronic Components</h1>
        </div>
      </section>
      <div className="products-layout section" style={{ paddingTop: '4rem' }}>
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
