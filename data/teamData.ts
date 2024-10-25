// data/teamData.ts
export interface TeamMember {
    id: number;
    image: string;
    alt: string;
    name: string;
    role: string;
    description: string;
  }
  
  export const teamMembers: TeamMember[] = [
    {
      id: 1,
      image: "/images/tmbarnes.jpg",
      alt: "Dr. Tiffany Barnes",
      name: "Dr. Tiffany Barnes",
      role: "Principal Investigator",
      description:
        "Tiffany Barnes is a Distinguished Professor of Computer Science at NC State University, recognized for her contributions to AI in education and educational data mining. She has held various leadership roles in professional organizations and received an NSF CAREER Award for her innovative work in enhancing STEM learning environments.",
    },
    {
      id: 2,
      image: "/images/DK.png",
      alt: "Dr. Dongkuan (DK) Xu",
      name: "Dr. Dongkuan (DK) Xu",
      role: "Principal Investigator",
      description:
        "Dongkuan (DK) Xu is an Assistant Professor at NC State, leading research in Artificial General Intelligence and generative AI systems, with numerous awards and publications in top AI conferences. His mission is to democratize AI applications and enhance productivity through collaborative generative intelligent agents.",
    },
    {
      id: 3,
      image: "/images/benyamin.jpg",
      alt: "Benyamin Tabarsi",
      name: "Benyamin Tabarsi",
      role: "Research and Development Lead",
      description:
        "Benyamin Tabarsi is a PhD student in Computer Science at North Carolina State University, specializing in CS education and generative AI. Passionate about using AI for social impact, he has worked on projects such as MerryQuery, ChatLearn (an LLM-based medical chatbot), and workshops training teachers on AI integration.",
    },
  ];
  
