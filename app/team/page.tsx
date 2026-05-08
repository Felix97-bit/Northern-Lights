import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import TeamCard from "@/components/sections/TeamCard";
import CTASection from "@/components/sections/CTASection";
import { team } from "@/lib/content/team";
import AuroraDivider from "@/components/aurora/AuroraDivider";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the nine certified appraisers behind Northern Lights — including CNAREA Appraiser of the Year 2016 winner Gerhardt Klann, Shila Klann, and our team across Edmonton, Calgary, and BC.",
  alternates: { canonical: "/team" }
};

export default function TeamPage() {
  const ceo = team.find((m) => m.slug === "gerhardt-klann")!;
  const coOwner = team.find((m) => m.slug === "shila-klann")!;
  const others = team.filter((m) => !m.leadership);

  return (
    <>
      <PageHero
        eyebrow="OUR TEAM"
        title={
          <>
            Nine appraisers.
            <br />
            <span className="aurora-text">One team.</span>
          </>
        }
        intro="Over 60 years of combined experience. AACI, DAR, DAC, DRP, CRA, and Certified Appraisal Reviewer designations. Three offices — and one phone call away."
      />

      <section className="py-12 md:py-20">
        <Container>
          <div className="grid lg:grid-cols-12 gap-6 mb-6">
            <Reveal className="lg:col-span-12">
              <TeamCard member={ceo} large />
            </Reveal>
          </div>
          <div className="grid lg:grid-cols-12 gap-6">
            <Reveal className="lg:col-span-6">
              <TeamCard member={coOwner} large />
            </Reveal>
            <Reveal className="lg:col-span-6 flex" delay={0.05}>
              <div className="card-surface p-8 w-full flex flex-col justify-center">
                <span className="eyebrow inline-block mb-4">FOUNDED 2012</span>
                <h2 className="h-sub text-2xl md:text-3xl text-frost mb-4">
                  Family-owned, family-operated.
                </h2>
                <p className="text-mist leading-relaxed">
                  Gerhardt and Shila have run Northern Lights together since day one.
                  Every report leaves our office because someone here is willing to put their name on it.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <AuroraDivider />

      <section className="py-12 md:py-20">
        <Container>
          <div className="mb-12">
            <span className="eyebrow inline-block mb-4">THE WIDER TEAM</span>
            <h2 className="h-section text-3xl md:text-5xl text-frost">
              Seven appraisers, two cities, one province line.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((m, i) => (
              <Reveal key={m.slug} delay={i * 0.05}>
                <TeamCard member={m} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
