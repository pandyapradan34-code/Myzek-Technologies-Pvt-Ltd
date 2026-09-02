import { useState } from 'react'
import { CLAF_PRODUCTS, CLAF_SERIES_DATASHEETS } from '../../data/claf.js'

// Mapping of DC-DC subgroups into their intermediate section
const DCDC_SUBGROUP_TO_SECTION = {
  // Fixed Input (0.75W-2W)
  'Unregulated output SMD (1-2W)': 'Fixed Input (0.75W-2W)',
  'Unregulated output S/DIP (1-2W)': 'Fixed Input (0.75W-2W)',
  'Regulated output SMD (1W)': 'Fixed Input (0.75W-2W)',
  'Regulated output SIP (0.75-1W)': 'Fixed Input (0.75W-2W)',

  // Wide Input (1-3500W)
  'SIP Package (1-10W)': 'Wide Input (1-3500W)',
  'DIP Package (3-60W)': 'Wide Input (1-3500W)',
  'SMD Package (1-6W)': 'Wide Input (1-3500W)',
  'Brick Package (75-1200W)': 'Wide Input (1-3500W)',
  'Photovoltaic Industry (15-3500W)': 'Wide Input (1-3500W)',
  'Railway Industry (6-400W)': 'Wide Input (1-3500W)',

  // Non-isolated (0.5-50A)
  'Switching Regulater (0.5-3A)': 'Non-isolated (0.5-50A)',
  'Buck-boost Module (10-50A)': 'Non-isolated (0.5-50A)',
}

// Order of intermediate sections inside Group 2
const DCDC_SECTION_ORDER = [
  'Fixed Input (0.75W-2W)',
  'Wide Input (1-3500W)',
  'Non-isolated (0.5-50A)'
]

