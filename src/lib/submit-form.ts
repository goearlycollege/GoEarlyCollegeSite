import { supabase } from "@/lib/supabase";

export type LeadFormType = "contact" | "school-partner" | "newsletter";

/** Contact, school-partner, and newsletter forms: simple lead capture, kept generic. */
export async function submitLead(formType: LeadFormType, payload: Record<string, unknown>) {
  const { error } = await supabase.from("leads").insert({ form_type: formType, payload });
  return { error };
}

type ApplicationSubmission = {
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
  confirmAccurate: boolean;
  transcriptPath: string | null;
  idPath: string | null;
};

/** Application form: typed `applications` table. */
export async function submitApplication(data: ApplicationSubmission) {
  const { error } = await supabase.from("applications").insert({
    full_name: data.fullName,
    email: data.email,
    phone: data.phone,
    whatsapp: data.whatsapp,
    dob: data.dob || null,
    city: data.city,
    preferred_language: data.preferredLanguage,
    school_name: data.schoolName,
    grade: data.grade,
    board: data.board,
    stream: data.stream,
    most_recent_result: data.mostRecentResult,
    subject_areas: data.subjectAreas,
    target_university_type: data.targetUniversityType,
    application_timeline: data.applicationTimeline,
    previous_courses: data.previousCourses === "" ? null : data.previousCourses === "Yes",
    previous_courses_description: data.previousCoursesDescription,
    hopes_for_gec: data.hopesForGEC,
    transcript_path: data.transcriptPath,
    id_path: data.idPath,
    confirm_accurate: data.confirmAccurate,
  });
  return { error };
}

type AssessmentSubmission = {
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

/** Assessment form: typed `assessments` table. */
export async function submitAssessment(data: AssessmentSubmission) {
  const { error } = await supabase.from("assessments").insert({
    child_name: data.childName,
    parent_name: data.parentName,
    parent_email: data.parentEmail,
    whatsapp: data.whatsapp,
    grade: data.grade,
    board: data.board,
    city: data.city,
    city_other: data.cityOther,
    school_type: data.schoolType,
    strongest_subject: data.strongestSubject,
    academic_performance: data.academicPerformance,
    study_abroad_interest: data.studyAbroadInterest,
    career_interest: data.careerInterest,
    application_timeline: data.applicationTimeline,
    target_university_type: data.targetUniversityType,
    primary_goal: data.primaryGoal,
    family_us_history: data.familyUsHistory,
  });
  return { error };
}
