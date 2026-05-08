// Decorative SVG portrait placeholder — duotone aurora silhouette.
// Replace by swapping the hosting <div> with next/image once real photos are supplied.
export default function TeamPortrait({ name }: { name: string }) {
  // Hash-derived hue so each member gets a slightly different aurora flavour
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) | 0;
  const seed = Math.abs(h) % 360;
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
  const idA = `tp-${seed}-a`;
  const idB = `tp-${seed}-b`;

  return (
    <div className="absolute inset-0">
      <svg viewBox="0 0 400 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <defs>
          <linearGradient id={idA} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0A0C10" />
            <stop offset="60%" stopColor="#11141B" />
            <stop offset="100%" stopColor="#1A1F2B" />
          </linearGradient>
          <radialGradient id={idB} cx="50%" cy="35%" r="60%">
            <stop offset="0%" stopColor="rgba(0,229,160,0.35)" />
            <stop offset="60%" stopColor="rgba(91,141,239,0.18)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
        </defs>
        <rect width="400" height="400" fill={`url(#${idA})`} />
        <rect width="400" height="400" fill={`url(#${idB})`} />
        {/* Soft figure silhouette */}
        <g opacity="0.55" fill="#050608">
          <circle cx="200" cy="155" r="60" />
          <path d="M80 400 C 80 290 130 230 200 230 C 270 230 320 290 320 400 Z" />
        </g>
        {/* Aurora ribbon overlay */}
        <g style={{ mixBlendMode: "screen" }} opacity="0.5">
          <path d="M0 90 Q 100 50 200 80 T 400 100" stroke="#00E5A0" strokeWidth="2" fill="none" />
          <path d="M0 130 Q 100 90 200 120 T 400 140" stroke="#5B8DEF" strokeWidth="2" fill="none" opacity="0.7" />
        </g>
        <text
          x="200"
          y="370"
          textAnchor="middle"
          fontFamily="var(--font-jetbrains), monospace"
          fontSize="14"
          letterSpacing="0.32em"
          fill="rgba(232,238,242,0.4)"
        >
          {initials}
        </text>
      </svg>
    </div>
  );
}
