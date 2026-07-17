"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  children,
  height = "large",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  image: string;
  imageAlt?: string;
  children?: React.ReactNode;
  height?: "large" | "medium";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.15 });
      tl.from(".hero-eyebrow", { autoAlpha: 0, y: 16, duration: 0.7, ease: "power3.out" })
        .from(
          ".hero-title",
          { autoAlpha: 0, y: 30, duration: 0.9, ease: "power3.out" },
          "-=0.45"
        )
        .from(
          ".hero-desc",
          { autoAlpha: 0, y: 20, duration: 0.8, ease: "power3.out" },
          "-=0.55"
        )
        .from(
          ".hero-extra",
          { autoAlpha: 0, y: 20, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        )
        .from(
          ".hero-image",
          { scale: 1.12, duration: 1.6, ease: "power2.out" },
          0
        );
    },
    { scope: ref }
  );

  return (
    <section
      ref={ref}
      className={cn(
        "relative flex items-end overflow-hidden bg-charcoal text-ivory",
        height === "large" ? "min-h-[78vh] pt-[var(--header-height)]" : "min-h-[52vh] pt-[var(--header-height)]"
      )}
    >
      <div className="hero-image absolute inset-0">
        <Image src={image} alt={imageAlt} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/35" />
        <div className="absolute inset-0 bg-crimson/20 mix-blend-multiply" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 pb-16 md:px-10 md:pb-20 lg:px-16">
        <span className="hero-eyebrow mb-5 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-gold">
          <span className="h-px w-8 bg-gold" />
          {eyebrow}
        </span>
        <h1 className="hero-title max-w-3xl font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.05] text-balance">
          {title}
        </h1>
        {description && (
          <p className="hero-desc mt-6 max-w-xl text-[17px] leading-relaxed text-ivory/75">
            {description}
          </p>
        )}
        {children && <div className="hero-extra mt-9">{children}</div>}
      </div>
    </section>
  );
}
