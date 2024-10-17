"use client";
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="pt-20">
        <Hero />
      </main>
    </div>
  );
};

export default Home;
