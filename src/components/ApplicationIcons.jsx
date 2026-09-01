import React from 'react';

// Reusable SVG Container with Scoped Micro-Animation Stylesheets
const SvgContainer = ({ children, id, className = '', style = {} }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`app-machinery-icon ${className}`}
    style={{
      width: '100%',
      height: '100%',
      maxWidth: '74px',
      maxHeight: '74px',
      display: 'block',
      overflow: 'visible',
      ...style
    }}
  >
    <defs>
      {/* Radiant Golden-Orange / Amber Engineering Linear Gradient */}
      <linearGradient id={`grad-${id}`} x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#d97706" />
        <stop offset="45%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#facc15" />
      </linearGradient>

      {/* Embedded High-Performance Scoped Micro-Animation Stylesheet */}
      <style>{`
        /* Universal Reduced-Motion Accessibility Compliance */
        @media (prefers-reduced-motion: reduce) {
          .app-machinery-icon * {
            animation: none !important;
            transition: none !important;
          }
        }

        /* 1. INDUSTRIAL AUTOMATION MICRO-ANIMATIONS */
        @keyframes led-blink-1 {
          0%, 100% { opacity: 0.35; }
          40%, 60% { opacity: 1; filter: drop-shadow(0 0 2px #f59e0b); }
        }
        @keyframes led-blink-2 {
          0%, 100% { opacity: 1; filter: drop-shadow(0 0 2px #f59e0b); }
          50% { opacity: 0.25; }
        }
        @keyframes hmi-telemetry-scan {
          0% { stroke-dashoffset: 24; opacity: 0.6; }
          50% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: -24; opacity: 0.6; }
        }
        .anim-led-1 { animation: led-blink-1 2s ease-in-out infinite; }
        .anim-led-2 { animation: led-blink-2 1.6s ease-in-out infinite; }
        .anim-hmi-wave {
          stroke-dasharray: 12 4;
          animation: hmi-telemetry-scan 3s linear infinite;
        }
        .app-card-item:hover .anim-led-1 { animation-duration: 0.8s; }
        .app-card-item:hover .anim-led-2 { animation-duration: 0.7s; }
        .app-card-item:hover .anim-hmi-wave { animation-duration: 1.5s; stroke-dasharray: 20; }

        /* 2. POWER ELECTRONICS MICRO-ANIMATIONS */
        @keyframes power-wave-pulse {
          0% { stroke-dashoffset: 40; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes power-spark-glow {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.18); opacity: 1; filter: drop-shadow(0 0 3px #f59e0b); }
        }
        .anim-power-wave {
          stroke-dasharray: 8 3;
          animation: power-wave-pulse 3.5s linear infinite;
        }
        .anim-power-spark {
          transform-origin: 49px 37px;
          animation: power-spark-glow 2.2s ease-in-out infinite;
        }
        .app-card-item:hover .anim-power-wave { animation-duration: 1.6s; }
        .app-card-item:hover .anim-power-spark { animation-duration: 1.1s; }

        /* 3. ELECTRIC VEHICLES MICRO-ANIMATIONS */
        @keyframes ev-bolt-glow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.12); filter: drop-shadow(0 0 3px #f59e0b); }
        }
        @keyframes ev-bar-charge {
          0% { stroke-dashoffset: 16; opacity: 0.4; }
          50% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: -16; opacity: 0.4; }
        }
        @keyframes ev-cable-pulse {
          0% { stroke-dashoffset: 24; }
          100% { stroke-dashoffset: 0; }
        }
        .anim-ev-bolt {
          transform-origin: 25px 21px;
          animation: ev-bolt-glow 2s ease-in-out infinite;
        }
        .anim-ev-bar {
          stroke-dasharray: 8 4;
          animation: ev-bar-charge 2.5s ease-in-out infinite;
        }
        .anim-ev-cable {
          stroke-dasharray: 6 3;
          animation: ev-cable-pulse 3s linear infinite;
        }
        .app-card-item:hover .anim-ev-bolt { animation-duration: 1s; }
        .app-card-item:hover .anim-ev-bar { animation-duration: 1.2s; }
        .app-card-item:hover .anim-ev-cable { animation-duration: 1.4s; }

        /* 4. SOLAR & RENEWABLE MICRO-ANIMATIONS */
        @keyframes solar-shimmer {
          0%, 100% { opacity: 0.4; stroke-width: 1.6px; }
          50% { opacity: 1; stroke-width: 2.2px; filter: drop-shadow(0 0 2px #facc15); }
        }
        @keyframes inverter-meter-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        .anim-solar-grid-1 { animation: solar-shimmer 3s ease-in-out infinite; }
        .anim-solar-grid-2 { animation: solar-shimmer 3s ease-in-out 1.2s infinite; }
        .anim-inverter-meter {
          transform-origin: 52px 41px;
          animation: inverter-meter-pulse 2.4s ease-in-out infinite;
        }
        .app-card-item:hover .anim-solar-grid-1,
        .app-card-item:hover .anim-solar-grid-2 { animation-duration: 1.4s; }

        /* 5. EMBEDDED SYSTEMS & IOT MICRO-ANIMATIONS */
        @keyframes mcu-clock-pulse {
          0%, 100% { stroke-opacity: 0.65; transform: scale(1); }
          50% { stroke-opacity: 1; transform: scale(1.02); filter: drop-shadow(0 0 2px #f59e0b); }
        }
        @keyframes rf-wave-emit {
          0% { opacity: 0; transform: scale(0.85); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: scale(1.18); }
        }
        .anim-mcu-core {
          transform-origin: 32px 32px;
          animation: mcu-clock-pulse 2.2s ease-in-out infinite;
        }
        .anim-rf-wave-1 {
          transform-origin: 54px 25px;
          animation: rf-wave-emit 2.4s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
        .anim-rf-wave-2 {
          transform-origin: 54px 25px;
          animation: rf-wave-emit 2.4s cubic-bezier(0.16, 1, 0.3, 1) 0.8s infinite;
        }
        .app-card-item:hover .anim-rf-wave-1,
        .app-card-item:hover .anim-rf-wave-2 { animation-duration: 1.2s; }

        /* 6. MOTION CONTROL & ROBOTICS MICRO-ANIMATIONS */
        @keyframes robot-boom-articulate {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-2.8deg); }
        }
        @keyframes robot-claw-flex {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(0.92, 1.06); }
        }
        @keyframes roller-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes box-conveyor-glide {
          0% { transform: translateX(0px); opacity: 0.8; }
          50% { transform: translateX(3px); opacity: 1; }
          100% { transform: translateX(0px); opacity: 0.8; }
        }
        .anim-robot-boom {
          transform-origin: 15px 30px;
          animation: robot-boom-articulate 3.8s ease-in-out infinite;
        }
        .anim-robot-claw {
          transform-origin: 45px 23px;
          animation: robot-claw-flex 3.8s ease-in-out infinite;
        }
        .anim-motion-box-1 { animation: box-conveyor-glide 3.8s ease-in-out infinite; }
        .anim-motion-box-2 { animation: box-conveyor-glide 3.8s ease-in-out 0.6s infinite; }
        .app-card-item:hover .anim-robot-boom { animation-duration: 1.8s; }
        .app-card-item:hover .anim-robot-claw { animation-duration: 1.8s; }
        .app-card-item:hover .anim-motion-box-1,
        .app-card-item:hover .anim-motion-box-2 { animation-duration: 1.8s; }

        /* 7. RAILWAY & TRANSPORTATION MICRO-ANIMATIONS */
        @keyframes catenary-current-stream {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes track-sleeper-shift {
          0% { transform: translateX(0px); }
          50% { transform: translateX(1.8px); }
          100% { transform: translateX(0px); }
        }
        @keyframes train-headlight-breath {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; filter: drop-shadow(0 0 3px #facc15); }
        }
        .anim-catenary-wire {
          stroke-dasharray: 4 2;
          animation: catenary-current-stream 1.8s linear infinite;
        }
        .anim-train-track { animation: track-sleeper-shift 2.5s ease-in-out infinite; }
        .anim-headlight { animation: train-headlight-breath 2s ease-in-out infinite; }
        .app-card-item:hover .anim-catenary-wire { animation-duration: 0.9s; }
        .app-card-item:hover .anim-train-track { animation-duration: 1.2s; }

        /* 8. MEDICAL & HEALTHCARE MICRO-ANIMATIONS */
        @keyframes ecg-heartbeat-trace {
          0% { stroke-dashoffset: 32; opacity: 0.4; }
          30% { stroke-dashoffset: 0; opacity: 1; filter: drop-shadow(0 0 2px #f59e0b); }
          60%, 100% { stroke-dashoffset: -32; opacity: 0.4; }
        }
        @keyframes med-dispenser-stroke {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(1.8px); }
        }
        .anim-ecg-wave {
          stroke-dasharray: 16 6;
          animation: ecg-heartbeat-trace 2.2s cubic-bezier(0.2, 0.8, 0.4, 1) infinite;
        }
        .anim-med-dispense { animation: med-dispenser-stroke 2.6s ease-in-out infinite; }
        .app-card-item:hover .anim-ecg-wave { animation-duration: 1.2s; }
        .app-card-item:hover .anim-med-dispense { animation-duration: 1.3s; }

        /* 9. TEXTILE MACHINERY MICRO-ANIMATIONS */
        @keyframes shuttle-shuttle-l {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(2.5px); }
        }
        @keyframes shuttle-shuttle-r {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-2.5px); }
        }
        @keyframes warp-harmonic-vibe {
          0%, 100% { opacity: 0.6; stroke-width: 1.4px; }
          50% { opacity: 1; stroke-width: 1.7px; }
        }
        .anim-shuttle-left { animation: shuttle-shuttle-l 2.4s ease-in-out infinite; }
        .anim-shuttle-right { animation: shuttle-shuttle-r 2.4s ease-in-out infinite; }
        .anim-warp-line { animation: warp-harmonic-vibe 2.4s ease-in-out infinite; }
        .app-card-item:hover .anim-shuttle-left,
        .app-card-item:hover .anim-shuttle-right { animation-duration: 1.1s; }

        /* 10. ELEVATOR & ESCALATOR MICRO-ANIMATIONS */
        @keyframes elev-cabin-glide {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(12px); }
        }
        @keyframes elev-arrow-glow {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 1; filter: drop-shadow(0 0 2px #facc15); }
        }
        @keyframes escalator-arrow-glide {
          0% { transform: translate(0, 0); opacity: 0.3; }
          50% { opacity: 1; filter: drop-shadow(0 0 2px #facc15); }
          100% { transform: translate(3px, -3px); opacity: 0.3; }
        }
        .anim-elev-cabin {
          animation: elev-cabin-glide 4s ease-in-out infinite;
        }
        .anim-elev-arrow {
          animation: elev-arrow-glow 2s ease-in-out infinite;
        }
        .anim-escalator-arrow {
          animation: escalator-arrow-glide 2.4s ease-in-out infinite;
        }
        .app-card-item:hover .anim-elev-cabin { animation-duration: 2s; }
        .app-card-item:hover .anim-escalator-arrow { animation-duration: 1.2s; }

        /* 11. PACKAGING MACHINERY MICRO-ANIMATIONS */
        @keyframes sealing-ram-press {
          0%, 100% { transform: translateY(0); }
          35% { transform: translateY(2.5px); }
          45% { transform: translateY(2.5px); }
        }
        @keyframes sensor-beam-pulse {
          0%, 100% { opacity: 0.3; stroke-dashoffset: 8; }
          50% { opacity: 1; stroke-dashoffset: 0; filter: drop-shadow(0 0 2px #facc15); }
        }
        .anim-sealing-ram { animation: sealing-ram-press 3s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
        .anim-sensor-laser {
          stroke-dasharray: 3 2;
          animation: sensor-beam-pulse 2s ease-in-out infinite;
        }
        .app-card-item:hover .anim-sealing-ram { animation-duration: 1.5s; }
        .app-card-item:hover .anim-sensor-laser { animation-duration: 1s; }

        /* 12. PHARMACEUTICAL MACHINERY MICRO-ANIMATIONS */
        @keyframes pharma-gear-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pharma-arm-articulate {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-3.5deg); }
        }
        @keyframes pharma-claw-grasp {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(0.92, 1.08); }
        }
        @keyframes pharma-box-index {
          0% { transform: translateX(0px); opacity: 0.85; }
          50% { transform: translateX(2.5px); opacity: 1; }
          100% { transform: translateX(0px); opacity: 0.85; }
        }
        .anim-pharma-gear {
          transform-origin: 18px 38px;
          animation: pharma-gear-rotate 6s linear infinite;
        }
        .anim-pharma-arm {
          transform-origin: 26px 18px;
          animation: pharma-arm-articulate 3.6s ease-in-out infinite;
        }
        .anim-pharma-claw {
          transform-origin: 47px 25px;
          animation: pharma-claw-grasp 3.6s ease-in-out infinite;
        }
        .anim-pharma-boxes { animation: pharma-box-index 3.6s ease-in-out infinite; }
        .app-card-item:hover .anim-pharma-gear { animation-duration: 2.2s; }
        .app-card-item:hover .anim-pharma-arm { animation-duration: 1.8s; }
        .app-card-item:hover .anim-pharma-claw { animation-duration: 1.8s; }
        .app-card-item:hover .anim-pharma-boxes { animation-duration: 1.8s; }

        /* 13. CNC LASER & CUTTING MICRO-ANIMATIONS */
        @keyframes cnc-gear-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes laser-beam-energy {
          0%, 100% { opacity: 0.5; stroke-width: 2.2px; }
          50% { opacity: 1; stroke-width: 3.2px; filter: drop-shadow(0 0 3px #facc15); }
        }
        @keyframes laser-spark-burst-1 {
          0%, 100% { opacity: 0; transform: translate(0, 0) scale(0.4); }
          50% { opacity: 1; transform: translate(-2px, -2px) scale(1.2); }
        }
        @keyframes laser-spark-burst-2 {
          0%, 100% { opacity: 0; transform: translate(0, 0) scale(0.4); }
          50% { opacity: 1; transform: translate(2px, -2px) scale(1.2); }
        }
        .anim-cnc-gear {
          transform-origin: 25px 27px;
          animation: cnc-gear-spin 7s linear infinite;
        }
        .anim-laser-beam { animation: laser-beam-energy 1.6s ease-in-out infinite; }
        .anim-spark-l {
          transform-origin: 36px 44px;
          animation: laser-spark-burst-1 1.6s ease-out infinite;
        }
        .anim-spark-r {
          transform-origin: 48px 44px;
          animation: laser-spark-burst-2 1.6s ease-out 0.4s infinite;
        }
        .app-card-item:hover .anim-cnc-gear { animation-duration: 2.8s; }
        .app-card-item:hover .anim-laser-beam { animation-duration: 0.8s; }
        .app-card-item:hover .anim-spark-l,
        .app-card-item:hover .anim-spark-r { animation-duration: 0.8s; }

        /* 14. BUILDING AUTOMATION MICRO-ANIMATIONS */
        @keyframes bms-wave-expand {
          0% { opacity: 0; transform: scale(0.85); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: scale(1.2); }
        }
        @keyframes bldg-window-glow {
          0%, 100% { opacity: 0.45; }
          50% { opacity: 1; filter: drop-shadow(0 0 1.5px #facc15); }
        }
        .anim-bms-wave-1 {
          transform-origin: 32px 7px;
          animation: bms-wave-expand 2.6s ease-out infinite;
        }
        .anim-bms-wave-2 {
          transform-origin: 32px 7px;
          animation: bms-wave-expand 2.6s ease-out 0.9s infinite;
        }
        .anim-bldg-win-1 { animation: bldg-window-glow 3s ease-in-out infinite; }
        .anim-bldg-win-2 { animation: bldg-window-glow 3s ease-in-out 1.2s infinite; }
        .anim-bldg-link-1 {
          stroke-dasharray: 2 1.5;
          animation: bldg-link-flow 2s linear infinite;
        }
        .anim-bldg-link-2 {
          stroke-dasharray: 2 1.5;
          animation: bldg-link-flow 2s linear 0.6s infinite;
        }
        .app-card-item:hover .anim-bms-wave-1,
        .app-card-item:hover .anim-bms-wave-2 { animation-duration: 1.3s; }
        .app-card-item:hover .anim-bldg-link-1,
        .app-card-item:hover .anim-bldg-link-2 { animation-duration: 1s; }
      `}</style>
    </defs>
    {children(`url(#grad-${id})`)}
  </svg>
);

