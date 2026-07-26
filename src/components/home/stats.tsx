import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stat } from "@/components/ui/stat";
import { Reveal } from "@/components/ui/reveal";

const STATS = [
  { value: "330,000+", label: "Indian students currently studying in the United States" },
  { value: "#1", label: "India is the largest source of international students in the US" },
  { value: "20%+", label: "Annual growth in Indian student enrolment in the US" },
  { value: "350+", label: "American university partners in the Go Early College network" },
  {
    value: "0",
    label: "Other Indian programs offering a WASC-accredited US transcript to mainstream school students",
  },
];

export function Stats() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="The Opportunity"
          title="330,000+ Indian students are already in the US. The ones ahead started earlier."
          className="mx-auto max-w-3xl"
        />

        <Reveal
          as="div"
          stagger
          className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-5"
        >
          {STATS.map((stat) => (
            <Stat key={stat.label} value={stat.value} label={stat.label} tone="dark" />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
