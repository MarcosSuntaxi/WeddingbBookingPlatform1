/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      serverActions: true,
    },
    async rewrites() {
      return []
    },
    // Add port configuration
    devServer: {
      port: 3000,
    },
  }
  
  module.exports = nextConfig
  
  