import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import EnquiryPopup from "../Enquirypopup";

/* Section Header */
const SectionHeader = ({ badge, title }) => (
  <div className="max-w-4xl mb-12">
    <span className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold text-[#0529a0] border border-[#0529a0]/20 rounded-full bg-white">
      {badge}
    </span>

    <h2 className="text-3xl md:text-4xl font-bold text-[#0529a0] leading-tight mb-4">
      {title}
    </h2>

    <div className="w-16 h-1 bg-[#f85415] rounded"></div>
  </div>
);



// Put these above your component's return
// (QBadge, ABadge and Tick are the helpers from the previous section; reuse them if they're in the same file)
const consultChecks = [
  "Where your website currently stands vs. your competitors",
  "Which keywords have the right combination of volume and opportunity",
  "What technical issues are blocking your rankings right now",
  "What a realistic growth timeline looks like for your industry",
  "What level of investment makes sense for your goals",
];

const adsSeoPoints = [
  { title: "Immediate vs. long-term", text: "Ads provide immediate visibility while SEO builds long-term organic authority (typically 3–6 months to meaningful results)" },
  { title: "Better keyword targeting", text: "Conversion data from ads (which keywords lead to enquiries) directly strengthens your SEO keyword targeting" },
  { title: "Lower Cost Per Click", text: "SEO reduces your Cost Per Click over time as organic rankings reduce your dependence on paid traffic" },
  { title: "Full page coverage", text: "Together, they give you both the paid and organic positions your competitors are fighting for" },
];

const whyFox = [
  { title: "9+ years of Pune market experience", text: "We understand local search behaviour, local competition patterns, and local buyer intent across commercial zones from Hinjewadi to Hadapsar" },
  { title: "50+ businesses ranked", text: "Across Pune, PCMC, Nashik, and Mumbai, spanning education, healthcare, manufacturing, real estate, and e-commerce" },
  { title: "Honest timelines", text: "We tell you upfront what is achievable and when, even if the honest answer is slower than you hoped" },
  { title: "No lock-in tactics", text: "Our clients stay because results keep improving, not because a 24-month contract forces them to" },
  { title: "Integrated team", text: "SEO strategists, technical analysts, and content specialists working as one unit on your account" },
  { title: "Pune-specific insight", text: "We understand local search behaviour, local competition patterns, and local buyer intent" },
];

// Put these above your component's return
const serviceZones = [
  { area: "Hinjewadi & Kharadi", focus: "IT parks and B2B services" },
  { area: "Baner & Balewadi", focus: "Startups, fitness, and lifestyle brands" },
  { area: "Koregaon Park", focus: "Hospitality, retail, and premium services" },
  { area: "Viman Nagar", focus: "Travel, logistics, and corporate services" },
  { area: "Hadapsar & Magarpatta", focus: "Tech companies and e-commerce businesses" },
  { area: "Shivajinagar & Deccan", focus: "Education, legal, and financial services" },
  { area: "Pimpri-Chinchwad", focus: "Manufacturing and industrial businesses" },
];

const processSteps = [
  {
    phase: "Discovery & Audit",
    desc: "Full technical and content audit using Google Search Console, GA4, and Screaming Frog. Competitor analysis. Baseline data.",
  },
  {
    phase: "Keyword Mapping",
    desc: "Intent-based research. Search terms are mapped to every key page on the site.",
  },
  {
    phase: "On-Page Optimisation",
    desc: "Titles, meta, headings, content, schema, and internal link structure.",
  },
  {
    phase: "Technical SEO Fixes",
    desc: "Core Web Vitals, crawl issues, redirects, sitemap, and mobile fixes.",
  },
  {
    phase: "Authority Building",
    desc: "Quality backlinks through editorial outreach. No PBNs or link farms.",
  },
  {
    phase: "Local SEO Execution",
    desc: "Google Business Profile, citations, reviews, and geo-specific content.",
  },
  {
    phase: "Monthly Reporting",
    desc: "Ranking changes, traffic, leads, and next month's priority actions, reported via GA4 dashboards.",
  },
];


// Put these above your component's return
const comparisonRows = [
  { factor: "Keyword Strategy", typical: "Volume-focused", fox: "Conversion-focused" },
  { factor: "Strategy Basis", typical: "Search volume", fox: "Conversion probability" },
  { factor: "SEO Goal", typical: "Rankings", fox: "Leads" },
  { factor: "Maps Optimization", typical: "Minimal", fox: "Core strategy" },
  { factor: "Industry Customization", typical: "Generic", fox: "Specific" },
  { factor: "Reporting", typical: "Traffic metrics", fox: "Revenue signals" },
  { factor: "Keyword Elimination", typical: "Rare", fox: "Removes low-conversion keywords early" },
];

const mapsBehaviours = [
  'Search with "near me" intent',
  "Call directly from listings",
  "Choose based on reviews and visibility",
];

const mapsObservations = [
  "40–65% of leads come directly from Maps",
  "Top 3 listings capture the majority of interactions",
  "Review keywords to improve ranking relevance",
  "Businesses with consistent review velocity outperform static profiles",
];


// Put these above your component's return
const seoIncludes = [
  { name: "Technical SEO Audit", desc: "Finds and fixes issues blocking Google from indexing and ranking your site", to: "/technical-seo-pune" },
  { name: "Keyword & Intent Research", desc: "Maps real customer search language to your specific service pages" },
  { name: "On-Page Optimisation", desc: "Optimises titles, headings, structure, content, and internal links" },
  { name: "Content Strategy", desc: "Identifies gaps where you are losing traffic to competitors" },
  { name: "Local SEO", desc: 'Improves visibility in Pune-specific and "near me" searches', to: "/local-seo-pune" },
  { name: "Authority Building", desc: "Earns quality backlinks that signal credibility to search engines", to: "/link-building-pune" },
  { name: "Monthly Reporting", desc: "Shows ranking changes, traffic growth, and lead volume from organic search" },
];

const whoNeedsSeo = [
  "Real estate developers and brokers in Baner, Wakad, and Kharadi",
  "IT services and SaaS companies in Hinjewadi and Magarpatta",
  "Healthcare clinics and diagnostic centres across Pune",
  "Legal, CA, and financial consulting firms",
  "Educational institutions and coaching centres on Nagar Road",
  "E-commerce businesses targeting Maharashtra and beyond",
  "Restaurants, hospitality, and lifestyle brands in Koregaon Park",
];

const timeline = [
  { period: "Month 1–2", text: "Technical fixes completed. Site health score improves. Keyword map and content plan finalised." },
  { period: "Month 3", text: "Early ranking movement on lower-competition and long-tail keywords. Indexation improves." },
  { period: "Month 4–6", text: "Target keywords move onto page one. Organic traffic climbs noticeably. Inbound enquiries increase." },
  { period: "Month 7–12", text: "Competitive keywords are consistently ranking. Organic becomes a reliable, growing acquisition channel." },
];

// Put these above your component's return
const seoProblems = [
  {
    title: "Your website has technical issues Google penalises",
    signsLabel: "Signs your site has a technical SEO problem:",
    signs: [
      "Pages take more than 3 seconds to load on mobile",
      "Google Search Console shows crawl errors or excluded pages",
      "Multiple pages rank for the same keyword (cannibalisation)",
      "Your site is not showing in Google for your own brand name",
      "Product or service pages are not indexed at all",
    ],
    fix: "Full technical audit → prioritised fix list → implementation with Core Web Vitals, schema markup, sitemap structure, and mobile usability. We make your site something Google actively wants to rank.",
  },
  {
    title: "Your content does not match what people actually search for",
    signsLabel: "Signs your content has an intent mismatch:",
    signs: [
      "Traffic lands on your site but immediately bounces",
      "You rank for keywords that never convert into leads",
      "Your blog gets impressions but zero clicks from Google",
      "Service pages use internal jargon, not customer language",
      "Competitors rank for terms your pages do not even mention",
    ],
    fix: "Intent-based keyword research maps real customer language to each page. We rewrite, restructure, or create content that aligns with search intent across the awareness, consideration, and decision stages.",
  },
  {
    title: "You are invisible in Pune's local search results",
    signsLabel: "Signs you have a local SEO problem:",
    signs: [
      "You do not appear in Google's Map Pack for your service area",
      "Your Google Business Profile is incomplete or unverified",
      "Your business name, address, and phone differ across directories",
      "Competitors in Baner or Kharadi outrank you despite being newer",
      "You get no calls or walk-ins from \"near me\" searches",
    ],
    fix: "As a local SEO company in Pune, we optimise your Google Business Profile, build consistent local citations, and add geo-specific signals across your website, so you show up in the searches that lead to real enquiries.",
  },
  {
    title: "You tried SEO before and got no results",
    signsLabel: "Why previous SEO attempts often fail:",
    signs: [
      "Strategy was a generic template, not built for your market",
      "Results were evaluated too early (before months 4–6)",
      "The agency reported on activity, not outcomes",
      "Technical fixes were never implemented, only recommended",
      "Link building came from low-quality or irrelevant sites",
    ],
    fix: "Before recommending anything, we audit what was done before, what it produced, and where it fell short. Then we build a strategy grounded in your actual situation, not a standard SEO package.",
  },
];

// Put these above your component's return
const faqFactors = [
  {
    factor: "Expertise",
    agency: "Team: technical + content + links + local SEO",
    inhouse: "Single specialist with limited scope",
  },
  {
    factor: "Cost (Pune market)",
    agency: "₹10K–₹40K/month depending on scope",
    inhouse: "₹40K–₹80K/month salary + tools",
  },
  {
    factor: "Speed to start",
    agency: "Immediate audit in week one",
    inhouse: "Weeks of hiring and onboarding",
  },
  {
    factor: "Cross-industry data",
    agency: "Patterns from multiple clients and industries",
    inhouse: "Limited to your single business",
  },
  {
    factor: "Best suited for",
    agency: "SMEs and startups scaling organically",
    inhouse: "Large businesses with SEO teams",
  },
];

const timelineFactors = [
  "How competitive your industry is in Pune's market",
  "The current technical health of your website",
  "Whether you have any existing domain authority to build on",
  "How consistently the strategy is executed each month",
];

// Put these above your component's return
const aiReasons = [
  "Google's AI Overviews pull from high-authority, well-structured content, the same content that ranks well in traditional SEO",
  "Perplexity, ChatGPT Search, and Bing Copilot all cite authoritative web sources, not guesses from training data",
  "Businesses with strong SEO foundations are being surfaced inside AI summaries, not replaced by them",
  "Voice search and conversational queries still resolve to websites, just the ones that are structured for scannable answers",
];

const costFactors = [
  { title: "Industry competition", text: "A real estate firm competing citywide needs more investment than a single-location clinic targeting one area" },
  { title: "Website size", text: "More pages mean more to audit, optimise, and track" },
  { title: "Starting point", text: "A penalised or technically broken site requires more remediation before growth work can begin" },
];

const pricingRows = [
  { range: "₹8,000 – ₹18,000", type: "Local SEO (single area, Pune)" },
  { range: "₹18,000 – ₹35,000", type: "Small Business SEO (citywide)" },
  { range: "₹35,000 – ₹80,000+", type: "Competitive / E-commerce SEO" },
  { range: "Custom, speak to our team", type: "Enterprise / Multi-city SEO" },
];

// Small helpers to keep the markup short
const QBadge = () => (
  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#0529a0] text-sm font-bold text-white">Q</span>
);
const ABadge = () => (
  <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#f85415] align-middle text-xs font-bold text-white">A</span>
);
const Tick = ({ color = "bg-[#0529a0]" }) => (
  <span className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${color}`}>
    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </span>
);


const stats = [
  { value: "3.8x", label: "More Leads vs Avg SEO" },
  { value: "#1", label: "Google Maps Rankings" },
  { value: "150+", label: "Pune Businesses Ranked" },
  { value: "48h", label: "Free Audit Delivery" },
];

const searchResults = [
  {
    url: "foxaircomm.com/plumber-pune",
    title: "Best Plumber in Pune – Same Day Service | Foxaircomm Client",
    desc: "Trusted by 2,000+ Pune homeowners. Available 24/7. Book now and get a free estimate within minutes.",
    badge: "Ad",
    isAd: true,
  },
  {
    url: "foxaircomm.com/ca-firm-pune",
    title: "Top CA Firm in Pune | Tax Filing, GST & Audit Experts",
    desc: "File your taxes stress-free. 500+ businesses served in Pune & PCMC. 4.9★ on Google.",
    badge: null,
    isAd: false,
    sitelinks: ["GST Filing", "Tax Audit", "Company Registration"],
  },
  {
    url: "foxaircomm.com/interior-design",
    title: "Interior Designers in Pune – Modern & Budget Friendly",
    desc: "Transform your space with Pune's most-loved interior designers. Free consultation. Portfolio inside.",
    badge: null,
    isAd: false,
  },
];

const features = [
  { icon: "🎯", title: "Buyer-Intent Keywords", desc: "We target searches that bring inquiries, not just traffic." },
  { icon: "📍", title: "Google Maps Dominance", desc: "Own the local 3-pack for high-value service searches in Pune." },
  { icon: "🔗", title: "Authority Link Building", desc: "Earn backlinks that push your site to the top — and keep it there." },
  { icon: "📊", title: "Conversion Tracking", desc: "Know exactly which keywords generate calls and form submissions." },
];



const differentiators = [
  {
    icon: "🎯",
    title: "Buyer-Intent Keywords",
    desc: "Targets keywords that generate real inquiries — not just informational traffic that never converts.",
    stat: "4.1x",
    statLabel: "more conversions",
    color: "blue",
  },
  {
    icon: "📍",
    title: "Google Maps Dominance",
    desc: "Builds a strong presence on Google Maps to drive direct calls from high-intent local searches.",
    stat: "#1",
    statLabel: "local pack ranking",
    color: "green",
  },
  {
    icon: "📊",
    title: "Conversion Tracking",
    desc: "Tracks conversions, not just impressions and clicks — so you know exactly what drives revenue.",
    stat: "100%",
    statLabel: "transparent reporting",
    color: "orange",
  },
  {
    icon: "🧠",
    title: "Data-Driven Strategy",
    desc: "Uses real user behavior and inquiry data to refine keyword strategy and stay ahead of the curve.",
    stat: "2.8x",
    statLabel: "faster rank growth",
    color: "purple",
  },
];

const colorMap = {
  blue: { bg: "bg-blue-50", border: "border-blue-100", icon: "bg-blue-100", stat: "text-blue-700", badge: "bg-blue-100 text-blue-700" },
  green: { bg: "bg-green-50", border: "border-green-100", icon: "bg-green-100", stat: "text-green-700", badge: "bg-green-100 text-green-700" },
  orange: { bg: "bg-orange-50", border: "border-orange-100", icon: "bg-orange-100", stat: "text-orange-600", badge: "bg-orange-100 text-orange-600" },
  purple: { bg: "bg-purple-50", border: "border-purple-100", icon: "bg-purple-100", stat: "text-purple-700", badge: "bg-purple-100 text-purple-700" },
};

const vsRows = [
  { metric: "Primary Goal", typical: "More Rankings", foxaircomm: "More Leads & Revenue" },
  { metric: "Keyword Focus", typical: "High Volume Terms", foxaircomm: "Buyer-Intent Terms" },
  { metric: "Success Metric", typical: "Traffic & CTR", foxaircomm: "Calls & Form Fills" },
  { metric: "Reporting", typical: "Rankings Report", foxaircomm: "Conversion Dashboard" },
];

const beforeMetrics = [
  { label: "Monthly Traffic", value: "8,400", sub: "mostly informational" },
  { label: "Conversion Rate", value: "0.9%", sub: "barely any inquiries" },
  { label: "Qualified Leads", value: "~12/mo", sub: "low deal quality" },
  { label: "Avg Deal Value", value: "₹25K", sub: "bottom of range" },
];

const afterMetrics = [
  { label: "Monthly Traffic", value: "5,200", sub: "↓38% — intentional" },
  { label: "Conversion Rate", value: "2.2%", sub: "↑144% improvement" },
  { label: "Qualified Leads", value: "~29/mo", sub: "↑2.4x more leads" },
  { label: "Avg Deal Value", value: "₹32K", sub: "↑30% higher value" },
];

const keywords = [
  { icon: "📉", kw: "digital marketing agency Wakad pricing", intent: "Commercial", color: "orange" },
  { icon: "🚀", kw: "lead generation services Pune", intent: "Transactional", color: "blue" },
  { icon: "🎯", kw: "B2B SEO agency Pune", intent: "Transactional", color: "blue" },
  { icon: "📍", kw: "digital agency near Hinjewadi", intent: "Local", color: "green" },
];



const intentBadge = {
  orange: "bg-orange-100 text-orange-700",
  blue: "bg-blue-100 text-blue-700",
  green: "bg-green-100 text-green-700",
};


const services = [
  {
    icon: "⚙️",
    title: "Technical SEO",
    desc: "Removing technical barriers that limit rankings — site speed, crawlability, Core Web Vitals, schema markup.",
    stat: "2x",
    statLabel: "faster indexing",
    color: "blue",
    tags: ["Site Audit", "Core Web Vitals", "Schema"],
  },
  {
    icon: "📄",
    title: "Conversion-Focused Pages",
    desc: "Building pages that turn search traffic into actual business inquiries — not just visits.",
    stat: "144%",
    statLabel: "conv. rate lift",
    color: "orange",
    tags: ["Landing Pages", "CTA Strategy", "UX Copy"],
  },
  {
    icon: "📍",
    title: "Google Maps Optimization",
    desc: "Optimizing Google Maps to increase direct calls and local visibility — dominate the 3-pack.",
    stat: "#1",
    statLabel: "local pack rank",
    color: "green",
    tags: ["GMB Profile", "Local Citations", "Reviews"],
  },
  {
    icon: "🎯",
    title: "Buyer-Intent Keywords",
    desc: "Structuring keyword strategy to move users from search → inquiry — targeting buyers, not browsers.",
    stat: "4.1x",
    statLabel: "more conversions",
    color: "purple",
    tags: ["Intent Mapping", "Competitor Gap", "Long-tail"],
  },
  {
    icon: "📊",
    title: "Revenue-Linked Reporting",
    desc: "Tracking performance through lead flow, conversion rates, and revenue signals — not vanity metrics.",
    stat: "100%",
    statLabel: "transparent ROI",
    color: "teal",
    tags: ["Lead Tracking", "Call Analytics", "Dashboard"],
  },
];

const colorMapp = {
  blue: { light: "bg-blue-50", border: "border-blue-100", icon: "bg-blue-100", stat: "text-blue-700", badge: "bg-blue-100 text-blue-700", tag: "bg-blue-50 text-blue-600 border-blue-100" },
  orange: { light: "bg-orange-50", border: "border-orange-100", icon: "bg-orange-100", stat: "text-orange-600", badge: "bg-orange-100 text-orange-600", tag: "bg-orange-50 text-orange-600 border-orange-100" },
  green: { light: "bg-green-50", border: "border-green-100", icon: "bg-green-100", stat: "text-green-700", badge: "bg-green-100 text-green-700", tag: "bg-green-50 text-green-600 border-green-100" },
  purple: { light: "bg-purple-50", border: "border-purple-100", icon: "bg-purple-100", stat: "text-purple-700", badge: "bg-purple-100 text-purple-700", tag: "bg-purple-50 text-purple-600 border-purple-100" },
  teal: { light: "bg-teal-50", border: "border-teal-100", icon: "bg-teal-100", stat: "text-teal-700", badge: "bg-teal-100 text-teal-700", tag: "bg-teal-50 text-teal-600 border-teal-100" },
};


const plans = [
  {
    name: "Local SEO",
    price: "₹15K – ₹35K",
    period: "/month",
    tag: "Starter",
    tagColor: "bg-blue-50 text-blue-700",
    desc: "Perfect for small local businesses looking to dominate nearby search results.",
    features: [
      "Google Maps Optimization",
      "Local keyword targeting",
      "GMB profile management",
      "Review strategy",
      "Monthly reporting",
    ],
    accentBorder: "border-slate-200",
    accentBtn: "bg-white text-[#0529a0] border border-[#0529a0] hover:bg-blue-50",
    badge: null,
  },
  {
    name: "Mid-Level SEO",
    price: "₹35K – ₹75K",
    period: "/month",
    tag: "Most Popular",
    tagColor: "bg-[#0529a0] text-white",
    desc: "For growing businesses targeting city-wide visibility and consistent lead flow.",
    features: [
      "Everything in Local SEO",
      "Conversion page deployment",
      "Intent mapping engine",
      "Competitor gap analysis",
      "Content strategy",
      "Bi-weekly reporting",
    ],
    accentBorder: "border-[#0529a0]",
    accentBtn: "bg-[#0529a0] text-white hover:bg-blue-900",
    badge: "Most Popular",
    highlight: true,
  },
  {
    name: "Advanced SEO",
    price: "₹75K+",
    period: "/month",
    tag: "Enterprise",
    tagColor: "bg-slate-100 text-slate-700",
    desc: "Full-scale SEO for businesses targeting aggressive growth across multiple locations.",
    features: [
      "Everything in Mid-Level",
      "Multi-location SEO",
      "Advanced technical SEO",
      "Revenue gap audit",
      "Lead quality tracking",
      "Dedicated SEO manager",
      "Weekly reporting",
    ],
    accentBorder: "border-slate-200",
    accentBtn: "bg-white text-[#0529a0] border border-[#0529a0] hover:bg-blue-50",
    badge: null,
  },
];

const statss = [
  { value: "48hrs", label: "Audit delivery" },
  { value: "100%", label: "Free, no strings" },
  { value: "3x", label: "Avg. lead increase" },
];


function RegularCard({ step }) {
  return (
    <div className={`relative bg-white rounded-2xl p-6 border ${step.accent} overflow-hidden hover:shadow-md transition-shadow duration-200`}>
      <span className="absolute top-3 right-4 text-5xl font-bold text-gray-100 select-none leading-none">{step.num}</span>

      <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-4 ${step.iconBg}`}>
        {step.icon}
      </div>

      <h3 className="text-gray-900 font-semibold text-[14px] mb-1.5">{step.title}</h3>
      <p className="text-gray-500 text-[12.5px] leading-relaxed">{step.desc}</p>

      {step.bullets.length > 0 && (
        <ul className="mt-2 space-y-1">
          {step.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-[12px] text-gray-500">
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${step.bulletColor}`} />
              {b}
            </li>
          ))}
        </ul>
      )}

      {step.bars.length > 0 && (
        <div className="mt-3 space-y-1.5">
          {step.bars.map((bar) => (
            <div key={bar.label} className="flex items-center gap-2">
              <span className="text-[10px] text-gray-400 w-10 flex-shrink-0">{bar.label}</span>
              <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${bar.color}`} style={{ width: `${bar.value}%` }} />
              </div>
              <span className="text-[10px] text-gray-400 w-7 text-right">{bar.value}%</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


const steps = [
  {
    num: "01",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h0a4 4 0 014 4v2M3 17v-1a6 6 0 016-6h0M21 21H3" />
        <circle cx="12" cy="7" r="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    iconBg: "bg-blue-50 text-blue-700",
    title: "Revenue Gap Audit",
    desc: "Identifies the gap between current visibility and actual business outcomes — where rankings fail to produce leads.",
    bullets: [],
    bars: [],
    accent: "border-blue-100",
  },
  {
    num: "02",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m1.343-5.657l-.707-.707M12 21v-1" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    iconBg: "bg-emerald-50 text-emerald-700",
    title: "Intent Mapping Engine",
    desc: "Keywords scored by Lead Probability Index (LPI):",
    bullets: ["Commercial intent", "Likelihood of inquiry", "Real conversion behavior"],
    bulletColor: "bg-emerald-500",
    bars: [{ label: "LPI Score", value: 82, color: "bg-emerald-500" }],
    accent: "border-emerald-100",
  },
  {
    num: "03",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 17.5h7M17.5 14v7" />
      </svg>
    ),
    iconBg: "bg-amber-50 text-amber-700",
    title: "Conversion Page Deployment",
    desc: "Pages structured to guide action:",
    bullets: ["Service pages → inquiries", "Supporting content → intent", "Homepage → authority"],
    bulletColor: "bg-amber-500",
    bars: [],
    accent: "border-amber-100",
  },
  {
    num: "05",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13l4-4 4 4 4-6 4 4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18" />
      </svg>
    ),
    iconBg: "bg-rose-50 text-rose-700",
    title: "Tracking & Optimization",
    desc: "Measured through:",
    bullets: ["Calls & inquiries", "Conversion rates", "Lead quality signals"],
    bulletColor: "bg-rose-500",
    bars: [
      { label: "Calls", value: 74, color: "bg-rose-500" },
      { label: "Leads", value: 61, color: "bg-rose-700" },
    ],
    accent: "border-rose-100",
  },
  {
    num: "06",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    iconBg: "bg-violet-50 text-violet-700",
    title: "Local Search in Pune",
    desc: "Pune & PCMC users act fast:",
    bullets: ["\"near me\" search intent", "Direct calls from listings", "Reviews drive decisions", "Top 3 captures most leads"],
    bulletColor: "bg-violet-500",
    bars: [],
    accent: "border-violet-100",
  },
];


const problems = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="11" cy="11" r="8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 8v3m0 4h.01" />
      </svg>
    ),
    title: "Targeting the wrong keywords",
    desc: "High-volume keywords that attract browsers, not buyers — wasting your budget on traffic that never converts.",
    stat: "73%",
    statLabel: "of SEO budgets wasted on low-intent keywords",
    color: "text-rose-600",
    bg: "bg-rose-50",
    border: "border-rose-100",
    statBg: "bg-rose-50 text-rose-700",
    barColor: "bg-rose-500",
    barWidth: "73%",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13l4-4 4 4 4-6 2 2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18" />
      </svg>
    ),
    title: "Optimising for traffic, not conversions",
    desc: "Agencies report vanity metrics — sessions, impressions — while your inquiry count stays flat month after month.",
    stat: "68%",
    statLabel: "of businesses see traffic rise but leads stagnate",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
    statBg: "bg-amber-50 text-amber-700",
    barColor: "bg-amber-500",
    barWidth: "68%",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h0a4 4 0 014 4v2" />
        <circle cx="12" cy="7" r="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-1a6 6 0 016-6" />
      </svg>
    ),
    title: "No alignment with user intent",
    desc: "Content built for crawlers, not customers. Visitors land, find no relevance, and leave — dragging your rankings down further.",
    stat: "82%",
    statLabel: "of pages fail to match actual search intent",
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    statBg: "bg-violet-50 text-violet-700",
    barColor: "bg-violet-500",
    barWidth: "82%",
  },
];

