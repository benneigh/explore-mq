// data/toolkitData.ts
// Mirrors the "Your course toolkit" page teachers see inside MerryQuery.
import type { IconType } from "react-icons";
import {
  LuMessagesSquare,
  LuBookOpen,
  LuLayers,
  LuListChecks,
  LuClipboardCheck,
  LuFileSignature,
  LuSun,
  LuPresentation,
  LuUsers,
} from "react-icons/lu";

export interface Tool {
  name: string;
  description: string;
  icon: IconType;
  /** Tailwind classes for the card surface; listed in full so Tailwind can see them. */
  tone: string;
  /** Anchor on /exlaim when the tool was built or reworked during ExLAIM 2026. */
  exlaimAnchor?: string;
}

export interface ToolGroup {
  name: string;
  summary: string;
  tools: Tool[];
}

export const toolkit: ToolGroup[] = [
  {
    name: "Planning",
    summary: "Prepare lessons and teaching support.",
    tools: [
      {
        name: "Instructor Chat",
        description:
          "Plan lessons, prepare materials, and ask course-specific teaching questions. Highlight any AI answer for Teaching Guidance on how to explain it.",
        icon: LuMessagesSquare,
        tone: "from-[#5b2a6e] to-[#7a3b8f]",
        exlaimAnchor: "feedback-generator",
      },
      {
        name: "Lesson Planner",
        description:
          "Design classroom-ready lesson sequences aligned to your course goals, with citations to your materials.",
        icon: LuBookOpen,
        tone: "from-[#1d4ea8] to-[#2f6bd1]",
        exlaimAnchor: "collaborative-boards",
      },
    ],
  },
  {
    name: "Material creation",
    summary: "Build course-ready learning materials.",
    tools: [
      {
        name: "Flashcard Generator",
        description:
          "Create concise study sets from selected course files and key concepts, then export them.",
        icon: LuLayers,
        tone: "from-[#9a5b06] to-[#c27c0e]",
        exlaimAnchor: "collaborative-boards",
      },
      {
        name: "Practice Sets",
        description:
          "Generate, publish, and manage practice questions, with live topic-level analytics.",
        icon: LuListChecks,
        tone: "from-[#0b5e55] to-[#0f7a6d]",
        exlaimAnchor: "practice-sets",
      },
      {
        name: "Quiz Generation",
        description:
          "Generate a quiz from selected documents, then preview, edit, publish, and monitor attempts.",
        icon: LuClipboardCheck,
        tone: "from-[#3b4250] to-[#545c6b]",
        exlaimAnchor: "practice-sets",
      },
    ],
  },
  {
    name: "Grading & feedback",
    summary: "Review learning evidence and respond to student work.",
    tools: [
      {
        name: "Feedback Generator",
        description:
          "Turn uploaded student work and rubric criteria into an editable written feedback draft.",
        icon: LuFileSignature,
        tone: "from-[#14532d] to-[#1d6b3c]",
        exlaimAnchor: "feedback-generator",
      },
    ],
  },
  {
    name: "Classroom activity",
    summary: "Share daily updates and coordinate live support.",
    tools: [
      {
        name: "Daily Activity",
        description:
          "Post updates, questions, warm-ups, and exit tickets, and see who has read or responded.",
        icon: LuSun,
        tone: "from-[#a2400c] to-[#c9560f]",
        exlaimAnchor: "daily-activity",
      },
      {
        name: "Collaborative Board",
        description:
          "Run shared Miro boards from inside your course, with a board-aware AI Coach.",
        icon: LuPresentation,
        tone: "from-[#9b2c2c] to-[#bf4040]",
        exlaimAnchor: "collaborative-boards",
      },
      {
        name: "Team Mode",
        description:
          "Bring teachers and classmates into the learning process when human support matters most.",
        icon: LuUsers,
        tone: "from-[#4d1233] to-[#72204a]",
        exlaimAnchor: "team-mode",
      },
    ],
  },
];
