import type { Metadata } from "next";
import { Quote, Star } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import CTASection from "@/components/sections/CTASection";
import { testimonials, testimonialStats } from "@/lib/content/testimonials";

export const metadata: Metadata = {
  title: "Client Testimonials",
  description:
    "Real estate appraisal testimonials from mortgage brokers, lenders, lawyers, investors, and homeowners who use Northern Lights Appraisals.",
  alternates: { canonical: "/testimonials" }
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="WHAT CLIENTS SAY"
        title={
          <>
            <span className="aurora-text">Words</span> from clients,
            <br />verbatim.
          </>
        }
        intro="Mortgage brokers, lenders, lawyers, investors, and homeowners — read their words below."
      />

      <section className="py-8">
        <Container>
          <Reveal className="rounded-2xl border border-steel/30 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-shadow/40">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-aurora-green">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="text-frost text-lg font-mono tabular-nums">{testimonialStats.rating}</span>
              <span className="mono-label text-mist">
                · {testimonialStats.reviewCount} reviews · {testimonialStats.channels}
              </span>
            </div>
            <span className="mono-label text-aurora-green">{testimonialStats.alignable}</span>
          </Reveal>
        </Container>
      </section>

      <section className="py-12 md:py-20">
        <Container>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={(i % 3) * 0.06} className="break-inside-avoid mb-6">
                <figure className="card-surface p-7">
                  <Quote className="text-aurora-green mb-4" size={24} />
                  <blockquote className="font-display italic text-frost text-lg leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 pt-6 border-t border-steel/30">
                    <div className="mono-label text-aurora-green">{t.name}</div>
                    <div className="text-mist text-sm mt-1">{t.role}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
