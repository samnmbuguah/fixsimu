/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    path: "/_next/image",
  },
  // Remove basePath and assetPrefix since we're deploying to root
  trailingSlash: true,
};

module.exports = nextConfig;
