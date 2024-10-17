// components/FeaturesSection.tsx
import React from "react";
import FeatureCard from "./FeatureCard";
import { features } from "@/data/featuresData";

const FeaturesSection: React.FC = () => {
  const firstRow = features.slice(0, 3);
  const secondRow = features.slice(3, 6);

  return (
    <section id="features" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl text-center mb-12">
          Discover MerryQuery’s Features
        </h2>

        <div className="flex flex-col lg:flex-row items-start justify-between space-y-8 lg:space-y-0">
          {firstRow.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between space-y-8 lg:space-y-0 mt-12">
          {secondRow.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
