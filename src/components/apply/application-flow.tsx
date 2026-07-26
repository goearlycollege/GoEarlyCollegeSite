"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { trackApplicationComplete, trackApplicationStart } from "@/lib/analytics";

type ApplicationData = {
  fullName: string;
  email: string;
  phone: string;
  whatsapp: string;
  dob: string;
  city: string;
  preferredLanguage: string;
  schoolName: string;
  grade: string;
  board: string;
  stream: string;
  mostRecentResult: string;
  subjectAreas: string[];
  targetUniversityType: string;
  applicationTimeline: string;
  previousCourses: "" | "Yes" | "No";
  previousCoursesDescription: string;
  hopesForGEC: string;
  transcriptFileName: string;
  idFileName: string;
  confirmAccurate: boolean;
};

const DEFAULT_DATA: ApplicationData = {
  fullName: "",
  email: "",
  phone: "",
  whatsapp: "",
  dob: "",
  city: "",
  preferredLanguage: "",
  schoolName: "",
  grade: "",
  board: "",
  stream: "",
  mostRecentResult: "",
  subjectAreas: [],
  targetUniversityType: "",
  applicationTimeline: "",
  previousCourses: "",
  previousCoursesDescription: "",
  hopesForGEC: "",
  transcriptFileName: "",
  idFileName: "",
  confirmAccurate: false,
};

const STORAGE_KEY = "gec-application-draft";

const STEPS = ["Basic Info", "Academic Background", "Program Interest", "Documents", "Review"] as const;

const LANGUAGES = ["Tamil", "Telugu", "Hindi", "Kannada", "English"];
const GRADES = ["Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"];
const BOARDS = ["CBSE", "ICSE", "State Board", "IB", "IGCSE", "Other"];
const STREAMS = ["Science", "Commerce", "Arts", "Not applicable"];
const SUBJECT_AREAS = ["Sciences", "Maths", "Business", "Humanities", "Technology", "Arts", "Not sure"];
const UNIVERSITY_TYPES = ["Large public", "Private research", "Liberal arts", "Community college", "Not sure"];
const TIMELINES = ["Within 1 year", "1–2 years", "2–3 years", "3+ years"];

const inputClass =
  "w-full rounded-sm border border-charcoal/15 bg-ivory px-4 py-3.5 text-[15px] text-charcoal placeholder:text-charcoal-soft/40 transition-colors focus:border-crimson focus:outline-none";
const labelClass = "text-[12.5px] font-semibold uppercase tracking-[0.08em] text-charcoal-soft/60";

function isStepValid(step: number, data: ApplicationData) {
  switch (step) {
    case 0:
      return Boolean(data.fullName && data.email && data.phone && data.dob && data.city && data.preferredLanguage);
    case 1:
      return Boolean(data.schoolName && data.grade && data.board);
    case 2:
      return Boolean(data.applicationTimeline && data.subjectAreas.length > 0);
    case 3:
      return Boolean(data.transcriptFileName);
    case 4:
      return data.confirmAccurate;
    default:
      return true;
  }
}

