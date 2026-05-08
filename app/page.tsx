import Link from "next/link";
import { ArrowRight, Quote, Star } from "lucide-react";
import HeroAurora from "@/components/sections/HeroAurora";
import StatsBand from "@/components/sections/StatsBand";
import ServicesGrid from "@/components/sections/ServicesGrid";
import TrustBand from "@/components/sections/TrustBand";
import CTASection from "@/components/sections/CTASection";
import AuroraDivider from "@/components/aurora/AuroraDivider";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/aurora/MagneticButton";
import { testimonials } from "@/lib/content/testimonials";
import { blogPosts } from "@/lib/content/blog";

export default function HomePage() {
  const featured = testimonials[0]; // Dan Pultr
  const latest = blogPosts.filter((p) => p.featured)[0];
  const others = blogPosts.filter((p) => !p.featured).slice(0, 2);

  return (
    <>
      <HeroAurora />

      <StatsBand />

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="WHAT WE DO"
                title={
                  <>
                    Six service lines.
                    <br />
                    <span className="aurora-text">One standard</span> of excellence.
                  </>
                }
              />
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="text-mist text-lg leading-relaxed">
                From a refinance on a starter home to expert testimony in court — we tailor every report to its purpose.
                We don&apos;t do cookie-cutter appraisals. We don&apos;t miss deadlines.
              </p>
            </div>
          </div>
          <ServicesGrid />
        </Container>
      </section>

      <AuroraDivider />

      {/* About teaser */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-5">
              <span className="eyebrow inline-block mb-6">ABOUT NORTHERN LIGHTS</span>
              <h2 className="h-section text-4xl md:text-5xl text-frost mb-6">
                Built by appraisers. Trusted by Canada.
              </h2>
              <p className="text-mist leading-relaxed mb-4">
                Northern Lights Appraisals is a family-owned firm based in Edmonton, founded by Gerhardt and Shila Klann in 2012.
                Our nine appraisers carry over 60 years of combined experience, AACI and CNAREA designations,
                and a reputation built one tight-deadline report at a time.
              </p>
              <p className="text-mist leading-relaxed mb-8">
                We aren&apos;t just real estate appraisers. We&apos;re investors. We know the markets we appraise — Edmonton, Calgary, and parts of British Columbia — inside and out.
              </p>
              <MagneticButton href="/about" variant="ghost">
                Learn more <ArrowRight size={16} />
              </MagneticButton>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={0.1}>
              <div className="relative aspect-[5/4] rounded-3xl overflow-hidden border border-steel/20">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(0,229,160,0.08), rgba(91,141,239,0.05)), radial-gradient(80% 60% at 50% 30%, rgba(0,229,160,0.18), transparent 60%), linear-gradient(135deg, #0A0C10, #11141B)",
                    filter: "saturate(1.1)"
                  }}
                />
                <svg
                  viewBox="0 0 800 640"
                  className="absolute inset-0 w-full h-full"
                  preserveAspectRatio="xMidYMid slice"
                  aria-hidden
                >
                  {/* mountain silhouettes (Edmonton skyline / mountains) */}
                  <path d="M0 500 L150 380 L260 460 L400 320 L520 440 L660 360 L800 480 L800 640 L0 640 Z" fill="#050608" opacity="0.95" />
                  <path d="M0 540 L120 470 L240 520 L380 430 L500 510 L640 460 L800 540 L800 640 L0 640 Z" fill="#11141B" />
                  {/* aurora ribbons */}
                  <g opacity="0.7" style={{ mixBlendMode: "screen" }}>
                    <path d="M-50 220 Q 200 140 400 200 T 850 230" stroke="#00E5A0" strokeWidth="2" fill="none" />
                    <path d="M-50 260 Q 200 180 400 240 T 850 270" stroke="#4EE2C8" strokeWidth="2" fill="none" opacity="0.7" />
                    <path d="M-50 300 Q 200 220 400 280 T 850 310" stroke="#5B8DEF" strokeWidth="2" fill="none" opacity="0.5" />
                  </g>
                </svg>
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div className="font-mono text-xs text-frost/60">53.5461° N · 113.4938° W</div>
                  <div className="text-right">
                    <div className="mono-label text-aurora-green">EDMONTON</div>
                    <div className="font-mono text-xs text-frost/60">ALBERTA · CANADA</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <TrustBand />

      {/* Featured testimonial */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-aurora-glow opacity-50 pointer-events-none" aria-hidden />
        <Container>
          <Reveal className="max-w-4xl mx-auto text-center">
            <Quote className="text-aurora-green mx-auto mb-8" size={48} />
            <blockquote className="font-display text-3xl md:text-5xl leading-tight text-frost italic font-light">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <div className="mt-10 flex flex-col items-center gap-2">
              <div className="mono-label text-aurora-green">{featured.name}</div>
              <div className="text-mist text-sm">{featured.role}</div>
              <div className="flex items-center gap-1 text-aurora-green mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
            </div>
            <div className="mt-12">
              <Link href="/testimonials" className="link-aurora text-sm text-frost/80">
                Read more testimonials →
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <AuroraDivider />

      {/* Latest market reports */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="MARKET REPORTS"
              title={<>From the <span className="aurora-text">market.</span></>}
            />
            <Link href="/blog" className="link-aurora text-sm text-frost/80 self-start md:self-end">
              View all reports →
            </Link>
          </div>
          {latest && (
            <div className="grid lg:grid-cols-12 gap-6">
              <Reveal className="lg:col-span-7">
                <Link href={`/blog/${latest.slug}`} className="card-surface block p-10 h-full group">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="mono-label text-aurora-green">FEATURED</span>
                    <span className="mono-label text-mist">{latest.region}</span>
                    <span className="mono-label text-mist">{latest.date}</span>
                  </div>
                  <h3 className="h-section text-3xl md:text-4xl text-frost mb-4 group-hover:text-aurora-green transition-colors">
                    {latest.title}
                  </h3>
                  <p className="text-mist leading-relaxed">{latest.excerpt}</p>
                  <div className="mt-8 flex items-center gap-2 text-aurora-green font-medium text-sm">
                    Read report <ArrowRight size={14} />
                  </div>
                </Link>
              </Reveal>
              <div className="lg:col-span-5 grid gap-6">
                {others.map((p, i) => (
                  <Reveal key={p.slug} delay={i * 0.08}>
                    <Link href={`/blog/${p.slug}`} className="card-surface block p-6 group">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="mono-label text-mist">{p.region}</span>
                        <span className="mono-label text-mist">{p.date}</span>
                      </div>
                      <h4 className="h-sub text-lg text-frost mb-2 group-hover:text-aurora-green transition-colors">{p.title}</h4>
                      <p className="text-mist text-sm">{p.excerpt}</p>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
