// components/FacultyStrip.tsx
import React from "react";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import FacultyCard from "./FacultyCard";
import { facultyData } from "@/data/facultyData";

const FacultyStrip: React.FC = () => (
  <div className="rounded-3xl border border-ink/[0.07] bg-paper p-6 sm:p-10">
    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <p className="eyebrow">Faculty collaborators</p>
        <h3 className="mt-2 font-serif text-3xl font-normal">Classrooms that shaped the platform</h3>
      </div>
      <Link
        href="/faculty-collaborators"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-wine-800 hover:text-wine-600"
      >
        All collaborations
        <LuArrowRight aria-hidden="true" className="h-4 w-4" />
      </Link>
    </div>
    <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
      {facultyData.map((faculty) => (
        <li key={faculty.id}>
          <Link
            href={`/faculty-collaborators/${faculty.slug}`}
            className="group block rounded-2xl p-2 transition hover:bg-white"
          >
            <FacultyCard faculty={faculty} />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default FacultyStrip;
