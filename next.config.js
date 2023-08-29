/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    output: "export",
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

module.exports = nextConfig;
