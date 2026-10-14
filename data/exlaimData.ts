// data/exlaimData.ts
// Source: the ExLAIM program study, the five team project papers, and the teacher user guides (Summer 2026).

export const exlaimStats = [
  { value: "6", label: "active weeks" },
  { value: "9", label: "K–12 teachers" },
  { value: "7", label: "undergraduate developers" },
  { value: "5", label: "classroom tools" },
];

export const exlaimGrant =
  "This material is based upon work supported by the National Science Foundation under Grant No. DUE-2526340. Any opinions, findings, and conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Science Foundation.";

export interface Leader {
  name: string;
  role: string;
  affiliation: string;
  image: string;
  href: string;
}

// ExLAIM's PI and Co-PIs (NSF DUE-2526340), who also served as faculty mentors, and the graduate lead.
export const exlaimLeadership: Leader[] = [
  {
    name: "Dr. Tiffany Barnes",
    role: "PI · Faculty mentor",
    affiliation: "NC State University",
    image: "/images/tmbarnes.jpg",
    href: "https://eliza.csc.ncsu.edu/index.html",
  },
  {
    name: "Dr. Dongkuan (DK) Xu",
    role: "Co-PI · Faculty mentor",
    affiliation: "NC State University",
    image: "/images/DK.png",
    href: "https://i.dk-lab.xyz/",
  },
  {
    name: "Dr. Joey Huang",
    role: "Co-PI · Faculty mentor",
    affiliation: "NC State University",
    image: "/images/faculty/huang.webp",
    href: "/faculty-collaborators/dr-joey-huang",
  },
  {
    name: "Dr. Xiaoyi Tian",
    role: "Co-PI · Faculty mentor",
    affiliation: "Kennesaw State University",
    image: "/images/faculty/tian.webp",
    href: "https://facultyweb.kennesaw.edu/xtian5/",
  },
  {
    name: "Benyamin Tabarsi",
    role: "Graduate lead",
    affiliation: "NC State University",
    image: "/images/people/benyamin-portrait-2026.webp",
    href: "https://benyamintabarsi.com",
  },
];

export interface ExlaimPhoto {
  src: string;
  alt: string;
  caption: string;
  date: string;
  width: number;
  height: number;
}

// Photos from the Summer 2026 program, in program order.
export const exlaimPhotos: ExlaimPhoto[] = [
  {
    src: "/images/exlaim/photos/cohort.webp",
    alt: "About twenty ExLAIM participants posing on a curved staircase in a university building.",
    caption: "The ExLAIM 2026 cohort: K–12 teachers, undergraduate developers, and the program team.",
    date: "Jul 2026",
    width: 1800,
    height: 1350,
  },
  {
    src: "/images/exlaim/photos/dev-session.webp",
    alt: "A presenter in front of a slide titled Artificial Intelligence Fundamentals and Agents, with developers working on laptops.",
    caption: "A session on AI fundamentals and agents during the developer preparation weeks.",
    date: "Jun 2026",
    width: 1350,
    height: 1800,
  },
  {
    src: "/images/exlaim/photos/dev-workspace.webp",
    alt: "Developers working on laptops around a long glass table beside tall windows.",
    caption: "Developers at work on MerryQuery.",
    date: "Summer 2026",
    width: 1350,
    height: 1800,
  },
  {
    src: "/images/exlaim/photos/codesign-table.webp",
    alt: "A selfie of teachers and developers smiling around a conference table covered with laptops.",
    caption: "Teachers and developers working together during the co-design weeks.",
    date: "Summer 2026",
    width: 1350,
    height: 1800,
  },
  {
    src: "/images/exlaim/photos/summer-outing.webp",
    alt: "The ExLAIM group standing together on a grassy farm field on a cloudy day.",
    caption: "A summer outing with the ExLAIM team.",
    date: "Summer 2026",
    width: 1800,
    height: 1350,
  },
];

export interface Phase {
  weeks: string;
  title: string;
  who: string;
  points: string[];
}

