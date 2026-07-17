/**
 * Curated placeholder photography (Unsplash) matching the brand's documentary,
 * warm-light academic style: architecture, libraries, students, and portraits.
 * Every image below has been visually verified for content accuracy.
 * Swap these for licensed / original Go Early College photography when available.
 */
function u(id: string, w = 1600, q = 80) {
  return `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}&auto=format&fit=crop`;
}

export const IMAGES = {
  // Architecture & campus
  heroCampusArch: u("1568792923760-d70635a89fdc", 2200), // ivy-covered gothic academic building
  heroCampusGreen: u("1607237138185-eedd9c632b0b", 2200), // brick campus building, green lawn
  archSpiralStaircase: u("1496307653780-42ee777d4833", 1800), // dramatic spiral staircase, modern academic building
  libraryDramatic: u("1507842217343-583bb7270b66", 1600), // tall curved rows of library bookshelves
  libraryReadingRoom: u("1524995997946-a1c2e315a42f", 1800), // curved library bookshelf architecture
  heroLibrary: u("1541746972996-4e0b0f43e02a", 2200), // modern glass-walled study room
  classroomScene: u("1509062522246-3755977927d7", 1600), // classroom, teacher and students at desks
  lectureHall: u("1519452575417-564c1401ecc0", 1800), // empty tiered lecture hall / auditorium
  lectureHallAlt: u("1541829070764-84a7d30dd3f3", 1600), // empty tiered lecture hall, different angle
  graduatesGroup: u("1541339907198-e08756dedf3f", 1800), // graduates throwing caps at sunset
  classroomModern: u("1580582932707-520aed937b7b", 1600), // empty modern classroom with screen

  // Students, environments & scenes
  studentsGroupTalking: u("1522202176988-66273c2fd55f", 1800), // small group at table, laptops, talking
  studentsStudyingTogether: u("1543269865-cbf427effbad", 1800), // group of four studying together
  studentsGroupLaptop: u("1531545514256-b1400bc00f31", 1800), // diverse group of four around a laptop, smiling
  studentsCodingTogether: u("1531482615713-2afd69097998", 1800), // two students collaborating at a computer
  studentsCollaborating: u("1554415707-6e8cfc93fe23", 1800), // overhead flatlay: laptop, notebook, coffee
  parentAndChildReading: u("1583468982228-19f19164aee2", 1600), // parent and child reading together
  mentorMeeting: u("1573165231977-3f0e27806045", 1800), // small group meeting around a table
  handwrittenMath: u("1509228468518-180dd4864904", 1400), // handwritten mathematics on paper
  writingCloseup: u("1571260899304-425eee4c7efc", 1400), // students walking a hallway with books

  // Named portraits — each key maps to one specific person, reused consistently
  // wherever that person appears across the site.
  portraitAnanya: u("1517841905240-472988babdf9", 1200), // young woman, denim jacket, casual smile
  portraitKabir: u("1507003211169-0a1dd7228f2d", 1200), // young man, casual, warm smile
  portraitZara: u("1531123897727-8f129e1688ce", 1200), // young woman, natural portrait
  portraitDevansh: u("1535713875002-d1d0cf377fde", 1200), // young man, neutral portrait
  portraitMeera: u("1508214751196-bcfd4ca60f91", 1200), // parent, warm outdoor portrait
  portraitFounder: u("1500648767791-00dcc994a43e", 1200), // founder, smart-casual, warm smile
  portraitAcademicsHead: u("1573497019940-1c28c88b4f3e", 1200), // head of academics, professional
  portraitAdmissionsHead: u("1557862921-37829c790f19", 1200), // director of admissions, confident
} as const;

export type ImageKey = keyof typeof IMAGES;
