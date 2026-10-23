import React, { useState, useEffect } from "react";
import { Users, TrendingUp, Share2, Code2, Megaphone, Palette } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import EnquiryPopup from "./Enquirypopup";
import mobileImg from "../assets/home/mobile.png";
import processImg from "/ChatGPT Image Sep 18, 2026, 05_32_45 PM.png";
import { HeartPulse, GraduationCap, Building2, Briefcase, Landmark, Headset, Award, Plane, Store, Sparkles, Compass, Sofa, Target, Layers, Activity, MessageSquare, ShieldCheck } from "lucide-react";
import {
  MapPin, Phone, Mail, Clock, Search, Smartphone, BarChart2, PenLine, Send, ArrowRight, MessageCircle,
  MessagesSquare,
  ShoppingCart,
  Globe,
  BarChart3,
  ArrowUpRight,
  Database
} from "lucide-react";
// Import Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Herosection from "./home/Herosection";
import { Helmet } from "react-helmet";
import { CheckCircle2, Eye, IndianRupee } from "lucide-react";

// ---------------------------------------------------------------------------
// "Why Pune Businesses Trust Fox Aircomm " section data — module scope so it's
// reachable both by the section JSX and doesn't get trapped inside another
// component's closure.
// ---------------------------------------------------------------------------
const TRUST_ICONS = {
  target: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="16" cy="16" r="10.5" />
      <circle cx="16" cy="16" r="5.5" />
      <path d="M16 16 L24 8" strokeLinecap="round" />
      <path d="M24 8 L24 3.5 M24 8 L28.5 8" strokeLinecap="round" />
    </svg>
  ),
  stack: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="6" y="6" width="14" height="14" rx="0.5" />
      <rect x="12" y="12" width="14" height="14" rx="0.5" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M16 4c-5 0-9 3.8-9 9 0 6.5 9 15 9 15s9-8.5 9-15c0-5.2-4-9-9-9z" />
      <path d="M9.5 24h13" strokeLinecap="round" />
      <path d="M12 24v-4h3v4M17 24v-6h3v6" />
    </svg>
  ),
  pulse: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 24h5l2-9 4 14 3-11 2 6h8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  bubble: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M5 8h22v13H15l-6 5v-5H5z" strokeLinejoin="round" />
      <path d="M10 13.5h12M10 18h8" strokeLinecap="round" />
    </svg>
  ),
  flag: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M9 4v24" strokeLinecap="round" />
      <path d="M9 6c4-2 6 2 10 0v10c-4 2-6-2-10 0z" strokeLinejoin="round" />
    </svg>
  ),
};


const ADVANTAGES = [
  {
    icon: Target,
    title: "Structured, result-driven approach",
    text: "Clear goals, a defined plan, and measurable milestones at every step.",
  },
  {
    icon: Headset,
    title: "Fastest 1:1 client support",
    text: "A dedicated point of contact who responds quickly when you need us.",
  },
  {
    icon: Layers,
    title: "Integrated marketing platform",
    text: "SEO, ads, social, messaging, and CRM working together in one place.",
  },
  {
    icon: Award,
    title: "Brand highlighted on top portals",
    text: "Stronger brand presence and credibility on leading business portals.",
  },
];

const industries = [
  {
    title: 'Healthcare', icon: HeartPulse, accent: 'from-orange-400 to-orange-600',
    text: 'Improve local visibility and help potential patients discover relevant healthcare services online.'
  },
  {
    title: 'Education', icon: GraduationCap, accent: 'from-blue-400 to-indigo-600',
    text: 'Reach students and prospective learners through search, paid campaigns, social media, and content.'
  },
  {
    title: 'Real Estate', icon: Building2, accent: 'from-purple-500 to-pink-600',
    text: 'Generate location-focused visibility and enquiries through SEO, paid advertising, and landing pages.'
  },
  {
    title: 'Banking & Finance', icon: Landmark, accent: 'from-emerald-400 to-teal-600',
    text: 'Generate qualified leads and build trust for gold loan and financial service providers through targeted digital marketing.'
  },
  {
    title: 'Hospitality & Travel', icon: Plane, accent: 'from-sky-400 to-cyan-600',
    text: 'Reach customers actively searching for travel, accommodation, transportation, and related services.'
  },
  {
    title: 'Local Businesses', icon: Store, accent: 'from-rose-400 to-red-600',
    text: 'Strengthen Google visibility, local search presence, customer engagement, and lead generation.'
  },
  {
    title: 'Beauty & Cosmetics', icon: Sparkles, accent: 'from-fuchsia-400 to-pink-600',
    text: 'Build brand visibility and engage with beauty-aware audiences to drive product discovery and sales through creative campaigns.'
  },
  {
    title: 'Tours & Travels', icon: Compass, accent: 'from-amber-400 to-orange-600',
    text: 'Generate travel business leads and enquiries while promoting travel packages through targeted search, social media, and performance marketing.'
  },
  {
    title: 'Interior Design', icon: Sofa, accent: 'from-violet-400 to-indigo-600',
    text: 'Showcase your design talents, reach potential clients, and generate qualified project enquiries through targeted online marketing strategies.'
  },
];

const inputBase =
  'w-full px-4 py-3 rounded-xl theme-input theme-text-primary placeholder-theme-text-muted border transition focus:outline-none focus:ring-2 focus:ring-blue-500/60';

const fieldBorder = (err) => (err ? 'border-red-500' : 'theme-border');

const TRUST_BENEFITS = [
  {
    icon: Target,
    title: "Results-Focused Strategy",
    body: "We build digital marketing strategies around business objectives such as visibility, lead generation, customer acquisition, and growth.",
  },
  {
    icon: Layers,
    title: "Full-Service Expertise",
    body: "An integrated digital marketing partner can manage SEO, Google Ads, social media, website development, creative design, and business messaging.",
  },
  {
    icon: MapPin,
    title: "Local Market Understanding",
    body: "Our Pune-focused approach considers local search behaviour, competition, customer intent, and the needs of businesses operating in Pune and PCMC.",
  },
  {
    icon: Activity,
    title: "Data-Driven Decisions",
    body: "Campaign performance, traffic, engagement, leads, and conversions help guide ongoing optimisation.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    body: "Clear reporting and regular performance discussions help businesses understand what is working and where improvements are required.",
  },
  {
    icon: ShieldCheck,
    title: "Business-Focused Execution",
    body: "The goal is not simply to generate traffic or impressions but to create digital activity that supports real business objectives.",
  },
];

