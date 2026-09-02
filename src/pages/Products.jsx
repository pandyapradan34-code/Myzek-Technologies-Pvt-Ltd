import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import AOS from 'aos'
import distributors from '../data/products.js'
import DoneProducts from '../components/products/done_product.jsx'
import ClafProducts from '../components/products/claf_product.jsx'
import MornsunProducts from '../components/products/mornsun_product.jsx'

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

  // Scroll to top when switching tabs
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activeTab])

  // Refresh AOS animations
  useEffect(() => {
    AOS.refreshHard()
    const t = setTimeout(() => AOS.refresh(), 100)
    return () => clearTimeout(t)
  }, [activeTab])

  const distIndex = parseInt(activeTab.split('-')[1]) || 0
  const currentDistributor = distributors[distIndex] || distributors[0]

  const renderCompanyProducts = () => {
    switch (distIndex) {
      case 0:
        return <DoneProducts distributor={currentDistributor} />
      case 1:
        return <ClafProducts distributor={currentDistributor} />
      case 2:
        return <MornsunProducts distributor={currentDistributor} />
      default:
        return <DoneProducts distributor={currentDistributor} />
    }
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
        {/* Sidebar for Selecting Distributor Company */}
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
                    <span className="item-subtitle">DST-402{index + 1} - {dist.products ? dist.products.length : 0} products</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content Area: Renders the active company's product module */}
        <main className="products-main">
          <div className="content-view">
            <p className="eyebrow-text">Distributor</p>
            <h1 className="distributor-title">{currentDistributor.name}</h1>
            <p className="distributor-id">DST-402{distIndex + 1}</p>

            <p className="distributor-desc">
              {currentDistributor.about || 'Regional distributor.'}
            </p>

            {/* Modular Company Product Component */}
            {renderCompanyProducts()}
          </div>
        </main>
      </div>
    </div>
  )
}
