/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/fixsimu",
  assetPrefix: "/fixsimu",
};

module.exports = nextConfig;
