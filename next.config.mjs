/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
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
