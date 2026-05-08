import MagneticButton from "@/components/aurora/MagneticButton";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";

type Props = {
  eyebrow?: string;
  title?: string;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export default function CTASection({
  eyebrow = "Ready when you are",
  title = "Ready to make your next decision with confidence?",
  body = "Request a quote today. We will confirm scope, fee, and timing — usually within hours.",
  primary = { label: "Request a Quote", href: "/order" },
  secondary = { label: "Talk to us", href: "/contact" }
}: Props) {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-aurora-glow opacity-50 pointer-events-none" aria-hidden />
      <Container>
        <Reveal className="text-center mx-auto max-w-3xl">
          <span className="eyebrow inline-block mb-6">{eyebrow}</span>
          <h2 className="h-section text-4xl md:text-6xl text-frost mb-6">{title}</h2>
          <p className="text-mist text-lg leading-relaxed mb-10">{body}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <MagneticButton href={primary.href}>
              {primary.label} <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton href={secondary.href} variant="ghost">
              {secondary.label}
            </MagneticButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
