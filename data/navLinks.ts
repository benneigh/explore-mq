// data/navLinks.ts
export interface NavLink {
  id: number;
  name: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Key Features", href: "/#features" },
  { id: 3, name: "Our Team", href: "/#team" },
  { id: 4, name: "Get Started", href: "/get-started" },
  { id: 5, name: "Contact Us", href: "mailto:btaghiz@ncsu.edu?subject=Inquiry%20about%20MerryQuery" },
];
