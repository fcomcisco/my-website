/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/my-website",
  assetPrefix: "/my-website",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
