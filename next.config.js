/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "dummyimage.com",
        pathname: "/**",
        port: "",
        protocol: "https",
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
