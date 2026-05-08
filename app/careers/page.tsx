import type { Metadata } from "next";
import { Heart, GraduationCap, Users, Award } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import CTASection from "@/components/sections/CTASection";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Northern Lights team. We are not actively hiring — but we always want to hear from talented appraisers and candidates in Edmonton, Calgary, and BC.",
  alternates: { canonical: "/careers" }
};

const benefits = [
  { title: "Family-owned culture", body: "Direct relationships with the owners. Your work is seen, valued, and rewarded.", icon: Heart },
  { title: "Mentorship to designation", body: "We train Candidate Members through to DAR and AACI. Brianne, Ryan, and Eldon are proof.", icon: GraduationCap },
  { title: "Multi-discipline exposure", body: "Residential, commercial, farm, acreage, and insurance — broaden your craft.", icon: Users },
  { title: "Recognized work", body: "Two CNAREA national awards have come from this team. We back the people we hire.", icon: Award }
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="CAREERS"
        title={
          <>
            Join the
            <br />
            <span className="aurora-text">Northern Lights team.</span>
          </>
        }
        intro="A small, family-run firm with serious depth — and a track record of taking Candidate Members all the way to designation."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="mb-12 max-w-3xl">
            <span className="eyebrow inline-block mb-4">WHY WORK HERE</span>
            <h2 className="h-section text-3xl md:text-5xl text-frost">Four reasons people stay.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.05}>
                <div className="card-surface p-8 h-full">
                  <span className="w-12 h-12 rounded-xl border border-steel/30 inline-flex items-center justify-center text-aurora-green mb-6">
                    <b.icon size={20} />
                  </span>
                  <h3 className="h-sub text-2xl text-frost mb-3">{b.title}</h3>
                  <p className="text-mist leading-relaxed">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-20">
        <Container>
          <Reveal>
            <div className="card-surface p-10 md:p-14 text-center">
              <span className="eyebrow inline-block mb-4">OPEN POSITIONS</span>
              <h2 className="h-section text-3xl md:text-4xl text-frost mb-4">
                No open positions at this time.
              </h2>
              <p className="text-mist max-w-xl mx-auto mb-8">
                We&apos;re not actively hiring — but we always want to hear from talented appraisers, candidate members, and operations professionals.
                Send your CV and a short note about why Northern Lights to{" "}
                <a href={`mailto:${site.careersEmail}`} className="link-aurora text-aurora-green">
                  {site.careersEmail}
                </a>.
              </p>
              <a href={`mailto:${site.careersEmail}`} className="btn-primary">
                Send us your CV
              </a>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection
        eyebrow="OR — IF YOU'RE A CLIENT"
        title="Looking for an appraisal instead?"
        body="We're always open to new client work. Send a quote request and we will reply within hours."
        primary={{ label: "Request a quote", href: "/order" }}
        secondary={{ label: "Browse services", href: "/services" }}
      />
    </>
  );
}
