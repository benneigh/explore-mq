// components/TeamMember.tsx
import React from "react";
import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";
import { TeamMember } from "@/data/teamData";

interface TeamMemberProps {
  member: TeamMember;
}

const TeamMemberComponent: React.FC<TeamMemberProps> = ({ member }) => (
  <article className="card group flex h-full flex-col overflow-hidden">
    <div className="relative aspect-[4/5] overflow-hidden bg-paper-200">
      <Image
        src={member.image}
        alt={member.alt}
        fill
        sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
        className="object-cover object-[50%_20%] transition duration-500 group-hover:scale-[1.02]"
      />
    </div>
    <div className="flex flex-1 flex-col p-6">
      <p className="eyebrow">{member.role}</p>
      <h3 className="mt-2 font-serif text-2xl font-normal">{member.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{member.description}</p>
      {member.website && (
        <a
          href={member.website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1 self-start text-sm font-semibold text-wine-800 hover:text-wine-600"
        >
          Website
          <LuArrowUpRight aria-hidden="true" className="h-4 w-4" />
          <span className="sr-only">of {member.name}</span>
        </a>
      )}
    </div>
  </article>
);

export default TeamMemberComponent;
