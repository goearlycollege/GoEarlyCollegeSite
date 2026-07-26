import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Brief Section 7 — allow all pages except /thank-you (dynamic, no SEO value)
// and API routes.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/thank-you", "/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
