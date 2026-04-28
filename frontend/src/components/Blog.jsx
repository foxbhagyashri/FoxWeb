import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaUser, FaArrowRight, FaClock, FaTag } from 'react-icons/fa';

// --- Article Data ---
const articleData = [
  {
    id: 1,
    title: "What are the benefits of digital marketing For Small Businesses?",
    excerpt: "Running a business, whether it's a coaching center, a dental clinic, or a new restaurant, means you're constantly competing to survive in the market.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Dilip Patil",
    date: "Jan 15, 2026",
    readTime: "5 min read",
    category: "Marketing"
  },
  {
    id: 2,
    title: "How to Boost Your SEO Rankings Effectively",
    excerpt: "Learn proven strategies to improve your website's search engine visibility and drive organic traffic.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Sarvesh Shinde",
    date: "Jan 12, 2026",
    readTime: "7 min read",
    category: "SEO"
  },
  {
    id: 3,
    title: "Social Media Marketing: A Complete Guide",
    excerpt: "Master the art of social media marketing with our comprehensive guide covering all major platforms.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Firoz Shaik",
    date: "Jan 10, 2026",
    readTime: "8 min read",
    category: "Social Media"
  },
  {
    id: 4,
    title: "Building a Strong Brand Identity Online",
    excerpt: "Discover how to create a memorable brand presence that resonates with your target audience.",
    image: "https://images.unsplash.com/photo-1559028012-c81e9899cab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Dilip Patil",
    date: "Jan 8, 2026",
    readTime: "6 min read",
    category: "Branding"
  },
  {
    id: 5,
    title: "Content Marketing Strategies That Work",
    excerpt: "Create compelling content that engages your audience and drives meaningful conversions.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Sarvesh Shinde",
    date: "Jan 5, 2026",
    readTime: "6 min read",
    category: "Content"
  },
  {
    id: 6,
    title: "PPC Advertising: Maximize Your ROI",
    excerpt: "Learn how to optimize your pay-per-click campaigns for maximum return on investment.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Firoz Shaik",
    date: "Jan 3, 2026",
    readTime: "5 min read",
    category: "Advertising"
  },
  {
    id: 7,
    title: "Web Development Best Practices for 2026",
    excerpt: "Stay updated with the latest web development trends and technologies for modern websites.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Anil Patharde",
    date: "Dec 28, 2025",
    readTime: "9 min read",
    category: "Development"
  },
  {
    id: 8,
    title: "Email Marketing: Tips for Higher Open Rates",
    excerpt: "Boost your email marketing performance with these proven strategies for better engagement.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Priyanka Bagul",
    date: "Dec 25, 2025",
    readTime: "4 min read",
    category: "Email"
  },
  {
    id: 9,
    title: "Mobile App Marketing: Reach More Users",
    excerpt: "Discover effective strategies to promote your mobile app and increase downloads and user engagement.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Sarvesh Shinde",
    date: "Dec 22, 2025",
    readTime: "6 min read",
    category: "Mobile"
  },
];

// --- Article Card Component ---
const ArticleCard = ({ article, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -8 }}
      className="group transition-all duration-500 transform h-full"
    >
      <div className="relative theme-bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden theme-border border h-full flex flex-col">

        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
              <FaTag className="text-[10px]" />
              {article.category}
            </span>
          </div>

          {/* Read Time Badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 theme-text-primary text-xs font-medium rounded-full flex items-center gap-1 backdrop-blur-sm">
              <FaClock className="text-orange-500" />
              {article.readTime}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 flex flex-col flex-grow">
          {/* Meta Info */}
          <div className="flex items-center gap-4 mb-3 text-sm theme-text-secondary">
            <span className="flex items-center gap-1">
              <FaUser className="text-orange-500 text-xs" />
              {article.author}
            </span>
            <span className="flex items-center gap-1">
              <FaCalendar className="text-orange-500 text-xs" />
              {article.date}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold theme-text-primary mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors duration-300">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="theme-text-secondary text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
            {article.excerpt}
          </p>

          {/* Read More Button */}
          <motion.button
            className="flex items-center gap-2 text-orange-500 font-semibold text-sm group/btn mt-auto"
            whileHover={{ x: 5 }}
          >
            Read More
            <FaArrowRight className="text-xs transition-transform duration-300 group-hover/btn:translate-x-1" />
          </motion.button>
        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
    </motion.article>
  );
};

// --- Main Articles Component ---
const ArticlesPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  // Ensure page starts at top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.section
      className="min-h-screen relative py-16 md:py-24 theme-bg-primary overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-orange-200/20 to-red-200/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-l from-orange-200/20 to-yellow-200/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Header section */}
      <motion.div
        className="relative z-10 text-center mb-12 md:mb-16 px-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-5 bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Articles & Insights
        </motion.h2>
        <motion.p
          className="text-base md:text-lg theme-text-secondary max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Stay updated with the latest digital marketing trends, tips, and strategies from our expert team.
        </motion.p>
      </motion.div>

      {/* Articles Grid */}
      <motion.div
        className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {articleData.map((article, index) => (
            <motion.div
              key={article.id}
              className="w-full"
              variants={itemVariants}
            >
              <ArticleCard
                article={article}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Floating animated elements */}
      <motion.div
        className="absolute top-10 left-10 w-4 h-4 bg-orange-400 rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-20 right-20 w-3 h-3 bg-red-400 rounded-full"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 w-5 h-5 bg-yellow-400 rounded-full"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
      />
    </motion.section>
  );
};

export default ArticlesPage;