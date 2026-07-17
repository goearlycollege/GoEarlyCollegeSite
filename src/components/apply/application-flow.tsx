"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type ApplicationData = {
  fullName: string;
  email: string;
  phone: string;
  dob: string;
  schoolName: string;
  grade: string;
  board: string;
  percentage: string;
  startTerm: string;
  interests: string[];
  availability: string;
  transcriptFileName: string;
  idFileName: string;
};

const DEFAULT_DATA: ApplicationData = {
  fullName: "",
  email: "",
  phone: "",
  dob: "",
  schoolName: "",
  grade: "",
  board: "",
  percentage: "",
  startTerm: "",
  interests: [],
  availability: "",
  transcriptFileName: "",
  idFileName: "",
};

const STORAGE_KEY = "gec-application-draft";

const STEPS = ["Basic Info", "Academic Background", "Program Interest", "Documents", "Review"] as const;

const INTEREST_OPTIONS = [
  "Computer Science",
  "Business & Economics",
  "Engineering",
  "Humanities",
  "Life Sciences",
  "Data & Statistics",
];

const inputClass =
  "w-full rounded-sm border border-charcoal/15 bg-ivory px-4 py-3.5 text-[15px] text-charcoal placeholder:text-charcoal-soft/40 transition-colors focus:border-crimson focus:outline-none";
const labelClass = "text-[12.5px] font-semibold uppercase tracking-[0.08em] text-charcoal-soft/60";

function isStepValid(step: number, data: ApplicationData) {
  switch (step) {
    case 0:
      return Boolean(data.fullName && data.email && data.phone && data.dob);
    case 1:
      return Boolean(data.schoolName && data.grade && data.board);
    case 2:
      return Boolean(data.startTerm && data.interests.length > 0);
    case 3:
      return Boolean(data.transcriptFileName);
    default:
      return true;
  }
}

