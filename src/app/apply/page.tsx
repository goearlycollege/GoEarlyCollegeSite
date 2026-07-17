import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ApplicationFlow } from "@/components/apply/application-flow";

export const metadata: Metadata = {
  title: "Apply",
  description: "Start your Go Early College application — five simple steps, autosaved as you go.",
};

export default function ApplyPage() {
  return (
    <section className="min-h-screen bg-ivory pb-24 pt-[calc(var(--header-height)+2rem)] md:pt-[calc(var(--header-height)+3.5rem)]">
      <Container>
        <div className="mb-14 flex flex-col items-center gap-3 text-center">
          <span className="text-[12px] font-semibold uppercase tracking-[0.28em] text-crimson">
            Application
          </span>
          <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] text-charcoal">
            Start earlier. Go further.
          </h1>
          <p className="max-w-md text-[15px] leading-relaxed text-charcoal-soft/70">
            Five short steps. Your progress is saved automatically, so you can pick up
            right where you left off.
          </p>
        </div>
        <ApplicationFlow />
      </Container>
    </section>
  );
}
