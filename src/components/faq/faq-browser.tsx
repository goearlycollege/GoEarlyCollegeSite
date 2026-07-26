"use client";

import { useMemo, useState } from "react";
import { Accordion } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { FAQ_CATEGORIES, FAQS } from "@/lib/faq-data";

export function FaqBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"All" | (typeof FAQ_CATEGORIES)[number]>("All");

  const filtered = useMemo(() => {
    return FAQS.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;
      const q = query.trim().toLowerCase();
      const matchesQuery = q.length === 0 || item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div>
      <div className="flex flex-col gap-6 border-b border-charcoal/10 pb-8">
        <div className="relative w-full max-w-md">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions…"
            aria-label="Search FAQs"
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
          {(["All", ...FAQ_CATEGORIES] as const).map((c) => (
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

      {filtered.length > 0 ? (
        <div className="mt-10">
          <Accordion
            defaultOpen={null}
            items={filtered.map((item) => ({ title: item.question, content: item.answer, meta: item.category }))}
          />
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center gap-2 text-center">
          <p className="text-[15px] text-charcoal-soft/60">
            {query
              ? `No questions match "${query}" yet.`
              : "We're still adding answers here."}
          </p>
          <p className="text-[14px] text-charcoal-soft/50">
            Message us directly and we will answer it within one business day.
          </p>
        </div>
      )}
    </div>
  );
}
