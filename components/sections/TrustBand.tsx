import { site } from "@/lib/content/site";
import Container from "@/components/ui/Container";

export default function TrustBand() {
  return (
    <section className="py-12 bg-obsidian/60">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-y-4 gap-x-6 divide-x divide-steel/30">
          {site.trustMarks.map((m) => (
            <div key={m} className="px-6 first:pl-0 mono-label text-frost/80 whitespace-nowrap">
              {m}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