// 1. Industrial Automation & Control (PLC Rack, Status LEDs, Live HMI Graph)
export function IconIndustrialAutomation() {
  return (
    <SvgContainer id="ind-auto">
      {(stroke) => (
        <g stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Main PLC Rack */}
          <rect x="6" y="10" width="32" height="44" rx="3" />
          <line x1="17" y1="10" x2="17" y2="54" strokeWidth="1.8" />
          <line x1="27" y1="10" x2="27" y2="54" strokeWidth="1.8" />
          {/* Active Pulsing Status LEDs */}
          <circle cx="11.5" cy="16" r="1.3" fill={stroke} stroke="none" className="anim-led-1" />
          <circle cx="11.5" cy="21" r="1.3" fill={stroke} stroke="none" className="anim-led-2" />
          <circle cx="22" cy="16" r="1.3" fill={stroke} stroke="none" className="anim-led-1" />
          {/* Terminal Blocks */}
          <rect x="9.5" y="36" width="4" height="13" rx="1" strokeWidth="1.5" />
          <rect x="20" y="36" width="4" height="13" rx="1" strokeWidth="1.5" />
          <rect x="30" y="36" width="4" height="13" rx="1" strokeWidth="1.5" />
          {/* DIN Rail Mounts */}
          <line x1="3" y1="14" x2="6" y2="14" strokeWidth="2.5" />
          <line x1="3" y1="50" x2="6" y2="50" strokeWidth="2.5" />
          {/* Connected HMI Display */}
          <rect x="42" y="16" width="18" height="32" rx="2.5" />
          <rect x="45" y="20" width="12" height="15" rx="1" strokeWidth="1.5" />
          {/* Live Telemetry Waveform */}
          <path d="M 47 29 L 49 26 L 51 31 L 53 24 L 55 28" strokeWidth="1.6" className="anim-hmi-wave" />
          <circle cx="48" cy="41" r="1" fill={stroke} stroke="none" />
          <circle cx="51" cy="41" r="1" fill={stroke} stroke="none" />
          <circle cx="54" cy="41" r="1" fill={stroke} stroke="none" />
          <path d="M 38 32 L 42 32" strokeWidth="1.8" strokeDasharray="1.5 1.5" />
        </g>
      )}
    </SvgContainer>
  );
}

