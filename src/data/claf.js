export const CLAF_SERIES_DATASHEETS = {
  // Group 1: Encapsulated Power Supplies(3-120W)
  APS: 'https://www.clafpower.com/products/17/aps-series.html',
  APSW: 'https://www.clafpower.com/products/375/apsw-series.html',
  APD: 'https://www.clafpower.com/products/20/apd-series.html',
  APDE: 'https://www.clafpower.com/pdf/APDE60-2B-xx.html',
  APDW: 'https://www.clafpower.com/products/377/apdw-series.html',
  APH: 'https://www.clafpower.com/products/378/aph-series.html',
  APHMU: 'https://www.clafpower.com/products/378/aph-series.html',
  AO: 'https://www.clafpower.com/products/18/ao-m-series.html',
  AOMU: 'https://www.clafpower.com/products/19/aomu-series.html',

  // Group 2: Isolated & Non Isolated DC-DC Converter Subgroup Links
  'Unregulated output SMD (1-2W)': 'https://www.clafpower.com/products/21/unregulated-output-smd.html',
  'Unregulated output S/DIP (1-2W)': 'https://www.clafpower.com/products/23/unregulated-output-s%26dip.html',
  'Regulated output SMD (1W)': 'https://www.clafpower.com/products/22/regulated-output-smd.html',
  'Regulated output SIP (0.75-1W)': 'https://www.clafpower.com/products/24/regulated-output-sip.html',
  'SIP Package (1-10W)': 'https://www.clafpower.com/products/25/sip-package.html',
  'DIP Package (3-60W)': 'https://www.clafpower.com/products/26/dip-package.html',
  'SMD Package (1-6W)': 'https://www.clafpower.com/products/269/smd-package.html',
  'Brick Package (75-1200W)': 'https://www.clafpower.com/products/27/brick-package.html',
  'Photovoltaic Industry (15-3500W)': 'https://www.clafpower.com/products/28/photovoltaic-industry.html',
  'Railway Industry (6-400W)': 'https://www.clafpower.com/products/29/railway-industry.html',
  'Switching Regulater (0.5-3A)': 'https://www.clafpower.com/products/30/switching-regulater.html',
  'Buck-boost Module (10-50A)': 'https://www.clafpower.com/products/379/buck-boost-module.html',

  // Group 3: Transceiver Module Links
  'CAN Transceivers': 'https://www.clafpower.com/products/31/can-transceivers.html',
  'RS 485 Transceivers': 'https://www.clafpower.com/products/32/rs-485-transceivers.html',
  'RS 232 Transceivers': 'https://www.clafpower.com/products/33/rs-232-transceivers.html',

  // Group 4: IGBT Driver(SiC/GaN) Links
  'IGBT divers': 'https://www.clafpower.com/products/34/igbt-divers.html',
  'IGBT Drivers': 'https://www.clafpower.com/products/34/igbt-divers.html',
  'IGBT/SiC/GaN Power Supplies': 'https://www.clafpower.com/products/35/igbt%26sic%26gan-power-supplies.html',

  // Group 5: Sensor Links
  'Residual Current Transducers': 'https://www.clafpower.com/products/431/residual-current-transducers.html',
  'Current Sensors': 'https://www.clafpower.com/products/475/current-sensors.html',

  // Group 6: EMC Auxiliary Links
  'EMC Filter': 'https://www.clafpower.com/products/361/emc-filter.html',

  // Group 7: DDR - DIN Rail Redundant Module
  'DDR20': 'https://www.clafpower.com/products/246/ddr-series.html',
  'DDR40': 'https://www.clafpower.com/products/246/ddr-series.html',
  'DDR - DIN Rail Redundant module': 'https://www.clafpower.com/products/246/ddr-series.html',
  'DDR Series (20A - 40A)': 'https://www.clafpower.com/products/246/ddr-series.html',
  'DDR': 'https://www.clafpower.com/products/246/ddr-series.html',

  // Group 8: DDUPS - DIN Rail Uninterruptible Power Supply
  'DDUPS20-24F-N': 'https://www.clafpower.com/pdf/DDUPS20-24F-N.html',
  'DDUPS - DIN Rail Uninterruptible Power Supply': 'https://www.clafpower.com/pdf/DDUPS20-24F-N.html',
  'DDUPS Series (24V / 20A)': 'https://www.clafpower.com/pdf/DDUPS20-24F-N.html',
  'DDUPS': 'https://www.clafpower.com/pdf/DDUPS20-24F-N.html'
};

