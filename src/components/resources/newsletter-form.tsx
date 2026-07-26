"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { trackNewsletterSubscribe } from "@/lib/analytics";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    window.setTimeout(() => {
      setStatus("success");
      trackNewsletterSubscribe();
    }, 700);
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
      <input
        type="email"
        required
        placeholder="you@example.com"
        aria-label="Email address"
        className="w-full rounded-sm border border-ivory/25 bg-transparent px-5 py-3.5 text-[15px] text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none"
      />
      <Button type="submit" variant="primary" disabled={status === "submitting"} className="shrink-0">
        {status === "submitting" ? "Subscribing…" : "Subscribe"}
      </Button>
    </form>
  );
}
