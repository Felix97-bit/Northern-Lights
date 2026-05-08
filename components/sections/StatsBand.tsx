import { site } from "@/lib/content/site";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";
import Container from "@/components/ui/Container";

export default function StatsBand() {
  return (
    <section className="py-24 border-y border-steel/20 bg-ink relative">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
          {site.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center md:text-left">
              <div className="h-display text-5xl md:text-6xl text-frost mb-3 tabular-nums">
                <Counter value={s.value} />
              </div>
              <div className="mono-label">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
