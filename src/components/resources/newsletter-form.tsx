"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { trackNewsletterSubscribe } from "@/lib/analytics";
import { submitLead } from "@/lib/submit-form";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    const { error } = await submitLead("newsletter", Object.fromEntries(formData.entries()));
    if (error) {
      setStatus("error");
      return;
    }
    setStatus("success");
    trackNewsletterSubscribe();
  }

  if (status === "success") {
    return (
      <p className="text-[15px] leading-relaxed text-ivory/85">
        You&rsquo;re subscribed. Look out for next month&rsquo;s email.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <div className="flex w-full flex-col gap-2">
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          aria-label="Email address"
          className="w-full rounded-sm border border-ivory/25 bg-transparent px-5 py-3.5 text-[15px] text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none"
        />
        {status === "error" && (
          <p className="text-[13px] text-gold">Something went wrong. Please try again.</p>
        )}
      </div>
      <Button type="submit" variant="primary" disabled={status === "submitting"} className="shrink-0">
        {status === "submitting" ? "Subscribing…" : "Subscribe"}
      </Button>
    </form>
  );
}
