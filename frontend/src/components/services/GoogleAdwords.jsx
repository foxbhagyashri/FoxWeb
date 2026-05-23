import { useState } from "react";
import { Link } from "react-router-dom";
import { LineChart, Search, Layout, Rocket, Target, RefreshCw, Factory, Briefcase, ShoppingCart, ArrowRight, Zap, TrendingUp, Check, XCircle, X, Plus, Minus } from "lucide-react";

const SectionHeader = ({ badge, title, description }) => (

  <div className="max-w-4xl mb-12">
    <span className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold text-[#0529a0] border border-[#0529a0]/20 rounded-full bg-white">
      {badge}
    </span>

    <h2 className="text-3xl md:text-4xl font-bold text-[#0529a0] leading-tight mb-4">
      {title}
    </h2>

    {description && (
      <p className="text-gray-600 text-lg leading-relaxed">
        {description}
      </p>
    )}

    <div className="w-16 h-1 bg-[#f85415] rounded mt-5"></div>
  </div>
);

const faqData = [
  {
    question: "How quickly can Google Ads generate leads?",
    answer:
      "Google Ads campaigns can begin generating qualified leads within days when campaigns, landing pages, and conversion tracking are structured correctly.",
  },
  {
    question: "Which businesses benefit most from Google Ads?",
    answer:
      "Service businesses, healthcare, education, manufacturing companies, local brands, and B2B companies benefit significantly from Google Ads lead generation campaigns.",
  },
  {
    question: "How much should businesses spend on Google Ads in Pune?",
    answer:
      "Budgets depend on industry competition and lead goals. Most businesses start between ₹15K and ₹50K per month excluding ad spend.",
  },
  {
    question: "What matters more in Google Ads — clicks or conversions?",
    answer:
      "Conversions matter more. High click volume without inquiries only increases ad spend without generating revenue.",
  },
];



const focusItems = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    iconBg: "bg-blue-50 text-[#0529a0]",
    title: "Lead Generation Campaigns",
    desc: "Google Search Ads structured to generate calls, inquiries, and qualified business leads.",
    tag: "Search Ads",
    tagColor: "bg-blue-50 text-blue-700",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="11" cy="11" r="8" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
      </svg>
    ),
    iconBg: "bg-orange-50 text-orange-600",
    title: "Buyer Intent Keywords",
    desc: "Campaigns focused on high-converting keywords instead of low-quality, wasted traffic.",
    tag: "Keyword Strategy",
    tagColor: "bg-orange-50 text-orange-600",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    iconBg: "bg-emerald-50 text-emerald-600",
    title: "Conversion Tracking",
    desc: "Every campaign measured using CPL, conversion rates, and ROI signals — no vanity metrics.",
    tag: "Analytics",
    tagColor: "bg-emerald-50 text-emerald-700",
  },
];

// Inline SVG — Google Ads performance dashboard mockup
const AdsDashboard = () => (
  <svg viewBox="0 0 380 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Stat cards row */}
    {[
      { x: 10, label: "Impressions", val: "48,200", delta: "+22%", good: true, barH: 60, color: "#3b82f6" },
      { x: 130, label: "Clicks", val: "3,840", delta: "+18%", good: true, barH: 44, color: "#f97316" },
      { x: 250, label: "Leads", val: "312", delta: "+41%", good: true, barH: 76, color: "#10b981" },
    ].map((s) => (
      <g key={s.label}>
        <rect x={s.x} y="10" width="110" height="70" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
        <text x={s.x + 10} y="28" fontSize="8" fill="#94a3b8" letterSpacing="0.5">{s.label.toUpperCase()}</text>
        <text x={s.x + 10} y="48" fontSize="16" fontWeight="700" fill="#0f172a">{s.val}</text>
        <rect x={s.x + 10} y="56" width="34" height="14" rx="7" fill={s.good ? "#dcfce7" : "#fee2e2"} />
        <text x={s.x + 27} y="67" textAnchor="middle" fontSize="8" fill={s.good ? "#16a34a" : "#dc2626"} fontWeight="600">{s.delta}</text>
      </g>
    ))}

    {/* Bar chart area */}
    <rect x="10" y="92" width="360" height="120" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
    <text x="22" y="108" fontSize="9" fill="#64748b" fontWeight="600">Campaign Performance — Last 30 Days</text>
    {/* Grid lines */}
    {[125, 145, 165, 185].map((y) => (
      <line key={y} x1="40" y1={y} x2="360" y2={y} stroke="#f1f5f9" strokeWidth="1" />
    ))}
    {/* Bars */}
    {[
      { x: 55, h: 50, label: "Week 1", color: "#bfdbfe" },
      { x: 105, h: 64, label: "Week 2", color: "#93c5fd" },
      { x: 155, h: 58, label: "Week 3", color: "#60a5fa" },
      { x: 205, h: 76, label: "Week 4", color: "#3b82f6" },
      { x: 255, h: 88, label: "Week 5", color: "#1d4ed8" },
      { x: 305, h: 96, label: "Week 6", color: "#0529a0" },
    ].map((b) => (
      <g key={b.label}>
        <rect x={b.x} y={195 - b.h} width="32" height={b.h} rx="4" fill={b.color} />
        <text x={b.x + 16} y="208" textAnchor="middle" fontSize="7.5" fill="#94a3b8">{b.label}</text>
      </g>
    ))}
    {/* Trend line overlay */}
    <polyline
      points="71,145 121,131 171,137 221,119 271,107 321,99"
      fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="4 2"
    />
    {[
      [71, 145], [121, 131], [171, 137], [221, 119], [271, 107], [321, 99]
    ].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="3" fill="#f97316" stroke="white" strokeWidth="1.5" />
    ))}

    {/* CPL / ROI badges */}
    <rect x="10" y="224" width="170" height="28" rx="8" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" />
    <text x="22" y="236" fontSize="8" fill="#15803d" fontWeight="600">CPL</text>
    <text x="50" y="236" fontSize="8" fill="#166534">₹380 avg. cost per lead</text>
    <text x="22" y="246" fontSize="8" fill="#15803d" fontWeight="600">ROI</text>
    <text x="50" y="246" fontSize="8" fill="#166534">4.2× return on ad spend</text>

    <rect x="196" y="224" width="174" height="28" rx="8" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" />
    <text x="208" y="236" fontSize="8" fill="#1e40af" fontWeight="600">Conv. Rate</text>
    <text x="260" y="236" fontSize="8" fill="#1e3a8a">8.12% (industry avg 2.4%)</text>
    <text x="208" y="246" fontSize="8" fill="#1e40af" fontWeight="600">Quality Score</text>
    <text x="260" y="246" fontSize="8" fill="#1e3a8a">9/10 keywords</text>
  </svg>
);


const strategies = [
  {
    num: "01",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="11" cy="11" r="8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
      </svg>
    ),
    iconBg: "bg-blue-50 text-[#0529a0]",
    accentBar: "bg-[#0529a0]",
    tag: "Keyword Strategy",
    tagColor: "bg-blue-50 text-blue-700 border-blue-100",
    title: "Targets high-intent keywords",
    desc: "We go beyond search volume — every keyword is evaluated for buyer intent, so your ads reach people actively looking to hire or purchase.",
    highlight: "actual inquiries, not just clicks",
    stat: "3.8×",
    statLabel: "higher lead rate vs generic keywords",
    barColor: "bg-blue-500",
    barWidth: "78%",
  },
  {
    num: "02",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9h18M9 21V9" />
      </svg>
    ),
    iconBg: "bg-orange-50 text-orange-600",
    accentBar: "bg-orange-500",
    tag: "Landing Pages",
    tagColor: "bg-orange-50 text-orange-700 border-orange-100",
    title: "Builds landing pages for conversions",
    desc: "Ad clicks land on pages designed around buyer psychology — clear CTAs, trust signals, and zero distractions between visitor and inquiry.",
    highlight: "aligned with buyer intent",
    stat: "5.2×",
    statLabel: "conversion lift vs generic homepages",
    barColor: "bg-orange-500",
    barWidth: "84%",
  },
  {
    num: "03",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    iconBg: "bg-emerald-50 text-emerald-600",
    accentBar: "bg-emerald-500",
    tag: "ROI Tracking",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
    title: "Tracks CPL and inquiry quality",
    desc: "We measure what actually matters — cost per lead, inquiry quality, and conversion rate. Impressions and CTR don't pay your bills.",
    highlight: "instead of vanity metrics",
    stat: "₹380",
    statLabel: "avg. cost per qualified lead",
    barColor: "bg-emerald-500",
    barWidth: "91%",
  },
  {
    num: "04",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    iconBg: "bg-violet-50 text-violet-600",
    accentBar: "bg-violet-500",
    tag: "Continuous Optimisation",
    tagColor: "bg-violet-50 text-violet-700 border-violet-100",
    title: "Optimises using real conversion data",
    desc: "Campaigns evolve weekly using actual search term reports, negative keyword pruning, and bid adjustments — not set-and-forget automation.",
    highlight: "continuously optimized campaigns",
    stat: "+41%",
    statLabel: "avg. lead increase after 90 days",
    barColor: "bg-violet-500",
    barWidth: "88%",
  },
];


