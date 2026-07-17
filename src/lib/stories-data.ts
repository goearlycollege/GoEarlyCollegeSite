import { IMAGES } from "@/lib/images";

export type Story = {
  name: string;
  cohort: string;
  outcome: string;
  quote: string;
  stat: { value: string; label: string };
  image: string;
};

export const STORIES: Story[] = [
  {
    name: "Ananya R.",
    cohort: "Class of 2025",
    outcome: "Now studying Computer Science at a top-30 US research university",
    quote:
      "I earned twelve transferable college credits before I'd even finished school. My application felt like it belonged next to students who'd had every advantage.",
    stat: { value: "12", label: "College Credits Earned" },
    image: IMAGES.portraitAnanya,
  },
  {
    name: "Kabir S.",
    cohort: "Class of 2024",
    outcome: "Admitted to a top-50 liberal arts college with merit aid",
    quote:
      "Go Early College didn't just prepare me for admissions — it changed how I think about learning. The mentorship made the difference.",
    stat: { value: "3.9", label: "College GPA Earned" },
    image: IMAGES.portraitKabir,
  },
  {
    name: "Zara K.",
    cohort: "Class of 2025",
    outcome: "Now double-majoring in Economics and Data Science",
    quote:
      "The hardest part of applying to US universities is proving you're ready. My transcript did that before I ever wrote an essay.",
    stat: { value: "9", label: "College Credits Earned" },
    image: IMAGES.portraitZara,
  },
  {
    name: "Devansh P.",
    cohort: "Class of 2023",
    outcome: "Studying Mechanical Engineering at a public flagship university",
    quote:
      "My mentor helped me choose courses that actually mattered for my major. I arrived on campus already knowing how to manage a college workload.",
    stat: { value: "15", label: "College Credits Earned" },
    image: IMAGES.portraitDevansh,
  },
  {
    name: "Meera D.",
    cohort: "Parent, Bengaluru",
    outcome: "Daughter now attending university in the United States",
    quote:
      "As a parent, what mattered most was that this was real academic rigor, not test prep. My daughter arrived at university already thinking like a student there.",
    stat: { value: "2 yrs", label: "Ahead in Academic Confidence" },
    image: IMAGES.portraitMeera,
  },
];
