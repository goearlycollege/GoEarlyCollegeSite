export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Program", href: "/program" },
  { label: "Universities", href: "/universities" },
  { label: "Admissions", href: "/admissions" },
  { label: "Resources", href: "/resources" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINKS = {
  explore: [
    { label: "About", href: "/about" },
    { label: "Program", href: "/program" },
    { label: "Universities", href: "/universities" },
    { label: "Admissions", href: "/admissions" },
  ],
  resources: [
    { label: "Resources", href: "/resources" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Contact", href: "/contact" },
    { label: "Apply", href: "/apply" },
  ],
} as const;
