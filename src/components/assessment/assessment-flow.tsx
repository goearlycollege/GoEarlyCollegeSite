"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { trackAssessmentComplete, trackAssessmentStart } from "@/lib/analytics";
import { submitAssessment } from "@/lib/submit-form";

type AssessmentData = {
  grade: string;
  board: string;
  city: string;
  cityOther: string;
  schoolType: string;
  strongestSubject: string;
  academicPerformance: string;
  studyAbroadInterest: string;
  careerInterest: string;
  applicationTimeline: string;
  targetUniversityType: string;
  primaryGoal: string;
  familyUsHistory: string;
  childName: string;
  parentName: string;
  parentEmail: string;
  whatsapp: string;
};

const DEFAULT_DATA: AssessmentData = {
  grade: "",
  board: "",
  city: "",
  cityOther: "",
  schoolType: "",
  strongestSubject: "",
  academicPerformance: "",
  studyAbroadInterest: "",
  careerInterest: "",
  applicationTimeline: "",
  targetUniversityType: "",
  primaryGoal: "",
  familyUsHistory: "",
  childName: "",
  parentName: "",
  parentEmail: "",
  whatsapp: "",
};

const STORAGE_KEY = "gec-assessment-draft";

const CITIES = ["Chennai", "Bengaluru", "Mumbai", "Delhi NCR", "Hyderabad", "Pune", "Kolkata", "Ahmedabad", "Other"];

type Question = {
  key: keyof AssessmentData;
  label: string;
  options: string[];
};

// Section A — Student Profile (Q1–Q4)
const SECTION_A: Question[] = [
  { key: "grade", label: "What grade is your child currently in?", options: ["Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"] },
  { key: "board", label: "Which board is your child's school?", options: ["CBSE", "ICSE", "State Board", "IB", "IGCSE", "Other"] },
  { key: "city", label: "What city are you in?", options: CITIES },
  { key: "schoolType", label: "School type?", options: ["Private school", "International school", "Government school"] },
];

// Section B — Academic Profile (Q5–Q8)
const SECTION_B: Question[] = [
  {
    key: "strongestSubject",
    label: "Strongest subject area?",
    options: ["Sciences", "Maths", "English & Humanities", "Social Studies", "Commerce", "Arts", "Not sure"],
  },
  { key: "academicPerformance", label: "Academic performance?", options: ["Top of class", "Above average", "Average", "Below average"] },
  { key: "studyAbroadInterest", label: "Interest in studying abroad?", options: ["Yes strong", "Yes some", "Not yet", "Unsure"] },
  {
    key: "careerInterest",
    label: "Career interests?",
    options: ["Engineering", "Medicine", "Business", "Law", "Arts & Design", "Technology", "Sciences", "Undecided"],
  },
];

// Section C — Goals & Timeline (Q9–Q12)
const SECTION_C: Question[] = [
  { key: "applicationTimeline", label: "University application timeline?", options: ["Within 1 year", "1–2 years", "2–3 years", "3+ years"] },
  { key: "targetUniversityType", label: "Target university type?", options: ["Top 30", "Top 50", "Top 100", "Any accredited US", "Still deciding"] },
  {
    key: "primaryGoal",
    label: "Primary goal?",
    options: ["Earn credits & save tuition", "Strengthen application", "Build confidence", "All of the above"],
  },
  { key: "familyUsHistory", label: "Family US study history?", options: ["Yes", "No", "Currently planning to"] },
];

const QUESTIONS: Question[] = [...SECTION_A, ...SECTION_B, ...SECTION_C];
const TOTAL_SCREENS = QUESTIONS.length + 1; // + contact details screen

const inputClass =
  "w-full rounded-sm border border-charcoal/15 bg-ivory px-4 py-3.5 text-[15px] text-charcoal placeholder:text-charcoal-soft/40 transition-colors focus:border-crimson focus:outline-none";
const labelClass = "text-[12.5px] font-semibold uppercase tracking-[0.08em] text-charcoal-soft/60";

function isScreenValid(index: number, data: AssessmentData) {
  if (index < QUESTIONS.length) {
    const q = QUESTIONS[index];
    const value = data[q.key];
    if (q.key === "city" && value === "Other") return Boolean(data.cityOther);
    return Boolean(value);
  }
  return Boolean(data.childName && data.parentName && data.parentEmail);
}

