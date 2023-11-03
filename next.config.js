/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { hostname: "imagedelivery.net/dqFoxiedZNoncKJ9uqxz0g" },
      { hostname: "images.jsconf.cl" },
      { hostname: "cdn.sanity.io" },
    ],
    // loader: "custom",
    // loaderFile: "./utils/image-loader.ts",
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

module.exports = nextConfig;
