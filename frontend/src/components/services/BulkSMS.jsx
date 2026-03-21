import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function BulkSMS() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
  const containerRef = useRef(null);

  const imageUrls = [
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80",
    "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1920&q=80",
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&q=80"
  ];

  const features = [
    { icon: "📱", title: "Mass Messaging", desc: "Send thousands of SMS messages instantly to your audience" },
    { icon: "⚡", title: "Instant Delivery", desc: "Lightning-fast delivery with 99.9% uptime guarantee" },
    { icon: "📊", title: "Delivery Reports", desc: "Real-time tracking and comprehensive delivery analytics" },
    { icon: "👤", title: "Personalization", desc: "Dynamic content with personalized messages for each recipient" },
    { icon: "📅", title: "Scheduled Campaigns", desc: "Plan and schedule SMS campaigns for optimal timing" },
    { icon: "🔒", title: "DND Filtering", desc: "Automatic DND number filtering for compliance" }
  ];

  const expertise = [
    { title: "Promotional SMS", desc: "Marketing messages to boost sales and engagement", icon: "📢" },
    { title: "Transactional SMS", desc: "OTPs, alerts, and notifications for your customers", icon: "🔔" },
    { title: "API Integration", desc: "Seamless integration with your existing systems", icon: "🔗" },
    { title: "Unicode Support", desc: "Multi-language SMS support for regional reach", icon: "🌐" }
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

    <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">

  {/* Background */}
  <div
    className="absolute inset-0 bg-cover bg-center scale-105"
    style={{ backgroundImage: `url('/assets/images/bulk-sms.jpg')` }}
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
          Bulk SMS Service Provider In Pune
        </motion.p>

        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-semibold
               text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Bulk SMS Marketing
          <span className="block text-gray-300">
            Reach Customers Instantly & Boost Engagement
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
          Send promotional, transactional, and OTP messages to thousands of users
          in seconds with our reliable Bulk SMS platform. Perfect for marketing,
          alerts, and business communication.
        </motion.p>

        {/* CTA Buttons */}
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
            Request SMS Demo
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center justify-center
                 px-8 py-3.5 border border-gray-400
                 text-gray-200 font-semibold rounded-md
                 hover:border-white hover:text-white
                 transition-colors"
          >
            Explore All Services
          </Link>
        </motion.div>

      </div>
    </div>
  </div>
</div>


      {/* Features Section */}
      <section className="theme-bg-primary py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.span className="inline-block mb-4 px-6 py-2 rounded-full text-base font-bold bg-orange-500 text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>What We Offer</motion.span>
            <motion.h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Our Bulk SMS Features</motion.h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <motion.div key={index} className="p-8 rounded-2xl theme-bg-card border theme-border shadow-sm hover:shadow-xl transition-all duration-300 group" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-bold theme-text-primary mb-3">{item.title}</h3>
                <p className="theme-text-secondary">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax CTA Section */}
      <div className="relative min-h-[60vh] overflow-hidden bg-gray-900">
        <div className="parallax-layer absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrls[2]})`, transform: `translateY(${scrollY * 0.1}px) scale(1.05)`, opacity: loadedImages[2] ? 1 : 0 }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-orange-900/50 to-black/70" />
        <div className="relative z-10 min-h-[60vh] flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 className="text-3xl md:text-5xl font-bold mb-6 text-white" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Ready to Reach Your Audience?</motion.h2>
            <motion.p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Start sending bulk SMS campaigns that convert</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Link to="/contact" className="px-10 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-xl">Contact Us Today</Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <section className="theme-bg-primary py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.span className="inline-block mb-4 px-6 py-2 rounded-full text-base font-bold bg-orange-500 text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>SMS Types</motion.span>
            <motion.h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Complete SMS Solutions</motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <motion.div key={index} className="p-8 rounded-2xl theme-bg-card border theme-border shadow-sm hover:shadow-xl transition-all duration-300" initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-2xl flex-shrink-0">{item.icon}</div>
                  <div><h3 className="text-xl font-bold theme-text-primary mb-2">{item.title}</h3><p className="theme-text-secondary">{item.desc}</p></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default BulkSMS;
