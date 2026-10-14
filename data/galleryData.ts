// data/galleryData.ts
//
// To add photos:
//   1. Put the image in public/images/gallery/ (WebP or JPEG, ~1600px on the long side).
//   2. Add an entry below with its real pixel width and height.
//   3. Use an existing category or a new one; filter chips are built from the entries.
//
// Before publishing photos of students or teachers, confirm everyone shown agreed to it.

import { exlaimPhotos } from "./exlaimData";

export interface GalleryPhoto {
  src: string;
  alt: string;
  caption: string;
  date: string;
  category: string;
  width: number;
  height: number;
  credit?: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  ...exlaimPhotos.map((p) => ({ ...p, category: "ExLAIM 2026" })),
  {
    src: "/images/gallery/aaai-2025-demo.webp",
    alt: "Benyamin Tabarsi explains the MerryQuery poster and live demo to two visitors at AAAI 2025.",
    caption: "Presenting the MerryQuery demo at AAAI-2025, where it won Best Technical Demonstration.",
    date: "2025",
    category: "Events",
    width: 1500,
    height: 844,
    credit: "NC State Computer Science",
  },
  {
    src: "/images/platform/teacher-tools.webp",
    alt: "MerryQuery teacher workspace with the course toolkit and the course sidebar.",
    caption: "The teacher course workspace and its toolkit.",
    date: "2026",
    category: "Platform",
    width: 1600,
    height: 1000,
  },
  {
    src: "/images/platform/student-chat-full.webp",
    alt: "MerryQuery student chat with cited, step-by-step answers tagged with their GenAI assistance level.",
    caption: "The student chat: cited, step-by-step answers with the assistance level shown on each one.",
    date: "2026",
    category: "Platform",
    width: 1600,
    height: 1467,
  },
  {
    src: "/images/platform/course-analytics.webp",
    alt: "MerryQuery course analytics page.",
    caption: "Course analytics: assessment performance, daily engagement, collaborative learning, and support.",
    date: "2026",
    category: "Platform",
    width: 1600,
    height: 1000,
  },
  {
    src: "/images/platform/student-tools.webp",
    alt: "MerryQuery student tools page.",
    caption: "Student tools: Notes, Flashcards, Practice Sets, and Study Coach.",
    date: "2026",
    category: "Platform",
    width: 1600,
    height: 1000,
  },
  {
    src: "/images/platform/student-chat.webp",
    alt: "MerryQuery student chat with a step-by-step explanation of a MATLAB for loop that cites a course document.",
    caption: "An earlier version of the student chat: step-by-step, with a citation to the course material it came from.",
    date: "Spring 2025",
    category: "Platform",
    width: 681,
    height: 496,
  },
  {
    src: "/images/exlaim/team-mode.webp",
    alt: "Team Mode teacher workspace.",
    caption: "Team Mode, built by ExLAIM Team 1.",
    date: "Jul 2026",
    category: "ExLAIM tools",
    width: 1152,
    height: 908,
  },
  {
    src: "/images/exlaim/collaborative-boards.webp",
    alt: "Student view of a Collaborative Board with an AI Coach panel.",
    caption: "Collaborative Boards, built by ExLAIM Team 2.",
    date: "Jul 2026",
    category: "ExLAIM tools",
    width: 1600,
    height: 993,
  },
  {
    src: "/images/exlaim/daily-activity.webp",
    alt: "Daily Activity teacher landing page.",
    caption: "Daily Activity, built by ExLAIM Team 3.",
    date: "Jul 2026",
    category: "ExLAIM tools",
    width: 1371,
    height: 856,
  },
  {
    src: "/images/exlaim/feedback-generator.webp",
    alt: "Feedback Generator showing an editable feedback draft.",
    caption: "The Feedback Generator, built by ExLAIM Team 4.",
    date: "Jul 2026",
    category: "ExLAIM tools",
    width: 1600,
    height: 994,
  },
  {
    src: "/images/exlaim/practice-sets.webp",
    alt: "Practice Sets teacher interface.",
    caption: "Practice Sets, built by ExLAIM Team 5.",
    date: "Jul 2026",
    category: "ExLAIM tools",
    width: 1600,
    height: 993,
  },
];
