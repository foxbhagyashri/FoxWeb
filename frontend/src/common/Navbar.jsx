import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import LOGO from "../assets/home/Logo.png";
import Enquiry from "../components/Enquiry";
import {
  FiPhoneCall,
  FiChevronRight,
  FiTrendingUp,
  FiGlobe,
  FiShoppingCart,
  FiSmartphone,
  FiLayers,
  FiChevronDown,
} from "react-icons/fi";


// Services dropdown items with categories
const serviceCategories = [
  {
    title: "DIGITAL MARKETING",
    items: [
      { label: "Social Media Marketing", id: "social-media", path: "/services/social-media-marketing" },
      { label: "Search Engine Optimization", id: "seo", path: "/services/seo" },
      { label: "Google Adwords", id: "google-adwords", path: "/services/google-adwords" },
      { label: "PPC Management", id: "ppc-management", path: "/services/PPC-Management-Services-in-Pune" }
    ]
  },
  {
    title: "BULK MARKETING SERVICE",
    items: [
      { label: "Bulk SMS", id: "bulk-sms", path: "/services/bulk-sms" },
      { label: "RCS SMS", id: "rcs-sms", path: "/services/rcs-sms" },
      { label: "Meta WhatsApp", id: "meta-whatsapp", path: "/services/meta-whatsapp" },
      { label: "Voice Call", id: "voice-call", path: "/services/voice-call" }
    ]
  },
  {
    title: "SOFTWARE",
    items: [
      { label: "Website Design", id: "website-design", path: "/services/website-design" },
      { label: "Ecommerce Design", id: "ecommerce", path: "/services/ecommerce-design" },
      { label: "Custom Software Development", id: "custom-software", path: "/services/custom-software" },
      { label: "Data Extractor Software", id: "data-extractor", path: "/services/data-extractor" },
      { label: "WhatsApp Marketing Software", id: "whatsapp-software", path: "/services/whatsapp-software" }
    ]
  },
  {
    title: "DESIGNS",
    items: [
      { label: "Graphics Design", id: "graphics", path: "/services/graphics-design" },
      { label: "Brochure Design", id: "brochure", path: "/services/brochure-design" },
      { label: "Visiting Card Design", id: "visiting-card", path: "/services/visiting-card-design" },
      { label: "Logo Design", id: "logo", path: "/services/logo-design" },
      { label: "Video Editing", id: "video-editing", path: "/services/video-editing" }
    ]
  },
  {
    title: "CUSTOMER SOFTWARES",
    items: [
      { label: "CRM", id: "CRM", path: "/services/custom-crm-development" },
      { label: "Construction Management Software", id: "construction-management-software", path: "/services/construction-management-software" }
    ]
  }
];

