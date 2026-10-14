// data/newsItems.ts
// Newest first. `href` is optional and should point to a public source.
export interface NewsItem {
  title: string;
  content: string;
  label: "EXLAIM" | "FEATURE" | "PAPER" | "AWARD" | "TALK" | "DEPLOYMENT" | "UPDATE";
  date: string;
  href?: string;
}

export const announcement = {
  label: "New",
  text: "Five classroom tools co-designed with K–12 teachers in ExLAIM 2026",
  href: "/exlaim",
};

export const newsItems: NewsItem[] = [
  {
    title: "Five new classroom tools",
    content:
      "ExLAIM teams presented Team Mode, Collaborative Boards, Daily Activity, the Feedback Generator, and Practice Sets & Quizzes, each built inside MerryQuery with K–12 teachers.",
    label: "EXLAIM",
    date: "Jul 2026",
    href: "/exlaim",
  },
  {
    title: "Assignment Perturbation at AIED 2026",
    content:
      "Sam Gilson's study on how adversarial assignment perturbation affects students' help-seeking, using MerryQuery, was presented at AIED 2026 with co-authors Benyamin Tabarsi and Tiffany Barnes.",
    label: "PAPER",
    date: "Jun 2026",
    href: "https://doi.org/10.1007/978-3-032-29770-9_48",
  },
  {
    title: "ExLAIM kicks off",
    content:
      "Seven undergraduate developers (two development leads and five developers) and nine K–12 teachers began a six-week co-design program on MerryQuery.",
    label: "EXLAIM",
    date: "Jun 2026",
    href: "/exlaim",
  },
  {
    title: "GenAI Usage Scale",
    content:
      "Replaced the Practice/Review binary with a 5-level GenAI assistance scale, giving instructors fine-grained control over AI help.",
    label: "FEATURE",
    date: "Spring 2026",
  },
  {
    title: "Analytics Dashboard",
    content:
      "Launched the Instructor Analytics Dashboard with engagement metrics, struggle detection, and topic performance charts.",
    label: "FEATURE",
    date: "Spring 2026",
  },
  {
    title: "MerryQuery at SIGCSE 2026",
    content:
      "A condensed version of MerryQuery's usage analysis, covering how students use and perceive the assistant, appeared at SIGCSE 2026.",
    label: "PAPER",
    date: "Feb 2026",
    href: "https://dl.acm.org/doi/10.1145/3770761.3777164",
  },
  {
    title: "Workspace Modes & TA management",
    content:
      "Introduced Study and Practice workspaces with separate document sets, plus role-based TA access with a dedicated TA interface.",
    label: "FEATURE",
    date: "Fall 2025",
  },
  {
    title: "Guest talk at Utah State",
    content: "Benyamin Tabarsi presented MerryQuery to an NLP course at Utah State University.",
    label: "TALK",
    date: "Sep 2025",
  },
  {
    title: "Summer 2025 improvements",
    content:
      "Undergraduate researchers Jayani Sivakumar and Susanna Quayle worked on MerryQuery improvements over the summer.",
    label: "UPDATE",
    date: "Jul 2025",
  },
  {
    title: "Root Access Podcast",
    content: "MerryQuery and AI in education were discussed on the Root Access Podcast.",
    label: "TALK",
    date: "Jul 2025",
    href: "https://youtu.be/Whpicc5xawQ",
  },
  {
    title: "Featured by NC State CS",
    content: "NC State Computer Science featured MerryQuery's AAAI 2025 demonstration award.",
    label: "AWARD",
    date: "Apr 2025",
    href: "https://csc.ncsu.edu/2025/04/merryquery-wins-prestigious-aaai-2025-demonstration-award-for-advancing-ai-in-education/",
  },
  {
    title: "Best Technical Demonstration",
    content: "MerryQuery received the Best Technical Demonstration Award at AAAI 2025.",
    label: "AWARD",
    date: "Mar 2025",
    href: "https://aaai.org/about-aaai/aaai-awards/aaai-25-paper-awards/",
  },
  {
    title: "Large-scale deployment",
    content: "MerryQuery went live in an introductory MATLAB course with over 250 students.",
    label: "DEPLOYMENT",
    date: "Nov 2024",
  },
  {
    title: "Usability testing",
    content: "Completed a small-scale usability test in CSC 113.",
    label: "UPDATE",
    date: "Sep 2024",
  },
];