const faqs = [
  {
    question: "How long does it take to see results from Google Ads?",
    answer: "Most campaigns start generating leads within the first 2–4 weeks. However, optimal performance typically takes 60–90 days as we gather data, refine targeting, and continuously improve your cost per lead.",
  },
  {
    question: "What is the minimum budget required to run Google Ads in Pune?",
    answer: "We recommend a minimum ad spend of ₹15,000/month to generate meaningful data and leads. Below this threshold, campaigns often lack the volume needed to optimise effectively.",
  },
  {
    question: "Do you manage the ad spend, or do we pay Google directly?",
    answer: "You pay Google directly for your ad spend. Our fee covers strategy, setup, management, and optimisation. This keeps things fully transparent — you always know exactly where your money is going.",
  },
  {
    question: "What makes Foxaircomm different from other Google Ads agencies?",
    answer: "We focus on lead quality, not just traffic. Every campaign is built around your CPL (cost per lead) target, with weekly optimisations, conversion tracking, and detailed reporting on actual business outcomes — not vanity metrics.",
  },
  {
    question: "Do you provide landing pages as part of the service?",
    answer: "Yes. We audit your existing landing pages and either optimise them or build conversion-focused pages designed specifically to turn ad clicks into qualified inquiries.",
  },
  {
    question: "Can we pause or stop the campaigns anytime?",
    answer: "Absolutely. There are no lock-in contracts. You can pause, adjust, or stop campaigns at any time. We believe in earning your business every month through results.",
  },
];


// Comparison table SVG
const ComparisonVisual = () => (
  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
    {/* Header */}
    <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200">
      <div className="p-3 text-xs font-semibold text-slate-500 col-span-1">What we measure</div>
      <div className="p-3 text-xs font-semibold text-[#0529a0] text-center border-l border-slate-200 bg-blue-50">
        <span className="inline-flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
          Foxaircomm
        </span>
      </div>
      <div className="p-3 text-xs font-semibold text-slate-400 text-center border-l border-slate-200">Typical Agency</div>
    </div>
    {[
      ["Cost Per Lead (CPL)", true, false],
      ["Buyer Intent Keywords", true, false],
      ["Inquiry Quality Score", true, false],
      ["Conversion-focused Pages", true, false],
      ["Vanity metrics (CTR, impressions)", false, true],
      ["Set-and-forget automation", false, true],
    ].map(([label, foxaircomm, typical], i) => (
      <div key={i} className={`grid grid-cols-3 border-b border-slate-100 last:border-none ${i % 2 === 0 ? "" : "bg-slate-50/50"}`}>
        <div className="p-3 text-xs text-slate-600 flex items-center">{label}</div>
        <div className="p-3 flex items-center justify-center border-l border-slate-100 bg-blue-50/30">
          {foxaircomm
            ? <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center"><svg className="w-3 h-3 text-green-600" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></span>
            : <span className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center"><svg className="w-3 h-3 text-red-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg></span>
          }
        </div>
        <div className="p-3 flex items-center justify-center border-l border-slate-100">
          {typical
            ? <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center"><svg className="w-3 h-3 text-green-600" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></span>
            : <span className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center"><svg className="w-3 h-3 text-red-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg></span>
          }
        </div>
      </div>
    ))}
  </div>
);




const beforeItems = [
  { icon: "💸", text: "Service business in Pune with increasing ad spend but no ROI visibility" },
  { icon: "📉", text: "High click volume but very few qualified inquiries from campaigns" },
  { icon: "🚫", text: "Generic landing pages causing poor conversion rates" },
  { icon: "🎯", text: "Campaigns optimised for traffic instead of lead quality" },
];

const afterItems = [
  { icon: "✅", text: "Buyer-intent keyword targeting implemented across all ad groups" },
  { icon: "✅", text: "Dedicated conversion-focused landing pages created per service" },
  { icon: "✅", text: "Call-focused ad extensions added to capture direct inquiries" },
  { icon: "✅", text: "Retargeting campaigns launched for warm audiences" },
];