// ---------------------------------------------------------------------------
// Animation presets + "Who We Are" capability data (module scope)
// ---------------------------------------------------------------------------
const ease = [0.22, 1, 0.36, 1];
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const capabilities = [
  { icon: Search, title: "SEO & GMB SEO", text: "Visibility that converts" },
  { icon: Share2, title: "Social & Creative", text: "Content that engages" },
  { icon: Code2, title: "Web Development", text: "Built for performance" },
  { icon: BarChart3, title: "CRM & Performance", text: "Measurable outcomes" },
  { icon: Megaphone, title: "Google Ads & PPC", text: "Better return on spend" },
  { icon: Palette, title: "Graphic Design", text: "Designs that bring your brand to life" },
];

// ---------------------------------------------------------------------------
// Services section data + card (module scope)
// ---------------------------------------------------------------------------
const SERVICES = [
  {
    icon: Megaphone,
    color: "bg-pink-500",
    title: "Social Media Marketing",
    body: "Build brand awareness and engage your audience across platforms.",
    href: "/services/social-media-marketing",
  },
  {
    icon: Search,
    color: "bg-blue-500",
    title: "SEO Services",
    body: "Improve search rankings, organic traffic, and visibility with proven SEO strategies.",
    href: "/services/seo",
  },
  {
    icon: TrendingUp,
    color: "bg-orange-500",
    title: "Google Ads & PPC",
    body: "Reach high-intent customers with targeted campaigns and better ROI.",
    href: "/services/google-adwords", // PPC also has its own page: /ppc-management-pune
  },
  {
    icon: Globe,
    color: "bg-indigo-500",
    title: "Website Development",
    body: "Create fast, user-friendly websites designed for conversions.",
    href: "/services/website-design",
  },
  {
    icon: ShoppingCart,
    color: "bg-rose-500",
    title: "E-Commerce Development",
    body: "Build online stores that drive sales and customer loyalty.",
    href: "/services/ecommerce-design",
  },
  {
    icon: PenLine,
    color: "bg-purple-500",
    title: "Graphic Design",
    body: "Designs that bring your brand to life across all touchpoints.",
    href: "/services/graphics-design",
  },
  {
    icon: MessagesSquare,
    color: "bg-emerald-500",
    title: "WhatsApp Marketing",
    body: "Connect with customers through automation and bulk messaging.",
    href: "/services/whatsapp-software",
  },
  {
    icon: MessageCircle,
    color: "bg-violet-500",
    title: "RCS Messaging",
    body: "Interactive business messaging for better engagement.",
    href: "/services/rcs-sms",
  },
  {
    icon: Smartphone,
    color: "bg-cyan-500",
    title: "Bulk SMS",
    body: "Reach more customers with scalable and reliable SMS solutions.",
    href: "/services/bulk-sms",
  },
  {
    icon: Database,
    color: "bg-sky-500",
    title: "CRM Software",
    body: "Custom CRM built around how your team actually sells, not the other way round.",
    href: null, // no page yet; add one here when it exists
  },
];

function ServiceCard({ service, index }) {
  const Icon = service.icon;
  const isLive = Boolean(service.href);

  const content = (
    <>
      {/* number watermark */}
      <span className="pointer-events-none absolute right-4 top-3 text-4xl font-black text-slate-900/5 transition-colors group-hover:text-orange-500/15">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div
        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${service.color} text-white shadow-md transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-3`}
      >
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>

      <h3 className="mb-2 text-base font-bold leading-snug text-slate-900">
        {service.title}
      </h3>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-600">
        {service.body}
      </p>

      {isLive ? (
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-orange-600">
          Learn more
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      ) : (
        <span className="inline-flex w-fit items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-500">
          Coming soon
        </span>
      )}

      {/* bottom accent bar */}
      <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-orange-400 to-orange-600 transition-transform duration-300 group-hover:scale-x-100" />
    </>
  );

  const base =
    "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-orange-100 bg-white p-5 shadow-sm transition-all duration-300";

  // Cards without a page yet stay as plain, non-clickable boxes.
  if (!isLive) {
    return <div className={`${base} opacity-90`}>{content}</div>;
  }

  return (
    <Link
      to={service.href}
      className={`${base} hover:-translate-y-1.5 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-200/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500`}
    >
      {content}
    </Link>
  );
}

const Arrow = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M4 12h15" strokeLinecap="round" />
    <path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ---------------------------------------------------------------------------
// "How We Solve Your Digital Marketing Challenges" section (module scope)
// ---------------------------------------------------------------------------
const ROWS = [
  {
    icon: Search,
    color: "bg-orange-500",
    challenge: "Low Google visibility",
    solution: "SEO + Local SEO",
    outcome: "Higher rankings and more local search visibility",
  },
  {
    icon: Target,
    color: "bg-emerald-500",
    challenge: "Not enough qualified leads",
    solution: "SEO + Google Ads + landing-page optimisation",
    outcome: "More leads that actually convert into customers",
  },
  {
    icon: Share2,
    color: "bg-blue-500",
    challenge: "Poor social media engagement",
    solution: "Social Media Strategy + Content + Paid Campaigns",
    outcome: "Stronger reach and audience engagement",
  },
  {
    icon: Globe,
    color: "bg-pink-500",
    challenge: "Outdated website",
    solution: "Conversion-focused Web Development",
    outcome: "A website built to turn visitors into enquiries",
  },
  {
    icon: IndianRupee,
    color: "bg-violet-500",
    challenge: "High advertising costs",
    solution: "PPC optimisation + performance analysis",
    outcome: "Lower cost per lead and better return on ad spend",
  },
  {
    icon: MessageSquare,
    color: "bg-cyan-500",
    challenge: "Weak customer communication",
    solution: "WhatsApp + RCS + Bulk SMS + Bulk Email",
    outcome: "Faster, more consistent customer communication",
  },
  {
    icon: Eye,
    color: "bg-amber-500",
    challenge: "Low online brand visibility",
    solution: "Integrated Digital Marketing",
    outcome: "A consistent brand presence across every channel",
  },
];

function ChallengeRow({ row, index }) {
  const Icon = row.icon;

  return (
    <li className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-100 sm:p-5">
      {/* left accent bar */}
      <span
        aria-hidden="true"
        className={`absolute inset-y-0 left-0 w-1 ${row.color} opacity-70 transition-all duration-300 group-hover:w-1.5 group-hover:opacity-100`}
      />

      <div className="grid items-center gap-3 pl-2 md:grid-cols-[minmax(0,1fr)_28px_minmax(0,1.3fr)] md:gap-4">
        {/* Challenge */}
        <div className="flex items-center gap-3">
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${row.color} text-white shadow-md transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105`}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Challenge {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="text-sm font-bold leading-snug text-slate-900 sm:text-base">
              {row.challenge}
            </h3>
          </div>
        </div>

        {/* Arrow (rotates to point down on mobile) */}
        <ArrowRight
          className="hidden h-5 w-5 justify-self-center text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-orange-500 md:block"
          aria-hidden="true"
        />

        {/* Solution + outcome */}
        <div>
          <p className="text-sm font-semibold text-slate-800">{row.solution}</p>
          <p className="mt-1 flex items-start gap-1.5 text-sm text-slate-500">
            <CheckCircle2
              className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            {row.outcome}
          </p>
        </div>
      </div>
    </li>
  );
}