function Navbar() {
  const [showBanner, setShowBanner] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  // ✅ Mobile States Added
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const navigate = useNavigate();

  // Framer Motion spring physics for butter-smooth scroll line animation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const savedMode =
      localStorage.getItem("darkMode") === null
        ? true
        : localStorage.getItem("darkMode") === "true";

    setIsDarkMode(savedMode);

    if (savedMode) {
      document.documentElement.classList.add("dark");
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top when navigating
  const handleNavClick = (to, e) => {
    e?.preventDefault();
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);

    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      navigate(to);
    }, 300);
  };

  const location = useLocation();
  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        className={`navbar sticky top-0 z-[9999] w-full bg-white dark:bg-gray-900 shadow-sm transition-all duration-300 ${
          isScrolled ? "backdrop-blur-md bg-white/95" : ""
        }`}
      >
        {/* Top Ultra-Smooth Scroll Progress Line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-500 via-red-500 to-amber-400 z-[10000] origin-left pointer-events-none shadow-sm"
          style={{ scaleX }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <NavLink to="/" onClick={(e) => handleNavClick("/", e)}>
                <img
                  src={LOGO}
                  alt="Fox Aircomm Logo"
                  className="h-10 md:h-14 w-auto object-contain"
                />
              </NavLink>
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services", hasDropdown: true },
                { to: "/clients", label: "Clients" },
                { to: "/career-form", label: "Career" },
                { to: "/blog", label: "Articles" },
                { to: "/contact", label: "Contact Us" }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="relative"
                  onMouseEnter={() =>
                    item.hasDropdown && setShowServicesDropdown(true)
                  }
                  onMouseLeave={() =>
                    item.hasDropdown && setShowServicesDropdown(false)
                  }
                >
                  {item.hasDropdown ? (
                    <>
                      <NavLink
                        to={item.to}
                        onClick={(e) => handleNavClick(item.to, e)}
                        className={`navbar-link flex items-center gap-1 text-base font-medium transition-all duration-200 ${
                          isServicesActive
                            ? "text-blue-600 font-semibold"
                            : "text-gray-700 hover:text-blue-600"
                        }`}
                      >
                        {item.label}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            showServicesDropdown ? "rotate-180 text-blue-600" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </NavLink>

                      {/* Services Mega Dropdown */}
                      <AnimatePresence>
                        {showServicesDropdown && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 ml-37 theme-bg-card rounded-xl shadow-2xl border theme-border overflow-hidden z-50"
                            style={{ width: "max-content", maxWidth: "90vw" }}
                          >
                            <div className="flex gap-0 p-4">
                              {serviceCategories.map((category, catIdx) => (
                                <motion.div
                                  key={category.title}
                                  className="px-4 border-r last:border-r-0 theme-border min-w-[160px]"
                                >
                                  <h4 className="text-xs font-bold uppercase tracking-wider text-orange-500 mb-3 whitespace-nowrap">
                                    {category.title}
                                  </h4>
                                  <ul className="space-y-1">
                                    {category.items.map((item) => (
                                      <li key={item.id}>
                                        <button
                                          onClick={(e) => {
                                            setShowServicesDropdown(false);
                                            handleNavClick(item.path, e);
                                          }}
                                          className="text-sm theme-text-secondary hover:text-orange-500 transition-colors duration-200 whitespace-nowrap text-left w-full py-1 cursor-pointer"
                                        >
                                          {item.label}
                                        </button>
                                      </li>
                                    ))}
                                  </ul>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <NavLink
                      to={item.to}
                      onClick={(e) => handleNavClick(item.to, e)}
                      className={({ isActive }) =>
                        `navbar-link text-base font-medium transition-all duration-200 ${
                          isActive
                            ? "text-blue-600 font-semibold"
                            : "text-gray-700 hover:text-blue-600"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                </motion.div>
              ))}
            </div>

            {/* ✅ Desktop Buttons (UNCHANGED) */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+918879864151"
                className="flex items-center gap-1 px-4 py-0.5"
              >
                <span className="w-6 h-6 flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md">
                  <FiPhoneCall className="text-sm" />
                </span>
                <span className="text-base font-bold hover:text-orange-400 transition-colors duration-200">
                  +91 8879864151
                </span>
              </a>

              <motion.div whileHover={{ scale: 1.05 }}>
                <button
                  onClick={() => setShowEnquiry(true)}
                  className="px-5 py-2 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg"
                >
                  Enquire Now
                </button>
              </motion.div>
            </div>

            {/* ✅ Mobile Hamburger Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg theme-text-primary"
              >
                {mobileMenuOpen ? "✖" : "☰"}
              </button>
            </div>
          </div>

          {/* ✅ Mobile Menu Dropdown */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="md:hidden absolute top-20 left-0 w-full
                 bg-white dark:bg-gray-900
                 rounded-b-2xl shadow-2xl
                 p-5 space-y-4 z-[9999]"
              >
                {/* ✅ Mobile Links */}
                <NavLink
                  to="/"
                  onClick={(e) => handleNavClick("/", e)}
                  className="block px-4 py-3 rounded-xl font-medium
                   theme-text-secondary hover:bg-orange-50 hover:text-orange-600 transition"
                >
                  Home
                </NavLink>

                <NavLink
                  to="/about"
                  onClick={(e) => handleNavClick("/about", e)}
                  className="block px-4 py-3 rounded-xl font-medium
                   theme-text-secondary hover:bg-orange-50 hover:text-orange-600 transition"
                >
                  About Us
                </NavLink>

                {/* ✅ Services Toggle Button */}
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex justify-between items-center px-4 py-3 rounded-xl
             font-semibold theme-text-secondary
             hover:bg-orange-50 hover:text-orange-600 transition"
                >
                  Services

                  {/* ✅ React Icon Dropdown Arrow */}
                  <motion.span
                    animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-xl"
                  >
                    <FiChevronDown />
                  </motion.span>
                </button>


                {/* ✅ Services Dropdown List */}
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-4 pl-3 border-l border-orange-200"
                    >
                      <div
                        className="mt-2 space-y-2 max-h-60 overflow-y-auto pr-2
                         scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-transparent"
                      >
                        {serviceCategories.map((cat) =>
                          cat.items.map((s) => (
                            <button
                              key={s.id}
                              onClick={(e) => handleNavClick(s.path, e)}
                              className="flex items-center gap-3 w-full text-left px-3 py-2 rounded-xl
                               text-sm font-medium theme-text-secondary
                               hover:bg-orange-50 hover:text-orange-600
                               transition-all group"
                            >
                              {/* ✅ Icon */}
                              <span className="w-8 h-8 flex items-center justify-center rounded-lg
                                     bg-gradient-to-r from-orange-500 to-red-500
                                     text-white shadow-md">
                                {s.id.includes("seo") ? (
                                  <FiTrendingUp />
                                ) : s.id.includes("website") ? (
                                  <FiGlobe />
                                ) : s.id.includes("ecommerce") ? (
                                  <FiShoppingCart />
                                ) : s.id.includes("whatsapp") ? (
                                  <FiSmartphone />
                                ) : (
                                  <FiLayers />
                                )}
                              </span>

                              {/* Service Name */}
                              <span className="flex-1">{s.label}</span>

                              {/* Arrow */}
                              <FiChevronRight className="opacity-0 group-hover:opacity-100 transition" />
                            </button>
                          ))
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ✅ Contact Link */}
                <NavLink
                  to="/contact"
                  onClick={(e) => handleNavClick("/contact", e)}
                  className="block px-4 py-3 rounded-xl font-medium
                   theme-text-secondary hover:bg-orange-50 hover:text-orange-600 transition"
                >
                  Contact Us
                </NavLink>

                {/* ✅ Bottom Section */}
                <div className="border-t pt-4 space-y-3">
                  {/* Phone */}
                  <a
                    href="tel:+918879864151"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl
                     bg-orange-50 border border-orange-200
                     hover:bg-orange-100 transition"
                  >
                    <span className="w-10 h-10 flex items-center justify-center rounded-xl
                           bg-gradient-to-r from-orange-500 to-red-500
                           text-white shadow-md">
                      <FiPhoneCall className="text-lg" />
                    </span>

                    <span className="font-semibold text-gray-800 dark:text-white">
                      +91 8879864151
                    </span>
                  </a>

                  {/* Enquire Button */}
                  <button
                    onClick={() => setShowEnquiry(true)}
                    className="w-full py-3 rounded-xl font-bold text-white text-lg
                     bg-gradient-to-r from-orange-500 to-red-500
                     shadow-lg shadow-orange-500/30
                     hover:scale-[1.02] active:scale-[0.98]
                     transition-all"
                  >
                    Enquire Now
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>


        </div>
      </motion.nav>

      {/* Enquiry Popup */}
      <Enquiry isOpen={showEnquiry} onClose={() => setShowEnquiry(false)} />
    </>
  );
}

export default Navbar;