export function ApplicationFlow() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<ApplicationData>(DEFAULT_DATA);
  const [restored, setRestored] = useState(false);
  const [saveNote, setSaveNote] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState("");
  const hasMounted = useRef(false);
  const stepRef = useRef<HTMLDivElement>(null);

  // Restore draft on mount. This reads localStorage, which is unavailable during
  // SSR — the effect (post-hydration) is the correct, hydration-safe place for it.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as ApplicationData;
        // eslint-disable-next-line react-hooks/set-state-in-effect -- external-system (localStorage) sync, not derivable at render time
        setData({ ...DEFAULT_DATA, ...parsed });
        setRestored(true);
      }
    } catch {
      // ignore corrupted drafts
    }
  }, []);

  // Autosave
  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }
    const timeout = window.setTimeout(() => {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      setSaveNote(true);
      window.setTimeout(() => setSaveNote(false), 1600);
    }, 500);
    return () => window.clearTimeout(timeout);
  }, [data]);

  useGSAP(
    () => {
      gsap.fromTo(
        stepRef.current,
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    },
    { dependencies: [step, submitted], scope: stepRef }
  );

  function update<K extends keyof ApplicationData>(key: K, value: ApplicationData[K]) {
    setData((d) => ({ ...d, [key]: value }));
  }

  function toggleInterest(interest: string) {
    setData((d) => ({
      ...d,
      interests: d.interests.includes(interest)
        ? d.interests.filter((i) => i !== interest)
        : [...d.interests, interest],
    }));
  }

  function goNext() {
    if (step < STEPS.length - 1) setStep((s) => s + 1);
  }
  function goBack() {
    if (step > 0) setStep((s) => s - 1);
  }

  function handleSubmit() {
    const ref = `GEC-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefNumber(ref);
    setSubmitted(true);
    window.localStorage.removeItem(STORAGE_KEY);
  }

  if (submitted) {
    return <Confirmation refNumber={refNumber} name={data.fullName} />;
  }

  const valid = isStepValid(step, data);

  return (
    <div className="mx-auto w-full max-w-2xl">
      {restored && (
        <div className="mb-8 flex items-center gap-3 rounded-sm border border-gold/30 bg-gold-tint/40 px-5 py-3 text-[13.5px] text-charcoal-soft/80">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-dark" />
          We restored your saved draft. Pick up right where you left off.
        </div>
      )}

      <StepIndicator step={step} />

      <div ref={stepRef} className="mt-12">
        {step === 0 && (
          <div className="flex flex-col gap-5">
            <StepHeading title="Let's start with the basics." detail="A little about you." />
            <div className="flex flex-col gap-2">
              <label className={labelClass} htmlFor="fullName">Full Name</label>
              <input id="fullName" className={inputClass} value={data.fullName} onChange={(e) => update("fullName", e.target.value)} placeholder="Your full name" />
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className={labelClass} htmlFor="email">Email</label>
                <input id="email" type="email" className={inputClass} value={data.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label className={labelClass} htmlFor="phone">Phone</label>
                <input id="phone" type="tel" className={inputClass} value={data.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+91 00000 00000" />
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:w-1/2">
              <label className={labelClass} htmlFor="dob">Date of Birth</label>
              <input id="dob" type="date" className={inputClass} value={data.dob} onChange={(e) => update("dob", e.target.value)} />
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="flex flex-col gap-5">
            <StepHeading title="Tell us about your school." detail="Current academic background." />
            <div className="flex flex-col gap-2">
              <label className={labelClass} htmlFor="schoolName">School Name</label>
              <input id="schoolName" className={inputClass} value={data.schoolName} onChange={(e) => update("schoolName", e.target.value)} placeholder="Your current school" />
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className={labelClass} htmlFor="grade">Current Grade</label>
                <select id="grade" className={inputClass} value={data.grade} onChange={(e) => update("grade", e.target.value)}>
                  <option value="">Select grade</option>
                  {["Grade 9", "Grade 10", "Grade 11", "Grade 12"].map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className={labelClass} htmlFor="board">Board / Curriculum</label>
                <select id="board" className={inputClass} value={data.board} onChange={(e) => update("board", e.target.value)}>
                  <option value="">Select board</option>
                  {["CBSE", "ICSE", "IB", "IGCSE", "State Board", "Other"].map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:w-1/2">
              <label className={labelClass} htmlFor="percentage">Most Recent Overall Score (%)</label>
              <input id="percentage" type="number" min={0} max={100} className={inputClass} value={data.percentage} onChange={(e) => update("percentage", e.target.value)} placeholder="e.g. 88" />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col gap-6">
            <StepHeading title="What are you interested in?" detail="This helps us plan your first course sequence." />
            <div className="flex flex-col gap-2">
              <label className={labelClass} htmlFor="startTerm">Preferred Start Term</label>
              <select id="startTerm" className={inputClass} value={data.startTerm} onChange={(e) => update("startTerm", e.target.value)}>
                <option value="">Select a term</option>
                {["Fall 2026", "Spring 2027", "Fall 2027"].map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-3">
              <span className={labelClass}>Areas of Interest (choose all that apply)</span>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {INTEREST_OPTIONS.map((interest) => {
                  const checked = data.interests.includes(interest);
                  return (
                    <button
                      type="button"
                      key={interest}
                      onClick={() => toggleInterest(interest)}
                      className={cn(
                        "flex items-center gap-3 rounded-sm border px-4 py-3.5 text-left text-[14.5px] transition-colors duration-200",
                        checked ? "border-crimson bg-crimson/5 text-crimson" : "border-charcoal/15 text-charcoal-soft/80 hover:border-crimson/30"
                      )}
                    >
                      <span className={cn("flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border", checked ? "border-crimson bg-crimson" : "border-charcoal/25")}>
                        {checked && (
                          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className="h-2.5 w-2.5"><path d="m5 13 4 4L19 7" /></svg>
                        )}
                      </span>
                      {interest}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:w-1/2">
              <label className={labelClass} htmlFor="availability">Weekly Availability</label>
              <select id="availability" className={inputClass} value={data.availability} onChange={(e) => update("availability", e.target.value)}>
                <option value="">Select availability</option>
                {["4-6 hours", "6-8 hours", "8-10 hours", "10+ hours"].map((a) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col gap-6">
            <StepHeading title="Upload your documents." detail="PDF or image files, up to 10MB each." />
            <FileField
              label="Most Recent Transcript / Report Card"
              required
              fileName={data.transcriptFileName}
              onSelect={(name) => update("transcriptFileName", name)}
            />
            <FileField
              label="Student ID or School ID (optional)"
              fileName={data.idFileName}
              onSelect={(name) => update("idFileName", name)}
            />
          </div>
        )}

        {step === 4 && (
          <div className="flex flex-col gap-6">
            <StepHeading title="Review your application." detail="Make sure everything looks right before you submit." />
            <ReviewSection title="Basic Info" onEdit={() => setStep(0)}>
              <ReviewRow label="Name" value={data.fullName} />
              <ReviewRow label="Email" value={data.email} />
              <ReviewRow label="Phone" value={data.phone} />
              <ReviewRow label="Date of Birth" value={data.dob} />
            </ReviewSection>
            <ReviewSection title="Academic Background" onEdit={() => setStep(1)}>
              <ReviewRow label="School" value={data.schoolName} />
              <ReviewRow label="Grade" value={data.grade} />
              <ReviewRow label="Board" value={data.board} />
              <ReviewRow label="Score" value={data.percentage ? `${data.percentage}%` : ""} />
            </ReviewSection>
            <ReviewSection title="Program Interest" onEdit={() => setStep(2)}>
              <ReviewRow label="Start Term" value={data.startTerm} />
              <ReviewRow label="Interests" value={data.interests.join(", ")} />
              <ReviewRow label="Availability" value={data.availability} />
            </ReviewSection>
            <ReviewSection title="Documents" onEdit={() => setStep(3)}>
              <ReviewRow label="Transcript" value={data.transcriptFileName} />
              <ReviewRow label="ID" value={data.idFileName || "Not provided"} />
            </ReviewSection>
          </div>
        )}
      </div>

      <div className="mt-12 flex items-center justify-between border-t border-charcoal/10 pt-8">
        <button
          type="button"
          onClick={goBack}
          disabled={step === 0}
          className="text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal-soft/60 transition-colors hover:text-crimson disabled:pointer-events-none disabled:opacity-0"
        >
          &larr; Back
        </button>

        <span
          className={cn(
            "text-[12px] uppercase tracking-[0.1em] text-charcoal-soft/40 transition-opacity duration-500",
            saveNote ? "opacity-100" : "opacity-0"
          )}
        >
          Draft saved
        </span>

        {step < STEPS.length - 1 ? (
          <button
            type="button"
            onClick={goNext}
            disabled={!valid}
            className="inline-flex items-center justify-center rounded-sm bg-crimson px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:bg-crimson-dark disabled:pointer-events-none disabled:opacity-40"
          >
            Continue
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            className="inline-flex items-center justify-center rounded-sm bg-gold px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-crimson-dark transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-dark"
          >
            Submit Application
          </button>
        )}
      </div>
    </div>
  );
}

function StepIndicator({ step }: { step: number }) {
  return (
    <div>
      <div className="relative h-px w-full bg-charcoal/10">
        <div
          className="absolute left-0 top-0 h-px bg-crimson transition-all duration-500 ease-out"
          style={{ width: `${(step / (STEPS.length - 1)) * 100}%` }}
        />
      </div>
      <div className="mt-5 flex justify-between">
        {STEPS.map((label, i) => (
          <div key={label} className={cn("flex flex-col items-start gap-2", i > 0 && "items-center", i === STEPS.length - 1 && "items-end")}>
            <span
              className={cn(
                "flex h-7 w-7 items-center justify-center rounded-full border font-serif text-[13px] transition-colors duration-300",
                i < step && "border-crimson bg-crimson text-ivory",
                i === step && "border-crimson text-crimson",
                i > step && "border-charcoal/20 text-charcoal-soft/40"
              )}
            >
              {i < step ? "✓" : i + 1}
            </span>
            <span className={cn("hidden text-[10.5px] font-semibold uppercase tracking-[0.06em] sm:block", i === step ? "text-crimson" : "text-charcoal-soft/40")}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StepHeading({ title, detail }: { title: string; detail: string }) {
  return (
    <div>
      <h2 className="font-serif text-2xl text-charcoal md:text-3xl">{title}</h2>
      <p className="mt-2 text-[14.5px] text-charcoal-soft/60">{detail}</p>
    </div>
  );
}

function FileField({
  label,
  required,
  fileName,
  onSelect,
}: {
  label: string;
  required?: boolean;
  fileName: string;
  onSelect: (name: string) => void;
}) {
  const inputId = `file-${label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")}`;
  return (
    <div className="flex flex-col gap-2">
      <label className={labelClass} htmlFor={inputId}>
        {label} {required && <span className="text-crimson">*</span>}
      </label>
      <label
        htmlFor={inputId}
        className={cn(
          "flex cursor-pointer items-center justify-between gap-4 rounded-sm border border-dashed px-5 py-6 transition-colors duration-200",
          fileName ? "border-crimson/40 bg-crimson/5" : "border-charcoal/20 hover:border-crimson/40"
        )}
      >
        <span className="flex items-center gap-3 text-[14.5px] text-charcoal-soft/75">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5 shrink-0 text-gold-dark">
            <path d="M12 16V4M12 4 7 9M12 4l5 5" />
            <path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
          </svg>
          {fileName || "Click to upload a file"}
        </span>
        <span className="shrink-0 text-[12px] font-semibold uppercase tracking-[0.08em] text-crimson">
          {fileName ? "Replace" : "Browse"}
        </span>
      </label>
      <input
        id={inputId}
        type="file"
        className="sr-only"
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) onSelect(file.name);
        }}
      />
    </div>
  );
}

