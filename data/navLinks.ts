// data/navLinks.ts
export interface NavLink {
  id: number;
  name: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { id: 1, name: "Platform", href: "/#platform" },
  { id: 2, name: "ExLAIM 2026", href: "/exlaim" },
  { id: 3, name: "Papers", href: "/papers" },
  { id: 4, name: "Talks & Press", href: "/talks" },
  { id: 5, name: "Gallery", href: "/gallery" },
  { id: 6, name: "Team", href: "/team" },
  { id: 7, name: "Faculty Collaborators", href: "/faculty-collaborators" },
];

export const platformUrl = "https://mq.csc.ncsu.edu";

export const contactHref =
  "mailto:btaghiz@ncsu.edu?subject=Inquiry%20about%20MerryQuery";
