import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { EnquiryForm } from "@/components/contact/enquiry-form";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Go Early College — book a consultation, ask a question, or reach our admissions team directly.",
};

const CONTACT_DETAILS = [
  {
    label: "Admissions Office",
    value: "Bengaluru, India",
  },
  {
    label: "Email",
    value: "admissions@goearlycollege.com",
  },
  {
    label: "Phone",
    value: "+91 80000 00000",
  },
  {
    label: "Office Hours",
    value: "Mon–Sat, 9:00 AM – 6:00 PM IST",
  },
];

const FAQ_LINKS = [
  { label: "Is Go Early College accredited?", href: "/universities" },
  { label: "How much time does the program require?", href: "/program" },
  { label: "What does tuition include?", href: "/admissions" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your future."
        description="Whether you have a question or you're ready to begin, our admissions team is here to help."
        image={IMAGES.studentsGroupLaptop}
        imageAlt="A small group of students gathered around a laptop, smiling together."
        height="medium"
      />

      <section className="bg-ivory py-24 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <Eyebrow>Send an Enquiry</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl text-charcoal md:text-4xl">
                We usually reply within one business day.
              </h2>
              <div className="mt-10">
                <EnquiryForm />
              </div>
            </Reveal>

            <div className="flex flex-col gap-10">
              <Reveal className="rounded-sm border border-charcoal/10 bg-cream p-8">
                <Eyebrow>Book a Consultation</Eyebrow>
                <p className="mt-4 text-[15px] leading-relaxed text-charcoal-soft/80">
                  Prefer to talk it through? Request a free fifteen-minute call with
                  our admissions team — no obligation, just answers.
                </p>
                <Button href="#enquiry-form" variant="dark" className="mt-6 w-fit">
                  Request a Call Back
                </Button>
              </Reveal>

              <Reveal as="div" stagger className="flex flex-col gap-6 rounded-sm border border-charcoal/10 bg-cream p-8">
                <Eyebrow>Reach Us Directly</Eyebrow>
                {CONTACT_DETAILS.map((item) => (
                  <div key={item.label} className="border-t border-charcoal/10 pt-4 first:border-t-0 first:pt-0">
                    <p className="text-[11.5px] font-semibold uppercase tracking-[0.1em] text-charcoal-soft/50">
                      {item.label}
                    </p>
                    <p className="mt-1 text-[15px] text-charcoal">{item.value}</p>
                  </div>
                ))}
              </Reveal>

              <Reveal className="rounded-sm border border-charcoal/10 bg-cream p-8">
                <Eyebrow>Quick Answers</Eyebrow>
                <ul className="mt-4 flex flex-col gap-3">
                  {FAQ_LINKS.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="flex items-center justify-between gap-3 text-[14.5px] text-charcoal-soft/80 transition-colors hover:text-crimson"
                      >
                        {item.label}
                        <span aria-hidden>&rarr;</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-charcoal/10 bg-cream">
        <Reveal className="relative h-[420px] w-full grayscale-[15%]">
          <iframe
            title="Map showing Bengaluru, India"
            src="https://maps.google.com/maps?q=Bengaluru,India&z=11&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </section>
    </>
  );
}
