// components/Hero.tsx
import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import TeamSection from "./TeamSection";

const Hero: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <TeamSection />
    </>
  );
};

export default Hero;
