/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/My-website",     
  assetPrefix: "/My-website",  
  images: {
    unoptimized: true,         
  },
};

module.exports = nextConfig;
