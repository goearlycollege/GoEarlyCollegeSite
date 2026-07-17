import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading, Eyebrow } from "@/components/ui/section-heading";
import { AlternatingBlock } from "@/components/ui/alternating-block";
import { Reveal } from "@/components/ui/reveal";
import { FinalCta } from "@/components/final-cta";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "Go Early College was founded on one belief: the strongest university journeys begin long before university. Learn our story, values, and mission.",
};

const TIMELINE = [
  {
    year: "2023",
    title: "An idea, tested",
    detail:
      "Founders working in US college admissions noticed a gap: ambitious Indian students had no structured way to build a real academic profile before applying — only exam coaching.",
  },
  {
    year: "2024",
    title: "Go Early College opens its doors",
    detail:
      "The first cohort enrolls, earning US-accredited, transferable college credit while continuing at their current schools — Open Doors 2024.",
  },
  {
    year: "2025",
    title: "Accreditation & university partnerships",
    detail:
      "Formal transfer pathways established with accredited US institutions, giving every transcript weight in the admissions process.",
  },
  {
    year: "2026",
    title: "A growing institution",
    detail:
      "Go Early College expands its faculty, mentorship network, and course catalogue to serve a new generation of early cohorts nationwide.",
  },
];

const VALUES = [
  {
    title: "Ambition",
    detail: "We inspire students to aim higher and pursue extraordinary futures with confidence.",
  },
  {
    title: "Credibility",
    detail: "We uphold the highest academic standards and operate with integrity, transparency, and responsibility.",
  },
  {
    title: "Opportunity",
    detail: "We create access to university-level opportunity early — unlocking paths that change lives.",
  },
  {
    title: "Excellence",
    detail: "We pursue excellence in academics, systems, and experiences — every single day.",
  },
  {
    title: "Optimism",
    detail: "We believe in every student's potential and remain positive about what's possible.",
  },
];

const LEADERSHIP = [
  {
    name: "Dr. Arjun Mehta",
    role: "Founder & Chief Executive",
    bio: "Former US admissions officer turned institution-builder, focused on closing the access gap for Indian students.",
    image: IMAGES.portraitFounder,
  },
  {
    name: "Priya Nair",
    role: "Head of Academics",
    bio: "Designs the accredited curriculum in partnership with US faculty, ensuring rigor at every level.",
    image: IMAGES.portraitAcademicsHead,
  },
  {
    name: "Rohan Kapoor",
    role: "Director of Admissions",
    bio: "Guides families through eligibility, enrollment, and the transfer-credit process from day one.",
    image: IMAGES.portraitAdmissionsHead,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Go Early College"
        title="Built on a simple belief."
        description="The strongest university journeys begin long before university. We exist to give ambitious students that head start — as an institution, not a shortcut."
        image={IMAGES.heroLibrary}
        imageAlt="A grand university library reading room bathed in warm afternoon light."
      />

      {/* Origin story — alternating blocks */}
      <AlternatingBlock
        index={1}
        eyebrow="Why We Started"
        title="A category that did not exist."
        image={IMAGES.classroomScene}
        imageAlt="A teacher works with a classroom of engaged students."
      >
        <p>
          India sends more students to US universities than any other country in the
          world — yet almost nothing exists to help ambitious students build a real
          academic profile before they apply. What&rsquo;s available trains for exams,
          not for university-level thinking.
        </p>
        <p className="mt-4">
          We created a new pathway: one that brings university-level opportunity to
          students <em className="font-serif italic text-crimson">before</em> they leave
          school, not after.
        </p>
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
          Go Early College helps students earn a US-accredited transcript and build a
          stronger academic future while remaining enrolled in their current school.
          There is no relocation, no gap year, and no compromise on the education
          already underway.
        </p>
        <p className="mt-4">
          By the time our students apply to university, they have already done
          university-level work &mdash; and their transcripts prove it.
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
          We look for curiosity, discipline, and a willingness to be challenged &mdash;
          not just a transcript full of top marks. Our students come from schools
          across India, in every board and stream, united by the ambition to go
          further.
        </p>
      </AlternatingBlock>

      {/* Timeline */}
      <section className="bg-cream py-24 md:py-32">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Our Story So Far"
            title="Rooted in tradition. Designed for tomorrow."
            className="mx-auto max-w-2xl"
          />

          <Reveal as="div" stagger className="relative mt-20 flex flex-col gap-0">
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

      {/* Mission & Vision */}
      <section className="bg-crimson py-24 text-ivory md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
            <Reveal className="flex flex-col gap-5 border-t border-ivory/20 pt-8">
              <Eyebrow tone="gold">Our Vision</Eyebrow>
              <p className="font-serif text-2xl leading-snug md:text-3xl">
                To become the institution every ambitious Indian student touches before
                entering an American university.
              </p>
            </Reveal>
            <Reveal className="flex flex-col gap-5 border-t border-ivory/20 pt-8">
              <Eyebrow tone="gold">Our Mission</Eyebrow>
              <p className="font-serif text-2xl leading-snug md:text-3xl">
                We help students earn a US-accredited transcript and build a stronger
                academic future &mdash; while remaining enrolled in their current
                school.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-ivory py-24 md:py-32">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Our Values"
            title="Our values shape every decision, every action, every student journey."
            className="mx-auto max-w-2xl"
          />
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
          <SectionHeading
            eyebrow="Institutional Philosophy"
            title="Led by educators, not marketers."
            description="Our leadership team brings direct experience from US admissions offices and higher education — building an institution around real academic rigor."
          />
          <Reveal as="div" stagger className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {LEADERSHIP.map((person) => (
              <div key={person.name} className="group flex flex-col gap-5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <Image
                    src={person.image}
                    alt={`Portrait of ${person.name}, ${person.role}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 640px) 30vw, 90vw"
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
        </Container>
      </section>

      <FinalCta
        eyebrow="Join the Institution"
        title="Your story could start here."
        description="Meet the team, tour the curriculum, and see why families are choosing to start earlier."
        secondaryLabel="Meet the Program"
        secondaryHref="/program"
      />
    </>
  );
}
