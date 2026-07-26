import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ASSESSMENT_REASSURANCE } from "@/lib/copy";

export function FinalCta({
  eyebrow,
  title = "Start Earlier. Go Further.",
  description,
  primaryLabel = "Apply Now",
  primaryHref = "/apply",
  secondaryLabel,
  secondaryHref,
  secondaryVariant = "outline",
  tertiaryLabel,
  tertiaryHref,
  reassurance,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  secondaryVariant?: "outline" | "secondary";
  tertiaryLabel?: string;
  tertiaryHref?: string;
  /** Pass `true` for the standard brief copy, or a custom string. */
  reassurance?: boolean | string;
}) {
  const reassuranceText =
    reassurance === true ? ASSESSMENT_REASSURANCE : reassurance || undefined;
  return (
    <section className="relative overflow-hidden bg-crimson py-24 text-ivory md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rotate-12 opacity-[0.07]"
      >
        <ShieldMark />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-16 h-[360px] w-[360px] -rotate-12 opacity-[0.06]"
      >
        <ShieldMark />
      </div>

      <Container className="relative flex flex-col items-center gap-7 text-center">
        <Reveal className="flex flex-col items-center gap-7">
          {eyebrow && (
            <span className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-gold">
              <span className="h-px w-8 bg-gold" />
              {eyebrow}
              <span className="h-px w-8 bg-gold" />
            </span>
          )}
          <h2 className="max-w-3xl font-serif text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] text-balance">
            {title}
          </h2>
          {description && (
            <p className="max-w-lg text-[17px] leading-relaxed text-ivory/80">{description}</p>
          )}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-4">
            <Button href={primaryHref}>{primaryLabel}</Button>
            {secondaryLabel && secondaryHref && secondaryVariant === "secondary" ? (
              <Button href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </Button>
            ) : (
              secondaryLabel &&
              secondaryHref && (
                <Button href={secondaryHref} variant="outline" className="border-ivory/35 text-ivory hover:bg-ivory/10">
                  {secondaryLabel}
                </Button>
              )
            )}
            {tertiaryLabel && tertiaryHref && (
              <Button href={tertiaryHref} variant="outline" className="border-ivory/35 text-ivory hover:bg-ivory/10">
                {tertiaryLabel}
              </Button>
            )}
          </div>
          {reassuranceText && (
            <p className="text-[13.5px] text-ivory/55">{reassuranceText}</p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}

function ShieldMark() {
  return (
    <svg viewBox="0 0 200 240" fill="none" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M100 4 190 62v70c0 62-42 96-90 104C52 228 10 194 10 132V62L100 4Z"
        stroke="currentColor"
        strokeWidth="6"
      />
    </svg>
  );
}
