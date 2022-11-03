const withBundleAnalyzer = require("@next/bundle-analyzer")({});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

// module.exports = withBundleAnalyzer(nextConfig);
module.exports = nextConfig;
