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



export default function BulkSmsAhemdabad() {

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
                  Bulk SMS Service · Ahmedabad
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
                  Bulk SMS Service
                  <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full bg-[#F07830] opacity-30" />
                </span>{" "}
                in Ahmedabad To Reach Customers Instantly
              </h1>
            </div>

            {/* H2 */}
            <div
              className={`transition-all duration-700 delay-150 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
            >
              <h2 className="text-lg md:text-xl font-bold text-white">
                Reliable SMS Messaging Built for Real Results
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
                Reach customers instantly with Foxaircomm's reliable SMS messaging
                platform. If you're evaluating a bulk SMS service in Ahmedabad,
                chances are you're not searching for the cheapest route; you're
                looking for something that actually works on the ground.
              </p>
              <p className="text-base leading-relaxed text-white/70 mt-3">
                Businesses across Ahmedabad trust Foxaircomm to simplify customer
                communication and SMS marketing.
              </p>
            </div>

            {/* What is Bulk SMS + How it Works */}
            <div
              className={`transition-all duration-700 delay-250 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
            >
              <p className="text-sm font-bold text-white uppercase tracking-widest mb-2">
                What is Bulk SMS Service & How Does It Work?
              </p>
              <p className="text-sm leading-relaxed text-white/70 mb-2">
                Bulk SMS service in Ahmedabad allows businesses to send text
                messages to thousands of recipients simultaneously through an
                online messaging platform. Companies use bulk SMS for marketing
                campaigns, OTP verification, appointment reminders, and service
                notifications to communicate with customers quickly and
                efficiently.
              </p>
              <p className="text-sm leading-relaxed text-white/70 mb-3">
                Bulk messaging platforms connect directly with telecom networks,
                enabling messages to reach customers instantly without requiring
                internet access. Unlike ads or social media platforms, SMS does
                not rely on algorithms, so messages are directly delivered to
                customers' inboxes.
              </p>

              <p className="text-sm font-bold text-white uppercase tracking-widest mb-2">
                Typical Process
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  "Deciding campaign objectives — promotions, reminders, alerts, or OTP verification",
                  "DLT template registration & approval under TRAI regulations",
                  "Uploading verified customer contact database",
                  "Creating the SMS message using the approved template",
                  "Sending or scheduling the campaign instantly or for a specific time",
                  "Tracking delivery reports, open behaviour, and engagement metrics",
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
                Talk to Our SMS Experts
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
                Our SMS Marketing Services
              </a>
            </div>
          </div>

          {/* ── RIGHT: SMS campaign performance mockup ── */}
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
                  foxaircomm.com / sms-dashboard
                </div>
                <div className="flex items-center gap-1.5 text-green-600 text-xs font-bold whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse" />
                  Live
                </div>
              </div>

              {/* Dashboard body */}
              <div className="p-5 bg-white">

                {/* Delivery chart card */}
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-bold text-gray-700">SMS Delivery Rate</p>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-orange-50 text-[#F07830]">
                      ↑ +18% this quarter
                    </span>
                  </div>
                  <EngagementChart />
                </div>

                {/* Campaign performance summary strip */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { val: "50K+", label: "Messages Sent Monthly" },
                    { val: "98.5%", label: "Delivery Success Rate" },
                    { val: "<5s", label: "Avg. Delivery Speed" },
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

                {/* Campaign activity list */}
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                  Campaign Performance Highlights
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    { keyword: "OTP delivery success", position: "99%", change: "↑ 4" },
                    { keyword: "Promotional campaign reach", position: "42K", change: "↑ 15" },
                    { keyword: "DLT template approval time", position: "<24h", change: "↑ 3" },
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
                        <p className="text-xs text-gray-400">SMS Analytics · Ahmedabad</p>
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
                    Platform status: 98% ✓
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
                Trusted Bulk SMS Service Partner
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
              Why Do Businesses Use{" "}
              <span className="text-[#F07830]">Bulk SMS Marketing in Ahmedabad?</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Businesses in Ahmedabad use Bulk SMS Marketing because it helps them
              reach customers immediately on their cell phones. SMS messages
              usually have very high open rates and are delivered quickly without
              requiring internet connectivity.
            </p>
          </div>

          {/* Who relies on it */}
          <div className="mb-16">
            <p className="text-gray-600 max-w-2xl mx-auto text-center leading-relaxed">
              Retail stores, healthcare providers, startups, and service companies
              across Ahmedabad heavily rely on SMS campaigns to promote offers,
              send reminders, and maintain customer communication.
            </p>
          </div>

          {/* Types of SMS services header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Types of{" "}
              <span className="text-[#F07830]">Bulk SMS Services Are Available?</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Businesses use different types of Bulk SMS services depending on
              their communication needs. Bulk messaging platforms support
              marketing campaigns, operational alerts, and authentication
              messaging.
            </p>
          </div>

          {/* SMS type cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "📣",
                title: "Promotional Bulk SMS Service in Ahmedabad",
                intro: "With promotional SMS campaigns, businesses can promote products, services, discounts, and offers. Retail businesses and e-commerce platforms frequently use promotional SMS to reach customers instantly and increase sales.",
                label: "Common uses include:",
                points: [
                  "Promotional offers",
                  "Festival campaigns",
                  "Product launches",
                  "Customer engagement campaigns",
                ],
              },
              {
                icon: "🧾",
                title: "Transactional Bulk SMS Service in Ahmedabad",
                intro: "Businesses use transactional SMS messages for sending important notifications and service alerts.",
                label: "Examples include:",
                points: [
                  "Order confirmations",
                  "Payment notifications",
                  "Appointment reminders",
                  "Delivery updates",
                ],
                footer: "Transactional messages are delivered instantly and can be sent 24 hours a day.",
              },
              {
                icon: "🔐",
                title: "OTP Bulk SMS Service in Ahmedabad",
                intro: "OTP SMS services enable businesses to send one-time passwords for authentication and user verification.",
                label: "OTP messaging is widely used by:",
                points: [
                  "Banking and fintech companies",
                  "E-commerce platforms",
                  "Mobile applications",
                  "Online service portals",
                ],
              },
              {
                icon: "📞",
                title: "Voice Bulk SMS Service",
                intro: "Through Voice SMS, businesses can send pre-recorded voice messages to multiple recipients simultaneously.",
                footer: "Voice campaigns are commonly used for announcements, reminders, and customer engagement communication.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0 text-xl">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#0B3C5D]">{card.title}</h3>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed mb-3">{card.intro}</p>

                {card.points && (
                  <>
                    <p className="text-sm font-semibold text-gray-700 mb-2">{card.label}</p>
                    <ul className="flex flex-col gap-2 mb-4">
                      {card.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#F07830] flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {card.footer && (
                  <p className="text-xs text-gray-400 leading-relaxed mt-auto pt-3 border-t border-gray-100">
                    {card.footer}
                  </p>
                )}
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
              Industries We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Which Businesses in Ahmedabad{" "}
              <span className="text-[#0B3C5D]">Benefit from Bulk SMS Services?</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base">
              Many industries rely on SMS messaging to improve communication with
              customers.
            </p>
          </div>

          {/* ── Industry cards ── */}
          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  number: "01",
                  icon: "🛍️",
                  title: "Retail Businesses",
                  description: "Well-known retail stores in Ahmedabad markets, such as CG Road and Satellite, use SMS campaigns to promote offers and seasonal discounts.",
                },
                {
                  number: "02",
                  icon: "🏥",
                  title: "Healthcare Clinics",
                  description: "Hospitals and diagnostic centers send appointment reminders and patient notifications.",
                },
                {
                  number: "03",
                  icon: "🎓",
                  title: "Educational Institutes",
                  description: "Schools and coaching institutes communicate daily updates with students and parents.",
                },
                {
                  number: "04",
                  icon: "🏢",
                  title: "Real Estate Companies",
                  description: "Real estate developers promote property launches and project updates through SMS campaigns.",
                },
                {
                  number: "05",
                  icon: "🛒",
                  title: "E-commerce Businesses",
                  description: "Online stores send order confirmations, delivery notifications, and promotional offers.",
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
          </div>

          {/* ── Mid CTA banner ── */}
          <div
            className={`transition-all duration-700 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-5 bg-[#0B3C5D] rounded-2xl px-8 py-6">
              <div>
                <p className="text-white font-bold text-lg">See How Bulk SMS Fits Your Business</p>
                <p className="text-blue-300 text-sm mt-1">
                  Whatever your industry, our SMS experts can map a campaign
                  strategy that fits your customer communication needs.
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

          {/* ── How to Choose the Best Provider ── */}
          <div className={`text-center transition-all duration-700 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              How to Choose the{" "}
              <span className="text-[#0B3C5D]">Best Bulk SMS Service Provider in Ahmedabad?</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base">
              Choosing the right messaging platform is important for businesses
              that depend on reliable communication. The best bulk SMS service
              provider in Ahmedabad should offer strong delivery infrastructure,
              easy campaign management, and flexible pricing.
            </p>
          </div>

          {/* ── Key Factors grid ── */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                number: "01",
                icon: "📶",
                title: "SMS Delivery Reliability",
                description: "Strong network connectivity to ensure every message reaches its recipient.",
              },
              {
                number: "02",
                icon: "⚡",
                title: "Fast OTP Delivery Speed",
                description: "Near-instant delivery for authentication and verification messages.",
              },
              {
                number: "03",
                icon: "🖥️",
                title: "User-Friendly Dashboard",
                description: "Simple campaign creation, scheduling, and management tools.",
              },
              {
                number: "04",
                icon: "🔌",
                title: "API Integration",
                description: "Seamless connectivity for applications and internal systems.",
              },
              {
                number: "05",
                icon: "📊",
                title: "Campaign Analytics & Reporting",
                description: "Clear visibility into delivery, engagement, and campaign performance.",
              },
              {
                number: "06",
                icon: "📈",
                title: "Scalable Messaging Infrastructure",
                description: "Infrastructure that grows with your messaging volume and business needs.",
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

          {/* ── Closing CTA banner ── */}
          <div
            className={`transition-all duration-700 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-5 bg-[#0B3C5D] rounded-2xl px-8 py-6">
              <div>
                <p className="text-white font-bold text-lg">Foxaircomm Provides a Platform That Meets Your Requirements</p>
                <p className="text-blue-300 text-sm mt-1">
                  Reliable delivery, easy campaign management, and flexible
                  pricing — built for Ahmedabad businesses.
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

          {/* ── COST OF BULK SMS ── */}
          <div className="mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#993C1D] bg-[#FAECE7] px-4 py-1.5 rounded-full mb-4">
              Investment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              What is the{" "}
              <span className="text-[#F07830]">Cost of Bulk SMS Service</span> in Ahmedabad?
            </h2>
            <p className="text-gray-500 max-w-2xl mb-3 text-sm leading-relaxed">
              Bulk SMS pricing typically depends on the number of messages sent
              and the type of SMS used. Most providers offer credit-based pricing
              where businesses purchase SMS credits to run campaigns or send
              notifications.
            </p>
            <p className="text-gray-500 max-w-2xl mb-3 text-sm leading-relaxed">
              Promotional SMS campaigns generally cost less than transactional
              messages because they use different messaging routes. Businesses
              can request customized pricing based on their messaging
              requirements.
            </p>
            <p className="text-sm font-semibold text-[#0B3C5D]">
              Request SMS pricing details from Foxaircomm.
            </p>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-gray-100 mb-14" />

          {/* ── DLT REGISTRATION ── */}
          <div className="mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#185FA5] bg-[#E6F1FB] px-4 py-1.5 rounded-full mb-4">
              Compliance
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              What is{" "}
              <span className="text-[#F07830]">DLT Registration</span> for Bulk SMS in India?
            </h2>
            <p className="text-gray-500 max-w-2xl mb-3 text-sm leading-relaxed">
              DLT registration is a regulatory process introduced by the Telecom
              Regulatory Authority of India (TRAI) to prevent spam messaging.
              Businesses must register their sender ID and message templates on a
              DLT platform before sending bulk SMS campaigns.
            </p>
            <p className="text-gray-500 max-w-2xl text-sm leading-relaxed">
              DLT compliance ensures that SMS campaigns comply with telecom
              regulations and reach customers without delivery restrictions.
            </p>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-gray-100 mb-14" />

          {/* ── WHY CHOOSE FOXAIRCOMM ── */}
          <div className="mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#993C1D] bg-[#FAECE7] px-4 py-1.5 rounded-full mb-4">
              Why Foxaircomm
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Why Choose{" "}
              <span className="text-[#F07830]">Foxaircomm</span> for Bulk SMS Service in Ahmedabad?
            </h2>
            <p className="text-gray-500 max-w-2xl mb-8 text-sm leading-relaxed">
              Foxaircomm Pvt Ltd is a Bulk SMS Marketing Company in Ahmedabad that
              provides a scalable messaging platform for businesses.
            </p>

            <p className="text-sm font-bold text-gray-700 uppercase tracking-widest mb-4">
              Platform Advantages
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "High-speed SMS delivery infrastructure",
                "Easy campaign management dashboard",
                "Real-time delivery tracking",
                "Secure OTP messaging support",
                "API integration for websites and applications",
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
              Businesses across Ahmedabad and Gujarat rely on Foxaircomm for
              reliable messaging communication.
            </p>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-gray-100 mb-14" />

          {/* ── SMS VS WHATSAPP COMPARISON TABLE ── */}
          <div className="mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#185FA5] bg-[#E6F1FB] px-4 py-1.5 rounded-full mb-4">
              Comparison
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Bulk SMS vs{" "}
              <span className="text-[#F07830]">WhatsApp Marketing</span>: Which is Better?
            </h2>
            <p className="text-gray-500 max-w-2xl mb-8 text-sm leading-relaxed">
              Businesses often compare SMS marketing with messaging channels such
              as WhatsApp.
            </p>

            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-5 py-4 font-bold text-gray-700">Feature</th>
                    <th className="px-5 py-4 font-bold text-[#0B3C5D]">Bulk SMS</th>
                    <th className="px-5 py-4 font-bold text-[#F07830]">WhatsApp</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Internet requirement", sms: "Not required", whatsapp: "Required" },
                    { feature: "Reach", sms: "All mobile phones", whatsapp: "Smartphone users" },
                    { feature: "Delivery speed", sms: "Instant", whatsapp: "Depends on the internet" },
                    { feature: "Best use", sms: "Alerts, OTP, promotions", whatsapp: "Conversational marketing" },
                  ].map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                      <td className="px-5 py-4 font-semibold text-gray-800 border-t border-gray-100">{row.feature}</td>
                      <td className="px-5 py-4 text-gray-600 border-t border-gray-100">{row.sms}</td>
                      <td className="px-5 py-4 text-gray-600 border-t border-gray-100">{row.whatsapp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-5 leading-relaxed">
              Many companies use both channels together in their communication
              strategy.
            </p>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-gray-100 mb-14" />

          {/* ── FAQ ── */}
          <div className="mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#993C1D] bg-[#FAECE7] px-4 py-1.5 rounded-full mb-4">
              FAQs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Frequently Asked{" "}
              <span className="text-[#F07830]">Questions</span>
            </h2>

            <div className="flex flex-col gap-3">
              {[
                {
                  q: "What is a sender ID in bulk SMS?",
                  a: "Sender ID is the name that appears as the message sender on a recipient's mobile phone. Businesses typically use their brand name as the sender ID so customers can easily recognize the message source.",
                },
                {
                  q: "How many SMS messages can be sent at once?",
                  a: "Bulk SMS platforms enable businesses to send thousands of messages simultaneously. Messaging platforms are designed to handle large-scale campaigns efficiently.",
                },
                {
                  q: "What is promotional SMS timing in India?",
                  a: "Promotional SMS messages are generally permitted between 9 AM and 9 PM according to telecom regulations in India. Transactional messages such as OTP alerts can be delivered at any time.",
                },
                {
                  q: "Is bulk SMS marketing effective?",
                  a: "Yes. SMS marketing has extremely high open rates because messages are delivered directly to mobile phones. Businesses use SMS campaigns to promote offers, send reminders, and improve customer engagement.",
                },
                {
                  q: "Can bulk SMS be integrated with CRM systems?",
                  a: "Yes. Many SMS platforms offer API integration that enables automated message sending directly from CRM systems, websites, and mobile applications.",
                },
                {
                  q: "How can businesses start using Foxaircomm bulk SMS services?",
                  a: "Businesses can contact Foxaircomm Pvt Ltd to create an account, access the messaging dashboard, and start sending SMS campaigns for marketing or operational communication.",
                },
              ].map((item) => (
                <div
                  key={item.q}
                  className="p-5 border border-gray-100 rounded-xl hover:border-gray-300 transition-colors duration-200"
                >
                  <p className="text-sm font-bold text-gray-800 mb-2">{item.q}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-gray-100 mb-14" />

          {/* ── FINAL CLOSING + CTA ── */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#185FA5] bg-[#E6F1FB] px-4 py-1.5 rounded-full mb-4">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Ready to Start Your{" "}
              <span className="text-[#F07830]">Bulk SMS Campaign?</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mb-8 text-sm leading-relaxed">
              Contact Foxaircomm to create an account, access the messaging
              dashboard, and start sending SMS campaigns for marketing or
              operational communication.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-5 bg-[#0B3C5D] rounded-2xl px-8 py-6">
              <div>
                <p className="text-white font-bold text-lg">Talk to our SMS experts</p>
                <p className="text-blue-300 text-sm mt-1">
                  Reliable delivery, DLT-compliant campaigns, and scalable
                  infrastructure — built for Ahmedabad businesses.
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