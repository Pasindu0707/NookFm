/**
 * Quick verification script to check if sitemap.xml and robots.txt are generated correctly
 * Run this after: npm run build
 * Usage: node verify-seo.js
 */

const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');

console.log('🔍 Verifying SEO files...\n');

// Check if out directory exists
if (!fs.existsSync(outDir)) {
  console.error('❌ Error: "out" directory not found. Please run "npm run build" first.');
  process.exit(1);
}

// Check for sitemap.xml
const sitemapPath = path.join(outDir, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  console.log('✅ sitemap.xml found');
  console.log(`   Size: ${(sitemapContent.length / 1024).toFixed(2)} KB`);
  
  // Check if it contains expected URLs
  const expectedUrls = [
    'nookfm.com.au',
    '/about',
    '/services',
    '/contact'
  ];
  
  const missingUrls = expectedUrls.filter(url => !sitemapContent.includes(url));
  if (missingUrls.length === 0) {
    console.log('   ✅ Contains all expected URLs');
  } else {
    console.log(`   ⚠️  Missing URLs: ${missingUrls.join(', ')}`);
  }
} else {
  console.error('❌ sitemap.xml not found in out directory');
}

console.log('');

// Check for robots.txt
const robotsPath = path.join(outDir, 'robots.txt');
if (fs.existsSync(robotsPath)) {
  const robotsContent = fs.readFileSync(robotsPath, 'utf8');
  console.log('✅ robots.txt found');
  console.log(`   Size: ${(robotsContent.length / 1024).toFixed(2)} KB`);
  
  // Check for important directives
  if (robotsContent.includes('User-agent')) {
    console.log('   ✅ Contains User-agent directive');
  }
  if (robotsContent.includes('sitemap')) {
    console.log('   ✅ Contains sitemap reference');
  }
} else {
  console.error('❌ robots.txt not found in out directory');
}

console.log('\n📋 Next Steps:');
console.log('1. Deploy your site to GitHub Pages');
console.log('2. Verify files are accessible at:');
console.log('   - https://nookfm.com.au/sitemap.xml');
console.log('   - https://nookfm.com.au/robots.txt');
console.log('3. Follow the guide in GOOGLE_SEARCH_SETUP.md');

