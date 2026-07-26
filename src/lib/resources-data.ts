import { IMAGES } from "@/lib/images";

export type Resource = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Guide" | "Blog" | "Webinar" | "Parent Resource";
  image: string;
  readTime: string;
  date: string;
  featured?: boolean;
  /** Draft outline only — brief Section 5/17 specifies 1,200–2,500 words per
   * article but never supplies the copy itself. Structure is real; body text
   * is a placeholder pending final copy from Go Early College. */
  body: string[];
};

export const RESOURCES: Resource[] = [
  {
    slug: "us-transfer-credit-explained",
    title: "US Transfer Credit, Explained for Indian Families",
    excerpt:
      "What regional accreditation actually means, and how admissions officers evaluate transfer coursework on an application.",
    category: "Guide",
    image: IMAGES.libraryReadingRoom,
    readTime: "9 min read",
    date: "June 2026",
    featured: true,
    body: [
      "Every year, Indian families ask the same question: if my child studies at a US university one day, does anything they do now actually count toward it? For most students, the honest answer has been no. Regional accreditation is the missing piece — it's the standard American universities use to decide whether coursework completed elsewhere transfers onto a degree.",
      "A WASC-accredited transcript changes that. Courses graded by US faculty, recorded on an official transcript, are evaluated by admissions committees the same way any other transfer credit would be — not as an extracurricular, but as completed academic history.",
      "This is what separates a real transfer pathway from a certificate of completion: whether the institution issuing it is accredited by a body American universities actually recognise, and whether the credit is documented in a form their registrar can process.",
    ],
  },
  {
    slug: "building-college-profile",
    title: "Building a College Profile Before Class 12",
    excerpt: "Why the strongest applications are built years, not weeks, before the deadline.",
    category: "Blog",
    image: IMAGES.studentsCodingTogether,
    readTime: "6 min read",
    date: "May 2026",
    body: [
      "The strongest university applications aren't written in Class 12 — they're built years earlier, through the academic choices a student makes along the way. Waiting until senior year to start thinking about a college profile usually means scrambling for activities that look good rather than developing ones that actually mean something.",
      "A profile built early has room to show growth: what a student was curious about in Grade 9, what they chose to go deeper on by Grade 11, and what that trajectory says about how they think. Admissions committees read for that pattern — not just a final-year highlight reel.",
      "Starting early also means a student can afford to take an academic risk, see it not work out, and adjust — the kind of iteration that's much harder to fit in during the application year itself.",
    ],
  },
  {
    slug: "early-college-101-webinar",
    title: "Webinar: Early College Access 101",
    excerpt: "A live recorded session on how the program works, with a full admissions Q&A.",
    category: "Webinar",
    image: IMAGES.lectureHall,
    readTime: "45 min read",
    date: "April 2026",
    body: [
      "This recorded session walks through how the Go Early College program actually works, end to end — eligibility, the psychometric assessment, course sequencing, and how credits accumulate toward an Associate or Bachelor's Degree.",
      "It closes with a full admissions Q&A covering the questions parents raise most often: time commitment, board-exam scheduling, transfer policy, and what changes (and what doesn't) about a child's current schooling.",
    ],
  },
  {
    slug: "supporting-your-child",
    title: "Supporting Your Child Through University Applications",
    excerpt: "A parent's guide to staying involved without adding pressure to an already stressful process.",
    category: "Parent Resource",
    image: IMAGES.parentAndChildReading,
    readTime: "7 min read",
    date: "April 2026",
    body: [
      "Parents often want to know how involved they should be once a child starts an early college pathway. Too little involvement and a student can drift; too much and the process starts to feel like it belongs to the parent rather than the student.",
      "The families who navigate this best tend to treat progress check-ins as conversations, not audits — asking what a student found difficult in a course rather than only what grade they got. Counsellor updates exist precisely so parents don't have to extract this information themselves.",
      "The goal is steady presence without added pressure: showing up for the moments that matter (course selection, application strategy) and stepping back for the day-to-day coursework a student is capable of managing alone.",
    ],
  },
  {
    slug: "choosing-first-courses",
    title: "Choosing the Right First Courses",
    excerpt: "How to sequence your first semester for maximum transfer value and manageable workload.",
    category: "Guide",
    image: IMAGES.handwrittenMath,
    readTime: "5 min read",
    date: "March 2026",
    body: [
      "The first course a student takes sets the tone for everything after it — which is why it's worth choosing deliberately rather than defaulting to whatever sounds most impressive.",
      "Foundations of Academic Writing is the most common recommendation for a first course, regardless of eventual major, because the seminar-style composition and argumentation skills it builds transfer directly into every other course that follows.",
      "Beyond that first course, sequencing depends on the psychometric assessment results and the pathway a student is leaning toward — a counsellor's job is matching course order to both readiness and eventual major, not just interest.",
    ],
  },
  {
    slug: "financing-webinar",
    title: "Webinar: Financing Your Early College",
    excerpt: "Tuition, scholarships, and financial planning — a session with our admissions and aid team.",
    category: "Webinar",
    image: IMAGES.lectureHallAlt,
    readTime: "38 min read",
    date: "March 2026",
    body: [
      "This session covers the financial side of early college access directly: how the three program tiers differ, what payment plans are available, and how scholarships and sibling or referral discounts are applied.",
      "It also walks through the ROI math families ask about most — how tuition saved through transferable credit compares against the annual program fee, and at what point the program pays for itself.",
    ],
  },
  {
    slug: "mentorship-outcomes",
    title: "How One-to-One Counselling Changes Outcomes",
    excerpt: "The research and reasoning behind our counselling model, and how families can reinforce it at home.",
    category: "Parent Resource",
    image: IMAGES.mentorMeeting,
    readTime: "8 min read",
    date: "Feb 2026",
    body: [
      "A dedicated counsellor is the part of the program families notice least in a brochure and value most in practice. The relationship starts with the psychometric assessment and continues monthly through course selection, workload monitoring, and eventually the university application itself.",
      "What changes outcomes isn't the meeting cadence on its own — it's that one person holds the whole picture of a student's academic profile over years, not a single semester, and can spot a pathway a student might not see for themselves.",
      "Families can reinforce this at home simply by treating the counsellor as a real point of contact — flagging when a course feels off-pace, rather than waiting for a scheduled check-in to raise it.",
    ],
  },
  {
    slug: "week-in-the-life",
    title: "A Week in the Life of a Go Early College Student",
    excerpt: "How current students balance school, coursework, and everything in between.",
    category: "Blog",
    image: IMAGES.studentsGroupLaptop,
    readTime: "4 min read",
    date: "Feb 2026",
    body: [
      "Most weeks look ordinary from the outside: school runs exactly as it always has, Monday through Friday. The early college coursework happens on the edges — a Saturday morning, a Sunday afternoon, sometimes a school holiday, in blocks of an hour or two rather than one long sitting.",
      "Students describe the adjustment period as shorter than expected — most settle into a rhythm within two weeks, once they find the specific hours in their week that are actually free rather than trying to force the work into an already full day.",
      "The self-paced structure means a heavier school week can be absorbed by shifting coursework to the weekend, rather than the two competing for the same hours.",
    ],
  },
  {
    slug: "application-statement",
    title: "Writing a Standout Application Statement",
    excerpt: "What our admissions team actually looks for — and the most common mistakes to avoid.",
    category: "Guide",
    image: IMAGES.studentsCollaborating,
    readTime: "6 min read",
    date: "Jan 2026",
    body: [
      "The strongest application statements read as specific rather than impressive — a real account of a particular problem a student worked through, not a summary of achievements already listed elsewhere on the application.",
      "Our admissions team consistently sees the same avoidable mistakes: restating the resume in paragraph form, reaching for a dramatic narrative that isn't actually true to the student, and closing with a generic statement about 'passion' that could belong to anyone.",
      "What works instead is narrower and more concrete: one course, one problem set, one moment of genuinely changing your mind about something — told in the student's own voice, not the voice they think admissions wants to hear.",
    ],
  },
  {
    slug: "psychometric-assessment",
    title: "The Psychometric Assessment — What It Is and Why It Matters",
    excerpt: "Inside the 45-minute assessment every student completes before choosing their first course.",
    category: "Guide",
    image: IMAGES.classroomModern,
    readTime: "10 min read",
    date: "Dec 2025",
    body: [
      "Before a student takes a single course, they complete a 45-minute psychometric assessment covering four areas: cognitive strengths, learning style, subject aptitude, and career interest clusters.",
      "The point isn't to label a student — it's to replace guesswork with evidence before committing to a course sequence. Most students choose a degree pathway based on what sounds impressive; the assessment gives a counsellor something more reliable to plan around.",
      "Results feed directly into course sequencing: a student with strong quantitative reasoning and an early interest in economics gets a different first-year sequence than one whose strengths point toward the humanities, even if both started out saying they were 'not sure.'",
    ],
  },
];

export const CATEGORIES: Array<Resource["category"] | "All"> = [
  "All",
  "Guide",
  "Blog",
  "Webinar",
  "Parent Resource",
];
