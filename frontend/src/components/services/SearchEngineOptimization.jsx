import React from "react";
import { Link } from "react-router-dom";

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
  blue:   { bg: "bg-blue-50",   border: "border-blue-100",   icon: "bg-blue-100",   stat: "text-blue-700",   badge: "bg-blue-100 text-blue-700" },
  green:  { bg: "bg-green-50",  border: "border-green-100",  icon: "bg-green-100",  stat: "text-green-700",  badge: "bg-green-100 text-green-700" },
  orange: { bg: "bg-orange-50", border: "border-orange-100", icon: "bg-orange-100", stat: "text-orange-600", badge: "bg-orange-100 text-orange-600" },
  purple: { bg: "bg-purple-50", border: "border-purple-100", icon: "bg-purple-100", stat: "text-purple-700", badge: "bg-purple-100 text-purple-700" },
};
 
const vsRows = [
  { metric: "Primary Goal",   typical: "More Rankings",      foxaircomm: "More Leads & Revenue" },
  { metric: "Keyword Focus",  typical: "High Volume Terms",  foxaircomm: "Buyer-Intent Terms" },
  { metric: "Success Metric", typical: "Traffic & CTR",      foxaircomm: "Calls & Form Fills" },
  { metric: "Reporting",      typical: "Rankings Report",    foxaircomm: "Conversion Dashboard" },
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
 
const timeline = [
  { day: "Day 1–15", action: "Keyword audit — replaced informational terms with buyer-intent queries", icon: "🔍" },
  { day: "Day 16–45", action: "On-page overhaul + Google Maps optimization for Wakad & Pune", icon: "🗺️" },
  { day: "Day 46–75", action: "Authority link building targeting local business directories", icon: "🔗" },
  { day: "Day 76–90", action: "Conversion tracking live — 2.4x leads confirmed in dashboard", icon: "📊" },
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
  blue:   { light: "bg-blue-50",   border: "border-blue-100",   icon: "bg-blue-100",   stat: "text-blue-700",   badge: "bg-blue-100 text-blue-700",   tag: "bg-blue-50 text-blue-600 border-blue-100" },
  orange: { light: "bg-orange-50", border: "border-orange-100", icon: "bg-orange-100", stat: "text-orange-600", badge: "bg-orange-100 text-orange-600", tag: "bg-orange-50 text-orange-600 border-orange-100" },
  green:  { light: "bg-green-50",  border: "border-green-100",  icon: "bg-green-100",  stat: "text-green-700",  badge: "bg-green-100 text-green-700",  tag: "bg-green-50 text-green-600 border-green-100" },
  purple: { light: "bg-purple-50", border: "border-purple-100", icon: "bg-purple-100", stat: "text-purple-700", badge: "bg-purple-100 text-purple-700", tag: "bg-purple-50 text-purple-600 border-purple-100" },
  teal:   { light: "bg-teal-50",   border: "border-teal-100",   icon: "bg-teal-100",   stat: "text-teal-700",   badge: "bg-teal-100 text-teal-700",   tag: "bg-teal-50 text-teal-600 border-teal-100" },
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
    {[[70,235],[128,232],[186,230],[244,228],[302,226],[360,224]].map(([cx,cy],i) => (
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
    <div className="overflow-hidden">

      {/* HERO */}
      <section
        className="relative overflow-hidden py-20 px-4"
        style={{ background: "linear-gradient(135deg, #0529a0 0%, #0a1a6b 55%, #07124f 100%)" }}
      >
        {/* Dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        {/* Glow blobs */}
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(248,84,21,0.15) 0%, transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 mx-auto max-w-6xl">

          {/* ── Top label ── */}
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/15 px-4 py-1.5 text-[11px] font-medium uppercase tracking-widest text-orange-400">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
              SEO Company · Pune & PCMC
            </span>
          </div>

          {/* ── Headline ── */}
          <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 max-w-4xl mx-auto">
            SEO That Drives{" "}
            <span className="text-[#f85415]">Leads</span>,<br />
            Not Just Rankings
          </h1>

          <p className="text-center text-white/65 text-base max-w-2xl mx-auto mb-12 leading-relaxed">
            Most SEO companies chase rankings. Foxaircomm chases revenue — targeting buyer-intent keywords, dominating Google Maps, and converting visibility into real inquiries for Pune businesses.
          </p>

          {/* ── Stat pills ── */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm"
              >
                <span className="text-lg font-bold text-[#f85415]" style={{ fontFamily: "sans-serif" }}>{s.value}</span>
                <span className="text-xs text-white/55">{s.label}</span>
              </div>
            ))}
          </div>

          {/* ── Main two-col layout ── */}
          <div className="grid lg:grid-cols-2 gap-10 items-start mb-14">

            {/* LEFT: Fake Google SERP */}
            <div className="relative">
              {/* Floating rank badge */}
              <div className="absolute -top-4 -right-3 z-20 animate-bounce" style={{ animationDuration: "3s" }}>
                <div className="flex items-center gap-1.5 rounded-xl bg-green-500 px-3 py-1.5 shadow-lg">
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 01.707.293l4 4a1 1 0 010 1.414l-4 4A1 1 0 0111 16v-2H7a1 1 0 01-1-1V7a1 1 0 011-1h4V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[11px] font-bold text-white">Ranked #1</span>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                {/* Browser chrome */}
                <div className="bg-[#202124] px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  {/* Search bar */}
                  <div className="flex-1 flex items-center gap-2 bg-[#303134] rounded-full px-4 py-1.5">
                    <svg className="w-3.5 h-3.5 text-white/40 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                    </svg>
                    <span className="text-white/70 text-xs">best SEO company in Pune</span>
                    <div className="ml-auto w-px h-3.5 bg-blue-400 animate-pulse" />
                  </div>
                </div>

                {/* SERP body */}
                <div className="bg-white p-4 space-y-4">
                  {/* Google logo strip */}
                  <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                    <div className="flex gap-0.5 text-base font-bold tracking-tight">
                      <span className="text-blue-500">G</span>
                      <span className="text-red-500">o</span>
                      <span className="text-yellow-400">o</span>
                      <span className="text-blue-500">g</span>
                      <span className="text-green-500">l</span>
                      <span className="text-red-500">e</span>
                    </div>
                    <span className="text-[10px] text-gray-400">About 4,12,000 results</span>
                  </div>

                  {/* Results */}
                  {searchResults.map((r, i) => (
                    <div key={i} className="group">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <div className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center text-[8px] font-bold text-gray-500">F</div>
                        <span className="text-[11px] text-gray-500">{r.url}</span>
                        {r.isAd && (
                          <span className="text-[9px] border border-green-700 text-green-700 rounded px-1 ml-1">Sponsored</span>
                        )}
                      </div>
                      <p className="text-sm font-medium text-blue-700 group-hover:underline leading-tight mb-1 cursor-pointer">
                        {r.title}
                      </p>
                      <p className="text-[11px] text-gray-600 leading-snug">{r.desc}</p>
                      {r.sitelinks && (
                        <div className="flex gap-2 mt-1.5 flex-wrap">
                          {r.sitelinks.map((sl) => (
                            <span key={sl} className="text-[11px] text-blue-600 border border-blue-200 rounded px-2 py-0.5 hover:bg-blue-50 cursor-pointer">
                              {sl}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Map pack teaser */}
                  <div className="rounded-xl border border-gray-200 overflow-hidden">
                    <div className="bg-gray-100 px-3 py-1.5 flex items-center gap-1.5">
                      <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[10px] font-semibold text-gray-700">Maps · Pune, Maharashtra</span>
                    </div>
                    <div className="flex">
                      {["Foxaircomm ★4.9", "Rival SEO Co ★4.2", "Other Agency ★3.8"].map((item, idx) => (
                        <div key={idx} className={`flex-1 px-2 py-2 border-r border-gray-100 last:border-0 ${idx === 0 ? "bg-blue-50" : ""}`}>
                          <p className={`text-[10px] font-semibold leading-tight ${idx === 0 ? "text-blue-700" : "text-gray-600"}`}>{item}</p>
                          {idx === 0 && <span className="text-[9px] text-green-600 font-medium">#1 Ranked</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Features + CTA */}
            <div className="flex flex-col gap-5">

              {/* Feature cards */}
              {features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                  <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-orange-500/20 flex items-center justify-center text-lg">
                    {f.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">{f.title}</p>
                    <p className="text-xs text-white/55 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}

              {/* CTA card */}
              <div className="rounded-2xl border border-orange-500/30 bg-orange-500/10 px-6 py-5">
                <p className="text-sm font-semibold text-white mb-1">Ready to rank #1 in Pune?</p>
                <p className="text-xs text-white/55 mb-4">Get a free audit showing exactly what's holding your site back — delivered in 48 hours.</p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#f85415] px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600 transition-colors"
                  >
                    Get Free SEO Audit
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>

              {/* Pune cities trust strip */}
              <div className="flex items-center gap-2 flex-wrap pt-1">
                <svg className="w-3.5 h-3.5 text-white/30 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs text-white/35">Serving: Pune · PCMC · Hinjewadi · Kothrud · Viman Nagar · Wakad</span>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* WHAT MAKES DIFFERENCE */}
      <section className="py-20 bg-white px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
 
        {/* Header */}
        <SectionHeader
          badge="Strategy"
          title="What Makes a Results-Focused SEO Company Different"
        />
        <p className="text-gray-500 text-base leading-relaxed mb-12 max-w-2xl">
          A high-performing SEO company in Pune does not measure success by rankings alone. It focuses on how search visibility translates into real business outcomes.
        </p>
 
        {/* ── 4 differentiator cards ── */}
        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {differentiators.map((item, i) => {
            const c = colorMap[item.color];
            return (
              <div
                key={i}
                className={`group relative rounded-2xl border ${c.border} ${c.bg} p-6 hover:shadow-lg transition-shadow overflow-hidden`}
              >
                {/* Subtle large number watermark */}
                <span
                  className="pointer-events-none absolute -right-3 -bottom-4 text-[80px] font-black opacity-[0.06] select-none"
                  style={{ color: "currentColor" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
 
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`w-11 h-11 flex-shrink-0 rounded-xl ${c.icon} flex items-center justify-center text-xl`}>
                    {item.icon}
                  </div>
 
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
                      <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                      <span className={`text-[11px] font-semibold rounded-full px-2.5 py-1 ${c.badge} whitespace-nowrap`}>
                        {item.stat} {item.statLabel}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
 
        {/* ── VS comparison table ── */}
        <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm mb-10">
          {/* Table header */}
          <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-100">
            <div className="px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">Metric</div>
            <div className="px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wider border-l border-gray-100">
              Typical SEO Agency
            </div>
            <div className="px-5 py-3.5 text-xs font-semibold text-[#0529a0] uppercase tracking-wider border-l border-blue-100 bg-blue-50">
              Foxaircomm
            </div>
          </div>
 
          {/* Rows */}
          {vsRows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
            >
              <div className="px-5 py-4 text-sm font-medium text-gray-700">{row.metric}</div>
              <div className="px-5 py-4 text-sm text-gray-400 border-l border-gray-100 flex items-center gap-2">
                <svg className="w-4 h-4 text-red-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                {row.typical}
              </div>
              <div className="px-5 py-4 text-sm font-semibold text-[#0529a0] border-l border-blue-100 bg-blue-50/40 flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {row.foxaircomm}
              </div>
            </div>
          ))}
        </div>
 
        {/* ── Bottom callout ── */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0529a0] to-[#0a1a6b] px-7 py-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-white/80 text-sm leading-relaxed max-w-xl">
            This is why businesses comparing SEO companies in Pune or evaluating a reliable SEO agency in PCMC increasingly prioritize{" "}
            <span className="text-white font-semibold">lead generation over traffic metrics</span>.
          </p>
          <a
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl bg-[#f85415] hover:bg-orange-600 transition-colors px-6 py-3 text-sm font-semibold text-white whitespace-nowrap"
          >
            Get Free SEO Audit
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
 
      </div>
    </section>

      {/* CASE STUDY */}
     <section className="py-20 bg-[#F8FAFC] px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
 
        <SectionHeader
          badge="Case Study"
          title="Proof That Intent-Based SEO Works"
        />
        <p className="text-gray-500 text-base leading-relaxed mb-12 max-w-2xl">
          A service-based business in Wakad had steady traffic — but zero qualified leads. Here's exactly what changed in 90 days.
        </p>
 
        {/* ── Context strip ── */}
        <div className="flex flex-wrap gap-3 mb-10">
          {[
            { icon: "📍", label: "Location: Wakad, Pune" },
            { icon: "💼", label: "B2B Digital Services" },
            { icon: "💰", label: "Deal Size: ₹25K–₹80K" },
            { icon: "⏱️", label: "Timeline: 90 Days" },
          ].map((t) => (
            <div key={t.label} className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-600 shadow-sm">
              <span>{t.icon}</span> {t.label}
            </div>
          ))}
        </div>
 
        {/* ── Problem statement ── */}
        <div className="rounded-2xl border border-red-100 bg-red-50 px-6 py-5 mb-8 flex gap-4 items-start">
          <div className="w-9 h-9 flex-shrink-0 rounded-xl bg-red-100 flex items-center justify-center text-lg">⚠️</div>
          <div>
            <p className="text-sm font-bold text-red-700 mb-1">The Problem</p>
            <p className="text-sm text-red-600 leading-relaxed">
              Their website attracted visitors through informational keywords but failed to generate inquiries. Traffic looked healthy on the surface — the underlying intent was completely wrong.
            </p>
          </div>
        </div>
 
        {/* ── Keywords targeted ── */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 mb-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">🔍 Buyer-Intent Keywords Targeted</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {keywords.map((k, i) => (
              <div key={i} className="flex items-center justify-between gap-3 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="text-base flex-shrink-0">{k.icon}</span>
                  <span className="text-sm text-gray-700 font-medium truncate">"{k.kw}"</span>
                </div>
                <span className={`text-[10px] font-semibold rounded-full px-2.5 py-1 flex-shrink-0 ${intentBadge[k.color]}`}>
                  {k.intent}
                </span>
              </div>
            ))}
          </div>
        </div>
 
        {/* ── Before / After metrics ── */}
        <div className="grid md:grid-cols-2 gap-5 mb-8">
          {/* Before */}
          <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-gray-100 bg-gray-50">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Before — Month 0</span>
            </div>
            <div className="grid grid-cols-2 gap-px bg-gray-100">
              {beforeMetrics.map((m, i) => (
                <div key={i} className="bg-white px-5 py-4">
                  <p className="text-xl font-bold text-gray-400">{m.value}</p>
                  <p className="text-xs font-semibold text-gray-700 mt-0.5">{m.label}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">{m.sub}</p>
                </div>
              ))}
            </div>
          </div>
 
          {/* After */}
          <div className="rounded-2xl border border-green-200 bg-white overflow-hidden shadow-sm">
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-green-100 bg-green-50">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-semibold text-green-700 uppercase tracking-wider">After — Day 90</span>
            </div>
            <div className="grid grid-cols-2 gap-px bg-green-100">
              {afterMetrics.map((m, i) => (
                <div key={i} className="bg-white px-5 py-4">
                  <p className="text-xl font-bold text-[#0529a0]">{m.value}</p>
                  <p className="text-xs font-semibold text-gray-700 mt-0.5">{m.label}</p>
                  <p className="text-[11px] text-green-600 font-medium mt-0.5">{m.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
 
        {/* ── Visual bar comparison ── */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">📊 90-Day Impact at a Glance</p>
          <div className="space-y-4">
            {[
              { label: "Conversion Rate", before: 18, after: 44, bVal: "0.9%", aVal: "2.2%", color: "bg-blue-500" },
              { label: "Qualified Leads / mo", before: 24, after: 58, bVal: "~12", aVal: "~29", color: "bg-green-500" },
              { label: "Avg Deal Value", before: 31, after: 40, bVal: "₹25K", aVal: "₹32K", color: "bg-orange-500" },
            ].map((bar, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-semibold text-gray-600">{bar.label}</span>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-gray-400">{bar.bVal}</span>
                    <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <span className="font-bold text-[#0529a0]">{bar.aVal}</span>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-gray-400 w-10 flex-shrink-0">Before</span>
                    <div className="flex-1 h-2 rounded-full bg-gray-100">
                      <div className="h-2 rounded-full bg-gray-300" style={{ width: `${bar.before}%` }} />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-green-600 font-medium w-10 flex-shrink-0">After</span>
                    <div className="flex-1 h-2 rounded-full bg-gray-100">
                      <div className={`h-2 rounded-full ${bar.color}`} style={{ width: `${bar.after}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
 
        {/* ── 90-day timeline ── */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">🗓️ 90-Day Execution Timeline</p>
          <div className="relative pl-6 border-l-2 border-dashed border-gray-200 space-y-6">
            {timeline.map((t, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[29px] w-4 h-4 rounded-full border-2 border-[#0529a0] bg-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0529a0]" />
                </div>
                <p className="text-[11px] font-bold text-[#0529a0] uppercase tracking-wider mb-0.5">{t.day}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{t.action}</p>
              </div>
            ))}
          </div>
        </div>
 
        {/* ── Closing callout ── */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0529a0] to-[#0a1a6b] px-7 py-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-white font-semibold text-base mb-1">SEO works when it aligns with buying behavior — not browsing behavior.</p>
            <p className="text-white/55 text-sm">Results may vary by industry and competition, but the pattern remains consistent.</p>
          </div>
          <a
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl bg-[#f85415] hover:bg-orange-600 transition-colors px-6 py-3 text-sm font-semibold text-white whitespace-nowrap"
          >
            Get Free SEO Audit
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
 
      </div>
    </section>

      {/* SERVICES */}
     <section className="py-20 bg-white px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
 
        <SectionHeader
          badge="Services"
          title="SEO Services in Pune — What You Actually Get"
        />
 
        {/* Intro */}
        <div className="flex flex-col sm:flex-row gap-6 mb-12 max-w-3xl">
          <div className="flex-1 rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Most Agencies</p>
            <p className="text-sm text-gray-500 leading-relaxed">Describe SEO as a list of <span className="line-through text-gray-400">activities</span> — rankings, backlinks, and reports that don't connect to revenue.</p>
          </div>
          <div className="hidden sm:flex items-center text-2xl text-gray-300">→</div>
          <div className="flex-1 rounded-2xl border border-[#0529a0]/20 bg-blue-50 px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#0529a0] mb-1">Foxaircomm</p>
            <p className="text-sm text-[#0529a0]/80 leading-relaxed">Defines SEO by <span className="font-semibold text-[#0529a0]">outcomes</span> — leads, calls, and revenue that come directly from search.</p>
          </div>
        </div>
 
        {/* Service cards grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mb-10">
          {services.map((s, i) => {
            const c = colorMapp[s.color];
            const isLast = i === services.length - 1;
            return (
              <div
                key={i}
                className={`relative group rounded-2xl border ${c.border} ${c.light} p-6 hover:shadow-lg transition-all duration-300 overflow-hidden ${isLast ? "md:col-span-2 xl:col-span-1" : ""}`}
              >
                {/* Watermark number */}
                <span className="pointer-events-none select-none absolute -right-2 -bottom-3 text-[72px] font-black opacity-[0.05] leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
 
                {/* Top row */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className={`w-11 h-11 flex-shrink-0 rounded-xl ${c.icon} flex items-center justify-center text-xl`}>
                    {s.icon}
                  </div>
                  <span className={`text-[11px] font-bold rounded-full px-3 py-1 ${c.badge} whitespace-nowrap`}>
                    {s.stat} {s.statLabel}
                  </span>
                </div>
 
                {/* Title + desc */}
                <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.desc}</p>
 
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span key={tag} className={`text-[11px] font-medium border rounded-full px-2.5 py-1 ${c.tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
 
                {/* Hover arrow */}
                <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
 
        {/* Bottom callout */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0529a0] to-[#0a1a6b] px-7 py-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-white font-semibold text-base mb-1">
              Especially relevant for enterprises where SEO must align with measurable ROI.
            </p>
            <p className="text-white/55 text-sm">
              Every service above is tracked back to lead flow, conversion rates, and revenue signals.
            </p>
          </div>
          <a
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl bg-[#f85415] hover:bg-orange-600 transition-colors px-6 py-3 text-sm font-semibold text-white whitespace-nowrap"
          >
            Get Free SEO Audit
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
 
      </div>
    </section>

      {/* PROCESS */}
    <section className="py-20 bg-slate-50 px-4">
      <div className="max-w-7xl mx-auto">
 
        {/* Header */}
        <div className="mb-10">
          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-[11px] font-medium tracking-widest uppercase px-3 py-1.5 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3">
            How Our SEO Strategy Works
            <br />
            <span className="text-[#185FA5]">Foxaircomm Lead-First SEO Framework™</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-xl leading-relaxed">
            SEO execution follows a structured system designed for lead generation — fewer keywords, higher intent, real inquiries.
          </p>
        </div>
 
        {/* Stat pills */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {[
            { text: "40–65% of leads from Maps", accent: "text-blue-700 bg-blue-50 border-blue-100" },
            { text: "Top 3 listings = majority of clicks", accent: "text-emerald-700 bg-emerald-50 border-emerald-100" },
            { text: "📍 Pune & PCMC focused", accent: "text-violet-700 bg-violet-50 border-violet-100" },
          ].map((s) => (
            <span key={s.text} className={`text-xs font-medium px-3.5 py-1.5 rounded-full border ${s.accent}`}>
              {s.text}
            </span>
          ))}
        </div>
 
        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
 
          {/* Regular cards */}
          {steps.slice(0, 3).map((step) => (
            <RegularCard key={step.num} step={step} />
          ))}
 
          {/* Maps card spans full row on lg, occupies one on md */}
          <MapsCard />
 
          {steps.slice(3).map((step) => (
            <RegularCard key={step.num} step={step} />
          ))}
        </div>
 
      </div>
    </section>



    
      {/* PRICING */}
   <section className="py-20 bg-[#F8FAFC] px-4">
      <div className="max-w-6xl mx-auto">
 
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-[11px] font-medium tracking-widest uppercase px-3 py-1.5 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l-4-4 4-4M15 10h6M15 14h6" />
            </svg>
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            SEO Pricing in <span className="text-[#0529a0]">Pune</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">
            Transparent, performance-focused pricing. Every plan is built around generating real leads — not just rankings.
          </p>
        </div>
 
        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl border-2 ${plan.accentBorder} overflow-hidden flex flex-col transition-shadow duration-200 hover:shadow-lg ${plan.highlight ? "shadow-xl md:-mt-3 md:mb-3" : ""}`}
            >
              {/* Top accent bar */}
              {plan.highlight && (
                <div className="h-1 w-full bg-[#0529a0]" />
              )}
 
              {/* Badge */}
              {plan.badge && (
                <div className="absolute top-4 right-4">
                  <span className="bg-[#0529a0] text-white text-[10px] font-semibold px-2.5 py-1 rounded-full tracking-wide">
                    {plan.badge}
                  </span>
                </div>
              )}
 
              <div className="p-6 flex flex-col flex-1">
 
                {/* Tag */}
                <span className={`self-start text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-md mb-3 ${plan.tagColor}`}>
                  {plan.tag}
                </span>
 
                {/* Plan name */}
                <h3 className="text-gray-900 font-bold text-lg mb-1">{plan.name}</h3>
 
                {/* Price */}
                <div className="flex items-end gap-1 mb-3">
                  <span className="text-3xl font-extrabold text-[#0529a0] leading-none">{plan.price}</span>
                  <span className="text-sm text-gray-400 mb-0.5">{plan.period}</span>
                </div>
 
                {/* Divider */}
                <div className="border-t border-dashed border-gray-200 mb-4" />
 
                {/* Desc */}
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{plan.desc}</p>
 
                {/* Features */}
                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#0529a0] flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
 
                {/* CTA */}
                <button className={`w-full py-3 rounded-xl text-sm font-semibold transition-colors duration-150 ${plan.accentBtn}`}>
                  Get Started
                </button>
 
              </div>
            </div>
          ))}
        </div>
 
        {/* Bottom note */}
        <p className="text-center text-xs text-gray-400 mt-8">
          All plans include a free{" "}
          <span className="text-[#0529a0] font-medium">Revenue Gap Audit</span> before onboarding.
          No lock-in contracts.
        </p>
 
      </div>
    </section>
      {/* WHY SEO FAILS */}
     <section className="py-20 bg-[#F8FAFC] px-4">
      <div className="max-w-6xl mx-auto">
 
        {/* Header */}
        <div className="mb-12">
          <span className="inline-flex items-center gap-1.5 bg-rose-50 text-rose-700 text-[11px] font-medium tracking-widest uppercase px-3 py-1.5 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            </svg>
            Problem
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3">
            Why Your SEO Is{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-rose-600">Not Generating</span>
              <span className="absolute bottom-1 left-0 w-full h-2 bg-rose-100 -z-0 rounded" />
            </span>{" "}
            Leads
          </h2>
          <p className="text-gray-500 text-sm max-w-xl leading-relaxed">
            Most SEO agencies optimise for rankings. We optimise for revenue. Here's where traditional SEO breaks down.
          </p>
        </div>
 
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
 
          {/* Left — illustration */}
          <div className="relative">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 mb-4 pb-3 border-b border-slate-100">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <div className="ml-3 flex-1 bg-slate-100 rounded-full px-3 py-1">
                  <span className="text-[10px] text-slate-400">analytics.example.com/seo-report</span>
                </div>
              </div>
              <BrokenSeoIllustration />
              {/* Bottom stats row */}
              <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-slate-100">
                {[
                  { label: "Organic Sessions", val: "12,400", delta: "+18%", bad: false },
                  { label: "Leads Generated", val: "3", delta: "-67%", bad: true },
                  { label: "Conversion Rate", val: "0.02%", delta: "-91%", bad: true },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-[10px] text-slate-400 mb-0.5">{s.label}</p>
                    <p className="text-sm font-bold text-gray-800">{s.val}</p>
                    <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full ${s.bad ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"}`}>
                      {s.delta}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Floating label */}
            <div className="absolute -top-3 -right-3 bg-rose-600 text-white text-[10px] font-semibold px-3 py-1.5 rounded-xl shadow-md">
              Common SEO Failure Pattern
            </div>
          </div>
 
          {/* Right — problem cards */}
          <div className="space-y-4">
            {problems.map((p, i) => (
              <div
                key={i}
                className={`bg-white border ${p.border} rounded-2xl p-5 hover:shadow-md transition-shadow duration-200`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${p.bg} ${p.color}`}>
                    {p.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-[14px] mb-1">{p.title}</h3>
                    <p className="text-gray-500 text-[12.5px] leading-relaxed mb-3">{p.desc}</p>
                    {/* Stat bar */}
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${p.barColor}`} style={{ width: p.barWidth }} />
                      </div>
                      <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md flex-shrink-0 ${p.statBg}`}>
                        {p.stat}
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-1">{p.statLabel}</p>
                  </div>
                </div>
              </div>
            ))}
 
            {/* CTA nudge */}
            <div className="bg-[#0529a0] rounded-2xl p-5 text-white">
              <p className="text-sm font-semibold mb-1">Sound familiar?</p>
              <p className="text-blue-200 text-xs leading-relaxed mb-3">
                Our Lead-First SEO Framework is built specifically to fix these gaps — starting with a free Revenue Gap Audit.
              </p>
              <button className="bg-white text-[#0529a0] text-xs font-semibold px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                Get Free Audit →
              </button>
            </div>
          </div>
 
        </div>
      </div>
    </section>

      {/* CTA */}
      <section className="relative py-24 px-4 bg-[#0529a0] overflow-hidden">
 
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
  );
}

export default SearchEngineOptimization;