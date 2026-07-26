import { Container } from "@/components/ui/container";
import { ResourceLibrary } from "@/components/resources/resource-library";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog & Resources",
  fullTitle: "Blog & Resources | Go Early College — Guides and Insights",
  description:
    "Everything students and parents need to understand early college access — from accreditation basics and credit transfer to application strategy and parent guides.",
  path: "/blog",
});

export default function BlogIndexPage() {
  return (
    <section className="min-h-screen bg-ivory pb-24 pt-[calc(var(--header-height)+3rem)] md:pt-[calc(var(--header-height)+4.5rem)]">
      <Container>
        <div className="mx-auto mb-14 flex max-w-2xl flex-col items-center gap-4 text-center">
          <h1 className="font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] text-charcoal text-balance">
            Guides, insights and tools for the journey ahead.
          </h1>
          <p className="text-[16px] leading-relaxed text-charcoal-soft/75">
            Everything students and parents need to understand early college
            access — from accreditation basics and credit transfer to application
            strategy and parent guides.
          </p>
        </div>

        <ResourceLibrary />
      </Container>
    </section>
  );
}
