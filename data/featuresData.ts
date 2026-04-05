// data/featuresData.ts
export interface Feature {
  id: number;
  image: string;
  alt: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    id: 1,
    image: "/images/referencing1.jpg",
    alt: "Source Citation",
    title: "Source Citation",
    description:
      "MerryQuery generates responses with relevant course citations, allowing users to verify information and build trust.",
  },
  {
    id: 2,
    image: "/images/granularity.webp",
    alt: "GenAI Assistance Scale",
    title: "GenAI Assistance Scale",
    description:
      "Instructors can fine-tune how much help MerryQuery provides using a 5-level GenAI assistance scale — from Level 1 (concepts and pseudocode only) to Level 5 (full working solutions).",
  },
  {
    id: 3,
    image: "/images/guided.webp",
    alt: "Guided Learning Dialogue",
    title: "Guided Learning Dialogue",
    description:
      "MerryQuery uses level-aware scaffolding to guide students without giving away answers. Each GenAI level enforces specific behaviors.",
  },
  {
    id: 4,
    image: "/images/history.webp",
    alt: "Instructor Analytics Dashboard",
    title: "Instructor Analytics Dashboard",
    description:
      "Instructors get a comprehensive dashboard with student engagement metrics, struggle detection and keyword analysis, time-slot usage breakdowns, concept difficulty tracking, and topic performance visualization. They can also review individual student conversations, manage rosters, and configure TA access.",
  },
  {
    id: 5,
    image: "/images/logger.webp",
    alt: "Research-Driven Design",
    title: "Research-Driven Design",
    description:
      "MerryQuery includes a built-in experiment framework supporting A/B testing with lab-section-based condition assignment.",
  },
  {
    id: 6,
    image: "/images/multimodal.jpg",
    alt: "Multimodal Data Processing",
    title: "Multimodal Data Processing",
    description:
      "MerryQuery processes complex PDFs, using OCR and text mining to handle text, code, tables, and images.",
  },
  {
    id: 7,
    image: "/images/guided.webp",
    alt: "Study Planning",
    title: "Study Planning",
    description:
      "Students have workspaces with a Study Plan page for guided study coaching and a Practice page for generating exam-style questions with tips and suggestions on their prompts.",
  },
];
