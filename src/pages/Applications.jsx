const APPLICATION_AREAS = [
  {
    name: '1. Industrial Automation & Control',
    icon: '⚙️',
    description: 'Electronic components play a critical role in modern industrial automation and machine-control systems. We support manufacturers and OEMs with components used for control, monitoring, communication, and automation.',
    applications: ['PLC and control systems', 'Industrial control panels', 'Machine automation', 'Motor control', 'Process control', 'Human-machine interfaces (HMI)', 'Industrial communication', 'Sensors and monitoring systems']
  },
  {
    name: '2. Power Electronics & Energy Management',
    icon: '⚡',
    description: 'We support power-intensive applications with components used for power conversion, regulation, switching, protection, and energy management.',
    applications: ['Power supplies', 'AC/DC and DC/DC conversion', 'Inverters', 'Power management systems', 'Battery systems', 'Energy storage', 'Motor drives', 'Power control systems']
  },
  {
    name: '3. Electric Vehicles & Charging Infrastructure',
    icon: '🔋',
    description: 'The growth of electric mobility requires reliable electronic systems for charging, power conversion, battery management, and vehicle control. We support EV manufacturers and infrastructure developers.',
    applications: ['EV charging stations', 'Battery management systems', 'Power conversion', 'Motor controllers', 'Charging control systems', 'Energy monitoring', 'Protection and switching', 'EV infrastructure']
  },
  {
    name: '4. Solar & Renewable Energy',
    icon: '☀️',
    description: 'We support renewable-energy applications with electronic components used in power conversion, monitoring, control, and system protection.',
    applications: ['Solar inverters', 'Photovoltaic systems', 'Solar power plants', 'Energy monitoring', 'Battery storage systems', 'Power management', 'Solar automation', 'Solar panel cleaning robots']
  },
  {
    name: '5. Embedded Systems & IoT',
    icon: '🌐',
    description: 'Modern connected products depend on reliable embedded electronics for processing, sensing, communication, and control. We support embedded and IoT product development.',
    applications: ['Embedded control systems', 'IoT devices', 'Smart sensors', 'Connected equipment', 'Communication interfaces', 'Data acquisition', 'Remote monitoring', 'Smart automation']
  },
  {
    name: '6. Motion Control & Robotics',
    icon: '🤖',
    description: 'Automation, robotics, and advanced machinery require precise control of motors, movement, and machine functions.',
    applications: ['Servo systems', 'Motor control', 'Robotics', 'Motion controllers', 'Industrial robots', 'Automated machinery', 'CNC systems', 'AGV and automated equipment']
  },
  {
    name: '7. Railway & Transportation Systems',
    icon: '🚆',
    description: 'We support railway and transportation applications where reliability, control, communication, and monitoring are essential.',
    applications: ['Railway control systems', 'Signaling systems', 'Transportation electronics', 'Communication systems', 'Monitoring equipment', 'Safety systems', 'Power management', 'Passenger information systems']
  },
  {
    name: '8. Medical & Healthcare Equipment',
    icon: '🏥',
    description: 'Electronic components are essential for the control, monitoring, communication, and power management of medical and healthcare equipment.',
    applications: ['Medical equipment', 'Patient monitoring', 'Diagnostic systems', 'Healthcare automation', 'Control electronics', 'Power management', 'Measurement systems']
  },
  {
    name: '9. Textile Machinery',
    icon: '🧵',
    description: 'We support textile machinery manufacturers with components used in machine control, automation, motion control, sensing, and electronic interfaces.',
    applications: ['Jacquard machinery', 'Embroidery machines', 'Knitting machines', 'Textile printing machines', 'Spinning and weaving equipment', 'Machine control systems', 'Motor control', 'Automation systems']
  },
  {
    name: '10. Elevator & Escalator Systems',
    icon: '🛗',
    description: 'Elevator and escalator systems require reliable electronic control, monitoring, motor-drive, and safety solutions.',
    applications: ['Elevator control systems', 'Escalator control', 'Door control', 'Motor drives', 'Safety systems', 'Position monitoring', 'Communication systems', 'Control panels']
  },
  {
    name: '11. Packaging & Processing Machinery',
    icon: '📦',
    description: 'We support machinery manufacturers with components for automation, motion control, sensing, and process management.',
    applications: ['Packaging machines', 'Filling machines', 'Labeling machines', 'Printing machines', 'Conveyor systems', 'Process-control equipment', 'Machine automation', 'Inspection systems']
  },
  {
    name: '12. Pharmaceutical & Laboratory Machinery',
    icon: '💊',
    description: 'We support pharmaceutical and laboratory equipment manufacturers with components for precise control, monitoring, automation, and process management.',
    applications: ['Pharmaceutical machinery', 'Laboratory equipment', 'Process automation', 'Temperature control', 'Monitoring systems', 'Packaging equipment', 'Measurement systems', 'Control systems']
  },
  {
    name: '13. CNC, Laser & Cutting Machinery',
    icon: '✂️',
    description: 'Advanced manufacturing equipment requires high-performance electronics for precision control, motion, power management, and automation.',
    applications: ['CNC machines', 'Laser cutting machines', 'Diamond cutting machines', 'Motion control', 'Servo systems', 'Machine controllers', 'Power electronics', 'Automation panels']
  },
  {
    name: '14. Building Automation & Smart Infrastructure',
    icon: '🏢',
    description: 'We support smart infrastructure applications that improve automation, monitoring, energy efficiency, and operational control.',
    applications: ['Building management systems', 'Smart lighting', 'HVAC control', 'Access control', 'Security systems', 'Energy monitoring', 'Smart sensors', 'Automated building systems']
  }
];

