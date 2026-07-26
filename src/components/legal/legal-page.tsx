import { Container } from "@/components/ui/container";

export type LegalSection = {
  heading: string;
  body: string;
};

export function LegalPage({
  title,
  lastUpdated,
  sections,
}: {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}) {
  return (
    <section className="min-h-screen bg-ivory pb-24 pt-[calc(var(--header-height)+3rem)] md:pt-[calc(var(--header-height)+4.5rem)]">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] text-charcoal">{title}</h1>
          <p className="mt-3 text-[13.5px] font-semibold uppercase tracking-[0.08em] text-charcoal-soft/50">
            Last updated: {lastUpdated}
          </p>

          <div className="mt-8 rounded-sm border border-gold/30 bg-gold-tint/40 px-6 py-5 text-[14.5px] leading-relaxed text-charcoal-soft/80">
            <strong className="text-charcoal">Draft — pending legal review.</strong> Per
            the developer brief, this content must be written or reviewed by Go
            Early College&rsquo;s legal advisor or a qualified Indian law firm
            before publication. The structure below covers the sections the
            brief requires; the text itself is a placeholder and is not a
            substitute for legal advice.
          </div>

          <div className="mt-14 flex flex-col gap-12">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-serif text-2xl text-charcoal">{section.heading}</h2>
                <p className="mt-3 text-[15.5px] leading-relaxed text-charcoal-soft/80">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
