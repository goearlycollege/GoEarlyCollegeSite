import { Logo } from "@/components/logo";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FOOTER_LINKS } from "@/lib/nav";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Facebook", href: "https://facebook.com" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <Container className="py-20 md:py-24">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col gap-6">
            <Logo variant="white" />
            <p className="max-w-xs text-[15px] leading-relaxed text-ivory/60">
              India&apos;s first Early College Access program — a US-accredited pathway
              that begins before university does.
            </p>
            <p className="font-serif text-lg italic text-gold">Your Future Starts Earlier.</p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-ivory/45">
              Explore
            </h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.explore.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[15px] text-ivory/75 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-ivory/45">
              Resources
            </h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[15px] text-ivory/75 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-ivory/45">
              Ready to begin?
            </h3>
            <p className="text-[15px] leading-relaxed text-ivory/70">
              Applications for the next cohort are open. It takes less than fifteen
              minutes to start.
            </p>
            <Button href="/apply" className="w-fit">
              Apply Now
            </Button>
            <div className="flex gap-4 pt-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/20 text-[11px] font-semibold text-ivory/70 transition-colors hover:border-gold hover:text-gold"
                >
                  {s.label.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ivory/10 pt-8 text-[13px] text-ivory/45 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Go Early College. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/contact" className="transition-colors hover:text-gold">
              Privacy Policy
            </a>
            <a href="/contact" className="transition-colors hover:text-gold">
              Terms of Use
            </a>
            <a href="/contact" className="transition-colors hover:text-gold">
              Accessibility
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
