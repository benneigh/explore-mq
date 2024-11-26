// components/TeamSection.tsx
import React from "react";
import TeamMemberComponent from "./TeamMember";
import { teamMembers } from "@/data/teamData";
import CollaboratingFaculty from "@/components/CollaboratingFaculty";
import CollaboratingDevelopers from "@/components/CollaboratingDevelopers";

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl text-center mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberComponent key={member.id} member={member} />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <CollaboratingFaculty />
        <CollaboratingDevelopers />
      </div>
    </section>
  );
};

export default TeamSection;
