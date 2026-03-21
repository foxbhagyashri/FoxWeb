import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function InfluencerMarketing() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
  const containerRef = useRef(null);

  const imageUrls = [
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80",
    "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1920&q=80",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80"
  ];

  const whyChoose = [
    { icon: "🎯", title: "Targeted Influencer Matching", desc: "We carefully match your brand with influencers whose audience aligns perfectly with your target market" },
    { icon: "📊", title: "Data-Driven Strategies", desc: "Our campaigns are backed by analytics and insights to maximize ROI and engagement" },
    { icon: "🤝", title: "Authentic Partnerships", desc: "We foster genuine relationships between brands and influencers for credible endorsements" },
    { icon: "🌟", title: "Multi-Platform Expertise", desc: "From Instagram to YouTube, we leverage all major social platforms for maximum reach" },
    { icon: "💡", title: "Creative Campaign Design", desc: "Innovative content strategies that resonate with audiences and drive conversions" },
    { icon: "📈", title: "Performance Tracking", desc: "Real-time monitoring and detailed reporting on campaign performance and metrics" }
  ];

  const influencerTypes = [
    { icon: "📱", title: "Social Media Influencers", desc: "Connect with Instagram, Facebook, and Twitter personalities who drive engagement" },
    { icon: "🎨", title: "Content Creators", desc: "Partner with creative minds producing original and compelling content" },
    { icon: "🎭", title: "Artists & Celebrities", desc: "Collaborate with high-profile personalities for maximum brand visibility" },
    { icon: "📹", title: "Vloggers & YouTubers", desc: "Leverage video content creators for in-depth product showcases and reviews" },
    { icon: "✍️", title: "Bloggers & Writers", desc: "Engage written content specialists for detailed brand storytelling" },
    { icon: "🎵", title: "TikTok & Short-Form Creators", desc: "Tap into viral short-form content creators for trending campaigns" }
  ];

  const benefits = [
    { icon: "🚀", title: "Increased Brand Awareness", desc: "Reach millions of potential customers through trusted influencer voices" },
    { icon: "💰", title: "Higher ROI", desc: "Influencer marketing delivers better returns compared to traditional advertising" },
    { icon: "❤️", title: "Build Trust & Credibility", desc: "Authentic endorsements create genuine trust with your target audience" },
    { icon: "🎯", title: "Precise Targeting", desc: "Reach specific demographics and niche audiences with laser precision" },
    { icon: "📸", title: "Quality Content Creation", desc: "Get professional, engaging content that you can repurpose across channels" },
    { icon: "⚡", title: "Fast Results", desc: "See immediate engagement and traffic spikes from influencer campaigns" }
  ];

  const ourProcess = [
    { number: "01", title: "Brand Analysis", desc: "Understanding your brand identity, goals, and target audience to craft the perfect strategy" },
    { number: "02", title: "Influencer Discovery", desc: "Identifying and vetting influencers who align with your brand values and audience" },
    { number: "03", title: "Campaign Strategy", desc: "Developing creative campaign concepts and content guidelines for maximum impact" },
    { number: "04", title: "Partnership Management", desc: "Negotiating contracts and managing relationships with selected influencers" },
    { number: "05", title: "Content Execution", desc: "Overseeing content creation and ensuring brand message consistency" },
    { number: "06", title: "Performance Analysis", desc: "Tracking metrics, analyzing results, and optimizing for continuous improvement" }
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
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/80 via-pink-800/50 to-black/90" />
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-pink-500/20 blur-3xl float-animation" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-purple-500/20 blur-3xl float-animation" style={{ animationDelay: "2s" }} />

        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="text-center" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
            <motion.span className="inline-block mb-4 px-6 py-2 rounded-full text-sm font-semibold bg-indigo-500/20 text-indigo-300 backdrop-blur-sm border border-indigo-500/30" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              Leading Influencer Marketing Agency in India
            </motion.span>
            <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
              Unlock Your Brand's True Potential with Influencer Marketing
            </motion.h1>
            <motion.p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white/80" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              Fox Aircomm Pvt Ltd is India's premier Influencer Marketing Agency, celebrated for creating impactful strategies that bridge the gap between brands and their target audiences. Our all-inclusive influencer marketing platform leverages the creativity of leading social media influencers, content creators, artists, celebrities, vloggers, and bloggers.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <Link to="/contact" className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg shadow-indigo-500/30">Get Started</Link>
              <Link to="/services" className="px-8 py-3 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all">All Services</Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Personalized Solutions Section */}
      <section className="theme-bg-primary py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div className="p-12 rounded-3xl theme-bg-card border theme-border shadow-xl text-center" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-4xl mx-auto mb-6">💎</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">Personalized Influencer Marketing Solutions</h2>
            <p className="text-lg theme-text-secondary max-w-2xl mx-auto">With a focus on personalized influencer marketing solutions, we ensure every campaign resonates with your audience, converting engagement into lasting loyalty. Trust Fox Aircomm Pvt Ltd to drive remarkable growth and take your brand to new heights.</p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="theme-bg-secondary py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.span className="inline-block mb-4 px-6 py-2 rounded-full text-base font-bold bg-indigo-500 text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Why Choose Us</motion.span>
            <motion.h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Why Partner with Fox Aircomm?</motion.h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <motion.div key={index} className="p-8 rounded-2xl theme-bg-card border theme-border shadow-sm hover:shadow-xl transition-all duration-300 group" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-bold theme-text-primary mb-3">{item.title}</h3>
                <p className="theme-text-secondary">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Influencer Types Section */}
      <section className="theme-bg-primary py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.span className="inline-block mb-4 px-6 py-2 rounded-full text-base font-bold bg-pink-500 text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Our Network</motion.span>
            <motion.h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Work with Top Influencers Across All Platforms</motion.h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {influencerTypes.map((item, index) => (
              <motion.div key={index} className="p-8 rounded-2xl theme-bg-card border theme-border shadow-sm hover:shadow-xl transition-all duration-300 group" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-indigo-500 flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-bold theme-text-primary mb-3">{item.title}</h3>
                <p className="theme-text-secondary">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="theme-bg-secondary py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.span className="inline-block mb-4 px-6 py-2 rounded-full text-base font-bold bg-indigo-500 text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Campaign Benefits</motion.span>
            <motion.h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Benefits of Influencer Marketing</motion.h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((item, index) => (
              <motion.div key={index} className="p-8 rounded-2xl theme-bg-card border theme-border shadow-sm hover:shadow-xl transition-all duration-300 group" initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold theme-text-primary mb-2">{item.title}</h3>
                    <p className="theme-text-secondary">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="theme-bg-primary py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.span className="inline-block mb-4 px-6 py-2 rounded-full text-base font-bold bg-pink-500 text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Our Process</motion.span>
            <motion.h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>How We Create Winning Campaigns</motion.h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ourProcess.map((item, index) => (
              <motion.div key={index} className="p-8 rounded-2xl theme-bg-card border theme-border shadow-sm hover:shadow-xl transition-all duration-300" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-indigo-500 flex items-center justify-center mb-4 text-white font-bold text-lg">{item.number}</div>
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
        <div className="absolute inset-0 bg-gradient-to-t from-black via-indigo-900/50 to-black/70" />
        <div className="relative z-10 min-h-[60vh] flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 className="text-3xl md:text-5xl font-bold mb-6 text-white" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Start Your Free Consultation Today</motion.h2>
            <motion.p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Let Fox Aircomm help you leverage the power of influencer marketing to drive remarkable growth and take your brand to new heights</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Link to="/contact" className="px-10 py-4 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-xl">Get Your Free Consultation</Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default InfluencerMarketing;
