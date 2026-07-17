"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export type AccordionItem = {
  title: string;
  content: React.ReactNode;
  meta?: string;
};

export function Accordion({
  items,
  className,
  defaultOpen = 0,
}: {
  items: AccordionItem[];
  className?: string;
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className={cn("flex flex-col divide-y divide-charcoal/10 border-y border-charcoal/10", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="group flex w-full items-start justify-between gap-6 py-6 text-left"
            >
              <span className="flex items-baseline gap-4">
                <span className="font-serif text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
                <span
                  className={cn(
                    "font-serif text-xl transition-colors duration-300 md:text-2xl",
                    isOpen ? "text-crimson" : "text-charcoal group-hover:text-crimson"
                  )}
                >
                  {item.title}
                </span>
              </span>
              <span className="mt-1 flex items-center gap-3 shrink-0">
                {item.meta && (
                  <span className="hidden text-xs font-semibold uppercase tracking-[0.14em] text-charcoal-soft/50 md:inline">
                    {item.meta}
                  </span>
                )}
                <span
                  className={cn(
                    "relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-charcoal/15 transition-all duration-300",
                    isOpen && "rotate-45 border-crimson bg-crimson text-ivory"
                  )}
                >
                  <span className="absolute h-px w-3 bg-current" />
                  <span className="absolute h-3 w-px bg-current" />
                </span>
              </span>
            </button>
            <div
              className="grid transition-all duration-500 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="max-w-3xl pb-7 pl-[2.85rem] text-[15.5px] leading-relaxed text-charcoal-soft/85">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
