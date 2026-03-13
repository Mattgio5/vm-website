/**
 * SEO Testing Protocol
 *
 * Run against the deployed site or local dev server:
 *   npx tsx scripts/seo-test.ts [base-url]
 *
 * Default base URL: http://localhost:3000
 *
 * Tests all SEO fixes made across commits cc2a4e9..be2ca3d:
 *   - Unique page titles & descriptions (no duplicates)
 *   - JSON-LD structured data (LocalBusiness, Service, FAQPage, BreadcrumbList)
 *   - Open Graph & Twitter card meta tags
 *   - Sitemap completeness (12 routes including /faq)
 *   - Heading hierarchy (no skipped levels)
 *   - Geo-coordinate consistency across service pages
 *   - Font preconnect hint
 *   - FAQ accordion aria-expanded attribute
 */

const BASE = process.argv[2] || "http://localhost:3000"

let passed = 0
let failed = 0
const failures: string[] = []

function assert(label: string, condition: boolean, detail?: string) {
  if (condition) {
    passed++
    console.log(`  ✅ ${label}`)
  } else {
    failed++
    const msg = detail ? `${label} — ${detail}` : label
    failures.push(msg)
    console.log(`  ❌ ${label}${detail ? ` (${detail})` : ""}`)
  }
}

async function fetchHTML(path: string): Promise<string> {
  const res = await fetch(`${BASE}${path}`)
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${path}`)
  return res.text()
}

function extractTitle(html: string): string | null {
  const m = html.match(/<title[^>]*>([^<]+)<\/title>/i)
  return m ? m[1].trim() : null
}

function extractMetaDescription(html: string): string | null {
  const m = html.match(/<meta\s+name="description"\s+content="([^"]+)"/i)
    || html.match(/<meta\s+content="([^"]+)"\s+name="description"/i)
  return m ? m[1].trim() : null
}

function extractJsonLd(html: string): any[] {
  const results: any[] = []
  const re = /<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi
  let m
  while ((m = re.exec(html)) !== null) {
    try {
      results.push(JSON.parse(m[1]))
    } catch {}
  }
  return results
}

function extractMetaProperty(html: string, property: string): string | null {
  const re = new RegExp(`<meta\\s+property="${property}"\\s+content="([^"]*)"`, "i")
  const m = html.match(re)
    || html.match(new RegExp(`<meta\\s+content="([^"]*)"\\s+property="${property}"`, "i"))
  return m ? m[1] : null
}

function extractMetaName(html: string, name: string): string | null {
  const re = new RegExp(`<meta\\s+name="${name}"\\s+content="([^"]*)"`, "i")
  const m = html.match(re)
    || html.match(new RegExp(`<meta\\s+content="([^"]*)"\\s+name="${name}"`, "i"))
  return m ? m[1] : null
}

// ─── Test Groups ────────────────────────────────────────────────

async function testUniqueMetadata() {
  console.log("\n── 1. Unique Page Titles & Descriptions ──")

  const pages: Record<string, { title: string; descSnippet: string }> = {
    "/": {
      title: "Varsity Mulching | Mulch Installation & Landscaping in Chester County, PA",
      descSnippet: "College athletes delivering premium results",
    },
    "/media": {
      title: "Varsity Mulch Blog & News | Landscaping Tips | West Chester PA",
      descSnippet: "behind-the-scenes from Varsity Mulching",
    },
    "/faq": {
      title: "FAQ | Varsity Mulching",
      descSnippet: "common questions about mulch installation",
    },
    "/about": {
      title: "About Varsity Mulching",
      descSnippet: "locally owned landscaping business",
    },
    "/careers": {
      title: "Careers | Varsity Mulching",
      descSnippet: "Join the Varsity Mulching team",
    },
    "/gallery": {
      title: "Project Gallery",
      descSnippet: "completed mulching, edging",
    },
    "/services": {
      title: "Landscaping Services",
      descSnippet: "mulch installation, landscape edging",
    },
  }

  const titles: string[] = []

  for (const [path, expected] of Object.entries(pages)) {
    const html = await fetchHTML(path)
    const title = extractTitle(html)
    const desc = extractMetaDescription(html)

    assert(
      `${path} title contains "${expected.title.slice(0, 30)}..."`,
      title !== null && title.includes(expected.title.split("|")[0].trim()),
      `got: "${title}"`,
    )
    assert(
      `${path} description contains expected snippet`,
      desc !== null && desc.includes(expected.descSnippet),
      `looking for "${expected.descSnippet}" in "${desc?.slice(0, 80)}..."`,
    )

    if (title) titles.push(title)
  }

  // Check no two pages share the same title
  const uniqueTitles = new Set(titles)
  assert(
    `All ${titles.length} page titles are unique (no duplicates)`,
    uniqueTitles.size === titles.length,
    `${titles.length} titles but only ${uniqueTitles.size} unique`,
  )
}

