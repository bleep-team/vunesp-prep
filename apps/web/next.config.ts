import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['@vunesp/ui'],
  typedRoutes: true,
}

export default nextConfig
