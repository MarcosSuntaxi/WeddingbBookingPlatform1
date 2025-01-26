/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  devServer: {
    port: 4000, // Cambia el puerto aquí
  },
};

module.exports = nextConfig;