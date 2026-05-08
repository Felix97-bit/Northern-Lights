import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Northern Lights works hand-in-hand with banks, credit unions, mortgage brokers, law firms, and real estate companies across Canada.",
  alternates: { canonical: "/partners" }
};

const categories = [
  { title: "Banks & Credit Unions", count: 8 },
  { title: "Mortgage Brokers", count: 12 },
  { title: "Law Firms", count: 6 },
  { title: "Real Estate Companies", count: 10 }
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="PARTNERS"
        title={
          <>
            Working hand-in-hand with the
            <br />
            <span className="aurora-text">people who matter.</span>
          </>
        }
        intro="We work hand in hand with other professionals within the real estate industry. Over the years we have formed many strong bonds with industry leaders and are trusted by the country's largest banks, credit unions and insurers."
      />

      <section className="py-12 md:py-20">
        <Container>
          <div className="space-y-16 md:space-y-24">
            {categories.map((cat, i) => (
              <Reveal key={cat.title} delay={i * 0.05}>
                <div className="mb-8 flex items-end justify-between gap-6 border-b border-steel/30 pb-6">
                  <h2 className="h-sub text-2xl md:text-3xl text-frost">{cat.title}</h2>
                  <span className="mono-label text-mist">{cat.count} partners</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {Array.from({ length: cat.count }).map((_, k) => (
                    <div
                      key={k}
                      className="aspect-[3/2] rounded-2xl border border-dashed border-steel/30 flex items-center justify-center text-mist/40 text-xs mono-label hover:border-aurora-green/40 hover:text-aurora-green transition-colors"
                    >
                      Partner logo
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="WORK WITH US"
        title="Building a partnership?"
        body="If you're a lender, broker, law firm, or realtor and want to add Northern Lights to your roster — get in touch."
        primary={{ label: "Contact us", href: "/contact" }}
        secondary={{ label: "See our services", href: "/services" }}
      />
    </>
  );
}
