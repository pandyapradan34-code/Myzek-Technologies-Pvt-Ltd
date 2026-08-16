import products from '../data/products.js'

function ProductItem({ item }) {
  if (typeof item === 'string') return <li>{item}</li>
  return (
    <li>
      <a href={item.url} target="_blank" rel="noreferrer">
        {item.name}<span aria-hidden="true"> &rarr;</span>
      </a>
    </li>
  )
}

export default function Products() {
  return (
    <div className="page page-products">
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">Products</p>
          <h1>Power & electronic components</h1>
        </div>
      </section>

      <section className="container section products-section">
        <div className="section-intro">
          <h2>Product portfolio</h2>
          <p>Explore our range of power supplies, converters, communication modules, drivers, sensors, and EMC solutions.</p>
        </div>
        <div className="product-catalog">
          {products.map((product, index) => (
            <article className="product-panel" key={product.name}>
              <div className="product-panel-heading">
                <span className="product-index">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{product.name}</h3>
                  {product.range && <p>{product.range}</p>}
                </div>
              </div>
              <div className="product-groups">
                {product.groups.map((group, groupIndex) => (
                  <div className="product-group" key={group.name || groupIndex}>
                    {group.name && <h4>{group.name} <span>{group.range}</span></h4>}
                    <ul>{group.items.map((item) => <ProductItem item={item} key={typeof item === 'string' ? item : item.name} />)}</ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
