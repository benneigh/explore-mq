// components/CollaboratingFaculty.tsx

import React from "react";
import FacultyCard from "./FacultyCard";
import { facultyData } from "@/data/facultyData";
import Link from "next/link"; // Import Link from Next.js

const CollaboratingFaculty: React.FC = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <h3 className="text-xl lg:text-2xl text-center mb-16">
          Collaborating Faculty
        </h3>
        <div className="flex flex-wrap justify-center gap-12">
          {facultyData.map((faculty) => (
            <div
              key={faculty.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center"
            >
              {/* Updated Link without nested <a> tag */}
              <Link
                href={`/faculty-collaborators/${faculty.slug}`}
                className="flex justify-center cursor-pointer"
              >
                <FacultyCard faculty={faculty} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* Center the button using a div with text-center */}
      <div className="text-center mb-12">
        <Link
          href="/faculty-collaborators"
          className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition cursor-pointer"
        >
          Learn More about Faculty Collaborators
        </Link>
      </div>
    </>
  );
};

export default CollaboratingFaculty;
