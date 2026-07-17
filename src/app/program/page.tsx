import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading, Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";
import { Stat } from "@/components/ui/stat";
import { ProcessSteps } from "@/components/program/process-steps";
import { FinalCta } from "@/components/final-cta";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Program",
  description:
    "See how Go Early College works, from enrollment to university: live faculty-led courses, an accredited curriculum, and 1:1 mentorship.",
};

const LEARNING_MODEL = [
  {
    title: "Live, Faculty-Led Classes",
    detail:
      "Small cohorts meet in real time with instructors trained in US higher-education pedagogy — not pre-recorded lectures.",
  },
  {
    title: "Flexible Around School",
    detail:
      "Coursework is scheduled around your existing school day, so nothing about your current education has to change.",
  },
  {
    title: "Rigor With Support",
    detail:
      "University-level expectations, paired with structured mentorship so no student is left to navigate it alone.",
  },
];

const CURRICULUM: { title: string; meta: string; content: string }[] = [
  {
    title: "Foundations of Academic Writing",
    meta: "3 Credits",
    content:
      "College-level composition and argumentation, taught in the seminar style used at US universities. Builds the writing foundation every discipline depends on.",
  },
  {
    title: "Introduction to Computer Science",
    meta: "4 Credits",
    content:
      "Programming fundamentals, computational thinking, and applied problem-solving — a common first course for STEM-track students.",
  },
  {
    title: "Microeconomics",
    meta: "3 Credits",
    content:
      "Core economic reasoning: markets, incentives, and decision-making, taught with real-world case studies.",
  },
  {
    title: "Statistics & Data Reasoning",
    meta: "3 Credits",
    content:
      "Quantitative literacy for every field, from experimental design to interpreting real datasets.",
  },
  {
    title: "Global History Seminar",
    meta: "3 Credits",
    content:
      "A discussion-based survey of global history, developing the analytical and research skills expected in college humanities.",
  },
  {
    title: "College Success & Research Methods",
    meta: "2 Credits",
    content:
      "Time management, research design, and academic strategy — the invisible curriculum that determines who thrives in university.",
  },
];

const FAQ = [
  {
    title: "Do I need to leave my current school?",
    content:
      "No. Go Early College runs alongside your existing education. Classes are scheduled so you can continue at your current school without disruption.",
  },
  {
    title: "How much time does the program require?",
    content:
      "Most students commit 6–8 hours per week, including live class time, coursework, and mentorship sessions.",
  },
  {
    title: "Will the credits actually transfer?",
    content:
      "Yes. Coursework is US-accredited and designed for transfer. Our admissions team can help confirm transfer policy for any specific university.",
  },
  {
    title: "Who teaches the courses?",
    content:
      "Faculty with experience teaching at the college level in the United States, supported by teaching assistants who work directly with each cohort.",
  },
  {
    title: "What grade levels are eligible?",
    content:
      "Students typically join in grades 10–12, though strong applicants in grade 9 are considered on a case-by-case basis.",
  },
];

export default function ProgramPage() {
  return (
    <>
      <PageHero
        eyebrow="The Program"
        title="How Go Early College works."
        description="A structured pathway from enrollment to university — live faculty-led courses, an accredited curriculum, and mentorship built around your ambition."
        image={IMAGES.lectureHall}
        imageAlt="An empty lecture hall with tiered rows of seats, lit by warm afternoon light."
      >
        <div className="flex flex-wrap gap-10">
          <Stat value="9-12" label="Eligible Grade Levels" />
          <Stat value="6-8 hrs" label="Weekly Commitment" />
          <Stat value="1:1" label="Dedicated Mentorship" />
        </div>
      </PageHero>

      <ProcessSteps />

      {/* Learning model */}
      <section className="bg-cream py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src={IMAGES.classroomModern}
                alt="An empty modern classroom set up for live, screen-based instruction."
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
            </Reveal>
            <div className="flex flex-col gap-10">
              <SectionHeading
                eyebrow="Learning Model"
                title="University rigor, built around real school life."
                description="Every element of the model is designed so students can pursue university-level work without sacrificing the education already underway."
              />
              <Reveal as="div" stagger className="flex flex-col gap-8">
                {LEARNING_MODEL.map((item) => (
                  <div key={item.title} className="flex gap-5 border-t border-charcoal/10 pt-6">
                    <span className="h-px w-8 shrink-0 translate-y-3 bg-gold" />
                    <div>
                      <h3 className="font-serif text-lg text-charcoal">{item.title}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-charcoal-soft/80">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Curriculum accordion */}
      <section className="bg-ivory py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Curriculum"
            title="A course catalogue built for transfer."
            description="A sample of the accredited coursework available to Go Early College students. Full sequencing is personalized during onboarding."
          />
          <Reveal className="mt-14">
            <Accordion items={CURRICULUM} />
          </Reveal>
        </Container>
      </section>

      {/* Mentorship */}
      <section className="bg-charcoal py-24 text-ivory md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <Reveal className="flex flex-col gap-6">
              <Eyebrow tone="gold">Mentorship</Eyebrow>
              <h2 className="font-serif text-[clamp(2rem,3.6vw,3rem)] leading-[1.1] text-balance">
                A mentor in your corner, from day one.
              </h2>
              <p className="max-w-lg text-[16px] leading-relaxed text-ivory/75">
                Every student is paired with a dedicated mentor who tracks academic
                progress, plans course sequencing, and prepares university
                applications alongside them. It&rsquo;s the difference between taking
                courses and building a profile.
              </p>
              <ul className="mt-2 flex flex-col gap-3 text-[15px] text-ivory/75">
                {["Personalized course planning", "Application strategy sessions", "Direct faculty office hours", "Parent progress updates"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </Reveal>
            <Reveal className="relative aspect-[4/5] overflow-hidden rounded-sm lg:aspect-[5/6]">
              <Image
                src={IMAGES.mentorMeeting}
                alt="A small group meets around a table for mentorship and office hours."
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 90vw"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-24 md:py-32">
        <Container>
          <SectionHeading align="center" eyebrow="Common Questions" title="Frequently asked questions." className="mx-auto max-w-2xl" />
          <Reveal className="mx-auto mt-14 max-w-3xl">
            <Accordion items={FAQ} defaultOpen={null} />
          </Reveal>
        </Container>
      </section>

      <FinalCta secondaryLabel="See University Pathways" secondaryHref="/universities" />
    </>
  );
}
