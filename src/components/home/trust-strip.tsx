import { Container } from "@/components/ui/container";

const BADGES = [
  "WASC Accredited School",
  "NCPSA Accredited",
  "UGC Equivalent Diploma",
  "British Parliament — Women Champion Award",
  "Singapore MOE — Kidspreneur Curriculum",
];

export function TrustStrip() {
  return (
    <section className="border-y border-charcoal/10 bg-ivory py-8">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {BADGES.map((badge) => (
            <span
              key={badge}
              className="text-center text-[12px] font-semibold uppercase tracking-[0.1em] text-charcoal-soft/60"
            >
              {badge}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
