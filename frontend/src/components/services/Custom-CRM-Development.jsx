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

const faqData = [
    {
        question:
            "What is construction management software used for?",
        answer:
            "Construction management software helps businesses manage projects, labor, contractors, budgets, timelines, billing, reports, and communication from a single platform.",
    },
    {
        question:
            "Can Foxaircomm build custom construction management software?",
        answer:
            "Yes. Foxaircomm develops customized construction management software solutions based on your workflow, team structure, reporting needs, and project requirements.",
    },
    {
        question:
            "Which construction businesses benefit from this software?",
        answer:
            "Builders, contractors, infrastructure companies, architects, civil engineers, real estate developers, and project management firms benefit significantly from construction software solutions.",
    },
    {
        question:
            "Can the software manage multiple construction projects?",
        answer:
            "Yes. The software can manage multiple ongoing projects, contractor teams, budgets, progress tracking, approvals, and reporting through a centralized dashboard.",
    },
];


const reasons = [
    {
        icon: "⚙️",
        color: "bg-indigo-50 text-indigo-700",
        accent: "bg-indigo-600",
        title: "Personalised for how you work",
        body: "Every business operates differently, and a generic platform rarely accounts for that. As your dedicated CRM implementation partner in Pune, Foxaircomm builds every feature, module, and workflow around your specific operations so your team adopts the system naturally from day one.",
    },
    {
        icon: "🔌",
        color: "bg-emerald-50 text-emerald-700",
        accent: "bg-emerald-600",
        title: "Seamless integration across your stack",
        body: "A CRM that doesn't connect with your existing tools creates more friction than it removes. Our custom CRM software development services in Pune ensure native integration with your ERP, finance systems, communication tools, and third-party APIs — so data moves automatically without manual re-entry.",
    },
    {
        icon: "🤖",
        color: "bg-amber-50 text-amber-700",
        accent: "bg-amber-500",
        title: "Automation that runs on your business logic",
        body: "Foxaircomm maps your real workflows directly into the CRM — lead assignments, approval chains, follow-up triggers, and escalation rules. Your team stops managing processes manually and focuses entirely on work that needs a human.",
    },
    {
        icon: "📈",
        color: "bg-blue-50 text-blue-700",
        accent: "bg-blue-600",
        title: "Insights and scalability built in",
        body: "Every enterprise CRM development service in Pune is architected to scale — more users, more data, more markets — without performance issues or costly migrations. Built-in analytics surface the exact metrics your leadership tracks, structured the way your business thinks.",
    },
    {
        icon: "🤝",
        color: "bg-pink-50 text-pink-700",
        accent: "bg-pink-600",
        title: "A better experience for your customers",
        body: "When your team has complete customer context in one place, every interaction becomes faster and more relevant. Businesses that invest in bespoke CRM solutions consistently see stronger retention, higher satisfaction, and more repeat business as a direct result.",
    },
];



const coreFeatures = [
    {
        icon: "🗄️",
        bg: "bg-indigo-50",
        text: "text-indigo-700",
        title: "Customer data management",
        body: "Every contact, account, and interaction history in one clean, searchable repository across your organisation.",
    },
    {
        icon: "📣",
        bg: "bg-amber-50",
        text: "text-amber-700",
        title: "Sales & marketing automation",
        body: "Automated pipeline transitions, lead nurturing sequences, and campaign triggers without manual input at every step.",
    },
    {
        icon: "📊",
        bg: "bg-blue-50",
        text: "text-blue-700",
        title: "Analytics & reporting",
        body: "Real-time dashboards built around your KPIs — pipeline velocity, conversion rates, and territory performance.",
    },
    {
        icon: "🔌",
        bg: "bg-emerald-50",
        text: "text-emerald-700",
        title: "Third-party integration",
        body: "Native connections to payment gateways, logistics APIs, communication platforms, and ERP systems without friction.",
    },
    {
        icon: "☁️",
        bg: "bg-violet-50",
        text: "text-violet-700",
        title: "Cloud & web-based delivery",
        body: "Fully accessible, device-agnostic platforms deployed securely on cloud infrastructure.",
    },
    {
        icon: "🔒",
        bg: "bg-pink-50",
        text: "text-pink-700",
        title: "Enhanced security",
        body: "Role-based access control, end-to-end encryption, and comprehensive audit trail logging built in from day one.",
    },
];

