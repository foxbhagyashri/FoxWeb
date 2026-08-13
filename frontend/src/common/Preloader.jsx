import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LOGO from "../assets/home/Logo.png";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show splash screen on initial site load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white text-gray-900 select-none overflow-hidden"
        >
          {/* Subtle Ambient Glow Circles */}
          <div className="absolute w-[450px] h-[450px] bg-gradient-to-tr from-orange-100/60 via-indigo-50/50 to-slate-100/40 rounded-full blur-3xl animate-pulse pointer-events-none" />

          {/* Logo & Branding Animation Container */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-5 px-4">
            
            {/* Logo Container */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative p-5 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-orange-500/10 flex items-center justify-center"
            >
              <img
                src={LOGO}
                alt="Fox Aircomm Logo"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </motion.div>

            {/* Title & Tagline */}
            <motion.div
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-center space-y-1"
            >
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider text-gray-900">
                FOX <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">AIRCOMM</span>
              </h1>
              <p className="text-xs md:text-sm font-semibold text-gray-500 tracking-widest uppercase">
                Digital Growth Agency
              </p>
            </motion.div>

            {/* Rounded Circular Spinner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25 }}
              className="mt-2"
            >
              <div className="w-8 h-8 border-3 border-orange-200 border-t-orange-500 rounded-full animate-spin shadow-sm" />
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
