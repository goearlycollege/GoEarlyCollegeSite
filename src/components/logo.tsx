import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  variant = "crimson",
  className,
  showWordmark = true,
  size = 40,
  markClassName,
  wordmarkClassName,
}: {
  variant?: "crimson" | "white";
  className?: string;
  showWordmark?: boolean;
  size?: number;
  markClassName?: string;
  wordmarkClassName?: string;
}) {
  const src = variant === "white" ? "/brand/logo-mark-white.png" : "/brand/logo-mark.png";

  return (
    <Link href="/" className={cn("group flex items-center gap-3", className)} aria-label="Go Early College — Home">
      <Image
        src={src}
        alt=""
        width={size}
        height={size}
        priority
        className={cn(
          "h-9 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105 md:h-10",
          markClassName
        )}
      />
      {showWordmark && (
        <span
          className={cn(
            "font-serif text-[13px] font-semibold uppercase leading-[1.2] tracking-[0.16em]",
            variant === "white" ? "text-white" : "text-crimson",
            wordmarkClassName
          )}
        >
          Go
          <br />
          Early
          <br />
          College
        </span>
      )}
    </Link>
  );
}
