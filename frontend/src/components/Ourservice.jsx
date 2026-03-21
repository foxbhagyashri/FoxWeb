import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

function Ourservice() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
  const containerRef = useRef(null);

  // Optimized image loading
  const imageUrls = [
    "https://images.unsplash.com/photo-1559028012-c81e9899cab3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  ];

  // Load images
  useEffect(() => {
    const loadImages = async () => {
      const promises = imageUrls.map((url, index) => 
        new Promise((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = () => {
            setLoadedImages(prev => ({ ...prev, [index]: true }));
            resolve();
          };
          img.onerror = () => resolve();
        })
      );
      await Promise.all(promises);
    };
    loadImages();
  }, []);

  // Check mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Optimized scroll handler
  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const relativeScroll = -rect.top;
      setScrollY(relativeScroll);
      document.documentElement.style.setProperty('--scroll-y', `${relativeScroll}px`);
    }
  }, []);

  // Optimized mouse handler
  const handleMouseMove = useCallback((e) => {
    if (isMobile) return;
    
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    setMousePosition({ x, y });
    
    document.documentElement.style.setProperty('--mouse-x', `${x}`);
    document.documentElement.style.setProperty('--mouse-y', `${y}`);
  }, [isMobile]);

  // Enhanced parallax effect with requestAnimationFrame
  useEffect(() => {
    let ticking = false;
    
    const updateParallax = () => {
      handleScroll();
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    // Initial setup
    handleScroll();
    
    // Event listeners with passive for better performance
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll, handleMouseMove]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <motion.div 
      ref={containerRef} 
      className="parallax-container overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        
        .parallax-layer {
          will-change: transform;
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }
        
        .parallax-optimized {
          transform: translateZ(0);
          will-change: transform;
          backface-visibility: hidden;
        }
        
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        .smooth-parallax {
          transition: transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .parallax-overlay {
          background: linear-gradient(135deg, 
            rgba(0, 0, 0, 0.7) 0%, 
            rgba(0, 0, 0, 0.3) 50%, 
            rgba(0, 0, 0, 0.7) 100%
          );
        }
        
        @media (prefers-reduced-motion: reduce) {
          .parallax-optimized,
          .smooth-parallax {
            transform: none !important;
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      {/* First Parallax Section - Enhanced Hero */}
      <div className="relative min-h-screen overflow-hidden bg-gray-900">
        {/* Background Layers with improved stacking */}
        <div 
          className="parallax-layer absolute inset-0 bg-cover bg-center parallax-optimized smooth-parallax"
          style={{
            backgroundImage: `url(${imageUrls[0]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            transform: `
              translateY(${scrollY * 0.1}px) 
              translateX(${mousePosition.x * (isMobile ? 0 : 5)}px) 
              scale(${1 + (Math.sin(scrollY * 0.0005) * 0.05)})
            `,
            opacity: loadedImages[0] ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out'
          }}
        />
        
        <div 
          className="parallax-layer absolute inset-0 bg-cover bg-center parallax-optimized smooth-parallax"
          style={{
            backgroundImage: `url(${imageUrls[1]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            transform: `
              translateY(${scrollY * 0.3}px) 
              translateX(${mousePosition.x * (isMobile ? 0 : 15)}px) 
              scale(${1.1 + (Math.sin(scrollY * 0.0003) * 0.1)})
            `,
            opacity: loadedImages[1] ? 0.6 : 0,
            mixBlendMode: 'overlay',
            transition: 'opacity 0.5s ease-in-out'
          }}
        />
        
        <div 
          className="parallax-layer absolute inset-0 bg-cover bg-center parallax-optimized smooth-parallax"
          style={{
            backgroundImage: `url(${imageUrls[2]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            transform: `
              translateY(${scrollY * 0.5}px) 
              translateX(${mousePosition.x * (isMobile ? 0 : 25)}px) 
              scale(${1.2 + (Math.cos(scrollY * 0.0002) * 0.08)})
            `,
            opacity: loadedImages[2] ? 0.4 : 0,
            mixBlendMode: 'screen',
            transition: 'opacity 0.5s ease-in-out'
          }}
        />
        
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/10 to-pink-900/20"></div>
        
        {/* Animated floating elements */}
        <div className="parallax-layer absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl float-animation"></div>
        <div className="parallax-layer absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-to-r from-pink-500/20 to-orange-500/20 blur-3xl float-animation" style={{animationDelay: '2s'}}></div>
        
        <div className="parallax-overlay absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="text-center transform transition-all duration-700" 
               style={{
                 transform: `
                   translateY(${scrollY * 0.1}px) 
                   scale(${1 - Math.min(scrollY * 0.0001, 0.1)})
                 `
               }}>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent drop-shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Services
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 text-white/90 leading-relaxed font-light tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transform your business with cutting-edge digital solutions
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-base font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30 active:scale-95">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-white/30 text-white rounded-full text-base font-semibold backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-lg">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section - Digital Excellence */}
      <section className="theme-bg-primary py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <motion.span 
              className="inline-block mb-4 px-5 md:px-7 py-2 rounded-full text-base md:text-lg font-bold bg-indigo-500 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              What We Do
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Digital Excellence
            </motion.h2>
            <motion.p 
              className="text-base md:text-lg max-w-2xl mx-auto theme-text-secondary leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Comprehensive digital marketing solutions delivering measurable results and sustainable growth
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: '📊', title: 'Strategy', desc: 'Custom digital strategies tailored to your goals', color: 'from-orange-500 to-red-500' },
              { icon: '⚡', title: 'Execution', desc: 'Expert implementation across all channels', color: 'from-orange-500 to-red-500' },
              { icon: '🎯', title: 'Results', desc: 'Data-driven insights for continuous optimization', color: 'from-orange-500 to-red-500' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="relative group p-6 md:p-8 rounded-2xl theme-bg-card border theme-border shadow-sm hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 text-2xl md:text-3xl transform transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}>
                  {item.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold theme-text-primary mb-3">{item.title}</h3>
                <p className="theme-text-secondary text-sm md:text-base leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Second Parallax Section - Performance Marketing */}
      <div className="relative min-h-[70vh] overflow-hidden bg-gray-900">
        {/* Background with depth effect */}
        <div 
          className="parallax-layer absolute inset-0 bg-cover bg-center parallax-optimized smooth-parallax"
          style={{
            backgroundImage: `url(${imageUrls[3]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            transform: `
              translateY(${scrollY * 0.2}px) 
              scale(${1.05 + (Math.sin(scrollY * 0.0003) * 0.05)})
            `,
            opacity: loadedImages[3] ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-transparent"></div>
        
        <div className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent drop-shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Performance Marketing
            </motion.h2>
            <motion.p 
              className="text-base md:text-lg lg:text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Drive measurable results with data-driven campaigns that convert visitors into customers
            </motion.p>
            <motion.button 
              className="px-10 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-base font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/40 active:scale-95"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Get Started Today
            </motion.button>
          </div>
        </div>
      </div>

      {/* Content Section - Our Expertise */}
      <section className="theme-bg-primary py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <motion.span 
              className="inline-block mb-4 px-5 md:px-7 py-2 rounded-full text-base md:text-lg font-bold bg-indigo-500 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Expertise
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Specialized Solutions
            </motion.h2>
            <motion.p 
              className="text-base md:text-lg theme-text-secondary max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Specialized digital marketing solutions for thriving in the competitive landscape
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              { title: 'SEO Optimization', desc: 'Proven strategies for search engine rankings', icon: '🔍' },
              { title: 'Social Media Marketing', desc: 'Build brand presence across platforms', icon: '📱' },
              { title: 'PPC Advertising', desc: 'Targeted ads maximizing ROI', icon: '💰' },
              { title: 'Content Marketing', desc: 'Compelling content driving engagement', icon: '✍️' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="p-6 md:p-8 rounded-2xl theme-bg-card border theme-border shadow-sm hover:shadow-xl transition-all duration-300 hover:translate-x-1"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-xl md:text-2xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold theme-text-primary mb-2">{item.title}</h3>
                    <p className="theme-text-secondary text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Third Parallax Section - Growth Partners */}
      <div className="relative min-h-[70vh] overflow-hidden bg-gray-900">
        {/* Layered background */}
        <div 
          className="parallax-layer absolute inset-0 bg-cover bg-center parallax-optimized smooth-parallax"
          style={{
            backgroundImage: `url(${imageUrls[4]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            transform: `translateY(${scrollY * 0.1}px) scale(1.02)`,
            opacity: loadedImages[4] ? 1 : 0
          }}
        />
        
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent drop-shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Growth Partners
            </motion.h2>
            <motion.p 
              className="text-base md:text-lg lg:text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Your success is our mission. Partner with us for sustainable growth
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-base font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/40 active:scale-95">
                Start Your Journey
              </button>
              <button className="px-8 py-3 border-2 border-white/30 text-white rounded-full text-base font-semibold backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-lg">
                View Case Studies
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );

}

export default Ourservice;