const modules = [
    { icon: "👤", bg: "bg-indigo-50", text: "text-indigo-600", title: "Lead management", body: "Multi-touch nurturing and pipeline tracking for complex sales cycles" },
    { icon: "✅", bg: "bg-blue-50", text: "text-blue-600", title: "Task management (TMS)", body: "Internal task distribution, tracking, and cross-team accountability" },
    { icon: "💰", bg: "bg-emerald-50", text: "text-emerald-700", title: "Finance & accounts", body: "Structured approval workflows and financial visibility in one place" },
    { icon: "👥", bg: "bg-amber-50", text: "text-amber-700", title: "HR & payroll", body: "People management integrated directly into your operational CRM" },
    { icon: "🏗️", bg: "bg-violet-50", text: "text-violet-700", title: "Construction pipelines", body: "Site-based project tracking and team coordination" },
    { icon: "📦", bg: "bg-green-50", text: "text-green-700", title: "Warehouse & inventory", body: "Real-time stock visibility for distribution businesses" },
    { icon: "📍", bg: "bg-pink-50", text: "text-pink-700", title: "Labour management", body: "Field-force tracking and scheduling for on-ground operations" },
    { icon: "🔍", bg: "bg-orange-50", text: "text-orange-700", title: "Asset tracking", body: "Equipment lifecycle and utilisation management for asset-heavy sectors" },
    { icon: "🛒", bg: "bg-sky-50", text: "text-sky-700", title: "E-commerce management", body: "Order tracking and customer lifecycle management for online businesses" },
];


const industries = [
    {
        icon: "🏘️",
        bg: "bg-indigo-50",
        text: "text-indigo-700",
        title: "Real estate CRM software",
        location: "Hinjewadi · Baner · Wakad",
        body: "Pune's real estate market runs on relationships, follow-ups, and fast-moving inventory. Foxaircomm builds CRM platforms that manage leads, track site visits, automate broker communications, and give developers complete pipeline visibility.",
        note: "Still working off spreadsheets? There is a better way.",
        full: false,
    },
    {
        icon: "⚙️",
        bg: "bg-amber-50",
        text: "text-amber-700",
        title: "Manufacturing CRM software",
        location: "Chakan · PCMC industrial belt",
        body: "For businesses operating here, a CRM is not just a sales tool — it is an operational nerve centre. Foxaircomm designs systems that integrate with procurement workflows, track B2B account relationships, and keep every stakeholder aligned across long sales cycles.",
        note: "Connecting vendors, distributors, production teams, and clients.",
        full: false,
    },
    {
        icon: "🛒",
        bg: "bg-emerald-50",
        text: "text-emerald-700",
        title: "E-commerce CRM software",
        location: "Pune's growing online sector",
        body: "High-volume customer interactions, order tracking, return workflows, and loyalty management — all in one place. Foxaircomm builds e-commerce CRMs that connect directly with your storefront, logistics partners, and payment systems.",
        note: "A single operational view of every customer relationship.",
        full: false,
    },
    {
        icon: "☁️",
        bg: "bg-violet-50",
        text: "text-violet-700",
        title: "Cloud & web-based CRM for hybrid teams",
        location: "Hinjewadi · Chakan · anywhere your team operates",
        body: "For businesses managing teams across multiple Pune locations, a cloud-based CRM removes the dependency on local infrastructure entirely. Foxaircomm delivers fully cloud-hosted, browser-accessible CRM platforms complete with a native Task Management System (TMS) module — keeping remote and hybrid teams aligned on daily tasks, project milestones, and internal accountability.",
        note: null,
        full: true,
    },
];



