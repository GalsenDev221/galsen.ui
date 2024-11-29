/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")();
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  async redirects() {
    return [
      {
        source: "/components",
        destination: "/public/components/buttons",
        permanent: true,
      },
    ];
  },
};

module.exports = withMDX(nextConfig);
