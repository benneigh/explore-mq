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
      title: "GenAI Usage Scale",
      content:
        "Replaced the Practice/Review binary with a 5-level GenAI assistance scale, giving instructors fine-grained control over AI help.",
      icon: "🎛️",
      label: "FEATURE",
      date: "Spring 2026",
    },
    {
      title: "Analytics Dashboard",
      content:
        "Launched the comprehensive Instructor Analytics Dashboard with engagement metrics, struggle detection, and topic performance charts.",
      icon: "📊",
      label: "FEATURE",
      date: "Spring 2026",
    },
    {
      title: "Workspace Modes",
      content:
        "Introduced Study and Practice workspace modes, allowing instructors to assign separate document sets for each learning context.",
      icon: "📚",
      label: "FEATURE",
      date: "Fall 2025",
    },
    {
      title: "TA Management System",
      content:
        "Released a full TA management system with role-based access control and a dedicated TA interface.",
      icon: "👥",
      label: "FEATURE",
      date: "Fall 2025",
    },
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
  