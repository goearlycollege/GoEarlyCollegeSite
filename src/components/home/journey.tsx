"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const STEPS = [
  {
    label: "School",
    detail: "Continue in your current school, curriculum unchanged.",
  },
  {
    label: "Go Early College",
    detail: "Earn a US-accredited transcript and build university-ready credentials.",
    highlight: true,
  },
  {
    label: "University",
    detail: "Enter university stronger and earlier, with a head start that lasts.",
  },
];

export function Journey() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(".path-line", { scaleX: 0, transformOrigin: "left center" });
      gsap.to(".path-line", {
        scaleX: 1,
        duration: 1.4,
        ease: "power2.inOut",
        scrollTrigger: { trigger: ref.current, start: "top 70%", once: true },
      });

      gsap.from(".journey-node", {
        autoAlpha: 0,
        y: 24,
        duration: 0.8,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%", once: true },
      });
    },
    { scope: ref }
  );

  return (
    <section ref={ref} className="bg-ivory py-24 md:py-32">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="A Category That Did Not Exist"
          title="A new pathway between school and university."
          description="We created a bridge that brings university-level opportunity to students before they leave school — earlier access, a stronger profile, a greater future."
          className="mx-auto max-w-2xl"
        />

        <div className="relative mt-20">
          <div className="path-line absolute left-[8%] right-[8%] top-[38px] hidden h-px bg-gradient-to-r from-charcoal/25 via-gold to-charcoal/25 md:block" />

          <div className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-8">
            {STEPS.map((step, i) => (
              <div key={step.label} className="journey-node relative flex flex-col items-center text-center">
                <div
                  className={`relative z-10 flex h-20 w-20 items-center justify-center rounded-full border font-serif text-2xl ${
                    step.highlight
                      ? "border-crimson bg-crimson text-ivory shadow-[0_16px_40px_-14px_rgba(122,15,20,0.55)]"
                      : "border-charcoal/15 bg-cream text-charcoal"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className={`mt-6 font-serif text-2xl ${step.highlight ? "text-crimson" : "text-charcoal"}`}>
                  {step.label}
                </h3>
                <p className="mt-3 max-w-[240px] text-[15px] leading-relaxed text-charcoal-soft/80">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-16 text-center font-serif text-lg italic text-gold-dark">
          Earlier Access. Stronger Profile. Greater Future.
        </p>
      </Container>
    </section>
  );
}
