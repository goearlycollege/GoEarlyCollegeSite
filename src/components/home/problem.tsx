import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/lib/images";

const PROBLEM_CARDS = [
  "No Valid US Transcript",
  "Millions Aspire, Very Few Access",
  "No Bridge Has Ever Been Built — Until Now",
];

export function Problem() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col justify-center gap-8">
            <SectionHeading
              eyebrow="The Problem No One Is Solving"
              title="Your child is ready. The credential system is not built for them."
              description="India sends more students to US universities than any other country in the world. Yet CBSE, ICSE, and State Board students have no US-compatible transcript — which means they cannot access early college programs, dual enrolment pathways, or credit-building courses at American universities, regardless of how talented they are. The barrier is not your child's ability. It is a structural gap in the credential system. Go Early College was built to close it permanently."
            />
            <Reveal as="div" stagger className="grid grid-cols-1 gap-6 border-t border-charcoal/10 pt-8 sm:grid-cols-3">
              {PROBLEM_CARDS.map((title, i) => (
                <div key={title} className="flex flex-col gap-3">
                  <span className="font-serif text-sm text-gold-dark">{String(i + 1).padStart(2, "0")}</span>
                  <p className="font-serif text-lg leading-snug text-charcoal">{title}</p>
                </div>
              ))}
            </Reveal>
            <Button
              href="/program"
              variant="ghost"
              className="w-fit px-0 py-0 normal-case tracking-normal text-[15px] font-semibold text-crimson hover:bg-transparent hover:underline"
            >
              Understand the full pathway →
            </Button>
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
