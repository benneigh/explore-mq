// components/BrowserFrame.tsx
import React from "react";
import Image from "next/image";

interface BrowserFrameProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  children?: React.ReactNode;
  label?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

// A light window chrome around real product screenshots or static renderings of the app.
const BrowserFrame: React.FC<BrowserFrameProps> = ({
  children,
  src,
  alt,
  width,
  height,
  label = "mq.csc.ncsu.edu",
  priority,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className = "",
}) => (
  <figure className={`overflow-hidden rounded-xl border border-ink/10 bg-white shadow-lift ${className}`}>
    <div className="flex items-center gap-2 border-b border-ink/[0.07] bg-paper-200/60 px-3 py-2">
      <span className="flex gap-1.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-[#e8a39c]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ecd08e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#a9cf9a]" />
      </span>
      <span className="mx-auto truncate rounded-md bg-white/80 px-3 py-0.5 text-[11px] text-ink-muted">
        {label}
      </span>
      <span className="w-[42px]" aria-hidden="true" />
    </div>
    {children ??
      (src && (
        <Image
          src={src}
          alt={alt ?? ""}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          className="block h-auto w-full"
        />
      ))}
  </figure>
);

export default BrowserFrame;
