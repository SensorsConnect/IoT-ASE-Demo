require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  sassOptions: {
    // includePaths: [path.join(__dirname, 'styles')]
  },
  reactStrictMode: false,
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://localelive.space/:path*',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
