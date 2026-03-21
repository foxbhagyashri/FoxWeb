import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiTarget,
  FiAward,
  FiTrendingUp,
  FiShield,
  FiMapPin,
  FiSearch,
  FiEdit3,
  FiSettings,
  FiLink,
} from "react-icons/fi";


function SearchEngineOptimization() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
  const containerRef = useRef(null);

  const imageUrls = [
    "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1920&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1920&q=80"
  ];

  const whyChooseUs = [
    {
      title: "Captures Highly Convertible Leads",
      desc: "Instead of sending random traffic to your website, we conduct research about what buyers truly want. It means every click you get is from someone genuinely interested in what you offer, leading to more sales for you.",
      icon: <FiTarget />,
    },
    {
      title: "Establishes Businesses As Unquestionable Authority",
      desc: "We highlight your expertise and trustworthiness, ensuring that when people find you, they immediately see you as the best in your field. This strong credibility converts website visitors into loyal customers who stick with you.",
      icon: <FiAward />,
    },
    {
      title: "ROI Enhancement",
      desc: "See the real impact of your marketing spend. We deliver clear, measurable results, ensuring our efforts consistently boost your visibility, quality lead generation, and profit.",
      icon: <FiTrendingUp />,
    },
    {
      title: "Ensures Long-Term Digital Immunity",
      desc: "Online trends evolve constantly. We create future-ready SEO strategies that help you adapt to algorithm updates and market changes, ensuring long-term stability and competitiveness.",
      icon: <FiShield />,
    },
    {
      title: "Makes You the Local Legend in Pune",
      desc: "We don’t just optimize for Pune—we optimize for your exact neighborhoods, helping you become the first choice for customers actively searching for your services.",
      icon: <FiMapPin />,
    },
  ];


  const process = [
    {
      title: "Detailed Market & Competitors Research",
      desc: "We started the SEO process by understanding your customers, not just keywords. We conduct a SWOT analysis and identify the opportunities your competitors are missing.",
      icon: <FiSearch />,
    },
    {
      title: "Formulation Of Content Strategy",
      desc: "After thorough research, we select the keywords used by your customers while searching for products or services. For search engines, the best content needs to know exactly what users want to find.",
      icon: <FiEdit3 />,
    },
    {
      title: "Technical SEO Audits & Site Cleanup",
      desc: "After on-page optimisation, we shift our focus towards technical SEO. We resolve issues related to crawling, mobile optimization, and making your site technically sound.",
      icon: <FiSettings />,
    },
    {
      title: "Authority Building Through Strategic Link Outreach",
      desc: "We don't buy backlinks. Our experts execute strategic off-page tactics like outreach, PR level strategies, and compelling content creation.",
      icon: <FiLink />,
    },
    {
      title: "Continuous Monitoring & Refinement",
      desc: "SEO is dynamic. We constantly track performance, analyze results, and adapt our strategies to ensure optimal impact and sustained rankings.",
      icon: <FiTrendingUp />,
    },
    {
      title: "Local SEO Optimization",
      desc: "We specialize in local SEO strategies, ensuring your business ranks 1st on Google Maps and local searches. Captures customers searching nearby and drives direct sales to your door.",
      icon: <FiMapPin />,
    },
  ];


  const industries = [
    "Healthcare & Hospitals",
    "Real Estate",
    "E-Commerce",
    "Automobile",
    "Retail",
    "Interior Design",
    "Manufacturing",
    "Jewelry",
    "Agro",
    "Spa and Beauty Salons",
    "Political Figures",
    "Gold Buyers",
    "Loan and Finance"
  ];

  const packages = [
    {
      name: "Basic SEO Package",
      subtitle: "Perfect for startups & small businesses",
      features: [
        "10 keywords",
        "On-page SEO for 5 pages",
        "Basic backlinking",
        "Monthly reports",
        "Google My Business setup"
      ]
    },
    {
      name: "Standard SEO Package",
      subtitle: "Ideal for growing businesses",
      features: [
        "20-30 keywords",
        "Full on-page & technical SEO",
        "Monthly blog writing (2 posts)",
        "Quality backlink building",
        "Local SEO + GMB optimization"
      ],
      featured: true
    },
    {
      name: "Advanced SEO Package",
      subtitle: "Best for established or e-commerce websites",
      features: [
        "50+ keywords",
        "Full on-page, technical, and off-page SEO",
        "Content marketing (blogs, landing pages)",
        "Advanced link-building campaigns",
        "Weekly reports & strategy calls"
      ]
    }
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
          style={{ backgroundImage: `url('/assets/images/seo.jpg')` }}
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
                SEO Agency In Pune
              </motion.p>

              {/* Heading */}
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-semibold
                     text-white leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                Search Engine Optimization
                <span className="block text-gray-300">
                  Built for Long-Term Organic Growth
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
                We help businesses increase visibility, attract qualified traffic,
                and convert search intent into revenue through ethical,
                data-driven SEO strategies.
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


      {/* Why SEO Matters Section */}
      <section className=" container mx-auto space-y-5 max-w-7xl py-16 md:py-6 px-4">
        {/* Header */}
        <div className="flex justify-center">
          <motion.span
            className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold text-indigo-700 border border-indigo-200 rounded-full bg-white"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The SEO Reality
          </motion.span>
        </div>

        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl
                   font-bold theme-text-primary leading-tight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Don&apos;t Be Invisible: The Catastrophic Truth About The Mediocre SEO
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
          BrightEdge study concluded that{" "}
          <span className="font-semibold theme-text-primary">
            approximately 68% of all trackable website traffic comes from search engines
            (Organic + Paid)
          </span>, making it the most dominant search channel.
        </motion.p>

        <motion.p
          className="theme-text-secondary text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-semibold theme-text-primary">
            The &quot;Page 2&quot; Graveyard:
          </span>{" "}
          if you're not on the SERP first page, you're virtually invisible.
          A Backlinko study shows that only{" "}
          <span className="font-semibold theme-text-primary">
            0.63 percent
          </span>{" "}
          of users click on results from Page 2 — proving it’s where most
          businesses go to disappear.
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
            Still not convinced? Pay close attention to this.
          </p>
        </motion.div>

        <motion.p
          className="theme-text-secondary text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Think about it: more than half of all website visits happen on a phone.
          Approximately{" "}
          <span className="font-semibold theme-text-primary">
            61% (6 out of 10 visitors)
          </span>{" "}
          come from mobile devices.
        </motion.p>

        <motion.p
          className="theme-text-secondary text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          When individuals find you through a search engine like Google, nearly{" "}
          <span className="font-semibold theme-text-primary">
            15% of them become paying customers
          </span>.
          Visitors acquired through good SEO are far more likely to convert.
        </motion.p>

        <motion.p
          className="theme-text-secondary text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Search engines are a powerhouse for website traffic. They can send you
          <span className="font-semibold theme-text-primary">
            {" "}over a thousand percent more visitors
          </span>{" "}
          than just posting on social media.
        </motion.p>

        {/* Conclusion */}
        <motion.div
          className="pt-8 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="theme-text-primary text-xl md:text-2xl font-semibold mb-4">
            Your customers are searching for you online.
          </p>

          <p className="theme-text-secondary text-base md:text-lg">
            As the best SEO consultants in Pune, we help businesses get noticed
            by the right people — turning searches into loyal customers.
          </p>
        </motion.div>

      </section>

      {/* Why Choose Us Section */}
      <section className=" py-12 md:py-10 bg-gray-50 px-4">
        <div className="container mx-auto max-w-7xl">

          {/* Header */}
          <div className=" mb-12 md:mb-16">
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
              Why Foxaircomm Is the Best SEO Agency In Pune?
            </motion.h2>

            <motion.p
              className="theme-text-secondary text-base md:text-lg
                   max-w-4xl  leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              As the best SEO company in Pune, Foxaircomm focuses on real business
              outcomes. We align search strategy with user intent, content quality,
              and measurable growth — not just rankings.
            </motion.p>
          </div>

          {/* Subheading */}
          <motion.h3
            className="text-xl md:text-2xl font-semibold theme-text-primary
                 mb-10 "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Pune SEO Experts Are Focused On:
          </motion.h3>

          {/* WHY CHOOSE US GRID — SAME AS SOCIAL MEDIA */}
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
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg
                       border border-gray-200
                       flex items-center justify-center
                       text-indigo-600 text-xl"
                >
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


      {/* Our Process Section */}
    <section className=" py-12 md:py-10 bg-white px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
         <div className="flex justify-center items-center">
              <motion.span
                className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold text-indigo-700 border border-indigo-200 rounded-full bg-white"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                             Our Process
      </motion.span>
            </div>
            <motion.h2
              className="text-2xl text-left md:text-3xl lg:text-4xl font-semibold theme-text-primary mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Our Proven Process: Your Roadmap To Digital Excellence
            </motion.h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {process.map((item, index) => (
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
                  className="flex-shrink-0 w-12 h-12 rounded-lg
                       border border-gray-200
                       flex items-center justify-center
                       text-indigo-600 text-xl"
                >
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

   <section className="bg-gray-900 py-20 px-4">
  <div className="container mx-auto max-w-4xl text-center">

    {/* Heading */}
    <motion.h2
      className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-5 leading-snug"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      Let’s Evaluate Your Website’s SEO Performance
    </motion.h2>

    {/* Subtext */}
    <motion.p
      className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      Get a clear, data-driven analysis of your website’s search visibility,
      technical health, and growth opportunities to outrank competitors.
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
        Request a Free SEO Audit
      </Link>

      <Link
        to="/enquiry"
        className="px-8 py-3.5 border border-gray-400
                   text-gray-200 font-semibold rounded-md
                   hover:border-white hover:text-white
                   transition-colors"
      >
        Speak With an SEO Expert
      </Link>
    </motion.div>

  </div>
</section>


      {/* Industries Section */}
     <section className="theme-bg-secondary py-16 md:py-10 px-4">
  <div className="container mx-auto max-w-7xl">

    <motion.div
      className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {industries.map((industry, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-3
                       px-4 py-3 rounded-lg
                       border border-gray-200
                       bg-white
                       hover:bg-gray-50
                       transition-colors"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04 }}
          >
            {/* Subtle Indicator */}
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />

            <p className="text-sm md:text-base font-medium text-gray-800">
              {industry}
            </p>
          </motion.div>
        ))}

      </div>
    </motion.div>

  </div>
</section>

      {/* SEO Packages Section */}
     <section className="py-16 md:py-5 px-4 bg-gray-50">
  <div className="container mx-auto max-w-7xl">

    {/* Header */}
    <div className="text-center mb-14 md:mb-20">
      <motion.span
                className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold text-indigo-700 border border-indigo-200 rounded-full bg-white"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                             Our Process
      </motion.span>

      <motion.h2
        className="text-2xl md:text-3xl text-left lg:text-4xl
                   font-semibold theme-text-primary leading-tight"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        SEO Packages Designed for Sustainable Growth
      </motion.h2>
    </div>

    {/* Packages */}
    <div className="grid md:grid-cols-3 gap-8">

      {packages.map((pkg, index) => (
        <motion.div
          key={index}
          className={`rounded-2xl p-6 md:p-8 border
            ${pkg.featured
              ? "border-indigo-500 bg-white shadow-lg"
              : "border-gray-200 bg-white"
            }`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
        >
          {/* Featured label (subtle) */}
          {pkg.featured && (
            <p className="text-sm font-semibold text-indigo-600 mb-3">
              Recommended for Growing Businesses
            </p>
          )}

          <h3 className="text-xl md:text-2xl font-semibold theme-text-primary mb-2">
            {pkg.name}
          </h3>

          <p className="theme-text-secondary text-sm md:text-base mb-6">
            {pkg.subtitle}
          </p>

          {/* Features */}
          <ul className="space-y-3">
            {pkg.features.map((feature, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0" />
                <p className="theme-text-secondary text-sm md:text-base leading-relaxed">
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}

    </div>
  </div>
</section>


      {/* Final CTA Section */}
    
    </motion.div>
  );
}

export default SearchEngineOptimization;