async function testOpenGraph() {
  console.log("\n── 2. Open Graph & Twitter Cards ──")

  const html = await fetchHTML("/")

  assert(
    "og:type present",
    extractMetaProperty(html, "og:type") !== null,
    `got: ${extractMetaProperty(html, "og:type")}`,
  )
  assert(
    "og:site_name is 'Varsity Mulching'",
    extractMetaProperty(html, "og:site_name") === "Varsity Mulching",
    `got: ${extractMetaProperty(html, "og:site_name")}`,
  )
  assert(
    "og:image present",
    extractMetaProperty(html, "og:image") !== null,
    `got: ${extractMetaProperty(html, "og:image")}`,
  )
  assert(
    "twitter:card is 'summary_large_image'",
    extractMetaName(html, "twitter:card") === "summary_large_image",
    `got: ${extractMetaName(html, "twitter:card")}`,
  )

  // Check OG tags cascade to a child page
  const mediaHtml = await fetchHTML("/media")
  assert(
    "/media inherits og:site_name",
    extractMetaProperty(mediaHtml, "og:site_name") === "Varsity Mulching",
    `got: ${extractMetaProperty(mediaHtml, "og:site_name")}`,
  )
}

async function testLocalBusinessSchema() {
  console.log("\n── 3. Homepage LocalBusiness JSON-LD ──")

  const html = await fetchHTML("/")
  const schemas = extractJsonLd(html)
  const lb = schemas.find((s) => s["@type"] === "LocalBusiness")

  assert("LocalBusiness schema exists on homepage", lb !== undefined)
  if (!lb) return

  assert("name is 'Varsity Mulching LLC'", lb.name === "Varsity Mulching LLC")
  assert("telephone is '+1-267-489-1567'", lb.telephone === "+1-267-489-1567")
  assert("email is 'info@varsitymulch.com'", lb.email === "info@varsitymulch.com")
  assert("geo.latitude is 40.3101", lb.geo?.latitude === 40.3101)
  assert("geo.longitude is -75.1290", lb.geo?.longitude === -75.129)
  assert("address.addressLocality is 'Doylestown'", lb.address?.addressLocality === "Doylestown")
  assert("founder.name is 'Matt Giordano'", lb.founder?.name === "Matt Giordano")
  assert("hasOfferCatalog has 5 services", lb.hasOfferCatalog?.itemListElement?.length === 5)
}

async function testServiceSchemas() {
  console.log("\n── 4. Service Page JSON-LD (Service + BreadcrumbList) ──")

  const servicePages = [
    { path: "/services/mulch-installation", serviceType: "Mulch Installation", price: "350-1500" },
    { path: "/services/edges", serviceType: "Landscape Edging", price: "200-800" },
    { path: "/services/weed-control", serviceType: "Weed Control", price: "150-600" },
    { path: "/services/bed-cleanup", serviceType: "Bed Cleanup", price: "250-1000" },
    { path: "/services/supplements", serviceType: "Landscape Maintenance & Add-Ons", price: "100-500" },
  ]

  for (const { path, serviceType, price } of servicePages) {
    const html = await fetchHTML(path)
    const schemas = extractJsonLd(html)

    const service = schemas.find((s) => s["@type"] === "Service")
    const breadcrumb = schemas.find((s) => s["@type"] === "BreadcrumbList")

    assert(`${path}: Service schema exists`, service !== undefined)
    if (service) {
      assert(
        `${path}: serviceType is "${serviceType}"`,
        service.serviceType === serviceType,
        `got: "${service.serviceType}"`,
      )
      assert(
        `${path}: price is "${price}"`,
        service.offers?.priceSpecification?.price === price,
        `got: "${service.offers?.priceSpecification?.price}"`,
      )
      assert(
        `${path}: geo latitude is 40.3101 (not 40.0)`,
        service.areaServed?.geoMidpoint?.latitude === 40.3101,
        `got: ${service.areaServed?.geoMidpoint?.latitude}`,
      )
      assert(
        `${path}: geo longitude is -75.1290 (not -75.6)`,
        service.areaServed?.geoMidpoint?.longitude === -75.129,
        `got: ${service.areaServed?.geoMidpoint?.longitude}`,
      )
      assert(
        `${path}: NO aggregateRating on Service`,
        service.aggregateRating === undefined,
        "aggregateRating should have been removed from Service type",
      )
      assert(
        `${path}: provider.@id references homepage business`,
        service.provider?.["@id"] === "https://www.varsitymulching.com/#business",
      )
    }

    assert(`${path}: BreadcrumbList schema exists`, breadcrumb !== undefined)
    if (breadcrumb) {
      assert(
        `${path}: breadcrumb has 3 items`,
        breadcrumb.itemListElement?.length === 3,
        `got: ${breadcrumb.itemListElement?.length}`,
      )
      assert(
        `${path}: breadcrumb[0] is Home`,
        breadcrumb.itemListElement?.[0]?.name === "Home",
      )
      assert(
        `${path}: breadcrumb[1] is Services`,
        breadcrumb.itemListElement?.[1]?.name === "Services",
      )
    }
  }
}

