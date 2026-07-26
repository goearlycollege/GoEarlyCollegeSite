"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CATEGORIES, RESOURCES, type Resource } from "@/lib/resources-data";

function ResourceCard({ resource, large = false }: { resource: Resource; large?: boolean }) {
  return (
    <Link
      href={`/blog/${resource.slug}`}
      className={cn(
        "group mb-6 block break-inside-avoid overflow-hidden rounded-sm border border-charcoal/10 bg-cream transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-20px_rgba(29,31,35,0.25)]"
      )}
    >
      <div className={cn("relative overflow-hidden", large ? "aspect-[16/10]" : "aspect-[4/3]")}>
        <Image
          src={resource.image}
          alt=""
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <span className="absolute left-4 top-4 rounded-full bg-ivory/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-crimson backdrop-blur-sm">
          {resource.category}
        </span>
      </div>
      <div className="flex flex-col gap-3 p-6">
        <span className="text-[12px] uppercase tracking-[0.1em] text-charcoal-soft/50">
          {resource.date} &middot; {resource.readTime}
        </span>
        <h3 className={cn("font-serif text-charcoal transition-colors group-hover:text-crimson", large ? "text-2xl md:text-[28px]" : "text-xl")}>
          {resource.title}
        </h3>
        <p className="text-[14.5px] leading-relaxed text-charcoal-soft/80">{resource.excerpt}</p>
        <span className="mt-1 inline-flex items-center gap-2 text-[12.5px] font-semibold uppercase tracking-[0.1em] text-crimson">
          Read
          <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
        </span>
      </div>
    </Link>
  );
}

export function ResourceLibrary() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");

  const featured = RESOURCES.find((r) => r.featured);
  const rest = RESOURCES.filter((r) => !r.featured);

  const filtered = useMemo(() => {
    return rest.filter((r) => {
      const matchesCategory = category === "All" || r.category === category;
      const matchesQuery =
        query.trim().length === 0 ||
        r.title.toLowerCase().includes(query.toLowerCase()) ||
        r.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category, rest]);

  const showFeatured = category === "All" && query.trim().length === 0 && featured;

  return (
    <div>
      <div className="flex flex-col gap-6 border-b border-charcoal/10 pb-8 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full max-w-md">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search guides, blog posts, webinars…"
            aria-label="Search resources"
            className="w-full rounded-sm border border-charcoal/15 bg-cream px-5 py-3.5 pl-11 text-[15px] text-charcoal placeholder:text-charcoal-soft/45 focus:border-crimson focus:outline-none"
          />
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-soft/50"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </div>

        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={cn(
                "rounded-full border px-4 py-2 text-[12.5px] font-semibold uppercase tracking-[0.08em] transition-colors duration-300",
                category === c
                  ? "border-crimson bg-crimson text-ivory"
                  : "border-charcoal/15 text-charcoal-soft/70 hover:border-crimson/40 hover:text-crimson"
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {showFeatured && (
        <div className="mt-10">
          <ResourceCard resource={featured} large />
        </div>
      )}

      {filtered.length > 0 ? (
        <div className="mt-6 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {filtered.map((resource) => (
            <ResourceCard key={resource.slug} resource={resource} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-[15px] text-charcoal-soft/60">
          No resources match &ldquo;{query}&rdquo; yet. Try another search.
        </p>
      )}
    </div>
  );
}
