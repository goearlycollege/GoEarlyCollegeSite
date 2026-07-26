"use client";

import { useState } from "react";

// No commercial per-student revenue-share rate is specified anywhere in the
// brief — only the 10/20/30% *adoption* rates. This figure is an explicit,
// visibly-labeled placeholder so the calculator is illustrative rather than
// silently inventing a real commercial term. Replace once the real rate is set.
const ILLUSTRATIVE_SHARE_PER_STUDENT = 15000; // ₹ per enrolled student / year

const SCENARIOS = [10, 20, 30];

function formatInr(n: number) {
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
}

export function RevenueCalculator() {
  const [strength, setStrength] = useState(500);

  return (
    <div className="rounded-sm border border-charcoal/10 bg-cream p-8 md:p-10">
      <div className="flex flex-col gap-3">
        <label htmlFor="strength" className="text-[12.5px] font-semibold uppercase tracking-[0.08em] text-charcoal-soft/60">
          Your school&rsquo;s Grade 8–12 student strength
        </label>
        <div className="flex items-center gap-5">
          <input
            id="strength"
            type="range"
            min={50}
            max={3000}
            step={50}
            value={strength}
            onChange={(e) => setStrength(Number(e.target.value))}
            className="w-full accent-crimson"
          />
          <input
            type="number"
            min={0}
            value={strength}
            onChange={(e) => setStrength(Number(e.target.value) || 0)}
            className="w-24 shrink-0 rounded-sm border border-charcoal/15 bg-ivory px-3 py-2 text-[15px] text-charcoal focus:border-crimson focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {SCENARIOS.map((pct) => {
          const enrolled = Math.round((strength * pct) / 100);
          const revenue = enrolled * ILLUSTRATIVE_SHARE_PER_STUDENT;
          return (
            <div key={pct} className="rounded-sm border border-charcoal/10 bg-ivory p-6 text-center">
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-charcoal-soft/50">
                {pct}% Adoption
              </p>
              <p className="mt-3 font-serif text-2xl text-crimson">{formatInr(revenue)}</p>
              <p className="mt-1 text-[12.5px] text-charcoal-soft/60">
                Estimated annual revenue share &middot; {enrolled} students enrolled
              </p>
            </div>
          );
        })}
      </div>

      <p className="mt-6 text-[12.5px] leading-relaxed text-charcoal-soft/50">
        Illustrative only — assumes {formatInr(ILLUSTRATIVE_SHARE_PER_STUDENT)} revenue
        share per enrolled student per year. Exact revenue calculations confirmed
        during partnership call based on your school profile.
      </p>
    </div>
  );
}
