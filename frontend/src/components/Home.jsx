import React from "react";
import {
  Play,
  Megaphone,
  Smartphone,
  Palette,
  Users,
  TrendingUp,
  Mail,
  Code,
  Share2,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import landingImg from "../assets/service/landingimg.png";
import mobileImg from "../assets/home/mobile.png";
import branchImg from "../assets/home/branch.png";

// Import Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Herosection from "./home/Herosection";

function Home() {
  const navigate = useNavigate();

  // Ensure page starts at top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Testimonial data
  const testimonialData = [
    { 
      id: 1, 
      name: "Ganesh Sasane", 
      title: "Head of Sasane Education Society",
      rating: 5.0, 
      quote: "I am using SEO and Social Media Marketing services for my Sasane New English School, and the results have been outstanding. Fox Aircomm Pvt Ltd is truly the best digital marketing agency in Pune. Their expertise in optimizing online visibility and engaging with the right audience has helped our school gain more recognition.",
      truncatedQuote: "I am using SEO and Social Media Marketing services for my Sasane New English School, and the results have been outstanding...",
      icon: "fas fa-user",
      iconColor: "text-blue-600"
    },
    { 
      id: 2, 
      name: "Shyamsunder Jilla", 
      title: "Head Of Arealpro Estate",
      rating: 5.0, 
      quote: "Perfect, Good understanding of Clients need.", 
      truncatedQuote: "Perfect, Good understanding of Clients need.",
      icon: "fas fa-user",
      iconColor: "text-green-600"
    },
    { 
      id: 3, 
      name: "Shree kalyan Jewellers", 
      title: "Owner",
      rating: 5.0, 
      quote: "I am Using Last 1 Year Whatsapp Software.BEST SUPPORT BHAVESHBHAI", 
      truncatedQuote: "I am Using Last 1 Year Whatsapp Software.BEST SUPPORT BHAVESHBHAI",
      icon: "fas fa-user",
      iconColor: "text-purple-600"
    },
    { 
      id: 4, 
      name: "Pandit R Kirhan", 
      title: "Numerologist",
      rating: 5.0, 
      quote: "I am professional Numerologist, i have connected to fix aircomm pvt. Ltd for my social media shedule last 6 months, for Post ing add shedule give me large response for my webinar. I am very thankful for such co-operation, all team members are very punctuate and friendly.",
      truncatedQuote: "I am professional Numerologist, i have connected to fix aircomm pvt. Ltd for my social media shedule last 6 months...",
      icon: "fas fa-user",
      iconColor: "text-orange-600"
    },
    { 
      id: 5, 
      name: "Bhushan Lad", 
      title: "Resha Interior",
      rating: 5.0, 
      quote: "Fox Aircomm Private Limited is truly an outstanding social media agency! Their expertise in digital marketing and strategic ad campaigns has significantly boosted our business visibility and customer engagement. From creative content to precise targeting, their team ensures maximum ROI. Their dedication, professionalism, and data-driven approach make them one of the best in the industry. Highly recommended for anyone looking to scale their business through social media marketing!",
      truncatedQuote: "Fox Aircomm Private Limited is truly an outstanding social media agency! Their expertise in digital marketing and strategic ad campaigns...",
      icon: "fas fa-user",
      iconColor: "text-red-600"
    }
  ];

  // Testimonial Card Component
  const TestimonialCard = ({ testimonial, isActive = false }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);
    
    const renderStars = () => {
      return Array.from({ length: 5 }).map((_, i) => (
        <i
          key={i}
          className={
            i < Math.round(testimonial.rating)
              ? "ri-star-fill text-orange-500"
              : "ri-star-line text-orange-500"
          }
        />
      ));
    };

    const needsReadMore = testimonial.quote.length > 100;
    const displayQuote = isExpanded ? testimonial.quote : testimonial.truncatedQuote;

    return (
      <article
        className={`w-full h-[420px] bg-white shadow-xl rounded-2xl text-center flex flex-col items-center justify-between transition-all duration-300 group ${isActive
          ? 'scale-100 opacity-100 shadow-2xl border-2 border-indigo-100 bg-gradient-to-br from-blue-50 to-purple-50 p-6 pb-10 md:p-8 md:pb-12'
          : 'scale-90 opacity-70 shadow-lg border border-gray-100 bg-gradient-to-br from-gray-50 to-gray-100 p-5 pb-10 md:p-6 md:pb-12 hover:bg-gradient-to-br hover:from-orange-50 hover:to-red-50'
          }`}
      >
        <div className='flex flex-col items-center h-full justify-between'>
          <div className="flex flex-col items-center">
            <div className={`rounded-full mb-4 transition-all duration-300 ${isActive ? 'w-28 h-28 border-4' : 'w-24 h-24 border-2'
              } border-gray-100 bg-gradient-to-br ${isActive ? 'from-blue-100 to-purple-100' : 'from-gray-100 to-gray-200 hover:from-orange-100 hover:to-red-100'} flex items-center justify-center`}>
              <i
                className={`${testimonial.icon} ${isActive ? 'text-indigo-700' : `${testimonial.iconColor} group-hover:text-orange-600`} ${isActive ? 'text-4xl' : 'text-3xl'} transition-all duration-300`}
              ></i>
            </div>

            <h3 className={`font-semibold mb-2 transition-all duration-300 ${isActive ? 'text-2xl text-gray-900' : 'text-xl text-gray-700'
              }`}>
              {testimonial.name}
            </h3>

            <p className={`text-sm mb-4 transition-all duration-300 ${isActive ? 'text-gray-600' : 'text-gray-500'
              }`}>
              {testimonial.title}
            </p>

            <div className="flex justify-center items-center space-x-2 mb-4">
              <div className="flex space-x-0.5">
                {renderStars()}
              </div>
              <h3 className={`font-semibold ${isActive ? 'text-lg text-gray-900' : 'text-md text-gray-700'
                }`}>
                {testimonial.rating.toFixed(1)}
              </h3>
            </div>
          </div>

          <div className="flex flex-col items-center flex-1 justify-center">
            <div className={`leading-relaxed max-w-xs max-h-32 overflow-y-auto transition-all duration-300 ${isActive ? 'text-gray-700 text-sm md:text-base' : 'text-gray-500 text-sm'
              } scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-200`}>
              {displayQuote}
            </div>
            
            {needsReadMore && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`mt-3 text-orange-500 hover:text-orange-600 font-medium text-sm transition-colors duration-200 ${isActive ? 'opacity-100' : 'opacity-70'}`}
              >
                {isExpanded ? 'Read Less' : 'Read More'}
              </button>
            )}
          </div>
        </div>
      </article>
    );
  };

  const [activeIndex, setActiveIndex] = React.useState(1);
  const paginationClass = 'swiper-pagination-custom';
  const prevButtonClass = 'swiper-button-prev-custom';
  const nextButtonClass = 'swiper-button-next-custom';

  return (
    <div className="w-full mx-auto">
      <div className="bg-gray-50">
     <Herosection />

      </div>
      {/* Who We Are Section */}
      <div className="page-container py-6">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            Who We Are and Why
          </h2>
          <h3 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            Businesses Trust Us?
          </h3>
        </div>

        {/* Trust Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Card 1 - Local */}
          <div className="theme-card p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
            <div className="mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold theme-text-primary mb-3">
                We're local, just like you
              </h4>
            </div>
            <p className="theme-text-secondary leading-relaxed">
              We're not any random big-city agency that doesn't understand Pune
              and PCMC. We know what works for your local customers.
            </p>
          </div>

          {/* Card 2 - Honest */}
          <div className="theme-card p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
            <div className="mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold theme-text-primary mb-3">
                We're honest about results
              </h4>
            </div>
            <p className="theme-text-secondary leading-relaxed">
              We don't hide anything behind confusing charts or fancy terms. We
              show you the real numbers, which state our work is making a
              difference.
            </p>
          </div>

          {/* Card 3 - Proven Track Record */}
          <div className="theme-card p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
            <div className="mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4">
                <Megaphone className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold theme-text-primary mb-3">
                We have a proven track record
              </h4>
            </div>
            <p className="theme-text-secondary leading-relaxed">
              We've served more than 15 industries—from hospitals to retail
              stores—and succeeded online.
            </p>
          </div>
        </div>
      </div>
      {/* Experience & Social Media Stats Section */}
      <div className="page-container py-16 lg:py-10">
        <div className="grid lg:grid-cols-2 gap-50 items-center">
          {/* Left Side - Mobile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              {/* Decorative Background Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/15 to-orange-500/10 rounded-3xl blur-3xl"></div>

              {/* Mobile Image */}
              <div className="relative z-10">
                <motion.img
                  src={mobileImg}
                  alt="Social Media Marketing"
                  className="w-full max-w-md mx-auto"
                  whileHover={{
                    rotateY: 18,
                    rotateX: -8,
                    scale: 1.04,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ perspective: 1200 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Stats & Info */}
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title mb-1">
                All the Experience in the
              </h2>
              <h3 className="text-[clamp(1.875rem,3vw,3rem)] font-bold  bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent ">
                Social Media
              </h3>

            </motion.div>
            <div className="grid grid-cols-2 gap-6">{/* Stats Cards */}</div>

            {/* Additional Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="
                theme-primary-text
                text-[1.05rem]
                leading-relaxed
                max-w-xl
                mx-auto
                [text-wrap:balance]"
            >
              We bring years of expertise in social media marketing, helping
              <br />businesses grow their online presence and engage with their <br />
              audience effectively.
            </motion.p>
          </div>
        </div>
      </div>
      {/* Value Card Section */}
      <div className="page-container pt-20 pb-16">
        <div
          className="rounded-3xl w-full max-w-7xl mx-auto bg-gradient-to-r from-white via-orange-50 to-yellow-50 flex flex-col md:flex-row items-center justify-between py-8 px-6 md:px-12 shadow-lg  border border-orange-100/50"
          // style={{
          //   background:
          //     "linear-gradient(90deg, #fff 0%, #fff7ed 50%, #fefce8 100%)",
          // }}
        >
          <div className="flex-1 text-center mb-8 md:mb-0">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
              10+
            </div>
            <div className="uppercase tracking-widest text-xs md:text-sm text-gray-500 font-semibold">
              Years Experience
            </div>
          </div>
          <div className="flex-1 text-center mb-8 md:mb-0">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
              500+
            </div>
            <div className="uppercase tracking-widest text-xs md:text-sm text-gray-500 font-semibold">
              Total Clients
            </div>
          </div>
          <div className="flex-1 text-center mb-8 md:mb-0">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
              5
            </div>
            <div className="uppercase tracking-widest text-xs md:text-sm text-gray-500 font-semibold">
              Average Review
            </div>
          </div>
          <div className="flex-1 text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
              50+
            </div>
            <div className="uppercase tracking-widest text-xs md:text-sm text-gray-500 font-semibold">
              Professional Team
            </div>
          </div>
        </div>
      </div>
      {/* applying  */}
      <section className="py-5 bg-gray-50">
        {/* Section Heading */}
        <div className="page-container">
          <div className="text-center mb-12">
            <h2 className="section-title text-center mb-12">
              Working With{" "}
              <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent">
                Fox Aircomm
              </span>
            </h2>
          </div>

          {/* Main Content */}
          <div className="w-full grid md:grid-cols-2 gap-12 items-start justify-center max-w-7xl mx-auto">

            {/* LEFT CARD – PROCESS */}
            <div className="theme-card p-10 rounded-2xl w-full w-[50%] h-full min-h-[520px] space-y-6 pt-12">

              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="w-14 h-12 rounded-full flex items-center justify-center font-bold text-xl"
                  style={{ backgroundColor: "var(--bg-hover)", color: "var(--brand-primary)" }}>
                  1
                </div>
                <div>
                  <h4 className="text-2xl font-medium  theme-text-primary">
                    Learn
                  </h4>
                  <p className="text-lg theme-text-secondary leading-relaxed">
                    Understand your business goals, audience, competitors, and market.
                  </p>
                </div>
              </div>

              <div className="border-t theme-border"></div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="w-14 h-12 rounded-full flex items-center justify-center font-bold text-xl"
                  style={{ backgroundColor: "var(--bg-hover)", color: "var(--accent-yellow)" }}>
                  2
                </div>
                <div>
                  <h4 className="text-2xl font-medium  theme-text-primary">
                    Apply
                  </h4>
                  <p className="text-lg theme-text-secondary leading-relaxed">
                    Create and execute result-driven digital marketing strategies.
                  </p>
                </div>
              </div>

              <div className="border-t theme-border"></div>

              {/* Step 3 */}
              <div className="flex gap-6">
                <div className="w-14 h-12 rounded-full flex items-center justify-center font-bold text-xl"
                  style={{ backgroundColor: "var(--bg-hover)", color: "var(--accent-green)" }}>
                  3
                </div>
                <div>
                  <h4 className="text-2xl font-medium theme-text-primary">
                    Grow
                  </h4>
                  <p className="text-lg theme-text-secondary leading-relaxed">
                    Track performance, optimise campaigns, and scale your business.
                  </p>
                </div>
              </div>

            </div>

            {/* RIGHT CARD – CONTACT FORM */}
            <div className="theme-card p-8 rounded-2xl w-full w-[50%] h-full min-h-[500px]">
              {/* Form Fields */}
              <div className="space-y-4 h-full flex flex-col justify-between">
                {/* Full Name Field */}
                <div>
                  <label className="block text-sm font-medium theme-text-primary mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name..."
                    className="w-full px-4 py-3 rounded-lg text-sm theme-input"
                  />
                </div>

                {/* Email Address Field */}
                <div>
                  <label className="block text-sm font-medium theme-text-primary mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address..."
                    className="w-full px-4 py-3 rounded-lg text-sm theme-input"
                  />
                </div>

                {/* Phone Number Field */}
                <div>
                  <label className="block text-sm font-medium theme-text-primary mb-2">
                    Phone Number
                  </label>
                  <div className="flex gap-2">
                    <div className="flex items-center px-3 py-3  theme-text-secondary  ">
                      <span className="text-sm ">IND +91</span>
                    </div>
                    <input
                      type="tel"
                      placeholder="Enter Your mobile number"
                      className="flex-1 px-4 py-3 rounded-lg text-sm theme-input"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="flex-1">
                  <label className="block text-sm font-medium theme-text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Enter your main text here..."
                    rows="3"
                    className="w-full px-4 py-3 rounded-lg text-sm theme-input resize-none h-20"
                  />
                </div>

                {/* Enquire Now Button */}
                <div className="pt-4">
                  <button
                  
className="px-8 py-3 w-full rounded-xl font-semibold text-white
                         bg-gradient-to-r from-orange-500 to-red-500
                         hover:scale-[1.03] transition-all shadow-lg shadow-orange-500/30"                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>


      {/* Parallax Effect / Comparison Section */}
      <section className="w-full  theme-bg-primary py-5 px-2 md:px-0 bg-gray-50">
        <div className="page-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Left: Features List */}
            <div className="flex-1">
              <h2 className="text-4xl  font-bold mb-4 py-2">
                FoxAircomm Advantages: 
                Your Competitive Edge
              </h2> 

              <p className="subtitle mb-8">
                Explore the unique benefits that set FoxAircomm apart, giving you
                the competitive edge in your digital journey.
              </p>

              <ul className="space-y-4 text-lg theme-text-primary">
                <li className="flex items-center gap-2">
                  <span className="font-medium">
                    Structured + result-driven approach
                  </span>
                  <span className="text-[color:var(--accent-green)] text-xl">
                    ✔
                  </span>
                </li>

                <li className="flex items-center gap-2">
                  <span className="font-medium">Fastest 1:1 client support</span>
                  <span className="text-[color:var(--accent-green)] text-xl">
                    ✔
                  </span>
                </li>

                <li className="flex items-center gap-2">
                  <span className="font-medium">
                    Integrated marketing platform
                  </span>
                  <span className="text-[color:var(--accent-green)] text-xl">
                    ✔
                  </span>
                </li>

                <li className="flex items-center gap-2">
                  <span className="font-medium">
                    Brand profile highlighted on top portals
                  </span>
                  <span className="text-[color:var(--accent-green)] text-xl">
                    ✔
                  </span>
                </li>
              </ul>
            </div>

            {/* Right: Modern Chart with Axes */}
        <div className="flex-1 flex items-center justify-center w-full  ">
  <div className="relative w-full  bg-white rounded-2xl shadow-lg border border-gray-100 px-6 pt-5 pb-6">

    {/* Title */}
    <div >
      <h4 className="text-base font-semibold text-gray-800">
        Client Growth Performance
      </h4>
      <p className="text-sm text-gray-500 mt-1">
        Growth percentage compared with industry average (max 90%)
      </p>
    </div>

    {/* Chart */}
    <div className="relative h-full">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 440 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Grid */}
        <line x1="60" y1="220" x2="400" y2="220" stroke="#e5e7eb" strokeWidth="2" />
        <line x1="60" y1="160" x2="400" y2="160" stroke="#e5e7eb" />
        <line x1="60" y1="100" x2="400" y2="100" stroke="#e5e7eb" />
        <line x1="60" y1="40" x2="400" y2="40" stroke="#e5e7eb" />
        <line x1="60" y1="40" x2="60" y2="220" stroke="#e5e7eb" strokeWidth="2" />

        {/* Y-axis labels */}
        <text x="20" y="225" fontSize="12" fill="#6b7280">0%</text>
        <text x="20" y="165" fontSize="12" fill="#6b7280">30%</text>
        <text x="20" y="105" fontSize="12" fill="#6b7280">60%</text>
        <text x="20" y="45" fontSize="12" fill="#6b7280">90%</text>

        {/* X-axis labels */}
        <text x="60" y="245" fontSize="12" fill="#6b7280">2019</text>
        <text x="160" y="245" fontSize="12" fill="#6b7280">2021</text>
        <text x="260" y="245" fontSize="12" fill="#6b7280">2023</text>
        <text x="360" y="245" fontSize="12" fill="#6b7280">2025</text>

        {/* Industry Average */}
        <polyline
          points="60,200 160,185 260,175 360,170 400,165"
          fill="none"
          stroke="#9ca3af"
          strokeWidth="3"
          strokeDasharray="6 6"
        />

        {/* Fox Aircomm Clients */}
        <polyline
          points="60,200 160,160 260,120 360,85 400,60"
          fill="none"
          stroke="#6366f1"
          strokeWidth="4"
        />

        {/* Fox Label */}
        <g>
          <circle cx="400" cy="60" r="14" fill="url(#foxGradient)" />
          <text
            x="400"
            y="65"
            textAnchor="middle"
            fontSize="14"
            fontWeight="bold"
            fill="#fff"
          >
            F
          </text>
          <text
            x="310"
            y="40"
            fontSize="13"
            fill="#111827"
            fontWeight="600"
          >
            Fox Aircomm Clients
          </text>
        </g>

        {/* Industry Label */}
        <text x="300" y="190" fontSize="13" fill="#6b7280">
          Industry Average
        </text>

        {/* Gradient */}
        <defs>
          <linearGradient id="foxGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    {/* Valid Message */}
    {/* <div className="mt-4 pt-4 border-t border-gray-100">
      <p className="text-sm text-gray-600 leading-relaxed">
        📈 <span className="font-medium text-gray-800">Realistic & measurable growth:</span>{" "}
        Our clients achieve up to <strong>90% business growth</strong> over time,
        consistently outperforming the industry average without unrealistic claims.
      </p>
    </div> */}
  </div>
</div>


          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="min-h-screen flex flex-col justify-center items-center py-10 theme-bg-primary overflow-hidden relative">
          {/* Title */}
        <h2 className="section-title mb-16">
            What  <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent">Customers</span> Say
          </h2>

          {/* Swiper Container */}
        <div className="w-full max-w-6xl relative pb-32 px-4 md:px-6">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              loop={true}
              slidesPerView={3}
              centeredSlides={true}
              spaceBetween={20}
              grabCursor={true}
              speed={600}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.realIndex);
              }}
              pagination={{
                el: `.${paginationClass}`,
                clickable: true,
                bulletClass: 'pagination-bullet w-3 h-3 rounded-full transition-all duration-300 theme-bg-primary',
                bulletActiveClass: 'pagination-bullet-active',
                horizontalClass: 'mt-12',
              }}
              navigation={{
                nextEl: `.${nextButtonClass}`,
                prevEl: `.${prevButtonClass}`,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                  centeredSlides: false,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                  centeredSlides: true,
                }
              }}
              className="w-full h-[420px]"
            >
              {testimonialData.map((testimonial, index) => {
                // Calculate which slide is actually active (centered)
                const isActive = index === activeIndex;

                return (
                  <SwiperSlide
                    key={testimonial.id}
                    className="!flex !items-center !justify-center !h-auto"
                  >
                    <div className="w-full px-2">
                      <TestimonialCard
                        testimonial={testimonial}
                        isActive={isActive}
                      />
                    </div>
                  </SwiperSlide>
                );
              })}

            </Swiper>

            {/* Unified Navigation and Pagination Container */}
            <div className="flex justify-center items-center space-x-6 absolute bottom-0 left-0 right-0 z-10 w-full theme-bg-primary">

              {/* Previous Button */}
              <div className={`${prevButtonClass} w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center transition-all hover:bg-indigo-700 hover:scale-110 cursor-pointer shadow-lg active:scale-95`}>
                <i className="ri-arrow-left-s-line text-2xl"></i>
              </div>

              {/* Pagination Dots */}
              <div className={`${paginationClass} flex space-x-4 text-center justify-center theme-primary`}></div>

              {/* Next Button */}
              <div className={`${nextButtonClass} w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center transition-all hover:bg-indigo-700 hover:scale-110 cursor-pointer shadow-lg active:scale-95`}>
                <i className="ri-arrow-right-s-line text-2xl"></i>
              </div>
            </div>

        </div>

        {/* Decorative elements */}
        <div className="absolute left-0 top-1/4 w-64 h-64 bg-gradient-to-r from-indigo-500/30 to-purple-500/30   rounded-full blur-3xl opacity-60 -z-10"></div>
        <div className="absolute right-0bottom-1/4 w-64 h-64 bg-gradient-to-l from-orange-500/30 to-pink-500/30   rounded-full blur-3xl opacity-60 -z-10"></div>

      </section>
    </div>
  );
}

export default Home;