function ReviewSection({ title, onEdit, children }: { title: string; onEdit: () => void; children: React.ReactNode }) {
  return (
    <div className="rounded-sm border border-charcoal/10 bg-cream p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-serif text-lg text-charcoal">{title}</h3>
        <button type="button" onClick={onEdit} className="text-[12px] font-semibold uppercase tracking-[0.08em] text-crimson hover:underline">
          Edit
        </button>
      </div>
      <div className="flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 text-[14px]">
      <span className="text-charcoal-soft/55">{label}</span>
      <span className="text-right text-charcoal">{value || "—"}</span>
    </div>
  );
}

function Confirmation({ refNumber, name }: { refNumber: string; name: string }) {
  const checkRef = useRef<SVGPathElement>(null);
  const circleRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const path = checkRef.current;
    if (!path) return;
    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    const tl = gsap.timeline({ delay: 0.1 });
    tl.fromTo(circleRef.current, { scale: 0, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.5, ease: "back.out(2.4)" })
      .to(path, { strokeDashoffset: 0, duration: 0.6, ease: "power2.out" }, "-=0.15")
      .from(".confirm-fade", { autoAlpha: 0, y: 16, duration: 0.6, stagger: 0.1, ease: "power2.out" }, "-=0.2");
  });

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-6 py-12 text-center">
      <span ref={circleRef} className="flex h-20 w-20 items-center justify-center rounded-full bg-crimson">
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
          <path ref={checkRef} d="m5 13 4 4L19 7" />
        </svg>
      </span>
      <h2 className="confirm-fade font-serif text-3xl text-charcoal md:text-4xl">
        {name ? `Thank you, ${name.split(" ")[0]}.` : "Application submitted."}
      </h2>
      <p className="confirm-fade text-[15.5px] leading-relaxed text-charcoal-soft/75">
        Your application has been received. Our admissions team will review it and
        follow up by email within three business days.
      </p>
      <div className="confirm-fade rounded-sm border border-gold/30 bg-gold-tint/40 px-6 py-3 font-serif text-lg text-crimson">
        Reference: {refNumber}
      </div>
      <Link
        href="/"
        className="confirm-fade mt-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-charcoal-soft/60 transition-colors hover:text-crimson"
      >
        &larr; Back to Home
      </Link>
    </div>
  );
}
