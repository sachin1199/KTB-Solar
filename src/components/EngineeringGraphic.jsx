export default function EngineeringGraphic() {
  return (
    <svg viewBox="0 0 600 480" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="470" cy="90" r="90" fill="url(#sunGlow)" className="motion-glow" />
      <defs>
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8A33D" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#E8A33D" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="panelGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6FC3E8" />
          <stop offset="100%" stopColor="#1B6FB8" />
        </linearGradient>
      </defs>

      {/* GTA-style skyline, grounding the "based in Toronto" fact */}
      <g fill="#12314F">
        <rect x="20" y="300" width="40" height="150" />
        <rect x="65" y="260" width="35" height="190" />
        <rect x="105" y="330" width="30" height="120" />
        <rect x="140" y="220" width="45" height="230" />
        <rect x="190" y="280" width="32" height="170" />
        <polygon points="162,220 162,180 172,190 182,180 182,220" />
      </g>

      {/* connecting line — the engineering/design bridge from site to build */}
      <path
        d="M 220 340 C 280 340, 300 260, 360 240"
        stroke="#E8A33D"
        strokeWidth="2"
        strokeDasharray="4 6"
        fill="none"
        opacity="0.6"
      />

      {/* PV + BESS grid, right side */}
      <g transform="translate(340,150) rotate(-8)">
        {[0, 1, 2].map((row) =>
          [0, 1, 2, 3].map((col) => (
            <rect
              key={`${row}-${col}`}
              x={col * 48}
              y={row * 62}
              width="42"
              height="54"
              rx="3"
              fill="url(#panelGrad)"
              opacity={0.9 - row * 0.15}
            />
          ))
        )}
      </g>
    </svg>
  )
}