// Inline SVG illustration — broken graph with warning
const BrokenSeoIllustration = () => (
  <svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Background grid lines */}
    {[60, 110, 160, 210, 260].map((y) => (
      <line key={y} x1="40" y1={y} x2="400" y2={y} stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
    ))}
    {/* Y-axis labels */}
    {["100", "75", "50", "25", "0"].map((label, i) => (
      <text key={label} x="30" y={65 + i * 50} textAnchor="end" fontSize="9" fill="#94a3b8">{label}</text>
    ))}
    {/* X-axis */}
    <line x1="40" y1="260" x2="400" y2="260" stroke="#cbd5e1" strokeWidth="1" />
    {/* X labels */}
    {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m, i) => (
      <text key={m} x={70 + i * 58} y="274" textAnchor="middle" fontSize="9" fill="#94a3b8">{m}</text>
    ))}

    {/* Traffic line (rises then drops sharply — wrong strategy) */}
    <polyline
      points="70,160 128,130 186,105 244,80 280,75 302,140 360,200"
      fill="none"
      stroke="#94a3b8"
      strokeWidth="2"
      strokeDasharray="5 3"
    />
    {/* Leads line (stays flat / low) */}
    <polyline
      points="70,235 128,232 186,230 244,228 302,226 360,224"
      fill="none"
      stroke="#ef4444"
      strokeWidth="2.5"
    />
    {/* Drop arrow */}
    <line x1="302" y1="75" x2="360" y2="200" stroke="#f87171" strokeWidth="2.5" />
    <polygon points="358,195 365,210 350,205" fill="#ef4444" />

    {/* Warning badge */}
    <rect x="290" y="48" width="110" height="36" rx="8" fill="#fff" stroke="#fecaca" strokeWidth="1.5" />
    <text x="345" y="62" textAnchor="middle" fontSize="9" fill="#ef4444" fontWeight="600">Traffic ≠ Leads</text>
    <text x="345" y="76" textAnchor="middle" fontSize="8" fill="#f87171">Rankings without revenue</text>

    {/* Legend */}
    <line x1="50" y1="20" x2="68" y2="20" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 2" />
    <text x="72" y="24" fontSize="9" fill="#64748b">Organic traffic</text>
    <line x1="150" y1="20" x2="168" y2="20" stroke="#ef4444" strokeWidth="2.5" />
    <text x="172" y="24" fontSize="9" fill="#64748b">Actual leads</text>

    {/* Dots on leads line */}
    {[[70, 235], [128, 232], [186, 230], [244, 228], [302, 226], [360, 224]].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="3.5" fill="#ef4444" stroke="#fff" strokeWidth="1.5" />
    ))}

    {/* SEO Score badge */}
    <rect x="42" y="44" width="90" height="44" rx="8" fill="#0529a0" />
    <text x="87" y="62" textAnchor="middle" fontSize="8" fill="#93c5fd" letterSpacing="1">SEO SCORE</text>
    <text x="87" y="78" textAnchor="middle" fontSize="18" fill="white" fontWeight="700">34</text>

    {/* Rank badge */}
    <rect x="42" y="100" width="90" height="30" rx="6" fill="#fef2f2" stroke="#fecaca" strokeWidth="1" />
    <text x="87" y="118" textAnchor="middle" fontSize="9" fill="#ef4444" fontWeight="600">Rank #47 — Page 5</text>
  </svg>
);


