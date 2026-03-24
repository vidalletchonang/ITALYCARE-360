/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Set basePath to your GitHub repo name when deploying to GitHub Pages
  // e.g. basePath: '/italycare360'
  // Leave empty if using a custom domain
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'videos.pexels.com'],
  },
}

module.exports = nextConfig
