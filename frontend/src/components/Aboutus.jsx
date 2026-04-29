import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Cog } from "lucide-react";
import heroimg from "../assets/Team/Director.png";
import secimg from "../assets/Team/Sarvesh.png";
import thirdimg from "../assets/Team/ITManeger.jpg";
import fourthimg from "../assets/Team/Salesmaneger.png";
import fifthimg from "../assets/Team/Socialmediahead.png";
import visionImg from "/vision-img.png";
import missionImg from "/mission-img.png";

/* ================= STATS ================= */
const Stat = ({ value, label }) => (
  <div>
    <div className="text-4xl md:text-5xl font-bold theme-text-primary mb-2">
      {value}
    </div>
    <p className="theme-text-secondary text-sm">{label}</p>
  </div>
);

/* ================= PROFILE CARD ================= */
const ProfileCard = ({ profile }) => {
  const {
    name,
    title,
    description,
    imgSrc,
    subscribers,
    students,
    years,
    education,
    exStudentsCompanies,
  } = profile;

  return (
    <div className="theme-card shadow-xl rounded-[28px] p-6 md:p-10 max-w-6xl max-h-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Image */}
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10">
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden bg-gradient-to-br from-indigo-500/30 to-purple-500/30 p-1 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[95%] h-[95%] rounded-full border border-indigo-400/30 absolute" />
              <div className="w-[75%] h-[75%] rounded-full border border-purple-400/30 absolute" />
            </div>
            <img
              src={imgSrc}
              alt={name}
              className="w-full h-full object-cover rounded-full relative z-10"
            />
          </div>
        </div>


        {/* Content */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold theme-text-primary mb-1">
            {name}
          </h2>
          <h3 className="text-sm theme-text-secondary mb-5">{title}</h3>

          <p className="theme-text-secondary text-base leading-relaxed">
            {description}
          </p>

          {subscribers && (
            <div className="mt-4 flex gap-3 flex-wrap justify-center md:justify-start text-xs">
              <span className="px-3 py-1 rounded bg-indigo-500/15 text-indigo-500">
                {subscribers} subscribers
              </span>
              <span className="px-3 py-1 rounded bg-purple-500/15 text-purple-500">
                {students} Startups mentored
              </span>
            </div>
          )}

          {years && (
            <div className="mt-4 theme-text-muted text-xs">
              {name === "Anil Patharde" ? (
                <p>{years}+ Years Experience in Software Development</p>
              ) : name === "Priyanka Bagul" ? (
                <p>{years}+ Sales experience</p>
              ) : name === "Firoz Shaik" ? (
                <p>{years}+ Years of Expertise in Digital Marketing and Brand Growth</p>
              ) : (
                <p>{years}+ years industry experience</p>
              )}
              {education && <p className="mt-1">{education}</p>}
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

/* ================= SKILLS DATA ================= */
const skills = [
  { name: "Digital Marketing", value: 96 },
  { name: "Branding Solutions", value: 90 },
  { name: "Creative Designing", value: 93 },
  { name: "Print Media Creative", value: 89 },
  { name: "2D / 3D Animation", value: 76 },
  { name: "Website Development", value: 95 },
  { name: "Mobile App Development", value: 90 },
  { name: "Corporate Films & TVCs", value: 80 },
];

/* ================= SKILL BAR ================= */
const SkillBar = ({ name, value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current >= value) {
        current = value;
        clearInterval(interval);
      }
      setCount(current);
    }, 15);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="theme-text-primary font-medium">{name}</span>
        <span className="theme-text-primary font-semibold">{count}%</span>
      </div>

      <div className="relative h-3 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute left-0 top-0 h-full rounded-full
                     bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"
        />
      </div>
    </div>
  );
};

/* ================= MAIN ABOUT US ================= */
function Aboutus() {
  const profiles = [
    {
      name: "Dilip Patil",
      title: "Founder - Fox Aircomm Pvt. Ltd.",
      description: "Experienced Director with over 10+ years of proven expertise in the Digital Marketing and Advertising industry. Adept at Market Research, Identifying Future Business Opportunities, Brand Building, Sales Strategies, and Data Analysis. Possesses a strong academic background with an MBA and PGDM specializing in Telecom from MIT School of Telecom Management (MITSOT), Pune. Committed to driving business growth through innovative marketing solutions and strategic leadership.",
      imgSrc: heroimg,
      Experience: "10+",
      education: "MBA & PGDM (Telecom) from MIT School of Telecom Management, Pune.",
      years: "10",

    },
    {
      name: "Sarvesh Shinde",
      title: "Staff Engineer | Tech Educator",
      description: "A results-driven digital marketing professional with 10+ years of experience across branding, marketing strategy, SEO, paid advertising, and business growth. Proven expertise in building scalable digital systems, crafting high-impact campaigns, and driving measurable outcomes across diverse industries. Known for a strong problem-solving mindset, adaptability, and leadership, Sarvesh has successfully contributed as an individual expert, team lead, and manager—helping brands grow with clarity and consistency.",
      imgSrc: secimg,
      years: "10",
      education: "Institute of Management and Entrepreneurship Development, Pune.",

    },
    {
      name: "Anil Patharde",

      title: "IT Maneger | IT Team Lead",
      description: "Experienced in end-to-end full-stack application development, encompassing frontend interfaces, backend systems, database architecture, API integrations, and cloud deployment. Delivers scalable, secure, and high-performance solutions for enterprise and e-commerce platforms while adhering to structured development processes and collaborative team workflows.",
      imgSrc: thirdimg,
      years: "15",
      education: "Rajiv Gandhi College of Engineering, Research and Technology.",
    },

    {
      name: "Priyanka Bagul",
      title: "Senior Sales Manager ",
      description: "Experienced professional with 6+ years of leadership experience across sales, operations, office administration, and organizational management within IT-driven environments. Successfully managed and nurtured relationships with 100+ clients, ensuring high service quality and long-term satisfaction. Skilled in coordinating cross-functional teams, optimizing operational workflows, and supporting revenue growth. Known for strong communication, structured decision-making, and results-oriented execution. Plays a key role in maintaining efficient operations while aligning teams with business objectives.",
      imgSrc: fourthimg,
      years: "6",
      education: "North Maharashtra University , Master of Science (MS).",
    },

    {
      name: "Firoz Shaik",
      title: "Digital Marketing Manager",
      description: "Expertise in digital marketing with a strong focus on building brand visibility and driving sustainable online growth. Proven experience across SEO, paid advertising, social media marketing, and content strategy to deliver measurable results. Skilled in combining creative storytelling with data-driven insights to optimize campaign performance. Adept at working across multiple industries to create tailored digital solutions. Committed to building trust, engagement, and long-term brand value through consistent and impactful digital experiences.",
      imgSrc: fifthimg,
      years: "5",
      education: "Subhadra Education Society’s S.N.B.P. College of Management, Morwadi, Pimpri, Pune",
    },

  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % profiles.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Scroll to first section when component mounts or navbar click occurs
  useEffect(() => {
    // Check if URL hash indicates navigation from navbar
    if (window.location.hash === '#about' || window.location.pathname.includes('about')) {
      // Scroll to the first section (Vision section)
      const firstSection = document.querySelector('.theme-bg-primary');
      if (firstSection) {
        setTimeout(() => {
          firstSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100); // Small delay to ensure component is mounted
      }
    }
  }, []);

  return (
    <section className="theme-bg-primary py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 space-y-16 ">
        {/* ================= VISION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image - Left side */}
          <div className="flex justify-center lg:justify-center">
            <div className="relative theme-border-secondary theme-shadow-md theme-bg-secondary p-8 md:p-12 rounded-3xl">
              <div className="icon-container">
                <img src={visionImg} alt="Vision" className=" md:w-100  lg:w-100 border-2 rounded-md" />
              </div>
            </div>
          </div>

          {/* Content - Right side */}
          <div>
            <span className="inline-block mb-4 px-5 md:px-7 py-2 rounded-full text-base md:text-xl font-bold bg-indigo-500 text-white">
              Vision
            </span>

            <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold theme-text-primary mb-4 md:mb-6 leading-tight">
              Our Vision Is To Be a Global Digital Growth Partner
            </h2>

            <p className="theme-text-secondary text-base md:text-lg max-w-xl leading-relaxed">
              We aim to empower brands with innovative digital solutions that
              drive visibility, engagement, and long-term success worldwide.
            </p>
          </div>
        </div>

        {/* ================= MISSION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Content - Left side */}
          <div>
            <span className="inline-block mb-4 px-5 md:px-7 py-2 rounded-full text-base md:text-xl font-bold bg-indigo-500 text-white">
              Mission
            </span>

            <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold theme-text-primary mb-4 md:mb-6 leading-tight">
              Our Mission Is To Deliver Results Driven Digital Experiences
            </h2>

            <p className="theme-text-secondary text-base md:text-lg max-w-xl leading-relaxed">
              We combine creativity, technology, and strategy to build powerful
              digital experiences that help businesses grow faster and smarter.
            </p>
          </div>

          {/* Image - Right side */}
          <div className="flex justify-center lg:justify-center">
            <div className="relative theme-border-secondary theme-shadow-md theme-bg-secondary p-8 md:p-12 rounded-3xl">
              <div className="icon-container mb-4 md:mb-6 mx-auto w-fit">
                <img src={missionImg} alt="Mission" className=" md:w-100  lg:w-100 border-2 rounded-md" />
              </div>

            </div>
          </div>
        </div>

        {/* ================= STATS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Stats Card - Left side with Circular Progress */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl w-fit h-fit theme-border-secondary theme-shadow-md theme-bg-secondary rounded-3xl grid grid-cols-2 gap-6 md:gap-8 py-10 md:py-10 px-6 md:px-11 shadow-xl"
          >
            {/* Years Experience - 100% achieved */}
            <motion.div
              className="flex flex-col items-center p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative w-28 h-28 md:w-30 md:h-30">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="50%" cy="50%" r="42%" stroke="#fde8dc" strokeWidth="12" fill="none" className="dark:stroke-gray-700" />
                  <circle
                    cx="50%" cy="50%" r="42%"
                    stroke="url(#orangeGradient)"
                    strokeWidth="12"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="264"
                    strokeDashoffset="0"
                    className="transition-all duration-1000"
                  />
                  <defs>
                    <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#dc2626" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl md:text-3xl font-bold theme-text-primary">10+</span>
                </div>
              </div>
              <div className="uppercase tracking-widest text-[10px] md:text-xs theme-text-secondary font-semibold mt-3 text-center">
                Years Experience
              </div>
            </motion.div>

            {/* Total Clients - 100% achieved */}
            <motion.div
              className="flex flex-col items-center p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative w-28 h-28 md:w-30 md:h-30">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="50%" cy="50%" r="42%" stroke="#fde8dc" strokeWidth="12" fill="none" className="dark:stroke-gray-700" />
                  <circle
                    cx="50%" cy="50%" r="42%"
                    stroke="url(#orangeGradient)"
                    strokeWidth="12"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="264"
                    strokeDashoffset="0"
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl md:text-3xl font-bold theme-text-primary">500+</span>
                </div>
              </div>
              <div className="uppercase tracking-widest text-[10px] md:text-xs theme-text-secondary font-semibold mt-3 text-center">
                Total Clients
              </div>
            </motion.div>

            {/* Client Retention - 90% */}
            <motion.div
              className="flex flex-col items-center p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative w-28 h-28 md:w-30 md:h-30">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="50%" cy="50%" r="42%" stroke="#fde8dc" strokeWidth="12" fill="none" className="dark:stroke-gray-700" />
                  <circle
                    cx="50%" cy="50%" r="42%"
                    stroke="url(#orangeGradient)"
                    strokeWidth="12"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="264"
                    strokeDashoffset="26.4"
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl md:text-3xl font-bold theme-text-primary">90%</span>
                </div>
              </div>
              <div className="uppercase tracking-widest text-[10px] md:text-xs theme-text-secondary font-semibold mt-3 text-center">
                Client Retention
              </div>
            </motion.div>

            {/* Project Completions - 100% achieved */}
            <motion.div
              className="flex flex-col items-center p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative w-28 h-28 md:w-30 md:h-30">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="50%" cy="50%" r="42%" stroke="#fde8dc" strokeWidth="12" fill="none" className="dark:stroke-gray-700" />
                  <circle
                    cx="50%" cy="50%" r="42%"
                    stroke="url(#orangeGradient)"
                    strokeWidth="12"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="264"
                    strokeDashoffset="0"
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl md:text-3xl font-bold theme-text-primary">200+</span>
                </div>
              </div>
              <div className="uppercase tracking-widest text-[10px] md:text-xs theme-text-secondary font-semibold mt-3 text-center">
                Project Completions
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Description - Right side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block mb-4 px-5 md:px-7 py-2 rounded-full text-base md:text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 text-white">
              Our Achievements
            </span>

            <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold theme-text-primary mb-4 md:mb-6 leading-tight">
              Numbers That Speak For Our Success
            </h2>

            <p className="theme-text-secondary text-base md:text-lg max-w-xl leading-relaxed">
              With over a decade of experience and hundreds of successful projects,
              we've built a reputation for delivering exceptional results. Our commitment
              to excellence is reflected in our high client retention rate.
            </p>
          </motion.div>
        </div>

        {/* ================= EXPERTISE ================= */}
        <section className=" md:pt-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center px-2 md:px-4">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold theme-text-primary mb-4 md:mb-6 pb-2 md:pb-5">
                Your Best{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Digital Growth Partner.
                </span>
              </h2>

              <p className="theme-text-secondary leading-relaxed max-w-md mx-auto md:mx-0 text-center md:text-left">
                Fox Aircomm Private Limited is a leading digital marketing
                agency, with over 10 years of experience and 500+
                satisfied clients. We specialize in delivering high-performance
                marketing solutions that drive brand awareness, lead generation,
                and conversion optimization.
                <br />
                <br />
                You have tried everything, from boosting Instagram posts,
                pay-per-click, and the assistance of a digital marketing firm,
                yet leads don't come. After reading this, you also feel this is
                my business story! At Foxaircomm, the best digital marketing
                agency , we are here to change that story.
              </p>
            </div>

            <div className="space-y-6 border theme-border-secondary p-6 md:p-10 rounded-2xl theme-shadow-md theme-bg-secondary">
              {skills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} value={skill.value} />
              ))}
            </div>
          </div>
        </section>

        {/* Our Story - Timeline Section */}
        <section className="theme-bg-primary pt-8 md:pt-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">


            {/* Corporate Milestones Timeline */}
            <div className="relative p-4 md:p-10 overflow-hidden shadow-2xl rounded-2xl">
              {/* Background Pattern */}


              {/* Title */}
              <div className="relative z-10 text-center mb-8 md:mb-12">
                <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold theme-text-primary mb-2 md:mb-6">
                  Our <span className="theme-text-primary">Milestones</span>
                </h2>
              </div>

              {/* Desktop Timeline - Horizontal Shields */}
              <div className="hidden lg:block relative z-10 ">
                {/* Connection Line */}
                <div className="absolute bottom-20 left-[10%] right-[10%] h-1 bg-gradient-to-r from-[#5B8FA3] via-[#6B9B5F] via-[#A67C52] via-[#5B8FA3] to-[#8B5BA3]"></div>

                <div className="grid grid-cols-5 gap-4 pb-24">
                  {/* Foundation */}
                  <div className="group relative">
                    <div className="flex flex-col items-center">
                      {/* Shield Shape */}
                      <div className="relative bg-gradient-to-b from-[#5B8FA3] to-[#4A7C8F] rounded-t-3xl rounded-b-full border-4 border-white shadow-2xl p-6 pb-10 transform group-hover:scale-105 transition-all duration-300 h-72 flex flex-col mb-4">
                        <h4 className="text-white font-black text-lg mb-3 text-center border-b-2 border-white pb-2">Foundation</h4>
                        <p className="text-white text-sm leading-relaxed text-center">
                          Established Fox Aircomm Private Limited as a digital marketing agency in Pune, Maharashtra.
                        </p>
                      </div>

                      {/* Bottom Icon Circle */}
                      <div className="w-16 h-16 bg-white rounded-full border-4 border-[#5B8FA3] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 mb-4">
                        <span className="text-2xl">🏢</span>
                      </div>

                      {/* Year Label */}
                      <div className="text-3xl font-black text-[#5B8FA3]">2016</div>
                    </div>
                  </div>

                  {/* Service Expansion */}
                  <div className="group relative">
                    <div className="flex flex-col items-center">
                      <div className="relative bg-gradient-to-b from-[#6B9B5F] to-[#5A8A4F] rounded-t-3xl rounded-b-full border-4 border-white shadow-2xl p-6 pb-10 transform group-hover:scale-105 transition-all duration-300 h-72 flex flex-col mb-4">
                        <h4 className="text-white font-black text-lg mb-3 text-center border-b-2 border-white pb-2">Service Expansion</h4>
                        <p className="text-white text-sm leading-relaxed text-center">
                          Expanded services to include SEO, Social Media Marketing, and PPC campaigns for diverse industries.
                        </p>
                      </div>

                      <div className="w-16 h-16 bg-white rounded-full border-4 border-[#6B9B5F] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 mb-4">
                        <span className="text-2xl">📈</span>
                      </div>

                      <div className="text-3xl font-black text-[#6B9B5F]">2016-2018</div>
                    </div>
                  </div>

                  {/* Multi-Branch System */}
                  <div className="group relative">
                    <div className="flex flex-col items-center">
                      <div className="relative bg-gradient-to-b from-[#A67C52] to-[#8F6B42] rounded-t-3xl rounded-b-full border-4 border-white shadow-2xl p-6 pb-10 transform group-hover:scale-105 transition-all duration-300 h-72 flex flex-col mb-4">
                        <h4 className="text-white font-black text-lg mb-3 text-center border-b-2 border-white pb-2">Multi-Branch System</h4>
                        <p className="text-white text-sm leading-relaxed text-center">
                          Established branches in Mumbai and Ahmedabad to serve clients across major business hubs.
                        </p>
                      </div>

                      <div className="w-16 h-16 bg-white rounded-full border-4 border-[#A67C52] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 mb-4">
                        <span className="text-2xl">🏭</span>
                      </div>

                      <div className="text-3xl font-black text-[#A67C52]">2019-2021</div>
                    </div>
                  </div>

                  {/* Digital Excellence */}
                  <div className="group relative">
                    <div className="flex flex-col items-center">
                      <div className="relative bg-gradient-to-b from-[#5B8FA3] to-[#4A7C8F] rounded-t-3xl rounded-b-full border-4 border-white shadow-2xl p-6 pb-10 transform group-hover:scale-105 transition-all duration-300 h-72 flex flex-col mb-4">
                        <h4 className="text-white font-black text-lg mb-3 text-center border-b-2 border-white pb-2">Digital Excellence</h4>
                        <p className="text-white text-sm leading-relaxed text-center">
                          Recognized as leading digital marketing agency with 500+ satisfied clients and proven ROI-driven results.
                        </p>
                      </div>

                      <div className="w-16 h-16 bg-white rounded-full border-4 border-[#5B8FA3] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 mb-4">
                        <span className="text-2xl">🌍</span>
                      </div>

                      <div className="text-3xl font-black text-[#5B8FA3]">2022-2024</div>
                    </div>
                  </div>

                  {/* Future */}
                  <div className="group relative">
                    <div className="flex flex-col items-center">
                      <div className="relative bg-gradient-to-b from-[#8B5BA3] to-[#724A8F] rounded-t-3xl rounded-b-full border-4 border-white shadow-2xl p-6 pb-10 h-72 flex flex-col mb-4">
                        <h4 className="text-white font-black text-lg mb-3 text-center border-b-2 border-white pb-2">Future</h4>
                        <p className="text-white text-sm leading-relaxed text-center">
                          AI-powered marketing solutions and global expansion to transform digital marketing landscape.
                        </p>
                      </div>

                      <div className="w-16 h-16 bg-white rounded-full border-4 border-[#8B5BA3] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 mb-4">
                        <span className="text-2xl">🚀</span>
                      </div>

                      <div className="text-3xl font-black text-[#8B5BA3]">2025-2026</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tablet Timeline - 2 Columns */}
              <div className="hidden md:block lg:hidden relative z-10 pb-24">
                <div className="grid grid-cols-2 gap-8 mb-16">
                  {/* Foundation */}
                  <div className="group relative">
                    <div className="flex flex-col items-center">
                      <div className="relative bg-gradient-to-b from-[#5B8FA3] to-[#4A7C8F] rounded-t-3xl rounded-b-full border-4 border-white shadow-2xl p-6 pb-10 transform group-hover:scale-105 transition-all duration-300 h-72 flex flex-col mb-4">
                        <h4 className="text-white font-black text-xl mb-3 text-center border-b-2 border-white pb-2">Foundation</h4>
                        <p className="text-white text-sm leading-relaxed text-center">
                          Established Fox Aircomm Private Limited as a digital marketing agency in Pune, Maharashtra.
                        </p>
                      </div>
                      <div className="w-16 h-16 bg-white rounded-full border-4 border-[#5B8FA3] flex items-center justify-center shadow-xl mb-4">
                        <span className="text-2xl">🏢</span>
                      </div>
                      <div className="text-xl font-black text-[#5B8FA3]">2016</div>
                    </div>
                  </div>

                  {/* Service Expansion */}
                  <div className="group relative">
                    <div className="flex flex-col items-center">
                      <div className="relative bg-gradient-to-b from-[#6B9B5F] to-[#5A8A4F] rounded-t-3xl rounded-b-full border-4 border-white shadow-2xl p-6 pb-10 transform group-hover:scale-105 transition-all duration-300 h-72 flex flex-col mb-4">
                        <h4 className="text-white font-black text-xl mb-3 text-center border-b-2 border-white pb-2">Service Expansion</h4>
                        <p className="text-white text-sm leading-relaxed text-center">
                          Expanded services to include SEO, Social Media Marketing, and PPC campaigns for diverse industries.
                        </p>
                      </div>
                      <div className="w-16 h-16 bg-white rounded-full border-4 border-[#6B9B5F] flex items-center justify-center shadow-xl mb-4">
                        <span className="text-2xl">📈</span>
                      </div>
                      <div className="text-xl font-black text-[#6B9B5F]">2016-2018</div>
                    </div>
                  </div>

                  {/* Multi-Branch System */}
                  <div className="group relative">
                    <div className="flex flex-col items-center">
                      <div className="relative bg-gradient-to-b from-[#A67C52] to-[#8F6B42] rounded-t-3xl rounded-b-full border-4 border-white shadow-2xl p-6 pb-10 transform group-hover:scale-105 transition-all duration-300 h-72 flex flex-col mb-4">
                        <h4 className="text-white font-black text-xl mb-3 text-center border-b-2 border-white pb-2">Multi-Branch System</h4>
                        <p className="text-white text-sm leading-relaxed text-center">
                          Established branches in Mumbai and Ahmedabad to serve clients across major business hubs.
                        </p>
                      </div>
                      <div className="w-16 h-16 bg-white rounded-full border-4 border-[#A67C52] flex items-center justify-center shadow-xl mb-4">
                        <span className="text-2xl">🏭</span>
                      </div>
                      <div className="text-xl font-black text-[#A67C52]">2019-2021</div>
                    </div>
                  </div>

                  {/* Digital Excellence */}
                  <div className="group relative">
                    <div className="flex flex-col items-center">
                      <div className="relative bg-gradient-to-b from-[#5B8FA3] to-[#4A7C8F] rounded-t-3xl rounded-b-full border-4 border-white shadow-2xl p-6 pb-10 transform group-hover:scale-105 transition-all duration-300 h-72 flex flex-col mb-4">
                        <h4 className="text-white font-black text-xl mb-3 text-center border-b-2 border-white pb-2">Digital Excellence</h4>
                        <p className="text-white text-sm leading-relaxed text-center">
                          Recognized as leading digital marketing agency with 500+ satisfied clients and proven ROI-driven results.
                        </p>
                      </div>
                      <div className="w-16 h-16 bg-white rounded-full border-4 border-[#5B8FA3] flex items-center justify-center shadow-xl mb-4">
                        <span className="text-2xl">🌍</span>
                      </div>
                      <div className="text-xl font-black text-[#5B8FA3]">2022-2024</div>
                    </div>
                  </div>
                </div>

                {/* Future - Centered */}
                <div className="group relative">
                  <div className="max-w-sm mx-auto flex flex-col items-center">
                    <div className="relative bg-gradient-to-b from-[#8B5BA3] to-[#724A8F] rounded-t-3xl rounded-b-full border-4 border-white shadow-2xl p-6 pb-10 h-72 flex flex-col mb-4">
                      <h4 className="text-white font-black text-xl mb-3 text-center border-b-2 border-white pb-2">Future</h4>
                      <p className="text-white text-sm leading-relaxed text-center">
                        Future growth and innovation.
                      </p>
                    </div>
                    <div className="w-16 h-16 bg-white rounded-full border-4 border-[#8B5BA3] flex items-center justify-center shadow-xl mb-4">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div className="text-3xl font-black text-[#8B5BA3]">2025-2026</div>
                  </div>
                </div>
              </div>

              {/* Mobile Timeline - Vertical */}
              <div className="md:hidden relative z-10 space-y-16">
                {/* Foundation */}
                <div className="group relative">
                  <div className="relative">
                    <div className="relative bg-gradient-to-b from-[#5B8FA3] to-[#4A7C8F] rounded-t-3xl rounded-b-full border-4 border-white shadow-2xl p-6 pb-10 transform group-hover:scale-105 transition-all duration-300 h-64 flex flex-col">
                      <div className="text-3xl font-black text-white/80 mb-2 text-center">2016</div>
                      <h4 className="text-white font-black text-lg mb-3 text-center border-b-2 border-white pb-2">Foundation</h4>
                      <p className="text-white text-xs leading-relaxed text-center">
                        Established Fox Aircomm Private Limited as a digital marketing agency in Pune, Maharashtra.
                      </p>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white rounded-full border-4 border-[#5B8FA3] flex items-center justify-center shadow-xl">
                      <span className="text-xl">🏢</span>
                    </div>
                  </div>
                </div>

                {/* Service Expansion */}
                <div className="group relative">
                  <div className="relative">
                    <div className="relative bg-gradient-to-b from-[#6B9B5F] to-[#5A8A4F] rounded-t-3xl rounded-b-full border-4 border-white shadow-2xl p-6 pb-10 transform group-hover:scale-105 transition-all duration-300 h-64 flex flex-col">
                      <div className="text-3xl font-black text-white/80 mb-2 text-center">2017-2020</div>
                      <h4 className="text-white font-black text-lg mb-3 text-center border-b-2 border-white pb-2">Service Expansion</h4>
                      <p className="text-white text-xs leading-relaxed text-center">
                        Expanded services to include SEO, Social Media Marketing, and PPC campaigns for diverse industries.
                      </p>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white rounded-full border-4 border-[#6B9B5F] flex items-center justify-center shadow-xl">
                      <span className="text-xl">📈</span>
                    </div>
                  </div>
                </div>

                {/* Multi-Branch System */}
                <div className="group relative">
                  <div className="relative">
                    <div className="relative bg-gradient-to-b from-[#A67C52] to-[#8F6B42] rounded-t-3xl rounded-b-full border-4 border-white shadow-2xl p-6 pb-10 transform group-hover:scale-105 transition-all duration-300 h-64 flex flex-col">
                      <div className="text-3xl font-black text-white/80 mb-2 text-center">2020-2022</div>
                      <h4 className="text-white font-black text-lg mb-3 text-center border-b-2 border-white pb-2">Multi-Branch System</h4>
                      <p className="text-white text-xs leading-relaxed text-center">
                        Established branches in Mumbai and Ahmedabad to serve clients across major business hubs.
                      </p>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white rounded-full border-4 border-[#A67C52] flex items-center justify-center shadow-xl">
                      <span className="text-xl">🏭</span>
                    </div>
                  </div>
                </div>

                {/* Digital Excellence */}
                <div className="group relative">
                  <div className="relative">
                    <div className="relative bg-gradient-to-b from-[#5B8FA3] to-[#4A7C8F] rounded-t-3xl rounded-b-full border-4 border-white shadow-2xl p-6 pb-10 transform group-hover:scale-105 transition-all duration-300 h-64 flex flex-col">
                      <div className="text-3xl font-black text-white/80 mb-2 text-center">2023-2025</div>
                      <h4 className="text-white font-black text-lg mb-3 text-center border-b-2 border-white pb-2">Digital Excellence</h4>
                      <p className="text-white text-xs leading-relaxed text-center">
                        Recognized as leading digital marketing agency with 500+ satisfied clients and proven ROI-driven results.
                      </p>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white rounded-full border-4 border-[#5B8FA3] flex items-center justify-center shadow-xl">
                      <span className="text-xl">🌍</span>
                    </div>
                  </div>
                </div>

                {/* Future */}
                <div className="group relative">
                  <div className="relative">
                    <div className="relative bg-gradient-to-b from-[#8B5BA3] to-[#724A8F] rounded-t-3xl rounded-b-full border-4 border-white shadow-2xl p-6 pb-10 group-hover:scale-105  h-64 flex flex-col">
                      <h4 className="text-white font-black text-lg mb-3 text-center border-b-2 border-white pb-2">2026</h4>
                      <p className="text-white text-xs leading-relaxed text-center">
                        AI-powered marketing solutions and global expansion to transform digital marketing landscape.
                      </p>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white rounded-full border-4 border-[#8B5BA3] flex items-center justify-center shadow-xl">
                      <span className="text-xl">🚀</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



      </div>
    </section>
  );
}

export default Aboutus;
