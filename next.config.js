/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")();
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
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

module.exports = withMDX(nextConfig);
