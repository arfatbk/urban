import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };


const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',  // Enable static exports
  basePath: process.env.PAGES_BASE_PATH, // Repository name
  images: {
    unoptimized: true, // Required for static export
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
