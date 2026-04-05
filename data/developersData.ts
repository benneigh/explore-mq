// data/developersData.ts
export interface Developer {
    id: number;
    image: string;
    alt: string;
    name: string;
    affiliation?: string;
  }
  
  export const developers: Developer[] = [
    {
      id: 1,
      image: "/images/aditya.jpeg",
      alt: "Aditya Barsarkar",
      name: "Aditya Basarkar",
      affiliation: "NC State University",
    },
    {
      id: 2,
      image: "/images/xukun.png",
      alt: "Xukun Liu",
      name: "Xukun Liu",
      affiliation: "Northwestern University",
    },
    {
      id: 3,
      image: "/images/teddy.jpg",
      alt: "Teddy Chen",
      name: "Teddy Chen",
      affiliation: "NC State University",
    },
    {
      id: 4,
      image: "/images/homak.jpeg",
      alt: "Homak Patel",
      name: "Homak Patel",
      affiliation: "NC State University",
    },
    {
      id: 5,
      image: "/images/aishwarya.jpg",
      alt: "Aishwarya Radhakrishnan",
      name: "Aishwarya Radhakrishnan",
      affiliation: "NC State University",
    },
    {
      id: 6,
      image: "/images/berwin.jpg",
      alt: "Berwin Chen",
      name: "Berwin Chen",
    },
    {
      id: 7,
      image: "/images/daniel.jpeg",
      alt: "Daniel Briceno",
      name: "Daniel Briceno",
      affiliation: "NC State University",
    },
    {
      id: 8,
      image: "/images/shreyas.jpg",
      alt: "Shreyas Visweshwaran",
      name: "Shreyas Visweshwaran",
      affiliation: "NC State University",
    },
  ];
  