export const exlaimPhases: Phase[] = [
  {
    weeks: "Weeks 1–2",
    title: "Developer preparation",
    who: "Developers",
    points: [
      "Set up MerryQuery, practiced GitHub collaboration, and learned the Python, Flask, and PostgreSQL stack.",
      "Sessions on GenAI foundations, prompt engineering, agents, and retrieval-augmented generation.",
      "Generated platform ideas on sticky notes, voted on priorities, and shipped fixes and guided changes.",
    ],
  },
  {
    weeks: "Week 3",
    title: "Orient and frame",
    who: "Teachers join",
    points: [
      "Teacher-oriented introductions to GenAI, prompt engineering, and MerryQuery.",
      "Facilitated discussions on where AI is useful, or inappropriate, in classrooms and workplaces.",
      "Teams formed, ran design-thinking activities, and wrote classroom problem statements.",
    ],
  },
  {
    weeks: "Week 4",
    title: "Propose and build",
    who: "Teams",
    points: [
      "Two-sided feature proposals: teachers framed the classroom focus, developers the technical plan.",
      "First working versions inside MerryQuery, reviewed by teachers.",
      "Weekly meetings with an industry mentor chosen by each team.",
    ],
  },
  {
    weeks: "Week 5",
    title: "Test and revise",
    who: "Teams",
    points: [
      "Teachers tested running software; developers revised in response.",
      "Progress presentations and peer review across the cohort.",
      "Cross-team testing rotation with a shared worksheet.",
    ],
  },
  {
    weeks: "Week 6",
    title: "Integrate and share",
    who: "Everyone",
    points: [
      "Integration, project papers, and teacher-facing user guides.",
      "Each teacher wrote a School AI Plan for their own setting.",
      "Final team demos, and a poster from every developer at a university-wide research symposium.",
    ],
  },
];

export const exlaimPractices = [
  {
    title: "Stable teams",
    text: "Each team paired one developer with one or two teachers for the full four weeks.",
  },
  {
    title: "Two-reviewer code review",
    text: "Every change was reviewed by two other developers, usually including a development lead, before merging.",
  },
  {
    title: "Daily reflection",
    text: "Each day closed with a half-hour reflection on progress and plans.",
  },
  {
    title: "Industry mentors",
    text: "Guest speakers on AI development, plus a weekly mentor each team chose for relevant expertise.",
  },
  {
    title: "Cross-team testing",
    text: "In the final two weeks, members of other teams tested every tool and reported feedback.",
  },
  {
    title: "AI in the News",
    text: "Teachers led a weekly session on new developments in educational AI.",
  },
];

export interface ExlaimTool {
  id: string;
  team: number;
  name: string;
  shortName: string;
  concern: string;
  built: string;
  nextSteps: string[];
  image: { src: string; alt: string; width: number; height: number };
}

