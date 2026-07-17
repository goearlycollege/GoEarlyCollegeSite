"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const STEPS = [
  {
    title: "Enroll",
    detail: "Apply and confirm eligibility while continuing at your current school.",
  },
  {
    title: "Learn",
    detail: "Join live, faculty-led courses alongside a small, motivated cohort.",
  },
  {
    title: "Earn Credit",
    detail: "Complete coursework and earn transferable, US-accredited college credit.",
  },
  {
    title: "Get Mentored",
    detail: "Work with a dedicated mentor on academic strategy and university applications.",
  },
  {
    title: "Enter University",
    detail: "Apply with a stronger transcript and arrive on campus already ahead.",
  },
];

export function ProcessSteps() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(".process-line-fill", { scaleX: 0, transformOrigin: "left center" });
      gsap.to(".process-line-fill", {
        scaleX: 1,
        duration: 1.6,
        ease: "power2.inOut",
        scrollTrigger: { trigger: ref.current, start: "top 65%", once: true },
      });
      gsap.from(".process-step", {
        autoAlpha: 0,
        y: 28,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 65%", once: true },
      });
    },
    { scope: ref }
  );

  return (
    <section ref={ref} className="bg-ivory py-24 md:py-32">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="The Learning Model"
          title="Five steps from enrollment to university."
          className="mx-auto max-w-2xl"
        />

        <div className="relative mt-20">
          <div className="absolute left-[5%] right-[5%] top-6 hidden h-px bg-charcoal/10 md:block">
            <div className="process-line-fill h-full bg-gradient-to-r from-crimson to-gold" />
          </div>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-5 md:gap-6">
            {STEPS.map((step, i) => (
              <div key={step.title} className="process-step flex flex-col items-start gap-4 md:items-center md:text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-crimson/30 bg-cream font-serif text-lg text-crimson">
                  {i + 1}
                </span>
                <h3 className="font-serif text-lg text-charcoal">{step.title}</h3>
                <p className="max-w-[200px] text-[14px] leading-relaxed text-charcoal-soft/75">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
