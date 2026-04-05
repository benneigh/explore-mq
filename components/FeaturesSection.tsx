// components/FeaturesSection.tsx
import React from "react";
import FeatureCard from "./FeatureCard";
import { features } from "@/data/featuresData";

const FeaturesSection: React.FC = () => {
  const rows = [];
  for (let i = 0; i < features.length; i += 3) {
    rows.push(features.slice(i, i + 3));
  }

  return (
    <section id="features" className=" py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl text-center mb-12">
          Discover MerryQuery&apos;s Features
        </h2>

        {rows.map((row, idx) => (
          <div
            key={idx}
            className={`flex flex-col lg:flex-row items-start justify-center space-y-8 lg:space-y-0 lg:gap-8${idx > 0 ? " mt-12" : ""}`}
          >
            {row.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
