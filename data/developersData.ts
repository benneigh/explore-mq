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
      image:
        "https://s3.eu-central-1.amazonaws.com/uploads.mangoweb.org/shared-prod/visegradfund.org/uploads/2021/08/placeholder-male.jpg",
      alt: "Berwin Chen",
      name: "Berwin Chen",
    },
  ];
  