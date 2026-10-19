import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  Megaphone,
  Share2,
  Code2,
  BarChart3,
  Mail,
  Phone,
  ArrowRight,
  TrendingUp,
  Users,
  CheckCircle2,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  animate,
  useInView,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Enquiry from "../Enquiry";

/* ------------------------------------------------------------------ */
/* Content - edit these to match your real numbers                     */
/* ------------------------------------------------------------------ */

// TODO: replace with your real figures
const STATS = [
  { value: 20, suffix: "+", label: "Services" },
  { value: 100, suffix: "+", label: "Projects delivered" },
  { value: 5, suffix: "+", label: "Years of experience" },
];

const ROTATING_WORDS = ["Leads", "Sales", "Revenue", "Growth"];

const SERVICES = [
  { icon: Search, label: "SEO" },
  { icon: Megaphone, label: "Google Ads" },
  { icon: Share2, label: "Social Media Marketing" },
  { icon: Code2, label: "Web Development" },
  { icon: BarChart3, label: "Performance Marketing" },
  { icon: Mail, label: "Email Marketing" },
];

// Illustrative dashboard data (sample only, not real client results)
const KPIS = [
  { label: "Qualified leads", value: 1284, prefix: "", suffix: "", change: "+38%" },
  { label: "Organic visits", value: 48, prefix: "", suffix: "K", change: "+62%" },
  { label: "Return on ad spend", value: 4.6, prefix: "", suffix: "x", change: "+21%", decimals: 1 },
];

const CHANNELS = [
  { label: "SEO", pct: 82 },
  { label: "Google Ads", pct: 68 },
  { label: "Social media", pct: 74 },
];

const linePath =
  "M0 150 C40 146 60 138 90 128 C120 118 140 120 170 100 C200 80 225 84 255 62 C285 40 310 34 340 14";
const areaPath = `${linePath} L340 180 L0 180 Z`;

const ANIMATED_GRADIENT =
  "linear-gradient(110deg, #f97316, #dc2626)";

/* ------------------------------------------------------------------ */
/* Small helpers                                                       */
/* ------------------------------------------------------------------ */

const CountUp = ({ to, decimals = 0, prefix = "", suffix = "", duration = 1.8 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? to : 0);

  useEffect(() => {
    if (!inView || reduceMotion) {
      if (reduceMotion) setDisplay(to);
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, to, duration, reduceMotion]);

  const formatted =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.round(display).toLocaleString("en-IN");

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};

const RotatingWord = ({ words }) => {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2400);
    return () => clearInterval(id);
  }, [words.length, reduceMotion]);

  return (
    <>
      <span className="sr-only">{words.join(", ")}</span>
      <span
        aria-hidden="true"
        className="relative inline-flex h-[1.15em] overflow-hidden align-bottom"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={words[index]}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: ANIMATED_GRADIENT, backgroundSize: "100% 100%" }}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </>
  );
};

/* ------------------------------------------------------------------ */
/* Animated background                                                 */
/* ------------------------------------------------------------------ */

const BackgroundFX = () => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
    {/* Single soft brand glow, top right */}
    <div
      className="absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(249,115,22,0.10) 0%, rgba(249,115,22,0) 70%)",
      }}
    />
    {/* Faint grid that fades out */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
        maskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, #000 30%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 70% at 50% 30%, #000 30%, transparent 100%)",
      }}
    />
  </div>
);

/* ------------------------------------------------------------------ */
/* Dashboard visual with mouse tilt + animated gradient border         */
/* ------------------------------------------------------------------ */

