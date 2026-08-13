import { useEffect, useState } from "react";

export default function PPCCompanyAhemdabad() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setShow(true), 100);
        return () => clearTimeout(t);
    }, []);

    const touchpoints = [
        { icon: "🎯", label: "Your Ad" },
        { icon: "📄", label: "Your Brochure" },
        { icon: "✦", label: "Your Logo" },
        { icon: "📱", label: "Social Creatives" },
    ];

    const stats = [
        { val: "150+", label: "Brands Designed" },
        { val: "3×", label: "Higher Recall" },
        { val: "98%", label: "Client Satisfaction" },
    ];

    const tpCards = [
        { icon: "🪧", name: "Ad Creatives" },
        { icon: "📋", name: "Brochures" },
        { icon: "✦", name: "Logo System" },
        { icon: "📱", name: "Social Posts" },
    ];

    const swatches = ["#021e7a", "#0B3C5D", "#F07830", "#d95e18", "#f9fafb"];

    const painPoints = [
        { icon: "↺", text: "Every campaign feels like starting from scratch — no system, no continuity" },
        { icon: "⊘", text: "Different designers create different interpretations of your brand" },
        { icon: "≠", text: "Brand visuals change across platforms — logo, colours, tone all vary" },
        { icon: "?", text: "Decisions are made without a clear visual direction or brand guide" },
    ];

    const redesignReasons = [
        { title: "Resets familiarity", body: "Audiences take time to recognise a brand. Redesigns start that clock over." },
        { title: "Breaks recall", body: "Visual memory is built through repetition, not variety." },
        { title: "Creates inconsistency", body: "Old and new materials clash across every touchpoint." },
    ];

    const whoNeeds = [
        "You've worked with multiple designers or freelancers and nothing feels cohesive",
        "Your brand looks different across platforms — website, social, print all vary",
        "Your ads are running but not converting effectively despite good reach",
        "Your sales team has to explain too much — the visuals don't speak for themselves",
    ];


    return (
        <>
            {/* ── HERO SECTION ── */}
            <section className="relative overflow-hidden min-h-screen flex items-center bg-[#021e7a]">

                {/* Grid texture */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-35"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.07) 1px,transparent 1px)",
                        backgroundSize: "44px 44px",
                    }}
                />

                {/* Left glow */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(ellipse 55% 65% at 15% 50%,rgba(15,74,115,0.5) 0%,transparent 70%)",
                    }}
                />

                {/* Bottom-right orange glow */}
                <div
                    className="absolute -bottom-20 -right-14 w-80 h-80 rounded-full pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(circle,rgba(240,120,48,0.18) 0%,transparent 70%)",
                    }}
                />

                {/* Top-right faint glow */}
                <div
                    className="absolute -top-14 right-52 w-64 h-64 rounded-full pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(circle,rgba(240,120,48,0.09) 0%,transparent 70%)",
                    }}
                />

                {/* Main layout */}
                <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-16 md:py-24 flex flex-col gap-0">

                    {/* Badge */}
                    <div
                        className={`transition-all duration-700 mb-7 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-white text-xs font-bold tracking-widest uppercase">
                                PPC & Google Ads Services · Ahmedabad
                            </span>
                        </div>
                    </div>

                    {/* Two-column layout */}
                    <div className="flex flex-col lg:flex-row items-start gap-14 lg:gap-16">

                        {/* ── LEFT COPY ── */}
                        <div className="flex-1 flex flex-col gap-0 lg:max-w-[560px]">

                            {/* H1 */}
                            <div className={`transition-all duration-700 delay-100 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                                <h1
                                    className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-5"

                                >
                                    PPC Company in Ahmedabad —{" "}
                                    <span className="text-[#F07830] relative inline-block">
                                        Google Ads & PPC Services
                                        <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full bg-[#F07830] opacity-30" />
                                    </span>{" "}
                                    by Foxaircomm
                                </h1>
                            </div>

                            {/* Divider */}
                            <div className={`transition-all duration-700 delay-150 mb-5 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                                <div
                                    className="w-12 h-1 rounded-full"
                                    style={{ background: "linear-gradient(90deg,#F07830,#0B3C5D)" }}
                                />
                            </div>

                            {/* Subheadline */}
                            <div className={`transition-all duration-700 delay-150 mb-4 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                                <h2 className="text-lg md:text-xl font-bold text-white/90">
                                    If You're Running Ads but Not Getting Consistent Leads — You're Not Alone
                                </h2>
                            </div>

                            {/* Body */}
                            <div className={`transition-all duration-700 delay-200 mb-4 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                                <p className="text-sm leading-relaxed text-white/60">
                                    If you're unsure where your ad budget is going, the issue usually
                                    isn't the platform — it's the absence of a structured, performance-driven strategy.
                                </p>
                            </div>

                            {/* Section label */}
                            <div className={`transition-all duration-700 delay-200 mb-3 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                                <p className="text-[10px] font-bold tracking-widest uppercase text-white/35">
                                    Common Challenges Ahmedabad Businesses Face
                                </p>
                            </div>

                            {/* Challenges pill grid */}
                            <div className={`transition-all duration-700 delay-[240ms] grid grid-cols-2 gap-2.5 mb-4 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                                {[
                                    { icon: "💸", label: "High Cost-Per-Click" },
                                    { icon: "🎯", label: "Poor-Quality Leads" },
                                    { icon: "📉", label: "Low Conversions" },
                                    { icon: "❓", label: "No Clear ROI Tracking" },
                                ].map(({ icon, label }) => (
                                    <div
                                        key={label}
                                        className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/[0.07] border border-white/10"
                                    >
                                        <span className="text-base">{icon}</span>
                                        <span className="text-sm text-white/80 font-medium">{label}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Arrow callout */}
                            <div className={`transition-all duration-700 delay-[260ms] mb-4 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                                <div
                                    className="text-sm text-white/65 leading-relaxed px-4 py-3 rounded-xl"
                                    style={{ background: "rgba(240,120,48,0.1)", borderLeft: "3px solid #F07830" }}
                                >
                                    👉 As a PPC Company in Ahmedabad, Foxaircomm focuses on solving these
                                    exact challenges through{" "}
                                    <strong className="text-white/90 font-semibold">structured, performance-driven campaigns.</strong>
                                </div>
                            </div>

                            {/* What PPC company does */}
                            <div className={`transition-all duration-700 delay-[220ms] mb-4 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                                <p className="text-sm leading-relaxed text-white/60">
                                    A PPC Company in Ahmedabad manages paid advertising campaigns across
                                    platforms like Google Ads to generate instant traffic, leads, and sales.
                                    PPC (Pay-Per-Click) is a model where{" "}
                                    <span className="text-[#F07830] font-medium">
                                        you pay only when a user clicks on your ad.
                                    </span>
                                </p>
                            </div>

                            {/* Focus tags */}
                            <div className={`transition-all duration-700 delay-[280ms] flex flex-wrap gap-2 mb-5 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                                {[
                                    { label: "↗ Keyword Research", style: "bg-[#F07830]/15 text-[#F07830] border border-[#F07830]/30" },
                                    { label: "Campaign Structuring", style: "bg-white/[0.07] text-white/70 border border-white/15" },
                                    { label: "Conversion Tracking", style: "bg-white/[0.07] text-white/70 border border-white/15" },
                                    { label: "Budget Optimisation", style: "bg-white/[0.07] text-white/70 border border-white/15" },
                                ].map(({ label, style }) => (
                                    <span key={label} className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium ${style}`}>
                                        {label}
                                    </span>
                                ))}
                            </div>

                            {/* CTA buttons */}
                            <div className={`transition-all duration-700 delay-300 flex flex-wrap gap-4 mb-6 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

                                <a href="/contact"
                                    className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl"
                                    style={{
                                        background: "linear-gradient(135deg,#F07830,#d95e18)",
                                        boxShadow: "0 4px 20px rgba(240,120,48,0.4)",
                                    }}
                                >
                                    Get in Touch
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>

                                <a href="/services"
                                    className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-white text-sm border-2 border-white/25 transition-all duration-200 hover:bg-white/10"
                                >
                                    Our Services
                                </a>
                            </div>

                            {/* Trust line */}
                            <div className={`transition-all duration-700 delay-[320ms] ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                                <p className="text-sm text-white/50 leading-relaxed">
                                    The focus is always on{" "}
                                    <span className="text-[#F07830] font-semibold">maximising ROI</span>, not just clicks.
                                </p>
                            </div>
                        </div>

                        {/* ── RIGHT: PPC Campaign Dashboard Mockup ── */}
                        <div className={`flex-1 w-full max-w-[500px] flex flex-col gap-4 transition-all duration-700 delay-300 ${show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">

                                {/* Browser chrome */}
                                <div className="flex items-center gap-3 px-4 py-3 bg-gray-100 border-b border-gray-200">
                                    <div className="flex gap-1.5">
                                        <span className="w-3 h-3 rounded-full bg-red-400" />
                                        <span className="w-3 h-3 rounded-full bg-yellow-400" />
                                        <span className="w-3 h-3 rounded-full bg-green-400" />
                                    </div>
                                    <div className="flex-1 bg-white border border-gray-200 rounded-md px-3 py-1 text-xs text-gray-400 font-mono truncate">
                                        foxaircomm.com / ppc-dashboard
                                    </div>
                                    <div className="flex items-center gap-1.5 text-green-600 text-xs font-bold whitespace-nowrap">
                                        <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse" />
                                        Live
                                    </div>
                                </div>

                                {/* Dashboard body */}
                                <div className="p-5 bg-white">

                                    {/* Campaign identity strip */}
                                    <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-3.5 border border-gray-100 mb-4">
                                        <div
                                            className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-[#F07830] text-sm flex-shrink-0"
                                            style={{ background: "linear-gradient(135deg,#021e7a,#0B3C5D)", fontFamily: "'Syne', sans-serif" }}
                                        >
                                            FA
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-bold text-gray-800">Google Ads Campaign Manager</p>
                                            <p className="text-xs text-gray-400 mt-0.5">Foxaircomm PPC Desk · Active</p>
                                        </div>
                                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600">
                                            ✓ Optimised
                                        </span>
                                    </div>

                                    {/* Key metrics strip */}
                                    <div className="grid grid-cols-3 gap-2 mb-4">
                                        {[
                                            { val: "₹18.40", label: "Avg. CPC" },
                                            { val: "6.2%", label: "Conv. Rate" },
                                            { val: "3.8×", label: "ROAS" },
                                        ].map((s) => (
                                            <div
                                                key={s.label}
                                                className="flex flex-col items-center text-center bg-gray-50 rounded-xl p-3 border border-gray-100"
                                            >
                                                <span className="text-base font-black text-[#0B3C5D]">{s.val}</span>
                                                <span className="text-[10px] mt-0.5 text-gray-400 leading-tight">{s.label}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Campaign performance preview */}
                                    <div className="bg-gray-50 rounded-xl p-3.5 border border-gray-100 mb-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                                Campaign Performance
                                            </p>
                                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-50 text-[#F07830]">
                                                ↑ +31% leads
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-500 leading-relaxed">
                                            Search + Display campaigns tuned weekly for intent-matched
                                            keywords, negative keyword cleanup, and bid optimisation.
                                        </p>
                                    </div>

                                    {/* Active campaign cards */}
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                                        Active Campaigns
                                    </p>
                                    <div className="grid grid-cols-2 gap-2 mb-4">
                                        {[
                                            { icon: "🔍", name: "Search Ads" },
                                            { icon: "🖼️", name: "Display Ads" },
                                            { icon: "🛒", name: "Shopping Ads" },
                                            { icon: "🎥", name: "YouTube Ads" },
                                        ].map(({ icon, name }) => (
                                            <div key={name} className="rounded-xl p-3 border border-gray-100 bg-gray-50">
                                                <div className="text-xl mb-1.5">{icon}</div>
                                                <p className="text-xs font-bold text-gray-700">{name}</p>
                                                <p className="text-[10px] text-green-500 font-semibold mt-0.5">● Running</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                        <span className="text-xs text-gray-400">Last synced: just now</span>
                                        <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-blue-50 text-[#0B3C5D]">
                                            Quality score: 8.6/10 ✓
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Partner badge */}
                            <div className="mx-auto flex items-center justify-center gap-3 py-3 px-6 rounded-xl w-fit bg-white/10 border border-white/20">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                                <span className="text-white text-sm font-semibold">
                                    Google Ads Certified Partner · Ahmedabad
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PROBLEMS SECTION ── */}
            <section className="bg-white py-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto flex flex-col gap-20">

                    {/* ── BLOCK 1: Where businesses struggle ── */}
                    <div className="flex flex-col gap-16">

                        {/* ── WHY BUSINESSES NEED PPC ── */}
                        <div className="flex flex-col lg:flex-row gap-12 items-start">

                            {/* Left copy */}
                            <div className="flex-1 lg:max-w-[420px]">
                                <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-gray-400 mb-2">
                                    Why It Matters
                                </p>
                                <h2
                                    className="text-[#021e7a] text-3xl font-black leading-tight mb-4"

                                >
                                    Why Businesses in Ahmedabad Need Professional PPC Services
                                </h2>
                                <div
                                    className="w-10 h-[3px] rounded-full mb-5"
                                    style={{ background: "linear-gradient(90deg,#F07830,#0B3C5D)" }}
                                />
                                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                                    Ahmedabad is a rapidly growing and competitive digital market,
                                    especially in areas like SG Highway, Prahlad Nagar, Satellite, and Bopal.
                                </p>
                                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                                    Many Ahmedabad-based businesses — from real estate developers and
                                    coaching institutes to healthcare providers and local service companies —
                                    use PPC advertising to capture high-intent search traffic and generate
                                    consistent leads.
                                </p>
                                <div
                                    className="px-4 py-3 text-sm text-amber-800 leading-relaxed mb-5"
                                    style={{ borderLeft: "3px solid #F07830", background: "#fff8f3" }}
                                >
                                    👉 Want to know if{" "}
                                    <strong className="font-semibold text-amber-700">PPC can work</strong>{" "}
                                    for your business?
                                </div>

                                <a href="/contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                                    style={{ background: "linear-gradient(135deg, #F07830, #d95e18)" }}
                                >
                                    Talk to Our PPC Team
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>

                            {/* Right: pain points + benefits */}
                            <div className="flex-1 flex flex-col gap-6">

                                {/* Without expert management */}
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-red-600 mb-3">
                                        Without Expert Management
                                    </p>
                                    <div className="flex flex-col gap-3">
                                        {[
                                            { icon: "💸", text: "Wasted ad spend" },
                                            { icon: "🎯", text: "Poor targeting" },
                                            { icon: "🚦", text: "Irrelevant traffic" },
                                            { icon: "📉", text: "Low ROI" },
                                        ].map(({ icon, text }) => (
                                            <div
                                                key={text}
                                                className="flex items-start gap-3 px-4 py-3.5 rounded-xl border border-gray-100 bg-gray-50 hover:border-red-200 hover:bg-red-50 transition-colors duration-200"
                                            >
                                                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-bold text-red-500 bg-red-50 border border-red-100">
                                                    {icon}
                                                </div>
                                                <p className="text-sm text-gray-700 leading-relaxed pt-1.5">{text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* With Foxaircomm */}
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-3">
                                        Professional PPC Services Help You
                                    </p>
                                    <div className="flex flex-col gap-3">
                                        {[
                                            { icon: "✅", text: "Capture ready-to-convert users" },
                                            { icon: "⚡", text: "Get immediate visibility on Google" },
                                            { icon: "🏆", text: "Compete effectively in your industry" },
                                            { icon: "📈", text: "Scale campaigns based on performance" },
                                        ].map(({ icon, text }) => (
                                            <div
                                                key={text}
                                                className="flex items-start gap-3 px-4 py-3.5 rounded-xl border border-gray-100 bg-gray-50 hover:border-[#F07830] hover:bg-orange-50 transition-colors duration-200"
                                            >
                                                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-bold text-[#F07830] bg-orange-50 border border-orange-100">
                                                    {icon}
                                                </div>
                                                <p className="text-sm text-gray-700 leading-relaxed pt-1.5">{text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ── HOW GOOGLE ADS MANAGEMENT WORKS ── */}
                        <div>
                            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-gray-400 mb-2">
                                Our Process
                            </p>
                            <h2
                                className="text-[#021e7a] text-3xl font-black leading-tight mb-4"

                            >
                                How Google Ads Management Works at Foxaircomm
                            </h2>
                            <div
                                className="w-10 h-[3px] rounded-full mb-5"
                                style={{ background: "linear-gradient(90deg,#F07830,#0B3C5D)" }}
                            />
                            <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-2xl">
                                As a results-driven Google Ads Agency in Ahmedabad, we follow a
                                structured and transparent execution process.
                            </p>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                                {[
                                    { n: "1", title: "Market & Competitor Analysis", desc: "Understanding your business, audience, and competitors." },
                                    { n: "2", title: "Keyword Strategy", desc: "Targeting high-conversion search queries." },
                                    { n: "3", title: "Campaign Setup", desc: "Search, Display, Shopping, and Performance Max." },
                                    { n: "4", title: "Ad Copy Creation", desc: "Conversion-focused messaging." },
                                    { n: "5", title: "Conversion Tracking Setup", desc: "Tracking leads, calls, and purchases." },
                                    { n: "6", title: "Continuous Optimisation", desc: "Improving CTR, lowering CPC, increasing ROI." },
                                ].map((step) => (
                                    <div
                                        key={step.n}
                                        className="flex items-start gap-4 px-4 py-4 rounded-xl border border-gray-100 bg-gray-50 hover:border-[#0B3C5D]/30 hover:bg-white hover:shadow-md transition-all duration-200"
                                    >
                                        <span
                                            className="w-9 h-9 rounded-lg text-white text-sm font-black flex items-center justify-center flex-shrink-0"
                                            style={{ background: "linear-gradient(135deg,#021e7a,#0B3C5D)" }}
                                        >
                                            {step.n}
                                        </span>
                                        <div>
                                            <h4 className="text-sm font-bold text-gray-900 mb-1">{step.title}</h4>
                                            <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div
                                className="px-4 py-3 text-sm text-gray-600 leading-relaxed rounded-xl border border-gray-100 bg-gray-50 mb-4"
                            >
                                Campaign performance is influenced by multiple factors, including{" "}
                                <strong className="font-semibold text-[#0B3C5D]">Quality Score</strong>,
                                landing page experience, ad relevance, and expected click-through rate
                                (CTR). Optimising these elements helps reduce cost-per-click and improve
                                conversions.
                            </div>

                            <p className="text-sm text-gray-500 leading-relaxed">
                                Our Google Ads Management Services in Ahmedabad focus on measurable business growth.
                            </p>
                        </div>
                    </div>

                    {/* ── BLOCK 2: Design without a system ── */}
                    <div className="flex flex-col gap-16">

                        {/* ── CAMPAIGN TYPES ── */}
                        <div>
                            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-gray-400 text-center mb-2">
                                Full-Service PPC
                            </p>
                            <h2
                                className="text-[#021e7a] text-3xl font-black text-center mb-3"

                            >
                                What Types of PPC Campaigns Do We Manage?
                            </h2>
                            <p className="text-sm text-gray-500 leading-relaxed text-center max-w-xl mx-auto mb-8">
                                As a full-service PPC Advertising Company in Ahmedabad, we manage:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    { n: "01", title: "Search Ads", desc: "High-intent lead generation." },
                                    { n: "02", title: "Display Ads", desc: "Brand visibility." },
                                    { n: "03", title: "Remarketing Campaigns", desc: "Re-engage visitors." },
                                    { n: "04", title: "Shopping Ads", desc: "eCommerce growth." },
                                    { n: "05", title: "YouTube Ads", desc: "Video marketing." },
                                    { n: "06", title: "Performance Max Campaigns", desc: "AI-powered campaigns." },
                                ].map((c) => (
                                    <div key={c.n} className="p-5 rounded-2xl border border-gray-100 bg-gray-50 flex flex-col gap-3">
                                        <span className="text-4xl font-black text-gray-200">{c.n}</span>
                                        <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-orange-50 text-orange-700 w-fit">
                                            Campaign Type
                                        </span>
                                        <p className="text-sm font-bold text-[#021e7a]">{c.title}</p>
                                        <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 p-5 rounded-2xl flex items-center gap-4 bg-[#021e7a]">
                                <span className="text-4xl font-black text-white/10 flex-shrink-0">→</span>
                                <p className="text-sm text-white/80 leading-relaxed">
                                    We are recognised among the{" "}
                                    <span className="font-bold text-white">Top PPC Agencies in Ahmedabad</span>{" "}
                                    for delivering complete campaign solutions.
                                </p>
                            </div>
                        </div>

                        {/* ── WHY CHOOSE FOXAIRCOMM ── */}
                        <div className="grid lg:grid-cols-2 gap-10">

                            {/* What sets us apart */}
                            <div>
                                <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-gray-400 mb-2">
                                    Our Difference
                                </p>
                                <h2
                                    className="text-[#021e7a] text-2xl font-black mb-3"

                                >
                                    Why Choose Foxaircomm as Your PPC Agency in Ahmedabad?
                                </h2>
                                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                                    Choosing the right PPC Agency in Ahmedabad can significantly impact your
                                    business growth. What sets us apart:
                                </p>
                                <div className="flex flex-col gap-3">
                                    {[
                                        "Data-driven strategies",
                                        "Transparent reporting",
                                        "Conversion-focused campaigns",
                                        "Industry-specific expertise",
                                        "Continuous testing and optimisation",
                                    ].map((item) => (
                                        <div key={item} className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-100 bg-gray-50">
                                            <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F07830" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M20 6L9 17l-5-5" />
                                                </svg>
                                            </div>
                                            <p className="text-sm font-semibold text-gray-800">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Why businesses trust us */}
                            <div>
                                <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-gray-400 mb-2">
                                    Track Record
                                </p>
                                <h2
                                    className="text-[#021e7a] text-2xl font-black mb-3"

                                >
                                    Why Businesses Trust Foxaircomm
                                </h2>
                                <div className="flex flex-col gap-3 mt-[52px]">
                                    {[
                                        "Certified Google Ads specialists",
                                        "5+ years of experience across multiple industries",
                                        "Advanced tracking and analytics setup",
                                        "ROI-focused campaign execution",
                                        "Transparent and consistent reporting",
                                    ].map((item) => (
                                        <div key={item} className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-100 bg-gray-50">
                                            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0B3C5D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M20 6L9 17l-5-5" />
                                                </svg>
                                            </div>
                                            <p className="text-sm font-semibold text-gray-800">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Closing callout */}
                        <div
                            className="px-5 py-4 rounded-xl text-sm text-amber-800 leading-relaxed text-center"
                            style={{ borderLeft: "3px solid #F07830", background: "#fff8f3" }}
                        >
                            👉 We focus on results that directly impact your business, not vanity metrics.
                        </div>
                    </div>

                    {/* ── BLOCK 3: Contrarian truth ── */}
                    <div className="rounded-2xl bg-[#021e7a] p-10 flex flex-col lg:flex-row gap-10 items-start">

                        {/* Left — Results */}
                        <div className="flex-1">
                            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-white/30 mb-2">
                                Expected Outcomes
                            </p>
                            <h2
                                className="text-white text-2xl font-black leading-snug mb-4"

                            >
                                What Results Can You Expect from PPC Advertising?
                            </h2>
                            <p className="text-sm text-white/55 leading-relaxed mb-5">
                                With expert PPC Management Services in Ahmedabad, you can expect:
                            </p>

                            <div className="flex flex-col gap-3 mb-5">
                                {[
                                    "Instant visibility on Google",
                                    "Consistent lead generation",
                                    "Higher conversion rates",
                                    "Better control over ad spend",
                                    "Measurable ROI",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-start gap-3 px-4 py-3.5 rounded-xl"
                                        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                                    >
                                        <span className="w-2 h-2 rounded-full bg-[#F07830] flex-shrink-0 mt-1.5" />
                                        <p className="text-sm text-white/70 leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>

                            <div
                                className="px-4 py-3 text-sm text-white/65 leading-relaxed"
                                style={{ borderLeft: "3px solid #F07830", background: "rgba(240,120,48,0.1)" }}
                            >
                                👉 PPC campaigns are{" "}
                                <strong className="text-[#F07830] font-semibold">flexible and scalable</strong>,
                                allowing you to start small and increase budgets as results improve.
                            </div>
                        </div>

                        {/* Right — Cost breakdown */}
                        <div className="flex-1">
                            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-white/30 mb-2">
                                Investment
                            </p>
                            <h2
                                className="text-white text-2xl font-black leading-snug mb-4"

                            >
                                How Much Does PPC Advertising Cost in Ahmedabad?
                            </h2>
                            <p className="text-sm text-white/55 leading-relaxed mb-5">
                                PPC costs vary depending on:
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {["Industry competition", "Keyword demand", "Target audience", "Campaign goals"].map((item) => (
                                    <span
                                        key={item}
                                        className="text-xs font-medium text-white/70 px-3.5 py-1.5 rounded-full"
                                        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                            <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-3">
                                Typical Cost Structure
                            </p>
                            <div className="flex flex-col gap-2 mb-6">
                                {[
                                    { label: "Ad Spend", desc: "Paid directly to Google" },
                                    { label: "Management Fee", desc: "Paid to the agency" },
                                ].map((row) => (
                                    <div
                                        key={row.label}
                                        className="flex items-center justify-between px-4 py-3 rounded-xl"
                                        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                                    >
                                        <span className="text-sm font-bold text-white">{row.label}</span>
                                        <span className="text-xs text-white/50">{row.desc}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-3">
                                Most Ahmedabad Businesses Start With
                            </p>
                            <div className="flex flex-col gap-2">
                                {[
                                    { range: "₹10,000 – ₹25,000/month", tag: "Small Businesses" },
                                    { range: "₹30,000 – ₹1,00,000+/month", tag: "Scaling Campaigns" },
                                ].map((row) => (
                                    <div
                                        key={row.range}
                                        className="flex items-center justify-between px-4 py-3.5 rounded-xl"
                                        style={{ background: "rgba(240,120,48,0.1)", border: "1px solid rgba(240,120,48,0.2)" }}
                                    >
                                        <span className="text-sm font-black text-[#F07830]">
                                            {row.range}
                                        </span>
                                        <span className="text-xs font-semibold text-white/60">{row.tag}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* ── BLOCK 4: Who needs this ── */}
                    <div className="flex flex-col gap-16">

                        {/* ── COMMON MISTAKES ── */}
                        <div>
                            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-gray-400 text-center mb-2">
                                Avoid These Pitfalls
                            </p>
                            <h2
                                className="text-[#021e7a] text-3xl font-black text-center mb-3"

                            >
                                Common Mistakes Businesses Make With Google Ads
                            </h2>
                            <p className="text-sm text-gray-500 leading-relaxed text-center max-w-md mx-auto mb-8">
                                Many businesses fail with PPC due to:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                {[
                                    "Broad or irrelevant keyword targeting",
                                    "Not using negative keywords",
                                    "Poor ad copy",
                                    "Weak landing pages",
                                    "No conversion tracking",
                                ].map((text, i) => (
                                    <div
                                        key={text}
                                        className="flex items-start gap-3 p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:border-red-200 hover:bg-red-50 transition-colors duration-200"
                                    >
                                        <span
                                            className="text-2xl font-black text-gray-200 flex-shrink-0 leading-none"

                                        >
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="rounded-2xl bg-[#021e7a] p-6">
                                <p className="text-sm text-white/70 leading-relaxed mb-4">
                                    As a provider of the{" "}
                                    <span className="font-bold text-white">Best PPC Services in Ahmedabad</span>,
                                    Foxaircomm solves these through:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {["Campaign restructuring", "Smart bidding strategies", "Advanced targeting", "Conversion-focused optimisation"].map((item) => (
                                        <span
                                            key={item}
                                            className="text-xs font-medium text-white px-3.5 py-1.5 rounded-full"
                                            style={{ background: "rgba(240,120,48,0.15)", border: "1px solid rgba(240,120,48,0.3)" }}
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ── PPC MANAGEMENT PROCESS ── */}
                        <div>
                            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-gray-400 text-center mb-2">
                                Our Process
                            </p>
                            <h2
                                className="text-[#021e7a] text-3xl font-black text-center mb-3"

                            >
                                How Our PPC Management Process Works
                            </h2>
                            <p className="text-sm text-gray-500 leading-relaxed text-center max-w-md mx-auto mb-8">
                                Our streamlined process ensures clarity and results:
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                                {[
                                    "Strategy consultation",
                                    "Campaign audit",
                                    "Keyword & audience planning",
                                    "Campaign setup",
                                    "Testing & optimisation",
                                    "Reporting & scaling",
                                ].map((step, i) => (
                                    <div
                                        key={step}
                                        className="flex items-center gap-4 px-4 py-4 rounded-xl border border-gray-100 bg-gray-50 hover:border-[#0B3C5D]/30 hover:bg-white hover:shadow-md transition-all duration-200"
                                    >
                                        <span
                                            className="w-9 h-9 rounded-lg text-white text-sm font-black flex items-center justify-center flex-shrink-0"
                                            style={{ background: "linear-gradient(135deg,#021e7a,#0B3C5D)" }}
                                        >
                                            {i + 1}
                                        </span>
                                        <p className="text-sm font-semibold text-gray-800">{step}</p>
                                    </div>
                                ))}
                            </div>

                            <p className="text-sm text-gray-500 leading-relaxed text-center">
                                As a PPC Company in Ahmedabad, we focus on long-term performance and sustainable growth.
                            </p>
                        </div>

                        {/* ── INDUSTRIES WE HELP ── */}
                        <div>
                            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-gray-400 text-center mb-2">
                                Who We Serve
                            </p>
                            <h2
                                className="text-[#021e7a] text-3xl font-black text-center mb-3"

                            >
                                Industries We Help with PPC Campaigns
                            </h2>
                            <p className="text-sm text-gray-500 leading-relaxed text-center max-w-md mx-auto mb-8">
                                We work with businesses across Ahmedabad, including:
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                                {[
                                    { icon: "🏢", name: "Real Estate" },
                                    { icon: "🏥", name: "Healthcare" },
                                    { icon: "🎓", name: "Education & Coaching" },
                                    { icon: "🛒", name: "eCommerce" },
                                    { icon: "📍", name: "Local Services" },
                                    { icon: "🏭", name: "Manufacturing & B2B" },
                                ].map((item) => (
                                    <div
                                        key={item.name}
                                        className="flex flex-col items-center text-center gap-2 p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:border-[#F07830] hover:bg-orange-50 transition-colors duration-200"
                                    >
                                        <span className="text-2xl">{item.icon}</span>
                                        <p className="text-sm font-bold text-[#021e7a]">{item.name}</p>
                                    </div>
                                ))}
                            </div>

                            <p className="text-sm text-gray-500 leading-relaxed text-center">
                                Each campaign is customised based on industry behaviour and user intent.
                            </p>
                        </div>

                        {/* ── WHO SHOULD USE PPC ── */}
                        <div>
                            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-gray-400 text-center mb-2">
                                Is This for You?
                            </p>
                            <h2
                                className="text-[#021e7a] text-3xl font-black text-center mb-3"

                            >
                                Who Should Use PPC Services in Ahmedabad?
                            </h2>
                            <p className="text-sm text-gray-500 leading-relaxed text-center max-w-md mx-auto mb-8">
                                PPC is ideal for businesses that:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Want immediate leads and visibility",
                                    "Are launching a new product or service",
                                    "Operate in competitive markets",
                                    "Need predictable lead generation",
                                    "Want measurable ROI",
                                ].map((text) => (
                                    <div
                                        key={text}
                                        className="flex items-start gap-3 p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:border-[#021e7a] hover:bg-blue-50 transition-colors duration-200"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0B3C5D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-gray-700 leading-relaxed pt-1">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── FAQs ── */}
                        <div>
                            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-gray-400 text-center mb-2">
                                Common Questions
                            </p>
                            <h2
                                className="text-[#021e7a] text-3xl font-black text-center mb-3"

                            >
                                FAQs About PPC Services in Ahmedabad
                            </h2>

                            <div className="max-w-2xl mx-auto flex flex-col gap-3 mt-8">
                                {[
                                    { q: "What does a PPC Company in Ahmedabad do?", a: "It manages paid advertising campaigns to generate traffic, leads, and sales through platforms like Google Ads." },
                                    { q: "How much do PPC services cost in Ahmedabad?", a: "Costs depend on industry and budget, typically including ad spend and management fees." },
                                    { q: "How long does it take to see results from Google Ads?", a: "You can see results within days, with optimisation improving performance over a few weeks." },
                                    { q: "Is PPC better than SEO for fast results?", a: "Yes, PPC delivers immediate visibility, while SEO is a long-term strategy." },
                                    { q: "Why hire a PPC management company?", a: "Experts optimise campaigns to reduce costs and improve ROI." },
                                    { q: "What industries benefit most from PPC advertising?", a: "Real estate, healthcare, education, eCommerce, and service businesses benefit significantly." },
                                ].map((item, i) => (
                                    <FaqItem key={item.q} question={item.q} answer={item.a} />
                                ))}
                            </div>
                        </div>

                        {/* ── FINAL CTA ── */}
                        <div className="rounded-2xl bg-[#021e7a] p-10 text-center">
                            <h2
                                className="text-white text-2xl md:text-3xl font-black mb-3"

                            >
                                Ready to Generate Leads with Google Ads?
                            </h2>
                            <p className="text-white/60 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
                                If you're looking for a reliable PPC Company in Ahmedabad that delivers
                                measurable results, Foxaircomm is ready to help.
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-4">

                                <a href="/contact"
                                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white text-sm border-2 border-white/25 hover:bg-white/10 transition-all duration-200"
                                >
                                    Ask for a Proposal
                                </a>

                                <a href="/contact"
                                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white text-sm hover:-translate-y-0.5 hover:shadow-2xl transition-all duration-200"
                                    style={{ background: "linear-gradient(135deg,#F07830,#d95e18)", boxShadow: "0 4px 20px rgba(240,120,48,0.4)" }}
                                >
                                    Start Generating Leads
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>



                    </div>

                </div>
            </section >
        </>
    );
    function FaqItem({ question, answer }) {
        const [open, setOpen] = useState(false);
        return (
            <div className="rounded-xl border border-gray-100 bg-gray-50 overflow-hidden">
                <button
                    onClick={() => setOpen(!open)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                    <span className="text-sm font-bold text-[#021e7a]">{question}</span>
                    <svg
                        width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="#F07830" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        className={`flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                    >
                        <path d="M6 9l6 6 6-6" />
                    </svg>
                </button>
                {open && (
                    <div className="px-5 pb-4">
                        <p className="text-sm text-gray-500 leading-relaxed">{answer}</p>
                    </div>
                )}
            </div>
        );
    }
}
