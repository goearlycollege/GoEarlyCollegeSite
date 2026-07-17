import { cn } from "@/lib/utils";

export function Stat({
  value,
  label,
  tone = "light",
  className,
}: {
  value: string;
  label: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <span className={cn("font-serif text-[clamp(2rem,3.2vw,3rem)] leading-none", tone === "light" ? "text-ivory" : "text-crimson")}>
        {value}
      </span>
      <span className={cn("text-[13px] uppercase tracking-[0.12em]", tone === "light" ? "text-ivory/60" : "text-charcoal-soft/70")}>
        {label}
      </span>
    </div>
  );
}