const DashboardCard = () => {
  const reduceMotion = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 18 });
  const sy = useSpring(my, { stiffness: 120, damping: 18 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-7, 7]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [6, -6]);

  const onMove = (e) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      className="relative mx-auto w-full max-w-xl"
      style={{ perspective: 1200 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* Floating chip: new lead */}
      <motion.div
        className="absolute -right-2 -top-5 z-20 hidden items-center gap-3 rounded-xl border border-white/60 bg-white/80 px-4 py-3 shadow-xl shadow-slate-900/10 backdrop-blur-md sm:flex"
        animate={reduceMotion ? undefined : { y: [0, -9, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <Users className="h-4 w-4" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-semibold text-slate-900">New lead received</p>
          <p className="text-xs text-slate-500">From Google Ads, just now</p>
        </div>
      </motion.div>

      {/* Floating chip: ranking */}
      <motion.div
        className="absolute -bottom-6 -left-3 z-20 hidden items-center gap-3 rounded-xl border border-white/60 bg-white/80 px-4 py-3 shadow-xl shadow-slate-900/10 backdrop-blur-md sm:flex"
        animate={reduceMotion ? undefined : { y: [0, 9, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-orange-600">
          <TrendingUp className="h-4 w-4" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-semibold text-slate-900">Keyword on page 1</p>
          <p className="text-xs text-slate-500">Organic ranking improved</p>
        </div>
      </motion.div>

      {/* Main card with rotating gradient border */}
      <motion.div
        style={reduceMotion ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
        initial={reduceMotion ? false : { opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-2xl p-[2px] shadow-xl shadow-slate-900/10"
      >
        {/* Border layer */}
        <span aria-hidden="true" className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-300 via-slate-200 to-slate-200" />

        {/* Card body */}
        <div className="relative rounded-[14px] bg-white p-5 sm:p-7">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400">Sample data</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Live
              </span>
            </div>
          </div>

          <h2 className="mt-5 text-base font-semibold text-slate-900">
            Campaign overview
          </h2>

          {/* KPI tiles */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            {KPIS.map((k, i) => (
              <motion.div
                key={k.label}
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.12, duration: 0.5 }}
                className="rounded-xl border border-slate-100 bg-slate-50 p-3"
              >
                <p className="text-[11px] leading-tight text-slate-500">{k.label}</p>
                <p className="mt-1.5 text-xl font-bold text-slate-900 sm:text-2xl">
                  <CountUp
                    to={k.value}
                    decimals={k.decimals || 0}
                    prefix={k.prefix}
                    suffix={k.suffix}
                  />
                </p>
                <p className="mt-1 text-xs font-medium text-emerald-600">{k.change}</p>
              </motion.div>
            ))}
          </div>

          {/* Chart */}
          <div className="mt-6">
            <svg
              viewBox="0 0 340 190"
              className="h-auto w-full"
              role="img"
              aria-label="Line chart showing leads rising steadily over six months"
            >
              <defs>
                <linearGradient id="leadFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="leadStroke" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="55%" stopColor="#ef4444" />
                  <stop offset="100%" stopColor="#dc2626" />
                </linearGradient>
              </defs>
              {[40, 80, 120, 160].map((y) => (
                <line key={y} x1="0" x2="340" y1={y} y2={y} stroke="#e2e8f0" strokeDasharray="3 4" />
              ))}
              <motion.path
                d={areaPath}
                fill="url(#leadFill)"
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.6 }}
              />
              <motion.path
                d={linePath}
                fill="none"
                stroke="url(#leadStroke)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={reduceMotion ? false : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.8, delay: 0.9, ease: "easeInOut" }}
              />
              <motion.g
                initial={reduceMotion ? false : { opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.6, duration: 0.4 }}
                style={{ transformOrigin: "340px 14px" }}
              >
                <circle cx="340" cy="14" r="9" fill="#dc2626" opacity="0.25">
                  {!reduceMotion && (
                    <animate attributeName="r" values="6;13;6" dur="2s" repeatCount="indefinite" />
                  )}
                </circle>
                <circle cx="340" cy="14" r="5" fill="#dc2626" stroke="#fff" strokeWidth="2" />
              </motion.g>
            </svg>
            <div className="mt-1 flex justify-between text-xs text-slate-400">
              <span>Month 1</span>
              <span>Month 3</span>
              <span>Month 6</span>
            </div>
          </div>

          {/* Channel bars */}
          <div className="mt-6 space-y-3 border-t border-slate-100 pt-5">
            {CHANNELS.map((c, i) => (
              <div key={c.label}>
                <div className="mb-1.5 flex justify-between text-xs">
                  <span className="font-medium text-slate-700">{c.label}</span>
                  <span className="text-slate-500">{c.pct}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-orange-500 to-red-500"
                    initial={reduceMotion ? false : { width: 0 }}
                    animate={{ width: `${c.pct}%` }}
                    transition={{ delay: 1.2 + i * 0.15, duration: 1.2, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const Herosection = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const reduceMotion = useReducedMotion();
  const marqueeItems = [...SERVICES, ...SERVICES];

  const buttonGradientAnim = undefined;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50"
    >
      <BackgroundFX />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 pb-20 pt-14 sm:px-6 md:pt-20 lg:grid-cols-12 lg:gap-12 lg:px-8">
        {/* Left column */}
        <motion.div
          className="lg:col-span-6"
          variants={container}
          initial={reduceMotion ? false : "hidden"}
          animate="show"
        >
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
            </span>
            Fox AirComm - Pune&apos;s growth marketing partner
          </motion.p>

          <motion.h1
            variants={item}
            id="hero-heading"
            className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-4xl lg:text-4xl"
          >
            Digital Marketing Agency in Pune for Measurable Business{" "}
            <RotatingWord words={ROTATING_WORDS} />
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-2xl font-bold text-slate-900"
          >
            Turn Your Digital Marketing Spend Into Real Business Growth
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600"
          >
            Fox AirComm helps businesses generate visibility, qualified leads, and sustainable growth through SEO, Google Ads, social media marketing, web development, and performance marketing.
          </motion.p>

          <motion.ul
            variants={item}
            className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-700"
          >
            {["Transparent reporting", "ROI-focused campaigns", "Dedicated strategist"].map((t) => (
              <li key={t} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                {t}
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <motion.a
              href="tel:8879864151"
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-orange-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
            >
              {/* animated flowing gradient */}
              <motion.span
                aria-hidden="true"
                className="absolute inset-0"
                style={{ backgroundImage: ANIMATED_GRADIENT, backgroundSize: "100% 100%" }}
                animate={buttonGradientAnim}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              {/* shine sweep on hover */}
              <span
                aria-hidden="true"
                className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/30 opacity-0 transition-all duration-700 group-hover:left-[130%] group-hover:opacity-100 motion-reduce:hidden"
              />
              <Phone className="relative h-4 w-4" aria-hidden="true" />
              <span className="relative">Book a strategy call</span>
            </motion.a>

            <motion.a
              href="/services"
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-7 py-3.5 text-base font-semibold text-slate-900 shadow-sm backdrop-blur transition-colors hover:border-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
            >
              Explore our services
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </motion.a>
          </motion.div>

          <motion.p variants={item} className="mt-5 text-sm text-slate-500">
            Prefer to write?{" "}
            <button
              type="button"
              onClick={() => setShowEnquiry(true)}
              className="font-semibold text-slate-900 underline underline-offset-4 hover:text-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
            >
              Send us an enquiry
            </button>
          </motion.p>

          {/* Stats */}
          {/* <motion.dl
            variants={item}
            className="mt-10 grid max-w-lg grid-cols-3 divide-x divide-slate-200 border-t border-slate-200 pt-6"
          >
            {STATS.map((s, i) => (
              <div key={s.label} className={i === 0 ? "pr-4" : "px-4"}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-3xl font-bold text-slate-900">
                  <CountUp to={s.value} suffix={s.suffix} />
                </dd>
                <p aria-hidden="true" className="mt-1 text-sm text-slate-500">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.dl> */}
        </motion.div>

        {/* Right column */}
        <div className="lg:col-span-6">
          <DashboardCard />
        </div>
      </div>

      {/* Services marquee */}
      <div className="relative border-y border-slate-200 bg-white/60 py-5 backdrop-blur">
        <div
          className="overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
          }}
        >
          <motion.ul
            className="flex w-max gap-4"
            animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          >
            {marqueeItems.map(({ icon: Icon, label }, i) => (
              <li
                key={`${label}-${i}`}
                aria-hidden={i >= SERVICES.length ? "true" : undefined}
                className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm"
              >
                <Icon className="h-4 w-4 text-orange-600" aria-hidden="true" />
                {label}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* Enquiry popup */}
      <Enquiry isOpen={showEnquiry} onClose={() => setShowEnquiry(false)} />
    </section>
  );
};

export default Herosection;