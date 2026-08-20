import { DONE_PRODUCTS } from './done.js'
const distributors = [
  {
    name: 'MORNSUN',
    about: 'Information about MORNSUN will go here. Awaiting details from the user.',
    products: []
  },
  {
    name: 'DONE',
    about: 'Guangdong Done Electronic Technology Co., Ltd. was founded in 2022 and is a holding subsidiary of Done Power. After more than ten years of operation and development, DONE has won many honours such as Guangdong Science and Technology Innovation Enterprise, Guangdong High-tech Enterprise, Guangdong Engineering Technology Research Centre, and Zhongshan Engineering Technology Research Centre. At present, DONE has more than 30,000 square meters of modern standardized factory buildings and more than 600 employees. It is a comprehensive brand enterprise integrating the research and development, manufacturing, sales and service of landscape lighting power supplies, advertising logo power supplies, intelligent dimming power supplies, and industrial control power supplies.',
    stats: [
      { label: 'Industry Experience', value: '15+ Years' },
      { label: 'Scope of Coverage', value: '5+' },
      { label: 'Exported to', value: '100+ Countries & Regions' },
      { label: 'Square Meters', value: '38,000' }
    ],
    strengths: [
      { title: 'R & D Capabilities', description: 'Done attaches great importance to product R&D and has invested heavily in building a huge R&D team. There are nearly one hundred professional engineers, most of whom have extensive R&D experience in the LED driver industry.' },
      { title: 'Quality Control', description: 'Product quality is the foundation of a manufacturing company\'s livelihood and the cornerstone of its long-term development. Done has always strictly implemented the ISO9001 quality management system and has very strict requirements for the incoming inspection of raw materials, the inspection of the production process and the inspection of finished products. We carry out a 100% ageing test on every finished product to ensure that the quality can satisfy customers and the market.' },
      { title: 'Manufacturing Capacity', description: 'Done has 10 high-power LED driver production lines, each line produces 5,000 LED drivers daily, and the production workshop is equipped with advanced wave soldering, AOI optical tester, ATE full-function tester, high-power aging cabinet and automatic glue filling production lines. In order to improve production automation and production efficiency, the company is building a fully-automated high-power LED power supply production line, which is expected to be put into operation before 2022 and can increase production capacity by 40% after it is put into operation.' }
    ],
    products: DONE_PRODUCTS
  },
  {
    name: 'CLAF',
    about: 'Headquartered in Guangzhou, China, CLAF Power is a premier industrial power supply manufacturer with over 15 years of expertise in the power supply industry, offering a rich and diverse product portfolio. With cutting-edge technology and advanced production lines, we have crafted more than 2,000 quality and reliable products, including AC/DC power supplies, DC/DC converters, and auxiliary components such as current sensors and EMC filters. Our products are used in a wide range of industrial applications, including automation and control, renewable energy (photovoltaic, wind, EV charging, etc.), EV charging, railroads, healthcare, and smart cities, etc. With our professional team, high-quality products, customer-oriented service, CLAF is always committed to providing our customers with efficient and reliable one-stop power solutions.',
    products: [
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
  }
]

export default distributors
