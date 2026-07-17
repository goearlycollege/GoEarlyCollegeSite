import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function AlternatingBlock({
  eyebrow,
  title,
  children,
  image,
  imageAlt,
  reverse = false,
  index,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  index?: number;
}) {
  return (
    <section className="border-b border-charcoal/10 py-20 last:border-b-0 md:py-28">
      <Container>
        <div
          className={cn(
            "grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20",
            reverse && "lg:[&>*:first-child]:order-last"
          )}
        >
          <Reveal className="relative aspect-[4/5] w-full overflow-hidden rounded-sm md:aspect-[5/4]">
            <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 45vw, 90vw" />
          </Reveal>

          <Reveal className="flex flex-col gap-6">
            {typeof index === "number" && (
              <span className="font-serif text-5xl text-gold/50">{String(index).padStart(2, "0")}</span>
            )}
            <Eyebrow>{eyebrow}</Eyebrow>
            <h3 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.12] text-charcoal text-balance">
              {title}
            </h3>
            <div className="max-w-lg text-[16px] leading-relaxed text-charcoal-soft/85">{children}</div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
