// app/faculty/page.tsx

"use client";

import React from "react";
import Header from "@/components/Header";
import FacultySection from "@/components/FacultySection";
import Head from "next/head";

const FacultyPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Faculty Collaborators | MerryQuery</title>
        <meta
          name="description"
          content="Meet the faculty collaborators who are driving innovation and excellence at MerryQuery."
        />
      </Head>
      <Header />
      <main>
        <FacultySection />
      </main>
    </div>
  );
};

export default FacultyPage;
