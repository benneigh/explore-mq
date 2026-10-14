/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // The step-by-step guide was retired; keep old links landing somewhere useful.
      { source: "/get-started", destination: "/#platform", permanent: false },
    ];
  },
};

export default nextConfig;