const steps = [
    {
        num: "01",
        bg: "bg-indigo-50",
        text: "text-indigo-700",
        icon: "🔍",
        title: "Discovery first",
        body: "We map your actual workflows — sales, operations, leadership — before a single line of code is written, so the CRM reflects how your business runs today and where it is heading tomorrow.",
    },
    {
        num: "02",
        bg: "bg-emerald-50",
        text: "text-emerald-700",
        icon: "🏗️",
        title: "Scalable cloud architecture",
        body: "Every CRM runs on a modular, cloud-based architecture designed for long-term performance — no bottlenecks, no costly rebuilds as your user base and data volumes grow.",
    },
    {
        num: "03",
        bg: "bg-amber-50",
        text: "text-amber-700",
        icon: "✅",
        title: "Tested, delivered, documented",
        body: "Rigorous QA testing across devices, user roles, and integration points. Full deployment plus clear documentation and onboarding support for smooth adoption from day one.",
    },
    {
        num: "04",
        bg: "bg-violet-50",
        text: "text-violet-700",
        icon: "🎧",
        title: "Ongoing maintenance & support",
        body: "A CRM is a living system. Foxaircomm provides dedicated post-launch maintenance, performance monitoring, and support to keep your platform reliable, secure, and up to date.",
    },
];

const reasonss = [
    {
        bg: "bg-indigo-50",
        illustrationBg: "bg-indigo-100",
        icon: "💰",
        iconBg: "bg-indigo-100 text-indigo-700",
        title: "Pricing that makes enterprise CRM accessible",
        body: "Enterprise-grade CRM development shouldn't come with an enterprise-sized barrier to entry. Foxaircomm structures every engagement around transparent, affordable pricing — no hidden costs, no bloated retainers, and no features you did not ask for.",
    },
    {
        bg: "bg-emerald-50",
        illustrationBg: "bg-emerald-100",
        icon: "👥",
        iconBg: "bg-emerald-100 text-emerald-700",
        title: "A dedicated team that stays involved",
        body: "You won't be handed off to a junior resource after the kickoff call. Foxaircomm assigns a dedicated development team to every project — the same people who understand your brief at discovery are the ones delivering at launch.",
    },
    {
        bg: "bg-amber-50",
        illustrationBg: "bg-amber-100",
        icon: "📍",
        iconBg: "bg-amber-100 text-amber-700",
        title: "Deep local expertise in Pune's market",
        body: "From Hinjewadi's tech corridors to Chakan's manufacturing belt, Foxaircomm understands the operational realities of Pune-based businesses — delivering solutions that fit your market, your timelines, and your growth trajectory.",
    },
];


