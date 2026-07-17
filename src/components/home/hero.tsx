"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/lib/images";

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.3, defaults: { ease: "power3.out" } });
      tl.from(".hero-eyebrow", { autoAlpha: 0, y: 18, duration: 0.7 })
        .from(".hero-line", { autoAlpha: 0, y: 46, duration: 1, stagger: 0.12 }, "-=0.4")
        .from(".hero-sub", { autoAlpha: 0, y: 20, duration: 0.8 }, "-=0.55")
        .from(".hero-cta", { autoAlpha: 0, y: 20, duration: 0.8, stagger: 0.1 }, "-=0.6")
        .from(".hero-scroll", { autoAlpha: 0, duration: 0.6 }, "-=0.3")
        .from(imageRef.current, { scale: 1.18, duration: 1.8, ease: "power2.out" }, 0);

      gsap.to(imageRef.current, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hero-content", {
        yPercent: -25,
        autoAlpha: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "70% top",
          scrub: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative flex h-[100svh] min-h-[640px] items-end overflow-hidden bg-charcoal text-ivory">
      <div ref={imageRef} className="absolute inset-0 -top-[10%] h-[120%] w-full">
        <Image
          src={IMAGES.heroCampusArch}
          alt="An ivy-covered academic hall with gothic stone architecture."
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-crimson-dark/50 via-transparent to-transparent" />
      </div>

      <div className="hero-content relative z-10 mx-auto w-full max-w-[1360px] px-6 pb-20 md:px-10 md:pb-24 lg:px-16">
        <span className="hero-eyebrow mb-6 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-gold">
          <span className="h-px w-10 bg-gold" />
          India&rsquo;s First Early College Access Program
        </span>

        <h1 className="max-w-4xl font-serif text-[clamp(2.75rem,7.5vw,6rem)] leading-[0.98] text-balance">
          <span className="hero-line block overflow-hidden">Your Future</span>
          <span className="hero-line block overflow-hidden text-gold">Starts Earlier.</span>
        </h1>

        <p className="hero-sub mt-8 max-w-lg text-[18px] leading-relaxed text-ivory/80">
          Earn a US-accredited transcript while you&rsquo;re still in school. Go Early
          College is an institution, not a coaching centre &mdash; built to give
          ambitious students access to university-level opportunity before university
          begins.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <span className="hero-cta">
            <Button href="/apply">Apply Now</Button>
          </span>
          <span className="hero-cta">
            <Button href="/program" variant="outline" className="border-ivory/40 text-ivory hover:bg-ivory/10">
              Explore the Program
            </Button>
          </span>
        </div>
      </div>

      <div className="hero-scroll absolute bottom-8 right-6 z-10 hidden flex-col items-center gap-3 md:right-10 lg:right-16 md:flex">
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ivory/60" style={{ writingMode: "vertical-rl" }}>
          Scroll
        </span>
        <span className="h-16 w-px animate-pulse bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
