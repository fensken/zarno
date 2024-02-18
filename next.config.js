/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["utfs.io"],
  },
  async redirects() {
    return [
      {
        source: "/mentor",
        destination: "/mentor/courses",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