// 2. Power Electronics & Energy Management (Inverter Module, Cooling Fins & Flowing Sine Wave)
export function IconPowerElectronics() {
  return (
    <SvgContainer id="power-elec">
      {(stroke) => (
        <g stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Main Inverter Chassis */}
          <rect x="8" y="18" width="48" height="36" rx="4" />
          {/* Cooling Heat Sink Fins */}
          <line x1="14" y1="10" x2="14" y2="18" strokeWidth="2.5" />
          <line x1="21" y1="10" x2="21" y2="18" strokeWidth="2.5" />
          <line x1="28" y1="10" x2="28" y2="18" strokeWidth="2.5" />
          <line x1="36" y1="10" x2="36" y2="18" strokeWidth="2.5" />
          <line x1="43" y1="10" x2="43" y2="18" strokeWidth="2.5" />
          <line x1="50" y1="10" x2="50" y2="18" strokeWidth="2.5" />
          {/* Active Energy Sine Wave */}
          <path d="M 14 36 C 18 24, 24 24, 28 36 C 32 48, 38 48, 42 36 C 46 24, 50 28, 52 36" strokeWidth="2.4" className="anim-power-wave" />
          {/* Energy Conversion Spark Indicator */}
          <path d="M 50 26 L 46 34 H 51 L 48 42" strokeWidth="1.8" strokeLinejoin="miter" className="anim-power-spark" />
          {/* High Power Terminals */}
          <rect x="14" y="44" width="7" height="6" rx="1" strokeWidth="1.5" />
          <rect x="29" y="44" width="7" height="6" rx="1" strokeWidth="1.5" />
          <rect x="44" y="44" width="7" height="6" rx="1" strokeWidth="1.5" />
        </g>
      )}
    </SvgContainer>
  );
}

