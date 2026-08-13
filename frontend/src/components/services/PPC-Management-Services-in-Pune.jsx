import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Palette, Share2, Megaphone, Globe, Package, FileText, Film, LayoutTemplate, Building2, Award, Users, Clock, Search, Lightbulb, PenTool, RefreshCw, PackageCheck, Stethoscope, ShoppingBag, GraduationCap, UtensilsCrossed, Rocket, TrendingUp, Users2, Layers, Zap, ChevronDown, Target, Unlock, Filter, Eye, FileSearch, Layout, PhoneCall, MousePointerClick, MapPin, ArrowRight, TrendingDown, AlertCircle, MapPinOff, SearchX, LayoutGrid, RefreshCcw, ShieldCheck } from "lucide-react";
import { Helmet } from "react-helmet";

const SectionHeader = ({ badge, title, description }) => (
    <div className="max-w-4xl mb-12">
        <span className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold text-[#0529a0] border border-[#0529a0]/20 rounded-full bg-white">
            {badge}
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-[#0529a0] leading-tight mb-4">
            {title}
        </h2>

        {description && (
            <p className="text-white-600 text-lg leading-relaxed">
                {description}
            </p>
        )}

        <div className="w-16 h-1 bg-[#f85415] rounded mt-5"></div>
    </div>
);



const faqData = [
    {
        question: "Why is professional graphic design important for businesses?",
        answer:
            "Professional graphic design builds brand trust, improves customer perception, increases engagement, and helps businesses communicate more effectively across digital and print platforms.",
    },
    {
        question: "What graphic design services do you provide in Pune?",
        answer:
            "Foxaircomm provides logo design, social media creatives, branding, brochure design, packaging design, website graphics, ad creatives, and marketing collateral design services.",
    },
    {
        question: "How long does it take to complete a graphic design project?",
        answer:
            "Project timelines depend on complexity. Basic designs can be completed within a few days, while complete branding and packaging projects may take several weeks.",
    },
    {
        question: "Do graphic design services help improve marketing performance?",
        answer:
            "Yes. High-quality graphics improve ad engagement, click-through rates, brand recognition, and overall conversion performance across digital marketing campaigns.",
    },
];

function PPCmanagement() {


    const [open1, setOpen1] = useState(true);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);

    return (

        <>

            <Helmet>
                <title>PPC management services in Pune | Fox Aircomm
                </title>
                <meta name="description" content="PPC Management Services in Pune | Fox Aircomm Description: Full-funnel PPC management across Google, Bing & social platforms for businesses in Pune, Akurdi & PCMC. Fox Aircomm builds campaigns that convert." />
            </Helmet>

            <div className="overflow-hidden bg-white">

                {/* HERO */}
                <section className="bg-[#0529a0] text-white py-24 px-4 overflow-hidden">
                    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

                        {/* Left: Copy */}
                        <div>
                            <span className="inline-block bg-white/10 border border-white/20 text-sm px-4 py-1.5 rounded-full mb-6">
                                PPC Management in Pune
                            </span>

                            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                                PPC Management Services in Pune That Show Exactly What Your
                                Budget Is Doing
                            </h1>

                            <p className="text-gray-200 mb-10 leading-relaxed text-lg">
                                Running Google Ads and running Google Ads well are completely
                                different things. The gap shows up in your cost-per-lead — or the
                                absence of leads entirely.
                            </p>

                            <div className="space-y-6 mb-10">
                                <div className="flex gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                                        <Target className="w-5 h-5 text-[#f85415]" />
                                    </div>
                                    <p className="text-gray-200 leading-relaxed">
                                        <span className="font-semibold text-white">
                                            Optimised for your real conversion goal
                                        </span>{" "}
                                        — calls, form submissions, walk-ins, purchases. Each campaign
                                        we build starts from what a conversion actually means for
                                        your business, specifically.
                                    </p>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                                        <Unlock className="w-5 h-5 text-[#f85415]" />
                                    </div>
                                    <p className="text-gray-200 leading-relaxed">
                                        <span className="font-semibold text-white">
                                            Full account access from day one
                                        </span>{" "}
                                        — Admin access always. Your data, your campaign history, your
                                        account. If you ever leave, you take everything with you. No
                                        negotiation.
                                    </p>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                                        <TrendingUp className="w-5 h-5 text-[#f85415]" />
                                    </div>
                                    <p className="text-gray-200 leading-relaxed">
                                        <span className="font-semibold text-white">
                                            Proof over promises
                                        </span>{" "}
                                        — during Pune's admission season, one engineering college
                                        generated 874 inbound phone calls on ₹50,600 in ad spend — at
                                        approximately ₹58 per call. We'll show you exactly how.
                                    </p>
                                </div>
                            </div>

                            <Link
                                to="/contact"
                                className="inline-flex flex-col bg-[#f85415] hover:bg-orange-600 transition px-8 py-4 rounded-xl"
                            >
                                <span className="font-semibold">Talk to Our PPC Team</span>
                                <span className="text-sm text-white/80">Honest conversation, no pitch deck</span>
                            </Link>
                        </div>

                        {/* Right: Proof stat + image collage */}
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80"
                                    alt="Google Ads campaign performance dashboard"
                                    className="rounded-2xl object-cover w-full h-48 shadow-xl"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
                                    alt="Analytics and conversion tracking on laptop screen"
                                    className="rounded-2xl object-cover w-full h-48 shadow-xl translate-y-6"
                                />
                            </div>

                            {/* Proof stat card */}
                            <div className="bg-white text-gray-900 rounded-3xl shadow-2xl p-8 mt-6">
                                <p className="text-xs font-semibold text-[#f85415] uppercase tracking-wide mb-3">
                                    Real Campaign Result
                                </p>
                                <div className="flex items-end gap-3 mb-2">
                                    <span className="text-5xl font-bold text-[#0529a0]">₹58</span>
                                    <span className="text-gray-500 mb-1.5">per call</span>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    874 inbound calls generated for an engineering college during
                                    Pune's admission season, on just ₹50,600 in ad spend.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* DIFFERENCE */}
                {/* SECTION 1: Why design matters */}

                {/* SECTION 1: What is PPC — intent narrative */}
                <section className="py-20 px-4 bg-white">
                    <div className="max-w-4xl mx-auto">
                        <SectionHeader
                            badge="The Fundamentals"
                            title="What Is PPC Advertising?"
                        />

                        <p className="text-xl text-gray-800 leading-relaxed mb-6 font-medium">
                            The advantage of PPC is intent.
                        </p>

                        <div className="bg-[#0529a0]/5 border-l-4 border-[#0529a0] rounded-r-2xl px-6 py-5 mb-6">
                            <p className="text-gray-700 leading-relaxed">
                                Someone searching{" "}
                                <span className="font-semibold text-[#0529a0]">
                                    "B.Tech admissions Pune 2025"
                                </span>{" "}
                                has already made a decision. They're choosing who to call next. PPC
                                puts your business in front of that person at that exact moment —
                                before competitors appear.
                            </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed">
                            As a Google Ads agency in Pune, we work primarily with Google Search
                            campaigns and call-only ads because that's where purchase and enquiry
                            intent live for most local businesses.
                        </p>
                    </div>
                </section>

                {/* SECTION 2: What we manage table */}
                <section className="py-20 px-4 bg-[#F8FAFC]">
                    <div className="max-w-5xl mx-auto">
                        <SectionHeader
                            badge="Under the Hood"
                            title="What PPC Management Actually Involves"
                            description="The setup takes a week. The work that makes it perform happens every week after that."
                        />

                        <div className="border rounded-2xl overflow-hidden bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#0529a0] text-white">
                                        <th className="px-6 py-4 font-semibold text-sm w-2/5">What We Manage</th>
                                        <th className="px-6 py-4 font-semibold text-sm">Why It Matters</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ["Keyword research & match type selection", "Exact match and phrase match control where the budget goes; broad match without negatives silently bleeds spend"],
                                        ["Negative keyword management", "Stops irrelevant clicks before they happen — not after the budget is already spent"],
                                        ["Ad Rank & Quality Score optimisation", "Higher Quality Score = lower CPC for the same or better position"],
                                        ["Smart bidding & Target CPA setup", "Requires clean conversion data to work correctly — we verify this before launch"],
                                        ["Conversion tracking", "Measures real actions — calls, form completions, purchases — not page visits"],
                                        ["Remarketing & audience layering", "Re-engages people who visited but didn't convert — often the highest-ROI spend in any campaign"],
                                        ["Search term report review", "Weekly — because what people search in month three is never identical to month one"],
                                        ["Landing page alignment", "Ads get the click; the page gets the conversion — both have to work together"],
                                    ].map(([what, why], i) => (
                                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                            <td className="px-6 py-4 font-medium text-gray-900 text-sm align-top">{what}</td>
                                            <td className="px-6 py-4 text-gray-600 text-sm">{why}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: Real results — case study */}
                <section className="py-20 px-4 bg-[#0529a0] text-white">
                    <div className="max-w-6xl mx-auto">

                        <span className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold text-[#0529a0] border border-[#0529a0]/20 rounded-full bg-white">Proof</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#ffffff] leading-tight mb-4">Real Google Ads Results We Have Generated for Pune Businesses</h2>
                        <p className="text-white-600 text-lg leading-relaxed">All performance numbers below are taken directly from Google Ads campaign dashboards managed by Foxaircomm for Pune-based clients. Nothing here is projected or estimated.</p>

                        <p className="text-center text-lg font-medium text-gray-200 mb-12">
                            One result can look like luck. Three results look like a system.
                        </p>

                        <div className="bg-white text-gray-900 rounded-3xl p-8 md:p-10">
                            <div className="mb-8">
                                <p className="text-xs font-semibold text-[#f85415] uppercase tracking-wide mb-1">
                                    Campaign 1
                                </p>
                                <h3 className="text-2xl font-bold text-[#0529a0]">
                                    B.Tech Admissions Call Campaign — Dnyanvilas College of Engineering, Pune
                                </h3>
                            </div>

                            {/* Stat grid */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                                {[
                                    { icon: PhoneCall, value: "874", label: "Phone Calls" },
                                    { icon: Target, value: "₹58", label: "Cost Per Call" },
                                    { icon: Eye, value: "4,940", label: "High-Intent Clicks" },
                                    { icon: Filter, value: "₹10.24", label: "Average CPC" },
                                    { icon: Layout, value: "₹50,600", label: "Total Spend" },
                                    { icon: Award, value: "₹850", label: "Target CPA" },
                                ].map(({ icon: Icon, value, label }, i) => (
                                    <div key={i} className="border rounded-2xl p-5 text-center">
                                        <Icon className="w-5 h-5 text-[#f85415] mx-auto mb-2" />
                                        <p className="text-2xl font-bold text-[#0529a0]">{value}</p>
                                        <p className="text-xs text-gray-500 mt-1">{label}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <p className="font-semibold text-gray-900 mb-4">What made this campaign work:</p>
                                    <div className="space-y-3">
                                        {[
                                            "District-level location targeting around Pune's admission feeder areas — not broad Maharashtra targeting",
                                            "Separate ad groups per B.Tech stream — AI, CS, IT — each matching exact search intent",
                                            "High-intent keywords: B.Tech admissions Pune, engineering college admission 2025, AI engineering college Pune",
                                            "Call-only ads served during peak admission hours on mobile",
                                            "Daily search term report review to eliminate irrelevant traffic before it accumulates",
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#f85415] mt-2 shrink-0" />
                                                <p className="text-gray-700 text-sm">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <p className="font-semibold text-gray-900 mb-4">What this meant for the business:</p>
                                    <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
                                        <p>
                                            Admission season in Pune is a 10-week window. Every engineering
                                            college in the city bids on identical keywords simultaneously.
                                        </p>
                                        <p>
                                            The speed of enquiry matters more than brand awareness. A
                                            student who calls today rarely calls back tomorrow.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#0529a0]/5 border-l-4 border-[#0529a0] rounded-r-2xl px-6 py-5">
                                <p className="text-gray-800 leading-relaxed">
                                    <span className="font-bold text-[#0529a0]">874 inbound admission calls at ₹58 each</span>,
                                    against a category Target CPA of ₹850. That gap between{" "}
                                    <span className="font-semibold">₹58 actual</span> and{" "}
                                    <span className="font-semibold">₹850 target</span> is what an
                                    efficient campaign structure produces.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: Services overview */}

                <section className="py-20 px-4 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <SectionHeader
                            badge="More Proof"
                            title="Two More Campaigns, Same Cost Discipline"
                            description="Different goals, different structures — the same control over what each click costs."
                        />

                        <div className="space-y-6 mb-16">

                            {/* Campaign 2 */}
                            <div className="border rounded-3xl p-8 md:p-10">
                                <div className="grid lg:grid-cols-[1fr_260px] gap-8 items-start">
                                    <div>
                                        <p className="text-xs font-semibold text-[#f85415] uppercase tracking-wide mb-1">
                                            Campaign 2
                                        </p>
                                        <h3 className="text-xl font-bold text-[#0529a0] mb-4">
                                            B.Tech Generic Admissions — DVCOE, Pune
                                        </h3>

                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                                            {[
                                                { icon: CheckCircle2, value: "70", label: "Conversions" },
                                                { icon: Target, value: "3.6%", label: "Conversion Rate" },
                                                { icon: MousePointerClick, value: "1,950", label: "Clicks" },
                                                { icon: Filter, value: "₹12.62", label: "Average CPC" },
                                                { icon: Award, value: "₹24,500", label: "Total Spend" },
                                            ].map(({ icon: Icon, value, label }, i) => (
                                                <div key={i} className="bg-gray-50 rounded-xl p-4 text-center">
                                                    <Icon className="w-4 h-4 text-[#f85415] mx-auto mb-1.5" />
                                                    <p className="text-lg font-bold text-[#0529a0]">{value}</p>
                                                    <p className="text-xs text-gray-500 mt-0.5">{label}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            Running parallel to the call campaign, this search campaign
                                            targeted broader admission queries and captured lead form
                                            completions. Tight ad group segmentation by stream kept
                                            Quality Scores high, which kept CPC controlled across a
                                            keyword set where competitors routinely overbid and lose Ad
                                            Rank as a result.
                                        </p>
                                    </div>

                                    <img
                                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80"
                                        alt="Marketing analytics dashboard showing campaign performance"
                                        className="rounded-2xl object-cover w-full h-48 lg:h-full shadow-lg"
                                    />
                                </div>
                            </div>

                            {/* Campaign 3 */}
                            <div className="border rounded-3xl p-8 md:p-10">
                                <div className="grid lg:grid-cols-[260px_1fr] gap-8 items-start">
                                    <img
                                        src="https://images.unsplash.com/photo-1590650046871-92c887180603?auto=format&fit=crop&w=500&q=80"
                                        alt="Digital advertising performance charts on screen"
                                        className="rounded-2xl object-cover w-full h-48 lg:h-full shadow-lg order-2 lg:order-1"
                                    />

                                    <div className="order-1 lg:order-2">
                                        <p className="text-xs font-semibold text-[#f85415] uppercase tracking-wide mb-1">
                                            Campaign 3
                                        </p>
                                        <h3 className="text-xl font-bold text-[#0529a0] mb-4">
                                            B.Tech Lead Form Campaign — Pune
                                        </h3>

                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                                            {[
                                                { icon: PhoneCall, value: "88", label: "Direct Calls" },
                                                { icon: Target, value: "₹62", label: "Cost Per Call" },
                                                { icon: MousePointerClick, value: "906", label: "Clicks" },
                                                { icon: Filter, value: "₹6.05", label: "Average CPC" },
                                            ].map(({ icon: Icon, value, label }, i) => (
                                                <div key={i} className="bg-gray-50 rounded-xl p-4 text-center">
                                                    <Icon className="w-4 h-4 text-[#f85415] mx-auto mb-1.5" />
                                                    <p className="text-lg font-bold text-[#0529a0]">{value}</p>
                                                    <p className="text-xs text-gray-500 mt-0.5">{label}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                                            ₹6.05 average CPC in a category where poorly managed accounts
                                            regularly pay ₹30–₹50+ per click.
                                        </p>
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            That difference comes from Quality Score built through
                                            keyword relevance, strong ad copy, and landing page alignment
                                            working together — not from a smaller budget.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Summary table */}
                        <div className="bg-[#0529a0] rounded-3xl p-8 md:p-10 text-white">
                            <p className="text-sm font-semibold text-white/70 uppercase tracking-wide mb-6">
                                Performance Snapshot — All Three Campaigns
                            </p>

                            <div className="overflow-x-auto mb-8">
                                <table className="w-full text-left border-collapse min-w-[600px]">
                                    <thead>
                                        <tr className="border-b border-white/20">
                                            <th className="py-3 pr-4 font-semibold text-sm text-white/80">Campaign</th>
                                            <th className="py-3 pr-4 font-semibold text-sm text-white/80">Goal</th>
                                            <th className="py-3 pr-4 font-semibold text-sm text-white/80">Result</th>
                                            <th className="py-3 pr-4 font-semibold text-sm text-white/80">Spend</th>
                                            <th className="py-3 font-semibold text-sm text-white/80">Avg CPC</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            ["DVCOE B.Tech Call Ad", "Phone calls", "874 calls", "₹50,600", "₹10.24"],
                                            ["DVCOE Generic Admissions", "Lead conversions", "70 conversions", "₹24,500", "₹12.62"],
                                            ["B.Tech Lead Form", "Calls + clicks", "88 calls / 906 clicks", "₹5,479", "₹6.05"],
                                        ].map((row, i) => (
                                            <tr key={i} className="border-b border-white/10 last:border-0">
                                                {row.map((cell, j) => (
                                                    <td key={j} className={`py-4 pr-4 text-sm ${j === 0 ? "font-medium" : "text-white/80"}`}>
                                                        {cell}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-lg font-medium text-center border-t border-white/20 pt-6">
                                Three campaigns. Three different structures.{" "}
                                <span className="text-[#f85415] font-bold">Consistent cost control across all of them.</span>
                            </p>
                        </div>

                    </div>
                </section>

                {/* SECTION 1: Who needs PPC */}
                <section className="py-20 px-4 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <SectionHeader
                            badge="Is This You?"
                            title="Who Needs PPC Services in Pune?"
                            description="For many Pune businesses, PPC isn't just a marketing line item — it's directly connected to admissions targets, monthly revenue goals, and whether the sales pipeline stays active through a difficult quarter."
                        />

                        <div className="bg-[#0529a0]/5 border-l-4 border-[#0529a0] rounded-r-2xl px-6 py-5 mb-10">
                            <p className="text-gray-700 leading-relaxed">
                                The stakes are real. That's why campaigns built on default settings
                                and monthly check-ins cause genuine business damage, not just
                                wasted marketing spend.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: GraduationCap,
                                    title: "Education Institutions & Coaching Centres",
                                    condition: "If you run a college or coaching centre",
                                    reasoning:
                                        "your admission window is 8–12 weeks long, and every competitor in Pune bids on the same keywords simultaneously. Pay-per-click services in Pune deliver immediate top-of-page visibility — something organic SEO cannot achieve within that window, regardless of content quality.",
                                },
                                {
                                    icon: MapPin,
                                    title: "Local Service Businesses",
                                    condition: "If you run a clinic, legal practice, home repair business, or salon",
                                    reasoning:
                                        "your customers are on Google right now with high intent and a short decision cycle. A PPC advertising company in Pune that understands locality-level targeting ensures your name appears before competitors exactly when someone nearby is ready to act, not just browsing.",
                                },
                                {
                                    icon: Building2,
                                    title: "B2B Companies in Pune's IT Corridor",
                                    condition: "If your office is in Hinjewadi or Baner",
                                    reasoning:
                                        "broad digital visibility rarely converts in B2B contexts. Paid search lets you reach people actively evaluating vendors through specific high-intent queries matched by exact and phrase match keywords, refined by search term data every week.",
                                },
                                {
                                    icon: Rocket,
                                    title: "Newly Launched Businesses",
                                    condition: "If you're just getting started",
                                    reasoning:
                                        "organic rankings take 6–12 months to build. A well-managed PPC company in Pune fills the pipeline from week one while SEO develops alongside it. Many of our clients run both simultaneously — paid search funding current operations, while organic presence compounds in the background.",
                                },
                            ].map(({ icon: Icon, title, condition, reasoning }, i) => (
                                <div key={i} className="border rounded-2xl p-7 hover:shadow-lg transition">
                                    <div className="w-12 h-12 rounded-xl bg-[#0529a0]/10 flex items-center justify-center mb-4">
                                        <Icon className="w-6 h-6 text-[#0529a0]" />
                                    </div>
                                    <h3 className="text-lg font-bold text-[#0529a0] mb-3">{title}</h3>
                                    <div className="flex gap-2 items-start">
                                        <ArrowRight className="w-4 h-4 text-[#f85415] shrink-0 mt-1" />
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            <span className="font-medium text-gray-900">{condition}</span>
                                            {" — "}
                                            {reasoning}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 2: What affects CPC */}
                <section className="py-20 px-4 bg-[#F8FAFC]">
                    <div className="max-w-4xl mx-auto">
                        <SectionHeader
                            badge="Cost Explained"
                            title="What Affects Google Ads Cost Per Click in Pune?"
                            description="CPC is influenced by Ad Rank, not just your bid amount."
                        />

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Lowers CPC */}
                            <div className="bg-white border rounded-2xl p-7">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                                        <TrendingDown className="w-5 h-5 text-green-600" />
                                    </div>
                                    <p className="font-semibold text-gray-900">What lowers CPC</p>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        "Quality Score (keyword, ad copy, and landing page relevance) directly impacts CPC",
                                        "Higher Quality Score = lower CPC + better ad position",
                                        "Smart bidding adjustments before peak demand help control costs",
                                        "A fast, relevant landing page improves both CPC and conversion rates",
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 shrink-0" />
                                            <p className="text-gray-700 text-sm">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Raises CPC */}
                            <div className="bg-white border rounded-2xl p-7">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-10 h-10 rounded-xl bg-[#f85415]/10 flex items-center justify-center">
                                        <TrendingUp className="w-5 h-5 text-[#f85415]" />
                                    </div>
                                    <p className="font-semibold text-gray-900">What raises CPC</p>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        "Poorly structured campaigns often pay more for lower visibility",
                                        "Seasonal demand in Pune increases CPC for industries like education, real estate, and cooling products",
                                        "A weak landing page can increase costs while simultaneously reducing leads",
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#f85415] mt-2 shrink-0" />
                                            <p className="text-gray-700 text-sm">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* CASE STUDY */}

                {/* SECTION 1: Landing page alignment */}
                <section className="py-20 px-4 bg-[#F8FAFC]">
                    <div className="max-w-4xl mx-auto">
                        <SectionHeader
                            badge="The Overlooked Half"
                            title="Why Your Landing Page Is Half the PPC Campaign"
                        />

                        <p className="text-gray-700 leading-relaxed mb-5">
                            Most PPC agencies in Pune focus entirely on the campaign. Few discuss
                            the landing page directly. We do — because it's where campaigns that
                            look healthy on paper quietly fail to produce enquiries.
                        </p>

                        <div className="bg-white border-l-4 border-[#0529a0] rounded-r-2xl px-6 py-5 mb-10">
                            <p className="text-gray-700 leading-relaxed">
                                An ad gets the click. The landing page gets the conversion. If
                                those two things aren't aligned in message, speed, and action, the
                                campaign generates clicks that disappear without converting. The
                                budget keeps moving. The pipeline stays empty.
                            </p>
                        </div>

                        <p className="font-semibold text-gray-900 mb-4">
                            What landing page alignment means in a paid search context:
                        </p>

                        <div className="border rounded-2xl overflow-hidden bg-white mb-10">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#0529a0] text-white">
                                        <th className="px-6 py-4 font-semibold text-sm w-1/3">Landing Page Element</th>
                                        <th className="px-6 py-4 font-semibold text-sm">How It Affects PPC Performance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ["Message match", "Ad headline and landing page headline must reflect the same promise — mismatches increase bounce rate immediately"],
                                        ["Page load speed", "Every additional second of load time reduces conversion rate, especially on mobile in Pune's 4G network conditions"],
                                        ["Click-to-call button", "For call-focused campaigns, the phone number must be immediately visible and tappable above the fold"],
                                        ["Form friction", "Long forms kill conversion rates for high-intent visitors who are ready to enquire now, not fill a survey"],
                                        ["CTA clarity", "One clear action per page — multiple competing options split attention and reduce completions"],
                                        ["Mobile-first design", "Most Pune local searches happen on mobile; a desktop-optimised page is a structural conversion leak"],
                                    ].map(([el, effect], i) => (
                                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                            <td className="px-6 py-4 font-medium text-gray-900 text-sm align-top">{el}</td>
                                            <td className="px-6 py-4 text-gray-600 text-sm">{effect}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-3">
                            Conversion rate optimisation (CRO) and PPC are not separate
                            disciplines. We treat them as one.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            When we audit underperforming campaigns, landing page issues are the
                            cause at least as often as campaign structure issues. We flag these
                            clearly and prioritise fixing them — because improving the page
                            often delivers faster results than increasing the budget.
                        </p>
                    </div>
                </section>

                {/* SECTION 2: Problems we fix */}
                <section className="py-20 px-4 bg-white">
                    <div className="max-w-5xl mx-auto">
                        <SectionHeader
                            badge="The Audit"
                            title="Problems We Fix in Pune Ad Accounts"
                            description="Budget moving. Phone not ringing. Here's what usually causes it — and what we do about it."
                        />

                        <div className="space-y-5">
                            {[
                                {
                                    icon: AlertCircle,
                                    problem: "Budget moving. Phone not ringing.",
                                    detail:
                                        "A business spends ₹20,000–₹50,000 every month. Reports show clicks and impressions. Barely any real enquiries. The campaign looks active. The dashboard looks fine. The pipeline is dry. This happens when campaigns optimise for traffic metrics instead of lead actions — and when conversion tracking records page visits instead of actual calls or form completions. Smart bidding strategies like Target CPA and Maximise Conversions only work correctly when the conversion signal they're chasing is real.",
                                    approach:
                                        "Conversion tracking rebuilt to capture real lead actions before spending a rupee. Every campaign chases the signal that connects to revenue.",
                                },
                                {
                                    icon: MapPinOff,
                                    problem: "Paying for clicks from cities you don't serve.",
                                    detail:
                                        "Location targeting is defaulting to national reach because nobody changed the setting. Every click from outside your service area is dead spend, and it accumulates quietly across months.",
                                    approach:
                                        "Location targeting at the pin code and district level from day one, with locality-level bid adjustments reflecting where real customers search from.",
                                },
                                {
                                    icon: SearchX,
                                    problem: "Keyword lists are built once and never reviewed.",
                                    detail:
                                        "Broad match keywords without negative keyword coverage pull in searches that will never convert. Search behaviour shifts weekly. Without active keyword research and optimisation, budget follows irrelevant queries month after month while search term reports go unread.",
                                    approach:
                                        "Weekly search term report review. Continuous negative keyword additions. Match-type decisions revisited as real data accumulates — not locked in from setup day.",
                                },
                                {
                                    icon: LayoutGrid,
                                    problem: "Campaigns missing available assets.",
                                    detail:
                                        "Accounts spending ₹40,000–₹50,000/month without call extensions, sitelinks, or structured snippets in place. Unused assets lower Ad Rank and raise CPC for the same position — sometimes by a meaningful margin.",
                                    approach:
                                        "Full asset utilisation across every campaign — built, tested, and tracked for conversion impact from the start.",
                                },
                                {
                                    icon: RefreshCcw,
                                    problem: "No remarketing strategy.",
                                    detail:
                                        "Most Pune ad accounts run traffic campaigns with no remarketing layer. Visitors who didn't convert on the first visit — often 90%+ of all clicks — are never re-engaged. That's the highest-intent audience in your entire funnel, and it's being abandoned.",
                                    approach:
                                        "Remarketing audiences built from campaign traffic, segmented by behaviour — visitors who reached the enquiry page vs. those who bounced early — and served targeted follow-up ads at a fraction of cold-traffic CPC.",
                                },
                                {
                                    icon: Clock,
                                    problem: "Nothing happens between monthly reports.",
                                    detail:
                                        "A campaign running untouched for 3–4 weeks is drifting. Competitor bids shift. Quality Scores fluctuate. New irrelevant queries appear in search term reports daily. Monthly check-ins don't catch weekly problems.",
                                    approach:
                                        "Weekly optimisation as standard. By the time the monthly report arrives, multiple rounds of adjustments have already happened.",
                                },
                            ].map(({ icon: Icon, problem, detail, approach }, i) => (
                                <div key={i} className="border rounded-2xl overflow-hidden">
                                    <div className="p-6 md:p-7 flex gap-4 items-start">
                                        <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                                            <Icon className="w-5 h-5 text-gray-500" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900 mb-2">{problem}</p>
                                            <p className="text-gray-600 text-sm leading-relaxed">{detail}</p>
                                        </div>
                                    </div>

                                    <div className="bg-[#0529a0]/5 border-t px-6 md:px-7 py-5 flex gap-3 items-start">
                                        <ArrowRight className="w-4 h-4 text-[#f85415] shrink-0 mt-0.5" />
                                        <p className="text-sm text-gray-800">
                                            <span className="font-semibold text-[#0529a0]">Our approach: </span>
                                            {approach}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* SERVICES */}
                <section className="py-20 px-4 bg-white">
                    <div className="max-w-4xl mx-auto">
                        <SectionHeader
                            badge="Our Process"
                            title="Foxaircomm as a Google Ads Management Company in Pune: Here's the Process"
                        />

                        <div className="relative">
                            {/* connecting spine */}
                            <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-gray-200 hidden sm:block" />

                            <div className="space-y-10">

                                {/* Step 1 */}
                                <div className="relative sm:pl-20">
                                    <div className="hidden sm:flex absolute left-0 top-0 w-12 h-12 rounded-full bg-[#0529a0] text-white items-center justify-center font-bold z-10">
                                        1
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0529a0] mb-2">
                                        <span className="sm:hidden text-[#f85415] mr-2">01</span>
                                        Keyword Research & Intent Mapping
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        We map keywords by search intent — separating informational
                                        queries from high-intent ones and building tightly themed ad
                                        groups. Match type selection is deliberate: exact match for
                                        high-value terms, phrase match where appropriate, broad match
                                        only where negative keyword depth is sufficient to contain it.
                                        This is decided before anything launches.
                                    </p>
                                </div>

                                {/* Step 2 */}
                                <div className="relative sm:pl-20">
                                    <div className="hidden sm:flex absolute left-0 top-0 w-12 h-12 rounded-full bg-[#0529a0] text-white items-center justify-center font-bold z-10">
                                        2
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0529a0] mb-2">
                                        <span className="sm:hidden text-[#f85415] mr-2">02</span>
                                        Accurate Location Targeting
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        "Pune" is not a targeting strategy. We work at locality, pin
                                        code, and radius level with bid adjustments reflecting where
                                        real customers search from.
                                    </p>
                                    <div className="bg-[#0529a0]/5 border-l-4 border-[#0529a0] rounded-r-xl px-5 py-4">
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            For DVCOE's admissions campaigns, targeting feeder districts
                                            around Pune rather than Maharashtra broadly directly reduced
                                            cost-per-call across both campaigns running simultaneously.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="relative sm:pl-20">
                                    <div className="hidden sm:flex absolute left-0 top-0 w-12 h-12 rounded-full bg-[#0529a0] text-white items-center justify-center font-bold z-10">
                                        3
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0529a0] mb-2">
                                        <span className="sm:hidden text-[#f85415] mr-2">03</span>
                                        Conversion Tracking & Remarketing Setup
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Conversion tracking is configured to measure real lead actions
                                        — calls, form completions, purchases. Remarketing audiences
                                        are built from day one so that once traffic accumulates,
                                        retargeting campaigns can launch immediately. Smart bidding
                                        strategies are connected only to verified conversion signals.
                                    </p>
                                </div>

                                {/* Step 4 */}
                                <div className="relative sm:pl-20">
                                    <div className="hidden sm:flex absolute left-0 top-0 w-12 h-12 rounded-full bg-[#0529a0] text-white items-center justify-center font-bold z-10">
                                        4
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0529a0] mb-2">
                                        <span className="sm:hidden text-[#f85415] mr-2">04</span>
                                        Asset Utilisation & Campaign Build
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Every available Google Ads asset gets built — call extensions,
                                        sitelinks, callouts, image assets, structured snippets. These
                                        feed directly into Quality Score and Ad Rank. You review and
                                        approve the full campaign structure before we spend anything.
                                    </p>
                                </div>

                                {/* Step 5 */}
                                <div className="relative sm:pl-20">
                                    <div className="hidden sm:flex absolute left-0 top-0 w-12 h-12 rounded-full bg-[#0529a0] text-white items-center justify-center font-bold z-10">
                                        5
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0529a0] mb-2">
                                        <span className="sm:hidden text-[#f85415] mr-2">05</span>
                                        Launch & First-Week Monitoring
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        The first 72 hours after launch are critical. Search term
                                        reports fill quickly. Early anomalies — unexpected queries,
                                        location overspend, Quality Score drops, CPC spikes — need
                                        catching before budget follows them in the wrong direction.
                                    </p>
                                </div>

                                {/* Step 6 */}
                                <div className="relative sm:pl-20">
                                    <div className="hidden sm:flex absolute left-0 top-0 w-12 h-12 rounded-full bg-[#0529a0] text-white items-center justify-center font-bold z-10">
                                        6
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0529a0] mb-3">
                                        <span className="sm:hidden text-[#f85415] mr-2">06</span>
                                        Weekly Optimisation
                                    </h3>
                                    <div className="bg-gray-50 rounded-2xl p-6 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                                        {[
                                            "Bid adjustments by keyword, location, device, and time of day",
                                            "Pausing underperforming keywords and ad variations",
                                            "A/B testing ad copy and headlines",
                                            "Search term report review and negative keyword additions",
                                            "Quality Score monitoring and landing page alignment checks",
                                            "Remarketing audience refinement based on conversion path data",
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-[#0529a0] shrink-0 mt-1" />
                                                <p className="text-gray-700 text-sm">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Step 7 */}
                                <div className="relative sm:pl-20">
                                    <div className="hidden sm:flex absolute left-0 top-0 w-12 h-12 rounded-full bg-[#0529a0] text-white items-center justify-center font-bold z-10">
                                        7
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0529a0] mb-3">
                                        <span className="sm:hidden text-[#f85415] mr-2">07</span>
                                        Monthly Reporting
                                    </h3>

                                    <div className="border rounded-2xl overflow-hidden mb-4">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="bg-[#0529a0] text-white">
                                                    <th className="px-6 py-3 font-semibold text-sm w-2/5">Report Element</th>
                                                    <th className="px-6 py-3 font-semibold text-sm">What It Shows</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {[
                                                    ["Total spend", "Exactly where the budget went"],
                                                    ["Cost-per-conversion", "What each real lead actually costs"],
                                                    ["Top performing keywords", "What worked and why"],
                                                    ["Changes made this month", "What we did and the reason behind each decision"],
                                                    ["Next month's focus", "What we're improving and how"],
                                                ].map(([el, effect], i) => (
                                                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                                        <td className="px-6 py-3 font-medium text-gray-900 text-sm">{el}</td>
                                                        <td className="px-6 py-3 text-gray-600 text-sm">{effect}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    <p className="text-gray-600 text-sm italic">
                                        No automated PDF exports. No metrics selected to make a
                                        difficult month look acceptable.
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-14 text-center border-t pt-10">
                            <p className="text-gray-700 mb-5">
                                Want to see this applied to your account?
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-[#f85415] hover:bg-orange-600 transition px-8 py-4 rounded-xl font-semibold text-white"
                            >
                                Request a Free Audit <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                    </div>
                </section>



                {/* SECTION 1: Why Foxaircomm */}
                <section className="py-20 px-4 bg-[#0529a0] text-white">
                    <div className="max-w-6xl mx-auto">

                        <SectionHeader
                            badge="Why Foxaircomm"
                            title="Why Choose Foxaircomm as Your PPC Agency in Pune?"
                            description="If you're evaluating what the best PPC company in Pune should actually look like, here's where most agencies fall short — and what we do instead."
                            className="text-white" style={{ color: "#fff" }}
                        />

                        <div className="grid lg:grid-cols-2 gap-10 mb-14">
                            <p className="text-gray-200 leading-relaxed">
                                Foxaircomm started from a specific frustration — watching Pune
                                businesses spend real money on Google Ads while being shown
                                reports that obscured what was actually happening. No account
                                access. No search term visibility. No honest conversation about
                                what the campaign was or wasn't producing.
                            </p>
                            <p className="text-gray-200 leading-relaxed">
                                That frustration shapes how we work. Every decision we've built
                                into our process — full account ownership, weekly optimisation,
                                no lock-in contracts, plain-language reporting — comes from
                                believing that ad budgets aren't marketing abstractions. For
                                most Pune businesses, that spend is directly connected to
                                targets, payroll, and growth. It deserves to be treated
                                accordingly.
                            </p>
                        </div>

                        <div className="bg-white text-gray-900 rounded-2xl overflow-hidden mb-14">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-6 py-4 font-semibold text-sm text-gray-500">
                                            What Most Agencies Do
                                        </th>
                                        <th className="px-6 py-4 font-semibold text-sm text-[#0529a0]">
                                            What Foxaircomm Does
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white">
                                        <td className="px-6 py-4 text-gray-500 text-sm">Show a traffic graph</td>
                                        <td className="px-6 py-4 text-gray-900 text-sm font-medium">Show the actual Google Ads dashboard</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-6 py-4 text-gray-500 text-sm">6–12-month lock-in contracts</td>
                                        <td className="px-6 py-4 text-gray-900 text-sm font-medium">No lock-in — ever</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-6 py-4 text-gray-500 text-sm">Rotate account managers</td>
                                        <td className="px-6 py-4 text-gray-900 text-sm font-medium">One dedicated manager throughout</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-6 py-4 text-gray-500 text-sm">Monthly optimisation</td>
                                        <td className="px-6 py-4 text-gray-900 text-sm font-medium">Weekly optimisation, monthly reporting</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-6 py-4 text-gray-500 text-sm">Same template across clients</td>
                                        <td className="px-6 py-4 text-gray-900 text-sm font-medium">Industry-specific strategy per campaign</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-6 py-4 text-gray-500 text-sm">Control your account access</td>
                                        <td className="px-6 py-4 text-gray-900 text-sm font-medium">Full admin access from day one</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="grid md:grid-cols-2 gap-x-10 gap-y-6 mb-10">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#f85415] shrink-0 mt-0.5" />
                                <p>
                                    <span className="font-semibold">No lock-in contracts</span>{" "}
                                    <span className="text-gray-300">— Results keep clients. Contracts don't. We've never needed them.</span>
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#f85415] shrink-0 mt-0.5" />
                                <p>
                                    <span className="font-semibold">Full account ownership</span>{" "}
                                    <span className="text-gray-300">— Your account, your data, your campaign history. Always. If you leave, you take everything with you — same day.</span>
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#f85415] shrink-0 mt-0.5" />
                                <p>
                                    <span className="font-semibold">Cross-industry Pune experience</span>{" "}
                                    <span className="text-gray-300">— Education admissions, hospitality, home cooling products, local services. Each required a completely different approach to bidding, targeting, and conversion goal structure.</span>
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#f85415] shrink-0 mt-0.5" />
                                <p>
                                    <span className="font-semibold">One account manager throughout</span>{" "}
                                    <span className="text-gray-300">— The person who builds your campaign monitors it weekly and answers your questions directly. No handoffs. No, "I'll check with the team."</span>
                                </p>
                            </div>

                            <div className="flex items-start gap-3 md:col-span-2">
                                <CheckCircle2 className="w-5 h-5 text-[#f85415] shrink-0 mt-0.5" />
                                <p>
                                    <span className="font-semibold">Honest about what your budget can achieve</span>{" "}
                                    <span className="text-gray-300">— Some categories in Pune are genuinely competitive. If your budget can't compete meaningfully at the search volume you need, we tell you before the campaign starts — not three months in, after the spend is gone.</span>
                                </p>
                            </div>
                        </div>

                        <p className="text-center text-gray-300">
                            Have questions?{" "}
                            <Link to="/contact" className="text-white font-semibold underline underline-offset-4">
                                Get in touch with our team
                            </Link>
                            .
                        </p>
                    </div>
                </section>

                {/* SECTION 2: Service areas */}
                <section className="py-20 px-4 bg-white">
                    <div className="max-w-5xl mx-auto">
                        <SectionHeader
                            badge="Local Knowledge"
                            title="Serving Pune & Nearby Areas"
                            description="Foxaircomm works with businesses across Pune — Hinjewadi, Baner, Kothrud, Viman Nagar, Hadapsar, Deccan, Shivajinagar, and surrounding districts."
                        />

                        <p className="text-gray-700 leading-relaxed mb-8">
                            Each area has different search density, different seasonal
                            demand windows, and different competitive dynamics that
                            directly affect campaign decisions.
                        </p>

                        <div className="border rounded-2xl overflow-hidden mb-8">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#0529a0] text-white">
                                        <th className="px-6 py-4 font-semibold text-sm w-1/3">
                                            <span className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4" /> Area
                                            </span>
                                        </th>
                                        <th className="px-6 py-4 font-semibold text-sm">Local Market Characteristics</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white">
                                        <td className="px-6 py-4 font-medium text-gray-900 text-sm">Hinjewadi & Baner</td>
                                        <td className="px-6 py-4 text-gray-600 text-sm">IT corridor — business-hours search patterns, high B2B and SaaS vendor intent</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900 text-sm">Kothrud & Aundh</td>
                                        <td className="px-6 py-4 text-gray-600 text-sm">Residential density — strong local service demand, home cooling product searches peak March–June</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-6 py-4 font-medium text-gray-900 text-sm">Hadapsar & Viman Nagar</td>
                                        <td className="px-6 py-4 text-gray-600 text-sm">Mixed commercial — education and real estate intent clusters significantly</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900 text-sm">Deccan & Pune Camp</td>
                                        <td className="px-6 py-4 text-gray-600 text-sm">Older commercial areas — different demographic search behaviour, timing, and CPC dynamics</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="text-gray-700 leading-relaxed">
                            This local context shapes targeting, ad scheduling, and bid
                            adjustments in ways that a national agency managing Pune from a
                            spreadsheet wouldn't know to apply. Being a paid search agency
                            in Pune means this knowledge is already built into how we work
                            — not discovered three months into a campaign at your expense.
                        </p>
                    </div>
                </section>

                {/* SECTION 3: FAQs — native details/summary, no hooks */}
                <section className="py-20 px-4 bg-[#F8FAFC]">
                    <div className="max-w-4xl mx-auto">
                        <SectionHeader badge="FAQs" title="Frequently Asked Questions" />

                        <div className="space-y-4">

                            <details className="group border rounded-2xl overflow-hidden bg-white">
                                <summary className="list-none cursor-pointer flex items-center justify-between gap-4 px-6 py-5 hover:bg-gray-50 transition">
                                    <span className="font-semibold text-gray-900">
                                        How much should a Pune business realistically budget for Google Ads?
                                    </span>
                                    <ChevronDown className="w-5 h-5 text-[#0529a0] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                                </summary>
                                <div className="px-6 pb-6">
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        Most Pune local service businesses start seeing meaningful
                                        PPC results between ₹15,000–₹25,000/month. Competitive
                                        categories like education admissions, real estate, or
                                        clinics typically need larger budgets to maintain
                                        visibility against established advertisers. We'll tell
                                        you what your budget can and cannot achieve before we
                                        start — and if the economics don't support your goals at
                                        current spend levels, we'll say so directly rather than
                                        take the campaign and deliver weak results quietly.
                                    </p>
                                </div>
                            </details>

                            <details className="group border rounded-2xl overflow-hidden bg-white">
                                <summary className="list-none cursor-pointer flex items-center justify-between gap-4 px-6 py-5 hover:bg-gray-50 transition">
                                    <span className="font-semibold text-gray-900">
                                        How long before a Google Ads campaign generates real leads?
                                    </span>
                                    <ChevronDown className="w-5 h-5 text-[#0529a0] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                                </summary>
                                <div className="px-6 pb-6">
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        Clicks start from day one. Smart bidding strategies like
                                        Target CPA typically need 2–4 weeks of conversion data to
                                        optimise accurately. High-intent categories like
                                        admissions or home services tend to show results faster
                                        because decision cycles are short. We give
                                        category-specific expectations — not a vague "3–6 months"
                                        answer that buys time before questions start.
                                    </p>
                                </div>
                            </details>

                            <details className="group border rounded-2xl overflow-hidden bg-white">
                                <summary className="list-none cursor-pointer flex items-center justify-between gap-4 px-6 py-5 hover:bg-gray-50 transition">
                                    <span className="font-semibold text-gray-900">
                                        My last agency said the campaign was performing well. Why weren't we getting enquiries?
                                    </span>
                                    <ChevronDown className="w-5 h-5 text-[#0529a0] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                                </summary>
                                <div className="px-6 pb-6">
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        Strong CTR with low conversions almost always points to
                                        one of three things — wrong keywords driving wrong
                                        traffic, broken or absent conversion tracking, or a
                                        disconnect between ad promise and landing page
                                        experience. A campaign reporting healthy metrics while
                                        generating no real leads is not performing. It's
                                        spending. We identify the actual issue in the first
                                        account review, and it's usually visible within the
                                        first 15 minutes of looking at the search term report and
                                        conversion setup together.
                                    </p>
                                </div>
                            </details>

                            <details className="group border rounded-2xl overflow-hidden bg-white">
                                <summary className="list-none cursor-pointer flex items-center justify-between gap-4 px-6 py-5 hover:bg-gray-50 transition">
                                    <span className="font-semibold text-gray-900">
                                        What is the difference between PPC and SEO — which should I invest in first?
                                    </span>
                                    <ChevronDown className="w-5 h-5 text-[#0529a0] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                                </summary>
                                <div className="px-6 pb-6">
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        PPC generates results immediately. SEO compounds over
                                        6–12 months and builds an organic asset that doesn't
                                        require ongoing ad spend once it works. If you need leads
                                        now or operate in a time-sensitive category like
                                        admissions, PPC is the faster path. Many clients run both
                                        simultaneously — paid search filling the pipeline while
                                        organic presence develops alongside it. We'll tell you
                                        which makes more sense for your current stage and budget,
                                        including if the honest answer is neither right now.
                                    </p>
                                </div>
                            </details>

                            <details className="group border rounded-2xl overflow-hidden bg-white">
                                <summary className="list-none cursor-pointer flex items-center justify-between gap-4 px-6 py-5 hover:bg-gray-50 transition">
                                    <span className="font-semibold text-gray-900">
                                        What actually determines how much I pay per click on Google Ads?
                                    </span>
                                    <ChevronDown className="w-5 h-5 text-[#0529a0] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                                </summary>
                                <div className="px-6 pb-6">
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        Your CPC is primarily determined by Ad Rank — calculated
                                        from your bid, Quality Score, and expected asset impact
                                        relative to competitors in the same auction. Quality
                                        Score specifically — built from keyword relevance, ad
                                        copy relevance, and landing page experience — is the
                                        lever most businesses ignore. Improving Quality Score
                                        lowers CPC without reducing ad position. It's one of the
                                        first things we address in every new account.
                                    </p>
                                </div>
                            </details>

                            <details className="group border rounded-2xl overflow-hidden bg-white">
                                <summary className="list-none cursor-pointer flex items-center justify-between gap-4 px-6 py-5 hover:bg-gray-50 transition">
                                    <span className="font-semibold text-gray-900">
                                        Do you handle remarketing and retargeting campaigns?
                                    </span>
                                    <ChevronDown className="w-5 h-5 text-[#0529a0] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                                </summary>
                                <div className="px-6 pb-6">
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        Yes. Remarketing is often the highest-ROI component of a
                                        PPC strategy because it re-engages people who already
                                        showed intent — they clicked, visited, and didn't
                                        convert yet. We build remarketing audiences from campaign
                                        traffic from day one, segmented by behaviour, so
                                        retargeting can launch as soon as meaningful audience
                                        size accumulates. For most accounts, remarketing CPC runs
                                        significantly lower than cold-traffic search CPC.
                                    </p>
                                </div>
                            </details>

                            <details className="group border rounded-2xl overflow-hidden bg-white">
                                <summary className="list-none cursor-pointer flex items-center justify-between gap-4 px-6 py-5 hover:bg-gray-50 transition">
                                    <span className="font-semibold text-gray-900">
                                        Do you manage campaigns for businesses outside Pune?
                                    </span>
                                    <ChevronDown className="w-5 h-5 text-[#0529a0] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                                </summary>
                                <div className="px-6 pb-6">
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        Yes. Our deepest market knowledge sits in Pune and
                                        Maharashtra, but our process — accurate targeting, proper
                                        conversion tracking, weekly optimisation — applies
                                        equally to campaigns targeting other cities. Geography
                                        doesn't change how we work.
                                    </p>
                                </div>
                            </details>

                            <details className="group border rounded-2xl overflow-hidden bg-white">
                                <summary className="list-none cursor-pointer flex items-center justify-between gap-4 px-6 py-5 hover:bg-gray-50 transition">
                                    <span className="font-semibold text-gray-900">
                                        Can I pause or stop the campaign without penalties?
                                    </span>
                                    <ChevronDown className="w-5 h-5 text-[#0529a0] shrink-0 transition-transform duration-200 group-open:rotate-180" />
                                </summary>
                                <div className="px-6 pb-6">
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        Always. No lock-in contracts means you're in full
                                        control. Pause for a month, scale down, or stop
                                        completely without fees or friction. We'll advise on how
                                        to pause without losing campaign learning data built up
                                        in the account — and we'll action it the same day you
                                        ask.
                                    </p>
                                </div>
                            </details>

                        </div>
                    </div>
                </section>

                {/* SECTION 4: Closing CTA */}
                <section className="py-20 px-4 bg-white">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="flex items-center justify-center gap-10 mb-10">
                            <div className="flex flex-col items-center gap-2">
                                <TrendingUp className="w-6 h-6 text-[#f85415]" />
                                <p className="text-xs font-medium text-gray-600">3 campaigns</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <MapPin className="w-6 h-6 text-[#f85415]" />
                                <p className="text-xs font-medium text-gray-600">3 industries</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <ShieldCheck className="w-6 h-6 text-[#f85415]" />
                                <p className="text-xs font-medium text-gray-600">Documented results</p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-[#0529a0] mb-4">
                            Let's Look at Your Campaigns Together
                        </h2>

                        <p className="text-gray-700 leading-relaxed mb-4 max-w-xl mx-auto">
                            You don't need another proposal full of promises. You need
                            someone to look at your actual situation — your category, your
                            current account if you have one, your conversion goals — and
                            give you a straight answer on what's possible and what it
                            would take.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-10 max-w-xl mx-auto">
                            Three campaigns. Three different Pune industries. Documented
                            results in each one. The next step is finding out what's
                            possible for yours.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="bg-[#f85415] hover:bg-orange-600 transition px-8 py-4 rounded-xl font-semibold text-white"
                            >
                                Request a Free PPC Audit
                            </Link>
                            <Link
                                to="/contact"
                                className="border border-[#0529a0]/30 hover:bg-[#0529a0]/5 transition px-8 py-4 rounded-xl font-semibold text-[#0529a0]"
                            >
                                Speak to Our Team — No Commitment
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-[#0529a0] text-white px-4 text-center">
                    <div className="max-w-4xl mx-auto">

                        <h2 className="text-4xl font-bold mb-6">
                            Build a Stronger Brand With Strategic Graphic Design
                        </h2>

                        <p className="text-gray-200 text-lg leading-relaxed mb-10">
                            We’ll identify what is limiting your visual branding and show
                            how better design can improve engagement, trust, and conversions.
                        </p>

                        <div className="flex flex-wrap justify-center gap-5">

                            <Link
                                to="/contact"
                                className="bg-[#f85415] hover:bg-orange-600 transition px-8 py-4 rounded-xl font-semibold"
                            >
                                Book Free Design Consultation
                            </Link>

                            <Link
                                to="/contact"
                                className="border border-white/30 px-8 py-4 rounded-xl font-semibold"
                            >
                                Request Free Brand Audit
                            </Link>

                        </div>

                    </div>
                </section>

            </div>
        </>
    );
}

export default PPCmanagement;