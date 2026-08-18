"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { trackContactFormSubmit } from "@/lib/analytics";
import { submitForm } from "@/lib/submit-form";

const I_AM_A = [
  "Grade 8",
  "Grade 9",
  "Grade 10",
  "Grade 11",
  "Grade 12",
  "Parent or Guardian",
  "School Representative",
];

const inputClass =
  "w-full rounded-sm border border-charcoal/15 bg-ivory px-4 py-3.5 text-[15px] text-charcoal placeholder:text-charcoal-soft/40 transition-colors focus:border-crimson focus:outline-none";
const labelClass = "text-[12.5px] font-semibold uppercase tracking-[0.08em] text-charcoal-soft/60";

export function EnquiryForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [whatsappSameAsPhone, setWhatsappSameAsPhone] = useState(true);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    const payload = {
      ...Object.fromEntries(formData.entries()),
      whatsapp: whatsappSameAsPhone ? phone : whatsapp,
    };
    const { error } = await submitForm("contact", payload);
    if (error) {
      setStatus("error");
      return;
    }
    trackContactFormSubmit();
    router.push("/thank-you?type=contact");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" id="enquiry-form">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={labelClass}>
            Full Name
          </label>
          <input id="name" name="name" type="text" required placeholder="Your name" className={inputClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="grade" className={labelClass}>
            I am a...
          </label>
          <select id="grade" name="grade" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select one
            </option>
            {I_AM_A.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className={labelClass}>
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+91 00000 00000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label htmlFor="whatsapp" className={labelClass}>
              WhatsApp Number
            </label>
            <label className="flex items-center gap-1.5 text-[12px] text-charcoal-soft/60">
              <input
                type="checkbox"
                checked={whatsappSameAsPhone}
                onChange={(e) => setWhatsappSameAsPhone(e.target.checked)}
                className="accent-crimson"
              />
              Same as phone
            </label>
          </div>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            placeholder="+91 00000 00000"
            disabled={whatsappSameAsPhone}
            readOnly={whatsappSameAsPhone}
            value={whatsappSameAsPhone ? phone : whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            className={inputClass + " disabled:opacity-60"}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="city" className={labelClass}>
            City
          </label>
          <input id="city" name="city" type="text" required placeholder="Your city" className={inputClass} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={labelClass}>
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          minLength={20}
          placeholder="Tell us a little about your goals, or ask us anything (at least 20 characters)."
          className={inputClass}
        />
      </div>

      <Button type="submit" disabled={status === "submitting"} className="mt-2 w-fit">
        {status === "submitting" ? "Sending…" : "Send Enquiry →"}
      </Button>
      {status === "error" && (
        <p className="text-[13px] text-crimson">
          Something went wrong sending your enquiry. Please try again.
        </p>
      )}
      <p className="text-[13px] leading-relaxed text-charcoal-soft/55">
        Your details are kept strictly confidential. We will never share your
        information with third parties. You will not be added to a marketing list
        without your permission.
      </p>
    </form>
  );
}
