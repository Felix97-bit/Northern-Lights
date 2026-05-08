import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import CTASection from "@/components/sections/CTASection";
import { faqs } from "@/lib/content/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about real estate appraisals — process, fees, service areas, credentials, and more.",
  alternates: { canonical: "/faq" }
};

export default function FAQPage() {
  // Group by category
  const grouped = faqs.reduce<Record<string, typeof faqs>>((acc, f) => {
    (acc[f.category] ||= []).push(f);
    return acc;
  }, {});

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Common <span className="aurora-text">questions,</span>
            <br />
            answered straight.
          </>
        }
        intro="Twelve questions clients ask most often. If yours isn't here, get in touch — we will reply same day."
      />

      <section className="py-12 md:py-20">
        <Container size="lg">
          <div className="space-y-16">
            {Object.entries(grouped).map(([cat, items]) => (
              <Reveal key={cat}>
                <div className="mb-6 flex items-end justify-between gap-4">
                  <h2 className="h-sub text-2xl md:text-3xl text-frost">{cat}</h2>
                  <span className="mono-label text-mist">{items.length} questions</span>
                </div>
                <Accordion
                  items={items.map((q) => ({
                    title: q.question,
                    content: <p>{q.answer}</p>
                  }))}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="STILL NOT SURE?"
        title="Talk to a real human."
        body="Pick up the phone, send an email, or use the form — we will help you figure out what kind of appraisal fits your situation."
        primary={{ label: "Contact us", href: "/contact" }}
        secondary={{ label: "Request a quote", href: "/order" }}
      />
    </>
  );
}
