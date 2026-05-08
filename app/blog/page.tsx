import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import CTASection from "@/components/sections/CTASection";
import { blogPosts } from "@/lib/content/blog";

export const metadata: Metadata = {
  title: "Market Reports & Insights",
  description:
    "Edmonton and Calgary real estate market reports and analysis from Northern Lights Appraisals.",
  alternates: { canonical: "/blog" }
};

export default function BlogIndexPage() {
  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  const rest = blogPosts.filter((p) => p.slug !== featured.slug);

  return (
    <>
      <PageHero
        eyebrow="MARKET REPORTS"
        title={
          <>
            From the
            <br />
            <span className="aurora-text">market floor.</span>
          </>
        }
        intro="Monthly market analysis from a team that walks through hundreds of properties every month. Edmonton, Calgary, and beyond."
      />

      {featured && (
        <section className="py-8">
          <Container>
            <Reveal>
              <Link
                href={`/blog/${featured.slug}`}
                className="card-surface block p-8 md:p-14 grid lg:grid-cols-12 gap-8 group"
              >
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="mono-label text-aurora-green">FEATURED</span>
                    <span className="mono-label text-mist">{featured.region}</span>
                    <span className="mono-label text-mist font-mono">{featured.date}</span>
                  </div>
                  <h2 className="h-section text-3xl md:text-5xl text-frost mb-5 group-hover:text-aurora-green transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-mist text-lg leading-relaxed">{featured.excerpt}</p>
                  <div className="mt-8 inline-flex items-center gap-2 text-aurora-green font-medium">
                    Read report <ArrowRight size={16} />
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-steel/20">
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(80% 60% at 50% 30%, rgba(0,229,160,0.18), transparent 60%), linear-gradient(180deg, #0A0C10, #11141B)"
                      }}
                    />
                    <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full" preserveAspectRatio="none" aria-hidden>
                      <g style={{ mixBlendMode: "screen" }}>
                        <path d="M-20 130 Q 100 80 200 110 T 420 140" stroke="#00E5A0" strokeWidth="2" fill="none" />
                        <path d="M-20 170 Q 100 120 200 150 T 420 180" stroke="#5B8DEF" strokeWidth="2" fill="none" opacity="0.6" />
                      </g>
                      <polyline points="20,250 80,210 130,230 190,180 250,200 310,150 380,170" fill="none" stroke="#4EE2C8" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </Link>
            </Reveal>
          </Container>
        </section>
      )}

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link href={`/blog/${p.slug}`} className="card-surface p-8 block h-full group">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="mono-label text-aurora-green">{p.region}</span>
                    <span className="mono-label text-mist font-mono">{p.date}</span>
                  </div>
                  <h3 className="h-sub text-xl text-frost mb-3 group-hover:text-aurora-green transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-mist text-sm leading-relaxed">{p.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
