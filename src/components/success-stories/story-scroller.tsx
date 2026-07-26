"use client";

import Image from "next/image";
import { useRef } from "react";
import { STORIES } from "@/lib/stories-data";
import { cn } from "@/lib/utils";

export function StoryScroller() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-story-card]");
    const width = card ? card.offsetWidth + 24 : 480;
    el.scrollBy({ left: dir * width, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4"
      >
        {STORIES.map((story) => (
          <article
            key={story.name}
            data-story-card
            className="relative flex w-[85vw] shrink-0 snap-center flex-col overflow-hidden rounded-sm bg-charcoal text-ivory sm:w-[70vw] md:w-[560px]"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={story.image}
                alt={`Portrait of ${story.name}`}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 560px, 85vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-transparent" />
              <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="font-serif text-2xl">{story.name}</p>
                  <p className="text-[12px] uppercase tracking-[0.1em] text-ivory/60">{story.cohort}</p>
                </div>
                <div className="text-right">
                  <p className="font-serif text-3xl text-gold">{story.stat.value}</p>
                  <p className="text-[11px] uppercase tracking-[0.1em] text-ivory/50">{story.stat.label}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4 p-7">
              <p className="text-[12.5px] font-semibold uppercase tracking-[0.1em] text-gold">{story.outcome}</p>
              <blockquote className="font-serif text-lg italic leading-relaxed text-ivory/90">
                &ldquo;{story.quote}&rdquo;
              </blockquote>
              <div className="mt-1 border-t border-ivory/10 pt-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ivory/45">
                  What made the difference
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-ivory/70">{story.whatMadeTheDifference}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        {(["-1", "1"] as const).map((dir) => (
          <button
            key={dir}
            type="button"
            onClick={() => scrollByCard(dir === "-1" ? -1 : 1)}
            aria-label={dir === "-1" ? "Previous story" : "Next story"}
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition-colors duration-300 hover:border-crimson hover:bg-crimson hover:text-ivory"
            )}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
              {dir === "-1" ? <path d="m15 6-6 6 6 6" /> : <path d="m9 6 6 6-6 6" />}
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}
