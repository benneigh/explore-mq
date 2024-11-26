// components/FacultyCard.tsx

import React from "react";
import { FacultyMember } from "@/data/facultyData";

interface FacultyCardProps {
  faculty: FacultyMember;
}

const FacultyCard: React.FC<FacultyCardProps> = ({ faculty }) => {
  return (
    <div className="flex flex-col items-center transition-transform transform hover:scale-105">
      {/* Responsive Image Container */}
      <div className="w-48 h-48 sm:w-44 sm:h-44 md:w-44 md:h-44 lg:w-64 lg:h-64">
        <img
          src={faculty.image}
          alt={faculty.name}
          className="w-full h-full object-cover rounded-full shadow-lg"
        />
      </div>
      {/* Faculty Details */}
      <div className="text-center mt-6">
        <h3 className="text-lg sm:text-xl md:text-xl font-semibold">{faculty.name}</h3>
        <p className="text-gray-600 text-sm">{faculty.title}</p>
        <p className="text-gray-600 text-sm">{faculty.department}</p>
        <p className="text-gray-600 text-sm">{faculty.university}</p>
      </div>
    </div>
  );
};

export default FacultyCard;
