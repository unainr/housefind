/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
      appDir: true,
      esmExternals: "loose",
    },
    env: {
      DB_URI: process.env.MONGO_URI,
    },
    webpack: (config) => {
      config.experiments = {
        topLevelAwait: true,
        layers: true,
      };
      return config;
    },
  }


export default nextConfig;
