import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/lib/images";

const STORIES = [
  {
    quote:
      "12 credits earned before my final school exam. My application felt like it belonged next to students who had had every advantage.",
    name: "Ananya R.",
    detail: "Class of 2025, top-30 US university",
    image: IMAGES.portraitAnanya,
  },
  {
    quote: "The mentorship made the difference. My counsellor knew my academic profile better than I did.",
    name: "Kabir S.",
    detail: "Class of 2024, top-50 liberal arts college with merit aid",
    image: IMAGES.portraitKabir,
  },
  {
    quote:
      "This was real academic rigour — not test prep. My daughter arrived at university already thinking like a student there.",
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
            eyebrow="What Go Early College Students Achieve"
            title="These students did not wait. Here is what they built."
            className="max-w-xl"
          />
          <Button href="/success-stories" variant="outline" className="border-ivory/30 text-ivory hover:bg-ivory/10">
            Read more student stories
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
