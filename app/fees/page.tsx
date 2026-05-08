import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import CTASection from "@/components/sections/CTASection";
import { fees, feesFootnote } from "@/lib/content/fees";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fee Schedule",
  description:
    "Northern Lights Appraisals published fee schedule — Full Appraisal $325, Drive-By $225, Progress Inspection $125, and more. Custom quotes for commercial, farm, and acreage.",
  alternates: { canonical: "/fees" }
};

export default function FeesPage() {
  return (
    <>
      <PageHero
        eyebrow="FEE SCHEDULE"
        title={
          <>
            Transparent,
            <br />
            <span className="aurora-text">published fees.</span>
          </>
        }
        intro="Our base fees for the most common appraisal types are published below. Specialized work — large acreages, commercial properties, executive homes, out-of-area files — is custom-quoted, with no surprises at delivery."
      />

      <section className="py-12 md:py-20">
        <Container>
          <Reveal>
            <div className="rounded-2xl border border-steel/20 overflow-hidden">
              <div className="grid grid-cols-[1fr_auto] bg-shadow/60 px-6 py-4 border-b border-steel/30">
                <span className="mono-label text-mist">Service</span>
                <span className="mono-label text-mist">Base Fee</span>
              </div>
              <div className="divide-y divide-steel/20">
                {fees.map((f) => (
                  <div
                    key={f.service}
                    className="group grid grid-cols-[1fr_auto] items-baseline px-6 py-5 hover:bg-shadow/60 transition-colors"
                    style={{ transition: "background 200ms ease, box-shadow 200ms ease" }}
                  >
                    <span className="text-frost text-base md:text-lg group-hover:text-aurora-green transition-colors">
                      {f.service}
                    </span>
                    <span
                      className={`font-mono tabular-nums text-base md:text-lg ${
                        f.fixed ? "text-aurora-green" : "text-mist"
                      }`}
                    >
                      {f.fee}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-mono text-xs text-mist leading-relaxed mt-8 max-w-3xl">{feesFootnote}</p>
          </Reveal>

          <Reveal delay={0.15} className="mt-12 flex flex-wrap gap-4">
            <Link href="/order" className="btn-primary">
              Get a custom quote <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn-ghost">
              Talk to us
            </Link>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
