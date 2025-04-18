// src/data/newsItems.ts
export interface NewsItem {
    title: string;
    content: string;
    icon: string;
    label: string;
    date: string;
  }
  
  export const newsItems: NewsItem[] = [
    {
      title: "Best Paper Award",
      content: "We just won Best Technical Demonstration Award at AAAI 2025!",
      icon: "🏆",
      label: "AWARD",
      date: "Mar 2025",
    },
    {
      title: "Large-Scale Deployment",
      content:
        "MerryQuery is now live in an introductory MATLAB course with over 250 students.",
      icon: "🎓",
      label: "DEPLOYMENT",
      date: "Nov 2024",
    },
    {
      title: "Usability Testing",
      content: "Small-scale usability test has been completed.",
      icon: "🔍",
      label: "UPDATE",
      date: "Sep 2024",
    },
  ];
  