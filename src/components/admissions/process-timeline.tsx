"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const STEPS = [
  {
    title: "Submit Your Application",
    detail:
      "Complete the online application with academic history, a short statement, and school details. Takes about fifteen minutes.",
    meta: "Day 1",
  },
  {
    title: "Academic Assessment",
    detail:
      "Our academics team reviews your transcript and application to confirm readiness for college-level coursework.",
    meta: "Days 2–3",
  },
  {
    title: "Admissions Interview",
    detail:
      "A conversational interview with an admissions counselor — no trick questions, just a real discussion about your goals.",
    meta: "Days 3–5",
  },
  {
    title: "Offer & Enrollment",
    detail:
      "Admitted students receive an official offer along with tuition, aid, and enrollment details to confirm their seat.",
    meta: "Days 5–10",
  },
  {
    title: "Orientation & Onboarding",
    detail:
      "New students meet their mentor, plan their first course sequence, and join their cohort before classes begin.",
    meta: "Step 05",
  },
];

export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".timeline-fill", {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 60%",
          end: "bottom 70%",
          scrub: 0.6,
        },
      });

      gsap.utils.toArray<HTMLElement>(".timeline-step").forEach((el) => {
        gsap.from(el, {
          autoAlpha: 0,
          y: 30,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
        });
      });
    },
    { scope: ref }
  );

  return (
    <section ref={ref} className="bg-ivory py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="How to Apply"
          title="Five steps to enrollment."
          description="A straightforward, transparent process — most students complete it in under two weeks."
        />

        <div className="relative mt-16 pl-2">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-charcoal/10 md:left-[23px]">
            <div className="timeline-fill absolute left-0 top-0 h-0 w-px bg-crimson" />
          </div>

          <div className="flex flex-col gap-14">
            {STEPS.map((step, i) => (
              <div key={step.title} className="timeline-step relative flex gap-8 pl-4">
                <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-crimson bg-ivory font-serif text-lg text-crimson md:h-12 md:w-12">
                  {i + 1}
                </span>
                <div className="pt-1">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-dark">
                    {step.meta}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl text-charcoal">{step.title}</h3>
                  <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-charcoal-soft/80">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
