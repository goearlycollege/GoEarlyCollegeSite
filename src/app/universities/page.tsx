import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";
import { Stat } from "@/components/ui/stat";
import { FinalCta } from "@/components/final-cta";
import { IMAGES } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Universities & Recognition",
  description:
    "Learn how Go Early College's accredited transcript is recognized: accreditation standards, transfer pathways, and where students go next.",
  path: "/universities",
});

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

const AP_IB_MOOC_GEC = [
  {
    label: "AP Courses",
    detail:
      "Demonstrate readiness for college-level work. Signal: ‘This student could probably do university work.’ Not actual college credit.",
  },
  {
    label: "IB Curriculum",
    detail: "International curriculum demonstrating global academic exposure. Signal: School-level differentiation. Not transferable US college credit.",
  },
  {
    label: "MOOC Certificate",
    detail:
      "Completion record from online platform. Not graded by accredited faculty. Not transferable to university credit. Admissions committees treat as optional extras.",
  },
  {
    label: "Go Early College",
    detail:
      "Actual, completed, transferable college credit — graded by US faculty, on a WASC-accredited transcript. Signal: ‘This student has already done university-level work.’ The only option in this comparison that is actual academic history.",
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
  {
    title: "How is this different from a MOOC or online certificate?",
    content:
      "A MOOC certificate is a completion record from an online platform — not graded by accredited faculty, not transferable to university credit. Admissions committees treat it as an optional extra. Go Early College coursework is actual, completed, transferable college credit — graded by US faculty, on a WASC-accredited transcript.",
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
          <Stat value="350+" label="University Partners" />
          <Stat value="50" label="States" />
          <Stat value="WASC" label="Accredited" />
          <Stat value="UGC" label="Equivalent" />
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
          <div className="mt-10 flex flex-col items-start gap-2">
            <button
              type="button"
              aria-disabled="true"
              title="Certificate pending upload from AWS — see Section 10.5"
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-sm border border-charcoal/20 px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-charcoal-soft/40"
            >
              Download the WASC accreditation certificate →
            </button>
          </div>
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

      {/* AP vs IB vs MOOC vs GEC */}
      <section className="bg-crimson py-24 text-ivory md:py-32">
        <Container>
          <SectionHeading
            tone="light"
            align="center"
            title="AP vs IB vs MOOC vs Go Early College."
            className="mx-auto max-w-2xl"
          />
          <Reveal
            as="div"
            stagger
            className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-ivory/15 bg-ivory/15 sm:grid-cols-2 lg:grid-cols-4"
          >
            {AP_IB_MOOC_GEC.map((col) => (
              <div key={col.label} className="flex flex-col gap-3 bg-crimson p-7">
                <h3 className="font-serif text-lg text-gold">{col.label}</h3>
                <p className="text-[14px] leading-relaxed text-ivory/80">{col.detail}</p>
              </div>
            ))}
          </Reveal>
          <p className="mx-auto mt-12 max-w-2xl text-center font-serif text-lg italic text-ivory/90">
            &ldquo;An AP score says: this student could probably do college work. A Go
            Early College transcript says: this student has already done it.&rdquo;
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

      <FinalCta
        eyebrow="Applications Are Open"
        primaryLabel="Take the Free Assessment"
        primaryHref="/assessment"
        secondaryLabel="View Admissions Steps"
        secondaryHref="/admissions"
        reassurance
      />
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
