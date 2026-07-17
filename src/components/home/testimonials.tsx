import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/lib/images";

const STORIES = [
  {
    quote:
      "I earned twelve transferable college credits before I'd even finished school. My application felt like it belonged next to students who'd had every advantage.",
    name: "Ananya R.",
    detail: "Class of 2025 · Now at a top-30 US university",
    image: IMAGES.portraitAnanya,
  },
  {
    quote:
      "Go Early College didn't just prepare me for admissions — it changed how I think about learning. The mentorship made the difference.",
    name: "Kabir S.",
    detail: "Class of 2024 · Computer Science major",
    image: IMAGES.portraitKabir,
  },
  {
    quote:
      "As a parent, what mattered most was that this was real academic rigor, not test prep. My daughter arrived at university already thinking like a student there.",
    name: "Meera D.",
    detail: "Parent, Bengaluru",
    image: IMAGES.portraitMeera,
  },
];

export function Testimonials() {
  return (
    <section className="bg-charcoal py-24 text-ivory md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            tone="light"
            eyebrow="Success Stories"
            title="Ambition, realized earlier."
            className="max-w-xl"
          />
          <Button href="/success-stories" variant="outline" className="border-ivory/30 text-ivory hover:bg-ivory/10">
            Read More Stories
          </Button>
        </div>

        <Reveal as="div" stagger className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {STORIES.map((story) => (
            <figure
              key={story.name}
              className="flex flex-col justify-between gap-8 rounded-sm border border-ivory/10 bg-white/[0.03] p-8 transition-colors duration-300 hover:border-gold/40"
            >
              <blockquote className="font-serif text-[19px] italic leading-relaxed text-ivory/90">
                &ldquo;{story.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-4">
                <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                  <Image src={story.image} alt="" fill className="object-cover" sizes="48px" />
                </span>
                <span>
                  <span className="block text-[15px] font-semibold text-ivory">{story.name}</span>
                  <span className="block text-[13px] text-ivory/50">{story.detail}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
