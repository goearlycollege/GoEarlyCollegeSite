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
    date: "Jun 2026",
    featured: true,
  },
  {
    slug: "building-a-profile-before-12th",
    title: "Building a College Profile Before Class 12",
    excerpt: "Why the strongest applications are built years, not weeks, before the deadline.",
    category: "Blog",
    image: IMAGES.studentsCodingTogether,
    readTime: "6 min read",
    date: "May 2026",
  },
  {
    slug: "webinar-early-college-101",
    title: "Webinar: Early College Access 101",
    excerpt: "A live recorded session on how the program works, with a full admissions Q&A.",
    category: "Webinar",
    image: IMAGES.lectureHall,
    readTime: "45 min watch",
    date: "Apr 2026",
  },
  {
    slug: "supporting-your-child-through-applications",
    title: "Supporting Your Child Through University Applications",
    excerpt: "A parent's guide to staying involved without adding pressure to an already stressful process.",
    category: "Parent Resource",
    image: IMAGES.parentAndChildReading,
    readTime: "7 min read",
    date: "Apr 2026",
  },
  {
    slug: "choosing-the-right-first-courses",
    title: "Choosing the Right First Courses",
    excerpt: "How to sequence your first semester for maximum transfer value and manageable workload.",
    category: "Guide",
    image: IMAGES.handwrittenMath,
    readTime: "5 min read",
    date: "Mar 2026",
  },
  {
    slug: "webinar-financing-early-college",
    title: "Webinar: Financing Your Early College Journey",
    excerpt: "Tuition, scholarships, and financial planning — a session with our admissions and aid team.",
    category: "Webinar",
    image: IMAGES.lectureHallAlt,
    readTime: "38 min watch",
    date: "Mar 2026",
  },
  {
    slug: "how-mentorship-changes-outcomes",
    title: "How 1:1 Mentorship Changes Outcomes",
    excerpt: "The research and reasoning behind our mentorship model, and how families can reinforce it at home.",
    category: "Parent Resource",
    image: IMAGES.mentorMeeting,
    readTime: "8 min read",
    date: "Feb 2026",
  },
  {
    slug: "life-of-a-go-early-student",
    title: "A Week in the Life of a Go Early Student",
    excerpt: "How current students balance school, coursework, and everything in between.",
    category: "Blog",
    image: IMAGES.studentsGroupLaptop,
    readTime: "4 min read",
    date: "Feb 2026",
  },
  {
    slug: "writing-a-standout-application",
    title: "Writing a Standout Application Statement",
    excerpt: "What our admissions team actually looks for — and the most common mistakes to avoid.",
    category: "Guide",
    image: IMAGES.studentsCollaborating,
    readTime: "6 min read",
    date: "Jan 2026",
  },
];

export const CATEGORIES: Array<Resource["category"] | "All"> = [
  "All",
  "Guide",
  "Blog",
  "Webinar",
  "Parent Resource",
];
