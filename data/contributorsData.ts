// data/contributorsData.ts
// Students who built MerryQuery, one stint per term they worked on it.
// Sources: benyamintabarsi.com/mentoring, MerryQuery commit history, and the ExLAIM paper.
// Links are ones each person lists publicly on their own GitHub profile.

export type Season = "Spring" | "Summer" | "Fall";

export interface Term {
  season?: Season; // omitted when only the year is known
  year: number;
}

export interface Stint {
  term: Term;
  role: string;
  affiliation?: string;
  focus?: string;
}

export interface ContributorLinks {
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface Contributor {
  id: string;
  name: string;
  image?: string;
  links?: ContributorLinks;
  exlaim?: boolean;
  stints: Stint[];
}

const NCSU = "NC State University";
const exlaimDev = (affiliation: string): Stint => ({
  term: { season: "Summer", year: 2026 },
  role: "Undergraduate developer, ExLAIM",
  affiliation,
});

export const contributors: Contributor[] = [
  {
    id: "aditya-basarkar",
    name: "Aditya Basarkar",
    image: "/images/aditya.jpeg",
    links: { linkedin: "https://www.linkedin.com/in/aditya-basarkar-019b24209/", github: "https://github.com/adityabasarkar" },
    exlaim: true,
    stints: [
      { term: { season: "Summer", year: 2026 }, role: "Development lead, ExLAIM", affiliation: NCSU },
      { term: { season: "Summer", year: 2024 }, role: "Undergraduate researcher", affiliation: NCSU, focus: "AAAI-25 demo co-author" },
    ],
  },
  {
    id: "daniel-briceno",
    name: "Daniel Briceno",
    image: "/images/daniel.jpeg",
    links: { linkedin: "https://www.linkedin.com/in/bricend", github: "https://github.com/dabricen" },
    exlaim: true,
    stints: [
      { term: { season: "Summer", year: 2026 }, role: "Development lead, ExLAIM", affiliation: NCSU },
      { term: { season: "Spring", year: 2026 }, role: "Undergraduate researcher", affiliation: NCSU },
    ],
  },
  {
    id: "susanna-quayle",
    name: "Susanna Quayle",
    image: "/images/people/susanna.webp",
    links: { linkedin: "https://www.linkedin.com/in/susanna-quayle-994a3b2a2/", github: "https://github.com/susanna3003" },
    exlaim: true,
    stints: [
      { ...exlaimDev(NCSU), affiliation: `${NCSU} (transferred from Fayetteville Tech CC)` },
      { term: { season: "Summer", year: 2025 }, role: "Undergraduate researcher", affiliation: "Fayetteville Technical Community College" },
    ],
  },
  {
    id: "faaz-mohamed",
    name: "Faaz Mohamed",
    image: "/images/people/faaz.webp",
    links: {
      linkedin: "https://www.linkedin.com/in/faazmohamed/",
      github: "https://github.com/FuzzDOT",
      website: "https://www.faazmohamed.com/",
    },
    exlaim: true,
    stints: [exlaimDev("University of Pittsburgh")],
  },
  {
    id: "matheus-marques",
    name: "Matheus Marques",
    image: "/images/people/matheus.webp",
    links: { linkedin: "https://www.linkedin.com/in/matheus-marques---/", github: "https://github.com/MatheusMarques8" },
    exlaim: true,
    stints: [exlaimDev("The College of New Jersey")],
  },
  {
    id: "lokesh-sharma",
    name: "Lokesh Sharma",
    image: "/images/people/lokesh-face.webp",
    links: { linkedin: "https://www.linkedin.com/in/lokeshsharma25", github: "https://github.com/lakeshoree" },
    exlaim: true,
    stints: [exlaimDev("University of California, Irvine")],
  },
  {
    id: "nicole-ackerman-lowery",
    name: "Nicole Ackerman-Lowery",
    image: "/images/people/nicole-headshot.webp",
    links: {
      linkedin: "https://www.linkedin.com/in/joey-ackerman-lowery",
      github: "https://github.com/ackermaj5301",
    },
    exlaim: true,
    stints: [exlaimDev("Fayetteville Technical Community College")],
  },
  {
    id: "shreyas-visweshwaran",
    name: "Shreyas Visweshwaran",
    image: "/images/shreyas.jpg",
    links: { github: "https://github.com/FirefoxSRV", website: "https://firefoxsrv.github.io/shreyV/" },
    stints: [{ term: { season: "Fall", year: 2025 }, role: "Graduate developer", affiliation: NCSU }],
  },
  {
    id: "jayani-sivakumar",
    name: "Jayani Sivakumar",
    image: "/images/people/jayani.webp",
    links: { linkedin: "https://www.linkedin.com/in/jayanisiva/" },
    stints: [
      { term: { season: "Summer", year: 2025 }, role: "Undergraduate researcher", affiliation: NCSU, focus: "HelpLens · MerryQuery improvements" },
    ],
  },
  {
    id: "teddy-chen",
    name: "Teddy Chen",
    image: "/images/teddy.jpg",
    links: { github: "https://github.com/tddschn" },
    stints: [{ term: { season: "Fall", year: 2024 }, role: "Graduate developer", affiliation: NCSU }],
  },
  {
    id: "homak-patel",
    name: "Homak Patel",
    image: "/images/homak.jpeg",
    links: { linkedin: "https://www.linkedin.com/in/homakpatel/", github: "https://github.com/Homak-Patel" },
    stints: [{ term: { season: "Fall", year: 2024 }, role: "Graduate developer", affiliation: NCSU }],
  },
  {
    id: "aishwarya-radhakrishnan",
    name: "Aishwarya Radhakrishnan",
    image: "/images/aishwarya.jpg",
    links: { github: "https://github.com/aishrad" },
    stints: [
      { term: { season: "Fall", year: 2024 }, role: "Undergraduate researcher", affiliation: NCSU },
      { term: { season: "Summer", year: 2024 }, role: "Undergraduate researcher", affiliation: NCSU },
    ],
  },
  {
    id: "praneel-magapu",
    name: "Praneel Magapu",
    image: "/images/people/praneel.webp",
    links: { github: "https://github.com/mpraneel", website: "https://praneelmagapu.me" },
    stints: [{ term: { season: "Summer", year: 2024 }, role: "Undergraduate researcher", affiliation: NCSU }],
  },
  {
    id: "lavan-aditya",
    name: "Lavan Aditya",
    image: "/images/people/lavan.webp",
    links: { github: "https://github.com/lavanaditya13" },
    stints: [{ term: { season: "Summer", year: 2024 }, role: "Undergraduate researcher", affiliation: NCSU }],
  },
  {
    id: "xukun-liu",
    name: "Xukun Liu",
    image: "/images/xukun.png",
    links: { github: "https://github.com/liuxukun2000", website: "https://xukunliu.com/" },
    stints: [{ term: { season: "Summer", year: 2024 }, role: "Developer", affiliation: "Northwestern University", focus: "AAAI-25 demo co-author" }],
  },
  {
    id: "berwin-chen",
    name: "Berwin Chen",
    image: "/images/berwin.jpg",
    links: { github: "https://github.com/BerwinChen" },
    stints: [{ term: { season: "Summer", year: 2024 }, role: "Developer" }],
  },
];

export interface Teacher {
  name: string;
  school: string;
}

// ExLAIM 2026 teacher research interns.
export const exlaimTeachers: Teacher[] = [
  { name: "Algie Brodnax", school: "GTCC Middle College" },
  { name: "Latoya Clay", school: "Hillside High School" },
  { name: "Lohanna Sanchez", school: "Ragsdale High School" },
  { name: "Madeline Cutchin", school: "Nash Central Middle School" },
  { name: "Marcia Winborne", school: "JF Webb High School" },
  { name: "Marie Antonette Jimenez", school: "Discovery Charter School" },
  { name: "Mason McDaniel", school: "Broughton High School" },
  { name: "Tiffany McMillan", school: "Jack Britt High School" },
  { name: "Tina Fox", school: "Apex Friendship High School" },
];

const seasonOrder: Record<Season, number> = { Spring: 1, Summer: 2, Fall: 3 };

// Year-only terms rank before any season of the same year.
const termRank = (t: Term) => t.year * 10 + (t.season ? seasonOrder[t.season] : 0);

export const formatTerm = (t: Term) => (t.season ? `${t.season} ${t.year}` : `${t.year}`);

export interface TermGroup {
  term: Term;
  label: string;
  people: { contributor: Contributor; stint: Stint }[];
}

/** One group per term, newest first; people appear in every term they contributed. */
export const contributorsByTerm = (): TermGroup[] => {
  const groups = new Map<number, TermGroup>();
  contributors.forEach((contributor) =>
    contributor.stints.forEach((stint) => {
      const rank = termRank(stint.term);
      const group = groups.get(rank) ?? { term: stint.term, label: formatTerm(stint.term), people: [] };
      group.people.push({ contributor, stint });
      groups.set(rank, group);
    })
  );
  return Array.from(groups.entries())
    .sort(([a], [b]) => b - a)
    .map(([, group]) => group);
};

/** The ExLAIM 2026 developers with their Summer 2026 role and affiliation. */
export const exlaimDevelopers = () =>
  contributors
    .filter((c) => c.exlaim)
    .map((c) => ({ contributor: c, stint: c.stints.find((s) => s.term.year === 2026 && s.term.season === "Summer")! }));
