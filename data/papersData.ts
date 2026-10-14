// data/papersData.ts
export type PaperStatus = "published" | "under-review" | "in-preparation";

export interface PaperLink {
  label: string;
  href: string;
}

export interface Paper {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  status: PaperStatus;
  badge?: string;
  note?: string;
  links: PaperLink[];
  bibtex?: string;
}

export const papers: Paper[] = [
  {
    id: "tabarsi2026codesigning",
    title:
      "Teachers and Developers Building Together: The ExLAIM Six-Week Co-Design Program for Developing AI-Supported Classroom Tools",
    authors:
      "Benyamin Tabarsi, Sam Gilson, Faaz Mohamed, Susanna Quayle, Nicole Ackerman-Lowery, Aditya Basarkar, Daniel Briceno, Matheus Marques, Lokesh Sharma, Xiaoyi Tian, Joey Huang, Dongkuan Xu, Tiffany Barnes",
    venue: "", // left blank on purpose: the paper is in double-blind review
    year: 2026,
    status: "under-review",
    note: "How nine K–12 teachers and five undergraduate developers carried classroom concerns into five working tools on MerryQuery.",
    links: [
      { label: "Preprint PDF", href: "/papers/Tabarsi_ExLAIM_Preprint.pdf" },
      { label: "About ExLAIM", href: "/exlaim" },
    ],
  },
  {
    id: "tabarsi2026merryquery",
    title:
      "MerryQuery in the Loop: How Students Use and Perceive a GenAI-Powered Assistant in an Introductory Programming Course",
    authors: "Benyamin Tabarsi",
    venue: "Proceedings of the 57th ACM Technical Symposium on Computer Science Education V. 2 (SIGCSE TS 2026), pp. 1685–1686",
    year: 2026,
    status: "published",
    badge: "SIGCSE 2026",
    note: "A semester-long study of how students used and perceived MerryQuery in a large introductory course.",
    links: [{ label: "ACM DL", href: "https://dl.acm.org/doi/10.1145/3770761.3777164" }],
    bibtex: `@inproceedings{tabarsi2026merryquery,
  title     = {MerryQuery in the Loop: How Students Use and Perceive a GenAI-Powered Assistant in an Introductory Programming Course},
  author    = {Tabarsi, Benyamin},
  booktitle = {Proceedings of the 57th ACM Technical Symposium on Computer Science Education V. 2},
  pages     = {1685--1686},
  year      = {2026},
  publisher = {ACM},
  doi       = {10.1145/3770761.3777164}
}`,
  },
  {
    id: "tabarsi2025merryquery",
    title:
      "MerryQuery: A Trustworthy LLM-Powered Tool Providing Personalized Support for Educators and Students",
    authors: "Benyamin Tabarsi, Aditya Basarkar, Xukun Liu, Dongkuan (DK) Xu, Tiffany Barnes",
    venue: "Proceedings of the AAAI Conference on Artificial Intelligence, 39(28), pp. 29700–29702",
    year: 2025,
    status: "published",
    badge: "Best Technical Demonstration Award",
    note: "The original MerryQuery system: course-grounded retrieval, cited answers, guided dialogue, and instructor-controlled response granularity.",
    links: [
      { label: "DOI", href: "https://doi.org/10.1609/aaai.v39i28.35372" },
      { label: "PDF", href: "https://benyamintabarsi.com/assets/pdf/AAAI%202025%20-%20MerryQuery.pdf" },
    ],
    bibtex: `@inproceedings{tabarsi2025merryquery,
  title     = {MerryQuery: A Trustworthy LLM-Powered Tool Providing Personalized Support for Educators and Students},
  author    = {Tabarsi, Benyamin and Basarkar, Aditya and Liu, Xukun and Xu, Dongkuan DK and Barnes, Tiffany},
  booktitle = {Proceedings of the AAAI Conference on Artificial Intelligence},
  volume    = {39},
  number    = {28},
  pages     = {29700--29702},
  month     = apr,
  year      = {2025},
  doi       = {10.1609/aaai.v39i28.35372}
}`,
  },
  {
    id: "tabarsi2025developing",
    title: "Developing LLM-Powered Trustworthy Agents for Personalized Learning Support",
    authors: "Benyamin Tabarsi",
    venue: "Proceedings of the AAAI Conference on Artificial Intelligence, 39(28), pp. 29301–29302",
    year: 2025,
    status: "published",
    badge: "AAAI-25 Doctoral Consortium",
    links: [{ label: "DOI", href: "https://doi.org/10.1609/aaai.v39i28.35228" }],
    bibtex: `@inproceedings{tabarsi2025developing,
  title     = {Developing LLM-Powered Trustworthy Agents for Personalized Learning Support},
  author    = {Tabarsi, Benyamin},
  booktitle = {Proceedings of the AAAI Conference on Artificial Intelligence},
  volume    = {39},
  number    = {28},
  pages     = {29301--29302},
  month     = apr,
  year      = {2025},
  doi       = {10.1609/aaai.v39i28.35228},
  note      = {Doctoral Consortium.}
}`,
  },
];

