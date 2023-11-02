/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["imagedelivery.net/dqFoxiedZNoncKJ9uqxz0g", "images.jsconf.cl"],
    loader: "custom",
    loaderFile: "./utils/image-loader.ts",
  },
  poweredByHeader: false,
  reactStrictMode: true,
  typedRoutes: true,
};

module.exports = nextConfig;