export function AssessmentFlow() {
  const router = useRouter();
  const [screen, setScreen] = useState(0);
  const [data, setData] = useState<AssessmentData>(DEFAULT_DATA);
  const [restored, setRestored] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const hasMounted = useRef(false);
  const screenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    trackAssessmentStart();
  }, []);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as AssessmentData;
        // eslint-disable-next-line react-hooks/set-state-in-effect -- external-system (localStorage) sync, not derivable at render time
        setData({ ...DEFAULT_DATA, ...parsed });
        setRestored(true);
      }
    } catch {
      // ignore corrupted drafts
    }
  }, []);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }
    const timeout = window.setTimeout(() => {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }, 400);
    return () => window.clearTimeout(timeout);
  }, [data]);

  useGSAP(
    () => {
      gsap.fromTo(screenRef.current, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out" });
    },
    { dependencies: [screen], scope: screenRef }
  );

  function update<K extends keyof AssessmentData>(key: K, value: AssessmentData[K]) {
    setData((d) => ({ ...d, [key]: value }));
  }

  function goNext() {
    if (screen < TOTAL_SCREENS - 1) setScreen((s) => s + 1);
  }
  function goBack() {
    if (screen > 0) setScreen((s) => s - 1);
  }

  async function handleSubmit() {
    setSubmitting(true);
    setSubmitError(false);
    const { error } = await submitAssessment(data);
    if (error) {
      setSubmitting(false);
      setSubmitError(true);
      return;
    }
    trackAssessmentComplete();
    window.localStorage.removeItem(STORAGE_KEY);
    const params = new URLSearchParams({ type: "assessment" });
    if (data.childName) params.set("name", data.childName);
    if (data.parentEmail) params.set("email", data.parentEmail);
    router.push(`/thank-you?${params.toString()}`);
  }

  const valid = isScreenValid(screen, data);
  const progressPct = Math.round(((screen + 1) / TOTAL_SCREENS) * 100);

  return (
    <div className="mx-auto w-full max-w-xl">
      {restored && (
        <div className="mb-8 flex items-center gap-3 rounded-sm border border-gold/30 bg-gold-tint/40 px-5 py-3 text-[13.5px] text-charcoal-soft/80">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-dark" />
          We restored your saved progress.
        </div>
      )}

      <div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-charcoal/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-crimson to-gold transition-all duration-500 ease-out"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-charcoal-soft/45">
          Question {screen + 1} of {TOTAL_SCREENS} &middot; {progressPct}% complete
        </p>
      </div>

      <div ref={screenRef} className="mt-10">
        {screen < QUESTIONS.length ? (
          <QuestionScreen question={QUESTIONS[screen]} data={data} update={update} />
        ) : (
          <div className="flex flex-col gap-5">
            <h2 className="font-serif text-2xl text-charcoal md:text-3xl">Almost there.</h2>
            <p className="text-[14.5px] text-charcoal-soft/60">
              Just a few details so we know where to send the report.
            </p>
            <div className="flex flex-col gap-2">
              <label className={labelClass} htmlFor="childName">Child&rsquo;s First Name</label>
              <input
                id="childName"
                className={inputClass}
                value={data.childName}
                onChange={(e) => update("childName", e.target.value)}
                placeholder="For personalising the report"
              />
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className={labelClass} htmlFor="parentName">Parent Name</label>
                <input id="parentName" className={inputClass} value={data.parentName} onChange={(e) => update("parentName", e.target.value)} placeholder="Your name" />
              </div>
              <div className="flex flex-col gap-2">
                <label className={labelClass} htmlFor="parentEmail">Parent Email</label>
                <input
                  id="parentEmail"
                  type="email"
                  className={inputClass}
                  value={data.parentEmail}
                  onChange={(e) => update("parentEmail", e.target.value)}
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className={labelClass} htmlFor="whatsapp">WhatsApp Number (optional)</label>
              <input id="whatsapp" type="tel" className={inputClass} value={data.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} placeholder="+91 00000 00000" />
              <p className="text-[12.5px] text-charcoal-soft/50">We contact you only if you ask us to.</p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-12 flex items-center justify-between border-t border-charcoal/10 pt-8">
        <button
          type="button"
          onClick={goBack}
          disabled={screen === 0}
          className="text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal-soft/60 transition-colors hover:text-crimson disabled:pointer-events-none disabled:opacity-0"
        >
          &larr; Back
        </button>

        {screen < TOTAL_SCREENS - 1 ? (
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
            disabled={!valid || submitting}
            className="inline-flex items-center justify-center rounded-sm bg-gold px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-crimson-dark transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-dark disabled:pointer-events-none disabled:opacity-40"
          >
            {submitting ? "Generating your report…" : "Get My Child's Report →"}
          </button>
        )}
      </div>

      {submitError && (
        <p className="mt-4 text-center text-[13px] text-crimson">
          Something went wrong generating your report. Please try again.
        </p>
      )}

      {screen === TOTAL_SCREENS - 1 && (
        <p className="mt-6 text-center text-[13px] text-charcoal-soft/55">
          Your report arrives in 60 seconds. We will not call you unless you ask us
          to. Your details are kept strictly confidential.
        </p>
      )}
    </div>
  );
}

function QuestionScreen({
  question,
  data,
  update,
}: {
  question: Question;
  data: AssessmentData;
  update: <K extends keyof AssessmentData>(key: K, value: AssessmentData[K]) => void;
}) {
  const value = data[question.key];
  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-serif text-2xl text-charcoal md:text-3xl">{question.label}</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {question.options.map((option) => {
          const checked = value === option;
          return (
            <button
              type="button"
              key={option}
              onClick={() => update(question.key, option)}
              className={cn(
                "flex items-center gap-3 rounded-sm border px-5 py-4 text-left text-[15px] transition-colors duration-200",
                checked ? "border-crimson bg-crimson/5 text-crimson" : "border-charcoal/15 text-charcoal-soft/80 hover:border-crimson/30"
              )}
            >
              <span className={cn("flex h-4 w-4 shrink-0 items-center justify-center rounded-full border", checked ? "border-crimson bg-crimson" : "border-charcoal/25")}>
                {checked && <span className="h-1.5 w-1.5 rounded-full bg-ivory" />}
              </span>
              {option}
            </button>
          );
        })}
      </div>
      {question.key === "city" && value === "Other" && (
        <input
          className={inputClass}
          value={data.cityOther}
          onChange={(e) => update("cityOther", e.target.value)}
          placeholder="Your city"
        />
      )}
    </div>
  );
}
