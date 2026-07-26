import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FaqBrowser } from "@/components/faq/faq-browser";
import { FAQS } from "@/lib/faq-data";
import { buildMetadata } from "@/lib/seo";
import { faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import { whatsappHref } from "@/lib/whatsapp";

export const metadata = buildMetadata({
  title: "FAQs",
  fullTitle: "FAQs | Go Early College — Every Question Answered",
  description:
    "Everything families want to know — accreditation, transfer credit, time commitment, pricing, eligibility, the psychometric assessment, and how the program actually works.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <section className="min-h-screen bg-ivory pb-24 pt-[calc(var(--header-height)+3rem)] md:pt-[calc(var(--header-height)+4.5rem)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(FAQS)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }])),
        }}
      />
      <Container>
        <div className="mx-auto mb-14 flex max-w-2xl flex-col items-center gap-4 text-center">
          <h1 className="font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] text-charcoal text-balance">
            Every question. Answered plainly.
          </h1>
          <p className="text-[16px] leading-relaxed text-charcoal-soft/75">
            We have compiled every question families ask before enrolling — and
            answered each one honestly. If yours is not here, message us directly
            and we will answer it within one business day.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <FaqBrowser />
        </div>

        <div className="mx-auto mt-20 flex max-w-2xl flex-col items-center gap-6 rounded-sm border border-charcoal/10 bg-cream p-10 text-center">
          <h2 className="font-serif text-2xl text-charcoal">Still have a question that is not here?</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href={whatsappHref()} variant="whatsapp">
              Message us on WhatsApp →
            </Button>
            <Button href="mailto:admissions@goearlycollege.com" variant="outline" className="border-crimson text-crimson hover:bg-crimson/[0.06]">
              Send an email →
            </Button>
            <Button href="/contact" variant="ghost" className="text-crimson hover:bg-crimson/[0.06]">
              Request a free admissions call →
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
