import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

const SAMPLE_WEEK = [
  { period: "Mon–Fri", detail: "School as usual (unchanged)" },
  { period: "Saturday", detail: "1.5–2.5 hrs GEC coursework" },
  { period: "Sunday", detail: "1.5–2.5 hrs GEC coursework" },
  { period: "Monthly", detail: "30–60 min counsellor session" },
];

export function ThreeHours() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal className="flex flex-col gap-6">
            <Eyebrow>The Time Commitment</Eyebrow>
            <h2 className="font-serif text-[clamp(2rem,3.6vw,3rem)] leading-[1.1] text-balance text-charcoal">
              3 to 5 hours a week. That is the entire time commitment.
            </h2>
            <p className="max-w-lg text-[16px] leading-relaxed text-charcoal-soft/85">
              This is the question every parent asks before anything else. So here is
              the honest answer. Most Go Early College students spend 3 to 5 hours per
              week per course. Courses are online and self-paced — designed to be
              completed on Saturday mornings, Sunday afternoons, school holidays, or
              whenever your child has a clear hour. There is no commute. No in-person
              class. No conflict with school exams or extracurricular activities.
            </p>
            <p className="max-w-lg border-l-2 border-gold pl-5 font-serif text-lg italic text-crimson">
              &ldquo;3 hours a week between your child and a US-accredited transcript. 3
              hours a week between your child and 350+ American universities.&rdquo;
            </p>
            <Button href="/assessment" className="w-fit">
              Take the free assessment and see how many credits your child could earn →
            </Button>
          </Reveal>

          <Reveal className="rounded-sm border border-charcoal/10 bg-cream p-8 md:p-10">
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-charcoal-soft/50">
              A Sample Week
            </span>
            <div className="mt-6 flex flex-col divide-y divide-charcoal/10">
              {SAMPLE_WEEK.map((row) => (
                <div key={row.period} className="flex items-center justify-between gap-4 py-4">
                  <span className="font-serif text-lg text-crimson">{row.period}</span>
                  <span className="text-right text-[14.5px] text-charcoal-soft/80">{row.detail}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
