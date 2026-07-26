import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { RoiCalculator } from "@/components/pricing/roi-calculator";
import { FinalCta } from "@/components/final-cta";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Pricing",
  fullTitle: "Pricing | Go Early College — Transparent Program Fees",
  description:
    "Go Early College program pricing — three tiers, full feature comparison, ROI calculator, and scholarship options. The program pays for itself at 6 credits earned.",
  path: "/pricing",
});

const TIERS = [
  {
    name: "Diploma Starter",
    price: "₹1,20,000",
    blurb: "Entry tier.",
    features: ["AWS Dual Diploma enrolment", "US transcript", "1 early college course", "2 counsellor sessions/year", "AWS student ID", "Course catalogue access"],
  },
  {
    name: "Early College Plus",
    price: "₹2,00,000",
    blurb: "Most popular.",
    popular: true,
    features: [
      "Everything in Starter",
      "3 early college courses",
      "Monthly counsellor sessions",
      "University application support",
      "Access to all 350+ university partners",
      "Priority counsellor response",
    ],
  },
  {
    name: "Accelerator Pro",
    price: "₹2,80,000",
    blurb: "Maximum value.",
    features: [
      "Everything in Plus",
      "5+ early college courses",
      "Dedicated college advisor",
      "SAT/ACT preparation integration",
      "Scholarship identification",
      "Parent dashboard",
      "Early application strategy",
    ],
  },
];

const PAYMENT_OPTIONS = [
  { title: "Annual payment", detail: "Full year — 5% discount applied automatically" },
  { title: "6-month EMI", detail: "Equal monthly installments via Razorpay/Cashfree" },
  { title: "12-month EMI", detail: "Monthly installments — nominal processing fee applies" },
  { title: "Scholarship code", detail: "Enter at checkout — provided by admissions team" },
];

const SCHOLARSHIPS = [
  { title: "Merit-based", detail: "For demonstrated academic achievement — reviewed during admissions process" },
  { title: "Need-based", detail: "Confidential financial aid for qualifying families — discussed during consultation" },
  { title: "Early enrolment", detail: "Discount for applications before cohort deadline" },
  { title: "Sibling discount", detail: "10% reduction for second child from same family" },
  { title: "Referral credit", detail: "Fee credit for each enrolled family successfully referred" },
];

export default function PricingPage() {
  return (
    <section className="min-h-screen bg-ivory pb-24 pt-[calc(var(--header-height)+3rem)] md:pt-[calc(var(--header-height)+4.5rem)]">
      <Container>
        <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center gap-4 text-center">
          <h1 className="font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] text-charcoal text-balance">
            Clear, transparent pricing. No surprises.
          </h1>
          <p className="text-[16px] leading-relaxed text-charcoal-soft/75">
            Three program tiers. Every one includes the AWS Dual Diploma, US
            transcript, and dedicated counsellor. Your tier determines how many
            courses and how much support.
          </p>
        </div>

        {/* Pricing tiers */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "flex flex-col gap-6 rounded-sm border p-8",
                tier.popular ? "border-crimson bg-crimson text-ivory shadow-[0_20px_50px_-20px_rgba(122,15,20,0.4)]" : "border-charcoal/10 bg-cream"
              )}
            >
              <div>
                {tier.popular && (
                  <span className="mb-3 inline-block rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-crimson-dark">
                    Most Popular
                  </span>
                )}
                <h3 className={cn("font-serif text-2xl", tier.popular ? "text-ivory" : "text-charcoal")}>{tier.name}</h3>
                {!tier.popular && (
                  <p className="mt-1 text-[13px] uppercase tracking-[0.08em] text-charcoal-soft/55">{tier.blurb}</p>
                )}
                <p className={cn("mt-4 font-serif text-3xl", tier.popular ? "text-gold" : "text-crimson")}>
                  {tier.price}
                  <span className="text-[14px]">/year</span>
                </p>
              </div>
              <ul className="flex flex-1 flex-col gap-3">
                {tier.features.map((f) => (
                  <li key={f} className={cn("flex items-start gap-3 text-[14px] leading-relaxed", tier.popular ? "text-ivory/85" : "text-charcoal-soft/80")}>
                    <span className={cn("mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full", tier.popular ? "bg-gold" : "bg-crimson")} />
                    {f}
                  </li>
                ))}
              </ul>
              <Button href="/apply" variant={tier.popular ? "primary" : "secondary"} className="w-full">
                Apply Now
              </Button>
            </div>
          ))}
        </div>

        {/* ROI Calculator */}
        <section className="mt-28">
          <SectionHeading align="center" eyebrow="ROI Calculator" title="See what your child's credits are worth." className="mx-auto max-w-2xl" />
          <Reveal className="mx-auto mt-12 max-w-2xl">
            <RoiCalculator />
          </Reveal>
        </section>

        {/* Payment options */}
        <section className="mt-28">
          <SectionHeading align="center" title="Payment options." className="mx-auto max-w-2xl" />
          <Reveal as="div" stagger className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
            {PAYMENT_OPTIONS.map((o) => (
              <div key={o.title} className="rounded-sm border border-charcoal/10 bg-cream p-6">
                <h3 className="font-serif text-lg text-crimson">{o.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-charcoal-soft/75">{o.detail}</p>
              </div>
            ))}
          </Reveal>
        </section>

        {/* Scholarships */}
        <section className="mt-28">
          <SectionHeading align="center" title="Scholarships." className="mx-auto max-w-2xl" />
          <Reveal as="div" stagger className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {SCHOLARSHIPS.map((s) => (
              <div key={s.title} className="border-t border-charcoal/15 pt-6 text-center">
                <h3 className="font-serif text-lg text-crimson">{s.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-charcoal-soft/75">{s.detail}</p>
              </div>
            ))}
          </Reveal>
        </section>
      </Container>

      <div className="mt-28">
        <FinalCta
          title="Not sure which tier is right?"
          description="Book a free 20-minute counsellor call. We will recommend the right plan based on your child's grade, goals, and timeline — with no obligation to enrol."
          primaryLabel="Book a Free Consultation"
          primaryHref="/contact"
          secondaryLabel="Apply Now"
          secondaryHref="/apply"
          secondaryVariant="secondary"
        />
      </div>
    </section>
  );
}
