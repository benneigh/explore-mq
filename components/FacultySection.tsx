// components/FacultySection.tsx

import React from "react";
import FacultyMember from "./FacultyMember";
import { facultyData } from "@/data/facultyData";

const FacultySection: React.FC = () => {
  return (
    <section id="faculty" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-left mb-12">
          <h1 className="text-4xl">Our Faculty Collaborators</h1>
          <p className="text-gray-600 mt-4">
            Faculty collaboration drives MerryQuery's innovation and real-world
            classroom impact.
          </p>
        </div>
        {/* Unified container for both faculty members */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden p-12 space-y-14">
          {facultyData.map((member) => (
            <FacultyMember key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
