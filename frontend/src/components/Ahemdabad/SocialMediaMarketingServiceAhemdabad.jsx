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



export default function SocialMediaService() {

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
                                    Social Media Marketing · Ahmedabad
                                </span>
                            </div>
                        </div>

                        {/* H1 */}
                        <div
                            className={`transition-all duration-700 delay-100 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                }`}
                        >
                            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
                                Strategic Social Media Marketing for{" "}
                                <span className="text-[#F07830] relative inline-block">
                                    Growing Businesses
                                    <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full bg-[#F07830] opacity-30" />
                                </span>{" "}
                                in Ahmedabad
                            </h1>
                        </div>

                        {/* H2 */}
                        <div
                            className={`transition-all duration-700 delay-150 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                }`}
                        >
                            <h2 className="text-lg md:text-xl font-bold text-white">
                                Social media marketing services in Ahmedabad for performance-driven brands
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
                                Social media today is not just about posting creatives — it is a structured growth
                                engine that combines audience psychology, content strategy, and data-driven
                                optimisation.
                            </p>
                            <p className="text-base leading-relaxed text-white/70 mt-3">
                                At Foxaircomm, we approach social media marketing as a performance system where
                                every post, campaign, and interaction contributes to brand positioning, engagement,
                                and lead generation.
                            </p>
                        </div>

                        {/* CTA buttons */}
                        <div
                            className={`transition-all duration-700 delay-300 flex flex-wrap gap-4 mt-2 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                }`}
                        >
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-white text-base transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl"
                                style={{
                                    background: "linear-gradient(135deg, #F07830, #d95e18)",
                                    boxShadow: "0 4px 20px rgba(240,120,48,0.4)",
                                }}
                            >
                                Get in Touch
                                <svg
                                    width="16" height="16" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                            <a
                                href="/services"
                                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-white text-base border-2 border-white/30 transition-all duration-200 hover:bg-white hover:text-[#0B3C5D]"
                            >
                                Our Services
                            </a>
                        </div>

                        {/* Trust stats */}
                        <div
                            className={`transition-all duration-700 delay-300 flex gap-8 mt-2 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                }`}
                        >
                            {[
                                { val: "300+", label: "Brands Managed" },
                                { val: "5×", label: "Avg. Engagement" },
                                { val: "98%", label: "Client Retention" },
                            ].map((s) => (
                                <div key={s.label} className="flex flex-col">
                                    <span className="text-xl font-black text-[#F07830]">{s.val}</span>
                                    <span className="text-xs mt-0.5 text-white/50">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── RIGHT: Dashboard mockup ── */}
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
                                    foxaircomm.com / social-dashboard
                                </div>
                                <div className="flex items-center gap-1.5 text-green-600 text-xs font-bold whitespace-nowrap">
                                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse" />
                                    Live
                                </div>
                            </div>

                            {/* Dashboard body */}
                            <div className="p-5 bg-white">

                                {/* Engagement chart card */}
                                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 mb-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <p className="text-sm font-bold text-gray-700">Weekly Engagement Rate</p>
                                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-orange-50 text-[#F07830]">
                                            ↑ +24% this week
                                        </span>
                                    </div>
                                    <EngagementChart />
                                </div>

                                {/* Platform overview */}
                                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                                    Platform Overview
                                </p>
                                <div className="flex flex-col gap-2">
                                    {platforms.map(({ name, Icon, followers, growth }) => (
                                        <div
                                            key={name}
                                            className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                                        >
                                            <div className="w-9 h-9 rounded-xl overflow-hidden flex-shrink-0">
                                                <Icon />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-bold text-gray-800">{name}</p>
                                                <p className="text-xs text-gray-400">{followers} followers</p>
                                            </div>
                                            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700 whitespace-nowrap">
                                                {growth}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                                    <span className="text-xs text-gray-400">Last synced: just now</span>
                                    <span className="text-xs font-semibold px-2 py-1 rounded-lg bg-blue-50 text-[#0B3C5D]">
                                        All channels active ✓
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
                                Meta & Google Partner Certified Agency
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
                            What is Social Media Marketing —{" "}
                            <span className="text-[#F07830]">A Strategic Growth System</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto mb-3">
                            Social media marketing is a structured process focused on turning audience attention
                            into measurable business outcomes such as engagement, leads, and conversions.
                        </p>
                        <p className="text-gray-600 font-semibold">
                            It works through multiple interconnected layers:
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {cards.map((card) => (
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

                    {/* CTA */}
                    <div className="mt-12 text-center">
                        <a
                            href="/contact"
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
                <div className="max-w-6xl mx-auto space-y-24">

                    {/* ── SECTION 1: WHO NEEDS THIS ── */}
                    <div>
                        {/* Header */}
                        <div className={`text-center mb-12 transition-all duration-700 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F07830] bg-orange-50 border border-orange-100 px-4 py-1.5 rounded-full mb-4">
                                Who It's For
                            </span>
                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                                Who Needs Social Media{" "}
                                <span className="text-[#0B3C5D]">Marketing Services</span>
                            </h2>
                            <p className="text-gray-500 max-w-2xl mx-auto text-base">
                                Businesses across industries benefit from structured strategies,
                                especially when growth becomes inconsistent or unpredictable.
                            </p>
                        </div>

                        {/* Cards */}
                        <div className="grid md:grid-cols-2 gap-5">
                            {whoCards.map((card, i) => (
                                <div
                                    key={card.title}
                                    className={`group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm
                  hover:shadow-lg hover:-translate-y-1 hover:border-[#0B3C5D]/20
                  transition-all duration-300 cursor-default
                  ${card.span ? "md:col-span-2" : ""}
                  ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                                    style={{ transitionDelay: `${i * 80 + 150}ms` }}
                                >
                                    {/* Left accent bar */}
                                    <div className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-[#0B3C5D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className={`flex items-start gap-4 ${card.span ? "md:flex-row" : ""}`}>
                                        <div className="flex-shrink-0 w-12 h-12 bg-[#0B3C5D]/5 rounded-xl flex items-center justify-center text-2xl group-hover:bg-[#0B3C5D]/10 transition-colors duration-200">
                                            {card.icon}
                                        </div>
                                        <div className={card.span ? "md:max-w-2xl" : ""}>
                                            <h4 className="font-bold text-gray-900 text-base mb-1.5 group-hover:text-[#0B3C5D] transition-colors duration-200">
                                                {card.title}
                                            </h4>
                                            <p className="text-sm text-gray-500 leading-relaxed">{card.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── SECTION 2: WHEN TO INVEST ── */}
                    <div>
                        {/* Header */}
                        <div className={`text-center mb-12 transition-all duration-700 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: "100ms" }}>
                            <span className="inline-block text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 border border-red-100 px-4 py-1.5 rounded-full mb-4">
                                Warning Signs
                            </span>
                            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                                When Should You Invest in{" "}
                                <span className="text-[#F07830]">Social Media Marketing</span>
                            </h3>
                            <p className="text-gray-500 max-w-2xl mx-auto text-base">
                                Many businesses delay action — but these signals clearly indicate it's time to invest.
                            </p>
                        </div>

                        {/* Warning cards */}
                        <div className="grid md:grid-cols-2 gap-5">
                            {whenCards.map((card, i) => (
                                <div
                                    key={card.title}
                                    className={`group flex items-start gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-6
                  hover:bg-red-50 hover:border-red-100 hover:shadow-md hover:-translate-y-1
                  transition-all duration-300 cursor-default
                  ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                                    style={{ transitionDelay: `${i * 80 + 200}ms` }}
                                >
                                    {/* Warning icon */}
                                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition-colors duration-200">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                            <line x1="12" y1="9" x2="12" y2="13" />
                                            <line x1="12" y1="17" x2="12.01" y2="17" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-base mb-1.5 group-hover:text-red-700 transition-colors duration-200">
                                            {card.title}
                                        </h4>
                                        <p className="text-sm text-gray-500 leading-relaxed">{card.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bottom CTA */}
                        <div
                            className={`mt-10 flex flex-col sm:flex-row items-center justify-between gap-5 bg-[#0B3C5D] rounded-2xl px-8 py-6 transition-all duration-700 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                            style={{ transitionDelay: "500ms" }}
                        >
                            <div>
                                <p className="text-white font-bold text-lg">Recognise any of these signs?</p>
                                <p className="text-blue-300 text-sm mt-1">It's time to fix your social media strategy with Foxaircomm.</p>
                            </div>
                            <a
                                href="/contact"
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

                    {/* WHO NEEDS THIS */}
                    <div className="mb-14">
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#185FA5] bg-[#E6F1FB] px-4 py-1.5 rounded-full mb-4">
                            Who it's for
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Who needs social media marketing services
                        </h2>
                        <p className="text-gray-500 max-w-2xl mb-8 text-sm leading-relaxed">
                            Businesses across industries benefit from structured strategies,
                            especially when growth becomes inconsistent or unpredictable.
                        </p>

                        <div className="grid md:grid-cols-2 gap-3">
                            {[
                                { icon: "🚀", title: "Startups", desc: "Build visibility and trust quickly to attract early adopters and establish brand identity." },
                                { icon: "📍", title: "Local service businesses", desc: "Clinics, salons, and consultants can generate consistent leads through location-based targeting." },
                                { icon: "💼", title: "B2B companies", desc: "Platforms like LinkedIn help build authority, nurture leads, and influence decision-makers." },
                                { icon: "🛍️", title: "E-commerce brands", desc: "Drive product discovery, retargeting, and repeat purchases through content and ads." },
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
                            <div className="flex gap-4 items-start p-5 border border-gray-100 rounded-xl hover:border-gray-300 transition-colors duration-200 md:col-span-2">
                                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-lg flex-shrink-0">🏥</div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Healthcare organisations</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed">Educate patients, build credibility, and increase appointment bookings through informative content.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* DIVIDER */}
                    <div className="border-t border-gray-100 mb-14" />

                    {/* WHEN TO INVEST */}
                    <div>
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#993C1D] bg-[#FAECE7] px-4 py-1.5 rounded-full mb-4">
                            Warning signs
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            When should you invest in social media marketing
                        </h2>
                        <p className="text-gray-500 max-w-2xl mb-8 text-sm leading-relaxed">
                            Many businesses delay action — but these signals clearly indicate it's time to invest.
                        </p>

                        <div className="grid md:grid-cols-2 gap-3">
                            {[
                                { icon: "📉", title: "Low reach despite regular posting", desc: "Indicates lack of algorithm alignment and ineffective content strategy." },
                                { icon: "📊", title: "Inconsistent engagement", desc: "Random likes and comments show messaging is not resonating with a defined audience." },
                                { icon: "🔻", title: "Weak lead generation", desc: "Social media is not contributing to enquiries or conversions due to an unoptimised funnel." },
                                { icon: "👻", title: "Poor brand visibility", desc: "When competitors dominate online conversations, your brand loses relevance." },
                            ].map((item) => (
                                <div key={item.title} className="flex gap-4 items-start p-5 border border-gray-100 rounded-xl hover:border-orange-100 transition-colors duration-200 group">
                                    <div className="w-9 h-9 rounded-xl bg-[#FAECE7] flex items-center justify-center text-base flex-shrink-0 group-hover:bg-[#F0997B]/30 transition-colors duration-200">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-[#993C1D] transition-colors duration-200">{item.title}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>



            <section className="w-full bg-gray-50 py-16 px-6 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8">

                        {/* LEFT — TIMELINE PROCESS */}
                        <div>
                            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0C447C] bg-[#E6F1FB] px-4 py-1.5 rounded-full mb-3">
                                How it works
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                Campaign execution
                            </h2>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8">
                                A systematic 6-step process from research to results.
                            </p>

                            <div className="relative pl-10">
                                {/* Vertical line */}
                                <div className="absolute left-[15px] top-1 bottom-1 w-px bg-gray-200" />

                                {[
                                    { n: "1", icon: "👥", title: "Audience research", desc: "Demographics, interests & behaviour to identify high-value audiences." },
                                    { n: "2", icon: "🗂️", title: "Platform strategy", desc: "Select platforms where your audience actively engages." },
                                    { n: "3", icon: "📅", title: "Content planning", desc: "Structured calendars balancing education, engagement & promotion." },
                                    { n: "4", icon: "📤", title: "Campaign execution", desc: "Consistent posting & storytelling across all selected platforms." },
                                    { n: "5", icon: "🎯", title: "Paid social advertising", desc: "Targeted campaigns to drive reach, traffic & qualified leads." },
                                    { n: "6", icon: "📈", title: "Analytics & optimisation", desc: "Track CTR, CPL & conversions to continuously improve ROI." },
                                ].map((step, i) => (
                                    <div key={step.n} className={`relative ${i !== 5 ? "mb-5" : ""}`}>
                                        {/* Dot */}
                                        <div className="absolute -left-10 w-[30px] h-[30px] rounded-full bg-[#E6F1FB] border-2 border-[#B5D4F4] flex items-center justify-center text-xs font-bold text-[#185FA5]">
                                            {step.n}
                                        </div>
                                        {/* Card */}
                                        <div className="bg-white border border-gray-100 rounded-xl px-4 py-3 hover:border-gray-200 transition-colors duration-200">
                                            <h4 className="text-sm font-semibold text-gray-900 mb-1">
                                                <span className="mr-1.5">{step.icon}</span>
                                                {step.title}
                                            </h4>
                                            <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT — DELIVERABLES */}
                        <div>
                            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#27500A] bg-[#EAF3DE] px-4 py-1.5 rounded-full mb-3">
                                What you receive
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                Service deliverables
                            </h2>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8">
                                Clear, structured outputs for every client engagement.
                            </p>

                            <div className="flex flex-col gap-3">
                                {[
                                    {
                                        icon: "🖼️",
                                        bg: "bg-[#E6F1FB]",
                                        title: "Content creation & posting",
                                        desc: "Creatives, captions, and reels tailored for engagement and platform algorithms.",
                                    },
                                    {
                                        icon: "📣",
                                        bg: "bg-[#FAEEDA]",
                                        title: "Paid advertising management",
                                        desc: "Campaign setup, targeting, budget management, and optimisation for better ROI.",
                                    },
                                    {
                                        icon: "📊",
                                        bg: "bg-[#EAF3DE]",
                                        title: "Monthly performance reporting",
                                        desc: "Detailed reports on reach, engagement, leads, and campaign insights.",
                                    },
                                    {
                                        icon: "🗓️",
                                        bg: "bg-[#EEEDFE]",
                                        title: "Content calendar planning",
                                        desc: "Structured monthly planning aligned with your business goals.",
                                    },
                                    {
                                        icon: "💬",
                                        bg: "bg-[#E1F5EE]",
                                        title: "Strategy & review meetings",
                                        desc: "Regular sessions to refine campaigns, introduce ideas, and scale performance.",
                                    },
                                ].map((d) => (
                                    <div
                                        key={d.title}
                                        className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3 hover:border-gray-200 transition-colors duration-200"
                                    >
                                        <div className={`w-9 h-9 rounded-lg ${d.bg} flex items-center justify-center text-lg flex-shrink-0`}>
                                            {d.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 mb-0.5">{d.title}</h4>
                                            <p className="text-xs text-gray-500 leading-relaxed">{d.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="w-full bg-white py-16 px-6 md:px-12">
                <div className="max-w-6xl mx-auto">

                    {/* HEADING */}
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Common Business Problems & How We Solve Them
                        </h2>
                        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                            Most businesses don't fail because of effort — they fail due to lack of structured strategy.
                            Here's how we bridge that gap.
                        </p>
                    </div>

                    {/* PROBLEM → SOLUTION CARDS */}
                    <div className="grid md:grid-cols-2 gap-6 mb-16">

                        {/* PROBLEM 1 */}
                        <div className="p-6 border rounded-xl bg-gray-50">
                            <div className="flex gap-3 mb-3">
                                <AlertCircle className="text-red-500 mt-1" />
                                <h4 className="font-semibold">Low Reach Despite Posting Regularly</h4>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">
                                Businesses post content without understanding platform algorithms or engagement signals.
                            </p>

                            <div className="flex gap-3">
                                <CheckCircle className="text-green-600 mt-1" />
                                <p className="text-sm text-gray-700">
                                    We optimise content formats, timing, and engagement triggers to increase reach.
                                </p>
                            </div>
                        </div>

                        {/* PROBLEM 2 */}
                        <div className="p-6 border rounded-xl bg-gray-50">
                            <div className="flex gap-3 mb-3">
                                <AlertCircle className="text-red-500 mt-1" />
                                <h4 className="font-semibold">Followers Not Converting into Leads</h4>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">
                                A high follower count doesn't guarantee business if there's no conversion strategy.
                            </p>

                            <div className="flex gap-3">
                                <CheckCircle className="text-green-600 mt-1" />
                                <p className="text-sm text-gray-700">
                                    We build conversion-focused funnels that move users from awareness to enquiry.
                                </p>
                            </div>
                        </div>

                        {/* PROBLEM 3 */}
                        <div className="p-6 border rounded-xl bg-gray-50">
                            <div className="flex gap-3 mb-3">
                                <AlertCircle className="text-red-500 mt-1" />
                                <h4 className="font-semibold">Inconsistent Brand Voice</h4>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">
                                A fragmented message reduces trust and weakens brand recall.
                            </p>

                            <div className="flex gap-3">
                                <CheckCircle className="text-green-600 mt-1" />
                                <p className="text-sm text-gray-700">
                                    We establish a consistent communication style aligned with your brand identity.
                                </p>
                            </div>
                        </div>

                        {/* PROBLEM 4 */}
                        <div className="p-6 border rounded-xl bg-gray-50">
                            <div className="flex gap-3 mb-3">
                                <AlertCircle className="text-red-500 mt-1" />
                                <h4 className="font-semibold">Lack of Campaign Tracking</h4>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">
                                Without data, marketing decisions become guesswork and budgets get wasted.
                            </p>

                            <div className="flex gap-3">
                                <CheckCircle className="text-green-600 mt-1" />
                                <p className="text-sm text-gray-700">
                                    We implement tracking systems to monitor CTR, CPL, engagement, and conversions.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* WHY BUSINESSES CHOOSE */}
                    <div className="bg-blue-600 text-white p-10 rounded-2xl text-center shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4">
                            Why Businesses Choose Social Media Marketing Services in Ahmedabad
                        </h3>

                        <p className="text-blue-100 max-w-3xl mx-auto leading-relaxed">
                            Businesses today are actively investing in social media marketing to stay competitive in a digitally driven market.
                            From startups to established brands, companies are using structured strategies to build visibility,
                            engage audiences, and generate consistent enquiries.
                        </p>

                        <p className="mt-4 font-medium">
                            Social media is no longer optional — it's a core growth channel.
                        </p>
                    </div>

                </div>
            </section>

            <section className="w-full bg-gray-50 py-16 px-6 md:px-12">
                <div className="max-w-6xl mx-auto">

                    {/* SECTION 1 - WHY IT MATTERS */}
                    <div className="mb-16">

                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                Why Social Media Marketing Matters for Ahmedabad Businesses
                            </h2>
                            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                                Ahmedabad is a rapidly growing business hub with increasing digital competition.
                                Social media is now a key driver of visibility, trust, and lead generation.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">

                            <div className="p-6 bg-white rounded-xl shadow-sm border">
                                <p className="text-gray-700">
                                    <span className="font-semibold">Startups:</span> Scale faster by building early brand awareness and attracting investors or early customers.
                                </p>
                            </div>

                            <div className="p-6 bg-white rounded-xl shadow-sm border">
                                <p className="text-gray-700">
                                    <span className="font-semibold">Local Businesses:</span> Dominate hyper-local targeting and generate consistent leads within specific areas.
                                </p>
                            </div>

                            <div className="p-6 bg-white rounded-xl shadow-sm border">
                                <p className="text-gray-700">
                                    <span className="font-semibold">B2B Companies:</span> Build authority and nurture long-term client relationships through platforms like LinkedIn.
                                </p>
                            </div>

                            <div className="p-6 bg-white rounded-xl shadow-sm border">
                                <p className="text-gray-700">
                                    <span className="font-semibold">Retail Brands:</span> Increase footfall and online sales through targeted campaigns and seasonal promotions.
                                </p>
                            </div>

                        </div>

                        <p className="text-center mt-10 text-gray-700 max-w-3xl mx-auto">
                            This is why choosing the right{" "}
                            <span className="font-semibold text-gray-900">
                                Social Media Marketing Agency in Ahmedabad
                            </span>{" "}
                            plays a critical role in long-term business growth.
                        </p>

                    </div>

                    {/* SECTION 2 - OUTCOMES */}
                    <div className="mb-16">

                        <div className="text-center mb-12">
                            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                                Expected Business Outcomes
                            </h3>
                            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                                When executed correctly, social media marketing delivers measurable and scalable results.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">

                            <div className="flex gap-3 bg-white p-5 rounded-xl shadow-sm">
                                <CheckCircle className="text-green-600 mt-1" />
                                <div>
                                    <h4 className="font-semibold">Improved Brand Visibility</h4>
                                    <p className="text-sm text-gray-600">
                                        Your business becomes more discoverable through consistent content and campaigns.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3 bg-white p-5 rounded-xl shadow-sm">
                                <CheckCircle className="text-green-600 mt-1" />
                                <div>
                                    <h4 className="font-semibold">Higher Engagement Rates</h4>
                                    <p className="text-sm text-gray-600">
                                        We track engagement, audience growth, and interactions to ensure relevance.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3 bg-white p-5 rounded-xl shadow-sm">
                                <CheckCircle className="text-green-600 mt-1" />
                                <div>
                                    <h4 className="font-semibold">Consistent Lead Generation</h4>
                                    <p className="text-sm text-gray-600">
                                        Campaigns are optimised using CPL, CTR, and conversion performance.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3 bg-white p-5 rounded-xl shadow-sm">
                                <CheckCircle className="text-green-600 mt-1" />
                                <div>
                                    <h4 className="font-semibold">Increased Website Traffic</h4>
                                    <p className="text-sm text-gray-600">
                                        Driving qualified users through structured funnels and paid campaigns.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3 bg-white p-5 rounded-xl shadow-sm md:col-span-2">
                                <CheckCircle className="text-green-600 mt-1" />
                                <div>
                                    <h4 className="font-semibold">Stronger Community Building</h4>
                                    <p className="text-sm text-gray-600">
                                        Build a loyal audience that interacts regularly and supports long-term growth.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* SECTION 3 - FINAL CTA */}
                    <div className="bg-blue-600 text-white p-10 rounded-2xl text-center shadow-lg">

                        <h3 className="text-2xl font-semibold mb-4">
                            Work with a Trusted Social Media Management Company in Ahmedabad
                        </h3>

                        <p className="text-blue-100 max-w-3xl mx-auto mb-6">
                            Foxaircomm delivers structured, performance-driven social media marketing services
                            designed to improve visibility, engagement, and lead generation — not just content output.
                        </p>

                        <div className="space-y-2 text-blue-100 mb-6">
                            <p>• Speak with our social media strategist</p>
                            <p>• Request a detailed campaign audit</p>
                            <p>• Discuss your target audience and competitors</p>
                            <p>• Get a customised growth strategy</p>
                        </div>

                        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                            Start Your Social Media Growth
                        </button>

                    </div>

                </div>
            </section>

            <section className="w-full bg-white py-16 px-6 md:px-12">
                <div className="max-w-4xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Frequently Asked Questions
                        </h2>
                        <p className="mt-4 text-gray-600">
                            Clear answers to common questions about social media marketing services.
                        </p>
                    </div>

                    <div className="space-y-4">

                        {/* FAQ 1 */}
                        <div className="border rounded-xl bg-white shadow-sm">
                            <button onClick={() => toggle(1)} className="w-full flex justify-between p-5">
                                <span className="font-semibold">How much does social media marketing cost in Ahmedabad?</span>
                                <ChevronDown className={`${open === 1 ? "rotate-180" : ""}`} />
                            </button>
                            {open === 1 && (
                                <div className="px-5 pb-5 text-gray-600 text-sm">
                                    Costs vary based on scope, platforms, and ad spend. Most businesses invest based on monthly management, content creation, and advertising requirements.
                                </div>
                            )}
                        </div>

                        {/* FAQ 2 */}
                        <div className="border rounded-xl bg-white shadow-sm">
                            <button onClick={() => toggle(2)} className="w-full flex justify-between p-5">
                                <span className="font-semibold">Which social platform is best for my business?</span>
                                <ChevronDown className={`${open === 2 ? "rotate-180" : ""}`} />
                            </button>
                            {open === 2 && (
                                <div className="px-5 pb-5 text-gray-600 text-sm">
                                    It depends on your audience. Instagram and Facebook work well for B2C, while LinkedIn is ideal for B2B companies.
                                </div>
                            )}
                        </div>

                        {/* FAQ 3 */}
                        <div className="border rounded-xl bg-white shadow-sm">
                            <button onClick={() => toggle(3)} className="w-full flex justify-between p-5">
                                <span className="font-semibold">How long does it take to see results?</span>
                                <ChevronDown className={`${open === 3 ? "rotate-180" : ""}`} />
                            </button>
                            {open === 3 && (
                                <div className="px-5 pb-5 text-gray-600 text-sm">
                                    Organic growth typically takes 2–3 months, while paid campaigns can generate results within a few weeks.
                                </div>
                            )}
                        </div>

                        {/* FAQ 4 */}
                        <div className="border rounded-xl bg-white shadow-sm">
                            <button onClick={() => toggle(4)} className="w-full flex justify-between p-5">
                                <span className="font-semibold">Do you provide analytics and reports?</span>
                                <ChevronDown className={`${open === 4 ? "rotate-180" : ""}`} />
                            </button>
                            {open === 4 && (
                                <div className="px-5 pb-5 text-gray-600 text-sm">
                                    Yes, we provide detailed monthly reports including engagement rate, reach, conversions, and insights.
                                </div>
                            )}
                        </div>

                        {/* FAQ 5 */}
                        <div className="border rounded-xl bg-white shadow-sm">
                            <button onClick={() => toggle(5)} className="w-full flex justify-between p-5">
                                <span className="font-semibold">What if I already have an in-house marketing team?</span>
                                <ChevronDown className={`${open === 5 ? "rotate-180" : ""}`} />
                            </button>
                            {open === 5 && (
                                <div className="px-5 pb-5 text-gray-600 text-sm">
                                    We collaborate with your team to improve strategy, execution, and scale performance.
                                </div>
                            )}
                        </div>

                        {/* FAQ 6 */}
                        <div className="border rounded-xl bg-white shadow-sm">
                            <button onClick={() => toggle(6)} className="w-full flex justify-between p-5">
                                <span className="font-semibold">How do you measure success?</span>
                                <ChevronDown className={`${open === 6 ? "rotate-180" : ""}`} />
                            </button>
                            {open === 6 && (
                                <div className="px-5 pb-5 text-gray-600 text-sm">
                                    We track engagement rate, CTR, cost per lead (CPL), conversions, and ROI.
                                </div>
                            )}
                        </div>

                        {/* FAQ 7 */}
                        <div className="border rounded-xl bg-white shadow-sm">
                            <button onClick={() => toggle(7)} className="w-full flex justify-between p-5">
                                <span className="font-semibold">What is the 70/20/10 rule in social media?</span>
                                <ChevronDown className={`${open === 7 ? "rotate-180" : ""}`} />
                            </button>
                            {open === 7 && (
                                <div className="px-5 pb-5 text-gray-600 text-sm">
                                    It means 70% value-driven content, 20% engagement content, and 10% promotional content.
                                </div>
                            )}
                        </div>

                    </div>

                </div>
            </section>



            {/* CTA */}
            <section className="bg-blue-600 text-white py-16 text-center px-6">
                <h2 className="text-3xl font-bold mb-4">
                    Grow Your Brand with Social Media
                </h2>
                <p className="mb-6 text-blue-100">
                    Let's build a strategy that drives engagement, leads, and real growth.
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">
                    Start Your Campaign
                </button>
            </section>

        </div>
    );
}