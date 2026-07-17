import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stat } from "@/components/ui/stat";
import { Reveal } from "@/components/ui/reveal";
import { StoryScroller } from "@/components/success-stories/story-scroller";
import { FinalCta } from "@/components/final-cta";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Real journeys from Go Early College students — earlier access, stronger transcripts, and university admission ahead of schedule.",
};

const OUTCOME_STATS = [
  { value: "11", label: "Average College Credits Earned" },
  { value: "3.8", label: "Average College GPA" },
  { value: "94%", label: "Continue to a Four-Year University" },
  { value: "1:1", label: "Mentor-to-Student Ratio" },
];

export default function SuccessStoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Success Stories"
        title="Ambition, realized earlier."
        description="Every story here starts the same way — a student who decided not to wait for university to begin building their future."
        image={IMAGES.graduatesGroup}
        imageAlt="A group of graduates celebrating together outdoors."
      />

      <section className="bg-ivory py-24 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Student Journeys"
            title="Scroll through their stories."
            description="Drag, swipe, or use the arrows to explore how early access changed the trajectory of each application."
          />
        </Container>
        <div className="mt-14 pl-6 md:pl-10 lg:pl-16">
          <StoryScroller />
        </div>
      </section>

      <section className="bg-crimson py-20 text-ivory md:py-24">
        <Container>
          <Reveal as="div" stagger className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {OUTCOME_STATS.map((stat) => (
              <Stat key={stat.label} value={stat.value} label={stat.label} tone="light" />
            ))}
          </Reveal>
        </Container>
      </section>

      <FinalCta eyebrow="Your Story Starts Here" title="Write your own success story." />
    </>
  );
}
