
export default function TeamGraphic() {
  return (
    <svg viewBox="0 0 500 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of an engineering team's remote workspace">
      <defs>
        <linearGradient id="screenGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6FC3E8" />
          <stop offset="100%" stopColor="#1B6FB8" />
        </linearGradient>
      </defs>

      <rect width="500" height="400" fill="#0D2740" />

      {/* three workstations, simplified */}
      {[60, 190, 320].map((x, i) => (
        <g key={x} transform={`translate(${x},130)`} opacity={1 - i * 0.12}>
          {/* monitor */}
          <rect x="0" y="0" width="120" height="80" rx="4" fill="#12314F" stroke="#1A4266" strokeWidth="2" />
          {/* screen content - abstract design lines, suggesting engineering work */}
          <rect x="10" y="10" width="100" height="60" rx="2" fill="#0A1F33" />
          <line x1="18" y1="24" x2="60" y2="24" stroke="url(#screenGrad)" strokeWidth="3" strokeLinecap="round" />
          <line x1="18" y1="36" x2="90" y2="36" stroke="url(#screenGrad)" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
          <line x1="18" y1="48" x2="75" y2="48" stroke="#E8A33D" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
          <rect x="70" y="14" width="26" height="26" rx="2" fill="none" stroke="url(#screenGrad)" strokeWidth="2" />
          {/* monitor stand */}
          <rect x="52" y="80" width="16" height="14" fill="#1A4266" />
          <rect x="30" y="94" width="60" height="6" rx="3" fill="#1A4266" />
          {/* desk */}
          <rect x="-20" y="100" width="160" height="8" rx="2" fill="#12314F" />
        </g>
      ))}

      {/* connecting dashed lines suggesting remote/networked collaboration */}
      <path d="M 120 170 Q 155 190 190 170" stroke="#E8A33D" strokeWidth="1.5" strokeDasharray="3 5" fill="none" opacity="0.5" />
      <path d="M 250 170 Q 285 190 320 170" stroke="#E8A33D" strokeWidth="1.5" strokeDasharray="3 5" fill="none" opacity="0.5" />
    </svg>
  )
}
