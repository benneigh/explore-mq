// data/facultyData.ts

export interface FacultyMember {
  id: number;
  name: string;
  title: string;
  description: string;
  collaboration: string;
  image: string;
}

export const facultyData: FacultyMember[] = [
  {
    id: 1,
    name: "Dr. Lina Battestilli",
    title: "Full Professor in Computer Science Department",
    description:
      "Lina Battestilli is a Teaching Full Professor at North Carolina State University, recognized for her contributions to Computer Science education and research in networking technologies. Battestilli holds a Ph.D. in Computer Science from NCSU and has a background as a network research engineer at IBM. Since 2012, her research has centered on innovative teaching methods for non-majors, promoting diversity in Computer Science, and exploring Cloud Networking and software-defined networking techniques.",
    collaboration:
      'Dr. Battestilli helped us conduct a multi-phase study in her "CSC 113 - Introduction to Computing (MATLAB)" course, allowing us to test MerryQuery with over 200 students.',
    image: "/images/tbdimitr.jpg",
  },
  {
    id: 2,
    image: "/images/huang.jpg",
    name: "Dr. Joey Huang",
    title: "Assistant Professor in College of Education",
    collaboration:
      "Dr. Huang integrated MerryQuery into her course, ECI 519-601, where students and a tech team collaborated to improve the platform and develop new features.",
    description:
      "Joey Huang is an Assistant Professor of Learning, Design, & Technology at NC State University, recognized for advancing computational thinking and educational technology. Huang’s research integrates crafts and computing to expand access to computer science and earned an ACM CHI Honorable Mention for AI-driven learning designs promoting equity in STEAM education.",
  },
];
