import { ReactNode } from "react";
import Eyebrow from "./Eyebrow";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({ eyebrow, title, intro, align = "left", className = "" }: Props) {
  return (
    <div
      className={`${className} ${
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"
      }`}
    >
      {eyebrow && (
        <div className={align === "center" ? "flex justify-center mb-6" : "mb-6"}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2 className="h-section text-4xl md:text-5xl lg:text-6xl text-frost mb-6">{title}</h2>
      {intro && <p className="text-mist text-lg leading-relaxed">{intro}</p>}
    </div>
  );
}
