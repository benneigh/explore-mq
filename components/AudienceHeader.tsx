// components/AudienceHeader.tsx
// The large "For students" / "For teachers" title that opens each audience section.
import React from "react";
import type { IconType } from "react-icons";

interface AudienceHeaderProps {
  id: string;
  icon: IconType;
  title: string;
  lead: React.ReactNode;
}

const AudienceHeader: React.FC<AudienceHeaderProps> = ({ id, icon: Icon, title, lead }) => (
  <div className="max-w-3xl">
    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-wine-800 text-white shadow-soft">
      <Icon aria-hidden="true" className="h-7 w-7" />
    </span>
    <h2 id={id} className="mt-6 font-serif text-5xl font-normal leading-none sm:text-6xl">
      {title}
    </h2>
    <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-soft sm:text-xl">{lead}</p>
  </div>
);

export default AudienceHeader;
