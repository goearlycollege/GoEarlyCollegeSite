import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "For Students",
  fullTitle: "For Students | Go Early College — Build Your Future Before University",
  description:
    "You do not have to wait for university to begin building your future. Go Early College lets you earn real US college credits while still in school.",
  path: "/for-students",
});

const WHAT_YOU_BUILD = [
  {
    title: "A real US transcript",
    detail:
      "Not a certificate from an online platform. A WASC-accredited US academic transcript with your courses, grades, and GPA — issued by American World School. Real. Permanent. Recognised by universities across the United States.",
  },
  {
    title: "Real college credits",
    detail:
      "3 to 4 US college credits per course you complete. Credits that stack toward an Associate Degree at 60. Credits that stack toward a Bachelor's Degree at 120. Credits that never expire.",
  },
  {
    title: "A degree pathway — mapped before you apply",
    detail:
      "Your counsellor maps your degree pathway based on your psychometric profile, academic strengths, and career interests — before you choose a single course. You do not guess at a major. You choose with evidence.",
  },
  {
    title: "An application that stands apart",
    detail:
      "By the time you apply to university, you will have done something most applicants only claim they can do. You will have actually done university-level work. Your transcript proves it before your essay says it.",
  },
];

export default function ForStudentsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Students in Grade 8–12"
        title="You do not have to wait for university to begin."
        description="Go Early College lets you earn real US college credits, build a genuine academic transcript, and map your degree pathway — while you are still in school. On your board. In your city. In your own time."
        image={IMAGES.studentsCodingTogether}
        imageAlt="Two students collaborate closely at a computer."
      >
        <Button href="/assessment">Take the free assessment — find out where you stand →</Button>
      </PageHero>

      {/* What you build */}
      <section className="bg-ivory py-24 md:py-32">
        <Container>
          <h2 className="max-w-2xl font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] text-balance text-charcoal">
            What most students your age do not have. What you will.
          </h2>
          <Reveal as="div" stagger className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2">
            {WHAT_YOU_BUILD.map((item) => (
              <div key={item.title} className="border-t border-charcoal/15 pt-6">
                <h3 className="font-serif text-xl text-crimson">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-charcoal-soft/80">{item.detail}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* How it fits your life */}
      <section className="bg-charcoal py-24 text-ivory md:py-32">
        <Container>
          <Reveal className="mx-auto flex max-w-2xl flex-col gap-5 text-center">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] text-balance">
              Same school. Same friends. 3 extra hours a week.
            </h2>
            <p className="text-[16px] leading-relaxed text-ivory/75">
              You stay in your school. Your board, your teachers, your exams —
              none of it changes. Go Early College is 3 to 5 hours per week per
              course. Online. Self-paced. Saturday morning. Sunday afternoon.
              Whenever you have a clear hour.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Know yourself first */}
      <section className="bg-cream py-24 md:py-32">
        <Container>
          <Reveal className="mx-auto flex max-w-2xl flex-col gap-5 text-center">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] text-balance text-charcoal">
              The psychometric assessment — know before you choose.
            </h2>
            <p className="text-[16px] leading-relaxed text-charcoal-soft/80">
              Before you take a single course, you take a 45-minute psychometric
              assessment that maps how you think, what you are drawn to, and where
              your academic strengths actually lie. Your counsellor uses the
              results to build a course sequence designed for who you are — not
              who you think you should be.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden bg-crimson py-24 text-ivory md:py-32">
        <Container className="flex flex-col items-center gap-7 text-center">
          <h2 className="max-w-2xl font-serif text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] text-balance">
            Start building. Right now.
          </h2>
          <p className="max-w-lg text-[17px] leading-relaxed text-ivory/80">
            The free College Readiness Assessment takes 15 minutes. It tells you
            exactly where you stand today and what you could build before your
            university application.
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-4">
            <Button href="/assessment">Take the Free Assessment</Button>
            <Button href="/about" variant="outline" className="border-ivory/35 text-ivory hover:bg-ivory/10">
              Show my parents
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
