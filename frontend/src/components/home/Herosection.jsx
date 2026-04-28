import React from 'react'
import {
  Megaphone,
  Mail,
  Instagram,
  Facebook,
  Users,
  Share2,
  BarChart3,
  Youtube,
} from "lucide-react";

import { motion } from "framer-motion";

const Herosection = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-14 items-center page-container py-5">

      {/* Left Section */}
      <div className="space-y-8">
        {/* Heading */}
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-gray-900">
            Many Business Challenges
            <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              One Powerful Solution
            </span>
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-indigo-600">
            Fox Aircomm
          </h2>
        </div>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
          Fox AirComm Pvt. Ltd is a full-stack digital growth agency helping
          brands scale through data-driven marketing, design, and technology.
        </p>

        {/* CTA */}
        <div className="flex gap-4 pt-3">
          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3 rounded-xl font-semibold text-white
                         bg-gradient-to-r from-orange-500 to-red-500
                         hover:scale-[1.03] transition-all shadow-lg shadow-orange-500/30"
          >
            Enquire Now
          </button>
        </div>
      </div>

      {/* Right Section - Orbital Animation */}
      <div className="md:flex items-center justify-center animate-fade-in pb-1 hidden md:block">
        <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
          {/* Orbital Rings */}
          <div className="absolute inset-8 border border-purple-400/2 dark:border-purple-500/30 rounded-full"></div>
          <div className="absolute inset-16 border border-purple-400/20 dark:border-purple-500/25 rounded-full"></div>
          <div className="absolute inset-28 border border-purple-400/15 dark:border-purple-500/20 rounded-full"></div>

          {/* Center Text */}
          <div className="relative z-10 text-center">
            <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              20+
            </h3>
            <p className="text-lg theme-text-primary font-semibold  pr-5 ">
              Services
            </p>
          </div>

          {/* Rotating Container for Avatars */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Icon 1 - Digital Marketing */}
            {/* Icon 1 - Social Media Ads */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-xl shadow-purple-500/50">
              <motion.div
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Megaphone className="w-6 h-6 text-purple-600" />
              </motion.div>
            </div>

            {/* Icon 2 - Email Marketing */}
            <div className="absolute top-[15%] right-[15%] w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center shadow-xl shadow-blue-500/50">
              <motion.div
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Mail className="w-6 h-6 text-blue-600" />
              </motion.div>
            </div>

            {/* Icon 3 - Instagram Marketing */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-xl shadow-pink-500/50">
              <motion.div
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Instagram className="w-6 h-6 text-purple-600" />
              </motion.div>
            </div>

            {/* Icon 4 - Facebook Campaigns */}
            <div className="absolute bottom-[15%] right-[15%] w-14 h-14 rounded-full bg-gradient-to-br from-indigo-400 to-blue-600 flex items-center justify-center shadow-xl shadow-indigo-500/50">
              <motion.div
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Facebook className="w-6 h-6 text-indigo-600" />
              </motion.div>
            </div>

            {/* Icon 5 - Influencer Marketing */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-pink-600 flex items-center justify-center shadow-xl shadow-orange-500/50">
              <motion.div
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Users className="w-6 h-6 text-orange-600" />
              </motion.div>
            </div>

            {/* Icon 6 - Social Sharing */}
            <div className="absolute bottom-[15%] left-[15%] w-14 h-14 rounded-full bg-gradient-to-br from-teal-400 to-green-600 flex items-center justify-center shadow-xl shadow-teal-500/50">
              <motion.div
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Share2 className="w-6 h-6 text-teal-600" />
              </motion.div>
            </div>

            {/* Icon 7 - Growth & Analytics */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-orange-600 flex items-center justify-center shadow-xl shadow-yellow-500/50">
              <motion.div
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <BarChart3 className="w-6 h-6 text-yellow-600" />
              </motion.div>
            </div>

            {/* Icon 8 - Video Marketing (Reels/YouTube) */}
            <div className="absolute top-[15%] left-[15%] w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-xl shadow-green-500/50">
              <motion.div
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Youtube className="w-6 h-6 text-green-600" />
              </motion.div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Herosection
