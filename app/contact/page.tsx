import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Compass, Facebook, Twitter, Youtube, type LucideIcon } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import CompassRose from "@/components/aurora/CompassRose";
import ContactForm from "@/components/sections/ContactForm";
import { site } from "@/lib/content/site";
import { serviceAreas } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Northern Lights Appraisals — Edmonton office, toll-free line, email, and service areas across Alberta and BC.",
  alternates: { canonical: "/contact" }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Northern Lights Appraisals",
  telephone: "+1-780-757-2060",
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "6417 112 Ave NW",
    addressLocality: "Edmonton",
    addressRegion: "AB",
    postalCode: "T5W 0N9",
    addressCountry: "CA"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.coordinates.lat,
    longitude: site.coordinates.lng
  }
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative">
        <div className="absolute -top-20 -left-20 pointer-events-none" aria-hidden>
          <CompassRose size={420} opacity={0.07} />
        </div>
        <PageHero
          eyebrow="CONTACT"
          title={
            <>
              Let&apos;s <span className="aurora-text">talk.</span>
            </>
          }
          intro="Phone, email, form, or in person — we will reply within hours, every time."
        />
      </div>

      <section className="py-12 md:py-20">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10">
            <Reveal className="lg:col-span-5 space-y-6">
              <ContactRow icon={MapPin} label="Office">
                {site.address.full}
              </ContactRow>
              <ContactRow icon={Phone} label="Local">
                <a href={`tel:${site.phoneTel}`} className="link-aurora font-mono">
                  {site.phone}
                </a>
              </ContactRow>
              <ContactRow icon={Phone} label="Toll-Free">
                <a href={`tel:${site.tollFreeTel}`} className="link-aurora font-mono">
                  {site.tollFree}
                </a>
              </ContactRow>
              <ContactRow icon={Mail} label="Email">
                <a href={`mailto:${site.email}`} className="link-aurora">
                  {site.email}
                </a>
              </ContactRow>
              <ContactRow icon={Clock} label="Hours">
                <span className="block">{site.hours.weekday}</span>
                <span className="block">{site.hours.saturday}</span>
                <span className="block">{site.hours.sunday}</span>
              </ContactRow>
              <ContactRow icon={Compass} label="Coordinates">
                <span className="font-mono text-sm">{site.coordinates.label}</span>
              </ContactRow>

              <div className="pt-4">
                <span className="mono-label block mb-3">Follow</span>
                <div className="flex items-center gap-3">
                  <a href={site.social.facebook} aria-label="Facebook" className="w-10 h-10 rounded-full border border-steel/30 inline-flex items-center justify-center text-frost/70 hover:text-aurora-green hover:border-aurora-green transition-colors">
                    <Facebook size={16} />
                  </a>
                  <a href={site.social.twitter} aria-label="Twitter / X" className="w-10 h-10 rounded-full border border-steel/30 inline-flex items-center justify-center text-frost/70 hover:text-aurora-green hover:border-aurora-green transition-colors">
                    <Twitter size={16} />
                  </a>
                  <a href={site.social.youtube} aria-label="YouTube" className="w-10 h-10 rounded-full border border-steel/30 inline-flex items-center justify-center text-frost/70 hover:text-aurora-green hover:border-aurora-green transition-colors">
                    <Youtube size={16} />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={0.08}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Map */}
      <section className="py-8">
        <Container>
          <Reveal className="rounded-2xl overflow-hidden border border-steel/20 bg-shadow">
            <div className="aspect-[16/9] relative">
              <iframe
                title="Northern Lights Appraisals — Edmonton office map"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${site.coordinates.lng - 0.04}%2C${site.coordinates.lat - 0.02}%2C${site.coordinates.lng + 0.04}%2C${site.coordinates.lat + 0.02}&layer=mapnik&marker=${site.coordinates.lat}%2C${site.coordinates.lng}`}
                className="absolute inset-0 w-full h-full"
                style={{ filter: "invert(1) hue-rotate(180deg) brightness(0.85) contrast(0.9) saturate(0.7)" }}
                loading="lazy"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Service Areas */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="mb-12 max-w-3xl">
            <span className="eyebrow inline-block mb-4">SERVICE AREAS</span>
            <h2 className="h-section text-3xl md:text-5xl text-frost">
              Where we work.
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {Object.values(serviceAreas).map((a, i) => (
              <Reveal key={a.title} delay={i * 0.06}>
                <div className="card-surface p-7 h-full">
                  <h3 className="h-sub text-xl text-frost mb-1">{a.title}</h3>
                  <p className="mono-label text-aurora-green mb-5">{a.note}</p>
                  <div className="flex flex-wrap gap-2">
                    {a.cities.map((c) => (
                      <span
                        key={c}
                        className="px-3 py-1.5 text-xs font-mono text-frost/85 bg-midnight/60 border border-steel/30 rounded-full"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  {a.footer && <p className="text-mist text-sm mt-4">{a.footer}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children
}: {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="w-10 h-10 rounded-xl border border-steel/30 inline-flex items-center justify-center text-aurora-green shrink-0">
        <Icon size={16} />
      </span>
      <div>
        <span className="mono-label block mb-1">{label}</span>
        <div className="text-frost text-base leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
