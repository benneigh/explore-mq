// components/FacultyMember.tsx

import React from "react";
import { FacultyMember as FacultyMemberType } from "@/data/facultyData";

interface FacultyMemberProps {
  member: FacultyMemberType;
}

const FacultyMember: React.FC<FacultyMemberProps> = ({ member }) => {
  return (
    <div className="bg-white overflow-hidden flex flex-col sm:flex-row items-stretch">
      {/* Image Container */}
      <div className="sm:w-1/3 flex-shrink-0">
        <div className="w-full aspect-square relative">
          <img
            src={member.image}
            alt={`Photo of ${member.name}`}
            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="sm:w-2/3 p-6 flex flex-col sm:pt-0">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            {member.name}
          </h2>
          <p className="text-sm font-semibold  mb-1">{member.title}</p>
          <p className="text-gray-600">{member.description}</p>
          <p className="text-gray-600 mt-4">
            <b>Collaboration:</b> {member.collaboration}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FacultyMember;
