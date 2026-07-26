// Brief 3.2 / Page 8 — placeholder number, must be replaced with the real
// WhatsApp Business number before launch.
export const WHATSAPP_PHONE = "918000000000";
export const WHATSAPP_DISPLAY_NUMBER = "+91 80000 00000";
export const WHATSAPP_MESSAGE =
  "Hi, I would like to know more about Go Early College for my child in Grade [X].";

export function whatsappHref(message: string = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
