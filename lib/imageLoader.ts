/**
 * Custom image loader for Next.js that handles basePath
 * This ensures images are correctly prefixed for GitHub Pages deployment
 */
export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  // Remote images (e.g. Unsplash) are used as-is
  if (/^https?:\/\//.test(src)) return src

  // Get basePath from environment variable set in next.config.js
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  
  // Remove leading slash from src if present
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src
  
  // If basePath exists, prefix the image path
  if (basePath) {
    return `${basePath}/${cleanSrc}`
  }
  
  // Otherwise return with leading slash
  return `/${cleanSrc}`
}

