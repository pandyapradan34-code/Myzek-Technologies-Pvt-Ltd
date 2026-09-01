import { Bot, HeartPulse, Layers, FlaskConical, Crosshair, CheckCircle2 } from 'lucide-react'

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
    icon: Bot,
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
    icon: HeartPulse,
    description: 'Electronic components are essential for the control, monitoring, communication, and power management of medical and healthcare equipment.',
    applications: ['Medical equipment', 'Patient monitoring', 'Diagnostic systems', 'Healthcare automation', 'Control electronics', 'Power management', 'Measurement systems']
  },
  {
    name: '9. Textile Machinery',
    icon: Layers,
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
    icon: FlaskConical,
    description: 'We support pharmaceutical and laboratory equipment manufacturers with components for precise control, monitoring, automation, and process management.',
    applications: ['Pharmaceutical machinery', 'Laboratory equipment', 'Process automation', 'Temperature control', 'Monitoring systems', 'Packaging equipment', 'Measurement systems', 'Control systems']
  },
  {
    name: '13. CNC, Laser & Cutting Machinery',
    icon: Crosshair,
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
        <div className="card-grid" data-aos="fade-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {APPLICATION_AREAS.map((area, index) => {
            const IconComp = area.icon
            return (
              <div className="card" key={area.name} style={{ padding: '2rem' }} data-aos="fade-up" data-aos-delay={(index % 3) * 100}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem', minHeight: '52px', display: 'flex', alignItems: 'center' }}>
                  {typeof IconComp === 'string' ? (
                    IconComp
                  ) : (
                    <IconComp size={48} strokeWidth={1.8} style={{ color: 'var(--color-accent, #e8871e)' }} />
                  )}
                </div>
                <h3 style={{ marginBottom: '1rem' }}>{area.name}</h3>
                <p style={{ marginBottom: '1.5rem' }}>{area.description}</p>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Applications include:</h4>
                <ul style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  {area.applications.map(app => <li key={app}>{app}</li>)}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      <section className="prototype-production-section" data-aos="fade-up">
        <div className="container">
          <div className="prototype-production-header">
            <h2>From Prototype to Production</h2>
            <p>
              Our support extends across the complete product development and production lifecycle.
            </p>
          </div>
          <div className="prototype-production-grid">
            <div className="prototype-step-item" data-aos="fade-up" data-aos-delay="0">
              <div className="prototype-step-badge">01</div>
              <h3 className="prototype-step-title">Design & Prototyping</h3>
              <p className="prototype-step-desc">
                Source components for new product development, prototypes, and engineering projects.
              </p>
            </div>
            <div className="prototype-step-item" data-aos="fade-up" data-aos-delay="100">
              <div className="prototype-step-badge">02</div>
              <h3 className="prototype-step-title">Engineering Support</h3>
              <p className="prototype-step-desc">
                Help identify suitable components based on technical specifications, application requirements, and availability.
              </p>
            </div>
            <div className="prototype-step-item" data-aos="fade-up" data-aos-delay="200">
              <div className="prototype-step-badge">03</div>
              <h3 className="prototype-step-title">Pilot Production</h3>
              <p className="prototype-step-desc">
                Support initial production requirements while maintaining sourcing flexibility.
              </p>
            </div>
            <div className="prototype-step-item" data-aos="fade-up" data-aos-delay="300">
              <div className="prototype-step-badge">04</div>
              <h3 className="prototype-step-title">Volume Production</h3>
              <p className="prototype-step-desc">
                Provide competitive sourcing and supply support for larger production requirements.
              </p>
            </div>
            <div className="prototype-step-item" data-aos="fade-up" data-aos-delay="400">
              <div className="prototype-step-badge">05</div>
              <h3 className="prototype-step-title">Long-Term Supply</h3>
              <p className="prototype-step-desc">
                Help customers maintain component availability and supply continuity throughout the product lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-myzek-section" data-aos="fade-up">
        <div className="container">
          <div className="why-myzek-header">
            <h2>Why Myzek for your application?</h2>
            <p>
              We combine product availability, sourcing expertise, and responsive customer support to help businesses manage their electronic component requirements.
            </p>
          </div>
          <div className="why-myzek-card" data-aos="fade-up">
            <h3 className="why-myzek-card-title">Our strengths include:</h3>
            <div className="why-myzek-grid">
              <div className="why-myzek-item">
                <CheckCircle2 className="why-myzek-check" size={20} strokeWidth={2} />
                <span>Authorized distribution and sourcing</span>
              </div>
              <div className="why-myzek-item">
                <CheckCircle2 className="why-myzek-check" size={20} strokeWidth={2} />
                <span>Ready-stock availability</span>
              </div>
              <div className="why-myzek-item">
                <CheckCircle2 className="why-myzek-check" size={20} strokeWidth={2} />
                <span>Competitive pricing</span>
              </div>
              <div className="why-myzek-item">
                <CheckCircle2 className="why-myzek-check" size={20} strokeWidth={2} />
                <span>Wide component portfolio</span>
              </div>
              <div className="why-myzek-item">
                <CheckCircle2 className="why-myzek-check" size={20} strokeWidth={2} />
                <span>Technical and product support</span>
              </div>
              <div className="why-myzek-item">
                <CheckCircle2 className="why-myzek-check" size={20} strokeWidth={2} />
                <span>BOM and RFQ support</span>
              </div>
              <div className="why-myzek-item">
                <CheckCircle2 className="why-myzek-check" size={20} strokeWidth={2} />
                <span>Prototype-to-production support</span>
              </div>
              <div className="why-myzek-item">
                <CheckCircle2 className="why-myzek-check" size={20} strokeWidth={2} />
                <span>Reliable sourcing</span>
              </div>
              <div className="why-myzek-item">
                <CheckCircle2 className="why-myzek-check" size={20} strokeWidth={2} />
                <span>Responsive customer service</span>
              </div>
              <div className="why-myzek-item">
                <CheckCircle2 className="why-myzek-check" size={20} strokeWidth={2} />
                <span>Long-term supply support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
