import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { EnquiryForm } from "@/components/contact/enquiry-form";
import { FinalCta } from "@/components/final-cta";
import { IMAGES } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";
import { WHATSAPP_DISPLAY_NUMBER, WHATSAPP_MESSAGE, whatsappHref } from "@/lib/whatsapp";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with Go Early College — book a consultation, ask a question, or reach our admissions team directly.",
  path: "/contact",
});

const CONTACT_DETAILS = [
  {
    label: "Address",
    value: "American World School, Perungudi, OMR Road, Chennai, Tamil Nadu, India",
  },
  {
    label: "Email",
    value: "admissions@goearlycollege.com",
  },
  {
    label: "Phone",
    value: WHATSAPP_DISPLAY_NUMBER,
  },
  {
    label: "Office Hours",
    value: "Monday to Saturday, 9:00 AM to 6:00 PM IST",
  },
  {
    label: "Languages",
    value: "Tamil, Telugu, Hindi, Kannada, English",
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
        title="Let&rsquo;s talk about your child&rsquo;s future."
        description="Whether you have a question, want to understand the program in more detail, or are ready to begin — our admissions team is here. Every enquiry receives a personal response within one business day."
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
              {/* WhatsApp Us Directly */}
              <Reveal className="rounded-sm border border-whatsapp/30 bg-whatsapp/[0.06] p-8">
                <Eyebrow>WhatsApp Us Directly</Eyebrow>
                <h3 className="mt-4 font-serif text-xl text-charcoal">The fastest way to reach us.</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-charcoal-soft/80">
                  Most Indian families find it easier to send a WhatsApp message than
                  fill in a form. Message us directly — our admissions team responds
                  within a few hours during office hours.
                </p>
                <p className="mt-3 text-[13px] text-charcoal-soft/55">{WHATSAPP_DISPLAY_NUMBER}</p>
                <Button href={whatsappHref(WHATSAPP_MESSAGE)} variant="whatsapp" className="mt-5 w-fit">
                  Message us on WhatsApp →
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
            title="Map showing American World School, Perungudi, OMR Road, Chennai"
            src="https://maps.google.com/maps?q=Perungudi,OMR+Road,Chennai,India&z=13&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </section>

      <FinalCta
        eyebrow="Not Ready to Apply Yet?"
        title="Start with the free assessment. No commitment required."
        description="The free College Readiness Assessment takes 15 minutes. Your child's personalised readiness report is delivered in 60 seconds. A counsellor contacts you only if you ask us to."
        primaryLabel="Take the Free Assessment"
        primaryHref="/assessment"
        secondaryLabel="Apply Now"
        secondaryHref="/apply"
        secondaryVariant="secondary"
      />
    </>
  );
}