// 3. Electric Vehicles & Charging Infrastructure (EV Fast Charger, Active Lightning Bolt & CCS Cable)
export function IconElectricVehicles() {
  return (
    <SvgContainer id="ev-infra">
      {(stroke) => (
        <g stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Base Stand */}
          <line x1="8" y1="56" x2="42" y2="56" strokeWidth="3" />
          {/* Charging Pedestal Tower */}
          <rect x="12" y="8" width="26" height="48" rx="3.5" />
          {/* Screen with Pulsing Battery Lightning Bolt */}
          <rect x="17" y="14" width="16" height="14" rx="1.5" strokeWidth="1.8" />
          <path d="M 26 17 L 22 22 H 27 L 24 26" strokeWidth="1.8" strokeLinejoin="miter" className="anim-ev-bolt" />
          {/* Active Charge Status Bar */}
          <line x1="17" y1="33" x2="33" y2="33" strokeWidth="2.5" className="anim-ev-bar" />
          {/* Fast-Charging Cable Current Stream */}
          <path d="M 38 28 C 48 28, 48 50, 54 50 C 58 50, 59 46, 59 40" strokeWidth="2.5" className="anim-ev-cable" />
          {/* CCS Plug Handle */}
          <rect x="55" y="27" width="8" height="13" rx="2" strokeWidth="2" />
          <line x1="59" y1="21" x2="59" y2="27" strokeWidth="2.5" />
          <line x1="56" y1="21" x2="62" y2="21" strokeWidth="2.5" />
        </g>
      )}
    </SvgContainer>
  );
}

// 4. Solar & Renewable Energy (PV Solar Array with Shimmering Cells & Inverter Dial)
export function IconSolarRenewable() {
  return (
    <SvgContainer id="solar-energy">
      {(stroke) => (
        <g stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Angled Solar PV Array Frame */}
          <polygon points="8,36 24,10 56,10 40,36" strokeWidth="2" />
          {/* Solar Shimmering Grid Lines */}
          <line x1="24" y1="23" x2="48" y2="23" strokeWidth="1.6" className="anim-solar-grid-1" />
          <line x1="16" y1="10" x2="32" y2="36" strokeWidth="1.6" className="anim-solar-grid-2" />
          <line x1="32" y1="10" x2="48" y2="36" strokeWidth="1.6" className="anim-solar-grid-1" />
          {/* Mounting Stand */}
          <line x1="18" y1="36" x2="18" y2="52" strokeWidth="2.2" />
          <line x1="34" y1="36" x2="34" y2="52" strokeWidth="2.2" />
          <line x1="10" y1="52" x2="42" y2="52" strokeWidth="2.5" />
          {/* String Inverter Unit */}
          <rect x="44" y="34" width="16" height="20" rx="2.5" strokeWidth="2" />
          <circle cx="52" cy="41" r="2.8" strokeWidth="1.5" className="anim-inverter-meter" />
          <line x1="48" y1="48" x2="56" y2="48" strokeWidth="1.5" />
        </g>
      )}
    </SvgContainer>
  );
}

