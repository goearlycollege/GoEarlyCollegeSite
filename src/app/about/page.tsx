import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { AlternatingBlock } from "@/components/ui/alternating-block";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { FinalCta } from "@/components/final-cta";
import { IMAGES } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  fullTitle: "About Go Early College | The Institution Behind the Credential",
  description:
    "Go Early College was built on one belief — the strongest university journeys begin long before university. Learn our story, accreditations, mission, and team.",
  path: "/about",
});

const TIMELINE = [
  {
    year: "2021",
    title: "An institution is founded",
    detail:
      "American World School established in Chennai. WASC-accredited, UGC-equivalent. Built to give Indian students access to a legitimate US academic pathway.",
  },
  {
    year: "2023",
    title: "Go Early College takes shape",
    detail: "Program designed in partnership with US faculty and 350+ university partners.",
  },
  {
    year: "2024",
    title: "First cohort enrols",
    detail: "Indian school students earn transferable US college credits while continuing at their existing schools.",
  },
  {
    year: "2025",
    title: "University partnerships formalised",
    detail: "Formal transfer pathways established across 50 US states.",
  },
  {
    year: "2026",
    title: "A growing institution",
    detail: "Expanded faculty, counsellor network, course catalogue, and city coverage.",
  },
];

const VALUES = [
  {
    title: "Ambition",
    detail: "We inspire students to aim higher than the standard path suggests is possible.",
  },
  {
    title: "Credibility",
    detail: "Every claim we make is backed by accreditation, documentation, and institutional standing.",
  },
  {
    title: "Opportunity",
    detail: "We create access to university-level education early — for every student, on every board, in every city.",
  },
  {
    title: "Excellence",
    detail: "We pursue the highest academic standards every day, in every course, with every student.",
  },
  {
    title: "Optimism",
    detail: "We believe in every student's potential. The evidence, consistently, confirms it.",
  },
];

