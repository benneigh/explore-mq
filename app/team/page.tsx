// app/team/page.tsx
import React from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import SectionHeading from "@/components/SectionHeading";
import TeamMemberComponent from "@/components/TeamMember";
import ContributorsTimeline from "@/components/ContributorsTimeline";
import FacultyStrip from "@/components/FacultyStrip";
import { teamMembers } from "@/data/teamData";

export const metadata: Metadata = pageMetadata(
  "Team",
  "The researchers, student developers, K–12 teachers, and faculty collaborators who built MerryQuery at NC State, term by term since 2024.",
  "/team"
);

const TeamPage: React.FC = () => (
  <>
    <section className="border-b border-ink/[0.07]">
      <div className="container-page pb-14 pt-12 sm:pt-16">
        <SectionHeading
          as="h1"
          eyebrow="Team"
          title="The people behind MerryQuery"
          lead="MerryQuery is led by researchers at NC State and Kennesaw State and built, term by term, with student developers, K–12 teachers, and faculty collaborators."
        />
      </div>
    </section>

    <section aria-labelledby="leads" className="py-16 sm:py-20">
      <div className="container-page">
        <h2 id="leads" className="font-serif text-3xl font-normal sm:text-4xl">
          Leadership
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <TeamMemberComponent member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>

    <section aria-labelledby="timeline" className="border-t border-ink/[0.07] bg-white/50 py-16 sm:py-20">
      <div className="container-page">
        <h2 id="timeline" className="font-serif text-3xl font-normal sm:text-4xl">
          Who built it, and when
        </h2>
        <p className="mt-3 max-w-2xl text-ink-soft">
          Everyone who worked on MerryQuery, grouped by term. People who came back appear in each
          term they contributed.
        </p>
        <ContributorsTimeline />
      </div>
    </section>

    <section aria-label="Faculty collaborators" className="py-16 sm:py-20">
      <div className="container-page">
        <FacultyStrip />
      </div>
    </section>
  </>
);

export default TeamPage;
