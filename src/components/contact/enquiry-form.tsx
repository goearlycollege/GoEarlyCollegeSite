"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const GRADES = ["Grade 9", "Grade 10", "Grade 11", "Grade 12", "Parent / Guardian"];

const inputClass =
  "w-full rounded-sm border border-charcoal/15 bg-ivory px-4 py-3.5 text-[15px] text-charcoal placeholder:text-charcoal-soft/40 transition-colors focus:border-crimson focus:outline-none";

export function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 900);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-sm border border-gold/30 bg-gold-tint/40 p-8">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-crimson text-ivory">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
            <path d="m5 13 4 4L19 7" />
          </svg>
        </span>
        <h3 className="font-serif text-2xl text-charcoal">Thank you — we&rsquo;ll be in touch.</h3>
        <p className="text-[15px] leading-relaxed text-charcoal-soft/80">
          A member of our admissions team will respond within one business day. In the
          meantime, feel free to explore the program or start your application.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" id="enquiry-form">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-[12.5px] font-semibold uppercase tracking-[0.08em] text-charcoal-soft/60">
            Full Name
          </label>
          <input id="name" name="name" type="text" required placeholder="Your name" className={inputClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="grade" className="text-[12.5px] font-semibold uppercase tracking-[0.08em] text-charcoal-soft/60">
            I am a...
          </label>
          <select id="grade" name="grade" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select one
            </option>
            {GRADES.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-[12.5px] font-semibold uppercase tracking-[0.08em] text-charcoal-soft/60">
            Email
          </label>
          <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-[12.5px] font-semibold uppercase tracking-[0.08em] text-charcoal-soft/60">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" required placeholder="+91 00000 00000" className={inputClass} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-[12.5px] font-semibold uppercase tracking-[0.08em] text-charcoal-soft/60">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us a little about your goals, or ask us anything."
          className={inputClass}
        />
      </div>

      <Button type="submit" disabled={status === "submitting"} className="mt-2 w-fit">
        {status === "submitting" ? "Sending…" : "Send Enquiry"}
      </Button>
    </form>
  );
}
