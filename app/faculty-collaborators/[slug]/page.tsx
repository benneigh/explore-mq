// app/faculty-collaborators/[slug]/page.tsx

import { notFound } from "next/navigation";
import { facultyData, FacultyMember } from "@/data/facultyData";
import FacultyMemberComponent from "@/components/FacultyMember";
import Head from "next/head";

// Define the props for the page
interface FacultyPageProps {
  params: {
    slug: string;
  };
}

// The page component
const FacultyPage = ({ params }: FacultyPageProps) => {
  const { slug } = params;

  // Find the faculty member by slug
  const facultyMember: FacultyMember | undefined = facultyData.find(
    (member) => member.slug === slug
  );

  // If no faculty member is found, show a 404 page
  if (!facultyMember) {
    notFound();
  }

  return (
    <>
      <Head>
        <title>{facultyMember.name} - MerryQuery Faculty Collaborator</title>
        <meta name="description" content={facultyMember.description} />
      </Head>
      <section id="faculty-member" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-left mb-12">
            <h1 className="text-4xl">{facultyMember.name}</h1>
            <p className="text-gray-600 mt-4">
              {facultyMember.title} in {facultyMember.department}
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden p-12">
            <FacultyMemberComponent member={facultyMember} />
          </div>
        </div>
      </section>
    </>
  );
};

export default FacultyPage;
