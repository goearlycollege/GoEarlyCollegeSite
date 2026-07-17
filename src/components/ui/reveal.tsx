"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  delay?: number;
  y?: number;
  duration?: number;
  /** Animate direct children with a staggered reveal instead of the wrapper itself */
  stagger?: boolean;
  staggerAmount?: number;
};

export function Reveal({
  children,
  className,
  as: Tag = "div",
  delay = 0,
  y = 36,
  duration = 1,
  stagger = false,
  staggerAmount = 0.12,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const targets = stagger ? Array.from(ref.current.children) : ref.current;

      gsap.set(targets, { autoAlpha: 0, y });

      gsap.to(targets, {
        autoAlpha: 1,
        y: 0,
        duration,
        delay,
        ease: "power3.out",
        stagger: stagger ? staggerAmount : 0,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 88%",
          once: true,
        },
      });
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={cn(className)}>
      {children}
    </Tag>
  );
}
