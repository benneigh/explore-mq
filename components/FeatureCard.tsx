// components/FeatureCard.tsx
import React from "react";
import { Feature } from "@/data/featuresData";

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div className="text-center lg:w-1/3 px-4">
      <img
        src={feature.image}
        alt={feature.alt}
        className="mb-4 w-full h-auto max-h-64 object-cover rounded-3xl"
      />
      <h3 className="text-xl font-semibold">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;
