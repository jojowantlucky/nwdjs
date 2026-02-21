/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/song-lists',
        destination: '/song-ideas',
        permanent: true,
      },
      {
        source: '/song-lists/:slug*',
        destination: '/song-ideas',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
