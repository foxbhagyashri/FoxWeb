import { MapPin, Phone, Mail, Clock, Search, Smartphone, BarChart2, PenLine, TrendingUp, Send, ArrowRight, Sparkles, MessageCircle,
  MessagesSquare,
  ShoppingCart,
  Globe,
  Megaphone,
  BarChart3 } from "lucide-react";

export default function AhmedabadSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">

      {/* Background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 text-white/80 text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            New Location
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
            Now Serving{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              Ahmedabad
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Fox Aircomm brings its full digital marketing expertise to Ahmedabad —
            the same trusted services powering Pune's top businesses, now available locally.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-14">
          <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25 hover:scale-105">
            Get a Free Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">

          {/* SEO */}
          <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 cursor-pointer overflow-hidden hover:border-white/20 hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-600 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-5 shadow-lg">
              <Search className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-white font-semibold text-base mb-2">SEO Optimization</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Rank higher on Google and drive consistent organic traffic to your website.</p>
            <a href="/ahmedabad/SEO-Company-in-Ahmedabad" className="mt-4 flex items-center gap-1 text-xs font-semibold text-violet-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
              Learn more <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Social Media */}
          <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 cursor-pointer overflow-hidden hover:border-white/20 hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-500 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mb-5 shadow-lg">
              <Smartphone className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-white font-semibold text-base mb-2">Social Media Marketing</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Build brand presence across Instagram, Facebook, and LinkedIn.</p>
            <a href="/ahmedabad/SocialMediaMarketingServiceAhemdabad" className="mt-4 flex items-center gap-1 text-xs font-semibold text-pink-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
              Learn more <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Paid Advertising */}
          <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 cursor-pointer overflow-hidden hover:border-white/20 hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-500 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center mb-5 shadow-lg">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-white font-semibold text-base mb-2">Paid Advertising</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Google Ads and Meta campaigns that convert clicks into loyal customers.</p>
            <a href="/services/paid-advertising" className="mt-4 flex items-center gap-1 text-xs font-semibold text-amber-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
              Learn more <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Email Marketing */}
          {/* <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 cursor-pointer overflow-hidden hover:border-white/20 hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-5 shadow-lg">
              <Send className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-white font-semibold text-base mb-2">Email Marketing</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Automated campaigns and newsletters that nurture and grow your audience.</p>
            <a href="/services/email-marketing" className="mt-4 flex items-center gap-1 text-xs font-semibold text-cyan-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
              Learn more <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div> */}

          {/* Content Marketing */}
          <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 cursor-pointer overflow-hidden hover:border-white/20 hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-5 shadow-lg">
              <PenLine className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-white font-semibold text-base mb-2">Graphic Design</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Graphic designing is not just about visuals; it’s about how your brand is understood, trusted, and remembered.
            </p>
            <a href="/ahmedabad/GraphicDesignServicesAhemdabad" className="mt-4 flex items-center gap-1 text-xs font-semibold text-emerald-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
              Learn more <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Analytics */}
          <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 cursor-pointer overflow-hidden hover:border-white/20 hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-5 shadow-lg">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-white font-semibold text-base mb-2"> PPC Analytics & Reporting</h3>
            <p className="text-slate-400 text-sm leading-relaxed">A PPC Company in Ahmedabad manages paid advertising campaigns across platforms like Google Ads to generate instant traffic, leads, and sales. PPC (Pay-Per-Click) is a model where you pay only when a user clicks on your ad.</p>
            <a href="/ahmedabad/PPC-Company-in-Ahmedabad" className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
              Learn more <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>


          <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 cursor-pointer overflow-hidden hover:border-white/20 hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-5 shadow-lg">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-white font-semibold text-base mb-2">Website Development</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Data-driven insights to track growth and optimise every campaign.</p>
            <a href="/ahmedabad/web-development-service" className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
              Learn more <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 cursor-pointer overflow-hidden hover:border-white/20 hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-5 shadow-lg">
              <Megaphone className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-white font-semibold text-base mb-2">RCS Business Messaging</h3>
            <p className="text-slate-400 text-sm leading-relaxed">  Transform how your Ahmedabad business communicates with customers using
              advanced RCS business messaging solutions.</p>
            <a href="/ahmedabad/RCS-Messaging-Services-in-Ahmedabad" className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
              Learn more <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>


          <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 cursor-pointer overflow-hidden hover:border-white/20 hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-5 shadow-lg">
             <ShoppingCart className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-white font-semibold text-base mb-2">E-Commerce Website Development</h3>
            <p className="text-slate-400 text-sm leading-relaxed"> Foxaircomm develops secure, high-performing e-Commerce platforms for startups, SMEs, and manufacturers in Ahmedabad.
            </p>
            <a href="/ahmedabad/E-Commerce-Website-Development-Ahmedabad" className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
              Learn more <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 cursor-pointer overflow-hidden hover:border-white/20 hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-5 shadow-lg">
             <MessagesSquare className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-white font-semibold text-base mb-2">Bulk SMS Service</h3>
            <p className="text-slate-400 text-sm leading-relaxed"> Bulk SMS service in Ahmedabad allows businesses to send text messages to thousands of recipients simultaneously through an online messaging platform.

            </p>
            <a href="/ahmedabad/Bulk-SMS-Service-in-Ahmedabad" className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
              Learn more <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 cursor-pointer overflow-hidden hover:border-white/20 hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-5 shadow-lg">
             <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-white font-semibold text-base mb-2">WhatsApp Marketing Services</h3>
            <p className="text-slate-400 text-sm leading-relaxed"> WhatsApp Marketing Services in Ahmedabad help businesses create a reliable communication flow that supports marketing, sales, and customer interaction.

            </p>
            <a href="/ahmedabad/WhatsApp-Marketing-Services-in-Ahmedabad" className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
              Learn more <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Contact Bar */}


      </div>
    </section>
  );
}