export function ApplicationFlow() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<ApplicationData>(DEFAULT_DATA);
  const [restored, setRestored] = useState(false);
  const [saveNote, setSaveNote] = useState(false);
  const [whatsappSameAsPhone, setWhatsappSameAsPhone] = useState(true);
  const hasMounted = useRef(false);
  const stepRef = useRef<HTMLDivElement>(null);

  // Brief 10.3 — application_start fires once, when the form actually mounts
  // (not on every render).
  useEffect(() => {
    trackApplicationStart();
  }, []);

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
    { dependencies: [step], scope: stepRef }
  );

  function update<K extends keyof ApplicationData>(key: K, value: ApplicationData[K]) {
    setData((d) => ({ ...d, [key]: value }));
  }

  function toggleSubjectArea(area: string) {
    setData((d) => ({
      ...d,
      subjectAreas: d.subjectAreas.includes(area)
        ? d.subjectAreas.filter((i) => i !== area)
        : [...d.subjectAreas, area],
    }));
  }

  function goNext() {
    if (step < STEPS.length - 1) setStep((s) => s + 1);
  }
  function goBack() {
    if (step > 0) setStep((s) => s - 1);
  }

  function handleSubmit() {
    trackApplicationComplete();
    window.localStorage.removeItem(STORAGE_KEY);
    const params = new URLSearchParams({ type: "application" });
    if (data.fullName) params.set("name", data.fullName);
    router.push(`/thank-you?${params.toString()}`);
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
            <StepHeading
              title="Let's start with the basics."
              detail="Two minutes of information — everything here is saved automatically as you go."
            />
            <div className="flex flex-col gap-2">
              <label className={labelClass} htmlFor="fullName">Full Name</label>
              <input id="fullName" className={inputClass} value={data.fullName} onChange={(e) => update("fullName", e.target.value)} placeholder="Your full name" />
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className={labelClass} htmlFor="email">Email Address</label>
                <input id="email" type="email" className={inputClass} value={data.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label className={labelClass} htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  className={inputClass}
                  value={data.phone}
                  onChange={(e) => {
                    update("phone", e.target.value);
                    if (whatsappSameAsPhone) update("whatsapp", e.target.value);
                  }}
                  placeholder="+91 00000 00000"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className={labelClass} htmlFor="whatsapp">WhatsApp Number</label>
                <label className="flex items-center gap-1.5 text-[12px] text-charcoal-soft/60">
                  <input
                    type="checkbox"
                    checked={whatsappSameAsPhone}
                    onChange={(e) => {
                      setWhatsappSameAsPhone(e.target.checked);
                      if (e.target.checked) update("whatsapp", data.phone);
                    }}
                    className="accent-crimson"
                  />
                  Same as phone
                </label>
              </div>
              <input
                id="whatsapp"
                type="tel"
                className={cn(inputClass, whatsappSameAsPhone && "opacity-60")}
                value={data.whatsapp}
                disabled={whatsappSameAsPhone}
                readOnly={whatsappSameAsPhone}
                onChange={(e) => update("whatsapp", e.target.value)}
                placeholder="+91 00000 00000"
              />
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className={labelClass} htmlFor="dob">Date of Birth</label>
                <input id="dob" type="date" className={inputClass} value={data.dob} onChange={(e) => update("dob", e.target.value)} />
              </div>
              <div className="flex flex-col gap-2">
                <label className={labelClass} htmlFor="city">City</label>
                <input id="city" className={inputClass} value={data.city} onChange={(e) => update("city", e.target.value)} placeholder="Your city" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className={labelClass} htmlFor="preferredLanguage">Preferred Language for Admissions Call</label>
              <select
                id="preferredLanguage"
                className={inputClass}
                value={data.preferredLanguage}
                onChange={(e) => update("preferredLanguage", e.target.value)}
              >
                <option value="">Select a language</option>
                {LANGUAGES.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="flex flex-col gap-5">
            <StepHeading
              title="Tell us about your school."
              detail="Nothing about your current education changes — we just need to know where your child stands today."
            />
            <div className="flex flex-col gap-2">
              <label className={labelClass} htmlFor="schoolName">School Name</label>
              <input id="schoolName" className={inputClass} value={data.schoolName} onChange={(e) => update("schoolName", e.target.value)} placeholder="Your current school" />
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className={labelClass} htmlFor="grade">Current Grade</label>
                <select id="grade" className={inputClass} value={data.grade} onChange={(e) => update("grade", e.target.value)}>
                  <option value="">Select grade</option>
                  {GRADES.map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className={labelClass} htmlFor="board">School Board</label>
                <select id="board" className={inputClass} value={data.board} onChange={(e) => update("board", e.target.value)}>
                  <option value="">Select board</option>
                  {BOARDS.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:w-1/2">
              <label className={labelClass} htmlFor="stream">Academic Stream (if applicable)</label>
              <select id="stream" className={inputClass} value={data.stream} onChange={(e) => update("stream", e.target.value)}>
                <option value="">Select stream</option>
                {STREAMS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className={labelClass} htmlFor="mostRecentResult">Most Recent Result</label>
              <input
                id="mostRecentResult"
                className={inputClass}
                value={data.mostRecentResult}
                onChange={(e) => update("mostRecentResult", e.target.value)}
                placeholder="e.g. 88% aggregate, or A grade — a report card upload follows in Step 4"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col gap-6">
            <StepHeading
              title="What are you hoping to build?"
              detail="This helps your counsellor personalise your first course sequence."
            />
            <div className="flex flex-col gap-3">
              <span className={labelClass}>Subject Areas (choose all that apply)</span>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {SUBJECT_AREAS.map((area) => {
                  const checked = data.subjectAreas.includes(area);
                  return (
                    <button
                      type="button"
                      key={area}
                      onClick={() => toggleSubjectArea(area)}
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
                      {area}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className={labelClass} htmlFor="targetUniversityType">Target University Type</label>
                <select
                  id="targetUniversityType"
                  className={inputClass}
                  value={data.targetUniversityType}
                  onChange={(e) => update("targetUniversityType", e.target.value)}
                >
                  <option value="">Select a type</option>
                  {UNIVERSITY_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className={labelClass} htmlFor="applicationTimeline">University Application Timeline</label>
                <select
                  id="applicationTimeline"
                  className={inputClass}
                  value={data.applicationTimeline}
                  onChange={(e) => update("applicationTimeline", e.target.value)}
                >
                  <option value="">Select a timeline</option>
                  {TIMELINES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span className={labelClass}>Previous College Courses or Certifications?</span>
              <div className="flex gap-3">
                {(["Yes", "No"] as const).map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => update("previousCourses", opt)}
                    className={cn(
                      "rounded-sm border px-6 py-2.5 text-[14px] font-semibold transition-colors duration-200",
                      data.previousCourses === opt
                        ? "border-crimson bg-crimson/5 text-crimson"
                        : "border-charcoal/15 text-charcoal-soft/80 hover:border-crimson/30"
                    )}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {data.previousCourses === "Yes" && (
                <input
                  className={inputClass}
                  value={data.previousCoursesDescription}
                  onChange={(e) => update("previousCoursesDescription", e.target.value)}
                  placeholder="Briefly describe them"
                />
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className={labelClass} htmlFor="hopesForGEC">
                What are you hoping Go Early College will give your child? (150 words max)
              </label>
              <textarea
                id="hopesForGEC"
                rows={4}
                maxLength={1200}
                className={inputClass}
                value={data.hopesForGEC}
                onChange={(e) => update("hopesForGEC", e.target.value)}
                placeholder="Tell us a little about your goals."
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col gap-6">
            <StepHeading
              title="Upload your documents."
              detail="Used only to confirm eligibility. Never shared. PDF, JPG, or PNG files, up to 5MB each."
            />
            <FileField
              label="Most Recent School Report Card"
              required
              fileName={data.transcriptFileName}
              onSelect={(name) => update("transcriptFileName", name)}
            />
            <FileField
              label="School ID or Enrolment Confirmation (optional)"
              fileName={data.idFileName}
              onSelect={(name) => update("idFileName", name)}
            />
          </div>
        )}

        {step === 4 && (
          <div className="flex flex-col gap-8">
            <StepHeading title="Review your application." detail="Make sure everything looks right before you submit." />

            <div className="flex flex-col gap-2">
              <ReviewSection title="Basic Info" onEdit={() => setStep(0)}>
                <ReviewRow label="Name" value={data.fullName} />
                <ReviewRow label="Email" value={data.email} />
                <ReviewRow label="Phone" value={data.phone} />
                <ReviewRow label="WhatsApp" value={data.whatsapp} />
                <ReviewRow label="Date of Birth" value={data.dob} />
                <ReviewRow label="City" value={data.city} />
                <ReviewRow label="Preferred Language" value={data.preferredLanguage} />
              </ReviewSection>
              <ReviewSection title="Academic Background" onEdit={() => setStep(1)}>
                <ReviewRow label="School" value={data.schoolName} />
                <ReviewRow label="Grade" value={data.grade} />
                <ReviewRow label="Board" value={data.board} />
                <ReviewRow label="Stream" value={data.stream} />
                <ReviewRow label="Most Recent Result" value={data.mostRecentResult} />
              </ReviewSection>
              <ReviewSection title="Program Interest" onEdit={() => setStep(2)}>
                <ReviewRow label="Subject Areas" value={data.subjectAreas.join(", ")} />
                <ReviewRow label="Target University Type" value={data.targetUniversityType} />
                <ReviewRow label="Application Timeline" value={data.applicationTimeline} />
                <ReviewRow label="Previous Courses" value={data.previousCourses} />
              </ReviewSection>
              <ReviewSection title="Documents" onEdit={() => setStep(3)}>
                <ReviewRow label="Report Card" value={data.transcriptFileName} />
                <ReviewRow label="ID" value={data.idFileName || "Not provided"} />
              </ReviewSection>
            </div>

            {/* Counsellor reveal */}
            <div className="flex items-center gap-5 rounded-sm border border-gold/30 bg-gold-tint/40 p-6">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-gold-dark/50 text-[11px] font-semibold uppercase tracking-[0.06em] text-gold-dark">
                Photo
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-gold-dark">Your Counsellor</p>
                <p className="mt-1 font-serif text-lg text-charcoal">Assigned after your academic review.</p>
                <p className="mt-1 text-[13.5px] text-charcoal-soft/70">
                  Every student is paired 1:1 with a trained counsellor fluent in your
                  preferred language, from enrolment through university application.
                </p>
              </div>
            </div>

            {/* What happens next */}
            <div className="rounded-sm border border-charcoal/10 bg-cream p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-charcoal-soft/50">
                What Happens Next
              </p>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-4">
                {[
                  { when: "Day 1", what: "Receipt confirmed" },
                  { when: "Days 2–3", what: "Academic review" },
                  { when: "Days 3–5", what: "Admissions call" },
                  { when: "Days 5–10", what: "Offer issued" },
                ].map((row) => (
                  <div key={row.when}>
                    <p className="font-serif text-lg text-crimson">{row.when}</p>
                    <p className="text-[13.5px] text-charcoal-soft/70">{row.what}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="border-l-2 border-gold pl-5 font-serif text-lg italic text-crimson">
              &ldquo;The biggest advantage is not more time. It is the right time. You
              have just taken the first step toward giving your child both.&rdquo;
            </p>

            <label className="flex items-start gap-3 text-[14px] text-charcoal-soft/80">
              <input
                type="checkbox"
                checked={data.confirmAccurate}
                onChange={(e) => update("confirmAccurate", e.target.checked)}
                className="mt-0.5 accent-crimson"
              />
              Information accurate. I understand submission begins the admissions
              process.
            </label>
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
            disabled={!valid}
            className="inline-flex items-center justify-center rounded-sm bg-gold px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-crimson-dark transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-dark disabled:pointer-events-none disabled:opacity-40"
          >
            Submit My Application →
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

const MAX_FILE_BYTES = 5 * 1024 * 1024; // Brief Section 8 — 5MB max

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
  const [error, setError] = useState("");
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
      {error && <span className="text-[13px] text-crimson">{error}</span>}
      <input
        id={inputId}
        type="file"
        className="sr-only"
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (!file) return;
          if (file.size > MAX_FILE_BYTES) {
            setError("That file is over 5MB. Please choose a smaller PDF, JPG, or PNG.");
            e.target.value = "";
            return;
          }
          setError("");
          onSelect(file.name);
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
