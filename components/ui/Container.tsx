import { ReactNode } from "react";

export default function Container({
  children,
  className = "",
  size = "xl"
}: {
  children: ReactNode;
  className?: string;
  size?: "md" | "lg" | "xl" | "narrow";
}) {
  const widths = {
    narrow: "max-w-3xl",
    md: "max-w-4xl",
    lg: "max-w-5xl",
    xl: "max-w-content"
  };
  return (
    <div className={`mx-auto w-full px-6 md:px-10 ${widths[size]} ${className}`}>
      {children}
    </div>
  );
}