// 5. Embedded Systems & IoT (MCU SoC Clock Pulse & Radiating RF Wireless Waves)
export function IconEmbeddedIoT() {
  return (
    <SvgContainer id="embedded-iot">
      {(stroke) => (
        <g stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* PCB Base Outline */}
          <rect x="10" y="10" width="44" height="44" rx="4" />
          {/* Corner Solder Pads */}
          <circle cx="14" cy="14" r="1.2" fill={stroke} stroke="none" />
          <circle cx="50" cy="14" r="1.2" fill={stroke} stroke="none" />
          <circle cx="14" cy="50" r="1.2" fill={stroke} stroke="none" />
          <circle cx="50" cy="50" r="1.2" fill={stroke} stroke="none" />
          {/* Central Clock-Pulsing MCU SoC */}
          <rect x="22" y="22" width="20" height="20" rx="2" strokeWidth="2.2" className="anim-mcu-core" />
          {/* IC Contact Pins */}
          <line x1="26" y1="16" x2="26" y2="22" strokeWidth="1.8" />
          <line x1="32" y1="16" x2="32" y2="22" strokeWidth="1.8" />
          <line x1="38" y1="16" x2="38" y2="22" strokeWidth="1.8" />
          <line x1="26" y1="42" x2="26" y2="48" strokeWidth="1.8" />
          <line x1="32" y1="42" x2="32" y2="48" strokeWidth="1.8" />
          <line x1="38" y1="42" x2="38" y2="48" strokeWidth="1.8" />
          <line x1="16" y1="26" x2="22" y2="26" strokeWidth="1.8" />
          <line x1="16" y1="32" x2="22" y2="32" strokeWidth="1.8" />
          <line x1="16" y1="38" x2="22" y2="38" strokeWidth="1.8" />
          <line x1="42" y1="26" x2="48" y2="26" strokeWidth="1.8" />
          <line x1="42" y1="32" x2="48" y2="32" strokeWidth="1.8" />
          <line x1="42" y1="38" x2="48" y2="38" strokeWidth="1.8" />
          {/* Radiating Wireless RF Waves */}
          <path d="M 54 18 C 58 22, 58 28, 54 32" strokeWidth="2" className="anim-rf-wave-1" />
          <path d="M 58 13 C 64 20, 64 34, 58 41" strokeWidth="2" className="anim-rf-wave-2" />
        </g>
      )}
    </SvgContainer>
  );
}

// 6. Motion Control & Robotics (Articulated Robotic Arm Boom, Gripper & Conveyor Glide)
export function IconMotionRobotics() {
  return (
    <SvgContainer id="motion-robotics">
      {(stroke) => (
        <g stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Robotic Base Platform */}
          <path d="M 8 54 H 22 V 48 H 8 Z" />
          <rect x="11" y="37" width="8" height="11" rx="1.5" />
          {/* Articulated Joint 1 */}
          <circle cx="15" cy="30" r="3.5" strokeWidth="2" />
          <circle cx="15" cy="30" r="1.2" fill={stroke} stroke="none" />
          {/* Articulated Robotic Arm Boom */}
          <g className="anim-robot-boom">
            <line x1="18" y1="27" x2="42" y2="15" strokeWidth="2.5" />
            <circle cx="45" cy="13.5" r="3" strokeWidth="2" />
            <line x1="45" y1="16.5" x2="45" y2="23" strokeWidth="2" />
            {/* Gripper Tool */}
            <path d="M 40 29 L 43 24 H 47 L 50 29" strokeWidth="2" className="anim-robot-claw" />
            {/* Handled Payload */}
            <rect x="42.5" y="29" width="5" height="5" rx="1" strokeWidth="1.5" />
          </g>
          {/* Conveyor Assembly Track */}
          <rect x="25" y="45" width="35" height="9" rx="4.5" strokeWidth="2" />
          {/* 4 Conveyor Rollers */}
          <circle cx="31" cy="49.5" r="1.5" fill={stroke} stroke="none" />
          <circle cx="39" cy="49.5" r="1.5" fill={stroke} stroke="none" />
          <circle cx="47" cy="49.5" r="1.5" fill={stroke} stroke="none" />
          <circle cx="55" cy="49.5" r="1.5" fill={stroke} stroke="none" />
          {/* Glide Packages on Conveyor */}
          <rect x="30" y="38" width="6" height="7" rx="1" strokeWidth="1.6" className="anim-motion-box-1" />
          <rect x="51" y="38" width="6" height="7" rx="1" strokeWidth="1.6" className="anim-motion-box-2" />
        </g>
      )}
    </SvgContainer>
  );
}

// 7. Railway & Transportation Systems (Electric Locomotive, Catenary Current Stream & Rail Motion)
export function IconRailwayTransportation() {
  return (
    <SvgContainer id="railway-trans">
      {(stroke) => (
        <g stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Catenary Wire with Current Stream */}
          <line x1="10" y1="8" x2="54" y2="8" strokeWidth="2" className="anim-catenary-wire" />
          <polygon points="32,8 24,16 40,16" strokeWidth="1.8" />
          <line x1="32" y1="16" x2="32" y2="20" strokeWidth="2.2" />
          {/* Train Locomotive Front */}
          <path d="M 14 50 H 50 V 26 C 50 21, 44 20, 34 20 H 14 Z" strokeWidth="2" />
          {/* Windshields */}
          <rect x="18" y="26" width="12" height="8" rx="1" strokeWidth="1.6" />
          <rect x="34" y="26" width="12" height="8" rx="1" strokeWidth="1.6" />
          {/* Breathing Headlights */}
          <circle cx="19" cy="42" r="2" fill={stroke} stroke="none" className="anim-headlight" />
          <circle cx="45" cy="42" r="2" fill={stroke} stroke="none" className="anim-headlight" />
          {/* Bogie Frame */}
          <rect x="12" y="50" width="40" height="4" rx="1.5" strokeWidth="1.8" />
          {/* Steel Railway Track */}
          <g className="anim-train-track">
            <line x1="6" y1="58" x2="58" y2="58" strokeWidth="2.5" />
            <line x1="14" y1="58" x2="11" y2="62" strokeWidth="2" />
            <line x1="26" y1="58" x2="23" y2="62" strokeWidth="2" />
            <line x1="38" y1="58" x2="35" y2="62" strokeWidth="2" />
            <line x1="50" y1="58" x2="47" y2="62" strokeWidth="2" />
          </g>
        </g>
      )}
    </SvgContainer>
  );
}

