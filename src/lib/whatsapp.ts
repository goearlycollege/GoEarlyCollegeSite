export const WHATSAPP_PHONE = "918220606367";
export const WHATSAPP_DISPLAY_NUMBER = "+91 82206 06367";
export const WHATSAPP_MESSAGE =
  "Hi, I would like to know more about Go Early College for my child in Grade [X].";

export function whatsappHref(message: string = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
