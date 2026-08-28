
export default function SLDGraphic() {
  return (
    <svg viewBox="0 0 800 320" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustrative diagram of a solar PV and battery storage system layout">
      <defs>
        <linearGradient id="sldPanel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6FC3E8" />
          <stop offset="100%" stopColor="#1B6FB8" />
        </linearGradient>
      </defs>

      {/* connecting lines drawn first so boxes sit on top */}
      <g stroke="#1B6FB8" strokeWidth="2" fill="none">
        <line x1="150" y1="120" x2="230" y2="120" />
        <line x1="330" y1="120" x2="410" y2="120" />
        <line x1="470" y1="120" x2="470" y2="90" />
        <line x1="470" y1="90" x2="600" y2="90" />
        <line x1="470" y1="150" x2="470" y2="220" />
        <line x1="470" y1="220" x2="600" y2="220" />
      </g>

      {/* PV array */}
      <g transform="translate(30,70)">
        {[0, 1].map((row) =>
          [0, 1, 2].map((col) => (
            <rect
              key={`${row}-${col}`}
              x={col * 42}
              y={row * 45}
              width="36"
              height="38"
              rx="2"
              fill="url(#sldPanel)"
              opacity={0.9 - row * 0.15}
            />
          ))
        )}
        <text x="60" y="115" textAnchor="middle" className="fill-slate text-[13px] font-mono">PV Array</text>
      </g>

      {/* Inverter */}
      <g transform="translate(230,90)">
        <rect width="100" height="60" rx="6" fill="none" stroke="#0A1F33" strokeWidth="2" />
        <path d="M 15 30 L 30 15 L 45 45 L 60 15 L 75 30" fill="none" stroke="#E8A33D" strokeWidth="2" />
        <text x="50" y="80" textAnchor="middle" className="fill-slate text-[13px] font-mono">Inverter</text>
      </g>

      {/* Battery / BESS */}
      <g transform="translate(410,90)">
        <rect width="60" height="60" rx="6" fill="none" stroke="#0A1F33" strokeWidth="2" />
        <rect x="15" y="12" width="30" height="36" rx="2" fill="#E8A33D" opacity="0.85" />
        <text x="30" y="80" textAnchor="middle" className="fill-slate text-[13px] font-mono">BESS</text>
      </g>

      {/* Home load */}
      <g transform="translate(600,55)">
        <polygon points="35,0 70,25 70,70 0,70 0,25" fill="none" stroke="#0A1F33" strokeWidth="2" />
        <text x="35" y="95" textAnchor="middle" className="fill-slate text-[13px] font-mono">Home Load</text>
      </g>

      {/* Grid */}
      <g transform="translate(600,190)">
        <rect width="70" height="45" rx="6" fill="none" stroke="#0A1F33" strokeWidth="2" />
        <line x1="10" y1="10" x2="60" y2="35" stroke="#0A1F33" strokeWidth="2" />
        <line x1="10" y1="35" x2="60" y2="10" stroke="#0A1F33" strokeWidth="2" />
        <text x="35" y="65" textAnchor="middle" className="fill-slate text-[13px] font-mono">Utility Grid</text>
      </g>
    </svg>
  )
}