const results = [
  { val: "48%", label: "Lower Cost Per Lead", sub: "from ₹820 → ₹426", color: "text-[#f85415]", bg: "bg-orange-50", border: "border-orange-100", barColor: "bg-orange-500", barWidth: "48%" },
  { val: "3.1×", label: "More Qualified Leads", sub: "month-over-month", color: "text-[#0529a0]", bg: "bg-blue-50", border: "border-blue-100", barColor: "bg-blue-500", barWidth: "82%" },
  { val: "8.1%", label: "Conversion Rate", sub: "vs 2.4% industry avg", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100", barColor: "bg-emerald-500", barWidth: "74%" },
  { val: "32%", label: "Higher Deal Value", sub: "better qualified leads", color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-100", barColor: "bg-violet-500", barWidth: "60%" },
];

// Inline SVG: Google Ads before/after chart
const BeforeAfterChart = () => (
  <svg viewBox="0 0 380 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Grid */}
    {[50, 85, 120, 155, 190].map((y) => (
      <line key={y} x1="40" y1={y} x2="370" y2={y} stroke="#f1f5f9" strokeWidth="1" />
    ))}
    <line x1="40" y1="190" x2="370" y2="190" stroke="#e2e8f0" strokeWidth="1" />

    {/* Y labels */}
    {[["100", 54], ["75", 89], ["50", 124], ["25", 159], ["0", 194]].map(([l, y]) => (
      <text key={l} x="33" y={y} textAnchor="end" fontSize="8" fill="#94a3b8">{l}</text>
    ))}

    {/* X labels */}
    {["Jan", "Feb", "Mar", "Apr (Strategy Shift)", "May", "Jun"].map((m, i) => (
      <text key={m} x={60 + i * 58} y="205" textAnchor="middle" fontSize={i === 3 ? "7" : "8"} fill={i >= 3 ? "#0529a0" : "#94a3b8"} fontWeight={i >= 3 ? "600" : "400"}>{m}</text>
    ))}

    {/* Strategy shift vertical line */}
    <line x1="234" y1="42" x2="234" y2="190" stroke="#f85415" strokeWidth="1.5" strokeDasharray="4 3" />
    <rect x="236" y="42" width="80" height="18" rx="4" fill="#fff7ed" stroke="#fed7aa" strokeWidth="1" />
    <text x="276" y="54" textAnchor="middle" fontSize="8" fill="#ea580c" fontWeight="600">Strategy Shift</text>

    {/* Leads line — before flat, after rising */}
    <polyline
      points="60,158 118,155 176,152 234,150 292,110 350,72"
      fill="none" stroke="#0529a0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    />
    {/* CPL line — before high, after dropping */}
    <polyline
      points="60,75 118,78 176,80 234,82 292,118 350,145"
      fill="none" stroke="#f85415" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 2"
    />

    {/* Dots */}
    {[[60, 158], [118, 155], [176, 152], [234, 150], [292, 110], [350, 72]].map(([cx, cy], i) => (
      <circle key={`l${i}`} cx={cx} cy={cy} r={i >= 3 ? 4 : 3} fill={i >= 3 ? "#0529a0" : "#93c5fd"} stroke="white" strokeWidth="1.5" />
    ))}
    {[[60, 75], [118, 78], [176, 80], [234, 82], [292, 118], [350, 145]].map(([cx, cy], i) => (
      <circle key={`c${i}`} cx={cx} cy={cy} r={i >= 3 ? 4 : 3} fill={i >= 3 ? "#f85415" : "#fca5a5"} stroke="white" strokeWidth="1.5" />
    ))}

    {/* Legend */}
    <line x1="44" y1="26" x2="60" y2="26" stroke="#0529a0" strokeWidth="2.5" />
    <circle cx="52" cy="26" r="3" fill="#0529a0" stroke="white" strokeWidth="1" />
    <text x="64" y="30" fontSize="8.5" fill="#334155">Qualified Leads</text>
    <line x1="150" y1="26" x2="166" y2="26" stroke="#f85415" strokeWidth="2.5" strokeDasharray="4 2" />
    <circle cx="158" cy="26" r="3" fill="#f85415" stroke="white" strokeWidth="1" />
    <text x="170" y="30" fontSize="8.5" fill="#334155">Cost Per Lead (CPL)</text>

    {/* End result labels */}
    <rect x="352" y="62" width="24" height="14" rx="4" fill="#dbeafe" />
    <text x="364" y="72" textAnchor="middle" fontSize="8" fill="#1d4ed8" fontWeight="700">+3.1×</text>
    <rect x="352" y="135" width="28" height="14" rx="4" fill="#fef3c7" />
    <text x="366" y="145" textAnchor="middle" fontSize="8" fill="#b45309" fontWeight="700">-48%</text>
  </svg>
);


const services = [
  {
    num: "01",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="11" cy="11" r="8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
      </svg>
    ),
    iconBg: "bg-blue-50 text-[#0529a0]",
    accentBar: "bg-[#0529a0]",
    tag: "Search",
    tagColor: "bg-blue-50 text-blue-700 border-blue-100",
    title: "Google Search Ads",
    desc: "High-converting keyword campaigns that put your business in front of buyers actively searching for your services.",
    highlight: "Intent-based targeting",
    highlightColor: "text-[#0529a0]",
    stat: "8.1%",
    statLabel: "avg. conversion rate",
    barColor: "bg-[#0529a0]",
    barWidth: "81%",
  },
  {
    num: "02",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9h18M9 21V9" />
      </svg>
    ),
    iconBg: "bg-orange-50 text-orange-600",
    accentBar: "bg-orange-500",
    tag: "Landing Pages",
    tagColor: "bg-orange-50 text-orange-700 border-orange-100",
    title: "Landing Page Optimisation",
    desc: "Conversion-focused pages designed to turn ad clicks into inquiries — clear CTAs, trust signals, zero distractions.",
    highlight: "5.2× higher conversions",
    highlightColor: "text-orange-600",
    stat: "5.2×",
    statLabel: "vs generic homepages",
    barColor: "bg-orange-500",
    barWidth: "87%",
  },
  {
    num: "03",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    iconBg: "bg-violet-50 text-violet-600",
    accentBar: "bg-violet-500",
    tag: "Remarketing",
    tagColor: "bg-violet-50 text-violet-700 border-violet-100",
    title: "Display & Remarketing",
    desc: "Re-engage warm audiences across Google's network — stay visible to visitors who didn't convert on the first visit.",
    highlight: "Warm audience retargeting",
    highlightColor: "text-violet-600",
    stat: "3.4×",
    statLabel: "lower CPL vs cold traffic",
    barColor: "bg-violet-500",
    barWidth: "68%",
  },
  {
    num: "04",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    iconBg: "bg-emerald-50 text-emerald-600",
    accentBar: "bg-emerald-500",
    tag: "Local Calls",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
    title: "Call-Focused Campaigns",
    desc: "Campaigns built for local service businesses that need direct phone inquiries — with call extensions and call-only ads.",
    highlight: "Direct call generation",
    highlightColor: "text-emerald-600",
    stat: "62%",
    statLabel: "of leads via direct calls",
    barColor: "bg-emerald-500",
    barWidth: "62%",
  },
  {
    num: "05",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    iconBg: "bg-rose-50 text-rose-600",
    accentBar: "bg-rose-500",
    tag: "Analytics",
    tagColor: "bg-rose-50 text-rose-700 border-rose-100",
    title: "Conversion Tracking & ROI Reporting",
    desc: "Full visibility into CPL, conversion rate, and lead quality — no vanity metrics, just the numbers that affect your revenue.",
    highlight: "CPL-first measurement",
    highlightColor: "text-rose-600",
    stat: "₹380",
    statLabel: "avg. cost per lead",
    barColor: "bg-rose-500",
    barWidth: "91%",
  },
  {
    num: "06",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    iconBg: "bg-amber-50 text-amber-600",
    accentBar: "bg-amber-500",
    tag: "Optimisation",
    tagColor: "bg-amber-50 text-amber-700 border-amber-100",
    title: "Continuous Campaign Optimisation",
    desc: "Weekly bid adjustments, negative keyword pruning, and A/B testing based on real search term and conversion data.",
    highlight: "+41% leads in 90 days",
    highlightColor: "text-amber-600",
    stat: "+41%",
    statLabel: "avg. lead increase, 90 days",
    barColor: "bg-amber-500",
    barWidth: "74%",
  },
];




