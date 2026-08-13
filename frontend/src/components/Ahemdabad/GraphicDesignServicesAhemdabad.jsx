import { useEffect, useState } from "react";

export default function GraphicDesignService() {
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
                                Graphic Design Services · Ahmedabad
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
                                    Creative{" "}
                                    <span className="text-[#F07830] relative inline-block">
                                        Graphic Design
                                        <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full bg-[#F07830] opacity-30" />
                                    </span>{" "}
                                    Services in Ahmedabad That Drive Real Business Impact
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
                                    Your Design Isn't the Problem — Your Brand Lacks Clarity &amp; Consistency
                                </h2>
                            </div>

                            {/* Body */}
                            <div className={`transition-all duration-700 delay-200 mb-4 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                                <p className="text-sm leading-relaxed text-white/60">
                                    If your brand looks different everywhere, feels inconsistent, and still doesn't convert — the issue isn't creativity. It's a lack of direction.
                                </p>
                            </div>

                            {/* Section label */}
                            <div className={`transition-all duration-700 delay-200 mb-3 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                                <p className="text-[10px] font-bold tracking-widest uppercase text-white/35">
                                    What Graphic Design Actually Does for Your Business
                                </p>
                            </div>

                            {/* System note */}
                            <div className={`transition-all duration-700 delay-[220ms] mb-4 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                                <p className="text-sm leading-relaxed text-white/60">
                                    Graphic design is not just about visuals — it's about how your brand is{" "}
                                    <span className="text-[#F07830] font-medium">understood, trusted, and remembered.</span>{" "}
                                    Customers don't evaluate your brand piece by piece. They experience everything together, instantly.
                                </p>
                            </div>

                            {/* 4-item pill grid */}
                            <div className={`transition-all duration-700 delay-[240ms] grid grid-cols-2 gap-2.5 mb-4 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                                {touchpoints.map(({ icon, label }) => (
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
                                    👉 Must feel like <strong className="text-white/90 font-semibold">one system</strong> — not separate efforts. As a performance-driven graphic designing company in Ahmedabad, Foxaircomm focuses on both external impact and internal clarity.
                                </div>
                            </div>

                            {/* Focus tags */}
                            <div className={`transition-all duration-700 delay-[280ms] flex flex-wrap gap-2 mb-5 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                                {[
                                    { label: "↗ External Impact", style: "bg-[#F07830]/15 text-[#F07830] border border-[#F07830]/30" },
                                    { label: "⟳ Internal Clarity", style: "bg-white/[0.07] text-white/70 border border-white/15" },
                                    { label: "Conversion & Trust", style: "bg-white/[0.07] text-white/70 border border-white/15" },
                                    { label: "Scalable Systems", style: "bg-white/[0.07] text-white/70 border border-white/15" },
                                ].map(({ label, style }) => (
                                    <span key={label} className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium ${style}`}>
                                        {label}
                                    </span>
                                ))}
                            </div>

                            {/* CTA buttons */}
                            <div className={`transition-all duration-700 delay-300 flex flex-wrap gap-4 mb-6 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                                <a
                                    href="/contact"
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
                                <a
                                    href="/services"
                                    className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-white text-sm border-2 border-white/25 transition-all duration-200 hover:bg-white/10"
                                >
                                    Our Services
                                </a>
                            </div>

                            {/* Trust stats */}
                            <div className={`transition-all duration-700 delay-[320ms] flex gap-8 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                                {stats.map(({ val, label }) => (
                                    <div key={label} className="flex flex-col">
                                        <span className="text-xl font-black text-[#F07830]" >{val}</span>
                                        <span className="text-xs mt-0.5 text-white/45">{label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── RIGHT: Brand Design System Mockup ── */}
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
                                        foxaircomm.com / brand-design-system
                                    </div>
                                    <div className="flex items-center gap-1.5 text-green-600 text-xs font-bold whitespace-nowrap">
                                        <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse" />
                                        Live
                                    </div>
                                </div>

                                {/* Dashboard body */}
                                <div className="p-5 bg-white">

                                    {/* Brand identity strip */}
                                    <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-3.5 border border-gray-100 mb-4">
                                        <div
                                            className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-[#F07830] text-sm flex-shrink-0"
                                            style={{ background: "linear-gradient(135deg,#021e7a,#0B3C5D)", fontFamily: "'Syne', sans-serif" }}
                                        >
                                            FA
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-bold text-gray-800">Brand Identity System</p>
                                            <p className="text-xs text-gray-400 mt-0.5">Foxaircomm Design Studio · Active</p>
                                        </div>
                                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600">
                                            ✓ Consistent
                                        </span>
                                    </div>

                                    {/* Color palette */}
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">
                                            Brand Palette
                                        </span>
                                        {swatches.map((color, i) => (
                                            <div
                                                key={i}
                                                className="flex-1 h-7 rounded-md"
                                                style={{
                                                    background: color,
                                                    border: color === "#f9fafb" ? "1px solid #e5e7eb" : undefined,
                                                }}
                                            />
                                        ))}
                                    </div>

                                    {/* Typography preview */}
                                    <div className="bg-gray-50 rounded-xl p-3.5 border border-gray-100 mb-4">
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                                            Typography System
                                        </p>
                                        <p className="text-lg font-black text-[#021e7a] leading-tight mb-1">
                                            Display Heading Aa
                                        </p>
                                        <p className="text-xs text-gray-500 leading-relaxed">
                                            Body text — clean, readable, purposeful. Every character serves the brand story and conversion goal.
                                        </p>
                                    </div>

                                    {/* Touchpoints */}
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                                        Brand Touchpoints
                                    </p>
                                    <div className="grid grid-cols-2 gap-2 mb-4">
                                        {tpCards.map(({ icon, name }) => (
                                            <div key={name} className="rounded-xl p-3 border border-gray-100 bg-gray-50">
                                                <div className="text-xl mb-1.5">{icon}</div>
                                                <p className="text-xs font-bold text-gray-700">{name}</p>
                                                <p className="text-[10px] text-green-500 font-semibold mt-0.5">● On-brand</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                        <span className="text-xs text-gray-400">Last updated: just now</span>
                                        <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-blue-50 text-[#0B3C5D]">
                                            Brand clarity score: 97 ✓
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
                                    Certified Graphic Design Agency · Ahmedabad
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
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* Left copy */}
                        <div className="flex-1 lg:max-w-[420px]">
                            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-gray-400 mb-2">
                                Common Pain Point
                            </p>
                            <h2
                                className="text-[#021e7a] text-3xl font-black leading-tight mb-4"

                            >
                                Where Most Ahmedabad Businesses Struggle
                            </h2>
                            <div
                                className="w-10 h-[3px] rounded-full mb-5"
                                style={{ background: "linear-gradient(90deg,#F07830,#0B3C5D)" }}
                            />
                            <p className="text-sm text-gray-500 leading-relaxed mb-5">
                                The problem is rarely just "bad design". Most businesses don't realise the real issue until it's already costing them.
                            </p>
                            <div
                                className="px-4 py-3 text-sm text-amber-800 leading-relaxed"
                                style={{ borderLeft: "3px solid #F07830", background: "#fff8f3" }}
                            >
                                👉 Over time, this creates{" "}
                                <strong className="font-semibold text-amber-700">design fatigue</strong>. You keep redesigning, but nothing feels final.
                            </div>
                        </div>

                        {/* Pain cards */}
                        <div className="flex-1 flex flex-col gap-3">
                            {painPoints.map(({ icon, text }) => (
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

                    {/* ── BLOCK 2: Design without a system ── */}
                    <div>
                        <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-gray-400 text-center mb-2">
                            The Hidden Problem
                        </p>
                        <h2
                            className="text-[#021e7a] text-3xl font-black text-center mb-3"

                        >
                            Design Without a System
                        </h2>
                        <p className="text-sm text-gray-500 leading-relaxed text-center max-w-xl mx-auto mb-8">
                            Most businesses don't have a design problem. They have a lack of system. When basics are inconsistent, design becomes reactive — not strategic.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-5 rounded-2xl border border-gray-100 bg-gray-50 flex flex-col gap-3">
                                <span className="text-4xl font-black text-gray-200">01</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-orange-50 text-orange-700 w-fit">
                                    Problem
                                </span>
                                <p className="text-sm font-bold text-[#021e7a]">Random colour choices</p>
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    Colours chosen per campaign instead of a defined brand palette — each piece feels different.
                                </p>
                            </div>

                            <div className="p-5 rounded-2xl border border-gray-100 bg-gray-50 flex flex-col gap-3">
                                <span className="text-4xl font-black text-gray-200">02</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-orange-50 text-orange-700 w-fit">
                                    Problem
                                </span>
                                <p className="text-sm font-bold text-[#021e7a]">Inconsistent fonts</p>
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    Multiple typefaces across materials make even good-looking creatives feel unpolished.
                                </p>
                            </div>

                            <div className="p-5 rounded-2xl flex flex-col gap-3 bg-[#021e7a]">
                                <span className="text-4xl font-black text-white/10">→</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 w-fit">
                                    Result
                                </span>
                                <p className="text-sm font-bold text-white">Good design fails</p>
                                <p className="text-xs text-white/60 leading-relaxed">
                                    Even "good-looking" creatives fail without structure. Structured design builds consistency — and consistency builds trust.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ── BLOCK 3: Contrarian truth ── */}
                    <div className="rounded-2xl bg-[#021e7a] p-10 flex flex-col lg:flex-row gap-10 items-start">

                        {/* Left */}
                        <div className="flex-1">
                            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-white/30 mb-2">
                                A Contrarian Truth
                            </p>
                            <h2
                                className="text-white text-2xl font-black leading-snug mb-4"

                            >
                                The more you redesign, the weaker your brand can become
                            </h2>
                            <p className="text-sm text-white/55 leading-relaxed mb-5">
                                Stability — not constant change — is what builds strong brands. Each redesign resets the work you've already done.
                            </p>
                            <div
                                className="px-4 py-3 text-sm text-white/65 leading-relaxed"
                                style={{ borderLeft: "3px solid #F07830", background: "rgba(240,120,48,0.1)" }}
                            >
                                👉 <strong className="text-[#F07830] font-semibold">Stability builds recall.</strong> Familiarity builds trust. Trust drives conversion.
                            </div>
                        </div>

                        {/* Right */}
                        <div className="flex-1 flex flex-col gap-3">
                            {redesignReasons.map(({ title, body }) => (
                                <div
                                    key={title}
                                    className="flex items-start gap-3 px-4 py-3.5 rounded-xl"
                                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                                >
                                    <span className="w-2 h-2 rounded-full bg-[#F07830] flex-shrink-0 mt-1.5" />
                                    <p className="text-sm text-white/70 leading-relaxed">
                                        <strong className="text-white font-semibold">{title}</strong> — {body}
                                    </p>
                                </div>
                            ))}
                            <p className="text-xs text-white/30 leading-relaxed mt-2">
                                As experienced graphic design firms in Ahmedabad, we've seen this pattern repeatedly. Good design without structure creates confusion.
                            </p>
                        </div>
                    </div>

                    {/* ── BLOCK 4: Who needs this ── */}
                    <div>
                        <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-gray-400 text-center mb-2">
                            Is This for You?
                        </p>
                        <h2
                            className="text-[#021e7a] text-3xl font-black text-center mb-3"

                        >
                            Who Actually Needs Strategic Graphic Designing?
                        </h2>
                        <p className="text-sm text-gray-500 leading-relaxed text-center max-w-md mx-auto mb-8">
                            You don't just need design when starting. You need it when things start feeling inconsistent.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {whoNeeds.map((text, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-3 p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:border-[#021e7a] hover:bg-blue-50 transition-colors duration-200"
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

                        {/* CTA strip */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5 rounded-2xl bg-gray-50 border border-gray-100">
                            <p className="text-sm text-gray-700 font-medium text-center sm:text-left">
                                Move from random execution to a{" "}
                                <span className="text-[#021e7a] font-bold">structured graphic design agency in Ahmedabad</span>
                            </p>
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-white text-sm whitespace-nowrap flex-shrink-0 transition-all hover:-translate-y-0.5"
                                style={{
                                    background: "linear-gradient(135deg,#F07830,#d95e18)",
                                    boxShadow: "0 4px 16px rgba(240,120,48,0.35)",
                                }}
                            >
                                Start the Conversation
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
