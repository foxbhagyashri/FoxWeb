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



export default function RCSMessageAhemdabad() {

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
                                    RCS Business Messaging · Ahmedabad
                                </span>
                            </div>
                        </div>

                        {/* H1 */}
                        <div
                            className={`transition-all duration-700 delay-100 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                }`}
                        >
                            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
                                RCS Messaging Services in Ahmedabad for{" "}
                                <span className="text-[#F07830] relative inline-block">
                                    Interactive Business Communication
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
                                Transform How Your Ahmedabad Business Communicates With Customers
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
                                Transform how your Ahmedabad business communicates with customers using
                                advanced RCS business messaging solutions.
                            </p>
                            <p className="text-base leading-relaxed text-white/70 mt-3">
                                Replace low-performing SMS campaigns with verified, interactive
                                messaging that drives engagement, builds trust, and delivers
                                measurable ROI across the entire customer journey.
                            </p>
                        </div>

                        {/* Why switching from SMS */}
                        <div
                            className={`transition-all duration-700 delay-200 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                }`}
                        >
                            <div
                                className="text-sm text-white/65 leading-relaxed px-4 py-3 rounded-xl"
                                style={{ background: "rgba(240,120,48,0.1)", borderLeft: "3px solid #F07830" }}
                            >
                                🔽 <strong className="text-white/90 font-semibold">Why Businesses Are Switching from SMS to RCS:</strong>{" "}
                                Ahmedabad businesses are rapidly moving away from traditional SMS due
                                to declining engagement and trust. Customers now expect interactive,
                                visually rich communication.
                            </div>
                        </div>

                        {/* Why Foxaircomm / what RCS is — feature list */}
                        <div
                            className={`transition-all duration-700 delay-250 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                }`}
                        >
                            <p className="text-sm font-bold text-white uppercase tracking-widest mb-2">
                                What Is RCS Messaging?
                            </p>
                            <ul className="flex flex-col gap-2">
                                {[
                                    "Next-generation messaging protocol enabling interactive, media-rich messages sent directly to customers",
                                    "Works natively without app installation — operates inside the default messaging app, unlike OTT platforms",
                                    "Broader reach across Ahmedabad audiences without downloads or additional user effort",
                                    "Built for modern customer behaviour — carousels, images, and action-based messaging that drives engagement",
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
                                Get in Touch
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
                                Our Services
                            </a>
                        </div>
                    </div>

                    {/* ── RIGHT: RCS Message Preview Mockup ── */}
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
                                    foxaircomm.com / rcs-preview
                                </div>
                                <div className="flex items-center gap-1.5 text-green-600 text-xs font-bold whitespace-nowrap">
                                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse" />
                                    Live
                                </div>
                            </div>

                            {/* Dashboard body */}
                            <div className="p-5 bg-white">

                                {/* Sender identity strip */}
                                <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-3.5 border border-gray-100 mb-4">
                                    <div
                                        className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-[#F07830] text-sm flex-shrink-0"
                                        style={{ background: "linear-gradient(135deg,#021e7a,#0B3C5D)" }}
                                    >
                                        FA
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-bold text-gray-800">Foxaircomm</p>
                                        <p className="text-xs text-gray-400 mt-0.5">Verified Business Sender</p>
                                    </div>
                                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600">
                                        ✓ Verified
                                    </span>
                                </div>

                                {/* RCS chat bubble preview */}
                                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 mb-4">
                                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                                        Interactive RCS Preview
                                    </p>

                                    {/* Rich card carousel */}
                                    <div className="flex gap-2 overflow-hidden mb-3">
                                        {["🛋️", "🛏️", "🪑"].map((emoji, i) => (
                                            <div key={i} className="flex-1 rounded-lg bg-white border border-gray-100 p-2.5">
                                                <div className="w-full h-14 rounded-md bg-blue-50 flex items-center justify-center text-2xl mb-2">
                                                    {emoji}
                                                </div>
                                                <p className="text-[10px] font-bold text-gray-700">Product {i + 1}</p>
                                                <p className="text-[9px] text-gray-400">Tap to view</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Message bubble */}
                                    <div className="bg-white rounded-xl rounded-tl-sm p-3 border border-gray-100 mb-2">
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            Your order is out for delivery today between 2–4 PM. Track your
                                            shipment or reschedule below.
                                        </p>
                                    </div>

                                    {/* Action buttons */}
                                    <div className="flex gap-2">
                                        <span className="flex-1 text-center text-[10px] font-bold px-2 py-2 rounded-lg bg-orange-50 text-[#F07830] border border-orange-100">
                                            Track Order
                                        </span>
                                        <span className="flex-1 text-center text-[10px] font-bold px-2 py-2 rounded-lg bg-blue-50 text-[#0B3C5D] border border-blue-100">
                                            Reschedule
                                        </span>
                                    </div>
                                </div>

                                {/* Engagement metrics strip */}
                                <div className="grid grid-cols-3 gap-2 mb-4">
                                    {[
                                        { val: "94%", label: "Open Rate" },
                                        { val: "3.6×", label: "vs SMS CTR" },
                                        { val: "100%", label: "Verified Sender" },
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

                                {/* Footer */}
                                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                    <span className="text-xs text-gray-400">Delivered: just now</span>
                                    <span className="text-xs font-semibold px-2 py-1 rounded-lg bg-blue-50 text-[#0B3C5D]">
                                        No app install required ✓
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
                                RCS Business Messaging Partner · Ahmedabad
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* MARKET SHIFT */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">

                    {/* ── KEY FEATURES ── */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                What Are the{" "}
                                <span className="text-[#F07830]">Key Features of RCS Messaging?</span>
                            </h2>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { number: "01", title: "Rich Media Messaging for High Engagement", description: "Send images, videos, and product carousels to capture user attention instantly — significantly higher engagement compared to SMS marketing." },
                                { number: "02", title: "Verified Sender Messaging in Ahmedabad", description: "RCS displays your brand name, logo, and verification badge, ensuring customers trust your communication and reducing spam concerns." },
                                { number: "03", title: "Interactive Buttons for Seamless Action", description: "CTA buttons such as 'Buy Now' or 'Book Appointment' allow users to take action instantly, reducing friction and improving conversions." },
                                { number: "04", title: "Real-Time Tracking & Analytics", description: "Track delivery, reads, and clicks in real time for continuous campaign optimisation and better ROI measurement." },
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

                    {/* ── WHY BUSINESSES ARE MOVING TO RCS ── */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Why Businesses Are{" "}
                                <span className="text-[#F07830]">Moving to RCS Messaging?</span>
                            </h2>
                        </div>

                        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
                            {[
                                { icon: "📉", title: "Declining Performance of SMS Marketing", description: "SMS campaigns are seeing reduced engagement due to spam and a lack of interactivity. Businesses in Ahmedabad are actively looking for better alternatives." },
                                { icon: "💬", title: "Changing Customer Expectations", description: "Customers now expect conversational, visual communication similar to apps. Static SMS fails to meet these expectations." },
                                { icon: "🔗", title: "RCS Combines Reach + Experience", description: "RCS offers the reach of SMS and the interactivity of modern apps, making it a powerful communication channel for businesses." },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col gap-3"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-lg flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-base font-bold text-[#0B3C5D]">{item.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── WHO SHOULD USE RCS ── */}
                    <div>
                        <div className="text-center mb-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                                Who Should Use{" "}
                                <span className="text-[#F07830]">RCS Messaging?</span>
                            </h3>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                            {[
                                { title: "E-commerce Businesses in Ahmedabad", description: "Retail and D2C brands can use RCS to showcase products and drive purchases directly from messages, improving conversion rates." },
                                { title: "Enterprises with High Messaging Volume", description: "Businesses sending bulk transactional or promotional messages benefit from scalability and analytics." },
                                { title: "Service-Based Businesses", description: "Healthcare, education, and real estate businesses can use RCS for lead nurturing and customer engagement." },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col gap-3"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F07830" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </div>
                                    <p className="text-sm font-bold text-[#0B3C5D]">{item.title}</p>
                                    <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
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

                    {/* ── INDUSTRY APPLICATIONS ── */}
                    <div>
                        <div className={`text-center mb-12 transition-all duration-700 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F07830] bg-orange-50 border border-orange-100 px-4 py-1.5 rounded-full mb-4">
                                Where It Works
                            </span>
                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                                Industry Applications of{" "}
                                <span className="text-[#0B3C5D]">RCS Messaging</span>
                            </h2>
                            <p className="text-gray-500 max-w-2xl mx-auto text-base">
                                Businesses across industries are adopting RCS Messaging Ahmedabad to
                                enhance communication, improve engagement, and drive conversions
                                through interactive messaging. As adoption grows, more brands are
                                leveraging RCS Messaging Ahmedabad to replace traditional SMS
                                campaigns with richer customer experiences.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {[
                                {
                                    icon: "🛒",
                                    title: "E-commerce Businesses in Ahmedabad",
                                    note: "Brands can send product catalogs, offers, and recommendations with CTA buttons. This allows customers to browse and purchase directly, increasing sales.",
                                },
                                {
                                    icon: "🏦",
                                    title: "Financial Services",
                                    note: "Banks and NBFCs can send alerts and offers using verified messaging. This improves trust and customer engagement.",
                                },
                                {
                                    icon: "✈️",
                                    title: "Travel & Hospitality",
                                    note: "Businesses can share booking confirmations and itinerary updates visually. This enhances customer experience and reduces support queries.",
                                },
                                {
                                    icon: "🏥",
                                    title: "Healthcare Providers",
                                    note: "Hospitals can send reminders and reports interactively. This reduces missed appointments and improves communication.",
                                },
                                {
                                    icon: "🎓",
                                    title: "Education Platforms",
                                    note: "Institutions can share updates and enrollment links. This improves student engagement and response rates.",
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
                                        <h4 className="font-bold text-gray-900 text-base group-hover:text-[#0B3C5D] transition-colors duration-200 pt-3">
                                            {card.title}
                                        </h4>
                                    </div>

                                    <p className="text-sm text-gray-500 leading-relaxed">{card.note}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── PROCESS FLOW ── */}
                    <div>
                        <div className={`text-center mb-12 transition-all duration-700 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F07830] bg-orange-50 border border-orange-100 px-4 py-1.5 rounded-full mb-4">
                                Our Process
                            </span>
                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                                How{" "}
                                <span className="text-[#0B3C5D]">RCS Messaging Works</span> (Process Flow)
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                            {[
                                { n: "01", title: "Integration with Business Systems", note: "Businesses connect their CRM or marketing platform to an RCS messaging system to manage and send interactive campaigns from a single dashboard. This enables automated communication workflows." },
                                { n: "02", title: "DLT Registration & Approval", note: "Sender IDs and templates are registered for compliance. This ensures secure and approved communication." },
                                { n: "03", title: "Campaign Creation with Rich Content", note: "Messages are designed with media and CTA buttons. This enables personalized and engaging campaigns." },
                                { n: "04", title: "Delivery with Real-Time Tracking", note: "Messages are delivered via telecom networks with analytics. This helps optimize performance." },
                            ].map((step, i) => (
                                <div
                                    key={step.n}
                                    className={`group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm
                  hover:shadow-lg hover:-translate-y-1 hover:border-[#0B3C5D]/20
                  transition-all duration-300 cursor-default
                  ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                                    style={{ transitionDelay: `${i * 80 + 150}ms` }}
                                >
                                    <span className="text-3xl font-black text-[#F07830] opacity-30 block mb-3">
                                        {step.n}
                                    </span>
                                    <h4 className="font-bold text-gray-900 text-base mb-2">{step.title}</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed">{step.note}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Closing statement + CTA ── */}
                    <div
                        className={`transition-all duration-700 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                        style={{ transitionDelay: "500ms" }}
                    >
                        <p className="text-gray-600 max-w-3xl mx-auto text-center leading-relaxed mb-10">
                            This structured, compliant execution process positions Foxaircomm among the{" "}
                            <span className="font-semibold text-gray-900">top RCS messaging providers in Ahmedabad</span>{" "}
                            for measurable engagement growth.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 bg-[#0B3C5D] rounded-2xl px-8 py-6">
                            <div>
                                <p className="text-white font-bold text-lg">Ready to launch RCS messaging for your business?</p>
                                <p className="text-blue-300 text-sm mt-1">Let's map out an interactive messaging strategy with Foxaircomm.</p>
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

                    {/* ── DLT COMPLIANCE ── */}
                    <div className="mb-14">
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#185FA5] bg-[#E6F1FB] px-4 py-1.5 rounded-full mb-4">
                            Compliance
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            DLT Compliant{" "}
                            <span className="text-[#F07830]">Messaging Services in India</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mb-8 text-sm leading-relaxed">
                            Every RCS campaign we run is built on a fully compliant, TRAI-regulated foundation:
                        </p>

                        <div className="grid md:grid-cols-3 gap-3 mb-6">
                            {[
                                { title: "DLT for Secure Communication", desc: "Ensures transparency and prevents spam in business messaging. It is mandatory under TRAI regulations." },
                                { title: "Template & Header Approval", desc: "Businesses must register templates before sending messages, ensuring only verified communication reaches customers." },
                                { title: "Consent-Based Messaging", desc: "Only opted-in users receive messages, improving trust and compliance." },
                            ].map((item) => (
                                <div key={item.title} className="flex flex-col gap-2 p-5 border border-gray-100 rounded-xl hover:border-gray-300 transition-colors duration-200">
                                    <div className="w-9 h-9 rounded-lg bg-[#E6F1FB] flex items-center justify-center flex-shrink-0">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#185FA5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="11" width="18" height="10" rx="2" />
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                        </svg>
                                    </div>
                                    <h4 className="text-sm font-bold text-gray-900">{item.title}</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 mb-5">
                            <p className="text-sm text-gray-600 leading-relaxed">
                                <strong className="text-gray-900 font-semibold">Foxaircomm as a DLT Compliant Messaging Service Provider in India</strong> —
                                Foxaircomm manages complete compliance, making it a reliable RCS message
                                provider in Ahmedabad for businesses.
                            </p>
                        </div>


                        <a href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                            style={{ background: "linear-gradient(135deg, #F07830, #d95e18)" }}
                        >
                            👉 Get DLT-Compliant RCS Messaging Services in Ahmedabad
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                    {/* DIVIDER */}
                    <div className="border-t border-gray-100 mb-14" />

                    {/* ── WHAT PROBLEMS DOES RCS SOLVE ── */}
                    <div className="mb-14">
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#993C1D] bg-[#FAECE7] px-4 py-1.5 rounded-full mb-4">
                            Problems We Solve
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            What Problems Does{" "}
                            <span className="text-[#F07830]">RCS Solve?</span>
                        </h2>

                        <div className="grid md:grid-cols-3 gap-3 mt-8">
                            {[
                                { icon: "📉", title: "Low Engagement in SMS Campaigns", desc: "RCS improves engagement through rich media and interactivity, leading to higher response rates." },
                                { icon: "🔒", title: "Lack of Trust in Messaging", desc: "Verified sender messaging ensures customers trust your communication." },
                                { icon: "💬", title: "Limited Customer Interaction", desc: "RCS enables two-way interaction, improving customer experience and conversions." },
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

                    {/* DIVIDER */}
                    <div className="border-t border-gray-100 mb-14" />

                    {/* ── RCS VS SMS VS WHATSAPP ── */}
                    <div>
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#185FA5] bg-[#E6F1FB] px-4 py-1.5 rounded-full mb-4">
                            Comparison
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            RCS vs SMS vs{" "}
                            <span className="text-[#F07830]">WhatsApp</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mb-8 text-sm leading-relaxed">
                            RCS combines the reach of SMS with the interactivity of app-based messaging:
                        </p>

                        <div className="overflow-hidden rounded-xl border border-gray-100 mb-8">
                            <div className="grid grid-cols-3">
                                <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#0B3C5D] px-5 py-3">RCS</span>
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-500 bg-gray-50 px-5 py-3">SMS</span>
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-500 bg-gray-50 px-5 py-3">WhatsApp</span>
                            </div>
                            {[
                                ["Rich media, branding & interactivity", "Plain text only", "Rich media & interactivity"],
                                ["Works natively — no app install", "Native by default", "Requires app installation"],
                                ["Verified sender badge", "No sender verification", "Verified business accounts"],
                                ["Reach of SMS + experience of apps", "Widest reach, lowest experience", "High experience, install-dependent reach"],
                            ].map((row, i) => (
                                <div key={i} className={`grid grid-cols-3 border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                                    <span className="text-sm font-semibold text-gray-900 px-5 py-4 border-r border-gray-100 flex items-center gap-2">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                        {row[0]}
                                    </span>
                                    <span className="text-sm text-gray-500 px-5 py-4 border-r border-gray-100">{row[1]}</span>
                                    <span className="text-sm text-gray-500 px-5 py-4">{row[2]}</span>
                                </div>
                            ))}
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                                <h4 className="text-sm font-bold text-gray-900 mb-2">RCS vs SMS Marketing</h4>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    RCS offers multimedia, branding, and interactivity, unlike SMS.
                                    Businesses working with an RCS message service provider in Ahmedabad
                                    see better engagement.
                                </p>
                            </div>
                            <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                                <h4 className="text-sm font-bold text-gray-900 mb-2">RCS vs WhatsApp</h4>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    RCS works without app installation, ensuring a broader reach
                                    compared to WhatsApp.
                                </p>
                            </div>
                        </div>

                        <p className="text-sm text-gray-500 mt-6 leading-relaxed text-center">
                            <strong className="text-gray-900 font-semibold">Best Messaging Channel for Businesses:</strong>{" "}
                            RCS combines reach and interactivity, making it ideal for enterprise messaging.
                        </p>
                    </div>

                </div>
            </section >

            <section className="w-full bg-gray-50 py-16 px-6 md:px-12">
                <div className="max-w-6xl mx-auto space-y-14">

                    {/* ── WHEN SHOULD YOU SWITCH TO RCS ── */}
                    <div>
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#993C1D] bg-[#FAECE7] px-4 py-1.5 rounded-full mb-3">
                            Timing
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                            When Should You Switch to RCS?
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            These signals clearly indicate it's time to move on from plain SMS:
                        </p>

                        <div className="grid sm:grid-cols-3 gap-3 mb-6">
                            {[
                                { title: "When SMS Campaign Performance Drops", desc: "Low engagement indicates the need for richer communication channels." },
                                { title: "When Trust Is a Concern", desc: "Verified messaging improves customer confidence and engagement." },
                                { title: "When Conversions Matter", desc: "Interactive messaging directly drives customer actions." },
                            ].map((item) => (
                                <div key={item.title} className="flex flex-col gap-2 bg-white border border-gray-100 rounded-xl px-4 py-4 hover:border-orange-100 transition-colors duration-200 group">
                                    <div className="w-9 h-9 rounded-lg bg-[#FAECE7] flex items-center justify-center flex-shrink-0 group-hover:bg-[#F0997B]/30 transition-colors duration-200">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#993C1D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                            <line x1="12" y1="9" x2="12" y2="13" />
                                            <line x1="12" y1="17" x2="12.01" y2="17" />
                                        </svg>
                                    </div>
                                    <h4 className="text-sm font-bold text-gray-800">{item.title}</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <a href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                            style={{ background: "linear-gradient(135deg, #F07830, #d95e18)" }}
                        >
                            👉 Switch to an RCS Message Service Provider in Ahmedabad Today
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                    {/* ── WHAT RESULTS + WHY CHOOSE FOXAIRCOMM ── */}
                    <div className="grid lg:grid-cols-2 gap-8">

                        {/* LEFT — Results */}
                        <div>
                            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#27500A] bg-[#EAF3DE] px-4 py-1.5 rounded-full mb-3">
                                Outcomes
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                What Results Can You Expect?
                            </h2>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                Businesses adopting RCS consistently see:
                            </p>

                            <div className="flex flex-col gap-3">
                                {[
                                    { icon: "📈", title: "Higher Engagement Rates", desc: "Businesses using RCS Messaging Services in Ahmedabad see improved open and click-through rates — in many cases up to 2–3× higher engagement compared to traditional SMS campaigns." },
                                    { icon: "🤝", title: "Improved Customer Trust", desc: "Verified messaging builds credibility and brand recall." },
                                    { icon: "💰", title: "Better ROI from Campaigns", desc: "Higher conversions and tracking capabilities improve returns." },
                                ].map((item) => (
                                    <div key={item.title} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3.5 hover:border-gray-200 transition-colors duration-200">
                                        <div className="w-9 h-9 rounded-lg bg-[#EAF3DE] flex items-center justify-center text-base flex-shrink-0">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-800 mb-1">{item.title}</h4>
                                            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT — Why choose Foxaircomm */}
                        <div>
                            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0C447C] bg-[#E6F1FB] px-4 py-1.5 rounded-full mb-3">
                                Our Advantage
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                Why Choose Foxaircomm Ahmedabad?
                            </h2>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                What sets us apart as your messaging partner:
                            </p>

                            <div className="flex flex-col gap-3 mb-6">
                                {[
                                    { title: "Trusted Provider for RCS Messaging Services in Ahmedabad", desc: "Foxaircomm delivers scalable messaging solutions tailored for Ahmedabad businesses." },
                                    { title: "Expertise in DLT & Telecom Compliance", desc: "Deep understanding of regulations ensures smooth operations." },
                                    { title: "Performance-Driven Messaging Campaigns", desc: "Focus on engagement and conversions makes Foxaircomm a strong partner." },
                                ].map((item) => (
                                    <div key={item.title} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3.5 hover:border-gray-200 transition-colors duration-200">
                                        <div className="w-8 h-8 rounded-lg bg-[#E6F1FB] flex items-center justify-center flex-shrink-0">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#185FA5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-800 mb-1">{item.title}</h4>
                                            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <a href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                                style={{ background: "linear-gradient(135deg, #F07830, #d95e18)" }}
                            >
                                👉 Talk to an RCS Marketing Message Service Provider in Ahmedabad
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* ── HOW TO GET STARTED ── */}
                    <div className="bg-white border border-gray-100 rounded-2xl px-8 py-8">
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0C447C] bg-[#E6F1FB] px-4 py-1.5 rounded-full mb-3">
                            Getting Started
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                            How to Get Started?
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            A simple three-step onboarding process:
                        </p>

                        <div className="grid sm:grid-cols-3 gap-3 mb-6">
                            {[
                                { n: "01", title: "Consultation & Strategy Planning", desc: "Understand business goals and define messaging strategy." },
                                { n: "02", title: "DLT Setup & Integration", desc: "Complete compliance and technical onboarding." },
                                { n: "03", title: "Campaign Launch & Optimization", desc: "Execute and optimize campaigns for better ROI." },
                            ].map((step) => (
                                <div key={step.n} className="flex gap-4 items-start p-5 border border-gray-100 rounded-xl hover:border-gray-300 transition-colors duration-200">
                                    <span className="w-8 h-8 rounded-lg bg-[#0B3C5D] text-white text-xs font-black flex items-center justify-center flex-shrink-0">
                                        {step.n}
                                    </span>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900 mb-1">{step.title}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                            style={{ background: "linear-gradient(135deg, #F07830, #d95e18)" }}
                        >
                            👉 Start Your RCS Messaging Campaign Today
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                    {/* ── FAQs ── */}
                    <div>
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#993C1D] bg-[#FAECE7] px-4 py-1.5 rounded-full mb-3">
                            Common Questions
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                            FAQs
                        </h2>

                        <div className="flex flex-col gap-3">
                            {[
                                { q: "Who is the best RCS messaging service provider in Ahmedabad?", a: "Foxaircomm offers end-to-end RCS messaging solutions with compliance and scalability." },
                                { q: "Is RCS better than SMS marketing?", a: "Yes, RCS provides better engagement through rich media and interactivity." },
                                { q: "Can RCS be used for marketing campaigns?", a: "Yes, businesses can use RCS marketing messaging services to improve conversions." },
                                { q: "Does RCS work on all devices?", a: "Support depends on device and network, with SMS fallback ensuring delivery." },
                            ].map((item) => (
                                <FaqItem key={item.q} question={item.q} answer={item.a} />
                            ))}
                        </div>
                    </div>

                    {/* ── FINAL CTA ── */}
                    <div className="bg-[#0B3C5D] rounded-2xl px-8 py-10 text-center">
                        <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                            🚀 Still Relying on Outdated SMS Campaigns?
                        </h2>
                        <p className="text-blue-200 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
                            You're already losing engagement. Switch to a trusted RCS Messaging
                            Services in Ahmedabad provider and start driving real customer
                            engagement and conversions with Foxaircomm today.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <a href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white text-sm hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
                                style={{ background: "linear-gradient(135deg, #F07830, #d95e18)", boxShadow: "0 4px 16px rgba(240,120,48,0.4)" }}
                            >
                                👉 Request a Demo RCS Campaign for Your Business
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