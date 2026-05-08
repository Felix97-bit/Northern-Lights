import type { MetadataRoute } from "next";
import { services } from "@/lib/content/services";
import { blogPosts } from "@/lib/content/blog";

const BASE = "https://northernlightsappraisals.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/about",
    "/team",
    "/services",
    "/fees",
    "/order",
    "/testimonials",
    "/blog",
    "/partners",
    "/careers",
    "/faq",
    "/contact"
  ].map((p) => ({
    url: `${BASE}${p || "/"}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.7
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.5
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
