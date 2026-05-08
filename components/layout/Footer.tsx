import Link from "next/link";
import { Facebook, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";
import Logo from "./Logo";
import NewsletterForm from "./NewsletterForm";
import CompassRose from "@/components/aurora/CompassRose";
import { site } from "@/lib/content/site";
import { footerNav } from "@/lib/content/nav";

export default function Footer() {
  return (
    <footer className="relative bg-obsidian text-frost overflow-hidden border-t border-steel/20">
      <div className="absolute inset-0 bg-aurora-glow opacity-30 pointer-events-none" aria-hidden />
      <div className="absolute -bottom-32 -right-20 pointer-events-none" aria-hidden>
        <CompassRose size={420} opacity={0.06} />
      </div>

      <div className="relative mx-auto max-w-content px-6 md:px-10 pt-24 pb-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-16 pb-16 border-b border-steel/20">
          <div className="lg:col-span-5">
            <Logo height={48} />
            <p className="mt-6 max-w-md text-mist text-base leading-relaxed">
              {site.tagline}.
            </p>
            <p className="mt-6 mono-label">
              {site.coordinates.label} — Edmonton, AB
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-10">
            <div>
              <h3 className="mono-label mb-4 text-aurora-green">Our Site</h3>
              <ul className="space-y-3">
                {footerNav.site.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-frost/80 hover:text-aurora-green text-sm transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mono-label mb-4 text-aurora-green">Appraisal Services</h3>
              <ul className="space-y-3">
                {footerNav.services.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-frost/80 hover:text-aurora-green text-sm transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mono-label mb-4 text-aurora-green">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2 text-frost/80">
                  <MapPin size={14} className="mt-1 text-aurora-green shrink-0" />
                  <span>{site.address.full}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={14} className="text-aurora-green" />
                  <a href={`tel:${site.phoneTel}`} className="text-frost/80 hover:text-aurora-green font-mono text-xs">
                    {site.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={14} className="text-aurora-green" />
                  <a href={`tel:${site.tollFreeTel}`} className="text-frost/80 hover:text-aurora-green font-mono text-xs">
                    Toll {site.tollFree}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={14} className="text-aurora-green" />
                  <a href={`mailto:${site.email}`} className="text-frost/80 hover:text-aurora-green text-xs break-all">
                    {site.email}
                  </a>
                </li>
              </ul>

              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-4 mono-label">
            <span>© {new Date().getFullYear()} {site.legalName}</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="mono-label text-xs">RECA · CNAREA · AACI · E&O</span>
            <div className="flex items-center gap-3">
              <a
                href={site.social.facebook}
                aria-label="Facebook"
                className="text-frost/70 hover:text-aurora-green transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href={site.social.twitter}
                aria-label="Twitter / X"
                className="text-frost/70 hover:text-aurora-green transition-colors"
              >
                <Twitter size={16} />
              </a>
              <a
                href={site.social.youtube}
                aria-label="YouTube"
                className="text-frost/70 hover:text-aurora-green transition-colors"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
