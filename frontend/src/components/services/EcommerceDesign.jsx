import React from "react";
import { Helmet } from "react-helmet"; // or "react-helmet-async" (needs <HelmetProvider> at app root)
import { Link } from "react-router-dom";

const PHONE_TEL = "tel:+918879864151";
const WHATSAPP = "https://wa.me/918879864151";
const CONTACT_PATH = "/contact"; // change to your real contact/booking route

const CTA_PRIMARY =
  "inline-flex items-center justify-center gap-2 bg-[#f85415] hover:bg-[#e04a0f] transition-colors px-8 py-4 text-white font-bold text-lg rounded-xl";
const CTA_OUTLINE =
  "inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 transition-colors px-8 py-4 text-white font-semibold text-lg rounded-xl";

const Check = ({ fill = "#f85415", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" className="shrink-0" aria-hidden="true">
    <circle cx="8" cy="8" r="8" fill={fill} />
    <path d="M4.5 8.2 L6.7 10.5 L11.5 5.5" stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Arrow = () => <span aria-hidden="true">→</span>;

const QuoteIcon = () => (
  <svg width="24" height="18" viewBox="0 0 24 18" fill="none" className="mb-3" aria-hidden="true">
    <path d="M0 18 L0 10 C0 4 4 0 9 0 L9 4 C6 4 4 6 4 9 L9 9 L9 18 Z M14 18 L14 10 C14 4 18 0 23 0 L23 4 C20 4 18 6 18 9 L23 9 L23 18 Z" fill="#c7d0f0" />
  </svg>
);

const audiences = [
  {
    title: "Established Retail Businesses Going Direct-to-Consumer",
    situation:
      "Built a strong physical presence across Pune's Aundh, Camp, and Laxmi Road, but the online store does not reflect that credibility.",
    need: "Need a digital storefront that replicates in-store trust, surfaces UPI via Razorpay at checkout, and converts first-time online buyers without friction.",
  },
  {
    title: "D2C Brands Scaling Beyond Their Launch Platform",
    situation:
      "Started on a basic Shopify theme or Wix store, now processing volumes the platform was never built to handle. SKU count has grown, fulfilment errors have increased, and the store's architecture is now a ceiling, not a launchpad.",
    need: "Requires custom e-commerce website development in Pune built around the current operational reality.",
  },
  {
    title: "B2B Suppliers Moving from WhatsApp Orders to Self-Serve Portals",
    situation:
      "Manufacturers across Pimpri-Chinchwad, Chakan, and Ranjangaon are processing bulk orders via phone and Excel sheets.",
    need: "Need structured order portals with tiered pricing, distributor logins, MOQ logic, and GST-compliant invoice automation, all running without manual intervention.",
  },
  {
    title: "Apparel, Lifestyle & Niche Product Brands Targeting Maharashtra",
    situation:
      "Brands in fashion, wellness, home décor, and food where buyer trust is built visually but lost operationally.",
    need: "They need e-commerce website design services in Pune that balance brand presentation with Shiprocket-connected fulfilment, COD support, and mobile-first product pages for Tier-2 Maharashtra buyers.",
  },
  {
    title: "Startups & First-Time Store Owners Building It Right, First Time",
    situation:
      "Founders who have validated demand and refuse to build a cheap store they will have to rebuild in twelve months.",
    need: "Platform selection (Shopify vs WooCommerce vs custom) made correctly at this stage determines how expensive the next phase of growth will be.",
  },
];

const frictionPoints = [
  {
    title: "Mobile-First Performance Friction",
    text: "Tier-2 Maharashtra buyers demand speed. A 6-second load time on a mid-range Android device kills conversions before the first scroll.",
    icon: <rect x="9" y="4" width="10" height="20" rx="2" stroke="#f85415" strokeWidth="2" />,
  },
  {
    title: "Payment Logic Failures",
    text: "Burying UPI and wallets like Razorpay or Paytm behind credit card fields ignores how your customers actually pay.",
    icon: (
      <>
        <rect x="3" y="7" width="22" height="14" rx="2" stroke="#f85415" strokeWidth="2" />
        <line x1="3" y1="12" x2="25" y2="12" stroke="#f85415" strokeWidth="2" />
      </>
    ),
  },
  {
    title: "Disconnected Logistics",
    text: "Generic stores fail to differentiate between a same-day Pune delivery and a 4-day dispatch to Nagpur, eroding customer trust.",
    icon: (
      <>
        <path d="M3 8 H17 V20 H3 Z M17 12 H22 L25 16 V20 H17" stroke="#f85415" strokeWidth="2" strokeLinejoin="round" fill="none" />
        <circle cx="8" cy="21" r="2" fill="#f85415" />
        <circle cx="21" cy="21" r="2" fill="#f85415" />
      </>
    ),
  },
  {
    title: 'The "Credibility Gap"',
    text: "A decade of reputation on Tilak Road is lost online when forced into a generic theme that lacks the professional authority of your physical store.",
    icon: (
      <>
        <path d="M14 3 L24 7 V14 C24 19 20 23 14 25 C8 23 4 19 4 14 V7 Z" stroke="#f85415" strokeWidth="2" strokeLinejoin="round" fill="none" />
        <path d="M10 14 L13 17 L18 11" stroke="#f85415" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </>
    ),
  },
];

const howToSteps = [
  { title: "Deep-dive research", desc: "We start by analysing your competitors, auditing your current digital presence, and mapping the specific search queries your buyers use. No assumptions. Everything starts with data." },
  { title: "User-focused design and content plan", desc: "We create a design experience aligned to how you want your visitor to feel — confident, reassured, ready to act. Alongside design, we build a keyword-to-section content map so every page section serves a search intent, not just a visual purpose." },
  { title: "Development and technical setup", desc: "Our developers write clean, optimised code. We implement performance standards from the first line — not as a post-build checklist. Page speed, code efficiency, and mobile responsiveness are built in throughout." },
  { title: "SEO and AEO implementation", desc: "We set up Schema markup (FAQPage, HowTo, LocalBusiness, Service), internal linking architecture, and content structured to appear in Google's featured snippets and AI Overviews — the goal: visibility in both traditional search and AI-generated answers." },
  { title: "Testing, launch, and results review", desc: "Before launch, we test page speed, lead tracking, session engagement, and cross-device rendering. After launch, we review performance against benchmarks and identify opportunities for the next iteration. You receive a report, not silence." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Foxaircomm builds websites that rank and convert",
  step: howToSteps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.title,
    text: s.desc,
  })),
};

