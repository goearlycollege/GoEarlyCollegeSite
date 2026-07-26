"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/nav";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState<string | null>(null);
  const pathname = usePathname();

  // Close the mobile menu on route change (derived during render, per React's
  // "adjusting state when a prop changes" pattern — avoids an effect).
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    if (menuOpen) setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Brief 5, Page 10 — /assessment is a standalone conversion page with no
  // nav bar, same bare treatment as /apply.
  const isBareHeader = pathname === "/apply" || pathname === "/assessment";
  const solid = scrolled || menuOpen || isBareHeader;

  if (isBareHeader) {
    return (
      <header className="fixed inset-x-0 top-0 z-50 border-b border-charcoal/10 bg-ivory/95 py-4 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[1360px] items-center justify-between px-6 md:px-10 lg:px-16">
          <Logo variant="crimson" showWordmark={false} />
          <Link
            href="/"
            className="text-[12.5px] font-semibold uppercase tracking-[0.12em] text-charcoal-soft/70 transition-colors hover:text-crimson"
          >
            Save &amp; Exit
          </Link>
        </div>
      </header>
    );
  }

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          solid
            ? "border-b border-charcoal/10 bg-ivory/95 py-3 shadow-[0_4px_24px_-8px_rgba(29,31,35,0.12)] backdrop-blur-md"
            : "border-b border-white/0 bg-transparent py-6"
        )}
      >
      <div className="mx-auto flex w-full max-w-[1360px] items-center justify-between px-6 md:px-10 lg:px-16">
        <Logo variant={solid ? "crimson" : "white"} />

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-[12.5px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300",
                  solid ? "text-charcoal-soft hover:text-crimson" : "text-white/85 hover:text-white",
                  active && (solid ? "text-crimson" : "text-white")
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300",
                    active && "scale-x-100"
                  )}
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            href="/assessment"
            variant="outline"
            className={cn(
              "border-crimson px-6 py-3",
              solid ? "text-crimson hover:bg-crimson/[0.06]" : "text-white hover:bg-white/10"
            )}
          >
            Free Assessment
          </Button>
          <Button
            href="/apply"
            variant="primary"
            className="px-6 py-3"
          >
            Apply Now
          </Button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <Button href="/apply" variant="primary" className="px-4 py-2.5 text-[11px]">
            Apply Now
          </Button>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5"
          >
            <span
              className={cn(
                "h-px w-6 transition-all duration-300",
                solid ? "bg-charcoal" : "bg-white",
                menuOpen && "translate-y-[3.5px] rotate-45"
              )}
            />
            <span
              className={cn(
                "h-px w-6 transition-all duration-300",
                solid ? "bg-charcoal" : "bg-white",
                menuOpen && "-translate-y-[3.5px] -rotate-45"
              )}
            />
          </button>
        </div>
      </div>
      </header>

      {/* Rendered as a sibling of <header>, not a child: the header gains
          backdrop-blur when solid/open, and backdrop-filter establishes a new
          containing block for fixed-position descendants — nesting this here
          would shrink it to the header's own height instead of the viewport. */}
      <div
        className={cn(
          "fixed inset-0 top-0 z-50 flex flex-col bg-ivory transition-all duration-500 lg:hidden",
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <Logo variant="crimson" />
        </div>
        <nav className="flex flex-1 flex-col justify-center gap-1 px-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
              className={cn(
                "border-b border-charcoal/10 py-4 font-serif text-3xl text-charcoal transition-all duration-500",
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-3 px-8 pb-10">
          <Button
            href="/assessment"
            variant="outline"
            className="w-full border-crimson text-crimson hover:bg-crimson/[0.06]"
          >
            Free Assessment
          </Button>
          <Button href="/apply" className="w-full">
            Apply Now
          </Button>
        </div>
      </div>
    </>
  );
}
