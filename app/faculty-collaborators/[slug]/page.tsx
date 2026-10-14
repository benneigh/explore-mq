// app/faculty-collaborators/[slug]/page.tsx
import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { facultyData } from "@/data/facultyData";
import FacultyMemberComponent from "@/components/FacultyMember";

interface FacultyPageProps {
  params: {
    slug: string;
  };
}

const findMember = (slug: string) => facultyData.find((member) => member.slug === slug);

export function generateStaticParams() {
  return facultyData.map((member) => ({ slug: member.slug }));
}

export function generateMetadata({ params }: FacultyPageProps): Metadata {
  const member = findMember(params.slug);
  if (!member) return {};
  return pageMetadata(
    `${member.name}, Faculty Collaborator`,
    member.summary,
    `/faculty-collaborators/${member.slug}`
  );
}

const FacultyPage = ({ params }: FacultyPageProps) => {
  const facultyMember = findMember(params.slug);

  if (!facultyMember) {
    notFound();
  }

  const others = facultyData.filter((m) => m.slug !== facultyMember.slug);

  return (
    <>
      <section id="faculty-member" className="py-10 sm:py-14">
        <div className="container-page">
          <Link
            href="/faculty-collaborators"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-wine-800"
          >
            <LuArrowLeft aria-hidden="true" className="h-4 w-4" />
            All faculty collaborators
          </Link>
          <div className="mt-8">
            <FacultyMemberComponent member={facultyMember} />
          </div>
        </div>
      </section>

      <section aria-labelledby="others" className="border-t border-ink/[0.07] bg-white/50 py-14">
        <div className="container-page">
          <h2 id="others" className="font-serif text-2xl font-normal">
            Other faculty collaborators
          </h2>
          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {others.map((m) => (
              <li key={m.slug}>
                <Link
                  href={`/faculty-collaborators/${m.slug}`}
                  className="card group flex items-center gap-4 p-4 transition hover:shadow-lift"
                >
                  <Image
                    src={m.image}
                    alt=""
                    width={128}
                    height={160}
                    className="h-20 w-16 shrink-0 rounded-xl object-cover"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block font-serif text-xl leading-tight text-ink group-hover:text-wine-800">
                      {m.name}
                    </span>
                    <span className="mt-1 block text-sm text-ink-muted">
                      {m.title}, {m.university}
                    </span>
                  </span>
                  <LuArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-wine-800 transition group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default FacultyPage;