// 8. Medical & Healthcare Equipment (Live Cardiac ECG Heartbeat Pulse & Pipette Dispenser)
export function IconMedicalHealthcare() {
  return (
    <SvgContainer id="medical-health">
      {(stroke) => (
        <g stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Patient Monitor with Live ECG Heartbeat Rhythm */}
          <rect x="8" y="20" width="18" height="16" rx="2.5" strokeWidth="2" />
          <path d="M 11 28 L 13 28 L 15 23 L 18 33 L 20 26 L 23 28" strokeWidth="1.9" className="anim-ecg-wave" />
          <path d="M 14 36 V 42 H 20 V 36" strokeWidth="1.8" />
          <line x1="11" y1="42" x2="23" y2="42" strokeWidth="2.2" />
          {/* Equipment Base Line */}
          <line x1="6" y1="52" x2="58" y2="52" strokeWidth="2.5" />
          {/* Dispensing Mast */}
          <path d="M 32 52 V 14 H 46" strokeWidth="2.5" />
          <rect x="43" y="14" width="6" height="6" rx="1" strokeWidth="1.8" />
          {/* Active Dispensing Head */}
          <g className="anim-med-dispense">
            <path d="M 42 24 L 45 19 H 47 L 50 24" strokeWidth="2" />
          </g>
          {/* Medical Conveyor Platform */}
          <rect x="36" y="39" width="24" height="8" rx="4" strokeWidth="2" />
          <circle cx="41" cy="43" r="1.2" fill={stroke} stroke="none" />
          <circle cx="48" cy="43" r="1.2" fill={stroke} stroke="none" />
          <circle cx="55" cy="43" r="1.2" fill={stroke} stroke="none" />
          {/* Medical Vials */}
          <rect x="38.5" y="32" width="4.5" height="7" rx="1" strokeWidth="1.5" />
          <rect x="46" y="32" width="4.5" height="7" rx="1" strokeWidth="1.5" />
          <rect x="53.5" y="32" width="4.5" height="7" rx="1" strokeWidth="1.5" />
        </g>
      )}
    </SvgContainer>
  );
}

// 9. Textile Machinery (Synchronous Mechanical Weaving Shuttles & Warp Vibration)
export function IconTextileMachinery() {
  return (
    <SvgContainer id="textile-machinery">
      {(stroke) => (
        <g stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Heavy Loom Frame */}
          <rect x="10" y="10" width="44" height="44" rx="2" strokeWidth="2.2" />
          {/* Corner Blocks */}
          <rect x="7" y="7" width="6" height="6" rx="1" fill={stroke} stroke="none" />
          <rect x="51" y="7" width="6" height="6" rx="1" fill={stroke} stroke="none" />
          <rect x="7" y="51" width="6" height="6" rx="1" fill={stroke} stroke="none" />
          <rect x="51" y="51" width="6" height="6" rx="1" fill={stroke} stroke="none" />
          {/* Top Warp Tension Reed Bar */}
          <rect x="13" y="13" width="38" height="8" rx="1" strokeWidth="1.8" />
          <line x1="18" y1="13" x2="18" y2="21" strokeWidth="1.4" className="anim-warp-line" />
          <line x1="24" y1="13" x2="24" y2="21" strokeWidth="1.4" className="anim-warp-line" />
          <line x1="30" y1="13" x2="30" y2="21" strokeWidth="1.4" className="anim-warp-line" />
          <line x1="36" y1="13" x2="36" y2="21" strokeWidth="1.4" className="anim-warp-line" />
          <line x1="42" y1="13" x2="42" y2="21" strokeWidth="1.4" className="anim-warp-line" />
          <line x1="46" y1="13" x2="46" y2="21" strokeWidth="1.4" className="anim-warp-line" />
          {/* Active Weaving Shuttles Darting Back and Forth */}
          <rect x="6" y="27" width="5" height="10" rx="1" fill={stroke} stroke="none" className="anim-shuttle-left" />
          <rect x="53" y="27" width="5" height="10" rx="1" fill={stroke} stroke="none" className="anim-shuttle-right" />
          {/* Jacquard Woven Bed */}
          <rect x="13" y="25" width="38" height="26" rx="1" strokeWidth="1.8" />
          {/* Jacquard Diamond Motif */}
          <polygon points="32,28 38,35 32,42 26,35" strokeWidth="1.8" />
          <circle cx="32" cy="35" r="1.4" fill={stroke} stroke="none" />
          <path d="M 18 32 L 21 35 L 18 38" strokeWidth="1.5" />
          <path d="M 46 32 L 43 35 L 46 38" strokeWidth="1.5" />
          <circle cx="21" cy="45" r="1.2" fill={stroke} stroke="none" />
          <circle cx="43" cy="45" r="1.2" fill={stroke} stroke="none" />
        </g>
      )}
    </SvgContainer>
  );
}

