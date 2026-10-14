// data/facultyData.ts
// Titles and bios follow each person's current faculty page (linked in `profileUrl`).

export interface Milestone {
  term?: string;
  text: string;
}

export interface FacultyMember {
  id: number;
  name: string;
  title: string;
  department: string;
  university: string;
  /** Where the collaboration took place, when the person has since moved. */
  formerly?: string;
  description: string;
  /** One-sentence summary of the collaboration, for cards. */
  summary: string;
  course?: string;
  period?: string;
  milestones: Milestone[];
  image: string;
  profileUrl?: string;
  slug: string; // Unique slug for routing
}

export const facultyData: FacultyMember[] = [
  {
    id: 1,
    name: "Dr. Lina Battestilli",
    title: "Full Teaching Professor",
    department: "Department of Computer Science",
    university: "NC State University",
    description:
      "Lina Battestilli is a Full Teaching Professor of Computer Science at NC State, where she has taught since 2012 after seven years in industry, including networking research at IBM. Her work focuses on computer science education, teaching computing to non-majors, broadening participation in the field, and cloud and software-defined networking. She teaches CSC 113, NC State's introductory MATLAB programming course.",
    summary:
      "A multi-phase classroom study in CSC 113, NC State's large introductory MATLAB course, from early usability tests to full-semester use.",
    course: "CSC 113 · Introduction to Computing (MATLAB)",
    period: "Summer 2024 – Spring 2026",
    milestones: [
      { term: "Summer 2024", text: "The collaboration begins during MerryQuery's early development." },
      {
        term: "Fall 2024",
        text: "A small-scale usability test, then a class-wide experiment across all nine lab sections with over 200 students.",
      },
      { term: "Spring 2025", text: "MerryQuery is integrated into the course from start to finish." },
      {
        term: "Fall 2025 – Spring 2026",
        text: "Ongoing refinements to the GenAI assistance levels and analytics, informed by classroom feedback.",
      },
    ],
    image: "/images/faculty/battestilli.webp",
    profileUrl: "https://battestilli.wordpress.ncsu.edu/",
    slug: "dr-lina-battestilli",
  },
  {
    id: 2,
    name: "Dr. Joey Huang",
    title: "Assistant Professor",
    department: "Learning, Design, and Technology",
    university: "NC State University",
    description:
      "Joey Huang is an Assistant Professor of Learning, Design, and Technology in NC State's Department of Teacher Education and Learning Sciences. Trained in educational psychology and computing, and formerly a postdoctoral researcher in Computer Science at UC Irvine, she studies computational thinking, AI-enabled educational technologies, and how learners co-design with AI in STEAM. Her work has received an ACM CHI Honorable Mention and an AERA Best Paper award.",
    summary:
      "Brought MerryQuery into her graduate course as a design project, and is a Co-PI and faculty mentor of the ExLAIM co-design program.",
    course: "ECI 519",
    period: "Fall 2024 · Summer 2026",
    milestones: [
      {
        term: "Fall 2024",
        text: "MerryQuery becomes a project in ECI 519-601, where students and a tech team improve it and build new features.",
      },
      {
        term: "Summer 2026",
        text: "Co-PI and faculty mentor of ExLAIM, with PI Tiffany Barnes and Co-PIs DK Xu and Xiaoyi Tian, and a co-author of the program study.",
      },
    ],
    image: "/images/faculty/huang.webp",
    profileUrl: "https://ced.ncsu.edu/people/chuang35/",
    slug: "dr-joey-huang",
  },
  {
    id: 3,
    name: "Dr. Shiyan Jiang",
    title: "Associate Professor",
    department: "Graduate School of Education",
    university: "University of Pennsylvania",
    formerly: "Learning Design and Technology, NC State University",
    description:
      "Shiyan Jiang is an Associate Professor at the University of Pennsylvania Graduate School of Education. A learning scientist, she works at the intersection of AI, education, and identity: how teachers across disciplines bring AI into their classrooms, and how to design AI tools that improve teaching and learning. Before Penn, she taught in NC State's Learning Design and Technology program from 2019, including graduate courses in data visualization and machine learning.",
    summary:
      "During her time at NC State, made MerryQuery a course project in which students explored the platform and helped extend it.",
    period: "During her time at NC State",
    milestones: [
      {
        text: "During her time at NC State, Dr. Jiang introduced MerryQuery as a project in her course, where students explored its features and worked with a tech team to improve it and build new functionality.",
      },
    ],
    image: "/images/faculty/jiang.webp",
    profileUrl: "https://www.gse.upenn.edu/faculty/shiyan-jiang",
    slug: "dr-shiyan-jiang",
  },
];
