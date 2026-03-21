import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  Smartphone,
  Globe,
  CreditCard,
  TrendingUp,
  Wallet,
  Target,
  AlertTriangle,
  DollarSign,
  Flame,
  Search,
  PenLine,
  FileText,
  LayoutGrid,
  Youtube,
  ShoppingCart,
  PhoneCall
} from "lucide-react";






function GoogleAdwords() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
  const containerRef = useRef(null);

  const imageUrls = [
    "https://images.unsplash.com/photo-1553484771-371a605b060b?w=1920&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
  ];

  const whyImportant = [
    {
      title: "A Big and Growing Audience",
      desc: "India's internet base is growing rapidly. By 2025, over 900 million people are expected to be online, creating a massive opportunity for businesses to reach ready-to-convert audiences.",
      icon: <Smartphone />,
    },
    {
      title: "Google Has the Greatest Reach",
      desc: "Google dominates search in India with over 90% market share, making it the most effective platform for ensuring your brand appears when customers are actively searching.",
      icon: <Globe />,
    },
    {
      title: "Your Ads Help Make Sales",
      desc: "Around 65% of consumers click on ads when they are ready to purchase. Strategic ad placement helps you outperform competitors at critical decision moments.",
      icon: <CreditCard />,
    },
    {
      title: "Paid Search Leads to Real Results",
      desc: "Visitors from paid ads are 35% more likely to convert into customers compared to organic traffic, making paid search a powerful growth driver.",
      icon: <TrendingUp />,
    },
    {
      title: "Good Return on Investment",
      desc: "A well-optimized Google Ads strategy delivers consistent, measurable returns and long-term business value.",
      icon: <Wallet />,
    },
  ];

  const commonMistakes = [
    {
      title: "Wrong Audience",
      desc: "Your ads are reaching people in other cities because your keywords aren't specific enough.",
      icon: <Target className="w-5 h-5" />
    },
    {
      title: "Irrelevant Traffic",
      desc: "You're paying for clicks from users who aren't interested in your product or services due to unclear ad messaging.",
      icon: <AlertTriangle className="w-5 h-5" />
    },
    {
      title: "Wasted Money",
      desc: "Without proper tracking, you can’t identify which parts of your campaign are performing well.",
      icon: <DollarSign className="w-5 h-5" />
    },
    {
      title: "Budget Burn",
      desc: "Not using negative keywords causes your ads to show for irrelevant searches, draining your budget daily.",
      icon: <Flame className="w-5 h-5" />
    }
  ];

  const ourApproach = [
    {
      title: "Deep-Dive Analysis",
      desc: "We begin our process with a thorough audit of your current online presence and your competitors. This allows us to identify high-value keywords your customers are searching for and pinpoint opportunities to outperform the competition.",
      icon: <Search />
    },
    {
      title: "Precision Targeting",
      desc: "We use granular data to reach potential customers based on their location, demographics, search history, and intent. This ensures your ads are seen by the people most likely to become your next client in Pune and beyond.",
      icon: <Target />
    },
    {
      title: "Compelling Ad Copy",
      desc: "We don't write generic ads. We craft ad copy that speaks directly to your customer's needs and pain points, using persuasive language to attract them to click and learn more about your solution.",
      icon: <PenLine />
    },
    {
      title: "Landing Page Optimization",
      desc: "A great ad is only half the battle. We provide expert guidance on optimizing your landing pages to ensure visitors convert into leads once they arrive on your site, maximizing the value of every click.",
      icon: <FileText />
    }
  ];