const MapsCard = () => (
  <div className="relative bg-[#042C53] rounded-2xl p-6 overflow-hidden border border-[#0C447C] flex flex-col">
    <span className="absolute top-3 right-4 text-5xl font-bold text-white/5 select-none leading-none">04</span>

    <div className="flex items-center justify-between mb-4">
      <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-blue-200">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      </div>
    </div>

    <h3 className="text-blue-100 font-semibold text-[14px] mb-1">Google Maps Optimization</h3>

    {/* Mini search mockup */}
    <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 mt-2 mb-3">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[11px] font-bold tracking-tight">
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#EA4335]">o</span>
          <span className="text-[#FBBC05]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#34A853]">l</span>
          <span className="text-[#EA4335]">e</span>
        </span>
        <div className="flex-1 bg-white/10 border border-white/15 rounded-full px-2.5 py-1">
          <span className="text-[10px] text-blue-300">AC service near me</span>
        </div>
      </div>

      {[
        { rank: "1", rankBg: "bg-blue-600", title: "Your Business", stars: "★ 4.9 · 128 reviews", highlight: true },
        { rank: "2", rankBg: "bg-blue-500/70", title: "Competitor A", stars: null, highlight: false },
        { rank: "3", rankBg: "bg-blue-400/50", title: "Competitor B", stars: null, highlight: false },
      ].map((r) => (
        <div key={r.rank} className="flex items-start gap-2 py-1 border-b border-white/10 last:border-none">
          <span className={`min-w-[18px] h-[18px] rounded text-[9px] font-semibold text-white flex items-center justify-center mt-0.5 ${r.rankBg}`}>{r.rank}</span>
          <div>
            <p className={`text-[11px] font-medium ${r.highlight ? "text-blue-200" : "text-blue-300/70"}`}>{r.title}</p>
            {r.stars && <span className="text-[9px] bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded mt-0.5 inline-block">{r.stars}</span>}
          </div>
        </div>
      ))}
    </div>

    <ul className="space-y-1 mt-auto">
      {["Category accuracy & proximity signals", "Review velocity & engagement"].map((b) => (
        <li key={b} className="flex items-start gap-2 text-[11.5px] text-blue-300">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
          {b}
        </li>
      ))}
    </ul>
  </div>
);



