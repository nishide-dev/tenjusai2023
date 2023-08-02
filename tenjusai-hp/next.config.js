/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['flowbite.s3.amazonaws.com', 'tenjusai2023-cms.s3.ap-northeast-1.amazonaws.com'],
  },
}

module.exports = nextConfig
