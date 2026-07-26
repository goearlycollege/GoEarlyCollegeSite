export const FAQ_CATEGORIES = [
  "About the Program",
  "Accreditation",
  "Time Commitment",
  "Credits & Transfer",
  "Pricing & Scholarships",
  "Counselling",
  "Psychometric Assessment",
  "University Applications",
  "For School Partners",
] as const;

export type FaqCategory = (typeof FAQ_CATEGORIES)[number];

export type FaqItem = {
  category: FaqCategory;
  question: string;
  answer: string;
};

export const FAQS: FaqItem[] = [
  // Category 1 — About the Program
  {
    category: "About the Program",
    question: "What exactly is Go Early College?",
    answer:
      "India's first early college access program — giving any student in Grade 8 through Grade 12, on any Indian school board, access to a US-accredited transcript and credit-bearing courses from 350+ American university partners. Students stay in their current school. The program adds a credential and credit-building layer on top of the education already underway — it does not replace any part of it.",
  },
  {
    category: "About the Program",
    question: "Is Go Early College a school?",
    answer:
      "No. Go Early College is an early college access program — not a school. Your child remains enrolled in their current school throughout. The AWS Dual Diploma appears alongside your child's existing school record — not instead of it.",
  },
  {
    category: "About the Program",
    question: "How is Go Early College different from every other program targeting US university applications?",
    answer:
      "In one critical way: the transcript. Every other program in India trains for exams or coaches for interviews. Go Early College is the only program that issues a real, WASC-accredited US High School transcript to a mainstream Indian school student. Without that transcript, none of the 350+ university partnerships, credit transfers, or degree milestones are possible.",
  },
  {
    category: "About the Program",
    question: "What is the AWS Dual Diploma?",
    answer:
      "An American High School Diploma issued by American World School — WASC-accredited and UGC-equivalent. When your child enrols in Go Early College, they are simultaneously enrolled as a student of American World School. This gives them a legitimate US student record — the foundation that all credit-bearing coursework and university recognition is built on.",
  },
  {
    category: "About the Program",
    question: "Which boards are eligible?",
    answer:
      "All of them. CBSE, ICSE, State Board, IB, IGCSE, and any other school curriculum. The Go Early College program sits alongside whatever curriculum your child is already following.",
  },
  // Category 2 — Accreditation
  {
    category: "Accreditation",
    question: "Is Go Early College accredited?",
    answer:
      "Yes. American World School holds direct WASC accreditation — the Western Association of Schools and Colleges. WASC is one of six regional accrediting bodies in the United States and the standard American universities use to evaluate transfer credit. Our accreditation certificates are available for download on the About page.",
  },
  {
    category: "Accreditation",
    question: "Is the diploma recognised in India?",
    answer:
      "Yes. The AWS diploma carries UGC equivalence — formally recognised by India's University Grants Commission as equivalent to an Indian Higher Secondary Certificate.",
  },
  {
    category: "Accreditation",
    question: "How do I verify that Go Early College is legitimate?",
    answer:
      "Three ways. Download our WASC accreditation certificate from the About page. Verify American World School's accreditation directly at wascsr.org. Speak to enrolled families or partner school principals — we will connect you directly.",
  },
  {
    category: "Accreditation",
    question: "How is this different from a MOOC or online certificate?",
    answer:
      "A MOOC is a completion record — not graded by accredited faculty, not on an official US transcript, not transferable to university credit. A Go Early College credit is graded by US faculty, on a WASC-accredited transcript, and transferable to degree programs across the United States.",
  },
  // Category 3 — Time Commitment
  {
    category: "Time Commitment",
    question: "Does my child have to leave their current school?",
    answer: "No. Not for a single day. Same school. Same board. Same teachers. Same exams. Nothing changes. Go Early College is a credential layer — not a school transfer.",
  },
  {
    category: "Time Commitment",
    question: "How much time does the program add?",
    answer: "3 to 5 hours per week per course. Online. Self-paced. Completable on evenings, weekends, and school holidays. No commute. No in-person class.",
  },
  {
    category: "Time Commitment",
    question: "Will this affect my child's school performance?",
    answer: "Our counsellors monitor workload proactively. If they see academic stress, they adjust the course load before it becomes a problem.",
  },
  {
    category: "Time Commitment",
    question: "Can my child take Go Early College during board exam years?",
    answer:
      "Yes — with care. Counsellors recommend lighter loads during Grade 10 and Grade 12 board periods and build the schedule around the school academic calendar.",
  },
  // Category 4 — Credits & Transfer
  {
    category: "Credits & Transfer",
    question: "How many credits does each course earn?",
    answer: "3 to 4 real, transferable US college credits per completed course — depending on the course. Every credit is documented on the official WASC-accredited US transcript.",
  },
  {
    category: "Credits & Transfer",
    question: "Do credits stack toward a degree?",
    answer: "Yes. Credits are stackable, transferable, and permanent — they never expire. 60 credits = Associate Degree. 120 credits = Bachelor's Degree.",
  },
  {
    category: "Credits & Transfer",
    question: "Will every US university accept these credits?",
    answer:
      "Transfer policy is set by each university individually. Because our credits are regionally accredited, they are broadly accepted. Our admissions team confirms transfer policy for every university on your child's target list before any course is recommended.",
  },
  {
    category: "Credits & Transfer",
    question: "How is this different from AP courses?",
    answer: "AP courses demonstrate readiness. Go Early College coursework is actual, completed, transferable credit. An AP score says 'could probably do college work.' A GEC transcript says 'has already done it.'",
  },
  {
    category: "Credits & Transfer",
    question: "What happens if my child does not go to a US university?",
    answer: "Credits remain permanent. The transcript also holds UGC equivalence — a legitimate credential in both educational systems.",
  },
  // Category 5 — Pricing & Scholarships
  {
    category: "Pricing & Scholarships",
    question: "How much does Go Early College cost?",
    answer:
      "Program fees are shared in full during the free admissions consultation. The program pays for itself at 6 credits earned — 6 US credit hours at an American university cost more than most GEC annual fees.",
  },
  {
    category: "Pricing & Scholarships",
    question: "Are there scholarships available?",
    answer: "Yes. Merit-based awards, need-based aid, early enrolment discounts, sibling discounts (10% for second child), and referral credits. All discussed during the admissions consultation.",
  },
  {
    category: "Pricing & Scholarships",
    question: "Can we pay in instalments?",
    answer: "Yes. Monthly and quarterly payment plans available. Our admissions team will find a structure that fits.",
  },
  {
    category: "Pricing & Scholarships",
    question: "What does the fee include?",
    answer:
      "AWS Dual Diploma enrolment, transcript issuance, credit-bearing courses, dedicated counsellor, monthly counsellor sessions, psychometric assessment, university application support, parent dashboard, and course completion certificates from US university partners.",
  },
  // Category 6 — Counselling
  {
    category: "Counselling",
    question: "What does a counsellor actually do?",
    answer:
      "Everything. Completes psychometric assessment with your child. Builds personalised course sequence. Meets monthly. Monitors progress. Develops university application strategy. Guides personal statement. Provides parent progress updates.",
  },
  {
    category: "Counselling",
    question: "How often does the counsellor meet?",
    answer: "Monthly minimum. More frequently during course selection periods and university application preparation.",
  },
  {
    category: "Counselling",
    question: "What languages do counsellors speak?",
    answer: "Tamil, Telugu, Hindi, Kannada, and English. Preferred language confirmed at enrolment and respected throughout.",
  },
  {
    category: "Counselling",
    question: "What if my child's counsellor is not the right fit?",
    answer: "Tell us. We will reassign without question.",
  },
];
