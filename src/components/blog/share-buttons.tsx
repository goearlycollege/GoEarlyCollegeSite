"use client";

import { useState } from "react";
import { whatsappHref } from "@/lib/whatsapp";
import { SITE_URL } from "@/lib/seo";

export function ShareButtons({ path, title }: { path: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const url = `${SITE_URL}${path}`;

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard unavailable — no-op
    }
  }

  const linkClass =
    "inline-flex items-center gap-2 rounded-full border border-charcoal/15 px-4 py-2 text-[12.5px] font-semibold uppercase tracking-[0.08em] text-charcoal-soft/70 transition-colors hover:border-crimson hover:text-crimson";

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a href={whatsappHref(`${title} — ${url}`)} target="_blank" rel="noreferrer" className={linkClass}>
        WhatsApp
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noreferrer"
        className={linkClass}
      >
        LinkedIn
      </a>
      <a href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`} className={linkClass}>
        Email
      </a>
      <button type="button" onClick={copyLink} className={linkClass}>
        {copied ? "Copied!" : "Copy link"}
      </button>
    </div>
  );
}
