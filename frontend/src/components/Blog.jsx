import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaUser, FaArrowRight, FaClock, FaTag } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

// --- Article Card Component ---
const ArticleCard = ({
  title,
  excerpt,
  image,
  author,
  date,
  readTime,
  category,
  index,
  link,
}) => {
  const navigate = useNavigate(); // hook must live inside a component

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
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
              <FaTag className="text-[10px]" />
              {category}
            </span>
          </div>

          {/* Read Time Badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 theme-text-primary text-xs font-medium rounded-full flex items-center gap-1 backdrop-blur-sm">
              <FaClock className="text-orange-500" />
              {readTime}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 flex flex-col flex-grow">
          {/* Meta Info */}
          <div className="flex items-center gap-4 mb-3 text-sm theme-text-secondary">
            <span className="flex items-center gap-1">
              <FaUser className="text-orange-500 text-xs" />
              {author}
            </span>
            <span className="flex items-center gap-1">
              <FaCalendar className="text-orange-500 text-xs" />
              {date}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold theme-text-primary mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors duration-300">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="theme-text-secondary text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
            {excerpt}
          </p>

          {/* Read More Button */}
          <motion.button
            className="flex items-center gap-2 text-orange-500 font-semibold text-sm group/btn mt-auto"
            whileHover={{ x: 5 }}
            onClick={() => navigate(link)}
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

          <motion.div className="w-full" variants={itemVariants}>
            <ArticleCard
              index={0}
              title="What are the benefits of digital marketing For Small Businesses?"
              excerpt="Running a business, whether it's a coaching center, a dental clinic, or a new restaurant, means you're constantly competing to survive in the market."
              image="ChatGPT Image Jul 22, 2026, 04_34_29 PM.png"
              author="Dilip Patil"
              date="Jan 15, 2026"
              readTime="5 min read"
              category="Marketing"
              link="/Blogs/Benefits-of-digital-marketing-For-Small-Businesses"
            />
          </motion.div>

          <motion.div className="w-full" variants={itemVariants}>
            <ArticleCard
              index={1}
              title="Why Foxaircomm Is the Best Social Media Marketing Agency in Pune"
              excerpt="Most social media marketing in Pune fails not because brands are inactive, but because posting is treated as a strategy."
              image="/ChatGPT Image Jul 22, 2026, 05_15_05 PM.png"
              author="Sarvesh Shinde"
              date="Jan 12, 2026"
              readTime="7 min read"
              category="SEO"
              link="/Blogs/Why-Foxaircomm-Is-the-Best-Social-Media-Marketing-Agency-in-Pune"
            />
          </motion.div>

          <motion.div className="w-full" variants={itemVariants}>
            <ArticleCard
              index={2}
              title="What Are The 7 Types Of Digital Marketing You Must Know In 2025"
              excerpt="Gone are those days of the 1990s when Indian marketing practices heavily relied on radio jingles, TV ads, and word-of-mouth publicity."
              image="/ChatGPT Image Jul 22, 2026, 05_33_11 PM.png"
              author="Firoz Shaik"
              date="Jan 10, 2026"
              readTime="8 min read"
              category="Social Media"
              link="/Blogs/What-Are-The-7-Types-Of-Digital-Marketing-You-Must-Know-In-2025"
            />
          </motion.div>

          <motion.div className="w-full" variants={itemVariants}>
            <ArticleCard
              index={3}
              title="Top 10 Questions to Ask Before Hiring a Digital Marketing Agency"
              excerpt="Hiring a digital marketing agency isn't just a contract; it's choosing someone who will help shape your brand's future. "
              image="/ChatGPT Image Jul 23, 2026, 05_11_11 PM.png"
              author="Dilip Patil"
              date="Jan 8, 2026"
              readTime="6 min read"
              category="Branding"
              link="/Blogs/Top-10-Questions-to-Ask-Before-Hiring-a-Digital-Marketing-Agency"
            />
          </motion.div>

          <motion.div className="w-full" variants={itemVariants}>
            <ArticleCard
              index={4}
              title="How to Do SEO for a website: step-by-step guide"
              excerpt="Learning how to do SEO for a website through a step-by-step guide is crucial for any new website aiming to earn visibility in today’s AI-driven search world."
              image="/ChatGPT Image Jul 23, 2026, 05_30_13 PM.png"
              author="Sarvesh Shinde"
              date="Jan 5, 2026"
              readTime="6 min read"
              category="Content"
              link="/Blogs/How-to-Do-SEO-for-website"
            />
          </motion.div>

          <motion.div className="w-full" variants={itemVariants}>
            <ArticleCard
              index={5}
              title="Advantages Of Digital Marketing For Small Businesses & Startups"
              excerpt="The marketplace is tough. Whether you own a small bakery in Pune or a new tech company in Bengaluru, you face the issue of tight budgets, unlimited competition, and customers who change their minds constantly."
              image="/ChatGPT Image Jul 28, 2026, 12_45_39 PM.png"
              author="Firoz Shaik"
              date="Jan 3, 2026"
              readTime="5 min read"
              category="Advertising"
              link="/Blogs/Advantages-Of-Digital-Marketing-For-Small-Businesses-nd-Startups"
            />
          </motion.div>

          <motion.div className="w-full" variants={itemVariants}>
            <ArticleCard
              index={6}
              title="How Google Ads AI Improves Campaign Performance and Increases Conversions"
              excerpt="Running Google Ads without leveraging AI is like navigating without GPS. You might eventually reach your destination, but you will spend more time, money, and energy getting there."
              image="/ChatGPT Image Jul 29, 2026, 04_54_38 PM.png"
              author="Anil Patharde"
              date="Dec 28, 2025"
              readTime="9 min read"
              category="Development"
              link="/Blogs/How-Google-Ads-AI-Improves-Campaign-Performance-and-Increases-Conversions"
            />
          </motion.div>

          <motion.div className="w-full" variants={itemVariants}>
            <ArticleCard
              index={7}
              title="Email Marketing: Tips for Higher Open Rates"
              excerpt="Boost your email marketing performance with these proven strategies for better engagement."
              image="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              author="Priyanka Bagul"
              date="Dec 25, 2025"
              readTime="4 min read"
              category="Email"
              link="/articles/email-marketing-tips-for-higher-open-rates"
            />
          </motion.div>

          <motion.div className="w-full" variants={itemVariants}>
            <ArticleCard
              index={8}
              title="Mobile App Marketing: Reach More Users"
              excerpt="Discover effective strategies to promote your mobile app and increase downloads and user engagement."
              image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              author="Sarvesh Shinde"
              date="Dec 22, 2025"
              readTime="6 min read"
              category="Mobile"
              link="/articles/mobile-app-marketing-reach-more-users"
            />
          </motion.div>

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