/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // webpack: (
    //   config,
    //   { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    // ) => {
    //   if (config.cache && !dev) {
    //     config.cache = Object.freeze({
    //       type: 'memory',
    //     })
    //   }
    //   // Important: return the modified config
    //   return config
    // },
    experimental: {
      appDir: true,
      serverComponentsExternalPackages: ["mongoose"],
    },
  }


export default nextConfig;