async function testFAQSchema() {
  console.log("\n── 5. FAQ Page JSON-LD (FAQPage) ──")

  const html = await fetchHTML("/faq")
  const schemas = extractJsonLd(html)
  const faq = schemas.find((s) => s["@type"] === "FAQPage")

  assert("FAQPage schema exists on /faq", faq !== undefined)
  if (!faq) return

  assert(
    "FAQPage has 4 questions",
    faq.mainEntity?.length === 4,
    `got: ${faq.mainEntity?.length}`,
  )

  const q1 = faq.mainEntity?.[0]
  assert(
    "First question is about remulching",
    q1?.name?.includes("remulch"),
    `got: "${q1?.name}"`,
  )
  assert(
    "First answer is non-empty",
    q1?.acceptedAnswer?.text?.length > 50,
  )

  // Verify all questions have @type: Question and answers have @type: Answer
  for (let i = 0; i < (faq.mainEntity?.length || 0); i++) {
    const q = faq.mainEntity[i]
    assert(`Question ${i + 1} @type is "Question"`, q["@type"] === "Question")
    assert(`Question ${i + 1} acceptedAnswer @type is "Answer"`, q.acceptedAnswer?.["@type"] === "Answer")
  }
}

async function testSitemap() {
  console.log("\n── 6. Sitemap Completeness ──")

  const xml = await fetchHTML("/sitemap.xml")

  const expectedRoutes = [
    "/",
    "/services",
    "/services/mulch-installation",
    "/services/edges",
    "/services/weed-control",
    "/services/bed-cleanup",
    "/services/supplements",
    "/about",
    "/gallery",
    "/careers",
    "/media",
    "/faq",
  ]

  for (const route of expectedRoutes) {
    assert(
      `sitemap includes ${route}`,
      xml.includes(route === "/" ? `<loc>${BASE}/</loc>` : route),
      route === "/" ? `looking for <loc>${BASE}/</loc>` : undefined,
    )
  }

  const urlCount = (xml.match(/<url>/g) || []).length
  assert(
    `sitemap has 12 URLs total`,
    urlCount === 12,
    `got: ${urlCount}`,
  )
}

async function testHeadingHierarchy() {
  console.log("\n── 7. Heading Hierarchy ──")

  const pagesToCheck = ["/", "/gallery", "/faq", "/about", "/services"]

  for (const path of pagesToCheck) {
    const html = await fetchHTML(path)

    // Check that h1 exists
    const h1Count = (html.match(/<h1[\s>]/g) || []).length
    assert(`${path}: has exactly 1 <h1>`, h1Count === 1, `got: ${h1Count}`)

    // Check no h3 appears without a preceding h2
    const hasH3 = html.includes("<h3")
    const hasH2 = html.includes("<h2")
    if (hasH3) {
      assert(
        `${path}: h3 tags are preceded by h2 (no skipping)`,
        hasH2,
        "found h3 without any h2",
      )
    }
  }
}

async function testFontPreconnect() {
  console.log("\n── 8. Font Preconnect ──")

  const html = await fetchHTML("/")

  assert(
    "preconnect hint for fonts.cdnfonts.com exists",
    html.includes('rel="preconnect"') && html.includes("fonts.cdnfonts.com"),
  )

  // Check preconnect appears before the stylesheet
  const preconnectPos = html.indexOf('rel="preconnect"')
  const stylesheetPos = html.indexOf("fonts.cdnfonts.com/css/superstar")
  assert(
    "preconnect appears before font stylesheet",
    preconnectPos > 0 && stylesheetPos > 0 && preconnectPos < stylesheetPos,
  )
}

async function testFAQAccessibility() {
  console.log("\n── 9. FAQ Accordion Accessibility ──")

  const html = await fetchHTML("/faq")

  assert(
    "FAQ page contains aria-expanded attribute",
    html.includes("aria-expanded"),
  )

  // Check that the FAQ sections have proper h2 headings
  const sectionTitles = ["Getting Started", "Pricing", "What to Expect", "Beyond Mulching"]
  for (const title of sectionTitles) {
    assert(
      `FAQ section "${title}" exists`,
      html.includes(title),
    )
  }
}

// ─── Runner ─────────────────────────────────────────────────────

async function main() {
  console.log(`\n🔍 SEO Test Suite — testing against ${BASE}\n`)

  try {
    await testUniqueMetadata()
    await testOpenGraph()
    await testLocalBusinessSchema()
    await testServiceSchemas()
    await testFAQSchema()
    await testSitemap()
    await testHeadingHierarchy()
    await testFontPreconnect()
    await testFAQAccessibility()
  } catch (err: any) {
    console.error(`\n💥 Fatal error: ${err.message}`)
    console.error("   Make sure the dev server is running at", BASE)
    process.exit(1)
  }

  console.log("\n" + "═".repeat(50))
  console.log(`  ✅ Passed: ${passed}`)
  console.log(`  ❌ Failed: ${failed}`)
  console.log("═".repeat(50))

  if (failures.length > 0) {
    console.log("\nFailure details:")
    failures.forEach((f) => console.log(`  • ${f}`))
  }

  console.log("")
  process.exit(failed > 0 ? 1 : 0)
}

main()
