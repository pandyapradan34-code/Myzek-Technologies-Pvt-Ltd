// DONE — industrial control power supply catalogue
// Extracted from reference: https://elec.donepower.com/products_list/11.html

import imgLogo from '../assets/products/done/done-logo.png'

import imgEXL from '../assets/products/done/exl.png'
import imgEXC from '../assets/products/done/exc.png'
import imgEXCH from '../assets/products/done/exc-h.png'
import imgEDG from '../assets/products/done/edg.png'
import imgEPC from '../assets/products/done/epc.png'
import imgEPG from '../assets/products/done/epg.png'
import imgEDC from '../assets/products/done/edc.png'
import imgEXS from '../assets/products/done/exs.png'
import imgEXG from '../assets/products/done/exg.png'

import certEXL from '../assets/products/done/cert-exl.png'
import certEXC from '../assets/products/done/cert-exc.png'
import certEDG from '../assets/products/done/cert-edg.png'
import certEPC from '../assets/products/done/cert-epc.png'

export const DONE_SERIES = [
  { code: 'INDUSTRIAL', name: 'Industrial Control Power Supply', count: 9 },
]

export const DONE_PRODUCTS = [
  {
    name: 'EXL',
    slug: 'exl-series',
    url: 'https://elec.donepower.com/products_details/69.html',
    series: 'Industrial Control Power Supply',
    range: '50/75/100/150/200/300W',
    logo: imgLogo,
    image: imgEXL,
    images: [imgEXL],
    certImage: certEXL,
    description: 'The "EXL Series" N-PFC long-form chassis switching power supply operates within an input voltage range of 100-240Vac and offers a power range of 50-300W. This fanless, self-cooling long-form chassis power supply is suitable for harsh industrial and outdoor environments. Its built-in semi-potting greatly improves heat dissipation and enhances reliability in outdoor applications. It meets EMC EN55035/55032 conducted and radiated emissions standards.It is widely used in industrial machinery, automation, medical equipment, new energy equipment, and other industrial equipment in harsh external environments.',
    features: [
      'Rated input voltage:100-240Vac（200-300W requires dialing to switch AC input range）.',
      'Capable of 305Vac input for 5 seconds.',
      'Compliant with EMC EN55035/55032 conducted/radiated emissions requirements.',
      'Highest operating temperature up to 70℃.',
      'Over-Voltage level: III.',
      'Low standby power consumption.',
      'Fanless self cooling design.',
      'OTP/OVP/OLP/SCP protection.',
      '3 years warranty.'
    ]
  },
  {
    name: 'EXC',
    slug: 'exc-series',
    url: 'https://elec.donepower.com/products_details/60.html',
    series: 'Industrial Control Power Supply',
    range: '15/25/35/50/75/100/150/200/350/450/600W',
    logo: imgLogo,
    image: imgEXC,
    images: [imgEXC],
    certImage: certEXC,
    description: 'The "EXC Series" N-PFC chassis-type switching power supply operates within an input voltage range of 100-240Vac and offers a power range of 35-600W. It offers high cost-effectiveness, high efficiency, high reliability, and a 5000m altitude rating. Its IP20 protection rating and metal mesh housing significantly enhance heat dissipation and reliability. It is widely used in industrial machinery, automation, medical equipment, new energy devices, and other industrial equipment operating in harsh environments. The B version provides 200% peak power for inductive loads requiring higher power during startup.',
    features: [
      'Rated input voltage 100-240VAC (200-600W requires a DIP switch to select the AC input range)',
      'Withstands 305VAC input for 5s',
      'Meets EMC EN55035/55032 conducted and radiated emissions standards',
      'Maximum operating temperature up to 70°C',
      'Overvoltage Category III',
      'Low no-load power consumption',
      'Function options: Type B: Peak power (supports up to 200% peak power for 5s)',
      'Operating temperature: -40°C to 70°C',
      'Suitable for use at altitudes up to 5000m',
      'Short-circuit, over-temperature, over-voltage, and overload protections',
      '3 year warranty'
    ]
  },
  {
    name: 'EXC-H',
    slug: 'exc-h-series',
    url: 'https://elec.donepower.com/products_details/84.html',
    series: 'Industrial Control Power Supply',
    range: '35/50/75/100/150/200/350/450/600W',
    logo: imgLogo,
    image: imgEXCH,
    images: [imgEXCH],
    certImage: certEXC,
    description: 'The “EXC-H Series” N-PFC chassis‑mounted switching power supplies operate within an input voltage range of 200–240 Vac and offer power ratings from 35 to 600 W. Featuring high cost‑effectiveness, exceptional efficiency, and superior reliability, these units are also designed to withstand altitudes up to 5,000 m. With an IP20 protection rating, their metal mesh enclosure significantly enhances heat dissipation, further improving operational reliability. They are widely used in industrial machinery, automation systems, medical equipment, new‑energy devices, and other industrial applications exposed to harsh external environments.',
    features: [
      'Rated input voltage:200-240Vac.',
      'Capable of 305Vac input for 5 seconds.',
      'Compliant with EMC EN55035/55032 requirements.',
      'Operating temperature up to 70℃.',
      'Over-Voltage Category: III.',
      'Low standby power consumption.',
      'OVP / OLP / SCP.',
      '3 years warranty.'
    ]
  },
  {
    name: 'EDG',
    slug: 'edg-series',
    url: 'https://elec.donepower.com/products_details/79.html',
    series: 'Industrial Control Power Supply',
    range: '75/120/240/480/960W',
    logo: imgLogo,
    image: imgEDG,
    images: [imgEDG],
    certImage: certEDG,
    description: 'The “EDG Series” rail‑mount power supplies offer high cost‑effectiveness, energy efficiency, a compact design, excellent stability, and strong anti‑interference performance. They are ideal for installation in small chassis and tight spaces. With a maximum operating temperature of 70°C and a peak power factor (PF) of ≥0.97, these units are widely used in industrial machinery, equipment, rail transit systems, new‑energy devices, and other industrial applications exposed to harsh external environments.',
    features: [
      'Rated input voltage:100-277Vac.',
      'PF max≥0.97 .',
      'Built-in DC-OK contact.',
      'Operating temperature up to 70℃.',
      'Over-Voltage Category: III.',
      'Low standby power consumption.',
      'Ultra-thin design (suitable for installing DIN rail TS-35/7.5 or 15).',
      'Function Selection：E:DC-OK RC remote control.',
      'Advanced (no suffix): DC-OK RC remote control, peak power up to 200%, supports 5+1 parallel current sharing, supports MODBUS protocol program configuration.',
      'OTP / OVP / OLP / SCP.',
      'E: 3 years warranty / Advanced: 5 years warranty.'
    ]
  },
  {
    name: 'EPC',
    slug: 'epc-series',
    url: 'https://elec.donepower.com/products_details/80.html',
    series: 'Industrial Control Power Supply',
    range: '30/50/75/120W',
    logo: imgLogo,
    image: imgEPC,
    images: [imgEPC],
    certImage: certEPC,
    description: 'The "EPC Series" fanless, self-cooling power supplies meet the EMC EN55035/55032 conducted and radiated emission standards, and are designed for reliable operation at altitudes up to 5,000 meters. These power supplies are widely used in industrial machinery and equipment, medical devices, rail transportation systems, new energy equipment, and other industrial applications exposed to harsh external environments.',
    features: [
      'Rated input voltage:100-240Vac.',
      'Capable of 305Vac input for 5 seconds.',
      'Compliant with EMC EN55035/55032 requirements.',
      'Fanless self cooling design.',
      'Low standby power consumption.',
      'Designed for use at altitudes up to 5000m.',
      'OVP / OLP / SCP.',
      '3 years warranty.'
    ]
  },
  {
    name: 'EPG',
    slug: 'epg-series',
    url: 'https://elec.donepower.com/products_details/81.html',
    series: 'Industrial Control Power Supply',
    range: '75/120/150W',
    logo: imgLogo,
    image: imgEPG,
    images: [imgEPG],
    certImage: certEPC,
    description: 'The "EPG Series" fanless, self-cooling power supplies offer a power range from 75 to 150W, capable of withstanding a 305Vac input for 5 seconds. Designed specifically for applications at altitudes up to 5,000 meters, these units also meet the stringent 2xMOPP safety standards for medical equipment. Widely used in industrial machinery and equipment, medical devices, rail transportation systems, new energy equipment, and other industrial applications exposed to harsh external environments.',
    features: [
      'Rated input voltage:100-240Vac.',
      'Capable of 305Vac input for 5 seconds.',
      'PF max 0.97 .',
      'Fanless, free-air cooling (products above 200W include a 12V/0.5A auxiliary output).',
      'Low standby power consumption.',
      'Designed for use at altitudes up to 5000m.',
      'Function selection: E: Standard voltage output; Advanced: meets 2xMOPP medical safety standards.',
      'OVP / OLP / SCP.',
      'E: 3 years warranty / Advanced: 5 years warranty.'
    ]
  },
  {
    name: 'EDC',
    slug: 'edc-series',
    url: 'https://elec.donepower.com/products_details/75.html',
    series: 'Industrial Control Power Supply',
    range: '15/30/60/75/100/150W',
    logo: imgLogo,
    image: imgEDC,
    images: [imgEDC],
    certImage: certEDG,
    description: 'The "EDC Series" N-PFC Rail-Mounted Power Supplies operate within an input voltage range of 100–240 Vac and deliver output voltages of 12, 15, 24, 36, and 48 Vdc. They offer exceptional value, featuring high efficiency, energy savings, a compact design, superior stability, and strong resistance to electrical interference—making them ideal for installation in small enclosures and tight spaces. These power supplies are widely used in industrial machinery and equipment, automated systems, rail transportation applications, new energy devices, and other industrial equipment deployed in harsh external environments.',
    features: [
      'Rated input voltage:100-240Vac.',
      'Capable of 305Vac input for 5 seconds.',
      'Compliant with EMC EN55035/55032 requirements.',
      'Operating temperature up to 70℃.',
      'Over-Voltage Category: III.',
      'Low standby power consumption.',
      'Ultra-thin design (suitable for installing DIN rail TS-35/7.5 or 15).',
      'Function Selection：B：Peak Power protection (Support up to 200% peak output power for 5 seconds).',
      'OVP / OLP / SCP.',
      '3 years warranty.'
    ]
  },
  {
    name: 'EXS',
    slug: 'exs-series',
    url: 'https://elec.donepower.com/products_details/76.html',
    series: 'Industrial Control Power Supply',
    range: '200/350/500/750W',
    logo: imgLogo,
    image: imgEXS,
    images: [imgEXS],
    certImage: certEXL,
    description: 'The “EXS Series” PFC strip‑type, enclosure‑mounted switching power supply operates across an input voltage range of 100–277Vac and delivers output voltages of 12, 15, 24, 36, and 48 Vdc. It features comprehensive protection against over‑voltage, over‑current, overload, and short‑circuit conditions. With a fanless, self‑cooled design and a semi‑potting process that significantly enhances thermal performance, this product offers improved reliability for outdoor applications. It is widely used in industrial machinery, automation systems, medical equipment, new‑energy devices, and other industrial equipment operating in harsh external environments.',
    features: [
      'Rated input voltage:100-277Vac.',
      'Capable of 305Vac input for 5 seconds.',
      'PF max 0.97 .',
      'Operating temperature up to 70℃.',
      'Peak power can reach 150%.',
      'Low standby power consumption.',
      'Self cooling design.',
      'DC-OK signal and remote control.',
      'Function selection: DC-OK RC remote control function; R: Redundancy function.',
      'OVP / OLP / SCP.',
      '5 years warranty.'
    ]
  },
  {
    name: 'EXG',
    slug: 'exg-series',
    url: 'https://elec.donepower.com/products_details/77.html',
    series: 'Industrial Control Power Supply',
    range: '75/120/150W',
    logo: imgLogo,
    image: imgEXG,
    images: [imgEXG],
    certImage: certEXC,
    description: 'The “EXG Series” PFC chassis‑mounted switching power supply operates within an input voltage range of 100-277Vac and features comprehensive protection against output overvoltage, overcurrent, overload, and short circuits. In addition to meeting standard operating conditions in typical environments, it is also designed for long‑term use in harsh or specialized settings that demand higher performance in terms of input voltage, temperature, humidity, altitude, and electromagnetic interference. It is widely employed in industrial machinery, automation systems, medical equipment, new energy devices, and other industrial applications exposed to demanding external conditions.',
    features: [
      'Rated input voltage:100-277Vac.',
      'Capable of 305Vac input for 5 seconds.',
      'PF max 0.97 .',
      'Operating temperature up to 70℃.',
      'Over-Voltage level: III.',
      'Low standby power consumption.',
      'DC-OK signal and remote control switch function.',
      'Function Selection: E: Standard voltage output; Advanced: Supports DC-OK and RC remote control, peak power up to 200%, remote voltage compensation, meets 2xMOPP medical safety standards.',
      'OVP / OLP / SCP.',
      'E: 3 years warranty / Advanced: 5 years warranty.'
    ]
  },
]

