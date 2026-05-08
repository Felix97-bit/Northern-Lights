import Link from "next/link";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-aurora-glow opacity-50 pointer-events-none" aria-hidden />
      <Container className="text-center">
        <span className="eyebrow inline-block mb-6">404 · OFF THE MAP</span>
        <h1 className="h-display text-frost text-[clamp(4rem,14vw,12rem)] leading-none mb-4">
          <span className="aurora-text">Lost</span> in the dark.
        </h1>
        <p className="text-mist text-lg max-w-xl mx-auto mb-10">
          The page you&apos;re looking for isn&apos;t at these coordinates.
          Try heading back to the homepage or browse our services.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
          <Link href="/services" className="btn-ghost">
            Browse services
          </Link>
        </div>
        <p className="font-mono text-xs text-mist mt-12">53.5461° N, 113.4938° W — EDMONTON, AB</p>
      </Container>
    </section>
  );
}
