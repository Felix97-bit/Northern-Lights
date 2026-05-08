"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorTrail() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (reduced || isTouch) return;

    setEnabled(true);

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const tick = () => {
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x - 80}px, ${y - 80}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[1] hidden md:block mix-blend-screen"
      style={{
        width: 160,
        height: 160,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(0,229,160,0.32) 0%, rgba(91,141,239,0.18) 35%, rgba(0,0,0,0) 70%)",
        filter: "blur(8px)"
      }}
    />
  );
}
