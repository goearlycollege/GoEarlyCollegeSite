// Brief Section 10.3/10.4 — GA4 + Meta Pixel are "to be confirmed", so this is
// a stand-in sink: every call site below is already wired to the exact event
// names the brief specifies. Swapping in a real provider means editing only
// the body of `track()` — nothing that calls it needs to change.
type EventPayload = Record<string, string | number | boolean | undefined>;

export function track(event: string, payload?: EventPayload) {
  if (process.env.NODE_ENV !== "production") {
    console.info(`[analytics] ${event}`, payload ?? {});
  }
  // TODO: forward to GA4 (gtag) / Meta Pixel (fbq) once accounts exist.
}

export function trackCtaClick(label: string, href: string, page: string) {
  track("cta_click", { label, href, page });
}

export function trackWhatsappClick(page: string) {
  track("whatsapp_click", { page });
}

export function trackPdfDownload(name: string) {
  track("pdf_download", { name });
}

export function trackAssessmentStart() {
  track("assessment_start");
}

export function trackAssessmentComplete() {
  track("assessment_complete");
}

export function trackApplicationStart() {
  track("application_start");
}

export function trackApplicationComplete() {
  track("application_complete");
}

export function trackContactFormSubmit() {
  track("contact_form_submit");
}

export function trackSchoolPartnerEnquiry() {
  track("school_partner_enquiry");
}

export function trackNewsletterSubscribe() {
  track("newsletter_subscribe");
}