const stats = [
  {
    value: "88%",
    text: "of web designers name slow loading time as the top cause of high bounce rates. Every extra second of delay costs roughly 7% in potential sales.",
    icon: (
      <>
        <circle cx="14" cy="14" r="11" stroke="#f85415" strokeWidth="2" />
        <path d="M14 8 L14 14 L18 17" stroke="#f85415" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    value: "73%",
    text: "of visitors abandon a site that isn't properly optimised for mobile or tablet — regardless of how good the product is.",
    icon: <rect x="9" y="4" width="10" height="20" rx="2" stroke="#f85415" strokeWidth="2" />,
  },
  {
    value: "3rd",
    text: "most common reason visitors leave: poor navigation. If people can't find what they need in a few clicks, they go to a competitor.",
    icon: (
      <>
        <circle cx="14" cy="14" r="11" stroke="#f85415" strokeWidth="2" />
        <path d="M18 10 L15 15 L10 18 L13 13 Z" fill="#f85415" />
      </>
    ),
  },
];

const capabilities = [
  {
    title: "Lightning-fast load times",
    text: "Our websites are engineered to load in 2.5 seconds or less. We use optimised code, compressed assets, and performance-first architecture — because speed directly impacts both search rankings and sales.",
    icon: <path d="M14 2 L5 15 L12 15 L11 24 L21 10 L14 10 Z" fill="#f85415" />,
  },
  {
    title: "Emotionally intelligent design",
    text: "We build for how people feel, not just what they see. That means layouts that guide attention, language that speaks to intent, and CTAs placed where a visitor is psychologically ready to act.",
    icon: (
      <>
        <path d="M13 3 C7 3 4 7 4 11 C4 15 7 16 7 19 L7 21 L19 21 L19 19 C19 16 22 15 22 11 C22 7 19 3 13 3 Z" stroke="#f85415" strokeWidth="2" />
        <line x1="9" y1="24" x2="17" y2="24" stroke="#f85415" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Built-in SEO and AEO from day one",
    text: "We don't build first and optimise later. SEO (Search Engine Optimisation) and AEO (Answer Engine Optimisation) are baked into the architecture from the first wireframe — so your site is structured for Google, AI crawlers, and humans simultaneously.",
    icon: (
      <>
        <circle cx="11" cy="11" r="7" stroke="#f85415" strokeWidth="2" />
        <line x1="16" y1="16" x2="23" y2="23" stroke="#f85415" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Full-stack technology expertise",
    text: "Our team works across WordPress, Laravel, React, Angular, Node.js, WooCommerce, and Shopify — matched to your project, not defaulted to what's easiest for us.",
    icon: <path d="M9 6 L3 13 L9 20 M17 6 L23 13 L17 20" stroke="#f85415" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  },
];

const challenges = [
  { q: "Our new website isn't showing up on Google.", a: "You invested in a site, but it's invisible to the people searching for you. The cause is almost always technical — missing schema, unoptimised page structure, or content that doesn't match what your buyers actually type into search." },
  { q: "We're getting traffic, but no one's converting.", a: "Visitors arrive and leave. The issue is usually intent mismatch — the page isn't answering the question the visitor actually had when they clicked." },
  { q: "Our site doesn't work properly on phones.", a: "Your developer either skipped mobile optimisation or treated it as secondary. On a mobile-first market like India, this isn't a minor issue — it's a revenue leak." },
  { q: "We can't update our own content.", a: "You're locked out of your own website and dependent on a developer for every small change. We build on platforms you can manage, or we deliver training so your team has full control." },
];

const services = [
  ["1. Corporate Website", "Sleek, professional business sites built to drive conversion-ready outcomes for your brand."],
  ["2. E-commerce Website Development", "Online stores that are reliable, fast, rank well on Google, and are designed to sell more products."],
  ["3. WordPress Website Development", "Fully customisable, SEO-friendly WordPress sites that are simple for you to manage."],
  ["4. Custom Web Development in Pune", "Laravel, Angular, React and Node.js platforms optimised for performance and scalability."],
  ["5. Landing Pages & Micro-sites", "Focused designs that capture high-quality leads, not just fleeting attention. Your digital handshake, built to impress in milliseconds."],
];

const industries = [
  { name: "Healthcare and hospitals", href: "/industries/healthcare" },
  { name: "SaaS and IT companies", href: "/industries/saas-it" },
  { name: "Manufacturing and industrial brands", href: "/industries/manufacturing" },
  { name: "Educational institutions", href: "/industries/education" },
  { name: "E-commerce retail", href: "/industries/ecommerce" },
  { name: "Real estate and construction", href: "/industries/real-estate" },
  { name: "Professional services and consulting", href: "/industries/professional-services" },
];

const pricing = [
  ["Static / brochure website (5–10 pages)", "₹25,000 – ₹75,000"],
  ["WordPress business website", "₹40,000 – ₹1,50,000"],
  ["E-commerce website (WooCommerce / Shopify)", "₹75,000 – ₹3,00,000"],
  ["Custom web application (Laravel / React)", "₹2,00,000 – ₹10,00,000+"],
  ["Landing page / micro-site", "₹15,000 – ₹50,000"],
];

const costFactors = [
  "Number of pages and custom features required",
  "Whether content creation is included",
  "Third-party integrations (CRM, payment gateways, ERP)",
  "SEO and AEO implementation scope",
  "Post-launch support agreement",
];

const deliveryTimes = [
  ["Corporate / portfolio website", "15–30 days"],
  ["E-commerce or dynamic website", "60–90 days"],
  ["Enterprise / custom application", "Custom timeline based on integrations and scope"],
];

const support = [
  { title: "Monthly maintenance contracts (AMC)", text: "Covers software updates, security patches, uptime monitoring, and minor content changes — so your site stays current without recurring development quotes for routine tasks.", icon: <><path d="M11 3 L11 8 M11 14 L11 19 M3 11 L8 11 M14 11 L19 11" stroke="#f85415" strokeWidth="1.8" strokeLinecap="round" /><circle cx="11" cy="11" r="4" stroke="#f85415" strokeWidth="1.8" /></> },
  { title: "Content updates and feature additions", text: "As your business grows, your website needs to grow with it. We offer structured update retainers for clients who need regular changes without committing to full-scale rebuilds.", icon: <><rect x="4" y="3" width="14" height="16" rx="1.5" stroke="#f85415" strokeWidth="1.8" /><line x1="7" y1="8" x2="15" y2="8" stroke="#f85415" strokeWidth="1.8" strokeLinecap="round" /><line x1="7" y1="12" x2="15" y2="12" stroke="#f85415" strokeWidth="1.8" strokeLinecap="round" /><line x1="7" y1="16" x2="12" y2="16" stroke="#f85415" strokeWidth="1.8" strokeLinecap="round" /></> },
  { title: "Hosting and performance monitoring", text: "We can manage hosting on your behalf, or advise on the right hosting setup for your traffic and performance requirements. Speed is not a launch-day feature — it needs to be maintained.", icon: <><path d="M4 14 C4 8 8 4 14 4" stroke="#f85415" strokeWidth="1.8" strokeLinecap="round" fill="none" /><path d="M11 4 L14 4 L14 7" stroke="#f85415" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" /><rect x="3" y="14" width="16" height="5" rx="1.5" stroke="#f85415" strokeWidth="1.8" /></> },
  { title: "SEO performance tracking", text: "Post-launch, rankings and traffic need to be monitored and built on. If you're managing SEO with Foxaircomm separately, we connect website performance to your ongoing SEO strategy. If not, we'll advise on the right next step.", icon: <><path d="M3 17 L7 10 L11 13 L18 4" stroke="#f85415" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" /><path d="M13 4 L18 4 L18 9" stroke="#f85415" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" /></> },
];

const models = [
  ["Fixed-cost model", "You know exactly what you need. We define the scope, agree on the price, and deliver to spec. Best for businesses with a clear brief and a defined budget."],
  ["Time and material model", "Your project will evolve as it gets built — that's normal for complex platforms. You're billed on actual time and resources used. Best for projects with a phased or exploratory scope."],
  ["Dedicated team model", "For long-running projects or ongoing development needs, we assign a dedicated team that operates as an extension of your business. You direct the work; we handle resourcing, tooling, and delivery."],
];

// TODO: replace placeholders with real, verifiable projects before publishing.
const projects = [
  { name: "Client Name", industry: "Healthcare", type: "WordPress corporate website", outcome: "3x organic traffic in 6 months", href: "#" },
  { name: "Client Name", industry: "Education", type: "Custom Laravel platform", outcome: "Page 1 ranking for target keyword", href: "#" },
  { name: "Client Name", industry: "Manufacturing", type: "React corporate website", outcome: "40% increase in enquiry form submissions", href: "#" },
  { name: "Client Name", industry: "E-commerce", type: "Shopify store build", outcome: "2.1x conversion rate post-launch", href: "#" },
  { name: "Client Name", industry: "SaaS / IT", type: "Node.js web application", outcome: "Page load time cut from 6s to 1.8s", href: "#" },
  { name: "Client Name", industry: "Real estate", type: "WordPress + WooCommerce", outcome: "5x qualified leads in first quarter", href: "#" },
];

// TODO: replace with real testimonials (with permission) before publishing.
const testimonials = [
  { quote: "Our organic traffic tripled within six months, and we finally rank on page one for the keywords that actually bring in patients.", name: "First Last", role: "Founder", company: "Company Name, Pune" },
  { quote: "We went from 40 enquiries a month to over 150, without changing our ad spend. The website itself started doing the selling.", name: "First Last", role: "Director", company: "Company Name" },
  { quote: "They handed us a CMS our own team can run day to day. We haven't needed a developer for a content change since launch.", name: "First Last", role: "Marketing Head", company: "Company Name" },
];

const sessionPoints = [
  "Audit your current website and identify what's holding it back",
  "Map out the specific fixes that would impact leads and rankings first",
  "Give you a realistic scope and timeline for what you actually need",
];

function DataTable({ head, rows }) {
  return (
    <div className="overflow-x-auto mb-4 rounded-xl border border-black/5 bg-white">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#0B3C5D] text-white">
            <th className="px-5 py-4 font-semibold text-sm">{head[0]}</th>
            <th className="px-5 py-4 font-semibold text-sm">{head[1]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([a, b], i) => (
            <tr key={a} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
              <td className="px-5 py-4 text-gray-700 border-t border-black/5">{a}</td>
              <td className="px-5 py-4 text-gray-700 font-medium border-t border-black/5">{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function EcommWebsiteDesign() {
  return (
    <div className="bg-[#F8FAFC] text-gray-800">
      <Helmet>
        <title>eCommerce Website Development Company in Pune | Foxaircomm</title>
        <meta
          name="description"
          content="Foxaircomm builds custom eCommerce websites in Pune, including Shopify and WooCommerce development, combining strong design with development that converts."
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* HERO */}
      {/* HERO */}
      <section className="relative py-20 md:py-24 bg-[#0529a0] text-white overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#f85415]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/5 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div className="text-center md:text-left">
            <p className="text-xs font-bold tracking-widest uppercase text-[#f85415] mb-4">
              E-commerce Website Design
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
              E-Commerce Website Design Company in Pune —{" "}
              <span className="text-[#f85415]">Scalable Storefronts</span> Built for Operational Excellence
            </h1>

            <p className="text-blue-100 text-lg mb-6">
              Pune's fastest-growing online brands are not winning on product alone. They are winning
              because their stores are architected to convert from the first category page scroll to
              UPI confirmation.
            </p>

            <p className="text-xl font-semibold mb-10 max-w-xl mx-auto md:mx-0 leading-snug">
              Fox AirComm builds the infrastructure that makes that possible.
            </p>

            <Link to={CONTACT_PATH} className={`${CTA_PRIMARY} shadow-lg shadow-[#f85415]/30 mb-6`}>
              Get a Free Store Audit <Arrow />
            </Link>

            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-blue-100">
              {[
                "No retainer required",
                "Pune-based team, direct communication",
                "Response within 4 business hours",
              ].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <Check /> {t}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <img
              src="/ecommerce_storefront_hero_visual.png"
              alt="Storefront scroll to UPI checkout confirmation"
              width="520"
              height="520"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
     {/* PROBLEM */}
<section className="py-16 md:py-20 bg-[#F1F5F9]">
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C5D] mb-6 leading-tight">
      Scaling a Pune Business Online Requires More Than a Digital Catalog
    </h2>

    <p className="text-lg font-semibold text-[#0B3C5D] mb-4">
      Most e-commerce failures in the Pune market don't stem from a lack of demand, but from operational friction.
    </p>

    <p className="text-gray-600 mb-10 max-w-3xl">
      Moving from a physical footprint in Laxmi Road or Camp to a pan-India D2C model is an
      architectural shift, not just a design project. When a store doesn't align with local buyer
      behavior, revenue leaks at every stage:
    </p>

    <div className="grid sm:grid-cols-2 gap-5 mb-10">
      {frictionPoints.map((f) => (
        <div key={f.title} className="bg-white rounded-xl p-6 shadow-sm border border-black/5">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="mb-4" aria-hidden="true">
            {f.icon}
          </svg>
          <h3 className="text-lg font-bold text-[#0B3C5D] mb-2">{f.title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{f.text}</p>
        </div>
      ))}
    </div>

    <div className="p-6 md:p-8 bg-[#0B3C5D] rounded-xl">
      <p className="font-semibold text-lg md:text-xl text-white leading-snug mb-3">
        Foxaircomm builds e-commerce websites in Pune for businesses at exactly this inflection point.
      </p>
      <p className="text-blue-100 leading-relaxed">
        Our engagement starts not with a theme selection, but with a store architecture review,
        mapping your product logic, buyer journey, payment preferences, and fulfilment constraints
        before a single line of code is written.
      </p>
    </div>
  </div>
</section>

      {/* WHY US */}
   {/* WHO WE BUILD FOR */}
<section className="py-16 md:py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0B3C5D] leading-tight text-center">
      Who We Build For: Pune Businesses That Have Outgrown Their Current Store
    </h2>

    <p className="text-gray-600 max-w-3xl mx-auto mb-4 text-center">
      Foxaircomm works with businesses at a specific inflection point where demand exists, but
      the store's infrastructure cannot keep up with it.
    </p>
    <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-center">
      We do not build generic stores for generic buyers. The clients we work with share one common
      challenge: their current platform is costing them revenue they have already earned. Here is
      who we typically work with.
    </p>

    <div className="grid md:grid-cols-2 gap-6 text-left">
      {audiences.map((a, i) => (
        <div
          key={a.title}
          className={`bg-[#F8FAFC] p-6 rounded-xl border border-black/5 border-l-4 border-l-[#f85415] ${
            i === audiences.length - 1 ? "md:col-span-2" : ""
          }`}
        >
          <h3 className="text-lg font-bold text-[#0B3C5D] mb-3">{a.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">{a.situation}</p>
          <p className="text-gray-700 text-sm leading-relaxed font-medium">{a.need}</p>
        </div>
      ))}
    </div>

    <div className="text-center">
      <Link to={CONTACT_PATH} className={`${CTA_PRIMARY} mt-10`}>
        Talk to Our Team — Free 30-Min Session <Arrow />
      </Link>
    </div>
  </div>
</section>

      {/* CHALLENGES */}
      <section className="py-16 md:py-20 bg-[#F1F5F9]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0B3C5D] leading-tight">
            Common Website Problems We Solve for Pune Businesses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            These are the exact situations our clients come to us with. If any of these sound familiar, you're not alone — and each one has a clear fix.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {challenges.map((c) => (
              <div key={c.q} className="bg-white p-6 rounded-xl shadow-sm border border-black/5">
                <QuoteIcon />
                <p className="font-semibold text-[#0B3C5D] mb-3 italic">"{c.q}"</p>
                <p className="text-gray-600 text-sm leading-relaxed">{c.a}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            We've diagnosed and fixed each of these problems across{" "}
            <span className="font-semibold text-[#0B3C5D]">120+ projects</span>. The pattern is consistent: most websites are built to launch, not to perform. Our job is to build for performance first.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#0B3C5D]">Web Development Services at Foxaircomm</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            We design everything your brand needs, not just to survive but to scale online.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {services.map(([title, desc]) => (
              <div key={title} className="bg-white p-6 rounded-xl shadow border border-black/5">
                <h3 className="text-xl font-bold text-[#0B3C5D] mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#0B3C5D] leading-tight">
            How We Build Websites That Rank and Convert — Our 5-Step Process
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            We're not building websites and then bolting on SEO fixes. SEO practices are part of the design from the very start.
          </p>

          <div className="relative mt-16">
            <div className="hidden md:block absolute left-6 top-2 bottom-2 w-px bg-gray-200" />
            <div className="space-y-10">
              {howToSteps.map((s, i) => (
                <div key={s.title} className="relative flex gap-6">
                  <div
                    className={`relative z-10 shrink-0 w-12 h-12 rounded-full text-white flex items-center justify-center font-bold ${i === howToSteps.length - 1 ? "bg-[#f85415]" : "bg-[#0B3C5D]"
                      }`}
                  >
                    {i + 1}
                  </div>
                  <div className="pt-1.5">
                    <p className="text-xs font-semibold tracking-wide text-[#f85415] uppercase mb-1">Step {i + 1}</p>
                    <h3 className="text-xl font-bold text-[#0B3C5D] mb-2">{s.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-16 md:py-20 bg-[#F1F5F9] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0B3C5D] leading-tight">
            Web Development in Pune for Every Industry
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            We build for businesses across sectors — and each project is built around what converts in that industry, not a generic template adapted to fit.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {industries.map((industry) => (
              <Link
                key={industry.name}
                to={industry.href}
                className="px-5 py-2.5 bg-white border border-black/5 rounded-full text-sm font-medium text-[#0B3C5D] hover:border-[#f85415] hover:text-[#f85415] transition-colors"
              >
                {industry.name}
              </Link>
            ))}
          </div>

          <Link to={CONTACT_PATH} className={CTA_PRIMARY}>
            Tell Us About Your Project <Arrow />
          </Link>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0B3C5D] text-center leading-tight">
            Website Development Cost in Pune — What to Expect
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Website development costs in Pune range broadly, depending on scope, technology, and complexity. Here's a realistic breakdown to help you plan:
          </p>

          <DataTable head={["Website type", "Indicative price range"]} rows={pricing} />

          <p className="text-sm text-center text-gray-500 mb-12">
            Indicative pricing. Final cost depends on project scope and requirements.
          </p>

          <div className="max-w-xl mx-auto mb-10">
            <div className="bg-[#F8FAFC] border border-black/5 rounded-2xl px-8 py-7 mb-6">
              <p className="text-xs font-bold tracking-wide uppercase text-[#f85415] mb-4">What affects the final cost</p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {costFactors.map((item, i) => (
                  <div
                    key={item}
                    className={`flex gap-2.5 items-start ${i === costFactors.length - 1 ? "sm:col-span-2" : ""}`}
                  >
                    <Check fill="#0B3C5D" size={18} />
                    <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0B3C5D] rounded-2xl p-8 text-center">
              <p className="text-white font-semibold text-lg leading-relaxed mb-5 max-w-md mx-auto">
                We share a clear project estimate after your free strategy session — no hidden line items.
              </p>
              <Link to={CONTACT_PATH} className={CTA_PRIMARY}>
                Get a Project Estimate — Free <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERY TIMELINES */}
      <section className="py-16 md:py-20 bg-[#F5F7FB]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#0B3C5D] leading-tight">
            Website Delivery Timelines — What to Expect
          </h2>
          <DataTable head={["Project type", "Estimated timeline"]} rows={deliveryTimes} />
          <p className="text-gray-600 text-center max-w-xl mx-auto">
            Timelines are confirmed at the scoping stage and tracked with milestone sign-offs. No silent delays.
          </p>
        </div>
      </section>

      {/* MAINTENANCE */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#0B3C5D] leading-tight">
            Website Maintenance and Support After Launch
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            A website is not a one-time project. Every site we deliver comes with post-launch clarity on what happens next.
          </p>

          <div className="divide-y divide-gray-200">
            {support.map((s) => (
              <div key={s.title} className="flex gap-5 py-7 first:pt-0 last:pb-0">
                <div className="shrink-0 w-12 h-12 rounded-full bg-[#F1F5F9] flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    {s.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0B3C5D] mb-1.5">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="py-16 md:py-20 bg-[#F5F7FB]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#0B3C5D] leading-tight">
            Flexible Engagement Models for Every Business Size
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Not every project fits a fixed scope. We offer three ways to work with us:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {models.map(([title, text]) => (
              <div key={title} className="bg-white p-7 rounded-xl border border-black/5">
                <p className="text-xs font-bold tracking-wide uppercase text-[#f85415] mb-3">{title}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#0B3C5D] leading-tight">
            Websites We've Built for Pune Businesses
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            A sample of recent projects and the measurable results behind them.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <div key={i} className="bg-[#F8FAFC] rounded-xl border border-black/5 p-6 flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-[#0B3C5D] text-white flex items-center justify-center font-bold text-lg mb-4">
                  {p.name.charAt(0)}
                </div>
                <p className="font-bold text-[#0B3C5D] mb-1">{p.name}</p>
                <p className="text-xs text-gray-500 mb-4">{p.industry}</p>
                <div className="text-sm text-gray-600 mb-1">
                  <span className="font-medium text-[#0B3C5D]">Project: </span>
                  {p.type}
                </div>
                <div className="text-sm text-gray-600 mb-5">
                  <span className="font-medium text-[#0B3C5D]">Outcome: </span>
                  {p.outcome}
                </div>
                <a href={p.href} className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-[#f85415] hover:underline">
                  View case study <Arrow />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-20 bg-[#F5F7FB]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0B3C5D] leading-tight">
            What Pune Business Owners Say About Working With Us
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/5 p-7">
                <QuoteIcon />
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{t.quote}"</p>
                <p className="font-semibold text-[#0B3C5D]">{t.name}</p>
                <p className="text-sm text-gray-500">
                  {t.role}, {t.company}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#0B3C5D] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">How to Get Started With Foxaircomm</h2>
          <p className="text-blue-100 mb-10 max-w-xl mx-auto">
            The first step is a free 30-minute strategy session — no jargon, no sales pitch. In this call, we will:
          </p>

          <div className="grid sm:grid-cols-3 gap-5 mb-10 text-left">
            {sessionPoints.map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="w-8 h-8 rounded-full bg-[#f85415] text-white flex items-center justify-center font-bold text-sm mb-3">
                  {i + 1}
                </div>
                <p className="text-sm text-blue-100 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-blue-200/80 text-sm mb-10 max-w-xl mx-auto">
            We've run this session for 120+ businesses across Pune, Mumbai, and Ahmedabad. Most leave with a clearer picture of the problem than they arrived with — regardless of whether they work with us.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={CONTACT_PATH} className={CTA_PRIMARY}>
              Book Your Free Strategy Session <Arrow />
            </Link>
            <a href={PHONE_TEL} className={CTA_OUTLINE}>
              Call 88798 64151
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={CTA_OUTLINE}>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EcommWebsiteDesign;