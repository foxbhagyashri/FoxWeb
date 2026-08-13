/**
 * prerender.mjs — Custom pre-rendering script for Fox Aircomm website
 * 
 * How it works:
 *  1. Starts `vite preview` on port 4173 (serves the dist/ build locally)
 *  2. Launches a headless Chromium browser via Puppeteer
 *  3. Visits every route, waits for React to finish rendering
 *  4. Saves the final HTML into the correct dist/ folder
 *     e.g. /about → dist/about/index.html
 * 
 * Run: node prerender.mjs
 * (called automatically by `npm run build` via the postbuild script)
 */

import puppeteer from 'puppeteer'
import { spawn } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST_DIR = path.join(__dirname, 'dist')
const BASE_URL = 'http://localhost:4173'
const WAIT_MS = 3500 // time (ms) to wait for React to fully render each page

// ─── ALL ROUTES from App.jsx ─────────────────────────────────────────────────
const ROUTES = [
  '/',
  '/about',
  '/contact',
  '/thank-you',
  '/career',
  '/career-form',
  '/blog',
  '/services',
  '/clients',
  '/privacy',
  '/terms',

  // Digital Marketing Services
  '/services/social-media-marketing',
  '/services/seo',
  '/services/google-adwords',

  // Bulk Marketing Services
  '/services/bulk-sms',
  '/services/rcs-sms',
  '/services/meta-whatsapp',
  '/services/voice-call',

  // Software Services
  '/services/website-design',
  '/services/ecommerce-design',
  '/services/custom-software',
  '/services/data-extractor',
  '/services/whatsapp-software',

  // Design Services
  '/services/graphics-design',
  '/services/brochure-design',
  '/services/visiting-card-design',
  '/services/logo-design',
  '/services/video-editing',

  // Other Services
  '/services/influencer-marketing',
  '/services/construction-management-software',
  '/services/custom-crm-development',
  '/services/PPC-Management-Services-in-Pune',

  // Blog Routes
  '/Blogs/BlogDetail',
  '/Blogs/Benefits-of-digital-marketing-For-Small-Businesses',
  '/Blogs/Why-Foxaircomm-Is-the-Best-Social-Media-Marketing-Agency-in-Pune',
  '/Blogs/What-Are-The-7-Types-Of-Digital-Marketing-You-Must-Know-In-2025',
  '/Blogs/Top-10-Questions-to-Ask-Before-Hiring-a-Digital-Marketing-Agency',
  '/Blogs/How-to-Do-SEO-for-website',
  '/Blogs/Advantages-Of-Digital-Marketing-For-Small-Businesses-nd-Startups',
  '/Blogs/How-Google-Ads-AI-Improves-Campaign-Performance-and-Increases-Conversions',

  // Ahmedabad Location Pages
  '/ahmedabad/web-development-service',
  '/ahmedabad/SocialMediaMarketingServiceAhemdabad',
  '/ahmedabad/GraphicDesignServicesAhemdabad',
  '/ahmedabad/SEO-Company-in-Ahmedabad',
  '/ahmedabad/PPC-Company-in-Ahmedabad',
  '/ahmedabad/RCS-Messaging-Services-in-Ahmedabad',
  '/ahmedabad/E-Commerce-Website-Development-Ahmedabad',
  '/ahmedabad/Bulk-SMS-Service-in-Ahmedabad',
  '/ahmedabad/WhatsApp-Marketing-Services-in-Ahmedabad',
]

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function startPreviewServer() {
  return new Promise((resolve, reject) => {
    console.log('🚀 Starting vite preview server...')
    const server = spawn('npx', ['vite', 'preview', '--port', '4173', '--host'], {
      cwd: __dirname,
      shell: true,
      stdio: 'pipe',
    })

    let started = false
    server.stdout.on('data', (data) => {
      const output = data.toString()
      if (!started && output.includes('4173')) {
        started = true
        console.log('✅ Preview server running on port 4173')
        resolve(server)
      }
    })

    server.stderr.on('data', (data) => {
      const output = data.toString()
      if (!started && output.includes('4173')) {
        started = true
        console.log('✅ Preview server running on port 4173')
        resolve(server)
      }
    })

    server.on('error', reject)

    // Fallback: just wait 4 seconds and assume it started
    setTimeout(() => {
      if (!started) {
        started = true
        console.log('⏳ Assuming preview server started (timeout fallback)...')
        resolve(server)
      }
    }, 4000)
  })
}

function saveHtml(route, html) {
  // "/" → dist/index.html
  // "/about" → dist/about/index.html
  const isRoot = route === '/'
  const dirPath = isRoot
    ? DIST_DIR
    : path.join(DIST_DIR, ...route.split('/').filter(Boolean))

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }

  const filePath = path.join(dirPath, 'index.html')
  fs.writeFileSync(filePath, html, 'utf-8')
  console.log(`  ✅ Saved: ${filePath.replace(DIST_DIR, 'dist')}`)
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
async function main() {
  if (!fs.existsSync(DIST_DIR)) {
    console.error('❌ dist/ folder not found! Run `vite build` first.')
    process.exit(1)
  }

  let server
  let browser

  try {
    server = await startPreviewServer()
    await sleep(2000) // give the server an extra moment to stabilize

    console.log('\n🌐 Launching headless browser...')
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })

    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 800 })

    // Suppress JS console noise from the page
    page.on('console', () => {})
    page.on('pageerror', () => {})

    console.log(`\n📄 Pre-rendering ${ROUTES.length} routes...\n`)

    for (const route of ROUTES) {
      const url = `${BASE_URL}${route}`
      try {
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 20000 })
        // Wait extra time for React + animations to finish
        await sleep(WAIT_MS)
        const html = await page.content()
        saveHtml(route, html)
      } catch (err) {
        console.warn(`  ⚠️  Failed to render ${route}: ${err.message}`)
      }
    }

    console.log('\n🎉 Pre-rendering complete!')
    console.log(`📦 Upload the contents of dist/ to GoDaddy public_html/\n`)
  } finally {
    if (browser) await browser.close()
    if (server) server.kill()
  }
}

main().catch((err) => {
  console.error('❌ Pre-render failed:', err)
  process.exit(1)
})
