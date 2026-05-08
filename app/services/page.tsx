import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ConstellationMap from "@/components/sections/ConstellationMap";
import CTASection from "@/components/sections/CTASection";
import AuroraDivider from "@/components/aurora/AuroraDivider";
import { services } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Appraisal Services",
  description:
    "Six service lines: residential, commercial, farm & agricultural, acreage, insurance (RCN), and weMeasureHomes RMS measurement. Tailored to purpose. Delivered fast.",
  alternates: { canonical: "/services" }
};

export default function ServicesHubPage() {
  return (
    <>
      <PageHero
        eyebrow="APPRAISAL SERVICES"
        title={
          <>
            Six service lines.
            <br />
            <span className="aurora-text">Tailored to purpose.</span>
          </>
        }
        intro="Hover any node below to trace its constellation. Click to learn more — every service links to its detail page, fee, and process."
      >
        <div className="mt-12">
          <ConstellationMap />
        </div>
      </PageHero>

      <AuroraDivider />

      <section className="py-12 md:py-24">
        <Container>
          <div className="space-y-24 md:space-y-32">
            {services.map((s, i) => {
              const reversed = i % 2 === 1;
              return (
                <Reveal key={s.slug}>
                  <div className="grid lg:grid-cols-12 gap-10 items-center">
                    <div
                      className={`lg:col-span-6 ${
                        reversed ? "lg:col-start-7" : ""
                      }`}
                    >
                      <span className="mono-label text-aurora-green mb-4 inline-block">
                        0{i + 1} · {s.category}
                      </span>
                      <h2 className="h-section text-3xl md:text-5xl text-frost mb-6">{s.name}</h2>
                      <p className="text-mist text-lg leading-relaxed mb-6">{s.tagline}</p>
                      <p className="text-mist leading-relaxed mb-8">{s.description}</p>
                      <Link
                        href={`/services/${s.slug}`}
                        className="inline-flex items-center gap-2 text-aurora-green hover:gap-3 transition-all font-medium"
                      >
                        Learn more about {s.shortName} <ArrowUpRight size={16} />
                      </Link>
                    </div>
                    <div className={`lg:col-span-5 ${reversed ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-8"}`}>
                      <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-steel/20">
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              "radial-gradient(80% 60% at 50% 30%, rgba(0,229,160,0.18), transparent 60%), linear-gradient(180deg, #0A0C10, #11141B)"
                          }}
                        />
                        <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
                          <div>
                            <div className="font-mono text-[11px] text-frost/50">SERVICE</div>
                            <div className="h-display text-3xl text-frost">{s.shortName}</div>
                          </div>
                          <div className="text-right text-[11px] font-mono text-mist">
                            0{i + 1} / 0{services.length}
                          </div>
                        </div>
                        <svg viewBox="0 0 400 500" className="absolute inset-0 w-full h-full" preserveAspectRatio="none" aria-hidden>
                          <g style={{ mixBlendMode: "screen" }}>
                            <path d="M-20 180 Q 100 130 200 170 T 420 200" stroke="#00E5A0" strokeWidth="1.5" fill="none" opacity="0.6" />
                            <path d="M-20 220 Q 100 170 200 210 T 420 240" stroke="#4EE2C8" strokeWidth="1.5" fill="none" opacity="0.5" />
                            <path d="M-20 260 Q 100 210 200 250 T 420 280" stroke="#5B8DEF" strokeWidth="1.5" fill="none" opacity="0.4" />
                          </g>
                          {[...Array(40)].map((_, k) => (
                            <circle
                              key={k}
                              cx={(k * 41) % 400}
                              cy={(k * 67) % 320}
                              r="0.8"
                              fill="rgba(232,238,242,0.4)"
                            />
                          ))}
                        </svg>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
