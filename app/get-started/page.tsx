// app/get-started/page.tsx
"use client";

import React from "react";
import StepsSection from "@/components/StepsSection";
import Head from "next/head";

const GetStarted: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Get Started | MerryQuery</title>
        <meta
          name="description"
          content="Learn how to register, create and manage courses, collaborate with instructors, initiate chat sessions, and review student log data on MerryQuery."
        />
      </Head>
      <StepsSection />
    </div>
  );
};

export default GetStarted;
