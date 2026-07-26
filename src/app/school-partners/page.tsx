import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { RevenueCalculator } from "@/components/school-partners/revenue-calculator";
import { PartnershipEnquiryForm } from "@/components/school-partners/partnership-enquiry-form";
import { IMAGES } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "School Partnerships",
  fullTitle: "School Partnerships | Go Early College — Bring Early College to Your Students",
  description:
    "Partner your school with Go Early College — add a US-accredited early college program to Grade 8–12 students with zero operational burden and a revenue share on every enrolment.",
  path: "/school-partners",
});

const FOR_YOUR_SCHOOL = [
  "A premium academic differentiation no other school in your city currently offers",
  "Co-branded program identity — '[Your School] × Go Early College'",
  "Revenue share on every enrolled student — paid monthly",
  "Go Early College handles all enrolment, delivery, counselling, and transcript issuance",
  "Marketing support — branded brochures, webinar hosting, assembly presentation materials",
  "School portal — live dashboard showing enrolled students, credits earned, and revenue share",
];

const FOR_YOUR_STUDENTS = [
  "WASC-accredited US transcript — issued by American World School (UGC equivalent)",
  "Credit-bearing courses from 350+ American university partners",
  "3–4 real, transferable US college credits per course completed",
  "Dedicated academic counsellor from enrolment through university application",
  "A university application profile that sets them apart from every peer in their cohort",
];

const PROCESS = [
  {
    title: "Partnership Call",
    detail: "30-minute conversation with our B2B partnerships team — covering program structure, revenue model, co-branding options, and the school's commitment.",
  },
  {
    title: "MOU Signed",
    detail: "Straightforward Memorandum of Understanding covering partnership terms, revenue share, and co-branding guidelines. Most schools sign within two weeks.",
  },
  {
    title: "Parent Information Evening",
    detail: "Go Early College hosts a parent information evening at your school — in your preferred language. We handle everything. You simply facilitate the room.",
  },
  {
    title: "Students Enrol — You Earn",
    detail: "Families who enrol through your school generate your revenue share — paid monthly, tracked on your school portal, growing as enrolled student base grows.",
  },
];

const WE_PROVIDE = [
  "Co-branded parent brochures in your school's colours",
  "Co-branded email templates for parent communication",
  "Assembly and open-day presentation slides",
  "Social media assets with your school logo",
  "Dedicated landing page at goearlycollege.com/schools/[school-name]",
];

export default function SchoolPartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="For Schools and Educational Institutions"
        title="Bring the world's only early college program for Indian school students to your campus."
        description="Go Early College partners with CBSE, ICSE, State Board, and International schools across India to offer Grade 8–12 students a US-accredited transcript and credit-bearing courses from 350+ American university partners — co-branded under your school's identity. Zero operational burden. Revenue share on every enrolment."
        image={IMAGES.lectureHallAlt}
        imageAlt="An empty tiered lecture hall, lit warmly."
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button href="#partnership-enquiry-form">Request a Partnership Call →</Button>
          <button
            type="button"
            aria-disabled="true"
            title="Deck pending upload from brand team — see Section 10.5"
            className="inline-flex cursor-not-allowed items-center gap-2 rounded-sm border border-ivory/35 px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-ivory/50"
          >
            Download the School Partnership Deck →
          </button>
        </div>
        <p className="mt-5 text-[13.5px] text-ivory/55">
          No commitment required to explore. We will not approach your parent
          community without your permission.
        </p>
      </PageHero>

      {/* What the partnership delivers */}
      <section className="bg-ivory py-24 md:py-32">
        <Container>
          <SectionHeading title="What your school gains. What your students gain." />
          <div className="mt-16 grid grid-cols-1 gap-14 md:grid-cols-2">
            <Reveal as="div" stagger className="flex flex-col gap-4">
              <h3 className="font-serif text-xl text-crimson">For your school:</h3>
              {FOR_YOUR_SCHOOL.map((item) => (
                <div key={item} className="flex items-start gap-3 border-t border-charcoal/10 pt-4 text-[14.5px] leading-relaxed text-charcoal-soft/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </div>
              ))}
            </Reveal>
            <Reveal as="div" stagger className="flex flex-col gap-4">
              <h3 className="font-serif text-xl text-crimson">For your students:</h3>
              {FOR_YOUR_STUDENTS.map((item) => (
                <div key={item} className="flex items-start gap-3 border-t border-charcoal/10 pt-4 text-[14.5px] leading-relaxed text-charcoal-soft/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </div>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 4-step process */}
      <section className="bg-charcoal py-24 text-ivory md:py-32">
        <Container>
          <SectionHeading tone="light" title="Four steps to partnership." />
          <Reveal as="div" stagger className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <div key={step.title} className="flex flex-col gap-3">
                <span className="font-serif text-3xl text-gold/60">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-serif text-lg text-ivory">{step.title}</h3>
                <p className="text-[14px] leading-relaxed text-ivory/60">{step.detail}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Revenue calculator */}
      <section className="bg-cream py-24 md:py-32">
        <Container>
          <SectionHeading eyebrow="Revenue Calculator" title="What partnership could mean for your school." />
          <Reveal className="mt-14">
            <RevenueCalculator />
          </Reveal>
        </Container>
      </section>

      {/* Co-branding */}
      <section className="bg-ivory py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
            <Reveal className="flex flex-col gap-5">
              <SectionHeading
                title="Your school's identity. Our program's credibility."
                description="Go Early College is designed to sit under your school's brand — not alongside it as a competitor. Partner schools present the program as '[School Name] Early College Program — Powered by Go Early College.'"
              />
            </Reveal>
            <Reveal as="div" stagger className="flex flex-col gap-4">
              <h3 className="font-serif text-lg text-crimson">We provide:</h3>
              {WE_PROVIDE.map((item) => (
                <div key={item} className="flex items-start gap-3 border-t border-charcoal/10 pt-4 text-[14.5px] leading-relaxed text-charcoal-soft/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </div>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Partnership enquiry form */}
      <section className="bg-cream py-24 md:py-32">
        <Container>
          <SectionHeading eyebrow="Get Started" title="Request a partnership call." className="mx-auto max-w-2xl text-center" align="center" />
          <Reveal className="mx-auto mt-14 max-w-3xl">
            <PartnershipEnquiryForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
