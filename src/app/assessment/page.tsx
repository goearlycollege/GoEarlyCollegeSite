import { Container } from "@/components/ui/container";
import { AssessmentFlow } from "@/components/assessment/assessment-flow";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Free College Readiness Assessment",
  fullTitle: "Free College Readiness Assessment | Go Early College",
  description:
    "Find out exactly where your child stands — and what steps will get them to a US university faster. Free. 15 minutes. Personalised report in 60 seconds.",
  path: "/assessment",
});

const REPORT_CONTENTS = [
  { title: "College Readiness Score", detail: "Scored evaluation of positioning for early college access — based on grade, board, academic profile, and university timeline." },
  { title: "Personalised Gap Analysis", detail: "What your child has, what they need, and exact steps Go Early College provides to close the gap." },
  { title: "Recommended Program Tier", detail: "Starter, Plus, or Pro recommendation based on grade and goals." },
  { title: "5 Recommended Courses", detail: "From 350+ university network — matched to subject preferences and career interests." },
  { title: "Credits-by-Year Projection", detail: "How many credits could be accumulated by Grade 12 and equivalent tuition saving in ₹." },
  { title: "Next Step", detail: "Personalised counsellor call recommendation with direct booking link embedded in the report." },
];

export default function AssessmentPage() {
  return (
    <section className="min-h-screen bg-ivory pb-24 pt-[calc(var(--header-height)+2rem)] md:pt-[calc(var(--header-height)+3.5rem)]">
      <Container>
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <span className="text-[12px] font-semibold uppercase tracking-[0.28em] text-crimson">
            Free — No Commitment Required
          </span>
          <h1 className="max-w-2xl font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] text-charcoal text-balance">
            Find out exactly where your child stands today.
          </h1>
          <p className="max-w-xl text-[16px] leading-relaxed text-charcoal-soft/75">
            The free College Readiness Assessment takes 15 minutes. Your child&rsquo;s
            personalised report — readiness score, recommended courses, and credit
            projection — is delivered to your inbox in 60 seconds.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] font-semibold text-charcoal-soft/60">
            <span>✓ Completely free</span>
            <span>✓ 15 minutes</span>
            <span>✓ Personalised report in 60 seconds</span>
          </div>
        </div>

        <div className="mx-auto mb-16 grid max-w-4xl grid-cols-1 gap-6 rounded-sm border border-charcoal/10 bg-cream p-8 sm:grid-cols-2 lg:grid-cols-3">
          {REPORT_CONTENTS.map((item) => (
            <div key={item.title}>
              <h3 className="font-serif text-base text-crimson">{item.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-charcoal-soft/70">{item.detail}</p>
            </div>
          ))}
        </div>

        <AssessmentFlow />
      </Container>
    </section>
  );
}
