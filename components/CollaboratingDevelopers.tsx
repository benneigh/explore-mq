// components/CollaboratingDevelopers.tsx
import React from "react";
import DeveloperCard from "./DeveloperCard";
import { developers } from "@/data/developersData";

const CollaboratingDevelopers: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="text-xl lg:text-2xl text-center mb-12">
        Developers
      </h3>
      <div className="flex flex-wrap justify-center gap-8">
        {developers.map((developer) => (
          <DeveloperCard key={developer.id} developer={developer} />
        ))}
      </div>
    </div>
  );
};

export default CollaboratingDevelopers;
