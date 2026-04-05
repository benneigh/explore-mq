// components/TeamMember.tsx
import React from "react";
import { TeamMember } from "@/data/teamData";

interface TeamMemberProps {
  member: TeamMember;
}

const TeamMemberComponent: React.FC<TeamMemberProps> = ({ member }) => {
  const Wrapper = member.website
    ? ({ children, className }: { children: React.ReactNode; className?: string }) => (
        <a href={member.website} target="_blank" rel="noopener noreferrer" className={className}>
          {children}
        </a>
      )
    : ({ children, className }: { children: React.ReactNode; className?: string }) => (
        <div className={className}>{children}</div>
      );

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start">
      <Wrapper className="w-full md:w-2/5 max-w-xs mx-auto md:mx-0 block">
        <img
          src={member.image}
          alt={member.alt}
          className="w-full aspect-[7/10] object-cover rounded-xl hover:opacity-80 transition"
        />
      </Wrapper>
      <div className="w-full md:w-3/5 mt-4 md:mt-0 md:ml-6 px-4">
        {member.website ? (
          <a href={member.website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
            <h3 className="text-lg md:text-xl font-semibold text-center md:text-left">
              {member.name}
            </h3>
          </a>
        ) : (
          <h3 className="text-lg md:text-xl font-semibold text-center md:text-left">
            {member.name}
          </h3>
        )}
        <h6 className="text-sm font-semibold text-center md:text-left">
          {member.role}
        </h6>
        <p className="text-gray-600 text-sm md:text-base text-center md:text-left">
          {member.description}
        </p>
      </div>
    </div>
  );
};

export default TeamMemberComponent;
