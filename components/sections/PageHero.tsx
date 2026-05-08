import { ReactNode } from "react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  meta?: ReactNode;
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, intro, meta, children }: Props) {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[80%] bg-aurora-glow opacity-50 pointer-events-none" aria-hidden />
      <Container>
        {eyebrow && (
          <div className="mb-8">
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
        )}
        <h1 className="h-display text-frost text-[clamp(2.5rem,7vw,5.5rem)] max-w-5xl mb-8">
          {title}
        </h1>
        {intro && <p className="text-mist text-lg md:text-xl max-w-3xl leading-relaxed">{intro}</p>}
        {meta && <div className="mt-8">{meta}</div>}
        {children}
      </Container>
    </section>
  );
}
