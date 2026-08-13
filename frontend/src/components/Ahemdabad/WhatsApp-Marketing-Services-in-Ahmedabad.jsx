import { useEffect, useState } from "react";

export default function WhatsAppMarketingAhemdabad() {
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
                                WhatsApp Marketing · Ahmedabad
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
                                    Scalable{" "}
                                    <span className="text-[#F07830] relative inline-block">
                                        WhatsApp Marketing
                                        <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full bg-[#F07830] opacity-30" />
                                    </span>{" "}
                                    Services in Ahmedabad for Business Growth
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
                                    Automated Messaging, Targeted Campaigns, Real-Time Engagement
                                </h2>
                            </div>

                            {/* Body */}
                            <div className={`transition-all duration-700 delay-200 mb-4 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                                <p className="text-sm leading-relaxed text-white/60">
                                    Businesses in Ahmedabad are rapidly adopting WhatsApp to improve
                                    customer communication and lead generation. Our WhatsApp marketing
                                    platform enables automated messaging, targeted campaigns, and
                                    real-time engagement using the official WhatsApp Business API.
                                </p>
                            </div>

                            {/* Section label */}
                            <div className={`transition-all duration-700 delay-200 mb-3 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                                <p className="text-[10px] font-bold tracking-widest uppercase text-white/35">
                                    WhatsApp Marketing Services in Ahmedabad
                                </p>
                            </div>

                            {/* System note */}
                            <div className={`transition-all duration-700 delay-[220ms] mb-4 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                                <p className="text-sm leading-relaxed text-white/60">
                                    Businesses today don't just need leads; they need a system to{" "}
                                    <span className="text-[#F07830] font-medium">respond, engage, and convert</span>{" "}
                                    those leads efficiently. Without structured communication, most
                                    opportunities are lost due to delays or inconsistency.
                                </p>
                            </div>

                            {/* 4-item pill grid */}
                            <div className={`transition-all duration-700 delay-[240ms] grid grid-cols-2 gap-2.5 mb-4 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                                {[
                                    { icon: "📥", label: "Centralised Inbox" },
                                    { icon: "⚡", label: "Real-Time Replies" },
                                    { icon: "🔁", label: "Automated Follow-Ups" },
                                    { icon: "🎯", label: "Campaign-Driven Flow" },
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
                                    👉 Schedule a <strong className="text-white/90 font-semibold">WhatsApp Marketing Consultation</strong> — as a dedicated WhatsApp Marketing Company in Ahmedabad, Foxaircomm helps you build a communication system that supports marketing, sales, and customer interaction together.
                                </div>
                            </div>

                            {/* Focus tags */}
                            <div className={`transition-all duration-700 delay-[280ms] flex flex-wrap gap-2 mb-5 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                                {[
                                    { label: "↗ Lead Generation", style: "bg-[#F07830]/15 text-[#F07830] border border-[#F07830]/30" },
                                    { label: "⟳ Automated Nurturing", style: "bg-white/[0.07] text-white/70 border border-white/15" },
                                    { label: "Instant Engagement", style: "bg-white/[0.07] text-white/70 border border-white/15" },
                                    { label: "Measurable Outcomes", style: "bg-white/[0.07] text-white/70 border border-white/15" },
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
                                    Schedule a Consultation
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

                            {/* Trust stats */}
                            <div className={`transition-all duration-700 delay-[320ms] flex gap-8 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                                {[
                                    { val: "24/7", label: "Automated Response" },
                                    { val: "3x", label: "Faster Lead Response" },
                                    { val: "98%", label: "Message Open Rate" },
                                ].map(({ val, label }) => (
                                    <div key={label} className="flex flex-col">
                                        <span className="text-xl font-black text-[#F07830]">{val}</span>
                                        <span className="text-xs mt-0.5 text-white/45">{label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── RIGHT: WhatsApp Campaign Dashboard Mockup ── */}
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
                                        foxaircomm.com / whatsapp-dashboard
                                    </div>
                                    <div className="flex items-center gap-1.5 text-green-600 text-xs font-bold whitespace-nowrap">
                                        <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse" />
                                        Live
                                    </div>
                                </div>

                                {/* Dashboard body */}
                                <div className="p-5 bg-white">

                                    {/* Platform identity strip */}
                                    <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-3.5 border border-gray-100 mb-4">
                                        <div
                                            className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-[#F07830] text-sm flex-shrink-0"
                                            style={{ background: "linear-gradient(135deg,#021e7a,#0B3C5D)", fontFamily: "'Syne', sans-serif" }}
                                        >
                                            FA
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-bold text-gray-800">WhatsApp Business API</p>
                                            <p className="text-xs text-gray-400 mt-0.5">Foxaircomm Messaging Suite · Active</p>
                                        </div>
                                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600">
                                            ✓ Connected
                                        </span>
                                    </div>

                                    {/* Campaign summary strip */}
                                    <div className="grid grid-cols-3 gap-2 mb-4">
                                        {[
                                            { val: "8.4K", label: "Messages Sent" },
                                            { val: "96%", label: "Delivery Rate" },
                                            { val: "1.2K", label: "Active Chats" },
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

                                    {/* Conversation preview */}
                                    <div className="bg-gray-50 rounded-xl p-3.5 border border-gray-100 mb-4">
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                                            Live Conversation
                                        </p>
                                        <div className="flex flex-col gap-1.5">
                                            <div className="self-start bg-white rounded-lg px-3 py-2 text-xs text-gray-600 max-w-[75%] border border-gray-100">
                                                Hi! Do you have this in stock?
                                            </div>
                                            <div className="self-end bg-[#0B3C5D] rounded-lg px-3 py-2 text-xs text-white max-w-[75%]">
                                                Yes! Auto-reply sent in 2s. Agent following up now.
                                            </div>
                                        </div>
                                    </div>

                                    {/* Touchpoints */}
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                                        Campaign Highlights
                                    </p>
                                    <div className="grid grid-cols-2 gap-2 mb-4">
                                        {[
                                            { icon: "📢", name: "Broadcast Campaigns" },
                                            { icon: "🔁", name: "Follow-Up Sequences" },
                                            { icon: "🤖", name: "Chatbot Automation" },
                                            { icon: "📊", name: "Engagement Tracking" },
                                        ].map(({ icon, name }) => (
                                            <div key={name} className="rounded-xl p-3 border border-gray-100 bg-gray-50">
                                                <div className="text-xl mb-1.5">{icon}</div>
                                                <p className="text-xs font-bold text-gray-700">{name}</p>
                                                <p className="text-[10px] text-green-500 font-semibold mt-0.5">● Active</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                        <span className="text-xs text-gray-400">Last synced: just now</span>
                                        <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-blue-50 text-[#0B3C5D]">
                                            Engagement score: 94 ✓
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
                                    Certified WhatsApp Business Partner · Ahmedabad
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
                                Getting Started
                            </p>
                            <h2
                                className="text-[#021e7a] text-3xl font-black leading-tight mb-4"

                            >
                                What is WhatsApp Marketing?
                            </h2>
                            <div
                                className="w-10 h-[3px] rounded-full mb-5"
                                style={{ background: "linear-gradient(90deg,#F07830,#0B3C5D)" }}
                            />
                            <p className="text-sm text-gray-500 leading-relaxed mb-5">
                                WhatsApp marketing is not just about sending messages — it is a
                                structured system powered by the WhatsApp Business API. It
                                enables businesses to manage conversations, automate responses,
                                and scale communication efficiently.
                            </p>
                            <div
                                className="px-4 py-3 text-sm text-amber-800 leading-relaxed"
                                style={{ borderLeft: "3px solid #F07830", background: "#fff8f3" }}
                            >
                                👉 This system transforms WhatsApp into a{" "}
                                <strong className="font-semibold text-amber-700">complete business communication channel</strong>.
                            </div>
                        </div>

                        {/* Feature cards */}
                        <div className="flex-1 flex flex-col gap-3">
                            {[
                                { icon: "🔌", text: "API-powered messaging infrastructure — the WhatsApp Business API allows businesses to send messages at scale while maintaining control and compliance." },
                                { icon: "🎯", text: "Targeted broadcast campaigns — messages are sent to segmented users rather than random bulk messaging. This improves relevance and engagement." },
                                { icon: "⚙️", text: "Automated messaging workflows — messages are triggered based on user actions like enquiries or purchases. This ensures timely communication." },
                                { icon: "💬", text: "Two-way conversational engagement — customers can respond instantly, making communication interactive and effective." },
                                { icon: "📨", text: "Transactional and promotional messaging — businesses can send updates, reminders, and offers in a structured way." },
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
                    {/* ── BLOCK 2: Design without a system ── */}
                    <div>
                        {/* ── Who Needs WhatsApp Marketing Software ── */}
                        <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-gray-400 text-center mb-2">
                            Who It's For
                        </p>
                        <h2
                            className="text-[#021e7a] text-3xl font-black text-center mb-3"

                        >
                            Who Needs WhatsApp Marketing Software?
                        </h2>
                        <p className="text-sm text-gray-500 leading-relaxed text-center max-w-xl mx-auto mb-8">
                            In fast-moving markets like Ahmedabad, businesses that respond faster
                            often win more customers. WhatsApp marketing becomes essential where
                            communication speed directly impacts conversions. A WhatsApp
                            Marketing Agency in Ahmedabad typically works with businesses that
                            require continuous and reliable customer interaction.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
                            {[
                                { number: "01", title: "Local service businesses", description: "These businesses depend on quick responses to enquiries. WhatsApp ensures instant communication and better conversion rates." },
                                { number: "02", title: "E-commerce brands", description: "From order updates to cart recovery, WhatsApp improves communication across the buying journey." },
                                { number: "03", title: "Real estate companies", description: "Long sales cycles require consistent follow-ups. WhatsApp helps maintain engagement over time." },
                                { number: "04", title: "Healthcare & educational institutes", description: "Automated reminders and updates improve communication efficiency." },
                                { number: "05", title: "B2B companies", description: "Structured follow-ups help maintain consistent communication with prospects." },
                            ].map((card) => (
                                <div key={card.number} className="p-5 rounded-2xl border border-gray-100 bg-gray-50 flex flex-col gap-3">
                                    <span className="text-4xl font-black text-gray-200">{card.number}</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-orange-50 text-orange-700 w-fit">
                                        Audience
                                    </span>
                                    <p className="text-sm font-bold text-[#021e7a]">{card.title}</p>
                                    <p className="text-xs text-gray-500 leading-relaxed">{card.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* ── Why WhatsApp Outperforms Email & SMS ── */}
                        <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-gray-400 text-center mb-2">
                            Channel Comparison
                        </p>
                        <h2
                            className="text-[#021e7a] text-3xl font-black text-center mb-3"

                        >
                            Why WhatsApp Outperforms Email & SMS
                        </h2>
                        <p className="text-sm text-gray-500 leading-relaxed text-center max-w-xl mx-auto mb-8">
                            Traditional channels like email and SMS often fail due to low
                            visibility and delayed interaction. Customers may ignore messages or
                            respond late, affecting conversions. WhatsApp solves this by
                            enabling real-time, interactive communication.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-5 rounded-2xl border border-gray-100 bg-gray-50 flex flex-col gap-3">
                                <span className="text-4xl font-black text-gray-200">01</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-orange-50 text-orange-700 w-fit">
                                    Advantage
                                </span>
                                <p className="text-sm font-bold text-[#021e7a]">Higher open rates and visibility</p>
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    Messages are typically read within minutes, increasing the chances of engagement.
                                </p>
                            </div>

                            <div className="p-5 rounded-2xl border border-gray-100 bg-gray-50 flex flex-col gap-3">
                                <span className="text-4xl font-black text-gray-200">02</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-orange-50 text-orange-700 w-fit">
                                    Advantage
                                </span>
                                <p className="text-sm font-bold text-[#021e7a]">Instant two-way communication</p>
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    Customers can reply immediately, making conversations active and responsive.
                                </p>
                            </div>

                            <div className="p-5 rounded-2xl border border-gray-100 bg-gray-50 flex flex-col gap-3">
                                <span className="text-4xl font-black text-gray-200">03</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-orange-50 text-orange-700 w-fit">
                                    Advantage
                                </span>
                                <p className="text-sm font-bold text-[#021e7a]">Better engagement through rich media</p>
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    Images, videos, and documents make communication more informative.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            <div className="p-5 rounded-2xl border border-gray-100 bg-gray-50 flex flex-col gap-3 md:col-span-1">
                                <span className="text-4xl font-black text-gray-200">04</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-orange-50 text-orange-700 w-fit">
                                    Advantage
                                </span>
                                <p className="text-sm font-bold text-[#021e7a]">More personalised experience</p>
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    Conversations feel direct, improving trust and response quality.
                                </p>
                            </div>

                            <div className="p-5 rounded-2xl flex flex-col gap-3 bg-[#021e7a] md:col-span-2">
                                <span className="text-4xl font-black text-white/10">→</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 w-fit">
                                    Result
                                </span>
                                <p className="text-sm font-bold text-white">WhatsApp closes the gap traditional channels leave open</p>
                                <p className="text-xs text-white/60 leading-relaxed">
                                    Real-time, interactive, and personal — WhatsApp turns communication into consistent engagement, and consistent engagement into stronger conversions.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ── BLOCK 3: Contrarian truth ── */}
                    <div className="flex flex-col gap-8">

                        {/* ── How Foxaircomm Executes WhatsApp Campaigns ── */}
                        <div className="rounded-2xl bg-[#021e7a] p-10 flex flex-col lg:flex-row gap-10 items-start">

                            {/* Left */}
                            <div className="flex-1">
                                <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-white/30 mb-2">
                                    Our Process
                                </p>
                                <h2
                                    className="text-white text-2xl font-black leading-snug mb-4"

                                >
                                    How Foxaircomm Executes WhatsApp Campaigns
                                </h2>
                                <p className="text-sm text-white/55 leading-relaxed mb-5">
                                    Many businesses fail not because of a lack of tools, but due
                                    to a lack of structure. A proper execution framework ensures
                                    consistency and better performance.
                                </p>
                                <div
                                    className="px-4 py-3 text-sm text-white/65 leading-relaxed"
                                    style={{ borderLeft: "3px solid #F07830", background: "rgba(240,120,48,0.1)" }}
                                >
                                    👉 As a <strong className="text-[#F07830] font-semibold">WhatsApp Marketing Agency in Ahmedabad</strong>, Foxaircomm follows a systematic approach to campaign execution.
                                </div>
                            </div>

                            {/* Right */}
                            <div className="flex-1 flex flex-col gap-3">
                                {[
                                    { title: "Campaign objective planning", body: "Every campaign starts with a clear goal, such as lead generation or engagement." },
                                    { title: "Audience segmentation", body: "Users are grouped based on behaviour and intent to improve targeting." },
                                    { title: "WhatsApp Business API setup", body: "As a Bulk WhatsApp API Service Provider in Ahmedabad, we implement scalable infrastructure." },
                                    { title: "Message template approval", body: "Templates are approved to ensure compliance and smooth delivery." },
                                    { title: "Campaign deployment", body: "Messages are sent strategically to maximise engagement." },
                                    { title: "Chatbot automation setup", body: "Automated responses ensure instant communication." },
                                    { title: "Analytics and optimisation", body: "Performance data is used to improve campaign results." },
                                ].map(({ title, body }) => (
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
                            </div>
                        </div>

                        {/* ── WhatsApp Marketing Software Capabilities ── */}
                        <div className="rounded-2xl bg-[#021e7a] p-10 flex flex-col lg:flex-row gap-10 items-start">

                            {/* Left */}
                            <div className="flex-1">
                                <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-white/30 mb-2">
                                    Platform Capabilities
                                </p>
                                <h2
                                    className="text-white text-2xl font-black leading-snug mb-4"

                                >
                                    WhatsApp Marketing Software Capabilities
                                </h2>
                                <p className="text-sm text-white/55 leading-relaxed mb-5">
                                    As businesses grow, manual communication becomes inefficient.
                                    A structured platform helps manage messaging at scale
                                    without complexity.
                                </p>
                                <div
                                    className="px-4 py-3 text-sm text-white/65 leading-relaxed"
                                    style={{ borderLeft: "3px solid #F07830", background: "rgba(240,120,48,0.1)" }}
                                >
                                    👉 As a <strong className="text-[#F07830] font-semibold">Bulk WhatsApp Marketing Services provider in Ahmedabad</strong>, Foxaircomm offers tools that simplify communication.
                                </div>
                            </div>

                            {/* Right */}
                            <div className="flex-1 flex flex-col gap-3">
                                {[
                                    { title: "Centralised dashboard for campaign control", body: "Manage all messaging activities from one place." },
                                    { title: "Bulk message scheduling and automation", body: "Plan and execute campaigns automatically." },
                                    { title: "Advanced audience segmentation tools", body: "Improve targeting based on user behaviour." },
                                    { title: "Automation workflows for communication", body: "Trigger messages based on user actions." },
                                    { title: "CRM and chatbot integration", body: "Connect customer data and conversations." },
                                    { title: "Analytics and reporting system", body: "Track performance and optimise campaigns." },
                                ].map(({ title, body }) => (
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
                            </div>
                        </div>

                    </div>
                    {/* ── BLOCK 4: Who needs this ── */}
                    <div className="flex flex-col gap-16">

                        {/* ── Business Use Cases ── */}
                        <div>
                            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-gray-400 text-center mb-2">
                                Where It Applies
                            </p>
                            <h2
                                className="text-[#021e7a] text-3xl font-black text-center mb-3"

                            >
                                Business Use Cases of WhatsApp Marketing
                            </h2>
                            <p className="text-sm text-gray-500 leading-relaxed text-center max-w-md mx-auto mb-8">
                                WhatsApp marketing is effective because it fits naturally into
                                real business scenarios. It supports both marketing and
                                operational communication. Businesses use it to improve
                                efficiency and engagement.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { title: "Lead generation campaigns", body: "Engage users instantly when they show interest." },
                                    { title: "Abandoned cart recovery", body: "Remind users to complete their purchases." },
                                    { title: "Promotional broadcast campaigns", body: "Send targeted offers to relevant users." },
                                    { title: "Appointment reminders and notifications", body: "Reduce missed appointments." },
                                    { title: "Order updates and transactional messaging", body: "Keep customers informed in real time." },
                                    { title: "Customer support automation", body: "Resolve queries quickly and efficiently." },
                                ].map((item, i) => (
                                    <div
                                        key={item.title}
                                        className="flex items-start gap-3 p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:border-[#021e7a] hover:bg-blue-50 transition-colors duration-200"
                                    >
                                        <span
                                            className="text-2xl font-black text-gray-200 flex-shrink-0 leading-none"

                                        >
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            <strong className="text-[#021e7a] font-bold">{item.title}</strong> — {item.body}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── Business Problems & WhatsApp Solutions ── */}
                        <div>
                            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-gray-400 text-center mb-2">
                                Problems We Solve
                            </p>
                            <h2
                                className="text-[#021e7a] text-3xl font-black text-center mb-3"

                            >
                                Business Problems & WhatsApp Solutions
                            </h2>
                            <p className="text-sm text-gray-500 leading-relaxed text-center max-w-md mx-auto mb-8">
                                Most businesses face communication gaps that impact conversions.
                                Delays, missed follow-ups, and low engagement are common issues.
                                WhatsApp marketing helps solve these challenges effectively.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { title: "Low response rates from email campaigns", body: "Emails are often ignored. WhatsApp improves visibility and response rates." },
                                    { title: "Poor customer engagement", body: "One-way communication limits interaction. WhatsApp enables conversations." },
                                    { title: "Slow communication cycles", body: "Delayed replies lead to lost opportunities. WhatsApp improves response speed." },
                                    { title: "Lack of automated follow-ups", body: "Automation ensures consistent engagement without manual effort." },
                                ].map((item, i) => (
                                    <div
                                        key={item.title}
                                        className="flex items-start gap-3 p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:border-[#021e7a] hover:bg-blue-50 transition-colors duration-200"
                                    >
                                        <span
                                            className="text-2xl font-black text-gray-200 flex-shrink-0 leading-none"

                                        >
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            <strong className="text-[#021e7a] font-bold">{item.title}</strong> — {item.body}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── Why Ahmedabad Businesses Benefit ── */}
                        <div>
                            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-gray-400 text-center mb-2">
                                Local Context
                            </p>
                            <h2
                                className="text-[#021e7a] text-3xl font-black text-center mb-3"

                            >
                                Why Ahmedabad Businesses Benefit from WhatsApp Marketing
                            </h2>
                            <p className="text-sm text-gray-500 leading-relaxed text-center max-w-md mx-auto mb-8">
                                Ahmedabad is a competitive and fast-growing market where quick
                                communication can make a significant difference. Businesses need
                                efficient ways to connect with customers. WhatsApp Marketing
                                Services in Ahmedabad help businesses stay responsive and
                                competitive.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { title: "Fast-moving business environment", body: "Quick responses give businesses an advantage." },
                                    { title: "High customer expectation for instant replies", body: "WhatsApp helps meet these expectations consistently." },
                                    { title: "Growing adoption across industries", body: "Many businesses are working with a WhatsApp Marketing Company in Ahmedabad." },
                                    { title: "Stronger customer relationships", body: "Direct communication improves trust and engagement." },
                                ].map((item, i) => (
                                    <div
                                        key={item.title}
                                        className="flex items-start gap-3 p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:border-[#021e7a] hover:bg-blue-50 transition-colors duration-200"
                                    >
                                        <span
                                            className="text-2xl font-black text-gray-200 flex-shrink-0 leading-none"

                                        >
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            <strong className="text-[#021e7a] font-bold">{item.title}</strong> — {item.body}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── Compliance & WhatsApp Policy ── */}
                        <div>
                            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-gray-400 text-center mb-2">
                                Trust & Safety
                            </p>
                            <h2
                                className="text-[#021e7a] text-3xl font-black text-center mb-3"

                            >
                                Compliance & WhatsApp Policy
                            </h2>
                            <p className="text-sm text-gray-500 leading-relaxed text-center max-w-md mx-auto mb-8">
                                Compliance is essential to ensure long-term success in WhatsApp
                                marketing. Following official guidelines helps maintain trust
                                and avoid restrictions. Foxaircomm ensures all campaigns are
                                compliant and secure.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { title: "Customer opt-in requirement", body: "Messages are sent only to users who have given consent." },
                                    { title: "Approved message templates", body: "Templates are verified before use." },
                                    { title: "Controlled messaging practices", body: "Message frequency is managed to avoid spam." },
                                    { title: "Secure communication system", body: "Businesses operate within official WhatsApp guidelines." },
                                ].map((item, i) => (
                                    <div
                                        key={item.title}
                                        className="flex items-start gap-3 p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:border-[#021e7a] hover:bg-blue-50 transition-colors duration-200"
                                    >
                                        <span
                                            className="text-2xl font-black text-gray-200 flex-shrink-0 leading-none"

                                        >
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            <strong className="text-[#021e7a] font-bold">{item.title}</strong> — {item.body}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── Expected Business Results ── */}
                        <div>
                            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-gray-400 text-center mb-2">
                                The Outcome
                            </p>
                            <h2
                                className="text-[#021e7a] text-3xl font-black text-center mb-3"

                            >
                                Expected Business Results
                            </h2>
                            <p className="text-sm text-gray-500 leading-relaxed text-center max-w-md mx-auto mb-8">
                                When implemented correctly, WhatsApp marketing delivers
                                measurable improvements in communication and conversions. It
                                helps businesses operate more efficiently. Results are based on
                                structured execution and consistent engagement.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                {[
                                    { title: "Higher response and engagement rates", body: "Messages are seen and acted upon quickly." },
                                    { title: "Improved lead nurturing process", body: "Automated follow-ups keep leads engaged." },
                                    { title: "Increased conversion opportunities", body: "Faster communication improves conversion chances." },
                                    { title: "Better customer experience", body: "Real-time interaction enhances satisfaction." },
                                ].map((item, i) => (
                                    <div
                                        key={item.title}
                                        className="flex items-start gap-3 p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:border-[#021e7a] hover:bg-blue-50 transition-colors duration-200"
                                    >
                                        <span
                                            className="text-2xl font-black text-gray-200 flex-shrink-0 leading-none"

                                        >
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            <strong className="text-[#021e7a] font-bold">{item.title}</strong> — {item.body}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Proof point */}
                            <div className="p-5 rounded-2xl bg-[#021e7a] flex items-start gap-3">
                                <span className="text-2xl font-black text-white/20 flex-shrink-0 leading-none">
                                    ✓
                                </span>
                                <p className="text-sm text-white/80 leading-relaxed">
                                    <strong className="text-white font-bold">Proven performance improvement</strong> — A retail business in Ahmedabad achieved 3.2x higher enquiry responses.
                                </p>
                            </div>
                        </div>

                        {/* ── Get Started CTA strip ── */}
                        <div>
                            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-gray-400 text-center mb-2">
                                Next Step
                            </p>
                            <h2
                                className="text-[#021e7a] text-3xl font-black text-center mb-3"

                            >
                                Get Started with WhatsApp Marketing
                            </h2>
                            <p className="text-sm text-gray-500 leading-relaxed text-center max-w-md mx-auto mb-8">
                                If your business is generating leads but struggling to convert
                                them, the issue is often a communication problem. A structured
                                WhatsApp system can solve this. Take the next step towards
                                better engagement and conversions.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5 rounded-2xl bg-gray-50 border border-gray-100">
                                <p className="text-sm text-gray-700 font-medium text-center sm:text-left">
                                    Move from scattered messaging to a{" "}
                                    <span className="text-[#021e7a] font-bold">structured WhatsApp marketing system</span>
                                </p>

                                <a href="/contact"
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-white text-sm whitespace-nowrap flex-shrink-0 transition-all hover:-translate-y-0.5"
                                    style={{
                                        background: "linear-gradient(135deg,#F07830,#d95e18)",
                                        boxShadow: "0 4px 16px rgba(240,120,48,0.35)",
                                    }}
                                >
                                    Request a Customised Strategy Plan
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* ── FAQs ── */}
                        <div>
                            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-gray-400 text-center mb-2">
                                Common Questions
                            </p>
                            <h2
                                className="text-[#021e7a] text-3xl font-black text-center mb-8"

                            >
                                Frequently Asked Questions
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { q: "What is WhatsApp marketing?", a: "WhatsApp marketing uses the WhatsApp Business API to send automated and promotional messages while enabling real-time interaction." },
                                    { q: "How much does WhatsApp marketing cost in Ahmedabad?", a: "Costs vary based on API usage, message volume, and platform features." },
                                    { q: "Is WhatsApp marketing legal in India?", a: "Yes, when businesses follow opt-in consent and WhatsApp guidelines." },
                                    { q: "What is WhatsApp Business API?", a: "It is an official platform for scalable and automated messaging." },
                                    { q: "How many messages can be sent through WhatsApp marketing?", a: "Limits depend on WhatsApp approval tiers." },
                                    { q: "Is WhatsApp marketing better than SMS marketing?", a: "Yes, due to higher engagement and real-time interaction." },
                                    { q: "Can WhatsApp marketing generate leads?", a: "Yes, it helps capture and nurture leads effectively." },
                                    { q: "What is the difference between WhatsApp API and WhatsApp Business?", a: "API enables automation and scale, while Business is manual." },
                                    { q: "Is bulk WhatsApp marketing safe for businesses?", a: "Yes, when done using the official API and opt-in users." },
                                ].map((item) => (
                                    <div
                                        key={item.q}
                                        className="p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:border-[#021e7a] hover:bg-blue-50 transition-colors duration-200"
                                    >
                                        <p className="text-sm font-bold text-[#021e7a] mb-2">{item.q}</p>
                                        <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section >
        </>
    );
}
