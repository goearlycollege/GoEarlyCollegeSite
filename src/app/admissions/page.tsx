import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading, Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ProcessTimeline } from "@/components/admissions/process-timeline";
import { StickyApply } from "@/components/admissions/sticky-apply";
import { FinalCta } from "@/components/final-cta";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Eligibility, tuition, scholarships, and the step-by-step application process for Go Early College.",
};

const ELIGIBILITY = [
  {
    title: "Grade Level",
    detail: "Currently enrolled in grades 9 through 12, in any board or curriculum.",
  },
  {
    title: "Academic Standing",
    detail: "A consistent record of academic effort — we look for growth, not just grades.",
  },
  {
    title: "Motivation",
    detail: "A genuine interest in pursuing university-level work ahead of schedule.",
  },
  {
    title: "Time Availability",
    detail: "Capacity for 6–8 hours per week alongside your current school schedule.",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Your path to enrollment."
        description="A transparent, five-step process — from application to your first day of class."
        image={IMAGES.libraryDramatic}
        imageAlt="Tall, curved rows of library bookshelves rising into shadow."
      >
        <Button href="/apply">Start Your Application</Button>
      </PageHero>

      {/* Eligibility */}
      <section className="bg-cream py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Eligibility"
            title="Who Go Early College is for."
            description="We admit ambitious students, not just high scorers. Here's what we look for."
          />
          <Reveal as="div" stagger className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {ELIGIBILITY.map((item, i) => (
              <div key={item.title} className="border-t border-charcoal/15 pt-6">
                <span className="font-serif text-3xl text-gold/60">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-serif text-lg text-charcoal">{item.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-charcoal-soft/80">{item.detail}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <ProcessTimeline />

      {/* Tuition & scholarships */}
      <section className="bg-charcoal py-24 text-ivory md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
            <Reveal className="flex flex-col gap-6">
              <Eyebrow tone="gold">Tuition & Aid</Eyebrow>
              <h2 className="font-serif text-[clamp(2rem,3.6vw,3rem)] leading-[1.1] text-balance">
                An investment in a stronger transcript.
              </h2>
              <p className="max-w-lg text-[16px] leading-relaxed text-ivory/75">
                Tuition covers accredited coursework, mentorship, and official
                transcript issuance. Need- and merit-based scholarships are available,
                and our admissions team works with every family to find a plan that
                fits.
              </p>
              <Button href="/contact" variant="outline" className="mt-2 w-fit border-ivory/30 text-ivory hover:bg-ivory/10">
                Request Tuition & Aid Details
              </Button>
            </Reveal>

            <Reveal as="div" stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[
                {
                  title: "What's Included",
                  items: ["Live faculty-led courses", "US-accredited transcript", "1:1 mentorship", "Application support"],
                },
                {
                  title: "Scholarships",
                  items: ["Merit-based awards", "Need-based aid", "Early enrollment discounts", "Sibling & referral aid"],
                },
              ].map((card) => (
                <div key={card.title} className="rounded-sm border border-ivory/15 p-7">
                  <h3 className="font-serif text-lg text-gold">{card.title}</h3>
                  <ul className="mt-5 flex flex-col gap-3">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[14px] leading-relaxed text-ivory/75">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      <FinalCta title="Ready to apply?" secondaryLabel="Talk to Admissions" secondaryHref="/contact" />

      <StickyApply />
    </>
  );
}
