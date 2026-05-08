import { ReactNode } from "react";

export default function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`eyebrow flex items-center gap-3 ${className}`}>
      <span className="inline-block w-6 h-px bg-aurora-green" />
      {children}
    </span>
  );
}
