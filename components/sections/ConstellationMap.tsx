"use client";

import Link from "next/link";
import { useState } from "react";
import { services } from "@/lib/content/services";

export default function ConstellationMap() {
  const [hover, setHover] = useState<string | null>(null);

  // Connect every node to every other for a full constellation
  const lines: { from: string; to: string; x1: number; y1: number; x2: number; y2: number }[] = [];
  for (let i = 0; i < services.length; i++) {
    for (let j = i + 1; j < services.length; j++) {
      lines.push({
        from: services[i].slug,
        to: services[j].slug,
        x1: services[i].node.x,
        y1: services[i].node.y,
        x2: services[j].node.x,
        y2: services[j].node.y
      });
    }
  }

  return (
    <div className="relative aspect-[16/9] w-full max-w-5xl mx-auto rounded-3xl border border-steel/20 bg-shadow/50 overflow-hidden">
      <div className="absolute inset-0 bg-aurora-glow opacity-40 pointer-events-none" aria-hidden />
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" aria-hidden>
        <defs>
          <linearGradient id="line-aurora" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00E5A0" />
            <stop offset="100%" stopColor="#5B8DEF" />
          </linearGradient>
        </defs>
        {lines.map((l, i) => {
          const active = hover === l.from || hover === l.to;
          return (
            <line
              key={i}
              x1={l.x1}
              y1={l.y1}
              x2={l.x2}
              y2={l.y2}
              stroke={active ? "url(#line-aurora)" : "#4A5563"}
              strokeOpacity={active ? 0.9 : 0.18}
              strokeWidth={active ? 0.18 : 0.08}
              vectorEffect="non-scaling-stroke"
              style={{ transition: "all 250ms ease" }}
            />
          );
        })}
      </svg>

      {services.map((s) => (
        <Link
          key={s.slug}
          href={`/services/${s.slug}`}
          className="absolute group"
          style={{ left: `${s.node.x}%`, top: `${s.node.y}%`, transform: "translate(-50%, -50%)" }}
          onMouseEnter={() => setHover(s.slug)}
          onMouseLeave={() => setHover(null)}
          onFocus={() => setHover(s.slug)}
          onBlur={() => setHover(null)}
        >
          <div className="relative">
            <span className="absolute inset-0 rounded-full bg-aurora-green blur-xl opacity-30 group-hover:opacity-80 transition-opacity" />
            <span className="relative block w-3 h-3 md:w-4 md:h-4 rounded-full bg-aurora-green ring-2 ring-aurora-green/30 group-hover:ring-aurora-green/70 transition" />
          </div>
          <span className="absolute left-1/2 -translate-x-1/2 mt-3 whitespace-nowrap text-[11px] md:text-xs mono-label text-frost/90 group-hover:text-aurora-green transition-colors">
            {s.shortName}
          </span>
        </Link>
      ))}
    </div>
  );
}