function ChallengesSection() {
  return (
    <section
      id="approach"
      aria-labelledby="challenges-heading"
      className="relative overflow-hidden bg-slate-50 px-6 py-20"
    >
      <div className="pointer-events-none absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-orange-200/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] lg:items-start">
        {/* Left: heading (sticky on desktop) */}
        <div className="lg:sticky lg:top-24">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-600 shadow-sm">
            Our Approach
          </span>

          <h2
            id="challenges-heading"
            className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl"
          >
            How We Solve Your{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Digital Marketing
            </span>{" "}
            Challenges
          </h2>

          <p className="mb-8 max-w-md text-base leading-relaxed text-slate-600">
            Every business faces different challenges. We identify your goals,
            understand your audience, and create the right mix of strategies to
            deliver measurable results.
          </p>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
          >
            Explore Our Approach
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Right: challenge → solution → outcome rows */}
        <ul className="space-y-3">
          {ROWS.map((row, i) => (
            <ChallengeRow key={row.challenge} row={row} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function Home() {
  // FIX: reduceMotion must be defined inside the component before it is used
  const reduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    businessName: '',
    contactNumber: '',
    typeOfService: 'Social Media Marketing',
    consent: false
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.consent) newErrors.consent = 'Consent is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Handle form submission here
      console.log('Form submitted:', formData);
      alert('Thank you for your enquiry! We will contact you soon.');
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        businessName: '',
        contactNumber: '',
        typeOfService: 'Social Media Marketing',
        consent: false
      });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  const navigate = useNavigate();

  // Ensure page starts at top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Load the trust/solve sections' webfont once
  useEffect(() => {
    const id = "foxair-trust-fonts";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;0,600;1,500&family=Work+Sans:wght@400;500&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  // Testimonial data
  const testimonialData = [
    {
      id: 1,
      name: "Kuldeep",
      title: "Owner Of Morya Car Business Solution",
      rating: 5.0,
      quote: "I’m Kuldeep owner of Morya Cab, and I’m extremely satisfied with the services provided by Foxaircomm Pvt. Ltd. Their digital marketing and lead generation strategies have helped us reach more customers and generate quality leads for our business.A special mention to Swati, who has been very supportive, responsive, and professional throughout the process. She always understands our requirements and provides quick and effective support.",
      truncatedQuote: "The overall service, communication, lead generation, and support have been excellent. I highly recommend Foxaircomm Pvt. Ltd. to anyone looking for reliable digital marketing and lead generation services.",


    },
    {
      id: 2,
      name: "Designko Interior",
      title: "Designko Interior",
      rating: 5.0,
      quote: "Very disappointing experience with Fox Aircomm. They take money from clients for advertising services but fail to run campaigns properly. In many cases, the ad budget provided by business owners is not even used correctly. This creates trust issues and leads to financial losses for clients.There was a lack of clear communication,not answer our calls,and no visible improvement in campaign performance despite repeated follow-ups. Would not recommend if you're looking for reliable and result-driven marketing support.",
      truncatedQuote: "Very disappointing experience with Fox Aircomm. They take money from clients for advertising services but fail to run campaigns properly. In many cases, the ad budget provided by business owners is not even used correctly. This creates trust issues and leads to financial losses for clients.There was a lack of clear communication,not answer our calls,and no visible improvement in campaign performance despite repeated follow-ups. Would not recommend if you're looking for reliable and result-driven marketing support.",

    },
    {
      id: 3,
      name: "jyoti gold palace",
      title: "jyoti gold palace",
      rating: 5.0,
      quote: "",
      truncatedQuote: "I have been using Fox Aircomm Pvt. Ltd. for the last 7 years for SMS, RCS and Official WhatsApp marketing services. The service has been reliable and the team has been supportive whenever we needed assistance. Their messaging solutions are useful for business promotions, customer communication and marketing campaigns. I appreciate their consistent support and service over the years. Recommended for businesses looking for SMS, RCS and WhatsApp marketing solutions.",

    },
    {
      id: 4,
      name: "Whitecare Diagnostic",
      title: "Whitecare Diagnostic",
      rating: 5.0,
      quote: "",
      truncatedQuote: "I have been using Facebook and Instagram advertising, WhatsApp official marketing, bulk SMS, and RCS SMS services for the past 9 years. My experience with Foxair Comm Pvt. Ltd. has been excellent. They provide reliable, result-oriented, and professional services. Their team is supportive, and their marketing solutions have helped improve my business reach and customer engagement. I highly recommend Foxair Comm Pvt. Ltd. for digital marketing and messaging services.",

    },
    {
      id: 5,
      name: "Bhushan Lad",
      title: "Resha Interior",
      rating: 5.0,
      quote: "Fox Aircomm  Private Limited is truly an outstanding social media agency! Their expertise in digital marketing and strategic ad campaigns has significantly boosted our business visibility and customer engagement. From creative content to precise targeting, their team ensures maximum ROI. Their dedication, professionalism, and data-driven approach make them one of the best in the industry. Highly recommended for anyone looking to scale their business through social media marketing!",
      truncatedQuote: "Fox Aircomm  Private Limited is truly an outstanding social media agency! Their expertise in digital marketing and strategic ad campaigns...",

    },
    {
      id: 6,
      name: "Ram Vishwakarma",
      title: "",
      rating: 5.0,
      quote: "Good Digital marketing company with experienced skilled people. Professional attidute and good service provider.",
      truncatedQuote: "Fox Aircomm  Private Limited is truly an outstanding social media agency! Their expertise in digital marketing and strategic ad campaigns...",

    },
    {
      id: 7,
      name: "Tejas Kansara",
      title: "",
      rating: 5.0,
      quote: "I have been using Fox Aircomm 's WhatsApp services and data extractor software for the past 3 years, and my experience has been very good. The platform is reliable, easy to use, and helps streamline communication efficiently. Customer support is also responsive and helpful whenever needed. Overall, it's a great solution for businesses looking to manage WhatsApp communication and data effectively.",
      truncatedQuote: "Fox Aircomm  Private Limited is truly an outstanding social media agency! Their expertise in digital marketing and strategic ad campaigns...",

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
        className={`w-full h-[330px] bg-white shadow-xl rounded-2xl text-center flex flex-col items-center justify-between transition-all duration-300 group ${isActive
          ? 'scale-100 opacity-100 shadow-2xl border-2 border-indigo-100 bg-gradient-to-br from-blue-50 to-purple-50 p-6 pb-10 md:p-8 md:pb-12'
          : 'scale-90 opacity-70 shadow-lg border border-gray-100 bg-gradient-to-br from-gray-50 to-gray-100 p-5 pb-10 md:p-6 md:pb-12 hover:bg-gradient-to-br hover:from-orange-50 hover:to-red-50'
          }`}
      >
        <div className='flex flex-col items-center h-full justify-between'>
          <div className="flex flex-col items-center">
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
    <>
      <Helmet>
        <title>Digital Marketing Agency in Pune and PCMC | Fox Aircomm </title>
        <meta
          name="description"
          content="Fox Aircomm  is a digital marketing agency in Pune and PCMC offering SEO, Google Ads, social media marketing, and web design to grow your business."
        />
      </Helmet>

      <EnquiryPopup />

      <div className="w-full mx-auto">
        <div className="bg-[#ff62001f]">
          <Herosection />
        </div>

        {/* Who We Are Section */}

        <div className="page-container py-10 md:py-16">
          {/* Heading */}
          <motion.div
            className="text-center mb-14"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
          >
            <h2 className="mb-3 text-3xl md:text-4xl font-bold tracking-tight theme-text-primary">
              Who We Are: A Digital Growth Partner for Pune Businesses
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-orange-500 to-red-500" />

          </motion.div>

          {/* Trust Cards */}
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left - Narrative */}
              <motion.div
                variants={stagger}
                initial={reduceMotion ? false : "hidden"}
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
              >
                <motion.h3
                  variants={rise}
                  className="text-2xl md:text-3xl font-bold theme-text-primary mb-6 leading-snug border-l-4 border-orange-500 pl-4"
                >
                  Full-fledged digital marketing, built around your business goals
                </motion.h3>

                <motion.p variants={rise} className="theme-text-secondary leading-relaxed mb-5">
                  Fox Aircomm  Pvt. Ltd. is a full-fledged digital marketing agency in Pune
                  helping businesses build stronger online visibility, attract
                  qualified leads, and achieve sustainable growth. Our team combines
                  SEO, paid advertising, social media, web development, creative
                  services, CRM, and performance marketing to create connected
                  digital growth strategies.
                </motion.p>

                <motion.p variants={rise} className="theme-text-secondary leading-relaxed mb-5">
                  From local businesses and service providers to B2B companies and
                  growing brands, we focus on practical strategies that connect
                  marketing activity with measurable business outcomes.
                </motion.p>

                <motion.div variants={rise}>
                  <motion.a
                    href="/about"
                    whileHover={reduceMotion ? undefined : { y: -2 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                    className="group relative mt-5 inline-flex items-center gap-2 overflow-hidden rounded-xl px-8 py-3.5 font-semibold text-white cursor-pointer
                       bg-gradient-to-r from-orange-500 to-red-500 shadow-lg shadow-orange-500/30
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
                  >
                    {/* shine sweep on hover */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/30 opacity-0 transition-all duration-700 group-hover:left-[130%] group-hover:opacity-100 motion-reduce:hidden"
                    />
                    <span className="relative">Know More</span>
                    <ArrowRight
                      className="relative h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Right - Capability Highlights */}
              <div className="theme-card p-6 md:p-8 rounded-2xl border border-orange-500/20 shadow-xl">
                <motion.ul
                  className="grid sm:grid-cols-2 gap-4"
                  variants={stagger}
                  initial={reduceMotion ? false : "hidden"}
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                >
                  {capabilities.map(({ icon: Icon, title, text }) => (
                    <motion.li
                      key={title}
                      variants={rise}
                      whileHover={reduceMotion ? undefined : { y: -4 }}
                      className="group flex items-start gap-4 rounded-xl border border-transparent p-4 transition-all duration-300
                         hover:border-orange-500/30 hover:bg-orange-500/5 hover:shadow-md"
                    >
                      <div className="w-11 h-11 shrink-0 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-md shadow-orange-500/25 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="font-semibold theme-text-primary text-sm mb-1">{title}</h4>
                        <p className="theme-text-secondary text-sm leading-relaxed">{text}</p>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </div>
        </div>

        {/* Value Card Section */}
        <div className="page-container pt-2 pb-16">
          <div className="rounded-3xl w-full max-w-7xl mx-auto bg-gradient-to-r from-white via-orange-50 to-yellow-50 flex flex-col md:flex-row items-center justify-between py-8 px-6 md:px-12 shadow-lg  border border-orange-100/50">
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
                Full-Service
              </div>
              <div className="uppercase tracking-widest text-xs md:text-sm text-gray-500 font-semibold">
                Digital Marketing Solutions
              </div>
            </div>
            <div className="flex-1 text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                Performance
              </div>
              <div className="uppercase tracking-widest text-xs md:text-sm text-gray-500 font-semibold">
                Focused Strategies
              </div>
            </div>
          </div>
        </div>

        <section
          aria-labelledby="trust-heading"
          className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-16 md:py-24 px-6"
        >
          {/* Soft drifting glow */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 top-0 h-[380px] w-[380px] rounded-full bg-orange-100/70 blur-3xl"
            animate={reduceMotion ? undefined : { x: [0, -40, 0], y: [0, 30, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative max-w-6xl mx-auto">
            {/* Heading */}
            <motion.div
              className="text-center max-w-2xl mx-auto mb-12 md:mb-14"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease }}
            >
              <h2
                id="trust-heading"
                className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
              >
                Why Pune Businesses Trust{" "}
                <span className="text-orange-500">Fox Aircomm </span>
              </h2>
              <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-orange-500 to-red-500" />
              <p className="mt-5 text-slate-600 leading-relaxed">
                Six reasons businesses across Pune and PCMC choose us as their digital
                growth partner.
              </p>
            </motion.div>

            {/* Trust Cards Grid */}
            <motion.ul
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
              variants={stagger}
              initial={reduceMotion ? false : "hidden"}
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              {TRUST_BENEFITS.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={item.title}
                    variants={rise}
                    whileHover={reduceMotion ? undefined : { y: -6 }}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/10"
                  >
                    {/* Accent bar grows across the top on hover */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-orange-500 to-red-500 transition-transform duration-500 group-hover:scale-x-100"
                    />

                    {/* Large faint icon watermark */}
                    <Icon
                      aria-hidden="true"
                      className="absolute -bottom-6 -right-6 h-32 w-32 text-orange-500 opacity-[0.05] transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:opacity-10"
                      strokeWidth={1.5}
                    />

                    <div className="relative">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-red-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange-500/30">
                        <Icon className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
                      </div>

                      <h3 className="mt-5 text-lg font-semibold leading-snug text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {item.body}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        </section>

        {/* Services Section (redesigned) */}
        <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-white to-orange-50 px-6 py-20">
          {/* soft background blobs */}
          <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            {/* Heading */}
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-600 shadow-sm">
                <BarChart3 className="h-3.5 w-3.5" aria-hidden="true" />
                What we do
              </span>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Our Digital Marketing Services for{" "}
                <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  Business Growth
                </span>
              </h2>
              <p className="text-base text-slate-600 sm:text-lg">
                From getting found to getting customers: everything you need to
                grow online, under one roof.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {SERVICES.map((service, i) => (
                <ServiceCard key={service.title} service={service} index={i} />
              ))}
            </div>
          </div>
        </section>




        <section className="foxair-cta mt-20">
          <style>{`
        .foxair-cta {
          padding: 0 1.5rem 6rem;
          font-family: "Work Sans", -apple-system, sans-serif;
        }

        .foxair-cta__inner {
          max-width: 1120px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          background: #0227a1;
          padding: 3rem 2.75rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2.5rem;
        }

        .foxair-cta__glow-a {
          position: absolute;
          top: -60px;
          right: -60px;
          width: 260px;
          height: 260px;
          background: radial-gradient(circle, rgba(249,115,22,0.35) 0%, rgba(249,115,22,0) 70%);
          pointer-events: none;
        }

        .foxair-cta__glow-b {
          position: absolute;
          bottom: -80px;
          left: -40px;
          width: 240px;
          height: 240px;
          background: radial-gradient(circle, rgba(99,102,241,0.3) 0%, rgba(99,102,241,0) 70%);
          pointer-events: none;
        }

        .foxair-cta__content {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          max-width: 640px;
        }

        .foxair-cta__icon {
          flex-shrink: 0;
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(249, 115, 22, 0.18);
          border: 1px solid rgba(249, 115, 22, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .foxair-cta__icon svg {
          width: 26px;
          height: 26px;
          color: #fb923c;
        }

        .foxair-cta__heading {
          font-family: "Fraunces", Georgia, serif;
          font-weight: 600;
          font-size: clamp(1.5rem, 2.6vw, 2rem);
          line-height: 1.25;
          color: #ffffff;
          margin: 0 0 0.75rem;
          letter-spacing: -0.01em;
        }

        .foxair-cta__text {
          font-size: 0.98rem;
          line-height: 1.65;
          color: #cbd5e1;
          margin: 0;
        }

        .foxair-cta__actions {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex-shrink: 0;
        }

        .foxair-cta__btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          white-space: nowrap;
          padding: 0.85rem 1.6rem;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.94rem;
          text-decoration: none;
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
          border: 1px solid transparent;
        }

        .foxair-cta__btn:hover {
          transform: translateY(-2px);
        }

        .foxair-cta__btn--primary {
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: #ffffff;
          box-shadow: 0 10px 24px -10px rgba(249, 115, 22, 0.6);
        }

        .foxair-cta__btn--secondary {
          background: transparent;
          border-color: rgba(255, 255, 255, 0.3);
          color: #ffffff;
        }

        .foxair-cta__btn--secondary:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.5);
        }

        @media (max-width: 860px) {
          .foxair-cta__inner {
            flex-direction: column;
            align-items: stretch;
            text-align: left;
            padding: 2.5rem 1.75rem;
          }
          .foxair-cta__actions {
            flex-direction: row;
            flex-wrap: wrap;
          }
        }

        @media (max-width: 480px) {
          .foxair-cta {
            padding: 0 1.25rem 4.5rem;
          }
          .foxair-cta__actions {
            flex-direction: column;
          }
          .foxair-cta__btn {
            width: 100%;
          }
        }
      `}</style>

          <div className="foxair-cta__inner ">
            <div className="foxair-cta__glow-a" />
            <div className="foxair-cta__glow-b" />

            <div className="foxair-cta__content">
              <div className="foxair-cta__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M14.5 3.5c2.5 1 5 3.5 6 6-1.5 4-4.5 7.5-7.5 9l-3.5-3.5c1.5-3 5-6 7.5-7.5-2.5.5-5.5 2-8 4l-3-1c1.5-2.5 3.5-4.5 6-5.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.5 14.5 6 16l-1.5 3.5L8 18l1.5-3.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="15" cy="9" r="1.4" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <div>
                <h2 className="foxair-cta__heading">
                  Ready to Turn Your Digital Challenges into Growth?
                </h2>
                <p className="foxair-cta__text">
                  Your business does not need more random marketing activities. It
                  needs a digital strategy connected to clear business goals. From
                  improving search visibility to generating qualified leads and
                  strengthening customer engagement, the right combination of digital
                  channels can create a stronger path to growth. Let's discuss your
                  business goals and identify the digital marketing opportunities that
                  can make the biggest difference.
                </p>
              </div>
            </div>

            <div className="foxair-cta__actions">
              <a href="tel:8879864151" className="foxair-cta__btn foxair-cta__btn--primary">
                Book a Strategy Call
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#contact" className="foxair-cta__btn foxair-cta__btn--secondary">
                Talk to Our Team
              </a>
            </div>
          </div>
        </section>

        {/* Challenges + Industries + Contact */}
        <section id="contact" className="relative py-6 md:py-4 bg-gray-50 overflow-hidden">
          {/* soft background glow */}
          <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-orange-400/10 blur-3xl" />

          <div className="page-container relative">
            <ChallengesSection />

            {/* ───────── Industries ───────── */}
            <div className="pt-6 md:pt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
              >

                <h2 className="text-3xl md:text-5xl font-bold theme-text-primary leading-tight mb-4">
                  Which industries does <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Fox Aircomm </span> serve?
                </h2>
                <p className="theme-text-secondary text-base md:text-lg">
                  Tailored digital marketing for businesses that win on local trust and qualified leads.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
                {industries.map(({ title, icon: Icon, accent, text }, i) => (
                  <motion.article
                    key={title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                    className="group theme-card relative p-6 md:p-7 rounded-2xl border theme-border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {/* accent bar reveals on hover */}
                    <span className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent} scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`} />

                    <div className="flex items-start justify-between mb-5">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
                        <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                      </div>
                      <span className="text-sm font-mono theme-text-secondary opacity-50">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold theme-text-primary mb-2">{title}</h3>
                    <p className="theme-text-secondary text-sm leading-relaxed">{text}</p>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* ───────── Image + Contact ───────── */}
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-stretch max-w-7xl mx-auto mt-20 md:mt-28">
              {/* Image panel */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 relative min-h-[360px] lg:min-h-[560px] rounded-3xl overflow-hidden shadow-xl"
              >
                <img
                  src={processImg}
                  alt="Fox Aircomm  digital marketing process"
                  className="absolute inset-0 w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-transparent" />

                <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Strategy first. Results next.</h3>
                  <p className="text-white/80 text-sm mb-5">
                    A clear, measurable process from audit to growth, built around your business goals.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-orange-300" /> Reply within 24 hours</li>
                    <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-orange-300" /> Free initial consultation</li>
                  </ul>
                </div>
              </motion.div>

              {/* Form panel */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3 theme-card p-6 md:p-10 rounded-3xl border theme-border shadow-xl"
              >
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold theme-text-primary mb-2">
                    Let's grow your business
                  </h3>
                  <p className="theme-text-secondary text-sm md:text-base">
                    Tell us a bit about you and we'll get back within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium theme-text-primary mb-1.5">
                        Full name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="fullName" type="text" name="fullName" autoComplete="name"
                        value={formData.fullName} onChange={handleInputChange}
                        placeholder="Jane Doe"
                        aria-invalid={!!errors.fullName}
                        className={`${inputBase} ${fieldBorder(errors.fullName)}`}
                      />
                      {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium theme-text-primary mb-1.5">
                        Email address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email" type="email" name="email" autoComplete="email"
                        value={formData.email} onChange={handleInputChange}
                        placeholder="you@company.com"
                        aria-invalid={!!errors.email}
                        className={`${inputBase} ${fieldBorder(errors.email)}`}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="businessName" className="block text-sm font-medium theme-text-primary mb-1.5">
                        Business name
                      </label>
                      <input
                        id="businessName" type="text" name="businessName" autoComplete="organization"
                        value={formData.businessName} onChange={handleInputChange}
                        placeholder="Your company"
                        className={`${inputBase} theme-border`}
                      />
                    </div>

                    <div>
                      <label htmlFor="contactNumber" className="block text-sm font-medium theme-text-primary mb-1.5">
                        Contact number
                      </label>
                      <input
                        id="contactNumber" type="tel" name="contactNumber" autoComplete="tel"
                        value={formData.contactNumber} onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className={`${inputBase} theme-border`}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="typeOfService" className="block text-sm font-medium theme-text-primary mb-1.5">
                      Service you're interested in
                    </label>
                    <select
                      id="typeOfService" name="typeOfService"
                      value={formData.typeOfService} onChange={handleInputChange}
                      className={`${inputBase} theme-border`}
                    >
                      {['Social Media Marketing', 'Web Development', 'Mobile App Development', 'SEO Services',
                        'Content Marketing', 'Google Adwords', 'Other'].map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                    </select>
                  </div>

                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox" name="consent"
                        checked={formData.consent} onChange={handleInputChange}
                        className={`mt-1 w-4 h-4 rounded border accent-blue-600 ${fieldBorder(errors.consent)}`}
                      />
                      <span className="text-xs md:text-sm theme-text-secondary leading-relaxed">
                        I authorize company representatives to Call, SMS, RCS, Email or WhatsApp me about its
                        products and offers. This consent overrides any registration for DNC/NDNC.
                      </span>
                    </label>
                    {errors.consent && <p className="text-red-500 text-sm mt-1">{errors.consent}</p>}
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="group w-full inline-flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/20 hover:from-blue-700 hover:to-indigo-700 transition-all"
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Parallax Effect / Comparison Section */}
        <section
          aria-labelledby="advantages-heading"
          className="relative overflow-hidden bg-gradient-to-b from-white to-orange-50/60 px-6 py-16 md:py-24"
        >
          {/* soft background glows */}
          <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />

          <div className="page-container relative">
            <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* ───────── Left: advantages ───────── */}
              <motion.div
                variants={stagger}
                initial={reduceMotion ? false : "hidden"}
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
              >
                <motion.span
                  variants={rise}
                  className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-600 shadow-sm"
                >
                  Why choose us
                </motion.span>

                <motion.h2
                  id="advantages-heading"
                  variants={rise}
                  className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-4xl"
                >
                  FoxAircomm  Advantages:{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Your Competitive Edge
                  </span>
                </motion.h2>

                <motion.p variants={rise} className="mb-8 max-w-xl text-base leading-relaxed text-slate-600">
                  Explore the unique benefits that set FoxAircomm  apart, giving you the
                  competitive edge in your digital journey.
                </motion.p>

                <ul className="space-y-3">
                  {ADVANTAGES.map(({ icon: Icon, title, text }) => (
                    <motion.li
                      key={title}
                      variants={rise}
                      whileHover={reduceMotion ? undefined : { x: 4 }}
                      className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-100 sm:p-5"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-orange-400 to-red-500 opacity-70 transition-all duration-300 group-hover:w-1.5 group-hover:opacity-100"
                      />
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-md shadow-orange-500/25 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base font-bold leading-snug text-slate-900">{title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">{text}</p>
                      </div>
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-500" aria-hidden="true" />
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* ───────── Right: growth chart ───────── */}
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease }}
                className="relative"
              >
                <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-orange-400/15 to-indigo-500/15 blur-2xl" />

                <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8">
                  {/* header + legend */}
                  <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Client Growth Performance</h3>
                      <p className="mt-1 text-sm text-slate-500">
                        Growth vs. industry average (max 90%)
                      </p>
                    </div>
                    <ul className="flex items-center gap-4 text-xs font-medium text-slate-600">
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-5 rounded-full bg-indigo-500" /> Fox Aircomm  clients
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-0 w-5 border-t-2 border-dashed border-slate-400" /> Industry average
                      </li>
                    </ul>
                  </div>

                  <svg
                    viewBox="0 0 440 260"
                    className="h-auto w-full"
                    role="img"
                    aria-label="Line chart showing Fox Aircomm  client growth rising faster than the industry average between 2019 and 2025"
                  >
                    <defs>
                      <linearGradient id="foxLine" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#f97316" />
                      </linearGradient>
                      <linearGradient id="foxArea" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.22" />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* grid */}
                    {[220, 160, 100, 40].map((y) => (
                      <line key={y} x1="60" y1={y} x2="400" y2={y} stroke="#e2e8f0" strokeWidth={y === 220 ? 2 : 1} strokeDasharray={y === 220 ? "0" : "3 4"} />
                    ))}

                    {/* y labels */}
                    {[["0%", 224], ["30%", 164], ["60%", 104], ["90%", 44]].map(([l, y]) => (
                      <text key={l} x="48" y={y} textAnchor="end" fontSize="11" fill="#94a3b8">{l}</text>
                    ))}

                    {/* x labels */}
                    {[["2019", 60], ["2021", 160], ["2023", 260], ["2025", 360]].map(([l, x]) => (
                      <text key={l} x={x} y="244" textAnchor="middle" fontSize="11" fill="#94a3b8">{l}</text>
                    ))}

                    {/* industry average */}
                    <motion.polyline
                      points="60,200 160,185 260,175 360,170 400,165"
                      fill="none"
                      stroke="#94a3b8"
                      strokeWidth="2.5"
                      strokeDasharray="6 6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={reduceMotion ? false : { opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />

                    {/* fox area fill */}
                    <motion.path
                      d="M60,200 L160,160 L260,120 L360,85 L400,60 L400,220 L60,220 Z"
                      fill="url(#foxArea)"
                      initial={reduceMotion ? false : { opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 1 }}
                    />

                    {/* fox line (draws in) */}
                    <motion.polyline
                      points="60,200 160,160 260,120 360,85 400,60"
                      fill="none"
                      stroke="url(#foxLine)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={reduceMotion ? false : { pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease, delay: 0.3 }}
                    />

                    {/* data points */}
                    {[[60, 200], [160, 160], [260, 120], [360, 85]].map(([cx, cy]) => (
                      <circle key={cx} cx={cx} cy={cy} r="4" fill="#fff" stroke="#6366f1" strokeWidth="2.5" />
                    ))}

                    {/* end badge */}
                    <circle cx="400" cy="60" r="16" fill="#f97316" opacity="0.18" />
                    <circle cx="400" cy="60" r="11" fill="#f97316" />
                    <text x="400" y="64.5" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">F</text>
                  </svg>

                  <p className="mt-3 text-[11px] text-slate-400">
                    Illustrative chart. Replace the plotted values with your own verified client data.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="min-h-screen flex flex-col justify-center items-center py-10 theme-bg-primary overflow-hidden relative">
          {/* Title */}
          <h2 className="text-3xl font-bold mb-16">
            What <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent">Customers</span> Say
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
          <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-gradient-to-l from-orange-500/30 to-pink-500/30   rounded-full blur-3xl opacity-60 -z-10"></div>

        </section>

        {/* Final CTA */}


        {/* Frequently Asked Questions */}
        <section className="foxair-faq">
          <style>{`
        .foxair-faq {
          --ink: #1f2937;
          --paper: #f8fafc;
          --orange: #f97316;
          --blue: #2563eb;
          --line: #e2e8f0;
          --muted: #64748b;
          background: var(--paper);
          color: var(--ink);
          padding: 5.5rem 1.5rem 6.5rem;
          font-family: "Work Sans", -apple-system, sans-serif;
        }

        .foxair-faq__inner {
          max-width: 1120px;
          margin: 0 auto;
        }

        .foxair-faq__header {
          max-width: 640px;
          margin-bottom: 2.75rem;
        }

        .foxair-faq__eyebrow {
          display: inline-block;
          color: var(--orange);
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
        }

        .foxair-faq__heading {
          font-family: "Fraunces", Georgia, serif;
          font-weight: 600;
          font-size: clamp(1.7rem, 3vw, 2.2rem);
          line-height: 1.15;
          margin: 0 0 0.6rem;
          letter-spacing: -0.01em;
        }

        .foxair-faq__intro {
          font-size: 0.98rem;
          line-height: 1.6;
          color: var(--muted);
          max-width: 60ch;
        }

        .foxair-faq__list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.9rem 1.25rem;
        }

        .foxair-faq__item {
          background: #ffffff;
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 0.4rem 1.1rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .foxair-faq__item[open] {
          border-color: #cbd5e1;
          box-shadow: 0 6px 18px -10px rgba(15, 23, 42, 0.15);
        }

        .foxair-faq__question {
          cursor: pointer;
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.95rem 0;
          font-weight: 500;
          font-size: 0.94rem;
          line-height: 1.4;
          color: var(--ink);
        }

        .foxair-faq__question::-webkit-details-marker {
          display: none;
        }

        .foxair-faq__icon-box {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          border-radius: 7px;
          border: 1px solid var(--line);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease, border-color 0.2s ease, transform 0.25s ease;
        }

        .foxair-faq__icon {
          width: 11px;
          height: 11px;
          color: var(--muted);
          transition: transform 0.25s ease;
        }

        .foxair-faq__item[open] .foxair-faq__icon-box {
          background: var(--orange);
          border-color: var(--orange);
        }

        .foxair-faq__item[open] .foxair-faq__icon {
          color: #ffffff;
          transform: rotate(45deg);
        }

        .foxair-faq__answer {
          margin: -0.3rem 0 1.1rem;
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--muted);
        }

        .foxair-faq__answer p {
          margin: 0 0 0.6rem;
        }

        .foxair-faq__answer p:last-child {
          margin-bottom: 0;
        }

        .foxair-faq__answer ul {
          margin: 0;
          padding-left: 1.1rem;
          list-style: disc;
        }

        .foxair-faq__answer li {
          margin-bottom: 0.5rem;
        }

        .foxair-faq__answer li:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 780px) {
          .foxair-faq__list {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .foxair-faq {
            padding: 4rem 1.25rem 4.5rem;
          }
        }
      `}</style>

          <div className="foxair-faq__inner">
            <div className="foxair-faq__header">
              <h2 className="foxair-faq__heading">Frequently Asked Questions</h2>
              <p className="foxair-faq__intro">
                Quick answers to common questions about our services, process, and
                more.
              </p>
            </div>

            <div className="foxair-faq__list">
              <details className="foxair-faq__item">
                <summary className="foxair-faq__question">
                  Why should I choose a digital marketing agency in Pune?
                  <span className="foxair-faq__icon-box">
                    <svg className="foxair-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <div className="foxair-faq__answer">
                  <p>
                    A Pune-based agency can better understand the local market, customer
                    behaviour, the competitive landscape, and location-based search
                    opportunities while supporting businesses operating in Pune and
                    nearby areas.
                  </p>
                </div>
              </details>

              <details className="foxair-faq__item">
                <summary className="foxair-faq__question">
                  Can digital marketing help generate qualified leads?
                  <span className="foxair-faq__icon-box">
                    <svg className="foxair-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <div className="foxair-faq__answer">
                  <p>
                    Yes. Digital marketing can generate qualified leads by targeting
                    users based on search intent, location, interests, demographics,
                    and other relevant signals through channels such as SEO, Google
                    Ads, and social media.
                  </p>
                </div>
              </details>

              <details className="foxair-faq__item">
                <summary className="foxair-faq__question">
                  How can I start digital marketing with Fox Aircomm ?
                  <span className="foxair-faq__icon-box">
                    <svg className="foxair-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <div className="foxair-faq__answer">
                  <p>
                    Start by defining your main goal—driving sales, getting calls, or
                    raising brand awareness. Contact Fox Aircomm  for a consultation and
                    digital audit, and we'll craft a custom strategy using SEO, Google
                    Ads, and social media to grow your business.
                  </p>
                </div>
              </details>

              <details className="foxair-faq__item">
                <summary className="foxair-faq__question">
                  How long does SEO take to show results?
                  <span className="foxair-faq__icon-box">
                    <svg className="foxair-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <div className="foxair-faq__answer">
                  <p>
                    SEO results vary depending on competition, website condition,
                    authority, content quality, technical factors, and search demand.
                    Sustainable SEO growth generally requires consistent optimisation
                    and monitoring rather than a one-time activity.
                  </p>
                </div>
              </details>

              <details className="foxair-faq__item">
                <summary className="foxair-faq__question">
                  Do you provide Google Ads management?
                  <span className="foxair-faq__icon-box">
                    <svg className="foxair-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <div className="foxair-faq__answer">
                  <p>
                    Yes. Google Ads management can include campaign planning, keyword
                    targeting, ad creation, audience targeting, conversion tracking,
                    budget management, testing, and ongoing optimisation.
                  </p>
                </div>
              </details>

              <details className="foxair-faq__item">
                <summary className="foxair-faq__question">
                  How much does digital marketing cost in Pune?
                  <span className="foxair-faq__icon-box">
                    <svg className="foxair-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <div className="foxair-faq__answer">
                  <ul>
                    <li>The total cost depends on your industry and what you're trying to achieve.</li>
                    <li>We offer customised packages designed to fit your budget.</li>
                    <li>Instead of focusing on the price, we focus on the Return on Investment (ROI)—what you get back for what you spend.</li>
                  </ul>
                </div>
              </details>

              <details className="foxair-faq__item">
                <summary className="foxair-faq__question">
                  What is Pay-Per-Click (PPC) marketing?
                  <span className="foxair-faq__icon-box">
                    <svg className="foxair-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <div className="foxair-faq__answer">
                  <ul>
                    <li>PPC is an advertising model where you only pay when someone clicks on your ad.</li>
                    <li>It's a great way to get immediate leads from platforms like Google.</li>
                    <li>For example, we helped a real estate client get 150 qualified calls in just 30 days using PPC.</li>
                  </ul>
                </div>
              </details>

              <details className="foxair-faq__item">
                <summary className="foxair-faq__question">
                  Is it worth hiring a digital marketing agency?
                  <span className="foxair-faq__icon-box">
                    <svg className="foxair-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <div className="foxair-faq__answer">
                  <ul>
                    <li>Yes. Trying to do it on your own can lead to wasted money and no results.</li>
                    <li>An agency brings experience and the right tools to get the work done quickly and effectively.</li>
                    <li>At Fox Aircomm , you don't just get a service; you get a partner dedicated to your growth. That's why we're often known as the best digital marketing company in Pune—we focus on real results, not just experiments.</li>
                  </ul>
                </div>
              </details>

              <details className="foxair-faq__item">
                <summary className="foxair-faq__question">
                  What is SEO?
                  <span className="foxair-faq__icon-box">
                    <svg className="foxair-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <div className="foxair-faq__answer">
                  <ul>
                    <li>SEO is the process of optimizing your website to rank high on Google organically.</li>
                    <li>For example, if someone searches for "best pathology lab in Dhayari," we make sure your lab is the first one they see.</li>
                    <li>Done right, SEO will give free leads 24/7 without you ever having to pay for ads.</li>
                  </ul>
                </div>
              </details>

              <details className="foxair-faq__item">
                <summary className="foxair-faq__question">
                  What are the types of digital marketing?
                  <span className="foxair-faq__icon-box">
                    <svg className="foxair-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <div className="foxair-faq__answer">
                  <ul>
                    <li>There are seven main types of digital marketing, including SEO, PPC, Social Media, Content Marketing, Affiliate Marketing, and Influencer Marketing.</li>
                    <li>At Fox Aircomm , we don't just throw all of them at you.</li>
                    <li>We analyse which ones your business actually needs to succeed in the Pune market and focus on those.</li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default Home;