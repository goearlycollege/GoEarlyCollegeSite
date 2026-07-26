import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stat } from "@/components/ui/stat";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { StoryScroller } from "@/components/success-stories/story-scroller";
import { FinalCta } from "@/components/final-cta";
import { IMAGES } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Success Stories",
  description:
    "Real journeys from Go Early College students — earlier access, stronger transcripts, and university admission ahead of schedule.",
  path: "/success-stories",
});

const OUTCOME_STATS = [
  { value: "11", label: "Average US college credits earned per student" },
  { value: "3.8", label: "Average US college GPA maintained" },
  { value: "94%", label: "Of students continue to a four-year US university" },
  { value: "1:1", label: "Counsellor-to-student ratio throughout the program" },
  { value: "₹2–4 Lakh", label: "Average US tuition saved per student who earns 15 credits" },
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
      >
        <Button href="/assessment">Take the Free Assessment</Button>
      </PageHero>

      {/* Outcome stats — moved to top, right after hero */}
      <section className="bg-crimson py-20 text-ivory md:py-24">
        <Container>
          <Reveal as="div" stagger className="grid grid-cols-2 gap-10 md:grid-cols-5">
            {OUTCOME_STATS.map((stat) => (
              <Stat key={stat.label} value={stat.value} label={stat.label} tone="light" />
            ))}
          </Reveal>
        </Container>
      </section>

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

      <FinalCta
        eyebrow="Your Story Starts Here"
        title="Every student on this page started exactly where your child is now."
        description="In a school in India. With ambition and no structured pathway to act on it. Go Early College gave them the pathway. The credits, the counsellor, the transcript, and the university application that reflected everything they had built. The free College Readiness Assessment takes 15 minutes. It shows you exactly where your child stands today."
        primaryLabel="Take the Free Assessment"
        primaryHref="/assessment"
        reassurance
      />
    </>
  );
}
