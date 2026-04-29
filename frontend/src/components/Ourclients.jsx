import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import client1 from "../assets/clients/ISMR-logo.png"
import client2 from "../assets/clients/dvcoe-pune-logo-v4.webp"
import client3 from "../assets/clients/smlogo.png"
import client4 from "../assets/clients/logo-spcop.png"
import client5 from "../assets/clients/client1.png"
import client6 from "../assets/clients/client2.png"
import client7 from "../assets/clients/prestige.jpeg"
import client8 from "../assets/clients/Metro-Pune.png"
import client9 from "../assets/clients/31635165110.png"
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
  { src: client2, name: "Client 2", category: "education" },
  { src: client3, name: "Client 3", category: "education" },
  { src: client4, name: "Client 4", category: "education" },
  { src: client5, name: "Client 5", category: "education" },
  { src: client6, name: "Client 6", category: "it" },
  { src: client7, name: "Client 7", category: "it" },
  { src: client8, name: "Client 8", category: "it" },
  { src: client9, name: "Client 9", category: "finance" }
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
    <section className="py-20 bg-gradient-to-b from-white to-[#f9fafc]">

      <div className="container mx-auto px-4 space-y-16">

        {/* 🔥 STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          {[
            { number: "500+", label: "Happy Clients" },
            { number: "10+", label: "Years Experience" },
            { number: "95%", label: "Retention Rate" },
            { number: "1200+", label: "Projects Done" }
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition border border-gray-100"
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                {item.number}
              </h2>
              <p className="text-gray-500 text-sm mt-1">{item.label}</p>
            </div>
          ))}

        </div>

        {/* 🔥 HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-3xl font-bold mb-4">
            Trusted by <span className="text-orange-500">Leading Brands</span>
          </h2>
          <p className="text-gray-500 text-lg">
            We help businesses grow faster with performance-driven digital marketing strategies.
          </p>
        </div>

        {/* 🔥 FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3">

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${activeCategory === cat.id
                ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg"
                : "bg-white border border-gray-200 hover:bg-orange-50"
                }`}
            >
              {cat.icon} {cat.label}
            </button>
          ))}

        </div>

        {/* 🔥 CLIENT GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">

          {filteredClients.map((client, i) => (
            <div
              key={i}
              className="group bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition duration-300 flex items-center justify-center"
            >
              <img
                src={client.src}
                alt={client.name}
                className="max-h-30 object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-300"
              />
            </div>
          ))}

        </div>



        {/* 🔥 CTA */}
        <div className="text-center pt-10">
          <button className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition">
            Grow Your Business With Us 🚀
          </button>
        </div>

      </div>
    </section>
  )
}

export default Ourclients
