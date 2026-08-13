import React, { useEffect, useRef, useState } from "react";
import { CheckCircle, AlertCircle, Target, AlertTriangle, TrendingUp, Layers, Clock, ChevronDown } from "lucide-react";



const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <defs>
      <linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f09433" />
        <stop offset="50%" stopColor="#dc2743" />
        <stop offset="100%" stopColor="#bc1888" />
      </linearGradient>
    </defs>
    <rect width="24" height="24" rx="6" fill="url(#ig)" />
    <rect x="6" y="6" width="12" height="12" rx="3" stroke="white" strokeWidth="1.5" fill="none" />
    <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5" fill="none" />
    <circle cx="17" cy="7" r="1" fill="white" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <rect width="24" height="24" rx="6" fill="#1877F2" />
    <path d="M13.5 8H15V5.5H13C11.3 5.5 10 6.8 10 8.5V10H8V12.5H10V18.5H12.5V12.5H14.5L15 10H12.5V8.5C12.5 8.2 12.8 8 13.5 8Z" fill="white" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <rect width="24" height="24" rx="6" fill="#0A66C2" />
    <path d="M7 10H9.5V17H7V10ZM8.25 9C7.56 9 7 8.44 7 7.75S7.56 6.5 8.25 6.5 9.5 7.06 9.5 7.75 8.94 9 8.25 9Z" fill="white" />
    <path d="M11 10H13.4V11.1C13.8 10.4 14.7 9.8 16 9.8C18.2 9.8 19 11.2 19 13.4V17H16.5V13.9C16.5 12.9 16.1 12.3 15.2 12.3C14.2 12.3 13.5 13 13.5 14V17H11V10Z" fill="white" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <rect width="24" height="24" rx="6" fill="#FF0000" />
    <path d="M19.5 8.5C19.3 7.2 18.7 6.6 17 6C14.5 5.7 9.5 5.7 9.5 5.7S4.5 5.7 2 6C0.3 6.6 0 7.8 0 12S0.3 17.4 2 18C4.5 18.3 9.5 18.3 9.5 18.3S14.5 18.3 17 18C18.7 17.4 19.3 16.8 19.5 15.5C19.7 14.3 20 12 20 12S19.7 9.7 19.5 8.5ZM8 15V9L14 12L8 15Z" fill="white" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <rect width="24" height="24" rx="6" fill="#000" />
    <path d="M13.5 10.9L18 6H16.7L12.9 10.1L9.8 6H6L10.7 12.8L6 18H7.3L11.3 13.6L14.7 18H18.5L13.5 10.9ZM12 12.7L11.4 11.9L7.8 6.9H9.2L12.5 11.1L13.1 11.9L16.7 17.1H15.3L12 12.7Z" fill="white" />
  </svg>
);

const platforms = [
  { name: "Instagram", Icon: InstagramIcon, followers: "2.4K", growth: "+18%" },
  { name: "Facebook", Icon: FacebookIcon, followers: "5.1K", growth: "+12%" },
  { name: "LinkedIn", Icon: LinkedInIcon, followers: "1.8K", growth: "+31%" },
  { name: "YouTube", Icon: YoutubeIcon, followers: "980", growth: "+25%" },
  { name: "X / Twitter", Icon: XIcon, followers: "3.2K", growth: "+9%" },
];

const engagementData = [42, 58, 51, 74, 68, 85, 91];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];


const cards = [
  {
    number: "01",
    title: "Audience Intent Identification",
    description: "Instead of broad targeting, the focus is on understanding why users engage, what problems they are trying to solve, and how your brand fits into their decision journey.",
  },
  {
    number: "02",
    title: "Content Positioning Strategy",
    description: "Content is designed to communicate clear brand value — whether it is expertise, trust, or differentiation — rather than just maintaining activity.",
  },
  {
    number: "03",
    title: "Engagement Funnel Creation",
    description: "Users are guided from discovery to interaction and eventually towards enquiry or purchase through planned content journeys.",
  },
  {
    number: "04",
    title: "Data-Backed Refinement",
    description: "Performance insights are used to continuously adjust messaging, formats, and targeting to improve effectiveness over time.",
  },
];

