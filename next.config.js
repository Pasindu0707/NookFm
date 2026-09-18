/** @type {import('next').NextConfig} */
// GitHub Pages requires basePath for subdirectory deployment
const repoName = 'NookFm' // Deployment repository name
// Always use basePath for production builds (GitHub Pages)
// GITHUB_ACTIONS is automatically set by GitHub Actions
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true'
const isProduction = process.env.NODE_ENV === 'production'
// Use basePath for production builds or when explicitly set
const basePath = process.env.BASE_PATH !== undefined 
  ? process.env.BASE_PATH 
  : ((isProduction || isGitHubPages) ? `/${repoName}` : '')

// Debug logging in CI
if (isGitHubPages || isProduction) {
  console.log('🔧 Next.js Config:', {
    basePath,
    assetPrefix: basePath ? `${basePath}/` : '',
    isProduction,
    isGitHubPages,
    NODE_ENV: process.env.NODE_ENV,
    GITHUB_ACTIONS: process.env.GITHUB_ACTIONS
  })
}

const nextConfig = {
  reactStrictMode: true,
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  output: 'export', // Enable static export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
    domains: ['nookfm.com.au', 'images.unsplash.com'],
    // Custom loader to handle basePath for images
    loader: 'custom',
    loaderFile: './lib/imageLoader.ts',
  },
  // Set environment variable for client-side access
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  trailingSlash: true, // Helps with GitHub Pages routing
}

module.exports = nextConfig