function SearchEngineOptimization() {
  return (

    <>

      <Helmet>
        <title>Local SEO Agency in Pune | Fox Aircomm
        </title>
        <meta name="description" content="Fox Aircomm is a local SEO agency in Pune helping businesses rank higher with Google Business Profile and Google Maps optimisation that drives real local leads." />
      </Helmet>


      <EnquiryPopup />

      <div className="overflow-hidden">

        {/* HERO */}
        <section className="bg-[#0529a0] px-4 py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.5fr_1fr]">

            {/* LEFT */}
            <div>
              <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-white">
                SEO Company · Pune &amp; PCMC
              </span>

              <h1 className="mt-6 text-3xl font-bold leading-[1.25] text-white md:text-4xl lg:text-[44px]">
                SEO Services in Pune That Drive Leads, Not Just Rankings
              </h1>
              <div className="mt-5 h-1 w-14 rounded bg-[#f85415]" />

              <p className="mt-8 text-[15px] text-white">You have a website. But if it is not appearing where your customers are actively searching, it is not working hard enough for your business.
              </p>

              <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-white">
                Fox AirComm is an SEO agency in Pune that helps 50+ businesses to rank across Pune, PCMC, and Maharashtra.
              </p>
              <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-white">
                We build sustainable organic growth for local businesses and startups with strategies tailored to your goals, your market, and measurable business outcomes.

              </p>

              {/* Checklist */}
              <ul className="mt-7 space-y-3.5">
                {[
                  "SEO strategies built around real customer search intent",
                  "Transparent reporting with clear monthly deliverables",
                  "Local SEO expertise for Pune's competitive market",
                  "Long-term organic growth beyond paid advertising",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px] text-white">
                    <span className="flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-full bg-[#f85415]">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Icon tiles + label */}
              <div className="mt-9 flex items-center gap-4">
                {[
                  // Search
                  "M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z",
                  // Map pin
                  "M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11zM12 12a2 2 0 100-4 2 2 0 000 4z",
                  // Chart
                  "M4 20V10m6 10V4m6 16v-7m4 7H2",
                  // Link
                  "M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1",
                ].map((d, i) => (
                  <span key={i} className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                      <path d={d} />
                    </svg>
                  </span>
                ))}
                <span className="max-w-[140px] text-xs font-medium leading-snug text-white">
                  Channels we optimise for Pune businesses
                </span>
              </div>

              {/* CTAs */}
              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#f85415] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
                >
                  Get a Free SEO Audit
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="https://wa.me/918879864151"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-13.4 7.8L3 21l1.3-4.4A9 9 0 1121 12z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* RIGHT: image card */}
            <div className="mx-auto w-full max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-3xl bg-white p-2 shadow-2xl">
                <img
                  src="/SEO Services_ Rank Higher, Grow Faster.png"
                  alt="SEO services in Pune by Foxaircomm"
                  className="h-auto w-full rounded-2xl object-contain"
                />
              </div>
            </div>
          </div>
        </section>


        {/* WHAT MAKES DIFFERENCE */}
        <section className="overflow-hidden bg-white px-4 py-20">
          <div className="mx-auto max-w-7xl">

            {/* Header */}
            <SectionHeader
              badge="Services"
              title="What Do SEO Services in Pune Actually Include?"
            />

            {/* ── Quick answer + table ── */}
            <h3 className="mb-6 mt-4 text-xl font-bold text-gray-900">
              Quick Answer: What is included in a professional SEO service?
            </h3>

            <div className="mb-14 overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
              <div className="grid grid-cols-1 border-b border-gray-100 bg-gray-50 md:grid-cols-[1fr_2fr]">
                <div className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  SEO Component
                </div>
                <div className="hidden border-l border-gray-100 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-400 md:block">
                  What It Does for Your Business
                </div>
              </div>

              {seoIncludes.map((row, i) => (
                <div
                  key={row.name}
                  className={`grid grid-cols-1 border-b border-gray-100 last:border-0 md:grid-cols-[1fr_2fr] ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                    }`}
                >
                  <div className="flex items-center gap-3 px-5 pb-1 pt-4 text-sm font-semibold text-[#0529a0] md:py-4">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {row.to ? (
                      <Link to={row.to} className="hover:underline">{row.name}</Link>
                    ) : (
                      row.name
                    )}
                  </div>
                  <div className="px-5 pb-4 pt-1 text-sm leading-relaxed text-gray-600 md:border-l md:border-gray-100 md:py-4">
                    {row.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* ── Who needs SEO ── */}
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Who needs SEO services in Pune right now?
            </h3>
            <p className="mb-6 max-w-2xl text-base leading-relaxed text-gray-500">
              SEO is especially valuable for businesses in these sectors:
            </p>

            <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {whoNeedsSeo.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-white p-4 transition-shadow hover:shadow-lg"
                >
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#f85415]">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-sm leading-relaxed text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            {/* Examples */}
            <div className="mb-6 space-y-3 rounded-2xl bg-blue-50 p-6">
              <p className="text-sm leading-relaxed text-gray-700">
                A real estate developer in Baner competing for "2 BHK flats in Baner" needs a different
                keyword strategy than a diagnostic centre in Viman Nagar targeting "blood test near me."
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                A coaching centre on Nagar Road competes differently from a B2B manufacturer in Pimpri-Chinchwad.
              </p>
              <p className="text-sm font-semibold leading-relaxed text-[#0529a0]">
                Foxaircomm builds keyword maps specific to your location, your buyer, and your competitive
                landscape, not a generic template applied across industries.
              </p>
            </div>

            {/* Urgency */}
            <div className="mb-14 flex items-start gap-4 rounded-2xl border border-orange-200 bg-orange-50 p-6">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-orange-100 text-xl">
                ⚡
              </div>
              <p className="text-sm leading-relaxed text-gray-700">
                <span className="font-bold text-gray-900">The urgency is real.</span> Google's AI-powered
                results (AI Overviews) now appear above traditional blue links. Businesses without strong SEO
                foundations are losing top-page visibility, and they may not notice until the gap is already
                significant.
              </p>
            </div>

            {/* ── Timeline ── */}
            <h3 className="mb-6 text-xl font-bold text-gray-900">
              What results can you expect, and by when?
            </h3>

            <div className="mb-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {timeline.map((t, i) => (
                <div
                  key={t.period}
                  className="relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-50/60 p-6 transition-shadow hover:shadow-lg"
                >
                  <span className="pointer-events-none absolute -bottom-4 -right-3 select-none text-[80px] font-black text-[#0529a0] opacity-[0.06]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="inline-block rounded-full bg-[#0529a0] px-3 py-1 text-[11px] font-semibold text-white">
                    {t.period}
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600">{t.text}</p>
                </div>
              ))}
            </div>

            {/* ── Bottom CTA ── */}
            <div className="flex flex-col items-center justify-between gap-5 rounded-2xl bg-gradient-to-r from-[#0529a0] to-[#0a1a6b] px-7 py-6 sm:flex-row">
              <p className="max-w-xl text-sm leading-relaxed text-white/80">
                Want to know where your site stands today?{" "}
                <span className="font-semibold text-white">Get a free audit and a clear plan for your Pune business.</span>
              </p>
              <Link
                to="/contact"
                className="inline-flex flex-shrink-0 items-center gap-2 whitespace-nowrap rounded-xl bg-[#f85415] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
              >
                Get Free SEO Audit
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

          </div>
        </section>

        {/* CASE STUDY */}
        <section className="overflow-hidden bg-[#F8FAFC] px-4 py-20">
          <div className="mx-auto max-w-6xl">

            <SectionHeader
              badge="Problems & Fixes"
              title="Why Aren't You Ranking, and How Do We Fix It?"
            />
            <p className="mb-12 max-w-2xl text-base leading-relaxed text-gray-500">
              Most ranking problems fall into four categories. Here are the signs to look for and how we fix each one.
            </p>

            <div className="space-y-8">
              {seoProblems.map((p, i) => (
                <div
                  key={p.title}
                  className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
                >
                  {/* Problem heading */}
                  <div className="flex items-start gap-4 border-b border-red-100 bg-red-50 px-6 py-5">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-red-100 text-sm font-bold text-red-700">
                      {i + 1}
                    </div>
                    <div>
                      <p className="mb-0.5 text-[11px] font-bold uppercase tracking-wider text-red-500">
                        Problem {i + 1}
                      </p>
                      <h3 className="text-base font-bold leading-snug text-gray-900 md:text-lg">
                        {p.title}
                      </h3>
                    </div>
                  </div>

                  <div className="grid gap-0 md:grid-cols-2">
                    {/* Signs */}
                    <div className="px-6 py-6">
                      <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
                        {p.signsLabel}
                      </p>
                      <ul className="space-y-3">
                        {p.signs.map((s) => (
                          <li key={s} className="flex items-start gap-3 text-sm leading-relaxed text-gray-700">
                            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                              <svg className="h-3 w-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </span>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Fix */}
                    <div className="border-t border-green-100 bg-green-50/60 px-6 py-6 md:border-l md:border-t-0">
                      <div className="mb-3 flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                          <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <p className="text-xs font-bold uppercase tracking-widest text-green-700">
                          What Foxaircomm does
                        </p>
                      </div>
                      <p className="text-sm leading-relaxed text-gray-700">{p.fix}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Closing callout */}
            <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl bg-gradient-to-r from-[#0529a0] to-[#0a1a6b] px-7 py-6 sm:flex-row">
              <div>
                <p className="mb-1 text-base font-semibold text-white">
                  Not sure which problem is holding your site back?
                </p>
                <p className="text-sm text-white/55">
                  A free audit shows exactly where you stand.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex flex-shrink-0 items-center gap-2 whitespace-nowrap rounded-xl bg-[#f85415] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
              >
                Get Free SEO Audit
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

          </div>
        </section>

        {/* SERVICES */}
        <section className="overflow-hidden bg-white px-4 py-20">
          <div className="mx-auto max-w-7xl">

            <SectionHeader
              badge="Comparison"
              title="Comparison: SEO Agency in Pune vs Foxaircomm"
            />

            {/* ── Comparison table ── */}
            <div className="mb-16 mt-10 overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
              <div className="grid grid-cols-3 border-b border-gray-100 bg-gray-50">
                <div className="px-4 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-400 sm:px-5">
                  Factor
                </div>
                <div className="border-l border-gray-100 px-4 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-400 sm:px-5">
                  Typical Agency
                </div>
                <div className="border-l border-blue-100 bg-blue-50 px-4 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0529a0] sm:px-5">
                  Foxaircomm
                </div>
              </div>

              {comparisonRows.map((row, i) => (
                <div
                  key={row.factor}
                  className={`grid grid-cols-3 border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                    }`}
                >
                  <div className="px-4 py-4 text-sm font-medium text-gray-700 sm:px-5">{row.factor}</div>
                  <div className="flex items-start gap-2 border-l border-gray-100 px-4 py-4 text-sm text-gray-400 sm:px-5">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {row.typical}
                  </div>
                  <div className="flex items-start gap-2 border-l border-blue-100 bg-blue-50/40 px-4 py-4 text-sm font-semibold text-[#0529a0] sm:px-5">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {row.fox}
                  </div>
                </div>
              ))}
            </div>

            {/* ── Google Maps SEO ── */}
            <h3 className="mb-3 text-2xl font-bold text-gray-900">
              Google Maps SEO in Pune: Why It Drives Faster Results
            </h3>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-gray-500">
              Local search behavior in Pune and PCMC is highly action-driven.
            </p>

            <div className="mb-8 grid gap-5 lg:grid-cols-2">
              {/* Users typically */}
              <div className="rounded-2xl border border-[#0529a0]/20 bg-blue-50 p-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#0529a0]">
                  Users typically
                </p>
                <ul className="space-y-3">
                  {mapsBehaviours.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-gray-700">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#0529a0]">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key observations */}
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
                  Key observations
                </p>
                <ul className="space-y-3">
                  {mapsObservations.map((o) => (
                    <li key={o} className="flex items-start gap-3 text-sm leading-relaxed text-gray-700">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#f85415]">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Insight + link */}
            <div className="flex flex-col items-center justify-between gap-5 rounded-2xl bg-gradient-to-r from-[#0529a0] to-[#0a1a6b] px-7 py-6 sm:flex-row">
              <div className="max-w-2xl">
                <p className="mb-2 text-base font-semibold text-white">
                  In many local service categories, businesses generate more leads from Maps than from their main website.
                </p>
                <p className="text-sm text-white/55">
                  Think clinics, contractors, financial advisors, and education centres.
                </p>
              </div>
              <Link
                to="/local-seo-pune"
                className="inline-flex flex-shrink-0 items-center gap-2 rounded-xl bg-[#f85415] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
              >
                Learn how our local SEO strategies generate direct calls and leads
                <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-slate-50 px-4 py-20">
          <div className="mx-auto max-w-7xl">

            {/* ───────── Part 1: Serving businesses ───────── */}
            <div className="mb-10">
              <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-[11px] font-medium uppercase tracking-widest text-blue-700">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11zM12 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                Coverage
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                Serving Businesses Across Pune and Beyond
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-gray-500">
                50+ Pune businesses across these zones have grown their organic visibility with Foxaircomm,
                from single-location clinics to multi-branch manufacturing firms.
              </p>
            </div>

            {/* Zone cards */}
            <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {serviceZones.map((z) => (
                <div
                  key={z.area}
                  className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 transition-shadow hover:shadow-lg"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50">
                    <svg className="h-5 w-5 text-[#0529a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11zM12 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">{z.area}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-500">{z.focus}</p>
                  </div>
                </div>
              ))}

              {/* Beyond Pune card */}
              <div className="flex items-start gap-4 rounded-2xl border border-orange-200 bg-orange-50 p-5 sm:col-span-2 lg:col-span-3">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-orange-100 text-lg">
                  🌍
                </span>
                <p className="text-sm leading-relaxed text-gray-700">
                  <span className="font-bold text-gray-900">Beyond Pune:</span> We also extend search engine
                  optimisation services to businesses in Nashik, Aurangabad, and Mumbai. These are clients who
                  want the expertise of a trusted local SEO company in Pune without paying for a large city
                  agency's overhead.
                </p>
              </div>
            </div>

            {/* Buyer behaviour */}
            <div className="mb-20 rounded-2xl bg-gradient-to-r from-[#0529a0] to-[#0a1a6b] px-7 py-6">
              <p className="mb-2 text-base font-semibold text-white">
                Pune's buyers are digitally literate and research-heavy.
              </p>
              <p className="mb-2 max-w-3xl text-sm leading-relaxed text-white/70">
                They search before they shortlist, compare before they contact, and trust search results over
                advertisements.
              </p>
              <p className="text-sm font-semibold text-white">
                It is in those early research moments that business is won or lost in Pune's market.
              </p>
            </div>

            {/* ───────── Part 2: Process ───────── */}
            <div className="mb-10">
              <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-[11px] font-medium uppercase tracking-widest text-blue-700">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Process
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                Our SEO Process: <span className="text-[#185FA5]">Transparent, Data-Driven, Results-Focused</span>
              </h2>
            </div>

            <h3 className="mb-3 text-xl font-bold text-gray-900">
              How does Foxaircomm's SEO process work?
            </h3>
            <p className="mb-8 max-w-3xl text-base leading-relaxed text-gray-500">
              As one of the experienced SEO service providers in Pune, we follow a structured seven-phase
              process built around your business goals, not a templated checklist.
            </p>

            {/* Optional process diagram */}
            <div className="mb-8 overflow-hidden rounded-2xl border border-gray-100 bg-white p-2 shadow-sm">
              <img
                src="/images/seo-process-pune.png"
                alt="Foxaircomm 7-step SEO process for Pune businesses: audit to reporting"
                className="h-auto w-full rounded-xl object-contain"
              />
            </div>

            {/* Process table */}
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
              <div className="hidden grid-cols-[80px_1fr_2fr] border-b border-gray-100 bg-gray-50 md:grid">
                <div className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-400">Step</div>
                <div className="border-l border-gray-100 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-400">Phase</div>
                <div className="border-l border-gray-100 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-400">What Happens</div>
              </div>

              {processSteps.map((s, i) => (
                <div
                  key={s.phase}
                  className={`grid grid-cols-1 border-b border-gray-100 last:border-0 md:grid-cols-[80px_1fr_2fr] ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                    }`}
                >
                  <div className="flex items-center px-5 pt-4 md:py-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0529a0] text-sm font-bold text-white">
                      {i + 1}
                    </span>
                  </div>
                  <div className="px-5 pb-1 pt-2 text-sm font-bold text-[#0529a0] md:border-l md:border-gray-100 md:py-4">
                    {s.phase}
                  </div>
                  <div className="px-5 pb-4 pt-1 text-sm leading-relaxed text-gray-600 md:border-l md:border-gray-100 md:py-4">
                    {s.desc}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>




        {/* WHY SEO FAILS */}
        <section className="bg-[#F8FAFC] px-4 py-10 md:py-16">
          <div className="mx-auto max-w-6xl">

            {/* Header */}
            <div className="mb-12">
              <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-[11px] font-medium uppercase tracking-widest text-blue-700">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.2 9a3.8 3.8 0 117.2 1.7c-.8 1.2-2.4 1.6-2.4 3.3M12 17.5h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                FAQ
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                Questions We Get Asked About{" "}
                <span className="text-[#185FA5]">SEO Services in Pune</span>
              </h2>
            </div>

            {/* ───────── Q1 ───────── */}
            <div className="mb-14">
              <h3 className="mb-5 flex items-start gap-3 text-xl font-bold leading-snug text-gray-900">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#0529a0] text-sm font-bold text-white">
                  Q
                </span>
                How long does SEO take to show results in Pune?
              </h3>

              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <p className="text-base leading-relaxed text-gray-700">
                  <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#f85415] align-middle text-xs font-bold text-white">
                    A
                  </span>
                  Most businesses see early keyword movement by month 3. Meaningful traffic growth and more
                  inbound enquiries typically appear by month 6. Competitive industries may take 8–12 months
                  for dominant page-one rankings.
                </p>

                <div className="mt-6 rounded-xl bg-blue-50 p-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#0529a0]">
                    The honest answer depends on:
                  </p>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {timelineFactors.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm leading-relaxed text-gray-700">
                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#0529a0]">
                          <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex items-start gap-4 rounded-xl border border-orange-200 bg-orange-50 p-5">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-orange-100 text-lg">
                    📈
                  </span>
                  <p className="text-sm leading-relaxed text-gray-700">
                    SEO results do not disappear when the work stops, unlike paid ads. That compounding
                    effect is what makes it one of the strongest long-term marketing investments for Pune
                    businesses.
                  </p>
                </div>
              </div>
            </div>

            {/* ───────── Q2 ───────── */}
            <div>
              <h3 className="mb-5 flex items-start gap-3 text-xl font-bold leading-snug text-gray-900">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#0529a0] text-sm font-bold text-white">
                  Q
                </span>
                What is the difference between an SEO agency and an in-house SEO hire?
              </h3>

              <p className="mb-5 text-base leading-relaxed text-gray-700">
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#f85415] align-middle text-xs font-bold text-white">
                  A
                </span>
                Both have genuine strengths. Here is how they compare:
              </p>

              {/* Comparison table */}
              <div className="mb-8 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                <div className="hidden grid-cols-3 border-b border-gray-100 bg-gray-50 md:grid">
                  <div className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Factor
                  </div>
                  <div className="border-l border-blue-100 bg-blue-50 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0529a0]">
                    SEO Agency (Foxaircomm)
                  </div>
                  <div className="border-l border-gray-100 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    In-House SEO Hire
                  </div>
                </div>

                {faqFactors.map((row, i) => (
                  <div
                    key={row.factor}
                    className={`grid grid-cols-1 border-b border-gray-100 last:border-0 md:grid-cols-3 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                      }`}
                  >
                    <div className="px-5 pb-1 pt-4 text-sm font-bold text-gray-800 md:py-4 md:font-medium">
                      {row.factor}
                    </div>
                    <div className="px-5 py-2 text-sm font-semibold leading-relaxed text-[#0529a0] md:border-l md:border-blue-100 md:bg-blue-50/40 md:py-4">
                      <span className="mb-0.5 block text-[10px] font-semibold uppercase tracking-wider text-[#0529a0]/60 md:hidden">
                        SEO Agency (Foxaircomm)
                      </span>
                      {row.agency}
                    </div>
                    <div className="px-5 pb-4 pt-2 text-sm leading-relaxed text-gray-500 md:border-l md:border-gray-100 md:py-4">
                      <span className="mb-0.5 block text-[10px] font-semibold uppercase tracking-wider text-gray-400 md:hidden">
                        In-House SEO Hire
                      </span>
                      {row.inhouse}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col items-center justify-between gap-5 rounded-2xl bg-[#0529a0] px-7 py-6 text-white sm:flex-row">
                <div>
                  <p className="mb-1 text-base font-semibold">
                    Not sure which is right for your business?
                  </p>
                  <p className="text-sm leading-relaxed text-blue-200">
                    Speak to our team, no commitment required.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex flex-shrink-0 items-center gap-2 whitespace-nowrap rounded-xl bg-[#f85415] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
                >
                  Speak to Our Team
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </section>

        <section className="bg-white px-4 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">

            {/* ───────── Q: AI and SEO ───────── */}
            <div className="mb-14">
              <h3 className="mb-5 flex items-start gap-3 text-xl font-bold leading-snug text-gray-900">
                <QBadge />
                Is SEO still worth investing in now that AI is changing search?
              </h3>
              <div className="rounded-2xl border border-gray-100 bg-[#F8FAFC] p-6 shadow-sm">
                <p className="mb-5 text-base leading-relaxed text-gray-700">
                  <ABadge />
                  <span className="font-semibold">Yes, and here is why it matters more now, not less.</span>
                </p>
                <ul className="mb-6 grid gap-3 md:grid-cols-2">
                  {aiReasons.map((r) => (
                    <li key={r} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 text-sm leading-relaxed text-gray-700">
                      <Tick />
                      {r}
                    </li>
                  ))}
                </ul>
                <div className="rounded-xl bg-[#0529a0] p-5">
                  <p className="text-sm leading-relaxed text-white/90">
                    The search engine optimisation services that matter today include optimising for how AI
                    systems extract, summarise, and cite your content. This is built into Foxaircomm's
                    approach from the start.
                  </p>
                </div>
              </div>
            </div>

            {/* ───────── Q: Best SEO company for small business ───────── */}
            <div className="mb-14">
              <h3 className="mb-5 flex items-start gap-3 text-xl font-bold leading-snug text-gray-900">
                <QBadge />
                Which is the best SEO company in Pune for small businesses?
              </h3>
              <div className="rounded-2xl border border-gray-100 bg-[#F8FAFC] p-6 shadow-sm">
                <p className="mb-4 text-base leading-relaxed text-gray-700">
                  <ABadge />
                  For small and mid-sized businesses in Pune, the right SEO partner needs Pune-specific
                  market knowledge, honest reporting, and strong local SEO capability, not a generic
                  national template.
                </p>
                <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-orange-200 bg-orange-50 p-5 sm:flex-row sm:items-center">
                  <p className="text-sm leading-relaxed text-gray-700">
                    Foxaircomm's local SEO packages start at{" "}
                    <span className="font-bold text-gray-900">₹8,000 per month</span> and cover Google
                    Business Profile optimisation, on-page SEO, keyword tracking, and monthly
                    lead-movement reporting. Start with a free audit, no commitment required.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex flex-shrink-0 items-center gap-2 whitespace-nowrap rounded-xl bg-[#f85415] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
                  >
                    Start Free Audit
                  </Link>
                </div>
              </div>
            </div>

            {/* ───────── Q: E-commerce ───────── */}
            <div className="mb-14">
              <h3 className="mb-5 flex items-start gap-3 text-xl font-bold leading-snug text-gray-900">
                <QBadge />
                Do you offer SEO services for e-commerce businesses in Pune?
              </h3>
              <div className="rounded-2xl border border-gray-100 bg-[#F8FAFC] p-6 shadow-sm">
                <p className="mb-4 text-base leading-relaxed text-gray-700">
                  <ABadge />
                  <span className="font-semibold">Yes.</span> E-commerce SEO requires a different
                  approach: higher keyword volumes, product and category page optimisation, crawlability
                  fixes for large sites, and schema markup for Google Shopping.
                </p>
                <p className="text-sm leading-relaxed text-gray-600">
                  Foxaircomm works with e-commerce businesses targeting Maharashtra buyers as well as
                  those scaling nationally.{" "}
                  <Link to="/contact" className="font-semibold text-[#0529a0] hover:underline">
                    Speak to our team about your platform and product category.
                  </Link>
                </p>
              </div>
            </div>

            {/* ───────── Q: Cost ───────── */}
            <div>
              <h3 className="mb-5 flex items-start gap-3 text-xl font-bold leading-snug text-gray-900">
                <QBadge />
                How much do SEO services in Pune cost?
              </h3>

              <p className="mb-5 text-base leading-relaxed text-gray-700">
                <ABadge />
                SEO pricing in Pune depends on three main factors:
              </p>

              <div className="mb-8 grid gap-4 md:grid-cols-3">
                {costFactors.map((f, i) => (
                  <div key={f.title} className="relative overflow-hidden rounded-2xl border border-gray-100 bg-[#F8FAFC] p-5">
                    <span className="pointer-events-none absolute -bottom-3 -right-2 select-none text-[64px] font-black leading-none text-[#0529a0] opacity-[0.06]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mb-2 text-sm font-bold text-[#0529a0]">{f.title}</p>
                    <p className="text-sm leading-relaxed text-gray-600">{f.text}</p>
                  </div>
                ))}
              </div>

              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
                Typical ranges for Pune businesses
              </p>

              <div className="mb-8 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                <div className="hidden grid-cols-2 border-b border-gray-100 bg-gray-50 md:grid">
                  <div className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Package Type
                  </div>
                  <div className="border-l border-blue-100 bg-blue-50 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0529a0]">
                    Indicative Monthly Range
                  </div>
                </div>
                {pricingRows.map((r, i) => (
                  <div
                    key={r.type}
                    className={`grid grid-cols-1 border-b border-gray-100 last:border-0 md:grid-cols-2 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                      }`}
                  >
                    <div className="px-5 pb-1 pt-4 text-sm font-medium text-gray-700 md:py-4">{r.type}</div>
                    <div className="px-5 pb-4 pt-1 text-sm font-bold text-[#0529a0] md:border-l md:border-blue-100 md:bg-blue-50/40 md:py-4">
                      {r.range}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center justify-between gap-5 rounded-2xl bg-gradient-to-r from-[#0529a0] to-[#0a1a6b] px-7 py-6 sm:flex-row">
                <div className="max-w-2xl">
                  <p className="mb-1 text-base font-semibold text-white">
                    We offer a free SEO audit so you understand your specific situation before committing to any spend.
                  </p>
                  <p className="text-sm text-white/65">
                    You leave the audit knowing exactly what your site needs and what a realistic investment looks like.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex flex-shrink-0 items-center gap-2 whitespace-nowrap rounded-xl bg-[#f85415] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
                >
                  Get Free SEO Audit
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </section>

        <>
          {/* ───────── FAQ continued ───────── */}
          <section className="bg-[#F8FAFC] px-4 py-16 md:py-20">
            <div className="mx-auto max-w-6xl">

              {/* Q: Consultation */}
              <div className="mb-14">
                <h3 className="mb-5 flex items-start gap-3 text-xl font-bold leading-snug text-gray-900">
                  <QBadge />
                  Do I need a professional SEO consultation before starting?
                </h3>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <p className="mb-5 text-base leading-relaxed text-gray-700">
                    <ABadge />
                    A professional SEO consultation helps you avoid the most expensive mistake in digital
                    marketing: investing in a strategy that is not matched to your actual situation.
                  </p>
                  <div className="mb-5 rounded-xl bg-blue-50 p-5">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#0529a0]">
                      What a proper consultation should tell you
                    </p>
                    <ul className="space-y-3">
                      {consultChecks.map((c) => (
                        <li key={c} className="flex items-start gap-3 text-sm leading-relaxed text-gray-700">
                          <Tick />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-orange-200 bg-orange-50 p-5 sm:flex-row sm:items-center">
                    <p className="text-sm leading-relaxed text-gray-700">
                      At Foxaircomm, professional SEO consultation in Pune begins with your free audit:
                      no generic advice, no sales presentation disguised as a strategy session.
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex flex-shrink-0 items-center gap-2 whitespace-nowrap rounded-xl bg-[#f85415] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
                    >
                      Book Free Audit
                    </Link>
                  </div>
                </div>
              </div>

              {/* Q: Ads + SEO */}
              <div className="mb-14">
                <h3 className="mb-5 flex items-start gap-3 text-xl font-bold leading-snug text-gray-900">
                  <QBadge />
                  Can I run Google Ads and SEO at the same time?
                </h3>
                <p className="mb-5 text-base leading-relaxed text-gray-700">
                  <ABadge />
                  <span className="font-semibold">Yes, and for most Pune businesses, running both together is smarter than choosing one.</span>{" "}
                  Here is how they complement each other:
                </p>
                <div className="mb-5 grid gap-4 sm:grid-cols-2">
                  {adsSeoPoints.map((p, i) => (
                    <div key={p.title} className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                      <span className="pointer-events-none absolute -bottom-3 -right-2 select-none text-[64px] font-black leading-none text-[#0529a0] opacity-[0.06]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="mb-2 text-sm font-bold text-[#0529a0]">{p.title}</p>
                      <p className="text-sm leading-relaxed text-gray-600">{p.text}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl bg-[#0529a0] p-5">
                  <p className="text-sm leading-relaxed text-white/90">
                    Many Foxaircomm clients run both channels, especially in the first 6 months of an SEO
                    engagement when organic rankings are still building.
                  </p>
                </div>
              </div>

              {/* Q: AI Overviews */}
              <div>
                <h3 className="mb-5 flex items-start gap-3 text-xl font-bold leading-snug text-gray-900">
                  <QBadge />
                  Will Foxaircomm's SEO help my business appear in Google AI Overviews and AI search?
                </h3>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <p className="mb-4 text-base leading-relaxed text-gray-700">
                    <ABadge />
                    <span className="font-semibold">Yes, and it is built into our content approach from the start.</span>{" "}
                    Google AI Overviews, Perplexity, and ChatGPT Search pull from pages that are
                    well-structured, factually grounded, and written in a format AI systems can extract.
                    These are the same signals that drive traditional rankings.
                  </p>
                  <p className="rounded-xl bg-blue-50 p-5 text-sm font-semibold leading-relaxed text-[#0529a0]">
                    Every content asset Foxaircomm produces is structured for both Google search and AI
                    search visibility.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* ───────── Why choose Foxaircomm ───────── */}
          <section className="bg-white px-4 py-16 md:py-20">
            <div className="mx-auto max-w-6xl">

              <div className="mb-10">
                <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-[11px] font-medium uppercase tracking-widest text-blue-700">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4" />
                  </svg>
                  Why Us
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                  Why Businesses in Pune{" "}
                  <span className="text-[#185FA5]">Choose Foxaircomm</span>
                </h2>
                <h3 className="max-w-2xl text-base font-medium leading-relaxed text-gray-500">
                  Why choose Foxaircomm as your SEO company in Pune?
                </h3>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {whyFox.map((w, i) => (
                  <div
                    key={w.title}
                    className="relative overflow-hidden rounded-2xl border border-gray-100 bg-[#F8FAFC] p-6 transition-shadow hover:shadow-lg"
                  >
                    <span className="pointer-events-none absolute -bottom-4 -right-2 select-none text-[72px] font-black leading-none text-[#0529a0] opacity-[0.06]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#0529a0]">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <h3 className="mb-2 text-base font-bold text-gray-900">{w.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{w.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl bg-gradient-to-r from-[#0529a0] to-[#0a1a6b] px-7 py-6 sm:flex-row">
                <div>
                  <p className="mb-1 text-base font-semibold text-white">Ready to see where your site stands?</p>
                  <p className="text-sm text-white/65">Start with a free audit, no commitment required.</p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex flex-shrink-0 items-center gap-2 whitespace-nowrap rounded-xl bg-[#f85415] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
                >
                  Get Free SEO Audit
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

            </div>
          </section>
        </>

        {/* CTA */}
        <section className="relative py-14 px-4 bg-[#0529a0] overflow-hidden">

          {/* Background decoration — subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Glow blobs */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400 rounded-full opacity-10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-16 w-80 h-80 bg-orange-400 rounded-full opacity-10 blur-3xl pointer-events-none" />

          <div className="relative max-w-4xl mx-auto">

            {/* Top label */}
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-100 text-[11px] font-medium tracking-widest uppercase px-4 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Free Consultation — No Commitment
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center leading-tight mb-5">
              Get Clarity on Your
              <br />
              <span className="relative inline-block mt-1">
                <span className="relative z-10">SEO Performance</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8 Q75 2 150 8 Q225 14 298 6"
                    stroke="#f85415"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-blue-200 text-center text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-10">
              We'll identify exactly what's limiting your rankings and leads — and deliver a clear fix plan within{" "}
              <span className="text-white font-semibold">48 hours</span>. No jargon, no fluff.
            </p>

            {/* CTA button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#f85415] hover:bg-orange-500 text-white font-semibold text-sm px-8 py-4 rounded-xl transition-colors duration-150 shadow-lg shadow-orange-900/30"
              >
                Book Free SEO Consultation
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium text-sm px-6 py-4 rounded-xl transition-colors duration-150"
              >
                See Case Studies
              </Link>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 mb-10" />

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
              {statss.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl md:text-3xl font-extrabold text-white mb-0.5">{s.value}</p>
                  <p className="text-blue-300 text-[11px] tracking-wide uppercase">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
              {[
                { icon: "✓", text: "No lock-in contracts" },
                { icon: "✓", text: "Results in 90 days" },
                { icon: "✓", text: "Pune & PCMC specialists" },
              ].map((b) => (
                <span key={b.text} className="flex items-center gap-1.5 text-blue-200 text-xs">
                  <span className="w-4 h-4 rounded-full bg-green-500/20 border border-green-400/30 flex items-center justify-center text-green-400 text-[9px] font-bold flex-shrink-0">
                    {b.icon}
                  </span>
                  {b.text}
                </span>
              ))}
            </div>

          </div>
        </section>

      </div>
    </>
  );
}

export default SearchEngineOptimization;