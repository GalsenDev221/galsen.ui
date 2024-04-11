/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/components",
        destination: "/components/buttons",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
