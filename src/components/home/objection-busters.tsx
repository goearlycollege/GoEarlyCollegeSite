import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const QUESTIONS = [
  {
    title: "Does my child have to leave their school?",
    content:
      "No. Not for a single day. Go Early College sits alongside your child's existing education. Same school. Same board. Same teachers. Same exams.",
  },
  {
    title: "How much extra time does this add?",
    content:
      "3 to 5 hours per week per course. Online. Self-paced. Completed on evenings, weekends, or school holidays. No commute. No in-person class.",
  },
  {
    title: "Is the transcript actually recognised by US universities?",
    content:
      "Yes. American World School is WASC-accredited — the standard American universities use to evaluate transfer credit. Real, verified, and transferable.",
  },
];

export function ObjectionBusters() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <Container>
        <SectionHeading
          align="center"
          title="The Questions Every Parent Asks First"
          className="mx-auto max-w-2xl"
        />

        <div className="mx-auto mt-16 max-w-3xl">
          <Accordion items={QUESTIONS} />
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 text-center">
          <Button href="/contact" variant="outline" className="w-fit border-crimson text-crimson hover:bg-crimson/[0.06]">
            Still have questions? Book a free 20-minute call →
          </Button>
          <p className="text-[13px] text-charcoal-soft/55">
            Available in Tamil, Telugu, Hindi, Kannada, and English.
          </p>
        </div>
      </Container>
    </section>
  );
}
