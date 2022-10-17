/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    remotePatterns: [
      {
        hostname: 'mdbcdn.b-cdn.net',
        pathname: '/img/Photos/Horizontal/**',
      },
    ],
  },
}