const whoCards = [
  {
    icon: "🚀",
    title: "Startups",
    description: "Build visibility and trust quickly to attract early adopters and establish brand identity.",
    span: false,
  },
  {
    icon: "📍",
    title: "Local Service Businesses",
    description: "Clinics, salons, and consultants can generate consistent leads through location-based targeting.",
    span: false,
  },
  {
    icon: "🤝",
    title: "B2B Companies",
    description: "Platforms like LinkedIn help build authority, nurture leads, and influence decision-makers.",
    span: false,
  },
  {
    icon: "🛍️",
    title: "E-commerce Brands",
    description: "Drive product discovery, retargeting, and repeat purchases through content and ads.",
    span: false,
  },
  {
    icon: "🏥",
    title: "Healthcare Organisations",
    description: "Educate patients, build credibility, and increase appointment bookings through informative content.",
    span: true,
  },
];

const whenCards = [
  {
    title: "Low Reach Despite Regular Posting",
    description: "Indicates lack of algorithm alignment and ineffective content strategy.",
  },
  {
    title: "Inconsistent Engagement",
    description: "Random likes and comments show messaging is not resonating with a defined audience.",
  },
  {
    title: "Weak Lead Generation",
    description: "Social media is not contributing to enquiries or conversions due to an unoptimised funnel.",
  },
  {
    title: "Poor Brand Visibility",
    description: "When competitors dominate online conversations, your brand loses relevance.",
  },
];


// ── EngagementChart no longer owns ref/show — it just renders ──
function EngagementChart() {
  return (
    <div>
      <svg viewBox="0 0 300 90" className="w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="engGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F07830" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#F07830" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d={`M0,${90 - engagementData[0]} ${engagementData
            .map((v, i) => `L${i * 50},${90 - v}`)
            .join(" ")} L300,90 L0,90 Z`}
          fill="url(#engGrad)"
        />
        <polyline
          points={engagementData.map((v, i) => `${i * 50},${90 - v}`).join(" ")}
          fill="none"
          stroke="#F07830"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {engagementData.map((v, i) => (
          <circle key={i} cx={i * 50} cy={90 - v} r="4" fill="#F07830" stroke="white" strokeWidth="2" />
        ))}
      </svg>
      <div className="flex justify-between mt-1">
        {days.map((d) => (
          <span key={d} className="text-[10px] text-gray-400">{d}</span>
        ))}
      </div>
    </div>
  );
}



