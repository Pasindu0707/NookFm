/**
 * Get the base path for images based on the environment
 * For custom domain deployment, this will be '' (empty - served from root)
 * For GitHub Pages subdirectory, this will be '/NookFm'
 * In development, this will be ''
 */
export function getImagePath(imagePath: string): string {
  // Remote images (e.g. Unsplash) are used as-is
  if (/^https?:\/\//.test(imagePath)) return imagePath

  // Remove leading slash if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath
  
  // Always try to detect basePath from URL first (works in both build and runtime)
  let basePath = ''
  
  if (typeof window !== 'undefined') {
    const pathParts = window.location.pathname.split('/').filter(Boolean)
    // Check for known basePaths
    if (pathParts[0] === 'NookFm') {
      basePath = '/' + pathParts[0]
    }
  }
  
  // Fallback to env var if URL detection didn't work (for build-time)
  if (!basePath) {
    basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  }
  
  // If basePath exists, prefix the image path
  if (basePath) {
    return `${basePath}/${cleanPath}`
  }
  
  // Otherwise return with leading slash
  return `/${cleanPath}`
}

