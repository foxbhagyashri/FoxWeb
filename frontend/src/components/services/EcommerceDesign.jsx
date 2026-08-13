import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function WebsiteDesign() {


  const process = [
    { step: "1", title: "Research", desc: "We study your audience, competitors & goals." },
    { step: "2", title: "Strategy", desc: "We plan UX, content & SEO structure." },
    { step: "3", title: "Development", desc: "We build fast, scalable websites." },
    { step: "4", title: "SEO Setup", desc: "Optimized for Google & AI search." },
    { step: "5", title: "Launch & Growth", desc: "Testing, tracking & improvements." }
  ];

  return (
    <div className="bg-[#F8FAFC] text-gray-800">

      <Helmet>
        <title>eCommerce Website Development Company in Pune | Fox Aircomm
        </title>
        <meta name="description" content="Fox Aircomm builds custom eCommerce websites in Pune, including Shopify and WooCommerce development, combining strong design with development that converts." />
      </Helmet>

      {/* HERO */}
      <section className="relative py-20 md:py-24 bg-[#0529a0] text-white overflow-hidden">

        <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#f85415]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/5 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          <div className="text-center md:text-left">

            <p className="text-xs font-bold tracking-widest uppercase text-[#f85415] mb-4">
              E-commerce Website Development
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
              E-Commerce Website Development Company in Pune —{' '}
              <span className="text-[#f85415]">Scalable Storefronts</span> Built for
              Operational Excellence
            </h1>

            <p className="text-blue-100 text-lg mb-1">
              Pune's fastest-growing online brands are not winning on product alone.
            </p>
            <p className="text-blue-100 text-lg mb-6">
              They are winning because their stores are architected to convert from
              the first category page scroll to UPI confirmation.
            </p>

            <p className="text-xl font-semibold mb-10 max-w-xl mx-auto md:mx-0 leading-snug">
              Foxaircomm builds the infrastructure that makes that possible.
            </p>


            <a href="tel:8879864151"
              className="inline-flex items-center gap-2 bg-[#f85415] hover:bg-[#e04a0f] transition-colors px-8 py-4 text-white font-bold text-lg rounded-xl shadow-lg shadow-[#f85415]/30 mb-6"
            >
              Get a Free Store Audit
              <span aria-hidden="true">→</span>
            </a>

            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-blue-100">
              <span className="inline-flex items-center gap-1.5">
                <svg width="16" height="16" viewBox="0 0 16 16" className="shrink-0"><circle cx="8" cy="8" r="8" fill="#f85415" /><path d="M4.5 8.2 L6.7 10.5 L11.5 5.5" stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                No retainer required
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg width="16" height="16" viewBox="0 0 16 16" className="shrink-0"><circle cx="8" cy="8" r="8" fill="#f85415" /><path d="M4.5 8.2 L6.7 10.5 L11.5 5.5" stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Pune-based team, direct communication
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg width="16" height="16" viewBox="0 0 16 16" className="shrink-0"><circle cx="8" cy="8" r="8" fill="#f85415" /><path d="M4.5 8.2 L6.7 10.5 L11.5 5.5" stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Response within 4 business hours
              </span>
            </div>

          </div>

          <div className="hidden md:flex justify-center">
            {/* paste the storefold-to-checkout SVG shown below here */}
            <img src="/ecommerce_storefront_hero_visual.png" alt="Storefront scroll to UPI checkout confirmation" />
          </div>

        </div>
      </section>
      {/* PROBLEM */}
      <section className="py-16 md:py-20 bg-[#F1F5F9]">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C5D] mb-6 leading-tight">
            What Does a Poorly Built Website Actually Cost Your Business?
          </h2>

          <p className="text-lg font-semibold text-[#0B3C5D] mb-4">
            Your website isn't a digital brochure. It's your most active salesperson —
            and like a salesperson, it either earns its keep or it doesn't.
          </p>

          <p className="text-gray-600 mb-10 max-w-3xl">
            Here's the part most agencies won't say out loud: if your website is slow,
            hard to navigate, or invisible on Google, your business is losing leads
            right now — not next quarter.
          </p>

          {/* Stat cards */}
          <div className="grid sm:grid-cols-3 gap-5 mb-4">

            <div className="bg-white rounded-xl p-6 shadow-sm border border-black/5">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="mb-4">
                <circle cx="14" cy="14" r="11" stroke="#f85415" strokeWidth="2" />
                <path d="M14 8 L14 14 L18 17" stroke="#f85415" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-3xl font-bold text-[#0B3C5D] mb-1">88%</p>
              <p className="text-sm text-gray-600 leading-snug">
                of web designers name slow loading time as the top cause of high
                bounce rates. Every extra second of delay costs roughly 7% in
                potential sales.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-black/5">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="mb-4">
                <rect x="9" y="4" width="10" height="20" rx="2" stroke="#f85415" strokeWidth="2" />
                <line x1="14" y1="20" x2="14" y2="20.5" stroke="#f85415" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <p className="text-3xl font-bold text-[#0B3C5D] mb-1">73%</p>
              <p className="text-sm text-gray-600 leading-snug">
                of visitors abandon a site that isn't properly optimised for mobile
                or tablet — regardless of how good the product is.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-black/5">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="mb-4">
                <circle cx="14" cy="14" r="11" stroke="#f85415" strokeWidth="2" />
                <path d="M18 10 L15 15 L10 18 L13 13 Z" fill="#f85415" />
              </svg>
              <p className="text-3xl font-bold text-[#0B3C5D] mb-1">3rd</p>
              <p className="text-sm text-gray-600 leading-snug">
                most common reason visitors leave: poor navigation. If people can't
                find what they need in a few clicks, they go to a competitor.
              </p>
            </div>

          </div>

          <p className="text-xs text-gray-500 italic mb-10">
            Source: Goodfirms survey; UX and web performance research cited across
            leading design publications.
          </p>

          <div className="p-6 md:p-8 bg-[#0B3C5D] rounded-xl">
            <p className="font-semibold text-lg md:text-xl text-white leading-snug">
              Businesses with average websites spend money driving traffic to a page
              that quietly turns leads away. That's the real cost of "good enough."
            </p>
          </div>

        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0B3C5D] leading-tight">
            Why Pune Businesses Choose Foxaircomm as Their Web Development Agency
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-4">
            Pune has no shortage of developers. What's rare is a team that understands
            where your website sits inside your sales funnel, how Google decides what
            to rank, and how a visitor actually makes a buying decision.
          </p>

          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            Foxaircomm has delivered <span className="font-semibold text-[#0B3C5D]">120+ digital experiences</span> across
            Pune, Mumbai, and Ahmedabad — for industries ranging from healthcare and
            education to manufacturing and e-commerce. Here's what sets us apart:
          </p>

          {/* Capability cards */}
          <div className="grid sm:grid-cols-2 gap-6 text-left">

            <div className="bg-[#F8FAFC] p-6 rounded-xl border border-black/5">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" className="mb-3">
                <path d="M14 2 L5 15 L12 15 L11 24 L21 10 L14 10 Z" fill="#f85415" />
              </svg>
              <h3 className="font-semibold text-[#0B3C5D] mb-2">Lightning-fast load times</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our websites are engineered to load in 2.5 seconds or less. We use
                optimised code, compressed assets, and performance-first architecture —
                because speed directly impacts both search rankings and sales.
              </p>
            </div>

            <div className="bg-[#F8FAFC] p-6 rounded-xl border border-black/5">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" className="mb-3">
                <path d="M13 3 C7 3 4 7 4 11 C4 15 7 16 7 19 L7 21 L19 21 L19 19 C19 16 22 15 22 11 C22 7 19 3 13 3 Z" stroke="#f85415" strokeWidth="2" />
                <line x1="9" y1="24" x2="17" y2="24" stroke="#f85415" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <h3 className="font-semibold text-[#0B3C5D] mb-2">Emotionally intelligent design</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We build for how people feel, not just what they see. That means
                layouts that guide attention, language that speaks to intent, and
                CTAs placed where a visitor is psychologically ready to act.
              </p>
            </div>

            <div className="bg-[#F8FAFC] p-6 rounded-xl border border-black/5">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" className="mb-3">
                <circle cx="11" cy="11" r="7" stroke="#f85415" strokeWidth="2" />
                <line x1="16" y1="16" x2="23" y2="23" stroke="#f85415" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <h3 className="font-semibold text-[#0B3C5D] mb-2">Built-in SEO and AEO from day one</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We don't build first and optimise later. SEO (Search Engine
                Optimisation) and AEO (Answer Engine Optimisation) are baked into the
                architecture from the first wireframe — so your site is structured
                for Google, AI crawlers, and humans simultaneously.
              </p>
            </div>

            <div className="bg-[#F8FAFC] p-6 rounded-xl border border-black/5">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" className="mb-3">
                <path d="M9 6 L3 13 L9 20 M17 6 L23 13 L17 20" stroke="#f85415" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              <h3 className="font-semibold text-[#0B3C5D] mb-2">Full-stack technology expertise</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our team works across WordPress, Laravel, React, Angular, Node.js,
                WooCommerce, and Shopify — matched to your project, not defaulted to
                what's easiest for us.
              </p>
            </div>

          </div>

          {/* Outcome stat callout */}
          <div className="mt-8 p-6 md:p-8 bg-[#0B3C5D] rounded-xl text-left">
            <p className="text-white font-semibold text-lg leading-snug mb-2">
              Cosmetic redesigns can lift conversions by 200%. Comprehensive UX
              overhauls can push that to 400%. We target the second number.
            </p>
            <p className="text-blue-200/70 text-xs italic">
              Source: UXtweak, ROI of UX research
            </p>
          </div>


          <a href="tel:8879864151"
            className="inline-flex items-center gap-2 mt-10 bg-[#f85415] hover:bg-[#e04a0f] transition-colors px-8 py-4 text-white font-bold text-lg rounded-xl"
          >
            Talk to Our Team — Free 30-Min Session
            <span aria-hidden="true">→</span>
          </a>

        </div>
      </section>

      {/* CHALLENGES */}
      {/* CHALLENGES */}
      <section className="py-16 md:py-20 bg-[#F1F5F9]">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0B3C5D] leading-tight">
            Common Website Problems We Solve for Pune Businesses
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            These are the exact situations our clients come to us with. If any of
            these sound familiar, you're not alone — and each one has a clear fix.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left">

            <div className="bg-white p-6 rounded-xl shadow-sm border border-black/5">
              <svg width="24" height="18" viewBox="0 0 24 18" fill="none" className="mb-3">
                <path d="M0 18 L0 10 C0 4 4 0 9 0 L9 4 C6 4 4 6 4 9 L9 9 L9 18 Z M14 18 L14 10 C14 4 18 0 23 0 L23 4 C20 4 18 6 18 9 L23 9 L23 18 Z" fill="#c7d0f0" />
              </svg>
              <p className="font-semibold text-[#0B3C5D] mb-3 italic">
                "Our new website isn't showing up on Google."
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                You invested in a site, but it's invisible to the people searching
                for you. The cause is almost always technical — missing schema,
                unoptimised page structure, or content that doesn't match what your
                buyers actually type into search.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-black/5">
              <svg width="24" height="18" viewBox="0 0 24 18" fill="none" className="mb-3">
                <path d="M0 18 L0 10 C0 4 4 0 9 0 L9 4 C6 4 4 6 4 9 L9 9 L9 18 Z M14 18 L14 10 C14 4 18 0 23 0 L23 4 C20 4 18 6 18 9 L23 9 L23 18 Z" fill="#c7d0f0" />
              </svg>
              <p className="font-semibold text-[#0B3C5D] mb-3 italic">
                "We're getting traffic, but no one's converting."
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Visitors arrive and leave. The issue is usually intent mismatch —
                the page isn't answering the question the visitor actually had when
                they clicked.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-black/5">
              <svg width="24" height="18" viewBox="0 0 24 18" fill="none" className="mb-3">
                <path d="M0 18 L0 10 C0 4 4 0 9 0 L9 4 C6 4 4 6 4 9 L9 9 L9 18 Z M14 18 L14 10 C14 4 18 0 23 0 L23 4 C20 4 18 6 18 9 L23 9 L23 18 Z" fill="#c7d0f0" />
              </svg>
              <p className="font-semibold text-[#0B3C5D] mb-3 italic">
                "Our site doesn't work properly on phones."
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your developer either skipped mobile optimisation or treated it as
                secondary. With 73% of browsing happening on mobile, this isn't a
                minor issue — it's a revenue leak.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-black/5">
              <svg width="24" height="18" viewBox="0 0 24 18" fill="none" className="mb-3">
                <path d="M0 18 L0 10 C0 4 4 0 9 0 L9 4 C6 4 4 6 4 9 L9 9 L9 18 Z M14 18 L14 10 C14 4 18 0 23 0 L23 4 C20 4 18 6 18 9 L23 9 L23 18 Z" fill="#c7d0f0" />
              </svg>
              <p className="font-semibold text-[#0B3C5D] mb-3 italic">
                "We can't update our own content."
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                You're locked out of your own website and dependent on a developer
                for every small change. We build on platforms you can manage, or we
                deliver training so your team has full control.
              </p>
            </div>

          </div>

          <p className="mt-10 text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            We've diagnosed and fixed each of these problems across{' '}
            <span className="font-semibold text-[#0B3C5D]">120+ projects</span>.
            The pattern is consistent: most websites are built to launch, not to
            perform. Our job is to build for performance first.
          </p>

        </div>
      </section>
      {/* SERVICES */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-10 text-[#0B3C5D]">
            What technologies does Foxaircomm specialize in?

          </h2>
          <p>We design everything your brand needs —not just to survive, but to scale and achieve success online truly.
          </p>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold">1. Corporate Website:
              </h3>
              Website not ranking on GoogleWe design sleek, professional business sites built to drive conversion-ready outcomes for your brand.

            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold">2. E-commerce Website Development:

              </h3>
              We are an e-commerce development company that builds online stores to be reliable, fast, rank high on Google, and are designed to sell more products.

            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold">3.WordPress Website Development:

              </h3>
              We are one of the best WordPress website development companies in Pune, building fully customizable, SEO-friendly WordPress sites that are simple for you to manage.

            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold">4. Custom Web Development in Pune:

              </h3>
              Need something powerful? We use advanced technologies (Laravel, Angular, React, Node.js) to build platforms optimized for high performance and scalability.

            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold">5. Landing Pages & Micro-sites:


              </h3>
              Focused designs that quickly capture high-quality leads, not just fleeting attention.
              <br></br>
              Every website we build is your essential digital handshake—designed to make a strong, professional impression in milliseconds.


            </div>


          </div>
        </div>
      </section>

      {/* PROCESS (ATTRACTIVE TIMELINE) */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#0B3C5D] leading-tight">
            How We Build Websites That Rank and Convert — Our 5-Step Process
          </h2>

          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-1">
            We're not building websites and then bolting on SEO fixes. SEO practices
            are part of the design from the very start.
          </p>

          <div className="relative mt-16">

            {/* connecting line */}
            <div className="hidden md:block absolute left-6 top-2 bottom-2 w-px bg-gray-200" />

            <div className="space-y-10">

              <div className="relative flex gap-6">
                <div className="relative z-10 shrink-0 w-12 h-12 rounded-full bg-[#0B3C5D] text-white flex items-center justify-center font-bold">1</div>
                <div className="pt-1.5">
                  <p className="text-xs font-semibold tracking-wide text-[#f85415] uppercase mb-1">Step 1</p>
                  <h3 className="text-xl font-bold text-[#0B3C5D] mb-2">Deep-dive research</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We start by analysing your competitors, auditing your current
                    digital presence, and mapping the specific search queries your
                    buyers use. No assumptions. Everything starts with data.
                  </p>
                </div>
              </div>

              <div className="relative flex gap-6">
                <div className="relative z-10 shrink-0 w-12 h-12 rounded-full bg-[#0B3C5D] text-white flex items-center justify-center font-bold">2</div>
                <div className="pt-1.5">
                  <p className="text-xs font-semibold tracking-wide text-[#f85415] uppercase mb-1">Step 2</p>
                  <h3 className="text-xl font-bold text-[#0B3C5D] mb-2">User-focused design and content plan</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We create a design experience aligned to how you want your
                    visitor to feel — confident, reassured, ready to act. Alongside
                    design, we build a keyword-to-section content map so every page
                    section serves a search intent, not just a visual purpose.
                  </p>
                </div>
              </div>

              <div className="relative flex gap-6">
                <div className="relative z-10 shrink-0 w-12 h-12 rounded-full bg-[#0B3C5D] text-white flex items-center justify-center font-bold">3</div>
                <div className="pt-1.5">
                  <p className="text-xs font-semibold tracking-wide text-[#f85415] uppercase mb-1">Step 3</p>
                  <h3 className="text-xl font-bold text-[#0B3C5D] mb-2">Development and technical setup</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our developers write clean, optimised code. We implement
                    performance standards from the first line — not as a post-build
                    checklist. Page speed, code efficiency, and mobile responsiveness
                    are built in throughout.
                  </p>
                </div>
              </div>

              <div className="relative flex gap-6">
                <div className="relative z-10 shrink-0 w-12 h-12 rounded-full bg-[#0B3C5D] text-white flex items-center justify-center font-bold">4</div>
                <div className="pt-1.5">
                  <p className="text-xs font-semibold tracking-wide text-[#f85415] uppercase mb-1">Step 4</p>
                  <h3 className="text-xl font-bold text-[#0B3C5D] mb-2">SEO and AEO implementation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We set up Schema markup (FAQPage, HowTo, LocalBusiness, Service),
                    internal linking architecture, and content structured to appear
                    in Google's featured snippets and AI Overviews — the goal:
                    visibility in both traditional search and AI-generated answers.
                  </p>
                </div>
              </div>

              <div className="relative flex gap-6">
                <div className="relative z-10 shrink-0 w-12 h-12 rounded-full bg-[#f85415] text-white flex items-center justify-center font-bold">5</div>
                <div className="pt-1.5">
                  <p className="text-xs font-semibold tracking-wide text-[#f85415] uppercase mb-1">Step 5</p>
                  <h3 className="text-xl font-bold text-[#0B3C5D] mb-2">Testing, launch, and results review</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Before launch, we test page speed, lead tracking, session
                    engagement, and cross-device rendering. After launch, we review
                    performance against benchmarks and identify opportunities for
                    the next iteration. You receive a report, not silence.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How Foxaircomm builds websites that rank and convert",
            "step": [
              { "@type": "HowToStep", "position": 1, "name": "Deep-dive research", "text": "We start by analysing your competitors, auditing your current digital presence, and mapping the specific search queries your buyers use." },
              { "@type": "HowToStep", "position": 2, "name": "User-focused design and content plan", "text": "We create a design experience aligned to how you want your visitor to feel, and build a keyword-to-section content map so every page section serves a search intent." },
              { "@type": "HowToStep", "position": 3, "name": "Development and technical setup", "text": "Our developers write clean, optimised code with performance standards implemented from the first line." },
              { "@type": "HowToStep", "position": 4, "name": "SEO and AEO implementation", "text": "We set up Schema markup, internal linking architecture, and content structured to appear in Google's featured snippets and AI Overviews." },
              { "@type": "HowToStep", "position": 5, "name": "Testing, launch, and results review", "text": "We test page speed, lead tracking, session engagement, and cross-device rendering before and after launch, and deliver a performance report." }
            ]
          })
        }} />
      </section>

      {/* TIMELINE */}
      <section className="py-16 md:py-20 bg-[#F1F5F9] text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0B3C5D] leading-tight">
            Web Development in Pune for Every Industry
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            We build for businesses across sectors — and each project is built
            around what converts in that industry, not a generic template adapted
            to fit.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { name: 'Healthcare and hospitals', href: '/industries/healthcare' },
              { name: 'SaaS and IT companies', href: '/industries/saas-it' },
              { name: 'Manufacturing and industrial brands', href: '/industries/manufacturing' },
              { name: 'Educational institutions', href: '/industries/education' },
              { name: 'E-commerce retail', href: '/industries/ecommerce' },
              { name: 'Real estate and construction', href: '/industries/real-estate' },
              { name: 'Professional services and consulting', href: '/industries/professional-services' },
            ].map((industry) => (

              <a key={industry.name}
                href={industry.href}
                className="px-5 py-2.5 bg-white border border-black/5 rounded-full text-sm font-medium text-[#0B3C5D] hover:border-[#f85415] hover:text-[#f85415] transition-colors"
              >
                {industry.name}
              </a>
            ))}
          </div>


          <a href="tel:8879864151"
            className="inline-flex items-center gap-2 bg-[#f85415] hover:bg-[#e04a0f] transition-colors px-8 py-4 text-white font-bold text-lg rounded-xl"
          >
            Tell Us About Your Project
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0B3C5D] text-center leading-tight">
            Website Development Cost in Pune — What to Expect
          </h2>

          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Website development costs in Pune range broadly, depending on scope,
            technology, and complexity. Here's a realistic breakdown to help you
            plan:
          </p>

          <div className="overflow-x-auto mb-4 rounded-xl border border-black/5">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0B3C5D] text-white">
                  <th className="px-5 py-4 font-semibold text-sm">Website type</th>
                  <th className="px-5 py-4 font-semibold text-sm">Indicative price range</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Static / brochure website (5–10 pages)', '₹25,000 – ₹75,000'],
                  ['WordPress business website', '₹40,000 – ₹1,50,000'],
                  ['E-commerce website (WooCommerce / Shopify)', '₹75,000 – ₹3,00,000'],
                  ['Custom web application (Laravel / React)', '₹2,00,000 – ₹10,00,000+'],
                  ['Landing page / micro-site', '₹15,000 – ₹50,000'],
                ].map(([type, range], i) => (
                  <tr key={type} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}>
                    <td className="px-5 py-4 text-gray-700 border-t border-black/5">{type}</td>
                    <td className="px-5 py-4 text-gray-700 font-medium border-t border-black/5">{range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xl text-center text-gray-800 mb-12 font-weight-bold">
            Indicative pricing. Final cost depends on project scope and requirements.
          </p>

          <div className="max-w-xl mx-auto mb-10">
            <div className="bg-[#F8FAFC] border border-black/5 rounded-2xl px-8 py-7 mb-6">
              <p className="text-xs font-bold tracking-wide uppercase text-[#f85415] mb-4">
                What affects the final cost
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {[
                  'Number of pages and custom features required',
                  'Whether content creation is included',
                  'Third-party integrations (CRM, payment gateways, ERP)',
                  'SEO and AEO implementation scope',
                ].map((item) => (
                  <div key={item} className="flex gap-2.5 items-start">
                    <svg width="18" height="18" viewBox="0 0 18 18" className="shrink-0 mt-0.5">
                      <circle cx="9" cy="9" r="9" fill="#0B3C5D" />
                      <path d="M5 9.5 L7.5 12 L13 6" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                  </div>
                ))}
                <div className="flex gap-2.5 items-start sm:col-span-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" className="shrink-0 mt-0.5">
                    <circle cx="9" cy="9" r="9" fill="#0B3C5D" />
                    <path d="M5 9.5 L7.5 12 L13 6" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm text-gray-600 leading-relaxed">Post-launch support agreement</span>
                </div>
              </div>
            </div>

            <div className="bg-[#0B3C5D] rounded-2xl p-8 text-center">
              <p className="text-white font-semibold text-lg leading-relaxed mb-5 max-w-md mx-auto">
                We share a clear project estimate after your free strategy session — no hidden line items.
              </p>

              <a href="tel:8879864151"
                className="inline-flex items-center gap-2 bg-[#f85415] hover:bg-[#e04a0f] transition-colors px-8 py-4 text-white font-bold text-lg rounded-xl"
              >
                Get a Project Estimate — Free
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* LAUNCH TIMELINE - PROFESSIONAL */}
      {/* LAUNCH TIMELINE */}
      <section className="py-20 bg-[#F5F7FB]">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#0B3C5D] leading-tight">
            Website Delivery Timelines — What to Expect
          </h2>

          <div className="overflow-x-auto mb-4 rounded-xl border border-black/5 bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0B3C5D] text-white">
                  <th className="px-5 py-4 font-semibold text-sm">Project type</th>
                  <th className="px-5 py-4 font-semibold text-sm">Estimated timeline</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Corporate / portfolio website', '15–30 days'],
                  ['E-commerce or dynamic website', '60–90 days'],
                  ['Enterprise / custom application', 'Custom timeline based on integrations and scope'],
                ].map(([type, time], i) => (
                  <tr key={type} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}>
                    <td className="px-5 py-4 text-gray-700 border-t border-black/5">{type}</td>
                    <td className="px-5 py-4 text-gray-700 font-medium border-t border-black/5">{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-600 text-center max-w-xl mx-auto">
            Timelines are confirmed at the scoping stage and tracked with milestone
            sign-offs. No silent delays.
          </p>

        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#0B3C5D] leading-tight">
            Website Maintenance and Support After Launch
          </h2>

          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            A website is not a one-time project. Every site we deliver comes with
            post-launch clarity on what happens next.
          </p>

          <div className="divide-y divide-gray-200">

            <div className="flex gap-5 py-7 first:pt-0">
              <div className="shrink-0 w-12 h-12 rounded-full bg-[#F1F5F9] flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M11 3 L11 8 M11 14 L11 19 M3 11 L8 11 M14 11 L19 11" stroke="#f85415" strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="11" cy="11" r="4" stroke="#f85415" strokeWidth="1.8" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B3C5D] mb-1.5">Monthly maintenance contracts (AMC)</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Covers software updates, security patches, uptime monitoring, and
                  minor content changes — so your site stays current without
                  recurring development quotes for routine tasks.
                </p>
              </div>
            </div>

            <div className="flex gap-5 py-7">
              <div className="shrink-0 w-12 h-12 rounded-full bg-[#F1F5F9] flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="4" y="3" width="14" height="16" rx="1.5" stroke="#f85415" strokeWidth="1.8" />
                  <line x1="7" y1="8" x2="15" y2="8" stroke="#f85415" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="7" y1="12" x2="15" y2="12" stroke="#f85415" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="7" y1="16" x2="12" y2="16" stroke="#f85415" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B3C5D] mb-1.5">Content updates and feature additions</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  As your business grows, your website needs to grow with it. We
                  offer structured update retainers for clients who need regular
                  changes without committing to full-scale rebuilds.
                </p>
              </div>
            </div>

            <div className="flex gap-5 py-7">
              <div className="shrink-0 w-12 h-12 rounded-full bg-[#F1F5F9] flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M4 14 C4 8 8 4 14 4" stroke="#f85415" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                  <path d="M11 4 L14 4 L14 7" stroke="#f85415" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <rect x="3" y="14" width="16" height="5" rx="1.5" stroke="#f85415" strokeWidth="1.8" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B3C5D] mb-1.5">Hosting and performance monitoring</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  We can manage hosting on your behalf, or advise on the right
                  hosting setup for your traffic and performance requirements.
                  Speed is not a launch-day feature — it needs to be maintained.
                </p>
              </div>
            </div>

            <div className="flex gap-5 py-7 last:pb-0">
              <div className="shrink-0 w-12 h-12 rounded-full bg-[#F1F5F9] flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M3 17 L7 10 L11 13 L18 4" stroke="#f85415" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <path d="M13 4 L18 4 L18 9" stroke="#f85415" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B3C5D] mb-1.5">SEO performance tracking</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Post-launch, rankings and traffic need to be monitored and built
                  on. If you're managing SEO with Foxaircomm separately, we connect
                  website performance to your ongoing SEO strategy. If not, we'll
                  advise on the right next step.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F5F7FB]">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#0B3C5D] leading-tight">
            Flexible Engagement Models for Every Business Size
          </h2>

          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Not every project fits a fixed scope. We offer three ways to work with us:
          </p>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-7 rounded-xl border border-black/5">
              <p className="text-xs font-bold tracking-wide uppercase text-[#f85415] mb-3">Fixed-cost model</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                You know exactly what you need. We define the scope, agree on the
                price, and deliver to spec. Best for businesses with a clear brief
                and a defined budget.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl border border-black/5">
              <p className="text-xs font-bold tracking-wide uppercase text-[#f85415] mb-3">Time and material model</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your project will evolve as it gets built — that's normal for
                complex platforms. You're billed on actual time and resources used.
                Best for projects with a phased or exploratory scope.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl border border-black/5">
              <p className="text-xs font-bold tracking-wide uppercase text-[#f85415] mb-3">Dedicated team model</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                For long-running projects or ongoing development needs, we assign a
                dedicated team that operates as an extension of your business. You
                direct the work; we handle resourcing, tooling, and delivery.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#0B3C5D] leading-tight">
            Websites We've Built for Pune Businesses
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            A sample of recent projects and the measurable results behind them.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Client Name', industry: 'Healthcare', type: 'WordPress corporate website', outcome: '3x organic traffic in 6 months', href: '#' },
              { name: 'Client Name', industry: 'Education', type: 'Custom Laravel platform', outcome: 'Page 1 ranking for target keyword', href: '#' },
              { name: 'Client Name', industry: 'Manufacturing', type: 'React corporate website', outcome: '40% increase in enquiry form submissions', href: '#' },
              { name: 'Client Name', industry: 'E-commerce', type: 'Shopify store build', outcome: '2.1x conversion rate post-launch', href: '#' },
              { name: 'Client Name', industry: 'SaaS / IT', type: 'Node.js web application', outcome: 'Page load time cut from 6s to 1.8s', href: '#' },
              { name: 'Client Name', industry: 'Real estate', type: 'WordPress + WooCommerce', outcome: '5x qualified leads in first quarter', href: '#' },
            ].map((project, i) => (
              <div key={i} className="bg-[#F8FAFC] rounded-xl border border-black/5 p-6 flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-[#0B3C5D] text-white flex items-center justify-center font-bold text-lg mb-4">
                  {project.name.charAt(0)}
                </div>
                <p className="font-bold text-[#0B3C5D] mb-1">{project.name}</p>
                <p className="text-xs text-gray-500 mb-4">{project.industry}</p>

                <div className="text-sm text-gray-600 mb-1">
                  <span className="font-medium text-[#0B3C5D]">Project: </span>{project.type}
                </div>
                <div className="text-sm text-gray-600 mb-5">
                  <span className="font-medium text-[#0B3C5D]">Outcome: </span>{project.outcome}
                </div>

                <a href={project.href} className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-[#f85415] hover:underline">
                  View case study
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="py-20 bg-[#F5F7FB]">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0B3C5D] leading-tight">
            What Pune Business Owners Say About Working With Us
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: 'Our organic traffic tripled within six months, and we finally rank on page one for the keywords that actually bring in patients.', name: 'First Last', role: 'Founder', company: 'Company Name, Pune' },
              { quote: 'We went from 40 enquiries a month to over 150, without changing our ad spend. The website itself started doing the selling.', name: 'First Last', role: 'Director', company: 'Company Name' },
              { quote: 'They handed us a CMS our own team can run day to day. We haven\u2019t needed a developer for a content change since launch.', name: 'First Last', role: 'Marketing Head', company: 'Company Name' },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/5 p-7">
                <svg width="26" height="20" viewBox="0 0 26 20" fill="none" className="mb-4">
                  <path d="M0 20 L0 11 C0 4 4.5 0 10 0 L10 4.5 C6.5 4.5 4.5 7 4.5 10 L10 10 L10 20 Z M15.5 20 L15.5 11 C15.5 4 20 0 25.5 0 L25.5 4.5 C22 4.5 20 7 20 10 L25.5 10 L25.5 20 Z" fill="#c7d0f0" />
                </svg>
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{t.quote}"</p>
                <p className="font-semibold text-[#0B3C5D]">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}, {t.company}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="py-20 bg-[#0B3C5D] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            How to Get Started With Foxaircomm
          </h2>
          <p className="text-blue-100 mb-10 max-w-xl mx-auto">
            The first step is a free 30-minute strategy session — no jargon, no
            sales pitch. In this call, we will:
          </p>

          <div className="grid sm:grid-cols-3 gap-5 mb-10 text-left">
            {[
              'Audit your current website and identify what\u2019s holding it back',
              'Map out the specific fixes that would impact leads and rankings first',
              'Give you a realistic scope and timeline for what you actually need',
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="w-8 h-8 rounded-full bg-[#f85415] text-white flex items-center justify-center font-bold text-sm mb-3">
                  {i + 1}
                </div>
                <p className="text-sm text-blue-100 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-blue-200/80 text-sm mb-10 max-w-xl mx-auto">
            We've run this session for 120+ businesses across Pune, Mumbai, and
            Ahmedabad. Most leave with a clearer picture of the problem than they
            arrived with — regardless of whether they work with us.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a href="tel:8879864151"
              className="inline-flex items-center justify-center gap-2 bg-[#f85415] hover:bg-[#e04a0f] transition-colors px-8 py-4 text-white font-bold text-lg rounded-xl"
            >
              Book Your Free Strategy Session
              <span aria-hidden="true">→</span>
            </a>

            <a href="https://wa.me/918879864151"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 transition-colors px-8 py-4 text-white font-semibold text-lg rounded-xl"
            >
              Call Us Directly — 8879864151 / WhatsApp
              <span aria-hidden="true">→</span>
            </a>
          </div>

        </div>
      </section>

      {/* CTA */}

    </div>
  );
}

export default WebsiteDesign;