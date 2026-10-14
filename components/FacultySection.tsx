// components/FacultySection.tsx
// The /faculty-collaborators listing: one card per collaborator, linking to their profile page.
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LuArrowRight, LuCalendar, LuBookOpen } from "react-icons/lu";
import SectionHeading from "./SectionHeading";
import { facultyData } from "@/data/facultyData";

const FacultySection: React.FC = () => (
  <>
    <section className="border-b border-ink/[0.07]">
      <div className="container-page pb-14 pt-12 sm:pt-16">
        <SectionHeading
          as="h1"
          eyebrow="Faculty collaborators"
          title={
            <>
              Classrooms that <em className="text-wine-700">shaped</em> MerryQuery
            </>
          }
          lead="Faculty collaborators bring MerryQuery into real courses, from a large introductory MATLAB course to graduate learning-design courses, and guide programs like ExLAIM that shape what the platform becomes."
        />
      </div>
    </section>

    <section id="faculty" aria-label="Faculty collaborators" className="py-14 sm:py-20">
      <ul className="container-page grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {facultyData.map((member) => (
          <li key={member.id}>
            <Link
              href={`/faculty-collaborators/${member.slug}`}
              className="card group flex h-full flex-col overflow-hidden transition hover:-translate-y-0.5 hover:shadow-lift"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-paper-200">
                <Image
                  src={member.image}
                  alt={`Photo of ${member.name}`}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                />
                {member.course && (
                  <span className="absolute bottom-3 left-3 inline-flex max-w-[calc(100%-1.5rem)] items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-wine-900 backdrop-blur">
                    <LuBookOpen aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">{member.course.split(" · ")[0]}</span>
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="eyebrow">{member.university}</p>
                <h2 className="mt-2 font-serif text-2xl font-normal leading-tight group-hover:text-wine-800">
                  {member.name}
                </h2>
                <p className="mt-1 text-sm text-ink-soft">
                  {member.title}, {member.department}
                </p>
                {member.formerly && (
                  <p className="mt-1 text-sm text-ink-muted">Formerly {member.formerly}</p>
                )}

                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink">{member.summary}</p>

                <div className="mt-6 flex items-center justify-between gap-3 border-t border-ink/[0.07] pt-4 text-sm">
                  {member.period && (
                    <span className="inline-flex items-center gap-1.5 text-ink-muted">
                      <LuCalendar aria-hidden="true" className="h-3.5 w-3.5" />
                      {member.period}
                    </span>
                  )}
                  <span className="ml-auto inline-flex shrink-0 items-center gap-1 font-semibold text-wine-800">
                    Profile
                    <LuArrowRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  </>
);

export default FacultySection;
