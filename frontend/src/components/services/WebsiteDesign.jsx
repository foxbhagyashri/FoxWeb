import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function WebsiteDesign() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
  const containerRef = useRef(null);

  const imageUrls = [
    "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1920&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80",
    "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1920&q=80"
  ];

  const whyChoose = [
    "Enhance online visibility and brand credibility.",
    "Generate high-quality leads and convert visitors into customers.",
    "Provide a seamless 24/7 online experience for your customers."
  ];

  const developmentProcess = [
    {
      title: "Discovery & Planning",
      desc: "Understanding your business goals and industry requirements.",
      icon: "🔍",
      step: "1"
    },
    {
      title: "Design & Development",
      desc: "Crafting wireframes, mockups, and user-friendly website interfaces.",
      icon: "🎨",
      step: "2"
    },
    {
      title: "Content Creation",
      desc: "Writing compelling, SEO-optimized content to engage users.",
      icon: "✍️",
      step: "3"
    },
    {
      title: "Testing & Deployment",
      desc: "Ensuring security, speed, and seamless performance.",
      icon: "🚀",
      step: "4"
    },
    {
      title: "Maintenance & Support",
      desc: "Continuous updates and technical support for smooth operation.",
      icon: "🔧",
      step: "5"
    }
  ];

  const whyStandOut = [
    {
      title: "SEO-Optimized Web Design",
      desc: "Get ranked higher on search engines.",
      icon: "🔍"
    },
    {
      title: "Fast & Secure Websites",
      desc: "High-speed performance with free SSL security.",
      icon: "⚡"
    },
    {
      title: "Affordable Pricing",
      desc: "Affordable packages with no hidden costs.",
      icon: "💰"
    },
    {
      title: "Complete Digital Solutions",
      desc: "Web design, SEO, PPC, and social media marketing.",
      icon: "🌐"
    },
    {
      title: "Quick Turnaround",
      desc: "Delivering high-quality websites on tight deadlines.",
      icon: "⏱️"
    },
    {
      title: "Expert Support",
      desc: "Dedicated team for continuous maintenance and support.",
      icon: "👨‍💻"
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
      <div className="relative min-h-screen overflow-hidden bg-gray-900">
        <div className="parallax-layer absolute inset-0 bg-cover bg-center transition-opacity duration-500" style={{ backgroundImage: `url(${imageUrls[0]})`, transform: `translateY(${scrollY * 0.15}px) translateX(${mousePosition.x * 5}px) scale(${1.1 + scrollY * 0.0001})`, opacity: loadedImages[0] ? 1 : 0 }} />
        <div className="parallax-layer absolute inset-0 bg-cover bg-center transition-opacity duration-500" style={{ backgroundImage: `url(${imageUrls[1]})`, transform: `translateY(${scrollY * 0.25}px) scale(1.15)`, opacity: loadedImages[1] ? 0.4 : 0, mixBlendMode: "overlay" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/80 via-violet-800/50 to-black/90" />
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-violet-500/20 blur-3xl float-animation" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-purple-500/20 blur-3xl float-animation" style={{ animationDelay: "2s" }} />

        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-5xl" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
            <motion.span className="inline-block mb-4 px-5 md:px-7 py-2 rounded-full text-base md:text-xl font-bold bg-indigo-500 text-white" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              Leading Website Design and Development Company in Pune
            </motion.span>
            <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-purple-400 to-violet-400 bg-clip-text text-transparent" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
              Website Design And Development
            </motion.h1>
            <motion.p className="text-xl md:text-2xl font-semibold mb-6 text-white" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              Boost Your Online Presence with Expert Web Design and Development in Pune
            </motion.p>
            <motion.p className="text-base md:text-lg max-w-3xl mx-auto mb-10 text-white/90" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
              Are you seeking a web design company in Pune to create a high-performing, responsive, and SEO-friendly website? Look no further! At Fox Air Comm, we offer cutting-edge web design and development in Pune, helping businesses establish a strong online presence and drive conversions.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <Link to="/contact" className="px-8 py-3 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg shadow-violet-500/30">Start Your Free Consultation Today</Link>
              <Link to="/services" className="px-8 py-3 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all">All Services</Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Hire Leading Agency Section */}
      <section className="theme-bg-primary py-12 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl space-y-12">
          <div className="text-center">
            <motion.span
              className="inline-block mb-4 px-5 md:px-7 py-2 rounded-full text-base md:text-xl font-bold bg-indigo-500 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Why You Need a Website
            </motion.span>
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-semibold theme-text-primary mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Hire Pune's Leading Website Development Agency Now!
            </motion.h2>
          </div>

          <div className="space-y-6">
            <motion.div
              className="theme-card shadow-lg rounded-2xl p-6 md:p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="theme-text-secondary text-base md:text-lg leading-relaxed">
                Did you know that <span className="font-semibold theme-text-primary">64% of small businesses have a website</span>? If you don't have an online presence, you're missing out on immense growth opportunities.
              </p>
            </motion.div>

            <motion.div
              className="theme-card shadow-lg rounded-2xl p-6 md:p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="theme-text-secondary text-base md:text-lg leading-relaxed">
                More than <span className="font-semibold theme-text-primary">30% of small businesses generate 25% or more of their revenue online</span>. Invest in the best web development services in Pune to stay ahead of the competition.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="text-center p-8 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-semibold theme-text-primary mb-6">
              Why Choose Our Web Development Services in Pune?
            </h3>
            <ul className="space-y-3 max-w-3xl mx-auto">
              {whyChoose.map((item, index) => (
                <li key={index} className="flex items-start gap-3 justify-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <p className="theme-text-secondary text-base md:text-lg text-left">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Why Fox Air Comm Section */}
      <section className="theme-bg-secondary py-12 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <motion.span
              className="inline-block mb-4 px-5 md:px-7 py-2 rounded-full text-base md:text-xl font-bold bg-indigo-500 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-semibold theme-text-primary mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Why Fox Air Comm is the Best Website Design and Development Company in Pune
            </motion.h2>
            <motion.p
              className="theme-text-secondary text-base md:text-lg max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              As a trusted web development agency in Pune, we specialize in creating websites that are not only visually appealing but also optimized for performance. Our comprehensive services include web design services in Pune, content writing, graphic design, and SEO to help your business thrive online.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="theme-bg-primary py-12 md:py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <motion.span
              className="inline-block mb-4 px-5 md:px-7 py-2 rounded-full text-base md:text-xl font-bold bg-indigo-500 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Process
            </motion.span>
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-semibold theme-text-primary mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Our Website Development Process
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {developmentProcess.map((item, index) => (
              <motion.div
                key={index}
                className="theme-card shadow-lg rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {item.step}
                </div>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center mb-4 md:mb-6 text-2xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold theme-text-primary mb-3">{item.title}</h3>
                <p className="theme-text-secondary text-sm md:text-base leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Stand Out Section */}
      <section className="theme-bg-secondary py-12 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <motion.span
              className="inline-block mb-4 px-5 md:px-7 py-2 rounded-full text-base md:text-xl font-bold bg-indigo-500 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Advantages
            </motion.span>
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-semibold theme-text-primary mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Why Fox Air Comm Stands Out in Web Development Services Pune
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {whyStandOut.map((item, index) => (
              <motion.div
                key={index}
                className="theme-card shadow-lg rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold theme-text-primary mb-2">{item.title}</h3>
                    <p className="theme-text-secondary text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax CTA Section */}
      <div className="relative min-h-[50vh] md:min-h-[60vh] overflow-hidden bg-gray-900">
        <div className="parallax-layer absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrls[2]})`, transform: `translateY(${scrollY * 0.1}px) scale(1.05)`, opacity: loadedImages[2] ? 1 : 0 }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-violet-900/50 to-black/70" />
        <div className="relative z-10 min-h-[50vh] md:min-h-[60vh] flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              Take Your Business to the Next Level
            </motion.h2>
            <motion.p className="text-base md:text-lg mb-6 md:mb-8 text-white/80 max-w-3xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Whether you need website development services in Pune for a startup, an e-commerce store, or a corporate business, Fox Air Comm is your go-to partner. Contact us today for expert web design services in Pune and take your digital presence to new heights!
            </motion.p>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <section className="theme-bg-primary py-12 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Ready to Build Your Website?
          </motion.h2>
          <motion.p
            className="theme-text-secondary text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Don't wait! Contact Fox Air Comm today to get a FREE consultation on website development services in India. Let's create an impressive online presence for your business!
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/contact"
              className="px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-xl"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/enquiry"
              className="px-8 md:px-10 py-3 md:py-4 border-2 border-indigo-500 text-indigo-500 rounded-full font-semibold hover:bg-indigo-500 hover:text-white transition-all"
            >
              Send Enquiry
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default WebsiteDesign;
