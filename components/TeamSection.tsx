// components/TeamSection.tsx
import React from "react";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import SectionHeading from "./SectionHeading";
import TeamMemberComponent from "./TeamMember";
import FacultyStrip from "./FacultyStrip";
import Avatar from "./Avatar";
import { teamMembers } from "@/data/teamData";
import { contributors, exlaimTeachers } from "@/data/contributorsData";

// Homepage summary; the full timeline lives on /team.
const TeamSection: React.FC = () => {
  const withPhotos = contributors.filter((c) => c.image).slice(0, 8);
  const studentCount = contributors.length;

  return (
    <section id="team" className="border-t border-ink/[0.07] bg-white/50 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Team"
          title="The people behind MerryQuery"
          lead="MerryQuery is led by researchers at NC State and Kennesaw State and built with students, instructors, and K–12 teachers."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <TeamMemberComponent member={member} />
            </div>
          ))}
        </div>

        <Link
          href="/team"
          className="group mt-8 flex flex-col gap-5 rounded-3xl border border-ink/[0.07] bg-white p-6 transition hover:border-wine-200 hover:shadow-soft sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
            <span className="flex shrink-0 -space-x-3">
              {withPhotos.map((c) => (
                <Avatar key={c.id} name={c.name} src={c.image} size={44} className="ring-2 ring-white" />
              ))}
            </span>
            <span className="min-w-0">
              <span className="block font-serif text-2xl leading-tight text-ink">
                {studentCount} student developers and researchers, {exlaimTeachers.length} K–12 teachers
              </span>
              <span className="mt-1 block text-sm text-ink-muted">
                See who built MerryQuery, term by term, since 2024.
              </span>
            </span>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-wine-800 group-hover:text-wine-600">
            Meet the whole team
            <LuArrowRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </span>
        </Link>

        <div className="mt-8">
          <FacultyStrip />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
