/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/dashboard/employees',
        headers: [
          {
            key: 'Cache-Control',
            value: 's-max-age=10, must-revalidate',
          },
        ],
      },
    ]
  },
}

export default nextConfig
