// components/Avatar.tsx
import React from "react";
import Image from "next/image";

const initials = (name: string) =>
  name
    .replace(/^Dr\.\s+/, "")
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .filter((ch) => /[A-Za-z]/.test(ch))
    .slice(0, 2)
    .join("")
    .toUpperCase();

// Warm, low-contrast tints so initials read as a deliberate choice rather than a missing photo.
const tints = [
  "bg-wine-100 text-wine-800",
  "bg-[#f3e6d3] text-[#7a4b12]",
  "bg-[#dcebe6] text-[#0f5a50]",
  "bg-[#e5e3f1] text-[#433a7a]",
  "bg-[#f1e0dc] text-[#8a3324]",
];

const tintFor = (name: string) =>
  tints[name.split("").reduce((sum, ch) => sum + ch.charCodeAt(0), 0) % tints.length];

interface AvatarProps {
  name: string;
  src?: string;
  size?: number;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ name, src, size = 56, className = "" }) => {
  const style = { width: size, height: size };
  if (src) {
    return (
      <Image
        src={src}
        alt={`Photo of ${name}`}
        width={size * 2}
        height={size * 2}
        style={style}
        className={`shrink-0 rounded-full object-cover object-[50%_30%] ring-1 ring-ink/10 ${className}`}
      />
    );
  }
  return (
    <span
      role="img"
      aria-label={name}
      style={{ ...style, fontSize: size * 0.36 }}
      className={`grid shrink-0 place-items-center rounded-full font-serif font-medium ring-1 ring-ink/5 ${tintFor(
        name
      )} ${className}`}
    >
      {initials(name)}
    </span>
  );
};

export default Avatar;
