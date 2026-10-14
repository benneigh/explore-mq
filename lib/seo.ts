// lib/seo.ts
import type { Metadata } from "next";

export const siteUrl = "https://exploremq.benyamintabarsi.com";

// Page-level openGraph replaces the root one, so the shared card from app/opengraph-image.tsx is restated here.
const shareImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "MerryQuery: course-grounded AI for teaching and learning",
};

/** Page metadata with a canonical URL and matching Open Graph and Twitter text. */
export const pageMetadata = (title: string, description: string, path: string): Metadata => ({
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    title: `${title} | MerryQuery`,
    description,
    url: path,
    siteName: "MerryQuery",
    type: "website",
    images: [shareImage],
  },
  twitter: { card: "summary_large_image", title: `${title} | MerryQuery`, description, images: [shareImage.url] },
});
