import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Target,
  Calendar,
  Wallet,
  MapPin,
  Award,
  Building2,
  Layers,
  Timer,
  UtensilsCrossed,
  Rocket,
  Briefcase,
  AlertCircle,
  Home,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  AlertTriangle, Lightbulb, Instagram,
  Facebook,
  Linkedin,
  Youtube,
  MessageCircle,
  Heart,
  Share2,
  TrendingUp,
  ArrowRight,
  Check,
  ChevronRight,
} from "lucide-react";
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
      <p className="text-gray-600 text-lg leading-relaxed">
        {description}
      </p>
    )}

    <div className="w-16 h-1 bg-[#f85415] rounded mt-5"></div>
  </div>
);

const Breadcrumbs = ({ items, title, eyebrow }) => (
  <section
    className="smm-body relative flex items-center overflow-hidden px-4 py-4 md:py-10 min-h-[100px] md:min-h-[100px]"
    style={{
      backgroundImage:
        "linear-gradient(135deg, rgb(5 41 160 / 37%) 0%, rgb(5 41 160 / 74%) 45%, rgb(7 18 79 / 87%) 100%), url(https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* dot texture overlay, consistent with rest of page */}
    <div
      className="absolute inset-0 opacity-[0.08] pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    ></div>
    <div
      className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full"
      style={{ background: "radial-gradient(circle, rgba(248,84,21,0.22) 0%, transparent 70%)" }}
    />

    <div className="relative max-w-6xl mx-auto w-full">
      {eyebrow && (
        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-orange-300 bg-orange-500/15 border border-orange-500/30 px-3.5 py-1.5 rounded-full mb-4">
          <MapPin className="w-3 h-3" />
          {eyebrow}
        </span>
      )}

      {title && (
        <p className="smm-display text-2xl md:text-2xl font-bold text-white leading-snug mb-5">
          {title}
        </p>
      )}

      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm overflow-x-auto whitespace-nowrap">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={item.label} className="flex items-center gap-2">
                {i === 0 ? (
                  <Link
                    to={item.href}
                    className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors font-medium"
                  >
                    <Home className="w-3.5 h-3.5" />
                    {item.label}
                  </Link>
                ) : isLast ? (
                  <span className="text-[#f85415] font-semibold" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.href}
                    className="text-white/70 hover:text-white transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                )}
                {!isLast && (
                  <ChevronRight className="w-3.5 h-3.5 text-white/30 shrink-0" />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  </section>
);

const PLATFORMS = [
  {
    Icon: Instagram,
    name: "Instagram",
    desc: "Reels, Stories, static posts, carousel strategy, influencer outreach",
  },
  {
    Icon: Facebook,
    name: "Facebook",
    desc: "Meta Ads management, page management, and community engagement",
  },
  {
    Icon: Linkedin,
    name: "LinkedIn",
    desc: "B2B brand authority, thought leadership, lead gen ads",
  },
  {
    Icon: Youtube,
    name: "YouTube Shorts",
    desc: "Short-form video scripting, production, discoverability",
  },
  {
    Icon: Target,
    name: "Meta Ads",
    desc: "Campaign setup, audience targeting, creative testing, retargeting, budget optimisation",
  },
  {
    Icon: MapPin,
    name: "Google Business",
    desc: "Local search presence, review management, post scheduling",
  },
];

const strategies = [
  {
    icon: "🎯",
    tag: "Audience Strategy",
    text: "Targets audiences based on buying intent, not just demographics",
  },
  {
    icon: "📣",
    tag: "Paid Campaigns",
    text: "Runs paid campaigns structured to generate direct inquiries",
  },
  {
    icon: "📊",
    tag: "Real Metrics",
    text: "Tracks cost per lead and conversion rate instead of vanity metrics",
  },
  {
    icon: "🔄",
    tag: "Continuous Optimization",
    text: "Uses real inquiry data to continuously refine targeting and creative",
  },
];

const faqData = [
  {
    question:
      "What should I look for in a social media marketing company in Pune?",
    answer:
      "Look for an agency that focuses on buyer intent, lead generation, cost per lead, and conversion-focused campaigns rather than vanity metrics like followers and likes.",
  },
  {
    question:
      "How long does social media marketing take to generate leads?",
    answer:
      "Paid campaigns can generate leads within 2–4 weeks, while organic social media marketing typically compounds over 3–5 months.",
  },
  {
    question:
      "Is social media marketing better than SEO for my business?",
    answer:
      "Paid social generates faster leads while SEO builds long-term inbound visibility. Both channels work best together.",
  },
  {
    question:
      "Which social media platform works best for advertising in Pune?",
    answer:
      "Instagram and Facebook work best for service businesses and B2C brands, while LinkedIn performs best for B2B and industrial companies.",
  },
];




const focusItems = [
  {
    icon: "📣",
    title: "Lead Generation",
    desc: "Campaigns designed to generate calls, inquiries, and qualified leads.",
  },
  {
    icon: "📱",
    title: "Paid Social Campaigns",
    desc: "Facebook Ads and Instagram campaigns optimized for conversions.",
  },
  {
    icon: "📊",
    title: "Conversion Tracking",
    desc: "Every campaign measured using CPL, inquiry quality, and ROI.",
  },
];

const stats = [
  { number: "3x", label: "Avg. Lead Growth" },
  { number: "40%", label: "Lower CPL" },
  { number: "200+", label: "Brands Served" },
];


const faqs = [
  {
    question: "How much does social media marketing cost for a Pune business?",
    answer:
      "Social media marketing costs in Pune typically start from ₹15,000/month for organic management and go up to ₹80,000+/month for full-service paid campaigns including Meta Ads. The right package depends on your platforms, ad budget, and content volume. Foxaircomm offers a free 48-hour audit to give you a clear scope before any commitment.",
  },
  {
    question: "How long does it take to see results from social media marketing?",
    answer:
      "Meta Ads campaigns can produce measurable leads within 2–3 weeks with proper targeting and setup. Organic growth typically takes 60–90 days to build consistent momentum. Most clients see a clear performance trend within the first 30 days — which Foxaircomm uses to refine strategy before month two.",
  },
  {
    question: "Do I need a large ad budget to run social media ads in Pune?",
    answer:
      "No. Foxaircomm has produced strong lead generation results for clients starting with ₹15,000–₹25,000 per month in ad spend. Budget efficiency matters more than budget size in early stages — the goal is finding a cost-per-lead that works, then scaling what's proven.",
  },
  {
    question: "Can Foxaircomm handle both organic content and paid ads together?",
    answer:
      "Yes, and the integrated model is where results compound. Organic content improves the quality score and relevance of paid campaigns, while paid reach amplifies high-performing organic content. Managing both through a single team as a full-service social media marketing agency in Pune produces better results than splitting across vendors.",
  },
  {
    question: "Will Foxaircomm create all the content, or do I need to provide assets?",
    answer:
      "Full content production, copywriting, graphic design, and basic video editing are part of the service. For certain industries, we may request brand photography or product visuals to maintain authenticity. We'll clarify exactly what's needed during onboarding.",
  },
  {
    question: "How is Foxaircomm different from a freelancer or an in-house social media manager?",
    answer:
      "A freelancer typically manages one or two platforms reactively, without performance marketing or analytics depth. An in-house hire handles execution but rarely brings strategy, Meta Ads expertise, and data analysis together. Foxaircomm brings a full team — strategist, designer, copywriter, and ads manager — at a fraction of the cost of building that capability internally.",
  },
  {
    question: "Does Foxaircomm work with businesses outside Pune city limits?",
    answer:
      "Yes. Foxaircomm actively manages social media marketing campaigns for businesses across Pimpri-Chinchwad (PCMC), Hinjewadi, Wakad, Baner, Kharadi, Viman Nagar, and surrounding Pune metropolitan areas. We also work with businesses targeting Pune audiences from other cities.",
  },
  {
    question: "What makes Foxaircomm a specialist SMM company in Pune rather than a general digital agency?",
    answer:
      "Foxaircomm has a dedicated social media practice team of specialists in Meta Ads, Reels strategy, and performance reporting rather than generalist account managers covering every service type. Our tools, certifications, and reporting systems are built specifically around social media ROI. That focused structure is what allows us to deliver results a generalist vendor cannot match.",
  },
  {
    question: "What is the difference between social media management and social media marketing?",
    answer:
      "Social media management covers the operational layer: posting, scheduling, community management, and basic content creation. Social media marketing encompasses the full strategic layer: performance campaigns, Meta Ads, lead generation, conversion tracking, and analytics. Foxaircomm provides both as an integrated service — because management without marketing produces content, and marketing without management produces inconsistency.",
  },
];


const statss = [
  { icon: "👥", value: "3.2x", label: "Avg reach boost" },
  { icon: "❤️", value: "+87%", label: "Engagement lift" },
  { icon: "⏱️", value: "48h", label: "Audit delivery" },
  { icon: "⭐", value: "500+", label: "Brands audited" },
];

const platforms = [
  { name: "Instagram", color: "#E1306C", pct: 78 },
  { name: "Facebook", color: "#1877F2", pct: 54 },
  { name: "TikTok", color: "rgba(255,255,255,0.75)", pct: 65 },
  { name: "LinkedIn", color: "#0A66C2", pct: 41 },
  { name: "X / Twitter", color: "#1DA1F2", pct: 32 },
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const vals = [42, 58, 51, 76, 88, 95, 72];
const maxVal = Math.max(...vals);

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-200 ${isOpen
        ? "border-[#0529a0]/30 shadow-sm"
        : "border-gray-100 hover:border-gray-200"
        }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 p-6 text-left"
      >
        <div className="flex items-start gap-3">
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-200 ${isOpen ? "bg-[#0529a0]" : "bg-[#eef2ff]"
              }`}
          >
            <svg
              className={`w-4 h-4 transition-colors duration-200 ${isOpen ? "text-white" : "text-[#0529a0]"
                }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p
            className={`text-sm font-semibold leading-snug pt-1 transition-colors duration-200 ${isOpen ? "text-[#0529a0]" : "text-gray-800"
              }`}
          >
            {faq.question}
          </p>
        </div>

        {/* Chevron */}
        <div
          className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200 ${isOpen
            ? "border-[#0529a0]/30 bg-[#eef2ff] rotate-180"
            : "border-gray-200 bg-white rotate-0"
            }`}
        >
          <svg
            className={`w-3.5 h-3.5 transition-colors duration-200 ${isOpen ? "text-[#0529a0]" : "text-gray-400"
              }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Answer */}
      {isOpen && (
        <div className="px-6 pb-6 pl-[4.25rem]">
          <p className="text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

function SocialMediaMarketing() {

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (

    <>
      <Helmet>
        <title>Social Media Marketing Agency in Pune | Fox Aircomm</title>
        <meta name="description" content="Fox Aircomm is a social media marketing agency in Pune managing Instagram and Facebook strategy, content and growth for brands that want real engagement." />
      </Helmet>


      <div className="overflow-hidden bg-white">

        {/* HERO */}
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap');
        .smm-display { font-family: 'Sora', sans-serif; }
        .smm-body { font-family: 'Inter', sans-serif; }
      `}</style>

        {/* ── Breadcrumbs ── */}
        <Breadcrumbs
          eyebrow="Social Media Marketing Agency · Pune"
          title="Social Media Marketing"
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Social Media Marketing" },
          ]}
        />

        {/* ── What is social media marketing? ── */}
        <section className="smm-body bg-[#052ba7] py-10 px-4">
          <div className="container mx-auto px-6 lg:px-8 grid lg:grid-cols-[1.4fr_1fr] gap-16 items-center">

            {/* Left: copy */}
            <div>
              <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-white bg-[#0529a0] px-3.5 py-1.5 rounded-full mb-5">
                The Basics
              </span>
              <h1 className="smm-display text-4xl md:text-4xl font-bold text-gray-100 mb-2 leading-snug">
                A social media marketing agency in Pune that generates leads, not just followers
              </h1>
              <div className="w-16 h-1 rounded-full bg-[#f85415] mb-6"></div>
              <p className="text-gray-100 text-base leading-relaxed mb-4">
                Stop Posting. Start Converting.
              </p>
              <p className="text-gray-100 text-base leading-relaxed mb-8 text-justify">
                Most Pune businesses post consistently but struggle to generate enquiries. Foxaircomm is a performance-driven social media marketing company in Pune, helping businesses turn social media into a predictable lead-generation channel through Meta Ads, Reels-first content, and full-service social media management.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "3× more qualified enquiries in 90 days*",
                  "Meta Ads & conversion campaigns",
                  "End-to-end content creation & management",
                  "Transparent, rupee-by-rupee campaign reporting",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-gray-100 text-sm">
                    <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-[#f85415] flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Platform row */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#0529a0] flex items-center justify-center text-white shadow-md shadow-[#0529a0]/20">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="w-11 h-11 rounded-xl bg-[#0529a0] flex items-center justify-center text-white shadow-md shadow-[#0529a0]/20">
                  <Facebook className="w-5 h-5" />
                </div>
                <div className="w-11 h-11 rounded-xl bg-[#0529a0] flex items-center justify-center text-white shadow-md shadow-[#0529a0]/20">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="w-11 h-11 rounded-xl bg-[#0529a0] flex items-center justify-center text-white shadow-md shadow-[#0529a0]/20">
                  <Youtube className="w-5 h-5" />
                </div>
                <span className="text-xs text-white ml-1.5 max-w-[110px] leading-snug">
                  Platforms we manage campaigns on
                </span>
              </div>

              <div className="flex flex-wrap gap-3 mt-4">
                <Link
                  to="tel:+919970650797"
                  className="bg-[#f85415] hover:bg-orange-600 transition-colors text-white font-semibold px-7 py-3.5 rounded-xl text-sm inline-flex items-center gap-2"
                >
                  Get a Free Social Media Audit <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/918879864151"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/30 hover:bg-white/10 transition-colors text-white font-semibold px-7 py-3.5 rounded-xl text-sm inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right: illustration panel — phone mockup with live engagement */}
            <div className="relative flex justify-center">
              <div
                className="relative w-full max-w-sm rounded-[2.5rem]  overflow-hidden"

              >
                {/* texture */}


                <img src="/ChatGPT Image Aug 5, 2026, 03_17_35 PM.png"></img>

              </div>
            </div>

          </div>
        </section>

        {/* ── Stats bar ── */}
        <section className="smm-body bg-white py-12 px-4 border-y border-gray-100">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">

            <div className="flex flex-col items-center text-center md:border-r border-gray-100 md:pr-4">
              <Award className="w-5 h-5 text-[#f85415] mb-2" />
              <span className="smm-display block text-2xl font-bold text-gray-900">6+</span>
              <span className="block text-[11px] text-gray-500 mt-1 leading-tight">
                Years managing social media campaigns
              </span>
            </div>

            <div className="flex flex-col items-center text-center md:border-r border-gray-100 md:pr-4">
              <Building2 className="w-5 h-5 text-[#f85415] mb-2" />
              <span className="smm-display block text-2xl font-bold text-gray-900">120+</span>
              <span className="block text-[11px] text-gray-500 mt-1 leading-tight">
                Pune &amp; PCMC clients served
              </span>
            </div>

            <div className="flex flex-col items-center text-center md:border-r border-gray-100 md:pr-4">
              <Layers className="w-5 h-5 text-[#f85415] mb-2" />
              <span className="smm-display block text-2xl font-bold text-gray-900">8</span>
              <span className="block text-[11px] text-gray-500 mt-1 leading-tight">
                Industries with active campaigns
              </span>
            </div>

            <div className="flex flex-col items-center text-center md:border-r border-gray-100 md:pr-4">
              <Wallet className="w-5 h-5 text-[#f85415] mb-2" />
              <span className="smm-display block text-2xl font-bold text-gray-900">₹4Cr+</span>
              <span className="block text-[11px] text-gray-500 mt-1 leading-tight">
                Meta Ads spend managed since 2018
              </span>
            </div>

            <div className="flex flex-col items-center text-center">
              <Timer className="w-5 h-5 text-[#f85415] mb-2" />
              <span className="smm-display block text-2xl font-bold text-gray-900">48-hr</span>
              <span className="block text-[11px] text-gray-500 mt-1 leading-tight">
                Free audit turnaround
              </span>
            </div>

          </div>
        </section>

        {/* ── Hero ── */}
        <section className="smm-body relative bg-[#0529a0] py-20 px-4 overflow-hidden">
          {/* subtle dot grid texture */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          ></div>

          <div className="relative max-w-6xl mx-auto">

            {/* Badge */}
            {/* <span className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-orange-400 bg-orange-500/15 border border-orange-500/30 px-3.5 py-1.5 rounded-full mb-5">
            <MapPin className="w-3 h-3" />
            Social Media Marketing Agency · Pune
          </span> */}

            {/* Eyebrow line */}


            {/* Headline */}
            <p className="smm-display text-2xl md:text-2xl font-bold text-white leading-tight mb-5 max-w-2xl">
              What is social

              {" "}
              <span className="text-[#f85415]">media marketing?</span>
            </p>

            {/* Body copy */}



            {/* Proof points grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-10">

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-start gap-3.5 hover:bg-white/[0.08] shadow-lg shadow-black/25 hover:shadow-orange-500/20 transition-all duration-300">
                <div className="w-9 h-9 min-w-[36px] rounded-lg bg-orange-500/15 text-orange-400 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <span className="text-md text-white leading-relaxed">
                  Social media marketing is a digital marketing strategy that uses platforms like Instagram, Facebook, LinkedIn, and YouTube to increase brand awareness, generate leads, drive website traffic, and improve sales through organic content and paid advertising campaigns.

                </span>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-start gap-3.5 hover:bg-white/[0.08] shadow-lg shadow-black/25 hover:shadow-orange-500/20 transition-all duration-300">
                <div className="w-9 h-9 min-w-[36px] rounded-lg bg-orange-500/15 text-orange-400 flex items-center justify-center">
                  <Target className="w-4 h-4" />
                </div>
                <span className="text-md text-white leading-relaxed">
                  For Pune businesses, Foxaircomm provides end-to-end social media marketing services — from Meta Ads management and Reels-first content to complete social media management with measurable monthly reporting.

                </span>
              </div>

            </div>

          </div>
        </section>

        {/* DIFFERENCE */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">

            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
              Strategy
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl font-semibold text-gray-900 leading-snug mb-10 max-w-3xl">
              Why Pune Businesses Need Social Media Marketing Services Right Now
            </h2>

            {/* ---------- Narrative: Why the Pune market specifically ---------- */}
            <div className="mb-12">
              <h3 className="inline-block text-md font-medium text-emerald-900 bg-emerald-50 rounded-md px-2.5 py-1 tracking-wide mb-4">
                Why the Pune Market Specifically
              </h3>

              <p className="text-md text-gray-700 leading-relaxed mb-4 max-w-3xl">
                Pune's business landscape has shifted significantly over the last three years.
              </p>
              <p className="text-md text-gray-700 leading-relaxed mb-6 max-w-3xl text-justify">
                The IT corridor from Hinjewadi to Kharadi. The D2C retail surge in Aundh and Viman
                Nagar. Funded startups across PCMC. The growing hospitality and healthcare sectors.
                Local buyers are now digitally active at every stage of the purchase journey.
              </p>

              {/* Bullet list */}
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {[
                  { Icon: Instagram, text: "They research on Instagram before visiting a showroom." },
                  { Icon: Facebook, text: "They read Facebook reviews before booking a clinic appointment." },
                  { Icon: Linkedin, text: "They compare vendors on LinkedIn before signing a B2B contract." },
                ].map(({ Icon, text }, i) => (
                  <div key={i} className="flex flex-col gap-3 bg-gray-50 rounded-xl p-5 border border-gray-100">
                    <div className="w-8 h-8 rounded-[10px] bg-emerald-50 flex items-center justify-center text-emerald-700">
                      <Icon className="w-4 h-4" />
                    </div>
                    <p className="text-md text-gray-700 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>

              <p className="text-md text-gray-700 leading-relaxed mb-4 max-w-3xl text-justify">
                The Pune consumer is mobile-first, price-sensitive, and value-driven — and responds
                to content that speaks to those characteristics specifically.
              </p>
              <p className="text-md text-gray-700 leading-relaxed max-w-3xl text-justify">
                A national creative agency applying generic templates to a Pune audience
                consistently underperforms a specialist social media marketing agency in Pune with
                real local insight.
              </p>
            </div>

            {/* ---------- Market Observation: proof, deliberately set apart from the narrative above ---------- */}
            <div className="relative bg-[#f75415] rounded-2xl p-8 md:p-10 overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              ></div>

              <div className="relative">
                <h3 className="inline-block text-md font-medium text-black bg-emerald-500/10 border border-emerald-500/20 rounded-md px-2.5 py-1 tracking-wide mb-6">
                  Foxaircomm Market Observation · Pune Consumer Behaviour
                </h3>

                <div className="grid md:grid-cols-[auto_1fr] gap-x-8 gap-y-4 items-start mb-6">
                  <p className="font-serif text-4xl md:text-5xl font-semibold text-white leading-none">
                    2.4×
                  </p>
                  <p className="text-md text-black leading-relaxed pt-1 max-w-xl text-justify">
                    Across campaigns run for Pune-based service businesses, Reels under 18 seconds
                    currently outperform static creatives by 2.4× in engagement rate — and drive
                    60% more link clicks at equivalent ad spend.
                  </p>
                </div>

                <p className="text-md text-black leading-relaxed mb-6 max-w-2xl text-justify">
                  Brands still posting only static graphics are paying a compounding visibility
                  penalty month over month.
                </p>

                <p className="text-md text-black leading-relaxed mb-7 max-w-2xl text-justify">
                  The question isn't whether social media works for Pune businesses. It's whether
                  your brand is using it with enough precision to see results — or whether a
                  competitor's social media agency in Pune is capturing the leads that should be
                  yours.
                </p>

                <a
                  href="#platforms"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-black hover:text-emerald-400 transition-colors"
                >
                  See the platforms we manage
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </section>
        {/* CASE STUDY */}
        {/* ── Market Observation ── */}


        {/* ── Which businesses benefit ── */}
        <section className="py-20 bg-[#F8FAFC] px-4">
          <div className="max-w-6xl mx-auto">

            {/* Header */}
            <div className="mb-10">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-orange-500 bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-full mb-4">
                Fit Check
              </span>
              <h2 className="text-3xl md:text-3xl font-bold text-gray-900 max-w-3xl leading-snug mb-4">
                Which Businesses Actually Benefit From{" "}
                <span className="text-[#0529a0]">Professional SMM Services?</span>
              </h2>
              <p className="text-gray-600 text-md leading-relaxed max-w-3xl text-justify">
                Foxaircomm works with businesses across Pune and PCMC that share one common need: they want social media to function as a genuine lead and revenue channel — not just a brand awareness exercise.
              </p>
              <p className="text-gray-600 text-md leading-relaxed max-w-3xl text-justify">
                Our social media marketing services in Pune are designed for businesses where enquiry volume directly drives revenue.

              </p>
            </div>

            {/* Industries */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 mb-8">
              <h3 className="text-base font-bold text-gray-800 mb-5">
                Industries We Actively Run Campaigns For
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="text-sm font-medium text-[#0529a0] bg-[#eef2ff] border border-blue-100 rounded-full px-4 py-2">
                  Real Estate
                </span>
                <span className="text-sm font-medium text-[#0529a0] bg-[#eef2ff] border border-blue-100 rounded-full px-4 py-2">
                  Healthcare &amp; Clinics
                </span>
                <span className="text-sm font-medium text-[#0529a0] bg-[#eef2ff] border border-blue-100 rounded-full px-4 py-2">
                  Education &amp; Coaching
                </span>
                <span className="text-sm font-medium text-[#0529a0] bg-[#eef2ff] border border-blue-100 rounded-full px-4 py-2">
                  Retail &amp; E-commerce
                </span>
                <span className="text-sm font-medium text-[#0529a0] bg-[#eef2ff] border border-blue-100 rounded-full px-4 py-2">
                  Hospitality &amp; F&amp;B
                </span>
                <span className="text-sm font-medium text-[#0529a0] bg-[#eef2ff] border border-blue-100 rounded-full px-4 py-2">
                  Startups &amp; D2C
                </span>
                <span className="text-sm font-medium text-[#0529a0] bg-[#eef2ff] border border-blue-100 rounded-full px-4 py-2">
                  Professional Services
                </span>
                <span className="text-sm font-medium text-[#0529a0] bg-[#eef2ff] border border-blue-100 rounded-full px-4 py-2">
                  Interior &amp; Architecture
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* Profile of a business ready to invest */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden mb-5">

                <div className="bg-[#0529a0] px-8 py-5 flex items-center gap-3">
                  <AlertCircle className="w-4 h-4 text-orange-400" />
                  <p className="text-white text-base font-bold">
                    The Profile of a Business Ready to Invest
                  </p>
                </div>

                <div className="space-y-4 p-5">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 min-w-[36px] rounded-lg bg-[#eef2ff] text-[#0529a0] flex items-center justify-center">
                      <ShoppingBag className="w-4 h-4" />
                    </div>
                    <p className="text-md text-gray-600 leading-relaxed pt-1.5">
                      Retail and e-commerce brands are driving online orders and footfall
                      through Instagram and Facebook advertising
                    </p>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 min-w-[36px] rounded-lg bg-[#eef2ff] text-[#0529a0] flex items-center justify-center">
                      <Home className="w-4 h-4" />
                    </div>
                    <p className="text-md text-gray-600 leading-relaxed pt-1.5">
                      Real estate developers and brokers targeting buyers across Wakad,
                      Balewadi, Undri, Talegaon, and emerging Pune corridors
                    </p>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 min-w-[36px] rounded-lg bg-[#eef2ff] text-[#0529a0] flex items-center justify-center">
                      <HeartPulse className="w-4 h-4" />
                    </div>
                    <p className="text-md text-gray-600 leading-relaxed pt-1.5">
                      Healthcare clinics and diagnostic centres are building appointment volume
                      through educational content and Meta Ads
                    </p>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 min-w-[36px] rounded-lg bg-[#eef2ff] text-[#0529a0] flex items-center justify-center">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <p className="text-md text-gray-600 leading-relaxed pt-1.5">
                      Education institutes and coaching centres are running high-volume lead
                      campaigns during the admission seasons
                    </p>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 min-w-[36px] rounded-lg bg-[#eef2ff] text-[#0529a0] flex items-center justify-center">
                      <UtensilsCrossed className="w-4 h-4" />
                    </div>
                    <p className="text-md text-gray-600 leading-relaxed pt-1.5">
                      Hospitality and F&amp;B businesses in Baner, Koregaon Park, and Camp are
                      building loyal customer communities
                    </p>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 min-w-[36px] rounded-lg bg-[#eef2ff] text-[#0529a0] flex items-center justify-center">
                      <Rocket className="w-4 h-4" />
                    </div>
                    <p className="text-md text-gray-600 leading-relaxed pt-1.5">
                      Startups launching brand presence on social media with a platform-first
                      strategy and performance tracking
                    </p>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 min-w-[36px] rounded-lg bg-[#eef2ff] text-[#0529a0] flex items-center justify-center">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <p className="text-md text-gray-600 leading-relaxed pt-1.5">
                      Established businesses are shifting budgets from print and hoardings to
                      digital, with clear ROI accountability
                    </p>
                  </div>
                </div>
              </div>

              {/* When to stop managing in-house */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="bg-[#0529a0] px-8 py-5 flex items-center gap-3">
                  <AlertCircle className="w-4 h-4 text-orange-400" />
                  <p className="text-white text-base font-bold">
                    When Should a Business Stop Managing Social Media In-House?
                  </p>
                </div>

                <div className="p-8">
                  <p className="text-sm font-semibold text-gray-500 tracking-wide uppercase mb-5">
                    Three Clear Signals
                  </p>

                  <div className="space-y-4 mb-7">
                    <div className="flex items-start gap-3.5">
                      <span className="w-7 h-7 min-w-[28px] rounded-full bg-[#fff7f4] border border-orange-100 text-[#f85415] text-sm font-bold flex items-center justify-center">
                        1
                      </span>
                      <p className="text-md text-gray-700 leading-relaxed pt-1">
                        Posting is inconsistent because the team is stretched.
                      </p>
                    </div>
                    <div className="flex items-start gap-3.5">
                      <span className="w-7 h-7 min-w-[28px] rounded-full bg-[#fff7f4] border border-orange-100 text-[#f85415] text-sm font-bold flex items-center justify-center">
                        2
                      </span>
                      <p className="text-md text-gray-700 leading-relaxed pt-1">
                        You've run Facebook Ads, but can't state your cost per lead.
                      </p>
                    </div>
                    <div className="flex items-start gap-3.5">
                      <span className="w-7 h-7 min-w-[28px] rounded-full bg-[#fff7f4] border border-orange-100 text-[#f85415] text-sm font-bold flex items-center justify-center">
                        3
                      </span>
                      <p className="text-md text-gray-700 leading-relaxed pt-1">
                        A competitor has visibly overtaken you on Instagram in the last six
                        months.
                      </p>
                    </div>
                  </div>

                  <p className="text-md text-gray-600 leading-relaxed border-t border-gray-100 pt-6">
                    Any one of these is sufficient reason to bring in a specialist performance
                    marketing agency in Pune with dedicated SMM capability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id="platforms" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">

            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-[#0529a0] bg-[#0529a0]/8 px-3 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f85415] inline-block" />
              Platforms &amp; Services
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl font-semibold text-gray-900 leading-snug mb-4 max-w-3xl">
              Instagram &amp; Facebook Marketing Agency Pune — Platforms and Services We Manage
            </h2>

            <p className="text-md text-gray-600 leading-relaxed mb-10 max-w-2xl">
              As a full-service social media agency in Pune, Foxaircomm manages social media across
              the platforms Pune audiences actually use — with platform-native content built for how
              each algorithm and audience behaves, not repurposed across channels.
            </p>

            {/* Platform grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {PLATFORMS.map(({ Icon, name, desc }, i) => (
                <div
                  key={name}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#f85415]/40 hover:shadow-sm transition-all duration-200"
                >
                  <div
                    className={`w-9 h-9 rounded-[10px] flex items-center justify-center mb-4 ${i % 2 === 0 ? "bg-[#0529a0]/8 text-[#0529a0]" : "bg-[#f85415]/10 text-[#f85415]"
                      }`}
                  >
                    <Icon className="w-4.5 h-4.5" strokeWidth={1.75} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1.5">{name}</h4>
                  <p className="text-md text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-md font-medium text-white bg-[#0529a0] hover:bg-[#f85415] transition-colors rounded-lg px-5 py-3"
            >
              Talk to a social media strategist
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>
        </section>


        {/* SERVICES */}
        <section className="py-20 bg-white px-4">
          <div className="max-w-6xl mx-auto">

            {/* Section Header */}
            <div className="mb-12">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-[#0529a0] bg-[#eef2ff] border border-blue-100 px-3.5 py-1.5 rounded-full mb-4">
                Problems We Solve
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-3xl leading-snug mb-4">
                What Problems Do Pune Brands Face — And How Do Our{" "}
                <span className="text-[#0529a0]">Social Media Management Services</span> Solve
                Them?
              </h2>
              <p className="text-gray-600 text-base leading-relaxed max-w-3xl">
                These are the five most common situations we hear from Pune business owners who contact us after managing social media in-house or through a general-purpose digital marketing vendor.
              </p>
            </div>

            {/* Pair 1 */}
            <div className="grid md:grid-cols-2 gap-5 mb-6">
              <div className="bg-[#F8FAFC] border border-gray-100 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 min-w-[36px] rounded-lg bg-red-50 flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                  </div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-gray-400">
                    Problem 1
                  </p>
                </div>
                <p className="text-gray-800 text-sm font-medium leading-relaxed">
                  Posting regularly but getting zero business enquiries
                </p>
              </div>
              <div className="relative bg-[#eef2ff] border border-blue-100 rounded-2xl p-6 overflow-hidden">
                <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#f85415]" />
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 min-w-[36px] rounded-lg bg-[#0529a0]/10 flex items-center justify-center">
                    <Lightbulb className="w-4 h-4 text-[#0529a0]" />
                  </div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-[#0529a0]/70">
                    Foxaircomm's Fix
                  </p>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Most brands confuse content activity with content strategy. Businesses that treat social media as a posting activity lose to businesses that treat it as a performance marketing system.

                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We rebuild the approach around business goals — every post, Reel, and Story is mapped to a conversion objective, not just a content calendar date.
                </p>
              </div>
            </div>

            {/* Pair 2 */}
            <div className="grid md:grid-cols-2 gap-5 mb-6">
              <div className="bg-[#F8FAFC] border border-gray-100 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 min-w-[36px] rounded-lg bg-red-50 flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                  </div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-gray-400">
                    Problem 2
                  </p>
                </div>
                <p className="text-gray-800 text-sm font-medium leading-relaxed">
                  Running Facebook Ads with No Measurable Return on Spend

                </p>
              </div>
              <div className="relative bg-[#eef2ff] border border-blue-100 rounded-2xl p-6 overflow-hidden">
                <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#f85415]" />
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 min-w-[36px] rounded-lg bg-[#0529a0]/10 flex items-center justify-center">
                    <Lightbulb className="w-4 h-4 text-[#0529a0]" />
                  </div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-[#0529a0]/70">
                    Foxaircomm's Fix
                  </p>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Boosting posts is not advertising. As a dedicated Facebook Ads agency in Pune, we run structured Meta Ads campaigns — audience segmentation, custom creatives, A/B testing, retargeting — built around a defined cost per enquiry.

                </p>
              </div>
            </div>

            {/* Pair 3 */}
            <div className="grid md:grid-cols-2 gap-5 mb-6">
              <div className="bg-[#F8FAFC] border border-gray-100 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 min-w-[36px] rounded-lg bg-red-50 flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                  </div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-gray-400">
                    Problem 3
                  </p>
                </div>
                <p className="text-gray-800 text-sm font-medium leading-relaxed">
                  No Time to Manage Multiple Platforms Consistently
                </p>
              </div>
              <div className="relative bg-[#eef2ff] border border-blue-100 rounded-2xl p-6 overflow-hidden">
                <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#f85415]" />
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 min-w-[36px] rounded-lg bg-[#0529a0]/10 flex items-center justify-center">
                    <Lightbulb className="w-4 h-4 text-[#0529a0]" />
                  </div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-[#0529a0]/70">
                    Foxaircomm's Fix
                  </p>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Our full-service social media management services in Pune cover strategy, creative production, scheduling, community management, and reporting. Your team reviews results — we handle everything else.

                </p>
              </div>
            </div>

            {/* Pair 4 */}
            <div className="grid md:grid-cols-2 gap-5 mb-6">
              <div className="bg-[#F8FAFC] border border-gray-100 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 min-w-[36px] rounded-lg bg-red-50 flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                  </div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-gray-400">
                    Problem 4
                  </p>
                </div>
                <p className="text-gray-800 text-sm font-medium leading-relaxed">
                  No Visibility into What's Actually Working
                </p>
              </div>
              <div className="relative bg-[#eef2ff] border border-blue-100 rounded-2xl p-6 overflow-hidden">
                <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#f85415]" />
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 min-w-[36px] rounded-lg bg-[#0529a0]/10 flex items-center justify-center">
                    <Lightbulb className="w-4 h-4 text-[#0529a0]" />
                  </div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-[#0529a0]/70">
                    Foxaircomm's Fix
                  </p>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Reach and impressions tell you nothing about business performance. Monthly reporting covers leads generated, cost per lead, engagement rate, and conversion path from social to sale.

                </p>
              </div>
            </div>

            {/* Pair 5 */}
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-[#F8FAFC] border border-gray-100 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 min-w-[36px] rounded-lg bg-red-50 flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                  </div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-gray-400">
                    Problem 5
                  </p>
                </div>
                <p className="text-gray-800 text-sm font-medium leading-relaxed">
                  Competitor Brands are Growing Faster on Instagram — and You Don't Know Why

                </p>
              </div>
              <div className="relative bg-[#eef2ff] border border-blue-100 rounded-2xl p-6 overflow-hidden">
                <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#f85415]" />
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 min-w-[36px] rounded-lg bg-[#0529a0]/10 flex items-center justify-center">
                    <Lightbulb className="w-4 h-4 text-[#0529a0]" />
                  </div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-[#0529a0]/70">
                    Foxaircomm's Fix
                  </p>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  When a competitor outpaces you on social media, it's rarely about budget — it's strategy. We combine Reels-first content, paid amplification, and targeted influencer collaboration to build brand dominance in your specific niche.

                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  For Pune's mobile-first, value-driven audience, generic national-agency content doesn't convert. Local context does.

                </p>
              </div>
            </div>

          </div>
        </section>

        {/* PROCESS */}
        <section className="py-20 bg-[#F8FAFC] px-4">
          <div className="max-w-7xl mx-auto">

            {/* Section Header */}
            <div className="mb-12">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-[#0529a0] bg-[#eef2ff] border border-blue-100 px-3.5 py-1.5 rounded-full mb-4">
                Process
              </span>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl leading-snug">
                  HOW DOES {" "}
                  <span className="text-[#0529a0]">FOXAIRCOMM RUN A SOCIAL MEDIA CAMPAIGN</span>{" "}
                  — STEP BY STEP?
                </h2>
                <p className="text-sm text-gray-500 max-w-xs md:text-right leading-relaxed">
                  Our campaign process eliminates guesswork at every stage. Every client, whether a Hinjewadi startup or a Viman Nagar retail brand, goes through the same structured system, adapted to their industry and audience.

                </p>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

              {/* Step 1 */}
              <div className="relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#0529a0]/20 hover:shadow-md transition-all duration-200 overflow-hidden group">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#eef2ff] flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#0529a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <span className="text-5xl font-black text-gray-100 group-hover:text-[#eef2ff] transition-colors leading-none select-none">
                    01
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#0529a0] mb-2">
                  Discovery Call
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  We understand your business, target audience, competitive landscape, and current social media performance before making any recommendations.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#0529a0]/20 hover:shadow-md transition-all duration-200 overflow-hidden group">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#eef2ff] flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#0529a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 9m0 8V9m0 0L9 7" />
                    </svg>
                  </div>
                  <span className="text-5xl font-black text-gray-100 group-hover:text-[#eef2ff] transition-colors leading-none select-none">
                    02
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#0529a0] mb-2">
                  Audit & Strategy
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Full audit of platforms and ad accounts. We identify what's working, what's wasting budget, and where the competitive opportunity lies in your market.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#0529a0]/20 hover:shadow-md transition-all duration-200 overflow-hidden group">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#eef2ff] flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#0529a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                  <span className="text-5xl font-black text-gray-100 group-hover:text-[#eef2ff] transition-colors leading-none select-none">
                    03
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#0529a0] mb-2">
                  Content Planning
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  A monthly calendar built around your business calendar — product launches, seasonal offers, Pune local events — mapped to platform-specific formats.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#0529a0]/20 hover:shadow-md transition-all duration-200 overflow-hidden group">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#eef2ff] flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#0529a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </div>
                  <span className="text-5xl font-black text-gray-100 group-hover:text-[#eef2ff] transition-colors leading-none select-none">
                    04
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#0529a0] mb-2">
                  Creative Production
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Copywriting, design, Reels scripting, and editing all in-house. Brand tone and visual identity are maintained across every deliverable — no drift between platforms, creators, or campaign phases.
                </p>
              </div>

              {/* Step 5 */}
              <div className="relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#0529a0]/20 hover:shadow-md transition-all duration-200 overflow-hidden group">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#eef2ff] flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#0529a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <span className="text-5xl font-black text-gray-100 group-hover:text-[#eef2ff] transition-colors leading-none select-none">
                    05
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#0529a0] mb-2">
                  Campaign Launch
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Meta Ads go live with structured targeting, creative variants, and conversion tracking in place from day one — not added later.
                </p>
              </div>

              {/* Step 6 */}
              <div className="relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#0529a0]/20 hover:shadow-md transition-all duration-200 overflow-hidden group">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#eef2ff] flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#0529a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <span className="text-5xl font-black text-gray-100 group-hover:text-[#eef2ff] transition-colors leading-none select-none">
                    06
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#0529a0] mb-2">
                  Weekly Optimisation
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Campaign performance is reviewed weekly. Targeting, creative, and bidding are adjusted on live data. Nothing runs on autopilot.
                </p>
              </div>

              {/* Step 7 */}
              <div className="relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#0529a0]/20 hover:shadow-md transition-all duration-200 overflow-hidden group">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#eef2ff] flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#0529a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h4m0 0l-3-3m3 3l-3 3M5 7h.01M5 12h.01M5 17h.01" />
                    </svg>
                  </div>
                  <span className="text-5xl font-black text-gray-100 group-hover:text-[#eef2ff] transition-colors leading-none select-none">
                    07
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#0529a0] mb-2">
                  Monthly Reporting
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Reach, engagement, leads generated, ad spend ROI, and next-month recommendations. You know exactly what your investment produced.
                </p>
              </div>

              {/* Step 8 — highlighted */}
              <div className="relative bg-[#0529a0] border border-[#0529a0] rounded-2xl p-6 hover:shadow-md transition-all duration-200 overflow-hidden group">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <span className="text-5xl font-black text-white/10 leading-none select-none">
                    08
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  Scale
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Once a campaign formula is proven, we scale it with more budget, new platforms, and broader audiences without losing efficiency.
                </p>
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#f85415] rounded-b-2xl" />
              </div>

            </div>
          </div>
        </section>



        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">

            {/* Header */}
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-bold tracking-widest text-[#f85415] uppercase">
                Realistic Expectations
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-3 mb-5 leading-tight">
                What results can a business realistically expect from social media marketing?
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Honest answer: results depend on your industry, competition level, ad budget, and consistency of strategy. What Foxaircomm commits to is a measurable, improving performance curve — not a vanity metrics dashboard. Here's what typical clients see within 90 days.
              </p>
            </div>

            {/* Stat Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
              <div className="bg-[#eef2ff] rounded-2xl p-6">
                <div className="text-4xl font-black text-[#0529a0] mb-2">30–60%</div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Increase in organic reach through consistent Reels and structured posting
                </p>
              </div>
              <div className="bg-[#eef2ff] rounded-2xl p-6">
                <div className="text-4xl font-black text-[#0529a0] mb-2">2–4×</div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Enquiry volume increase through Meta Ads vs. unmanaged boosting
                </p>
              </div>
              <div className="bg-[#eef2ff] rounded-2xl p-6">
                <div className="text-4xl font-black text-[#0529a0] mb-2">20–40%</div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  CPL reduction as campaigns are optimised over the first 4–6 weeks
                </p>
              </div>
              <div className="bg-[#0529a0] rounded-2xl p-6 relative overflow-hidden">
                <div className="text-4xl font-black text-white mb-2">5.3×</div>
                <p className="text-sm text-white/80 leading-relaxed">
                  Avg. ROAS for e-commerce and retail clients on Meta Ads
                </p>
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#f85415]" />
              </div>
            </div>

            <p className="text-xs text-gray-400 mb-16 -mt-10 max-w-2xl">
              Figures represent internal campaign averages across active clients in retail, real estate, healthcare, and service verticals. Individual results vary based on industry, competition, ad budget, and campaign duration.
            </p>

            {/* Campaign Snapshots */}
            <div className="mb-16">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Recent Campaign Snapshots
              </h3>
              <div className="grid md:grid-cols-3 gap-5">

                <div className="border border-gray-100 rounded-2xl p-6 hover:border-[#0529a0]/20 hover:shadow-md transition-all duration-200">
                  <span className="text-xs font-bold tracking-widest text-[#f85415] uppercase">
                    Real Estate · Pune
                  </span>
                  <p className="text-base font-bold text-gray-900 mt-3 mb-2 leading-snug">
                    327 qualified leads generated in 60 days via Meta Ads
                  </p>
                  <p className="text-sm text-gray-500">
                    CPL ₹284 — down from ₹810 on previous agency's campaigns
                  </p>
                </div>

                <div className="border border-gray-100 rounded-2xl p-6 hover:border-[#0529a0]/20 hover:shadow-md transition-all duration-200">
                  <span className="text-xs font-bold tracking-widest text-[#f85415] uppercase">
                    Healthcare Clinic · PCMC
                  </span>
                  <p className="text-base font-bold text-gray-900 mt-3 mb-2 leading-snug">
                    42% lower cost per appointment booking within 45 days
                  </p>
                  <p className="text-sm text-gray-500">
                    Instagram Reels drove 68% of total inbound enquiries
                  </p>
                </div>

                <div className="border border-gray-100 rounded-2xl p-6 hover:border-[#0529a0]/20 hover:shadow-md transition-all duration-200">
                  <span className="text-xs font-bold tracking-widest text-[#f85415] uppercase">
                    D2C Retail · Viman Nagar
                  </span>
                  <p className="text-base font-bold text-gray-900 mt-3 mb-2 leading-snug">
                    5.3× ROAS on Facebook and Instagram ad spend over 3 months
                  </p>
                  <p className="text-sm text-gray-500">
                    Shifted from static posts to a Reels-first strategy in Month 1
                  </p>
                </div>

              </div>
            </div>

            {/* Observation Callout */}
            <div className="bg-gray-50 border-l-4 border-[#f85415] rounded-2xl p-8">
              <span className="text-xs font-bold tracking-widest text-[#0529a0] uppercase">
                Foxaircomm Observation
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-2 mb-4">
                Why Most Pune Social Media Campaigns Fail
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The most common failure pattern: businesses launch Meta Ads using boosted posts without audience segmentation, run them for 2–3 weeks with no creative variation, then conclude "social media ads don't work." In 90% of cases we audit, the problem is setup, not platform. Structured campaigns with defined objectives, custom audiences, and weekly creative rotation outperform boosted posts by 3–5× on cost per lead — in every audit we have run on underperforming accounts.
              </p>
            </div>

          </div>
        </section>



        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">

            {/* Header */}
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-bold tracking-widest text-[#f85415] uppercase">
                The Difference
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-3 mb-5 leading-tight">
                Why choose Foxaircomm over other social media marketing companies in Pune?
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                There are dozens of SMM companies in Pune and PCMC offering the same list of services. What separates Foxaircomm is the operating model — specifically, what we refuse to do.
              </p>
            </div>

            {/* Reasons list */}
            <div className="space-y-4">

              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-7 flex gap-5 hover:border-[#0529a0]/20 hover:shadow-md transition-all duration-200">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#eef2ff] text-[#0529a0] text-sm font-bold flex items-center justify-center">
                  01
                </span>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    Performance Before Aesthetics
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We build content and campaigns around conversion goals. What looks good and what generates leads are not always the same. We optimise for enquiries first, then get the creative right.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-7 flex gap-5 hover:border-[#0529a0]/20 hover:shadow-md transition-all duration-200">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#eef2ff] text-[#0529a0] text-sm font-bold flex items-center justify-center">
                  02
                </span>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    Deep Local Market Understanding
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    We know how the Pune consumer searches, what they respond to, and what moves them from discovery to enquiry across categories like real estate, healthcare, F&B, and retail.
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Generic national-agency templates don't work for PCMC markets the way local context does. That's the advantage of working with Pune social media specialists, not a city-agnostic vendor managing 200 clients across India.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-7 flex gap-5 hover:border-[#0529a0]/20 hover:shadow-md transition-all duration-200">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#eef2ff] text-[#0529a0] text-sm font-bold flex items-center justify-center">
                  03
                </span>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    No Account Manager Handoffs
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-2">
                    Your brand is managed by the same strategist who builds your campaigns, not transferred between junior executives after onboarding.
                  </p>
                  <p className="text-sm font-semibold text-[#0529a0]">
                    One contact, full accountability.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-7 flex gap-5 hover:border-[#0529a0]/20 hover:shadow-md transition-all duration-200">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#eef2ff] text-[#0529a0] text-sm font-bold flex items-center justify-center">
                  04
                </span>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    Weekly Transparency, Not Monthly Surprises
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    You receive weekly performance updates, not just a monthly report that tells you what already happened and can no longer be corrected. Problems are caught and fixed in-flight.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-7 flex gap-5 hover:border-[#0529a0]/20 hover:shadow-md transition-all duration-200">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#eef2ff] text-[#0529a0] text-sm font-bold flex items-center justify-center">
                  05
                </span>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    Platform-Native Content as Standard
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We don't repurpose the same creative across Instagram, Facebook, and LinkedIn. Each platform gets content built specifically for how its algorithm and audience behave in the Pune market.
                  </p>
                </div>
              </div>

              {/* Highlighted final reason */}
              <div className="bg-[#0529a0] rounded-2xl p-6 md:p-7 flex gap-5 relative overflow-hidden">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-white/10 text-white text-sm font-bold flex items-center justify-center">
                  06
                </span>
                <div>
                  <h3 className="text-base font-bold text-white mb-2">
                    Performance Marketing Agency in Pune, Not Just a Content Team
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-2">
                    Foxaircomm functions as both a social media management company in Pune and a performance marketing agency in Pune.
                  </p>
                  <p className="text-sm text-white/80 leading-relaxed">
                    Organic content and paid campaigns are built as one integrated system because content without paid amplification limits reach, and paid campaigns without strong organic content inflate costs.
                  </p>
                  <p className="text-sm font-semibold text-white mt-3">
                    One team, one performance system.
                  </p>
                </div>
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#f85415]" />
              </div>

            </div>
          </div>
        </section>


        <section className="py-20 bg-[#F8FAFC] px-4">
          <div className="max-w-7xl mx-auto overflow-x-auto">

            <SectionHeader
              badge="Comparison"
              title="SMM Company in Pune, Freelancer, or In-House — Which Model Is Right for Your Business?"
            />

            <p className="text-base text-gray-600 max-w-3xl mb-10 leading-relaxed">
              This is a real decision every Pune business owner faces before investing in social media marketing services. Here's an honest comparison.
            </p>

            <table className="w-full border-collapse bg-white rounded-3xl overflow-hidden">
              <thead className="bg-[#0529a0] text-white">
                <tr>
                  <th className="p-5 text-left">Feature</th>
                  <th className="p-5 text-left">Freelancer</th>
                  <th className="p-5 text-left">In-House Hire</th>
                  <th className="p-5 text-left bg-[#f85415]">Foxaircomm (Agency)</th>
                </tr>
              </thead>

              <tbody>

                {[
                  [
                    "Strategy Depth",
                    "Execution-focused",
                    "Good execution, weak advertising strategy",
                    "Full strategy + performance marketing",
                  ],
                  [
                    "Meta Ads Expertise",
                    "Varies widely",
                    "Rarely included",
                    "Dedicated Meta Ads Manager",
                  ],
                  [
                    "Content Production",
                    "1–2 platforms",
                    "Strong but siloed",
                    "Design, copy, Reels — all in-house",
                  ],
                  [
                    "Analytics & Reporting",
                    "Basic, infrequent",
                    "Good if trained",
                    "Weekly + monthly KPI reporting",
                  ],
                  [
                    "Cost (Monthly)",
                    "₹8,000–₹25,000",
                    "₹35,000–₹60,000+",
                    "Full team at freelancer cost range",
                  ],
                  [
                    "Scalability",
                    "Limited bandwidth",
                    "One-person ceiling",
                    "Scales with your campaigns",
                  ],
                ].map((row, i) => (
                  <tr key={i} className="border-b">
                    <td className="p-5 font-semibold text-gray-900">{row[0]}</td>
                    <td className="p-5 text-gray-600">{row[1]}</td>
                    <td className="p-5 text-gray-600">{row[2]}</td>
                    <td className="p-5 text-[#0529a0] font-semibold bg-[#eef2ff]">
                      {row[3]}
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>

            <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl">
                For most Pune businesses spending{" "}
                <span className="font-semibold text-gray-900">₹20,000–₹80,000/month</span>{" "}
                on social media management and ads, an agency model delivers more output, more expertise, and more accountability than either alternative — at a comparable or lower all-in cost.
              </p>

              <a href="#contact"
                className="flex-shrink-0 inline-flex items-center gap-2 bg-[#0529a0] hover:bg-[#041f7a] text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors duration-200"
              >
                Request a custom proposal
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

          </div>
        </section>

        <section className="py-20 bg-[#F8FAFC] px-4">
          <div className="max-w-6xl mx-auto">

            {/* Section Header */}
            <div className="mb-12">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-[#0529a0] bg-[#eef2ff] border border-blue-100 px-3.5 py-1.5 rounded-full mb-4">
                Pricing
              </span>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl leading-snug">
                  Which Package Fits{" "}
                  <span className="text-[#0529a0]">Your Business?</span>
                </h2>
                <p className="text-sm text-gray-500 max-w-xs md:text-right leading-relaxed">
                  Transparent pricing tied to outcomes, not just deliverables.
                </p>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto rounded-3xl border border-gray-100 bg-white mb-6">
              <table className="w-full border-collapse min-w-[720px]">
                <thead>
                  <tr className="bg-[#0529a0] text-white">
                    <th className="p-5 text-left w-[22%]">Factor</th>
                    <th className="p-5 text-left">Starter</th>
                    <th className="p-5 text-left bg-[#f85415] relative">
                      <span className="absolute -top-3  mt-5 left-1/2 -translate-x-1/2 text-[9px] font-bold tracking-widest uppercase bg-white text-[#f85415] px-2.5 py-0.5 rounded-full">
                        Most Popular
                      </span>
                      Growth
                    </th>
                    <th className="p-5 text-left">Full-Scale</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Best for",
                      "New businesses building initial presence",
                      "Established SMEs ready to scale enquiries",
                      "Multi-location businesses or high ad-spend brands",
                    ],
                    [
                      "Platforms",
                      "1 platform (Instagram or Facebook)",
                      "2–3 platforms",
                      "Full platform suite + LinkedIn/YouTube",
                    ],
                    [
                      "Content",
                      "Organic posting + basic content calendar",
                      "Organic + Meta Ads management",
                      "Full integrated organic + paid system",
                    ],
                    [
                      "Reporting",
                      "Monthly",
                      "Weekly + monthly",
                      "Weekly + monthly + dedicated strategist",
                    ],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="p-5 font-semibold text-gray-900">{row[0]}</td>
                      <td className="p-5 text-gray-600">{row[1]}</td>
                      <td className="p-5 text-[#0529a0] font-medium bg-[#eef2ff]">{row[2]}</td>
                      <td className="p-5 text-gray-600">{row[3]}</td>
                    </tr>
                  ))}
                  <tr>
                    <td className="p-5 font-semibold text-gray-900">Typical monthly investment</td>
                    <td className="p-5">
                      <span className="text-lg font-black text-[#f85415]">₹15,000–₹25,000</span>
                    </td>
                    <td className="p-5 bg-[#eef2ff]">
                      <span className="text-lg font-black text-[#f85415]">₹25,000–₹50,000</span>
                    </td>
                    <td className="p-5">
                      <span className="text-lg font-black text-[#f85415]">₹50,000–₹80,000+</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mb-16">
              Not sure which tier fits?{" "}
              <a href="#audit" className="text-[#0529a0] font-semibold hover:underline">
                The free 48-hour audit
              </a>{" "}
              will tell you exactly where your business sits.
            </p>

            {/* Fit Check */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Is Foxaircomm the Right Fit for You?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-2xl">
                We work best with businesses that want social media to function as a revenue channel. This service may not be the right fit if:
              </p>

              <div className="space-y-3 mb-7">
                {[
                  "You're looking for viral content or follower growth without a business objective behind it",
                  "Your team doesn't have capacity to respond to enquiries within 24–48 hours — fast follow-up is what converts leads into sales",
                  "You're expecting overnight organic growth without consistent monthly investment",
                  "You need a single-platform, low-cost freelancer solution rather than an integrated strategy",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                    <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-6">
                If that sounds like where you are, an in-house hire or freelancer (see comparison above) may be a better starting point than a full agency engagement.
              </p>
            </div>

          </div>
        </section>



        <section className="py-20 bg-white px-4">
          <div className="max-w-6xl mx-auto">

            {/* Section Header */}
            <div className="mb-12 max-w-3xl">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-[#0529a0] bg-[#eef2ff] border border-blue-100 px-3.5 py-1.5 rounded-full mb-4">
                Service Areas
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
                Areas We Serve Across{" "}
                <span className="text-[#0529a0]">Pune & PCMC</span>
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                Foxaircomm provides social media marketing services in Pune across all major localities and business corridors. Our campaigns are built with location-specific context — not generic templates.
              </p>
            </div>

            {/* Locations Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {[
                ["Hinjewadi", "IT corridor startups and service businesses"],
                ["Baner", "Retail, F&B, fitness, and lifestyle brands"],
                ["Wakad", "Real estate, coaching, and professional services"],
                ["Viman Nagar", "D2C, retail, and hospitality brands"],
                ["Kharadi", "IT companies, B2B services, and real estate"],
                ["Aundh", "Premium retail, clinics, and education"],
                ["Koregaon Park", "F&B, hospitality, and lifestyle brands"],
                ["Pimple Saudagar", "Residential real estate and local services"],
                ["PCMC / Pimpri", "Manufacturing, healthcare, and education"],
                ["Chinchwad", "Industrial and professional services"],
                ["Ravet", "Emerging residential and retail corridor"],
                ["Talegaon", "Real estate, industrial, and township projects"],
                ["Camp / Shivajinagar", "Established businesses and professional firms"],
              ].map(([area, desc], i) => (
                <div
                  key={i}
                  className="flex items-start gap-3.5 bg-[#F8FAFC] border border-gray-100 rounded-2xl p-5 hover:border-[#0529a0]/20 hover:bg-[#eef2ff]/40 transition-colors duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-white border border-gray-100 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-[#0529a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-0.5">{area}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Extended reach note */}
            <div className="bg-[#0529a0] rounded-2xl p-6 md:p-7 relative overflow-hidden">
              <p className="text-sm md:text-[15px] text-white/85 leading-relaxed max-w-3xl">
                We also manage social media campaigns for businesses targeting Pune audiences from other cities, and for Pune-headquartered brands expanding into broader Maharashtra markets.
              </p>
              <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#f85415]" />
            </div>

          </div>
        </section>


        <section className="py-20 bg-[#F8FAFC] px-4">
          <div className="max-w-6xl mx-auto">

            {/* Section Header */}
            <div className="mb-12 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-[#0529a0] bg-[#eef2ff] border border-blue-100 px-3.5 py-1.5 rounded-full mb-4">
                Client Voices
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                What Our{" "}
                <span className="text-[#0529a0]">Clients Say</span>
              </h2>
            </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-3 gap-5">

              <div className="relative bg-white border border-gray-100 rounded-2xl p-7 hover:border-[#0529a0]/20 hover:shadow-md transition-all duration-200 flex flex-col">
                <svg className="w-8 h-8 text-[#eef2ff] mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 7.32c-3.912 2.16-6.352 5.68-6.352 9.6 0 3.28 2.16 5.6 4.88 5.6 2.56 0 4.48-2 4.48-4.4 0-2.24-1.6-3.92-3.68-4.16-.24-.04-.4-.08-.4-.24 0-1.6 2.16-3.76 4.32-4.72l-3.248-1.68zm14.4 0c-3.92 2.16-6.36 5.68-6.36 9.6 0 3.28 2.16 5.6 4.88 5.6 2.56 0 4.48-2 4.48-4.4 0-2.24-1.6-3.92-3.68-4.16-.24-.04-.4-.08-.4-.24 0-1.6 2.16-3.76 4.32-4.72l-3.24-1.68z" />
                </svg>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                  We'd been running Facebook Ads on our own for 8 months with no clear results. Foxaircomm restructured the entire campaign in the first two weeks. By month two, we had 94 qualified leads at a CPL we'd never seen before. The reporting alone changed how we think about marketing.
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm font-bold text-gray-900">Real Estate Developer</p>
                  <p className="text-xs text-gray-400 mt-0.5">Wakad, Pune</p>
                </div>
              </div>

              <div className="relative bg-white border border-gray-100 rounded-2xl p-7 hover:border-[#0529a0]/20 hover:shadow-md transition-all duration-200 flex flex-col">
                <svg className="w-8 h-8 text-[#eef2ff] mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 7.32c-3.912 2.16-6.352 5.68-6.352 9.6 0 3.28 2.16 5.6 4.88 5.6 2.56 0 4.48-2 4.48-4.4 0-2.24-1.6-3.92-3.68-4.16-.24-.04-.4-.08-.4-.24 0-1.6 2.16-3.76 4.32-4.72l-3.248-1.68zm14.4 0c-3.92 2.16-6.36 5.68-6.36 9.6 0 3.28 2.16 5.6 4.88 5.6 2.56 0 4.48-2 4.48-4.4 0-2.24-1.6-3.92-3.68-4.16-.24-.04-.4-.08-.4-.24 0-1.6 2.16-3.76 4.32-4.72l-3.24-1.68z" />
                </svg>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                  As a multi-location clinic in PCMC, we needed a social media team that understood healthcare marketing — not just design. Foxaircomm handled our Instagram Reels, Meta Ads, and Google Business Profile together. Appointment enquiries went up 38% in the first 45 days.
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm font-bold text-gray-900">Healthcare Clinic Owner</p>
                  <p className="text-xs text-gray-400 mt-0.5">Pimpri-Chinchwad</p>
                </div>
              </div>

              {/* Highlighted testimonial */}
              <div className="relative bg-[#0529a0] rounded-2xl p-7 hover:shadow-xl transition-all duration-200 flex flex-col overflow-hidden">
                <svg className="w-8 h-8 text-white/20 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 7.32c-3.912 2.16-6.352 5.68-6.352 9.6 0 3.28 2.16 5.6 4.88 5.6 2.56 0 4.48-2 4.48-4.4 0-2.24-1.6-3.92-3.68-4.16-.24-.04-.4-.08-.4-.24 0-1.6 2.16-3.76 4.32-4.72l-3.248-1.68zm14.4 0c-3.92 2.16-6.36 5.68-6.36 9.6 0 3.28 2.16 5.6 4.88 5.6 2.56 0 4.48-2 4.48-4.4 0-2.24-1.6-3.92-3.68-4.16-.24-.04-.4-.08-.4-.24 0-1.6 2.16-3.76 4.32-4.72l-3.24-1.68z" />
                </svg>
                <p className="text-sm text-white/90 leading-relaxed mb-6 flex-1">
                  We tried two other agencies before Foxaircomm. Both delivered content. Neither delivered leads. The difference here is they actually measure what matters — cost per lead, ROAS, enquiry volume — not reach and impressions.
                </p>
                <div className="border-t border-white/15 pt-4">
                  <p className="text-sm font-bold text-white">D2C Brand Founder</p>
                  <p className="text-xs text-white/50 mt-0.5">Viman Nagar</p>
                </div>
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#f85415]" />
              </div>

            </div>
          </div>
        </section>






        {/* COMPARISON */}

        {/* FAQ */}
        <section className="py-20 bg-white px-4">
          <div className="max-w-5xl mx-auto">

            {/* Section Header */}
            <div className="mb-12">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-[#0529a0] bg-[#eef2ff] border border-blue-100 px-3.5 py-1.5 rounded-full mb-4">
                FAQs
              </span>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-lg leading-snug">
                  Frequently Asked Questions About{" "}
                  <span className="text-[#0529a0]">Social Media Marketing in Pune</span>
                </h2>
                <p className="text-sm text-gray-500 max-w-xs md:text-right leading-relaxed">
                  Can't find your answer? Reach out and we'll get back to you within one business day.
                </p>
              </div>
            </div>

            {/* FAQ Items */}
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  faq={faq}
                  isOpen={openIndex === i}
                  onToggle={() => toggle(i)}
                />
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-[#F8FAFC] border border-gray-100 rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#eef2ff] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#0529a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  Still have questions? We're happy to walk you through everything.
                </p>
              </div>
              <button className="shrink-0 text-sm font-semibold text-white bg-[#0529a0] px-5 py-2.5 rounded-xl hover:bg-blue-900 transition-colors duration-150 whitespace-nowrap">
                Talk to Us →
              </button>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section
          className="relative overflow-hidden rounded-2xl px-6 py-16 text-white"
          style={{ background: "linear-gradient(135deg, #0529a0 0%, #0a1a6b 60%, #07124f 100%)" }}
        >
          {/* Glow blobs */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(248,84,21,0.18) 0%, transparent 70%)" }}
          />
          <div
            className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(5,41,160,0.5) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 mx-auto max-w-4xl">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/20 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-orange-300">
              <span className="text-orange-500">↑</span>
              Free Performance Audit — 48hr Results
            </div>

            {/* Headline */}
            <h2
              className="mb-4 font-bold leading-tight text-white"
              style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
            >
              Work With Us — <span className="text-orange-500">Let's Scale</span>
              <br />
              Your Brand.
            </h2>

            {/* Subtext */}
            <p className="mb-10 max-w-xl text-base leading-relaxed text-white/70">
              We'll audit your current platforms, ad accounts, and competitive landscape and send you a clear, actionable report within 48 hours. No obligation, no sales pitch.
            </p>

            {/* Stat Cards */}
            <div className="mb-10 flex flex-wrap gap-4">
              {[
                { icon: "💰", value: "₹4Cr+", label: "Managed Meta Ads spend" },
                { icon: "🏢", value: "120+", label: "Active clients, Pune & PCMC" },
                { icon: "📅", value: "Since 2018", label: "Operating in Pune" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex min-w-[130px] flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-orange-500/20 text-lg">
                    {s.icon}
                  </div>
                  <div>
                    <div
                      className="text-xl font-bold leading-none text-white"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {s.value}
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-wider text-white/50">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Positioning line */}
            <div className="mb-10 rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm md:text-[15px] leading-relaxed text-white/80">
                As a performance-focused social media agency in Pune with{" "}
                <span className="font-semibold text-white">₹4Cr+</span> in managed Meta Ads spend since 2018 and{" "}
                <span className="font-semibold text-white">120+ active clients</span> across Pune and PCMC, Foxaircomm has the local expertise and campaign systems to move your brand from social media activity to social media revenue.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-orange-600 active:scale-95"
              >
                📅 Book Free SMM Consultation
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-3.5 text-sm font-medium text-white transition hover:border-white/60 hover:bg-white/10 active:scale-95"
              >
                📋 Request Free Audit
              </Link>
            </div>

            {/* Trust line */}
            <div className="mt-5 flex items-center gap-2 text-xs text-white/40">
              🛡️ No credit card required &nbsp;·&nbsp; Results within 48 hours &nbsp;·&nbsp; 100% free
            </div>

          </div>
        </section>

      </div>
    </>
  );
}

export default SocialMediaMarketing;