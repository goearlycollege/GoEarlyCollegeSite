"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function StickyApply() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const distanceFromBottom =
        document.documentElement.scrollHeight - window.scrollY - window.innerHeight;
      // Hide once the footer is likely in view, so the pill doesn't sit on top of it.
      setVisible(window.scrollY > 720 && distanceFromBottom > 500);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-charcoal/10 bg-ivory/95 backdrop-blur-md transition-transform duration-500 ease-out md:bottom-6 md:inset-x-auto md:right-6 md:rounded-sm md:border md:shadow-[0_20px_50px_-16px_rgba(29,31,35,0.25)]",
        visible ? "translate-y-0" : "translate-y-[130%]"
      )}
    >
      <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-4 px-6 py-4 md:justify-start md:px-6">
        <div className="hidden md:block">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-charcoal-soft/60">
            Applications Open
          </p>
          <p className="font-serif text-base text-charcoal">Ready when you are.</p>
        </div>
        <Button href="/apply" className="w-full md:w-auto">
          Apply Now
        </Button>
      </div>
    </div>
  );
}
