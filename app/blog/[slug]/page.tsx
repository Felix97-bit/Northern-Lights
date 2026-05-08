import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { blogPosts } from "@/lib/content/blog";
import CTASection from "@/components/sections/CTASection";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const p = blogPosts.find((b) => b.slug === params.slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.excerpt,
    alternates: { canonical: `/blog/${p.slug}` }
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const idx = blogPosts.findIndex((p) => p.slug === post.slug);
  const next = blogPosts[idx + 1];

  return (
    <>
      <article className="pt-12 pb-24">
        <Container size="lg">
          <Link href="/blog" className="link-aurora text-sm text-mist inline-flex items-center gap-2 mb-12">
            <ArrowLeft size={14} /> All reports
          </Link>
          <header className="mb-16 max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="mono-label text-aurora-green">{post.region}</span>
              <span className="mono-label text-mist font-mono">{post.date}</span>
            </div>
            <h1 className="h-display text-4xl md:text-6xl text-frost mb-6">{post.title}</h1>
            <p className="text-mist text-xl leading-relaxed">{post.excerpt}</p>
          </header>
        </Container>

        <Container size="lg">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-6 text-lg leading-relaxed text-frost/90">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-steel/20 mb-12 relative">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(60% 50% at 50% 30%, rgba(0,229,160,0.2), transparent 60%), linear-gradient(180deg, #0A0C10, #11141B)"
                  }}
                />
                <svg viewBox="0 0 800 450" className="absolute inset-0 w-full h-full" preserveAspectRatio="none" aria-hidden>
                  <g style={{ mixBlendMode: "screen" }}>
                    <path d="M-20 200 Q 200 130 400 180 T 820 200" stroke="#00E5A0" strokeWidth="2" fill="none" />
                    <path d="M-20 240 Q 200 170 400 220 T 820 240" stroke="#5B8DEF" strokeWidth="2" fill="none" opacity="0.6" />
                  </g>
                </svg>
              </div>
              {post.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p>
                For the full report, or to receive monthly updates by email, please <Link href="/contact" className="link-aurora text-aurora-green">get in touch</Link>.
              </p>
            </div>

            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-32 space-y-8">
                <div className="card-surface p-6">
                  <span className="mono-label text-aurora-green block mb-3">CONTENTS</span>
                  <ul className="text-sm text-mist space-y-2">
                    <li><a href="#summary" className="link-aurora">Executive summary</a></li>
                    <li><a href="#detail" className="link-aurora">Market detail</a></li>
                    <li><a href="#outlook" className="link-aurora">Outlook</a></li>
                  </ul>
                </div>
                <div className="card-surface p-6">
                  <span className="mono-label text-aurora-green block mb-3">REPORT BY</span>
                  <p className="font-display text-lg text-frost">Northern Lights Appraisals</p>
                  <p className="font-mono text-xs text-mist mt-1">Edmonton, AB · {post.date}</p>
                </div>
              </div>
            </aside>
          </div>
        </Container>

        {next && (
          <Container size="lg" className="mt-24">
            <Link
              href={`/blog/${next.slug}`}
              className="card-surface p-8 flex items-center justify-between group"
            >
              <div>
                <span className="mono-label text-aurora-green">NEXT REPORT</span>
                <h3 className="h-sub text-xl text-frost mt-2 group-hover:text-aurora-green transition-colors">
                  {next.title}
                </h3>
              </div>
              <ArrowRight size={20} className="text-mist group-hover:text-aurora-green transition-colors" />
            </Link>
          </Container>
        )}
      </article>

      <CTASection />
    </>
  );
}