function CustomCRMDevelopment() {
    return (
        <div className="overflow-hidden bg-white">

            {/* HERO */}
            <section className="relative bg-gradient-to-br from-[#0a1f6e] via-[#0d2fa8] to-[#1a45c8] text-white overflow-hidden">

                {/* Decorative circles */}
                <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full bg-white/5 pointer-events-none" />

                {/* BLOCK 1 — What is Custom CRM Development? */}
                <div className="max-w-5xl mx-auto px-6 pt-16 pb-10 text-center">
                    <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-sm px-4 py-1.5 rounded-full mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f85415] inline-block" />
                        CRM Software Development Company in Pune
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                        What is Custom CRM Development?
                    </h2>
                    <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
                        Custom CRM development is the process of building a customer relationship management system
                        tailored to an organisation's specific workflows, data structures, and operational goals.
                        Unlike off-the-shelf software, a custom CRM integrates natively with existing tools and
                        scales alongside business growth.
                    </p>
                    <p className="text-gray-400 max-w-2xl mx-auto mt-3 leading-relaxed text-sm">
                        As an established CRM software development company in Pune, Foxaircomm designs and builds
                        these systems around how your business actually operates.
                    </p>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 max-w-5xl mx-auto" />

                {/* BLOCK 2 — Hero with CRM illustration */}
                <div className="max-w-5xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10 items-center">

                    {/* Left: text */}
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-5 leading-snug">
                            CRM Software Development Company in Pune That Builds{" "}
                            <span className="text-[#f5b942]">Around Your Business</span>
                        </h1>
                        <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                            Your business has its own way of working. Your CRM should reflect that — not restrict it.
                            Foxaircomm is a specialist CRM software development company in Pune with a straightforward
                            approach: understand your workflows first, then build.
                        </p>

                        {/* Stat badges */}
                        <ul className="space-y-3 mb-8">
                            {[
                                { icon: "⏱", text: "5+ Years of CRM Development Experience" },
                                { icon: "🚀", text: "10+ Projects Delivered Across Industries" },
                                { icon: "💰", text: "Affordable Pricing — Enterprise Quality, Within Budget" },
                            ].map(({ icon, text }) => (
                                <li key={text} className="flex items-center gap-3 text-sm text-gray-200">
                                    <span className="text-base">{icon}</span>
                                    {text}
                                </li>
                            ))}
                        </ul>

                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 bg-[#f85415] hover:bg-orange-600 transition px-7 py-3.5 rounded-xl font-semibold text-sm"
                        >
                            Discuss Your Workflow with Our Pune Consultants
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    {/* Right: CRM Dashboard card illustration */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-sm bg-white/8 border border-white/15 rounded-2xl p-5 backdrop-blur-sm">

                            {/* Dashboard header */}
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
                                    CRM Dashboard
                                </span>
                                <div className="flex gap-1">
                                    {["bg-white/20", "bg-white/20", "bg-white/20"].map((c, i) => (
                                        <span key={i} className={`w-2 h-2 rounded-full ${c}`} />
                                    ))}
                                </div>
                            </div>

                            {/* Metrics */}
                            <div className="grid grid-cols-3 gap-2 mb-4">
                                {[
                                    { num: "284", label: "Leads", color: "text-white" },
                                    { num: "₹42L", label: "Pipeline", color: "text-emerald-300" },
                                    { num: "96%", label: "Retention", color: "text-yellow-300" },
                                ].map(({ num, label, color }) => (
                                    <div key={label} className="bg-white/10 rounded-lg py-3 text-center">
                                        <div className={`text-lg font-bold leading-none mb-1 ${color}`}>{num}</div>
                                        <div className="text-[9px] text-white/50 uppercase tracking-wide">{label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Pipeline bar */}
                            <p className="text-[9px] uppercase tracking-widest text-white/40 mb-1.5">
                                Sales pipeline stages
                            </p>
                            <div className="flex h-1.5 rounded-full overflow-hidden gap-0.5 mb-4">
                                <div className="flex-[4] bg-blue-400 rounded-l-full" />
                                <div className="flex-[2.5] bg-amber-400" />
                                <div className="flex-[2] bg-emerald-400" />
                                <div className="flex-[1.5] bg-white/20 rounded-r-full" />
                            </div>

                            {/* Activity feed */}
                            <div className="space-y-2">
                                {[
                                    { init: "RS", color: "bg-blue-400/20 text-blue-300", text: "Rahul closed deal with TechCorp", time: "2m ago" },
                                    { init: "PM", color: "bg-emerald-400/20 text-emerald-300", text: "New lead assigned — InfraBuild Ltd", time: "18m ago" },
                                    { init: "AK", color: "bg-amber-400/20 text-amber-300", text: "Follow-up — Pune Developers", time: "1h ago" },
                                ].map(({ init, color, text, time }) => (
                                    <div key={init} className="flex items-center gap-2.5 bg-white/6 rounded-lg px-3 py-2">
                                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-semibold flex-shrink-0 ${color}`}>
                                            {init}
                                        </div>
                                        <p className="text-[11px] text-white/75 flex-1 leading-snug">{text}</p>
                                        <span className="text-[9px] text-white/30 flex-shrink-0">{time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom stats strip */}
                <div className="border-t border-white/10">
                    <div className="max-w-5xl mx-auto grid grid-cols-3 divide-x divide-white/10">
                        {[
                            { num: "5+", label: "Years of CRM Development Experience" },
                            { num: "10+", label: "Projects Delivered Across Industries" },
                            { num: "₹ Affordable", label: "Enterprise Quality, Within Budget" },
                        ].map(({ num, label }) => (
                            <div key={label} className="px-6 py-6 text-center">
                                <div className="text-2xl font-bold text-[#f5b942] mb-1">{num}</div>
                                <div className="text-xs text-white/50 leading-snug">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DIFFERENCE */}
            <section className="py-20 bg-white px-4">
                <div className="max-w-7xl mx-auto">

                    <SectionHeader
                        badge="Why Choose Custom CRM"
                        title="Why Custom CRM Software is the Best Choice for Your Business"
                    />

                    <p className="mb-10 text-gray-600 max-w-3xl leading-relaxed">
                        Off-the-shelf software forces your team to adapt to rigid, pre-built frameworks.
                        Investing in a bespoke solution ensures your platform scales with your operational
                        logic, driving efficiency across every department.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reasons.map(({ icon, color, accent, title, body }) => (
                            <div
                                key={title}
                                className="p-6 border border-gray-100 rounded-2xl hover:border-gray-200 hover:shadow-md transition group"
                            >
                                {/* Icon */}
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-3 ${color}`}>
                                    {icon}
                                </div>

                                {/* Accent bar */}
                                <div className={`w-7 h-1 rounded-full mb-3 ${accent}`} />

                                {/* Title */}
                                <h3 className="text-base font-semibold text-gray-900 mb-2 leading-snug">
                                    {title}
                                </h3>

                                {/* Body */}
                                <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* CASE STUDY */}
            <section className="py-20 bg-[#F8FAFC] px-4">
                <div className="max-w-6xl mx-auto">

                    <SectionHeader
                        badge="Key Features & Modules"
                        title="Enterprise-Grade CRM Features for Modern Workflows"
                    />

                    <p className="mb-10 text-gray-600 max-w-3xl leading-relaxed">
                        Foxaircomm delivers enterprise software solutions in Pune, engineered to carry real
                        operational weight — not just tick feature boxes.
                    </p>

                    {/* Core Features */}
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                        Core platform features
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
                        {coreFeatures.map(({ icon, bg, text, title, body }) => (
                            <div
                                key={title}
                                className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-gray-200 hover:shadow-sm transition"
                            >
                                <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg mb-3 ${bg} ${text}`}>
                                    {icon}
                                </div>
                                <h3 className="text-sm font-semibold text-gray-900 mb-1.5 leading-snug">{title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
                            </div>
                        ))}
                    </div>

                    {/* Divider */}
                    <hr className="border-gray-100 mb-10" />

                    {/* Industry Modules */}
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                        Specialised industry modules
                    </p>
                    <p className="text-gray-500 text-sm mb-6 max-w-2xl leading-relaxed">
                        Foxaircomm builds industry-specific modules that integrate directly into your CRM core —
                        never bolted on as afterthoughts.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {modules.map(({ icon, bg, text, title, body }) => (
                            <div key={title} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0 ${bg} ${text}`}>
                                    {icon}
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-800 mb-0.5 leading-snug">{title}</p>
                                    <p className="text-xs text-gray-500 leading-relaxed">{body}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* SERVICES */}
            <section className="py-20 bg-white px-4">
                <div className="max-w-7xl mx-auto">

                    <SectionHeader
                        badge="Industry CRM Solutions"
                        title="Specialised CRM Development for Pune's Economic Hubs"
                    />

                    <p className="mb-10 text-gray-600 max-w-3xl leading-relaxed">
                        Pune has evolved into a diverse, multi-sector economic powerhouse. From tech corridors
                        to heavy industrial belts, local enterprises need systems built for the operational
                        realities of their specific market — not generic platforms retrofitted to fit.
                        Foxaircomm designs bespoke CRM platforms built explicitly for the industries driving
                        Pune's growth.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {industries.map(({ icon, bg, text, title, location, body, note, full }) => (
                            <div
                                key={title}
                                className={`flex flex-col border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 hover:shadow-sm transition ${full ? "md:col-span-2 lg:col-span-3" : ""
                                    }`}
                            >
                                {/* Card top */}
                                <div className="flex items-start gap-3 px-5 pt-5 pb-3">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${bg} ${text}`}>
                                        {icon}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900 leading-snug">{title}</p>
                                        <p className="text-xs text-gray-400 mt-0.5">{location}</p>
                                    </div>
                                </div>

                                {/* Body */}
                                <p className="text-sm text-gray-500 leading-relaxed px-5 pb-4">{body}</p>

                                {/* Note */}
                                {note && (
                                    <p className="text-xs italic text-gray-400 px-5 py-3 border-t border-gray-100 mt-auto">
                                        {note}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* PROCESS */}
            {/* BLOCK 7 — Process */}
            <section className="py-20 bg-[#F8FAFC] px-4">
                <div className="max-w-7xl mx-auto">

                    <SectionHeader
                        badge="Our Process"
                        title="Our Approach to CRM Engineering"
                    />

                    <p className="mb-10 text-gray-600 max-w-3xl leading-relaxed">
                        Foxaircomm's engineering process ensures your system is delivered on time, within
                        budget, and built exactly around your business logic — from the first conversation
                        to post-launch support.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-100 rounded-2xl overflow-hidden">
                        {steps.map(({ num, bg, text, icon, title, body }, i) => (
                            <div
                                key={title}
                                className={`relative bg-white p-6 ${i < steps.length - 1 ? "border-r border-gray-100" : ""
                                    }`}
                            >
                                {/* Step number watermark */}
                                <p className="font-bold text-3xl text-gray-100 leading-none mb-3 font-mono">{num}</p>

                                {/* Icon */}
                                <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg mb-3 ${bg} ${text}`}>
                                    {icon}
                                </div>

                                <h3 className="text-sm font-semibold text-gray-900 mb-2 leading-snug">{title}</h3>
                                <p className="text-xs text-gray-500 leading-relaxed">{body}</p>

                                {/* Arrow connector */}
                                {i < steps.length - 1 && (
                                    <span className="absolute -right-3 top-1/2 -translate-y-1/2 text-gray-300 text-sm z-10 bg-white px-0.5">
                                        →
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* BLOCK 8 — Why Choose Us */}
            <section className="py-20 bg-white px-4">
                <div className="max-w-7xl mx-auto">

                    <SectionHeader
                        badge="Why Choose Us"
                        title="Why Foxaircomm is Your Trusted CRM Partner in Pune"
                    />

                    <p className="mb-10 text-gray-600 max-w-3xl leading-relaxed">
                        Local enterprises partner with Foxaircomm because we combine enterprise-grade
                        execution with mid-market commercial agility — making us the preferred CRM
                        implementation partner in Pune for businesses of every size.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        {reasonss.map(({ illustrationBg, icon, iconBg, title, body }) => (
                            <div
                                key={title}
                                className="flex flex-col border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 hover:shadow-sm transition"
                            >
                                {/* Illustration area */}
                                <div className={`h-24 flex items-center justify-center ${illustrationBg}`}>
                                    <span className="text-5xl">{icon}</span>
                                </div>

                                {/* Content */}
                                <div className="p-5 flex flex-col gap-2 flex-1">
                                    <h3 className="text-sm font-semibold text-gray-900 leading-snug">{title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>





            {/* FAQ */}
            <section class="py-20 bg-gray-50 px-4">
                <div class="max-w-4xl mx-auto">

                    <span class="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">FAQs</span>
                    <h2 class="text-3xl font-bold text-[#0a1f6e] mb-10">Frequently Asked Questions About CRM Development in Pune</h2>

                    <div class="space-y-4">

                        <details class="bg-white border border-gray-100 rounded-2xl group">
                            <summary class="flex justify-between items-center px-6 py-4 cursor-pointer list-none font-medium text-gray-900 text-sm">
                                How much does it cost to build custom CRM software in Pune?
                                <span class="text-gray-400 group-open:rotate-180 transition-transform duration-200">&#8964;</span>
                            </summary>
                            <p class="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-l-2 border-[#f85415] ml-6 mt-1">
                                The cost scales based on your workflow complexity, number of modules, third-party integrations, and database size. Unlike off-the-shelf platforms with recurring per-user fees, Foxaircomm delivers a transparent, single-investment estimate after an initial discovery consultation — so you know exactly what you are paying for before anything begins.
                            </p>
                        </details>

                        <details class="bg-white border border-gray-100 rounded-2xl group">
                            <summary class="flex justify-between items-center px-6 py-4 cursor-pointer list-none font-medium text-gray-900 text-sm">
                                Which industries in Pune benefit most from custom CRM development?
                                <span class="text-gray-400 group-open:rotate-180 transition-transform duration-200">&#8964;</span>
                            </summary>
                            <p class="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-l-2 border-[#f85415] ml-6 mt-1">
                                High-growth industries across Pune — particularly real estate, manufacturing, e-commerce, construction, and logistics — benefit significantly. Any business relying on multi-tier sales pipelines, automated task tracking, or complex vendor communication requires a bespoke solution to eliminate bottlenecks and improve team coordination.
                            </p>
                        </details>

                        <details class="bg-white border border-gray-100 rounded-2xl group">
                            <summary class="flex justify-between items-center px-6 py-4 cursor-pointer list-none font-medium text-gray-900 text-sm">
                                Can you build a CRM app for mobile?
                                <span class="text-gray-400 group-open:rotate-180 transition-transform duration-200">&#8964;</span>
                            </summary>
                            <p class="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-l-2 border-[#f85415] ml-6 mt-1">
                                Yes. Foxaircomm builds mobile-responsive and native mobile CRM applications that give your team full platform access from any device. Whether your sales team is on the road or your operations staff is on-site, the system works exactly as it does at a desktop — securely and in real time.
                            </p>
                        </details>

                        <details class="bg-white border border-gray-100 rounded-2xl group">
                            <summary class="flex justify-between items-center px-6 py-4 cursor-pointer list-none font-medium text-gray-900 text-sm">
                                How can I contact Foxaircomm for CRM software development in Pune?
                                <span class="text-gray-400 group-open:rotate-180 transition-transform duration-200">&#8964;</span>
                            </summary>
                            <p class="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-l-2 border-[#f85415] ml-6 mt-1">
                                You can reach the Foxaircomm team through the contact form on this page, by calling our Pune office directly, or by booking a free consultation using the button below. We typically respond within one business day and are happy to begin with an informal conversation about your requirements.
                            </p>
                        </details>

                        <details class="bg-white border border-gray-100 rounded-2xl group">
                            <summary class="flex justify-between items-center px-6 py-4 cursor-pointer list-none font-medium text-gray-900 text-sm">
                                How does a custom CRM improve day-to-day team productivity?
                                <span class="text-gray-400 group-open:rotate-180 transition-transform duration-200">&#8964;</span>
                            </summary>
                            <p class="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-l-2 border-[#f85415] ml-6 mt-1">
                                A custom CRM eliminates manual tasks that quietly drain your team's productive hours — follow-up reminders, lead assignments, approval chains, and status updates all run automatically. Teams consistently report faster response times, fewer dropped tasks, and significantly less time spent on administrative work.
                            </p>
                        </details>

                        <details class="bg-white border border-gray-100 rounded-2xl group">
                            <summary class="flex justify-between items-center px-6 py-4 cursor-pointer list-none font-medium text-gray-900 text-sm">
                                Can CRM software be integrated with existing business tools?
                                <span class="text-gray-400 group-open:rotate-180 transition-transform duration-200">&#8964;</span>
                            </summary>
                            <p class="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-l-2 border-[#f85415] ml-6 mt-1">
                                Yes. Foxaircomm's custom CRM platforms are built with integration as a core requirement, not an afterthought. We connect your CRM natively with ERP systems, accounting software, communication platforms, payment gateways, and any third-party API your business currently relies on.
                            </p>
                        </details>

                        <details class="bg-white border border-gray-100 rounded-2xl group">
                            <summary class="flex justify-between items-center px-6 py-4 cursor-pointer list-none font-medium text-gray-900 text-sm">
                                How long does it take to build a custom CRM?
                                <span class="text-gray-400 group-open:rotate-180 transition-transform duration-200">&#8964;</span>
                            </summary>
                            <p class="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-l-2 border-[#f85415] ml-6 mt-1">
                                A focused single-module CRM can typically be delivered in six to eight weeks. A full enterprise CRM with multiple modules and integrations usually takes three to six months. Foxaircomm provides a realistic, phase-by-phase timeline during discovery — before you commit to anything.
                            </p>
                        </details>

                        <details class="bg-white border border-gray-100 rounded-2xl group">
                            <summary class="flex justify-between items-center px-6 py-4 cursor-pointer list-none font-medium text-gray-900 text-sm">
                                Is CRM suitable for startups as well as large enterprises?
                                <span class="text-gray-400 group-open:rotate-180 transition-transform duration-200">&#8964;</span>
                            </summary>
                            <p class="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-l-2 border-[#f85415] ml-6 mt-1">
                                Yes — and this is one of the key advantages of building custom. Foxaircomm can build a lean, affordable CRM for an early-stage startup that scales into a full enterprise platform as the business grows. You are not locked into a fixed tier or forced to pay for functionality you do not yet need.
                            </p>
                        </details>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section class="py-24 bg-[#0529a0] px-4 text-white text-center relative overflow-hidden">


                <div class="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none"></div>
                <div class="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none"></div>

                <div class="max-w-3xl mx-auto relative z-10">

                    <span class="inline-block bg-white/10 border border-white/20 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
                        Ready to get started?
                    </span>

                    <h2 class="text-4xl md:text-5xl font-bold mb-5 leading-tight">
                        Streamline Your <span class="text-[#f5b942]">Operations</span> Today
                    </h2>

                    <p class="text-gray-300 text-base md:text-lg leading-relaxed mb-4 max-w-2xl mx-auto">
                        Your CRM should be working for your business — not the other way around. Whether you are starting from scratch or replacing a platform your team has outgrown, Foxaircomm is ready to build something that fits.
                    </p>

                    <p class="text-gray-400 text-sm mb-10">
                        Not sure where to start? Speak with our Pune-based CRM specialists and walk away with clarity — at no cost.
                    </p>

                    <div class="flex flex-wrap justify-center gap-4 mb-12">
                        <a href="/contact" class="inline-flex items-center gap-2 bg-[#f85415] hover:bg-orange-600 transition px-8 py-4 rounded-xl font-semibold text-white text-sm">
                            Book a Free CRM Consultation
                            <span>→</span>
                        </a>
                        <a href="tel:8879864151" class="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 transition px-8 py-4 rounded-xl font-semibold text-sm">
                            Request a Demo
                        </a>
                    </div>


                    <div class="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                        <div class="flex items-center gap-2">
                            <span class="w-4 h-4 rounded-full bg-emerald-400/20 flex items-center justify-center text-emerald-400 text-xs">✓</span>
                            No commitment required
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="w-4 h-4 rounded-full bg-emerald-400/20 flex items-center justify-center text-emerald-400 text-xs">✓</span>
                            Response within 1 business day
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="w-4 h-4 rounded-full bg-emerald-400/20 flex items-center justify-center text-emerald-400 text-xs">✓</span>
                            Pune-based team
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
}

export default CustomCRMDevelopment;