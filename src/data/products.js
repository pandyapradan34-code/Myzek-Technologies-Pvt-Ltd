import { DONE_PRODUCTS } from './done.js'
import { CLAF_PRODUCTS } from './claf.js'

const distributors = [
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
    products: CLAF_PRODUCTS
  },
  {
    name: 'MORNSUN',
    about: 'Information about MORNSUN will go here. Awaiting details from the user.',
    products: []
  }
]

export default distributors
