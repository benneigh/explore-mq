// app/faculty-collaborators/page.tsx
import React from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import FacultySection from "@/components/FacultySection";

export const metadata: Metadata = pageMetadata(
  "Faculty Collaborators",
  "The NC State faculty whose courses helped shape MerryQuery, from a 250-student MATLAB course to graduate learning-design courses.",
  "/faculty-collaborators"
);

const FacultyPage: React.FC = () => <FacultySection />;

export default FacultyPage;
