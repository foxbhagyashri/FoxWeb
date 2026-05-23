import { useState } from "react";
import { Link } from "react-router-dom";

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
    question: "What makes Foxaircomm different from other SMM agencies in Pune?",
    answer:
      "We build every campaign around buyer intent and conversion — not just content calendars. Every rupee spent is tracked to CPL, inquiry quality, and revenue signals, not likes or impressions.",
  },
  {
    question: "How long does it take to see results from social media marketing?",
    answer:
      "Paid campaigns typically start generating leads within 2–4 weeks of launch. Organic growth takes 60–90 days to build momentum. We set clear benchmarks at the start so you always know what to expect.",
  },
  {
    question: "Do you manage both organic content and paid ads?",
    answer:
      "Yes. Depending on your plan, we handle content creation, scheduling, community engagement, Facebook Ads, Instagram Ads, retargeting sequences, and full funnel tracking.",
  },
  {
    question: "What platforms do you run campaigns on?",
    answer:
      "Primarily Facebook, Instagram, and LinkedIn — chosen based on where your buyers actually spend time. We don't recommend platforms that don't match your audience's buying behavior.",
  },
  {
    question: "How is the ad budget managed?",
    answer:
      "Ad spend is separate from our management fee. We help you determine the right budget based on your deal size and lead volume goals, then optimize spend weekly to lower CPL over time.",
  },
  {
    question: "Can I start with a smaller budget and scale up?",
    answer:
      "Yes. We have plans starting at ₹12K/month for organic SMM, and we help you scale paid campaigns as results validate increased spend. You're never locked into a fixed budget.",
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
    <div className="overflow-hidden bg-white">

      {/* HERO */}
      <section className="bg-[#0529a0] py-20 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: Copy ── */}
          <div>
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-orange-400 bg-orange-500/15 border border-orange-500/30 px-3.5 py-1.5 rounded-full mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              Social Media Marketing · Pune
            </span>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              Social Media That Generates{" "}
              <span className="text-[#f85415]">Leads</span>,{" "}
              Not Just Followers
            </h1>

            {/* Body copy */}
            <p className="text-white/70 text-base leading-relaxed mb-4">
              If your social media is getting likes but not leads, it's already costing you
              business. Every day, competitors run conversion-focused campaigns while your
              brand collects engagement that never turns into inquiries.
            </p>
            <p className="text-white/70 text-base leading-relaxed mb-8">
              At Foxaircomm, every campaign is built around buyer intent,
              platform-specific behavior, and conversion-focused execution — so your
              social presence translates into real business outcomes.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="bg-[#f85415] hover:bg-orange-600 transition-colors text-white font-semibold px-7 py-3.5 rounded-xl text-sm"
              >
                Get Free SMM Audit →
              </Link>
              <Link
                to="/contact"
                className="border border-white/30 hover:bg-white/10 transition-colors text-white font-semibold px-7 py-3.5 rounded-xl text-sm"
              >
                Book Consultation
              </Link>
            </div>
          </div>

          {/* ── Right: Card ── */}
          <div className="bg-white rounded-3xl p-7 shadow-2xl">
            <h3 className="text-xl font-bold text-[#0529a0] mb-5">
              What We Focus On
            </h3>

            {/* Focus items */}
            <div className="space-y-3">
              {focusItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 border border-gray-100 rounded-xl p-4 hover:border-gray-200 transition-colors"
                >
                  {/* Icon box */}
                  <div className="w-9 h-9 min-w-[36px] rounded-lg bg-[#e8edfb] flex items-center justify-center text-base">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-0.5">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-2.5 mt-5">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="bg-[#f0f4ff] rounded-xl py-3 px-2 text-center"
                >
                  <span className="block text-xl font-bold text-[#0529a0]">
                    {s.number}
                  </span>
                  <span className="block text-[11px] text-gray-500 mt-0.5 leading-tight">
                    {s.label}
                  </span>
                </div>
              ))}
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
          <h2 className="font-serif text-3xl font-semibold text-gray-900 leading-snug max-w-xl mb-2">
            What Separates a Results-Focused SMM Company From the Rest
          </h2>

          {/* Subtitle */}
          <p className="text-base text-gray-500 italic mb-10">
            Most agencies grow your page. Very few grow your pipeline.
          </p>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {strategies.map((item, i) => (
              <div
                key={i}
                className="relative bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-4 overflow-hidden hover:border-gray-300 transition-colors duration-200"
              >
                {/* Top accent bar */}
                <span className="absolute top-0 left-0 right-0 h-[3px] bg-emerald-500 rounded-t-xl" />

                <div className="flex items-start gap-3">
                  {/* Icon */}
                  <div className="w-10 h-10 min-w-[40px] rounded-[10px] bg-emerald-50 flex items-center justify-center text-lg">
                    {item.icon}
                  </div>

                  {/* Text */}
                  <p className="text-sm font-medium text-gray-800 leading-relaxed pt-2">
                    {item.text}
                  </p>
                </div>

                {/* Tag */}
                <span className="self-start text-[11px] font-medium text-emerald-900 bg-emerald-50 rounded-md px-2.5 py-1 tracking-wide">
                  {item.tag}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CASE STUDY */}
      <section className="py-20 bg-[#F8FAFC] px-4">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="mb-10">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-orange-500 bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-full mb-4">
              Case Study
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-2xl leading-snug">
              Proof That Intent-Based Social Media Drives{" "}
              <span className="text-[#0529a0]">Real Results</span>
            </h2>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">

            {/* Top bar */}
            <div className="bg-[#0529a0] px-10 py-5 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-orange-400 inline-block" />
              <p className="text-white/80 text-sm font-medium tracking-wide uppercase">
                B2B Professional Services · Baner, Pune
              </p>
            </div>

            <div className="p-8 md:p-10">

              {/* Two-col layout: Before + What Changed */}
              <div className="grid md:grid-cols-2 gap-8 mb-10">

                {/* Before */}
                <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                      <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <h3 className="text-base font-bold text-gray-800">The Situation Before</h3>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
                      <p className="text-sm text-gray-600 leading-relaxed">
                        B2B professional services company in Baner
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
                      <p className="text-sm text-gray-600 leading-relaxed">
                        ₹20,000 – ₹60,000 average deal size
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Good engagement but no qualified inquiries
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Budget wasted on boosted posts without conversion structure
                      </p>
                    </div>
                  </div>
                </div>

                {/* What Changed */}
                <div className="bg-[#eef2ff] rounded-2xl p-6 border border-blue-100">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-8 h-8 rounded-lg bg-[#0529a0]/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#0529a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-base font-bold text-gray-800">What Changed</h3>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0529a0] shrink-0" />
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Instagram lead ads targeting warm audiences
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0529a0] shrink-0" />
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Facebook Ads linked to conversion-focused landing pages
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0529a0] shrink-0" />
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Retargeting campaigns for pricing-page visitors
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Divider */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex-1 h-px bg-gray-100" />
                <span className="text-xs font-semibold tracking-widest uppercase text-gray-400">
                  Results within 90 days
                </span>
                <div className="flex-1 h-px bg-gray-100" />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                <div className="relative bg-[#fff7f4] border border-orange-100 rounded-2xl p-5 text-center overflow-hidden">
                  <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#f85415] rounded-t-2xl" />
                  <p className="text-3xl font-bold text-[#f85415] mb-1">44%</p>
                  <p className="text-xs text-gray-500 leading-snug">Lower Cost Per Lead</p>
                </div>

                <div className="relative bg-[#fff7f4] border border-orange-100 rounded-2xl p-5 text-center overflow-hidden">
                  <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#f85415] rounded-t-2xl" />
                  <p className="text-3xl font-bold text-[#f85415] mb-1">2.6x</p>
                  <p className="text-xs text-gray-500 leading-snug">More Qualified Inquiries</p>
                </div>

                <div className="relative bg-[#fff7f4] border border-orange-100 rounded-2xl p-5 text-center overflow-hidden">
                  <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#f85415] rounded-t-2xl" />
                  <p className="text-3xl font-bold text-[#f85415] mb-1">2.1%</p>
                  <p className="text-xs text-gray-500 leading-snug">Social Conversion Rate</p>
                </div>

                <div className="relative bg-[#fff7f4] border border-orange-100 rounded-2xl p-5 text-center overflow-hidden">
                  <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#f85415] rounded-t-2xl" />
                  <p className="text-3xl font-bold text-[#f85415] mb-1">25%</p>
                  <p className="text-xs text-gray-500 leading-snug">Higher Deal Value</p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="mb-12">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-[#0529a0] bg-[#eef2ff] border border-blue-100 px-3.5 py-1.5 rounded-full mb-4">
              Services
            </span>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl leading-snug">
                SMM Services in Pune —{" "}
                <span className="text-[#0529a0]">What You Actually Get</span>
              </h2>
              <p className="text-sm text-gray-500 max-w-xs md:text-right leading-relaxed">
                Every service is tied to a measurable outcome — not just activity.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

            {/* Card 1 */}
            <div className="group relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#0529a0]/30 hover:shadow-md transition-all duration-200 overflow-hidden">
              <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#0529a0] rounded-t-2xl" />
              <div className="w-10 h-10 rounded-xl bg-[#eef2ff] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#0529a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
                </svg>
              </div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#0529a0]/60 mb-2">Audience Alignment</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Removing audience misalignment that wastes ad budget
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#0529a0]/30 hover:shadow-md transition-all duration-200 overflow-hidden">
              <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#0529a0] rounded-t-2xl" />
              <div className="w-10 h-10 rounded-xl bg-[#eef2ff] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#0529a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#0529a0]/60 mb-2">Content Strategy</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Building content that moves users from awareness to inquiry
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#0529a0]/30 hover:shadow-md transition-all duration-200 overflow-hidden">
              <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#0529a0] rounded-t-2xl" />
              <div className="w-10 h-10 rounded-xl bg-[#eef2ff] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#0529a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#0529a0]/60 mb-2">Lead Generation</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Running Facebook and Instagram lead generation campaigns
              </p>
            </div>

            {/* Card 4 */}
            <div className="group relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#0529a0]/30 hover:shadow-md transition-all duration-200 overflow-hidden">
              <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#0529a0] rounded-t-2xl" />
              <div className="w-10 h-10 rounded-xl bg-[#eef2ff] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#0529a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#0529a0]/60 mb-2">Funnel Structure</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Structuring campaigns from scroll → click → qualified lead
              </p>
            </div>

            {/* Card 5 */}
            <div className="group relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#0529a0]/30 hover:shadow-md transition-all duration-200 overflow-hidden">
              <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#0529a0] rounded-t-2xl" />
              <div className="w-10 h-10 rounded-xl bg-[#eef2ff] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#0529a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#0529a0]/60 mb-2">Conversion Tracking</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Tracking cost per inquiry, lead flow, and revenue signals
              </p>
            </div>

            {/* Card 6 */}
            <div className="group relative bg-[#0529a0] border border-[#0529a0] rounded-2xl p-6 hover:shadow-md transition-all duration-200 overflow-hidden">
              <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#f85415] rounded-t-2xl" />
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xs font-semibold tracking-widest uppercase text-white/50 mb-2">Paid Social</p>
              <p className="text-white text-sm leading-relaxed">
                Paid social media campaigns optimized for conversions
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
                How Our{" "}
                <span className="text-[#0529a0]">SMM Strategy</span>{" "}
                Works
              </h2>
              <p className="text-sm text-gray-500 max-w-xs md:text-right leading-relaxed">
                A structured 6-step process built around lead generation, not vanity metrics.
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
                Audience & Revenue Gap Audit
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                We identify what is blocking inquiries and wasting ad budget.
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
                Intent Mapping Strategy
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Platforms and audience segments are matched to buying behavior.
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
                Content & Creative Deployment
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Every piece of content is designed to move users toward action.
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
                Paid Social Campaign Execution
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Structured Facebook Ads and Instagram campaigns focused on lead generation.
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
                Tracking & Optimization
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Measured through CPL, lead quality, and inquiry conversion rates.
              </p>
            </div>

            {/* Step 6 — highlighted */}
            <div className="relative bg-[#0529a0] border border-[#0529a0] rounded-2xl p-6 hover:shadow-md transition-all duration-200 overflow-hidden group">
              <div className="flex items-start justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <span className="text-5xl font-black text-white/10 leading-none select-none">
                  06
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Retargeting Sequences
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Warm audiences are re-engaged through structured retargeting campaigns.
              </p>
              <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#f85415] rounded-b-2xl" />
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="mb-12">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-[#0529a0] bg-[#eef2ff] border border-blue-100 px-3.5 py-1.5 rounded-full mb-4">
              Industries
            </span>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl leading-snug">
                Why SMM Strategy Must{" "}
                <span className="text-[#0529a0]">Change by Industry</span>
              </h2>
              <p className="text-sm text-gray-500 max-w-xs md:text-right leading-relaxed">
                One-size-fits-all social media doesn't convert. We tailor every approach to your market.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="grid lg:grid-cols-3 gap-5">

            {/* Manufacturing */}
            <div className="relative bg-[#F8FAFC] border border-gray-100 rounded-2xl p-7 hover:border-[#0529a0]/20 hover:shadow-md transition-all duration-200 overflow-hidden group">
              <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#0529a0] rounded-t-2xl" />

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-[#eef2ff] flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-[#0529a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>

              {/* Tag */}
              <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-[#0529a0]/60 bg-[#eef2ff] px-2.5 py-1 rounded-md mb-3">
                B2B · Industrial · PCMC
              </span>

              <h3 className="text-lg font-bold text-[#0529a0] mb-3">
                Manufacturing Businesses
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                LinkedIn-driven authority content, RFQ-focused campaigns, and decision-maker targeting for industrial businesses in PCMC.
              </p>

              {/* Tactics */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0529a0] shrink-0" />
                  <p className="text-xs text-gray-500">LinkedIn authority content</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0529a0] shrink-0" />
                  <p className="text-xs text-gray-500">RFQ-focused ad campaigns</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0529a0] shrink-0" />
                  <p className="text-xs text-gray-500">Decision-maker targeting</p>
                </div>
              </div>
            </div>

            {/* Service Businesses — highlighted center card */}
            <div className="relative bg-[#0529a0] border border-[#0529a0] rounded-2xl p-7 hover:shadow-lg transition-all duration-200 overflow-hidden">
              <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#f85415] rounded-t-2xl" />

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>

              {/* Tag */}
              <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-white/50 bg-white/10 px-2.5 py-1 rounded-md mb-3">
                B2C · Local · Instagram
              </span>

              <h3 className="text-lg font-bold text-white mb-3">
                Service Businesses
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-5">
                Instagram and Facebook lead generation campaigns with testimonials, reels, and conversion-focused offers.
              </p>

              {/* Tactics */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f85415] shrink-0" />
                  <p className="text-xs text-white/60">Testimonial & reel content</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f85415] shrink-0" />
                  <p className="text-xs text-white/60">Facebook & Instagram lead ads</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f85415] shrink-0" />
                  <p className="text-xs text-white/60">Conversion-focused offers</p>
                </div>
              </div>
            </div>

            {/* E-Commerce */}
            <div className="relative bg-[#F8FAFC] border border-gray-100 rounded-2xl p-7 hover:border-[#0529a0]/20 hover:shadow-md transition-all duration-200 overflow-hidden group">
              <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#0529a0] rounded-t-2xl" />

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-[#eef2ff] flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-[#0529a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>

              {/* Tag */}
              <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-[#0529a0]/60 bg-[#eef2ff] px-2.5 py-1 rounded-md mb-3">
                DTC · Retargeting · UGC
              </span>

              <h3 className="text-lg font-bold text-[#0529a0] mb-3">
                E-Commerce Brands
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                Product ads, retargeting funnels, UGC amplification, and repeat customer nurturing campaigns.
              </p>

              {/* Tactics */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0529a0] shrink-0" />
                  <p className="text-xs text-gray-500">Product & retargeting ads</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0529a0] shrink-0" />
                  <p className="text-xs text-gray-500">UGC content amplification</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0529a0] shrink-0" />
                  <p className="text-xs text-gray-500">Repeat customer nurturing</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* PRICING */}


      <section className="py-20 bg-[#F8FAFC] px-4">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="mb-12">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-[#0529a0] bg-[#eef2ff] border border-blue-100 px-3.5 py-1.5 rounded-full mb-4">
              Pricing
            </span>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl leading-snug">
                Social Media Marketing{" "}
                <span className="text-[#0529a0]">Pricing in Pune</span>
              </h2>
              <p className="text-sm text-gray-500 max-w-xs md:text-right leading-relaxed">
                Transparent pricing tied to outcomes, not just deliverables.
              </p>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-5">

            {/* Tier 1 — Organic SMM */}
            <div className="relative bg-white border border-gray-100 rounded-2xl p-7 hover:border-[#0529a0]/20 hover:shadow-md transition-all duration-200 overflow-hidden">
              <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#0529a0] rounded-t-2xl" />

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-[#eef2ff] flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-[#0529a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>

              <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-[#0529a0]/60 bg-[#eef2ff] px-2.5 py-1 rounded-md mb-3">
                Starter
              </span>

              <h3 className="text-lg font-bold text-gray-900 mb-1">Organic SMM</h3>
              <p className="text-sm text-gray-400 mb-5">Content, consistency, and community growth</p>

              {/* Price */}
              <div className="flex items-end gap-1 mb-6">
                <span className="text-3xl font-black text-[#f85415]">₹12K – ₹25K</span>
                <span className="text-sm text-gray-400 mb-1">/ month</span>
              </div>

              {/* Features */}
              <div className="space-y-2.5 mb-7">
                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#eef2ff] flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5 text-[#0529a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-500">Content calendar & posting</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#eef2ff] flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5 text-[#0529a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-500">Audience engagement</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#eef2ff] flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5 text-[#0529a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-500">Monthly performance report</p>
                </div>
              </div>

              <button className="w-full py-3 rounded-xl border border-[#0529a0]/30 text-[#0529a0] text-sm font-semibold hover:bg-[#eef2ff] transition-colors duration-150">
                Get Started
              </button>
            </div>

            {/* Tier 2 — Organic + Paid (highlighted) */}
            <div className="relative bg-[#0529a0] border border-[#0529a0] rounded-2xl p-7 hover:shadow-xl transition-all duration-200 overflow-hidden">
              <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#f85415] rounded-t-2xl" />

              {/* Most Popular badge */}
              <div className="absolute top-5 right-5">
                <span className="text-[10px] font-semibold tracking-widest uppercase text-[#f85415] bg-[#f85415]/15 border border-[#f85415]/30 px-2.5 py-1 rounded-full">
                  Most Popular
                </span>
              </div>

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>

              <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-white/50 bg-white/10 px-2.5 py-1 rounded-md mb-3">
                Growth
              </span>

              <h3 className="text-lg font-bold text-white mb-1">Organic + Paid</h3>
              <p className="text-sm text-white/50 mb-5">Reach + leads from both channels</p>

              {/* Price */}
              <div className="flex items-end gap-1 mb-6">
                <span className="text-3xl font-black text-[#f85415]">₹25K – ₹50K</span>
                <span className="text-sm text-white/40 mb-1">/ month</span>
              </div>

              {/* Features */}
              <div className="space-y-2.5 mb-7">
                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-white/60">Everything in Organic</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-white/60">Facebook & Instagram paid ads</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-white/60">Lead tracking & CPL reporting</p>
                </div>
              </div>

              <button className="w-full py-3 rounded-xl bg-[#f85415] text-white text-sm font-semibold hover:bg-orange-600 transition-colors duration-150">
                Get Started →
              </button>
            </div>

            {/* Tier 3 — Full Funnel */}
            <div className="relative bg-white border border-gray-100 rounded-2xl p-7 hover:border-[#0529a0]/20 hover:shadow-md transition-all duration-200 overflow-hidden">
              <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#0529a0] rounded-t-2xl" />

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-[#eef2ff] flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-[#0529a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>

              <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-[#0529a0]/60 bg-[#eef2ff] px-2.5 py-1 rounded-md mb-3">
                Enterprise
              </span>

              <h3 className="text-lg font-bold text-gray-900 mb-1">Full Funnel Paid Ads</h3>
              <p className="text-sm text-gray-400 mb-5">Complete pipeline from scroll to sale</p>

              {/* Price */}
              <div className="flex items-end gap-1 mb-6">
                <span className="text-3xl font-black text-[#f85415]">₹50K+</span>
                <span className="text-sm text-gray-400 mb-1">/ month</span>
              </div>

              {/* Features */}
              <div className="space-y-2.5 mb-7">
                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#eef2ff] flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5 text-[#0529a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-500">Everything in Growth</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#eef2ff] flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5 text-[#0529a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-500">Retargeting & funnel sequences</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#eef2ff] flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5 text-[#0529a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-500">Dedicated strategy & reporting</p>
                </div>
              </div>

              <button className="w-full py-3 rounded-xl border border-[#0529a0]/30 text-[#0529a0] text-sm font-semibold hover:bg-[#eef2ff] transition-colors duration-150">
                Get Started
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* WHY FAIL */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="mb-12">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-red-500 bg-red-50 border border-red-100 px-3.5 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 inline-block" />
              Problem
            </span>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl leading-snug">
                Why Your Social Media Is{" "}
                <span className="text-red-500">Not Generating Leads</span>
              </h2>
              <p className="text-sm text-gray-500 max-w-xs md:text-right leading-relaxed">
                Most brands make the same 6 mistakes. Here's what's silently killing your pipeline.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-4">

            {/* Problem 1 */}
            <div className="relative flex items-start gap-4 bg-[#FFF8F7] border border-red-100 rounded-2xl p-6 overflow-hidden group hover:border-red-200 hover:shadow-sm transition-all duration-200">
              <span className="absolute top-0 left-0 bottom-0 w-[3px] bg-red-400 rounded-l-2xl" />
              <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-red-400 mb-1">Content Strategy</p>
                <p className="text-sm font-medium text-gray-800 leading-relaxed">
                  Awareness-only content with no conversion structure
                </p>
              </div>
            </div>

            {/* Problem 2 */}
            <div className="relative flex items-start gap-4 bg-[#FFF8F7] border border-red-100 rounded-2xl p-6 overflow-hidden group hover:border-red-200 hover:shadow-sm transition-all duration-200">
              <span className="absolute top-0 left-0 bottom-0 w-[3px] bg-red-400 rounded-l-2xl" />
              <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-red-400 mb-1">Ad Spend</p>
                <p className="text-sm font-medium text-gray-800 leading-relaxed">
                  Boosted posts instead of structured campaigns
                </p>
              </div>
            </div>

            {/* Problem 3 */}
            <div className="relative flex items-start gap-4 bg-[#FFF8F7] border border-red-100 rounded-2xl p-6 overflow-hidden group hover:border-red-200 hover:shadow-sm transition-all duration-200">
              <span className="absolute top-0 left-0 bottom-0 w-[3px] bg-red-400 rounded-l-2xl" />
              <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-red-400 mb-1">Creative Alignment</p>
                <p className="text-sm font-medium text-gray-800 leading-relaxed">
                  Ad creatives not aligned with landing pages
                </p>
              </div>
            </div>

            {/* Problem 4 */}
            <div className="relative flex items-start gap-4 bg-[#FFF8F7] border border-red-100 rounded-2xl p-6 overflow-hidden group hover:border-red-200 hover:shadow-sm transition-all duration-200">
              <span className="absolute top-0 left-0 bottom-0 w-[3px] bg-red-400 rounded-l-2xl" />
              <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-red-400 mb-1">Metrics</p>
                <p className="text-sm font-medium text-gray-800 leading-relaxed">
                  Optimizing for engagement instead of inquiries
                </p>
              </div>
            </div>

            {/* Problem 5 */}
            <div className="relative flex items-start gap-4 bg-[#FFF8F7] border border-red-100 rounded-2xl p-6 overflow-hidden group hover:border-red-200 hover:shadow-sm transition-all duration-200">
              <span className="absolute top-0 left-0 bottom-0 w-[3px] bg-red-400 rounded-l-2xl" />
              <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-red-400 mb-1">Retargeting</p>
                <p className="text-sm font-medium text-gray-800 leading-relaxed">
                  No retargeting structure in place
                </p>
              </div>
            </div>

            {/* Problem 6 */}
            <div className="relative flex items-start gap-4 bg-[#FFF8F7] border border-red-100 rounded-2xl p-6 overflow-hidden group hover:border-red-200 hover:shadow-sm transition-all duration-200">
              <span className="absolute top-0 left-0 bottom-0 w-[3px] bg-red-400 rounded-l-2xl" />
              <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-red-400 mb-1">Targeting</p>
                <p className="text-sm font-medium text-gray-800 leading-relaxed">
                  Audience strategy misalignment
                </p>
              </div>
            </div>

          </div>

          {/* Bottom CTA nudge */}
          <div className="mt-10 flex items-center gap-3 p-5 bg-[#eef2ff] border border-blue-100 rounded-2xl">
            <div className="w-9 h-9 rounded-xl bg-[#0529a0] flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="text-sm text-[#0529a0] font-medium flex-1">
              Foxaircomm fixes all 6 of these — starting with a free SMM audit that identifies exactly where your pipeline is leaking.
            </p>
            <button className="shrink-0 text-sm font-semibold text-white bg-[#0529a0] px-5 py-2.5 rounded-xl hover:bg-blue-900 transition-colors duration-150">
              Get Free Audit →
            </button>
          </div>

        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-20 bg-[#F8FAFC] px-4">
        <div className="max-w-7xl mx-auto overflow-x-auto">

          <SectionHeader
            badge="Comparison"
            title="Foxaircomm vs Typical SMM Agency"
          />

          <table className="w-full border-collapse bg-white rounded-3xl overflow-hidden">
            <thead className="bg-[#0529a0] text-white">
              <tr>
                <th className="p-5 text-left">Factor</th>
                <th className="p-5 text-left">Typical Agency</th>
                <th className="p-5 text-left">Foxaircomm</th>
              </tr>
            </thead>

            <tbody>

              {[
                [
                  "Content Strategy",
                  "More posts and reach",
                  "Conversion-focused execution",
                ],
                [
                  "Campaign Goal",
                  "Followers and awareness",
                  "Qualified leads and inquiries",
                ],
                [
                  "Reporting",
                  "Likes and engagement",
                  "CPL and conversion rates",
                ],
                [
                  "Paid Ads",
                  "Boosted posts",
                  "Structured paid campaigns",
                ],
                [
                  "Industry Customization",
                  "Generic templates",
                  "Industry-specific strategy",
                ],
              ].map((row, i) => (
                <tr key={i} className="border-b">
                  <td className="p-5 font-semibold">{row[0]}</td>
                  <td className="p-5 text-gray-600">{row[1]}</td>
                  <td className="p-5 text-[#0529a0] font-medium">
                    {row[2]}
                  </td>
                </tr>
              ))}

            </tbody>
          </table>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-5xl mx-auto">

          {/* Section Header */}
          <div className="mb-12">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-[#0529a0] bg-[#eef2ff] border border-blue-100 px-3.5 py-1.5 rounded-full mb-4">
              FAQs
            </span>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-md leading-snug">
                Frequently Asked{" "}
                <span className="text-[#0529a0]">Questions</span>
              </h2>
              <p className="text-sm text-gray-500 max-w-xs md:text-right leading-relaxed">
                Can't find your answer? Reach out and we'll get back to you within one business day.
              </p>
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3">
            <FAQItem faq={faqs[0]} isOpen={openIndex === 0} onToggle={() => toggle(0)} />
            <FAQItem faq={faqs[1]} isOpen={openIndex === 1} onToggle={() => toggle(1)} />
            <FAQItem faq={faqs[2]} isOpen={openIndex === 2} onToggle={() => toggle(2)} />
            <FAQItem faq={faqs[3]} isOpen={openIndex === 3} onToggle={() => toggle(3)} />
            <FAQItem faq={faqs[4]} isOpen={openIndex === 4} onToggle={() => toggle(4)} />
            <FAQItem faq={faqs[5]} isOpen={openIndex === 5} onToggle={() => toggle(5)} />
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
            Find Out What's <span className="text-orange-500">Blocking</span>
            <br />
            Your Social Media Growth
          </h2>

          {/* Subtext */}
          <p className="mb-10 max-w-xl text-base leading-relaxed text-white/70">
            We'll pinpoint exactly what's limiting your performance and hand you a
            clear, actionable fix list — within 48 hours, guaranteed.
          </p>

          {/* Stat Cards */}
          <div className="mb-10 flex flex-wrap gap-4">
            {statss.map((s) => (
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

          {/* Visual Row */}
          <div className="mb-10 flex flex-wrap gap-4">

            {/* Bar Chart */}
            <div className="min-w-[220px] flex-[1.6] rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mb-3 text-[11px] uppercase tracking-wider text-white/50">
                📊 Weekly engagement trend
              </div>
              <div className="flex h-20 items-end gap-1.5">
                {days.map((d, i) => (
                  <div key={d} className="flex flex-1 flex-col items-center">
                    <div
                      className="w-full rounded-t"
                      style={{
                        height: `${Math.round((vals[i] / maxVal) * 76)}px`,
                        background: i === 5 ? "#f85415" : "rgba(248,84,21,0.25)",
                      }}
                    />
                    <div className="mt-1 text-[9px] text-white/35">{d}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Platform Performance */}
            <div className="min-w-[180px] flex-1 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mb-3 text-[11px] uppercase tracking-wider text-white/50">
                🔗 Platform performance
              </div>
              <div className="flex flex-col gap-2.5">
                {platforms.map((p) => (
                  <div key={p.name} className="flex items-center gap-2.5">
                    <div
                      className="h-2 w-2 flex-shrink-0 rounded-full"
                      style={{ background: p.color }}
                    />
                    <div className="flex-1 text-xs text-white/70">{p.name}</div>
                    <div className="h-1.5 flex-[2] overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${p.pct}%`, background: p.color }}
                      />
                    </div>
                    <div className="min-w-[28px] text-right text-[11px] font-medium text-white/55">
                      {p.pct}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
  );
}

export default SocialMediaMarketing;