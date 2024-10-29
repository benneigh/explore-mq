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
    alt: "Granularity Control",
    title: "Granularity Control",
    description:
      "Instructors can adjust the level of assistance based on the course needs. Practice mode offers hints, while review mode provides full solutions for in-depth understanding.",
  },
  {
    id: 3,
    image: "/images/guided.webp",
    alt: "Guided Learning Dialogue",
    title: "Guided Learning Dialogue",
    description:
      "Structured, step-by-step responses help students solve problems without undermining critical thinking.",
  },
  {
    id: 4,
    image: "/images/history.webp",
    alt: "Chat History Monitoring",
    title: "Chat History Monitoring",
    description:
      "Instructors can review student interactions through logged chat history, gaining real-time insights.",
  },
  {
    id: 5,
    image: "/images/logger.webp",
    alt: "Research-Driven Design",
    title: "Research-Driven Design",
    description:
      "MerryQuery collects student interaction logs, enabling researchers to analyze student behaviors.",
  },
  {
    id: 6,
    image: "/images/multimodal.jpg",
    alt: "Multimodal Data Processing",
    title: "Multimodal Data Processing",
    description:
      "MerryQuery processes complex PDFs, using OCR and text mining to handle text, code, tables, and images.",
  },
];
