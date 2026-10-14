// app/gallery/page.tsx
import React from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";
import { galleryPhotos } from "@/data/galleryData";

export const metadata: Metadata = pageMetadata(
  "Gallery",
  "Photos and screens from MerryQuery, the ExLAIM summer program, and events along the way.",
  "/gallery"
);

const GalleryPage: React.FC = () => (
  <>
    <section className="border-b border-ink/[0.07]">
      <div className="container-page pb-14 pt-12 sm:pt-16">
        <SectionHeading
          as="h1"
          eyebrow="Gallery"
          title="Moments from the project"
          lead="Events, classrooms, the ExLAIM summer program, and the platform itself. Select any photo to view it larger."
        />
      </div>
    </section>
    <section aria-label="Photos" className="py-12 sm:py-16">
      <div className="container-page">
        <GalleryGrid photos={galleryPhotos} />
      </div>
    </section>
  </>
);

export default GalleryPage;