const adChannels = [
  {
    title: "Search Ads",
    desc: "Capture high-intent customers the moment they're searching for you.",
    icon: <Search />
  },
  {
    title: "Display Ads",
    desc: "Build brand recall and re-engage past visitors across the web.",
    icon: <LayoutGrid/>
  },
  {
    title: "YouTube Ads",
    desc: "Reach a massive audience with engaging video storytelling.",
    icon: <Youtube />
  },
  {
    title: "Shopping Ads",
    desc: "Google Shopping ads enable you to showcase your products with a picture, price, and store name right in Google search results.",
    icon: <ShoppingCart />
  },
  {
    title: "Call-Only Ads",
    desc: "Generate instant phone calls from customers ready to connect.",
    icon: <PhoneCall />
  }
];

  const serviceAreas = [
    "PCMC",
    "Hinjewadi",
    "Wakad",
    "Baner",
    "Bavdhan",
    "Moshi",
    "Talegaon"
  ];

  useEffect(() => {
    const loadImages = async () => {
      const promises = imageUrls.map((url, index) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = () => { setLoadedImages((prev) => ({ ...prev, [index]: true })); resolve(); };
          img.onerror = () => resolve();
        })
      );
      await Promise.all(promises);
    };
    loadImages();
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleScroll = useCallback(() => {
    if (containerRef.current) { setScrollY(-containerRef.current.getBoundingClientRect().top); }
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (isMobile) return;
    setMousePosition({ x: (e.clientX / window.innerWidth - 0.5) * 2, y: (e.clientY / window.innerHeight - 0.5) * 2 });
  }, [isMobile]);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => { if (!ticking) { window.requestAnimationFrame(() => { handleScroll(); ticking = false; }); ticking = true; } };
    handleScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("mousemove", handleMouseMove); };
  }, [handleScroll, handleMouseMove]);

  return (
    <motion.div ref={containerRef} className="overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <style>{`
        .parallax-layer { will-change: transform; transform-style: preserve-3d; }
        .float-animation { animation: float 6s ease-in-out infinite; }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
      `}</style>

      {/* Hero Parallax Section */}
      <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url('/assets/images/google-ads.jpg')` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center px-4">
          <div className="container mx-auto max-w-6xl">

            <div className="max-w-3xl">

              {/* Eyebrow */}
              <motion.p
                className="text-sm font-semibold tracking-wide text-white uppercase mb-4"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Google Ads Agency
              </motion.p>

              {/* Heading */}
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-semibold
                     text-white leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                Google Ads Management
                <span className="block text-gray-300">
                  Built for ROI-Driven Paid Growth
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-base md:text-lg text-gray-300
                     leading-relaxed max-w-2xl mb-8"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                We help businesses eliminate wasted ad spend and generate
                high-intent leads through data-backed Google Ads strategies
                focused on conversions, not clicks.
              </motion.p>

              {/* CTA */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center
                       px-8 py-3.5 bg-white text-gray-900
                       font-semibold rounded-md
                       hover:bg-gray-100 transition-colors"
                >
                  Request a Free Audit
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center
                       px-8 py-3.5 border border-gray-400
                       text-gray-200 font-semibold rounded-md
                       hover:border-white hover:text-white
                       transition-colors"
                >
                  View All Services
                </Link>
              </motion.div>

            </div>
          </div>
        </div>
      </div>


      {/* Why Google Ads Are Crucial Section */}
      <section className="container mx-auto max-w-7xl space-y-5 py-10">

        {/* Header */}
        <div className="flex justify-center">

          <motion.span
            className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold text-indigo-700 border border-indigo-200 rounded-full bg-white"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Google Ads?
          </motion.span>
        </div>


        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold theme-text-primary mb-6 leading-tight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Why Google Ads are Crucial For Businesses In India?
        </motion.h2>

        <motion.p
          className="theme-text-secondary text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Being visible is crucial because the way people shop and find new businesses is changing fast. When people are searching for exactly what you sell, your business shows up first, helping you get noticed and find the right customers quickly. This is the magic of Google Ads.

        </motion.p>
        <motion.p
          className="theme-text-secondary text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          This approach helps you find new customers who are a good fit for your business. Here's what's happening in the digital world and how you can use these chances to grow your business.

        </motion.p>
        {/* Description */}
        <motion.p
          className="theme-text-secondary text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

        </motion.p>


        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 mt-15">
          {whyImportant.map((item, index) => (
            <motion.div
              key={index}
              className="flex gap-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-lg border border-gray-200
                          flex items-center justify-center text-indigo-600 text-xl">
                {item.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </section>

      {/* Who Should Opt Section */}
      <section className="bg-gray-50 py-10 px-4">
        <div className="container mx-auto max-w-7xl space-y-12">

          {/* Eyebrow */}
          <div className="flex justify-center">
            <motion.span
              className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold text-indigo-700 border border-indigo-200 rounded-full bg-white"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Who Should Choose Us          </motion.span>
          </div>

          {/* Heading */}
          <motion.h2
            className=" text-2xl md:text-3xl lg:text-4xl font-semibold theme-text-primary leading-snug"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Who should opt for Google Ads services from Foxaircomm?
          </motion.h2>

          {/* Quote */}
          <motion.div
            className="max-w-7xl mx-auto border-l-4 border-indigo-500 bg-white p-6 md:p-8 shadow-sm rounded-xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="theme-text-primary text-lg md:text-xl font-medium italic leading-relaxed">
              “I tried Google Ads once, spent ₹15,000, and got nothing. Is it even worth it?”
            </p>
            <p className="mt-3 text-sm text-gray-500">
              — A common concern shared by business owners online
            </p>
          </motion.div>

          {/* Answer */}
          <motion.div
            className="max-w-7xl mx-auto bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-indigo-600 font-semibold mb-2">
              Our perspective
            </p>
            <p className="theme-text-secondary text-base md:text-lg leading-relaxed">
              Google Ads do work. What usually fails is the strategy behind them — wrong targeting,
              weak intent matching, or poor conversion tracking.
            </p>
          </motion.div>
        </div>

      </section>


      {/* Why Campaigns Fail Section */}
      <section className="bg-white py-10 px-4">
        <div className="container mx-auto max-w-7xl space-y-5">

          {/* Eyebrow */}
          <div className="flex justify-center">
            <motion.span
              className="inline-block mb-1 px-4 py-1.5 text-sm font-semibold text-indigo-700 border border-indigo-200 rounded-full bg-white"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Common Mistakes
            </motion.span>
          </div>
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-semibold theme-text-primary mb-4 md:mb-6 leading-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why So Many Google Ads Campaigns Failed?
          </motion.h2>


          <motion.p
            className=" theme-text-primary text-lg md:text-xl font-semibold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            After reading this, do you feel like facing the same problem?
          </motion.p>

          <motion.p
            className=" theme-text-secondary text-base md:text-lg mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            If yes, you are not alone. Many business owners in Pune have the same complaints, and they usually point to a single issue: running a powerful platform with guesswork. It's not your fault. The platform is complex, and it's very common to make mistakes.
          </motion.p>

          <motion.h3
            className="text-xl md:text-2xl font-semibold theme-text-primary mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Here are some common reasons why a campaign might be underperforming:
          </motion.h3>
          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {commonMistakes.map((item, index) => (
              <motion.div
                key={index}
                className="flex gap-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-lg border border-gray-200
                          flex items-center justify-center text-indigo-600 text-xl">
                  {item.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </section>

      {/* Our Approach Section */}
      <section className="bg-gray-50 py-10 px-4">
        <div className="container mx-auto max-w-7xl space-y-2">
          <div className=" text-center mb-5">
            <motion.span
              className="inline-block mb-1 px-4 py-1.5 text-sm font-semibold text-indigo-700 border border-indigo-200 rounded-full bg-white"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Approach
            </motion.span>
          </div>

          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-semibold theme-text-primary mb-4 md:mb-6 leading-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            What is the Foxaircomm Approach To Google Ads Management?
          </motion.h2>
          <motion.p
            className="theme-text-secondary text-base md:text-lg max-w-7xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Effective Google Ads isn't about appearing everywhere; it's about appearing in the right place at the right time. Our methodology is based on a thorough analytical understanding of your business, your ideal customer, and the competitive landscape right here in Pune.
          </motion.p>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 mt-10">
            {ourApproach.map((item, index) => (
              <motion.div
                key={index}
                className="flex gap-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-lg border border-gray-200
                          flex items-center justify-center text-indigo-600 text-xl">
                  {item.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Channels Section */}
      <section className="bg-white py-10 px-4">
        <div className="container mx-auto max-w-7xl space-y-2">
         <div className=" text-center mb-5">
            <motion.span
              className="inline-block mb-1 px-4 py-1.5 text-sm font-semibold text-indigo-700 border border-indigo-200 rounded-full bg-white"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Approach
            </motion.span>
          </div>
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-semibold theme-text-primary mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              What are the different channels we are running under Google Ads
            </motion.h2>
            <motion.p
              className="theme-text-secondary text-base md:text-lg max-w-7xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              We run a comprehensive set of channels inside of Google Ads to meet your business goals. Our approach is to choose the right channel for your specific needs, whether you want to build brand awareness or drive immediate sales.
            </motion.p>
           <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 mt-10">
                     {adChannels.map((item, index) => (
                       <motion.div
                         key={index}
                         className="flex gap-5"
                         initial={{ opacity: 0, y: 16 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: index * 0.06 }}
                       >
                         {/* Icon */}
                         <div className="flex-shrink-0 w-12 h-12 rounded-lg border border-gray-200
                                   flex items-center justify-center text-indigo-600 text-xl">
                           {item.icon}
                         </div>
         
                         {/* Content */}
                         <div>
                           <h3 className="text-lg font-semibold text-gray-900 mb-1">
                             {item.title}
                           </h3>
                           <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                             {item.desc}
                           </p>
                         </div>
                       </motion.div>
                     ))}
                   </div>
        </div>
      </section>

      {/* Parallax CTA Section */}
     <section className="bg-gray-900 py-20 px-4">
  <div className="container mx-auto max-w-4xl text-center">

    {/* Heading */}
    <motion.h2
      className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-5 leading-snug"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      Where Do We Operate?
    </motion.h2>

    {/* Subtext */}
    <motion.p
      className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto mb-8 leading-relaxed"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      We work closely with local businesses while also managing
      campaigns for ambitious brands across PAN India. Wherever your audience
      is, we help you connect with clarity and consistency.
    </motion.p>

    {/* Optional Action (consistent with first CTA) */}
    <motion.div
      className="flex flex-col sm:flex-row gap-4 justify-center"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Link
        to="/contact"
        className="px-8 py-3.5 bg-white text-gray-900
                   font-semibold rounded-md
                   hover:bg-gray-100 transition-colors"
      >
        Work With Us
      </Link>

      <Link
        to="/enquiry"
        className="px-8 py-3.5 border border-gray-400
                   text-gray-200 font-semibold rounded-md
                   hover:border-white hover:text-white
                   transition-colors"
      >
        Get in Touch
      </Link>
    </motion.div>

  </div>
</section>

      {/* Final CTA Section */}
   <section className="bg-white py-16 md:py-24 px-4 border-t border-gray-200">
  <div className="container mx-auto max-w-4xl text-center">

    {/* Heading */}
    <motion.h2
      className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-5 leading-snug"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      Ready to run Google Ads that deliver results?
    </motion.h2>

    {/* Description */}
    <motion.p
      className="text-gray-600 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      Schedule a complimentary 30-minute strategy session and learn how we
      optimize Google Ads campaigns for sustainable growth and measurable ROI.
    </motion.p>

    {/* Actions */}
    <motion.div
      className="flex flex-col sm:flex-row gap-4 justify-center"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Link
        to="/contact"
        className="px-8 py-3.5 bg-indigo-600 text-white
                   font-semibold rounded-md
                   hover:bg-indigo-700 transition-colors"
      >
        Book a Strategy Session
      </Link>

      <Link
        to="/enquiry"
        className="px-8 py-3.5 border border-gray-300
                   text-gray-700 font-semibold rounded-md
                   hover:border-gray-500 hover:text-gray-900
                   transition-colors"
      >
        Send an Enquiry
      </Link>
    </motion.div>

  </div>
</section>

    </motion.div>
  );
}

export default GoogleAdwords;
