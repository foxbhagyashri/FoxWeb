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



export default function SearchEngineOptimization() {

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
                                    SEO Marketing · Ahmedabad
                                </span>
                            </div>
                        </div>

                        {/* H1 */}
                        <div
                            className={`transition-all duration-700 delay-100 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                }`}
                        >
                            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
                                Best SEO Company in Ahmedabad for Businesses That Want{" "}
                                <span className="text-[#F07830] relative inline-block">
                                    Leads — Not Just Rankings
                                    <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full bg-[#F07830] opacity-30" />
                                </span>
                            </h1>
                        </div>

                        {/* H2 */}
                        <div
                            className={`transition-all duration-700 delay-150 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                }`}
                        >
                            <h2 className="text-lg md:text-xl font-bold text-white">
                                Your Strategic Growth Partner for SEO Marketing in Ahmedabad
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
                                Many business owners are confused about whether SEO practices drive
                                results in Ahmedabad. The answer depends not on spending, but on
                                strategy and quality of execution.
                            </p>
                            <p className="text-base leading-relaxed text-white/70 mt-3">
                                At Foxaircomm, we design precision-led SEO systems that help
                                competitive Ahmedabad businesses generate consistent inbound leads,
                                not unpredictable traffic spikes.
                            </p>
                        </div>

                        {/* Why Foxaircomm — feature list */}
                        <div
                            className={`transition-all duration-700 delay-250 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                }`}
                        >
                            <p className="text-sm font-bold text-white uppercase tracking-widest mb-2">
                                Why Businesses Choose Foxaircomm as the Best SEO Company in Ahmedabad
                            </p>
                            <ul className="flex flex-col gap-2">
                                {[
                                    "9+ years of hands-on SEO execution across B2B, manufacturing, healthcare, education, SaaS, professional services & local service industries",
                                    "Thorough knowledge of Ahmedabad's competitive search landscape",
                                    "Clear growth planning instead of rigid monthly packages",
                                    "Ethical, Google-compliant SEO systems built for long-term ranking stability",
                                    "Business-first reporting focused on leads, conversions & revenue signals",
                                ].map((point) => (
                                    <li key={point} className="flex items-start gap-2 text-sm text-white/70">
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#F07830] flex-shrink-0" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
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
                                Request a Quick SEO Health Check
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
                                Our SEO Services
                            </a>
                        </div>
                    </div>

                    {/* ── RIGHT: Dashboard mockup (unchanged) ── */}
                    {/* ── RIGHT: SEO Dashboard mockup ── */}
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
                                    foxaircomm.com / seo-dashboard
                                </div>
                                <div className="flex items-center gap-1.5 text-green-600 text-xs font-bold whitespace-nowrap">
                                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse" />
                                    Live
                                </div>
                            </div>

                            {/* Dashboard body */}
                            <div className="p-5 bg-white">

                                {/* Organic traffic chart card */}
                                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 mb-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <p className="text-sm font-bold text-gray-700">Organic Traffic Growth</p>
                                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-orange-50 text-[#F07830]">
                                            ↑ +38% this quarter
                                        </span>
                                    </div>
                                    <EngagementChart />
                                </div>

                                {/* Keyword ranking summary strip */}
                                <div className="grid grid-cols-3 gap-2 mb-4">
                                    {[
                                        { val: "142", label: "Keywords Ranking" },
                                        { val: "37", label: "Page 1 Keywords" },
                                        { val: "9", label: "Top 3 Positions" },
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

                                {/* Keyword rankings list */}
                                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                                    Top Ranking Keywords
                                </p>
                                <div className="flex flex-col gap-2">
                                    {[
                                        { keyword: "SEO company in Ahmedabad", position: "#2", change: "↑ 5" },
                                        { keyword: "digital marketing agency Ahmedabad", position: "#3", change: "↑ 8" },
                                        { keyword: "local SEO services Ahmedabad", position: "#1", change: "↑ 3" },
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
                                                <p className="text-xs text-gray-400">Google Search · Ahmedabad</p>
                                            </div>
                                            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700 whitespace-nowrap">
                                                {change}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                                    <span className="text-xs text-gray-400">Last crawled: just now</span>
                                    <span className="text-xs font-semibold px-2 py-1 rounded-lg bg-blue-50 text-[#0B3C5D]">
                                        Site health: 98% ✓
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
                                Google Partner Certified SEO Agency
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
                            What Is{" "}
                            <span className="text-[#F07830]">Search Engine Optimisation (SEO)?</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Search Engine Optimisation (SEO) is the structured process of improving
                            your website's visibility across different search engines like Google,
                            Bing, and Yandex — so your ideal customers find you naturally, without
                            heavy dependence on paid ads.
                        </p>
                    </div>

                    {/* When SEO becomes essential */}
                    <div className="mb-16">
                        <p className="text-gray-600 font-semibold text-center mb-8">
                            For competitive markets like Ahmedabad, SEO becomes essential when:
                        </p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { number: "01", title: "Rising Ad Costs", description: "Paid advertising costs keep rising, squeezing your marketing budget and margins." },
                                { number: "02", title: "Inconsistent Lead Quality", description: "Lead quality from ads becomes inconsistent, wasting spend on poor-fit prospects." },
                                { number: "03", title: "Local Competition", description: "Local competition outranks your business in search results, taking your customers." },
                                { number: "04", title: "Poor Map Visibility", description: "Google Maps visibility is poor, making it hard for nearby customers to find you." },
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
                    </div>

                    {/* Who benefits most */}
                    <div>
                        <div className="text-center mb-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                                Who Benefits Most from{" "}
                                <span className="text-[#F07830]">SEO Services in Ahmedabad?</span>
                            </h3>
                            <p className="text-gray-500 max-w-2xl mx-auto">
                                Our SEO services generate the highest ROI for:
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
                            {[
                                "Local service providers (clinics, contractors, consultants, agencies)",
                                "B2B businesses and industrial manufacturers",
                                "Exporters and trading firms",
                                "Startups and growth-stage companies",
                                "Professional practitioners (CA, lawyers, architects, coaches)",
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

                        <p className="text-gray-600 max-w-2xl mx-auto text-center leading-relaxed">
                            If your customers diligently search online before making a purchase, SEO
                            marketing in Ahmedabad becomes a business-critical investment. In this
                            case, professional SEO services in Ahmedabad create consistent
                            visibility, trust, and inbound demand.
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
                            Our Process
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                            What Do{" "}
                            <span className="text-[#0B3C5D]">SEO Services</span> Actually Involve?
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-base">
                            As a data-driven SEO agency, Ahmedabad businesses rely on our services, which include:
                        </p>
                    </div>

                    {/* ── Service category cards ── */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            {
                                icon: "⚙️",
                                title: "Technical SEO Foundation",
                                items: [
                                    "Website architecture audits",
                                    "Set up of tracking tools, including GSC, GA4, and Google Tag Manager",
                                    "Speed and performance optimisation",
                                    "Crawlability and indexation improvements",
                                    "Core Web Vitals optimisation",
                                ],
                            },
                            {
                                icon: "📍",
                                title: "Local SEO Strategy",
                                subtitle: "Local SEO Agency in Ahmedabad",
                                note: "As a local SEO agency in Ahmedabad, we emphasize Google Maps visibility, neighbourhood-level relevance, and hyperlocal trust signals that influence buying decisions.",
                                items: [
                                    "Google Business Profile optimisation",
                                    "Local NAP citation development",
                                    "Map pack ranking strategies",
                                    "Hyperlocal keyword targeting",
                                ],
                            },
                            {
                                icon: "📝",
                                title: "On-Page SEO & Content Strategy",
                                items: [
                                    "Search intent mapping",
                                    "Keyword research process",
                                    "Service page optimisation",
                                    "Conversion-driven content writing",
                                    "Authority-building blog strategy",
                                ],
                            },
                            {
                                icon: "🔗",
                                title: "Authority & Trust Development",
                                items: [
                                    "Ethical backlink acquisition — article submission, blog posting, image submission, and PDF submission",
                                    "Brand mentions and digital PR",
                                    "Local relevance strengthening",
                                ],
                            },
                            {
                                icon: "📊",
                                title: "Analytics, Tracking & Reporting",
                                items: [
                                    "Keyword movement tracking",
                                    "Lead source monitoring",
                                    "Monthly growth dashboards",
                                    "ROI-centric reporting",
                                ],
                            },
                            {
                                icon: "🛒",
                                title: "E-commerce SEO Services",
                                items: [
                                    "Website development on platforms like Shopify",
                                    "Product & category optimisation",
                                ],
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
                                {/* Left accent bar */}
                                <div className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-[#0B3C5D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="flex items-start gap-4 mb-3">
                                    <div className="flex-shrink-0 w-12 h-12 bg-[#0B3C5D]/5 rounded-xl flex items-center justify-center text-2xl group-hover:bg-[#0B3C5D]/10 transition-colors duration-200">
                                        {card.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-base group-hover:text-[#0B3C5D] transition-colors duration-200">
                                            {card.title}
                                        </h4>
                                        {card.subtitle && (
                                            <p className="text-xs font-semibold text-[#F07830] mt-0.5">{card.subtitle}</p>
                                        )}
                                    </div>
                                </div>

                                {card.note && (
                                    <p className="text-sm text-gray-500 leading-relaxed mb-3">{card.note}</p>
                                )}

                                <ul className="space-y-1.5">
                                    {card.items.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm text-gray-500 leading-relaxed">
                                            <span className="mt-1.5 w-1 h-1 rounded-full bg-[#0B3C5D] flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* ── Closing statement + CTA ── */}
                    <div
                        className={`transition-all duration-700 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                        style={{ transitionDelay: "500ms" }}
                    >
                        <p className="text-gray-600 max-w-3xl mx-auto text-center leading-relaxed mb-10">
                            This structured execution framework positions Foxaircomm among the{" "}
                            <span className="font-semibold text-gray-900">top SEO companies in Ahmedabad</span>{" "}
                            for sustainable ranking growth.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 bg-[#0B3C5D] rounded-2xl px-8 py-6">
                            <div>
                                <p className="text-white font-bold text-lg">Ready to build your SEO foundation?</p>
                                <p className="text-blue-300 text-sm mt-1">Let's map out a growth strategy with Foxaircomm.</p>
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

                    {/* ── PAIN POINTS → SOLUTIONS ── */}
                    <div className="mb-14">
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#185FA5] bg-[#E6F1FB] px-4 py-1.5 rounded-full mb-4">
                            Problems We Solve
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Real Business Challenges in Ahmedabad —{" "}
                            <span className="text-[#F07830]">And Our SEO Solutions</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mb-8 text-sm leading-relaxed">
                            Every SEO engagement starts by mapping the exact business problem to a
                            deliberate, strategic response.
                        </p>

                        <div className="overflow-hidden rounded-xl border border-gray-100">
                            <div className="grid grid-cols-2 bg-gray-50 px-5 py-3">
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Business Pain Point</span>
                                <span className="text-xs font-bold uppercase tracking-widest text-[#0B3C5D]">Our Strategic SEO Solution</span>
                            </div>
                            {[
                                ["Low local search visibility", "Hyperlocal keyword targeting + city-focused content"],
                                ["Poor Google Maps rankings", "Advanced local SEO + trust signals"],
                                ["Dependence on paid ads", "Organic lead acquisition systems"],
                                ["Inconsistent inbound enquiries", "Funnel-based content & ranking strategy"],
                                ["Confusing SEO reports", "Simple, business-readable reporting"],
                            ].map(([pain, solution], i) => (
                                <div
                                    key={pain}
                                    className={`grid grid-cols-2 px-5 py-4 items-center ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"} border-t border-gray-100`}
                                >
                                    <span className="text-sm text-gray-600">{pain}</span>
                                    <span className="text-sm font-semibold text-gray-900">{solution}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* DIVIDER */}
                    <div className="border-t border-gray-100 mb-14" />

                    {/* ── WHO IT'S NOT FOR ── */}
                    <div className="mb-14">
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#993C1D] bg-[#FAECE7] px-4 py-1.5 rounded-full mb-4">
                            Fit Check
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Who Our SEO Services Are{" "}
                            <span className="text-[#993C1D]">NOT</span> For
                        </h2>
                        <p className="text-gray-500 max-w-2xl mb-8 text-sm leading-relaxed">
                            To maintain outcome quality, our SEO solutions are not designed for:
                        </p>

                        <div className="grid md:grid-cols-2 gap-3">
                            {[
                                "Businesses that are expecting overnight ranking promises",
                                "Low-budget, mass-package SEO buyers",
                                "Business owners expecting guaranteed keyword positions",
                                "Brands unwilling to invest in long-term growth",
                            ].map((item) => (
                                <div key={item} className="flex gap-4 items-start p-5 border border-gray-100 rounded-xl hover:border-orange-100 transition-colors duration-200 group">
                                    <div className="w-9 h-9 rounded-xl bg-[#FAECE7] flex items-center justify-center flex-shrink-0 group-hover:bg-[#F0997B]/30 transition-colors duration-200">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#993C1D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed pt-1.5">{item}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-500 mt-5 leading-relaxed">
                            We partner best with businesses that seek predictable scalability, not short-term hacks.
                        </p>
                    </div>

                    {/* DIVIDER */}
                    <div className="border-t border-gray-100 mb-14" />

                    {/* ── STRATEGIC WORKFLOW ── */}
                    <div className="mb-14">
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#185FA5] bg-[#E6F1FB] px-4 py-1.5 rounded-full mb-4">
                            Our Process
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            How Foxaircomm Executes SEO —{" "}
                            <span className="text-[#F07830]">Our Strategic Workflow</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mb-8 text-sm leading-relaxed">
                            This strategic workflow ensures our clients experience steady, compounding growth rather than unstable ranking spikes.
                        </p>

                        <div className="grid md:grid-cols-3 gap-3">
                            {[
                                "Local market & competitor analysis (Ahmedabad-specific)",
                                "Keyword + revenue intent mapping",
                                "Technical foundation optimisation",
                                "Local SEO execution",
                                "Content & authority building",
                                "Monthly optimisation & reporting refinement",
                            ].map((step, i) => (
                                <div key={step} className="flex gap-4 items-start p-5 border border-gray-100 rounded-xl hover:border-gray-300 transition-colors duration-200">
                                    <span className="w-8 h-8 rounded-lg bg-[#0B3C5D] text-white text-xs font-black flex items-center justify-center flex-shrink-0">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <p className="text-sm text-gray-600 leading-relaxed pt-1">{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* DIVIDER */}
                    <div className="border-t border-gray-100 mb-14" />

                    {/* ── REALISTIC OUTCOMES ── */}
                    <div className="mb-14">
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#185FA5] bg-[#E6F1FB] px-4 py-1.5 rounded-full mb-4">
                            Set Expectations
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            What Are the{" "}
                            <span className="text-[#F07830]">Realistic SEO Outcomes</span> Clients Can Expect?
                        </h2>
                        <p className="text-gray-500 max-w-2xl mb-8 text-sm leading-relaxed">
                            Instead of vague promises, we align expectations with real performance benchmarks:
                        </p>

                        <div className="grid md:grid-cols-2 gap-3">
                            {[
                                { icon: "🔍", title: "Enhanced keyword visibility", desc: "Within 3–6 months of consistent execution." },
                                { icon: "📈", title: "Stable ranking momentum", desc: "Building over 6–9 months as authority compounds." },
                                { icon: "🎯", title: "Lead consistency", desc: "Across quarters, not weeks — sustainable, not spiky." },
                                { icon: "💸", title: "Reduced paid ad dependency", desc: "Organic channels gradually take over lead generation." },
                            ].map((item) => (
                                <div key={item.title} className="flex gap-4 items-start p-5 border border-gray-100 rounded-xl hover:border-gray-300 transition-colors duration-200">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-lg flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-500 mt-5 leading-relaxed">
                            Our objective is to establish Foxaircomm as your long-term organic growth partner.
                            Our strategies are commonly used by businesses that are expecting to stabilize lead
                            flow after relying heavily on paid advertising.
                        </p>
                    </div>

                    {/* DIVIDER */}
                    <div className="border-t border-gray-100 mb-14" />

                    {/* ── FOXAIRCOMM VS TYPICAL AGENCIES ── */}
                    <div className="mb-14">
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#993C1D] bg-[#FAECE7] px-4 py-1.5 rounded-full mb-4">
                            Comparison
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Foxaircomm vs Typical SEO Agencies:{" "}
                            <span className="text-[#F07830]">What Actually Drives Growth?</span>
                        </h2>

                        <div className="mt-8 overflow-hidden rounded-xl border border-gray-100">
                            <div className="grid grid-cols-2">
                                <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#0B3C5D] px-5 py-3">Foxaircomm</span>
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-500 bg-gray-50 px-5 py-3">Typical SEO Agencies</span>
                            </div>
                            {[
                                ["Strategy-first execution", "Package-based execution"],
                                ["Transparent, actionable reporting", "Vanity metrics & dashboards"],
                                ["Ethical, long-term SEO systems", "Short-term ranking tactics"],
                                ["Business outcome–focused SEO", "Keyword-only focus"],
                            ].map(([us, them], i) => (
                                <div key={us} className={`grid grid-cols-2 border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                                    <span className="text-sm font-semibold text-gray-900 px-5 py-4 border-r border-gray-100 flex items-center gap-2">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                        {us}
                                    </span>
                                    <span className="text-sm text-gray-500 px-5 py-4">{them}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* DIVIDER */}
                    <div className="border-t border-gray-100 mb-14" />

                    {/* ── MONTHLY REPORTING ── */}
                    <div className="mb-14">
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#185FA5] bg-[#E6F1FB] px-4 py-1.5 rounded-full mb-4">
                            Reporting
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            How Can I Track{" "}
                            <span className="text-[#F07830]">Monthly SEO Performance</span> and Progress?
                        </h2>
                        <p className="text-gray-500 max-w-2xl mb-8 text-sm leading-relaxed">
                            Our monthly reports cover:
                        </p>

                        <div className="grid md:grid-cols-3 gap-3">
                            {[
                                { icon: "📈", title: "Keyword movement trends" },
                                { icon: "🚦", title: "Organic traffic growth" },
                                { icon: "🎯", title: "Lead quality tracking" },
                                { icon: "📍", title: "Local ranking visibility" },
                                { icon: "🔄", title: "Conversion behaviour insights" },
                            ].map((item) => (
                                <div key={item.title} className="flex gap-3 items-center p-4 border border-gray-100 rounded-xl hover:border-gray-300 transition-colors duration-200">
                                    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-base flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-500 mt-5 leading-relaxed">
                            All reports are designed for business clarity, not technical complexity.
                        </p>
                    </div>

                    {/* DIVIDER */}
                    <div className="border-t border-gray-100 mb-14" />

                    {/* ── RANKING TIMELINES ── */}
                    <div>
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#185FA5] bg-[#E6F1FB] px-4 py-1.5 rounded-full mb-4">
                            Timelines
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            How Long Does It Realistically Take for{" "}
                            <span className="text-[#F07830]">Keywords to Rank?</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mb-8 text-sm leading-relaxed">
                            The following are the ideal timelines for keywords to rank:
                        </p>

                        <div className="overflow-hidden rounded-xl border border-gray-100">
                            <div className="grid grid-cols-2 bg-gray-50 px-5 py-3">
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Competition</span>
                                <span className="text-xs font-bold uppercase tracking-widest text-[#0B3C5D]">Time Frame</span>
                            </div>
                            {[
                                ["Low competition", "8–12 weeks"],
                                ["Medium competition", "4–5 months"],
                                ["High competition", "9–12 months or more"],
                            ].map(([level, time], i) => (
                                <div
                                    key={level}
                                    className={`grid grid-cols-2 px-5 py-4 items-center ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"} border-t border-gray-100`}
                                >
                                    <span className="text-sm text-gray-600">{level}</span>
                                    <span className="text-sm font-semibold text-gray-900">{time}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-500 mt-5 leading-relaxed">
                            Ranking timelines vary based on industry, authority level, and competitive density.
                        </p>
                    </div>

                </div>
            </section>

            <section className="w-full bg-gray-50 py-16 px-6 md:px-12">
                <div className="max-w-6xl mx-auto space-y-14">

                    {/* ── ETHICAL SEO PRACTICES ── */}
                    <div>
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#993C1D] bg-[#FAECE7] px-4 py-1.5 rounded-full mb-3">
                            Our Standards
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                            How Do You Ensure Ethical, Result-Driven SEO Outcomes?
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            We strictly follow Google's white-hat SEO practices by avoiding:
                        </p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                            {[
                                "Keyword stuffing",
                                "Automated backlinks",
                                "Link farming",
                                "Black-hat ranking shortcuts",
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3 hover:border-orange-100 transition-colors duration-200 group">
                                    <div className="w-8 h-8 rounded-lg bg-[#FAECE7] flex items-center justify-center flex-shrink-0 group-hover:bg-[#F0997B]/30 transition-colors duration-200">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#993C1D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </div>
                                    <h4 className="text-sm font-semibold text-gray-800">{item}</h4>
                                </div>
                            ))}
                        </div>

                        <p className="text-sm text-gray-500 leading-relaxed">
                            This ensures long-term ranking stability and algorithm safety.
                        </p>
                    </div>

                    {/* ── PRICING + SEO VS PAID ADS ── */}
                    <div className="grid lg:grid-cols-2 gap-8">

                        {/* LEFT — Pricing */}
                        <div>
                            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0C447C] bg-[#E6F1FB] px-4 py-1.5 rounded-full mb-3">
                                Investment
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                What Are Your SEO Service Charges?
                            </h2>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                SEO pricing depends on:
                            </p>

                            <div className="flex flex-col gap-3 mb-6">
                                {[
                                    "Business objectives",
                                    "Industry competition",
                                    "Website condition",
                                    "Growth targets",
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3 hover:border-gray-200 transition-colors duration-200">
                                        <div className="w-8 h-8 rounded-lg bg-[#E6F1FB] flex items-center justify-center flex-shrink-0">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#185FA5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </div>
                                        <h4 className="text-sm font-semibold text-gray-800">{item}</h4>
                                    </div>
                                ))}
                            </div>

                            <p className="text-sm text-gray-500 leading-relaxed mb-5">
                                We offer customised SEO growth plans aligned with business requirements and ROI potential.
                            </p>


                            <a href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                                style={{ background: "linear-gradient(135deg, #F07830, #d95e18)" }}
                            >
                                Request a Consultation
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>

                        {/* RIGHT — SEO vs Paid Ads */}
                        <div>
                            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#27500A] bg-[#EAF3DE] px-4 py-1.5 rounded-full mb-3">
                                Long-Term View
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                Is SEO Better Than Paid Advertising for Long-Term Growth?
                            </h2>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                Paid ads generate immediate traffic, but stop the moment budgets pause. SEO builds:
                            </p>

                            <div className="flex flex-col gap-3 mb-6">
                                {[
                                    { icon: "🌱", title: "Sustainable visibility" },
                                    { icon: "📈", title: "Compounding inbound leads" },
                                    { icon: "🤝", title: "Brand trust" },
                                ].map((item) => (
                                    <div key={item.title} className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3 hover:border-gray-200 transition-colors duration-200">
                                        <div className="w-9 h-9 rounded-lg bg-[#EAF3DE] flex items-center justify-center text-base flex-shrink-0">
                                            {item.icon}
                                        </div>
                                        <h4 className="text-sm font-semibold text-gray-800">{item.title}</h4>
                                    </div>
                                ))}
                            </div>

                            <p className="text-sm text-gray-500 leading-relaxed">
                                For long-term business scalability, SEO consistently delivers higher ROI.
                            </p>
                        </div>
                    </div>

                    {/* ── INTERNAL GROWTH PATH ── */}
                    <div className="bg-white border border-gray-100 rounded-xl px-6 py-5">
                        <h3 className="text-sm font-bold text-gray-900 mb-2">
                            Internal Growth Path — Deeper Execution Planning
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Businesses evaluating execution depth can explore our{" "}
                            <a href="/services/website-seo" className="font-semibold text-[#185FA5] hover:underline">
                                website SEO services
                            </a>{" "}
                            and{" "}
                            <a href="/services/local-seo" className="font-semibold text-[#185FA5] hover:underline">
                                local SEO services
                            </a>{" "}
                            to understand how layered optimisation accelerates scalable growth.
                        </p>
                    </div>

                    {/* ── FINAL CTA ── */}
                    <div className="bg-[#0B3C5D] rounded-2xl px-8 py-10 text-center">
                        <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                            Ready to Build Sustainable Organic Growth?
                        </h2>
                        <p className="text-blue-200 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
                            If you are looking for a trusted SEO company in Ahmedabad that prioritises
                            long-term impact over short-term ranking promises, Foxaircomm is ready to
                            partner with you.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">

                            <a href="/insights"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white text-sm border-2 border-white/30 hover:bg-white hover:text-[#0B3C5D] transition-all duration-200"
                            >
                                Get Detailed SEO Insights
                            </a>

                            <a href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white text-sm hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
                                style={{ background: "linear-gradient(135deg, #F07830, #d95e18)", boxShadow: "0 4px 16px rgba(240,120,48,0.4)" }}
                            >
                                Request a Strategic Consultation
                            </a>

                            <a href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white text-sm border-2 border-white/30 hover:bg-white hover:text-[#0B3C5D] transition-all duration-200"
                            >
                                Speak With Our SEO Team
                            </a>
                        </div>
                    </div>

                </div>
            </section >






        </div >
    );
}