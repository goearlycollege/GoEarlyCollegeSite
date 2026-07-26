import { IMAGES } from "@/lib/images";

export type Story = {
  name: string;
  cohort: string;
  outcome: string;
  quote: string;
  whatMadeTheDifference: string;
  stat: { value: string; label: string };
  image: string;
};

export const STORIES: Story[] = [
  {
    name: "Ananya R.",
    cohort: "Class of 2025",
    outcome: "Top-30 US research university",
    quote: "My application felt like it belonged next to students who had had every advantage.",
    whatMadeTheDifference:
      "Counsellor built a course sequence in Grade 10 giving her a US GPA, three completed courses, and a personal statement built around real academic work.",
    stat: { value: "12", label: "Credits Earned" },
    image: IMAGES.portraitAnanya,
  },
  {
    name: "Kabir S.",
    cohort: "Class of 2024",
    outcome: "Top-50 liberal arts college with merit aid",
    quote: "The mentorship made the difference. My counsellor knew my academic profile better than I did.",
    whatMadeTheDifference:
      "Counsellor identified a liberal arts pathway from the psychometric assessment and sequenced Writing, Psychology, and Global History for an exact institutional match.",
    stat: { value: "3.9", label: "College GPA" },
    image: IMAGES.portraitKabir,
  },
  {
    name: "Zara K.",
    cohort: "Class of 2025",
    outcome: "Double-majoring Economics and Data Science",
    quote: "My transcript proved readiness before I ever wrote an essay.",
    whatMadeTheDifference:
      "Psychometric revealed quantitative reasoning strength — Statistics, Microeconomics, and Data Reasoning sequenced to match her eventual double major.",
    stat: { value: "9", label: "Credits Earned" },
    image: IMAGES.portraitZara,
  },
  {
    name: "Devansh P.",
    cohort: "Class of 2023",
    outcome: "Mechanical Engineering at a public flagship",
    quote: "I arrived on campus already knowing how to manage a college workload.",
    whatMadeTheDifference:
      "Started in Grade 9 — earliest in his cohort. 15 credits, a 3.7 GPA, and an application no one in his class could match.",
    stat: { value: "15", label: "Credits Earned" },
    image: IMAGES.portraitDevansh,
  },
  {
    name: "Meera D.",
    cohort: "Parent, Bengaluru",
    outcome: "Daughter now studying in the US",
    quote: "This was real academic rigour — not test prep. My daughter arrived already thinking like a student there.",
    whatMadeTheDifference:
      "A 2-year program starting Grade 11. Counsellor guided her daughter through course selection and the entire university application process.",
    stat: { value: "2-Year", label: "Program, from Grade 11" },
    image: IMAGES.portraitMeera,
  },
];