export const CLAF_PRODUCTS = [
  // =========================================================================
  // GROUP 1: Encapsulated Power Supplies (3-120W)
  // =========================================================================

  // --- 1. APS Series (3W - 15W) ---
  { name: 'APS03-xx', series: 'APS', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APS Series (3W - 15W)', watts: 3, image: new URL('../assets/products/claf/APS03-xx.png', import.meta.url).href, description: '3W Ultra-Compact Economy Encapsulated AC/DC Supply' },
  { name: 'APS05-xx', series: 'APS', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APS Series (3W - 15W)', watts: 5, image: new URL('../assets/products/claf/APS05-xx.png', import.meta.url).href, description: '5W Cost-Effective Encapsulated Power Module' },
  { name: 'APS10-xx', series: 'APS', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APS Series (3W - 15W)', watts: 10, image: new URL('../assets/products/claf/APS10-xx.png', import.meta.url).href, description: '10W Standard Encapsulated AC/DC Power Converter' },
  { name: 'APS10-xxP', series: 'APS', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APS Series (3W - 15W)', watts: 10, image: new URL('../assets/products/claf/APS10-xxP.png', import.meta.url).href, description: '10W Pin-Mount Encapsulated Power Supply' },
  { name: 'APS15-12', series: 'APS', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APS Series (3W - 15W)', watts: 15, image: new URL('../assets/products/claf/APS15-12.png', import.meta.url).href, description: '15W 12VDC Encapsulated AC/DC Converter' },
  { name: 'APS15-BxxD', series: 'APS', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APS Series (3W - 15W)', watts: 15, image: new URL('../assets/products/claf/APS15-BxxD.png', import.meta.url).href, description: '15W Dual Output Encapsulated Power Supply' },
  { name: 'APS15-xxD', series: 'APS', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APS Series (3W - 15W)', watts: 15, image: new URL('../assets/products/claf/APS15-xxD.png', import.meta.url).href, description: '15W Dual Channel Encapsulated AC/DC Supply' },
  { name: 'APS15-xxV0', series: 'APS', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APS Series (3W - 15W)', watts: 15, image: new URL('../assets/products/claf/APS15-xxV0.png', import.meta.url).href, description: '15W V0 Flame-Class Encapsulated AC/DC Converter' },

  // --- 2. APSW Series (5W - 15W) ---
  { name: 'APSW05-xx', series: 'APSW', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APSW Series (5W - 15W)', watts: 5, image: new URL('../assets/products/claf/APSW05-xx.png', import.meta.url).href, description: '5W Ultra-Wide Input Range Encapsulated Supply' },
  { name: 'APSW10-xx', series: 'APSW', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APSW Series (5W - 15W)', watts: 10, image: new URL('../assets/products/claf/APSW10-xx.png', import.meta.url).href, description: '10W Wide AC Input Encapsulated Power Module' },
  { name: 'APSW15-xx', series: 'APSW', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APSW Series (5W - 15W)', watts: 15, image: new URL('../assets/products/claf/APSW15-xx.png', import.meta.url).href, description: '15W Wide-Range Industrial Encapsulated Supply' },

  // --- 3. APD Series (3W - 90W) ---
  { name: 'APD03-xx', series: 'APD', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APD Series (3W - 90W)', watts: 3, image: new URL('../assets/products/claf/APD03-xx.png', import.meta.url).href, description: '3W PCB-Mount Encapsulated AC/DC Converter' },
  { name: 'APD03-xxP', series: 'APD', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APD Series (3W - 90W)', watts: 3, image: new URL('../assets/products/claf/APD03-xxP.png', import.meta.url).href, description: '3W High-Efficiency Encapsulated Power Supply' },
  { name: 'APD05-xx', series: 'APD', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APD Series (3W - 90W)', watts: 5, image: new URL('../assets/products/claf/APD05-xx.png', import.meta.url).href, description: '5W Universal Input Encapsulated AC/DC Module' },
  { name: 'APD05-xxM', series: 'APD', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APD Series (3W - 90W)', watts: 5, image: new URL('../assets/products/claf/APD05-xxM.png', import.meta.url).href, description: '5W Compact Industrial Encapsulated Power Supply' },
  { name: 'APD10-2WB-xx', series: 'APD', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APD Series (3W - 90W)', watts: 10, image: new URL('../assets/products/claf/APD10-2WB-xx.png', import.meta.url).href, description: '10W Dual Output / Ultra-Wide Encapsulated Supply' },
  { name: 'APD10-xx', series: 'APD', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APD Series (3W - 90W)', watts: 10, image: new URL('../assets/products/claf/APD10-xx.png', import.meta.url).href, description: '10W High-Reliability Encapsulated AC/DC Converter' },
  { name: 'APD10-xxM', series: 'APD', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APD Series (3W - 90W)', watts: 10, image: new URL('../assets/products/claf/APD10-xxM.png', import.meta.url).href, description: '10W Medical/Industrial Grade Encapsulated Module' },
  { name: 'APD10-xxMV0', series: 'APD', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APD Series (3W - 90W)', watts: 10, image: new URL('../assets/products/claf/APD10-xxMV0.png', import.meta.url).href, description: '10W Flame-Retardant UL94V-0 Encapsulated Supply' },
  { name: 'APD15-xx', series: 'APD', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APD Series (3W - 90W)', watts: 15, image: new URL('../assets/products/claf/APD15-xx.png', import.meta.url).href, description: '15W Standard PCB Mount Encapsulated Module' },
  { name: 'APD15-xxM', series: 'APD', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APD Series (3W - 90W)', watts: 15, image: new URL('../assets/products/claf/APD15-xxM.png', import.meta.url).href, description: '15W High Isolation Encapsulated AC/DC Power Supply' },
  { name: 'APD20-12-AQ', series: 'APD', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APD Series (3W - 90W)', watts: 20, image: new URL('../assets/products/claf/APD20-12-AQ.png', import.meta.url).href, description: '20W 12V High-Grade Encapsulated Power Supply' },
  { name: 'APD20-Bxx-RC', series: 'APD', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APD Series (3W - 90W)', watts: 20, image: new URL('../assets/products/claf/APD20-Bxx-RC.png', import.meta.url).href, description: '20W Remote Control Encapsulated AC/DC Supply' },
  { name: 'APD20-xx-ATO', series: 'APD', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APD Series (3W - 90W)', watts: 20, image: new URL('../assets/products/claf/APD20-xx-ATO.png', import.meta.url).href, description: '20W Automation-Optimized Encapsulated Power Module' },
  { name: 'APD20-xx', series: 'APD', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APD Series (3W - 90W)', watts: 20, image: new URL('../assets/products/claf/APD20-xx.png', import.meta.url).href, description: '20W Universal PCB Encapsulated Power Supply' },
  { name: 'APD20-xxE2S', series: 'APD', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APD Series (3W - 90W)', watts: 20, image: new URL('../assets/products/claf/APD20-xxE2S.png', import.meta.url).href, description: '20W Enhanced Surge Protection Encapsulated Module' },
  { name: 'APD30-xx', series: 'APD', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APD Series (3W - 90W)', watts: 30, image: new URL('../assets/products/claf/APD30-xx.png', import.meta.url).href, description: '30W Compact Industrial Encapsulated Supply' },
  { name: 'APD40-xx', series: 'APD', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APD Series (3W - 90W)', watts: 40, image: new URL('../assets/products/claf/APD40-xx.png', import.meta.url).href, description: '40W High Efficiency Encapsulated Power Module' },
  { name: 'APD40-xxE2S', series: 'APD', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APD Series (3W - 90W)', watts: 40, image: new URL('../assets/products/claf/APD40-xxE2S.png', import.meta.url).href, description: '40W Reinforced Isolation Encapsulated AC/DC Converter' },
  { name: 'APD60-xx', series: 'APD', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APD Series (3W - 90W)', watts: 60, image: new URL('../assets/products/claf/APD60-xx.png', import.meta.url).href, description: '60W High Power Encapsulated AC/DC Supply' },
  { name: 'APD60-xxE2S', series: 'APD', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APD Series (3W - 90W)', watts: 60, image: new URL('../assets/products/claf/APD60-xxE2S.png', import.meta.url).href, description: '60W Enhanced Reliability Encapsulated Module' },
  { name: 'APD60-xxM', series: 'APD', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APD Series (3W - 90W)', watts: 60, image: new URL('../assets/products/claf/APD60-xxM.png', import.meta.url).href, description: '60W Industrial/Medical Encapsulated Power Supply' },
  { name: 'APD90-xx', series: 'APD', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APD Series (3W - 90W)', watts: 90, image: new URL('../assets/products/claf/APD90-xx.png', import.meta.url).href, description: '90W High Power Encapsulated AC/DC Power Supply' },
  { name: 'APD90-xxE2S', series: 'APD', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APD Series (3W - 90W)', watts: 90, image: new URL('../assets/products/claf/APD90-xxE2S.png', import.meta.url).href, description: '90W Industrial Grade Encapsulated Power Module' },

  // --- 4. APDE Series (6W - 60W) ---
  { name: 'APDE06-2B-xx', series: 'APDE', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APDE Series (6W - 60W)', watts: 6, image: new URL('../assets/products/claf/APDE06-2B-xx.png', import.meta.url).href, description: '6W Railway & Harsh Environment Encapsulated Supply' },
  { name: 'APDE60-2B-xx', series: 'APDE', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APDE Series (6W - 60W)', watts: 60, image: new URL('../assets/products/claf/APDE60-2B-xx.png', import.meta.url).href, description: '60W High-Isolation Encapsulated AC/DC Supply' },

  // --- 5. APDW Series (10W - 30W) ---
  { name: 'APDW10-xx', series: 'APDW', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APDW Series (10W - 30W)', watts: 10, image: new URL('../assets/products/claf/APDW10-xx.png', import.meta.url).href, description: '10W Ultra-Wide Input Encapsulated Power Module' },
  { name: 'APDW20-xx', series: 'APDW', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APDW Series (10W - 30W)', watts: 20, image: new URL('../assets/products/claf/APDW20-xx.png', import.meta.url).href, description: '20W Ultra-Wide Input Encapsulated AC/DC Supply' },
  { name: 'APDW20-xxE2', series: 'APDW', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APDW Series (10W - 30W)', watts: 20, image: new URL('../assets/products/claf/APDW20-xxE2.png', import.meta.url).href, description: '20W High-EMC Ultra-Wide Encapsulated Converter' },
  { name: 'APDW30-xx', series: 'APDW', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APDW Series (10W - 30W)', watts: 30, image: new URL('../assets/products/claf/APDW30-xx.png', import.meta.url).href, description: '30W Ultra-Wide AC/DC Encapsulated Module' },

  // --- 6. APH Series (5W - 25W) ---
  { name: 'APH05-xx', series: 'APH', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APH Series (5W - 25W)', watts: 5, image: new URL('../assets/products/claf/APH05-xx.png', import.meta.url).href, description: '5W High-Reliability Encapsulated AC/DC Module' },
  { name: 'APH10-xx', series: 'APH', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APH Series (5W - 25W)', watts: 10, image: new URL('../assets/products/claf/APH10-xx.png', import.meta.url).href, description: '10W High Performance Encapsulated AC/DC Supply' },
  { name: 'APH15-2B-15-X', series: 'APH', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APH Series (5W - 25W)', watts: 15, image: new URL('../assets/products/claf/APH15-2B-15-X.png', import.meta.url).href, description: '15W Dual Rail Encapsulated Power Module' },
  { name: 'APH15-xx', series: 'APH', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APH Series (5W - 25W)', watts: 15, image: new URL('../assets/products/claf/APH15-xx.png', import.meta.url).href, description: '15W Industrial Grade Encapsulated Supply' },
  { name: 'APH20-xx', series: 'APH', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APH Series (5W - 25W)', watts: 20, image: new URL('../assets/products/claf/APH20-xx.png', import.meta.url).href, description: '20W Ruggedized Encapsulated AC/DC Converter' },
  { name: 'APH25-xx', series: 'APH', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APH Series (5W - 25W)', watts: 25, image: new URL('../assets/products/claf/APH25-xx.png', import.meta.url).href, description: '25W High Efficiency Encapsulated Power Supply' },
  { name: 'APH25-xxE2', series: 'APH', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APH Series (5W - 25W)', watts: 25, image: new URL('../assets/products/claf/APH25-xxE2.png', import.meta.url).href, description: '25W Enhanced Surge Encapsulated AC/DC Converter' },

  // --- 7. APHMU Series (25W) ---
  { name: 'APHMU25-2B-xx', series: 'APHMU', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'APHMU Series (25W)', watts: 25, image: new URL('../assets/products/claf/APHMU25-2B-xx.png', import.meta.url).href, description: '25W Medical Grade 2xMOPP Encapsulated Power Supply' },

  // --- 8. AO Series (15W - 75W) ---
  { name: 'AO15-24E', series: 'AO', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'AO Series (15W - 75W)', watts: 15, image: new URL('../assets/products/claf/AO15-24E.png', import.meta.url).href, description: '15W 24V Compact Board-Mount AC/DC Module' },
  { name: 'AO15-2B-24M', series: 'AO', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'AO Series (15W - 75W)', watts: 15, image: new URL('../assets/products/claf/AO15-2B-24M.png', import.meta.url).href, description: '15W Medical/Industrial Board-Mount Power Supply' },
  { name: 'AO25-2B-xxM', series: 'AO', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'AO Series (15W - 75W)', watts: 25, image: new URL('../assets/products/claf/AO25-2B-xxM.png', import.meta.url).href, description: '25W Compact Board-Mount AC/DC Supply Module' },
  { name: 'AO30-05E', series: 'AO', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'AO Series (15W - 75W)', watts: 30, image: new URL('../assets/products/claf/AO30-05E.png', import.meta.url).href, description: '30W 5V Board-Mount AC/DC Power Supply' },
  { name: 'AO35-2B-xx-M', series: 'AO', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'AO Series (15W - 75W)', watts: 35, image: new URL('../assets/products/claf/AO35-2B-xx-M.png', import.meta.url).href, description: '35W High Density AC/DC Power Supply Module' },
  { name: 'AO35-2B-xxM', series: 'AO', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'AO Series (15W - 75W)', watts: 35, image: new URL('../assets/products/claf/AO35-2B-xxM.png', import.meta.url).href, description: '35W Industrial PCB Mount Power Module' },
  { name: 'AO45-2B-xxM', series: 'AO', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'AO Series (15W - 75W)', watts: 45, image: new URL('../assets/products/claf/AO45-2B-xxM.png', import.meta.url).href, description: '45W Compact On-Board AC/DC Converter' },
  { name: 'AO50-xxE', series: 'AO', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'AO Series (15W - 75W)', watts: 50, image: new URL('../assets/products/claf/AO50-xxE.png', import.meta.url).href, description: '50W Board-Mount Switching Power Supply' },
  { name: 'AO65-2B-05M', series: 'AO', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'AO Series (15W - 75W)', watts: 65, image: new URL('../assets/products/claf/AO65-2B-05M.png', import.meta.url).href, description: '65W 5V High-Output AC/DC Module' },
  { name: 'AO75-2B-24E', series: 'AO', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'AO Series (15W - 75W)', watts: 75, image: new URL('../assets/products/claf/AO75-2B-24E.png', import.meta.url).href, description: '75W 24V Board-Mount AC/DC Supply' },

  // --- 9. AOMU Series (30W - 120W) ---
  { name: 'AOMU30-2B-xx', series: 'AOMU', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'AOMU Series (30W - 120W)', watts: 30, image: new URL('../assets/products/claf/AOMU30-2B-xx.png', import.meta.url).href, description: '30W Medical Grade AC/DC Power Module' },
  { name: 'AOMU45-2B-24-C', series: 'AOMU', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'AOMU Series (30W - 120W)', watts: 45, image: new URL('../assets/products/claf/AOMU45-2B-24-C.png', import.meta.url).href, description: '45W 24V Covered Medical Power Supply Module' },
  { name: 'AOMU45-2B-24', series: 'AOMU', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'AOMU Series (30W - 120W)', watts: 45, image: new URL('../assets/products/claf/AOMU45-2B-24.png', import.meta.url).href, description: '45W 24V Medical Grade AC/DC Module' },
  { name: 'AOMU65-2B-12-C', series: 'AOMU', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'AOMU Series (30W - 120W)', watts: 65, image: new URL('../assets/products/claf/AOMU65-2B-12-C.png', import.meta.url).href, description: '65W 12V Covered High Isolation Power Supply' },
  { name: 'AOMU65-2B-12', series: 'AOMU', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'AOMU Series (30W - 120W)', watts: 65, image: new URL('../assets/products/claf/AOMU65-2B-12.png', import.meta.url).href, description: '65W 12V Medical Grade AC/DC Power Module' },
  { name: 'AOMU75-2B-xx', series: 'AOMU', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'AOMU Series (30W - 120W)', watts: 75, image: new URL('../assets/products/claf/AOMU75-2B-xx.png', import.meta.url).href, description: '75W High-Reliability Medical Power Supply' },
  { name: 'AOMU120-2B-xx', series: 'AOMU', group: '1. Encapsulated Power Supplies(3-120W)', subgroup: 'AOMU Series (30W - 120W)', watts: 120, image: new URL('../assets/products/claf/AOMU120-2B-xx.png', import.meta.url).href, description: '120W Compact Medical Grade AC/DC Power Module' },

  // =========================================================================
  // GROUP 2: Isolated & Non Isolated DC-DC Converter
  // =========================================================================

  // -------------------------------------------------------------------------
  // Section 1: Fixed Input (0.75W-2W)
  // -------------------------------------------------------------------------

  // --- Subgroup: Unregulated output SMD (1-2W) ---
  { name: 'DFXT1-Axxxx', series: 'DFXT1', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Unregulated output SMD (1-2W)', image: new URL('../assets/products/claf/DFXT1-Axxxx.png', import.meta.url).href },
  { name: 'DFXT1-Bxxxx', series: 'DFXT1', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Unregulated output SMD (1-2W)', image: new URL('../assets/products/claf/DFXT1-Bxxxx.png', import.meta.url).href },
  { name: 'DFXT1-Exxxx', series: 'DFXT1', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Unregulated output SMD (1-2W)', image: new URL('../assets/products/claf/DFXT1-Exxxx.png', import.meta.url).href },
  { name: 'DFXT1-Fxxxx', series: 'DFXT1', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Unregulated output SMD (1-2W)', image: new URL('../assets/products/claf/DFXT1-Fxxxx.png', import.meta.url).href },
  { name: 'DFLT1-F05xx', series: 'DFLT1', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Unregulated output SMD (1-2W)', image: new URL('../assets/products/claf/DFLT1-F05xx.png', import.meta.url).href },
  { name: 'DFT1-B05xx', series: 'DFT1', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Unregulated output SMD (1-2W)', image: new URL('../assets/products/claf/DFT1-B05xx.png', import.meta.url).href },
  { name: 'DFXT2-Bxxxx', series: 'DFXT2', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Unregulated output SMD (1-2W)', image: new URL('../assets/products/claf/DFXT2-Bxxxx.png', import.meta.url).href },
  { name: 'DFXT2-Fxxxx', series: 'DFXT2', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Unregulated output SMD (1-2W)', image: new URL('../assets/products/claf/DFXT2-Fxxxx.png', import.meta.url).href },

  // --- Subgroup: Unregulated output S/DIP (1-2W) ---
  { name: 'DFS1-Axxxx', series: 'DFS1', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Unregulated output S/DIP (1-2W)', image: new URL('../assets/products/claf/DFS1-Axxxx.png', import.meta.url).href },
  { name: 'DFS1-Bxxxx', series: 'DFS1', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Unregulated output S/DIP (1-2W)', image: new URL('../assets/products/claf/DFS1-Bxxxx.png', import.meta.url).href },
  { name: 'DFS1-D05xxxx', series: 'DFS1', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Unregulated output S/DIP (1-2W)', image: new URL('../assets/products/claf/DFS1-D05xxxx.png', import.meta.url).href },
  { name: 'DFS1-Exxxx', series: 'DFS1', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Unregulated output S/DIP (1-2W)', image: new URL('../assets/products/claf/DFS1-Exxxx.png', import.meta.url).href },
  { name: 'DFS1-Fxxxx', series: 'DFS1', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Unregulated output S/DIP (1-2W)', image: new URL('../assets/products/claf/DFS1-Fxxxx.png', import.meta.url).href },
  { name: 'DFS1-Gxxxx', series: 'DFS1', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Unregulated output S/DIP (1-2W)', image: new URL('../assets/products/claf/DFS1-Gxxxx.png', import.meta.url).href },
  { name: 'DFS1-Hxxxx', series: 'DFS1', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Unregulated output S/DIP (1-2W)', image: new URL('../assets/products/claf/DFS1-Hxxxx.png', import.meta.url).href },
  { name: 'DFS1-HxxxxV0', series: 'DFS1', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Unregulated output S/DIP (1-2W)', image: new URL('../assets/products/claf/DFS1-HxxxxV0.png', import.meta.url).href },
  { name: 'DFLS1-Bxxxx', series: 'DFLS1', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Unregulated output S/DIP (1-2W)', image: new URL('../assets/products/claf/DFLS1-Bxxxx.png', import.meta.url).href },
  { name: 'DFN1-Fxxxx', series: 'DFN1', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Unregulated output S/DIP (1-2W)', image: new URL('../assets/products/claf/DFN1-Fxxxx.png', import.meta.url).href },
  { name: 'DFWS1-Hxxxx', series: 'DFWS1', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Unregulated output S/DIP (1-2W)', image: new URL('../assets/products/claf/DFWS1-Hxxxx.png', import.meta.url).href },
  { name: 'DFWS2-Hxxxx', series: 'DFWS1', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Unregulated output S/DIP (1-2W)', image: new URL('../assets/products/claf/DFWS2-Hxxxx.png', import.meta.url).href },
  { name: 'DFS2-Axxxx', series: 'DFS2', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Unregulated output S/DIP (1-2W)', image: new URL('../assets/products/claf/DFS2-Axxxx.png', import.meta.url).href },
  { name: 'DFS2-Bxxxx', series: 'DFS2', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Unregulated output S/DIP (1-2W)', image: new URL('../assets/products/claf/DFS2-Bxxxx.png', import.meta.url).href },
  { name: 'DFS2-Exxxx', series: 'DFS2', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Unregulated output S/DIP (1-2W)', image: new URL('../assets/products/claf/DFS2-Exxxx.png', import.meta.url).href },
  { name: 'DFS2-Fxxxx', series: 'DFS2', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Unregulated output S/DIP (1-2W)', image: new URL('../assets/products/claf/DFS2-Fxxxx.png', import.meta.url).href },
  { name: 'DFS2-Gxxxx', series: 'DFS2', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Unregulated output S/DIP (1-2W)', image: new URL('../assets/products/claf/DFS2-Gxxxx.png', import.meta.url).href },
  { name: 'DFS2-Hxxxx', series: 'DFS2', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Unregulated output S/DIP (1-2W)', image: new URL('../assets/products/claf/DFS2-Hxxxx.png', import.meta.url).href },
  { name: 'DFS2-HxxxxV0', series: 'DFS2', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Unregulated output S/DIP (1-2W)', image: new URL('../assets/products/claf/DFS2-HxxxxV0.png', import.meta.url).href },
  { name: 'DFD2-Bxxxx', series: 'DFD2', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Unregulated output S/DIP (1-2W)', image: new URL('../assets/products/claf/DFD2-Bxxxx.png', import.meta.url).href },
  { name: 'DFD2-Exxxx', series: 'DFD2', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Unregulated output S/DIP (1-2W)', image: new URL('../assets/products/claf/DFD2-Exxxx.png', import.meta.url).href },
  { name: 'DFD2-Fxxxx', series: 'DFD2', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Unregulated output S/DIP (1-2W)', image: new URL('../assets/products/claf/DFD2-Fxxxx.png', import.meta.url).href },
  { name: 'DFM2-Bxxxx', series: 'DFM2', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Unregulated output S/DIP (1-2W)', image: new URL('../assets/products/claf/DFM2-Bxxxx.png', import.meta.url).href },
  { name: 'DFCS1-Hxxxx', series: 'DFCS2', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Unregulated output S/DIP (1-2W)', image: new URL('../assets/products/claf/DFCS1-Hxxxx.png', import.meta.url).href },

  // --- Subgroup: Regulated output SMD (1W) ---
  { name: 'DFXT1-IBxxxx', series: 'DFXT1-IB', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Regulated output SMD (1W)', image: new URL('../assets/products/claf/DFXT1-IBxxxx.png', import.meta.url).href },
  { name: 'DFXT1-IFxxxx', series: 'DFXT1-IF', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Regulated output SMD (1W)', image: new URL('../assets/products/claf/DFXT1-IFxxxx.png', import.meta.url).href },

  // --- Subgroup: Regulated output SIP (0.75-1W) ---
  { name: 'DFS0.75-IBxxxx', series: 'DFS0.75', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Regulated output SIP (0.75-1W)', image: new URL('../assets/products/claf/DFS0.75-IBxxxx.png', import.meta.url).href },
  { name: 'DFLS1-IBxxxx', series: 'DFLS1-IB', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Regulated output SIP (0.75-1W)', image: new URL('../assets/products/claf/DFLS1-IBxxxx.png', import.meta.url).href },
  { name: 'DFS1-IFxxxx', series: 'DFLS1-IF', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Regulated output SIP (0.75-1W)', image: new URL('../assets/products/claf/DFS1-IFxxxx.png', import.meta.url).href },

  // -------------------------------------------------------------------------
  // Section 2: Wide Input (1-3500W)
  // -------------------------------------------------------------------------

  // --- Subgroup: SIP Package (1-10W) ---
  { name: 'DES1-Bxxxx', series: 'DES1', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'SIP Package (1-10W)', image: new URL('../assets/products/claf/DES1-Bxxxx.png', import.meta.url).href },
  { name: 'DES1-Fxxxx', series: 'DES1', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'SIP Package (1-10W)', image: new URL('../assets/products/claf/DES1-Fxxxx.png', import.meta.url).href },
  { name: 'DUS1-Fxxxx', series: 'DUS1', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'SIP Package (1-10W)', image: new URL('../assets/products/claf/DUS1-Fxxxx.png', import.meta.url).href },
  { name: 'DES3-Axxxx', series: 'DES3', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'SIP Package (1-10W)', image: new URL('../assets/products/claf/DES3-Axxxx.png', import.meta.url).href },
  { name: 'DES3-Bxxxx', series: 'DES3', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'SIP Package (1-10W)', image: new URL('../assets/products/claf/DES3-Bxxxx.png', import.meta.url).href },
  { name: 'DES3-Exxxx', series: 'DES3', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'SIP Package (1-10W)', image: new URL('../assets/products/claf/DES3-Exxxx.png', import.meta.url).href },
  { name: 'DES3-Fxxxx', series: 'DES3', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'SIP Package (1-10W)', image: new URL('../assets/products/claf/DES3-Fxxxx.png', import.meta.url).href },
  { name: 'DUS3-Exxxx', series: 'DUS3', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'SIP Package (1-10W)', image: new URL('../assets/products/claf/DUS3-Exxxx.png', import.meta.url).href },
  { name: 'DUS3-Fxxxx', series: 'DUS3', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'SIP Package (1-10W)', image: new URL('../assets/products/claf/DUS3-Fxxxx.png', import.meta.url).href },
  { name: 'DWS3-Bxxxx', series: 'DWS3', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'SIP Package (1-10W)', image: new URL('../assets/products/claf/DWS3-Bxxxx.png', import.meta.url).href },
  { name: 'DWS3-D48xxxx', series: 'DWS3', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'SIP Package (1-10W)', image: new URL('../assets/products/claf/DWS3-D48xxxx.png', import.meta.url).href },
  { name: 'DWS6-Axxxx', series: 'DWS6', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'SIP Package (1-10W)', image: new URL('../assets/products/claf/DWS6-Axxxx.png', import.meta.url).href },
  { name: 'DWS6-Bxxxx', series: 'DWS6', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'SIP Package (1-10W)', image: new URL('../assets/products/claf/DWS6-Bxxxx.png', import.meta.url).href },
  { name: 'DES6-Bxxxx', series: 'DES6', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'SIP Package (1-10W)', image: new URL('../assets/products/claf/DES6-Bxxxx.png', import.meta.url).href },
  { name: 'DES10-Bxxxx', series: 'DES10', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'SIP Package (1-10W)', image: new URL('../assets/products/claf/DES10-Bxxxx.png', import.meta.url).href },
  { name: 'DWS10-Bxxxx', series: 'DWS10', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'SIP Package (1-10W)', image: new URL('../assets/products/claf/DWS10-Bxxxx.png', import.meta.url).href },

  // --- Subgroup: DIP Package (3-60W) ---
  { name: 'DEP3-Exxxx', series: 'DEP3', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DEP3-Exxxx.png', import.meta.url).href },
  { name: 'DEP3-Fxxxx', series: 'DEP3', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DEP3-Fxxxx.png', import.meta.url).href },
  { name: 'DEZP6-B24xx', series: 'DEZP6', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DEZP6-B24xx.png', import.meta.url).href },
  { name: 'DEZP6-Bxxxx', series: 'DEZP6', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DEZP6-Bxxxx.png', import.meta.url).href },
  { name: 'DEZP10-A12xx', series: 'DEZP10', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DEZP10-A12xx.png', import.meta.url).href },
  { name: 'DWMD6-Axxxx', series: 'DWMD6', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWMD6-Axxxx.png', import.meta.url).href },
  { name: 'DWMD6-B24xxD4S', series: 'DWMD6', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWMD6-B24xxD4S.png', import.meta.url).href },
  { name: 'DWMD6-B48xx', series: 'DWMD6', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWMD6-B48xx.png', import.meta.url).href },
  { name: 'DWMD6-Bxxxx', series: 'DWMD6', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWMD6-Bxxxx.png', import.meta.url).href },
  { name: 'DWMD6-BxxxxE2S', series: 'DWMD6', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWMD6-BxxxxE2S.png', import.meta.url).href },
  { name: 'DWP6-E24xx', series: 'DWP6', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWP6-E24xx.png', import.meta.url).href },
  { name: 'DWP6-F24xx', series: 'DWP6', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWP6-F24xx.png', import.meta.url).href },
  { name: 'DWP6-H24xx', series: 'DWP6', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWP6-H24xx.png', import.meta.url).href },
  { name: 'DWP6-H48xx', series: 'DWP6', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWP6-H48xx.png', import.meta.url).href },
  { name: 'DEMD10-Axxxx', series: 'DEMD10', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DEMD10-Axxxx.png', import.meta.url).href },
  { name: 'DEMD10-B24xx', series: 'DEMD10', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DEMD10-B24xx.png', import.meta.url).href },
  { name: 'DWMD15-Axxxx', series: 'DWMD15', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWMD15-Axxxx.png', import.meta.url).href },
  { name: 'DWMD15-Bxxxx', series: 'DWMD15', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWMD15-Bxxxx.png', import.meta.url).href },
  { name: 'DWMD15-BxxxxH', series: 'DWMD15', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWMD15-BxxxxH.png', import.meta.url).href },
  { name: 'DEMD15-Bxxxx', series: 'DEMD15', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DEMD15-Bxxxx.png', import.meta.url).href },
  { name: 'DELD15-B24xx', series: 'DELD30', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DELD15-B24xx.png', import.meta.url).href },
  { name: 'DRWLD20-B1Dxx', series: 'DRWLD20', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DRWLD20-B1Dxx.png', import.meta.url).href },
  { name: 'DRWLD20-B1DxxH', series: 'DRWLD20', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DRWLD20-B1DxxH.png', import.meta.url).href },
  { name: 'DRWLD20-E1Dxx', series: 'DRWLD20', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DRWLD20-E1Dxx.png', import.meta.url).href },
  { name: 'DWLD20-A24xx', series: 'DWLD20', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWLD20-A24xx.png', import.meta.url).href },
  { name: 'DWLD20-A24xxD4S', series: 'DWLD20', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWLD20-A24xxD4S.png', import.meta.url).href },
  { name: 'DWLD20-A24xxE2S', series: 'DWLD20', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWLD20-A24xxE2S.png', import.meta.url).href },
  { name: 'DWLD20-B24xx', series: 'DWLD20', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWLD20-B24xx.png', import.meta.url).href },
  { name: 'DWLD20-B24xxD4S', series: 'DWLD20', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWLD20-B24xxD4S.png', import.meta.url).href },
  { name: 'DWLD20-B24xxH', series: 'DWLD20', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWLD20-B24xxH.png', import.meta.url).href },
  { name: 'DWLD20-B48xxE2S', series: 'DWLD20', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWLD20-B48xxE2S.png', import.meta.url).href },
  { name: 'DWLD20-Bxxxx', series: 'DWLD20', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWLD20-Bxxxx.png', import.meta.url).href },
  { name: 'DRWLMD20-B1Dxx', series: 'DRWLMD20', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DRWLMD20-B1Dxx.png', import.meta.url).href },
  { name: 'DRWLMD20-B1DxxH', series: 'DRWLMD20', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DRWLMD20-B1DxxH.png', import.meta.url).href },
  { name: 'DWMD20-A24xx', series: 'DWMD20', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWMD20-A24xx.png', import.meta.url).href },
  { name: 'DWMD20-Axxxx', series: 'DWMD20', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWMD20-Axxxx.png', import.meta.url).href },
  { name: 'DWMD20-B24xx', series: 'DWMD20', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWMD20-B24xx.png', import.meta.url).href },
  { name: 'DWMD20-B48xx', series: 'DWMD20', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWMD20-B48xx.png', import.meta.url).href },
  { name: 'DWMD20-BxxxxD4S', series: 'DWMD20', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWMD20-BxxxxD4S.png', import.meta.url).href },
  { name: 'DWMD20-BxxxxE2S', series: 'DWMD20', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWMD20-BxxxxE2S.png', import.meta.url).href },
  { name: 'DWMD20-BxxxxH', series: 'DWMD20', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWMD20-BxxxxH.png', import.meta.url).href },
  { name: 'DWLD30-Axxxx', series: 'DWLD30', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWLD30-Axxxx.png', import.meta.url).href },
  { name: 'DWLD30-B24xxD4S', series: 'DWLD30', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWLD30-B24xxD4S.png', import.meta.url).href },
  { name: 'DWLD30-B24xxE2S', series: 'DWLD30', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWLD30-B24xxE2S.png', import.meta.url).href },
  { name: 'DWLD30-B24xxH', series: 'DWLD30', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWLD30-B24xxH.png', import.meta.url).href },
  { name: 'DWLD30-B24xxHD4S', series: 'DWLD30', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWLD30-B24xxHD4S.png', import.meta.url).href },
  { name: 'DWLD30-B48xxD4S', series: 'DWLD30', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWLD30-B48xxD4S.png', import.meta.url).href },
  { name: 'DWLD30-Bxxxx', series: 'DWLD30', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWLD30-Bxxxx.png', import.meta.url).href },
  { name: 'DELD30-B24xx', series: 'DELD30', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DELD30-B24xx.png', import.meta.url).href },
  { name: 'DELD30-B24xxH', series: 'DELD30', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DELD30-B24xxH.png', import.meta.url).href },
  { name: 'DWMD30-Bxxxx', series: 'DWMD30', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWMD30-Bxxxx.png', import.meta.url).href },
  { name: 'DWLD40-B24xx', series: 'DWLD40', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWLD40-B24xx.png', import.meta.url).href },
  { name: 'DWLD40-B48xx', series: 'DWLD40', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWLD40-B48xx.png', import.meta.url).href },
  { name: 'DELD40-B24xx', series: 'DELD40', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DELD40-B24xx.png', import.meta.url).href },
  { name: 'DELD40-B24xxH', series: 'DELD40', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DELD40-B24xxH.png', import.meta.url).href },
  { name: 'DWLD50-B24xx', series: 'DWLD50', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWLD50-B24xx.png', import.meta.url).href },
  { name: 'DWLD50-BxxxxH', series: 'DWLD50', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWLD50-BxxxxH.png', import.meta.url).href },
  { name: 'DWLD60-B24xx', series: 'DWLD60', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWLD60-B24xx.png', import.meta.url).href },
  { name: 'DWLD60-B24xxHD4S', series: 'DWLD60', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWLD60-B24xxHD4S.png', import.meta.url).href },
  { name: 'DWLD60-B48xx', series: 'DWLD60', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'DIP Package (3-60W)', image: new URL('../assets/products/claf/DWLD60-B48xx.png', import.meta.url).href },

  // --- Subgroup: SMD Package (1-6W) ---
  { name: 'DESD3-Axxxx', series: 'DESD3', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'SMD Package (1-6W)', image: new URL('../assets/products/claf/DESD3-Axxxx.png', import.meta.url).href },
  { name: 'DESD3-Bxxxx', series: 'DESD3', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'SMD Package (1-6W)', image: new URL('../assets/products/claf/DESD3-Bxxxx.png', import.meta.url).href },
  { name: 'DEST3-Axxxx', series: 'DEST3', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'SMD Package (1-6W)', image: new URL('../assets/products/claf/DEST3-Axxxx.png', import.meta.url).href },
  { name: 'DEST3-Bxxxx', series: 'DEST3', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'SMD Package (1-6W)', image: new URL('../assets/products/claf/DEST3-Bxxxx.png', import.meta.url).href },
  { name: 'DWMT3-Bxxxx', series: 'DWMT3', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'SMD Package (1-6W)', image: new URL('../assets/products/claf/DWMT3-Bxxxx.png', import.meta.url).href },

  // --- Subgroup: Brick Package (75-1200W) ---
  { name: 'DWQB75-F48xx', series: 'DWQB75', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Brick Package (75-1200W)', image: new URL('../assets/products/claf/DWQB75-F48xx.png', import.meta.url).href },
  { name: 'DWQB75-F48xxF', series: 'DWQB75', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Brick Package (75-1200W)', image: new URL('../assets/products/claf/DWQB75-F48xxF.png', import.meta.url).href },
  { name: 'DWQB75-F48xxFN', series: 'DWQB75', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Brick Package (75-1200W)', image: new URL('../assets/products/claf/DWQB75-F48xxFN.png', import.meta.url).href },
  { name: 'DWQB75-F48xxH', series: 'DWQB75', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Brick Package (75-1200W)', image: new URL('../assets/products/claf/DWQB75-F48xxH.png', import.meta.url).href },
  { name: 'DWQB100-F24xx', series: 'DWQB100', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Brick Package (75-1200W)', image: new URL('../assets/products/claf/DWQB100-F24xx.png', import.meta.url).href },
  { name: 'DWQB100-F24xxE5', series: 'DWQB100', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Brick Package (75-1200W)', image: new URL('../assets/products/claf/DWQB100-F24xxE5.png', import.meta.url).href },
  { name: 'DWQB100-F24xxF', series: 'DWQB100', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Brick Package (75-1200W)', image: new URL('../assets/products/claf/DWQB100-F24xxF.png', import.meta.url).href },
  { name: 'DWQB100-F24xxH', series: 'DWQB100', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Brick Package (75-1200W)', image: new URL('../assets/products/claf/DWQB100-F24xxH.png', import.meta.url).href },
  { name: 'DWQB100-F24xxHD6', series: 'DWQB100', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Brick Package (75-1200W)', image: new URL('../assets/products/claf/DWQB100-F24xxHD6.png', import.meta.url).href },
  { name: 'DWQB100-F48xxE5', series: 'DWQB100', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Brick Package (75-1200W)', image: new URL('../assets/products/claf/DWQB100-F48xxE5.png', import.meta.url).href },
  { name: 'DWQB100-F48xxF', series: 'DWQB100', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Brick Package (75-1200W)', image: new URL('../assets/products/claf/DWQB100-F48xxF.png', import.meta.url).href },
  { name: 'DWQB100-F48XXH (3)', series: 'DWQB100', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Brick Package (75-1200W)', image: new URL('../assets/products/claf/DWQB100-F48XXH (3).png', import.meta.url).href },
  { name: 'DWQB100-F48XXH (4)', series: 'DWQB100', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Brick Package (75-1200W)', image: new URL('../assets/products/claf/DWQB100-F48XXH (4).png', import.meta.url).href },
  { name: 'DWQB100-F48xxH', series: 'DWQB100', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Brick Package (75-1200W)', image: new URL('../assets/products/claf/DWQB100-F48xxH.png', import.meta.url).href },
  { name: 'DWQB150-F2424E5', series: 'DWQB150', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Brick Package (75-1200W)', image: new URL('../assets/products/claf/DWQB150-F2424E5.png', import.meta.url).href },
  { name: 'DWQB150-F48xx', series: 'DWQB150', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Brick Package (75-1200W)', image: new URL('../assets/products/claf/DWQB150-F48xx.png', import.meta.url).href },
  { name: 'DWQB150-F48xxH', series: 'DWQB150', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Brick Package (75-1200W)', image: new URL('../assets/products/claf/DWQB150-F48xxH.png', import.meta.url).href },
  { name: 'DWQB200-F48xx', series: 'DWQB200', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Brick Package (75-1200W)', image: new URL('../assets/products/claf/DWQB200-F48xx.png', import.meta.url).href },
  { name: 'DWQB200-F48xxF', series: 'DWQB200', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Brick Package (75-1200W)', image: new URL('../assets/products/claf/DWQB200-F48xxF.png', import.meta.url).href },
  { name: 'DWQB200-F48xxH', series: 'DWQB200', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Brick Package (75-1200W)', image: new URL('../assets/products/claf/DWQB200-F48xxH.png', import.meta.url).href },
  { name: 'DEHB350-B24xx', series: 'DEHB350', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Brick Package (75-1200W)', image: new URL('../assets/products/claf/DEHB350-B24xx.png', import.meta.url).href },
  { name: 'DEHB500-F24xxN', series: 'DEHB500', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Brick Package (75-1200W)', image: new URL('../assets/products/claf/DEHB500-F24xxN.png', import.meta.url).href },

  // --- Subgroup: Photovoltaic Industry (15-3500W) ---
  { name: 'DPV15-10B-xx', series: 'DPV15-10B', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Photovoltaic Industry (15-3500W)', image: new URL('../assets/products/claf/DPV15-10B-xx.png', import.meta.url).href },
  { name: 'DPV15-15B-xx', series: 'DPV15-15B', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Photovoltaic Industry (15-3500W)', image: new URL('../assets/products/claf/DPV15-15B-xx.png', import.meta.url).href },
  { name: 'DPV15-15B-xxD6', series: 'DPV15-15B', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Photovoltaic Industry (15-3500W)', image: new URL('../assets/products/claf/DPV15-15B-xxD6.png', import.meta.url).href },
  { name: 'DPV15-15B-xxE5', series: 'DPV15-15B', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Photovoltaic Industry (15-3500W)', image: new URL('../assets/products/claf/DPV15-15B-xxE5.png', import.meta.url).href },
  { name: 'DPV40-12B-12V0', series: 'DPV40', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Photovoltaic Industry (15-3500W)', image: new URL('../assets/products/claf/DPV40-12B-12V0.png', import.meta.url).href },
  { name: 'DPV40-15B-24', series: 'DPV40', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Photovoltaic Industry (15-3500W)', image: new URL('../assets/products/claf/DPV40-15B-24.png', import.meta.url).href },
  { name: 'DPVI75-15B-24', series: 'DPV75', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Photovoltaic Industry (15-3500W)', image: new URL('../assets/products/claf/DPVI75-15B-24.png', import.meta.url).href },
  { name: 'DPV120-8B-24', series: 'DPV120', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Photovoltaic Industry (15-3500W)', image: new URL('../assets/products/claf/DPV120-8B-24.png', import.meta.url).href },
  { name: 'DPVI120-8B-24', series: 'DPV120', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Photovoltaic Industry (15-3500W)', image: new URL('../assets/products/claf/DPVI120-8B-24.png', import.meta.url).href },
  { name: 'DPV150-15B-24-P4Q2', series: 'DPV150', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Photovoltaic Industry (15-3500W)', image: new URL('../assets/products/claf/DPV150-15B-24-P4Q2.png', import.meta.url).href },
  { name: 'DPV150-15B-24', series: 'DPV150', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Photovoltaic Industry (15-3500W)', image: new URL('../assets/products/claf/DPV150-15B-24.png', import.meta.url).href },
  { name: 'DPV150-15B-24SV2', series: 'DPV150', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Photovoltaic Industry (15-3500W)', image: new URL('../assets/products/claf/DPV150-15B-24SV2.png', import.meta.url).href },
  { name: 'DPV150-20B-24', series: 'DPV150', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Photovoltaic Industry (15-3500W)', image: new URL('../assets/products/claf/DPV150-20B-24.png', import.meta.url).href },
  { name: 'DPV200-10B-xx', series: 'DPV200', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Photovoltaic Industry (15-3500W)', image: new URL('../assets/products/claf/DPV200-10B-xx.png', import.meta.url).href },
  { name: 'DPV200-15B-xxV2-W', series: 'DPV200', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Photovoltaic Industry (15-3500W)', image: new URL('../assets/products/claf/DPV200-15B-xxV2-W.png', import.meta.url).href },
  { name: 'DPV200-15B-xxV2', series: 'DPV200', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Photovoltaic Industry (15-3500W)', image: new URL('../assets/products/claf/DPV200-15B-xxV2.png', import.meta.url).href },
  { name: 'DPVI240-8B-24(1)', series: 'DPVI240', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Photovoltaic Industry (15-3500W)', image: new URL('../assets/products/claf/DPVI240-8B-24(1).png', import.meta.url).href },
  { name: 'DPVI240-8B-24', series: 'DPVI240', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Photovoltaic Industry (15-3500W)', image: new URL('../assets/products/claf/DPVI240-8B-24.png', import.meta.url).href },
  { name: 'DPV350-15B-24-P4Q2', series: 'DPV350', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Photovoltaic Industry (15-3500W)', image: new URL('../assets/products/claf/DPV350-15B-24-P4Q2.png', import.meta.url).href },
  { name: 'DPV350-15B-24', series: 'DPV350', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Photovoltaic Industry (15-3500W)', image: new URL('../assets/products/claf/DPV350-15B-24.png', import.meta.url).href },
  { name: 'DPVI500-8B-24', series: 'DPV500', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Photovoltaic Industry (15-3500W)', image: new URL('../assets/products/claf/DPVI500-8B-24.png', import.meta.url).href },
  { name: 'DPV1000-10B-xx', series: 'DPV1000', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Photovoltaic Industry (15-3500W)', image: new URL('../assets/products/claf/DPV1000-10B-xx.png', import.meta.url).href },
  { name: 'DPV3500-10B-24', series: 'DPV3500', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Photovoltaic Industry (15-3500W)', image: new URL('../assets/products/claf/DPV3500-10B-24.png', import.meta.url).href },

  // --- Subgroup: Railway Industry (6-400W) ---
  { name: 'DRUP6-F1Dxx', series: 'DRUP6', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Railway Industry (6-400W)', image: new URL('../assets/products/claf/DRUP6-F1Dxx.png', import.meta.url).href },
  { name: 'DRWMD6-B1Dxx', series: 'DRWMD6', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Railway Industry (6-400W)', image: new URL('../assets/products/claf/DRWMD6-B1Dxx.png', import.meta.url).href },
  { name: 'DRWMD6-B1DxxH', series: 'DRWMD6', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Railway Industry (6-400W)', image: new URL('../assets/products/claf/DRWMD6-B1DxxH.png', import.meta.url).href },
  { name: 'DRULD10-F1Dxx 侧', series: 'DRULD10', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Railway Industry (6-400W)', image: new URL('../assets/products/claf/DRULD10-F1Dxx 侧.png', import.meta.url).href },
  { name: 'DRULD10-F1Dxx', series: 'DRULD10', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Railway Industry (6-400W)', image: new URL('../assets/products/claf/DRULD10-F1Dxx.png', import.meta.url).href },
  { name: 'DRWLD20-B1Dxx', series: 'DRWLD20', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Railway Industry (6-400W)', image: new URL('../assets/products/claf/DRWLD20-B1Dxx.png', import.meta.url).href },
  { name: 'DRWLD20-B1DxxH', series: 'DRWLD20', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Railway Industry (6-400W)', image: new URL('../assets/products/claf/DRWLD20-B1DxxH.png', import.meta.url).href },
  { name: 'DRWLD20-E1Dxx', series: 'DRWLD20', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Railway Industry (6-400W)', image: new URL('../assets/products/claf/DRWLD20-E1Dxx.png', import.meta.url).href },
  { name: 'DRULD20-F1Dxx 侧', series: 'DRULD20', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Railway Industry (6-400W)', image: new URL('../assets/products/claf/DRULD20-F1Dxx 侧.png', import.meta.url).href },
  { name: 'DRULD20-F1Dxx', series: 'DRULD20', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Railway Industry (6-400W)', image: new URL('../assets/products/claf/DRULD20-F1Dxx.png', import.meta.url).href },
  { name: 'DRWLMD20-B1Dxx', series: 'DRWLMD20', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Railway Industry (6-400W)', image: new URL('../assets/products/claf/DRWLMD20-B1Dxx.png', import.meta.url).href },
  { name: 'DRWLMD20-B1DxxH', series: 'DRWLMD20', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Railway Industry (6-400W)', image: new URL('../assets/products/claf/DRWLMD20-B1DxxH.png', import.meta.url).href },
  { name: 'DRULD30-H1Dxx', series: 'DRULD30', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Railway Industry (6-400W)', image: new URL('../assets/products/claf/DRULD30-H1Dxx.png', import.meta.url).href },
  { name: 'DRULD30-H1Dxx侧', series: 'DRULD30', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Railway Industry (6-400W)', image: new URL('../assets/products/claf/DRULD30-H1Dxx侧.png', import.meta.url).href },
  { name: 'DRWLD40-F1Dxx', series: 'DRWLD40', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Railway Industry (6-400W)', image: new URL('../assets/products/claf/DRWLD40-F1Dxx.png', import.meta.url).href },
  { name: 'DRWLD40-F1DxxE2S', series: 'DRWLD40', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Railway Industry (6-400W)', image: new URL('../assets/products/claf/DRWLD40-F1DxxE2S.png', import.meta.url).href },
  { name: 'DRWLD40-F1DxxH', series: 'DRWLD40', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Railway Industry (6-400W)', image: new URL('../assets/products/claf/DRWLD40-F1DxxH.png', import.meta.url).href },
  { name: 'DRWQB50-F1Dxx', series: 'DRWQB50', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Railway Industry (6-400W)', image: new URL('../assets/products/claf/DRWQB50-F1Dxx.png', import.meta.url).href },
  { name: 'DRWQB50-F1DxxH', series: 'DRWQB50', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Railway Industry (6-400W)', image: new URL('../assets/products/claf/DRWQB50-F1DxxH.png', import.meta.url).href },
  { name: 'DRWQB75-F1Dxx', series: 'DRWQB75', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Railway Industry (6-400W)', image: new URL('../assets/products/claf/DRWQB75-F1Dxx.png', import.meta.url).href },
  { name: 'DRWQB75-F1DxxH', series: 'DRWQB75', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Railway Industry (6-400W)', image: new URL('../assets/products/claf/DRWQB75-F1DxxH.png', import.meta.url).href },
  { name: 'DRWQB100-F1Dxx', series: 'DRWQB100', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Railway Industry (6-400W)', image: new URL('../assets/products/claf/DRWQB100-F1Dxx.png', import.meta.url).href },
  { name: 'DRWQB100-F1DxxH', series: 'DRWQB100', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Railway Industry (6-400W)', image: new URL('../assets/products/claf/DRWQB100-F1DxxH.png', import.meta.url).href },
  { name: 'DRWHB150-F1Dxx', series: 'DRWHB150', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Railway Industry (6-400W)', image: new URL('../assets/products/claf/DRWHB150-F1Dxx.png', import.meta.url).href },
  { name: 'DRWHB150-F1DxxH', series: 'DRWHB150', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Railway Industry (6-400W)', image: new URL('../assets/products/claf/DRWHB150-F1DxxH.png', import.meta.url).href },

  // -------------------------------------------------------------------------
  // Section 3: Non-isolated (0.5-50A)
  // -------------------------------------------------------------------------

  // --- Subgroup: Switching Regulater (0.5-3A) ---
  { name: 'DNKMT0.5-78xxV2', series: 'DNKMT0.5', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Switching Regulater (0.5-3A)', image: new URL('../assets/products/claf/DNKMT0.5-78xxV2.png', import.meta.url).href },
  { name: 'DNKS0.5-78L15', series: 'DNKS0.5', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Switching Regulater (0.5-3A)', image: new URL('../assets/products/claf/DNKS0.5-78L15.png', import.meta.url).href },
  { name: 'DNKS0.5-78xx', series: 'DNKS0.5', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Switching Regulater (0.5-3A)', image: new URL('../assets/products/claf/DNKS0.5-78xx.png', import.meta.url).href },
  { name: 'DNKU0.5-7803L', series: 'DNKU0.5', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Switching Regulater (0.5-3A)', image: new URL('../assets/products/claf/DNKU0.5-7803L.png', import.meta.url).href },
  { name: 'DNKU0.5-78xL', series: 'DNKU0.5', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Switching Regulater (0.5-3A)', image: new URL('../assets/products/claf/DNKU0.5-78xL.png', import.meta.url).href },
  { name: 'DNKU0.5-78xx', series: 'DNKU0.5', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Switching Regulater (0.5-3A)', image: new URL('../assets/products/claf/DNKU0.5-78xx.png', import.meta.url).href },
  { name: 'DNKM1-78xx', series: 'DNKM1', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Switching Regulater (0.5-3A)', image: new URL('../assets/products/claf/DNKM1-78xx.png', import.meta.url).href },
  { name: 'DNKS1-78xx', series: 'DNKS1', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Switching Regulater (0.5-3A)', image: new URL('../assets/products/claf/DNKS1-78xx.png', import.meta.url).href },
  { name: 'DNKS1-78XXL', series: 'DNKS1', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Switching Regulater (0.5-3A)', image: new URL('../assets/products/claf/DNKS1-78XXL.png', import.meta.url).href },
  { name: 'DNKS2-78xx', series: 'DNKS2', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Switching Regulater (0.5-3A)', image: new URL('../assets/products/claf/DNKS2-78xx.png', import.meta.url).href },
  { name: 'DNKS2-78xxL(1)', series: 'DNKS2', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Switching Regulater (0.5-3A)', image: new URL('../assets/products/claf/DNKS2-78xxL(1).png', import.meta.url).href },
  { name: 'DNKS2-78xxL', series: 'DNKS2', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Switching Regulater (0.5-3A)', image: new URL('../assets/products/claf/DNKS2-78xxL.png', import.meta.url).href },
  { name: 'DNKS3-78xx', series: 'DNKS3', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Switching Regulater (0.5-3A)', image: new URL('../assets/products/claf/DNKS3-78xx.png', import.meta.url).href },

  // --- Subgroup: Buck-boost Module (10-50A) ---
  { name: 'DNJEB10-B48xx', series: 'DNJEB10', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Buck-boost Module (10-50A)', image: new URL('../assets/products/claf/DNJEB10-B48xx.png', import.meta.url).href },
  { name: 'DNJEB10-B48xx侧', series: 'DNJEB10', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Buck-boost Module (10-50A)', image: new URL('../assets/products/claf/DNJEB10-B48xx侧.png', import.meta.url).href },
  { name: 'DNUEB10-B4836F 侧', series: 'DNUEB10', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Buck-boost Module (10-50A)', image: new URL('../assets/products/claf/DNUEB10-B4836F 侧.png', import.meta.url).href },
  { name: 'DNUEB10-B4836F', series: 'DNUEB10', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Buck-boost Module (10-50A)', image: new URL('../assets/products/claf/DNUEB10-B4836F.png', import.meta.url).href },
  { name: 'DNUEB10-B48xx', series: 'DNUEB10', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Buck-boost Module (10-50A)', image: new URL('../assets/products/claf/DNUEB10-B48xx.png', import.meta.url).href },
  { name: 'DNUEB10-Bxxxx侧', series: 'DNUEB10', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Buck-boost Module (10-50A)', image: new URL('../assets/products/claf/DNUEB10-Bxxxx侧.png', import.meta.url).href },
  { name: 'DNJEB20-B48xx', series: 'DNJEB20', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Buck-boost Module (10-50A)', image: new URL('../assets/products/claf/DNJEB20-B48xx.png', import.meta.url).href },
  { name: 'DNJEB20-B48xx侧', series: 'DNJEB20', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Buck-boost Module (10-50A)', image: new URL('../assets/products/claf/DNJEB20-B48xx侧.png', import.meta.url).href },
  { name: 'DNUHB50-B6060', series: 'DNUHB50', group: '2. Isolated & Non Isolated DC-DC Converter', subgroup: 'Buck-boost Module (10-50A)', image: new URL('../assets/products/claf/DNUHB50-B6060.png', import.meta.url).href },

  // =========================================================================
  // GROUP 3: Transceiver Module
  // =========================================================================

  // --- Subgroup: CAN Transceivers ---
  { name: 'TCANFDL301DM', series: 'TCANFDL', group: '3. Transceiver Module', subgroup: 'CAN Transceivers', image: new URL('../assets/products/claf/TCANFDL301DM.png', import.meta.url).href },
  { name: 'TCANHx01D', series: 'TCANHx', group: '3. Transceiver Module', subgroup: 'CAN Transceivers', image: new URL('../assets/products/claf/TCANHx01D.png', import.meta.url).href },
  { name: 'TCANHx01DM', series: 'TCANHx', group: '3. Transceiver Module', subgroup: 'CAN Transceivers', image: new URL('../assets/products/claf/TCANHx01DM.png', import.meta.url).href },
  { name: 'TCANHx02D', series: 'TCANHx', group: '3. Transceiver Module', subgroup: 'CAN Transceivers', image: new URL('../assets/products/claf/TCANHx02D.png', import.meta.url).href },
  { name: 'TCANHx31M', series: 'TCANHx', group: '3. Transceiver Module', subgroup: 'CAN Transceivers', image: new URL('../assets/products/claf/TCANHx31M.png', import.meta.url).href },
  { name: 'TCANL541N', series: 'TCANL', group: '3. Transceiver Module', subgroup: 'CAN Transceivers', image: new URL('../assets/products/claf/TCANL541N.png', import.meta.url).href },
  { name: 'TCANLx01D', series: 'TCANLx', group: '3. Transceiver Module', subgroup: 'CAN Transceivers', image: new URL('../assets/products/claf/TCANLx01D.png', import.meta.url).href },
  { name: 'TCANLx21P', series: 'TCANLx', group: '3. Transceiver Module', subgroup: 'CAN Transceivers', image: new URL('../assets/products/claf/TCANLx21P.png', import.meta.url).href },
  { name: 'TCANLx21PT', series: 'TCANLx', group: '3. Transceiver Module', subgroup: 'CAN Transceivers', image: new URL('../assets/products/claf/TCANLx21PT.png', import.meta.url).href },

  // --- Subgroup: RS 485 Transceivers ---
  { name: 'T485Lx01D-A', series: 'T485L', group: '3. Transceiver Module', subgroup: 'RS 485 Transceivers', image: new URL('../assets/products/claf/T485Lx01D-A.png', import.meta.url).href },
  { name: 'T485Lx01D-H', series: 'T485L', group: '3. Transceiver Module', subgroup: 'RS 485 Transceivers', image: new URL('../assets/products/claf/T485Lx01D-H.png', import.meta.url).href },
  { name: 'T485Lx01D', series: 'T485L', group: '3. Transceiver Module', subgroup: 'RS 485 Transceivers', image: new URL('../assets/products/claf/T485Lx01D.png', import.meta.url).href },
  { name: 'T485Lx01DG', series: 'T485L', group: '3. Transceiver Module', subgroup: 'RS 485 Transceivers', image: new URL('../assets/products/claf/T485Lx01DG.png', import.meta.url).href },
  { name: 'T485Lx01DM', series: 'T485L', group: '3. Transceiver Module', subgroup: 'RS 485 Transceivers', image: new URL('../assets/products/claf/T485Lx01DM.png', import.meta.url).href },
  { name: 'T485Lx31M', series: 'T485L', group: '3. Transceiver Module', subgroup: 'RS 485 Transceivers', image: new URL('../assets/products/claf/T485Lx31M.png', import.meta.url).href },

  // --- Subgroup: RS 232 Transceivers ---
  { name: 'T232L541S', series: 'T232', group: '3. Transceiver Module', subgroup: 'RS 232 Transceivers', image: new URL('../assets/products/claf/T232L541S.png', import.meta.url).href },
  { name: 'T232Lx01D', series: 'T232', group: '3. Transceiver Module', subgroup: 'RS 232 Transceivers', image: new URL('../assets/products/claf/T232Lx01D.png', import.meta.url).href },
  { name: 'T232Lx02D', series: 'T232', group: '3. Transceiver Module', subgroup: 'RS 232 Transceivers', image: new URL('../assets/products/claf/T232Lx02D.png', import.meta.url).href },
  { name: 'T232Lx31M', series: 'T232', group: '3. Transceiver Module', subgroup: 'RS 232 Transceivers', image: new URL('../assets/products/claf/T232Lx31M.png', import.meta.url).href },

  // =========================================================================
  // GROUP 4: IGBT Driver(SiC/GaN)
  // =========================================================================

  // --- Subgroup: IGBT divers ---
  { name: 'DQC8-1510S1409', series: 'DQC8', group: '4. IGBT Driver(SiC/GaN)', subgroup: 'IGBT divers', image: new URL('../assets/products/claf/DQC8-1510S1409.png', import.meta.url).href, description: 'High Reliability Hybrid Integrated IGBT Driver Module' },
  { name: 'DQV8-12S1509', series: 'DQV8', group: '4. IGBT Driver(SiC/GaN)', subgroup: 'IGBT divers', image: new URL('../assets/products/claf/DQV8-12S1509.png', import.meta.url).href, description: '12V Input Specialized High Speed IGBT Driver Module' },
  { name: 'DQV8-15S1509', series: 'DQV8', group: '4. IGBT Driver(SiC/GaN)', subgroup: 'IGBT divers', image: new URL('../assets/products/claf/DQV8-12S1509.png', import.meta.url).href, description: '15V Input High Voltage Isolation IGBT Driver Module' },

  // --- Subgroup: IGBT/SiC/GaN Power Supplies ---
  { name: 'DQP1-15S0909V0', series: 'DQP', group: '4. IGBT Driver(SiC/GaN)', subgroup: 'IGBT/SiC/GaN Power Supplies', image: new URL('../assets/products/claf/DQP1-15S0909V0.png', import.meta.url).href, description: '1W Specialized DC/DC Power Supply for IGBT/SiC MOSFET Drivers' },
  { name: 'DQP2-15S1709V0', series: 'DQP', group: '4. IGBT Driver(SiC/GaN)', subgroup: 'IGBT/SiC/GaN Power Supplies', image: new URL('../assets/products/claf/DQP2-15S1709V0.png', import.meta.url).href, description: '2W Reinforced Isolation Power Supply for SiC/GaN Drivers' },
  { name: 'DQP2-xxSxxxx', series: 'DQP', group: '4. IGBT Driver(SiC/GaN)', subgroup: 'IGBT/SiC/GaN Power Supplies', image: new URL('../assets/products/claf/DQP2-xxSxxxx.png', import.meta.url).href, description: '2W Dedicated DC/DC Converter for IGBT Gate Drivers' },
  { name: 'DQP2-xxSxxxxV0', series: 'DQP', group: '4. IGBT Driver(SiC/GaN)', subgroup: 'IGBT/SiC/GaN Power Supplies', image: new URL('../assets/products/claf/DQP2-xxSxxxxV0.png', import.meta.url).href, description: '2W V0 Flame Retardant Driver Power Supply Module' },
  { name: 'DQP4-24HD1803D', series: 'DQP', group: '4. IGBT Driver(SiC/GaN)', subgroup: 'IGBT/SiC/GaN Power Supplies', image: new URL('../assets/products/claf/DQP4-24HD1803D.png', import.meta.url).href, description: '4W Dual Output High Isolation SiC MOSFET Driver Power Supply' },
  { name: 'DQP5-xxDxxxxV0', series: 'DQP', group: '4. IGBT Driver(SiC/GaN)', subgroup: 'IGBT/SiC/GaN Power Supplies', image: new URL('../assets/products/claf/DQP5-xxDxxxxV0.png', import.meta.url).href, description: '5W High Efficiency Power Module for High Power IGBT/SiC Drivers' },

  // =========================================================================
  // GROUP 5: Sensor
  // =========================================================================

  // --- Subgroup: Residual Current Transducers ---
  { 
    name: 'Residual Current Transducers Series', 
    series: 'Sensor', 
    group: '5. Sensor', 
    subgroup: 'Residual Current Transducers', 
    description: 'High precision residual current detection and monitoring transducers designed for electrical safety, EV charging, and leakage protection.' 
  },

  // --- Subgroup: Current Sensors ---
  { 
    name: 'Current Sensors Series', 
    series: 'Sensor', 
    group: '5. Sensor', 
    subgroup: 'Current Sensors', 
    description: 'Precision Hall-effect and industrial open-loop/closed-loop current sensors for accurate AC/DC power measurement and smart control systems.' 
  },

  // =========================================================================
  // GROUP 6: EMC Auxiliary
  // =========================================================================

  // --- Subgroup: EMC Filter ---
  { 
    name: 'EMC Filter Series', 
    series: 'EMC', 
    group: '6. EMC Auxiliary', 
    subgroup: 'EMC Filter', 
    description: 'High-performance EMC Filters and auxiliary surge suppressor modules for industrial power systems, effectively reducing electromagnetic interference and improving circuit reliability.' 
  },

  // =========================================================================
  // GROUP 7: DDR - DIN Rail Redundant Module
  // =========================================================================

  { 
    name: 'DDR20', 
    series: 'DDR', 
    group: '7. DDR - DIN Rail Redundant Module', 
    subgroup: 'DDR Series (20A - 40A)', 
    image: new URL('../assets/products/claf/DDR20.png', import.meta.url).href, 
    description: '20A DIN Rail Redundancy Module for 1+1 and N+1 power supply redundancy systems with dual inputs.' 
  },
  { 
    name: 'DDR40', 
    series: 'DDR', 
    group: '7. DDR - DIN Rail Redundant Module', 
    subgroup: 'DDR Series (20A - 40A)', 
    image: new URL('../assets/products/claf/DDR40.png', import.meta.url).href, 
    description: '40A High Current DIN Rail Redundancy Module with dual input channels and built-in status indication.' 
  },

  // =========================================================================
  // GROUP 8: DDUPS - DIN Rail Uninterruptible Power Supply
  // =========================================================================

  { 
    name: 'DDUPS20-24F-N', 
    series: 'DDUPS', 
    group: '8. DDUPS - DIN Rail Uninterruptible Power Supply', 
    subgroup: 'DDUPS Series (24V / 20A)', 
    image: new URL('../assets/products/claf/DDUPS20-24F-N.png', import.meta.url).href, 
    description: '24V 20A All-in-One DIN Rail DC-UPS Uninterruptible Power Supply Module with intelligent battery management and monitoring.' 
  }
];
