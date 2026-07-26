import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";
import { Stat } from "@/components/ui/stat";
import { Button } from "@/components/ui/button";
import { ProcessSteps } from "@/components/program/process-steps";
import { ThreeHours } from "@/components/program/three-hours";
import { PsychometricAssessment } from "@/components/program/psychometric-assessment";
import { CreditPathway } from "@/components/program/credit-pathway";
import { FinalCta } from "@/components/final-cta";
import { IMAGES } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Program",
  fullTitle: "The Program | Go Early College — US Credits While Still in School",
  description:
    "How Go Early College works — accredited courses earning real US college credits, 1:1 counselling, psychometric assessment, and a credit pathway from first course to Associate Degree and Bachelor's Degree.",
  path: "/program",
});

const CURRICULUM: { title: string; meta: string; content: string }[] = [
  {
    title: "Foundations of Academic Writing",
    meta: "3 Credits",
    content: "College-level composition and argumentation. Recommended as a first course for all students.",
  },
  {
    title: "Introduction to Computer Science",
    meta: "4 Credits",
    content: "Programming fundamentals and computational thinking. Standard first course for STEM pathways.",
  },
  {
    title: "Microeconomics",
    meta: "3 Credits",
    content: "Core economic reasoning with real-world case studies. Recommended for business and economics pathways.",
  },
  {
    title: "Statistics and Data Reasoning",
    meta: "3 Credits",
    content: "Quantitative literacy transferable to science, business, and social science programs.",
  },
  {
    title: "Global History Seminar",
    meta: "3 Credits",
    content: "Discussion-based survey developing analytical and research skills for humanities programs.",
  },
  {
    title: "Introduction to Psychology",
    meta: "3 Credits",
    content: "One of the most broadly transferable introductory courses in the US university system.",
  },
  {
    title: "Business Communication",
    meta: "3 Credits",
    content: "Professional writing and communication for business and management degree pathways.",
  },
  {
    title: "College Success and Research Methods",
    meta: "2 Credits",
    content: "Time management, research design, and academic strategy.",
  },
];

const FAQ = [
  {
    title: "Does my child have to leave their current school?",
    content:
      "No. Not for a single day. Same school. Same board. Same teachers. Same exams. Nothing about their existing education changes.",
  },
  {
    title: "How much time does this actually add?",
    content:
      "3 to 5 hours per week per course. Online. Self-paced. Most students settle into the rhythm within two weeks of starting.",
  },
  {
    title: "Will the credits transfer to the universities we are targeting?",
    content:
      "Our credits are regionally accredited. Our admissions team confirms transfer policy for every university on your child's target list before a single course is recommended.",
  },
  {
    title: "What if my child finds it too demanding?",
    content: "The counsellor monitors workload proactively and adjusts the course load before it becomes a problem.",
  },
  {
    title: "Can a student in Grade 8 or 9 join?",
    content: "Yes. We accept students from Grade 8 through Grade 12. A student who starts in Grade 8 could have an Associate Degree by Grade 12.",
  },
];

export default function ProgramPage() {
  return (
    <>
      <PageHero
        eyebrow="The Program"
        title="How Go Early College works."
        description="A structured pathway from enrolment to university — accredited courses earning real US college credits, a dedicated counsellor from day one, and a model built to fit around the school life already underway."
        image={IMAGES.lectureHall}
        imageAlt="An empty lecture hall with tiered rows of seats, lit by warm afternoon light."
      >
        <div className="flex flex-wrap gap-10">
          <Stat value="Grade 8–12" label="Eligible Grade Levels" />
          <Stat value="3–5 hrs" label="Weekly Commitment per Course" />
          <Stat value="3–4 Credits" label="Earned per Course Completed" />
          <Stat value="1:1" label="Dedicated Academic Counsellor" />
        </div>
        <Button href="#curriculum" variant="outline" className="mt-8 w-fit border-ivory/40 text-ivory hover:bg-ivory/10">
          See the full course catalogue →
        </Button>
      </PageHero>

      <ThreeHours />

      <ProcessSteps />

      {/* Curriculum accordion */}
      <section id="curriculum" className="scroll-mt-24 bg-ivory py-24 md:py-32">
        <Container>
          <SectionHeading
            title="A course catalogue built for transfer. And for your child specifically."
            description="Every Go Early College course earns 3 to 4 real, transferable US college credits. Course selection is personalised by your counsellor. These are sample courses from the full catalogue."
          />
          <Reveal className="mt-14">
            <Accordion items={CURRICULUM} />
          </Reveal>
          <div className="mt-8 flex flex-col items-start gap-2">
            <Button href="/contact" variant="outline" className="w-fit border-crimson text-crimson hover:bg-crimson/[0.06]">
              Request the full course catalogue →
            </Button>
            <p className="text-[13px] text-charcoal-soft/55">
              Your counsellor personalises course selection during onboarding.
            </p>
          </div>
        </Container>
      </section>

      <PsychometricAssessment />

      <CreditPathway />

      {/* FAQ */}
      <section className="bg-cream py-24 md:py-32">
        <Container>
          <SectionHeading align="center" title="Frequently asked questions." className="mx-auto max-w-2xl" />
          <Reveal className="mx-auto mt-14 max-w-3xl">
            <Accordion items={FAQ} defaultOpen={null} />
          </Reveal>
        </Container>
      </section>

      <FinalCta
        title="Start Earlier. Go Further."
        description="Every month your child is not enrolled is a month of credits not building. The free College Readiness Assessment takes 15 minutes."
        primaryLabel="Take the Free Assessment"
        primaryHref="/assessment"
        secondaryLabel="Apply Now"
        secondaryHref="/apply"
        secondaryVariant="secondary"
        reassurance="Free. No commitment. Personalised report in 60 seconds."
      />
    </>
  );
}
