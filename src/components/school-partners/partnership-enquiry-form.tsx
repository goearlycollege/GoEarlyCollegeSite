"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { trackSchoolPartnerEnquiry } from "@/lib/analytics";

const SCHOOL_BOARDS = ["CBSE", "ICSE", "State Board", "International", "Multiple Boards"];
const HEARD_ABOUT = ["Referral", "LinkedIn", "Google", "Event", "Other"];

const inputClass =
  "w-full rounded-sm border border-charcoal/15 bg-ivory px-4 py-3.5 text-[15px] text-charcoal placeholder:text-charcoal-soft/40 transition-colors focus:border-crimson focus:outline-none";
const labelClass = "text-[12.5px] font-semibold uppercase tracking-[0.08em] text-charcoal-soft/60";

export function PartnershipEnquiryForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    trackSchoolPartnerEnquiry();
    window.setTimeout(() => {
      router.push("/thank-you?type=school-partner");
    }, 700);
  }

  return (
    <form id="partnership-enquiry-form" onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="schoolName">School Name</label>
          <input id="schoolName" required className={inputClass} placeholder="Your school's name" />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="nameRole">Your Name and Role</label>
          <input id="nameRole" required className={inputClass} placeholder="e.g. Principal / Counsellor / Management" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="schoolBoard">School Board</label>
          <select id="schoolBoard" required defaultValue="" className={inputClass}>
            <option value="" disabled>Select one</option>
            {SCHOOL_BOARDS.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="strength">Approximate Grade 8–12 Student Strength</label>
          <input id="strength" type="number" min={0} required className={inputClass} placeholder="e.g. 600" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="city">City</label>
          <input id="city" required className={inputClass} placeholder="Your city" />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="whatsapp">WhatsApp Number</label>
          <input id="whatsapp" type="tel" required className={inputClass} placeholder="+91 00000 00000" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="email">Email Address</label>
          <input id="email" type="email" required className={inputClass} placeholder="you@example.com" />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="heardAbout">How did you hear about us?</label>
          <select id="heardAbout" defaultValue="" className={inputClass}>
            <option value="">Optional</option>
            {HEARD_ABOUT.map((h) => (
              <option key={h} value={h}>{h}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className={labelClass} htmlFor="questions">Any specific questions?</label>
        <textarea id="questions" rows={4} className={inputClass} placeholder="Optional" />
      </div>

      <Button type="submit" disabled={status === "submitting"} className="mt-2 w-fit">
        {status === "submitting" ? "Sending…" : "Request a Partnership Call →"}
      </Button>
      <p className="text-[13px] text-charcoal-soft/55">
        Our B2B team responds within one business day. We will not approach your
        parent community without your explicit permission at every stage.
      </p>
    </form>
  );
}
