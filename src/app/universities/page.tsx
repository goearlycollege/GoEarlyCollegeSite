import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";
import { Stat } from "@/components/ui/stat";
import { FinalCta } from "@/components/final-cta";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Universities & Recognition",
  description:
    "Learn how Go Early College's accredited transcript is recognized: accreditation standards, transfer pathways, and where students go next.",
};

const RECOGNITION = [
  { label: "Public Flagship Universities" },
  { label: "Private Research Universities" },
  { label: "Liberal Arts Colleges" },
  { label: "Community College Networks" },
  { label: "STEM-Focused Institutes" },
  { label: "Business & Management Schools" },
];

const COMPARISON = [
  {
    criteria: "Transcript",
    standard: "High school record only",
    goEarly: "High school record + US-accredited college transcript",
  },
  {
    criteria: "Academic Rigor",
    standard: "Determined by school curriculum alone",
    goEarly: "Demonstrated college-level coursework, graded by US faculty",
  },
  {
    criteria: "References",
    standard: "School teachers only",
    goEarly: "School teachers + US faculty and mentors",
  },
  {
    criteria: "University Readiness",
    standard: "Untested until enrollment",
    goEarly: "Proven through completed, transferable credit",
  },
];

const FAQ = [
  {
    title: "Is Go Early College accredited?",
    content:
      "Yes. Coursework is delivered in partnership with regionally accredited US institutions, following the same standards recognized by accreditors such as WASC — the accrediting body used by many leading American universities.",
  },
  {
    title: "Will every university accept these credits?",
    content:
      "Transfer policy is set by each university individually. Because our credits are regionally accredited, they are broadly recognized — our admissions team helps confirm transfer policy for any university on a student's list.",
  },
  {
    title: "Does this replace the SAT, ACT, or other requirements?",
    content:
      "No. Go Early College strengthens your academic profile alongside standard admissions requirements — it does not replace standardized testing, essays, or other application components.",
  },
  {
    title: "How is this different from AP or IB coursework?",
    content:
      "AP and IB demonstrate readiness for college-level work. Go Early College coursework is actual, transferable college credit — a step beyond readiness into real completed academic history.",
  },
];

export default function UniversitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Universities & Recognition"
        title="Built on trust, not promises."
        description="Our transcript is US-accredited and built for transfer — recognized across public, private, and liberal arts institutions nationwide."
        image={IMAGES.heroCampusGreen}
        imageAlt="A brick university building fronted by a wide green lawn."
      >
        <div className="flex flex-wrap gap-10">
          <Stat value="350+" label="US Universities Welcome Indian Talent" />
          <Stat value="50" label="States of Recognition" />
          <Stat value="#1" label="India, Source of Int'l Students" />
        </div>
      </PageHero>

      {/* Accreditation */}
      <section className="bg-cream py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Accreditation"
            title="Real accreditation, not a certificate mill."
            description="Coursework follows the same regional accreditation standards recognized by accrediting bodies such as WASC — the framework many leading American universities rely on to evaluate transfer credit."
          />
          <Reveal as="div" stagger className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              {
                title: "Regionally Accredited",
                detail: "Coursework meets the standards used to evaluate transfer credit at US universities.",
              },
              {
                title: "US Faculty-Graded",
                detail: "Every course is taught and graded by faculty experienced in American higher education.",
              },
              {
                title: "Built for Transfer",
                detail: "Credits are documented on an official transcript, formatted for university admissions review.",
              },
            ].map((item) => (
              <div key={item.title} className="border-t border-charcoal/15 pt-6">
                <h3 className="font-serif text-xl text-crimson">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-charcoal-soft/80">{item.detail}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Recognition network */}
      <section className="bg-charcoal py-24 text-ivory md:py-32">
        <Container>
          <SectionHeading
            tone="light"
            align="center"
            eyebrow="Where Credits Are Recognized"
            title="A network that spans the American university system."
            description="Go Early College credit is broadly recognized across institution types — from public flagships to private research universities."
            className="mx-auto max-w-2xl"
          />
          <Reveal
            as="div"
            stagger
            className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-ivory/10 bg-ivory/10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {RECOGNITION.map((item) => (
              <div
                key={item.label}
                className="flex h-32 flex-col items-center justify-center gap-3 bg-charcoal px-6 text-center transition-colors duration-300 hover:bg-white/[0.04]"
              >
                <CrestIcon className="h-7 w-7 text-ivory/40" />
                <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-ivory/70">
                  {item.label}
                </span>
              </div>
            ))}
          </Reveal>
          <p className="mx-auto mt-8 max-w-xl text-center text-[13px] text-ivory/40">
            Categories reflect institution types where regionally accredited transfer
            credit is commonly recognized. Individual transfer policy varies by
            university — our admissions team can confirm specifics for any school.
          </p>
        </Container>
      </section>

      {/* Comparison table */}
      <section className="bg-ivory py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="The Difference"
            title="What admissions officers actually see."
            description="A side-by-side look at how a Go Early College transcript changes an application."
          />
          <Reveal className="mt-14 overflow-x-auto rounded-sm border border-charcoal/10">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="bg-cream text-[12px] uppercase tracking-[0.1em] text-charcoal-soft/60">
                  <th className="px-6 py-5 font-semibold">Criteria</th>
                  <th className="px-6 py-5 font-semibold">Standard Applicant</th>
                  <th className="px-6 py-5 font-semibold text-crimson">Go Early College Applicant</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.criteria} className={i % 2 === 0 ? "bg-ivory" : "bg-cream/50"}>
                    <td className="px-6 py-6 align-top font-serif text-lg text-charcoal">{row.criteria}</td>
                    <td className="px-6 py-6 align-top text-[14.5px] leading-relaxed text-charcoal-soft/75">
                      {row.standard}
                    </td>
                    <td className="px-6 py-6 align-top text-[14.5px] leading-relaxed text-charcoal">
                      {row.goEarly}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-24 md:py-32">
        <Container>
          <SectionHeading align="center" eyebrow="Common Questions" title="Accreditation & transfer, answered." className="mx-auto max-w-2xl" />
          <Reveal className="mx-auto mt-14 max-w-3xl">
            <Accordion items={FAQ} defaultOpen={null} />
          </Reveal>
        </Container>
      </section>

      <FinalCta secondaryLabel="View Admissions Steps" secondaryHref="/admissions" />
    </>
  );
}

function CrestIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 28" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
      <path d="M12 1 22 6v7c0 8-5 11.5-10 13C7 24.5 2 21 2 13V6l10-5Z" />
      <path d="M8 12.5h8M12 8v9" />
    </svg>
  );
}
