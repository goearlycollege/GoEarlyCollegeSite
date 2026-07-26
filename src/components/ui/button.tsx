"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { trackCtaClick, trackWhatsappClick } from "@/lib/analytics";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary:
    "bg-gold text-crimson-dark hover:bg-gold-dark hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(201,151,77,0.6)]",
  secondary:
    "bg-crimson text-ivory hover:bg-crimson-dark hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(122,15,20,0.5)]",
  outline:
    "border border-current text-current hover:bg-current/[0.06]",
  ghost: "text-current hover:bg-current/[0.06]",
  dark: "bg-charcoal text-ivory hover:bg-crimson hover:-translate-y-0.5",
  whatsapp:
    "bg-whatsapp text-white hover:brightness-95 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(37,211,102,0.6)]",
};

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof variants;
  href?: string;
} & (
  | ({ href: string } & Omit<React.ComponentProps<typeof Link>, "href" | "className">)
  | ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>)
);

export function Button({ children, className, variant = "primary", href, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], className);
  const pathname = usePathname();
  const label = typeof children === "string" ? children : (href ?? "button");

  // Brief 10.3 — every CTA click is tracked (cta_click, or whatsapp_click for
  // the WhatsApp variant specifically), without each call site instrumenting
  // itself. `existingOnClick` preserves any onClick a caller already passed.
  function trackAndForward(existingOnClick: unknown) {
    return (e: React.MouseEvent) => {
      if (variant === "whatsapp") {
        trackWhatsappClick(pathname);
      } else {
        trackCtaClick(label, href ?? "", pathname);
      }
      (existingOnClick as ((e: React.MouseEvent) => void) | undefined)?.(e);
    };
  }

  if (href) {
    const { onClick, ...rest } = props as Omit<React.ComponentProps<typeof Link>, "href" | "className">;
    return (
      <Link href={href} className={classes} onClick={trackAndForward(onClick)} {...rest}>
        {children}
      </Link>
    );
  }

  const { onClick, ...rest } = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} onClick={trackAndForward(onClick)} {...rest}>
      {children}
    </button>
  );
}
