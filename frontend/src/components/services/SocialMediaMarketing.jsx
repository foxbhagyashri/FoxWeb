import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaRocket, FaChartLine, FaBullhorn } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";
import {
  FileText,
  Brush,
  Target,
  Users,
  Star,
  BarChart3,
} from "lucide-react";
import {
  FiTrendingUp,
  FiUsers,
  FiShield,
  FiBarChart2,
  FiTarget,
  FiBriefcase,
  FiDollarSign,
  FiCheckCircle,
  FiShoppingCart,
  FiBookOpen,
  FiLayers,
  FiLinkedin,
} from "react-icons/fi";



function SocialMediaMarketing() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
  const containerRef = useRef(null);

  const imageUrls =
    "https://foxaircomm.com/assets/img/5372.jpg";


  const services = [
    {
      title: "Blueprint for Success",
      desc: "We create a personalized social media blueprint aligned with your business goals, selecting the right platforms, defining KPIs, and scheduling campaigns for consistent and measurable growth.",
      icon: FileText,
    },
    {
      title: "Content That Grabs Attention",
      desc: "From refined visuals to short-form videos and reels, we produce content optimized for mobile-first audiences and high engagement.",
      icon: Brush,
    },
    {
      title: "Smart, Targeted Advertising",
      desc: "Data-driven ad campaigns across Instagram, Facebook, WhatsApp, and LinkedIn that maximize reach, leads, and ROI.",
      icon: Target,
    },
    {
      title: "Online Community Building",
      desc: "We manage conversations, comments, and messages to build trust, loyalty, and long-term brand relationships.",
      icon: Users,
    },
    {
      title: "Connecting Through Influencers",
      desc: "Strategic collaborations with credible influencers and industry leaders to expand your reach authentically.",
      icon: Star,
    },
    {
      title: "Clear Analytics & Reporting",
      desc: "Transparent monthly reports covering reach, engagement, traffic, and conversions to continuously refine performance.",
      icon: BarChart3,
    },
  ];

  const whyChooseUs = [
    {
      icon: <FiTrendingUp />,
      title: "Proven Growth Strategy",
      desc: "We focus on measurable business outcomes through data-driven social media strategies tailored to your market."
    },
    {
      icon: <FiUsers />,
      title: "Client-Centric Approach",
      desc: "Every campaign is built around your business goals, audience behavior, and long-term brand value."
    },
    {
      icon: <FiBarChart2 />,
      title: "Transparent Reporting",
      desc: "Clear performance reports with real metrics—no vanity numbers or exaggerated claims."
    },
    {
      icon: <FiTarget />,
      title: "Industry-Focused Execution",
      desc: "Strategies aligned with your industry, competitors, and customer decision-making cycle."
    },
    {
      icon: <FiShield />,
      title: "Brand Safety & Compliance",
      desc: "We follow platform guidelines and ethical marketing practices to protect your brand reputation."
    },
    {
      icon: <FiBriefcase />,
      title: "Experienced Professionals",
      desc: "Handled by specialists with hands-on experience in managing real business growth campaigns."
    },
  ];

  const gains = [
    {
      title: "Improved Engagement Quality",
      desc: "Stronger interaction from audiences who are genuinely interested in your brand and offerings.",
      icon: <FiTrendingUp />,
    },
    {
      title: "Higher Lead Generation",
      desc: "Consistent increase in qualified leads through targeted campaigns and optimized messaging.",
      icon: <FiTarget />,
    },
    {
      title: "Relevant Audience Growth",
      desc: "Follower growth focused on relevance and long-term brand value rather than vanity numbers.",
      icon: <FiUsers />,
    },
    {
      title: "Optimized Marketing Spend",
      desc: "Data-backed decisions ensure your advertising budget is allocated efficiently across platforms.",
      icon: <FiDollarSign />,
    },
    {
      title: "Measurable Business Results",
      desc: "Clear tracking and reporting so you can see how campaigns contribute to business outcomes.",
      icon: <FiCheckCircle />,
    },
  ];


  const whoShouldWork = [
    {
      icon: <FiBriefcase />,
      text: "Local service-based businesses such as hospitals, clinics, fitness centers, and educational institutions seeking consistent visibility."
    },
    {
      icon: <FiShoppingCart />,
      text: "E-commerce brands focused on improving conversions, customer acquisition, and long-term growth."
    },
    {
      icon: <FiBookOpen />,
      text: "Educators, consultants, and coaches looking to build authority and personal brand credibility online."
    },
    {
      icon: <FiLayers />,
      text: "Startups preparing to launch new products, platforms, or digital services."
    },
    {
      icon: <FiLinkedin />,
      text: "B2B organizations aiming to establish thought leadership and demand generation on LinkedIn."
    },
  ];



  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setScrollY(-rect.top);
    }
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (isMobile) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    },
    [isMobile]
  );

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleScroll, handleMouseMove]);

  return (
    <motion.div ref={containerRef} className="overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <style>{`
        .parallax-layer { will-change: transform; transform-style: preserve-3d; }
        .float-animation { animation: float 6s ease-in-out infinite; }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
      `}</style>
      <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">

  {/* Background */}
  <div
    className="absolute inset-0 bg-cover bg-center scale-105"
    style={{ backgroundImage: `url('/assets/images/socialmediamarketing.jpg')` }}
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Content */}
  <div className="relative z-10 h-full flex items-center px-4">
    <div className="container mx-auto max-w-6xl">

      <div className="max-w-3xl">

        {/* Eyebrow text */}
        <motion.p
          className="text-sm font-semibold tracking-wide text-white uppercase mb-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Social Media Marketing Agency
        </motion.p>

        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-semibold
                     text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Strategic Social Media Marketing
          <span className="block text-gray-300">
            Built for Sustainable Business Growth
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
          We help businesses strengthen their digital presence through
          data-driven strategy, disciplined execution, and measurable outcomes
          across social media platforms.
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
            Request a Consultation
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center justify-center
                       px-8 py-3.5 border border-gray-400
                       text-gray-200 font-semibold rounded-md
                       hover:border-white hover:text-white
                       transition-colors"
          >
            View Our Services
          </Link>
        </motion.div>

      </div>
    </div>
  </div>
</div>

{/* Construction CRM Section */}
<section className="container mx-auto space-y-5 max-w-7xl py-16 md:py-6 px-4">

  {/* Header */}
  <div className="flex justify-center">
    <motion.span
      className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold text-indigo-700 border border-indigo-200 rounded-full bg-white"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      Custom CRM Software Development
    </motion.span>
  </div>

  {/* Heading */}
  <motion.h2
    className="text-3xl md:text-4xl lg:text-5xl
               font-bold theme-text-primary leading-tight"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
  >
    Custom CRM Software Development That Fits Construction Workflows
  </motion.h2>

  {/* Divider */}
  <div className="w-24 h-1 bg-indigo-500 rounded-full" />

  {/* Content */}
  <motion.p
    className="theme-text-secondary text-base md:text-lg leading-relaxed"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    Most CRM software is built for sales teams.
    <br />
    Construction companies don’t work like sales-driven businesses.
  </motion.p>

  <motion.p
    className="theme-text-secondary text-base md:text-lg leading-relaxed"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    They operate through{" "}
    <span className="font-semibold theme-text-primary">
      projects, sites, labour, materials, assets, vendors, and purchase orders
    </span>.
    <br />
    That’s why ready-made CRM systems fail in construction environments.
  </motion.p>

  {/* Emphasis Block */}
  <motion.div
    className="p-6 md:p-8 rounded-xl
               bg-indigo-50 border-l-4 border-indigo-500"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <p className="text-lg md:text-xl font-semibold theme-text-primary">
      We specialize in custom CRM software development for construction companies.
    </p>
  </motion.div>

  <motion.p
    className="theme-text-secondary text-base md:text-lg leading-relaxed"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    The CRM is tightly integrated with ERP, project management, warehouse,
    asset, and purchase order systems.
  </motion.p>

</section>






      {/* Why Your Business Needs Social Media Marketing */}
      <section className="container mx-auto max-w-7xl space-y-5 py-10">

        {/* Header */}
        <div className="flex justify-center">
          <motion.span
            className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold text-indigo-700 border border-indigo-200 rounded-full bg-white"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Social Media?
          </motion.span>
        </div>


        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold theme-text-primary mb-6 leading-tight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Why Does Your Business Need Social Media Marketing?
        </motion.h2>

        <motion.p
          className="theme-text-secondary text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Curious about why your business needs to be on social media? As a top
          social media marketing agency in India, we help local brands gain massive
          visibility and real engagement.
        </motion.p>
        <motion.p
          className="theme-text-secondary text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          We leverage platforms like Instagram, Facebook, LinkedIn, and WhatsApp to
          build campaigns that place your brand in front of high-intent audiences so
          you stay visible, trusted, and remembered.
        </motion.p>
        {/* Description */}
        <motion.p
          className="theme-text-secondary text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

        </motion.p>

        {/* Stats Heading */}
        <div className="text-left my-10">
          <motion.h3
            className="text-2xl md:text-3xl font-semibold theme-text-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Powerful Statistics That Prove Social Media Works
          </motion.h3>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {[
            {
              stat: "34%",
              text: "of the Indian population is actively engaged on social media platforms, giving your business direct access to a massive digital audience.",
            },
            {
              stat: "71%",
              text: "of customers are more likely to recommend brands that maintain a strong and positive social media presence (Lyfe Marketing).",
            },
            {
              stat: "2B+",
              text: "monthly active users make Instagram one of the most powerful discovery and search-driven platforms today (Hootsuite).",
            },
            {
              stat: "80%",
              text: "of users prefer video-based content over long-form text when exploring products or services (Sprout Social).",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 transition-shadow duration-300 hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Stat */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-1 h-10 bg-indigo-600 rounded-full" />
                <h4 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  {item.stat}
                </h4>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>


        {/* Conclusion CTA */}
        <motion.div
          className="text-cente p-6 rounded-xl bg-white border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-800 text-lg md:text-xl font-medium mb-3">
            Your customers are already searching for brands like yours online.
          </p>

          <p className="text-gray-900 text-xl md:text-2xl font-semibold mb-4">
            Be where the attention is.
          </p>

          <p className="text-gray-600 text-base md:text-lg  leading-relaxed">
            Partner with{" "}
            <span className="font-semibold text-indigo-700">Foxaircomm</span>,India's
            leading social media marketing agency, and grow your brand with clarity,
            credibility, and measurable impact.
          </p>
        </motion.div>


      </section>


      {/* Our Services Section */}
      <section className="bg-gray-50 py-10 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className=" mb-14 md:mb-20">
            <div className="flex justify-center items-center">
              <motion.span
                className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold text-indigo-700 border border-indigo-200 rounded-full bg-white"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Our Services
              </motion.span>
            </div>


            <motion.h2
              className="text-3xl md:text-4xl font-semibold theme-text-primary mb-4 leading-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Our Strategic Social Media Marketing Services in India
            </motion.h2>

            <p className="text-gray-600 text-base md:text-lg">
              Thoughtfully designed solutions that help your brand grow with clarity,
              consistency, and measurable impact.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-2 transition-shadow duration-300 hover:shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg border border-gray-200
                          flex items-center justify-center text-indigo-600 text-xl">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </section>


      {/* Why Choose Us Section */}
      <section className="bg-white py-10 px-4">
        <div className="container mx-auto max-w-7xl">

          {/* Header */}
          <div className="mb-14">
            <div className="flex justify-center items-center">
              <motion.span
                className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold text-indigo-700 border border-indigo-200 rounded-full bg-white"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Why Choose Us      </motion.span>
            </div>

            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-snug"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              A Reliable Social Media Marketing Partner for
              <span className="block">Growing Businesses in India</span>
            </motion.h2>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {whyChooseUs.map((item, index) => (
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
      {/* <div className="relative min-h-[50vh] md:min-h-[60vh] overflow-hidden bg-gray-900">
        <div
          className="parallax-layer absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${imageUrls[2]})`,
            transform: `translateY(${scrollY * 0.1}px) scale(1.05)`,
            opacity: loadedImages[2] ? 1 : 0,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-purple-900/50 to-black/70" />
        <div className="relative z-10 min-h-[50vh] md:min-h-[60vh] flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              What You'll Gain From Our Social Media Marketing
            </motion.h2>
            <motion.p className="text-base md:text-lg mb-6 md:mb-8 text-white/80 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              When you partner with us, here's what you can look forward to:
            </motion.p>
          </div>
        </div>
      </div> */}

      {/* What You'll Gain Section */}
      <section className=" bg-gray-50 py-5 px-4">
        <div className="container mx-auto max-w-7xl">

          {/* Header */}
          <div className=" mb-14">
            <div className="flex justify-center items-center">
              <motion.span
                className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold text-indigo-700 border border-indigo-200 rounded-full bg-white"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Business Impact
              </motion.span>
            </div>

            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-snug"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              What Your Business Gains from Our
              <span className="block">Social Media Marketing Expertise</span>
            </motion.h2>
          </div>

          {/* List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {gains.map((item, index) => (
              <motion.div
                key={index}
                className="flex gap-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-lg border border-gray-200
                       flex items-center justify-center
                       text-indigo-600 text-xl flex-shrink-0"
                >
                  {item.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
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


      {/* Who Should Work With Us */}
      <section className="bg-white py-7 px-4">
        <div className="container mx-auto max-w-7xl">

          {/* Header */}
          <div className=" mb-14">
          <div className="flex justify-center items-center">
              <motion.span
                className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold text-indigo-700 border border-indigo-200 rounded-full bg-white"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Business Impact
              </motion.span>
            </div>

            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-snug"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Who Should Partner With Our Social Media
              <span className="block">Marketing Team in India</span>
            </motion.h2>
          </div>

          {/* List */}
          <motion.div
            className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <ul className="space-y-6">
              {whoShouldWork.map((item, index) => (
                <li key={index} className="flex items-start gap-4">

                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-lg border border-gray-200
                         flex items-center justify-center
                         text-indigo-600 text-lg flex-shrink-0 mt-0.5"
                  >
                    {item.icon}
                  </div>

                  {/* Text */}
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </section>


      {/* Final CTA Section */}
     <section className="bg-gray-900 py-20 px-4">
  <div className="container mx-auto max-w-4xl text-center">

    {/* Heading */}
    <motion.h2
      className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-5 leading-snug"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      Let’s Evaluate Your Social Media Performance
    </motion.h2>

    {/* Subtext */}
    <motion.p
      className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      Get a clear, data-driven assessment of your current social presence and
      identify opportunities for sustainable growth.
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
        className="px-8 py-3.5 bg-white text-gray-900
                   font-semibold rounded-md
                   hover:bg-gray-100 transition-colors"
      >
        Request a Social Media Audit
      </Link>

      <Link
        to="/enquiry"
        className="px-8 py-3.5 border border-gray-400
                   text-gray-200 font-semibold rounded-md
                   hover:border-white hover:text-white
                   transition-colors"
      >
        Contact Our Team
      </Link>
    </motion.div>

  </div>
</section>

    </motion.div>
  );
}

export default SocialMediaMarketing;