export default function Applications() {
  return (
    <div className="page page-applications">
      <section className="page-header" style={{ textAlign: 'center' }} data-aos="fade-up">
        <div className="container">
          <p className="eyebrow">Applications</p>
          <h1 style={{ marginBottom: '1.5rem' }}>Powering Innovation Across Industries</h1>
          <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p>
              At Myzek Technologies Pvt Ltd, we provide electronic components and sourcing solutions for a wide range of applications across industrial, commercial, and technology-driven products.
            </p>
            <p>
              From prototype development to volume production, we help OEMs, manufacturers, system integrators, and engineering teams source the right components for their specific application requirements.
            </p>
            <p>
              Our application-focused approach helps customers achieve reliable performance, efficient product development, and continuity of supply throughout the product lifecycle.
            </p>
          </div>
        </div>
      </section>

      <section className="container section" data-aos="fade-up">
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }} data-aos="fade-up">Our Application Areas</h2>
        <div className="card-grid" data-aos="fade-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {APPLICATION_AREAS.map((area, index) => (
            <div className="card" key={area.name} style={{ padding: '2rem' }} data-aos="fade-up" data-aos-delay={(index % 3) * 100}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{area.icon}</div>
              <h3 style={{ marginBottom: '1rem' }}>{area.name}</h3>
              <p style={{ marginBottom: '1.5rem' }}>{area.description}</p>
              <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Applications include:</h4>
              <ul style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {area.applications.map(app => <li key={app}>{app}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section" data-aos="fade-up" style={{ background: 'var(--color-surface)', padding: '4rem 1rem' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>From Prototype to Production</h2>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
            Our support extends across the complete product development and production lifecycle.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            <div className="card" data-aos="fade-up" style={{ padding: '1.5rem' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>Design & Prototyping</h3>
              <p>Source components for new product development, prototypes, and engineering projects.</p>
            </div>
            <div className="card" data-aos="fade-up" style={{ padding: '1.5rem' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>Engineering Support</h3>
              <p>Help identify suitable components based on technical specifications, application requirements, and availability.</p>
            </div>
            <div className="card" data-aos="fade-up" style={{ padding: '1.5rem' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>Pilot Production</h3>
              <p>Support initial production requirements while maintaining sourcing flexibility.</p>
            </div>
            <div className="card" data-aos="fade-up" style={{ padding: '1.5rem' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>Volume Production</h3>
              <p>Provide competitive sourcing and supply support for larger production requirements.</p>
            </div>
            <div className="card" data-aos="fade-up" style={{ padding: '1.5rem' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>Long-Term Supply</h3>
              <p>Help customers maintain component availability and supply continuity throughout the product lifecycle.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container section" data-aos="fade-up" style={{ paddingBottom: '5rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Why Myzek for Your Application?</h2>
        <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
          We combine product availability, sourcing expertise, and responsive customer support to help businesses manage their electronic component requirements.
        </p>
        <div className="card" data-aos="fade-up" style={{ padding: '3rem', margin: '0 auto', maxWidth: '800px' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Our strengths include:</h3>
          <ul style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1rem',
            paddingLeft: '1.25rem', 
            margin: 0 
          }}>
            <li>Authorized distribution and sourcing</li>
            <li>Ready-stock availability</li>
            <li>Competitive pricing</li>
            <li>Wide component portfolio</li>
            <li>Technical and product support</li>
            <li>BOM and RFQ support</li>
            <li>Prototype-to-production support</li>
            <li>Reliable sourcing</li>
            <li>Responsive customer service</li>
            <li>Long-term supply support</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
