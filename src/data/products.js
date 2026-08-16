// Edit this file to add, remove, or update product categories and their links.
const products = [
  {
    name: 'Encapsulated Power Supplies',
    range: '3-120 W',
    groups: [{
      items: [
        'APS Series (3-15 W)', 'APSW Series (5-15 W)', 'AO-M Series (15-65 W)',
        'AOMU Series (30-120 W)', 'AO-E Series (15-75 W)', 'APD Series (3-90 W)',
        'APDW Series (2 Phase, 10-30 W)', 'APH Series (5-25 W)',
      ],
    }],
  },
  {
    name: 'Isolated & Non-Isolated DC-DC Converters',
    groups: [
      { name: 'Fixed Input', range: '0.75-2 W', items: ['Unregulated Output SMD (1-2 W)', 'Unregulated Output S/DIP (1-2 W)', 'Regulated Output SMD (1 W)', 'Regulated Output SIP (0.75-1 W)'] },
      { name: 'Wide Input', range: '1-3500 W', items: [
        { name: 'SIP Package (1-10 W)', url: 'https://www.clafpower.com/products/25/sip-package.html' },
        { name: 'DIP Package (3-60 W)', url: 'https://www.clafpower.com/products/26/dip-package.html' },
        { name: 'SMD Package (1-6 W)', url: 'https://www.clafpower.com/products/269/smd-package.html' },
        { name: 'Brick Package (75-1200 W)', url: 'https://www.clafpower.com/products/27/brick-package.html' },
      ] },
      { name: 'Non-Isolated', range: '0.5-50 A', items: [
        { name: 'Switching Regulator (0.5-3 A)', url: 'https://www.clafpower.com/products/30/switching-regulater.html' },
        { name: 'Buck-Boost Module (10-50 A)', url: 'https://www.clafpower.com/products/379/buck-boost-module.html' },
      ] },
    ],
  },
  { name: 'Transceiver Modules', groups: [{ items: [
    { name: 'CAN Transceivers', url: 'https://www.clafpower.com/products/31/can-transceivers.html' },
    { name: 'RS-485 Transceivers', url: 'https://www.clafpower.com/products/32/rs-485-transceivers.html' },
    { name: 'RS-232 Transceivers', url: 'https://www.clafpower.com/products/33/rs-232-transceivers.html' },
  ] }] },
  { name: 'IGBT Drivers', range: 'SiC / GaN', groups: [{ items: [
    { name: 'IGBT Drivers', url: 'https://www.clafpower.com/products/34/igbt-divers.html' },
    { name: 'IGBT / SiC / GaN Power Supplies', url: 'https://www.clafpower.com/products/35/igbt%26sic%26gan-power-supplies.html' },
  ] }] },
  { name: 'Sensors', groups: [{ items: [
    { name: 'Residual Current Transducers', url: 'https://www.clafpower.com/products/431/residual-current-transducers.html' },
    { name: 'Current Sensors', url: 'https://www.clafpower.com/products/475/current-sensors.html' },
  ] }] },
  { name: 'EMC Auxiliary', groups: [{ items: [
    { name: 'EMC Filter', url: 'https://www.clafpower.com/products/361/emc-filter.html' },
  ] }] },
]

export default products
