// import { useState, useMemo } from 'react'
// import distributorsData from '../data/products.js'

// // Flatten products helper for a distributor
// function getFlattenedProducts(distributor) {
//   const flattened = [];
//   if (!distributor || !distributor.products) return flattened;

//   distributor.products.forEach(productCategory => {
//     if (productCategory.groups) {
//       productCategory.groups.forEach(group => {
//         if (group.items) {
//           group.items.forEach(item => {
//             const name = typeof item === 'string' ? item : item.name;
//             const url = typeof item === 'string' ? null : item.url;
//             flattened.push({
//               name,
//               url,
//               category: productCategory.name,
//               distributor: distributor.name,
//             });
//           });
//         }
//       });
//     } else {
//       // flat product entries (e.g. DONE) — keep image, range and series
//       flattened.push({
//         ...productCategory,
//         category: productCategory.series || productCategory.name,
//         distributor: distributor.name,
//       });
//     }
//   });
//   return flattened;
// }
// export default function Products() {
//   const [activeTab, setActiveTab] = useState('distributor-0'); 

//   // Pre-calculate flattened products
//   const distributors = useMemo(() => {
//     return distributorsData.map((dist, index) => {
//       const flattened = getFlattenedProducts(dist);
//       return {
//         ...dist,
//         id: `DST-402${index + 1}`, // Mock ID
//         flattenedProducts: flattened,
//         productCount: flattened.length
//       }
//     });
//   }, []);

//   const allProducts = useMemo(() => {
//     return distributors.flatMap(d => d.flattenedProducts);
//   }, [distributors]);

//   const renderContent = () => {

//     // Distributor View
//     const distIndex = parseInt(activeTab.split('-')[1]);
//     const distributor = distributors[distIndex];
    
//     if (!distributor) return null;

//     return (
//       <div className="content-view">
//         <p className="eyebrow-text">Distributor</p>
//         <h1 className="distributor-title">{distributor.name}</h1>
//         <p className="distributor-id">{distributor.id}</p>
        
//         <p className="distributor-desc">
//           {distributor.about || 'Regional distributor for the northern territories. Stocks the full dry goods range and ships weekly.'}
//         </p>

//         <div className="products-grid-header">
//           <h3>Products</h3>
//           <span className="products-count">
//              {distributor.productCount > 0 ? `Showing all ${distributor.productCount} products` : 'No products listed'}
//           </span>
//         </div>
        
//         {distributor.productCount > 0 ? (
//           <div className="products-grid">
//             {distributor.flattenedProducts.map((product, i) => (
//               <div className="product-card" key={product.slug || i}>
//                 {product.image ? (
//                   <div className="product-image">
//                     <img src={product.image} alt={product.name} loading="lazy" />
//                   </div>
//                 ) : (
//                   <div className="product-image-placeholder">
//                     <div className="placeholder-stripes"></div>
//                     <span className="placeholder-text">PRODUCT SHOT</span>
//                   </div>
//                 )}
//                 <div className="product-info">
//                   <h4>{product.name}</h4>
//                   {product.range && <p className="product-range">{product.range}</p>}
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="empty-state">
//             <p>Products coming soon.</p>
//           </div>
//         )}
//       </div>
//     );
//   };
//   return (
//     <div className="page page-products">
//       <section className="page-header">
//         <div className="container">
//           <p className="eyebrow">Products</p>
//           <h1>Power & Electronic Components</h1>
//         </div>
//       </section>
//       <div className="products-layout section" style={{ paddingTop: '4rem' }}>
//         <aside className="products-sidebar">
//           <div className="sidebar-section">
//             <h4 className="sidebar-heading">DISTRIBUTORS</h4>
//             <ul className="sidebar-list">
//               {distributors.map((dist, index) => (
//                 <li key={dist.name}>
//                   <button 
//                     className={`sidebar-item ${activeTab === `distributor-${index}` ? 'active' : ''}`}
//                     onClick={() => setActiveTab(`distributor-${index}`)}
//                   >
//                     <span className="item-title">{dist.name}</span>
//                     <span className="item-subtitle">{dist.id} - {dist.productCount} products</span>
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </aside>

//         <main className="products-main">
//           {renderContent()}
//         </main>
        
//       </div>
//     </div>
//   )
// }


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

  return (
    <article className="pcard">
      <div className="pcard-media">
        {primary ? (
          <>
            <img className="pcard-img" src={primary} alt={product.name} loading="lazy" />
            {secondary && (
              <img className="pcard-img pcard-img-alt" src={secondary} alt="" aria-hidden="true" loading="lazy" />
            )}
          </>
        ) : (
          <span className="pcard-noimg">No image</span>
        )}

        {product.watts && <span className="pcard-badge">{product.watts}W</span>}
      </div>

      <div className="pcard-body">
        <h4 className="pcard-name">{product.name}</h4>
        {product.volts && <p className="pcard-spec">{product.volts}V DC</p>}
        {!product.volts && product.range && <p className="pcard-spec">{product.range}</p>}
      </div>
    </article>
  )
}

export default function Products() {
  const [activeTab, setActiveTab] = useState('distributor-0')

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

    const grouped = groupBySeries(distributor.flattenedProducts)

    return (
      <div className="content-view">
        <p className="eyebrow-text">Distributor</p>
        <h1 className="distributor-title">{distributor.name}</h1>
        <p className="distributor-id">{distributor.id}</p>

        <p className="distributor-desc">
          {distributor.about || 'Regional distributor.'}
        </p>

        <div className="products-grid-header">
          <h3>Products</h3>
          <span className="products-count">
            {distributor.productCount > 0
              ? `${distributor.productCount} products`
              : 'No products listed'}
          </span>
        </div>

        {distributor.productCount > 0 ? (
          grouped.map(group => {
            const range = powerRange(group.items)
            return (
              <section className="series-block" key={group.key}>
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
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">Products</p>
          <h1>Power &amp; Electronic Components</h1>
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