export const exlaimTools: ExlaimTool[] = [
  {
    id: "team-mode",
    team: 1,
    name: "Team Mode",
    shortName: "Team Mode",
    concern:
      "Students get stuck during independent work but hesitate to ask for help, and working alone with AI leaves fewer chances to learn from classmates.",
    built:
      "Students send a teacher or peer a short, editable summary of where they are stuck, never their whole private AI conversation. Teachers manage pending, ongoing, and resolved requests, organize groups, join peer rooms, and decide how much an AI facilitator can help.",
    nextSteps: [
      "Pilot it in a classroom, measuring time to get help, request completion, usability, and teacher workload.",
      "Replace frequent polling with secure real-time updates, tested with many students at once.",
      "Use pilot results to tune when help invitations appear, how requests are prioritized, and how much the AI facilitator joins in.",
    ],
    image: {
      src: "/images/exlaim/team-mode.webp",
      alt: "Team Mode teacher workspace with columns for pending, ongoing, and resolved student support requests.",
      width: 1152,
      height: 908,
    },
  },
  {
    id: "collaborative-boards",
    team: 2,
    name: "Course-grounded preparation & Collaborative Boards",
    shortName: "Collaborative Boards",
    concern:
      "Teachers wanted to prepare from their own course materials and run shared classroom activities without sending students to separate apps and accounts.",
    built:
      "Flashcards and cited lesson plans generated from selected course files, plus Collaborative Boards: a teacher creates a Miro activity in MerryQuery, shares a short code, and students join without a Miro account. A board-aware AI Coach reads the visible board, instructions, and recent conversation.",
    nextSteps: [
      "Run a structured teacher and student study with task timing, errors, and post-use interviews.",
      "Improve source and page provenance in retrieval before adding more generated materials.",
      "Delete the matching Miro board automatically when a teacher removes a board in MerryQuery.",
      "Separate participation signals from grading evidence in board analytics.",
    ],
    image: {
      src: "/images/exlaim/collaborative-boards.webp",
      alt: "Student view of a Collaborative Board: an embedded Miro board beside board notes and an AI Coach panel.",
      width: 1600,
      height: 993,
    },
  },
  {
    id: "daily-activity",
    team: 3,
    name: "Daily Activity",
    shortName: "Daily Activity",
    concern:
      "One teacher needed daily class communication with an archive; another wanted customizable warm-ups and exit tickets.",
    built:
      "A course landing page for announcements, questions, and AI-generated warm-ups and exit tickets at a chosen Depth of Knowledge level, grounded in course files the teacher selects. Students see what is new; teachers see who has read or responded.",
    nextSteps: [
      "Add scheduled posting so teachers can queue activities ahead of time.",
      "Test generated warm-ups and exit tickets across more classes and subjects.",
    ],
    image: {
      src: "/images/exlaim/daily-activity.webp",
      alt: "Daily Activity teacher landing page with a weekly calendar, quick actions, and Depth of Knowledge activity options.",
      width: 1371,
      height: 856,
    },
  },
  {
    id: "feedback-generator",
    team: 4,
    name: "Course Materials, Feedback Generator & Teaching Guidance",
    shortName: "Feedback Generator",
    concern:
      "Teachers needed a simpler way to manage course files, and detailed individual feedback on projects took hours to write.",
    built:
      "A rebuilt Course Materials workspace with folders, search, drag-and-drop, file conversion, and Google Drive import; a Feedback Generator that drafts feedback from student work and a rubric; and Teaching Guidance that suggests how to explain any part of an AI answer a teacher highlights.",
    nextSteps: [
      "Run a broader usability study with real assignments, rubrics, and course materials.",
      "Show teachers which sources informed each feedback draft or teaching suggestion.",
      "Support reusable rubric templates and structured criteria, and study whether teachers edit, copy, or discard drafts.",
    ],
    image: {
      src: "/images/exlaim/feedback-generator.webp",
      alt: "Feedback Generator with student work and rubric inputs on the left and an editable feedback draft on the right.",
      width: 1600,
      height: 994,
    },
  },
  {
    id: "practice-sets",
    team: 5,
    name: "Practice Sets & Quizzes",
    shortName: "Practice Sets & Quizzes",
    concern:
      "Teachers wanted timely visibility into which practice topics students struggle with, without grading and tallying paper exercises by hand.",
    built:
      "Practice questions generated from the teacher's own documents, completed online, and rolled into live topic-level analytics. A late request extended the work to Quizzes: generation, configuration, live monitoring, grading, and the ability to lock a student out of an attempt.",
    nextSteps: [
      "Show teachers in the app how much confidence a clean proctoring report deserves.",
      "Map topic mastery to formal curriculum standards so analytics roll up into the reports administrators ask for.",
      "Check the Canvas (QTI) and Blooket exports against real imports on a regular schedule, and add math rendering to QTI export.",
    ],
    image: {
      src: "/images/exlaim/practice-sets.webp",
      alt: "Practice Sets teacher interface for generating a question set from selected practice documents.",
      width: 1600,
      height: 993,
    },
  },
];
