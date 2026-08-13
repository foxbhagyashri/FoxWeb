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



export default function EcommWebsiteDevelopmentAhemdabad() {

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
                                    E-Commerce Development · Ahmedabad
                                </span>
                            </div>
                        </div>

                        {/* H1 */}
                        <div
                            className={`transition-all duration-700 delay-100 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                }`}
                        >
                            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
                                Strategic{" "}
                                <span className="text-[#F07830] relative inline-block">
                                    E-Commerce Website Development
                                    <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full bg-[#F07830] opacity-30" />
                                </span>{" "}
                                For Ahmedabad Businesses
                            </h1>
                        </div>

                        {/* H2 */}
                        <div
                            className={`transition-all duration-700 delay-150 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                }`}
                        >
                            <h2 className="text-lg md:text-xl font-bold text-white">
                                Scalable Online Stores Built for Performance
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
                                Foxaircomm develops secure, high-performing e-Commerce platforms
                                for startups, SMEs, and manufacturers in Ahmedabad.
                            </p>
                            <p className="text-base leading-relaxed text-white/70 mt-3">
                                We design conversion-focused online stores that streamline daily
                                operations and support long-term digital growth.
                            </p>
                        </div>

                        {/* What is E-Commerce Website Development? */}
                        <div
                            className={`transition-all duration-700 delay-250 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                }`}
                        >
                            <p className="text-sm font-bold text-white uppercase tracking-widest mb-2">
                                What is E-Commerce Website Development?
                            </p>
                            <ul className="flex flex-col gap-2">
                                {[
                                    "E-Commerce website development is the structured process of building digital platforms that enable businesses to sell products or services online",
                                    "It includes factors such as user experience design, product architecture, secure payment integration, inventory automation, and backend management systems",
                                    "A professional E-Commerce website development company in Ahmedabad emphasizes not just launching a store, but building infrastructure that supports scalability, performance, and measurable revenue growth",
                                ].map((point) => (
                                    <li key={point} className="flex items-start gap-2 text-sm text-white/70">
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#F07830] flex-shrink-0" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Who Should Invest in E-Commerce Development? */}
                        <div
                            className={`transition-all duration-700 delay-250 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                }`}
                        >
                            <p className="text-sm font-bold text-white uppercase tracking-widest mb-2">
                                Who Should Invest in E-Commerce Development?
                            </p>
                            <p className="text-sm leading-relaxed text-white/70 mb-2">
                                Businesses benefit from professional e-commerce website
                                development services in Ahmedabad when they:
                            </p>
                            <ul className="flex flex-col gap-2">
                                {[
                                    "Want to reduce dependency on marketplaces for increasing sales",
                                    "Need better control over branding and pricing",
                                    "Are facing issues with inventory or order management",
                                    "Experience low conversion rates",
                                    "Plan to scale operations digitally",
                                ].map((point) => (
                                    <li key={point} className="flex items-start gap-2 text-sm text-white/70">
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#F07830] flex-shrink-0" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm leading-relaxed text-white/70 mt-3">
                                Startups, SMEs, industrial manufacturers, retail brands, and D2C
                                businesses require structured digital commerce systems to compete
                                effectively in Ahmedabad's evolving business environment.
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
                                Request a Free Store Audit
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
                                Our E-Commerce Services
                            </a>
                        </div>
                    </div>

                    {/* ── RIGHT: E-Commerce store performance mockup ── */}
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
                                    foxaircomm.com / store-dashboard
                                </div>
                                <div className="flex items-center gap-1.5 text-green-600 text-xs font-bold whitespace-nowrap">
                                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse" />
                                    Live
                                </div>
                            </div>

                            {/* Dashboard body */}
                            <div className="p-5 bg-white">

                                {/* Sales chart card */}
                                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 mb-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <p className="text-sm font-bold text-gray-700">Store Revenue Growth</p>
                                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-orange-50 text-[#F07830]">
                                            ↑ +42% this quarter
                                        </span>
                                    </div>
                                    <EngagementChart />
                                </div>

                                {/* Store performance summary strip */}
                                <div className="grid grid-cols-3 gap-2 mb-4">
                                    {[
                                        { val: "1.2K", label: "Monthly Orders" },
                                        { val: "3.8%", label: "Conversion Rate" },
                                        { val: "₹2.1L", label: "Avg. Monthly Revenue" },
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

                                {/* Store activity list */}
                                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                                    Store Performance Highlights
                                </p>
                                <div className="flex flex-col gap-2">
                                    {[
                                        { keyword: "Checkout completion rate", position: "92%", change: "↑ 6" },
                                        { keyword: "Cart recovery via automation", position: "28%", change: "↑ 11" },
                                        { keyword: "Mobile page load speed", position: "1.4s", change: "↑ 2" },
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
                                                <p className="text-xs text-gray-400">Store Analytics · Ahmedabad</p>
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
                                        Store health: 98% ✓
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
                                Trusted E-Commerce Development Partner
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
                            Why Choose an{" "}
                            <span className="text-[#F07830]">E-Commerce Website Development Company in Ahmedabad?</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Ahmedabad's economy includes textiles, pharmaceuticals, manufacturing
                            units, exporters, and fast-growing startups. Working with an experienced
                            local team ensures your platform aligns with regional trade models and
                            customer behaviour.
                        </p>
                    </div>

                    {/* Why choose us — 3 pillars */}
                    <div className="mb-16">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { number: "01", title: "Local Market Understanding", description: "The benefit of working with an experienced e-commerce web development company in Ahmedabad is that it ensures your platform aligns with regional trade models and customer behaviour." },
                                { number: "02", title: "Strategic Collaboration", description: "Direct consultation enables faster clarity requirements, practical solution mapping, and smoother implementation cycles." },
                                { number: "03", title: "Business-Aligned Architecture", description: "Our Ahmedabad-based E-Commerce specialists design platforms that integrate seamlessly with real business processes — from B2B bulk ordering systems to high-volume retail operations." },
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

                    {/* Why Ahmedabad businesses trust Foxaircomm */}
                    <div>
                        <div className="text-center mb-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                                Why Ahmedabad Businesses Trust{" "}
                                <span className="text-[#F07830]">Foxaircomm</span>
                            </h3>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                            {[
                                "5+ years of web development experience",
                                "30+ digital commerce projects delivered",
                                "Experience across manufacturing, retail, B2B, and D2C sectors",
                                "Conversion-focused, performance-first development methodology",
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
                            As a structured E-Commerce website development company in Ahmedabad, we
                            prioritise technical precision, scalability, and long-term partnership.
                        </p>
                    </div>

                    {/* Platforms header */}
                    <div className="text-center mt-20 mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            What Are the Different{" "}
                            <span className="text-[#F07830]">Platforms We Specialise In?</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            As a performance-driven E-Commerce website development company in
                            Ahmedabad, we develop across a variety of scalable platforms.
                        </p>
                    </div>

                    {/* Platforms grid */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Shopify Development",
                                intro: "As a reliable Shopify website development company in Ahmedabad, we design:",
                                points: [
                                    "Custom Shopify themes",
                                    "Conversion-optimised checkout systems to understand the exact conversion",
                                    "App integrations and automation",
                                    "Shopify Plus enterprise setups",
                                ],
                                footer: "Suitable for fast-growing D2C and retail brands seeking quick deployment and scalability.",
                            },
                            {
                                title: "WooCommerce Development",
                                intro: "As an experienced WooCommerce development company in Ahmedabad, we offer:",
                                points: [
                                    "SEO-optimised WordPress-based stores",
                                    "Custom plugin development",
                                    "Flexible product architecture for flawless operation",
                                    "Content-commerce integration",
                                ],
                                footer: "Suitable for businesses looking for marketing flexibility and backend control.",
                            },
                            {
                                title: "Custom eCommerce Development",
                                intro: "As a custom E-Commerce website development company in Ahmedabad, we develop:",
                                points: [
                                    "B2B portals with role-based access",
                                    "Personalised pricing tiers and quotation systems",
                                    "ERP and CRM integrations for proper lead management",
                                    "Marketplace and multi-vendor platforms",
                                ],
                                footer: "Specifically designed for manufacturers, wholesalers, and enterprise-scale operations.",
                            },
                        ].map((platform) => (
                            <div
                                key={platform.title}
                                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col"
                            >
                                <h3 className="text-lg font-bold text-[#0B3C5D] mb-3">{platform.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed mb-3">{platform.intro}</p>
                                <ul className="flex flex-col gap-2 mb-4">
                                    {platform.points.map((point) => (
                                        <li key={point} className="flex items-start gap-2 text-sm text-gray-700">
                                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#F07830] flex-shrink-0" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-xs text-gray-400 leading-relaxed mt-auto pt-3 border-t border-gray-100">
                                    {platform.footer}
                                </p>
                            </div>
                        ))}
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
                            Our{" "}
                            <span className="text-[#0B3C5D]">Development Process</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-base">
                            A professional e-commerce website development company in Ahmedabad follows a structured execution framework:
                        </p>
                    </div>

                    {/* ── Process step cards ── */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            {
                                number: "01",
                                icon: "🧭",
                                title: "Discovery & Strategy",
                                description: "At the initial stage, we understand our client's business goals, industry requirements, competitors, and operational workflows before defining platform architecture.",
                            },
                            {
                                number: "02",
                                icon: "🎨",
                                title: "UI/UX Design",
                                description: "After understanding the requirements, mobile-first wireframes are created to simplify navigation, enhance product presentation, and reduce checkout friction.",
                            },
                            {
                                number: "03",
                                icon: "⚙️",
                                title: "Development & Integration",
                                description: "Secure payment gateways, shipping systems, and automated inventory logic are integrated into a scalable backend infrastructure.",
                            },
                            {
                                number: "04",
                                icon: "🧪",
                                title: "Testing & Optimisation",
                                description: "We analyse factors such as speed, security, and usability testing to eliminate performance gaps before launch.",
                            },
                            {
                                number: "05",
                                icon: "🚀",
                                title: "Launch & Ongoing Support",
                                description: "Post-launch monitoring and continuous optimisation ensure sustained performance and growth.",
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

                    {/* ── Industry-specific solutions header ── */}
                    <div className={`text-center transition-all duration-700 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                            Industry-Specific{" "}
                            <span className="text-[#0B3C5D]">E-Commerce Solutions</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-base">
                            As a specialised E-Commerce website development company in Ahmedabad, Foxaircomm builds customised platforms aligned with industry-specific operational models and their needs.
                        </p>
                    </div>

                    {/* ── Industry cards ── */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            {
                                icon: "👗",
                                title: "Fashion & Apparel",
                                items: [
                                    "Fashion commerce needs a strong visual storytelling and advanced variant management.",
                                    "We implement high-resolution product galleries, intelligent size and colour filtering, predictive search, and automated return workflows, which directly impact conversion rate, retention rates, and customer trust.",
                                    "Inventory and warehouse integrations enhance stock accuracy and reduce fulfilment delays.",
                                ],
                            },
                            {
                                icon: "📱",
                                title: "Electronics & Gadgets",
                                items: [
                                    "Electronics buyers demand detailed technical clarity.",
                                    "We design platforms that include structured specification tables, product comparison modules, EMI and financing integration, bundled pricing logic, and real-time stock visibility.",
                                    "This strengthens buyer confidence and improves average order value.",
                                ],
                            },
                            {
                                icon: "🛒",
                                title: "FMCG & Retail",
                                items: [
                                    "FMCG platforms depend on speed and repeat purchases.",
                                    "We design subscription-based ordering systems, one-click reordering features, geo-based delivery logic, and automated inventory synchronisation.",
                                    "This creates frictionless buying cycles and enhances customer retention.",
                                ],
                            },
                            {
                                icon: "🏭",
                                title: "Industrial & B2B Businesses",
                                items: [
                                    "B2B commerce involves complex pricing structures and distributor-based access.",
                                    "As a custom E-Commerce website development company in Ahmedabad, we implement role-based login dashboards, MOQ logic, quotation modules, ERP integration, and tax-compliant invoicing systems.",
                                    "This digitises manual coordination and improves operational transparency.",
                                ],
                            },
                            {
                                icon: "⚕️",
                                title: "Healthcare & Pharmaceutical Stores",
                                items: [
                                    "Healthcare E-Commerce requires regulatory sensitivity and secure data handling.",
                                    "We integrate prescription upload modules, encrypted transactions, expiry-date inventory management, and location-based availability systems.",
                                    "This ensures compliance, operational accuracy, and strong customer trust in healthcare commerce.",
                                ],
                            },
                            {
                                icon: "🎓",
                                title: "Education & Online Courses",
                                items: [
                                    "Educational platforms require secure content delivery and access control.",
                                    "We develop LMS-integrated systems, subscription models, membership access management, automated onboarding workflows, and protected payment systems.",
                                    "This supports scalable digital learning.",
                                ],
                            },
                            {
                                icon: "🚗",
                                title: "Automotive & EV Accessories",
                                items: [
                                    "Automotive buyers need compatibility precision.",
                                    "We implement vehicle-based filtering (brand, model, year), technical specification displays, structured category hierarchies, installation resource integration, and multi-warehouse inventory sync.",
                                    "This ultimately reduces return rates and improves customer confidence.",
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
                                    </div>
                                </div>

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
                            <span className="font-semibold text-gray-900">top e-commerce website development companies in Ahmedabad</span>{" "}
                            for sustainable, scalable online growth.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 bg-[#0B3C5D] rounded-2xl px-8 py-6">
                            <div>
                                <p className="text-white font-bold text-lg">Ready to build your online store?</p>
                                <p className="text-blue-300 text-sm mt-1">Let's map out your e-commerce strategy with Foxaircomm.</p>
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

                    {/* ── SCALING WITH CUSTOM E-COMMERCE SOLUTIONS ── */}
                    <div className="mb-14">
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#185FA5] bg-[#E6F1FB] px-4 py-1.5 rounded-full mb-4">
                            Scalability
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            How Businesses Scale with{" "}
                            <span className="text-[#F07830]">Custom E-Commerce Solutions</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mb-8 text-sm leading-relaxed">
                            A forward-thinking e-commerce web development company in Ahmedabad enables sustainable growth through:
                        </p>

                        <div className="grid md:grid-cols-2 gap-3">
                            {[
                                "Multi-location inventory synchronisation",
                                "Marketplace integration",
                                "CRM and ERP connectivity",
                                "Marketing automation systems",
                                "Data-driven analytics dashboards",
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
                            Foxaircomm builds infrastructure that evolves with increasing product lines, transaction volume, and operational complexity.
                        </p>
                    </div>

                    {/* DIVIDER */}
                    <div className="border-t border-gray-100 mb-14" />

                    {/* ── COST FACTORS ── */}
                    <div className="mb-14">
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#993C1D] bg-[#FAECE7] px-4 py-1.5 rounded-full mb-4">
                            Investment
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            What Does{" "}
                            <span className="text-[#F07830]">eCommerce Website Development</span> Cost?
                        </h2>
                        <p className="text-gray-500 max-w-2xl mb-8 text-sm leading-relaxed">
                            The cost of working with an e-commerce website development company in Ahmedabad depends on the following factors:
                        </p>

                        <div className="grid md:grid-cols-3 gap-3">
                            {[
                                "Platform selection",
                                "Product catalogue size",
                                "Custom feature requirements",
                                "Third-party integrations",
                                "Design complexity",
                            ].map((item, i) => (
                                <div key={item} className="flex gap-4 items-start p-5 border border-gray-100 rounded-xl hover:border-gray-300 transition-colors duration-200">
                                    <span className="w-8 h-8 rounded-lg bg-[#0B3C5D] text-white text-xs font-black flex items-center justify-center flex-shrink-0">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <p className="text-sm text-gray-600 leading-relaxed pt-1">{item}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-500 mt-5 leading-relaxed">
                            Basic Shopify or WooCommerce implementations differ significantly from enterprise-grade custom B2B platforms.
                            A structured consultation helps define the scope and investment requirements accurately.
                        </p>
                    </div>

                    {/* DIVIDER */}
                    <div className="border-t border-gray-100 mb-14" />

                    {/* ── LET'S BUILD YOUR ECOMMERCE PLATFORM (CTA) ── */}
                    <div>
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#185FA5] bg-[#E6F1FB] px-4 py-1.5 rounded-full mb-4">
                            Get Started
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Let's Build Your{" "}
                            <span className="text-[#F07830]">eCommerce Platform</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mb-8 text-sm leading-relaxed">
                            If you are planning to launch or scale your online store:
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 bg-[#0B3C5D] rounded-2xl px-8 py-6">
                            <div>
                                <p className="text-white font-bold text-lg">Speak to our eCommerce experts</p>
                                <p className="text-blue-300 text-sm mt-1">
                                    Work with a results-driven best e-commerce website development company in Ahmedabad and build a scalable digital commerce platform designed for long-term growth.
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