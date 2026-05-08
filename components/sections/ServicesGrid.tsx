import Link from "next/link";
import { ArrowUpRight, Home, Building2, Wheat, TreePine, ShieldCheck, Ruler, type LucideIcon } from "lucide-react";
import { services } from "@/lib/content/services";
import Reveal from "@/components/ui/Reveal";

const iconMap: Record<string, LucideIcon> = {
  residential: Home,
  commercial: Building2,
  farm: Wheat,
  acreage: TreePine,
  insurance: ShieldCheck,
  wemeasurehomes: Ruler
};

export default function ServicesGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((s, i) => {
        const Icon = iconMap[s.slug] ?? Home;
        return (
          <Reveal key={s.slug} delay={i * 0.06}>
            <Link
              href={`/services/${s.slug}`}
              className="card-surface p-8 h-full flex flex-col group"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="w-12 h-12 rounded-xl border border-steel/30 flex items-center justify-center text-aurora-green group-hover:border-aurora-green transition-colors">
                  <Icon size={20} />
                </span>
                <span className="text-mist group-hover:text-aurora-green transition-colors mt-1">
                  <ArrowUpRight size={18} />
                </span>
              </div>
              <span className="mono-label mb-3">{s.category}</span>
              <h3 className="h-sub text-frost text-2xl mb-3">{s.name}</h3>
              <p className="text-mist text-sm leading-relaxed">{s.tagline}</p>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
