import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const NOT_LIST = [
  {
    title: "We are not a coaching centre.",
    detail: "We do not train for exams. We build academic foundations.",
  },
  {
    title: "We are not an admissions consultancy.",
    detail: "We do not promise admissions. We strengthen profiles through academics.",
  },
  {
    title: "We are not an online course platform.",
    detail: "We do not sell courses. We deliver accredited college-level education.",
  },
];

export function Solution() {
  return (
    <section className="bg-charcoal py-24 text-ivory md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <Reveal as="div" stagger className="flex flex-col gap-8">
            <Eyebrow tone="gold">What We Are Not</Eyebrow>
            {NOT_LIST.map((item) => (
              <div key={item.title} className="flex gap-5 border-t border-ivory/10 pt-6">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ivory/25 text-[13px] text-ivory/50">
                  &times;
                </span>
                <div>
                  <p className="font-serif text-lg text-ivory">{item.title}</p>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ivory/55">{item.detail}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal
            as="div"
            className="relative flex flex-col justify-center gap-8 rounded-sm border border-gold/25 bg-gradient-to-br from-crimson to-crimson-dark p-10 md:p-14"
          >
            <Eyebrow tone="gold">What We Are</Eyebrow>
            <h2 className="font-serif text-[clamp(2rem,3.6vw,3rem)] leading-[1.1] text-balance">
              We are an Early College Access Institution.
            </h2>
            <div className="divider-diamond w-16" />
            <p className="max-w-md text-[17px] leading-relaxed text-ivory/85">
              We give ambitious students access to university-level opportunity
              before university begins &mdash; so they can arrive stronger, earn
              more, and achieve more.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
