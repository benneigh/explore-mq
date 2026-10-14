// app/sitemap.ts
import type { MetadataRoute } from "next";
import { facultyData } from "@/data/facultyData";

const base = "https://exploremq.benyamintabarsi.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/exlaim", priority: 0.9 },
    { path: "/papers", priority: 0.8 },
    { path: "/team", priority: 0.7 },
    { path: "/talks", priority: 0.6 },
    { path: "/gallery", priority: 0.6 },
    { path: "/faculty-collaborators", priority: 0.6 },
    ...facultyData.map((f) => ({ path: `/faculty-collaborators/${f.slug}`, priority: 0.4 })),
  ];
  return pages.map(({ path, priority }) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