const LEADERSHIP = [
  {
    name: "Mohanalakshmi Rajakumar",
    role: "Founder and Chief Executive, American World School",
    bio: "Educator, entrepreneur, Women Champion Award (British Parliament). Creator of the Kidspreneur curriculum under Singapore MOE. Founder of Asia's first entrepreneurial school.",
    image: IMAGES.portraitAcademicsHead,
  },
  {
    name: "Paul Montague",
    role: "Chief Executive Officer, Go Early College",
    bio: "Partnership Director with experience in dual diploma programs, early college access, and international school networks across South Asia, Southeast Asia, Middle East, Africa, and Europe.",
    image: IMAGES.portraitFounder,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Go Early College"
        title="Built on a belief that the system needed to change."
        description="India sends more students to US universities than any country in the world — yet the system gives those students almost nothing to build a real academic profile before they apply. Go Early College was built to change that. Not as a platform, not as a coaching centre — as an institution."
        image={IMAGES.heroLibrary}
        imageAlt="A grand university library reading room bathed in warm afternoon light."
      />

      <AlternatingBlock
        index={1}
        eyebrow="Why We Started"
        title="A category that did not exist."
        image={IMAGES.classroomScene}
        imageAlt="A teacher works with a classroom of engaged students."
      >
        <p>
          When families researched ways to give their children a genuine head start for
          US university applications, they found coaching for exams, consultants
          promising admissions, and online platforms selling certificates that no
          university had heard of. Nobody had built the real thing — a WASC-accredited
          institution in India that could issue a legitimate US academic transcript to
          a CBSE, ICSE, or State Board student, and give that student access to real,
          credit-bearing university courses while they were still in school. So we
          built it. American World School — WASC-accredited, UGC-equivalent, founded in
          Chennai — is the institutional backbone of everything Go Early College
          offers.
        </p>
        <Button
          href="/program"
          variant="ghost"
          className="mt-5 w-fit px-0 py-0 normal-case tracking-normal text-[15px] font-semibold text-crimson hover:bg-transparent hover:underline"
        >
          See how the program works →
        </Button>
      </AlternatingBlock>

      <AlternatingBlock
        index={2}
        eyebrow="What Changed"
        title="Access before arrival."
        image={IMAGES.studentsStudyingTogether}
        imageAlt="A small group of students studying together around a table."
        reverse
      >
        <p>
          The moment American World School issued its first WASC-accredited US
          transcript to an Indian school student, something changed that had never
          changed before. For the first time, a student enrolled in a CBSE school in
          Chennai could have a legitimate US academic record — with courses graded by
          American faculty, credits transferable to universities across all 50 states,
          and a GPA that admissions committees could evaluate. Not preparation for
          university. Actual, completed, verifiable academic history at college level.
        </p>
        <p className="mt-5 border-l-2 border-gold pl-5 font-serif text-lg italic text-crimson">
          &ldquo;By the time our students apply, they have already done university-level
          work. Their transcripts prove it.&rdquo;
        </p>
      </AlternatingBlock>

      <AlternatingBlock
        index={3}
        eyebrow="Who We Serve"
        title="Ambitious students, not just high scorers."
        image={IMAGES.studentsCodingTogether}
        imageAlt="Two students collaborate closely at a computer."
      >
        <p>
          We look for curiosity, discipline, and a genuine willingness to be
          challenged. Our students come from CBSE, ICSE, State Board, IB, and IGCSE
          schools across India. Grade 8 through Grade 12. Every city. Every board.
          United by one thing — the ambition to go further than the standard path
          allows.
        </p>
        <Button
          href="/admissions"
          variant="ghost"
          className="mt-5 w-fit px-0 py-0 normal-case tracking-normal text-[15px] font-semibold text-crimson hover:bg-transparent hover:underline"
        >
          Check eligibility — it takes two minutes →
        </Button>
      </AlternatingBlock>

      {/* Timeline */}
      <section className="bg-cream py-24 md:py-32">
        <Container>
          <Reveal as="div" stagger className="relative flex flex-col gap-0">
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-charcoal/10 md:left-1/2" />
            {TIMELINE.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex flex-col gap-4 pb-16 last:pb-0 md:w-1/2 md:pb-20 ${
                  i % 2 === 0 ? "md:pr-14 md:text-right" : "md:ml-auto md:pl-14"
                }`}
              >
                <span
                  className={`absolute top-1 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-gold bg-cream font-serif text-xs text-crimson left-0 md:left-auto ${
                    i % 2 === 0 ? "md:-right-4" : "md:-left-4"
                  }`}
                >
                  <span className="h-2 w-2 rounded-full bg-crimson" />
                </span>
                <div className="pl-12 md:pl-0">
                  <span className="font-serif text-3xl text-crimson">{item.year}</span>
                  <h3 className="mt-2 font-serif text-xl text-charcoal">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-charcoal-soft/80">{item.detail}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Accreditation */}
      <section className="bg-crimson py-24 text-ivory md:py-28">
        <Container>
          <Reveal className="flex flex-col gap-10">
            <h2 className="max-w-2xl font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] text-balance">
              The accreditation that makes everything else possible.
            </h2>
            <div className="grid grid-cols-1 gap-10 border-t border-ivory/20 pt-8 md:grid-cols-2">
              <div>
                <Eyebrow tone="gold">WASC</Eyebrow>
                <p className="mt-4 text-[16px] leading-relaxed text-ivory/85">
                  American World School holds direct WASC accreditation — Western
                  Association of Schools and Colleges. The standard American
                  universities use to evaluate transfer credit. Without this, the
                  transcript means nothing. With it, every credit opens doors.
                </p>
              </div>
              <div>
                <Eyebrow tone="gold">UGC Equivalent</Eyebrow>
                <p className="mt-4 text-[16px] leading-relaxed text-ivory/85">
                  The American High School Diploma issued by AWS is formally recognised
                  by India&rsquo;s University Grants Commission as equivalent to an
                  Indian Higher Secondary Certificate.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-2">
              <button
                type="button"
                aria-disabled="true"
                title="Certificates pending upload from AWS — see Section 10.5"
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-sm border border-ivory/35 px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-ivory/50"
              >
                Download our accreditation certificates →
              </button>
              <p className="text-[13px] text-ivory/50">
                Real documents. Real institutions. Fully verifiable.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-ivory py-24 md:py-32">
        <Container>
          <h2 className="mx-auto max-w-2xl text-center font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] text-balance text-charcoal">
            Five values. Every student journey.
          </h2>
          <Reveal
            as="div"
            stagger
            className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-5"
          >
            {VALUES.map((value) => (
              <div key={value.title} className="flex flex-col items-center gap-4 text-center">
                <span className="font-serif text-lg text-crimson">{value.title}</span>
                <span className="h-px w-8 bg-gold" />
                <p className="text-[13.5px] leading-relaxed text-charcoal-soft/75">{value.detail}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Leadership */}
      <section className="border-t border-charcoal/10 bg-cream py-24 md:py-32">
        <Container>
          <h2 className="max-w-2xl font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] text-balance text-charcoal">
            Led by educators and institution-builders — not marketers.
          </h2>
          <Reveal as="div" stagger className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {LEADERSHIP.map((person) => (
              <div key={person.name} className="group flex flex-col gap-5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <Image
                    src={person.image}
                    alt={`Portrait of ${person.name}, ${person.role}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 640px) 45vw, 90vw"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-charcoal">{person.name}</h3>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-gold-dark">
                    {person.role}
                  </p>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-charcoal-soft/80">{person.bio}</p>
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal className="mt-14 max-w-2xl border-t border-charcoal/10 pt-10">
            <p className="text-[16px] leading-relaxed text-charcoal-soft/85">
              <span className="font-serif text-lg text-crimson">Counselling Team.</span>{" "}
              Every Go Early College counsellor is a trained educator fluent in Tamil,
              Telugu, Hindi, Kannada, and English — assigned 1:1 to every student from
              enrolment through university application.
            </p>
          </Reveal>
        </Container>
      </section>

      <FinalCta
        title="The institution is built. The pathway is open. Your child's moment is now."
        primaryLabel="Take the Free Assessment"
        primaryHref="/assessment"
        secondaryLabel="Apply Now"
        secondaryHref="/apply"
        secondaryVariant="secondary"
        tertiaryLabel="Talk to our admissions team"
        tertiaryHref="/contact"
        reassurance="Free. No commitment. Available in Tamil, Telugu, Hindi, Kannada, and English."
      />
    </>
  );
}