// =============================================================================
// PREVIOUS DONE CATALOGUE (PRESERVED AS COMMENTED-OUT CODE BELOW)
// =============================================================================
/*
import img001 from '../assets/products/done/dl-30w-v5-edc.webp'
import img002 from '../assets/products/done/dl-30w-v5-edc-2.webp'
import img003 from '../assets/products/done/dl-30w-v5-edc-3.webp'
import img004 from '../assets/products/done/dl-60w-v5-edc.webp'
import img005 from '../assets/products/done/dl-60w-v5-edc-2.webp'
import img006 from '../assets/products/done/dl-60w-v5-edc-3.webp'
import img007 from '../assets/products/done/dl-120w-v24m-edc.webp'
import img008 from '../assets/products/done/dl-120w-v24m-edc-2.webp'
import img009 from '../assets/products/done/dl-150w-v12-edc.webp'
import img010 from '../assets/products/done/dl-150w-v12-edc-2.webp'
import img011 from '../assets/products/done/dl-150w-v12-edc-3.webp'
import img012 from '../assets/products/done/dl-150w-v24m-edc.webp'
import img013 from '../assets/products/done/dl-150w-v24m-edc-2.webp'
import img014 from '../assets/products/done/exc-25w.webp'
import img015 from '../assets/products/done/exc-25w-v24-exc.webp'
import img016 from '../assets/products/done/exc-25w-v24-exc-2.webp'
import img017 from '../assets/products/done/dl-100w-v24-exc.webp'
import img018 from '../assets/products/done/dl-100w-v24-exc-2.webp'
import img019 from '../assets/products/done/dl-100w-v24-exc-3.webp'
import img020 from '../assets/products/done/dl-350w-v15b-exc.webp'
import img021 from '../assets/products/done/dl-350w-v15b-exc-2.webp'
import img022 from '../assets/products/done/dl-350w-v15b-exc-3.webp'
import img023 from '../assets/products/done/dl-600w-v24-exc.webp'
import img024 from '../assets/products/done/dl-600w-v24-exc-2.webp'
import img025 from '../assets/products/done/dl-600w-v24-exc-3.webp'
import img026 from '../assets/products/done/exc-35h.webp'
import img027 from '../assets/products/done/exc-35h-2.webp'
import img028 from '../assets/products/done/exc-35h-3.webp'
import img029 from '../assets/products/done/exc-35h-v12-exc.webp'
import img030 from '../assets/products/done/exc-35h-v12-exc-2.webp'
import img031 from '../assets/products/done/exc-35h-v12-exc-3.webp'
import img032 from '../assets/products/done/dl-50h-v15-exc.webp'
import img033 from '../assets/products/done/dl-50h-v15-exc-2.webp'
import img034 from '../assets/products/done/dl-50h-v15-exc-3.webp'
import img035 from '../assets/products/done/dl-75h-v12-exc.webp'
import img036 from '../assets/products/done/dl-75h-v12-exc-2.webp'
import img037 from '../assets/products/done/dl-75h-v12-exc-3.webp'
import img038 from '../assets/products/done/dl-100h-v12-exc.webp'
import img039 from '../assets/products/done/dl-100h-v12-exc-2.webp'
import img040 from '../assets/products/done/dl-100h-v12-exc-3.webp'
import img041 from '../assets/products/done/dl-150h-v12-exc.webp'
import img042 from '../assets/products/done/dl-150h-v12-exc-2.webp'
import img043 from '../assets/products/done/dl-150h-v12-exc-3.webp'
import img044 from '../assets/products/done/dl-150h-v24-exc.webp'
import img045 from '../assets/products/done/dl-150h-v24-exc-2.webp'
import img046 from '../assets/products/done/dl-150h-v24-exc-3.webp'
import img047 from '../assets/products/done/dl-200h-v12-exc.webp'
import img048 from '../assets/products/done/dl-200h-v12-exc-2.webp'
import img049 from '../assets/products/done/dl-200h-v12-exc-3.webp'
import img050 from '../assets/products/done/dl-350h-v24-exc.webp'
import img051 from '../assets/products/done/dl-350h-v24-exc-2.webp'
import img052 from '../assets/products/done/dl-350h-v24-exc-3.webp'
import img053 from '../assets/products/done/dl-450h-v12-exc.webp'
import img054 from '../assets/products/done/dl-450h-v12-exc-2.webp'
import img055 from '../assets/products/done/dl-450h-v12-exc-3.webp'
import img056 from '../assets/products/done/dl-450h-v24-exc.webp'
import img057 from '../assets/products/done/dl-450h-v24-exc-2.webp'
import img058 from '../assets/products/done/dl-450h-v24-exc-3.webp'
import img059 from '../assets/products/done/dl-600h-v24-exc.webp'
import img060 from '../assets/products/done/dl-600h-v24-exc-2.webp'
import img061 from '../assets/products/done/dl-600h-v24-exc-3.webp'
import img062 from '../assets/products/done/dl-50w-v24-exl.webp'
import img063 from '../assets/products/done/dl-50w-v24-exl-2.webp'
import img064 from '../assets/products/done/dl-50w-v24-exl-3.webp'
import img065 from '../assets/products/done/dl-150w-v24-exl.webp'
import img066 from '../assets/products/done/dl-150w-v24-exl-2.webp'
import img067 from '../assets/products/done/dl-150w-v24-exl-3.webp'
import img068 from '../assets/products/done/dl-300w-v24-exl.webp'
import img069 from '../assets/products/done/dl-300w-v24-exl-2.webp'
import img070 from '../assets/products/done/dl-300w-v24-exl-3.webp'
import img071 from '../assets/products/done/dl-500w-v24-exs.webp'
import img072 from '../assets/products/done/dl-500w-v24-exs-2.webp'
import img073 from '../assets/products/done/dl-500w-v24-exs-3.webp'

export const PREVIOUS_DONE_SERIES = [
  { code: 'EDC', name: 'EDC Series', count: 5 },
  { code: 'EXC', name: 'EXC Series', count: 5 },
  { code: 'EXC-H', name: 'EXC-H Series', count: 12 },
  { code: 'EXL', name: 'EXL Series', count: 3 },
  { code: 'EXS', name: 'EXS Series', count: 1 },
]

export const PREVIOUS_DONE_PRODUCTS = [
  { name: 'DL-30W-V5-EDC', slug: 'dl-30w-v5-edc', series: 'EDC', range: '30W / 5V DC', watts: 30, volts: 5, image: img001, images: [img001, img002, img003], description: '' },
  { name: 'DL-60W-V5-EDC', slug: 'dl-60w-v5-edc', series: 'EDC', range: '60W / 5V DC', watts: 60, volts: 5, image: img004, images: [img004, img005, img006], description: '' },
  { name: 'DL-120W-V24M-EDC', slug: 'dl-120w-v24m-edc', series: 'EDC', range: '120W / 24V DC', watts: 120, volts: 24, image: img007, images: [img007, img008], description: '' },
  { name: 'DL-150W-V12-EDC', slug: 'dl-150w-v12-edc', series: 'EDC', range: '150W / 12V DC', watts: 150, volts: 12, image: img009, images: [img009, img010, img011], description: '' },
  { name: 'DL-150W-V24M-EDC', slug: 'dl-150w-v24m-edc', series: 'EDC', range: '150W / 24V DC', watts: 150, volts: 24, image: img012, images: [img012, img013], description: '' },
  { name: 'EXC-25W', slug: 'exc-25w', series: 'EXC', range: '25W', watts: 25, volts: null, image: img014, images: [img014], description: '' },
  { name: 'EXC-25W-V24-EXC', slug: 'exc-25w-v24-exc', series: 'EXC', range: '25W / 24V DC', watts: 25, volts: 24, image: img015, images: [img015, img016], description: '' },
  { name: 'DL-100W-V24-EXC', slug: 'dl-100w-v24-exc', series: 'EXC', range: '100W / 24V DC', watts: 100, volts: 24, image: img017, images: [img017, img018, img019], description: '' },
  { name: 'DL-350W-V15B-EXC', slug: 'dl-350w-v15b-exc', series: 'EXC', range: '350W / 15V DC', watts: 350, volts: 15, image: img020, images: [img020, img021, img022], description: '' },
  { name: 'DL-600W-V24-EXC', slug: 'dl-600w-v24-exc', series: 'EXC', range: '600W / 24V DC', watts: 600, volts: 24, image: img023, images: [img023, img024, img025], description: '' },
  { name: 'EXC-35H', slug: 'exc-35h', series: 'EXC-H', range: '35W', watts: 35, volts: null, image: img026, images: [img026, img027, img028], description: '' },
  { name: 'EXC-35H-V12-EXC', slug: 'exc-35h-v12-exc', series: 'EXC-H', range: '35W / 12V DC', watts: 35, volts: 12, image: img029, images: [img029, img030, img031], description: '' },
  { name: 'DL-50H-V15-EXC', slug: 'dl-50h-v15-exc', series: 'EXC-H', range: '50W / 15V DC', watts: 50, volts: 15, image: img032, images: [img032, img033, img034], description: '' },
  { name: 'DL-75H-V12-EXC', slug: 'dl-75h-v12-exc', series: 'EXC-H', range: '75W / 12V DC', watts: 75, volts: 12, image: img035, images: [img035, img036, img037], description: '' },
  { name: 'DL-100H-V12-EXC', slug: 'dl-100h-v12-exc', series: 'EXC-H', range: '100W / 12V DC', watts: 100, volts: 12, image: img038, images: [img038, img039, img040], description: '' },
  { name: 'DL-150H-V12-EXC', slug: 'dl-150h-v12-exc', series: 'EXC-H', range: '150W / 12V DC', watts: 150, volts: 12, image: img041, images: [img041, img042, img043], description: '' },
  { name: 'DL-150H-V24-EXC', slug: 'dl-150h-v24-exc', series: 'EXC-H', range: '150W / 24V DC', watts: 150, volts: 24, image: img044, images: [img044, img045, img046], description: '' },
  { name: 'DL-200H-V12-EXC', slug: 'dl-200h-v12-exc', series: 'EXC-H', range: '200W / 12V DC', watts: 200, volts: 12, image: img047, images: [img047, img048, img049], description: '' },
  { name: 'DL-350H-V24-EXC', slug: 'dl-350h-v24-exc', series: 'EXC-H', range: '350W / 24V DC', watts: 350, volts: 24, image: img050, images: [img050, img051, img052], description: '' },
  { name: 'DL-450H-V12-EXC', slug: 'dl-450h-v12-exc', series: 'EXC-H', range: '450W / 12V DC', watts: 450, volts: 12, image: img053, images: [img053, img054, img055], description: '' },
  { name: 'DL-450H-V24-EXC', slug: 'dl-450h-v24-exc', series: 'EXC-H', range: '450W / 24V DC', watts: 450, volts: 24, image: img056, images: [img056, img057, img058], description: '' },
  { name: 'DL-600H-V24-EXC', slug: 'dl-600h-v24-exc', series: 'EXC-H', range: '600W / 24V DC', watts: 600, volts: 24, image: img059, images: [img059, img060, img061], description: '' },
  { name: 'DL-50W-V24-EXL', slug: 'dl-50w-v24-exl', series: 'EXL', range: '50W / 24V DC', watts: 50, volts: 24, image: img062, images: [img062, img063, img064], description: '' },
  { name: 'DL-150W-V24-EXL', slug: 'dl-150w-v24-exl', series: 'EXL', range: '150W / 24V DC', watts: 150, volts: 24, image: img065, images: [img065, img066, img067], description: '' },
  { name: 'DL-300W-V24-EXL', slug: 'dl-300w-v24-exl', series: 'EXL', range: '300W / 24V DC', watts: 300, volts: 24, image: img068, images: [img068, img069, img070], description: '' },
  { name: 'DL-500W-V24-EXS', slug: 'dl-500w-v24-exs', series: 'EXS', range: '500W / 24V DC', watts: 500, volts: 24, image: img071, images: [img071, img072, img073], description: '' },
]
*/