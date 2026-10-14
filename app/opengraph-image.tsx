// app/opengraph-image.tsx
// The social preview card shown when a page is shared on LinkedIn, Slack, X, and similar.
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "MerryQuery: course-grounded AI for teaching and learning";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "app/apple-icon.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #faf7f2 0%, #f6e6ed 100%)",
          color: "#1d1a1c",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={88} height={88} alt="" />
          <div style={{ fontSize: 44, fontWeight: 600, color: "#660033" }}>MerryQuery</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 72, lineHeight: 1.05, fontWeight: 600, maxWidth: 980 }}>
            AI help that stays grounded in your course.
          </div>
          <div style={{ fontSize: 30, color: "#4a4448", maxWidth: 960 }}>
            Cited, step-by-step answers for students. A full toolkit for teachers.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#72204a" }}>
          <span>NC State University</span>
          <span>AAAI 2025 Best Technical Demonstration</span>
        </div>
      </div>
    ),
    size
  );
}
