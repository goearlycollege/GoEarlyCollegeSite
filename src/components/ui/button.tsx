import Link from "next/link";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary:
    "bg-gold text-crimson-dark hover:bg-gold-dark hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(201,151,77,0.6)]",
  outline:
    "border border-current text-current hover:bg-current/[0.06]",
  ghost: "text-current hover:bg-current/[0.06]",
  dark: "bg-charcoal text-ivory hover:bg-crimson hover:-translate-y-0.5",
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

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(props as Omit<React.ComponentProps<typeof Link>, "href" | "className">)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
