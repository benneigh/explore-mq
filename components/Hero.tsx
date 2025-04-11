// components/Hero.tsx
import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import TeamSection from "./TeamSection";
import NewsCarousel from "./NewsCarousel";

const Hero: React.FC = () => {
  return (
    <>
      <HeroSection />
      <NewsCarousel />
      <FeaturesSection />
      <TeamSection />
    </>
  );
};

export default Hero;
