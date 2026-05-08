"use client";

import { useRef, MouseEvent, ReactNode } from "react";
import Link from "next/link";

type Props = {
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
};

export default function MagneticButton({
  href,
  variant = "primary",
  className = "",
  children,
  onClick,
  type = "button",
  ariaLabel
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  const onMove = (e: MouseEvent) => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    const dist = Math.hypot(x, y);
    if (dist < 80) {
      const pull = 0.06; // pulls 3-5px
      el.style.transform = `translate(${x * pull}px, ${y * pull}px)`;
    } else {
      el.style.transform = "translate(0,0)";
    }
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const baseClass = variant === "primary" ? "btn-primary" : "btn-ghost";
  const inner = (
    <span
      ref={ref}
      className={`${baseClass} ${className}`}
      style={{ transition: "transform 220ms ease, box-shadow 350ms ease, background-position 1.2s ease" }}
    >
      {children}
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="inline-block"
        aria-label={ariaLabel}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="inline-block bg-transparent border-0 p-0"
      aria-label={ariaLabel}
    >
      {inner}
    </button>
  );
}
