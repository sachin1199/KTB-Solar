
export default function RooftopGraphic({ className }) {
  return (
    <svg viewBox="0 0 1600 500" className={className} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="roofPanel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6FC3E8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#1B6FB8" stopOpacity="0.9" />
        </linearGradient>
        <radialGradient id="sunGlowRoof" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8A33D" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#E8A33D" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="1300" cy="80" r="140" fill="url(#sunGlowRoof)" />

      {/* distant rooftops */}
      <g fill="#0D2740" opacity="0.5">
        <polygon points="0,420 120,340 240,420" />
        <polygon points="200,420 340,320 480,420" />
        <polygon points="1150,420 1280,330 1420,420" />
        <polygon points="1350,420 1470,350 1600,420" />
      </g>

      {/* main rooftop, angled, with panel array */}
      <g transform="translate(300,150)">
        <polygon points="0,180 500,80 1000,180 1000,260 0,260" fill="#12314F" />
        {/* panel rows on the angled roof */}
        {[0, 1, 2].map((row) =>
          [0, 1, 2, 3, 4, 5].map((col) => (
            <rect
              key={`${row}-${col}`}
              x={60 + col * 145}
              y={110 - row * 24 + Math.abs(col - 2.5) * 4}
              width="120"
              height="18"
              rx="2"
              fill="url(#roofPanel)"
              opacity={0.95 - row * 0.12}
            />
          ))
        )}
      </g>
    </svg>
  )
}
