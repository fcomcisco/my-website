/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/my-website" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;