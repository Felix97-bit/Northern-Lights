type Props = { className?: string; height?: number };

export default function Logo({ className = "", height = 40 }: Props) {
  // Aspect ratio width:height = 5.6:1
  const width = height * 5.6;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 280 50"
      className={className}
      aria-label="Northern Lights Appraisals"
      role="img"
    >
      <defs>
        <linearGradient id="logo-aurora" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00E5A0" />
          <stop offset="50%" stopColor="#4EE2C8" />
          <stop offset="100%" stopColor="#5B8DEF" />
        </linearGradient>
      </defs>
      {/* Aurora ribbons + mountain icon */}
      <g transform="translate(2,4)">
        <path d="M2 10 Q 14 0 26 8 T 46 10" stroke="#00E5A0" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <path d="M2 16 Q 14 6 26 14 T 46 16" stroke="#4EE2C8" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.85" />
        <path d="M2 22 Q 14 12 26 20 T 46 22" stroke="#5B8DEF" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.7" />
        <polygon points="14,38 24,22 34,38" fill="#E8EEF2" />
        <polygon points="20,38 28,28 36,38" fill="#9BA8B5" opacity="0.7" />
      </g>
      <g transform="translate(60,0)">
        <text
          x="0"
          y="22"
          fontFamily="var(--font-fraunces), serif"
          fontWeight="400"
          fontSize="20"
          letterSpacing="-0.02em"
          fill="#E8EEF2"
        >
          NORTHERN LIGHTS
        </text>
        <text
          x="0"
          y="40"
          fontFamily="var(--font-jetbrains), monospace"
          fontWeight="500"
          fontSize="9"
          letterSpacing="0.32em"
          fill="url(#logo-aurora)"
        >
          APPRAISALS
        </text>
      </g>
    </svg>
  );
}
