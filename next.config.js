/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Only use basePath and assetPrefix in production
  ...(process.env.NODE_ENV === "production"
    ? {
        basePath: "/fixsimu",
        assetPrefix: "/fixsimu",
      }
    : {}),
  // This is needed for GitHub Pages
  trailingSlash: true,
};

module.exports = nextConfig;
