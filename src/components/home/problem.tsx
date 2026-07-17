import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stat } from "@/components/ui/stat";
import { Reveal } from "@/components/ui/reveal";
import { IMAGES } from "@/lib/images";

const FACTS = [
  { value: "330,000+", label: "Indian students studying in the US" },
  { value: "#1", label: "India is the largest source of international students" },
  { value: "20%+", label: "Annual growth in Indian student enrollment" },
];

export function Problem() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col justify-center gap-8">
            <SectionHeading
              eyebrow="The Opportunity Gap"
              title="The strongest university journeys begin long before university."
              description="Indian student enrollment in the United States continues to grow — driven by ambition, global opportunity, and the pursuit of world-class education. But the strongest journeys need a head start, and until now, nothing has existed to give students one."
            />
            <Reveal as="div" stagger className="grid grid-cols-1 gap-8 border-t border-charcoal/10 pt-8 sm:grid-cols-3">
              {FACTS.map((fact) => (
                <Stat key={fact.label} value={fact.value} label={fact.label} tone="dark" />
              ))}
            </Reveal>
          </div>

          <Reveal className="relative order-first grid grid-cols-5 grid-rows-5 gap-4 lg:order-last">
            <div className="relative col-span-3 row-span-4 overflow-hidden rounded-sm">
              <Image
                src={IMAGES.libraryReadingRoom}
                alt="Dramatic curved rows of library bookshelves rising toward the ceiling."
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
            </div>
            <div className="relative col-span-2 col-start-4 row-span-3 overflow-hidden rounded-sm">
              <Image
                src={IMAGES.writingCloseup}
                alt="Students walk down a hallway together, carrying books between classes."
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, 45vw"
              />
            </div>
            <div className="relative col-span-2 col-start-4 row-span-2 row-start-4 overflow-hidden rounded-sm bg-crimson">
              <div className="flex h-full flex-col justify-end p-5 text-ivory">
                <span className="font-serif text-3xl leading-none">350+</span>
                <span className="mt-1 text-[11px] uppercase tracking-[0.14em] text-ivory/70">
                  US universities welcome Indian talent
                </span>
              </div>
            </div>
            <div className="relative col-span-3 row-span-1 row-start-5 overflow-hidden rounded-sm">
              <Image
                src={IMAGES.handwrittenMath}
                alt="A page of handwritten mathematics."
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
