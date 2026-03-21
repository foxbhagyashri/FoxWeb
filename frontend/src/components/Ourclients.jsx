import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import client1 from "../assets/clients/client1.png"
import client2 from "../assets/clients/client2.png"
import client3 from "../assets/clients/client3.png"
import client4 from "../assets/clients/client4.png"
import client5 from "../assets/clients/client5.png"
import client6 from "../assets/clients/client6.png"
import client7 from "../assets/clients/client7.png"
import client8 from "../assets/clients/client8.png"
import client9 from "../assets/clients/client9.png"
import landingimg from "../assets/service/landingimg.png";
import service1 from "../assets/service/service1.png";
import service2 from "../assets/service/service2.png";

const images = [
  { src: service2, slogan: "Trusted by 500+ Brands to Scale Online." },
  { src: service1, slogan: "10+ Years of Proven Digital Growth." },
  { src: landingimg, slogan: "Fox Aircomm – Performance Marketing Experts." }
];

// Categories for filtering
const categories = [
  { id: 'all', label: 'All Clients', icon: '🏢' },
  { id: 'education', label: 'Education & Healthcare', icon: '🎓' },
  { id: 'it', label: 'IT & SaaS', icon: '💻' },
  { id: 'realestate', label: 'Real Estate & Retail', icon: '🏠' },
  { id: 'finance', label: 'Finance & Travel', icon: '💰' }
];

const clients = [
  { src: client1, name: "Client 1", category: "education" },
  { src: client2, name: "Client 2", category: "it" },
  { src: client3, name: "Client 3", category: "realestate" },
  { src: client4, name: "Client 4", category: "finance" },
  { src: client5, name: "Client 5", category: "education" },
  { src: client6, name: "Client 6", category: "it" },
  { src: client7, name: "Client 7", category: "realestate" },
  { src: client8, name: "Client 8", category: "finance" },
  { src: client9, name: "Client 9", category: "education" }
];

function Ourclients() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter clients based on active category
  const filteredClients = activeCategory === 'all' 
    ? clients 
    : clients.filter(client => client.category === activeCategory);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (
      savedTheme === 'dark' ||
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Increased to 5 seconds per image
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="theme-bg-primary py-10 md:py-22">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 space-y-16 md:space-y-20">

        {/* Service Slider */}
        <motion.div 
          className="relative h-72 md:h-96 overflow-hidden rounded-2xl shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.src}
                alt={image.slogan}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          ))}
        </motion.div>

        {/* Header */}
        <div className="text-center">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-5 bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Valued Clients
          </motion.h2>
          <motion.p 
            className="theme-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Trusted by leading brands and businesses across various industries
          </motion.p>
        </div>

        {/* Content - 2 Column Grid like Aboutus.jsx */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">

          {/* Text Section - Left side */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block mb-2 px-5 md:px-7 py-2 rounded-full text-base md:text-xl font-bold bg-indigo-500 text-white">
              Our Clients
            </span>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold theme-text-primary mb-4 md:mb-6 leading-tight">
              Trusted by 500+ Happy Clients Worldwide
            </h3>

            <p className="theme-text-secondary text-base md:text-lg max-w-xl leading-relaxed">
              We support innovative startups, growing businesses, and established brands across diverse industry sectors with transparency, performance, and measurable impact.
            </p>

            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                <span className="theme-text-secondary text-base">
                  Proven success across diverse business industries
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                <span className="theme-text-secondary text-base">
                  Strong long-term partnerships built on trust
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                <span className="theme-text-secondary text-base">
                  Performance-driven strategies with measurable ROI
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                <span className="theme-text-secondary text-base">
                  Customized digital solutions for sustainable growth
                </span>
              </div>
            </div>
          </motion.div>

          {/* Clients Section - Right side with Category Filter */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Category Filter Buttons - Fixed Layout */}
            <div className="flex flex-col items-center gap-2 pb-2">
              {/* First Row - 3 buttons */}
              <div className="flex justify-center gap-2">
                {categories.slice(0, 3).map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 md:px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-colors duration-300 flex items-center gap-2 whitespace-nowrap ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                        : 'theme-bg-secondary theme-text-secondary hover:bg-orange-100 dark:hover:bg-orange-900/30 border theme-border'
                    }`}
                  >
                    <span>{category.icon}</span>
                    <span>{category.label}</span>
                  </button>
                ))}
              </div>
              {/* Second Row - 2 buttons */}
              <div className="flex justify-center gap-2">
                {categories.slice(3, 5).map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 md:px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-colors duration-300 flex items-center gap-2 whitespace-nowrap ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                        : 'theme-bg-secondary theme-text-secondary hover:bg-orange-100 dark:hover:bg-orange-900/30 border theme-border'
                    }`}
                  >
                    <span>{category.icon}</span>
                    <span>{category.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Clients Grid - Fixed height container */}
            <div className="grid grid-cols-3 gap-3 md:gap-4" style={{ minHeight: '280px' }}>
              {filteredClients.map((client, index) => (
                <div
                  key={client.name}
                  className="group relative theme-bg-card rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border theme-border overflow-hidden"
                >
                  <div className="p-3 md:p-4 flex items-center justify-center h-20 md:h-24">
                    <img
                      src={client.src}
                      alt={client.name}
                      className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
              {/* Empty placeholders to maintain grid alignment */}
              {filteredClients.length > 0 && filteredClients.length < 9 && 
                Array.from({ length: Math.max(0, 9 - filteredClients.length) }).map((_, i) => (
                  <div key={`empty-${i}`} className="invisible h-20 md:h-24" />
                ))
              }
            </div>

            {/* No results message */}
            {filteredClients.length === 0 && (
              <div className="text-center py-8 theme-text-secondary">
                <p>No clients found in this category.</p>
              </div>
            )}
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Ourclients
