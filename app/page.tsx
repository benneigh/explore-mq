// app/page.tsx
import React from "react";
import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";
import HeroSection from "@/components/HeroSection";
import StatsBand from "@/components/StatsBand";
import AudienceChooser from "@/components/AudienceChooser";
import StudentsSection from "@/components/StudentsSection";
import TeachersSection from "@/components/TeachersSection";
import FeaturesSection from "@/components/FeaturesSection";
import ExlaimTeaser from "@/components/ExlaimTeaser";
import NewsSection from "@/components/NewsSection";
import RecognitionBand from "@/components/RecognitionBand";
import TeamSection from "@/components/TeamSection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Structured data so search engines can identify the site, the app, and who makes it.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", name: "MerryQuery", url: siteUrl },
    {
      "@type": "WebApplication",
      name: "MerryQuery",
      url: "https://mq.csc.ncsu.edu",
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      description:
        "An AI learning platform that grounds every answer in an instructor's course materials, with cited, step-by-step help for students and a toolkit for teachers.",
      award: "AAAI 2025 Best Technical Demonstration Award",
      creator: {
        "@type": "CollegeOrUniversity",
        name: "North Carolina State University",
        url: "https://www.ncsu.edu",
      },
    },
  ],
};

const Home: React.FC = () => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HeroSection />
      <StatsBand />
      <AudienceChooser />
      <StudentsSection />
      <TeachersSection />
      <FeaturesSection />
      <ExlaimTeaser />
      <NewsSection />
      <RecognitionBand />
      <TeamSection />
    </>
  );
};

export default Home;
