import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading, Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ProcessTimeline } from "@/components/admissions/process-timeline";
import { StickyApply } from "@/components/admissions/sticky-apply";
import { FinalCta } from "@/components/final-cta";
import { IMAGES } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Admissions",
  description:
    "Eligibility, tuition, scholarships, and the step-by-step application process for Go Early College.",
  path: "/admissions",
});

const WHATS_INCLUDED = [
  "AWS Dual Diploma enrolment",
  "Transcript issuance",
  "Credit-bearing courses",
  "Dedicated counsellor",
  "Monthly counsellor sessions",
  "Psychometric assessment",
  "University application support",
  "Parent dashboard",
  "Course completion certificates from US university partners",
];

const SCHOLARSHIPS = [
  { title: "Merit-based", detail: "For students with demonstrated academic achievement — reviewed during admissions." },
  { title: "Need-based", detail: "Financial aid for qualifying families — discussed confidentially during admissions consultation." },
  {
    title: "Early enrolment",
    detail: "Discount for applications confirmed before the cohort deadline — percentage shared during consultation.",
  },
  { title: "Sibling discount", detail: "10% reduction for a second child from the same family." },
  { title: "Referral credit", detail: "Fee credit for each enrolled family successfully referred." },
];

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
        <div className="flex flex-wrap items-center gap-4">
          <Button href="/assessment">Take the Free Assessment</Button>
          <Button href="/apply" variant="secondary">
            Start Your Application
          </Button>
        </div>
      </PageHero>

      {/* Cohort urgency */}
      <section className="bg-crimson py-16 text-ivory md:py-20">
        <Container>
          <Reveal className="flex flex-col items-center gap-5 text-center">
            <Eyebrow tone="gold" className="justify-center">
              Cohort Enrolment
            </Eyebrow>
            <h2 className="max-w-2xl font-serif text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.15] text-balance">
              The next cohort has a closing date. Start before it passes.
            </h2>
            <p className="max-w-2xl text-[16px] leading-relaxed text-ivory/80">
              Go Early College admits students in cohorts — structured groups who begin
              courses together and benefit from shared progress, peer accountability,
              and coordinated counsellor support. The next cohort enrolment closes on
              [DATE — update before launch]. Applications submitted after this date
              will be considered for the following cohort — which means months of
              credits not building.
            </p>
            <Button href="/apply" variant="primary" className="mt-2">
              Start your application now →
            </Button>
            <p className="text-[13px] text-ivory/60">
              If your family needs more time, we will tell you honestly. We would
              rather you enrol confidently than rush.
            </p>
          </Reveal>
        </Container>
      </section>

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

            <Reveal className="rounded-sm border border-ivory/15 p-7">
              <h3 className="font-serif text-lg text-gold">What&rsquo;s Included</h3>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {WHATS_INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] leading-relaxed text-ivory/75">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Scholarships */}
      <section className="bg-ivory py-24 md:py-32">
        <Container>
          <SectionHeading eyebrow="Scholarships" title="Five ways to make the program more accessible." />
          <Reveal as="div" stagger className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {SCHOLARSHIPS.map((s) => (
              <div key={s.title} className="border-t border-charcoal/15 pt-6">
                <h3 className="font-serif text-lg text-crimson">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-charcoal-soft/75">{s.detail}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <FinalCta
        title="Ready to apply?"
        primaryLabel="Take the Free Assessment"
        primaryHref="/assessment"
        secondaryLabel="Talk to Admissions"
        secondaryHref="/contact"
        reassurance
      />

      <StickyApply />
    </>
  );
}
