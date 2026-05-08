import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services, residentialSubTypes } from "@/lib/content/services";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import CTASection from "@/components/sections/CTASection";
import AuroraDivider from "@/components/aurora/AuroraDivider";
import Accordion from "@/components/ui/Accordion";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) return {};
  return {
    title: s.name,
    description: s.tagline,
    alternates: { canonical: `/services/${s.slug}` }
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        eyebrow={service.category.toUpperCase()}
        title={service.name}
        intro={service.tagline}
      />

      <section className="py-12">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="text-mist text-lg leading-relaxed">{service.description}</p>
          </Reveal>
        </Container>
      </section>

      <AuroraDivider />

      {/* What it covers */}
      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="eyebrow inline-block mb-6">WHAT IT COVERS</span>
              <h2 className="h-section text-3xl md:text-4xl text-frost">
                The full scope of {service.shortName.toLowerCase()} work.
              </h2>
            </div>
            <ul className="lg:col-span-7 space-y-4">
              {service.covers.map((c, i) => (
                <Reveal key={i} delay={i * 0.04} as="li" className="flex items-start gap-3 text-frost/90 leading-relaxed">
                  <CheckCircle2 size={18} className="text-aurora-green mt-1 shrink-0" />
                  <span>{c}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Residential sub-types */}
      {service.slug === "residential" && (
        <>
          <AuroraDivider />
          <section className="py-20">
            <Container>
              <div className="mb-12 max-w-3xl">
                <span className="eyebrow inline-block mb-6">REPORT TYPES</span>
                <h2 className="h-section text-3xl md:text-5xl text-frost">
                  Seven residential report formats.
                </h2>
                <p className="text-mist text-lg mt-4">
                  We choose the format that fits the purpose — not the other way around.
                </p>
              </div>
              <Accordion
                items={residentialSubTypes.map((t) => ({
                  title: t.name,
                  content: <p>{t.description}</p>
                }))}
              />
            </Container>
          </section>
        </>
      )}

      <AuroraDivider />

      {/* Who it's for */}
      <section className="py-20">
        <Container>
          <div className="mb-12 max-w-3xl">
            <span className="eyebrow inline-block mb-6">WHO IT&apos;S FOR</span>
            <h2 className="h-section text-3xl md:text-5xl text-frost">
              Designed for these clients.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.audience.map((a, i) => (
              <Reveal key={a} delay={i * 0.05}>
                <div className="card-surface p-5 flex items-center gap-3">
                  <span className="font-mono text-xs text-aurora-green">0{i + 1}</span>
                  <span className="text-frost/90">{a}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <AuroraDivider />

      {/* Process */}
      <section className="py-20">
        <Container>
          <div className="mb-12 max-w-3xl">
            <span className="eyebrow inline-block mb-6">OUR PROCESS</span>
            <h2 className="h-section text-3xl md:text-5xl text-frost">
              Four steps. No friction.
            </h2>
          </div>
          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <Reveal key={i} delay={i * 0.06} as="li" className="card-surface p-6 h-full">
                <div className="font-mono text-aurora-green text-3xl mb-4">0{i + 1}</div>
                <h3 className="h-sub text-xl text-frost mb-2">{step.title}</h3>
                <p className="text-mist text-sm leading-relaxed">{step.detail}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Pricing teaser */}
      <section className="py-20">
        <Container>
          <Reveal>
            <div className="card-surface p-10 md:p-14 grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <span className="eyebrow inline-block mb-4">PRICING</span>
                <h3 className="h-section text-3xl md:text-4xl text-frost mb-3">
                  Transparent fees, every time.
                </h3>
                <p className="text-mist leading-relaxed">
                  Our published fee schedule is live on the Fees page. For specialized work — large acreages, executive homes, out-of-area — we always confirm a custom quote before starting.
                </p>
              </div>
              <div className="md:col-span-5 flex md:justify-end gap-3 flex-wrap">
                <Link href="/fees" className="btn-ghost">
                  See fees
                </Link>
                <Link href="/order" className="btn-primary">
                  Request a quote <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection
        eyebrow="GET STARTED"
        title={`Need a ${service.shortName.toLowerCase()} appraisal?`}
        body="Send us the basics and we will reply within hours with scope, fee, and timing."
      />
    </>
  );
}
