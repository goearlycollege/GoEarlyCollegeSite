import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { RESOURCES } from "@/lib/resources-data";

// Brief Section 20 gives an explicit priority table, but it lists /apply at
// 0.9 while the same page's own developer note says to *exclude* /apply
// (multi-step form) from the sitemap entirely — a contradiction in the brief.
// The exclude instruction is the more specific/deliberate one (forms have no
// standalone SEO value), so /apply is left out here despite appearing in the
// priority table.
const STATIC_PRIORITIES: Record<string, number> = {
  "/": 1.0,
  "/assessment": 1.0,
  "/program": 0.9,
  "/admissions": 0.9,
  "/pricing": 0.9,
  "/school-partners": 0.8,
  "/universities": 0.8,
  "/success-stories": 0.8,
  "/faq": 0.8,
  "/about": 0.7,
  "/contact": 0.7,
  "/resources": 0.7,
  // Not given explicit priorities in the brief — set by analogy to the
  // nearest comparable tier above rather than left out of the sitemap.
  "/for-students": 0.7,
  "/blog": 0.7,
  "/privacy-policy": 0.3,
  "/terms-of-use": 0.3,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = Object.entries(STATIC_PRIORITIES).map(([path, priority]) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = RESOURCES.map((r) => ({
    url: `${SITE_URL}/blog/${r.slug}`,
    lastModified: new Date(),
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
