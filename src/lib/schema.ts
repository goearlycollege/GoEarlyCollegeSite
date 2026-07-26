import { SITE_NAME, SITE_URL } from "@/lib/seo";
import type { FaqItem } from "@/lib/faq-data";

// Brief Section 7 — Organization schema on homepage.
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/brand/logo-mark.png`,
    description:
      "India's first Early College Access program, powered by American World School (AWS) — WASC accredited, UGC equivalent.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Perungudi, OMR Road",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    email: "admissions@goearlycollege.com",
    sameAs: [
      "https://www.instagram.com/goearlycollege",
      "https://www.linkedin.com/company/goearlycollege",
      "https://www.youtube.com/@goearlycollege",
      "https://www.facebook.com/goearlycollege",
    ],
  };
}

// Brief Section 7 — FAQPage schema on /faq.
export function faqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

// Brief Section 7 — BreadcrumbList on all interior pages.
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
