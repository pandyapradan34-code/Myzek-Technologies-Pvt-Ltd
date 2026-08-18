import React from 'react';
import './KeyMarkets.css';

const KeyMarkets = () => {
  const markets = [
    {
      title: 'Mobility',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="16" height="16" x="4" y="4" rx="2" />
          <path d="M4 10h16" />
          <path d="m8 14 2 2 4-4" />
        </svg>
      ),
      items: ['Rail and transport', 'Electric vehicles', 'EV charging infrastructure', 'Elevators and escalators'],
    },
    {
      title: 'Energy',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      items: ['Solar and PV', 'Solar plants', 'Panel cleaning robots', 'LED lighting and signage'],
    },
    {
      title: 'Automation',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      items: ['Industrial control systems', 'Control panels', 'IoT and smart technology', 'Home automation'],
    },
    {
      title: 'Machinery and OEM',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      items: ['Pharmaceutical', 'Packaging', 'Plastics', 'Textile and jacquard', 'CNC and laser', 'Printing and embroidery', 'Medical devices'],
    }
  ];

  return (
    <section className="key-markets-section" aria-label="Key markets we serve">
      <div className="key-markets-container">
        <div className="key-markets-header">
          <div className="key-markets-title-col">
            <div className="key-markets-eyebrow">
              INDUSTRIES WE SERVE
            </div>
            <div className="key-markets-divider" aria-hidden="true"></div>
            <h2 className="key-markets-h2">OUR KEY MARKETS</h2>
          </div>
          <div className="key-markets-desc-col">
            <p className="key-markets-desc">
              We provide precision components and advanced solutions powering critical infrastructure and innovation across diverse industrial sectors.
            </p>
          </div>
        </div>

        <div className="key-markets-grid">
          {markets.map((market, idx) => (
            <div className="key-markets-card" key={idx}>
              <div className="key-markets-card-header">
                <span className="key-markets-icon" aria-hidden="true">
                  {market.icon}
                </span>
                <h3 className="key-markets-card-title">{market.title}</h3>
              </div>
              <ul className="key-markets-list">
                {market.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="key-markets-list-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyMarkets;
