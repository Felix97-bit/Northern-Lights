import type { Metadata } from "next";
import { Award, Users, MapPin, ShieldCheck } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import AuroraDivider from "@/components/aurora/AuroraDivider";
import CTASection from "@/components/sections/CTASection";
import TrustBand from "@/components/sections/TrustBand";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Family-owned, RECA licensed, CNAREA members. Northern Lights Appraisals has been delivering fast, accurate real estate appraisals from Edmonton since 2012.",
  alternates: { canonical: "/about" }
};

const differentiators = [
  {
    title: "Family-Owned",
    body: "Founded by Gerhardt and Shila Klann in 2012. Personal accountability and a long-term reputation we are not willing to compromise.",
    icon: Users
  },
  {
    title: "Award-Winning Leadership",
    body: "Gerhardt was recognized as CNAREA's Appraiser of the Year for all of Canada in 2016 — and has personally completed over 7,500 appraisals.",
    icon: Award
  },
  {
    title: "Multi-Disciplinary Expertise",
    body: "Our team holds AACI, DAR, DAC, DRP, CRA designations and Certified Appraisal Reviewer credentials — covering residential, commercial, farm, and beyond.",
    icon: ShieldCheck
  },
  {
    title: "Province-Wide Reach",
    body: "Edmonton and Calgary as primary markets, with extended residential coverage across Maple Ridge and the Greater Vancouver area.",
    icon: MapPin
  }
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT NORTHERN LIGHTS"
        title={
          <>
            Built by appraisers.
            <br />
            <span className="aurora-text">Trusted by Canada.</span>
          </>
        }
        intro="A family-owned firm in Edmonton, Alberta, delivering fast, accurate, reliable real estate appraisals across Alberta and British Columbia since 2012."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-5">
              <span className="eyebrow inline-block mb-6">OUR STORY</span>
              <h2 className="h-section text-3xl md:text-5xl text-frost">
                Twelve years of carefully chosen growth.
              </h2>
            </Reveal>
            <div className="lg:col-span-7 space-y-6 text-mist text-lg leading-relaxed">
              <Reveal>
                <p>
                  Northern Lights Real Estate Consulting Ltd. was founded by Gerhardt and Shila Klann in 2012,
                  and moved into our current Edmonton office in 2014.
                  Gerhardt holds a B.Sc. in Forestry Business Management from the University of Alberta and was a former world-class biathlete —
                  he brings to the firm the discipline, rigour, and pace those backgrounds demand.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <blockquote className="font-display italic text-2xl md:text-3xl text-frost border-l-2 border-aurora-green pl-6 my-12">
                  &ldquo;We don&apos;t do cookie-cutter appraisals. We don&apos;t miss deadlines. And we never forget that an appraisal is somebody&apos;s biggest financial decision.&rdquo;
                </blockquote>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  Today, our team of nine certified appraisers brings over 60 years of combined experience to every file —
                  covering residential, commercial, farm, acreage, insurance (RCN), and standalone RMS measurement work.
                  We&apos;re trusted by Canada&apos;s largest banks, credit unions, lenders, mortgage brokers, and law firms,
                  and we have been recognized at the national level: Gerhardt was named CNAREA&apos;s Appraiser of the Year in 2016.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <AuroraDivider />

      {/* Mission */}
      <section className="py-20 md:py-32">
        <Container>
          <Reveal className="text-center max-w-4xl mx-auto">
            <span className="eyebrow inline-block mb-8">OUR MISSION</span>
            <p className="font-display italic text-3xl md:text-5xl leading-tight text-frost">
              {site.tagline}.
            </p>
          </Reveal>
        </Container>
      </section>

      <AuroraDivider />

      {/* Differentiators */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="mb-16 max-w-3xl">
            <span className="eyebrow inline-block mb-6">WHAT SETS US APART</span>
            <h2 className="h-section text-4xl md:text-5xl text-frost">
              Four reasons clients keep coming back.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.06}>
                <div className="card-surface p-8 h-full">
                  <span className="w-12 h-12 rounded-xl border border-steel/30 inline-flex items-center justify-center text-aurora-green mb-6">
                    <d.icon size={20} />
                  </span>
                  <h3 className="h-sub text-2xl text-frost mb-3">{d.title}</h3>
                  <p className="text-mist leading-relaxed">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <TrustBand />

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="eyebrow inline-block mb-6">CREDENTIALS</span>
              <h2 className="h-section text-3xl md:text-5xl text-frost">
                Licensed, designated, and insured.
              </h2>
            </div>
            <ul className="lg:col-span-7 space-y-6 text-mist text-lg leading-relaxed border-l border-steel/30 pl-8">
              <li>Licensed by the Real Estate Council of Alberta (RECA).</li>
              <li>Members of the Canadian National Association of Real Estate Appraisers (CNAREA).</li>
              <li>Carry Professional Liability (Errors and Omissions) Insurance.</li>
              <li>
                Team holds AACI (Appraisal Institute of Canada) designations along with CNAREA designations
                — DAR, DAC, DRP, and CRA.
              </li>
              <li>Gerhardt Klann sits on the Appraisal Advisory Committee for RECA.</li>
            </ul>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="MEET THE TEAM"
        title="Get to know the appraisers behind every report."
        body="Nine certified appraisers, six service lines, two cities, and a reputation built one tight-deadline file at a time."
        primary={{ label: "Meet our team", href: "/team" }}
        secondary={{ label: "Request a quote", href: "/order" }}
      />
    </>
  );
}
