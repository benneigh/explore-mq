// components/StudentsSection.tsx
import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import AudienceHeader from "./AudienceHeader";
import Spotlight from "./Spotlight";
import BrowserFrame from "./BrowserFrame";

const StudentsSection: React.FC = () => (
  <section id="students" aria-labelledby="students-title" className="scroll-mt-16 border-t border-ink/[0.07] bg-white py-20 sm:py-28">
    <div className="container-page">
      <AudienceHeader
        id="students-title"
        icon={LuGraduationCap}
        title="For students"
        lead="MerryQuery answers from the materials an instructor uploads, so help matches what was actually taught: step-by-step, with a citation to the source and a chance to practice."
      />

      <div className="mt-14 sm:mt-16">
        <Spotlight
          title="Study tools that come with the course"
          body="Beyond chat, students get a Study Coach that helps plan their next step, Notes from their conversations, quick Flashcards, and the Practice Sets their teacher shares. When a person would help more, MerryQuery offers to bring in a teacher or classmate."
          points={[
            "Every answer is grounded in instructor-uploaded materials and cites its source",
            "Study Coach, Notes, Flashcards, and Practice Sets in one place",
            "Team Mode connects students with a teacher or classmate without sharing their full chat",
          ]}
          visual={
            <BrowserFrame
              src="/images/platform/student-tools.webp"
              alt="MerryQuery student Tools page: Notes, Flashcards, Practice Sets, and Study Coach."
              width={1600}
              height={1000}
              label="Student tools"
              sizes="(min-width: 1024px) 640px, 100vw"
            />
          }
        />
      </div>
    </div>
  </section>
);

export default StudentsSection;
