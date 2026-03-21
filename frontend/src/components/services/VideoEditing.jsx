import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function VideoEditing() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
  const containerRef = useRef(null);

  const imageUrls = [
    "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1920&q=80",
    "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1920&q=80",
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&q=80"
  ];

  const features = [
    { icon: "🎬", title: "Professional Editing", desc: "Cinema-quality video editing for all types of content" },
    { icon: "✨", title: "Visual Effects", desc: "Stunning VFX and motion graphics to enhance your videos" },
    { icon: "🎵", title: "Sound Design", desc: "Professional audio mixing and sound effects" },
    { icon: "🎨", title: "Color Grading", desc: "Cinematic color correction and grading" },
    { icon: "📝", title: "Subtitles & Captions", desc: "Multi-language subtitles and closed captions" },
    { icon: "⚡", title: "Fast Delivery", desc: "Quick turnaround without compromising quality" }
  ];

  const expertise = [
    { title: "Corporate Videos", desc: "Professional business content", icon: "🏢" },
    { title: "Social Media Reels", desc: "Engaging short-form content", icon: "📱" },
    { title: "YouTube Videos", desc: "Optimized for YouTube", icon: "▶️" },
    { title: "Promotional Videos", desc: "Marketing and ads", icon: "📢" }
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

      <div className="relative min-h-screen overflow-hidden bg-gray-900">
        <div className="parallax-layer absolute inset-0 bg-cover bg-center transition-opacity duration-500" style={{ backgroundImage: `url(${imageUrls[0]})`, transform: `translateY(${scrollY * 0.15}px) translateX(${mousePosition.x * 5}px) scale(${1.1 + scrollY * 0.0001})`, opacity: loadedImages[0] ? 1 : 0 }} />
        <div className="parallax-layer absolute inset-0 bg-cover bg-center transition-opacity duration-500" style={{ backgroundImage: `url(${imageUrls[1]})`, transform: `translateY(${scrollY * 0.25}px) scale(1.15)`, opacity: loadedImages[1] ? 0.4 : 0, mixBlendMode: "overlay" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/80 via-red-800/50 to-black/90" />
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-red-500/20 blur-3xl float-animation" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-yellow-500/20 blur-3xl float-animation" style={{ animationDelay: "2s" }} />

        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="text-center" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
            <motion.span className="inline-block mb-4 px-6 py-2 rounded-full text-sm font-semibold bg-red-500/20 text-red-300 backdrop-blur-sm border border-red-500/30" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>Video Production</motion.span>
            <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-red-400 via-yellow-400 to-red-400 bg-clip-text text-transparent" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>Video Editing</motion.h1>
            <motion.p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white/80" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>Professional video editing services that bring your stories to life</motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <Link to="/contact" className="px-8 py-3 bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg shadow-red-500/30">Get Started</Link>
              <Link to="/services" className="px-8 py-3 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all">All Services</Link>
            </motion.div>
          </div>
        </div>
      </div>

      <section className="theme-bg-primary py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.span className="inline-block mb-4 px-6 py-2 rounded-full text-base font-bold bg-red-500 text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>What We Offer</motion.span>
            <motion.h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Video Editing Features</motion.h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <motion.div key={index} className="p-8 rounded-2xl theme-bg-card border theme-border shadow-sm hover:shadow-xl transition-all duration-300 group" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-yellow-500 flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-bold theme-text-primary mb-3">{item.title}</h3>
                <p className="theme-text-secondary">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative min-h-[60vh] overflow-hidden bg-gray-900">
        <div className="parallax-layer absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrls[2]})`, transform: `translateY(${scrollY * 0.1}px) scale(1.05)`, opacity: loadedImages[2] ? 1 : 0 }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-red-900/50 to-black/70" />
        <div className="relative z-10 min-h-[60vh] flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 className="text-3xl md:text-5xl font-bold mb-6 text-white" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Ready to Create Amazing Videos?</motion.h2>
            <motion.p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Transform your footage into cinematic masterpieces</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Link to="/contact" className="px-10 py-4 bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-xl">Contact Us Today</Link>
            </motion.div>
          </div>
        </div>
      </div>

      <section className="theme-bg-primary py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.span className="inline-block mb-4 px-6 py-2 rounded-full text-base font-bold bg-red-500 text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Video Types</motion.span>
            <motion.h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Video Solutions</motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <motion.div key={index} className="p-8 rounded-2xl theme-bg-card border theme-border shadow-sm hover:shadow-xl transition-all duration-300" initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-yellow-500 flex items-center justify-center text-2xl flex-shrink-0">{item.icon}</div>
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

export default VideoEditing;
