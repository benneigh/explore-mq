// components/DeveloperCard.tsx
import React from "react";
import { Developer } from "@/data/developersData";

interface DeveloperCardProps {
  developer: Developer;
}

const DeveloperCard: React.FC<DeveloperCardProps> = ({ developer }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-40 h-40">
        <img
          src={developer.image}
          alt={developer.alt}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="text-center mt-4">
        <h3 className="text-lg md:text-xl font-semibold">{developer.name}</h3>
        {developer.affiliation && (
          <p className="text-gray-600 text-sm">{developer.affiliation}</p>
        )}
      </div>
    </div>
  );
};

export default DeveloperCard;
