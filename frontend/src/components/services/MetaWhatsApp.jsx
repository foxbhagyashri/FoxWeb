import { useState } from "react";
import { Link } from "react-router-dom";
import EnquiryPopup from "../Enquirypopup";
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
  Smartphone,
  ShieldCheck,
  HelpCircle,
  UserX,
  Ban,
  Database,
  CheckCircle2,
  Users, IndianRupee, Activity, Globe, BadgeCheck, ClipboardCheck, FileCheck, Settings, Landmark, Truck, Plane, MessageSquare, Cloud
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
    question: "How do I get the Green Tick on WhatsApp Business in Pune?",
    answer:
      "The Green Tick requires an active WhatsApp Business API account set up through a WhatsApp API implementation partner.Once your API is configured, your partner submits your business documentation and display name to Meta for review.Approval typically takes 3–7 business days, subject to Meta's review queue at the time of submission.",
  },
  {
    question: "Can I have both the Green Tick and Blue Checkmark on the same WhatsApp account?",
    answer:
      "Yes — they are not mutually exclusive. The Green Tick is tied to your API account and awarded after Meta's business identity review. The Blue Checkmark is activated separately through Meta's subscription programme and can be added to the same account independently. Many established businesses carry both badges.",
  },
  {
    question: "Is WhatsApp Business API free to use?",
    answer:
      "The API does not carry a fixed monthly licence fee, but Meta charges per conversation based on message category: marketing, utility, authentication, or service.Setup and configuration through an implementation partner carry a one-time service fee. There are no hidden ongoing charges on Fox Aircomm's side.",
  },
  {
    question: "What causes WhatsApp verification to take longer than expected?",
    answer:
      "The most common delay factors are a display name that does not match registered business documentation, a Business Manager account carrying prior policy flags, a business category requiring additional scrutiny from Meta, or incomplete documentation submitted at the application stage. A pre-submission audit resolves each of these before filing.",
  },
  {
    question: "Do I need WhatsApp API in Pune to send bulk messages to customers?",
    answer:
      "Yes. WhatsApp API in Pune/anywhere is the only policy-compliant route for sending broadcast messages to opted-in contacts at scale.Bulk messaging through unofficial tools or third-party workarounds violates WhatsApp's terms of service and carries a permanent account ban risk with no reinstatement path.",
  },
  {
    question: "What is the difference between the WhatsApp Business App and the WhatsApp Business API?",
    answer:
      "The Business App is a standalone mobile application with no API access, no automation capability, and no eligibility for Green Tick verification.The API enables multi-agent access, chatbot integration, broadcast messaging, CRM connectivity, and Meta verification, none of which are available on the standard app.",
  },
  {
    question: "Can Fox Aircomm manage my verification if my business is outside Pune?",
    answer:
      "Yes. Fox Aircomm manages WhatsApp Business API setup and Meta verification for businesses across Maharashtra and Pan-India. Eligibility is determined by your business registration and Meta's criteria — not your physical location.",
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

function MetaWhatsApp() {

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (

    <>
      <Helmet>
        <title>Social Media Marketing Agency in Pune | Fox Aircomm</title>
        <meta name="description" content="Fox Aircomm is a social media marketing agency in Pune managing Instagram and Facebook strategy, content and growth for brands that want real engagement." />
      </Helmet>

      <EnquiryPopup />

      <div className="overflow-hidden bg-white">

        {/* HERO */}
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap');
        .smm-display { font-family: 'Sora', sans-serif; }
        .smm-body { font-family: 'Inter', sans-serif; }
      `}</style>

        {/* ── Breadcrumbs ── */}
        {/* <Breadcrumbs
          eyebrow="Social Media Marketing Agency · Pune"
          title="Social Media Marketing"
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Social Media Marketing" },
          ]}
        /> */}

        {/* ── What is social media marketing? ── */}
        <section className="smm-body bg-[#052ba7] py-10 px-4">
          <div className="container mx-auto px-6 lg:px-8 grid lg:grid-cols-[1.4fr_1fr] gap-16 items-center">

            {/* Left: copy */}
            <div>
              <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-white bg-[#0529a0] px-3.5 py-1.5 rounded-full mb-5">
                The Basics
              </span>
              <h1 className="smm-display text-4xl md:text-4xl font-bold text-gray-100 mb-2 leading-snug">
                Meta Verified WhatsApp Business in Pune — Build Trust Before You Send the First Message
              </h1>
              <div className="w-16 h-1 rounded-full bg-[#f85415] mb-6"></div>
              <p className="text-gray-100 text-base leading-relaxed mb-4">
                Every WhatsApp conversation begins with a split-second decision — is this the business I actually know, or just another unknown number?
              </p>
              <p className="text-gray-100 text-base leading-relaxed mb-4 text-justify">
                Meta Verification answers that question before your customer even asks.
              </p>
              <p className="text-gray-100 text-base leading-relaxed mb-8 text-justify">
                We help Pune businesses get verified through the WhatsApp Business API — Green Tick for established brands, Blue Checkmark through Meta's subscription programme. Hence, customers recognise your business before they read a single message.
              </p>

              <div className="flex flex-wrap gap-3 mt-4">
                <Link
                  to="tel:+919970650797"
                  className="bg-[#f85415] hover:bg-orange-600 transition-colors text-white font-semibold px-7 py-3.5 rounded-xl text-sm inline-flex items-center gap-2"
                >
                  Check If Your Business Qualifies <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: illustration panel */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-sm rounded-[2.5rem] overflow-hidden">
                <img src="/Meta Verified_ Grow Your Business.png" alt="Meta Verified WhatsApp Business" />
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
                Pune & PCMC clients served
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
                Meta Ads spend managed  since 2018
              </span>
            </div>

            <div className="flex flex-col items-center text-center">
              <Timer className="w-5 h-5 text-[#f85415] mb-2" />
              <span className="smm-display block text-2xl font-bold text-gray-900">48-hr</span>
              <span className="block text-[11px] text-gray-500 mt-1 leading-tight">
                hour free audit turnaround
              </span>
            </div>

          </div>
        </section>

        {/* ── Hero ── */}
        <section
          className="smm-body relative isolate overflow-hidden bg-cover bg-center px-4 py-20 before:absolute before:inset-0 before:-z-10 before:bg-[#0529a0]/80"
          style={{ backgroundImage: "url('/background.jfif')" }}
        >
          {/* subtle dot grid texture */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          ></div>

          <div className="relative max-w-6xl mx-auto">

            {/* H2 */}
            <h2 className="smm-display text-2xl md:text-3xl font-bold text-white leading-tight mb-5 max-w-3xl">
              What Is Meta Verified WhatsApp Business —{" "}
              <span className="text-[#f85415]">and How Does the Verification Process Work?</span>
            </h2>

            {/* Intro copy */}
            <p className="text-white text-base leading-relaxed mb-3 max-w-4xl">
              Meta Verification is a formal process through which Meta confirms that a WhatsApp Business account belongs to a legitimate, policy-compliant organisation.
            </p>
            <p className="text-white text-base leading-relaxed mb-3 max-w-4xl">
              It is not automatic — businesses must work with a WhatsApp API implementation partner, meet Meta’s eligibility criteria, and pass a business identity review.
            </p>
            <p className="text-white text-base leading-relaxed mb-12 max-w-4xl">
              Once approved, your business receives a visible verification badge that helps customers identify your account as genuine before they engage.
            </p>

            {/* H3 — Three tiers */}
            <h3 className="smm-display text-xl md:text-2xl font-bold text-white leading-snug mb-3 max-w-3xl">
              WhatsApp App vs WhatsApp Business App vs WhatsApp Business API — which tier are you on?
            </h3>
            <p className="text-white text-base leading-relaxed mb-6 max-w-4xl">
              Most businesses realise they need an upgrade only when they hit a wall — volume they cannot handle, customers they cannot reach, or a number that looks unofficial. Here is how the three tiers differ:
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {[
                {
                  icon: Smartphone,
                  title: "WhatsApp App",
                  tag: "Personal use",
                  text: "Built for individuals. No business profile, no catalogue, and no pathway to Meta Verification. Not designed for business communication at any scale.",
                },
                {
                  icon: Briefcase,
                  title: "WhatsApp Business App",
                  tag: "Small businesses",
                  text: "Adds a business profile, quick replies, and a product catalogue. Supports limited multi-device access on one primary number. No API connectivity, no automation, and no eligibility for either the Green Tick or Blue Checkmark.",
                },
                {
                  icon: ShieldCheck,
                  title: "WhatsApp Business API",
                  tag: "Growing businesses — Verification eligible",
                  text: "The only tier through which Green Tick verification is available. Enables multi-agent access, WhatsApp Chatbot, broadcast messaging to opted-in contacts, WhatsApp Cloud API for cloud-hosted infrastructure, and API integration with your CRM or existing tech stack.",
                },
              ].map(({ icon: Icon, title, tag, text }) => (
                <div
                  key={title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/[0.08] shadow-lg shadow-black/25 hover:shadow-orange-500/20 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-orange-500/15 text-orange-400 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-white font-semibold text-base mb-1">{title}</h4>
                  <p className="text-orange-400 text-xs font-semibold uppercase tracking-wider mb-3">{tag}</p>
                  <p className="text-white text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            {/* H3 — Eligibility */}
            <h3 className="smm-display text-xl md:text-2xl font-bold text-white leading-snug mb-3 max-w-3xl">
              Who Needs Meta Verified WhatsApp — and What Are the Real Eligibility Requirements?
            </h3>
            <p className="text-white text-base leading-relaxed mb-6 max-w-4xl">
              Meta does not approve every business that applies. These are the businesses that genuinely qualify and the ones most likely to see a meaningful difference in customer response:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                {
                  title: "You are operating on the WhatsApp Business API",
                  text: "Green Tick verification is not available on the standard app. API setup through an implementation partner is a mandatory first step, not optional.",
                },
                {
                  title: "Your business is a registered legal entity",
                  text: "Meta’s review requires verifiable business documentation. Unregistered setups face significantly higher rejection rates regardless of business size or volume.",
                },
                {
                  title: "Your display name matches your brand documentation",
                  text: "Generic or mismatched names are among the most common rejection points across both the Green Tick and Blue Checkmark applications.",
                },
                {
                  title: "You operate in a Meta-approved business category",
                  text: "Restricted industries face additional scrutiny and may require category-specific documentation before the review can proceed.",
                },
              ].map(({ title, text }) => (
                <div
                  key={title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-start gap-3.5 hover:bg-white/[0.08] shadow-lg shadow-black/25 hover:shadow-orange-500/20 transition-all duration-300"
                >
                  <div className="w-9 h-9 min-w-[36px] rounded-lg bg-orange-500/15 text-orange-400 flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-base mb-1">{title}</h4>
                    <p className="text-white text-sm leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* H3 — Green Tick vs Blue Checkmark */}
            <h3 className="smm-display text-xl md:text-2xl font-bold text-white leading-snug mb-3 max-w-3xl">
              Green Tick vs Blue Checkmark — Two Verification Paths, Two Different Criteria
            </h3>
            <p className="text-white text-base leading-relaxed mb-6 max-w-4xl">
              These are two distinct Meta programmes. Most businesses assume they mean the same thing, but they do not:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-white/10 shadow-lg shadow-black/25 mb-8">
              <table className="w-full min-w-[640px] text-left text-sm text-white">
                <thead>
                  <tr className="bg-white/10">
                    <th className="p-4 font-semibold"></th>
                    <th className="p-4 font-semibold text-[#f85415]">Green Tick</th>
                    <th className="p-4 font-semibold text-[#f85415]">Blue Checkmark</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Programme type", "Official Business Account", "Meta Verified (subscription)"],
                    ["Requires WhatsApp API", "Yes — mandatory", "No"],
                    ["How to apply", "Through an API implementation partner", "Directly through Meta"],
                    ["Cost", "No subscription fee", "Monthly subscription fee"],
                    ["Approval process", "Meta review — not guaranteed", "Subscription-based — more accessible"],
                    ["Best suited for", "Established brands on the API", "SMBs wanting faster verified presence"],
                    ["Unlocks API features", "Yes, when paired with API setup", "No — API requires separate setup"],
                  ].map(([label, green, blue]) => (
                    <tr key={label} className="border-t border-white/10 hover:bg-white/[0.05] transition-colors">
                      <td className="p-4 font-semibold">{label}</td>
                      <td className="p-4">{green}</td>
                      <td className="p-4">{blue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-white text-base leading-relaxed max-w-4xl">
              Not sure which path your business qualifies for? <strong>Fox Aircomm</strong> reviews eligibility across both programmes before any application is submitted — so you apply for the right one the first time.
            </p>

          </div>
        </section>

        {/* DIFFERENCE */}
        {/* ================= SECTION 4: VERIFICATION PROCESS ================= */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">

            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
              The Process
            </div>

            {/* H2 */}
            <h2 className="font-serif text-3xl font-semibold text-gray-900 leading-snug mb-10 max-w-3xl">
              How Does the WhatsApp Verification Process Actually Work, and What Should You Expect at Each Stage?
            </h2>

            {/* ---------- Green Tick steps ---------- */}
            <div className="mb-12">
              <h3 className="inline-block text-md font-medium text-emerald-900 bg-emerald-50 rounded-md px-2.5 py-1 tracking-wide mb-4">
                Step-by-Step: What Happens During the Green Tick Application
              </h3>

              <p className="text-md text-gray-700 leading-relaxed mb-6 max-w-3xl">
                Most businesses assume verification is a simple form submission. It is a structured Meta review where your business identity, display name, and API configuration are each assessed independently before any badge is issued.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Eligibility check", text: "API setup confirmed, Business Manager linked, display name reviewed against brand documentation" },
                  { label: "Documentation submission", text: "Business registration certificate, category classification, and identity verification materials" },
                  { label: "Meta review period", text: "Typically 3–7 business days with no direct communication from Meta during review" },
                  { label: "Outcome", text: "Green Tick issued, or a rejection reason code returned that informs a structured resubmission" },
                ].map(({ label, text }, i) => (
                  <div key={label} className="flex flex-col gap-3 bg-gray-50 rounded-xl p-5 border border-gray-100">
                    <div className="w-8 h-8 rounded-[10px] bg-emerald-50 flex items-center justify-center text-emerald-700 text-sm font-semibold">
                      {i + 1}
                    </div>
                    <p className="text-md font-semibold text-gray-900">{label}</p>
                    <p className="text-md text-gray-700 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ---------- Blue Tick pathway ---------- */}
            <div className="mb-12">
              <h3 className="inline-block text-md font-medium text-emerald-900 bg-emerald-50 rounded-md px-2.5 py-1 tracking-wide mb-4">
                WhatsApp Blue Tick Verification in Pune — How the Subscription Pathway Works
              </h3>

              <p className="text-md text-gray-700 leading-relaxed mb-4 max-w-3xl">
                WhatsApp Blue Tick Verification in Pune follows a distinct route — subscription activation through Meta Business Suite rather than a formal review queue.
              </p>
              <p className="text-md text-gray-700 leading-relaxed mb-6 max-w-3xl">
                The process is faster but requires accurate profile configuration to pass Meta’s automated checks.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Subscription activation on an eligible account through Meta Business Suite",
                  "Profile verification cross-checked against your registered business name and category",
                  "Badge typically visible within 24–72 hours of confirmed subscription activation",
                  "Ongoing subscription required — the badge remains active only while the subscription is maintained",
                ].map((text) => (
                  <div key={text} className="flex items-start gap-3 bg-gray-50 rounded-xl p-5 border border-gray-100">
                    <div className="w-8 h-8 min-w-[32px] rounded-[10px] bg-emerald-50 flex items-center justify-center text-emerald-700">
                      <Check className="w-4 h-4" />
                    </div>
                    <p className="text-md text-gray-700 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ---------- Rejections ---------- */}
            <div className="mb-12">
              <h3 className="inline-block text-md font-medium text-emerald-900 bg-emerald-50 rounded-md px-2.5 py-1 tracking-wide mb-4">
                Why Applications Get Rejected — and How to Avoid the Common Failure Points
              </h3>

              <p className="text-md text-gray-700 leading-relaxed mb-6 max-w-3xl">
                Rejection is not permanent, but it adds weeks to your timeline and requires a full resubmission. These are the most consistent failure points across both verification pathways:
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Display name does not match registered business documentation exactly as submitted",
                  "Business category falls under a Meta-restricted or additionally scrutinised industry",
                  "Business Manager account carries prior policy flags that trigger a hold during review",
                  "Incomplete or inconsistent documentation was submitted alongside the identity verification request",
                ].map((text) => (
                  <div key={text} className="flex items-start gap-3 bg-gray-50 rounded-xl p-5 border border-gray-100">
                    <div className="w-8 h-8 min-w-[32px] rounded-[10px] bg-orange-50 flex items-center justify-center text-[#f75415]">
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <p className="text-md text-gray-700 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ---------- Fox Aircomm-managed application (highlight panel) ---------- */}
            <div className="relative bg-[#f75415] rounded-2xl p-8 md:p-10 overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              ></div>

              <div className="relative">
                <h3 className="inline-block text-md font-medium text-white bg-white/10 border border-white/20 rounded-md px-2.5 py-1 tracking-wide mb-6">
                  What a Fox Aircomm-Managed Application Looks Like — as a WhatsApp Green Tick Provider in Pune
                </h3>

                <p className="text-md text-white leading-relaxed mb-6 max-w-2xl">
                  As a WhatsApp Green Tick Provider in Pune, Fox Aircomm builds rejection prevention into every application before anything is submitted to Meta — not after a rejection comes back.
                </p>

                <ul className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    "Pre-submission audit covering display name, documentation accuracy, and Business Manager health",
                    "Structured submission with supporting materials aligned to Meta’s current review requirements",
                    "Live status tracking during Meta’s review period with client updates at each stage",
                    "Post-approval configuration: number verification, webhook setup, and full account handover to your team",
                  ].map((text) => (
                    <li key={text} className="flex items-start gap-2.5 text-white text-sm leading-relaxed">
                      <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                      </span>
                      {text}
                    </li>
                  ))}
                </ul>

                <Link
                  to="tel:+919970650797"
                  className="inline-flex items-center gap-1.5 bg-white text-[#f75415] hover:bg-gray-100 transition-colors font-semibold px-6 py-3 rounded-xl text-sm"
                >
                  Start Your WhatsApp Verification Process
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </section>


        {/* ================= SECTION 5: SERVICES ================= */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">

            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
              Services
            </div>

            {/* H2 */}
            <h2 className="font-serif text-3xl font-semibold text-gray-900 leading-snug mb-10 max-w-3xl">
              WhatsApp Business Services by Fox Aircomm — a WhatsApp Business API Provider in Pune
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "WhatsApp Green Tick Verification",
                  intro: "We manage your Green Tick application from the Business Manager audit through to post-approval handover. You receive a verified, fully configured account ready for customer communication under your confirmed brand identity.",
                  points: [
                    "Pre-application Business Manager and documentation audit",
                    "Display name alignment against Meta’s current naming guidelines",
                    "Submission handling, status tracking, and rejection-response management if required",
                    "Verified account configuration and team handover upon approval",
                  ],
                },
                {
                  title: "WhatsApp Blue Checkmark Verification",
                  intro: "We assess your account eligibility, handle subscription activation, and confirm the badge is correctly live across Meta properties. You receive a verified profile with guidance on ongoing subscription maintenance.",
                  points: [
                    "Eligibility assessment against Meta’s active subscription programme criteria",
                    "Subscription activation and Business Suite account linking",
                    "Profile configuration reviewed ahead of Meta’s automated verification pass",
                    "Badge activation confirmation and cross-platform visibility check",
                  ],
                },
                {
                  title: "WhatsApp Business API Setup",
                  intro: "We configure your complete WABA environment — number registration, Business Suite linking, and webhook connectivity so your account is fully operational for multi-agent access and compliant outbound messaging from day one.",
                  points: [
                    "WABA creation and WhatsApp Business Account configuration",
                    "Phone number registration with two-factor authentication setup",
                    "Webhook and API endpoint configuration for your downstream platforms",
                    "Sandbox environment testing before production deployment sign-off",
                  ],
                },
                {
                  title: "WhatsApp Cloud API Integration",
                  intro: "We connect Meta’s Cloud API to your existing platforms and validate every integration point before go-live. You receive a fully tested, cloud-hosted API environment without on-premise server overhead.",
                  points: [
                    "Cloud API provisioning through Meta’s developer environment",
                    "System user creation and long-lived access token management",
                    "Message template submission and Meta approval coordination",
                    "End-to-end integration testing across your communication and operations stack",
                  ],
                },
                {
                  title: "WhatsApp Chatbot Development",
                  intro: "Businesses in Pune need a WhatsApp Chatbot built around their actual customer journey — not a generic auto-reply layer. We design and build logic-driven flows that handle volume, capture leads, and route to agents when needed.",
                  points: [
                    "Use-case scoping: FAQs, lead capture, appointment scheduling, or order tracking",
                    "Conversational flow design with decision-tree logic and fallback handling",
                    "Human escalation triggers configured for queries outside the bot’s defined scope",
                    "Post-launch performance tracking, reporting, and flow refinement",
                  ],
                },
                {
                  title: "Bulk WhatsApp Messaging",
                  intro: "We manage your broadcast workflow from HSM template creation through Meta approval to campaign execution. You receive compliant, trackable message campaigns delivered to your opted-in contact list every time.",
                  points: [
                    "HSM template drafting aligned to Meta’s formatting and content guidelines",
                    "Template submission to Meta with revision handling if required",
                    "Opted-in contact segmentation and campaign scheduling",
                    "Delivery, read receipt, and response reporting on campaign completion",
                  ],
                },
                {
                  title: "CRM & Third-Party Integration",
                  intro: "We connect your WhatsApp API to the platforms your team already works in so customer data flows automatically, no manual copying, no context gaps between systems.",
                  points: [
                    "CRM integration: Zoho, HubSpot, Salesforce, and similar platforms",
                    "Helpdesk connectivity: Freshdesk, Zendesk, and comparable tools",
                    "E-commerce and order management system linkage",
                    "Custom API bridge development for proprietary or legacy infrastructure",
                  ],
                },
              ].map(({ title, intro, points }) => (
                <div key={title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="inline-block text-md font-medium text-emerald-900 bg-emerald-50 rounded-md px-2.5 py-1 tracking-wide mb-4">
                    {title}
                  </h3>
                  <p className="text-md text-gray-700 leading-relaxed mb-4">{intro}</p>
                  <ul className="space-y-2.5">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-gray-700 leading-relaxed">
                        <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-emerald-50 flex items-center justify-center">
                          <Check className="w-2.5 h-2.5 text-emerald-700" strokeWidth={3} />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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
                The Problems
              </span>
              <h2 className="text-3xl md:text-3xl font-bold text-gray-900 max-w-3xl leading-snug">
                Why Pune Businesses Are Struggling Without WhatsApp Verification —{" "}
                <span className="text-[#0529a0]">And How Fox Aircomm Fixes It</span>
              </h2>
            </div>

            {/* Problems */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {[
                {
                  Icon: HelpCircle,
                  title: "Customers cannot tell your account from an unknown number",
                  problem: [
                    "An unverified account displays no badge and no confirmed business name in the chat header.",
                    "Customers have no platform-level confirmation that the message is from a legitimate business — so most do not open it.",
                  ],
                  fix: "Verification places your confirmed business name and badge in the chat before a single word is read. The decision to engage is made at first glance — not after a customer researches whether your number is real.",
                },
                {
                  Icon: UserX,
                  title: "Impersonators are using your brand name without consequence",
                  problem: [
                    "Creating a WhatsApp account with your business name requires no verification and no approval.",
                    "Fake accounts mislead customers, collect payments, and leave your business managing fallout from incidents you had no part in creating.",
                  ],
                  fix: "Meta verification binds your WhatsApp number to your registered business identity at the platform level — creating a clear, checkable distinction between your official account and any lookalike.",
                },
                {
                  Icon: Ban,
                  title: "Unofficial broadcast tools are putting your number at permanent risk",
                  problem: [
                    "Third-party bulk senders and non-API workarounds operate outside WhatsApp's terms of service.",
                    "Account bans are applied without notice, and most have no reinstatement path — meaning your entire contact history and business number are lost.",
                  ],
                  fix: "We configure your API with Meta-approved HSM templates and a fully compliant broadcast setup. Every campaign runs within policy with delivery tracking, response reporting, and zero suspension risk.",
                },
                {
                  Icon: Users,
                  title: "One agent managing everything creates backlogs that your customers feel directly",
                  problem: [
                    "Peak-hour query volume on a single-agent number means slower responses, missed conversations, and no accountability trail.",
                    "There is no way to track who responded, when, or whether the query was resolved at all.",
                  ],
                  fix: "We configure multi-agent access on your verified number so your team handles conversations simultaneously — each one assigned, tracked, and closed with full visibility for team leads and managers.",
                },
                {
                  Icon: Database,
                  title: "Every returning customer is treated like a first-time contact",
                  problem: [
                    "Without integration between WhatsApp and your CRM, there is no order history, no previous query log, and no customer record attached to the conversation.",
                    "Your team either asks the customer to repeat themselves or responds without the necessary context to actually help.",
                  ],
                  fix: "We connect your WhatsApp API directly to your CRM, so every conversation automatically updates the customer record. Your team opens every chat with complete context — no repetition, no information loss, no wasted time.",
                },
              ].map(({ Icon, title, problem, fix }, i) => (
                <div
                  key={title}
                  className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col"
                >
                  {/* Blue header bar */}
                  <div className="bg-[#0529a0] px-8 py-5 flex items-center gap-3">
                    <span className="w-7 h-7 min-w-[28px] rounded-full bg-white/10 border border-white/20 text-orange-400 text-sm font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <h3 className="text-white text-base font-bold leading-snug">
                      Problem {i + 1} — {title}
                    </h3>
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    {/* Problem copy */}
                    <div className="flex items-start gap-3.5 mb-6">
                      <div className="w-9 h-9 min-w-[36px] rounded-lg bg-[#eef2ff] text-[#0529a0] flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="space-y-3">
                        {problem.map((p) => (
                          <p key={p} className="text-md text-gray-600 leading-relaxed">
                            {p}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Fix panel */}
                    <div className="mt-auto bg-[#fff7f4] border border-orange-100 rounded-2xl p-5">
                      <p className="text-sm font-semibold text-[#f85415] tracking-wide uppercase mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        How Fox Aircomm fixes it
                      </p>
                      <p className="text-md text-gray-700 leading-relaxed text-justify">
                        {fix}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        <section id="why-fox-aircomm" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">

            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-[#0529a0] bg-[#0529a0]/8 px-3 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f85415] inline-block" />
              Why Choose Us
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl font-semibold text-gray-900 leading-snug mb-10 max-w-3xl">
              Why Pune Businesses Choose Fox Aircomm for Meta Verified WhatsApp Services
            </h2>

            {/* Feature grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                {
                  Icon: BadgeCheck,
                  name: "Experienced WhatsApp API Implementation Partner",
                  desc: "Fox Aircomm has onboarded 15+ businesses onto the WhatsApp Business API across Pune and Maharashtra, handling everything from number registration and verification submission to full API deployment and post-go-live account management.",
                  points: null,
                },
                {
                  Icon: MapPin,
                  name: "Dedicated Local Support in Pune",
                  desc: "Your account is managed by a Pune-based team, not a remote helpdesk. Queries are handled by people reachable during your working hours who understand the local business environment.",
                  points: [
                    "Named Pune-based contact for every stage of your engagement",
                    "Same-business-day response for all active accounts",
                    "In-person consultation available for enterprise clients",
                  ],
                },
                {
                  Icon: IndianRupee,
                  name: "Transparent Pricing — No Hidden Charges",
                  desc: "Every engagement starts with a written scope covering what is included, what is not, and what Meta charges separately before any work begins.",
                  points: [
                    "Itemised quotation covering setup, verification, and API configuration",
                    "Meta's conversation-based charges are explained clearly upfront",
                    "No retainer required for standalone verification engagements",
                  ],
                },
                {
                  Icon: Activity,
                  name: "Post-Verification Account Health Monitoring",
                  desc: "Verification is not a one-time event. Policy changes, number health flags, and template rejections require ongoing attention beyond go-live.",
                  points: [
                    "Regular account health checks against Meta's compliance guidelines",
                    "Proactive alerts for template policy updates affecting active campaigns",
                    "Early flagging of number quality issues before they affect deliverability",
                  ],
                },
                {
                  Icon: Globe,
                  name: "Pan-India Reach With Pune-Based Accountability",
                  desc: "We deliver API implementations across Maharashtra and Pan-India while maintaining the hands-on project management of a local team.",
                  points: [
                    "Scalable setup available for multi-location and franchise businesses",
                    "Pune-headquartered team with direct client ownership on every project",
                    "No outsourced delivery — all work managed in-house",
                  ],
                },
              ].map(({ Icon, name, desc, points }, i) => (
                <div
                  key={name}
                  className={`bg-white border border-gray-200 rounded-xl p-6 hover:border-[#f85415]/40 hover:shadow-sm transition-all duration-200 ${i === 0 ? "sm:col-span-2" : ""
                    }`}
                >
                  <div
                    className={`w-9 h-9 rounded-[10px] flex items-center justify-center mb-4 ${i % 2 === 0 ? "bg-[#0529a0]/8 text-[#0529a0]" : "bg-[#f85415]/10 text-[#f85415]"
                      }`}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1.5">{name}</h3>
                  <p className="text-md text-gray-600 leading-relaxed">{desc}</p>

                  {points && (
                    <ul className="space-y-2.5 mt-4">
                      {points.map((p) => (
                        <li key={p} className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed">
                          <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-[#f85415]/10 flex items-center justify-center">
                            <Check className="w-2.5 h-2.5 text-[#f85415]" strokeWidth={3} />
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-md font-medium text-white bg-[#0529a0] hover:bg-[#f85415] transition-colors rounded-lg px-5 py-3"
            >
              Speak to Our WhatsApp Verification Team
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>
        </section>


        {/* SERVICES */}
        {/* ================= SECTION 8: HOW IT WORKS ================= */}
        <section className="py-20 bg-white px-4">
          <div className="max-w-6xl mx-auto">

            {/* Section Header */}
            <div className="mb-12">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-[#0529a0] bg-[#eef2ff] border border-blue-100 px-3.5 py-1.5 rounded-full mb-4">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-3xl leading-snug">
                What to Expect When You Work With Fox Aircomm —{" "}
                <span className="text-[#0529a0]">Four Stages, No Surprises</span>
              </h2>
            </div>

            {/* Stages */}
            <div className="space-y-6">
              {[
                {
                  Icon: ClipboardCheck,
                  stage: "Stage 1",
                  title: "Free Eligibility Consultation",
                  text: "You share your business details. We assess whether your setup qualifies for the Green Tick, Blue Checkmark, or both and confirm exactly what needs to be in place before submission.",
                  points: [
                    "You receive: a written eligibility verdict and a clear action list",
                    "Completed within one working day of first contact",
                    "No commitment required at this stage",
                  ],
                },
                {
                  Icon: FileCheck,
                  stage: "Stage 2",
                  title: "Document Preparation & Meta Submission",
                  text: "You provide your business registration documents and approved display name. We structure the submission to Meta's current requirements and file it on your behalf.",
                  points: [
                    "You receive: submission confirmation with a live tracking reference",
                    "You are updated at each stage change in Meta's review queue",
                    "You do not need to contact Meta directly at any point",
                  ],
                },
                {
                  Icon: Settings,
                  stage: "Stage 3",
                  title: "API Configuration & Testing",
                  text: "Once Meta approves your account, we configure your API environment, set up webhooks, and run end-to-end testing before anything is handed over.",
                  points: [
                    "You receive: a fully tested, production-ready API environment",
                    "You approve all configuration settings before go-live is confirmed",
                    "A full sandbox run of your message flows is completed before launch",
                  ],
                },
                {
                  Icon: Rocket,
                  stage: "Stage 4",
                  title: "Go Live With Your Verified WhatsApp Business Account",
                  text: "Your verified account goes live with templates approved, integrations active, and your team walked through the environment. You start fully operational, not partially built.",
                  points: [
                    "You receive: complete account documentation and access credentials",
                    "Your team receives a live environment walkthrough on handover day",
                    "You retain a named Fox Aircomm contact for all post-launch queries",
                  ],
                },
              ].map(({ Icon, stage, title, text, points }) => (
                <div key={stage} className="grid md:grid-cols-2 gap-5">
                  {/* Left: stage + description */}
                  <div className="bg-[#F8FAFC] border border-gray-100 rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-9 h-9 min-w-[36px] rounded-lg bg-[#0529a0]/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#0529a0]" />
                      </div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-gray-400">
                        {stage}
                      </p>
                    </div>
                    <h3 className="text-gray-800 text-base font-semibold leading-relaxed mb-2">
                      {title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                  </div>

                  {/* Right: deliverables */}
                  <div className="relative bg-[#eef2ff] border border-blue-100 rounded-2xl p-6 overflow-hidden">
                    <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#f85415]" />
                    <p className="text-xs font-semibold tracking-widest uppercase text-[#0529a0]/70 mb-4">
                      What You Get
                    </p>
                    <ul className="space-y-3">
                      {points.map((p) => (
                        <li key={p} className="flex items-start gap-2.5 text-gray-700 text-sm leading-relaxed">
                          <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-[#f85415]/10 flex items-center justify-center">
                            <Check className="w-2.5 h-2.5 text-[#f85415]" strokeWidth={3} />
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* ================= SECTION 9: INDUSTRIES ================= */}
        <section className="py-20 bg-[#F8FAFC] px-4">
          <div className="max-w-6xl mx-auto">

            {/* Section Header */}
            <div className="mb-12">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-[#0529a0] bg-[#eef2ff] border border-blue-100 px-3.5 py-1.5 rounded-full mb-4">
                Industries
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-3xl leading-snug">
                Industries We Help Get{" "}
                <span className="text-[#0529a0]">Meta Verified on WhatsApp</span>
              </h2>
            </div>

            {/* Industry cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {[
                {
                  Icon: ShoppingBag,
                  name: "eCommerce",
                  text: "Order updates and abandoned cart recovery carry more weight when they arrive from a verified business name — customers open, respond, and convert at higher rates.",
                },
                {
                  Icon: HeartPulse,
                  name: "Healthcare",
                  text: "Appointment reminders and diagnostic reports sent from an unverified number create hesitation before the patient even reads the message — verification removes that friction entirely.",
                },
                {
                  Icon: GraduationCap,
                  name: "Education",
                  text: "Admission queries, fee reminders, and result notifications sent at volume require both API infrastructure and a verified identity that parents and students trust immediately.",
                },
                {
                  Icon: Home,
                  name: "Real Estate",
                  text: "Site visit confirmations and payment schedules involve high-value decisions — a verified badge signals legitimacy at exactly the moment a prospect is deciding whether to trust you.",
                },
                {
                  Icon: Landmark,
                  name: "Finance",
                  text: "Loan updates and KYC reminders sent from an unverified number risk being dismissed as fraud — verification converts what would be a blocked number into an opened message.",
                },
                {
                  Icon: Truck,
                  name: "Logistics",
                  text: "Shipment tracking and delivery alerts sent across thousands of daily consignments require API-level scale and a verified sender identity that customers do not pause to question.",
                },
                {
                  Icon: Plane,
                  name: "Travel & Hospitality",
                  text: "Booking confirmations and check-in instructions carry time-sensitive information; a verified WhatsApp account ensures they are opened and acted on, not missed.",
                },
              ].map(({ Icon, name, text }) => (
                <div
                  key={name}
                  className="relative bg-white border border-gray-100 rounded-2xl p-6 overflow-hidden shadow-sm hover:shadow-md hover:border-[#f85415]/30 transition-all duration-200"
                >
                  <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#f85415]" />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 min-w-[36px] rounded-lg bg-[#0529a0]/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#0529a0]" />
                    </div>
                    <h3 className="text-gray-800 text-base font-semibold">{name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="tel:+919970650797"
              className="inline-flex items-center gap-2 bg-[#f85415] hover:bg-orange-600 transition-colors text-white font-semibold px-7 py-3.5 rounded-xl text-sm"
            >
              Find Out How Verification Can Work for Your Industry
              <ArrowRight className="w-4 h-4" />
            </Link>

          </div>
        </section>
        {/* PROCESS */}
        {/* ================= SECTION 10: AREAS SERVED ================= */}
        <section className="py-20 bg-[#F8FAFC] px-4">
          <div className="max-w-7xl mx-auto">

            {/* Section Header */}
            <div className="mb-12">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-[#0529a0] bg-[#eef2ff] border border-blue-100 px-3.5 py-1.5 rounded-full mb-4">
                Service Areas
              </span>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl leading-snug">
                  Trusted Meta Verified WhatsApp Partner{" "}
                  <span className="text-[#0529a0]">Serving Pune and Nearby Areas</span>
                </h2>
              </div>
            </div>

            {/* Intro copy */}
            <div className="space-y-4 mb-10 max-w-4xl">
              <p className="text-base text-gray-600 leading-relaxed">
                Fox Aircomm serves businesses across Pune's major commercial corridors from the IT campuses of Hinjewadi and Kharadi to the established business districts of Baner, Wakad, and Viman Nagar.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Businesses operating from Kalyani Nagar, Hadapsar, and Pimpri-Chinchwad are equally within our direct service reach, with in-person consultation available where needed.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                As a WhatsApp Business Solution Provider in Pune, we also work with clients across Maharashtra, including Mumbai, Nashik, Aurangabad, Kolhapur, and Solapur, with the same direct project ownership and local accountability our Pune clients rely on.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

              {/* Pune localities */}
              <div className="relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#0529a0]/20 hover:shadow-md transition-all duration-200 overflow-hidden">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#eef2ff] flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#0529a0]" strokeWidth={1.8} />
                  </div>
                  <span className="text-5xl font-black text-gray-100 leading-none select-none">01</span>
                </div>
                <h3 className="text-base font-bold text-[#0529a0] mb-3">Pune Localities Served</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Hinjewadi",
                    "Kharadi",
                    "Baner",
                    "Wakad",
                    "Viman Nagar",
                    "Kalyani Nagar",
                    "Hadapsar",
                    "Pimpri-Chinchwad",
                  ].map((area) => (
                    <span
                      key={area}
                      className="text-xs font-medium text-[#0529a0] bg-[#eef2ff] border border-blue-100 rounded-full px-3 py-1.5"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Maharashtra cities */}
              <div className="relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#0529a0]/20 hover:shadow-md transition-all duration-200 overflow-hidden">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#eef2ff] flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-[#0529a0]" strokeWidth={1.8} />
                  </div>
                  <span className="text-5xl font-black text-gray-100 leading-none select-none">02</span>
                </div>
                <h3 className="text-base font-bold text-[#0529a0] mb-3">Maharashtra Cities Served</h3>
                <div className="flex flex-wrap gap-2">
                  {["Mumbai", "Nashik", "Aurangabad", "Kolhapur", "Solapur"].map((city) => (
                    <span
                      key={city}
                      className="text-xs font-medium text-[#0529a0] bg-[#eef2ff] border border-blue-100 rounded-full px-3 py-1.5"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pan-India (highlighted) */}
              <div className="relative bg-[#0529a0] border border-[#0529a0] rounded-2xl p-6 hover:shadow-md transition-all duration-200 overflow-hidden">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" strokeWidth={1.8} />
                  </div>
                  <span className="text-5xl font-black text-white/10 leading-none select-none">03</span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">Pan-India Delivery</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Remote delivery available Pan-India — in-person available for Pune-based clients.
                </p>
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#f85415] rounded-b-2xl" />
              </div>

            </div>
          </div>
        </section>



        {/* ================= SECTION 11: PRICING ================= */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">

            {/* Header */}
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-bold tracking-widest text-[#f85415] uppercase">
                Pricing
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-3 mb-5 leading-tight">
                How Much Does WhatsApp Green Tick Verification and Business API Cost?
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                WhatsApp verification and API access do not carry a single fixed price. What your business pays depends on your setup requirements, usage volume, and the services your engagement includes.
              </p>
            </div>

            {/* Cost component cards */}
            <div className="grid sm:grid-cols-2 gap-5 mb-16">

              <div className="bg-[#eef2ff] rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4">
                  <BadgeCheck className="w-5 h-5 text-[#0529a0]" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold text-[#0529a0] mb-3">Verification Track</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Green Tick verification through the API carries no Meta subscription fee.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Blue Checkmark verification requires a monthly Meta subscription charged by Meta directly and passed through by Fox Aircomm at cost, with no markup applied.
                </p>
              </div>

              <div className="bg-[#eef2ff] rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4">
                  <MessageSquare className="w-5 h-5 text-[#0529a0]" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold text-[#0529a0] mb-3">Meta Conversation Charges</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  The billing of WhatsApp Business API by Meta is on a per-conversation basis across four categories — marketing, utility, authentication, and service.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Your monthly Meta bill is determined by your volume and category mix, not by a fixed monthly licence.
                </p>
              </div>

              <div className="bg-[#eef2ff] rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4">
                  <Cloud className="w-5 h-5 text-[#0529a0]" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold text-[#0529a0] mb-3">WhatsApp Cloud API in Pune</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Businesses using WhatsApp Cloud API in Pune benefit from Meta-hosted infrastructure — removing on-premise server costs — while conversation-based charges from Meta remain consistent with standard API deployments.
                </p>
              </div>

              <div className="bg-[#0529a0] rounded-2xl p-6 relative overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <Briefcase className="w-5 h-5 text-white" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Fox Aircomm Service Scope</h3>
                <p className="text-sm text-white/80 leading-relaxed mb-3">
                  Our fees cover eligibility review, submission management, API configuration, and integration work.
                </p>
                <p className="text-sm text-white/80 leading-relaxed">
                  The scope and, therefore, the cost vary depending on whether you need verification only, full API deployment, chatbot development, or CRM integration.
                </p>
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#f85415]" />
              </div>

            </div>

            {/* What's included summary */}
            <div className="bg-gray-50 border-l-4 border-[#f85415] rounded-2xl p-8 mb-10">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                How Billing Works at a Glance
              </h3>
              <ul className="space-y-3">
                {[
                  "One-time setup fee covers configuration, submission, and go-live",
                  "Meta conversation charges are billed separately based on monthly usage",
                  "Custom packages available for businesses requiring multiple services together",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700 leading-relaxed">
                    <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-[#f85415]/10 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-[#f85415]" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <Link
              to="tel:+919970650797"
              className="inline-flex items-center gap-2 bg-[#f85415] hover:bg-orange-600 transition-colors text-white font-semibold px-7 py-3.5 rounded-xl text-sm"
            >
              Request a Custom Pricing Plan
              <ArrowRight className="w-4 h-4" />
            </Link>

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
                  <span className="text-[#0529a0]">WhatsApp Verification and API
                  </span>
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
       {/* ================= FINAL CTA ================= */}
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

    {/* Headline */}
    <h2
      className="mb-5 font-bold leading-tight text-white"
      style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
    >
      Your Business Deserves to Be{" "}
      <span className="text-orange-500">Recognised Before the First Message Is Read</span>
    </h2>

    {/* Body copy */}
    <p className="mb-4 max-w-2xl text-base leading-relaxed text-white/70">
      Every unverified message carries an unanswered question — is this business legitimate? Verification removes that question permanently, and Fox Aircomm manages every step from eligibility check to a fully configured, live account.
    </p>

    {/* Positioning line */}
    <div className="mb-10 rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="text-sm md:text-[15px] leading-relaxed text-white/80">
        We are <span className="font-semibold text-white">Pune-based</span>,{" "}
        <span className="font-semibold text-white">API-specialist</span>, and{" "}
        <span className="font-semibold text-white">accountable</span>.
      </p>
    </div>

    {/* CTA */}
    <div className="flex flex-wrap gap-4">
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-orange-600 active:scale-95"
      >
        Schedule a Free Verification Consultation
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>

  </div>
</section>
      </div>
    </>
  );
}

export default MetaWhatsApp;