// 10. Elevator & Escalator Systems (Clean Vertical Elevator Shaft & Ascending Escalator)
export function IconElevatorEscalator() {
  return (
    <SvgContainer id="elevator-sys">
      {(stroke) => (
        <g stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* --- LEFT: Clean Elevator System --- */}
          {/* Vertical Elevator Shaft Rails */}
          <line x1="6" y1="8" x2="6" y2="56" strokeWidth="2" />
          <line x1="28" y1="8" x2="28" y2="56" strokeWidth="2" />
          {/* Top Hoist Sheave Pulley */}
          <circle cx="17" cy="8" r="3.5" strokeWidth="1.8" />
          <line x1="17" y1="11.5" x2="17" y2="18" strokeWidth="1.8" />
          {/* Gliding Elevator Car Cabin */}
          <g className="anim-elev-cabin">
            <rect x="8" y="18" width="18" height="24" rx="2.5" strokeWidth="2" />
            <line x1="17" y1="18" x2="17" y2="42" strokeWidth="1.6" />
            {/* Glowing Floor Direction Up Arrow */}
            <polygon points="17,21 14,25 20,25" fill={stroke} stroke="none" className="anim-elev-arrow" />
            {/* Door Windows */}
            <rect x="10" y="27" width="5" height="10" rx="1" strokeWidth="1.2" />
            <rect x="19" y="27" width="5" height="10" rx="1" strokeWidth="1.2" />
          </g>

          {/* --- RIGHT: Clean Escalator System --- */}
          {/* Inclined Handrail */}
          <path d="M 34 52 L 42 52 L 52 20 L 60 20" strokeWidth="2.4" />
          {/* Escalator Structural Base Truss */}
          <path d="M 36 56 L 44 56 L 54 24 L 60 24" strokeWidth="1.8" />
          {/* Clean Stepped Escalator Treads */}
          <path d="M 39 52 L 39 48 L 43 48 L 43 44 L 47 44 L 47 40 L 51 40 L 51 36 L 55 36 L 55 20" strokeWidth="1.8" />
          {/* Motion Step Direction Pulse Indicator */}
          <path d="M 45 32 L 49 28 L 53 32" strokeWidth="1.8" className="anim-escalator-arrow" />
        </g>
      )}
    </SvgContainer>
  );
}

// 11. Packaging & Processing Machinery (Automated Pneumatic Sealing Ram & Photoelectric Sensor)
export function IconPackagingMachinery() {
  return (
    <SvgContainer id="packaging-mach">
      {(stroke) => (
        <g stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Overhead Sealing Rig */}
          <rect x="18" y="8" width="28" height="10" rx="2.5" strokeWidth="2" />
          {/* Active Pneumatic Sealing Ram Press */}
          <g className="anim-sealing-ram">
            <rect x="29" y="18" width="6" height="10" rx="1" strokeWidth="1.8" />
            <line x1="24" y1="28" x2="40" y2="28" strokeWidth="2.5" />
          </g>
          {/* Photoelectric Sensor Beam */}
          <line x1="10" y1="24" x2="10" y2="46" strokeWidth="2.5" />
          <circle cx="10" cy="30" r="1.8" fill={stroke} stroke="none" />
          <line x1="12" y1="30" x2="24" y2="30" strokeWidth="1.6" className="anim-sensor-laser" />
          {/* Carton Package Box */}
          <rect x="24" y="31" width="18" height="13" rx="1.5" strokeWidth="2" />
          <path d="M 24 35 H 42" strokeWidth="1.4" />
          <line x1="33" y1="31" x2="33" y2="44" strokeWidth="1.4" />
          {/* Conveyor Line */}
          <rect x="6" y="44" width="52" height="9" rx="4.5" strokeWidth="2" />
          <circle cx="14" cy="48.5" r="1.5" fill={stroke} stroke="none" />
          <circle cx="23" cy="48.5" r="1.5" fill={stroke} stroke="none" />
          <circle cx="32" cy="48.5" r="1.5" fill={stroke} stroke="none" />
          <circle cx="41" cy="48.5" r="1.5" fill={stroke} stroke="none" />
          <circle cx="50" cy="48.5" r="1.5" fill={stroke} stroke="none" />
        </g>
      )}
    </SvgContainer>
  );
}

// 12. Pharmaceutical & Laboratory Machinery (Rotating Industrial Spur Gear, Articulated Robotic Arm & Indexing Boxes)
export function IconPharmaLaboratory() {
  return (
    <SvgContainer id="pharma-mach">
      {(stroke) => (
        <g stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Smooth Rotating 8-Tooth Industrial Spur Gear */}
          <g className="anim-pharma-gear">
            <circle cx="18" cy="38" r="10" strokeWidth="2" />
            <circle cx="18" cy="38" r="3.5" strokeWidth="1.8" />
            <line x1="18" y1="24" x2="18" y2="28" strokeWidth="2.8" />
            <line x1="18" y1="48" x2="18" y2="52" strokeWidth="2.8" />
            <line x1="4" y1="38" x2="8" y2="38" strokeWidth="2.8" />
            <line x1="28" y1="38" x2="32" y2="38" strokeWidth="2.8" />
            <line x1="8" y1="28" x2="11" y2="31" strokeWidth="2.8" />
            <line x1="25" y1="45" x2="28" y2="48" strokeWidth="2.8" />
            <line x1="8" y1="48" x2="11" y2="45" strokeWidth="2.8" />
            <line x1="25" y1="31" x2="28" y2="28" strokeWidth="2.8" />
          </g>

          {/* Articulated Robotic Dispensing Arm */}
          <circle cx="26" cy="18" r="3.5" strokeWidth="2" />
          <circle cx="26" cy="18" r="1.2" fill={stroke} stroke="none" />
          <g className="anim-pharma-arm">
            <line x1="29.5" y1="18" x2="44" y2="18" strokeWidth="2.2" />
            <circle cx="47" cy="18" r="3" strokeWidth="2" />
            <line x1="47" y1="21" x2="47" y2="25" strokeWidth="2" />
            {/* Robotic Gripper Claw */}
            <path d="M 43 32 C 43 27, 47 25, 47 25 C 47 25, 51 27, 51 32" strokeWidth="2" className="anim-pharma-claw" />
          </g>

          {/* Pill-Shaped Conveyor Track */}
          <rect x="28" y="44" width="32" height="9" rx="4.5" strokeWidth="2" />
          <line x1="33" y1="48.5" x2="55" y2="48.5" strokeWidth="1.6" />

          {/* 3 Indexing Pharmaceutical Box Containers */}
          <g className="anim-pharma-boxes">
            <rect x="32" y="37" width="6" height="7" rx="0.8" strokeWidth="1.8" />
            <line x1="33.5" y1="39.5" x2="36.5" y2="39.5" strokeWidth="1.2" />

            <rect x="41" y="37" width="6" height="7" rx="0.8" strokeWidth="1.8" />
            <line x1="42.5" y1="39.5" x2="45.5" y2="39.5" strokeWidth="1.2" />

            <rect x="50" y="37" width="6" height="7" rx="0.8" strokeWidth="1.8" />
            <line x1="51.5" y1="39.5" x2="54.5" y2="39.5" strokeWidth="1.2" />
          </g>
        </g>
      )}
    </SvgContainer>
  );
}

