import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { whatsappHref } from "@/lib/whatsapp";
import { SITE_URL } from "@/lib/seo";

// Brief Section 7 — dynamic, no SEO value; excluded via robots.ts and never
// linked in the sitemap.
export const metadata = {
  title: "Thank You",
  robots: { index: false, follow: false },
};

type ThankYouType = "assessment" | "application" | "school-partner" | "contact";

function WhatHappensNext({ items }: { items: { when: string; what: string }[] }) {
  return (
    <div className="grid w-full grid-cols-1 gap-4 rounded-sm border border-charcoal/10 bg-cream p-6 text-left sm:grid-cols-3">
      {items.map((row) => (
        <div key={row.when}>
          <p className="font-serif text-lg text-crimson">{row.when}</p>
          <p className="text-[13.5px] text-charcoal-soft/70">{row.what}</p>
        </div>
      ))}
    </div>
  );
}

function CheckBadge() {
  return (
    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-crimson">
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="m5 13 4 4L19 7" />
      </svg>
    </span>
  );
}

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; name?: string; email?: string }>;
}) {
  const params = await searchParams;
  const type = (params.type as ThankYouType) ?? undefined;
  const name = params.name?.trim();
  const email = params.email?.trim();
  const possessive = name ? `${name}'s` : "Your child's";

  return (
    <section className="min-h-screen bg-ivory pb-24 pt-[calc(var(--header-height)+3rem)] md:pt-[calc(var(--header-height)+4.5rem)]">
      <Container>
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
          <CheckBadge />

          {type === "assessment" && (
            <>
              <h1 className="font-serif text-3xl text-charcoal md:text-4xl">Your report is on its way.</h1>
              <p className="text-[15.5px] leading-relaxed text-charcoal-soft/75">
                {possessive} College Readiness Report is being generated right now.
                {email ? ` It will arrive in your inbox at ${email} within 60 seconds.` : " It will arrive in your inbox within 60 seconds."} Check
                your spam folder if it does not appear.
              </p>
              <WhatHappensNext
                items={[
                  { when: "60 seconds", what: "Report arrives in inbox" },
                  { when: "Day 1", what: "Counsellor WhatsApps if number provided" },
                  { when: "Day 3", what: "Follow-up email with key insight from assessment" },
                ]}
              />
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/program" className="text-[13.5px] font-semibold uppercase tracking-[0.08em] text-crimson hover:underline">
                  How the credit pathway works
                </Link>
                <Link href="/success-stories" className="text-[13.5px] font-semibold uppercase tracking-[0.08em] text-crimson hover:underline">
                  Student success stories
                </Link>
                <Link href="/program#curriculum" className="text-[13.5px] font-semibold uppercase tracking-[0.08em] text-crimson hover:underline">
                  Browse the course catalogue
                </Link>
              </div>
              <Button
                href={whatsappHref(
                  `I just took the Go Early College assessment for my child. Personalised readiness report in 60 seconds — completely free. Try it: ${SITE_URL}/assessment`
                )}
                variant="whatsapp"
              >
                Share on WhatsApp →
              </Button>
            </>
          )}

          {type === "application" && (
            <>
              <h1 className="font-serif text-3xl text-charcoal md:text-4xl">Your application is in. Here is what happens next.</h1>
              <p className="text-[15.5px] leading-relaxed text-charcoal-soft/75">
                Thank you for applying to Go Early College. Your application has been
                received. Our admissions team will be in touch within one business
                day.
              </p>
              <WhatHappensNext
                items={[
                  { when: "Day 1", what: "Admissions team confirms receipt" },
                  { when: "Days 2–3", what: "Academic review of transcript" },
                  { when: "Days 3–5", what: "Admissions consultation scheduled" },
                  { when: "Days 5–10", what: "Offer issued with full fee and scholarship details" },
                ]}
              />
              <p className="border-l-2 border-gold pl-5 text-left font-serif text-lg italic text-crimson">
                &ldquo;The biggest advantage is not more time. It is the right time.
                You have just taken the first step toward giving your child
                both.&rdquo;
              </p>
            </>
          )}

          {type === "school-partner" && (
            <>
              <h1 className="font-serif text-3xl text-charcoal md:text-4xl">We will be in touch within one business day.</h1>
              <p className="text-[15.5px] leading-relaxed text-charcoal-soft/75">
                Your partnership enquiry has been received by our B2B team. We will
                contact you within one business day to schedule a 30-minute
                partnership conversation.
              </p>
              <button
                type="button"
                aria-disabled="true"
                title="Deck pending upload from brand team — see Section 10.5"
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-sm border border-charcoal/20 px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-charcoal-soft/40"
              >
                Download the School Partnership Deck while you wait →
              </button>
            </>
          )}

          {(type === "contact" || !type) && (
            <>
              <h1 className="font-serif text-3xl text-charcoal md:text-4xl">Thank you — we&rsquo;ll be in touch.</h1>
              <p className="text-[15.5px] leading-relaxed text-charcoal-soft/75">
                A member of our admissions team will respond within one business day.
                In the meantime, feel free to explore the program or start your
                application.
              </p>
            </>
          )}

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <Button href="/assessment">Take the Free Assessment</Button>
            <Button href="/" variant="outline" className="border-crimson text-crimson hover:bg-crimson/[0.06]">
              Back to Home
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
