import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  tone = "crimson",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "crimson" | "gold" | "ivory";
}) {
  const toneClass = {
    crimson: "text-crimson",
    gold: "text-gold",
    ivory: "text-ivory",
  }[tone];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em]",
        toneClass,
        className
      )}
    >
      <span className="h-px w-8 bg-current" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
  titleClassName,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <Eyebrow tone={tone === "light" ? "gold" : "crimson"}>{eyebrow}</Eyebrow>
      )}
      <h2
        className={cn(
          "font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] text-balance",
          tone === "light" ? "text-ivory" : "text-charcoal",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-[17px] leading-relaxed",
            tone === "light" ? "text-ivory/75" : "text-charcoal-soft/85",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
