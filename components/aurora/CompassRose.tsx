type Props = { size?: number; className?: string; opacity?: number };

export default function CompassRose({ size = 240, className = "", opacity = 0.18 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cr-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00E5A0" />
          <stop offset="50%" stopColor="#4EE2C8" />
          <stop offset="100%" stopColor="#5B8DEF" />
        </linearGradient>
      </defs>
      <circle cx="120" cy="120" r="100" fill="none" stroke="url(#cr-grad)" strokeWidth="0.5" />
      <circle cx="120" cy="120" r="80" fill="none" stroke="#4A5563" strokeWidth="0.4" />
      <circle cx="120" cy="120" r="40" fill="none" stroke="#4A5563" strokeWidth="0.3" />
      {/* N S E W */}
      <g stroke="url(#cr-grad)" strokeWidth="0.6">
        <line x1="120" y1="20" x2="120" y2="220" />
        <line x1="20" y1="120" x2="220" y2="120" />
      </g>
      <g stroke="#4A5563" strokeWidth="0.4">
        <line x1="49" y1="49" x2="191" y2="191" />
        <line x1="191" y1="49" x2="49" y2="191" />
      </g>
      {/* Cardinal arrowheads */}
      <polygon points="120,20 116,32 124,32" fill="url(#cr-grad)" />
      <polygon points="120,220 116,208 124,208" fill="#4A5563" />
      <text x="120" y="14" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#9BA8B5">
        N
      </text>
      <text x="120" y="234" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#9BA8B5">
        S
      </text>
      <text x="232" y="124" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#9BA8B5">
        E
      </text>
      <text x="8" y="124" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#9BA8B5">
        W
      </text>
    </svg>
  );
}
