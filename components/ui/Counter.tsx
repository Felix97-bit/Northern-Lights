"use client";

import { useEffect, useRef, useState } from "react";

type Props = { value: string; duration?: number };

export default function Counter({ value, duration = 1600 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const startedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Parse leading numeric portion (e.g. "7,500+" -> 7500, suffix "+")
    const match = value.replace(/,/g, "").match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const target = parseFloat(match[1]);
    const suffix = match[2];

    if (reduced) {
      setDisplay(value);
      return;
    }

    setDisplay("0" + suffix);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              const current = Math.floor(target * eased);
              const formatted =
                target >= 1000 ? current.toLocaleString("en-CA") : String(current);
              setDisplay(formatted + suffix);
              if (t < 1) requestAnimationFrame(tick);
              else setDisplay(value);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {display}
    </span>
  );
}
