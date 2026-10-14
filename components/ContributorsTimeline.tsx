// components/ContributorsTimeline.tsx
import React from "react";
import { LuLinkedin, LuGithub, LuGlobe } from "react-icons/lu";
import Avatar from "./Avatar";
import {
  Contributor,
  contributorsByTerm,
  exlaimTeachers,
  formatTerm,
  Stint,
} from "@/data/contributorsData";

const linkIcons = [
  { key: "linkedin", label: "LinkedIn", icon: LuLinkedin },
  { key: "github", label: "GitHub", icon: LuGithub },
  { key: "website", label: "Website", icon: LuGlobe },
] as const;

export const ContributorLinks: React.FC<{ contributor: Contributor }> = ({ contributor }) => {
  const links = contributor.links;
  if (!links) return null;
  return (
    <span className="flex gap-1">
      {linkIcons.map(({ key, label, icon: Icon }) =>
        links[key] ? (
          <a
            key={key}
            href={links[key]}
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-7 w-7 place-items-center rounded-full text-ink-muted transition hover:bg-wine-50 hover:text-wine-800"
            aria-label={`${contributor.name} on ${label}`}
          >
            <Icon aria-hidden="true" className="h-3.5 w-3.5" />
          </a>
        ) : null
      )}
    </span>
  );
};

const PersonCard: React.FC<{ contributor: Contributor; stint: Stint }> = ({ contributor, stint }) => {
  const otherTerms = contributor.stints.filter((s) => s !== stint).map((s) => formatTerm(s.term));
  return (
    <li className="flex items-start gap-4 rounded-2xl border border-ink/[0.07] bg-white p-4">
      <Avatar name={contributor.name} src={contributor.image} size={52} />
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <p className="pt-0.5 font-semibold leading-snug text-ink">{contributor.name}</p>
          <ContributorLinks contributor={contributor} />
        </div>
        <p className="text-sm text-ink-soft">{stint.role}</p>
        {stint.affiliation && <p className="text-sm text-ink-muted">{stint.affiliation}</p>}
        {(stint.focus || otherTerms.length > 0) && (
          <p className="mt-2 flex flex-wrap gap-1.5">
            {otherTerms.length > 0 && (
              <span className="rounded-full bg-wine-50 px-2 py-0.5 text-[11px] font-medium text-wine-800">
                Also {otherTerms.join(" · ")}
              </span>
            )}
            {stint.focus && (
              <span className="rounded-full bg-paper-200 px-2 py-0.5 text-[11px] font-medium text-ink-soft">
                {stint.focus}
              </span>
            )}
          </p>
        )}
      </div>
    </li>
  );
};

const ContributorsTimeline: React.FC = () => {
  const groups = contributorsByTerm();

  return (
    <ol className="relative mt-12 space-y-12 border-l border-wine-100 pl-6 sm:pl-8 lg:border-l-0 lg:pl-0">
      {groups.map(({ label, people, term }) => {
        const isExlaim = term.year === 2026 && term.season === "Summer";
        return (
          <li key={label} className="relative grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-10">
            <span
              aria-hidden="true"
              className="absolute -left-[29px] top-2 h-2.5 w-2.5 rounded-full bg-wine-700 ring-4 ring-paper sm:-left-[37px] lg:hidden"
            />
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-24">
                <h3 className="font-serif text-3xl font-normal leading-none text-wine-900 sm:text-4xl">{label}</h3>
                <p className="mt-2 text-sm text-ink-muted">
                  {isExlaim ? "ExLAIM cohort" : `${people.length} contributor${people.length === 1 ? "" : "s"}`}
                </p>
              </div>
            </div>

            <div className="lg:col-span-9">
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {people.map(({ contributor, stint }) => (
                  <PersonCard key={`${contributor.id}-${label}`} contributor={contributor} stint={stint} />
                ))}
              </ul>

              {isExlaim && (
                <div className="mt-4 rounded-2xl border border-ink/[0.07] bg-white p-5 sm:p-6">
                  <p className="text-sm font-semibold text-ink">K–12 teacher research interns</p>
                  <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                    {exlaimTeachers.map((t) => (
                      <li key={t.name} className="flex items-center gap-3">
                        <Avatar name={t.name} size={36} />
                        <span className="min-w-0 leading-tight">
                          <span className="block text-sm font-medium text-ink">{t.name}</span>
                          <span className="block truncate text-xs text-ink-muted">{t.school}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default ContributorsTimeline;
