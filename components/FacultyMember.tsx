// components/FacultyMember.tsx
// A collaborator's profile page: portrait and title, bio, and a dated collaboration timeline.
import React from "react";
import Image from "next/image";
import { LuArrowUpRight, LuBookOpen, LuCalendar } from "react-icons/lu";
import { FacultyMember as FacultyMemberType } from "@/data/facultyData";

interface FacultyMemberProps {
  member: FacultyMemberType;
}

const FacultyMemberComponent: React.FC<FacultyMemberProps> = ({ member }) => (
  <article className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
    <div className="lg:col-span-4">
      <div className="lg:sticky lg:top-24">
        <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-3xl bg-paper-200 shadow-lift lg:max-w-none">
          <Image
            src={member.image}
            alt={`Photo of ${member.name}`}
            fill
            priority
            sizes="(min-width: 1024px) 380px, 90vw"
            className="object-cover"
          />
        </div>
        {member.profileUrl && (
          <a
            href={member.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary mt-5 w-full"
          >
            Faculty page
            <LuArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>

    <div className="lg:col-span-8">
      <p className="eyebrow">{member.university}</p>
      <h1 className="mt-3 font-serif text-4xl font-normal leading-tight sm:text-5xl">{member.name}</h1>
      <p className="mt-3 text-lg text-ink-soft">
        {member.title}, {member.department}
      </p>
      {member.formerly && <p className="mt-1 text-ink-muted">Formerly {member.formerly}</p>}

      <div className="mt-6 flex flex-wrap gap-2">
        {member.course && (
          <span className="chip">
            <LuBookOpen aria-hidden="true" className="h-3.5 w-3.5" />
            {member.course}
          </span>
        )}
        {member.period && (
          <span className="chip">
            <LuCalendar aria-hidden="true" className="h-3.5 w-3.5" />
            {member.period}
          </span>
        )}
      </div>

      <section aria-labelledby="about" className="mt-12">
        <h2 id="about" className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink">
          About
        </h2>
        <p className="mt-3 text-pretty text-lg leading-relaxed text-ink-soft">{member.description}</p>
      </section>

      <section aria-labelledby="collaboration" className="mt-12 rounded-3xl bg-wine-50/70 p-6 sm:p-8">
        <h2 id="collaboration" className="font-serif text-2xl font-normal">
          Collaboration with MerryQuery
        </h2>
        <ol className="mt-6 space-y-6 border-l-2 border-wine-200 pl-6">
          {member.milestones.map((m) => (
            <li key={m.text} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-wine-700 ring-4 ring-wine-50"
              />
              {m.term && (
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-wine-800">{m.term}</p>
              )}
              <p className="mt-1 leading-relaxed text-ink">{m.text}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  </article>
);

export default FacultyMemberComponent;
