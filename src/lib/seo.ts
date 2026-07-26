import type { Metadata } from "next";

// Brief Section 7 — every page needs canonical/OG/Twitter tags, not just
// title/description. Pages call buildMetadata() instead of hand-rolling this.
export const SITE_NAME = "Go Early College";
export const SITE_URL = "https://goearlycollege.com";

export function buildMetadata({
  title,
  fullTitle,
  description,
  path,
  image,
}: {
  title: string;
  /** Some brief pages specify the complete, already brand-suffixed <title>
   * text rather than a bare fragment — pass it here to bypass the root
   * layout's "%s | Go Early College" template instead of double-suffixing. */
  fullTitle?: string;
  description: string;
  path: string;
  /** Absolute or root-relative URL to a 1200x630 branded image. No default —
   * see Section 10.5: real branded OG photography hasn't been supplied yet. */
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const socialTitle = fullTitle ?? `${title} | ${SITE_NAME}`;
  const images = image ? [{ url: image, width: 1200, height: 630 }] : undefined;

  return {
    title: fullTitle ? { absolute: fullTitle } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: image ? [image] : undefined,
    },
  };
}