function GoogleAdwords() {

 const [openIndex, setOpenIndex] = useState(null);
 
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);


  return (
    <div className="overflow-hidden bg-white">

      {/* HERO */}
      <section className="relative bg-[#0529a0] text-white py-24 px-4 overflow-hidden">

        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Glow blobs */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-400 rounded-full opacity-10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500 rounded-full opacity-10 blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* ── Left column ── */}
            <div>
              {/* Badge */}
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-100 text-[11px] font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Google Ads Agency in Pune
              </span>

              {/* Heading */}
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                Google Ads That Generate{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#f85415]">Leads</span>
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 100 8" preserveAspectRatio="none">
                    <path d="M2 6 Q25 1 50 5 Q75 9 98 4" stroke="rgba(248,84,21,0.4)" strokeWidth="3" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
                ,{" "}Not Just Clicks
              </h1>

              <p className="text-blue-200 mb-5 leading-relaxed text-sm md:text-base">
                If your Google Ads campaigns are getting clicks but not qualified inquiries, your budget is already being wasted. Most businesses lose money not because Google Ads doesn't work — but because campaigns are structured around traffic instead of conversions.
              </p>
              <p className="text-blue-200 mb-8 leading-relaxed text-sm md:text-base">
                At <span className="text-white font-semibold">Foxaircomm</span>, every campaign is built around buyer intent, conversion-focused landing pages, and measurable lead generation — so your ad spend translates into real business growth.
              </p>

              {/* Trust pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["No wasted ad spend", "CPL-focused", "48hr audit delivery"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5 bg-white/10 border border-white/15 text-blue-100 text-xs px-3 py-1.5 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {t}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#f85415] hover:bg-orange-500 transition-colors duration-150 text-white font-semibold text-sm px-7 py-4 rounded-xl shadow-lg shadow-orange-900/30"
                >
                  Get Free Google Ads Audit
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm px-6 py-4 rounded-xl transition-colors duration-150"
                >
                  Book Consultation
                </Link>
              </div>

              {/* Stat row */}
              <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/10">
                {[
                  { val: "4.2×", label: "Avg ROAS" },
                  { val: "8.1%", label: "Conv. rate" },
                  { val: "₹380", label: "Avg CPL" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-extrabold text-white">{s.val}</p>
                    <p className="text-blue-300 text-[11px] uppercase tracking-wide">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right column ── */}
            <div className="space-y-5">

              {/* Dashboard card */}
              <div className="bg-white rounded-2xl p-5 shadow-2xl shadow-blue-900/40">
                <div className="flex items-center gap-2 mb-3 pb-3 border-b border-slate-100">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <span className="ml-2 flex-1 bg-slate-100 rounded-full px-3 py-1 text-[10px] text-slate-400">
                    ads.google.com / campaigns / foxaircomm-client
                  </span>
                  <span className="text-[9px] bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">● Live</span>
                </div>
                <AdsDashboard />
              </div>

              {/* Focus cards */}
              <div className="space-y-3">
                {focusItems.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl p-4 flex items-start gap-4 transition-colors duration-150"
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${item.iconBg}`}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <h4 className="text-white font-semibold text-[13.5px]">{item.title}</h4>
                        <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${item.tagColor}`}>{item.tag}</span>
                      </div>
                      <p className="text-blue-200 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="py-20 px-4 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="max-w-3xl mb-14">
            <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-[11px] font-medium tracking-widest uppercase px-3 py-1.5 rounded-full mb-4 border border-blue-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Strategy
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              What Separates a{" "}
              <span className="text-[#0529a0]">Results-Focused</span>{" "}
              Google Ads Agency From the Rest
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Most agencies focus on clicks and impressions. Very few focus on qualified leads and revenue.
            </p>
          </div>

          {/* Main grid */}
          <div className="grid lg:grid-cols-5 gap-8 items-start">

            {/* Strategy cards — 3 cols */}
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
              {strategies.map((s) => (
                <div
                  key={s.num}
                  className="relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 overflow-hidden group flex flex-col"
                >
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-6 right-6 h-0.5 ${s.accentBar} rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-200`} />

                  {/* Ghost number */}
                  <span className="absolute top-3 right-4 text-5xl font-extrabold text-slate-100 select-none leading-none group-hover:text-slate-200 transition-colors">{s.num}</span>

                  {/* Icon + tag */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${s.iconBg}`}>
                      {s.icon}
                    </div>
                    <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${s.tagColor}`}>{s.tag}</span>
                  </div>

                  <h3 className="font-bold text-gray-900 text-[14px] mb-2 leading-snug">{s.title}</h3>
                  <p className="text-gray-500 text-[12.5px] leading-relaxed flex-1">{s.desc}</p>

                  {/* Stat + bar */}
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="text-xl font-extrabold text-gray-900">{s.stat}</span>
                      <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${s.barColor}`} style={{ width: s.barWidth }} />
                      </div>
                    </div>
                    <p className="text-[10.5px] text-slate-400">{s.statLabel}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right column — comparison + CTA */}
            <div className="lg:col-span-2 space-y-5 lg:sticky lg:top-8">

              {/* Comparison table */}
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">How we compare</p>
                <ComparisonVisual />
              </div>

              {/* CTA card */}
              <div className="bg-[#0529a0] rounded-2xl p-6 text-white">
                <p className="text-sm font-bold mb-1">Ready to stop burning ad budget?</p>
                <p className="text-blue-200 text-xs leading-relaxed mb-4">
                  Get a free Google Ads audit — we'll show exactly where your current campaigns are leaking money and how to fix it.
                </p>
                <div className="flex flex-col gap-2">
                  <button className="w-full bg-[#f85415] hover:bg-orange-500 text-white text-xs font-semibold py-3 rounded-xl transition-colors duration-150 flex items-center justify-center gap-2">
                    Get Free Audit
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <button className="w-full bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-semibold py-3 rounded-xl transition-colors duration-150">
                    Book Consultation
                  </button>
                </div>
                <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-white/10">
                  {["48hr delivery", "No lock-in", "Free"].map((t) => (
                    <span key={t} className="text-[10px] text-blue-300 flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 h-2.5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="py-20 bg-[#F8FAFC] px-4">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-12">
            <span className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-700 text-[11px] font-medium tracking-widest uppercase px-3 py-1.5 rounded-full mb-4 border border-orange-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Case Study
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-3">
              Proof That Intent-Based Google Ads{" "}
              <span className="text-[#0529a0]">Generate Real Leads</span>
            </h2>
            <p className="text-gray-500 text-sm max-w-xl leading-relaxed">
              A Pune-based service business. 90 days. One strategy shift. Here's exactly what happened.
            </p>
          </div>

          {/* Main card */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">

            {/* Top — before/after + chart */}
            <div className="grid lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">

              {/* Before/After columns */}
              <div className="p-8 grid sm:grid-cols-2 gap-6">

                {/* Before */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-sm font-bold text-gray-900">The Situation Before</span>
                  </div>
                  <ul className="space-y-3">
                    {beforeItems.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 bg-red-50/60 border border-red-100 rounded-xl px-3 py-2.5">
                        <span className="text-base flex-shrink-0 mt-0.5">{item.icon}</span>
                        <span className="text-xs text-gray-600 leading-relaxed">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* After */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-sm font-bold text-gray-900">What Changed</span>
                  </div>
                  <ul className="space-y-3">
                    {afterItems.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 bg-green-50/60 border border-green-100 rounded-xl px-3 py-2.5">
                        <span className="text-base flex-shrink-0 mt-0.5">{item.icon}</span>
                        <span className="text-xs text-gray-600 leading-relaxed">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Chart */}
              <div className="p-8 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Performance chart — 6 months</p>
                  <span className="text-[10px] bg-blue-50 text-blue-700 border border-blue-100 px-2.5 py-1 rounded-full font-medium">Pune Client · 2024</span>
                </div>
                {/* Browser chrome */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden">
                  <div className="flex items-center gap-1.5 px-3 py-2 border-b border-slate-200 bg-white">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    <span className="w-2 h-2 rounded-full bg-yellow-400" />
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="flex-1 bg-slate-100 rounded-full px-2 py-0.5 text-[9px] text-slate-400 ml-2">ads.google.com / overview</span>
                    <span className="text-[9px] bg-green-50 text-green-700 border border-green-200 px-1.5 py-0.5 rounded-full font-medium">● Active</span>
                  </div>
                  <div className="p-3">
                    <BeforeAfterChart />
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-100 mx-8" />

            {/* Results */}
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-slate-100" />
                <span className="text-xs font-bold text-gray-900 uppercase tracking-widest px-3 py-1.5 bg-orange-50 border border-orange-100 rounded-full text-orange-700">Results Within 90 Days</span>
                <div className="h-px flex-1 bg-slate-100" />
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {results.map((r, i) => (
                  <div key={i} className={`rounded-2xl border ${r.border} ${r.bg} p-5 text-center flex flex-col items-center`}>
                    <span className={`text-3xl font-extrabold ${r.color} mb-1`}>{r.val}</span>
                    <p className="text-gray-700 text-xs font-semibold mb-0.5">{r.label}</p>
                    <p className="text-gray-400 text-[10.5px] mb-3">{r.sub}</p>
                    <div className="w-full h-1.5 bg-white/70 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${r.barColor}`} style={{ width: r.barWidth }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom CTA strip */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0529a0] rounded-2xl px-6 py-5">
                <div>
                  <p className="text-white font-bold text-sm">Want results like this for your business?</p>
                  <p className="text-blue-200 text-xs mt-0.5">Free Google Ads audit — delivered in 48 hours. No commitment.</p>
                </div>
                <button className="flex-shrink-0 inline-flex items-center gap-2 bg-[#f85415] hover:bg-orange-500 transition-colors text-white text-xs font-semibold px-6 py-3 rounded-xl">
                  Get Free Audit
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-[11px] font-medium tracking-widest uppercase px-3 py-1.5 rounded-full mb-4 border border-blue-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h10" />
                </svg>
                Services
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-3">
                Google Ads Services in Pune —{" "}
                <span className="text-[#0529a0]">What You Actually Get</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Every service is built around one goal: generating qualified leads, not just ad activity.
              </p>
            </div>

            {/* Mini stat strip */}
            <div className="flex gap-6 flex-shrink-0">
              {[
                { val: "6", label: "Core services" },
                { val: "90d", label: "Avg. results" },
                { val: "4.2×", label: "Avg. ROAS" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-extrabold text-[#0529a0]">{s.val}</p>
                  <p className="text-[11px] text-gray-400 uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.num}
                className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 overflow-hidden flex flex-col"
              >
                {/* Top hover accent */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 ${s.accentBar} opacity-0 group-hover:opacity-100 transition-opacity duration-200`} />

                {/* Ghost number */}
                <span className="absolute top-3 right-4 text-5xl font-extrabold text-slate-100 select-none leading-none group-hover:text-slate-200 transition-colors">{s.num}</span>

                {/* Icon + tag row */}
                <div className="flex items-center gap-2.5 mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${s.iconBg}`}>
                    {s.icon}
                  </div>
                  <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${s.tagColor}`}>{s.tag}</span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-gray-900 text-[15px] mb-2 leading-snug">{s.title}</h3>

                {/* Desc */}
                <p className="text-gray-500 text-[12.5px] leading-relaxed flex-1 mb-4">{s.desc}</p>

                {/* Highlight pill */}
                <div className="mb-4">
                  <span className={`inline-flex items-center gap-1 text-[11px] font-semibold ${s.highlightColor}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    {s.highlight}
                  </span>
                </div>

                {/* Stat + bar */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-xl font-extrabold text-gray-900">{s.stat}</span>
                    <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${s.barColor} transition-all duration-500`} style={{ width: s.barWidth }} />
                    </div>
                  </div>
                  <p className="text-[10.5px] text-slate-400">{s.statLabel}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA banner */}
          <div className="mt-12 bg-[#0529a0] rounded-3xl px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white font-bold text-lg mb-1">Not sure which service fits your business?</p>
              <p className="text-blue-200 text-sm leading-relaxed max-w-xl">
                Get a free Google Ads audit — we'll assess your current campaigns and recommend the right mix of services to maximise leads.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <button className="inline-flex items-center gap-2 bg-[#f85415] hover:bg-orange-500 transition-colors text-white text-sm font-semibold px-7 py-3.5 rounded-xl whitespace-nowrap">
                Get Free Audit
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white text-sm font-semibold px-6 py-3.5 rounded-xl whitespace-nowrap transition-colors">
                Book Consultation
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-[#0a0f2e] via-[#0d1547] to-[#0a0f2e]">

        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="mb-12">
            <span className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
              Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-3">
              How Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Google Ads Strategy
              </span>{" "}
              Works
            </h2>
            <p className="text-slate-400 text-base max-w-lg">
              A step-by-step framework built to generate real leads, not just clicks.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

            {/* Step 01 */}
            <div className="group relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 overflow-hidden hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/[0.07] transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-indigo-500 to-violet-500" />
              <div className="flex items-center gap-2 mb-5">
                <span className="w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-300 text-xs font-bold flex items-center justify-center">01</span>
                <span className="text-indigo-300 text-xs font-bold uppercase tracking-widest">Step One</span>
              </div>
              <LineChart className="w-6 h-6 text-indigo-300 mb-4" />
              <h3 className="text-white font-bold text-base mb-2">Revenue Gap Audit</h3>
              <p className="text-slate-400 text-sm leading-relaxed">We identify what is limiting your campaign performance and wasting budget.</p>
            </div>

            {/* Step 02 */}
            <div className="group relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 overflow-hidden hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.07] transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-blue-500 to-cyan-400" />
              <div className="flex items-center gap-2 mb-5">
                <span className="w-6 h-6 rounded-md bg-blue-500/20 text-blue-300 text-xs font-bold flex items-center justify-center">02</span>
                <span className="text-blue-300 text-xs font-bold uppercase tracking-widest">Step Two</span>
              </div>
              <Search className="w-6 h-6 text-blue-300 mb-4" />
              <h3 className="text-white font-bold text-base mb-2">Keyword Intent Mapping</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Keywords are selected based on buyer intent and conversion potential.</p>
            </div>

            {/* Step 03 */}
            <div className="group relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 overflow-hidden hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.07] transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-emerald-500 to-blue-400" />
              <div className="flex items-center gap-2 mb-5">
                <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-bold flex items-center justify-center">03</span>
                <span className="text-emerald-300 text-xs font-bold uppercase tracking-widest">Step Three</span>
              </div>
              <Layout className="w-6 h-6 text-emerald-300 mb-4" />
              <h3 className="text-white font-bold text-base mb-2">Landing Page Optimization</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Pages are structured to increase inquiries and reduce drop-offs.</p>
            </div>

            {/* Step 04 */}
            <div className="group relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 overflow-hidden hover:-translate-y-1 hover:border-amber-400/30 hover:bg-white/[0.07] transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-amber-400 to-red-400" />
              <div className="flex items-center gap-2 mb-5">
                <span className="w-6 h-6 rounded-md bg-amber-500/20 text-amber-300 text-xs font-bold flex items-center justify-center">04</span>
                <span className="text-amber-300 text-xs font-bold uppercase tracking-widest">Step Four</span>
              </div>
              <Rocket className="w-6 h-6 text-amber-300 mb-4" />
              <h3 className="text-white font-bold text-base mb-2">Campaign Deployment</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Google Ads campaigns built specifically for lead generation.</p>
            </div>

            {/* Step 05 */}
            <div className="group relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 overflow-hidden hover:-translate-y-1 hover:border-pink-400/30 hover:bg-white/[0.07] transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-pink-500 to-violet-500" />
              <div className="flex items-center gap-2 mb-5">
                <span className="w-6 h-6 rounded-md bg-pink-500/20 text-pink-300 text-xs font-bold flex items-center justify-center">05</span>
                <span className="text-pink-300 text-xs font-bold uppercase tracking-widest">Step Five</span>
              </div>
              <Target className="w-6 h-6 text-pink-300 mb-4" />
              <h3 className="text-white font-bold text-base mb-2">Conversion Tracking</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Every call, inquiry, and form submission is accurately tracked.</p>
            </div>

            {/* Step 06 */}
            <div className="group relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 overflow-hidden hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.07] transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-cyan-400 to-emerald-400" />
              <div className="flex items-center gap-2 mb-5">
                <span className="w-6 h-6 rounded-md bg-cyan-500/20 text-cyan-300 text-xs font-bold flex items-center justify-center">06</span>
                <span className="text-cyan-300 text-xs font-bold uppercase tracking-widest">Step Six</span>
              </div>
              <RefreshCw className="w-6 h-6 text-cyan-300 mb-4" />
              <h3 className="text-white font-bold text-base mb-2">Continuous Optimization</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Campaigns are refined weekly based on CPL and lead quality.</p>
            </div>

          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="relative py-24 px-4 bg-white overflow-hidden">

        {/* Google-style coloured background blobs */}
        <div className="absolute top-[-80px] left-[-80px] w-72 h-72 rounded-full bg-blue-100/60 blur-3xl pointer-events-none" />
        <div className="absolute top-[-40px] right-[-60px] w-60 h-60 rounded-full bg-red-100/50 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-96 h-48 rounded-full bg-yellow-100/50 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-40px] right-[-60px] w-60 h-60 rounded-full bg-green-100/50 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
              Industries
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight max-w-2xl mx-auto">
              Google Ads Strategy Must{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
                  Change by Industry
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 8 Q75 2 150 6 Q225 10 298 4" stroke="url(#uline)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <defs>
                    <linearGradient id="uline" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>
            <p className="text-gray-500 text-base sm:text-lg mt-5 max-w-xl mx-auto leading-relaxed">
              One-size-fits-all doesn't work in ads. We tailor every campaign to your industry's buyer behaviour and goals.
            </p>
          </div>

          {/* Cards */}
          <div className="grid lg:grid-cols-3 gap-6">

            {/* Manufacturing */}
            <div className="group relative bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-blue-100 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              {/* Top colour bar */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-blue-500 to-blue-400" />
              {/* Subtle bg tint on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/0 group-hover:from-blue-50/60 group-hover:to-transparent rounded-3xl transition-all duration-300 pointer-events-none" />

              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-200">
                  <Factory className="w-7 h-7 text-blue-500" />
                </div>

                {/* Google-style coloured dots */}
                <div className="flex gap-1 mb-4">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="w-2 h-2 rounded-full bg-yellow-400" />
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                </div>

                <h3 className="text-xl font-extrabold text-gray-900 mb-3">
                  Manufacturing Businesses
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  High-intent B2B search campaigns targeting procurement heads, RFQ-based inquiries, and industrial buyers across PCMC.
                </p>

                <a href="#" className="inline-flex items-center gap-1.5 text-blue-600 text-sm font-semibold group-hover:gap-2.5 transition-all duration-200">
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Service Businesses — featured */}
            <div className="group relative bg-gradient-to-br from-[#0529a0] to-[#1a3fc4] border-0 rounded-3xl p-8 hover:shadow-2xl hover:shadow-blue-300 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              {/* Glow orb */}
              <div className="absolute top-[-40px] right-[-40px] w-40 h-40 rounded-full bg-white/10 blur-2xl pointer-events-none" />
              <div className="absolute bottom-[-30px] left-[-30px] w-32 h-32 rounded-full bg-blue-400/20 blur-2xl pointer-events-none" />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
                  <Briefcase className="w-7 h-7 text-white" />
                </div>

                <div className="flex gap-1 mb-4">
                  <span className="w-2 h-2 rounded-full bg-white/80" />
                  <span className="w-2 h-2 rounded-full bg-blue-300" />
                  <span className="w-2 h-2 rounded-full bg-yellow-300" />
                  <span className="w-2 h-2 rounded-full bg-green-300" />
                </div>

                {/* Most popular badge */}
                <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
                  Most Popular
                </span>

                <h3 className="text-xl font-extrabold text-white mb-3">
                  Service Businesses
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-6">
                  Local lead generation campaigns optimized for calls, consultation bookings, and qualified inquiries.
                </p>

                <a href="#" className="inline-flex items-center gap-1.5 text-white text-sm font-semibold group-hover:gap-2.5 transition-all duration-200">
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* E-Commerce */}
            <div className="group relative bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-green-100 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-green-400 to-emerald-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 to-green-50/0 group-hover:from-green-50/60 group-hover:to-transparent rounded-3xl transition-all duration-300 pointer-events-none" />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors duration-200">
                  <ShoppingCart className="w-7 h-7 text-green-500" />
                </div>

                <div className="flex gap-1 mb-4">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="w-2 h-2 rounded-full bg-yellow-400" />
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                </div>

                <h3 className="text-xl font-extrabold text-gray-900 mb-3">
                  E-Commerce Brands
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Shopping Ads, remarketing campaigns, and product-focused search strategies designed to increase online sales.
                </p>

                <a href="#" className="inline-flex items-center gap-1.5 text-green-600 text-sm font-semibold group-hover:gap-2.5 transition-all duration-200">
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>
      {/* PRICING */}
      <section className="relative py-24 px-4 bg-[#F8FAFC] overflow-hidden">

        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-40 bg-violet-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-orange-500 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
              Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Google Ads Pricing{" "}
              <span className="bg-gradient-to-r from-[#0529a0] to-violet-500 bg-clip-text text-transparent">
                in Pune
              </span>
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
              Transparent, results-focused plans built for every stage of business growth.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 items-stretch">

            {/* Starter */}
            <div className="group relative bg-white border border-gray-100 rounded-3xl p-8 flex flex-col hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-blue-400 to-cyan-400" />

              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <Zap className="w-6 h-6 text-blue-500" />
              </div>

              <p className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2">Starter</p>
              <h3 className="text-xl font-extrabold text-gray-900 mb-1">Starter Campaigns</h3>
              <p className="text-gray-400 text-sm mb-6">Perfect for new businesses getting started with paid ads.</p>

              <div className="mb-6">
                <p className="text-4xl font-extrabold text-[#f85415]">₹15K <span className="text-2xl">– ₹30K</span></p>
                <p className="text-gray-400 text-sm mt-1">per month</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0"><Check className="w-3 h-3 text-blue-500" /></span>
                  Google Search campaigns
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0"><Check className="w-3 h-3 text-blue-500" /></span>
                  Keyword research & setup
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0"><Check className="w-3 h-3 text-blue-500" /></span>
                  Monthly performance report
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0"><Check className="w-3 h-3 text-blue-500" /></span>
                  Basic conversion tracking
                </li>
              </ul>

              <a href="#" className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 border-blue-500 text-blue-600 font-bold text-sm hover:bg-blue-500 hover:text-white transition-all duration-200 group-hover:gap-3">
                Get Started <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Lead Generation — featured */}
            <div className="group relative bg-gradient-to-br from-[#0529a0] via-[#1a3fc4] to-[#0d2d8a] rounded-3xl p-8 flex flex-col hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-300/40 transition-all duration-300 overflow-hidden">
              {/* Glow orbs */}
              <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-[-30px] left-[-30px] w-36 h-36 bg-blue-400/20 rounded-full blur-2xl pointer-events-none" />

              {/* Most Popular badge */}
              <div className="absolute top-5 right-5">
                <span className="bg-[#f85415] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-lg">
                  Most Popular
                </span>
              </div>

              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>

                <p className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-2">Growth</p>
                <h3 className="text-xl font-extrabold text-white mb-1">Lead Generation</h3>
                <p className="text-blue-200 text-sm mb-6">For businesses actively scaling their lead pipeline.</p>

                <div className="mb-6">
                  <p className="text-4xl font-extrabold text-white">₹30K <span className="text-2xl text-blue-200">– ₹75K</span></p>
                  <p className="text-blue-300 text-sm mt-1">per month</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-center gap-2 text-sm text-blue-100">
                    <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0"><Check className="w-3 h-3 text-white" /></span>
                    Search + Display campaigns
                  </li>
                  <li className="flex items-center gap-2 text-sm text-blue-100">
                    <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0"><Check className="w-3 h-3 text-white" /></span>
                    Landing page optimization
                  </li>
                  <li className="flex items-center gap-2 text-sm text-blue-100">
                    <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0"><Check className="w-3 h-3 text-white" /></span>
                    Weekly bid adjustments
                  </li>
                  <li className="flex items-center gap-2 text-sm text-blue-100">
                    <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0"><Check className="w-3 h-3 text-white" /></span>
                    Call + form tracking
                  </li>
                  <li className="flex items-center gap-2 text-sm text-blue-100">
                    <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0"><Check className="w-3 h-3 text-white" /></span>
                    Dedicated account manager
                  </li>
                </ul>

                <a href="#" className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#f85415] text-white font-bold text-sm hover:bg-orange-500 transition-all duration-200 shadow-lg shadow-orange-500/30 group-hover:gap-3">
                  Get Started <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Advanced */}
            <div className="group relative bg-white border border-gray-100 rounded-3xl p-8 flex flex-col hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-100 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-orange-400 to-pink-500" />

              <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors">
                <Rocket className="w-6 h-6 text-orange-500" />
              </div>

              <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2">Enterprise</p>
              <h3 className="text-xl font-extrabold text-gray-900 mb-1">Advanced Campaigns</h3>
              <p className="text-gray-400 text-sm mb-6">Full-scale performance marketing for high-growth businesses.</p>

              <div className="mb-6">
                <p className="text-4xl font-extrabold text-[#f85415]">₹75K<span className="text-2xl">+</span></p>
                <p className="text-gray-400 text-sm mt-1">per month</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0"><Check className="w-3 h-3 text-orange-500" /></span>
                  Full funnel ad strategy
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0"><Check className="w-3 h-3 text-orange-500" /></span>
                  Shopping & remarketing ads
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0"><Check className="w-3 h-3 text-orange-500" /></span>
                  Custom audience targeting
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0"><Check className="w-3 h-3 text-orange-500" /></span>
                  Priority support & reporting
                </li>
              </ul>

              <a href="#" className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 border-orange-400 text-orange-500 font-bold text-sm hover:bg-orange-500 hover:text-white transition-all duration-200 group-hover:gap-3">
                Get Started <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Bottom note */}
          <p className="text-center text-gray-400 text-sm mt-10">
            All plans include a free audit. No lock-in contracts.{" "}
            <a href="#" className="text-[#0529a0] font-semibold hover:underline">Talk to us →</a>
          </p>

        </div>
      </section>

      {/* WHY FAIL */}
      <section className="relative py-24 px-4 bg-white overflow-hidden">

        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-50/80 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-50/60 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-red-500 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
              Problem
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight max-w-3xl mx-auto">
              Why Your Google Ads Are{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Not Generating Leads
                </span>
                {/* Strikethrough line */}
                <span className="absolute inset-x-0 top-1/2 h-[3px] bg-gradient-to-r from-red-400 to-orange-400 rounded-full opacity-40" />
              </span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mt-5 max-w-xl mx-auto leading-relaxed">
              Most campaigns fail for the same fixable reasons. Here's what's silently draining your budget.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-5">

            {/* Card 1 */}
            <div className="group relative bg-white border border-gray-100 rounded-2xl p-6 flex items-start gap-4 hover:border-red-200 hover:shadow-lg hover:shadow-red-50 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 group-hover:from-red-50/50 to-transparent rounded-2xl transition-all duration-300 pointer-events-none" />
              <div className="relative flex-shrink-0 w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                <XCircle className="w-5 h-5 text-red-400" />
              </div>
              <div className="relative">
                <span className="text-xs font-bold uppercase tracking-widest text-red-400 mb-1 block">Mistake 01</span>
                <p className="text-gray-800 font-semibold text-base leading-snug">Targeting broad keywords without buying intent</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white border border-gray-100 rounded-2xl p-6 flex items-start gap-4 hover:border-red-200 hover:shadow-lg hover:shadow-red-50 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 group-hover:from-red-50/50 to-transparent rounded-2xl transition-all duration-300 pointer-events-none" />
              <div className="relative flex-shrink-0 w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                <XCircle className="w-5 h-5 text-red-400" />
              </div>
              <div className="relative">
                <span className="text-xs font-bold uppercase tracking-widest text-red-400 mb-1 block">Mistake 02</span>
                <p className="text-gray-800 font-semibold text-base leading-snug">Sending traffic to generic landing pages</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white border border-gray-100 rounded-2xl p-6 flex items-start gap-4 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-50 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 group-hover:from-orange-50/50 to-transparent rounded-2xl transition-all duration-300 pointer-events-none" />
              <div className="relative flex-shrink-0 w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                <XCircle className="w-5 h-5 text-orange-400" />
              </div>
              <div className="relative">
                <span className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-1 block">Mistake 03</span>
                <p className="text-gray-800 font-semibold text-base leading-snug">Optimizing campaigns for clicks instead of leads</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative bg-white border border-gray-100 rounded-2xl p-6 flex items-start gap-4 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-50 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 group-hover:from-orange-50/50 to-transparent rounded-2xl transition-all duration-300 pointer-events-none" />
              <div className="relative flex-shrink-0 w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                <XCircle className="w-5 h-5 text-orange-400" />
              </div>
              <div className="relative">
                <span className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-1 block">Mistake 04</span>
                <p className="text-gray-800 font-semibold text-base leading-snug">No negative keyword strategy in place</p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group relative bg-white border border-gray-100 rounded-2xl p-6 flex items-start gap-4 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-50 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-50/0 group-hover:from-rose-50/50 to-transparent rounded-2xl transition-all duration-300 pointer-events-none" />
              <div className="relative flex-shrink-0 w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                <XCircle className="w-5 h-5 text-rose-400" />
              </div>
              <div className="relative">
                <span className="text-xs font-bold uppercase tracking-widest text-rose-400 mb-1 block">Mistake 05</span>
                <p className="text-gray-800 font-semibold text-base leading-snug">Poor ad-to-landing-page alignment</p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="group relative bg-white border border-gray-100 rounded-2xl p-6 flex items-start gap-4 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-50 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-50/0 group-hover:from-rose-50/50 to-transparent rounded-2xl transition-all duration-300 pointer-events-none" />
              <div className="relative flex-shrink-0 w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                <XCircle className="w-5 h-5 text-rose-400" />
              </div>
              <div className="relative">
                <span className="text-xs font-bold uppercase tracking-widest text-rose-400 mb-1 block">Mistake 06</span>
                <p className="text-gray-800 font-semibold text-base leading-snug">No conversion tracking or retargeting setup</p>
              </div>
            </div>

          </div>

          {/* Bottom CTA strip */}
          <div className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 border border-red-100 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-700 font-semibold text-base text-center sm:text-left">
              Sound familiar? We fix all of these — and get you leads within 30 days.
            </p>
            <a
              href="#"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white text-sm font-bold px-6 py-3 rounded-xl transition-all duration-200 shadow-md shadow-orange-200 hover:scale-105"
            >
              Fix My Campaigns →
            </a>
          </div>

        </div>
      </section>
      {/* COMPARISON */}
      <section className="relative py-24 px-4 bg-[#F8FAFC] overflow-hidden">

        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-violet-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
              Comparison
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Foxaircomm{" "}
              <span className="bg-gradient-to-r from-[#0529a0] to-violet-500 bg-clip-text text-transparent">vs</span>{" "}
              Typical Agency
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
              See exactly why businesses choose Foxaircomm over generic agencies.
            </p>
          </div>

          {/* Table Card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-blue-100/50 border border-gray-100">

            {/* Table Header */}
            <div className="grid grid-cols-3">
              <div className="p-6 bg-gray-50 border-b border-gray-100">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Factor</p>
              </div>
              <div className="p-6 bg-gray-50 border-b border-l border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center">
                    <X className="w-3.5 h-3.5 text-gray-500" />
                  </span>
                  <p className="text-sm font-bold text-gray-500">Typical Agency</p>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-r from-[#0529a0] to-[#1a3fc4] border-b border-l border-blue-700/20">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </span>
                  <p className="text-sm font-bold text-white">Foxaircomm</p>
                </div>
              </div>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-3 group hover:bg-blue-50/30 transition-colors duration-200">
              <div className="p-6 border-b border-gray-100 flex items-center">
                <p className="text-sm font-bold text-gray-800">Campaign Strategy</p>
              </div>
              <div className="p-6 border-b border-l border-gray-100 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                  <X className="w-3 h-3 text-red-400" />
                </span>
                <p className="text-sm text-gray-500">Traffic-focused</p>
              </div>
              <div className="p-6 border-b border-l border-gray-100 flex items-center gap-3 bg-blue-50/40">
                <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-blue-600" />
                </span>
                <p className="text-sm font-semibold text-[#0529a0]">Lead-focused execution</p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-3 group hover:bg-blue-50/30 transition-colors duration-200">
              <div className="p-6 border-b border-gray-100 flex items-center">
                <p className="text-sm font-bold text-gray-800">Optimization Goal</p>
              </div>
              <div className="p-6 border-b border-l border-gray-100 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                  <X className="w-3 h-3 text-red-400" />
                </span>
                <p className="text-sm text-gray-500">Clicks and impressions</p>
              </div>
              <div className="p-6 border-b border-l border-gray-100 flex items-center gap-3 bg-blue-50/40">
                <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-blue-600" />
                </span>
                <p className="text-sm font-semibold text-[#0529a0]">Qualified inquiries and ROI</p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-3 group hover:bg-blue-50/30 transition-colors duration-200">
              <div className="p-6 border-b border-gray-100 flex items-center">
                <p className="text-sm font-bold text-gray-800">Reporting</p>
              </div>
              <div className="p-6 border-b border-l border-gray-100 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                  <X className="w-3 h-3 text-red-400" />
                </span>
                <p className="text-sm text-gray-500">CTR and clicks</p>
              </div>
              <div className="p-6 border-b border-l border-gray-100 flex items-center gap-3 bg-blue-50/40">
                <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-blue-600" />
                </span>
                <p className="text-sm font-semibold text-[#0529a0]">CPL and lead quality</p>
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-3 group hover:bg-blue-50/30 transition-colors duration-200">
              <div className="p-6 border-b border-gray-100 flex items-center">
                <p className="text-sm font-bold text-gray-800">Landing Pages</p>
              </div>
              <div className="p-6 border-b border-l border-gray-100 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                  <X className="w-3 h-3 text-red-400" />
                </span>
                <p className="text-sm text-gray-500">Generic pages</p>
              </div>
              <div className="p-6 border-b border-l border-gray-100 flex items-center gap-3 bg-blue-50/40">
                <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-blue-600" />
                </span>
                <p className="text-sm font-semibold text-[#0529a0]">Conversion-focused pages</p>
              </div>
            </div>

            {/* Row 5 — last row, no bottom border */}
            <div className="grid grid-cols-3 group hover:bg-blue-50/30 transition-colors duration-200">
              <div className="p-6 flex items-center">
                <p className="text-sm font-bold text-gray-800">Audience Refinement</p>
              </div>
              <div className="p-6 border-l border-gray-100 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                  <X className="w-3 h-3 text-red-400" />
                </span>
                <p className="text-sm text-gray-500">Minimal optimization</p>
              </div>
              <div className="p-6 border-l border-gray-100 flex items-center gap-3 bg-blue-50/40">
                <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-blue-600" />
                </span>
                <p className="text-sm font-semibold text-[#0529a0]">Continuous keyword & audience refinement</p>
              </div>
            </div>

          </div>

          {/* Bottom CTA */}
          <div className="mt-10 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0529a0] to-violet-600 hover:from-[#0529a0]/90 hover:to-violet-700 text-white text-sm font-bold px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-blue-200 hover:scale-105"
            >
              Work With Foxaircomm →
            </a>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 px-4 bg-white overflow-hidden">
 
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-50/40 rounded-full blur-3xl pointer-events-none" />
 
      <div className="relative max-w-3xl mx-auto">
 
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
            FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#0529a0] to-violet-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto leading-relaxed">
            Everything you need to know before getting started with Google Ads.
          </p>
        </div>
 
        {/* Accordion */}
        <div className="space-y-3">
 
          {/* FAQ 1 */}
          <div className={`group border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === 0 ? "border-blue-200 shadow-lg shadow-blue-50" : "border-gray-100 hover:border-blue-100"}`}>
            <button
              onClick={() => toggle(0)}
              className="w-full flex items-center justify-between gap-4 p-6 text-left"
            >
              <span className={`text-base font-bold transition-colors duration-200 ${openIndex === 0 ? "text-[#0529a0]" : "text-gray-800"}`}>
                How long does it take to see results from Google Ads?
              </span>
              <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${openIndex === 0 ? "bg-[#0529a0] text-white" : "bg-gray-100 text-gray-500 group-hover:bg-blue-50 group-hover:text-blue-500"}`}>
                {openIndex === 0 ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>
            {openIndex === 0 && (
              <div className="px-6 pb-6">
                <div className="h-px bg-blue-100 mb-4" />
                <p className="text-gray-500 text-sm leading-relaxed">Most campaigns start generating leads within the first 2–4 weeks. However, optimal performance typically takes 60–90 days as we gather data, refine targeting, and continuously improve your cost per lead.</p>
              </div>
            )}
          </div>
 
          {/* FAQ 2 */}
          <div className={`group border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === 1 ? "border-blue-200 shadow-lg shadow-blue-50" : "border-gray-100 hover:border-blue-100"}`}>
            <button
              onClick={() => toggle(1)}
              className="w-full flex items-center justify-between gap-4 p-6 text-left"
            >
              <span className={`text-base font-bold transition-colors duration-200 ${openIndex === 1 ? "text-[#0529a0]" : "text-gray-800"}`}>
                What is the minimum budget required to run Google Ads in Pune?
              </span>
              <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${openIndex === 1 ? "bg-[#0529a0] text-white" : "bg-gray-100 text-gray-500 group-hover:bg-blue-50 group-hover:text-blue-500"}`}>
                {openIndex === 1 ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>
            {openIndex === 1 && (
              <div className="px-6 pb-6">
                <div className="h-px bg-blue-100 mb-4" />
                <p className="text-gray-500 text-sm leading-relaxed">We recommend a minimum ad spend of ₹15,000/month to generate meaningful data and leads. Below this threshold, campaigns often lack the volume needed to optimise effectively.</p>
              </div>
            )}
          </div>
 
          {/* FAQ 3 */}
          <div className={`group border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === 2 ? "border-blue-200 shadow-lg shadow-blue-50" : "border-gray-100 hover:border-blue-100"}`}>
            <button
              onClick={() => toggle(2)}
              className="w-full flex items-center justify-between gap-4 p-6 text-left"
            >
              <span className={`text-base font-bold transition-colors duration-200 ${openIndex === 2 ? "text-[#0529a0]" : "text-gray-800"}`}>
                Do you manage the ad spend, or do we pay Google directly?
              </span>
              <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${openIndex === 2 ? "bg-[#0529a0] text-white" : "bg-gray-100 text-gray-500 group-hover:bg-blue-50 group-hover:text-blue-500"}`}>
                {openIndex === 2 ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>
            {openIndex === 2 && (
              <div className="px-6 pb-6">
                <div className="h-px bg-blue-100 mb-4" />
                <p className="text-gray-500 text-sm leading-relaxed">You pay Google directly for your ad spend. Our fee covers strategy, setup, management, and optimisation. This keeps things fully transparent — you always know exactly where your money is going.</p>
              </div>
            )}
          </div>
 
          {/* FAQ 4 */}
          <div className={`group border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === 3 ? "border-blue-200 shadow-lg shadow-blue-50" : "border-gray-100 hover:border-blue-100"}`}>
            <button
              onClick={() => toggle(3)}
              className="w-full flex items-center justify-between gap-4 p-6 text-left"
            >
              <span className={`text-base font-bold transition-colors duration-200 ${openIndex === 3 ? "text-[#0529a0]" : "text-gray-800"}`}>
                What makes Foxaircomm different from other Google Ads agencies?
              </span>
              <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${openIndex === 3 ? "bg-[#0529a0] text-white" : "bg-gray-100 text-gray-500 group-hover:bg-blue-50 group-hover:text-blue-500"}`}>
                {openIndex === 3 ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>
            {openIndex === 3 && (
              <div className="px-6 pb-6">
                <div className="h-px bg-blue-100 mb-4" />
                <p className="text-gray-500 text-sm leading-relaxed">We focus on lead quality, not just traffic. Every campaign is built around your CPL target, with weekly optimisations, conversion tracking, and detailed reporting on actual business outcomes — not vanity metrics.</p>
              </div>
            )}
          </div>
 
          {/* FAQ 5 */}
          <div className={`group border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === 4 ? "border-blue-200 shadow-lg shadow-blue-50" : "border-gray-100 hover:border-blue-100"}`}>
            <button
              onClick={() => toggle(4)}
              className="w-full flex items-center justify-between gap-4 p-6 text-left"
            >
              <span className={`text-base font-bold transition-colors duration-200 ${openIndex === 4 ? "text-[#0529a0]" : "text-gray-800"}`}>
                Do you provide landing pages as part of the service?
              </span>
              <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${openIndex === 4 ? "bg-[#0529a0] text-white" : "bg-gray-100 text-gray-500 group-hover:bg-blue-50 group-hover:text-blue-500"}`}>
                {openIndex === 4 ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>
            {openIndex === 4 && (
              <div className="px-6 pb-6">
                <div className="h-px bg-blue-100 mb-4" />
                <p className="text-gray-500 text-sm leading-relaxed">Yes. We audit your existing landing pages and either optimise them or build conversion-focused pages designed specifically to turn ad clicks into qualified inquiries.</p>
              </div>
            )}
          </div>
 
          {/* FAQ 6 */}
          <div className={`group border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === 5 ? "border-blue-200 shadow-lg shadow-blue-50" : "border-gray-100 hover:border-blue-100"}`}>
            <button
              onClick={() => toggle(5)}
              className="w-full flex items-center justify-between gap-4 p-6 text-left"
            >
              <span className={`text-base font-bold transition-colors duration-200 ${openIndex === 5 ? "text-[#0529a0]" : "text-gray-800"}`}>
                Can we pause or stop the campaigns anytime?
              </span>
              <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${openIndex === 5 ? "bg-[#0529a0] text-white" : "bg-gray-100 text-gray-500 group-hover:bg-blue-50 group-hover:text-blue-500"}`}>
                {openIndex === 5 ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>
            {openIndex === 5 && (
              <div className="px-6 pb-6">
                <div className="h-px bg-blue-100 mb-4" />
                <p className="text-gray-500 text-sm leading-relaxed">Absolutely. There are no lock-in contracts. You can pause, adjust, or stop campaigns at any time. We believe in earning your business every month through results.</p>
              </div>
            )}
          </div>
 
        </div>
 
        {/* Bottom CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-violet-50 border border-blue-100 rounded-2xl p-7 text-center">
          <p className="text-gray-700 font-semibold text-base mb-4">
            Still have questions? We're happy to help.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0529a0] to-violet-600 hover:from-[#0529a0]/90 hover:to-violet-700 text-white text-sm font-bold px-7 py-3 rounded-xl transition-all duration-200 shadow-md shadow-blue-200 hover:scale-105"
          >
            Talk to Our Team →
          </a>
        </div>
 
      </div>
    </section>

      {/* CTA */}
      <section className="py-24 bg-[#0529a0] text-white px-4 text-center">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-4xl font-bold mb-6">
            Get Clarity on What Is Blocking Your Google Ads Performance
          </h2>

          <p className="text-gray-200 text-lg leading-relaxed mb-10">
            We’ll identify what is limiting your conversions and show
            exactly how to improve lead generation within 48 hours.
          </p>

          <div className="flex flex-wrap justify-center gap-5">

            <Link
              to="/contact"
              className="bg-[#f85415] hover:bg-orange-600 transition px-8 py-4 rounded-xl font-semibold"
            >
              Book Free Google Ads Consultation
            </Link>

            <Link
              to="/contact"
              className="border border-white/30 px-8 py-4 rounded-xl font-semibold"
            >
              Request Free Audit
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
}

export default GoogleAdwords;