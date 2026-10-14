// data/featuresData.ts
import type { IconType } from "react-icons";
import {
  LuQuote,
  LuFileStack,
  LuLayoutPanelLeft,
  LuUsers,
  LuFlaskConical,
  LuSlidersHorizontal,
} from "react-icons/lu";

export interface Feature {
  id: number;
  icon: IconType;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    id: 1,
    icon: LuQuote,
    title: "Source citations",
    description:
      "Every grounded answer names the course document it drew from, so students can verify it and instructors can trust it.",
  },
  {
    id: 2,
    icon: LuFileStack,
    title: "Multimodal course materials",
    description:
      "Complex PDFs with code, tables, and images are processed with OCR and text mining, organized in folders, and indexed in the background.",
  },
  {
    id: 3,
    icon: LuSlidersHorizontal,
    title: "Tone and answer format",
    description:
      "Teachers can let students choose a friendly, formal, encouraging, or Socratic tone, and request formats such as lesson plans for their own prep.",
  },
  {
    id: 4,
    icon: LuUsers,
    title: "TAs and roles",
    description:
      "Invite TAs and graders with scoped, role-based permissions and a dedicated interface for their responsibilities.",
  },
  {
    id: 5,
    icon: LuLayoutPanelLeft,
    title: "Review Center",
    description:
      "Look back at student conversations when it helps, and see unclear or flagged questions gathered in one place for review.",
  },
  {
    id: 6,
    icon: LuFlaskConical,
    title: "Supports research",
    description:
      "An experiment framework supports A/B studies, assigning conditions by lab section.",
  },
];
