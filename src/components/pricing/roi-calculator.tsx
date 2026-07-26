"use client";

import { useState } from "react";

// Brief Section 13 — "1 US credit hour ≈ $1,000–$3,000. Use $1,500 as
// conservative estimate." The INR conversion rate itself isn't specified in
// the brief ("convert to INR at current rate") — ₹85/$ is an illustrative
// placeholder, clearly labeled, not a live FX feed.
const USD_PER_CREDIT = 1500;
const ILLUSTRATIVE_INR_PER_USD = 85;

function formatInr(n: number) {
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
}

export function RoiCalculator() {
  const [credits, setCredits] = useState(6);
  const savedUsd = credits * USD_PER_CREDIT;
  const savedInr = savedUsd * ILLUSTRATIVE_INR_PER_USD;

  return (
    <div className="rounded-sm border border-charcoal/10 bg-cream p-8 md:p-10">
      <label htmlFor="credits" className="text-[12.5px] font-semibold uppercase tracking-[0.08em] text-charcoal-soft/60">
        How many credits will your child earn?
      </label>
      <div className="mt-4 flex items-center gap-5">
        <input
          id="credits"
          type="range"
          min={3}
          max={20}
          step={1}
          value={credits}
          onChange={(e) => setCredits(Number(e.target.value))}
          className="w-full accent-crimson"
        />
        <span className="w-20 shrink-0 text-right font-serif text-2xl text-crimson">{credits}</span>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="rounded-sm border border-charcoal/10 bg-ivory p-6 text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-charcoal-soft/50">Tuition Saved</p>
          <p className="mt-2 font-serif text-3xl text-crimson">{formatInr(savedInr)}</p>
          <p className="mt-1 text-[12.5px] text-charcoal-soft/55">
            At {credits} credits, your child saves approximately {formatInr(savedInr)} in
            US university tuition.
          </p>
        </div>
        <div className="rounded-sm border border-charcoal/10 bg-ivory p-6 text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-charcoal-soft/50">Program Cost vs. Tuition Saved</p>
          <p className="mt-2 text-[14px] text-charcoal-soft/70">
            Even at the highest program tier (₹2,80,000/year), {credits} credits
            saved comfortably outweighs the annual fee.
          </p>
        </div>
      </div>

      <p className="mt-6 text-center font-serif text-lg italic text-gold-dark">
        &ldquo;The program pays for itself at 6 credits earned.&rdquo;
      </p>
      <p className="mt-4 text-[12px] leading-relaxed text-charcoal-soft/45">
        Illustrative only. Assumes ${USD_PER_CREDIT.toLocaleString("en-US")} per US credit
        hour (a conservative estimate within the ${"1,000"}–${"3,000"} range) converted at
        an approximate rate of {formatInr(ILLUSTRATIVE_INR_PER_USD)}/US$1. Actual savings
        depend on the receiving university.
      </p>
    </div>
  );
}
