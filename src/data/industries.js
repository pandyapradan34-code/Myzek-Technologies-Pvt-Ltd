// src/data/industries.js
// 21 industry segments, split into the two groups shown on the About page.
// `icon` refers to a key in ICONS below. Adding a segment = one line here.

export const ICONS = {
  rail: '<path d="M6 3h12v13H6z"/><path d="M9 7h6"/><circle cx="9.5" cy="12" r="1"/><circle cx="14.5" cy="12" r="1"/><path d="M8 16l-2 5M16 16l2 5M5 21h14"/>',
  ev: '<path d="M3 14h18M5 14l2-6h10l2 6M5 14v3M19 14v3"/><circle cx="7.5" cy="17.5" r="1.5"/><circle cx="16.5" cy="17.5" r="1.5"/>',
  home: '<path d="M4 11l8-6 8 6v9H4z"/><path d="M12 13v3M9.5 12.5a3.5 3.5 0 015 0"/>',
  gear: '<circle cx="12" cy="12" r="3.2"/><path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8"/>',
  solar: '<path d="M4 15l2-9h12l2 9zM3 15h18M9 6l-1 9M15 6l1 9M4.8 10.5h14.4"/><path d="M12 15v5"/>',
  iot: '<rect x="8" y="8" width="8" height="8" rx="1"/><path d="M12 4v4M12 16v4M4 12h4M16 12h4"/><circle cx="12" cy="4" r="1"/><circle cx="12" cy="20" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="20" cy="12" r="1"/>',
  med: '<path d="M4 8h16v11H4z"/><path d="M9 8V5h6v3"/><path d="M12 11v5M9.5 13.5h5"/>',
  textile: '<path d="M7 4h10v4H7zM7 16h10v4H7z"/><path d="M9 8v8M12 8v8M15 8v8"/>',
  lift: '<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M12 3v18"/><path d="M8.5 9l-1.2 2h2.4zM15.5 15l1.2-2h-2.4z"/>',
  pharma: '<rect x="3.5" y="8.5" width="10" height="7" rx="3.5" transform="rotate(-45 8.5 12)"/><path d="M9 9l6 6"/><path d="M17 4v4M15 6h4"/>',
  pack: '<path d="M4 8l8-4 8 4v9l-8 4-8-4z"/><path d="M4 8l8 4 8-4M12 12v9"/>',
  plastic: '<path d="M6 4h12l-1.5 7H7.5z"/><path d="M9 11l-1 9h8l-1-9"/><path d="M10 15h4"/>',
  panel: '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M7 7h6M7 10h6M7 13h4"/><circle cx="16.5" cy="7" r="1.2"/><circle cx="16.5" cy="11" r="1.2"/>',
  laser: '<path d="M12 3v6"/><path d="M8 9h8l-2 4h-4z"/><path d="M12 13v4"/><path d="M5 20h14"/><path d="M10 17h4"/>',
  led: '<path d="M9 17h6M10 20h4"/><path d="M12 3a6 6 0 013.5 10.9V15h-7v-1.1A6 6 0 0112 3z"/>',
  robot: '<rect x="5" y="8" width="14" height="10" rx="2"/><path d="M12 4v4"/><circle cx="12" cy="3.2" r="1.2"/><circle cx="9.5" cy="13" r="1.2"/><circle cx="14.5" cy="13" r="1.2"/><path d="M3 12v3M21 12v3"/>',
  charger: '<rect x="5" y="3" width="9" height="18" rx="1"/><path d="M10.5 8l-2 3.5h3L9.5 15"/><path d="M17 8v7a2 2 0 002 2 2 2 0 002-2V9l-2-2"/>',
  vent: '<rect x="6" y="9" width="12" height="12" rx="2"/><path d="M9 13h6M9 16.5h4"/><path d="M9 6.5c0-1.5 1.5-1.5 1.5-3M13.5 6.5c0-1.5 1.5-1.5 1.5-3"/>',
  print: '<path d="M7 9V3h10v6"/><rect x="4" y="9" width="16" height="7" rx="1"/><path d="M7 16h10v5H7z"/><circle cx="17" cy="12" r="1"/>',
  esc: '<path d="M3 20l6-6h4l6-6"/><path d="M15 8h4v4"/><path d="M4 20h5M8 16h4"/><circle cx="5" cy="17.5" r="1.2"/>',
};

export const CORE_MARKETS = [
  { name: 'Railway & Transportation Systems', icon: 'rail' },
  { name: 'Electric Vehicles (EV) & EV Infrastructure', icon: 'ev' },
  { name: 'Home & Industrial Automation', icon: 'home' },
  { name: 'Industrial Automation & Control Systems', icon: 'gear' },
  { name: 'Photovoltaic (PV) & Solar Energy', icon: 'solar' },
  { name: 'IoT & Smart Technology', icon: 'iot' },
  { name: 'Medical & Healthcare Equipment', icon: 'med' },
  { name: 'Textile Machinery', icon: 'textile' },
  { name: 'Elevator & Escalator Systems', icon: 'lift' },
];

export const OEM_SEGMENTS = [
  { name: 'Pharmaceutical Machinery', icon: 'pharma' },
  { name: 'Packaging Machinery', icon: 'pack' },
  { name: 'Plastic Processing Machinery', icon: 'plastic' },
  { name: 'Textile & Electronic Jacquard Machinery', icon: 'textile' },
  { name: 'Automation & Control Panels', icon: 'panel' },
  { name: 'CNC, Laser & Diamond Cutting Machinery', icon: 'laser' },
  { name: 'LED Lighting & Signage', icon: 'led' },
  { name: 'Solar Plants & Solar Panel Cleaning Robots', icon: 'robot' },
  { name: 'EV Charging Station Manufacturing', icon: 'charger' },
  { name: 'Humidifier & Ventilator OEMs', icon: 'vent' },
  { name: 'Embroidery, Printing & Knitting Machinery', icon: 'print' },
  { name: 'Elevator & Escalator Manufacturing', icon: 'esc' },
];