import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { IMAGES } from "@/lib/images";

const OUTCOMES = [
  {
    title: "Early Access",
    detail: "Open doors to advanced learning and global opportunities.",
    icon: (
      <path d="M9 4v16M9 4a3 3 0 0 1 3-3h3v18h-3a3 3 0 0 1-3-3M9 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3" />
    ),
  },
  {
    title: "Academic Excellence",
    detail: "Rigorous academics that inspire curiosity and achievement.",
    icon: (
      <>
        <path d="M4 6.5 12 3l8 3.5-8 3.5-8-3.5Z" />
        <path d="M7 8.7v5.3c0 1.2 2.2 3 5 3s5-1.8 5-3V8.7" />
      </>
    ),
  },
  {
    title: "University Readiness",
    detail: "Preparing you with the skills, mindset, and confidence to lead.",
    icon: (
      <>
        <path d="M12 3 4 6v6c0 4.5 3.2 7.7 8 9 4.8-1.3 8-4.5 8-9V6l-8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: "Global Recognition",
    detail: "Earn a US-accredited transcript recognized worldwide.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.5 12h17M12 3.5c2.2 2.3 3.4 5.3 3.4 8.5s-1.2 6.2-3.4 8.5c-2.2-2.3-3.4-5.3-3.4-8.5S9.8 5.8 12 3.5Z" />
      </>
    ),
  },
];

export function Outcomes() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionHeading
            eyebrow="Why Go Early"
            title="Four outcomes, one earlier start."
            description="Every element of the program is designed around a single premise: the biggest advantage isn't more time — it's the right time."
          />
          <div className="relative hidden aspect-[4/3] overflow-hidden rounded-sm lg:block">
            <Image
              src={IMAGES.studentsGroupTalking}
              alt="A small group of students in conversation on a sunlit campus lawn."
              fill
              className="object-cover"
              sizes="30vw"
            />
          </div>
        </div>

        <Reveal
          as="div"
          stagger
          className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-charcoal/10 bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {OUTCOMES.map((outcome) => (
            <div key={outcome.title} className="group flex flex-col gap-5 bg-cream p-8 transition-colors duration-300 hover:bg-ivory">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-9 w-9 text-gold transition-transform duration-300 group-hover:-translate-y-1"
              >
                {outcome.icon}
              </svg>
              <h3 className="font-serif text-xl text-crimson">{outcome.title}</h3>
              <p className="text-[14.5px] leading-relaxed text-charcoal-soft/80">{outcome.detail}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
