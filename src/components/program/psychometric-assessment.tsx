import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { IMAGES } from "@/lib/images";

const PILLARS = [
  {
    title: "Cognitive Strengths",
    detail: "Natural reasoning patterns and how your child thinks",
  },
  {
    title: "Learning Style",
    detail: "How your child absorbs and retains information under real academic conditions",
  },
  {
    title: "Subject Aptitude",
    detail: "Strengths across sciences, business, humanities, technology, and the arts",
  },
  {
    title: "Career Interest Clusters",
    detail: "Degree pathway alignment based on genuine interest data",
  },
];

export function PsychometricAssessment() {
  return (
    <section className="bg-charcoal py-24 text-ivory md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal className="flex flex-col gap-8">
            <Eyebrow tone="gold">The Psychometric Assessment</Eyebrow>
            <h2 className="max-w-xl font-serif text-[clamp(2rem,3.6vw,3rem)] leading-[1.1] text-balance">
              Most students choose a degree based on what sounds impressive. Go Early
              College students choose based on evidence.
            </h2>
            <div className="grid grid-cols-1 gap-6 border-t border-ivory/15 pt-6 sm:grid-cols-2">
              {PILLARS.map((pillar) => (
                <div key={pillar.title}>
                  <h3 className="font-serif text-lg text-ivory">{pillar.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ivory/60">{pillar.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-[13.5px] uppercase tracking-[0.1em] text-ivory/50">
              45 minutes · Included in enrolment — no additional charge
            </p>
            <p className="border-l-2 border-gold pl-5 font-serif text-lg italic text-gold">
              &ldquo;The most important 45 minutes in your child&rsquo;s academic
              planning.&rdquo;
            </p>
          </Reveal>

          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-sm lg:aspect-[5/6]">
            <Image
              src={IMAGES.studentsCollaborating}
              alt="An overhead view of a laptop, notebook, and coffee arranged for focused study."
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
