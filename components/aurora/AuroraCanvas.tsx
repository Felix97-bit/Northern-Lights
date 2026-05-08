"use client";

import { useEffect, useRef } from "react";

type Star = { x: number; y: number; r: number; baseAlpha: number; phase: number; speed: number };

export default function AuroraCanvas({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let stars: Star[] = [];
    let raf = 0;
    let start = performance.now();

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // (re)build starfield — 200 dim stars
      stars = Array.from({ length: 200 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height * 0.85,
        r: Math.random() * 1.2 + 0.2,
        baseAlpha: Math.random() * 0.5 + 0.15,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.6 + 0.2
      }));
    };

    // Pseudo-Perlin via stacked sines (cheap, smooth, no dependencies)
    const noise = (x: number, t: number, k: number) =>
      Math.sin(x * 0.9 + t * 0.7 + k) * 0.5 +
      Math.sin(x * 1.7 + t * 1.1 + k * 1.3) * 0.3 +
      Math.sin(x * 2.6 + t * 0.4 + k * 0.7) * 0.2;

    const drawStaticFallback = () => {
      // dark gradient + faint aurora glow at horizon
      const g = ctx.createLinearGradient(0, 0, 0, height);
      g.addColorStop(0, "#050608");
      g.addColorStop(0.6, "#0A0C10");
      g.addColorStop(1, "#0A0C10");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);

      const r = ctx.createRadialGradient(width * 0.5, height * 0.55, 50, width * 0.5, height * 0.55, height * 0.7);
      r.addColorStop(0, "rgba(0,229,160,0.18)");
      r.addColorStop(0.45, "rgba(91,141,239,0.08)");
      r.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = r;
      ctx.fillRect(0, 0, width, height);

      stars.forEach((s) => {
        ctx.fillStyle = `rgba(232,238,242,${s.baseAlpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const drawFrame = (now: number) => {
      const t = (now - start) / 1000; // seconds

      // base bg
      const g = ctx.createLinearGradient(0, 0, 0, height);
      g.addColorStop(0, "#050608");
      g.addColorStop(1, "#0A0C10");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);

      // stars
      stars.forEach((s) => {
        const tw = s.baseAlpha + Math.sin(t * s.speed + s.phase) * 0.25;
        ctx.fillStyle = `rgba(232,238,242,${Math.max(0, Math.min(1, tw))})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Three aurora ribbons drifting horizontally
      const ribbons = [
        { color: [0, 229, 160], yBase: height * 0.45, amp: 60, k: 0, alpha: 0.45 },
        { color: [78, 226, 200], yBase: height * 0.55, amp: 75, k: 1.7, alpha: 0.35 },
        { color: [91, 141, 239], yBase: height * 0.62, amp: 90, k: 3.1, alpha: 0.3 }
      ];

      ctx.globalCompositeOperation = "lighter";
      ribbons.forEach((rib) => {
        ctx.beginPath();
        const step = 8;
        const drift = (t * 5) % width; // ~5px/s drift
        for (let x = -50; x <= width + 50; x += step) {
          const nx = (x + drift) / 200;
          const y = rib.yBase + noise(nx, t * 0.3, rib.k) * rib.amp;
          if (x === -50) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.lineTo(width + 50, height + 200);
        ctx.lineTo(-50, height + 200);
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, rib.yBase - 200, 0, rib.yBase + 200);
        const [r, gC, b] = rib.color;
        grad.addColorStop(0, `rgba(${r},${gC},${b},0)`);
        grad.addColorStop(0.5, `rgba(${r},${gC},${b},${rib.alpha})`);
        grad.addColorStop(1, `rgba(${r},${gC},${b},0)`);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // soft violet hint
      const vg = ctx.createRadialGradient(width * 0.7, height * 0.25, 50, width * 0.7, height * 0.25, height * 0.6);
      vg.addColorStop(0, "rgba(139,92,246,0.08)");
      vg.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = "source-over";

      // soft vignette at bottom
      const vignette = ctx.createLinearGradient(0, height * 0.5, 0, height);
      vignette.addColorStop(0, "rgba(10,12,16,0)");
      vignette.addColorStop(1, "rgba(10,12,16,0.85)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      raf = requestAnimationFrame(drawFrame);
    };

    resize();
    if (reduced) {
      drawStaticFallback();
    } else {
      raf = requestAnimationFrame(drawFrame);
    }

    const ro = new ResizeObserver(() => {
      resize();
      if (reduced) drawStaticFallback();
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full ${className}`}
    />
  );
}
