import { Hero } from "@/components/home/hero";
import { TrustStrip } from "@/components/home/trust-strip";
import { Problem } from "@/components/home/problem";
import { Solution } from "@/components/home/solution";
import { Stats } from "@/components/home/stats";
import { ObjectionBusters } from "@/components/home/objection-busters";
import { Testimonials } from "@/components/home/testimonials";
import { FinalCta } from "@/components/final-cta";
import { organizationSchema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />
      <Hero />
      <TrustStrip />
      <Problem />
      <Solution />
      <Stats />
      <ObjectionBusters />
      <Testimonials />
      <FinalCta
        eyebrow="Applications Are Open"
        title="The students who start earlier arrive further ahead."
        description="The free College Readiness Assessment takes 15 minutes. Your child's personalised report is delivered to your inbox in 60 seconds. After that, a counsellor calls. A pathway is built. A future starts earlier."
        primaryLabel="Take the Free Assessment"
        primaryHref="/assessment"
        secondaryLabel="Apply Now"
        secondaryHref="/apply"
        secondaryVariant="secondary"
        reassurance="Free. No commitment. No pressure. Just clarity."
      />
    </>
  );
}
