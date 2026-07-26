import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    label: "Your Current School",
    detail: "Your child stays enrolled exactly as they are. Same school, board, teachers, exams.",
  },
  {
    label: "Go Early College",
    detail:
      "The AWS Dual Diploma adds a WASC-accredited US transcript. The only one of its kind for Indian school students.",
    highlight: true,
  },
  {
    label: "350+ US Universities",
    detail: "The transcript unlocks credit-bearing courses. 3–4 real credits per course completed.",
  },
  {
    label: "University",
    detail:
      "They apply with a transcript that most Indian students cannot produce. Credits earned. GPA established. Readiness proven.",
  },
];

export function Solution() {
  return (
    <section className="bg-charcoal py-24 text-ivory md:py-32">
      <Container>
        <div className="flex flex-col items-center gap-5 text-center">
          <Eyebrow tone="gold">The Solution</Eyebrow>
          <h2 className="max-w-3xl font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] text-balance">
            One program. Two diplomas. A US university future &mdash; built while your
            child is still in school.
          </h2>
        </div>

        <Reveal as="div" stagger className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div key={step.label} className="flex flex-col gap-4">
              <span
                className={cn(
                  "flex h-14 w-14 items-center justify-center rounded-full border font-serif text-xl",
                  step.highlight
                    ? "border-crimson bg-crimson text-ivory shadow-[0_16px_40px_-14px_rgba(122,15,20,0.55)]"
                    : "border-ivory/25 text-ivory/70"
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-xl text-ivory">{step.label}</h3>
              <p className="text-[14.5px] leading-relaxed text-ivory/60">{step.detail}</p>
            </div>
          ))}
        </Reveal>

        <p className="mt-16 text-center font-serif text-lg italic text-gold">
          Earlier Access. Stronger Profile. Greater Future.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3">
          <Button href="/program" variant="outline" className="border-ivory/35 text-ivory hover:bg-ivory/10">
            See how it works in full →
          </Button>
          <p className="text-[13px] text-ivory/50">No commitment required to explore.</p>
        </div>
      </Container>
    </section>
  );
}
