// components/Logo.tsx
import React from "react";
import Image from "next/image";

// The MQ monogram used in the MerryQuery app itself.
const Logo: React.FC<{ className?: string; light?: boolean }> = ({ className = "", light }) => (
  <span className={`inline-flex items-center gap-2 ${className}`}>
    <Image
      src="/images/merryquery-logo.webp"
      alt=""
      aria-hidden="true"
      width={256}
      height={256}
      priority
      className={`h-9 w-9 ${light ? "brightness-0 invert" : ""}`}
    />
    <span
      className={`font-serif text-xl font-medium tracking-tight ${light ? "text-white" : "text-ink"}`}
    >
      MerryQuery
    </span>
  </span>
);

export default Logo;