// Single CLAF Product Card for items WITH images
function ClafCard({ product }) {
  const gallery = product.images || (product.image ? [product.image] : [])
  const primary = gallery[0]
  const secondary = gallery[1]
  const hasImage = !!primary
  const datasheetUrl = CLAF_SERIES_DATASHEETS[product.name] || CLAF_SERIES_DATASHEETS[product.subgroup] || CLAF_SERIES_DATASHEETS[product.series] || product.link || null

  return (
    <article className={`pcard ${secondary ? 'has-secondary' : ''}`} data-aos="fade-up" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Product Image Media Box */}
      {hasImage ? (
        <div className="pcard-media" style={{ background: '#f8fafc', padding: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '135px', position: 'relative' }}>
          <img className="pcard-img" src={primary} alt={product.name} loading="lazy" style={{ maxHeight: '105px', maxWidth: '100%', objectFit: 'contain' }} />
          {secondary && (
            <img className="pcard-img pcard-img-alt" src={secondary} alt="" aria-hidden="true" loading="lazy" style={{ maxHeight: '105px', maxWidth: '100%', objectFit: 'contain' }} />
          )}
          {product.watts && <span className="pcard-badge">{product.watts}W</span>}
        </div>
      ) : null}

      {/* Product Details Body */}
      <div className="pcard-body" style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '0.75rem 0.85rem' }}>
        <div className="pcard-title-row">
          <h4 className="pcard-name" style={{ fontSize: '0.86rem', fontWeight: 700, margin: 0, lineHeight: '1.3' }}>{product.name}</h4>
          {product.series && (
            <span className="pcard-series-tag">{product.series}</span>
          )}
        </div>

        {product.volts && <p className="pcard-spec" style={{ fontWeight: 600, fontSize: '0.72rem', color: 'var(--color-accent)', marginBottom: '0.25rem', marginTop: '0.25rem' }}>{product.volts}V DC</p>}
        {!product.volts && product.range && <p className="pcard-spec" style={{ fontWeight: 600, fontSize: '0.72rem', color: 'var(--color-accent)', marginBottom: '0.25rem', marginTop: '0.25rem' }}>{product.range}</p>}
        
        {product.description && (
          <p className="pcard-desc" style={{ fontSize: '0.75rem', color: '#4b5563', lineHeight: '1.4', margin: '0.25rem 0 0.5rem 0' }}>
            {product.description}
          </p>
        )}

        {/* Action Buttons: Inquire & External Datasheet Link */}
        <div className="pcard-actions" style={{ marginTop: 'auto', paddingTop: '0.5rem', display: 'flex', gap: '0.5rem' }}>
          <a 
            href={`/contact?distributor=CLAF&product=${encodeURIComponent(product.name)}`}
            className="pcard-inquire-btn"
            style={{ flex: 1, justifyContent: 'center' }}
          >
            Inquire
          </a>
          {datasheetUrl && (
            <a 
              href={datasheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pcard-inquire-btn"
              style={{ background: '#f0f9ff', color: '#0284c7', borderColor: '#bae6fd', padding: '0.4rem 0.65rem' }}
              title="Open Official Datasheet"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

// Clean List-Wise Row for Series without images (Group 5 & Group 6)
function ClafListRow({ item }) {
  const datasheetUrl = CLAF_SERIES_DATASHEETS[item.subgroup] || CLAF_SERIES_DATASHEETS[item.series] || CLAF_SERIES_DATASHEETS[item.name] || item.link || null
  const displayName = item.subgroup || item.name

  return (
    <div 
      className="series-header series-header-enhanced" 
      data-aos="fade-up"
      style={{ 
        cursor: 'default', 
        padding: '0.75rem 1rem', 
        marginBottom: '0.65rem', 
        background: '#f8fafc', 
        borderRadius: '6px', 
        border: '1px solid #e2e8f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.75rem'
      }}
    >
      <div className="series-header-left" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
        <span className="series-name" style={{ color: '#0f2b48', fontSize: '0.94rem', fontWeight: 700 }}>
          {displayName}
        </span>
        {item.series && item.series !== 'Sensor' && item.series !== 'EMC' && item.series !== displayName && (
          <span className="pcard-series-tag">{item.series}</span>
        )}
        {datasheetUrl && (
          <a 
            href={datasheetUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="series-datasheet-btn"
            title={`Open ${displayName} Datasheet in new tab`}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
            <span>Datasheet</span>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.8 }}>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        )}
      </div>

      <div className="series-header-right">
        <a 
          href={`/contact?distributor=CLAF&product=${encodeURIComponent(displayName)}`}
          className="pcard-inquire-btn"
          style={{ padding: '0.32rem 0.75rem', fontSize: '0.75rem' }}
        >
          Inquire
        </a>
      </div>
    </div>
  )
}

// Subgroup Accordion Block with left datasheet button
function SubgroupBlock({ subgroup, isSubgroupOpen, toggleSubgroup }) {
  return (
    <section className="series-block claf-subgroup-block" key={subgroup.key} data-aos="fade-up">
      {/* Subgroup Header */}
      <div 
        className={`series-header series-header-enhanced series-accordion-header ${isSubgroupOpen ? 'open' : ''}`}
        onClick={() => toggleSubgroup(subgroup.key)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && toggleSubgroup(subgroup.key)}
      >
        <div className="series-header-left">
          <span className={`subgroup-accordion-chevron ${isSubgroupOpen ? 'open' : ''}`}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
          <span className="series-name">{subgroup.key}</span>
          
          {/* Left-Side Datasheet Link */}
          {subgroup.datasheet && (
            <a 
              href={subgroup.datasheet} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="series-datasheet-btn"
              title={`Open ${subgroup.key} Datasheet in new tab`}
              onClick={(e) => e.stopPropagation()} // Prevents toggling accordion
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
              </svg>
              <span>Datasheet</span>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.8 }}>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Subgroup Product Cards Grid (visible when subgroup is open) */}
      {isSubgroupOpen && (
        <div className="pcard-grid claf-pcard-grid">
          {subgroup.items.map((product, i) => (
            <ClafCard product={product} key={product.name || `${subgroup.key}-${i}`} />
          ))}
        </div>
      )}
    </section>
  )
}

// Major Group Wrapper Helper (Clean header without group-level datasheet button)
function MajorGroupBlock({ title, bannerBadge, modelsCount, subgroupsCount, isOpen, onToggle, children }) {
  return (
    <div className="claf-major-group-section" data-aos="fade-up" style={{ marginBottom: '2rem' }}>
      <div 
        className={`claf-group-accordion-header ${isOpen ? 'open' : ''}`}
        onClick={onToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onToggle()}
      >
        <div className="claf-group-header-left">
          <span className={`group-accordion-chevron ${isOpen ? 'open' : ''}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
          <h2 className="claf-group-accordion-title">
            {title}
          </h2>
        </div>
        <div className="claf-group-header-right">
          {bannerBadge && <span className="claf-group-banner-badge">{bannerBadge}</span>}
          <span className="claf-group-models-badge">
            {modelsCount != null ? `${modelsCount} models` : ''} 
            {subgroupsCount != null ? ` (${subgroupsCount} ${subgroupsCount === 1 ? 'Sub-Group' : 'Sub-Groups'})` : ''}
          </span>
        </div>
      </div>

      {isOpen && (
        <div className="claf-subgroups-body">
          {children}
        </div>
      )}
    </div>
  )
}

export default function ClafProducts() {
  const [searchTerm, setSearchTerm] = useState('')

  // State to track open/closed groups, sections & subgroups (default: all closed)
  const [expandedGroups, setExpandedGroups] = useState({})
  const [expandedSections, setExpandedSections] = useState({})
  const [expandedSubgroups, setExpandedSubgroups] = useState({})

  const toggleGroup = (groupName) => {
    setExpandedGroups(prev => ({
      ...prev,
      [groupName]: !prev[groupName]
    }))
  }

  const toggleSection = (sectionName) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }))
  }

  const toggleSubgroup = (subgroupKey) => {
    setExpandedSubgroups(prev => ({
      ...prev,
      [subgroupKey]: !prev[subgroupKey]
    }))
  }

  // Filter products by search query
  const filteredProducts = CLAF_PRODUCTS.filter(p => {
    const q = searchTerm.toLowerCase().trim()
    if (!q) return true
    return (
      p.name.toLowerCase().includes(q) ||
      (p.series && p.series.toLowerCase().includes(q)) ||
      (p.subgroup && p.subgroup.toLowerCase().includes(q)) ||
      (p.group && p.group.toLowerCase().includes(q)) ||
      (p.watts && String(p.watts).includes(q)) ||
      (p.description && p.description.toLowerCase().includes(q))
    )
  })

  const hasSearch = searchTerm.trim().length > 0

  // Helper to build subgroups list for simple groups
  const buildSubgroups = (groupName) => {
    const groupProducts = filteredProducts.filter(p => p.group === groupName)
    const map = new Map()
    groupProducts.forEach(p => {
      const key = p.subgroup || p.series || 'Other'
      if (!map.has(key)) {
        const datasheet = CLAF_SERIES_DATASHEETS[key] || (p.series && CLAF_SERIES_DATASHEETS[p.series]) || null
        map.set(key, { key, datasheet, items: [] })
      }
      map.get(key).items.push(p)
    })
    return {
      products: groupProducts,
      subgroups: Array.from(map.values())
    }
  }

  // 1. Encapsulated Group 1 Subgroups
  const group1 = buildSubgroups('1. Encapsulated Power Supplies(3-120W)')

  // 2. DC-DC Converter Group 2 with 3 Sections
  const group2Products = filteredProducts.filter(p => p.group === '2. Isolated & Non Isolated DC-DC Converter')
  const group2SectionsMap = new Map()
  DCDC_SECTION_ORDER.forEach(sec => {
    group2SectionsMap.set(sec, {
      name: sec,
      subgroupsMap: new Map(),
      totalCount: 0
    })
  })
  group2Products.forEach(p => {
    const subKey = p.subgroup || p.series || 'Other'
    const sectionName = DCDC_SUBGROUP_TO_SECTION[subKey] || 'Other'
    if (!group2SectionsMap.has(sectionName)) {
      group2SectionsMap.set(sectionName, {
        name: sectionName,
        subgroupsMap: new Map(),
        totalCount: 0
      })
    }
    const secObj = group2SectionsMap.get(sectionName)
    secObj.totalCount += 1
    if (!secObj.subgroupsMap.has(subKey)) {
      const datasheet = CLAF_SERIES_DATASHEETS[subKey] || (p.series && CLAF_SERIES_DATASHEETS[p.series]) || null
      secObj.subgroupsMap.set(subKey, { key: subKey, datasheet, items: [] })
    }
    secObj.subgroupsMap.get(subKey).items.push(p)
  })
  const group2Sections = Array.from(group2SectionsMap.values()).filter(sec => sec.totalCount > 0)

  // 3. Transceiver Module Group 3
  const group3 = buildSubgroups('3. Transceiver Module')

  // 4. IGBT Driver(SiC/GaN) Group 4 (Ordered first before Sensor)
  const group4 = buildSubgroups('4. IGBT Driver(SiC/GaN)')

  // 5. Sensor Group 5 (List-wise rows, no subgroup accordion)
  const group5 = buildSubgroups('5. Sensor')

  // 6. EMC Auxiliary Group 6 (List-wise rows, no subgroup accordion)
  const group6 = buildSubgroups('6. EMC Auxiliary')

  // 7. DDR - DIN Rail Redundant Module Group 7 (Direct product cards with images, no subgroup accordion)
  const group7 = buildSubgroups('7. DDR - DIN Rail Redundant Module')

  // 8. DDUPS - DIN Rail Uninterruptible Power Supply Group 8 (Direct product cards with images, no subgroup accordion)
  const group8 = buildSubgroups('8. DDUPS - DIN Rail Uninterruptible Power Supply')

  const isGroup1Open = hasSearch || Boolean(expandedGroups['1. Encapsulated Power Supplies(3-120W)'])
  const isGroup2Open = hasSearch || Boolean(expandedGroups['2. Isolated & Non Isolated DC-DC Converter'])
  const isGroup3Open = hasSearch || Boolean(expandedGroups['3. Transceiver Module'])
  const isGroup4Open = hasSearch || Boolean(expandedGroups['4. IGBT Driver(SiC/GaN)'])
  const isGroup5Open = hasSearch || Boolean(expandedGroups['5. Sensor'])
  const isGroup6Open = hasSearch || Boolean(expandedGroups['6. EMC Auxiliary'])
  const isGroup7Open = hasSearch || Boolean(expandedGroups['7. DDR - DIN Rail Redundant Module'])
  const isGroup8Open = hasSearch || Boolean(expandedGroups['8. DDUPS - DIN Rail Uninterruptible Power Supply'])

  return (
    <div className="claf-products-container">
      {/* Search Header */}
      <div className="products-grid-header" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
        <h3 style={{ margin: 0 }}>Products</h3>
        <div style={{ flex: 1, minWidth: '220px' }}>
          <input
            type="text"
            placeholder="Search CLAF products by model, series, wattage..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', padding: '0.55rem 0.9rem', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '0.9rem', fontFamily: 'inherit' }}
          />
        </div>
        <span className="products-count" style={{ whiteSpace: 'nowrap' }}>
          {filteredProducts.length > 0 ? `${filteredProducts.length} products` : 'No products found'}
        </span>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="claf-groups-container">
          
          {/* ========================================================================= */}
          {/* GROUP 1: Encapsulated Power Supplies (3-120W) */}
          {/* ========================================================================= */}
          {group1.products.length > 0 && (
            <MajorGroupBlock
              title="1. Encapsulated Power Supplies(3-120W)"
              bannerBadge="3W – 120W"
              modelsCount={group1.products.length}
              subgroupsCount={group1.subgroups.length}
              isOpen={isGroup1Open}
              onToggle={() => toggleGroup('1. Encapsulated Power Supplies(3-120W)')}
            >
              {group1.subgroups.map(subgroup => (
                <SubgroupBlock 
                  key={subgroup.key}
                  subgroup={subgroup}
                  isSubgroupOpen={hasSearch || Boolean(expandedSubgroups[subgroup.key])}
                  toggleSubgroup={toggleSubgroup}
                />
              ))}
            </MajorGroupBlock>
          )}

          {/* ========================================================================= */}
          {/* GROUP 2: Isolated & Non Isolated DC-DC Converter */}
          {/* ========================================================================= */}
          {group2Products.length > 0 && (
            <MajorGroupBlock
              title="2. Isolated & Non Isolated DC-DC Converter"
              bannerBadge="0.75W – 3500W"
              modelsCount={group2Products.length}
              subgroupsCount={3}
              isOpen={isGroup2Open}
              onToggle={() => toggleGroup('2. Isolated & Non Isolated DC-DC Converter')}
            >
              <div style={{ paddingBottom: '0.5rem' }}>
                {group2Sections.map(section => {
                  const isSectionOpen = hasSearch || Boolean(expandedSections[section.name])
                  const subArray = Array.from(section.subgroupsMap.values())

                  return (
                    <div className="claf-section-block" key={section.name} data-aos="fade-up">
                      <div 
                        className={`claf-section-accordion-header ${isSectionOpen ? 'open' : ''}`}
                        onClick={() => toggleSection(section.name)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && toggleSection(section.name)}
                      >
                        <div className="claf-section-header-left">
                          <span className={`section-accordion-chevron ${isSectionOpen ? 'open' : ''}`}>
                            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                          </span>
                          <h3 className="claf-section-title">
                            {section.name}
                          </h3>
                        </div>
                        <span className="claf-section-badge">
                          {section.totalCount} models ({subArray.length} Sub-Groups)
                        </span>
                      </div>

                      {isSectionOpen && (
                        <div className="claf-section-body">
                          {subArray.map(subgroup => (
                            <SubgroupBlock 
                              key={subgroup.key}
                              subgroup={subgroup}
                              isSubgroupOpen={hasSearch || Boolean(expandedSubgroups[subgroup.key])}
                              toggleSubgroup={toggleSubgroup}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </MajorGroupBlock>
          )}

          {/* ========================================================================= */}
          {/* GROUP 3: Transceiver Module */}
          {/* ========================================================================= */}
          {group3.products.length > 0 && (
            <MajorGroupBlock
              title="3. Transceiver Module"
              modelsCount={group3.products.length}
              subgroupsCount={group3.subgroups.length}
              isOpen={isGroup3Open}
              onToggle={() => toggleGroup('3. Transceiver Module')}
            >
              {group3.subgroups.map(subgroup => (
                <SubgroupBlock 
                  key={subgroup.key}
                  subgroup={subgroup}
                  isSubgroupOpen={hasSearch || Boolean(expandedSubgroups[subgroup.key])}
                  toggleSubgroup={toggleSubgroup}
                />
              ))}
            </MajorGroupBlock>
          )}

          {/* ========================================================================= */}
          {/* GROUP 4: IGBT Driver(SiC/GaN) */}
          {/* ========================================================================= */}
          {group4.products.length > 0 && (
            <MajorGroupBlock
              title="4. IGBT Driver(SiC/GaN)"
              modelsCount={group4.products.length}
              subgroupsCount={group4.subgroups.length}
              isOpen={isGroup4Open}
              onToggle={() => toggleGroup('4. IGBT Driver(SiC/GaN)')}
            >
              {group4.subgroups.map(subgroup => (
                <SubgroupBlock 
                  key={subgroup.key}
                  subgroup={subgroup}
                  isSubgroupOpen={hasSearch || Boolean(expandedSubgroups[subgroup.key])}
                  toggleSubgroup={toggleSubgroup}
                />
              ))}
            </MajorGroupBlock>
          )}

          {/* ========================================================================= */}
          {/* GROUP 5: Sensor (List-wise rows inside group) */}
          {/* ========================================================================= */}
          {group5.products.length > 0 && (
            <MajorGroupBlock
              title="5. Sensor"
              isOpen={isGroup5Open}
              onToggle={() => toggleGroup('5. Sensor')}
            >
              <div style={{ display: 'flex', flexDirection: 'column', padding: '0.25rem 0' }}>
                {group5.products.map((item, i) => (
                  <ClafListRow key={item.subgroup || item.name || i} item={item} />
                ))}
              </div>
            </MajorGroupBlock>
          )}

          {/* ========================================================================= */}
          {/* GROUP 6: EMC Auxiliary (List-wise rows inside group) */}
          {/* ========================================================================= */}
          {group6.products.length > 0 && (
            <MajorGroupBlock
              title="6. EMC Auxiliary"
              isOpen={isGroup6Open}
              onToggle={() => toggleGroup('6. EMC Auxiliary')}
            >
              <div style={{ display: 'flex', flexDirection: 'column', padding: '0.25rem 0' }}>
                {group6.products.map((item, i) => (
                  <ClafListRow key={item.subgroup || item.name || i} item={item} />
                ))}
              </div>
            </MajorGroupBlock>
          )}

          {/* ========================================================================= */}
          {/* GROUP 7: DDR - DIN Rail Redundant Module (Direct cards with images, no subgroup accordion) */}
          {/* ========================================================================= */}
          {group7.products.length > 0 && (
            <MajorGroupBlock
              title="7. DDR - DIN Rail Redundant Module"
              bannerBadge="20A – 40A"
              modelsCount={group7.products.length}
              isOpen={isGroup7Open}
              onToggle={() => toggleGroup('7. DDR - DIN Rail Redundant Module')}
            >
              <div className="pcard-grid claf-pcard-grid" style={{ paddingTop: '0.25rem' }}>
                {group7.products.map((product, i) => (
                  <ClafCard product={product} key={product.name || i} />
                ))}
              </div>
            </MajorGroupBlock>
          )}

          {/* ========================================================================= */}
          {/* GROUP 8: DDUPS - DIN Rail Uninterruptible Power Supply (Direct cards with images, no subgroup accordion) */}
          {/* ========================================================================= */}
          {group8.products.length > 0 && (
            <MajorGroupBlock
              title="8. DDUPS - DIN Rail Uninterruptible Power Supply"
              bannerBadge="24V / 20A"
              modelsCount={group8.products.length}
              isOpen={isGroup8Open}
              onToggle={() => toggleGroup('8. DDUPS - DIN Rail Uninterruptible Power Supply')}
            >
              <div className="pcard-grid claf-pcard-grid" style={{ paddingTop: '0.25rem' }}>
                {group8.products.map((product, i) => (
                  <ClafCard product={product} key={product.name || i} />
                ))}
              </div>
            </MajorGroupBlock>
          )}

        </div>
      ) : (
        <div className="empty-state">
          <p>No CLAF products found matching your search.</p>
        </div>
      )}
    </div>
  )
}
