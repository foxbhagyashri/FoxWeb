import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function GraphicsDesign() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
  const containerRef = useRef(null);

  const imageUrls = [
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&q=80",
    "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=1920&q=80",
    "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1920&q=80"
  ];

  const whyChoose = [
    { icon: "👨‍💼", title: "Experienced Creative Professionals", desc: "Our team consists of skilled designers with years of experience in delivering exceptional visual solutions" },
    { icon: "💰", title: "Affordable and High-Quality Design", desc: "Get premium design services that fit your budget without compromising on quality" },
    { icon: "⚡", title: "Fast Turnaround Time", desc: "We understand deadlines matter. Receive your designs quickly without sacrificing excellence" },
    { icon: "🤝", title: "Personalized Client Support", desc: "Dedicated support throughout your project with transparent communication and collaboration" }
  ];

  const benefits = [
    { icon: "🏙️", title: "Understands Local Culture & Business Needs", desc: "Deep knowledge of Pune's market and cultural nuances for relevant designs" },
    { icon: "💬", title: "Easy Communication and Face-to-Face Meetings", desc: "Convenient local presence for seamless collaboration and quick meetings" },
    { icon: "🔄", title: "Quick Support and Revisions", desc: "Rapid response times and efficient revision processes to meet your needs" },
    { icon: "⭐", title: "Trusted by Hundreds of Pune-Based Businesses", desc: "Proven track record with local businesses across diverse industries" }
  ];

  const specializations = [
    { icon: "🎨", title: "Logo Design & Branding", desc: "Create memorable brand identities that resonate with your audience" },
    { icon: "📱", title: "Social Media Graphics", desc: "Eye-catching visuals for all your social platforms" },
    { icon: "📦", title: "Packaging & Label Design", desc: "Product packaging that stands out on shelves" },
    { icon: "📄", title: "Business Cards & Brochures", desc: "Professional print materials for your business" },
    { icon: "🖼️", title: "Website Banners & Ad Creatives", desc: "Digital assets optimized for online marketing" }
  ];

  const designProcess = [
    { number: "01", title: "Research", desc: "Conducting in-depth analysis to comprehend the client's goals, target audience, and industry trends, forming the foundation for the design strategy" },
    { number: "02", title: "Conceptualization", desc: "Brainstorming and sketching design ideas to explore creative possibilities" },
    { number: "03", title: "Design Development", desc: "Transforming ideas into visual concepts through digital mockups and interactive prototypes, ensuring functionality and aesthetic appeal" },
    { number: "04", title: "Client Review & Feedback", desc: "Implementing requested changes and refining designs based on your input" },
    { number: "05", title: "Finalization", desc: "Preparing high-resolution, print-ready files with attention to detail" },
    { number: "06", title: "Delivery", desc: "Providing the finished design in the required formats for immediate use" }
  ];

  const hiringFactors = [
    { icon: "📁", title: "Portfolio", desc: "Review their portfolio to evaluate their design style, creativity, and consistency" },
    { icon: "💬", title: "Client Testimonials", desc: "Hear directly from past clients about their experience" },
    { icon: "🎓", title: "Expertise & Experience", desc: "Look for a team with extensive experience and a track record of success" },
    { icon: "🤝", title: "Communication & Collaboration", desc: "Ensure they are transparent and easy to work with" },
    { icon: "💵", title: "Cost & Budget", desc: "Choose a company that offers services within your budget without compromising on quality" },
    { icon: "⏰", title: "Availability", desc: "Ensure they can meet your deadlines and deliver on time" },
    { icon: "✅", title: "Ethics & Reputation", desc: "Work with a trusted company that values integrity and professionalism" }
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
        <div className="absolute inset-0 bg-gradient-to-b from-rose-900/80 via-rose-800/50 to-black/90" />
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-rose-500/20 blur-3xl float-animation" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-pink-500/20 blur-3xl float-animation" style={{ animationDelay: "2s" }} />

        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="text-center" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
            <motion.span className="inline-block mb-4 px-6 py-2 rounded-full text-sm font-semibold bg-indigo-500/20 text-indigo-300 backdrop-blur-sm border border-indigo-500/30" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              Leading Graphic Design Companies in Pune
            </motion.span>
            <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-rose-400 to-indigo-400 bg-clip-text text-transparent" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
              Graphic And Brochure Design for Creative Branding
            </motion.h1>
            <motion.p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white/80" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              We are a full-service graphic design agency in Pune offering customized designs to elevate your brand's visual identity.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <Link to="/contact" className="px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg shadow-rose-500/30">Get Started</Link>
              <Link to="/services" className="px-8 py-3 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all">All Services</Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Branding Services Section */}
      <section className="theme-bg-primary py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.span className="inline-block mb-4 px-6 py-2 rounded-full text-base font-bold bg-indigo-500 text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Branding Services</motion.span>
            <motion.h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-rose-500 bg-clip-text text-transparent" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Branding Services by Top Agencies in Pune</motion.h2>
            <motion.p className="text-lg theme-text-secondary max-w-3xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              We provide end-to-end branding services—from strategy to execution—crafted by one of the most trusted branding agencies in Pune.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="theme-bg-secondary py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.span className="inline-block mb-4 px-6 py-2 rounded-full text-base font-bold bg-rose-500 text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Why Choose Us</motion.span>
            <motion.h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-500 to-indigo-500 bg-clip-text text-transparent" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Why Choose Our Graphic Design Agency in Pune?</motion.h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => (
              <motion.div key={index} className="p-8 rounded-2xl theme-bg-card border theme-border shadow-sm hover:shadow-xl transition-all duration-300 group" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-indigo-500 flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-bold theme-text-primary mb-3">{item.title}</h3>
                <p className="theme-text-secondary">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="theme-bg-primary py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.span className="inline-block mb-4 px-6 py-2 rounded-full text-base font-bold bg-indigo-500 text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Local Benefits</motion.span>
            <motion.h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-rose-500 bg-clip-text text-transparent" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Benefits of Hiring a Local Graphic Design Company in Pune</motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((item, index) => (
              <motion.div key={index} className="p-8 rounded-2xl theme-bg-card border theme-border shadow-sm hover:shadow-xl transition-all duration-300 group" initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-rose-500 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">{item.icon}</div>
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

      {/* Specializations Section */}
      <section className="theme-bg-secondary py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.span className="inline-block mb-4 px-6 py-2 rounded-full text-base font-bold bg-rose-500 text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Our Expertise</motion.span>
            <motion.h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-500 to-indigo-500 bg-clip-text text-transparent" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Our Specializations</motion.h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializations.map((item, index) => (
              <motion.div key={index} className="p-8 rounded-2xl theme-bg-card border theme-border shadow-sm hover:shadow-xl transition-all duration-300 group" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-indigo-500 flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-bold theme-text-primary mb-3">{item.title}</h3>
                <p className="theme-text-secondary">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Save Money Section */}
      <section className="theme-bg-primary py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div className="p-12 rounded-3xl theme-bg-card border theme-border shadow-xl text-center" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-4xl mx-auto mb-6">💰</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Save Money on Graphic Design</h2>
            <p className="text-lg theme-text-secondary max-w-2xl mx-auto">Our services start at a low price to meet any budget, making us a suitable option for startups and established businesses alike.</p>
          </motion.div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="theme-bg-secondary py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.span className="inline-block mb-4 px-6 py-2 rounded-full text-base font-bold bg-indigo-500 text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Our Process</motion.span>
            <motion.h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-rose-500 bg-clip-text text-transparent" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Our Graphic Design Process</motion.h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designProcess.map((item, index) => (
              <motion.div key={index} className="p-8 rounded-2xl theme-bg-card border theme-border shadow-sm hover:shadow-xl transition-all duration-300" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-rose-500 flex items-center justify-center mb-4 text-white font-bold text-lg">{item.number}</div>
                <h3 className="text-xl font-bold theme-text-primary mb-3">{item.title}</h3>
                <p className="theme-text-secondary">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Factors Section */}
      <section className="theme-bg-primary py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.span className="inline-block mb-4 px-6 py-2 rounded-full text-base font-bold bg-rose-500 text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Hiring Guide</motion.span>
            <motion.h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-500 to-indigo-500 bg-clip-text text-transparent" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>When Hiring a Graphic Design Company, Consider:</motion.h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hiringFactors.map((item, index) => (
              <motion.div key={index} className="p-8 rounded-2xl theme-bg-card border theme-border shadow-sm hover:shadow-xl transition-all duration-300 group" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-indigo-500 flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold theme-text-primary mb-2">{item.title}</h3>
                    <p className="theme-text-secondary text-sm">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="theme-bg-secondary py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <motion.span className="inline-block mb-4 px-6 py-2 rounded-full text-base font-bold bg-indigo-500 text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Client Success</motion.span>
            <motion.h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-rose-500 bg-clip-text text-transparent" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>What Our Clients Say About Our Services</motion.h2>
          </div>
          <motion.div className="p-10 rounded-3xl theme-bg-card border theme-border shadow-lg" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-lg theme-text-secondary text-center leading-relaxed">
              At Fox Air Comm Digital Marketing Company, we value our clients' feedback and consistently strive to exceed expectations. Our customers appreciate our high-quality graphic design services and timely delivery, which help them achieve their business goals effectively.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Save Time Section */}
      <section className="theme-bg-primary py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div className="p-12 rounded-3xl theme-bg-card border theme-border shadow-xl text-center" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-4xl mx-auto mb-6">⚡</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Save Time with Our Premium Graphic Design Services in India</h2>
            <p className="text-lg theme-text-secondary max-w-2xl mx-auto">We understand the importance of time in business. That's why we offer the fastest turnaround without compromising on quality. Our efficient process ensures that your graphic design needs are met promptly, allowing you to focus on growing your business.</p>
          </motion.div>
        </div>
      </section>

      {/* Parallax CTA Section */}
      <div className="relative min-h-[60vh] overflow-hidden bg-gray-900">
        <div className="parallax-layer absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrls[2]})`, transform: `translateY(${scrollY * 0.1}px) scale(1.05)`, opacity: loadedImages[2] ? 1 : 0 }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-indigo-900/50 to-black/70" />
        <div className="relative z-10 min-h-[60vh] flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 className="text-3xl md:text-5xl font-bold mb-6 text-white" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Let's Grow Your Business Online</motion.h2>
            <motion.p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Contact Fox Air Comm Digital Marketing Company today for the best graphic design services in India</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Link to="/contact" className="px-10 py-4 bg-gradient-to-r from-indigo-500 to-rose-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-xl">Get Started Today</Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Quality Guarantee Section */}
      <section className="theme-bg-primary py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div className="p-12 rounded-3xl theme-bg-card border theme-border shadow-xl text-center" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-4xl mx-auto mb-6">✅</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">Guaranteed Quality Graphic Design Services in India</h2>
            <p className="text-lg theme-text-secondary max-w-2xl mx-auto">We stand by the originality, appeal, and high quality of our designs. Our goal is to help your brand shine. Contact Fox Air Comm Digital Marketing Company today for the best graphic design services in India.</p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default GraphicsDesign;
