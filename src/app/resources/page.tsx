import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ResourceLibrary } from "@/components/resources/resource-library";
import { NewsletterForm } from "@/components/resources/newsletter-form";
import { FinalCta } from "@/components/final-cta";
import { IMAGES } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Resources",
  description:
    "Guides, blog posts, webinars, and parent resources on early college access, transfer credit, and applying to US universities.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Guides, insights & tools for the journey ahead."
        description="Everything students and parents need to understand early college access, from accreditation basics to application strategy."
        image={IMAGES.archSpiralStaircase}
        imageAlt="A dramatic spiral staircase inside a modern academic building."
        height="medium"
      />

      <section className="bg-ivory py-20 md:py-28">
        <Container>
          <ResourceLibrary />
        </Container>
      </section>

      {/* Newsletter capture */}
      <section className="bg-charcoal py-20 text-ivory md:py-24">
        <Container>
          <Reveal className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-4">
              <Eyebrow tone="gold">The Go Early College Parent Newsletter</Eyebrow>
              <h2 className="max-w-lg font-serif text-3xl leading-tight text-balance md:text-4xl">
                Get the insights that help you decide — delivered monthly.
              </h2>
              <p className="max-w-lg text-[15.5px] leading-relaxed text-ivory/70">
                Every month we send one email covering one topic in depth — credit
                transfer, course selection, application strategy, financial planning,
                or a new student success story. No sales. No pressure. Just the
                information that helps families make a confident decision.
              </p>
            </div>
            <div className="flex w-full max-w-md flex-col gap-2">
              <NewsletterForm />
              <p className="text-[12.5px] text-ivory/45">One email per month. Unsubscribe any time.</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-crimson py-20 text-ivory md:py-24">
        <Container>
          <Reveal className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-4">
              <Eyebrow tone="gold">Program Brochure</Eyebrow>
              <h2 className="max-w-xl font-serif text-3xl leading-tight text-balance md:text-4xl">
                Want the full program details in one place?
              </h2>
              <p className="max-w-lg text-[15.5px] leading-relaxed text-ivory/75">
                Request our program brochure &mdash; curriculum, tuition, timelines,
                and outcomes &mdash; sent directly to your inbox.
              </p>
            </div>
            <Button href="/contact" variant="outline" className="w-fit shrink-0 border-ivory/30 text-ivory hover:bg-ivory/10">
              Request the Brochure
            </Button>
          </Reveal>
        </Container>
      </section>

      <FinalCta
        eyebrow="Still Have Questions?"
        title="We're here to help."
        primaryLabel="Take the Free Assessment"
        primaryHref="/assessment"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
        reassurance
      />
    </>
  );
}
