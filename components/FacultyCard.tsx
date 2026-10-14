// components/FacultyCard.tsx
import React from "react";
import Image from "next/image";
import { FacultyMember } from "@/data/facultyData";

interface FacultyCardProps {
  faculty: FacultyMember;
}

const FacultyCard: React.FC<FacultyCardProps> = ({ faculty }) => (
  <div className="flex items-center gap-4">
    <Image
      src={faculty.image}
      alt=""
      width={160}
      height={200}
      className="h-20 w-20 shrink-0 rounded-full object-cover object-top ring-1 ring-ink/10 transition group-hover:ring-wine-300"
    />
    <div className="min-w-0">
      <p className="font-serif text-xl leading-tight text-ink group-hover:text-wine-800">{faculty.name}</p>
      <p className="mt-1 text-sm text-ink-soft">{faculty.title}</p>
      <p className="text-sm text-ink-muted">
        {faculty.department}, {faculty.university}
      </p>
      {faculty.formerly && <p className="text-sm text-ink-muted">Formerly at NC State</p>}
    </div>
  </div>
);

export default FacultyCard;