// Related work from the MerryQuery team.
export const relatedPapers: Paper[] = [
  {
    id: "gilson2026adversarial",
    title:
      "Adversarial Assignment Perturbation: Effects on Help-Seeking Behaviors in Student Generative AI Chatbot Use",
    authors: "Sam Gilson, Benyamin Tabarsi, Tiffany Barnes",
    venue:
      "Proceedings of the 27th International Conference on Artificial Intelligence in Education (AIED 2026), Part V, pp. 440–449",
    year: 2026,
    status: "published",
    badge: "AIED 2026",
    note: "Sam Gilson's study on how adversarially perturbed assignments affect the way students seek help from a generative AI chatbot.",
    links: [{ label: "DOI", href: "https://doi.org/10.1007/978-3-032-29770-9_48" }],
    bibtex: `@inproceedings{gilson2026adversarial,
  title     = {Adversarial Assignment Perturbation: Effects on Help-Seeking Behaviors in Student Generative AI Chatbot Use},
  author    = {Gilson, Sam and Tabarsi, Benyamin and Barnes, Tiffany},
  booktitle = {Proceedings of the 27th International Conference on Artificial Intelligence in Education (AIED 2026), Part V},
  pages     = {440--449},
  year      = {2026},
  publisher = {Springer},
  doi       = {10.1007/978-3-032-29770-9_48}
}`,
  },
  {
    id: "tabarsi2026studentfacing",
    title:
      "Student-Facing LLM Tools in Computing Education: A Systematic Literature Review of Roles, Designs, Evaluations, and Impacts",
    authors:
      "Benyamin Tabarsi, Tahreem Yasir, Heidi Reichert, Xiaoyi Tian, Shiva Gadireddy, Clara DiMarco, Daniel Briceno, Lina Battestilli, Tiffany Barnes",
    venue: "Under review at Computers and Education: Artificial Intelligence",
    year: 2026,
    status: "under-review",
    note: "A review of 52 studies of student-facing LLM tools in computing education.",
    links: [{ label: "SSRN preprint", href: "https://doi.org/10.2139/ssrn.7463479" }],
  },
  {
    id: "tabarsi2026helplens",
    title:
      "Characterizing Teaching Staff and LLM Responses to Forum Queries in Introductory Programming: A Dataset and Pedagogical Framework",
    authors: "Benyamin Tabarsi, Michelle Jiang, Susanna Quayle, et al.",
    venue: "In preparation",
    year: 2026,
    status: "in-preparation",
    note: "HelpLens: an eight-dimension framework comparing teaching-staff and LLM responses to 172 authentic programming questions.",
    links: [],
  },
];

export interface Talk {
  date: string;
  title: string;
  where: string;
  href?: string;
}

export const talks: Talk[] = [
  {
    date: "Nov 2025",
    title: "Roundtable on AI in education",
    where: "NC State DELTA",
    href: "https://news.delta.ncsu.edu/2025/11/05/idig-ai-in-education-roundtable/",
  },
  { date: "Sep 2025", title: "Guest talk on MerryQuery", where: "NLP course, Utah State University" },
  {
    date: "Aug 2025",
    title: "Computing education and generative AI",
    where: "AIHub AAAI interview series",
    href: "https://aihub.org/2025/08/28/interview-with-benyamin-tabarsi-computing-education-and-generative-ai/",
  },
  {
    date: "Jul 2025",
    title: "MerryQuery and AI in education",
    where: "Root Access Podcast",
    href: "https://youtu.be/Whpicc5xawQ",
  },
  {
    date: "Apr 2025",
    title: "MerryQuery wins AAAI-2025 demonstration award",
    where: "NC State Computer Science news",
    href: "https://csc.ncsu.edu/2025/04/merryquery-wins-prestigious-aaai-2025-demonstration-award-for-advancing-ai-in-education/",
  },
  { date: "Aug 2024", title: "MerryQuery presentation", where: "ECI 519, NC State" },
];
