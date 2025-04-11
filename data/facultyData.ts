// data/facultyData.ts

export interface FacultyMember {
  id: number;
  name: string;
  title: string;
  department: string;
  description: string;
  university: string;
  collaboration: string;
  image: string;
  slug: string; // Unique slug for routing
}

export const facultyData: FacultyMember[] = [
  {
    id: 1,
    name: "Dr. Lina Battestilli",
    title: "Full Professor",
    department: "Computer Science Department",
    university: "NC State University",
    description:
      "Lina Battestilli is a Teaching Full Professor at North Carolina State University, recognized for her contributions to Computer Science education and research in networking technologies. Battestilli holds a Ph.D. in Computer Science from NCSU and has a background as a network research engineer at IBM. Since 2012, her research has centered on innovative teaching methods for non-majors, promoting diversity in Computer Science, and exploring Cloud Networking and software-defined networking techniques.",
    collaboration:
      'We partnered with Dr. J to conduct a multi-phase study in her CSC 113 – Introduction to Computing (MATLAB) course. The collaboration began in Summer 2024, during the early development of MerryQuery. In Fall 2024, we carried out a small-scale usability testing, followed by class-wide experiment using MerryQuery across all nine lab sections with over 200 students. In Spring 2025, the tool was fully integrated into the course and used from start to finish. ',
    image: "/images/tbdimitr.jpg",
    slug: "dr-lina-battestilli",
  },
  {
    id: 2,
    image: "/images/huang.jpg",
    name: "Dr. Joey Huang",
    title: "Assistant Professor",
    department: "Learning Design and Technology",
    university: "NC State University",
    collaboration:
      "Dr. Huang integrated MerryQuery into her course, ECI 519-601, where students and a tech team collaborated to improve it and develop new features.",
    description:
      "Joey Huang is an Assistant Professor of Learning, Design, & Technology at NC State University, recognized for advancing computational thinking and educational technology. Huang’s research integrates crafts and computing to expand access to computer science and earned an ACM CHI Honorable Mention for AI-driven learning designs promoting equity in STEAM education.",
    slug: "dr-joey-huang",
  },
  {
    id: 3,
    image: "/images/shiyan.png",
    name: "Dr. Shiyan Jiang",
    title: "Assistant Professor",
    department: "Learning Design and Technology",
    university: "NC State University",
    collaboration:
      "Dr. Jiang introduced MerryQuery as a project in her course, allowing students to explore its features while collaborating with a tech team to enhance it and develop new functionalities.",
    description:
      "Dr. Jiang joined the Learning Design and Technology program in 2019, teaching graduate courses like Data Visualization and Machine Learning. Her research emphasizes integrating digital literacy in STEM education, particularly in K-12 AI education through narrative modeling. She also designs technology-enhanced learning environments to foster disciplinary identities and engage early adolescents in career exploration.",
    slug: "dr-shiyan-jiang",
  },
];