// 13. CNC, Laser & Cutting Machinery (Rotating Gear, Firing Optical Laser Beam & Radiating Sparks)
export function IconCNCLaser() {
  return (
    <SvgContainer id="cnc-laser">
      {(stroke) => (
        <g stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Smooth Rotating Drive Gear */}
          <g className="anim-cnc-gear">
            <circle cx="25" cy="27" r="9" strokeWidth="2" />
            <circle cx="25" cy="27" r="3.2" strokeWidth="1.6" />
            <line x1="25" y1="15" x2="25" y2="18" strokeWidth="2.5" />
            <line x1="25" y1="36" x2="25" y2="39" strokeWidth="2.5" />
            <line x1="13" y1="27" x2="16" y2="27" strokeWidth="2.5" />
            <line x1="34" y1="27" x2="37" y2="27" strokeWidth="2.5" />
            <line x1="16.5" y1="18.5" x2="18.5" y2="20.5" strokeWidth="2.5" />
            <line x1="31.5" y1="33.5" x2="33.5" y2="35.5" strokeWidth="2.5" />
            <line x1="16.5" y1="35.5" x2="18.5" y2="33.5" strokeWidth="2.5" />
            <line x1="31.5" y1="20.5" x2="33.5" y2="18.5" strokeWidth="2.5" />
          </g>

          {/* CNC Precision Laser Optical Head Unit */}
          <rect x="34" y="16" width="16" height="15" rx="2" strokeWidth="2.2" />
          {/* Conical Laser Optical Nozzle */}
          <polygon points="36,31 48,31 42,41" strokeWidth="2.2" />
          {/* High Energy Firing Laser Cutting Beam */}
          <line x1="42" y1="41" x2="42" y2="46" strokeWidth="2.6" className="anim-laser-beam" />
          {/* Radiant Molten Cutting Sparks Bursting */}
          <line x1="36" y1="44" x2="33" y2="41" strokeWidth="1.8" className="anim-spark-l" />
          <line x1="42" y1="44" x2="42" y2="39" strokeWidth="1.8" className="anim-laser-beam" />
          <line x1="48" y1="44" x2="51" y2="41" strokeWidth="1.8" className="anim-spark-r" />
          {/* Base Workpiece Metal Plate Platform */}
          <polygon points="12,46 54,46 58,54 8,54" strokeWidth="2.2" />
          <circle cx="16" cy="50" r="1.2" fill={stroke} stroke="none" />
          <circle cx="50" cy="50" r="1.2" fill={stroke} stroke="none" />
        </g>
      )}
    </SvgContainer>
  );
}

// 14. Building Automation & Smart Infrastructure (Radiating Telemetry Waves & Smart Lighting Windows)
export function IconBuildingAutomation() {
  return (
    <SvgContainer id="bldg-auto">
      {(stroke) => (
        <g stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Smart Building Facade */}
          <rect x="10" y="16" width="28" height="40" rx="2.5" strokeWidth="2" />
          {/* Smart Window Matrix with Subtly Automating Occupancy Lighting */}
          <rect x="15" y="22" width="5" height="5" rx="1" strokeWidth="1.5" className="anim-bldg-win-1" />
          <rect x="23" y="22" width="5" height="5" rx="1" strokeWidth="1.5" className="anim-bldg-win-2" />
          <rect x="31" y="22" width="5" height="5" rx="1" strokeWidth="1.5" className="anim-bldg-win-1" />
          <rect x="15" y="31" width="5" height="5" rx="1" strokeWidth="1.5" className="anim-bldg-win-2" />
          <rect x="23" y="31" width="5" height="5" rx="1" strokeWidth="1.5" className="anim-bldg-win-1" />
          <rect x="31" y="31" width="5" height="5" rx="1" strokeWidth="1.5" className="anim-bldg-win-2" />
          <rect x="15" y="40" width="5" height="5" rx="1" strokeWidth="1.5" className="anim-bldg-win-1" />
          <rect x="23" y="40" width="5" height="5" rx="1" strokeWidth="1.5" className="anim-bldg-win-2" />
          <rect x="31" y="40" width="5" height="5" rx="1" strokeWidth="1.5" className="anim-bldg-win-1" />
          {/* Central BMS Intelligent Controller */}
          <rect x="42" y="24" width="16" height="24" rx="2.5" strokeWidth="2" />
          <circle cx="50" cy="31" r="2.8" strokeWidth="1.5" />
          <line x1="46" y1="39" x2="54" y2="39" strokeWidth="1.5" />
          <line x1="46" y1="43" x2="54" y2="43" strokeWidth="1.5" />
          {/* Rooftop Wireless Antenna & Radiating Telemetry Waves */}
          <line x1="24" y1="12" x2="24" y2="16" strokeWidth="2" />
          <circle cx="24" cy="11" r="1.2" fill={stroke} stroke="none" />
          <path d="M 36 10 C 40 13, 40 17, 36 20" strokeWidth="1.8" className="anim-bms-wave-1" />
          <path d="M 40 6 C 46 12, 46 22, 40 27" strokeWidth="1.8" className="anim-bms-wave-2" />
        </g>
      )}
    </SvgContainer>
  );
}
