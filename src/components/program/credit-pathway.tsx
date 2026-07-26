import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

const MILESTONES = [
  {
    label: "3–4 credits per course",
    detail:
      "Every completed course earns 3–4 real, transferable US college credits — permanently recorded on your WASC-accredited transcript.",
  },
  {
    label: "30 credits",
    detail: "One full year of US university education completed before your child applies. Reduces first-year workload and tuition costs.",
  },
  {
    label: "60 credits",
    detail:
      "Associate Degree awarded from our US university partner network. Transfer-eligible to major universities across all 50 states — entering at Year 3, not Year 1.",
  },
  {
    label: "120 credits",
    detail: "Full US Bachelor's Degree from our partner network. A complete American undergraduate education built one course at a time.",
  },
];

export function CreditPathway() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <Container>
        <SectionHeading
          align="center"
          title="Every credit stacks. Every milestone is real."
          className="mx-auto max-w-2xl"
        />

        <Reveal as="div" stagger className="relative mx-auto mt-16 flex max-w-2xl flex-col">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-charcoal/10" />
          {MILESTONES.map((m) => (
            <div key={m.label} className="relative flex gap-6 pb-12 pl-12 last:pb-0">
              <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-gold bg-cream">
                <span className="h-2 w-2 rounded-full bg-crimson" />
              </span>
              <div>
                <h3 className="font-serif text-xl text-crimson">{m.label}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal-soft/80">{m.detail}</p>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal className="mx-auto mt-4 max-w-2xl rounded-sm border border-gold/30 bg-gold-tint/40 p-6 text-center">
          <p className="text-[15px] leading-relaxed text-charcoal-soft/85">
            Go Early College pays for itself at 6 credits earned. 6 US credit hours cost
            $6,000–$18,000 in US tuition. A student who earns 15 credits saves ₹12L–₹37L
            depending on the university.
          </p>
        </Reveal>

        <div className="mt-10 flex justify-center">
          <Button href="/assessment">Calculate your child&rsquo;s credit projection →</Button>
        </div>
      </Container>
    </section>
  );
}