export default function WebDevelopmentService() {

  const [open, setOpen] = useState(null);

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  // ── Hero entrance animation ──
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 80);
    return () => clearTimeout(t);
  }, []);

  // ── Scroll-triggered animation for the who/when section ──
  const [sectionVisible, setSectionVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setSectionVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white text-gray-800">

      {/* HERO SECTION */}
      <section
        className="relative overflow-hidden min-h-screen flex items-center bg-[#021e7a]"
      >
        {/* Grid texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* Left radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 65% at 15% 50%, rgba(15,74,115,0.5) 0%, transparent 70%)",
          }}
        />

        {/* Bottom-right orange glow */}
        <div
          className="absolute -bottom-20 -right-16 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(240,120,48,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Main layout */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── LEFT: Copy ── */}
          <div className="flex-1 flex flex-col gap-6 lg:max-w-[520px]">

            {/* Badge */}
            <div
              className={`transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white text-xs font-bold tracking-widest uppercase">
                  Website Development · Ahmedabad
                </span>
              </div>
            </div>

            {/* H1 */}
            <div
              className={`transition-all duration-700 delay-100 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
            >
              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
                <span className="text-[#F07830] relative inline-block">
                  Website Development Company
                  <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full bg-[#F07830] opacity-30" />
                </span>{" "}
                in Ahmedabad Focused on Real Business Outcomes
              </h1>
            </div>

            {/* H2 */}
            <div
              className={`transition-all duration-700 delay-150 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
            >
              <h2 className="text-lg md:text-xl font-bold text-white">
                Fast, SEO-Ready, Conversion-Focused Websites
              </h2>
            </div>

            {/* Orange–blue divider */}
            <div
              className={`transition-all duration-700 delay-150 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
            >
              <div
                className="w-12 h-1 rounded-full"
                style={{ background: "linear-gradient(90deg, #F07830, #0B3C5D)" }}
              />
            </div>

            {/* Body */}
            <div
              className={`transition-all duration-700 delay-200 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
            >
              <p className="text-base leading-relaxed text-white/70">
                We design and develop fast, SEO-ready, and conversion-focused
                websites that help Ahmedabad businesses to generate leads, build
                authority, and enhance their online presence.
              </p>
              <p className="text-base leading-relaxed text-white/70 mt-3">
                Foxaircomm incorporates strategic UX, custom development, and
                performance optimisation to turn your website into a measurable
                growth asset.
              </p>
            </div>

            {/* Why Ahmedabad Businesses Are Upgrading Their Websites */}
            <div
              className={`transition-all duration-700 delay-250 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
            >
              <p className="text-sm font-bold text-white uppercase tracking-widest mb-2">
                Why Ahmedabad Businesses Are Upgrading Their Websites Faster Than Ever
              </p>
              <p className="text-sm leading-relaxed text-white/70 mb-2">
                Across Changodar's manufacturing belt and Prahladnagar's service
                economy, a clear shift is visible:
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  "Procurement teams finalise vendors from Google SERP results",
                  "Export buyers judge credibility through website experience (how easy it is to navigate, loading speed)",
                  "Mobile usability directly impacts enquiry volume",
                  "Competitors investing in UX gain disproportionate visibility",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-white/70">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#F07830] flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-white/70 mt-3">
                We often meet businesses heavily invested in high ad budgets, but
                their websites silently block conversions due to poor structure or
                slow loading speed. This is why demand for professional website
                developers in Ahmedabad is increasing across different sectors.
              </p>
            </div>

            {/* CTA buttons */}
            <div
              className={`transition-all duration-700 delay-300 flex flex-wrap gap-4 mt-2 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
            >

              <a href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-white text-base transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, #F07830, #d95e18)",
                  boxShadow: "0 4px 20px rgba(240,120,48,0.4)",
                }}
              >
                Request a Free Website Audit
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <a href="/services"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-white text-base border-2 border-white/30 transition-all duration-200 hover:bg-white hover:text-[#0B3C5D]"
              >
                Our Website Development Services
              </a>
            </div>
          </div>

          {/* ── RIGHT: Website performance mockup ── */}
          <div
            className={`flex-1 w-full max-w-lg transition-all duration-700 delay-300 ${show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">

              {/* Browser chrome */}
              <div className="flex items-center gap-3 px-4 py-3 bg-gray-100 border-b border-gray-200">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 bg-white border border-gray-200 rounded-md px-3 py-1 text-xs text-gray-400 font-mono truncate">
                  foxaircomm.com / website-dashboard
                </div>
                <div className="flex items-center gap-1.5 text-green-600 text-xs font-bold whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse" />
                  Live
                </div>
              </div>

              {/* Dashboard body */}
              <div className="p-5 bg-white">

                {/* Growth chart card */}
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-bold text-gray-700">Website Traffic Growth</p>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-orange-50 text-[#F07830]">
                      ↑ +42% this quarter
                    </span>
                  </div>
                  <EngagementChart />
                </div>

                {/* Website performance summary strip */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { val: "1.2K", label: "Monthly Enquiries" },
                    { val: "3.8%", label: "Lead Conversion Rate" },
                    { val: "1.2s", label: "Avg. Page Load Time" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="flex flex-col items-center text-center bg-gray-50 rounded-xl p-3 border border-gray-100"
                    >
                      <span className="text-lg font-black text-[#0B3C5D]">{s.val}</span>
                      <span className="text-[10px] mt-0.5 text-gray-400 leading-tight">{s.label}</span>
                    </div>
                  ))}
                </div>

                {/* Website activity list */}
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                  Website Performance Highlights
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    { keyword: "Google SERP visibility", position: "Top 5", change: "↑ 6" },
                    { keyword: "Mobile usability score", position: "96%", change: "↑ 11" },
                    { keyword: "Core Web Vitals", position: "Pass", change: "↑ 2" },
                  ].map(({ keyword, position, change }) => (
                    <div
                      key={keyword}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-black text-[#0B3C5D]">{position}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-gray-800 truncate">{keyword}</p>
                        <p className="text-xs text-gray-400">Website Analytics · Ahmedabad</p>
                      </div>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700 whitespace-nowrap">
                        {change}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-400">Last synced: just now</span>
                  <span className="text-xs font-semibold px-2 py-1 rounded-lg bg-blue-50 text-[#0B3C5D]">
                    Website health: 98% ✓
                  </span>
                </div>
              </div>
            </div>

            {/* Partner badge */}
            <div className="mt-4 mx-auto flex items-center justify-center gap-3 py-3 px-6 rounded-xl w-fit bg-white/10 border border-white/20">
              <svg
                width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span className="text-white text-sm font-semibold">
                Trusted Website Development Partner
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* MARKET SHIFT */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What High-Performance{" "}
              <span className="text-[#F07830]">Website Development Actually Includes</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Modern development is not limited to the pages only; it is about
              revenue architecture.
            </p>
          </div>

          {/* Core Elements — grid */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-[#0B3C5D] text-center mb-6">
              Core Elements of Growth-Ready Websites
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Conversion-first UI/UX journey design",
                "Mobile-first responsive engineering",
                "Clean, crawlable, SEO-ready structure which is easy to understand by both humans and bots",
                "Website speed optimisation",
                "Secure and scalable backend systems",
                "CMS control for internal teams",
                "E-commerce and payment integration capability within the website",
                "Analytics, tracking, and automation readiness",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F07830" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto text-center leading-relaxed mt-8">
              Businesses searching for Web design & development services in
              Ahmedabad increasingly prioritise lead generation capability, not
              just visual design, and that shift defines Foxaircomm's approach.
            </p>
          </div>

          {/* Micro-Reality section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Micro-Reality: What We See Across{" "}
                <span className="text-[#F07830]">Ahmedabad Industries</span>
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "A Naroda textile exporter is losing overseas enquiries due to slow mobile pages",
                "A Vatva pharma unit is invisible on Google SERP despite strong distribution",
                "A Prahladnagar consultancy is receiving traffic but has almost zero conversions",
                "A local service brand is rebuilding its site after competitors captured search demand",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex items-start gap-3"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F07830] flex-shrink-0" />
                  <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-600 max-w-2xl mx-auto text-center leading-relaxed">
              These are not design-related issues. They are website strategy
              failures, and they can be fixed.
            </p>
          </div>

          {/* Who needs it */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Who Truly Needs Professional{" "}
                <span className="text-[#F07830]">Website Development in Ahmedabad</span>
              </h3>
              <p className="text-gray-500 max-w-2xl mx-auto">
                High-impact development is crucial for:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                { number: "01", title: "Exporters", description: "Textile and manufacturing exporters scaling globally" },
                { number: "02", title: "Compliance-Driven Sectors", description: "Pharma and compliance-driven industries needing credibility" },
                { number: "03", title: "B2B Service Firms", description: "Firms competing in dense search markets" },
                { number: "04", title: "Startups", description: "Startups seeking investor-ready digital presence" },
                { number: "05", title: "Retail & eCommerce Brands", description: "Brands expanding online revenue" },
              ].map((card) => (
                <div
                  key={card.number}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                >
                  <span className="text-3xl font-black text-[#F07830] opacity-30 block mb-3">
                    {card.number}
                  </span>
                  <h3 className="text-base font-bold text-[#0B3C5D] mb-3">{card.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-600 max-w-2xl mx-auto text-center leading-relaxed">
              To stand among the top web developer companies in Ahmedabad, a
              website must deliver speed, trust, and measurable enquiries, not
              just aesthetics.
            </p>
          </div>

          {/* Risk of delaying */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                The Risk of{" "}
                <span className="text-[#F07830]">Delaying a Website Upgrade</span>
              </h3>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Many businesses wait until growth slows. But in reality, delay
                often causes:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Silent loss of high-intent enquiries",
                "Increasing cost per lead (CPL) due to poor conversion rates",
                "Reduced credibility with new buyers",
                "Competitors gaining a long-term search advantage",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex items-start gap-3"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F07830] flex-shrink-0" />
                  <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-600 max-w-2xl mx-auto text-center leading-relaxed font-medium">
              A weak website rarely fails loudly. It fails quietly through missed
              opportunities.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-[#F07830] hover:bg-[#d95e18] transition-colors duration-200"
            >
              Get in Touch
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

        </div>
      </section>

      {/* ── ref now lives here in SocialMediaService, where it's used ── */}
      <section ref={ref} className="w-full bg-white py-20 px-6 md:px-12 overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* ── Header ── */}
          <div className={`text-center transition-all duration-700 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F07830] bg-orange-50 border border-orange-100 px-4 py-1.5 rounded-full mb-4">
              Our Framework
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              What Makes{" "}
              <span className="text-[#0B3C5D]">Foxaircomm Structurally Different</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base">
              Most agencies promise design and SEO, but very few engineer for growth.
            </p>
          </div>

          {/* ── Foxaircomm Website Growth Framework ── */}
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-8">
              The Foxaircomm{" "}
              <span className="text-[#F07830]">Website Growth Framework™</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  number: "01",
                  icon: "🔍",
                  title: "Visibility Engineering",
                  description: "Creation of search-ready architecture, schema clarity, and technical SEO foundation.",
                },
                {
                  number: "02",
                  icon: "🎯",
                  title: "Conversion Architecture",
                  description: "User-journey mapping, trust positioning, and enquiry-driven layouts.",
                },
                {
                  number: "03",
                  icon: "📈",
                  title: "Scalability Readiness",
                  description: "Future-proof development supporting automation, SEO, and marketing expansion.",
                },
              ].map((card, i) => (
                <div
                  key={card.title}
                  className={`group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm
              hover:shadow-lg hover:-translate-y-1 hover:border-[#0B3C5D]/20
              transition-all duration-300 cursor-default
              ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  style={{ transitionDelay: `${i * 80 + 150}ms` }}
                >
                  <div className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-[#0B3C5D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-start gap-4 mb-3">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#0B3C5D]/5 rounded-xl flex items-center justify-center text-2xl group-hover:bg-[#0B3C5D]/10 transition-colors duration-200">
                      {card.icon}
                    </div>
                    <div>
                      <span className="text-xs font-black text-[#F07830] opacity-50">{card.number}</span>
                      <h4 className="font-bold text-gray-900 text-base group-hover:text-[#0B3C5D] transition-colors duration-200">
                        {card.title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-600 max-w-3xl mx-auto text-center leading-relaxed mt-8">
              This structured methodology is why Foxaircomm is trusted as one of
              the best web development companies in Ahmedabad for businesses
              seeking measurable ROI, not just a redesigned interface.
            </p>
          </div>

          {/* ── Mid CTA banner: Speak with strategy team ── */}
          <div
            className={`transition-all duration-700 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-5 bg-[#0B3C5D] rounded-2xl px-8 py-6">
              <div>
                <p className="text-white font-bold text-lg">Speak With Our Web Strategy Team</p>
                <p className="text-blue-300 text-sm mt-1">
                  If you're planning a new website or redesign, this is the right
                  stage to evaluate goals, timelines, and realistic growth outcomes.
                </p>
              </div>

              <a href="/contact"
                className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white text-sm hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 whitespace-nowrap"
                style={{ background: "linear-gradient(135deg, #F07830, #d95e18)", boxShadow: "0 4px 16px rgba(240,120,48,0.4)" }}
              >
                Talk to Us
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── How Foxaircomm Builds High-Impact Websites ── */}
          <div className={`text-center transition-all duration-700 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              How Foxaircomm Builds{" "}
              <span className="text-[#0B3C5D]">High-Impact Websites</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                number: "01",
                icon: "🧭",
                title: "Business & Market Discovery",
                description: "Initially, our developer will understand the details of the buyers, competitors, and revenue pathways.",
              },
              {
                number: "02",
                icon: "🎨",
                title: "UX Strategy & Wireframing",
                description: "After collecting the necessary details, our developer will design journeys that guide users towards calls, enquiries, or purchases.",
              },
              {
                number: "03",
                icon: "🏷️",
                title: "Custom Brand-Aligned Design",
                description: "Building immediate credibility and recall.",
              },
              {
                number: "04",
                icon: "⚙️",
                title: "Scalable Technical Development",
                description: "As a custom web development company in Ahmedabad, we create secure, high-speed, future-ready platforms for users.",
              },
              {
                number: "05",
                icon: "🔎",
                title: "Search-Ready Technical Foundation",
                description: "Factors such as structured data and mobile optimisation are integrated from day one.",
              },
              {
                number: "06",
                icon: "🚀",
                title: "Testing, Launch & Continuous Optimisation",
                description: "Ensuring stability, monitoring performance, and supporting growth.",
              },
            ].map((card, i) => (
              <div
                key={card.title}
                className={`group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm
            hover:shadow-lg hover:-translate-y-1 hover:border-[#0B3C5D]/20
            transition-all duration-300 cursor-default
            ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${i * 80 + 150}ms` }}
              >
                <div className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-[#0B3C5D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0B3C5D]/5 rounded-xl flex items-center justify-center text-2xl group-hover:bg-[#0B3C5D]/10 transition-colors duration-200">
                    {card.icon}
                  </div>
                  <div>
                    <span className="text-xs font-black text-[#F07830] opacity-50">{card.number}</span>
                    <h4 className="font-bold text-gray-900 text-base group-hover:text-[#0B3C5D] transition-colors duration-200">
                      {card.title}
                    </h4>
                  </div>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>

          {/* ── Real Business Outcomes ── */}
          <div className={`transition-all duration-700 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Real{" "}
                <span className="text-[#0B3C5D]">Business Outcomes Companies Experience</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-base">
                Businesses partnering with a web development company in Ahmedabad,
                like Foxaircomm, commonly achieve:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Noticeable enhancement in Google SERP visibility within months",
                "Higher volume of qualified inbound enquiries",
                "Faster load speed and reduced bounce rates",
                "Stronger trust among new domestic and export buyers",
                "Scalable base for SEO, ads, and automation",
                "Long-term measurable digital ROI",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F07830" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Closing CTA banner ── */}
          <div
            className={`transition-all duration-700 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-5 bg-[#0B3C5D] rounded-2xl px-8 py-6">
              <div>
                <p className="text-white font-bold text-lg">Request a Customised Website Proposal</p>
                <p className="text-blue-300 text-sm mt-1">
                  Get a clear scope, realistic timelines, and investment clarity
                  aligned with your business goals.
                </p>
              </div>

              <a href="/contact"
                className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white text-sm hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 whitespace-nowrap"
                style={{ background: "linear-gradient(135deg, #F07830, #d95e18)", boxShadow: "0 4px 16px rgba(240,120,48,0.4)" }}
              >
                Get in Touch
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </section>

      <section className="w-full bg-white py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">

          {/* ── HOW TO CHOOSE THE BEST WEB DEVELOPMENT COMPANY ── */}
          <div className="mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#185FA5] bg-[#E6F1FB] px-4 py-1.5 rounded-full mb-4">
              Choosing a Partner
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              How to Choose the{" "}
              <span className="text-[#F07830]">Best Web Development Company in Ahmedabad</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mb-8 text-sm leading-relaxed">
              Many business owners ask us this before investing. Before hiring a
              web development company, look for:
            </p>

            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Proven multi-industry execution",
                "Transparent development workflow",
                "SEO-first technical structure",
                "Conversion-focused UX thinking",
                "Reliable long-term support",
              ].map((item) => (
                <div key={item} className="flex gap-4 items-start p-5 border border-gray-100 rounded-xl hover:border-gray-300 transition-colors duration-200 group">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors duration-200">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#185FA5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pt-1.5">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-5 leading-relaxed">
              The best web development and design company in Ahmedabad behaves
              like a growth partner, not a vendor.
            </p>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-gray-100 mb-14" />

          {/* ── COST ── */}
          <div className="mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#993C1D] bg-[#FAECE7] px-4 py-1.5 rounded-full mb-4">
              Investment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              What Does{" "}
              <span className="text-[#F07830]">Website Development Cost</span> in Ahmedabad?
            </h2>
            <p className="text-gray-500 max-w-2xl mb-8 text-sm leading-relaxed">
              In most cases:
            </p>

            <div className="grid md:grid-cols-3 gap-3">
              {[
                { label: "Business Website", range: "₹25,000 – ₹60,000" },
                { label: "Custom Corporate Platform", range: "₹60,000 – ₹1.5L+" },
                { label: "E-Commerce or Advanced System", range: "₹1L – ₹3L+" },
              ].map((item, i) => (
                <div key={item.label} className="flex gap-4 items-start p-5 border border-gray-100 rounded-xl hover:border-gray-300 transition-colors duration-200">
                  <span className="w-8 h-8 rounded-lg bg-[#0B3C5D] text-white text-xs font-black flex items-center justify-center flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="pt-1">
                    <p className="text-sm font-bold text-gray-800 leading-relaxed">{item.label}</p>
                    <p className="text-sm text-[#F07830] font-semibold mt-0.5">{item.range}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-5 leading-relaxed">
              Final costs depend on features, integrations, SEO depth, and
              scalability goals. A transparent, affordable website development
              company in Ahmedabad will always explain why a certain budget is
              recommended.
            </p>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-gray-100 mb-14" />

          {/* ── TIMELINE ── */}
          <div className="mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#185FA5] bg-[#E6F1FB] px-4 py-1.5 rounded-full mb-4">
              Timeline
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              How Long Does{" "}
              <span className="text-[#F07830]">Development Take?</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mb-8 text-sm leading-relaxed">
              Typical timelines:
            </p>

            <div className="grid md:grid-cols-3 gap-3">
              {[
                { label: "Business Website", range: "2–4 weeks" },
                { label: "Custom Corporate Website", range: "4–8 weeks" },
                { label: "E-Commerce or Advanced Build", range: "6–12 weeks" },
              ].map((item, i) => (
                <div key={item.label} className="flex gap-4 items-start p-5 border border-gray-100 rounded-xl hover:border-gray-300 transition-colors duration-200">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#185FA5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <div className="pt-1">
                    <p className="text-sm font-bold text-gray-800 leading-relaxed">{item.label}</p>
                    <p className="text-sm text-[#0B3C5D] font-semibold mt-0.5">{item.range}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-5 leading-relaxed">
              Clear scope and quick feedback significantly accelerate delivery.
            </p>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-gray-100 mb-14" />

          {/* ── CUSTOM VS TEMPLATE ROI ── */}
          <div className="mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#993C1D] bg-[#FAECE7] px-4 py-1.5 rounded-full mb-4">
              Custom vs Templates
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Why{" "}
              <span className="text-[#F07830]">Custom Development</span> Delivers Stronger ROI Than Templates
            </h2>
            <p className="text-gray-500 max-w-2xl mb-8 text-sm leading-relaxed">
              Choosing a custom web development company in Ahmedabad provides:
            </p>

            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Unique brand differentiation",
                "Faster, cleaner performance",
                "Stronger SEO foundation",
                "Easier scalability for marketing",
                "Better long-term return on investment",
              ].map((item) => (
                <div key={item} className="flex gap-4 items-start p-5 border border-gray-100 rounded-xl hover:border-gray-300 transition-colors duration-200 group">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors duration-200">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#185FA5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pt-1.5">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-5 leading-relaxed">
              Templates may launch quickly. Custom platforms win in growth.
            </p>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-gray-100 mb-14" />

          {/* ── SEO-READY CHECKLIST ── */}
          <div className="mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#185FA5] bg-[#E6F1FB] px-4 py-1.5 rounded-full mb-4">
              SEO Readiness
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              What Makes a Website{" "}
              <span className="text-[#F07830]">Truly SEO-Ready?</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mb-8 text-sm leading-relaxed">
              An SEO-ready website includes:
            </p>

            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Clean URL hierarchy and navigation",
                "Mobile-first responsive performance",
                "Fast loading speed",
                "Structured metadata and schema",
                "Crawlable technical architecture",
                "Optimised content hierarchy",
              ].map((item) => (
                <div key={item} className="flex gap-4 items-start p-5 border border-gray-100 rounded-xl hover:border-gray-300 transition-colors duration-200 group">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors duration-200">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#185FA5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pt-1.5">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-5 leading-relaxed">
              Without this foundation, marketing spend struggles to convert into
              consistent enquiries.
            </p>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-gray-100 mb-14" />

          {/* ── FINAL CLOSING + CTA ── */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#185FA5] bg-[#E6F1FB] px-4 py-1.5 rounded-full mb-4">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Build a Website That{" "}
              <span className="text-[#F07830]">Quietly Drives Revenue for Years</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mb-2 text-sm leading-relaxed">
              In Ahmedabad's competitive environment, the real question is not:
            </p>
            <p className="text-gray-700 max-w-2xl mb-2 text-sm font-semibold italic leading-relaxed">
              "Do you need a new website?"
            </p>
            <p className="text-gray-500 max-w-2xl mb-2 text-sm leading-relaxed">
              It is:
            </p>
            <p className="text-gray-900 max-w-2xl mb-8 text-base font-bold italic leading-relaxed">
              "How many opportunities are you already losing without one?"
            </p>
            <p className="text-gray-500 max-w-2xl mb-8 text-sm leading-relaxed">
              Foxaircomm helps businesses replace uncertainty with structured
              digital growth. Speak with our experts. Discuss your business goals.
              Receive a customised development roadmap.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-5 bg-[#0B3C5D] rounded-2xl px-8 py-6">
              <div>
                <p className="text-white font-bold text-lg">Your next phase of growth begins here</p>
                <p className="text-blue-300 text-sm mt-1">
                  A website designed to perform, convert, and scale.
                </p>
              </div>

              <a href="/contact"
                className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white text-sm hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 whitespace-nowrap"
                style={{ background: "linear-gradient(135deg, #F07830, #d95e18)", boxShadow: "0 4px 16px rgba(240,120,48,0.4)" }}
              >
                Get in Touch
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </section>
    </div >
  );
}