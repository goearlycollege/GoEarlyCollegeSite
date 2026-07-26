"use client";

import { usePathname } from "next/navigation";
import { trackWhatsappClick } from "@/lib/analytics";
import { whatsappHref } from "@/lib/whatsapp";

export function WhatsAppButton() {
  const pathname = usePathname();
  const href = whatsappHref();

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Message us on WhatsApp"
      onClick={() => trackWhatsappClick(pathname)}
      className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp shadow-[0_8px_24px_-6px_rgba(37,211,102,0.6)] transition-transform duration-300 hover:scale-105"
    >
      <svg viewBox="0 0 24 24" fill="white" className="h-7 w-7">
        <path d="M12.02 2C6.5 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.08L2 22l5.06-1.33A9.94 9.94 0 0 0 12.02 22C17.52 22 22 17.52 22 12S17.52 2 12.02 2Zm5.87 14.21c-.25.7-1.45 1.34-2 1.43-.53.09-1.15.13-1.86-.12-.43-.15-.98-.32-1.69-.63-2.97-1.28-4.9-4.27-5.05-4.47-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.48.27-.3.6-.37.8-.37.2 0 .4 0 .57.01.18.01.43-.07.68.52.25.6.85 2.06.93 2.21.08.15.13.33.02.53-.1.2-.16.32-.31.5-.15.18-.32.4-.46.54-.15.15-.31.31-.13.61.18.3.8 1.32 1.72 2.14 1.18 1.05 2.18 1.38 2.48 1.53.3.15.48.13.66-.08.18-.2.76-.89.97-1.19.2-.3.4-.25.68-.15.27.1 1.73.82 2.03.97.3.15.5.22.57.35.08.13.08.72-.17 1.42Z" />
      </svg>
    </a>
  );
}
