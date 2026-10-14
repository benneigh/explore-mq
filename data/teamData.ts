// data/teamData.ts
export interface TeamMember {
    id: number;
    image: string;
    alt: string;
    name: string;
    role: string;
    description: string;
    website?: string;
  }

  export const teamMembers: TeamMember[] = [
    {
      id: 3,
      image: "/images/people/benyamin-portrait-2026.webp",
      alt: "Benyamin Tabarsi",
      name: "Benyamin Tabarsi",
      role: "Research Lead",
      description:
        "Benyamin Tabarsi is a Ph.D. candidate in Computer Science at NC State, advised by Tiffany Barnes and DK Xu. His research focuses on human–AI co-intelligence. He aims to build AI that people can steer, so it helps them do more while they keep learning and growing their own skills. He designed and researched MerryQuery, and leads ExLAIM, an NSF-funded program where K–12 teachers and undergraduate developers design classroom AI tools together. In his work, he builds systems, studies them in real classrooms, and designs alongside the people who use them.",
      website: "https://benyamintabarsi.com",
    },
    {
      id: 1,
      image: "/images/tmbarnes.jpg",
      alt: "Dr. Tiffany Barnes",
      name: "Dr. Tiffany Barnes",
      role: "Principal Investigator",
      description:
        "Tiffany Barnes is a Distinguished Professor of Computer Science at NC State, where she leads the Game2Learn Lab. Her NSF CAREER Award recognized her work using data and educational data mining to add intelligence to STEM learning environments. Her current projects include data-driven tutoring in STEM, teaching AI to middle schoolers, and helping K–12 teachers bring AI and computational thinking into their courses. She is a founding co-director of the STARS Computing Corps and an ACM Distinguished Member.",
      website: "https://eliza.csc.ncsu.edu/index.html",
    },
    {
      id: 2,
      image: "/images/DK.png",
      alt: "Dr. Dongkuan (DK) Xu",
      name: "Dr. Dongkuan (DK) Xu",
      role: "Principal Investigator",
      description:
        "Dongkuan (DK) Xu is an Assistant Professor of Computer Science at NC State, where he leads the Generative Intelligent Computing (GIC) Lab. His research studies learning in open-ended environments: how AI systems decide what is worth exploring and how they should change as experience accumulates, with a focus on efficient learning, reliable AI, and continual model evolution. His honors include the AAAI 2025 Best Demonstration Award and AAAI New Faculty Highlights.",
      website: "https://i.dk-lab.xyz/",
    },
    {
      id: 4,
      image: "/images/faculty/huang.webp",
      alt: "Dr. Joey Huang",
      name: "Dr. Joey Huang",
      role: "Co-PI, ExLAIM",
      description:
        "Joey Huang is an Assistant Professor of Learning, Design, and Technology in NC State's Department of Teacher Education and Learning Sciences and a Co-PI and faculty mentor of ExLAIM. Trained in educational psychology and computing, she studies computational thinking, AI-enabled educational technologies, and how learners co-design with AI in STEAM. She also brought MerryQuery into her graduate course, ECI 519.",
      website: "https://ced.ncsu.edu/people/chuang35/",
    },
    {
      id: 5,
      image: "/images/faculty/tian.webp",
      alt: "Dr. Xiaoyi Tian",
      name: "Dr. Xiaoyi Tian",
      role: "Co-PI, ExLAIM",
      description:
        "Xiaoyi Tian is an Assistant Professor in the Department of Information Technology at Kennesaw State University and a Co-PI and faculty mentor of ExLAIM. Her research brings together human-computer interaction, AI, and the learning sciences to build human-centered AI that supports equitable teaching and learning, from learning companions and teacher-facing tools to AI literacy in K–12 education. She was previously a Research Scientist at NC State.",
      website: "https://facultyweb.kennesaw.edu/xtian5/",
    },
  ];
  
